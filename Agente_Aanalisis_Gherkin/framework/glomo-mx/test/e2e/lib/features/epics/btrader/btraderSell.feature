@btrader @btraderSell
Feature: Btrader Sell Stock
    @SES001
    @MX
    @smokeTest
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user sells a title
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "sell" a "limited" share
        And the user tries to sell "1" titles at "2770" and "finish the sell"
        Then the user sees the following items in the screen
            | item                                      |
            | purchase confirm screen order send text   |
            | purchase confirm screen amount            |
            | purchase confirm screen order detail text |
            | purchase confirm screen info box          |

    @SES002
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario Outline: The user observes the information to <infoModal>.
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "sell" a "limited" share
        And the user observes the information to "<infoModal>"
        Then the user sees the following items in the screen
            | item                             |
            | purchase info modal header title |
            | purchase info modal text         |
            | purchase info modal close        |
        Examples:
            | infoModal                 |
            | sell iva                  |
            | sell costs and commisions |
            | sell commisions           |

    @SES003
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user observes the information to conts and commisions from summary.
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "sell" a "limited" share
        And the user observes the information to "conts and commisions from summary in sell"
        Then the user sees the following items in the screen
            | item                             |
            | purchase info modal header title |
            | purchase info modal text         |
            | purchase info modal close        |

    @SES004
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user leaves the sell of titles.
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "sell" a "limited" share
        And the user returns to "investment detail" when "cancel the operation"
        Then the user sees the following items in the screen
            | item                  |
            | header product detail |

    @SES005
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Exit purchasing the title after making changes.
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "sell" a "limited" share
        And the user tries to sell "1" titles at "2770" and "wait for calculate"
        And the user returns to "investment detail" when "cancel the operation and confirm"
        Then the user sees the following items in the screen
            | item                  |
            | header product detail |

    @SES006
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user leaves the modal medium and returns to the purchasing process.
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "sell" a "limited" share
        And the user exits the operation and returns
        Then the user sees the following items in the screen
            | item                       |
            | purchase cancel buy        |
            | purchase buy titles header |
            | purchase input fill        |

    @SES007
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user modify the order detail.
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "sell" a "limited" share
        And the user tries to sell "1" titles at "2770" and "modify the order detail"
        Then the user sees the following items in the screen
            | item                               |
            | purchase summary issuer info step  |
            | purchase summary order type step   |
            | purchase summary order detail step |

    @SES008
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user tries to sell more titles than he has.
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "sell" a "limited" share
        And the user tries to sell "100" titles at "2770" and "wait for calculate"
        Then the user sees the following items in the screen
            | item                                |
            | purchase buy titles header          |
            | purchase input number of titles     |
            | purchase input titles error message |

    @SES009
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user tries to sell a stock without titles
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "sell" a "limited" share
        And the user tries to sell "90" titles at "2770" and "wait for calculate"
        Then the user sees the following items in the screen
            | item                             |
            | purchase info modal header title |
            | purchase info modal text         |
            | purchase info modal close        |
            | purchase info modal button       |
    @SES010
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user tries to sell the title out of range
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user select an "apple" issuer and "sell" a "limited" share
        And the user tries to sell "90" titles at "2700" and "wait for calculate"
        Then the user sees the following items in the screen
            | item                                |
            | purchase inputs modal header title  |
            | purchase inputs modal header text   |
            | purchase inputs modal header button |
