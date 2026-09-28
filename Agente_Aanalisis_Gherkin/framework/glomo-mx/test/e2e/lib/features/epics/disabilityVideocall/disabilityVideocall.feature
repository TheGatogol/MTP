@disabilityVideocall
Feature: disabilityVideocall

    @DVHT001
    @MX
    @backend(test)
    @manual @JIRA.GLOMOMX-218241
    @web @android @ios
    Scenario: Disability Videocall Calling - Time Out Vide Call
        Given a user with the following criteria
            | criteria             |
            | disability videocall |
        And the user starts the application at date:
            | day   | 26   |
            | month | 01   |
            | year  | 2024 |
            | hour  | 12   |
        And the user accesses to disability videocall
        When the user accesses to disability videocall put attention with "success network" status
        And the user accesses the lobby with a timeout of "2000" milliseconds
        Then the user sees the following items in the screen
            | item                      |
            | Header                    |
            | Button right header       |
            | Microillustration timeout |
            | Title timeout             |
            | Description timeout       |
            | Info data timeout         |

    @DVHT003
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Disability Videocall - After hours
        Given a user with the following criteria
            | criteria             |
            | disability videocall |
        And the user starts the application at date:
            | day   | 26   |
            | month | 01   |
            | year  | 2024 |
            | hour  | 20   |
        When the user accesses to disability videocall
        Then the user sees the following items in the screen
            | item                |
            | Header              |
            | Button right header |
            | Microillustration   |
            | Title text          |
            | Description         |
            | Button default      |

    @DVHT004
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Disability Videocall Put Attention - Success network status
        Given a user with the following criteria
            | criteria             |
            | disability videocall |
        And the user starts the application at date:
            | day   | 26   |
            | month | 01   |
            | year  | 2024 |
            | hour  | 12   |
        And the user accesses to disability videocall
        When the user accesses to disability videocall put attention with "success network" status
        Then the user sees the following items in the screen
            | item                   |
            | Header                 |
            | Button right header    |
            | Image put attention    |
            | Title put attention    |
            | Subtitle put attention |
            | Firts item list        |
            | Second item list       |
            | Notification message   |
            | Button default         |

    @DVHT005
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Disability Videocall Put Attention - Error network status
        Given a user with the following criteria
            | criteria             |
            | disability videocall |
        And the user starts the application at date:
            | day   | 26   |
            | month | 01   |
            | year  | 2024 |
            | hour  | 12   |
        And the user accesses to disability videocall
        When the user accesses to disability videocall put attention with "error network" status
        Then the user sees the following items in the screen
            | item                             |
            | Header                           |
            | Button right header              |
            | Microillustration bad connection |
            | Title error network              |
            | Description error network        |
            | Button default                   |

    @DVHT006
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios @smokeTest
    Scenario: Disability Videocall Calling - Lobby
        Given a user with the following criteria
            | criteria             |
            | disability videocall |
        And the user starts the application at date:
            | day   | 26   |
            | month | 01   |
            | year  | 2024 |
            | hour  | 12   |
        And the user accesses to disability videocall put attention with "success network" status
        When the user accesses the lobby with a timeout of "300000" milliseconds
        Then the user sees the following items in the screen
            | item                        |
            | Header                      |
            | Button right header         |
            | Microillustration videocall |
            | Title videocall             |
            | Description videocall       |
            | Timer                       |
