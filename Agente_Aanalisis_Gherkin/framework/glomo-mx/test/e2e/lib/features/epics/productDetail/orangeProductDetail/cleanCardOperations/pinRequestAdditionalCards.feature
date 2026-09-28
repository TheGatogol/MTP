@pinRequestAdditionalCards
Feature: Pin Request Additional Cards

    @PRAC001
    @web @android @ios
    @vbank
    @MX @backend(test)
    @web-done
    @backend-smoke
    Scenario: Pin View Additional Cards - Screen View Nip
        Given a user with the following criteria
            | criteria                     |
            | additional cards pin request |
        And the user accesses the detail of the additional "operative" "on" card from the associated "operative credit card"
        When the user access to the view nip screen with a cvv
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

    @PRAC002
    @web @android @ios
    @vbank
    @MX @backend(test)
    @smokeTest
    @web-done
    @backend-smoke
    Scenario Outline: Pin View Additional Cards - Input the CVV <cvv_type> of the card
        Given a user with the following criteria
            | criteria                     |
            | additional cards pin request |
        And the user accesses the detail of the additional "operative" "on" card from the associated "operative credit card"
        And the user access to the view nip screen with a cvv
        When the user enters an "<cvv_type>" CVV
        Then the user sees the following items in the screen
            | item                   | value                    |
            | button exit            |                          |
            | header text            |                          |
            | icon box message       |                          |
            | box message            |                          |
            | label data card        |                          |
            | button data card       |                          |
            | label input cvv        |                          |
            | message third digits   |                          |
            | button continue cvv    | <button_status>          |
            | message incomplete cvv | <message_incomplete_cvv> |
        Examples:
            | cvv_type   | button_status | message_incomplete_cvv |
            | correct    | enabled       | not visible            |
            | incomplete | disabled      | visible                |
            | letters    | disabled      | not visible            |

    @PRAC003
    @web @android @ios
    @vbank
    @MX @backend(test)
    @web-done
    @backend-smoke
    Scenario: Pin View Additional Cards - The user use the exit screen button
        Given a user with the following criteria
            | criteria                     |
            | additional cards pin request |
        And the user accesses the detail of the additional "operative" "on" card from the associated "operative credit card"
        And the user access to the view nip screen with a cvv
        When the user performs the "exit" operation
        Then the user sees the following items in the screen
            | item                 |
            | icon warning         |
            | message warning      |
            | btn exit warning     |
            | btn continue warning |

    @PRAC004
    @web @android @ios
    @vbank
    @MX @backend(test)
    @web-done
    @backend-smoke
    Scenario: Pin View Additional Cards - The user confirms his exit from the screen
        Given a user with the following criteria
            | criteria                     |
            | additional cards pin request |
        And the user accesses the detail of the additional "operative" "on" card from the associated "operative credit card"
        And the user wants to leave the CVV screen
        When the user confirms that wants to leave the screen
        Then the user sees the following items in the screen
            | item                                | value  |
            | header                              |        |
            | pan number                          | enable |
            | additional available amount label   |        |
            | additional available balance amount |        |
            | switch additional credit card       |        |

    @PRAC005
    @web @android @ios
    @vbank @spherica
    @MX @backend(test)
    @web-done
    @backend-smoke
    Scenario: Pin View Additional Cards - The user taps the button help
        Given a user with the following criteria
            | criteria                              |
            | additional cards pin request |
        And the user accesses the detail of the additional "operative" "on" card from the associated "operative credit card"
        And the user access to the view nip screen with a cvv
        When the user performs the "help" operation
        Then the user sees the following items in the screen
            | item              |
            | message cvv       |
            | message warning   |
            | btn help cvv exit |
            | label cvv         |

    @PRAC006
    @web @android @ios
    @vbank @spherica
    @MX @backend(test)
    @web-done
    @backend-smoke
    Scenario: Pin View Additional Cards -  The user selects the understand button of help
        Given a user with the following criteria
            | criteria                     |
            | additional cards pin request |
        And the user accesses the detail of the additional "operative" "on" card from the associated "operative credit card"
        And the user access to the help modal
        When the user performs the "exit help" operation
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

    @PRAC007
    @web @android @ios
    @vbank
    @MX @backend(test)
    @web-done
    @backend-smoke
    Scenario: Pin View Additional Cards - The user selects the exit button of help
        Given a user with the following criteria
            | criteria                     |
            | additional cards pin request |
        And the user accesses the detail of the additional "operative" "on" card from the associated "operative credit card"
        And the user access to the help modal
        When the user performs the "exit help" operation
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

    @PRAC008
    @web @android @ios
    @!vbank
    @MX @backend(test)
    @manual @JIRA.GLOMOGL-31643
    Scenario: Pin View Additional Cards - Input an correct cvv of additional credit card
        Given a user with the following criteria
            | criteria                     |
            | additional cards pin request |
        And the user accesses the detail of the additional "operative" "on" card from the associated "operative credit card"
        And the user access to the view nip screen with a cvv
        And the user enters an "wrong" CVV
        When the user performs the "continue" operation
        Then the user sees a modal with the following elements:
            | item            |
            | button continue |

    @PRAC009
    @web @android @ios
    @vbank @spherica
    @MX @backend(test)
    @web-done
    Scenario: Pin View Additional Cards - More information card with qr
        Given a user with the following criteria
            | criteria                     |
            | pin request additional cards |
        And the user accesses the detail of the additional "operative" "on" card from the associated "operative credit card"
        And the user access to the view nip screen with a qr
        When the user access to more information
        Then the user sees the following items in the screen
            | item            |
            | first question  |
            | second question |
            | third question  |
            | fourth question |
            | fifth question  |

    @PRAC010
    @web @android @ios
    @vbank
    @MX @backend(test)
    @tmpExclude @JIRA.GLOMOMX-252143
    Scenario Outline: Pin View Additional Cards - The user selects the question <question>
        Given a user with the following criteria
            | criteria                     |
            | pin request additional cards |
        And the user accesses the detail of the additional "operative" "on" card from the associated "operative credit card"
        And the user access to the view nip screen with a qr
        And the user access to more information
        When the user selects the question "<option>"
        Then the user sees the following items in the screen
            | item   |
            | answer |
        Examples:
            | option| question                                        |
            | one   | What is the QR code on the additional card for? |
            | two   | How secure is the QR code on the card?          |
            | three | Can anyone else use the QR code on the card?    |
            | four  | Can I make transfers with this QR code?         |

    @PRAC011
    @web @android @ios
    @vbank
    @MX @backend(test)
    @web-done
    Scenario: Pin View Additional Cards - Exit the screen to see PIN
        Given a user with the following criteria
            | criteria                     |
            | pin request additional cards |
        And the user accesses the detail of the additional "operative" "on" card from the associated "operative credit card"
        And the user access to the view nip screen with a qr
        When the user close the process
        Then the user sees the "additional card" screen
