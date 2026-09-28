@storeAndForward
Feature: Bill Payments Store And Forward

    @BPOH001
    @ios @android @web @web-done
    @MX
    @vbank
    @backend(test)
    @smokeTest
    @spherica
    Scenario: Store And Forward Happy Path Dashboard
        Given a user with the following criteria
            | criteria                    |
            | store and forward reference |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        When the user make a store and forward payment and navigate to "dashboard"
        Then the user sees the following items in the screen
            | item            |
            | dashboard body  |
            | More operatives |
            | NBO section     |

    @BPOH002
    @ios @android @web @web-done
    @MX
    @vbank
    @backend(test)
    @spherica
    Scenario: Store And Forward Happy Path From View More Product Detail
        Given a user with the following criteria
            | criteria                    |
            | store and forward reference |
        And the user accesses to the first time to bill payments from accounts
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        When the user make a store and forward payment and navigate to "account"
        Then the user sees the following items in the screen
            | item                   |
            | account                |
            | bill payment operative |
            | transfer operative     |
            | view more icon         |
            | back button            |

    @BPOH003
    @ios @android @web @web-done
    @MX
    @vbank
    @backend(test)
    @spherica
    Scenario: Store And Forward Schedule Payment From Save Service List
        Given a user with the following criteria
            | criteria                    |
            | store and forward reference |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        When the user makes a payment from the saved services list and navigates to schedule payment
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | close button      |
            | reference         |
            | help information  |
            | understood button |

    @BPOH004
    @ios @android @web @web-done
    @MX
    @vbank
    @backend(test)
    @spherica
    Scenario Outline: Store And Try Payments With Reference Expired And Exit For <exitType>
        Given a user with the following criteria
            | criteria                    |
            | store and forward reference |
        And the user accesses to the first time to bill payments from accounts
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        When the user exits the reference expired modal using "<exitType>"
        Then the user sees the following items in the screen
            | item                   |
            | account                |
            | bill payment operative |
            | transfer operative     |
            | view more icon         |
            | back button            |

        Examples:
            | exitType |
            | expFtr   |
            | expHdr   |
