@dashboard_loans
Feature: Dashboard Loans and Mortgages

    @DLM001 @vbank
    @MX @web @android @ios
    @smokeTest
    @backend(test)
    @web-done
    @backend-smoke
    Scenario Outline: Only one product with <currency> currency in loans module
        Given a user with the following criteria
            | criteria        |
            | dashboard loans |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item         | currency   |
            | header       |            |
            | greeting     |            |
            | help button  |            |
            | sidebar      |            |
            | title        |            |
            | alias        | <currency> |
            | amount       | <currency> |
            | number       | <currency> |
            | label amount | <currency> |
        Examples:
            | currency |
            | MXN      |

    @DLM002 @vbank
    @MX @web @android @ios
    @backend(test) @vbank-modified
    @web-done
    @backend-smoke
    Scenario Outline: The status of loans when credit is <status>
        Given a user with the following criteria
            | criteria        |
            | dashboard loans |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item         | currency |
            | header       |          |
            | greeting     |          |
            | help button  |          |
            | sidebar      |          |
            | title        |          |
            | alias        | MXN      |
            | amount       | MXN      |
            | number       | MXN      |
            | label amount | MXN      |
            | error alert  | MXN      |
        Examples:
            | status           |
            | frozen           |
            | blocked          |
            | overdue balances |

    @DLM003 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Detail of a frozen credit
        Given a user with the following criteria
            | criteria               |
            | dashboard loans frozen |
        And the user accesses to dashboard
        When the user accesses to loan
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | pay credit button |
            | granted credit    |

    @DLM004 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: Detail of a "<case>" loan
        Given a user with the following criteria
            | criteria                         |
            | dashboard loans mortgage and car |
        And the user accesses to dashboard
        When the user accesses the credit operative detail
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | pay credit button |
            | granted credit    |
        Examples:
            | case     |
            | mortage  |
            | auto     |

    @DLM005 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Detail of a personal credit
        Given a user with the following criteria
            | criteria                 |
            | dashboard loans personal |
        And the user accesses to dashboard
        When the user accesses the credit operative detail
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | pay credit button |
            | granted credit    |
