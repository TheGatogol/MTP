@feedbackNPS @feedback
Feature: Feedback NPS

    @FN001
    @web @ios @android
    @MX @vbank @backend(test)
    @web-done
    @smokeTest
    Scenario Outline: Flow <operation_flow> success nps feedback
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
            | operation_flow              |
            | mobile top up success       |
            | service payment success     |
            | cardless withdrawal success |
            | transaction list success    |

    @FN002
    @web @ios @android
    @MX @vbank @backend(test)
    @manual @JIRA.GLOMOGL-26754
    Scenario Outline: Flow <operation_flow> success nps feedback - Exit without complete
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        When the user completes "<operation_flow>" operative
        And the user closes the current operative
        And the user exits feedback page
        Then the user accesses the "<page>" screen
        Examples:
            | operation_flow              | page                |
            | mobile top up success       | account details     |
            | service payment success     | card details        |
            | cardless withdrawal success | cardless withdrawal |
            | transaction list success    | deposit details     |

    @FN003
    @web @ios
    @MX @vbank @backend(test)
    @manual @JIRA.GLOMOGL-26754
    Scenario Outline: Flow <operation_flow> success nps feedback with rate the app
        Given a user with the following criteria
            | criteria |
            | account  |
        And the user completes "<operation_flow>" operative
        And the user sends feedback with  9 or 10
        When the user waits for the operation to exit
        Then the user sees the following items in the screen
            | item                                   |
            | Rate the app in the store native modal |
            | Cancel button                          |

        Examples:
            | operation_flow              |
            | mobile top up success       |
            | service payment success     |
            | cardless withdrawal success |
            | transaction list success    |
