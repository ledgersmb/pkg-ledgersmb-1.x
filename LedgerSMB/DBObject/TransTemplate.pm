package LedgerSMB::DBObject::TransTemplate;
use base qw(LedgerSMB::DBObject);
use strict;

sub save {
   my $self = shift @_;
   $self->{is_template} = '1';
   $self->{approved} = 0;
   $self->{journal} = 1; # default gl
   $self->{journal} = 2 if $self->{entity_class} == 2;
   $self->{journal} = 3 if $self->{entity_class} == 1;
   if (not defined $self->{curr}){
      my ($curr) = $self->exec_method(funcname => 'defaults_get_defaultcurrency');
      ($self->{curr}) = values(%$curr); 
   }
   $self->{currency} //= $self->{curr};
   $self->{reference} = $self->{invnumber} if $self->{invnumber};
   for (qw(effective_start effective_end post_date reference)){
      delete $self->{$_} unless $self->{$_};
   }
   my ($ref) = $self->exec_method(funcname => 'journal__add');
   $self->merge($ref);
   $self->{journal_id} = $self->{id};
   for my $line (@{$self->{journal_lines}}){
       my $l = bless $line, 'LedgerSMB::DBObject';
       $l->{_locale} = $self->{_locale};
       $l->{dbh} = LedgerSMB::App_State::DBH();
       $l->{journal_id} = $self->{id};
       my ($ref) = $l->exec_method(funcname => 'account__get_from_accno');
       $l->{account_id} = $ref->{id};
       print STDERR "$l->{accno}\n";
       if (!$ref->{id}){
           $self->error($self->{_locale}->text('No Account id for [_1]', $l->{accno}));
       }
       $l->exec_method(funcname=> 'journal__add_line');
   } 
   if ($self->{is_invoice}){
       $self->exec_method(funcname => 'journal__make_invoice');
   }
   if ($self->{recurringreference}){
       $self->exec_method(funcname => 'journal__save_recurring');
       $self->exec_method(funcname => 'journal__save_recurring_print');
   }
}

sub search {
   my $self = shift @_;
   $self->{approved} = 'false';
   $self->{is_template} = 'true';
   @{$self->{search_results}} = $self->exec_method(
            funcname => 'journal__search'
   );
}

sub retrieve {
   my $self = shift @_;
   my @vals = $self->exec_method(funcname => 'journal__retrieve');
   $self->merge(shift @vals);
   @{$self->{line_items}} = $self->exec_method(funcname => 'journal__retrieve_lines');
   ($self->{inv_data}) = $self->exec_method(funcname => 'journal__retrieve_invoice');
}

sub get {
    my ($self) = @_;
    my ($ref) = $self->exec_method(funcname => 'journal__get_entry');
    $self->merge($ref);
    @{$self->{line_items}} =  $self->exec_method(funcname => 'journal__lines');
    ($self->{invoice_data}) =
                 $self->exec_method(funcname => 'journal__get_invoice');
    if ($self->{invoice_data}->{credit_id}){
        ($self->{credit_data}) = $self->call_procedure(
               procname => 'entity_credit__get',
               args     => [$self->{invoice_data}->{credit_id}]
        );
    }
}

sub get_account_info {
    my ($self, $acct_id) = @_;
    my ($ref) = $self->call_procedure(
               procname => 'account_get', 
               args     => [$acct_id]
    );
    return $ref;
}

sub delete {
    my ($self, $id) = @_;

    $self->call_procedure(funcname => 'journal__delete',
                          args => [ $id ]);
}

1;
