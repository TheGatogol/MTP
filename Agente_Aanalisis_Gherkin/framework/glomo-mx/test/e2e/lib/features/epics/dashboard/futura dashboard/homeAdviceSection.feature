@homeAdvice
Feature: Home Advice

    @ADV001
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Validate that the financial health description of a user with expenses is displayed
        Given a user with the following criteria
            | criteria      |
            | futura user   |
        And the user accesses to dashboard
        When the user goes to financial health widget
        Then the user sees the following items in the screen
            | item                           |
            | financial health title         |
            | amounts of financial health    |
            | date advice section            |

    @ADV003
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web
    @web-done
    @backend-smoke
    Scenario: Validate that the user's income details are displayed
        Given a user with the following criteria
            | criteria      |
            | futura advice |
        And the user accesses to dashboard
        When the user accesses PFM categorization from "income"
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | header back button     |
            | movements tab          |

    @ADV004
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web
    @web-done
    @backend-smoke
    Scenario: Validate that the details of the user's investments are displayed
        Given a user with the following criteria
            | criteria      |
            | futura user   |
        And the user accesses to dashboard
        And the user accesses My Investments dashboard "from futura"
        And the user closes the onboarding
        When the user accesses My Investments distribution
        Then the user sees the following items in the screen
            | item                                              |
            | follow up investments distribution of investments |
            | selector by product                               |
            | selector by family                                |

    @ADV005
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @smokeTest
    @web-done
    @backend-smoke
    Scenario: Validate that the user's expense details are displayed
        Given a user with the following criteria
            | criteria      |
            | futura user   |
        And the user accesses to dashboard
        When the user accesses PFM categorization from "expenses"
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | header back button     |
            | movements tab          |
