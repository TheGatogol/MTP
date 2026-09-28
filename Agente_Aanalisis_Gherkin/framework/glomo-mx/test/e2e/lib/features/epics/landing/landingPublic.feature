@landingPublic
Feature: Landing Public

    @LAP001
    @ios @android @native
    @android-done @ios-done
    @backend(test) @MX @vbank
    @no-data-manager
    @smokeTest
    Scenario: See public landing page in the first access
        Given a user accesses the application for the first time
        When the user accesses to public Landing Screen
        Then the user sees the following items in the screen:
            | item                            |
            | Greeting                        |
            | Access button                   |
            | Digital activation link         |
            | Linea BBVA shortcut             |
            | New client section              |

    @LAP002
    @ios @android @native
    @android-done @ios-done
    @backend(test) @MX @vbank
    @no-data-manager
    Scenario: Back to public landing page from login
        Given a user accesses the application for the first time
        And the user accesses the Login Screen
        When the user goes back to previous page
        Then the user accesses the "public landing" screen

    @LAP003
    @ios @android @native
    @android-done @manual-ios @JIRA.GLOMOGL-20707
    @backend(test) @MX @vbank
    @no-data-manager
    Scenario: Open external web to become a new client from shortcut
        Given a user accesses the application for the first time
        When the user accesses to public Landing Screen
        And the user accesses to "become a client" screen from shortcuts
        Then the application is on background
        And the "browser" application is opened
