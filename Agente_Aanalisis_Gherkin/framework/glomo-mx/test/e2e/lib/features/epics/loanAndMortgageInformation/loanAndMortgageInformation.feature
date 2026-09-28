@loanAndMortgageInformation
Feature: Loan and Mortgage Information

    @MTR001
    @web @ios @android
    @MX @vbank @web-done
    @smokeTest
    @backend(test)
    Scenario: Access to Credit Application screen - Multiple applications in progress
        Given a user with the following criteria
            | criteria                                  |
            | loan and mortgage information multi folio |
        And the user accesses mortgage tracking from the "nbo offer"
        When the user accesses a record from the list
        Then the user sees the following items in the screen
            | item                                  |
            | credit application screen             |
            | back button                           |
            | mortgage credit container             |
            | informational container               |
            | informational container information   |
            | application stages label              |
            | application stages with status        |

    @MTR002
    @web @ios @android
    @MX @vbank @web-done
    @backend(test)
    Scenario: Access to request detail from notification center
        Given a user with the following criteria
            | criteria                                        |
            | loan and mortgage information mortgage tracking |
        And the user accesses center notification
        And the user accesses mortgage tracking from the "notification"
        When the user accesses request detail
        Then the user sees the following items in the screen
            | item                                  |
            | request detail screen                 |
            | request detail close button           |
            | request detail general label          |
            | request detail general container      |
            | request detail credit offer label     |
            | request detail credit offer container |
