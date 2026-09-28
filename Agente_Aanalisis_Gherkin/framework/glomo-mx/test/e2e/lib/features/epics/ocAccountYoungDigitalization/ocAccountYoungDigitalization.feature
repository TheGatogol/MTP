@ocAccountYoungDigitalization
Feature: Oc Account Young Digitalization

    @YAN001
    @ios @android @web @web-done
    @MX @backend(test) @vbank @smokeTest
    Scenario: Birth certificate - Access to take photo suggestions modal
        Given a user with the following criteria
            | criteria                        |
            | oc account young digitalization |
            | update birth certificate        |
        And the user accesses to dashboard
        And the user goes to "birth certificate account young" using deeplink navigation
        When the user selects "take photo" option to upload birth certificate
        Then the user sees the following items in the screen
            | item                      |
            | microillustration camera  |
            | suggestions title         |
            | suggestion bullet list    |
            | accept button suggestions |
