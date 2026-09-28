@assistanceCenter
Feature: Assistance Center

    @ASCT001
    @MX @web @ios @android
    @vbank
    @backend(test)
    @smokeTest
    @backend-smoke
    @web-done
    Scenario Outline: Validate Assistance center screen with <user>
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | <user>       |
        When the user accesses assistance section
        Then the user sees the following items in the screen
            | item                | value      |
            | header              |            |
            | lines button        |            |
            | blue bbva img       |            |
            | blue bbva info      |            |
            | blue bbva button    |            |
            | advisor img         | <status_2> |
            | button contact      | <status_2> |
            | button conversation | <status_2> |
        Examples:
            | user        | status_2 |
            | account     | disable  |
            | credit card | disable  |
            | advisor     |          |

    @ASCT002
    @MX @web @ios @android
    @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @backend(test)
    @manual @JIRA.GLOMOMX-131811
    Scenario: Validate out of time advisor with line BBVA available
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | advisor      |
        And the user starts the application at date:
            | hour   | 22   |
            | day    | 9    |
            | month  | 9    |
            | year   | 2023 |
        And the user accesses assistance section
        When the user access "advisor BBVA" in assistance
        Then the user sees the following items in the screen
            | item                           |
            | time out image                 |
            | time out info                  |
            | time out cancel                |
            | time out to advisor understood |

    @ASCT003
    @MX @web @ios @android
    @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @backend(test)
    @manual @JIRA.GLOMOMX-131811
    Scenario: Validate out of time advisor without line BBVA available
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | advisor      |
        And the user starts the application at date:
            | hour   | 2    |
            | day    | 10   |
            | month  | 9    |
            | year   | 2023 |
        And the user accesses assistance section
        When the user access "advisor BBVA" in assistance
        Then the user sees the following items in the screen
            | item                           | value  |
            | time out image                 |        |
            | time out info                  |        |
            | time out cancel                | hidden |
            | time out to advisor understood |        |

    @ASCT004
    @MX @web @ios @android
    @vbank
    @backend(test)
    @alternate-scenarios-smoke
    @web-done
    Scenario: Validate out of time without BBVA line available with account
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | account      |
        And the user starts the application at date:
            | hour  | 2 |
            | day   | 6 |
            | month | 9 |
            | year  | 2023 |
        And the user accesses assistance section
        When the user access "line BBVA" in assistance
        Then the user sees the following items in the screen
            | item                 |
            | time out line text   |
            | time out line button |

    @ASCT005
    @MX @web @ios @android
    @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @backend(test)
    @manual @JIRA.GLOMOGL-29459
    Scenario: Validate access to blue
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | account      |
        And the user accesses assistance section
        When the user access "blue BBVA" in assistance
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | back button  |
            | title header |
            | input        |
            | send button  |

    @ASCT006
    @MX
    @backend(test)
    @vbank
    @web-done
    @web @android @ios
    Scenario: Generate access to assistance center card line bbva pat
        Given a user with the following criteria
            | criteria                      |
            | user pat for assitance center |
        When the user accesses assistance section
        Then the user sees the following items in the screen
            | item                    | value      |
            | header                  |            |
            | bbva line pat img       |            |
            | bbva line pat info      | <status>   |
            | bbva line pat button    | <status>   |
