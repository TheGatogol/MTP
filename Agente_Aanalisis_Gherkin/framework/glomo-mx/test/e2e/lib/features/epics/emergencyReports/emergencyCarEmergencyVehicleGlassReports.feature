@emergencyCarVehicleGlassReports
Feature: Emergency Car Emergency Vehicle Glass Reports

    @CRI001
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done @smokeTest
    Scenario: The user reports glass damage
        Given a user with the following criteria
            | criteria                  |
            | emergency glass reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "create report"
        Then the user sees the following items in the screen
            | item                     |
            | subheader glass          |
            | date glass               |
            | subheader glass          |
            | report identifier glass  |
            | brand glass              |
            | policy glass             |
            | date of incident glass   |
            | deductible glass         |
            | location detail glass    |
            | notification glass       |
            | share glass              |

    @CRI002
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user goes to the summary
        Given a user with the following criteria
            | criteria                  |
            | emergency glass reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "resume"
        Then the user sees the following items in the screen
            | item                      |
            | btn confirmation glass    |
            | resume confirmation glass |
            | notice of privacy glass   |

    @CRI003
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario Outline: The user selects car view - <selected>
        Given a user with the following criteria
            | criteria                |
            | emergency glass reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "<selected>"
        Then the user sees the following items in the screen
            | item    |
            | <glass> |
        Examples:
            | selected  | glass            |
            | top       | windshield glass |
            | left      | front fin        |
            | right     | rear fin         |

    @CRI004
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user selects two crystals
        Given a user with the following criteria
            | criteria                |
            | emergency glass reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "two crystals"
        Then the user sees the following items in the screen
            | item                         |
            | location title glass         |
            | map static glass             |
            | map static description glass |
            | change location glass        |
            | notification location glass  |

    @CRI005
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user goes to the accident date step
        Given a user with the following criteria
            | criteria                |
            | emergency glass reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "edit accident date step"
        Then the user sees the following items in the screen
            | item                         |
            | date title glass             |
            | date input description glass |
            | date notification glass      |
            | date continue glass          |

    @CRI006
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user goes to the damaged glass step
        Given a user with the following criteria
            | criteria                |
            | emergency glass reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "edit damaged glass step"
        Then the user sees the following items in the screen
            | item               |
            | damage title glass |
            | windshield glass   |
            | radio group glass  |

    @CRI007
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user goes to the location step
        Given a user with the following criteria
            | criteria                |
            | emergency glass reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "edit location step"
        Then the user sees the following items in the screen
            | item                         |
            | location title glass         |
            | map static glass             |
            | map static description glass |
            | change location glass        |
            | notification location glass  |

    @CRI008
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user sees the privacy notice
        Given a user with the following criteria
            | criteria                |
            | emergency glass reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "privacy notice"
        Then the user sees the following items in the screen
            | item                               |
            | header generic glass               |
            | description public limited company |
            | description privacy notice         |

    @CRI009
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user exits the reports
        Given a user with the following criteria
            | criteria                  |
            | emergency glass reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "exit summary"
        Then the user sees the following items in the screen
            | item                 | value   |
            | header menu          |         |
            | detail policy        | visible |
            | title menu           |         |
            | option shock         | visible |
            | option glass damage  | visible |

    @CRI010
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user clicks exit screen date of incident
        Given a user with the following criteria
            | criteria                  |
            | emergency glass reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "exit"
        Then the user sees the following items in the screen
            | item                 | value   |
            | header menu          |         |
            | detail policy        | visible |
            | title menu           |         |
            | option shock         | visible |
            | option glass damage  | visible |

    @CRI011
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user goes to the summary and clicks exit screen location
        Given a user with the following criteria
            | criteria                  |
            | emergency glass reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "exit modal"
        Then the user sees the following items in the screen
            | item                 | value   |
            | header menu          |         |
            | detail policy        | visible |
            | title menu           |         |
            | option shock         | visible |
            | option glass damage  | visible |
