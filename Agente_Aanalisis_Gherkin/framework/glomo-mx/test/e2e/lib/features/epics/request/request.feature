@request
Feature: Intercept Requests

    @REQ_OWC001 @creditCardPaymentOwnCards
    @ios @android @web
    @smokeTest
    @backend(artichoke) @MX @vbank
    @web-done @EXAMPLE
    Scenario: Credit Payment own Card voucher - request validation
        Given a user with the following criteria
            | criteria                 |
            | credit card with mx debt |
            | accounts                 |
        And the user accesses to pay the "minimum amount" debt on one of his credit cards
        And the user selects "minimum amount" payment method and account with "MXN" currency
        And the interceptor service is initiated
        And the user goes to the card payment receipt operation
        When the "credit card payment own transfer voucher" request is intercepted
        Then the intercepted request body schema is validated
        And the intercepted request contains the following headers:
            | item            | value                    | type           |
            | accept          | application/json         | string         |
            | tsec            | tsec                     | regex named    |
            | content-type    | application/json         |                |
            | authorization   |                          | not present    |
