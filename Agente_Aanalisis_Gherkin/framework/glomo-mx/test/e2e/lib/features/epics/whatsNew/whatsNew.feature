@whatsNew
Feature: Whats New

    @WN001
    @MX @backend(test) @manual @JIRA.GLOMOGL-17702
    @native
    @ios @android
    Scenario: The user sees the What's New screen
        Given a user with the following criteria
            | criteria  |
            | WN User   |
        When the user goes to the Whats New screen
        Then the user sees the following items in the screen
            | item           |
            | description    |
            | accept button  |

    @WN002
    @MX @backend(test) @manual @JIRA.GLOMOGL-17702
    @native
    @ios @android
    @smokeTest
    Scenario: The user leaves the Whats New screen
        Given a user with the following criteria
            | criteria  |
            |  WN User  |
        When the user goes to the Whats New screen
        And the user continues to dashboard screen
        Then the user accesses the "dashboard" screen

    @WN003
    @MX @backend(test) @manual @JIRA.GLOMOGL-17702
    @native
    @ios @android
    Scenario Outline: The user navigates to the <notice> screen of the update message
        Given a user with the following criteria
            | criteria  |
            | WN User   |
        When the user goes to the Whats New screen
        And the user continues to the "<notice>" screen
        Then the user sees the following items in the screen
            | item           |
            | description    |
            | accept button  |

        Examples:
            | notice |
            | first  |
            | second |
            | third  |
            | fourth |

    @WN004
    @MX @backend(test) @manual @JIRA.GLOMOGL-17702
    @native
    @ios @android
    Scenario: The user leaves the Whats New screen at the last update message
        Given a user with the following criteria
            | criteria  |
            |  WN User  |
        When the user goes to the Whats New screen
        And the user goes to the last screen and exits Whats New
        Then the user sees the "dashboard" screen
