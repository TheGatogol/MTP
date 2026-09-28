@financeTransactionCreditCard
Feature: Finance Transaction Credit Card

    @FTSP001
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario Outline: Apply <description> promotion successfully
        Given a user with the following criteria
            | criteria                       |
            | campaigns offers id equal 0744 |
            | <criteria>                     |
        And the user accesses to switch to instalments from a fundable movement
        When the user applies the financing offer
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | operation status        |
            | operation date          |
            | monthly payment         |
            | deferred amount         |
            | annual interest rate    |
            | total amount due        |
            | card image              |
            | card alias              |
            | card pan4               |
            | commerce                |
            | months without interest |
            | points to be discarded  |
            | folio                   |
            | infobox message         |
            | exit                    |

        Examples:
            | description                 | criteria                      |
            | msi and fixed instalment    | msi offer fixed instalment    |
            | msi and variable instalment | msi offer variable instalment |

    @FTSP002
    @ios @android @web @web-done
    @smokeTest
    @MX @backend(artichoke) @vbank
    Scenario Outline: Apply <description> promotion successfully
        Given a user with the following criteria
            | criteria                       |
            | campaigns offers id equal 0744 |
            | <criteria>                     |
        And the user accesses to switch to instalments from a fundable movement
        When the user applies the financing offer
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | operation status       |
            | operation date         |
            | monthly payment        |
            | deferred amount        |
            | annual interest rate   |
            | total amount due       |
            | card image             |
            | card alias             |
            | card pan4              |
            | commerce               |
            | months with interest   |
            | points to be discarded |
            | folio                  |
            | infobox message        |
            | exit                   |

        Examples:
            | description                 | criteria                      |
            | mci and fixed instalment    | mci offer fixed instalment    |
            | mci and variable instalment | mci offer variable instalment |

    @FTSP003
    @ios @android @web
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Show error modal when the cards offers service always responds error 400
        Given a user with the following criteria
            | criteria                                                |
            | campaigns offers id different 0744                      |
            | error 400 cards offers                                  |
            | more than 3 attempted error in the cards offers service |
            | msi offer variable instalment                           |
        And the user accesses the product detail of a card that "always returns error 400 in the offers" service
        When the user attempts to access the promotion conditions from a fundable movement
        Then the user sees a "big" modal with the following elements:
            | item        |
            | close       |
            | error icon  |
            | title       |
            | description |
            | accept      |

    @FTSP004
    @ios @android @web
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Show error modal when the cards conditions service always responds error 404
        Given a user with the following criteria
            | criteria                                                    |
            | campaigns offers id equal 0744                              |
            | always error 404 cards conditions                           |
            | more than 3 attempted error in the cards conditions service |
            | msi offer variable instalment                               |
        And the user accesses the product detail of a card that "always returns error 404 in the conditions" service
        When the user attempts to access the installments simulation from a fundable movement
        Then the user sees a "big" modal with the following elements:
            | item        |
            | close       |
            | error icon  |
            | title       |
            | description |
            | accept      |

    @FTSP005
    @ios @android @web
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Show error modal when the instalments plans simulations service always responds error 500
        Given a user with the following criteria
            | criteria                                                                      |
            | campaigns offers id equal 0744                                                |
            | always 500 error simulations installment                                      |
            | more than 3 attempted error in the cards installment plans simulation service |
            | msi offer variable instalment                                                 |
        And the user accesses the product detail of a card that "always returns error 500 in the installments plans simulations" service
        When the user attempts to access the installments simulation from a fundable movement
        Then the user sees a "big" modal with the following elements:
            | item        |
            | close       |
            | error icon  |
            | title       |
            | description |
            | retry       |
            | exit        |

    @FTSP006
    @ios @android @web
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Show error modal when the instalments plans service always responds error 500
        Given a user with the following criteria
            | criteria                                                           |
            | campaigns offers id equal 0744                                     |
            | always 500 error final installment                                 |
            | more than 3 attempted error in the cards installment plans service |
            | msi offer variable instalment                                      |
        And the user accesses the product detail of a card that "always returns error 500 in the installments plans" service
        And the user attempts to access the installments simulation from a fundable movement
        When the user attempts to apply the financing offer
        Then the user sees a "big" modal with the following elements:
            | item        |
            | close       |
            | error icon  |
            | title       |
            | description |
            | retry       |
            | exit        |

    @FTSP007
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario Outline: Leaves the process without interacting when the offer is <description>
        Given a user with the following criteria
            | criteria                       |
            | campaigns offers id equal 0744 |
            | <criteria>                     |
        And the user accesses to switch to instalments from a fundable movement
        And the user closes the finance transaction operative
        When the user confirm to exit the operative
        Then the user accesses the "movement detail" screen

        Examples:
            | description | criteria                      |
            | msi         | msi offer variable instalment |
            | mci         | mci offer variable instalment |

    @FTSP008
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario Outline: Leaves the process after interacting when the offer is <description>
        Given a user with the following criteria
            | criteria                       |
            | campaigns offers id equal 0744 |
            | <criteria>                     |
        And the user accesses to switch to instalments from a fundable movement
        And the user accepts terms and conditions of promotion
        When the user closes the current operative
        And the user confirm to exit the operative
        Then the user accesses the "movement detail" screen

        Examples:
            | description                 | criteria                      |
            | msi and fixed instalment    | msi offer fixed instalment    |
            | msi and variable instalment | msi offer variable instalment |
            | mci and fixed instalment    | mci offer fixed instalment    |
            | mci and variable instalment | mci offer variable instalment |

    @FTSP009
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario Outline: Status of "Apply finance" button - <description>
        Given a user with the following criteria
            | criteria                       |
            | campaigns offers id equal 0744 |
            | <criteria>                     |
        When the user accesses to switch to instalments from a fundable movement
        Then the user sees the following items in the screen
            | item            | value    |
            | apply promotion | disabled |

        Examples:
            | description | criteria                      |
            | msi offer   | msi offer variable instalment |
            | mci offer   | mci offer variable instalment |

    @FTSP010
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario Outline: Leaves the process after changing instalment number - <description>
        Given a user with the following criteria
            | criteria                       |
            | campaigns offers id equal 0744 |
            | <criteria>                     |
        And the user accesses to switch to instalments from a fundable movement
        And the user changes the instalment number
        When the user closes the current operative
        And the user confirm to exit the operative
        Then the user accesses the "movement detail" screen

        Examples:
            | description | criteria                      |
            | msi offer   | msi offer variable instalment |
            | mci offer   | mci offer variable instalment |

    @FTSP011
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario Outline: Not leaves the process after changing instalment number - <description>
        Given a user with the following criteria
            | criteria                       |
            | campaigns offers id equal 0744 |
            | <criteria>                     |
        And the user accesses to switch to instalments from a fundable movement
        And the user changes the instalment number
        When the user closes the current operative
        And the user continues the process
        Then the user accesses the "finance transaction" screen

        Examples:
            | description | criteria                      |
            | msi offer   | msi offer variable instalment |
            | mci offer   | mci offer variable instalment |

    @FTSP012
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario Outline: Access to <tooltipType> help modal
        Given a user with the following criteria
            | criteria                       |
            | campaigns offers id equal 0744 |
            | mci offer variable instalment  |
        And the user accesses to switch to instalments from a fundable movement
        When the user accesses to "<tooltipType>" help modal
        Then the user sees a "<modalSize>" modal

        Examples:
            | tooltipType     | modalSize |
            | CAT             | big       |
            | bbva points     | big       |
            | total payment   | small     |
            | monthly payment | small     |
