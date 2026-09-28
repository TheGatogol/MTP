@dashboardAccounts
Feature: Dashboard Accounts

    @DA001 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: Only one product with <currency> currency in accounts module
        Given a user with the following criteria
            | criteria           |
            | dashboard accounts |
            | various currencies |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item         | currency   |
            | header       |            |
            | greeting     |            |
            | help button  |            |
            | sidebar      |            |
            | title        | <currency> |
            | alias        | <currency> |
            | amount       | <currency> |
            | number       | <currency> |
            | label amount | <currency> |
        Examples:
            | currency |
            | MXN      |
            | USD      |

    @DA002 @vbank
    @MX @web @android @ios
    @smokeTest
    @backend(test)
    @web-done
    @backend-smoke
    Scenario Outline: More than one product with <currency> currencies in accounts module
        Given a user with the following criteria
            | criteria           |
            | dashboard accounts |
            | various currencies |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item         | currency   |
            | header       |            |
            | greeting     |            |
            | help button  |            |
            | sidebar      |            |
            | title        | <currency> |
            | title amount | <currency> |
            | alias        | <currency> |
            | amount       | <currency> |
            | number       | <currency> |
            | label amount | <currency> |
        Examples:
            | currency |
            | MXN      |
            | USD      |

    @DA003
    @MX @vbank
    @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Accesses product detail account from dashboard
        Given a user with the following criteria
            | criteria       |
            | accounts       |
            | account detail |
        When the user accesses to the operative account product detail
        Then the user accesses the "product detail account" screen

    @DA004
    @MX @vbank
    @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Only one goal account in pesos in accounts module
        Given a user with the following criteria
            | criteria                 |
            | dashboard goals accounts |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item         | currency |
            | header       |          |
            | greeting     |          |
            | help button  |          |
            | sidebar      |          |
            | title        | MXN      |
            | alias        | MXN      |
            | amount       | MXN      |
            | number       | MXN      |
            | label amount | MXN      |

    @DA005
    @MX @vbank
    @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: Validate account in <typeAmount>
        Given a user with the following criteria
            | criteria           |
            | dashboard accounts |
            | account balance    |
        When the user accesses to dashboard
        And the user shows "<amount>" in account
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | greeting          |
            | help button       |
            | sidebar           |
            | balance status    |
        Examples:
            | typeAmount | amount	     |
            | zero       | $0.00         |
            | thousands  | $1,000,000.00 |
            | cents      | $0.06         |

    @DA006
    @MX @vbank
    @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Validate account without TDC
        Given a user with the following criteria
            | criteria           |
            | dashboard accounts |
            | account balance    |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | greeting     |
            | help button  |
            | sidebar      |
            | cards        |
