@HelpSearch
Feature: HelpSearch

    @HEL002
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @smokeTest
    @backend-smoke
    Scenario: The user sees the faqs list
        Given a user with the following criteria
            | criteria         |
            | foreign accounts |
            | glomo help       |
        When the user accesses to the Help Section screen
        And the user introduces "bbva" in the input
        Then the user sees the following items in the screen
            | item                      |
            | help search list          |

    @HEL003
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: Error message
        Given a user with the following criteria
            | criteria         |
            | foreign accounts |
            | glomo help       |
        When the user accesses to the Help Section screen
        And the user introduces "paper" in the input
        Then the user sees the following items in the screen
            | item                      |
            | help search message error |
