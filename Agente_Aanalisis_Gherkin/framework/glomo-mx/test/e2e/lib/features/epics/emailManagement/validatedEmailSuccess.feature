@emailManagement @validatedEmailSuccess
Feature: Validated Email Success

    @VES001
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate right response (HTTP 200 OK)
    @smokeTest
    Scenario: Email validation success  - Screen Validation - Happy Path
        Given a user with the following criteria
            | criteria               |
            | user with mail pending |
        And the user accesses to "update" email screen
        When the user adds or updates its mail "successfully"
        And the user continues the email address update with a "right" otp code received by email
        Then the user sees the following items in the screen
            | item                   |
            | Header                 |
            | Close Button           |
            | Check Image            |
            | Main Title             |
            | Operation Date         |
            | Operation Subtitle     |
            | Operation Mail Title   |
            | Operation Mail         |
            | Operation Folio Title  |
            | Operation Folio        |
            | Operation Notice Title |
            | Operation Notice       |
            | Exit Button            |
