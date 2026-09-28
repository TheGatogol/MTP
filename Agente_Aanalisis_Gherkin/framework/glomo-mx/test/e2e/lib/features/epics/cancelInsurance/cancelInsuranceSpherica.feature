@cancelInsuranceSpherica
Feature: Cancel Insurance Travel

    @CTI001
    @ios @android @web
    @backend-smoke
    @MX @vbank @backend(test) @web-done @smokeTest
    Scenario: The user successfully submits an insurance cancellation request
        Given a user with the following criteria
            | criteria                       |
            | has insurances travel and life |
        And the user accesses to cancel "travel" insurance product detail
        And the user goes to cancel insurance operation
        And the user accesses to the "summary view confirm" step of "travel" cancellation insurance
        When the user submits an insurance cancellation request
        Then the user sees the following items in the screen
            | item                             |
            | receipt success illustration     |
            | receipt success operation detail |
            | receipt success share button     |

    @CTI002
    @ios @android @web
    @backend-smoke
    @MX @vbank @backend(test) @web-done
    Scenario Outline: The user accesses to the cancel travel insurance screen and show <insurance_error> error modal
        Given a user with the following criteria
            | criteria                       |
            | has insurances travel and life |
        And the user accesses to cancel "travel" insurance product detail
        And the user goes to cancel insurance operation
        And the user accesses to the "summary view confirm" step of "travel" cancellation insurance
        When the user submits an insurance cancellation request
        Then the user sees the following items in the screen
            | item                          | value                           |
            | already cancelled warning     | <already_cancelled_warning>     |
            | already cancelled title       | <already_cancelled_title>       |
            | already cancelled text        | <already_cancelled_text>        |
            | already cancelled call button | <already_cancelled_call_button> |
            | already cancelled exit button | <already_cancelled_exit_button> |
            | unauthorized warning          | <unauthorized_warning>          |
            | unauthorized title            | <unauthorized_title>            |
            | unauthorized text             | <unauthorized_text>             |
            | unauthorized call button      | <unauthorized_call_button>      |
            | unauthorized exit button      | <unauthorized_exit_button>      |
        Examples:
            | insurance_error     | already_cancelled_warning | already_cancelled_title | already_cancelled_text | already_cancelled_call_button | already_cancelled_exit_button | unauthorized_warning | unauthorized_title | unauthorized_text | unauthorized_call_button | unauthorized_exit_button |
            | already cancelled   | visible                   | visible                 | visible                | visible                       | visible                       | not visible          | not visible        | not visible       | not visible              | not visible              |
            | unauthorized        | not visible               | not visible             | not visible            | not visible                   | not visible                   | visible              | visible            | visible           | visible                  | visible                  |
