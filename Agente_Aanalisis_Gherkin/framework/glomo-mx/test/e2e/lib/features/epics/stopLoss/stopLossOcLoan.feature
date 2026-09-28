@stopLossOcLoan
Feature: Stop Loss OC Loan

    @CAC001
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    Scenario: The user leaves the offer page
        Given a user with the following criteria
            | criteria                |
            | stop loss personal loan |
        And the user accesses to the "consumer loan" section from oportunities
        When the user exits the consumer loan section from the "offer page"
        Then the user sees the "contract product section" screen

    @CAC002
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    Scenario: Validate the closing modal after interacting with Simulate your loan
        Given a user with the following criteria
            | criteria                |
            | stop loss personal loan |
        And the user accesses to the "consumer loan" section from oportunities
        When the user exits for the second time from simulation
        Then the user sees the following items in the screen:
            | item                     |
            | modal close              |
            | modal title              |
            | modal icon               |
            | btn accept generic modal |
            | btn link generic modal   |

    @CAC003
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    Scenario: Validate the closing modal after leaving Terms and Conditions
        Given a user with the following criteria
            | criteria                |
            | stop loss personal loan |
        And the user accesses to the "consumer loan" section from oportunities
        When the user exits for the second time terms and conditions
        Then the user sees the following items in the screen:
            | item                     |
            | modal close              |
            | modal title              |
            | modal icon               |
            | btn accept generic modal |
            | btn link generic modal   |

    @CAC004
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    @smokeTest
    Scenario: Validate abandoned cart modal
        Given a user with the following criteria
            | criteria                |
            | stop loss personal loan |
        And the user accesses to the "consumer loan" section from oportunities
        When the user exits the consumer loan section from the "summary"
        Then the user sees a modal with the following elements:
            | item                            |
            | stop loss benefits header       |
            | stop loss benefits close button |
            | stop loss benefit title         |
            | stop loss benefit description   |
            | stop loss offer return button   |
            | stop loss offer exit button     |
