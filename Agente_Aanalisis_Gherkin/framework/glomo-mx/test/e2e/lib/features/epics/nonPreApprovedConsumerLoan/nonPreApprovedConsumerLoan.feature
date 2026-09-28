@nonPreApprovedConsumerLoan
Feature: Non Pre Approved Consumer Loan

    @NPACL001
    @MX @backend(test) @vbank
    @ios @android @web @smokeTest
    @web-done @alternate-scenarios-smoke
    Scenario: The user submits the loan request
        Given a user with the following criteria
            | criteria          |
            | npa consumer loan |
        And the user goes to the npa offer loan screen
        And the user accept credit bureau application
        And the loan offer screen is showed
        When the user hire the offer
        Then the user sees a modal with the following elements:
            | item                  |
            | modal header          |
            | modal message title   |
            | first modal paragraph |

    @NPACL002
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: The user accesses the details of the offer
        Given a user with the following criteria
            | criteria          |
            | npa consumer loan |
        And the user goes to the npa offer loan screen
        And the user accept credit bureau application
        When the loan offer screen is showed
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | detail offer step |
            | continue button   |

    @NPACL003
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: The user open the credit history inquiry authorization terms
        Given a user with the following criteria
            | criteria          |
            | npa consumer loan |
        And the user goes to the npa offer loan screen
        When the user open the credit history inquiry authorization terms
        Then the user sees a modal with the following elements:
            | item                       |
            | header without full height |
            | authorization message      |

    @NPACL004
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: The user open the life insurance modal help
        Given a user with the following criteria
            | criteria          |
            | npa consumer loan |
        And the user goes to the npa offer loan screen
        And the user accept credit bureau application
        And the loan offer screen is showed
        When the user open the life insurance modal help
        Then the user sees the following items in the screen
            | item                      |
            | help modal header         |
            | help modal icon           |
            | first help modal message  |
            | second help modal message |
            | third help modal message  |
            | fourth help modal message |

    @NPACL005
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: The user open the tax modal help
        Given a user with the following criteria
            | criteria          |
            | npa consumer loan |
        And the user goes to the npa offer loan screen
        And the user accept credit bureau application
        And the loan offer screen is showed
        When the user open the tax modal help
        Then the user sees the following items in the screen
            | item                      |
            | help modal header         |
            | help modal icon           |
            | help modal message title  |
            | first help modal message  |
            | second help modal message |

    @NPACL006
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: The user has missing document
        Given a user with the following criteria
            | criteria                                         |
            | npa consumer loan correct offer missing document |
        When the user goes to the npa offer loan screen
        Then the user sees a modal with the following elements:
            | item                           |
            | header                         |
            | modal image                    |
            | missing documents message      |
            | title                          |
            | missing documents list         |
            | missing documents icon message |
            | share button                   |
            | find branch button             |

    @NPACL007
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: The user has poor financial health
        Given a user with the following criteria
            | criteria                                      |
            | npa consumer loan with financial health error |
        And the user goes to the npa offer loan screen
        And the user accept credit bureau application
        When the loan offer screen is showed
        Then the user sees a modal with the following elements:
            | item                         |
            | modal header                 |
            | modal icon                   |
            | modal title                  |
            | modal message                |
            | modal location branch button |

    @NPACL008
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: The user is behind on their payments
        Given a user with the following criteria
            | criteria          |
            | npa consumer loan |
        And the user goes to the npa offer loan screen
        And the user accept credit bureau application
        And the loan offer screen is showed
        When the user hire the offer
        Then the user sees a modal with the following elements:
            | item                   |
            | modal header           |
            | modal image            |
            | modal title            |
            | first modal paragraph  |
            | second modal paragraph |

    @NPACL009
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: The user has an outstanding debt
        Given a user with the following criteria
            | criteria          |
            | npa consumer loan |
        And the user goes to the npa offer loan screen
        And the user accept credit bureau application
        And the loan offer screen is showed
        When the user hire the offer
        Then the user sees a modal with the following elements:
            | item          |
            | modal header  |
            | modal icon    |
            | modal title   |
            | modal message |

    @NPACL010
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: No offer available
        Given a user with the following criteria
            | criteria          |
            | npa consumer loan |
        And the user goes to the npa offer loan screen
        And the user accept credit bureau application
        And the loan offer screen is showed
        When the user hire the offer
        Then the user sees a modal with the following elements:
            | item                  |
            | modal header          |
            | modal image           |
            | modal title           |
            | first modal paragraph |
