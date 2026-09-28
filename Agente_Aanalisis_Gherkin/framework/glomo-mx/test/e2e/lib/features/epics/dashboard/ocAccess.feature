@ocAccess
Feature: OC Access

    @OA001
    @web @ios @android
    @vbank @backend(test)
    @smokeTest
    @web-done
    @MX
    Scenario Outline: View <offer> offer in dahsboard
        Given a user with the following criteria
            | criteria        |
            | offers          |
            | <offer>         |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                  |
            | Oc Access             |

        Examples:
            | offer                     |
            | consumer loan             |
            | payroll advance           |

    @OA002
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: Close offer in dahsboard
        Given a user with the following criteria
            | criteria        |
            | offers          |
        When the user accesses to dashboard
        And the user close the offer
        Then the user does not see the offer
