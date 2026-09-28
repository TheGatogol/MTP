@fundsHiring
Feature: Funds Hiring

    @FH002
    @MX @backend(test)
    @web
    @vbank
    @web-done
    @smokeTest
    @backend-smoke
    @manual @JIRA.GLOMOMX-245990
    Scenario: The user makes a fund hiring simulation
        Given the user "5514160078" and "147258369"
        When the user goes to the funds hiring operation
        And the user is in the "simulation" step of funds hiring operation
        Then the user sees the following items in the screen
            | item                     |
            | message box              |
            | accept simulation button |

    @FH003
    @MX @backend(test)
    @web
    @vbank
    @web-done
    @smokeTest
    @manual @JIRA.GLOMOMX-245990
    Scenario: The user successfully completes a fund hiring process
        Given the user "5514160078" and "147258369"
        When the user finish the funds hiring operation
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | investment amount  |
