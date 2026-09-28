@notificationsSettings
Feature: Notifications Settings

    @NS002
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: User accesses the list of <type>
        Given a user with the following criteria
            | criteria               |
            | has accounts and cards |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to notifications option in configure products
        When the user accesses the list of "<type>" that can be configured notifications
        Then the user sees the following items in the screen
            | item         |
            | header title |
            | back button  |
            | title        |
            | description  |

        Examples:
            | type     |
            | accounts |
            | cards    |

    @NS003
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: User accesses to modify amounts screen
        Given a user with the following criteria
            | criteria               |
            | has accounts and cards |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to notifications option in configure products
        And the user accesses the list of "accounts" that can be configured notifications
        When the user opens screen to modify amounts
        Then the user sees the following items in the screen
            | item                   |
            | editor header          |
            | editor title           |
            | editor description     |
            | expense amount         |
            | income amount          |
            | save button            |
            | restore amounts button |

    @NS004
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @smokeTest
    @backend-smoke
    Scenario: User modifies and saves amounts
        Given a user with the following criteria
            | criteria               |
            | has accounts and cards |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to notifications option in configure products
        And the user accesses the list of "accounts" that can be configured notifications
        When the user saves new notification settings
        Then the user sees the following items in the screen
            | item              |
            | description toast |

    @NS005
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario Outline: User does not have <type> with alerts enabled
        Given a user with the following criteria
            | criteria                  |
            | no movement notifications |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to notifications option in configure products
        When the user try accesses the list of "<type>"
        Then the user sees a modal with the following elements:
            | item          |
            | title         |
            | hero image    |
            | main text     |
            | accept button |

        Examples:
            | type     |
            | cards    |
            | accounts |

    @NS006
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario Outline: Error modifying <type> amounts
        Given a user with the following criteria
            | criteria               |
            | has accounts and cards |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to notifications option in configure products
        When the user accesses the list of "<type>" that can be configured notifications
        And the user saves new notification settings
        Then the user sees a modal with the following elements:
            | item          |
            | hero image    |
            | main text     |
            | accept button |
            | cancel button |

        Examples:
            | type     |
            | cards    |
            | accounts |

    @NS007
    @web @ios @android
    @MX @backend(test) @vbank @spherica @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: User accesses the notifications screen and view modal help
        Given a user with the following criteria
            | criteria               |
            | has accounts and cards |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to notifications option in configure products
        When the user view modal help
        Then the user sees a modal with the following elements:
            | item          |
            | hero image    |
            | main text     |
            | accept button |
