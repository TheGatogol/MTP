@btrader @btraderInvestmentList
Feature: Btrader Investment List

    @TIL002
    @MX
    @backend(test)
    @vbank @web-done @smokeTest
    @web @android @ios
    Scenario: User without titles
        Given a user with the following criteria
            | criteria  |
            | btrader3  |
        When the user accesses to btrader
        Then the user sees the following items in the screen
            | item                |
            | product detail      |
            | no titles text      |
            | search issuer text  |
            | search issuer button |

    @TIL003
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user sees other markets list
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user opens the "other markets" detail
        Then the user sees the following items in the screen
            | item                                        |
            | product detail                              |
            | user portfolio                              |
            | stock market investment detail              |
            | investment other markets list               |
            | investment other markets cash today tooltip |
            | investment other markets expires 24 tooltip |
            | investment other markets expires 48 tooltip |

    @TIL004
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario Outline: The user sees the modal information <expires>
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user observes the information of the modal "<expires>"
        Then the user sees the following items in the screen
            | item                                         |
            | product detail                               |
            | user portfolio                               |
            | stock market investment detail               |
            | investment other markets list                |
            | investment other markets cash today tooltip  |
            | investment other markets expires 24 tooltip  |
            | investment other markets expires 48 tooltip  |
            | investment other markets expires modal       |
            | investment other markets expires modal close |
            | investment other markets expires modal title |
            | investment other markets expires modal text  |
        Examples:
            | expires |
            | today   |
            | 24      |
            | 48      |
