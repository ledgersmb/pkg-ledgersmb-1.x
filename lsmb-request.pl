=head1 NAME

lsmb-request.pl - The LedgerSMB Request Handler

=head1 SYNOPSYS
This file receives the web request, instantiates the proper objects, and passes
execution off to the appropriate workflow scripts.  This is for use with new 
code only and should not be used with old SQL-Ledger(TM) code as it is 
architecturally dissimilar.

=head1 COPYRIGHT

Copyright (C) 2007 The LedgerSMB Core Team

This file is licensed under the GNU General Public License (GPL)  version 2 or 
at your option any later version.  A copy of the GNU GPL has been included with
this software.

=cut

package LedgerSMB::Handler;
no lib '.';
use FindBin;
use lib $FindBin::Bin;

use LedgerSMB::Sysconfig;
use LedgerSMB::Locale;
use Digest::MD5;
use Try::Tiny;

$| = 1;

use LedgerSMB::User;
use LedgerSMB::App_State;
use LedgerSMB;
use LedgerSMB::Locale;
use Data::Dumper;
use Log::Log4perl;
use strict;


binmode STDIN, ':bytes' if (defined $ENV{REQUEST_METHOD}) and ($ENV{REQUEST_METHOD} eq 'POST');
binmode STDOUT, ':utf8';

LedgerSMB::App_State->cleanup();

my $logger = Log::Log4perl->get_logger('LedgerSMB::Handler');
Log::Log4perl::init(\$LedgerSMB::Sysconfig::log4perl_config);
$logger->debug("Begin");

# for custom preprocessing logic
eval { require "custom.pl"; };

$logger->debug("getting new LedgerSMB");

my $request = new LedgerSMB;


$logger->debug("Got \$request=$request");
$logger->trace("\$request=".Data::Dumper::Dumper($request));

$request->{action} = '__default' if (!$request->{action});

$ENV{SCRIPT_NAME} =~ m/([^\/\\]*.pl)\?*.*$/;
my $script = $1;
$script = '' unless defined $script;
$logger->debug("\$ENV{SCRIPT_NAME}=$ENV{SCRIPT_NAME} \$request->{action}=$request->{action} \$script=$script");

my $locale;

if ($request->{_user}){
    $LedgerSMB::App_State::User = $request->{_user};
    $locale =  LedgerSMB::Locale->get_handle($request->{_user}->{language});
    $LedgerSMB::App_State::Locale = $locale;
} else {
    $locale = LedgerSMB::Locale->get_handle( $LedgerSMB::Sysconfig::language );
    $request->error( __FILE__ . ':' . __LINE__ . 
                 ": Locale ($LedgerSMB::Sysconfig::language) not loaded: $!\n" 
    ) unless $locale;
    $LedgerSMB::App_State::Locale = $locale;
}

if (!$script){
	$request->error($locale->text('No workflow script specified'));
}

$request->{_locale} = $locale;

$logger->debug("calling $script");

&call_script( $script, $request );
$logger->debug("after calling script=$script action=$request->{action} \$request->{dbh}=$request->{dbh}");

# Prevent flooding the error logs with undestroyed connection warnings
#   warn $script, $requestl
$request->{dbh}->disconnect()
    if defined $request->{dbh};
$logger->debug("End");


sub call_script {
  my $script = shift @_;
  my $request = shift @_;

  try {        
    $request->{script} = $script;
    $script =~ s/\.pl$//;
    $script = "LedgerSMB::Scripts::$script";
    $request->{_script_handle} = $script;

    eval "require $script;"
      || die $locale->text('Unable to open script') . 
                          ": $script : $!: $@";
    $script->can($request->{action}) 
      || die $locale->text("Action Not Defined: ") . $request->{action};
    $script->can( $request->{action} )->($request);
    $request->{dbh}->commit if defined $request->{dbh};
    LedgerSMB::App_State->cleanup();
  }
  catch {
      # We have an exception here because otherwise we always get an exception
      # when output terminates.  A mere 'die' will no longer trigger an 
      # automatic error, but die 'foo' will map to $request->error('foo')
      # -- CT
     $LedgerSMB::App_State::DBH->rollback if ($LedgerSMB::App_State::DBH and $_ eq 'Died');
     LedgerSMB::App_State->cleanup();
     $request->_error($_) unless $_ =~ /^Died at/;
  };
}
1;
