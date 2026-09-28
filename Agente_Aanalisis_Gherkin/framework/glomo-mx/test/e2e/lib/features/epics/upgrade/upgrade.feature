@appUpgrade
Feature: App upgrade

    @AUG001
    @native
    @android @ios
    @android-done @ios-done
    @backend(test) @MX @vbank
    @vbank-modified
    @smokeTest
    # REQUIRED: Second GET app settings request should be modified with a copy of the first one and replacing the minVersion and the adviceVersion in order to force mandatory and optional updates.
    Scenario Outline: Open app with <type> upgrade with cached user
        Given a user with the following criteria
            | criteria  |
            | active    |
        When the user logs in and reset app
        Then the user sees the following items in the screen:
            | item                     | visibility                |
            | Avatar                   | visible                   |
            | Greeting                 | visible                   |
            | Access button            | <access_button>           |
            | Update blocker message   | <update_blocker_message>  |
            | Optional update section  | <optional_update_section> |

        Examples:
            | type      | access_button | update_blocker_message | optional_update_section |
            | optional  | visible       | hidden                 | visible                 |
            | mandatory | hidden        | visible                | hidden                  |

    @AUG002
    @native @android @ios
    @android-done @ios-done
    @backend(test) @MX @vbank
    @vbank-modified
    @no-data-manager
    # REQUIRED: GET app settings request should be modified to replace the minVersion and the adviceVersion in order to force mandatory and optional updates.
    Scenario Outline: Open app with <type> upgrade when user is not cached
        Given a user accesses the application for the first time
        When the user accesses to public Landing Screen
        Then the user sees the following items in the screen:
            | item                     | visibility                |
            | Greeting                 | visible                   |
            | Access button            | <access_button>           |
            | Update blocker message   | <update_blocker_message>  |
            | Optional update section  | <optional_update_section> |

        Examples:
            | type      | access_button | update_blocker_message | optional_update_section |
            | optional  | visible       | hidden                 | visible                 |
            | mandatory | hidden        | visible                | hidden                  |

    @AUG003
    @MX @vbank
    @native @ios @ios-done
    @manual @JIRA.GLOMOGL-29405
    Scenario Outline: Open app with <type> upgrade with cached user and <min_sdk> system version informed
        Given a user with the following criteria
            | criteria |
            | active   |
        And the user device with following criteria
            | item            | value     |
            | Platform        | ios       |
            | System Version  | 16.2      |
            | minSDK          | <min_sdk> |
        When the user logs in and reset app
        Then the user sees the following items in the screen
            | item                     | visibility                |
            | Avatar                   | visible                  |
            | Greeting                 | visible                |
            | Access button            | <access_button>           |
            | Update blocker message   | <update_blocker_message>  |
            | Optional update section  | <optional_update_section> |

        Examples:
            | min_sdk   | type      | access_button | update_blocker_message | optional_update_section |
            | 16.3      | optional  | visible       | hidden                 | hidden                  |
            | 16.3      | mandatory | visible       | hidden                 | hidden                  |
            | 16.0      | optional  | visible       | hidden                 | visible                 |
            | 16.0      | mandatory | hidden        | visible                | hidden                  |

    @AUG004
    @MX @vbank
    @native @ios @ios-done
    @no-data-manager
    @manual @JIRA.GLOMOGL-29405
    Scenario Outline: Open app with <type> upgrade when user is not cached and <min_sdk> system version informed
        Given a user accesses the application for the first time
        And the user device with following criteria
            | item            | value            |
            | Platform        | ios              |
            | System Version  | 16.2             |
            | minSDK          | <min_sdk>        |
        When the user accesses to public Landing Screen
        Then the user sees the following items in the screen
            | item                     | visibility                |
            | Greeting                 | visible                   |
            | Access button            | <access_button>           |
            | Update blocker message   | <update_blocker_message>  |
            | Optional update section  | <optional_update_section> |

        Examples:
            | min_sdk   | type      | access_button | update_blocker_message | optional_update_section |
            | 16.3      | optional  | visible       | hidden                 | hidden                  |
            | 16.3      | mandatory | visible       | hidden                 | hidden                  |
            | 16.0      | optional  | visible       | hidden                 | visible                 |
            | 16.0      | mandatory | hidden        | visible                | hidden                  |
