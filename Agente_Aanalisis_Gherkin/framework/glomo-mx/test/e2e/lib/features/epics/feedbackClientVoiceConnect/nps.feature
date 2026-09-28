@nps @feedbackClientVoiceConnect
Feature: Nps

    @NPS002
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Successful closing nps
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        When the user open the nps data form
        And the user rate app number "5"
        Then the user sees the following items in the screen
            | item                                          | checked |
            | header                                        |         |
            | header npsform                                |         |
            | exit button npsform                           |         |
            | rating buttons selected to selected rating 0  | true    |
            | rating buttons selected to selected rating 1  | true    |
            | rating buttons selected to selected rating 2  | true    |
            | rating buttons selected to selected rating 3  | true    |
            | rating buttons selected to selected rating 4  | true    |
            | rating buttons selected to selected rating 5  | true    |
            | rating buttons selected to selected rating 6  | false   |
            | rating buttons selected to selected rating 7  | false   |
            | rating buttons selected to selected rating 8  | false   |
            | rating buttons selected to selected rating 9  | false   |
            | rating buttons selected to selected rating 10 | false   |
            | submit button npsform                         |         |

    @NPS003
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    @smokeTest
    Scenario: Successful sending nps
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        When the user open the nps data form
        And the user rate app number "0"
        And the user comment form
        Then the user sees the following items in the screen
            | item                      |
            | header thankyou           |
            | exit thankyou             |
            | micro thankyou            |

    @NPS004
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Successful closing thankyou page and showing dashboard
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        When the user open the nps data form
        And the user rate app number "8"
        And the user comment form
        And the user closes the NPS data form on the "thank you" page
        Then the user accesses the "Dashboard" screen

    @NPS005
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Successful showing error page
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        When the user open the nps data form
        And the user rate app number "0"
        And the user comment form
        Then the user sees the following items in the screen
            | item                      |
            | header errorpage          |
            | exit errorpage            |
            | micro errorpage           |
            | title errorpage           |
            | description errorpage     |

    @NPS006
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Successful closing error page and showing dashboard
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        When the user open the nps data form
        And the user rate app number "0"
        And the user comment form
        And the user closes the nps error page
        Then the user accesses the "Dashboard" screen
