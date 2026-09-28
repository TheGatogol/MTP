@financialHealthPushAdvice
Feature: Journey Recurrent Payroll - Financial Health

    @FHPA002
    @MX @vbank @backend(test)
    @ios @android @web
    @web-done @smokeTest
    Scenario: The user closes the modal recurrent payroll
        Given a user with the following criteria
            | criteria              |
            | recurrent payroll     |
        And the user accesses to dashboard
        And the user goes to "screen financial health advice" using deeplink navigation
        When the user closes the modal recurrent payroll
        Then the user accesses the "dashboard" screen

    @FHPA003
    @MX @vbank @backend(test)
    @ios @android @web
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: The user votes positively
        Given a user with the following criteria
            | criteria              |
            | recurrent payroll     |
        And the user accesses to dashboard
        And the user goes to "screen financial health advice" using deeplink navigation
        When the user votes positively
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | opinator container    |

    @FHPA004
    @MX @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: The user accesses to pockets
        Given a user with the following criteria
            | criteria              |
            | recurrent payroll     |
        And the user accesses to dashboard
        And the user goes to "screen financial health advice" using deeplink navigation
        When the user accesses to pockets
        Then the user accesses the "pockets welcome" screen
