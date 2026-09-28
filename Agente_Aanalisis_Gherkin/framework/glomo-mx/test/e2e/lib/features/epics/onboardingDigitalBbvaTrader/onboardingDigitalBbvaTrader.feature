@onboardingDigitalBbvaTrader
Feature: BBVA Trader Onboarding

    @BBT001
    @MX
    @backend(test)
    @vbank @web-done
    @smokeTest
    @web @android @ios
    @backend-smoke
    Scenario: Contract BBVA Trader
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader commercial |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user completes the onboarding flow
        When the user confirms the operation onboarding
        Then the user sees the following items in the screen
            | item                |
            | success title       |
            | success resume      |
            | entry point btrader |
            | success button row  |

    @BBT002
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario: Contract BBVA Trader with more than 1 beneficiary
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader main offer |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user completes the onboarding flow "by selecting an account"
        When the user confirms the operation onboarding
        Then the user sees the following items in the screen
            | item                |
            | success title       |
            | success resume      |
            | entry point btrader |
            | success button row  |

    @BBT003
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario: Contract BBVA Trader with more than 4 accounts and beneficiaries
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader main offer |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user completes the onboarding flow "by selecting an account in all accounts"
        When the user confirms the operation onboarding
        Then the user sees the following items in the screen
            | item                |
            | success title       |
            | success resume      |
            | entry point btrader |
            | success button row  |

    @BBT004
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario: Add beneficiary data for BBVA Trader
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader commercial |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user completes the onboarding flow "adding beneficiaries"
        When the user confirms the operation onboarding
        Then the user sees the following items in the screen
            | item                |
            | success title       |
            | success resume      |
            | entry point btrader |
            | success button row  |

    @BBT005
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario: Delete beneficiary
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader main offer |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user selects the account in the onboarding offer
        When the user deletes the beneficiary
        Then the user sees the following items in the screen
            | item                 | value    |
            | step beneficiaries   |          |
            | beneficiary item     |          |
            | add beneficiary link |          |
            | continue button      | disabled |

    @BBT006
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario: Edit beneficiary
        Given a user with the following criteria
            | criteria                       |
            | onboarding btrader main offer  |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user selects the account in the onboarding offer
        And the user opens the "edit" beneficiary form
        When the user completes edition of beneficiary
        Then the user sees the following items in the screen
            | item                 |
            | step beneficiaries   |
            | beneficiary item     |
            | notification message |
            | continue button      |

    @BBT007
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario: Add new beneficiary after deleting previous ones
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader main offer |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user selects the account in the onboarding offer
        And the user deletes the beneficiary
        When the user adds the first beneficiary in the beneficiaries section
        Then the user sees the following items in the screen
            | item                 |
            | step beneficiaries   |
            | beneficiary item     |
            | notification message |
            | continue button      |

    @BBT008
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario: View client with maximum number of beneficiaries added
        Given a user with the following criteria
            | criteria                       |
            | onboarding btrader commercial  |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        When the user adds all beneficiaries in the beneficiaries section
        Then the user sees the following items in the screen
            | item                 | value         |
            | step beneficiaries   |               |
            | beneficiary item     |               |
            | notification message |               |
            | continue button      |               |
            | add beneficiary link | not displayed |

    @BBT009
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario: Edit account
        Given a user with the following criteria
            | criteria                       |
            | onboarding btrader main offer  |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user completes the onboarding flow "by selecting an account"
        When the user changes the account associated to the onboarding offer
        Then the user sees the following items in the screen
            | item                            |
            | summary account container       |
            | summary account edit link       |
            | summary beneficiaries container |
            | summary terms container         |
            | confirm button                  |

    @BBT010
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario: Edit beneficiaries section
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader main offer |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user completes the onboarding flow "by selecting an account"
        When the user return to "beneficiaries" section from summary
        Then the user sees the following items in the screen
            | item                      |
            | step beneficiaries        |
            | beneficiaries description |
            | beneficiary item          |
            | total assigned label      |
            | total assigned value      |
            | continue button           |

    @BBT011
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario: View terms and conditions
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader main offer |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user completes the onboarding flow "by selecting an account"
        When the user return to "terms and conditions" section from summary
        Then the user sees the following items in the screen
            | item                      |
            | step terms and conditions |
            | terms key points label    |
            | terms bullet item         |
            | terms documents container |
            | terms select all checkbox |
            | terms individual checkbox |
            | continue button on terms  |

    @BBT012
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario: Exit onboarding when adding beneficiary
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader commercial |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user only fills part of the beneficiary form
        When the user closes the beneficiary form
        Then the user sees the following items in the screen
            | item                                       |
            | exit beneficiary form modal                |
            | exit beneficiary form modal title          |
            | exit beneficiary form modal description    |
            | exit beneficiary form modal confirm button |
            | exit beneficiary form modal cancel button  |
