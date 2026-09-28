@cardLinkAndActivationQrCard
Feature: Card Link And Activation Qr Card

    @CAM002
    @MX
    @web
    @vbank
    @backend(test)
    @backend-smoke
    @ios
    @android
    @web-done
    Scenario Outline: Validate the <option> in the exit modal
        Given a user with the following criteria
            | criteria              |
            | qr card activation    |
        And the user accesses to card link activation
        And the user exits the qr card activation
        When the user chooses the "<option>" activation option
        Then the user sees the "<page>" screen
        Examples:
            | option          | page               |
            | exit button     | orange card detail |
            | continue button | activation qr card |

    @CAM003
    @MX
    @web
    @vbank
    @backend(test)
    @backend-smoke
    @ios
    @android
    @web-done
    @smokeTest
    Scenario: Validate that the user closes the more information modal
        Given a user with the following criteria
            | criteria              |
            | qr card activation    |
        And the user accesses to card link activation
        And the user accesses the information section
        When the user closes the more information option of frequently asked questions
        Then the user sees the "activation qr card" screen

    @CAM004
    @MX
    @web
    @vbank
    @backend(test)
    @backend-smoke
    @ios
    @android
    @web-done
    Scenario Outline: Validate access to the <subject> question
        Given a user with the following criteria
            | criteria              |
            | qr card activation    |
        And the user accesses to card link activation
        And the user accesses the information section
        When the user accesses the question about "<subject>"
        Then the user sees the following items in the screen
            | item                  |
            | title question        |
            | answer                |
            | close question        |
        Examples:
            | subject                |
            | card without numbers   |
            | use qr card code       |
            | safe qr                |
            | qr code another person |

    @CAM005
    @MX
    @web
    @vbank
    @backend(test)
    @backend-smoke
    @ios
    @android
    @web-done
    Scenario: Validate that the user can exit the FAQ detail
        Given a user with the following criteria
            | criteria              |
            | qr card activation    |
        And the user accesses to card link activation
        And the user accesses the information section
        And the user accesses the question about "qr code transfers"
        When the user exits the FAQ detail
        Then the user sees the following items in the screen
            | item          |
            | faqs title    |
            | faqs header   |
            | faqs content  |

    @CAM006
    @MX
    @web
    @vbank
    @backend(test)
    @backend-smoke
    @ios
    @android
    @web-done
    Scenario: Validate access to the <subject> question
        Given a user with the following criteria
            | criteria              |
            | qr card activation    |
        And the user accesses to card link activation
        When the user accesses the option for more information on frequently asked questions
        Then the user sees the following items in the screen
            | item          |
            | faqs title    |
            | faqs header   |
            | faqs content  |
