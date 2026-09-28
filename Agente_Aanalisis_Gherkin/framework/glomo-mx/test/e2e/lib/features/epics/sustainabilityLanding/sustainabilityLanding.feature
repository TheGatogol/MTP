@SustainabilityLandingSectionPage
Feature: Sustainability Landing Section Page

    @SLA001
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    @backend-smoke
    Scenario: The user access to sidebar and see Sustainability section
        Given a user with the following criteria
            | criteria                                          |
            | sustainability carbon footprint user with data    |
        And the user access the "dashboard" screen
        When the user accesses to the sidebar
        Then the user will see following options enabled in sidebar
            | item              |
            | profile           |
            | Sustainability    |
            | salir option    |

    @SLA002
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    @backend-smoke
    @smokeTest
    Scenario: The user sees Sustainability Landing Section and some products
        Given a user with the following criteria
            | criteria                                         |
            | sustainability carbon footprint user with data   |
        When the user accesses to sustainability section
        Then the user sees the following items in the screen
            | item                           |
            | header                         |
            | solar paneles simulator card   |
            | home appliance simulator card  |
            | car simulator card             |
            | carousel card                  |
            | carbon footprint overview card |
            | reforestry proyects            |

    @SLA003
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    @backend-smoke
    @smokeTest
    Scenario: The user sees Sustainability Landing Section and only one product
        Given a user with the following criteria
            | criteria                                          |
            | sustainability carbon footprint user with data    |
        When the user accesses to sustainability section
        Then the user sees the following items in the screen
            | item                           |
            | header                         |
            | solar paneles simulator card   |
            | home appliance simulator card  |
            | car simulator card             |
            | product card                   |
            | carbon footprint overview card |
            | reforestry proyects            |
