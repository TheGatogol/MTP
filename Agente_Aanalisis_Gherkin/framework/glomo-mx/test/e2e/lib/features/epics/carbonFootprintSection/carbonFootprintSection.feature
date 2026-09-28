@carbonFootprintSection
Feature: carbon Footprint Section

    @CFS001
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    @smokeTest
    Scenario: Access to receipt payment screen
        Given a user with the following criteria
            | criteria                                          |
            | sustainability carbon footprint user without data |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint section
        When the user accesses bill payments dashboard
        Then the user accesses the "bill payments dashboard" screen

    @CFS002
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: Access to schedule receipt payment screen
        Given a user with the following criteria
            | criteria                                          |
            | sustainability carbon footprint user without data |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint section
        When the user accesses to the scheduled payment option
        Then the user accesses the "service payment" screen

    @CFS003
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: Access to atmos screen from carousel
        Given a user with the following criteria
            | criteria                                           |
            | sustainability carbon footprint user with forestry |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint section
        When the user accesses to sustainability carbon footprint offset section
        Then the user sees the "sustainability carbon footprint offset" screen

    @CFS004
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: Access to atmos screen from actions list
        Given a user with the following criteria
            | criteria                                           |
            | sustainability carbon footprint user with forestry |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint section
        And the user consults to actions list
        When the user accesses to forestry section
        Then the user sees the "sustainability carbon footprint offset" screen

    @CFS005
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: Access to solar panel simulator
        Given a user with the following criteria
            | criteria                                           |
            | sustainability carbon footprint user with insights |
        And the user accesses to Sustainability carbon footprint section
        And the user opens expandable legend toggle
        When the user accesses to light detail
        Then the user accesses to the panels simulator section

    @CFS006
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: Access to car simulator
        Given a user with the following criteria
            | criteria                                           |
            | sustainability carbon footprint user with insights |
        And the user accesses to Sustainability carbon footprint section
        And the user opens expandable legend toggle
        When the user accesses to fuel detail
        Then the user accesses to the car simulator section

    @CFS007
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: Access to appliance simulator
        Given a user with the following criteria
            | criteria                                       |
            | sustainability carbon footprint user with data |
        And the user accesses to Sustainability carbon footprint section
        And the user opens expandable legend toggle
        When the user accesses to gas detail
        Then the user accesses to the appliance simulator section

    @CFS008
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: A user without footprint sees Sustainability section
        Given a user with the following criteria
            | criteria                                          |
            | sustainability carbon footprint user without data |
        And the user accesses to sustainability section
        When the user accesses to Sustainability carbon footprint section
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | no data info        |
            | no data emissions   |
            | comparative         |
            | carousel            |
            | atmos carousel card |

    @CFS009
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: The user sees right Sustainability operatives availability
        Given a user with the following criteria
            | criteria                                       |
            | sustainability carbon footprint user with data |
        And the user accesses to sustainability section
        When the user accesses to Sustainability carbon footprint section
        Then the feature has the following operatives with their corresponding status
            | legitimate interest mark | unavailable |
            | insights                 | available   |
            | comparative              | available   |
            | simulators               | available   |
            | forestry projects        | available   |

    @CFS010
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: The user sees Sustainability section
        Given a user with the following criteria
            | criteria                                       |
            | sustainability carbon footprint user with data |
        And the user accesses to sustainability section
        When the user accesses to Sustainability carbon footprint section
        Then the user sees the following items in the screen
            | item                     |
            | header                   |
            | monthly emissions        |
            | donut chart              |
            | donut legend             |
            | equivalence              |
            | comparative              |
            | comparative notification |
            | carousel                 |
            | atmos carousel card      |

    @CFS011
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: The user visit FAQs
        Given a user with the following criteria
            | criteria                                       |
            | sustainability carbon footprint user with data |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint section
        When the user consults the FAQs
        Then the user sees the following items in the screen
            | item            |
            | faqs title      |
            | faqs question 1 |
            | faqs question 2 |
            | faqs question 3 |
