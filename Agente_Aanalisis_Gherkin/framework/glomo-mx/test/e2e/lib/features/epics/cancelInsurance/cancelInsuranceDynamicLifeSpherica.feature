@cancelInsuranceSpherica
Feature: Cancel Insurance Life Dynamic

    @CLI001
    @ios @android @web
    @backend-smoke
    @MX @vbank @backend(test) @web-done @smokeTest
    Scenario: The user accesses to the cancel dynamic life insurance screen
        Given a user with the following criteria
            | criteria                       |
            | has insurances travel and life |
        And the user accesses to cancel "dynamic life" insurance product detail
        And the user goes to cancel insurance operation
        And the user accesses to the "summary view confirm" step of "dynamic life" cancellation insurance
        When the user submits an insurance cancellation request
        Then the user sees the following items in the screen
            | item                                  | insurance |
            | receipt success illustration          | life      |
            | receipt success operation detail      | life      |
            | receipt success share button          | life      |

    @CLI002
    @ios @android @web
    @backend-smoke
    @MX @vbank @backend(test) @web-done
    Scenario Outline: The user accesses to the cancel dynamic life insurance screen and show <insurance_error> error modal
        Given a user with the following criteria
            | criteria                       |
            | has insurances travel and life |
        And the user accesses to cancel "dynamic life" insurance product detail
        And the user goes to cancel insurance operation
        And the user accesses to the "summary view confirm" step of "dynamic life" cancellation insurance
        When the user submits an insurance cancellation request
        Then the user sees the following items in the screen
            | item                               | value                           | insurance |
            | already cancelled warning          | <already_cancelled_warning>     | life      |
            | already cancelled title            | <already_cancelled_title>       | life      |
            | already cancelled text             | <already_cancelled_text>        | life      |
            | already cancelled call button      | <already_cancelled_call_button> | life      |
            | already cancelled exit button      | <already_cancelled_exit_button> | life      |
            | unauthorized warning               | <unauthorized_warning>          | life      |
            | unauthorized title                 | <unauthorized_title>            | life      |
            | unauthorized text                  | <unauthorized_text>             | life      |
            | unauthorized call button           | <unauthorized_call_button>      | life      |
            | unauthorized exit button           | <unauthorized_exit_button>      | life      |
        Examples:
            | insurance_error     | already_cancelled_warning | already_cancelled_title | already_cancelled_text | already_cancelled_call_button | already_cancelled_exit_button | unauthorized_warning | unauthorized_title | unauthorized_text | unauthorized_call_button | unauthorized_exit_button |
            | already cancelled   | visible                   | visible                 | visible                | visible                       | not visible                   | not visible          | not visible        | not visible       | not visible              | not visible              |
            | unauthorized        | not visible               | not visible             | not visible            | not visible                   | not visible                   | visible              | visible            | visible           | visible                  | visible                  |
