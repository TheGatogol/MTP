@checklistActions
Feature: Checklist Actions

    @CLA001
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    @smokeTest
    Scenario Outline: User "<action>" the onboarding modal
        Given a user with the following criteria
            | criteria                      |
            | checklist actions credit card |
            | without completed challenge   |
        And the user accesses to dashboard
        And the user goes to "screen checklist actions" using deeplink navigation
        When the user "<action>" the onboarding
        Then the user sees the following items in the screen:
            | item                                  | value         |
            | progress section title                |               |
            | progress section description          |               |
            | progress section clip box             |               |
            | progress section text                 |               |
            | progress section progress bar         |               |
            | insigns section title                 |               |
            | insigns section link                  |               |
            | insigns section badge section         |               |
            | challenges section title              |               |
            | challenges section pending button     |               |
            | challenges section completed button   |               |
            | challenges section badge expandable   | expedite      |
            | challenges section badge expandable   | security      |
            | challenges section badge expandable   | opportunities |
        Examples:
            | action  |
            | accepts |
            | leaves  |

    @CLA002
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    Scenario: View the help modal from digital badges
        Given a user with the following criteria
            | criteria                      |
            | checklist actions credit card |
            | without completed challenge   |
        And the user accesses to dashboard
        And the user goes to "screen checklist actions" using deeplink navigation
        And the user "accepts" the onboarding
        When the user opens help modal digital badge
        Then the user sees the following items in the screen:
            | item                                      |
            | information badge modal button close      |
            | information badge modal microillustration |
            | information badge modal description       |

    @CLA003
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    Scenario Outline: View section "<status>" challenges
        Given a user with the following criteria
            | criteria                      |
            | checklist actions credit card |
            | <state> completed challenge   |
        And the user accesses to dashboard
        And the user goes to "screen checklist actions" using deeplink navigation
        And the user "accepts" the onboarding
        When the user selects section "<status>" challenges
        Then the user sees the following items in the screen:
            | item                                             | value         | visibility |
            | challenges section title                         |               |            |
            | challenges section pending button                |               |            |
            | challenges section completed button              |               |            |
            | challenges section badge expandable              | expedite      | <visible>  |
            | challenges section badge expandable              | security      | <visible>  |
            | challenges section badge expandable              | opportunities | <visible>  |
            | challenges section completed badge icon          |               | <visible>  |
            | challenges section completed challenge container |               | <visible>  |
        Examples:
            | status    | state   | visible     |
            | completed | with    | visible     |
            | pending   | without | not visible |

    @CLA004
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    Scenario: Close checklist actions page
        Given a user with the following criteria
            | criteria                      |
            | checklist actions credit card |
            | without completed challenge   |
        And the user accesses to dashboard
        And the user goes to "screen checklist actions" using deeplink navigation
        And the user "leaves" the onboarding
        When the user closes the checklist actions page
        Then the user sees the "dashboard" screen
