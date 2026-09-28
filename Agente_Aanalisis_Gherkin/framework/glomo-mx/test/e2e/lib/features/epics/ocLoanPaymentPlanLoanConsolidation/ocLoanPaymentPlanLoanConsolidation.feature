@ocLoanPaymentPlanLoanConsolidation
Feature: OC Loan Payment Plan Loan Consolidation

    @DBT002
    @MX @vbank @web-done @backend(test)
    @smokeTest
    @web @android @ios
    Scenario: Access to offers with loan payment plan loan plus loan and authorize offer binding
        Given a user with the following criteria
            | criteria                        |
            | loan payment plan restructuring |
        And the user selects payment plan offer loan consolidation loan plus loan
        And the user continues to terms and conditions for "accept and binding"
        When the user complete the offer and binding payment plan loan offer
        Then the user sees the following items in the screen
            | item                         |
            | success main text            |
            | success panel info           |
            | success notification message |
            | success info send email      |

    @DBT003
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with loan payment plan loan plus loan and show modal exit
        Given a user with the following criteria
            | criteria                        |
            | loan payment plan restructuring |
        And the user selects payment plan offer loan consolidation loan plus loan
        When the user abandons the offer
        Then the user sees the following items in the screen
            | item               |
            | help modal title   |
            | help modal icon    |
            | help modal content |
            | help modal btn     |
            | help modal link    |

    @DBT004
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers and visualize summary from the transaction
        Given a user with the following criteria
            | criteria                        |
            | loan payment plan restructuring |
        And the user selects payment plan offer loan consolidation loan plus loan
        And the user continues to terms and conditions for "visualize summary"
        When the user continues to terms and conditions for "visualize summary and requests"
        Then the user sees the following items in the screen
            | item                 |
            | button offer request |

    @DBT005
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers loan payment plan loan plus loans and the offer is no longer available
        Given a user with the following criteria
            | criteria                        |
            | loan payment plan restructuring |
        When the user selects payment plan offer loan consolidation loan plus loan
        Then the user sees the following items in the screen
            | item                     |
            | offer not available      |
            | offer not available text |

    @DBT006
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers loan payment plan loan plus loans and the offer is out schedule
        Given a user with the following criteria
            | criteria                        |
            | loan payment plan restructuring |
        When the user selects payment plan offer loan consolidation loan plus loan
        Then the user sees the following items in the screen
            | item                    |
            | offer out schedule      |
            | offer out schedule text |

    @DBT007
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with loan payment plan loan plus loan with max contracts
        Given a user with the following criteria
            | criteria                        |
            | loan payment plan restructuring |
        When the user selects payment plan offer loan consolidation loan plus loan
        Then the user sees the following items in the screen
            | item                         |
            | header offer                 |
            | image offer                  |
            | payment plan contracts count |
            | payment plan characteristics |
            | bullets consideration        |
            | button continue              |

    @DBT008
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offer to navigate terms and conditions and leave the offer
        Given a user with the following criteria
            | criteria                        |
            | loan payment plan restructuring |
        And the user selects payment plan offer loan consolidation loan plus loan
        And the user continues to terms and conditions for "navigate"
        When the user abandons the offer
        Then the user sees the following items in the screen
            | item               |
            | help modal title   |
            | help modal icon    |
            | help modal content |
            | help modal btn     |
            | help modal link    |

    @DBT009
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offer to validate the link for consult step
        Given a user with the following criteria
            | criteria                        |
            | loan payment plan restructuring |
        And the user selects payment plan offer loan consolidation loan plus loan
        When the user continues to terms and conditions for "visualize summary"
        Then the user sees the following items in the screen
            | item                         |
            | header offer                 |
            | image offer                  |
            | payment plan contracts count |
            | payment plan characteristics |
            | bullets consideration        |
            | button continue              |

    @DBT010
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offer to validate the link for consult step terms and conditions
        Given a user with the following criteria
            | criteria                        |
            | loan payment plan restructuring |
        And the user selects payment plan offer loan consolidation loan plus loan
        And the user continues to terms and conditions for "visualize summary"
        When the user continues to terms and conditions for "visualize summary and requests"
        Then the user sees the following items in the screen
            | item                 |
            | button offer request |

    @DBT011
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offer to navigate summary and leave the offer
        Given a user with the following criteria
            | criteria                        |
            | loan payment plan restructuring |
        And the user selects payment plan offer loan consolidation loan plus loan
        And the user continues to terms and conditions for "confirm"
        When the user abandons the offer
        Then the user sees the following items in the screen
            | item               |
            | help modal title   |
            | help modal icon    |
            | help modal content |
            | help modal btn     |
            | help modal link    |
