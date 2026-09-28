@checksManagementdetail @checks
Feature: Checks Management Detail

    @CMD001
    @smokeTest
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario Outline:  Detail screen appears <check_status>
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to options management screen
        When the user accesses a "<check_status>" option Management screen
        Then the user sees the following items in the screen
            | item                         | value              |
            | Header                       |                    |
            | Back button                  |                    |
            | Title                        |                    |
            | Amount                       |                    |
            | Status                       | <check_status>     |
            | Date and time                |                    |
            | Share icon                   |                    |
            | Info box                     |                    |
            | data                         |                    |

        Examples:
            | check_status |
            | charged        |
            | rejected     |

    @CMD002
    @smokeTest
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario Outline: Back detail <check_status> check
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to options management screen
        When the user accesses a "<check_status>" option Management screen
        Then the user goes back to previous page

        Examples:
            | check_status |
            | charged      |
            | rejected     |
