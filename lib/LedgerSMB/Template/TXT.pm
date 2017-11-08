
=head1 NAME

LedgerSMB::Template::TXT - Template support module for LedgerSMB

=head1 METHODS

=over

=item get_extension
Private method to get extension.  Do not call directly.

=item get_template ($name)

Returns the appropriate template filename for this format.

=item preprocess ($vars)

Returns $vars.

=item process ($parent, $cleanvars)

Processes the template for text.

=item postprocess ($parent)

Returns the output filename.

=back

=head1 Copyright (C) 2007, The LedgerSMB core team.

This work contains copyrighted information from a number of sources all used
with permission.

It is released under the GNU General Public License Version 2 or, at your
option, any later version.  See COPYRIGHT file for details.  For a full list
including contact information of contributors, maintainers, and copyright
holders, see the CONTRIBUTORS file.
=cut

package LedgerSMB::Template::TXT;

use warnings;
use strict;

use DateTime;
use Scalar::Util qw(reftype);
use Template;
use Template::Parser;

use LedgerSMB::Template::TTI18N;
use LedgerSMB::Template::DBProvider;

# The following are for EDI only
my $dt = DateTime->now;
my $date = sprintf('%04d%02d%02d', $dt->year, $dt->month, $dt->day);
my $time = sprintf('%02d%02d', $dt->hour, $dt->min);

my $binmode = ':utf8';
binmode STDOUT, $binmode;
binmode STDERR, $binmode;

sub get_extension {
    my ($parent) = shift;
    if ($parent->{format_args}->{extension}){
        return $parent->{format_args}->{extension};
    } else {
        return 'txt';
    }
}

sub get_template {
    my ($name, $parent) = @_;
    my $extension;
    return "${name}.". get_extension($parent);
}

sub preprocess {
    # I wonder how much of this can be concentrated in the main template
    # module? --CT
    my $rawvars = shift;
    my $vars;
    { # pre-5.14 compatibilty block
        local ($@); # pre-5.14, do not die() in this block
        if (eval {$rawvars->can('to_output')}){
            $rawvars = $rawvars->to_output;
        }
    }
    my $type = ref $rawvars;
    my $reftype = reftype $rawvars;

    return $rawvars if $type =~ /^LedgerSMB::Locale/;
    return unless defined $rawvars;
    if ( $type eq 'ARRAY' ) {
        $vars = [];
        for (@{$rawvars}) {
            push @{$vars}, preprocess( $_ );
        }
    } elsif (!$type) {
        return $rawvars;
    } elsif ($type eq 'SCALAR' or $type eq 'Math::BigInt::GMP') {
        return $$rawvars;
    } elsif ($type eq 'CODE'){
        return $rawvars;
    } elsif ($reftype eq 'HASH') { # Hashes and objects
        $vars = {};
        for ( keys %{$rawvars} ) {
            $vars->{preprocess($_)} = preprocess( $rawvars->{$_} );
        }
    }

    return $vars;
}

sub process {
    my $parent = shift;
    my $cleanvars = shift;
        $cleanvars->{EDI_CURRENT_DATE} = $date;
        $cleanvars->{EDI_CURRENT_TIME} = $time;
    my $template;
    my $source;
    my $output;
    my %additional_options = ();

        $parent->{binmode} = $binmode;
    if ($parent->{outputfile}) {
            if (ref $parent->{outputfile}){
                $output = $parent->{outputfile};
            } else {
        $output = "$parent->{outputfile}.". get_extension($parent);
                $parent->{outputfile} = $output;
            }
    }
    if ($parent->{include_path} eq 'DB'){
        $source = $parent->{template};
        $additional_options{INCLUDE_PATH} = [];
        $additional_options{LOAD_TEMPLATES} =
            [ LedgerSMB::Template::DBProvider->new(
                  {
                      format => 'txt',
                      language_code => $parent->{language},
                      PARSER => Template::Parser->new({
                         START_TAG => quotemeta('<?lsmb'),
                         END_TAG => quotemeta('?>'),
                      }),
                  }) ];
    } elsif (ref $parent->{template} eq 'SCALAR') {
        $source = $parent->{template};
    } elsif (ref $parent->{template} eq 'ARRAY') {
        $source = join "\n", @{$parent->{template}};
    } else {
        $source = get_template($parent->{template}, $parent);
    }
    $template = Template->new({
        INCLUDE_PATH => [$parent->{include_path_lang},
                         $parent->{include_path}, 'UI/lib'],
        START_TAG => quotemeta('<?lsmb'),
        END_TAG => quotemeta('?>'),
        DELIMITER => ';',
        DEBUG => ($parent->{debug})? 'dirs': undef,
        DEBUG_FORMAT => '',
        (%additional_options)
        }) || die Template->error();

    if (not $template->process(
        $source,
        {%$cleanvars, %$LedgerSMB::Template::TTI18N::ttfuncs,
            'escape' => \&preprocess},
        \$parent->{output}, binmode => ':utf8')) {
        die $template->error();
    }
        if ($output){
            open(OUT, '>', $output);
            print OUT $parent->{output};
            close OUT;
        }
    $parent->{mimetype} = 'text/plain';
}

sub postprocess {
    my ($parent) = shift;
    if (!$parent->{rendered}){
        return $parent->{template} . '.' . get_extension($parent);
    }
    $parent->{rendered} = "$parent->{outputfile}.". get_extension($parent) if $parent->{outputfile};
    return $parent->{rendered};
}

1;
