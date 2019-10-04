package PageObject::Root;

use strict;
use warnings;

use Moose;
use namespace::autoclean;
extends 'Weasel::Element::Document';

has body => (is => 'rw',
             isa => 'PageObject',
             required => 0,
             clearer => 'clear_body',
             predicate => 'has_body',
             builder => '_build_body',
             lazy => 1);

sub _build_body {
    my ($self) = @_;

    return $self->find('body.done-parsing', scheme => 'css');
}

sub wait_for_body {
    my ($self, %args) = @_;
    my $old_body = $args{replaces};
    $old_body //= $self->body if $self->has_body;
    $self->clear_body;

    $self->session->wait_for(
        sub {
            if ($old_body) {
                # In case of an exception, eval returns 'undef'
                $old_body = eval {
                    $old_body->tag_name;
                    $old_body;
                };
                return 0;
            }
            else {
                return $self->session->page->find('body.done-parsing', scheme => 'css');
            }
        });

    return $self->body;
}

__PACKAGE__->meta->make_immutable;
1;
