@npaConsumerLoan
Feature: Npa Consumer Loan

    @NPC001
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done @smokeTest
    Scenario Outline: Personal loan application <case>
        Given a user with the following criteria
            | criteria   |
            | <user>     |
        And the user accesses on non pre approved consumer loan "successfully"
        And the user continue and select the check main
        And the user obtains a result for your evaluation
        When the user goes with "<button>" from npa consumer loan
        Then the user sees the "<page>" screen
        Examples:
            | case          | user                      | button   | page                             |
            | successful    | npa consumer loan success | continue | pre-approved loan offer spherica |
            | pending       | npa consumer loan offer   | continue | contract product section         |
            | rejected      | npa consumer loan offer   | exit     | contract product section         |

    @NPC002
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario: When the user has already checked the authorization box to work history
        Given a user with the following criteria
            | criteria                 |
            | npa consumer loan offer  |
        And the user accesses on non pre approved consumer loan "successfully"
        And the user continue and select the check main
        When the user continues to the evaluation
        Then the user sees the following items in the screen
            | item                |
            | header otp          |
            | title otp           |
            | input otp           |
            | continue button otp |

    @NPC003
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario: Authorization to check credit history
        Given a user with the following criteria
            | criteria                  |
            | npa consumer loan offer   |
        And the user accesses on non pre approved consumer loan "successfully"
        And the user continue and select the check main
        When the user opens the bureau authorization
        Then the user sees the following items in the screen
            | item                  |
            | panel checks title    |
            | close checks button   |
            | documents             |

    @NPC004
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario: Authorization to consult employment and sociodemographic history.
        Given a user with the following criteria
            | criteria                  |
            | npa consumer loan offer   |
        And the user accesses on non pre approved consumer loan "successfully"
        And the user continue and select the check main
        When the user opens the work history authorization
        Then the user sees the following items in the screen
            | item                      |
            | close work history button |
            | information               |
            | work history              |
            | sociodemographic history  |
            | information history       |

    @NPC005
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario: "Privacy Notice" modal
        Given a user with the following criteria
            | criteria                  |
            | npa consumer loan offer   |
        And the user accesses on non pre approved consumer loan "successfully"
        And the user continue and select the check main
        When the user opens the privacy advice modal
        Then the user sees the following items in the screen
            | item                          |
            | close privacy advice button   |
            | information privacy advice    |

    @NPC006
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario: Continue with the loan application
        Given a user with the following criteria
            | criteria                  |
            | npa consumer loan offer   |
        And the user accesses on non pre approved consumer loan "successfully"
        And the user continue and select the check main
        When the user tries to exit and continue with the loan application
        Then the user sees the following items in the screen
            | item                   |
            | close checks button    |
            | panel checks title     |
            | points                 |
            | documents              |
            | privacy advice         |
            | continue button checks |

    @NPC007
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario Outline: Exit the screen due to lack of information using the "<case>" button.
        Given a user with the following criteria
            | criteria                   |
            | npa consumer loan profile  |
        And the user accesses on non pre approved consumer loan "unsuccessfully"
        When the user "<case>" from the rejected screen
        Then the user sees the "contract product section" screen
        Examples:
            | case     |
            | exit     |
            | close    |
