@orangeSimulator
Feature: Orange Bank Rate Simulator

    @OBS002
    @web @android @ios
    @MX
    @vbank
    @backend(artichoke)
    @web-done
    @alternate-scenarios-smoke
    Scenario: Exit of onboarding screen
        Given a user with the following criteria
            | criteria    |
            | Credit card |
        And the user accesses to the "operative" "credit" card product detail
        And the user shows onboarding simulator modal
        When the user exits the onboarding screen
        Then the user accesses the "Orange Card Detail" screen

    @OBS003
    @web @android @ios
    @MX
    @vbank
    @backend(artichoke)
    @web-done
    @alternate-scenarios-smoke
    Scenario: Bank rate simulator access screen
        Given a user with the following criteria
            | criteria    |
            | Credit card |
        And the user accesses to the "operative" "credit" card product detail
        And the user shows onboarding simulator modal
        When the user hovers over all slides
        Then the user sees the following items in the screen
            | item          |
            | Accept Button |

###### Bank rate simulator ######################

    @OBS004
    @web @android @ios
    @MX
    @vbank
    @backend(artichoke)
    @smokeTest
    @web-done
    Scenario: Card payment to not generate interest
        Given a user with the following criteria
            | criteria     |
            | card payment |
        And the user accesses to bank rate simulator
        And the user completes "non-interest" payment card process
        When the user proceeds to make the payment
        Then the user accesses the "Operation Receipt" screen
        And the user sees the following items in the screen
            | item                   | value   |
            | header                 |         |
            | operation status       |         |
            | operation date         |         |
            | amount title           |         |
            | total amount           |         |
            | type of payment        |         |
            | body section own cards |         |
            | share button           | enabled |
            | share button label     |         |
            | exit button            | enabled |

    @OBS005
    @web @android @ios
    @MX
    @vbank
    @backend(artichoke)
    @web-done
    @alternate-scenarios-smoke
    Scenario: Finish payment changing amount in card payment
        Given a user with the following criteria
            | criteria     |
            | card payment |
        And the user accesses to bank rate simulator
        And the user completes "non-interest" payment card process
        When the user finishes "another amount" payment method
        Then the user sees the following items in the screen
            | item                   | value   |
            | header                 |         |
            | operation status       |         |
            | operation date         |         |
            | amount title           |         |
            | total amount           |         |
            | type of payment        |         |
            | body section own cards |         |
            | share button           | enabled |
            | share button label     |         |
            | exit button            | enabled |

    @OBS006
    @MX
    @web @android @ios
    @vbank
    @smokeTest
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario Outline: Additional information about "<paymentsType>"
        Given a user with the following criteria
            | criteria     |
            | card payment |
        And the user accesses to bank rate simulator
        When the user defines "<paymentsType>" payment card process
        Then the user sees the following items in the screen
            | item                 |
            | <paymentsType> image |

        @backend(artichoke)
        Examples:
            | paymentsType   |
            | minimum amount |
            | non-interest   |
            | total debt     |
            | another amount |

    @OBS007
    @web @android @ios
    @MX
    @vbank
    @backend(artichoke)
    @web-done
    @alternate-scenarios-smoke
    Scenario: Access to bank rate simulator screen
        Given a user with the following criteria
            | criteria     |
            | card payment |
        When the user accesses to bank rate simulator
        Then the user accesses the "Bank Rate Simulator" screen

    @OBS008
    @web @android @ios
    @MX
    @vbank
    @backend(artichoke)
    @web-done
    @alternate-scenarios-smoke
    Scenario: Insufficient balance amount
        Given a user with the following criteria
            | criteria     |
            | card payment |
        When the user accesses to bank rate simulator with "insufficient balance"
        Then the user sees the following items in the screen
            | item                        | value    |
            | insufficient amount message |          |
            | pay button                  | disabled |

    @OBS009
    @web @android @ios
    @MX
    @vbank
    @backend(artichoke)
    @web-done
    @alternate-scenarios-smoke
    Scenario: User without accounts
        Given a user with the following criteria
            | criteria        |
            | without account |
        And the user accesses to bank rate simulator
        And the user accesses the "Bank Rate Simulator" screen
        When the user closes the tooltip
        Then the user sees the following items in the screen
            | item          |
            | Accept Button |

    @OBS010
    @web @android @ios
    @MX
    @vbank
    @backend(artichoke)
    @web-done
    @alternate-scenarios-smoke
    Scenario: Access error - Bank rate simulator service
        Given a user with the following criteria
            | criteria     |
            | card payment |
        When the user accesses to bank rate simulator with "service card error"
        And the user closes the tooltip
        Then the user sees the following items in the screen
            | item                 |
            | Access error message |

    @OBS011
    @web @android @ios
    @MX
    @vbank
    @backend(artichoke)
    @web-done
    @alternate-scenarios-smoke
    Scenario: Access to more info screen
        Given a user with the following criteria
            | criteria     |
            | card payment |
        And the user accesses to bank rate simulator
        When the user accesses to more information screen
        Then the user sees the following items in the screen
            | item                      |
            | More information message  |
            | Close information button |

    @OBS012
    @MX
    @web @android @ios
    @vbank
    @web-done
    @alternate-scenarios-smoke
    Scenario Outline: Card payment with "<paymentType>"
        Given a user with the following criteria
            | criteria     |
            | card payment |
        And the user accesses to bank rate simulator
        When the user completes "<paymentType>" payment card process
        And the user proceeds to make the payment
        Then the user accesses the "Operation Receipt" screen
        And the user sees the following items in the screen
            | item                   | value   |
            | header                 |         |
            | operation status       |         |
            | operation date         |         |
            | amount title           |         |
            | total amount           |         |
            | type of payment        |         |
            | body section own cards |         |
            | share button           | enabled |
            | share button label     |         |
            | exit button            | enabled |

        @backend(artichoke)
        Examples:
            | paymentType    |
            | minimum amount |
            | total debt     |
            | another amount |

    @OBS013
    @web @android @ios
    @vbank
    @web-done
    @MX @backend(artichoke)
    @alternate-scenarios-smoke
    Scenario: Access to positive balance simulator - Info message
        Given a user with the following criteria
            | criteria     |
            | card payment |
        When the user accesses to bank rate simulator with "positive balance"
        Then the user sees the following items in the screen
            | item                     |
            | Positive Balance Message |
