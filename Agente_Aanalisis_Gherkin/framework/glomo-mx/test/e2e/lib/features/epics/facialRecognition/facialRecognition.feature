@facialRecognition
Feature: Facial Recognition

    @FAR001
    @smokeTest
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: The user starts registering their facial biometrics
        Given a user with the following criteria
            | criteria                                 |
            | facial recognition previously configured |
        And the user accesses the security reactivation flow
        And the user authorizes the use of data biometrics and start registration
        And the user continues to the start registry screen
        And the user navigates to the face picture screen
        When the user navigates to the success screen
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | icon success     |
            | title text       |
            | text description |
            | exit button      |

    @FAR002
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    @backend-smoke
    Scenario: The user decides to review the privacy notice
        Given a user with the following criteria
            | criteria                                 |
            | facial recognition previously configured |
        And the user accesses the security reactivation flow
        When the user accesses to the "privacy notice" modal
        Then the user sees a modal with the following elements:
            | item          |
            | headerHalf    |
            | title         |
            | main text     |

    @FAR003
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: The user taps on more info
        Given a user with the following criteria
            | criteria                                 |
            | facial recognition previously configured |
        And the user accesses the security reactivation flow
        When the user navigates to the more information screen modal
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | icon mobile      |
            | title text       |
            | text description |
            | accordion list   |
