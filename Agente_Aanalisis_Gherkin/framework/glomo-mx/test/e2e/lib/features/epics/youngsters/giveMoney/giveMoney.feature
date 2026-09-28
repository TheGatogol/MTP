@InternalTransfersYoungster
Feature: Internal Transfers Youngster

    @ITY002
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    @backend-smoke
    Scenario: Validate - Show Advice Give money
        Given a user with the following criteria
            | criteria        |
            | user give money |
        And the user accesses to the first account product detail
        And the user accesses to give money
        When the user accesses to give money advice
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | teach text   |
            | money text   |
            | advice text  |
            | close advice |

    @ITY003
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    @backend-smoke
    Scenario: Validate - Close Advice Give money
        Given a user with the following criteria
            | criteria        |
            | user give money |
        And the user accesses to the first account product detail
        And the user accesses to give money
        And the user accesses to give money advice
        When the user closes give money advice
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | micro ilustration      |
            | bullet information     |
            | give money advice link |
            | button accept          |

    @ITY004
    @MX @vbank @backend(test)
    @smokeTest
    @web @ios @android @web-done
    @backend-smoke
    Scenario: Validate - Access to transfer from Give money
        Given a user with the following criteria
            | criteria        |
            | user give money |
        And the user accesses to the first account product detail
        And the user accesses to give money
        And the user accesses to give money advice
        And the user closes give money advice
        When the user accesses to transfer from giveMoney
        Then the user sees the "transfer" screen
