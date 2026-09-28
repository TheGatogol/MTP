@curp
Feature: Curp

    @CUR001 @MX
    @web @vbank
    @web-done
    @ios @android
    @backend(test)
    @backend-smoke
    Scenario: The user accesses to the profile screen
        Given a user with the following criteria
            | criteria               |
            | curp add national      |
        When the user accesses to profile screen
        Then the user sees the following items in the screen
            | item                       |
            | add curp                   |
            | personal info title        |
            | personal info show data    |
            | complete name              |
            | label client number        |
            | email title                |
            | email                      |
            | email edit button          |

    @CUR002 @MX
    @web @vbank
    @web-done
    @ios @android
    @backend(test)
    @backend-smoke
    Scenario: The user confirm curp modal
        Given a user with the following criteria
            | criteria              |
            | curp confirm national |
        And the user accesses to profile screen
        And the user taps on "personal info show data" profile button
        When the user taps on "confirm curp" profile button
        And the user closes the modal
        Then the user accesses the "profile" screen

    @CUR003 @MX
    @web @vbank
    @web-done @smokeTest
    @ios @android
    @backend(test)
    @backend-smoke
    Scenario: The user confirm curp modal foreign
        Given a user with the following criteria
            | criteria             |
            | curp confirm foreign |
        And the user accesses to profile screen
        And the user taps on "personal info show data" profile button
        When the user taps on "confirm curp" profile button
        And the user closes the modal
        Then the user accesses the "profile" screen
