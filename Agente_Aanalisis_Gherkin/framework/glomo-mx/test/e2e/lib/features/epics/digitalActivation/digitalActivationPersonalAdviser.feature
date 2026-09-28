@digitalActivationPersonalAdviser
Feature: Digital Activation Personal Adviser

    @DIAPA001
    @MX @smokeTest
    @ios @android
    @vbank @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: The user exits the consent screen
        Given a user with the following criteria
            | criteria         |
            | personal adviser |
            | ne status        |
            | digital account  |
            | without alerts   |
        When the user fills number and card and opens the notice of privacy
        And the user closes the modal
        Then the user accesses the "digital activation" screen

    @DIAPA003
    @MX @alternate-scenarios-smoke
    @ios @android
    @manual @JIRA.GLOMOMX-127285
    @vbank @backend(test)
    @web @web-done
    Scenario: The user reviews the notice of privacy on summary screen
        Given a user with the following criteria
            | criteria         |
            | personal adviser |
            | ne status        |
            | digital account  |
            | without alerts   |
        When a user accesses the application
        And the user accesses to sumary digital activation screen
        And the user opens the notice of privacy summary
        Then the user sees a modal with the following elements:
            | item			|
            | Close button  |
            | header        |
            | title         |
            | description   |
            | Accept button |

    @DIAPA004
    @MX @alternate-scenarios-smoke
    @ios @android
    @vbank@backend(test)
    @web @web-done
    Scenario Outline: The user gets an error because of <card_type> - accepts modal
        Given a user with the following criteria
            | criteria         |
            | personal adviser |
            | ne status        |
            | <card_type>      |
            | without alerts   |
        When the user fills number and card and continues the process
        And the user closes the modal
        Then the user accesses the "digital activation" screen

        Examples:
            | card_type       |
            | digital card    |
            | additional card |
            | idle card       |
