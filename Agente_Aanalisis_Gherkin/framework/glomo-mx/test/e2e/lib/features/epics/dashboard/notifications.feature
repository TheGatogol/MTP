@dashboard_notifications
Feature: Dashboard Notifications

    @DN001 @vbank
    @MX @web @android @ios
    @smokeTest
    @backend(test)
    @web-done
    Scenario Outline: Show <notification> notification card
        Given a user with the following criteria
            | criteria       |
            | <notification> |
            | app_settings   |
        And device with notifications enabled
        And the user starts the application at date:
            | day   | 19   |
            | month | 1    |
            | year  | 2022 |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | greeting                  |
            | help button               |
            | sidebar                   |
            | icon notification         |
            | heading notification      |
            | message notification      |
            | navigate button           |
            | close button notification |
        Examples:
            | notification           |
            | credit bureau          |
            | assistance manager     |
            | notifications settings |

    @DN002 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: No show notification card
        Given a user with the following criteria
            | criteria              |
            | without notifications |
            | app_settings          |
        And device with notifications disable
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                      | value      |
            | header                    |            |
            | greeting                  |            |
            | help button               |            |
            | sidebar                   |            |
            | icon notification         | no-visible |
            | heading notification      | no-visible |
            | message notification      | no-visible |
            | navigate button           | no-visible |
            | close button notification | no-visible |

    @DN003 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Close the notification card.
        Given a user with the following criteria
            | criteria               |
            | notifications settings |
            | app_settings           |
        And device with notifications enabled
        And the user accesses to dashboard
        When the user closes the notification card
        Then the user sees the following items in the screen
            | item                      | value      |
            | header                    |            |
            | greeting                  |            |
            | help button               |            |
            | sidebar                   |            |
            | icon notification         | no-visible |
            | heading notification      | no-visible |
            | message notification      | no-visible |
            | navigate button           | no-visible |
            | close button notification | no-visible |

    @DN004 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: After three session count show notifications settings cards
        Given a user with the following criteria
            | criteria          |
            | two session count |
            | app_settings      |
        And device with notifications enabled
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | greeting             |
            | help button          |
            | sidebar              |
            | icon notification    |
            | heading notification |
            | message notification |
            | navigate button      |

    @DN005 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: NotificationsSettings card shown after six days from it had been closed
        Given a user with the following criteria
            | criteria     |
            | six days     |
            | app_settings |
        And device with notifications enabled
        And the user starts the application at date:
            | day   | 19   |
            | month | 1    |
            | year  | 2022 |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | greeting             |
            | help button          |
            | sidebar              |
            | icon notification    |
            | heading notification |
            | message notification |
            | navigate button      |
