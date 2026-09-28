@callMeBackAssistanceManager
Feature: Call Me Back Assistance Manager

    @CMBAM001
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @manual @JIRA.GLOMOMX-180963
    @smokeTest
    Scenario Outline: Access to I want to call a personal advisor from "<access_from>" - After hours advisor
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 24     |
            | month | 1      |
            | year  | 2022   |
        And the user goes to the "consumer loan" offer operation
        And the user accesses to I want to call a personal advisor from "<access_from>"
        And the user agrees to schedule a call
        When the user selects a schedule
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | title               |
            | advisor information |
            | scheduled time      |
            | info message        |
            | understood button   |

        Examples:
            | access_from | hour |
            | link        | 18   |
            | header      | 18   |

    @CMBAM002
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @smokeTest
    Scenario Outline: Access to I want to call a personal advisor from "<access_from>"- Advisor available
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | with offer         |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 24     |
            | month | 1      |
            | year  | 2022   |
        And the user goes to the "consumer loan" offer operation
        When the user accesses to call me back with an assintance manager from "<access_from>"
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | detail offer step |
            | header image      |
            | amount input      |
            | benefits          |

        Examples:
            | access_from | hour |
            | link        | 10   |
            | header      | 10   |
