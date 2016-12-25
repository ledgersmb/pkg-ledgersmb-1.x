=head1 NAME

LedgerSMB::Scripts::pnl - PNL report workflows for LedgerSMB

=head1 SYNOPSIS

Called via lsmb-handler.pl:

 LedgerSMB::Scripts::pnl->can($request->{action})->($request);

=head1 DESCRIPTION

This module provides workflow logic for producing various reports regaridng 
profit and loss.

=head1 METHODS/WORKFLOWS

=over

=item generate_income_statement

Generates an income statement.

=cut

package LedgerSMB::Scripts::pnl;

use LedgerSMB::Report::PNL::Income_Statement;
use LedgerSMB::Report::PNL::Product;
use LedgerSMB::Report::PNL::ECA;
use LedgerSMB::Report::PNL::Invoice;
use LedgerSMB::Report;
use LedgerSMB::App_State;

use LedgerSMB::PGDate;
use strict;
use warnings;

sub generate_income_statement {
    my ($request) = @_;
    $ENV{LSMB_ALWAYS_MONEY} = 1;
    my $rpt;
    $request->{pnl_type} = '' unless defined $request->{pnl_type};
    if ($request->{pnl_type} eq 'invoice'){
        $rpt = LedgerSMB::Report::PNL::Invoice->new(%$request);
    } elsif ($request->{pnl_type} eq 'eca'){
        $rpt = LedgerSMB::Report::PNL::ECA->new(%$request);
    } elsif ($request->{pnl_type} eq 'product'){
        $rpt = LedgerSMB::Report::PNL::Product->new(%$request);
    } else {
        if ( $request->{comparison_type} eq 'by_periods' && $request->{interval} ne 'none') {
            # to_date = from_date + 1 period - 1 day
            my $ri = $request->{interval};
            # Note: Transforms input string into PGDate
            $request->{to_date} = LedgerSMB::PGDate->from_input($request->{from_date})
                                                        ->add_interval($ri)
                                                        ->add_interval('day',-1)
                                                        ->to_output;
        }
        $rpt = LedgerSMB::Report::PNL::Income_Statement->new(
            %$request,
            column_path_prefix => [ 0 ]);
        $rpt->run_report;
        $rpt->init_comparisons($request);
        my $counts = $request->{comparison_periods} || 0;
        for my $c_per (1 .. $counts) {
            my $found = 0;
            for (qw(from_month from_year from_date to_date interval)){
                $request->{$_} = $request->{"${_}_$c_per"};
                delete $request->{$_} unless defined $request->{$_};
                $found = 1 if defined $request->{$_} and $_ ne 'interval';
            }
            next unless $found;
            my $comparison =
                LedgerSMB::Report::PNL::Income_Statement->new(
                    %$request,
                    column_path_prefix => [ $c_per ]);
            $comparison->run_report;
            $rpt->add_comparison($comparison);
        }
    }
    $rpt->render($request);
}

=back

=head1 COPYRIGHT

COPYRIGHT (C) 2012 The LedgerSMB Core Team.  This file may be re-used under the
terms of the LedgerSMB General Public License version 2 or at your option any
later version.  Please see enclosed LICENSE file for details.

=cut

1;
