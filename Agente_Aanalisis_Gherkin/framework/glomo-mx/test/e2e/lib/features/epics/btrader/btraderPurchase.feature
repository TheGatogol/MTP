@btrader @btraderPurchase
Feature: Btrader Purchase Stock
    @PST001
    @MX
    @smokeTest
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Buy a limited contract.
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the user select an "apple" issuer and "purchases" a "limited" share
        When the user tries to buy "1" titles at "2670" of "limited" shares and "finish"
        Then the user sees the following items in the screen
            | item                                      |
            | purchase confirm screen order send text   |
            | purchase confirm screen amount            |
            | purchase confirm screen order detail text |
            | purchase confirm screen info box          |

    @PST002
    @MX
    @smokeTest
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Buy a conditioned contract.
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the user select an "apple" issuer and "purchases" a "conditioned" share
        When the user tries to buy "1" titles at "2770" of "conditioned" shares and "finish"
        Then the user sees the following items in the screen
            | item                                      |
            | purchase confirm screen order send text   |
            | purchase confirm screen amount            |
            | purchase confirm screen order detail text |
            | purchase confirm screen info box          |

    @PST003
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario Outline: The user observes the information to <infoModal>.
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the user select an "apple" issuer and "purchases" a "limited" share
        When the user observes the information to "<infoModal>"
        Then the user sees the following items in the screen
            | item                               |
            | purchase summary issuer info step  |
            | purchase summary order type step   |
            | purchase summary order detail step |
            | purchase order type texbox         |
        Examples:
            | infoModal            |
            | commisions           |
            | iva                  |
            | costs and commisions |

    @PST004
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user observes the information to conts and commisions from summary.
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the user select an "apple" issuer and "purchases" a "limited" share
        When the user observes the information to "conts and commisions from summary"
        Then the user sees the following items in the screen
            | item                         |
            | purchase summary             |
            | purchase confirm header text |
            | purchase confirm amount      |
            | purchase confirm buy button  |
            | purchase confirm text        |

    @PST005
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user leaves the purchase of titles.
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "purchases" a "limited" share
        And the user returns to "investment detail" when "cancel the operation"
        Then the user sees the following items in the screen
            | item                  |
            | header product detail |

    @PST006
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Exit purchasing the title after making changes.
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the user select an "apple" issuer and "purchases" a "limited" share
        When the user tries to buy "1" titles at "2670" of "limited" shares and "wait for calculate"
        And the user returns to "investment detail" when "cancel the operation and confirm"
        Then the user sees the following items in the screen
            | item                  |
            | header product detail |

    @PST007
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user leaves the modal medium and returns to the purchasing process.
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the user select an "apple" issuer and "purchases" a "limited" share
        When the user exits the operation and returns
        Then the user sees the following items in the screen
            | item                       |
            | purchase cancel buy        |
            | purchase buy titles header |
            | purchase input fill        |

    @PST008
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Enable the order type multi-step.
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the user select an "apple" issuer and "purchases" a "limited" share
        When the user "does not fills" out the purchase information and modifies the "order type"
        Then the user sees the following items in the screen
            | item                                        |
            | purchase summary order type step header     |
            | purchase summary order type step sub header |
            | purchase limited share                      |
            | purchase conditioned share                  |
            | purchase type purchase continue button      |

    @PST009
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario Outline: Modify the information of <step>
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the user select an "apple" issuer and "purchases" a "limited" share
        When the user "fills" out the purchase information and modifies the "<step>"
        Then the user sees the following items in the screen
            | item           |
            | <validation 1> |
            | <validation 2> |
            | <validation 3> |
            | <validation 4> |
            | <validation 5> |
        Examples:
            | step                       | validation 1                            | validation 2                                | validation 3                       | validation 4                | validation 5                           |
            | order detail inputs modify | purchase summary issuer info step       | purchase summary order type step            | purchase summary order detail step | purchase confirm buy button | purchase confirm buy button            |
            | order detail               | purchase summary issuer info step       | purchase summary order type step            | purchase summary order detail step | purchase confirm buy button | purchase confirm buy button            |
            | order type                 | purchase summary order type step header | purchase summary order type step sub header | purchase limited share             | purchase conditioned share  | purchase type purchase continue button |

    @PST010
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user makes a purchase with an amount less than the minimum allowed
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the user select an "naftrac" issuer and "purchases" a "limited" share
        When the user tries to buy "1" titles at "54" of "limited" shares and "wait for calculate"
        Then the user sees the following items in the screen
            | item                               |
            | purchase error modal header        |
            | purchase error modal text          |
            | purchase error modal button        |
            | purchase summary order detail step |

    @PST011
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Make the purchase of a title with an amount less than the minimum allowed.
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the user select an "apple" issuer and "purchases" a "limited" share
        When the user tries to buy "170000" titles at "2770" of "limited" shares and "wait for calculate"
        Then the user sees the following items in the screen
            | item                                |
            | purchase input number of titles     |
            | purchase input titles error message |

    @PST012
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario Outline: The user enters an amount <range>
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the user select an "apple" issuer and "purchases" a "limited" share
        When the user enters an amount "<range>"
        Then the user sees the following items in the screen
            | item                                |
            | purchase inputs modal header title  |
            | purchase inputs modal header text   |
            | purchase inputs modal header button |
        Examples:
            | range              |
            | greater than range |
            | out of range       |

    @PST013
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario Outline: The user enters a target price <price> than the range
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the user select an "apple" issuer and "purchases" a "conditioned" share
        When the user enters a target price "<price>" than the range
        Then the user sees the following items in the screen
            | item                           |
            | purchase summary               |
            | purchase conditioned sell text |
            | <input>                        |
            | <message error>                |
        Examples:
            | price   | input                                      | message error                                            |
            | greater | purchase conditioned input objective price | purchase conditioned input objective price message error |
            | less    | purchase conditioned input lose price      | purchase conditioned input lose price message error      |

    @PST014
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user tries to buy a stock outside of the schedule
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        And the user select an "apple" issuer and "purchases" a "limited" share
        When the user tries to buy "1" titles at "2670" of "limited" shares and "wait for calculate"
        Then the user sees the following items in the screen
            | item                             |
            | purchase info modal header title |
            | purchase info modal text         |
            | purchase info modal close        |
            | purchase info modal button       |

    @PST015
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios @spherica
    Scenario: Validate when the minimum amount is greater than the account balance
        Given a user with the following criteria
            | criteria |
            | btrader2 |
        And the user accesses to btrader
        And the user select an "apple" issuer and "purchases" a "limited" share
        When the user tries to buy "211" titles at "25,999" of "limited" shares and "wait for calculate"
        Then the user sees the following items in the screen
            | item                                           |
            | purchase insufficient balance modal header     |
            | purchase insufficient balance modal text       |
            | purchase error modal button                    |
            | purchase insufficient balance modal close      |
            | purchase insufficient balance modal close text |
