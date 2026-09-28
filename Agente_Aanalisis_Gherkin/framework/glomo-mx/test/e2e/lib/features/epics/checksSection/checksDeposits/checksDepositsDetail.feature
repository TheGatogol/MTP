@checksDepositsDetail @checksDeposit @checksSection @checks
Feature: Checks Deposits Detail

    @CDD001
    @smokeTest
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario Outline: Checks deposits detail with status <check_status>
        Given a user with the following criteria
            | criteria                                    |
            | digital checks                              |
            | has at least 1 check deposit <check_status> |
        And the user accesses the checks deposit list screen
        When the user accesses a "<check_status>" check
        Then the user sees the following items in the screen
            | item                         | value              |
            | Header                       |                    |
            | Back button                  |                    |
            | Title                        |                    |
            | Amount                       |                    |
            | Status                       | <check_status>     |
            | Date and time                |                    |
            | Share icon                   |                    |
            | Operation type title         |                    |
            | Operation type description   |                    |
            | Check number title           |                    |
            | Check number description     |                    |
            | Check’s band title           |                    |
            | Check’s band description     |                    |
            | Amount title                 |                    |
            | Amount description           |                    |
            | Date title                   | <date_title>       |
            | Date description             | <date_description> |
            | Time title                   | <time_title>       |
            | Time description             | <time_description> |
            | Account number title         |                    |
            | Account number description   |                    |
            | Operation number title       |                    |
            | Operation number description |                    |

        Examples:
            | check_status | date_title  | date_description | time_title  | time_description |
            | charged      |             |                  |             |                  |
            | rejected     | not visible | not visible      | not visible | not visible      |

    @CDD002
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario Outline: Back detail <check_status> check
        Given a user with the following criteria
            | criteria                                    |
            | digital checks                              |
            | has at least 1 check deposit <check_status> |
        And the user accesses the checks deposit list screen
        When the user accesses a "<check_status>" check
        And the user goes back to previous page
        Then the user accesses the "Checks Deposit List" screen

        Examples:
            | check_status |
            | charged      |
            | rejected     |

    @CDD003
    @MX @manual @JIRA.GLOMOGL-26754
    @ios @android @web
    Scenario Outline: Share detail <check_status> check
        Given a user with the following criteria
            | criteria                                    |
            | has at least 1 check deposit <check_status> |
        And the user accesses to "<check_status>" checks deposits detail
        When the user shares the detail
        Then the user is in the native sharing options

        Examples:
            | check_status |
            | charged      |
            | rejected     |
