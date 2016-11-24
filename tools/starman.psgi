#!/usr/bin/plackup 

package LedgerSMB::FCGI;

no lib '.';
use FindBin;
use lib "$FindBin::Bin/..";
use CGI::Emulate::PSGI;
use FindBin;
use LedgerSMB::PSGI;
use Plack::Builder;
use Plack::Middleware::Static;

BEGIN {
  lib->import($FindBin::Bin) unless $ENV{mod_perl}
}

my $app = LedgerSMB::PSGI::app();

builder {
   enable "Plack::Middleware::Static",
       path => qr{(^/?(images|doc|UI|css)/|favicon\.ico)}, root => '.';
   $app;
};

