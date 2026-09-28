@NotificationsCenter
Feature: Notification Center

    @NLC001
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Notification List - open detail carousel notification
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses to dashboard
        When the user accesses center notification
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | button Row List             |
            | carousel notification alert |
            | list notification           |

    @NLC002
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Notification List - the user access the detial notifications is carousel
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses center notification
        When the user access detail notification "alert"
        Then the user sees the following items in the screen
            | item                        |
            | button Row List             |
            | security call               |
            | detail alert                |

    @NLC003
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Notification List - the user access result whit all notifications ALERT
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses center notification
        When the user access view all notification ALERT
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | tags filter |
            | list result |

    @NLC004
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Notification List - the  user access detail other category
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses center notification
        When the user access open other detail notification
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | category notification      |
            | button detail              |

    @NLC006
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done @backend-smoke
    Scenario: Notification List - the user selects delete in action swipe
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses center notification
        When the user access swipe delete notification
        And the user cancel delete notification
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | button Row List |

    @NLC007
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Notification List - the user selects accepted delete in action swipe
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses center notification
        When the user access swipe delete notification
        And the user accepted delete notification
        Then the user sees the following items in the screen
            | item          |
            | header        |

    @NLC008
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Notification List - the user selects marcar como destacado in action swipe
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses center notification
        When the user access swipe favorite notification
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | list notification |
            | favorite icon     |

    @NLC009
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Notification List - the user selects desmarcar como destacado in action swipe
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses center notification
        When the user access swipe more event notification
        Then the user sees the following items in the screen
            | item                     |
            | header modal more action |
            | modal more actions       |
            | list notification        |

    @NLC010
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Notification List - the user selects mas acciones
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses center notification
        When the user access swipe more event notification
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | action                |
            | button more actions   |

    @NLC011
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Notification List - the user accesses the notification settings - <Coming Soon>
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses center notification
        When the user access settings notification
        Then the user accesses the "notifications settings" screen

    @NLC012
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Notification Center - the user mark notification UNREAD
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses center notification
        When the user access mark unread notification
        Then the user sees the following items in the screen
            | item                     |
            | header                   |
            | button Row List          |
            | notification select read |

    @NLC013
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Notification Center - the user mark notification READ
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses center notification
        When the user access mark notification read
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | button Row List            |
            | notification select unread |

    @NLC014
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Notification List - the user accesses search notification
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses center notification
        And the user access mark notification read
        When the user access notification filter list
        Then the user sees the following items in the screen
            | item             |
            | filters          |
            | button filters   |
            | category filters |

    @NLC015
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    @smokeTest
    Scenario: Notification List - the user accesses result notificaton
        Given a user with the following criteria
            | criteria              |
            | notifications phase 2 |
        And the user accesses center notification
        And the user access mark notification read
        When the user access notification filter list
        And the user access result notifications
        Then the user sees the following items in the screen
            | item          |
            | list result   |
            | date result   |
            | header result |
