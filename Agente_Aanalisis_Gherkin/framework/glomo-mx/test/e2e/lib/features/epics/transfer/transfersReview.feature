@transfers @transfer_review
Feature: Transfer review

    @TRW001
    @MX @vbank
    @smokeTest @backend(test)
    @ios @android @web
    @manual @JIRA.GLOMOGL-27922
    Scenario Outline: Transfer from product detail and check feedback <description>
        Given a user with the following criteria
            | criteria           |
            | transfers account  |
        And the user accesses to transfer
        And the user starts a transfer to a personal "debit" account
        And the user enter amount "<amount>" and concept "<concept>"
        And the user completes the transfer process
        When the user accesses to feedback
        Then the user sees the following items in the screen
            | item                   |
            | Feedback Exit Button   |
            | Feedback External Page |

        Examples:
            | description     | amount | concept  |
            | with concept    | 10     | donativo |
