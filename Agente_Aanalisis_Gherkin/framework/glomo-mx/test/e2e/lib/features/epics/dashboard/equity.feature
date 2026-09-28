@dashboard_equity
Feature: Dashboard Equity

    @DE001 @vbank
    @MX @web @android @ios
    @smokeTest
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Only one product in equity module
        Given a user with the following criteria
            | criteria         |
            | dashboard equity |
            | single currency  |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item             | currency |
            | header           |          |
            | greeting         |          |
            | help button      |          |
            | sidebar          |          |
            | title            |          |
            | alias            | MXN      |
            | masked amount    | MXN      |
            | number           | MXN      |
            | label amount     | MXN      |
            | show/hide button |          |

    @DE002 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    @alternate-scenarios-smoke
    Scenario: More than one product in equity module
        Given a user with the following criteria
            | criteria           |
            | dashboard equity   |
            | various currencies |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item             | currency |
            | header           |          |
            | greeting         |          |
            | help button      |          |
            | sidebar          |          |
            | title            | MXN      |
            | title amount     | MXN      |
            | alias            | MXN      |
            | masked amount    | MXN      |
            | number           | MXN      |
            | label amount     | MXN      |
            | show/hide button | MXN      |

    @DE003 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Show & Hide balances in equity module
        Given a user with the following criteria
            | criteria         |
            | dashboard equity |
            | single currency  |
        When the user accesses to dashboard
        And the user shows balances
        Then the user sees the following items in the screen
            | item             | currency |
            | header           |          |
            | greeting         |          |
            | help button      |          |
            | sidebar          |          |
            | title            |          |
            | alias            | MXN      |
            | amount           | MXN      |
            | number           | MXN      |
            | label amount     | MXN      |
            | show/hide button |          |

    @DE004 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Hide balances in equity module
        Given a user with the following criteria
            | criteria           |
            | equity dashboards  |
            | various currencies |
        When the user accesses to dashboard
        And the user shows balances
        And the user hides balances
        Then the user sees the following items in the screen
            | item             | currency   |
            | header           |            |
            | greeting         |            |
            | help button      |            |
            | sidebar          |            |
            | title            |            |
            | alias            | MXN        |
            | masked amount    | MXN        |
            | number           | MXN        |
            | label amount     | MXN        |
            | show/hide button |            |
