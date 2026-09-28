@ForceTouch
Feature: Force Touch

    @FT000
    @ios @android @native
    @android-done @ios-done
    @MX @manual @JIRA.GLOMOGL-17193
    @smokeTest
    Scenario: User long-press the BBVA APP on the smarthphone to show the frequent short cut operatives
        Given a user that wants to operate one of the following <shortcuts>
            | shortcuts           |
            | transfer            |
            | cardless withdrawal |
            | service payment     |
            | credit card payment |
            | top up              |
            | rejected card       |
        When the user select the operative
        Then the mobile app navigates to login
        And the user is request with their credentials

    @FT001
    @ios @android @native
    @android-done @ios-done
    @MX @manual @JIRA.GLOMOGL-17193
    Scenario: User select a shortcut and is redirected to the operative
        Given a user that already choose one of the following <shortcuts>
            | shortcuts           |
            | transfer            |
            | cardless withdrawal |
            | service payment     |
            | credit card payment |
            | top up              |
            | rejected card       |
        When the user accesses the Login Screen
        Then the user is redirected to <shortcut> operative flow
            | shortcut            |
            | transfer            |
            | cardless withdrawal |
            | service payment     |
            | credit card payment |
            | top up              |
            | rejected card       |
