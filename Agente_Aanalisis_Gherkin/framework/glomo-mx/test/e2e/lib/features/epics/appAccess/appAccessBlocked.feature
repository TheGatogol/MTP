@appAccessBlocked
Feature: App access blocked

    @AAB001
    @native @android @ios
    @android-done @ios-done
    @backend(test) @MX @vbank
    @vbank-modified
    @smokeTest
    @tmpExclude @JIRA.GLOMOMX-180582
    # REQUIRED: Second GET app settings request should be modified with a copy of the first one and setting isAppAvailable to false.
    Scenario: Open app with blocked access when user is cached
        Given a user with the following criteria
            | criteria |
            | active   |
        When the user logs in and reset app
        Then the user sees the following items in the screen:
            | item                   | visibility |
            | Sidebar button         | hidden     |
            | Avatar                 | visible    |
            | Greeting               | visible    |
            | Access button          | hidden     |
            | Access blocker message | visible    |

    @AAB002
    @android @ios @native
    @android-done @ios-done
    @backend(test) @MX @vbank
    @vbank-modified
    @no-data-manager
    @alternate-scenarios-smoke
    # REQUIRED: GET app settings request should be modified to set isAppAvailable to false.
    Scenario: Open app with blocked access when user is not cached
        Given a user accesses the application for the first time
        When the user accesses to public Landing Screen
        Then the user sees the following items in the screen:
            | item                   | visibility |
            | Sidebar button         | hidden     |
            | Greeting               | visible    |
            | Access button          | hidden     |
            | Access blocker message | visible    |
