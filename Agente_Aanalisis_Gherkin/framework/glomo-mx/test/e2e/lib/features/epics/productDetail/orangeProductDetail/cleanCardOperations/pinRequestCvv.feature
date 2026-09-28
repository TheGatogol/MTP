@pinRequestCardsTDD
Feature: Pin View Tdd And Tdc

    @PVC001
    @web @android @ios
    @vbank
    @MX @backend(test)
    @alternate-scenarios-smoke
    @web-done @smokeTest
    @backend-smoke
    Scenario: Pin View Tdd And Tdc - Screen of debit card
        Given a user with the following criteria
            | criteria       |
            | cards with nip |
        When the user access to an "debit" card
        Then the user sees the following items in the screen
            | item                             | value  |
            | header                           |        |
            | pan number                       | enable |
            | current available amount label   |        |
            | current available balance amount |        |
            | switch debit card                |        |
            | switch on                        |        |
            | view more button                 |        |

    @PVC002
    @web @android @ios
    @vbank
    @MX @backend(test)
    @alternate-scenarios-smoke
    @web-done
    @backend-smoke
    Scenario: Pin View Tdd And Tdc - Screen of View more operatives
        Given a user with the following criteria
            | criteria       |
            | cards with nip |
        And the user access to an "debit" card
        When the user access to view more operatives
        Then the user sees the following items in the screen
            | item                             |
            | button view nip                  |
            | button back                      |
            | button block and reposition card |
            | button edit alias                |
            | button expense control           |

    @PVC003
    @web @android @ios
    @vbank
    @MX @backend(test)
    @alternate-scenarios-smoke
    @web-done
    @backend-smoke
    Scenario: Pin View Tdd And Tdc - Screen of View nip
        Given a user with the following criteria
            | criteria       |
            | cards with nip |
        When the user accesses to an "debit" card and go to view more operatives and select the view nip option
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

    @PVC004
    @web @android @ios
    @vbank
    @MX @backend(test)
    @alternate-scenarios-smoke
    @web-done
    @backend-smoke
    Scenario: Pin View Tdd And Tdc - Input the cvv of debit card
        Given a user with the following criteria
            | criteria       |
            | cards with nip |
        And the user accesses to an "debit" card and go to view more operatives and select the view nip option
        When the user input a cvv to "debit" card
        Then the user sees the following items in the screen
            | item                 | value   |
            | button exit          |         |
            | header text          |         |
            | icon box message     |         |
            | box message          |         |
            | label data card      |         |
            | button data card     |         |
            | label input cvv      |         |
            | message third digits |         |
            | button continue cvv  | enabled |

    @PVC005
    @web @android @ios
    @vbank
    @MX @backend(test)
    @alternate-scenarios-smoke
    @web-done
    @backend-smoke
    Scenario: Pin View Tdd And Tdc - Input Alfanumeric cvv in debit card
        Given a user with the following criteria
            | criteria       |
            | cards with nip |
        And the user accesses to an "debit" card and go to view more operatives and select the view nip option
        When the user input a cvv to "alfanumeric cvv" card
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

    @PVC006
    @web @android @ios
    @vbank
    @MX @backend(test)
    @alternate-scenarios-smoke
    @web-done
    @backend-smoke
    Scenario: Pin View Tdd And Tdc - Input a cvv less than three in debit card
        Given a user with the following criteria
            | criteria       |
            | cards with nip |
        And the user accesses to an "debit" card and go to view more operatives and select the view nip option
        When the user input a cvv to "less than three cvv" card
        Then the user sees the following items in the screen
            | item                   | value    |
            | button exit            |          |
            | header text            |          |
            | icon box message       |          |
            | box message            |          |
            | label data card        |          |
            | button data card       |          |
            | label input cvv        |          |
            | message third digits   |          |
            | button continue cvv    | disabled |
            | message incomplete cvv | visible  |

    @PVC007
    @web @android @ios
    @vbank
    @MX @backend(test)
    @alternate-scenarios-smoke
    @web-done
    @backend-smoke
    Scenario: Pin View Tdd And Tdc - The user go to exit Screen
        Given a user with the following criteria
            | criteria       |
            | cards with nip |
        And the user accesses to an "debit" card and go to view more operatives and select the view nip option
        When the user select the "exit" option
        Then the user sees the following items in the screen
            | item                 |
            | icon warning         |
            | message warning      |
            | btn exit warning     |
            | btn continue warning |

    @PVC008
    @web @android @ios
    @vbank
    @MX @backend(test)
    @alternate-scenarios-smoke
    @web-done
    @backend-smoke
    Scenario: Pin View Tdd And Tdc - The user confirms that he wants to leave
        Given a user with the following criteria
            | criteria       |
            | cards with nip |
        And the user accesses to an "debit" card and go to view more operatives and select the view nip option
        And the user select the "exit" option
        When the user confirms he leaves to operative
        Then the user sees the following items in the screen
            | item                             | value  |
            | header                           |        |
            | pan number                       | enable |
            | current available amount label   |        |
            | current available balance amount |        |
            | switch debit card                |        |
            | switch on                        |        |
            | view more button                 |        |

    @PVC009
    @web @android @ios
    @vbank @spherica
    @MX @backend(test)
    @alternate-scenarios-smoke
    @web-done
    @backend-smoke
    Scenario: Pin View Tdd And Tdc - The user select the button help
        Given a user with the following criteria
            | criteria       |
            | cards with nip |
        And the user accesses to an "debit" card and go to view more operatives and select the view nip option
        When the user select the "help" option
        Then the user sees the following items in the screen
            | item              |
            | message cvv       |
            | message warning   |
            | btn help cvv exit |
            | label cvv         |

    @PVC010
    @web @android @ios
    @vbank @spherica
    @MX @backend(test)
    @alternate-scenarios-smoke
    @web-done
    @backend-smoke
    Scenario: Pin View Tdd And Tdc - The user selects the understand button of help
        Given a user with the following criteria
            | criteria       |
            | cards with nip |
        And the user accesses to an "debit" card and go to view more operatives and select the view nip option
        And the user select the "help" option
        When the user select the "exit help" option
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

    @PVC011
    @web @android @ios
    @vbank
    @MX @backend(test)
    @alternate-scenarios-smoke
    @web-done
    @backend-smoke
    Scenario: Pin View Tdd And Tdc - The user selects the exit button of help
        Given a user with the following criteria
            | criteria       |
            | cards with nip |
        And the user accesses to an "debit" card and go to view more operatives and select the view nip option
        And the user select the "help" option
        When the user select the "exit help" option
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

    @PVC012
    @web @android @ios
    @vbank
    @MX @backend(test)
    @web-done
    @manual @JIRA.GLOMOGL-31643
    Scenario: Pin View Tdd And Tdc - Input an incorrect cvv of debit card
        Given a user with the following criteria
            | criteria       |
            | cards with nip |
        And the user access an "debit" card and go to view more operatives and select the view nip option
        And the user input a cvv to "debit" card
        When the user select the "continue" button
        Then the user sees a modal with the following elements:
            | item            |
            | continue button |
