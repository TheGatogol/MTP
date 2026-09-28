@emergencyTrackingReports
Feature: Emergency Tracking Reports

    @AT001
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @backend-smoke
    @web-done
    Scenario: The user accesses to adjuster follow screen
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports with an active report" using deeplink navigation
        When tracking report is displayed
        Then the user sees the following items in the screen
            | item                    |
            | header tr               |
            | exit button tr          |
            | microillustration tr    |
            | detected title tr       |
            | detected description tr |
            | button link to report tr|

    @AT002
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The data of the assigned adjuster is not yet available on tracking report
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports with an active report" using deeplink navigation
        When the user go to tracking report
        Then the user sees the following items in the screen
            | item              |
            | header tc         |
            | exit button tc    |
            | map tc            |
            | spinner tc        |
            | description tc    |

    @AT003
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The assigned adjuster is already available on tracking report
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports with an active report" using deeplink navigation
        When the user go to tracking report
        Then the user sees the following items in the screen
            | item                  |
            | header tca            |
            | exit button tca       |
            | map tca               |
            | tooltip map tca       |
            | exit tooltip tca      |
            | photo tca             |
            | title tca             |
            | policy text tca       |
            | time text tca         |
            | cancel operation tca  |
            | call operation tca    |

    @AT004
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user accesses to cancel tracking report screen
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports with an active report" using deeplink navigation
        When the user decides to cancel the report
        Then the user sees the following items in the screen
            | item               |
            | content cancel trc |
            | cancel button trc  |
            | back link trc      |

    @AT005
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done @smokeTest
    Scenario: The user Cancel tracking Report
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports with an active report" using deeplink navigation
        And the user decides to cancel the report
        When the user tab on "cancel report"
        Then the user sees the following items in the screen
            | item                     |
            | header tcancel           |
            | exit button tcancel      |
            | microilustración tcancel |
            | title tcancel            |
            | message tcancel          |
            | icon tcancel             |
            | description tcancel      |
            | number link              |

    @AT006
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user accesses the report and there is a report in progress
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports with an active report" using deeplink navigation
        When the user go to tracking report
        Then the user sees the following items in the screen
            | item                     |
            | header kc                |
            | exit button kc           |
            | microillustration kc     |
            | title kc                 |
            | description kc           |
            | accept button kc         |
            | cancel button kc         |
