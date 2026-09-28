@feedbackContextual @feedback
Feature: Feedback Contextual

    @FC001
    @MX @backend(test)
    @vbank @vbank-modified
    @ios @android @web
    @web-done
    @smokeTest
    Scenario Outline: Flow <operation_flow> success contextual feedback
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user completes "<operation_flow>" operative
        And the user closes the current operative
        When the user waits for the operation to exit
        Then the user sees the following items in the screen
            | item                   |
            | Feedback Exit Button   |
            | Feedback External Page |
        Examples:
            | operation_flow |
            | transfer       |

    @FC002
    @MX @backend(test)
    @vbank @vbank-modified
    @ios @android @web
    @manual @JIRA.GLOMOGL-26754
    Scenario Outline: Flow <operation_flow> success contextual feedback - Exit without complete
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user completes "<operation_flow>" operative
        And the user closes the current operative
        When the user exits feedback page
        Then the user accesses the "<page>" screen
        Examples:
            | operation_flow | page      |
            | transfer       | dashboard |

    @FC003
    @MX @backend(test)
    @vbank @vbank-modified
    @ios @android @web
    @web-done
    Scenario Outline: Flow "<operation_flow>" abandon contextual feedback
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user is in "<operation_flow>" page
        And the user closes the current operative
        When the user waits for the operation to exit
        Then the user sees the following items in the screen
            | item                   |
            | Feedback Exit Button   |
            | Feedback External Page |
        Examples:
            | operation_flow  |
            | mobile top up   |
            | service payment |
            | transfer        |

    @FC004
    @MX @backend(test)
    @vbank @vbank-modified
    @ios @android @web
    @manual @JIRA.GLOMOGL-26754
    Scenario Outline: Flow "<operation_flow>" abandon contextual feedback - Exit without complete
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user is in "<operation_flow>" page
        And the user closes the current operative
        When the user exits feedback page
        Then the user accesses the "<page>" screen
        Examples:
            | operation_flow          | page      |
            | mobile top up abandon   | dashboard |
            | service payment abandon | dashboard |
            | transfer abandon        | dashboard |

    @FC005
    @web @ios
    @manual @JIRA.GLOMOGL-26754 @MX
    Scenario Outline: Flow <operation_flow> success contextual feedback with rate the app
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user completes "<operation_flow>" operative
        When the user sends feedback with more than 4 stars
        Then the user sees the following items in the screen
            | item                                   |
            | Rate the app in the store native modal |
            | Cancel button                          |
        Examples:
            | operation_flow |
            | transfer       |
