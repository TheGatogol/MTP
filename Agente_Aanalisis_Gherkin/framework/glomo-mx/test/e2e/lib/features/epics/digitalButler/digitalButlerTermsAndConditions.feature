@chatBotTermsAndConditions
Feature: ChatBot - terms and conditions

    @TYC003
    @MX
    @backend(test) @vbank
    @web-done @smokeTest
    @web @android @ios
    Scenario: Access to information of terms and conditions
        Given a user with the following criteria
            | criteria              |
            | user with home futura |
        And the user access blue "first time"
        When the user leaves blue in "terms and conditions" screen
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | blue bbva button |

    @TYC004
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario: Leave terms and conditions screen
        Given a user with the following criteria
            | criteria              |
            | user with home futura |
        And the user access blue "first time"
        And the user accept terms and conditions in blue
        And the user leaves blue in "conversation" screen
        When the user access "blue BBVA" in assistance
        Then the user sees the following items in the screen
            | item             | value  |
            | header           |        |
            | chat bot message |        |
            | chat form        | enable |
