@redirectCallMeBack
Feature: Redirect Call Me Back Non Pre Approved Car Certificate

    @CMBPCC001
    @timemachine
    @MX @vbank @web-done @backend(test)
    @web @android @ios @smokeTest
    Scenario Outline: Access Call Me Back in step 1 with <access>
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
            | car loan                         |
        And the user starts the application at date:
            | hour  | 10     |
        And the user accesses to non pre approved car certificate "main" screen
        When the user accesses to I want to call a personal advisor <case>
        Then the user sees the following items in the screen
            | item                    |
            | header check            |
            | image <item>            |
            | description             |
            | understood button       |
        Examples:
            | access | case               | item       |
            | header | "header"           | check      |
            | link   | "link" in step "1" | check icon |

    @CMBPCC002
    @timemachine
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: Access Call Me Back in step 2 with <access>
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
            | car loan                         |
        And the user starts the application at date:
            | hour  | 10     |
        And the user accesses to non pre approved car certificate "main" screen
        And the user accesses to non pre approved car certificate "your data section" screen
        When the user accesses to I want to call a personal advisor <case>
        Then the user sees the following items in the screen
            | item                    |
            | header check            |
            | image check icon        |
            | description             |
            | understood button       |
        Examples:
            | access | case               |
            | header | "header"           |
            | link   | "link" in step "2" |

    @CMBPCC003
    @timemachine
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: Access Call Me Back in step summary with <access>
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
            | car loan                         |
        And the user starts the application at date:
            | hour  | 10     |
        And the user accesses to non pre approved car certificate "main" screen
        And the user accesses to non pre approved car certificate "summary section" screen
        When the user accesses to I want to call a personal advisor <case>
        Then the user sees the following items in the screen
            | item                    |
            | header check            |
            | image check icon        |
            | description             |
            | understood button       |
        Examples:
            | access | case                     |
            | header | "header"                 |
            | link   | "link" in step "summary" |
