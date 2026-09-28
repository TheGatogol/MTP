@accountProductDetailSipare
Feature: Account Product Detail Sipare

    @CRCR001
    @MX @vbank @web-done @backend(test)
    @web @android @ios @smokeTest
    Scenario: Resending voucher
        Given a user with the following criteria
            | criteria                  |
            | resend voucher with email |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 27   |
            | month | 6    |
            | year  | 2025 |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        When the user selects the corresponding operative
        Then the user sees the following items in the screen
            | item               |
            | notification toast |

    @CRCR002
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Error resending voucher
        Given a user with the following criteria
            | criteria                  |
            | resend voucher with email |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 27   |
            | month | 6    |
            | year  | 2025 |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        When the user selects the corresponding operative
        Then the user sees the following items in the screen
            | item                |
            | modal button close  |
            | modal button accept |
            | modal button cancel |
            | modal titles        |
            | modal descriptions  |

    @CRCR003
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: The voucher is not sent
        Given a user with the following criteria
            | criteria                  |
            | resend voucher with email |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 27   |
            | month | 6    |
            | year  | 2025 |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user selects the corresponding operative
        When the user shares certificate voucher with error
        Then the user sees the following items in the screen
            | item                |
            | modal button close  |
            | modal button cancel |
            | modal titles        |
            | modal descriptions  |
