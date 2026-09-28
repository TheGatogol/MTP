@creditBureau
Feature: Credit Bureau

    @CB002
    @MX
    @web @ios @android
    @vbank
    @backend(test)
    @web-done
    @backend-smoke
    Scenario Outline: The user accesses the credit bureau screen and taps on the modals <modal>
        Given a user with the following criteria
            | criteria                        |
            | credit bureau authorization     |
        When the user goes to the credit bureau operation
        And when the user select "<modal>"
        Then the user sees a modal with the following elements:
            | item 				  | value                       |
            | help icon			  | <is_visible_help_icon>      |
            | image header		  | <is_visble_image_header>    |
        Examples:
            | modal               | is_visible_help_icon         | is_visble_image_header   |
            | help modal          |  visible                     |  hidden                  |
            | authorization modal |  visible                     |  visible                 |

    @CB003
    @MX
    @web @ios @android
    @vbank
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user accept the credit bureau authorization
        Given a user with the following criteria
            | criteria                        |
            | credit bureau authorization     |
        When the user "accept authorization" for credit bureau authorization
        Then the user sees the following items in the screen
            | item                            |
            | authorization checkbox          |
            | accept button                   |
            | exit button                     |

    @CB005
    @MX
    @web @ios @android
    @vbank
    @backend(test)
    @web-done
    Scenario: The user get success screen for credit bureau authorization
        Given a user with the following criteria
            | criteria                      |
            | credit bureau authorization   |
        When the user "get success" for credit bureau authorization
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | success icon                  |
            | success title                 |
            | success date                  |
            | text folio                    |
            | id folio                      |
            | mail description              |
            | user email                    |
            | share button receipt          |
            | exit button                   |

    @CB006
    @MX
    @web @ios @android
    @vbank
    @backend(test)
    @alternate-scenarios-smoke
    @web-done
    Scenario Outline: The user accesses the credit bureau screen after seeing the modals <modal>
        Given a user with the following criteria
            | criteria                    |
            | credit bureau authorization |
        When the user goes to the credit bureau operation
        And when the user select "<modal>"
        And the user closes the modal
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | product image                   |
            | main title                      |
            | main description                |
            | help icon                       |
            | text consult document           |
            | authorization link              |
            | authorization checkbox          |
            | accept button                   |
            | exit button                     |
        Examples:
            | modal                           |
            | help modal                      |
            | authorization modal             |

    @CB007
    @MX
    @web @ios @android
    @backend(test)
    @alternate-scenarios-smoke
    @vbank
    @web-done
    @backend-smoke
    Scenario: The user exits the credit bureau screen
        Given a user with the following criteria
            | criteria                    |
            | credit bureau authorization |
        When the user goes to the credit bureau operation
        And the user closes the current operative
        And the user accepts the modal
        Then the user sees the "contract product section" screen

    @CB008
    @MX
    @web @ios @android
    @backend(test) @web-done
    @smokeTest
    @vbank @vbank-modified
    Scenario: The user exits the credit bureau success screen
        Given a user with the following criteria
            | criteria                    |
            | credit bureau authorization |
        When the user "get success" for credit bureau authorization
        And the user closes the current operative
        Then the user sees the "contract product section" screen
