@select_operations
Feature: Select Operations

    @SOP001 @vbank
    @MX @web @android @ios
    @smokeTest
    @backend(test)
    @web-done
    @vbank-modified
    @backend-smoke
    Scenario Outline: User with accounts, <case>
        Given a user with the following criteria
            | criteria          |
            | select operations |
            | <criteria>        |
        When the user accesses to operationals page
        Then the user sees the following items in the screen
            | item                             | section  | value     |
            | back button                      |          |           |
            | Transfer operative               | favorite |           |
            | Opportunities operative          | favorite |           |
            | CardLess withdraw operative      | favorite |           |
            | Transfer operative               | accounts |           |
            | CardLess withdraw operative      | accounts |           |
            | Credit card payment operative    | accounts | <visible> |
            | Bill payments operative          | accounts |           |
            | Mobile top up operative          | accounts |           |
            | International transfer operative | accounts |           |
            | QR payment operative             | accounts |           |
            | Transfer operative               | cards    | <visible> |
            | Credit card payment operative    | cards    | <visible> |
        Examples:
            | case                             | criteria                  | visible     |
            | TDC’s and Debit Cards            | debit credit card         | visible     |
            | no operative cards               | no operative cards        | not visible |

    @SOP002 @vbank
    @MX @web @android @ios
    @backend(test) @spherica
    @web-done @vbank-modified
    Scenario: User with no one level n4 account
        Given a user with the following criteria
            | criteria                |
            | select operations       |
            | no one level n4 account |
        And the user accesses to operationals page
        When the user accesses the "international transfers" operation
        Then the user sees a modal with the following elements:
            | item                  |
            | Header middle         |
            | Close button          |
            | Icon Message          |

    @SOP003
    @MX @web @android @ios
    @backend(test) @vbank @vbank-modified
    @alternate-scenarios-smoke
    @web-done
    @backend-smoke
    Scenario: User access qr payment operative from select operation
        Given a user with the following criteria
            | criteria          |
            | select operations |
            | debit credit card |
        When the user accesses to operationals page
        Then the user accesses the "qr payment" operation

    @SOP004
    @vbank
    @MX @web @android @ios
    @alternate-scenarios-smoke
    @backend(test)
    @web-done
    Scenario: User access to select operation and operative is disabled feature flag
        Given a user with the following criteria
            | criteria                |
            | many level n4 accounts  |
        When the user accesses to operationals page
        Then the user sees the following items in the screen
            | item                             | section  | value       |
            | back button                      |          |             |
            | International transfer operative | accounts | not visible |
            | QR payment operative             | accounts | visible     |
