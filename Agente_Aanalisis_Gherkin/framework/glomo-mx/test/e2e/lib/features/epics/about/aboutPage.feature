@aboutPage
Feature: About Page

    @ABP001
    @ios @android @native
    @MX @manual @JIRA.GLOMOGL-26754
    @android-done @ios-done
    Scenario: See about without login
        Given the user accesses the Login Screen
        When the user accesses to "About" item located in the sidebar
        Then the user sees the following items in the screen
            | item           |
            | Header         |
            | Backbutton     |
            | About app link |
            | Terms link     |

    @ABP002
    @ios @android @native
    @MX @manual @JIRA.GLOMOGL-26754
    @android-done @ios-done
    Scenario: See about with login
        Given the user acesses the dashboard
        When the user accesses to "About" item located in the sidebar from dashboard
        Then the user sees the following items in the screen
            | item           |
            | Header         |
            | Backbutton     |
            | About app link |
            | Terms link     |

    @ABP003
    @MX @web
    @smokeTest
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: See about screen without login
        Given a user accesses the application
        When the user accesses to the sidebar
        And the user accesses to "About" item located in the sidebar
        Then the user sees the following items in the screen
            | item          |
            | title         |
            | back button   |
            | about link    |
            | terms link    |

    @ABP004
    @MX @web
    @smokeTest
    @vbank
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: See about screen with login
        Given a user with the following criteria
            | criteria         |
            | foreign accounts |
            | glomo help       |
        When the user accesses to dashboard
        And the user accesses to "About" item located in the sidebar
        Then the user sees the following items in the screen
            | item          |
            | title         |
            | back button   |
            | about link    |
            | terms link    |

    @ABP005
    @MX @web
    @alternate-scenarios-smoke
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Go back from about screen in public zone
        Given a user accesses the application
        When the user accesses to the sidebar
        And the user accesses to "About" item located in the sidebar
        And the user goes back to previous page
        Then the user accesses the "login" screen

    @ABP006
    @MX @web
    @alternate-scenarios-smoke
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Go back from about screen with login
        Given a user with the following criteria
            | criteria         |
            | foreign accounts |
            | glomo help       |
        When the user accesses to dashboard
        And the user accesses to "About" item located in the sidebar
        And the user goes back to previous page
        Then the user accesses the "dashboard" screen

    @ABP007
    @MX @web
    @alternate-scenarios-smoke
    @vbank
    @backend(test)
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-251386
    Scenario: Rate screen in public zone
        Given a user accesses the application
        When the user accesses to the Application Feedback screen
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | Feedback Exit Button   |
            | Feedback External Page |

    @ABP008
    @MX @web
    @alternate-scenarios-smoke
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-251386
    Scenario: Rate screen with login
        Given a user with the following criteria
            | criteria         |
            | foreign accounts |
            | glomo help       |
        When the user accesses to dashboard
        And the user accesses to the Application Feedback screen
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | Feedback Exit Button   |
            | Feedback External Page |

    @ABP009
    @MX @web
    @alternate-scenarios-smoke
    @vbank @android @ios
    @backend(test)
    @web-done @tmpExclude @JIRA.GLOMOMX-146856
    @manual @JIRA.GLOMOMX-251386
    Scenario: Access to feedback and leave the feedback process
        Given a user with the following criteria
            | criteria    |
            | about login |
        And the user accesses to dashboard
        And the user accesses to the Application Feedback screen
        When the user leaves the feedback process
        Then the user accesses the "About" screen

    @ABP010
    @MX @web
    @alternate-scenarios-smoke
    @!vbank @android @ios
    @backend(test)
    @manual @JIRA.GLOMOGL-20198
    Scenario: Access to terms and conditions user logged
        Given a user with the following criteria
            | criteria    |
            | about login |
        And the user accesses to dashboard
        When the user is in About screen and accesses to "Legal terms and conditions"
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | back button                |
            | Legal terms and conditions |

    @ABP011
    @MX @web
    @alternate-scenarios-smoke
    @!vbank @android @ios
    @backend(test)
    @no-data-manager @manual @JIRA.GLOMOGL-20198
    Scenario: Access to terms and conditions user no logged
        Given a user accesses the application
        And the user accesses to the sidebar
        When the user is in About screen and accesses to "Legal terms and conditions"
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | back button                |
            | Legal terms and conditions |

    @ABP012
    @MX @web
    @alternate-scenarios-smoke
    @!vbank @android @ios
    @backend(test)
    @manual @JIRA.GLOMOGL-20198
    @JIRA.GLOMOMX-251386
    Scenario Outline: Rate <case>
        Given a user with the following criteria
            | criteria    |
            | about login |
        And the user accesses to dashboard
        And the user accesses to the Application Feedback screen
        When the user rates "<date>" stars and sends
        Then the user sees the following items in the screen
            | item           |
            | Header         |
            | Backbutton     |
            | About app link |
            | Terms link     |
            | Feedback link  |
        Examples:
            | date | case                      |
            | 5    | with five star            |
            | 2    | with less than five stars |
