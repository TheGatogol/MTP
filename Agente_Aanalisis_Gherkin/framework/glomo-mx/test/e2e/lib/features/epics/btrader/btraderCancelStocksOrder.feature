@btrader @btraderCancelStocksOrder
Feature: Btrader Cancel Stocks Order

    @SCO002
    @MX
    @backend(test)
    @vbank @web-done @smokeTest
    @web @android @ios
    Scenario: Canceling orders and return
        Given a user with the following criteria
            | criteria            |
            | cancel stocks order |
        And the user accesses to btrader
        When the user cancel order and "confirm" cancellation
        And the user returns to "order detail" when "close modal cancellation"
        Then the user sees the following items in the screen
            | item                       |
            | header orderlist           |
            | filter orderlist           |
            | order date indicator       |
            | order status               |
            | information order card one |

    @SCO003
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Canceling orders and cancel the action returning
        Given a user with the following criteria
            | criteria            |
            | cancel stocks order |
        And the user accesses to btrader
        When the user cancel order and "reject" cancellation
        And the user returns to "order detail" when "reject cancellation"
        Then the user sees the following items in the screen
            | item                       |
            | header orderlist           |
            | filter orderlist           |
            | order date indicator       |
            | order status               |
            | information order card one |
