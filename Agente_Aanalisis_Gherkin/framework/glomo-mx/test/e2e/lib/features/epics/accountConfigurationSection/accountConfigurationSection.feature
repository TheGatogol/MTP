@accountConfigurationSection
Feature:Account Configuration Section

    @ACS001
    @web @ios @android
    @backend(test)
    @MX
    @vbank
    @web-done @smokeTest
    Scenario: Changing your payroll when the N2 account has just been created
        Given a user with the following criteria
            | criteria                      |
            | account configuration section |
        And the user goes to "account configuration secction" using deeplink navigation
        When the user enters to "link change payroll"
        Then the user accesses the "documentation proceedings" screen

    @ACS002
    @web @ios @android
    @backend(test)
    @MX
    @vbank
    @web-done
    Scenario:Link your account when the N2 account was just created
        Given a user with the following criteria
            | criteria                      |
            | account configuration section |
        And the user goes to "account configuration secction" using deeplink navigation
        When the user enters to "link your account"
        Then the user accesses the "payroll account link main" screen

    @ACS003
    @web @ios @android
    @backend(test)
    @MX
    @vbank
    @web-done
    Scenario: Exit warning modal
        Given a user with the following criteria
            | criteria                      |
            | account configuration section |
        And the user goes to "account configuration secction" using deeplink navigation
        And the user enters to configure after
        When the user closes the modal "link continue in operation"
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | button close                 |
            | title                        |
            | caption                      |
            | link change payroll          |
            | link your account            |
