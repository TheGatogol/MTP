@stopLoss
Feature: Stop Loss

    @SL001
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    Scenario Outline: Happypath apply for a <product> card
        Given a user with the following criteria
            | criteria              |
            | stop loss credit card |
        And the user accesses to the credit card holder section from "nbo"
        And the user exits the credit card holder section from "selecting avoid interest payment"
        When the user "confirms the return" of the credit card holder offer
        Then the user sees the "credit card holder" screen

        Examples:
            | product            |
            | less than 6 months |
            | platinum           |
            | oro                |
            | shopper tdd        |
            | free spenders      |
            | low banking        |
            | traditionalists    |
            | generic            |
            | crea               |

    @SL002
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    Scenario: The user exits flow
        Given a user with the following criteria
            | criteria              |
            | stop loss credit card |
        And the user accesses to the credit card holder section from "nba"
        And the user exits the credit card holder section from "selecting avoid interest payment"
        When the user "confirms the exit" of the credit card holder offer
        Then the user sees the "dashboard" screen

    @SL003
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    Scenario: The user exits the flow in two attempts
        Given a user with the following criteria
            | criteria              |
            | stop loss credit card |
        And the user accesses to the credit card holder section from "nba"
        And the user exits the credit card holder section from "selecting avoid interest payment"
        And the user "confirms the return" of the credit card holder offer
        When the user exits the credit card holder section from "two attempts"
        Then the user sees the "dashboard" screen

    @SL004
    @vbank
    @MX
    @web @ios @android
    @web-done @smokeTest
    @backend(test)
    Scenario: Validate the benefits modal
        Given a user with the following criteria
            | criteria              |
            | stop loss credit card |
        And the user accesses to the credit card holder section from "nba"
        When the user exits the credit card holder section from "exit from offer page"
        Then the user sees a modal with the following elements:
            | item                            |
            | stop loss benefits header       |
            | stop loss benefits close button |
            | stop loss benefit title         |
            | stop loss benefit description   |
            | stop loss offer return button   |
            | stop loss offer exit button     |

    @SL005
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    Scenario: Validate the error information modal after retrying 3 times
        Given a user with the following criteria
            | criteria              |
            | stop loss credit card |
        And the user accesses to the credit card holder section from "nba"
        And the user exits the credit card holder section from "selecting avoid interest payment"
        When the user performs "retry three times the error information" with "normal"
        Then the user sees a modal with the following elements:
            | item                                     |
            | stop loss error information header       |
            | stop loss error information close button |
            | stop loss error information title        |
            | stop loss error information description  |
            | stop loss error information exit button  |

    @SL006
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    Scenario: Validate unavailable operation
        Given a user with the following criteria
            | criteria              |
            | stop loss credit card |
        And the user accesses to the credit card holder section from "nba"
        When the user exits the credit card holder section from "selecting avoid interest payment"
        Then the user sees a modal with the following elements:
            | item                                 |
            | stop loss error service header       |
            | stop loss error service close button |
            | stop loss error service title        |
            | stop loss error service description  |
            | stop loss error service exit button  |
