=head1 NAME

LedgerSMB::Setting::Sequence - Sequence per Setting Handling for LedgerSMB

=head1 SYNPOSIS

To list all sequences:

   my @sequences = LedgerSMB::Setting::Sequence->list();

To list all sequences for a single setting:

   my @sequences = LedgerSMB::Setting::Sequence->list('mysetting');

To save a sequence:

   my $sequence = LedgerSMB::Setting::Sequence->new(%$request);
   $sequence->save;

=cut

package LedgerSMB::Setting::Sequence;
use LedgerSMB::Setting;
use Carp;
use Moose;

=head1 DESCRIPTION

This module adds handling of separate invoice sequences to LedgerSMB.  The 
module is intended to be called from both pre-1.3 code as well as new code.

This module allows multiple sequences to be "attached" to a given setting. At
run time, a user may decide to use a sequence or just a setting, and increment
accordingly.

Increment substitution rules are the same as for LedgerSMB::Setting.

=head1 PROPERTIES

=head2 label

The label is the unique identifier of the sequence.

=cut

has label => (is => 'ro', isa => 'Str', required => 1);

=head2 setting_key

This is the key for the setting the sequence can replace.

=cut

has setting_key => (is => 'ro', isa => 'Str', required => 1);

=head2 prefix

Optional prefix.   Default is set in the db.

=cut

has prefix => (is => 'rw', isa => 'Str', required => 0);

=head2 sequence

Optional sequence number.  Default is set in the db.

=cut

has sequence => (is => 'rw', isa => 'Str', required => 0);

=head2 suffix

Optional suffix.  Default is set in the db.

=cut

has suffix => (is => 'rw', isa => 'Str', required => 0);

=head1 METHODS

=head2 get(label, setting_key)

Return the sequence if label is set and exists,

If label is not set but setting_key exists, returns the setting object.

If this fails, dies with an appropriate error.

=cut

sub get{
   my ($self, $label, $setting_key) = @_;

   if (defined $label){
       my ($ref) = $self->call_procedure(procname => 'sequence__get', args => [$label]);
       croak 'Sequence does not exist: ' . $label unless $ref;
       return $self->new(%$ref);
   } elsif (defined $setting_key){
       my ($ref) = $self->call_procedure(procname => 'setting_get', args => [$setting_key]);
       croak 'Setting does not exist: ' . $setting_key unless $ref;
       return LedgerSMB::Setting->new($ref);
   } else {
     croak 'Neither label nor setting_key defined';
   }
}

=head2 list(setting_key)

Lists all sequences applicable.  If setting_key is defined, only sequences 
attached to the setting are applicable.

=cut

sub list{
    my ($self, $setting_key) = $_;
    my @setting_list;
    if (defined $setting_key){
       @setting_list = $self->call_procedure(
              procname => 'sequence__list_by_key', args => [$setting_key]
       );
    } else {
       @setting_list = $self->call_procedure(procname => 'sequence__list');
    }
    for my $s (@setting_list){
       $s = $self->new(%$s);
    }
    return @setting_list;
}

=head2 save()

Saves the sequence.

=cut

sub save {
    my ($self) = @_;
    my ($ref) = $self->exec_method({funcname => 'sequence__save'});
    return $self->new(%$ref);
}

=head2 increment(label, vars)

Like the increment method of LedgerSMB::Setting, but works on the sequence.

label is optional and if set to a string will be used as the sequence to 
increment,

=cut

sub increment {
    my ($self, $val1, $val2);
    my $label;
    my $vars;
    if (ref $val1 eq ref {}){
       $vars = $val1;
       $label = $self->label;
    } else {
       $label = $val1;
       $vars = $val2;
    }
    my ($ref) = $self->call_procedure(procname => 'sequence__increment',
                                          args => [$label]);
    
    my ($value) = values %$ref;
    return LedgerSMB::Setting::_increment_process($value, $vars);

}

=head2 delete(label)

Deletes a sequence.

=cut

sub delete {
    my ($self, $label) = @_;
    return $self->call_procedure(procname => 'sequence__delete', 
                                     args => [$label]);
}

=head1 COPYRIGHT

COPYRIGHT(C) 2013 The LedgerSMB Core Team.  This file may be used in accordance
with the GNU General Public License version 2 or at your option any later 
version.  Please see the enclosed LICENSE.TXT for details.

=cut

__PACKAGE__->meta->make_immutable;