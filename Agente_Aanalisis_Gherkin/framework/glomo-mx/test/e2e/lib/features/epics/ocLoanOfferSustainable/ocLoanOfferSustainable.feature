@ocLoanOfferSustainable
Feature: OC Preapproved Personal Loan Sustainable

    @FHSC001
    @MX @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario Outline: The user accesses to <typeProduct>
        Given a user with the following criteria
            | criteria                 |
            | loan sustainable catalog |
        And the user goes to the "consumer loan" offer operation
        And the user select sustainable banner
        And the user accesses to product catalog
        When the user selected "<typeProduct>" sustainable
        Then the user sees the following items in the screen
            | item                        |
            | header sustainable products |
            | <typeProduct>               |

        Examples:
            | typeProduct                |
            | sustainable products water |
            | sustainable products light |
            | sustainable products gas   |

    @FHSC002
    @MX @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: The user close catalog
        Given a user with the following criteria
            | criteria         |
            | loan sustainable |
        And the user goes to the "consumer loan" offer operation
        And the user select sustainable banner
        And the user accesses to product catalog
        When the user goes to the consumers loan
        Then the user sees the following items in the screen
            | item                    |
            | customized loan header  |
            | input amount to request |
            | text term               |
            | benefits text           |
            | text conventional use   |
            | text sustainable use    |

    @FHSC003
    @MX @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: The user access to button clean of import field
        Given a user with the following criteria
            | criteria                 |
            | loan sustainable catalog |
        And the user goes to the "consumer loan" offer operation
        And the user select sustainable banner
        And the user goes to the sustainable simulator
        When the user clean import field
        Then the user sees the following items in the screen
            | item                 |
            | simulate rate        |
            | close simulate rate  |
            | input amount request |
            | purchase products    |
            | exit button          |

    @FHSC004
    @MX @web @ios
    @android @backend(test) @vbank
    @web-done
    Scenario Outline: The user accesses to <amount>
        Given a user with the following criteria
            | criteria                 |
            | loan sustainable catalog |
        And the user goes to the "consumer loan" offer operation
        And the user select sustainable banner
        And the user goes to the sustainable simulator
        And the user clean import field
        When the user adds an "<amount>" to the input
        Then the user sees the following items in the screen
            | item                 |
            | simulate rate        |
            | close simulate rate  |
            | input amount request |
            | <amount>             |
            | exit button          |
        Examples:
            | amount                          |
            | amount within the range         |
            | amount less than the minimum    |
            | amount greater than the maximum |

    @FHSC005
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: The user access to button clean of import field 2
        Given a user with the following criteria
            | criteria                 |
            | loan sustainable catalog |
        And the user goes to the "consumer loan" offer operation
        And the user select sustainable banner
        And the user goes to the sustainable simulator
        When the user changed percentage "25"
        Then the user sees the following items in the screen
            | item                 |
            | simulate rate        |
            | close simulate rate  |
            | input amount request |
            | purchase products    |
            | slider               |
            | exit button          |

    @FHSC006
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done @smokeTest
    Scenario: The user access close sustainable simulator
        Given a user with the following criteria
            | criteria                 |
            | loan sustainable catalog |
        And the user goes to the "consumer loan" offer operation
        And the user select sustainable banner
        And the user goes to the sustainable simulator
        When the user goes to the consumers loan
        Then the user sees the following items in the screen
            | item                    |
            | customized loan header  |
            | input amount to request |
            | text term               |
            | benefits text           |
            | text conventional use   |
            | text sustainable use    |

    @FHSC007
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: The user access close sustainable simulator 2
        Given a user with the following criteria
            | criteria                 |
            | loan sustainable catalog |
        And the user goes to the "consumer loan" offer operation
        And the user select sustainable banner
        And the user goes to the sustainable simulator
        And the user clean import field
        When the user modify name value
        Then the user sees the following items in the screen
            | item                 |
            | header title         |
            | close simulate rate  |
            | input amount request |
            | info message         |
            | exit button          |
