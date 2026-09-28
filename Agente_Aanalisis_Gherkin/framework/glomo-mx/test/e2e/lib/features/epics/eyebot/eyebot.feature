@eyebot
Feature: Example Eyebot

    @EB001
    @ios @android @web
    @backend(test) @MX
    @!vbank
    @perceptual
    @perceptual-done
    Scenario: Welcome - visual test
        Given a user not logged and not cached
        When the user is in the Welcome screen
        Then perform a screenshot for visual comparison with name 'welcome'
