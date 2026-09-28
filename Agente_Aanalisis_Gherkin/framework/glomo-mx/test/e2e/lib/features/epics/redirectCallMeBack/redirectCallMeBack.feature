@redirectCallMeBack
Feature: Redirect Call Me Back

    @CMB001
    @web @ios @android
    @backend(test) @vbank
    @MX @manual @JIRA.GLOMOMX-215003
    @web-done
    Scenario Outline: Access to I want to call a personal advisor from "<access>" - After hours advisor
        Given a user with the following criteria
            | criteria     |
            | call me back |
        And the user starts the application at date:
            | hour  | 18   |
            | day   | 27   |
            | month | 10   |
            | year  | 2023 |
        When the user goes to the combo offer
        And the user accesses to I want to call a personal advisor "<access>"
        And the user selects schedule
        Then the user sees the following items in the screen
            | item                           |
            | header schedule a call         |
            | image schedule a call          |
            | description schedule a call    |
            | radio button                   |
            | confirm button schedule a call |
        Examples:
            | access |
            | link   |
            | header |

    @CMB002
    @web @ios @android
    @backend(test) @vbank
    @MX @manual @JIRA.GLOMOMX-215003
    @web-done
    Scenario Outline: Complete process I want to call a personal advisor from "<access>" - After hours advisor
        Given a user with the following criteria
            | criteria     |
            | call me back |
        And the user starts the application at date:
            | hour  | 18   |
            | day   | 28   |
            | month | 10   |
            | year  | 2023 |
        When the user goes to the combo offer
        And the user accesses to I want to call a personal advisor "<access>"
        And the user selects schedule
        And the user confirms the shown schedule
        Then the user sees the following items in the screen
            | item              |
            | header check      |
            | image check       |
            | description       |
            | date              |
            | info message      |
            | understood button |

        Examples:
            | access |
            | link   |
            | header |

    @CMB003
    @web @ios @android
    @backend(test) @vbank
    @MX @manual @JIRA.GLOMOMX-169732
    @smokeTest
    Scenario Outline: The response was successful and the customer will be called immediately from "<access>"
        Given a user with the following criteria
            | criteria     |
            | call me back |
        And the user starts the application at date:
            | hour  | 16      |
            | day   | 04      |
            | month | january |
            | year  | 2023    |
        When the user goes to the combo offer
        And the user accesses to I want to call a personal advisor "<access>"
        Then the user sees the following items in the screen
            | item              |
            | image check       |
            | description       |
            | timer             |
            | info message      |
            | understood button |

        Examples:
            | access |
            | link   |
            | header |

    @CMB004
    @web @ios @android
    @backend(test) @vbank
    @MX @manual @JIRA.GLOMOMX-215003
    @web-done
    Scenario Outline: Success response of previous request from "<access>"
        Given a user with the following criteria
            | criteria     |
            | call me back |
        And the user starts the application at date:
            | hour  | 18   |
            | day   | 27   |
            | month | 10   |
            | year  | 2023 |
        When the user goes to the combo offer
        And the user accesses to I want to call a personal advisor "<access>"
        And the user selects schedule
        And the user confirms the shown schedule
        Then the user sees the following items in the screen
            | item              |
            | image check       |
            | description       |
            | understood button |

        Examples:
            | access |
            | link   |
            | header |

    @CMB005
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: When a user with assistance manager accesses to Payroll Portability screen
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        When the user accesses the "account payroll portability" screen
        Then the user sees the following items in the screen
            | item           | value         |
            | telephone icon |               |
            | sticky button  | call x person |

    @CMB006
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: The user with assistance manager accesses to account deposit hiring screen
        Given a user with the following criteria
            | criteria             |
            | offer deposit hiring |
        When the user goes to the contract page
        Then the user sees the following items in the screen
            | item           |
            | telephone icon |
            | sticky summary |
