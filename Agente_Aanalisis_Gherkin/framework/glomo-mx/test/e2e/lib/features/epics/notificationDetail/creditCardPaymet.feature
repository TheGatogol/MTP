@IntelligentFrequentOperationsCreditCard
Feature: Notification Detail  - Credit Card Payment

    @PCN001
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done @smokeTest
    Scenario: Notification Card Payment - the  user execute the credit card payment
        Given a user with the following criteria
            | criteria                         |
            | frequent operations notification |
        And the user accesses center notification
        And the user open a credit card notification
        And the user access a credit card notification
        And the user selects open notification for "minimum amount" payment method
        When the user execute frequent credit card payment receipt operation
        Then the user sees the following items in the screen
            | item                                | state   |
            | header                              |         |
            | operation status                    |         |
            | operation date                      |         |
            | amount title                        |         |
            | total amount                        |         |
            | type of payment frequent operations |         |
            | body section own cards              |         |
            | share option                        | enabled |
            | exit option                         | enabled |
