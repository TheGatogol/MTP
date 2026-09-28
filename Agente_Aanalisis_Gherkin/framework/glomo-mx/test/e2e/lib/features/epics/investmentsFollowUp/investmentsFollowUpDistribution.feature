@investmentsFollowUpDistribution
Feature: My Investments Distribution Of My Investments

    @MID001
    @MX @vbank @web-done @backend(test)
    @smokeTest
    @web @ios @android
    @backend-smoke
    Scenario: Distribution of my investments section
        Given a user with the following criteria
            | criteria  |
            | user with investments |
        And the user accesses My Investments dashboard "with onboarding"
        And the user closes the onboarding
        When the user accesses My Investments distribution
        Then the user sees the following items in the screen
            | item                                              |
            | follow up investments distribution of investments |
            | selector by product                               |
            | selector by family                                |
            | distribution by product                           |
            | list products                                     |

    @MID002
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: Distribution of my investments - access to products and families
        Given a user with the following criteria
            | criteria  |
            | user with investments |
        And the user accesses My Investments dashboard "without onboarding"
        And the user accesses My Investments distribution
        When the user changes section to "families" and the list is shown
        Then the user sees the following items in the screen
            | item                   |
            | distribution by family |
            | list families          |

    @MID003
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario Outline: Distribution of my investments - selecting a "<typeItem>" from the list
        Given a user with the following criteria
            | criteria  |
            | user with investments |
        And the user accesses My Investments dashboard "without onboarding"
        And the user accesses My Investments distribution
        And the user changes section to "<typeSection>" and the list is shown
        When the user selects a "<typeItem>" from the list
        Then the selected "<typeItem>" is displayed in the pie chart

        Examples:
            | typeItem | typeSection |
            | family   | families    |
            | product  | products    |
