@TrackingDebitCard
Feature: TrackingDebitCard

    @TDC001
    @MX
    @vbank
    @backend(test)
    @web-done
    @web @android @ios
    @smokeTest
    Scenario Outline: See debit card tracking <status>
        Given a user with the following criteria
            | criteria                    |
            | debit card pending delivery |
            | <status>                    |
        And the user accesses to the "pending delivery virtual tdd" "debit" card product detail
        And the user accesses the entry point consult and confirm with "<status>"
        When the sms key "12345678" is entered
        Then the user sees the following items in the screen
            | item                 | value               |
            | header               |                     |
            | text                 |                     |
            | card request step    |                     |
            | manufacturing step   |                     |
            | shipping step        |                     |
            | error notification   | <errorNotification> |
            | error link           | <errorLink>         |
            | delivery step        |                     |
            | delivery detail link | <linkDetail>        |
            | message              |                     |
            | confirm receipt link |                     |
        Examples:
            | status               | errorNotification | errorLink | linkDetail |
            | request received     | hidden            | hidden    | hidden     |
            | generation process   | hidden            | hidden    | hidden     |
            | distribution process | hidden            | hidden    | hidden     |
            | delivered            | hidden            | hidden    | visible    |
            | delivery expired     | visible           | visible   | hidden     |

    @TDC002
    @MX
    @vbank
    @backend(test)
    @web-done
    @web @android @ios
    Scenario: See error detail when delivery expired status
        Given a user with the following criteria
            | criteria                    |
            | debit card pending delivery |
            | delivery expired            |
        And the user accesses to the "pending delivery virtual tdd" "debit" card product detail
        And the user accesses the entry point consult and confirm with "delivery expired"
        And the sms key "12345678" is entered
        When the user accesses details in delivery expired step
        Then the user sees a modal with the following elements:
            | item            |
            | information     |
            | link phone call |
            | button accept   |

    @TDC003
    @MX
    @vbank
    @backend(test)
    @web-done
    @web @android @ios
    Scenario Outline: See delivery detail with delivered status and <shippingPlace>
        Given a user with the following criteria
            | criteria                    |
            | debit card pending delivery |
            | <shippingPlace>             |
        And the user accesses to the "pending delivery virtual tdd" "debit" card product detail
        And the user accesses the entry point consult and confirm with "delivered"
        And the sms key "12345678" is entered
        When the user accesses details in delivered step
        Then the user sees the following items in the screen
            | item                  | value              |
            | header                |                    |
            | image                 |                    |
            | title                 |                    |
            | delivery data         |                    |
            | delivery data link    | <deliveryDataLink> |
            | delivery data text    |                    |
            | details received      |                    |
            | details received text |                    |
            | message               |                    |
            | button                |                    |
        Examples:
            | shippingPlace   | deliveryDataLink |
            | home delivery   | visible          |
            | branch delivery | hidden           |

    @TDC004
    @MX
    @vbank
    @backend(test)
    @web-done
    @web @android @ios
    Scenario: The user cannot see the tracking of his card
        Given a user with the following criteria
            | criteria                    |
            | debit card pending delivery |
            | request received            |
        And the user accesses to the "pending delivery virtual tdd" "debit" card product detail
        And the user accesses the entry point consult and confirm with "delivered"
        When the sms key "12345678" is entered
        Then the user sees a modal with the following elements:
            | item          |
            | information   |
            | button accept |
            | button close  |
