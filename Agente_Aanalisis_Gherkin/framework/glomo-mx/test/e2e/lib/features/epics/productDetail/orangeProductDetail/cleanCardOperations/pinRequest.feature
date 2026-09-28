@pinRequest
Feature: Clean Card Pin Request

    @CCPR001
    @web @android @ios
    @vbank
    @MX @backend(artichoke)
    @web-done
    Scenario: Access to the pin request operative of a clean card
        Given a user with the following criteria
            | criteria             |
            | Credit card          |
            | clean card operative |
        And the user accesses to the "clean card operative" "credit" card product detail
        And the user accesses the pin request view
        And the user tries to open scanner
        When the user scans the qr code of the "operative" card
        Then the user sees the following items in the screen
            | item              |
            | card name         |
            | card image        |
            | pan number        |
            | expiration date   |
            | dynamic NIP label |
            | dynamic NIP value |

    @CCPR002
    @web @android @ios
    @vbank
    @MX @backend(artichoke)
    @web-done
    Scenario: Access to the pin request operative of a clean card - pin request again
        Given a user with the following criteria
            | criteria             |
            | Credit card          |
            | clean card operative |
        And the user accesses to the "clean card operative" "credit" card product detail
        And the user accesses the pin request view
        And the user tries to open scanner
        When the user scans the qr code of the "operative" card
        And the user after 10 seconds view pin again
        Then the user sees the following items in the screen
            | item              |
            | card name         |
            | card image        |
            | pan number        |
            | expiration date   |
            | dynamic NIP label |
            | dynamic NIP value |

    @CCPR003
    @web @android @ios
    @vbank
    @MX @backend(test)
    @smokeTest
    @backend-smoke
    @manual @tmpExclude @JIRA.GLOMOGL-34070
    Scenario: Access to the pin request operative of a clean card - FAQs modal
        Given a user with the following criteria
            | criteria             |
            | credit card          |
            | clean card operative|
            | card activation cvv     |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses the pin request view
        When the user accesses more information
        Then the user sees the following items in the screen
            | item               |
            | Faqs modal         |
            | close modal button |

    @CCPR004
    @web @android @ios
    @vbank
    @MX @backend(test)
    @web-done
    @backend-smoke
    Scenario Outline: Access to the pin request operative of a clean card - QR code scanned is invalid
        Given a user with the following criteria
            | criteria             |
            | credit card          |
            | aqua credit card     |
            | clean card operative |
        And the user accesses to the "clean card operative" "credit" card product detail
        And the user accesses the pin request view
        And the user tries to open scanner
        When the user scans the qr code of the "visualization error" card
        Then the user sees a "full height" modal with the following elements:
            | item          | value     |
            | header        | <header>  |
            | hero image    |           |
            | message title | <message> |
            | description   |           |
            | accept button |           |
            | cancel button |           |

        Examples:
            | header | message                        |
            | Error  | <b>No pudimos leer este QR</b> |

    @CCPR005
    @web @android @ios
    @vbank
    @MX @backend(artichoke)
    @web-done
    Scenario: Access to the pin request operative of a clean card - PIN visualization error
        Given a user with the following criteria
            | criteria             |
            | Credit card          |
            | clean card operative |
        And the user accesses to the "clean card operative visualization error" "credit" card product detail
        And the user accesses the pin request view
        And the user tries to open scanner
        When the user scans the qr code of the "visualization error" card
        Then the user sees a "small" modal with the following elements:
            | item          |
            | warning icon  |
            | description   |
            | accept button |

    @CCPR006
    @web @android @ios
    @vbank
    @MX @backend(test)
    @smokeTest
    @web-done
    @backend-smoke
    Scenario: Pin View Tdd And Tdc - Screen of View more operatives of credit card
        Given a user with the following criteria
            | criteria       |
            | cards with nip |
        And the user access to an "credit" card
        When the user access to "view more operatives"
        Then the user sees the following items in the screen
            | item                             |
            | button view nip                  |
            | button back                      |
            | button block and reposition card |
            | button edit alias                |
            | button expense control           |

    @CCPR007
    @web @android @ios
    @vbank
    @MX @backend(test)
    @smokeTest
    @web-done
    @backend-smoke
    Scenario: Pin View Tdd And Tdc - Screen of View nip of credit card
        Given a user with the following criteria
            | criteria       |
            | cards with nip |
        When the user accesses to an "credit" card and go to view more operatives and select the view nip option
        Then the user sees the following items in the screen
            | item                 | value    |
            | button exit          |          |
            | header text          |          |
            | icon box message     |          |
            | box message          |          |
            | label data card      |          |
            | button data card     |          |
            | label input cvv      |          |
            | message third digits |          |
            | button continue cvv  | disabled |
