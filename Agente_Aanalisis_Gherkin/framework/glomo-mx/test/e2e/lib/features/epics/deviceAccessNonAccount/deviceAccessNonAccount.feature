@deviceActivationNonAccountClient
Feature: Device Accesses - Non Account Client

    @DAGM001
    @MX @vbank
    @backend(test) @smokeTest
    @ios @android @web @web-done
    Scenario:  Screen Validation - Monoproduct entrypoint
        Given a user with the following criteria
            | criteria                |
            | reactivation nonaccount |
        When the user reactivates his account
        Then the user sees the following items in the screen
            | item                         |
            | exit header button           |
            | input card                   |
            | camera button                |
            | continue button              |
            | exclamation icon form        |
            | identify without card title  |
            | blue box                     |
