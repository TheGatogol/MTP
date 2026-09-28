@emailManagement @validateEmail
Feature: Validate Email

    @VLE001
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Screen Validation - Access to validate email page after add /update user's email
        Given a user with the following criteria
            | criteria               |
            | user with mail pending |
        And the user accesses to "update" email screen
        When the user adds or updates its mail "successfully"
        Then the user sees the following items in the screen
            | item                   |
            | Header                 |
            | Close Button           |
            | Panel Info             |
            | Time Stamp             |
            | Detail Text            |
            | Folio Title            |
            | Folio Number           |
            | Panel Button           |

    @VLE002
    @web @ios @android
    @MX
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank
    Scenario: User leaves the process before validate mail address
        Given a user with the following criteria
            | criteria               |
            | user with mail pending |
        And the user accesses to "update" email screen
        When the user adds or updates its mail "successfully"
        And the user wants to leave email validation process
        Then the user sees a modal with the following elements:
            | item                  |
            | Header                |
            | Close button          |
            | Hero Image            |
            | Description           |
            | Accept Button         |
            | Cancel Button         |

    @VLE003
    @web @ios @android
    @MX
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank @vbank-modified
    #Edited vbank record to simulate wrong code error (HTTP 400 Bad Request)
    Scenario: Email validation with wrong otp received by mail
        Given a user with the following criteria
            | criteria               |
            | user with mail pending |
        And the user accesses to "update" email screen
        When the user adds or updates its mail "successfully"
        And the user continues the email address update with a "wrong" otp code received by email
        Then a "small" size backend error is shown without title

    @VLE004
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate right response (HTTP 200 OK)
    @smokeTest
    Scenario: Email validation with right otp received by mail - Happy Path
        Given a user with the following criteria
            | criteria               |
            | user with mail pending |
        And the user accesses to "update" email screen
        When the user adds or updates its mail "successfully"
        And the user continues the email address update with a "right" otp code received by email
        Then the user is in the validated email success screen
