@codiOperations @codiOnboarding
Feature: CoDi operative - Onboarding

    @CODI002
    @MX @web @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    @backend(test) @vbank @smokeTest
    @backend-smoke
    Scenario: Access CoDi operative already registered after login
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to "QR operative and CoDi" item located in the sidebar
        And the user selects "enroll now" in the enroll process
        When the user accepts the terms and conditions
        Then the user sees the following items in the screen
            | item                          | value   |
            | enroll text                   |         |
            | enroll info                   |         |
            | name text                     |         |
            | phone text                    |         |
            | enroll message                |         |
            | enroll accounts               |         |
            | terms and conditions link     |         |
            | terms and conditions checkbox |         |
            | continue button               | enabled |

    @CODI003
    @MX @web @ios @android @web-done
    @backend(test) @vbank
    @backend-smoke
    Scenario Outline: Access CoDi operative and chooses to <action>
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to "QR operative and CoDi" item located in the sidebar
        When the user selects "<action>" in the enroll process
        Then the user accesses the "dashboard" screen

        Examples:
            | action       |
            | enroll later |
            | exit         |

    @CODI004
    @MX @web @ios @android
    @backend(test) @vbank @manual @JIRA.GLOMOMX-180972
    Scenario: User with 4 or more accounts
        Given a user with the following criteria
            | criteria           |
            | 4 or more accounts |
        And the user accesses to "QR operative and CoDi" item located in the sidebar
        When the user selects "enroll now" in the enroll process
        Then the user sees the following items in the screen
            | item                          |
            | enroll text                   |
            | enroll info                   |
            | name text                     |
            | phone text                    |
            | enroll message                |
            | see all                       |
            | enroll accounts               |
            | terms and conditions link     |
            | terms and conditions checkbox |
            | continue button               |

    @CODI005
    @MX @web @ios @android
    @backend(test) @vbank @manual @JIRA.GLOMOMX-180972
    Scenario: User with 4 or more accounts accesses account section
        Given a user with the following criteria
            | criteria           |
            | 4 or more accounts |
        And the user accesses to "QR operative and CoDi" item located in the sidebar
        And the user selects "enroll now" in the enroll process
        When the user accesses to "view all accounts" in the enroll process
        Then the user sees the following items in the screen
            | item            |
            | accounts header |
            | accounts body   |
            | close button    |
            | exit button     |

    @CODI006
    @MX @web @ios @android
    @backend(test) @vbank @manual @JIRA.GLOMOMX-180972
    Scenario Outline: User with 4 or more accounts "<action>" account section
        Given a user with the following criteria
            | criteria           |
            | 4 or more accounts |
        And the user accesses to "QR operative and CoDi" item located in the sidebar
        And the user selects "enroll now" in the enroll process
        And the user accesses to "view all accounts" in the enroll process
        When the user "<action>" accesses to all accounts section
        Then the user sees the following items in the screen
            | item                          |
            | enroll text                   |
            | enroll info                   |
            | name text                     |
            | phone text                    |
            | enroll message                |
            | see all                       |
            | enroll accounts               |
            | terms and conditions link     |
            | terms and conditions checkbox |
            | continue button               |
        Examples:
            | action |
            | closes |
            | exits  |

    @CODI007
    @MX @web @ios @android
    @backend(test) @vbank @manual @JIRA.GLOMOMX-180972
    Scenario: User abandon enroll process
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to "QR operative and CoDi" item located in the sidebar
        And the user selects "enroll now" in the enroll process
        When the user abandons the enrollment process
        Then the user accesses the "dashboard" screen
