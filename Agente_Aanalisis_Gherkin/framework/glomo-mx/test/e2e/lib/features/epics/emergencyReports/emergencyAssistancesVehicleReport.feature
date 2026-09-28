@emergencyAssistancesVehicleReport
Feature: Emergency Assistances Vehicle Report

    @RAV001
    @MX
    @web
    @vbank @android @ios
    @backend-smoke
    @backend(test) @smokeTest
    @web-done
    Scenario: Successful assistances report screen
        Given a user with the following criteria
            | criteria                      |
            | emergency assistances vehicle |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle assistances" for select "create report"
        Then the user sees the following items in the screen
            | item                       |
            | ilustration success        |
            | title success              |
            | description success        |
            | progress timer             |
            | call bbva line assistances |
            | view policy assistances    |
            | share policy assistances   |

    @RAV002
    @MX
    @web
    @vbank @android @ios
    @backend(test) @backend-smoke
    @web-done
    Scenario: Change geolocation of the assistance
        Given a user with the following criteria
            | criteria                      |
            | emergency assistances vehicle |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle assistances" for select "accept change location"
        Then the user sees the following items in the screen
            | item                            |
            | heading other assist            |
            | link other assist               |
            | content other assist            |
            | heading completed step location |
            | link completed step location    |
            | content complet step location   |
            | accept report                   |
            | description summary             |
            | link summary                    |

    @RAV003
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Error message when generating a second report
        Given a user with the following criteria
            | criteria                      |
            | emergency assistances vehicle |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle assistances" for select "create report"
        Then the user sees the following items in the screen
            | item                       |
            | progress modal icon        |
            | progress modal title       |
            | progress modal description |
            | progress modal button      |

    @RAV004
    @MX
    @web
    @vbank @android @ios
    @backend(test) @backend-smoke
    @web-done
    Scenario: Validate the functionality of the option return from faqs
        Given a user with the following criteria
            | criteria                      |
            | emergency assistances vehicle |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle assistances" for select "help faqs"
        Then the user sees the following items in the screen
            | item                      |
            | header assistances        |
            | button right assistances  |
            | checkbox current          |
            | checkbox gasoline         |
            | checkbox tire             |
            | tire icon                 |
            | tire description          |

    @RAV005
    @MX
    @web
    @vbank @android @ios
    @backend(test) @backend-smoke
    @web-done
    Scenario: Exit to the report assistances
        Given a user with the following criteria
            | criteria                      |
            | emergency assistances vehicle |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle assistances" for select "close flow assistances"
        Then the user sees the following items in the screen
            | item                  |
            | header menu           |
            | button left menu      |
            | button right menu     |
            | title menu            |
            | option shock          |
            | option crane          |
            | option stole          |
            | option assistance     |

    @RAV006
    @MX
    @web
    @vbank @android @ios
    @backend(test) @backend-smoke
    @web-done
    Scenario: Exit to the report assistances without modal
        Given a user with the following criteria
            | criteria                      |
            | emergency assistances vehicle |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle assistances" for select "close flow middle assistances"
        Then the user sees the following items in the screen
            | item                  |
            | header menu           |
            | button left menu      |
            | button right menu     |
            | title menu            |
            | option shock          |
            | option crane          |
            | option stole          |
            | option assistance     |
