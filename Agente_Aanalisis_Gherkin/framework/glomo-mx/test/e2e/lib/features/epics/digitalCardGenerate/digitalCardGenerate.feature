@digitalCardGenerate
Feature: Digital Card Generate

    @RST001
    @smokeTest
    @ios @android @web
    @MX @vbank
    @web-done @backend(test)
    @spherica
    Scenario Outline: Access to cardless withdrawal with <status> debit card
        Given a user with the following criteria
            | criteria                      |
            | cardless withdrawal helvetica |
            | single account                |
            | <status>                      |
        And the user selects account on cardless withdrawal screen
        When the user close modal
        Then the user sees the following items in the screen
            | item                      |
            | header modal invitational |
            | cardless illustration     |
            | message title cardless    |
            | activate card             |
        Examples:
            | status                      |
            | status expired              |
            | status blocked due to theft |

    @RST002
    @ios @android @web
    @MX @vbank
    @web-done @backend(test)
    @spherica
    Scenario Outline: Access the information screen to view your accounts with <status> debit card
        Given a user with the following criteria
            | criteria                      |
            | cardless withdrawal helvetica |
            | multiple accounts             |
            | <status>                      |
        And the user accesses to dashboard
        And the user accesses to option "cardless withdrawal" operative
        When the user close modal
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | view more accounts |
            | account origin     |
        Examples:
            | status                      |
            | status expired              |
            | status blocked due to theft |

    @RST003
    @ios @android @web
    @MX @vbank
    @web-done @backend(test)
    @spherica
    Scenario Outline: Access cardless withdrawal when an account is chosen with <status> debit card
        Given a user with the following criteria
            | criteria                      |
            | cardless withdrawal helvetica |
            | multiple accounts             |
            | <status>                      |
        And the user accesses to dashboard
        And the user accesses to option "cardless withdrawal" operative
        And the user close modal
        When the user selects account on cardless withdrawal screen
        Then the user sees the following items in the screen
            | item                      |
            | header modal invitational |
            | cardless illustration     |
            | message title cardless    |
            | activate card             |
        Examples:
            | status                      |
            | status expired              |
            | status blocked due to theft |
