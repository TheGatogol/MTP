@assistanceManager
Feature: AssistanceManager

    @AM001
    @web @ios @android
    @vbank @backend(test)
    @smokeTest
    @web-done
    @MX
    @backend-smoke
    Scenario: Validate when you access more information
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        And the user accesses a personal advisor
        When the user accesses more information in assistance benefits
        Then the user sees the following items in the screen
            | item            |
            | label benefits  |
            | accept button   |
            | message advisor |

    @AM002
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Validate when the user sends a successful email
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        And the user accesses a personal advisor
        And the user accesses email
        And the user enters message
        When the user sends message
        Then the user sees the following items in the screen
            | item            |
            | message title   |
            | success exit    |
            | success content |

    @AM003
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    @alternate-scenarios-smoke
    Scenario: Validate when user enters show data
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        And the user accesses a personal advisor
        And the user accesses email
        And the user enters show data
        And the user enters message
        When the user sends message
        Then the user sees the following items in the screen
            | item            |
            | success img     |
            | success content |
            | success exit    |

    @AM004
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    @alternate-scenarios-smoke
    Scenario: Validate calling an advisor when you are out of hours
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        And the user starts the application at date:
            | hour   | 2    |
            | day    | 6    |
            | month  | 9    |
            | year   | 2023 |
        And the user accesses a personal advisor
        When the user enters call advisor
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | modal out time |
            | title out time |
            | button call    |
            | button exit    |

    @AM005
    @web @ios @android
    @!vbank @backend(test)
    @MX
    @manual @JIRA.GLOMOMX-159689
    Scenario: Validate error message assistance manager
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        When the user accesses a personal advisor
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | back button |
            | image error |
            | text error  |
            | exit button |

    @AM007
    @web @ios @android
    @!vbank @backend(test)
    @MX
    @manual @JIRA.GLOMOMX-159689
    Scenario: Validate error message when sending mail
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        When the user accesses to assistance manager
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | back button  |
            | title header |
            | input        |
            | send button  |

    @AM008
    @web @ios @android
    @!vbank @backend(test)
    @MX
    @manual @JIRA.GLOMOMX-159689
    Scenario: Validate error message when accessing email
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        When the user accesses a personal advisor
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | button modal email |
            | email modal title  |
            | icon modal         |

    @AM009
    @web @ios @android
    @!vbank @backend(test)
    @MX
    @manual @JIRA.GLOMOMX-159689
    Scenario: Validate access more information error
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        And the user accesses a personal advisor
        When the user access more information
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | back button      |
            | title header     |
            | exit modal error |

    @AM010
    @web @ios @android
    @!vbank @backend(test)
    @MX
    @manual @JIRA.GLOMOMX-159689
    Scenario: Validate error of operation not carried out when sending email
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        And the user accesses to assistance manager
        And the user enters message
        When the user sends message
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | message title   |
            | success exit    |
            | success content |

    @AM011
    @web @ios @android
    @!vbank @backend(test)
    @MX
    @manual @JIRA.GLOMOMX-159689
    Scenario: Validate error message when displaying data
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | user manager       |
        And the user accesses a personal advisor
        And the user accesses email
        And the user enters message
        When the user enters show data
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | back button  |
            | title header |
            | text         |
