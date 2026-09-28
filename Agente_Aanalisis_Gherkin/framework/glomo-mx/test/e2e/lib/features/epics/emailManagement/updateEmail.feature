@emailManagement @updateEmail
Feature: Add / Update Email

    @UPE001
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    @backend-smoke
    Scenario: Screen Validation - Access operative from profile
        Given a user with the following criteria
            | criteria               |
            | user without mail      |
        And the user accesses to profile screen
        When the user taps on "add mail" profile button
        Then the user sees the following items in the screen
            | item                   |
            | Header                 |
            | Close Button           |
            | Instruction Text       |
            | Mail Input             |
            | Confirm Input          |
            | Notification Message   |
            | Header Category        |
            | Notice Text            |
            | Notice Link            |
            | Panel Button           |

    @UPE002
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    @backend-smoke
    Scenario Outline: Mail Input Validation - Error case: <invalid>
        Given a user with the following criteria
            | criteria                  |
            | user without mail         |
        And the user accesses to "add" email screen
        When the user fills the first input with an <invalid> mail
        Then the user sees an error message below the "first" input
        Examples:
            | invalid     |
            | format      |
            | dots        |
            | blanks      |

    @UPE003
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    @backend-smoke
    Scenario: Privacy Notice Modal Validation
        Given a user with the following criteria
            | criteria               |
            | user without mail      |
        And the user accesses to "add" email screen
        When the user acceses to review the privacy notice
        Then the user sees a modal with the following elements:
            | item                  |
            | Header                |
            | Close button          |
            | Hero Image            |
            | Description           |
            | Accept Button         |

    @UPE004
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    @backend-smoke
    Scenario: Mail Confirm Input Validation
        Given a user with the following criteria
            | criteria               |
            | user without mail      |
        And the user accesses to "add" email screen
        When the user fills both inputs but mails dont match
        Then the user sees an error message below the "second" input

    @UPE005
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate service unavailable (HTTP 500)
    Scenario: Add mail  - Service unavailable
        Given a user with the following criteria
            | criteria               |
            | user without mail      |
        And the user accesses to "add" email screen
        When the user adds or updates its mail "unsuccessfully"
        Then a "small" size backend error is shown without title

    @UPE006
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    @smokeTest
    Scenario: Add mail  - Happy path
        Given a user with the following criteria
            | criteria               |
            | user without mail      |
        And the user accesses to "add" email screen
        When the user adds or updates its mail "successfully"
        Then the user is in the validate email screen

    @UPE007
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Update mail  - Happy path
        Given a user with the following criteria
            | criteria               |
            | user with mail pending |
        And the user accesses to "update" email screen
        When the user adds or updates its mail "successfully"
        Then the user is in the validate email screen

    @UPE008
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    @backend-smoke
    Scenario Outline: Clean entry - Email <email>
        Given a user with the following criteria
            | criteria              |
            | user missing email    |
        And the user accesses to "add" email screen
        When the user delete <email> entered
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | close button        |
            | instruction text    |
            | mail input          |
            | confirm input       |
        Examples:
            | email     |
            | format    |
            | both      |

    @UPE009
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    @backend-smoke
    Scenario: Close modal privacy notice
        Given a user with the following criteria
            | criteria              |
            | user missing email    |
        And the user accesses to "add" email screen
        When the user acceses to review the privacy notice
        And the user closes the modal
        Then the user sees the following items in the screen
            | item                   |
            | Header                 |
            | Close Button           |
            | Instruction Text       |
            | Mail Input             |
            | Confirm Input          |

    @UPE010
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    @backend-smoke
    Scenario: Exit modal privacy notice
        Given a user with the following criteria
            | criteria              |
            | user missing email    |
        And the user accesses to "add" email screen
        When the user acceses to review the privacy notice
        And the user accepts the modal
        Then the user sees the following items in the screen
            | item                   |
            | Header                 |
            | Close Button           |
            | Instruction Text       |
            | Mail Input             |
            | Confirm Input          |

    @UPE011
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Success add email
        Given a user with the following criteria
            | criteria              |
            | user missing email    |
        And the user accesses to "add" email screen
        When the user adds or updates its mail "successfully"
        And the user continues the email address update with a "right" otp code received by email
        Then the user is in the validated email success screen

    @UPE012
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Validate page enter security code
        Given a user with the following criteria
            | criteria              |
            | user missing email    |
        And the user accesses to "add" email screen
        When the user adds or updates its mail "successfully"
        And the user continues the email address update with a "none" otp code received by email
        Then the user sees the following items in the screen
            | item              |
            | header security   |
            | main title        |
            | timer             |
            | text additional   |
            | password input    |

    @UPE013
    @web @ios @android
    @MX
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank
    Scenario: Validate that the security code is deleted
        Given a user with the following criteria
            | criteria              |
            | user missing email    |
        And the user accesses to "add" email screen
        When the user adds or updates its mail "successfully"
        And the user continues the email address update with a "none" otp code received by email
        And the user clears the code entry
        Then the user sees the following items in the screen
            | item              |
            | header security   |
            | main title        |
            | timer             |
            | text additional   |
            | password input    |

    @UPE014
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario Outline: Enter security code <clic> option
        Given a user with the following criteria
            | criteria              |
            | user missing email    |
        And the user accesses to "add" email screen
        When the user adds or updates its mail "successfully"
        And the user continues the email address update with a "right" otp code received by email
        And the user <clic> the successful validation screen
        Then the user sees the "profile" screen
        Examples:
            | clic     |
            | close    |
            | exit     |

    @UPE015
    @web @ios @android
    @MX
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank
    Scenario: Validation pending and returns to the profile screen
        Given a user with the following criteria
            | criteria              |
            | user missing email    |
        And the user accesses to "add" email screen
        And the user adds or updates its mail "successfully"
        When the user wants to leave email validation process
        And the user closes the modal
        Then the user sees the "profile" screen

    @UPE016
    @web @ios @android
    @MX
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank
    Scenario: Enter security code at another time
        Given a user with the following criteria
            | criteria              |
            | user missing email    |
        And the user accesses to "add" email screen
        When the user adds or updates its mail "successfully"
        And the user wants to leave email validation process
        Then the user sees a modal with the following elements:
            | item           |
            | header         |
            | close button   |
            | container icon |
            | accept button  |
            | cancel button  |

    @UPE017
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario Outline: Pending validation clear mail - introduction <email>
        Given a user with the following criteria
            | criteria                  |
            | pending validate email    |
        And the user accesses to "update" email screen
        When the user delete <email> entered pending
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | close button        |
            | instruction text    |
            | mail input          |
            | confirm input       |
        Examples:
            | email     |
            | format    |
            | both      |

    @UPE018
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Error - Special characters
        Given a user with the following criteria
            | criteria                  |
            | pending validate email    |
        And the user accesses to "update" email screen
        When the user adds or updates its mail "successfully"
        And  the user enters "#./&;@" in the OTP
        Then the user sees the following items in the screen
            | item              |
            | header security   |
            | main title        |
            | timer             |
            | text additional   |
            | password input    |

    @UPE019
    @web @ios @android
    @MX
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank
    Scenario: Close modal incorrect code
        Given a user with the following criteria
            | criteria                  |
            | pending validate email    |
        And the user accesses to "update" email screen
        When the user adds or updates its mail "successfully"
        And the user continues the email address update with a "wrong" otp code received by email
        And a "small" size backend error is shown without title
        And the user accepts the modal
        Then the user sees the following items in the screen
            | item              |
            | timer             |
            | password input    |
            | text additional   |
            | sms info          |
            | valide button     |

    @UPE020
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    @backend-smoke
    Scenario: Close screen add email
        Given a user with the following criteria
            | criteria              |
            | user missing email    |
        And the user accesses to "add" email screen
        When the user closes screen add email
        Then the user sees a modal with the following elements:
            | item              |
            | paragraph icon    |
            | description       |
            | accept button     |
            | cancel button     |
