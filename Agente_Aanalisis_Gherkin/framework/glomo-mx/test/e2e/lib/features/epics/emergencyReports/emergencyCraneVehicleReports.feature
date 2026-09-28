@emergencyCraneVehicleReports
Feature: Emergency Crane Vehicle Reports

    @REG001
    @MX @vbank
    @web @android @ios
    @backend(test)
    @web-done @smokeTest
    Scenario: The user successfully complete the vehicle crane flow
        Given a user with the following criteria
            | criteria                        |
            | emergency crane vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crane" for select "create report"
        Then the user sees the following items in the screen
            | item                   |
            | title crane success    |
            | subtitle crane success |
            | detail success crane   |
            | timer success crane    |
            | call success crane     |
            | pdf success crane      |
            | share success crane    |

    @REG002
    @MX @vbank
    @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user accept change geolocation for report crane
        Given a user with the following criteria
            | criteria                        |
            | emergency crane vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crane" for select "accept change geolocation"
        Then the user sees the following items in the screen
            | item                      |
            | title geo crane collapsed |
            | summary geo               |
            | description summary crane |
            | accept summary crane      |
            | privacity summary crane   |

    @REG003
    @MX @vbank
    @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user already has a vehicle report
        Given a user with the following criteria
            | criteria                        |
            | emergency crane vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crane" for select "create report"
        Then the user sees the following items in the screen
            | item                      |
            | title already crane       |
            | description already crane |
            | call already crane        |
            | cancel already crane      |

    @REG004
    @MX @vbank
    @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user exit to the faqs
        Given a user with the following criteria
            | criteria                        |
            | emergency crane vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crane" for select "close faqs"
        Then the user sees the following items in the screen
            | item             |
            | title geo crane  |
            | map crane        |
            | change geo crane |
            | accept geo crane |

    @REG005
    @MX @vbank
    @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user exits without saving data
        Given a user with the following criteria
            | criteria                        |
            | emergency crane vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crane" for select "close middle modal"
        Then the user sees the following items in the screen
            | item              |
            | header menu       |
            | detail policy     |
            | button left menu  |
            | button right menu |
            | title menu        |
            | option shock      |
            | option crane      |
            | option stole      |
            | option assistance |

    @REG006
    @MX @vbank
    @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user exits by closing the flow
        Given a user with the following criteria
            | criteria                        |
            | emergency crane vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crane" for select "close crane"
        Then the user sees the following items in the screen
            | item              |
            | header menu       |
            | detail policy     |
            | button left menu  |
            | button right menu |
            | title menu        |
            | option shock      |
            | option crane      |
            | option stole      |
            | option assistance |

    @REG007
    @MX @vbank
    @web @android @ios
    @backend(test)
    @web-done
    Scenario: Validate modify report from summary
        Given a user with the following criteria
            | criteria                        |
            | emergency crane vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crane" for select "modify location from summary"
        Then the user sees the following items in the screen
            | item             |
            | title geo crane  |
            | map crane        |
            | change geo crane |
            | accept geo crane |
