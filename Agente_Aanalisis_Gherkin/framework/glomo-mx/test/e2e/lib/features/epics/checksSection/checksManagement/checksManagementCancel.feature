@checksManagementCancel @checks
Feature: Checks Management Cancel

    @CMC001
    @smokeTest
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Operation canceled successfully
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to options management screen
        And the user accesses a "charged" option Management screen
        When the user cancels the operation
        Then the user sees a "small" modal with the following elements:
            | item          |
            | description   |
            | error icon    |
            | accept button |
