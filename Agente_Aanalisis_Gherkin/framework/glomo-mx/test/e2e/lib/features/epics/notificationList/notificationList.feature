@NotificationsList
Feature: Notification List

    @NL001
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @smokeTest
    @web-done
    @manual @JIRA.GLOMOMX-160270
    Scenario: Notification List - the user access the notification list
        Given a user with the following criteria
            | criteria              |
            | notifications online  |
        When the user accesses notifications list
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | search button             |
            | configuration button      |
            | notification list         |

    @NL002
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @smokeTest
    @web-done
    @manual @JIRA.GLOMOMX-160270
    Scenario: Notification List - the user access the notification filter
        Given a user with the following criteria
            | criteria              |
            | notifications online  |
        When the user accesses notification filter list
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | check box expense         |
            | check box alert           |
            | search button             |

    @NL003
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @smokeTest
    @web-done
    @manual @JIRA.GLOMOMX-160270
    Scenario: Notification List - the user access the notification result list
        Given a user with the following criteria
            | criteria              |
            | notifications online  |
        When the user accesses notification result list
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | list notification filter  |
            | tags filter               |
            | back button               |
            | form filter one           |
            | form filter two           |

    @NL004
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @manual @JIRA.GLOMOMX-160270
    Scenario: Notification List - the user removes a search filter
        Given a user with the following criteria
            | criteria              |
            | notifications online  |
        And the user accesses notification result list
        When the user removes a search filter from the notification result
        Then the user sees the following items in the screen
            | item                      |
            | Header                    |
            | List notification filter  |
            | Tags filter               |
            | Back button               |
            | Movements filter          |

    @NL005
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @manual @JIRA.GLOMOMX-160270
    Scenario: Notification List - the user removes all filters
        Given a user with the following criteria
            | criteria              |
            | notifications online  |
        And the user accesses notification result list
        When the user removes all filters from the notification result
        Then the user sees the following items in the screen
            | item                      |
            | Header                    |
            | No notifications          |

    @NL006
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @manual @JIRA.GLOMOMX-160270
    Scenario: Notification List - the user clears the filters of the checkboxes
        Given a user with the following criteria
            | criteria              |
            | notifications online  |
        And the user accesses notification filter list
        When the user clears the filters of the checkboxes
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | check box expense         |
            | check box alert           |
            | search button             |

    @NL007
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @manual @JIRA.GLOMOMX-160270
    Scenario: Notification List - the user accesses the details of the notification - <Coming Soon>
        Given a user with the following criteria
            | criteria              |
            | notifications online  |
        And the user accesses notifications list
        When the user accesses notifications list detail
        Then the user accesses the "coming soon" screen

    @NL008
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @manual @JIRA.GLOMOMX-160270
    Scenario: Notification List - the user accesses the notification settings - <Coming Soon>
        Given a user with the following criteria
            | criteria              |
            | notifications online  |
        And the user accesses notifications list
        When the user accesses the notification settings
        Then the user accesses the "coming soon" screen
