@experiences
Feature: Experiences Section
    @EXP001
    @MX
    @web @ios @android
    @web-done
    @vbank
    @backend(test)
    @smokeTest
    @manual @JIRA.GLOMOMX-247069
    Scenario: Access single experiences section from dashboard
        Given a user with the following criteria
            | criteria                  |
            | active metas saving goals |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                           |
            | experiences header             |
            | metas saving goals slide       |
            | metas saving goals image       |
            | metas saving goals title       |
            | metas saving goals description |
            | metas saving goals link        |

    @EXP002
    @MX
    @web @ios @android
    @web-done
    @vbank
    @backend(test)
    @smokeTest
    @manual @JIRA.GLOMOMX-247069
    Scenario: Access Goals Experience from Dashboard
        Given a user with the following criteria
            | criteria                  |
            | active metas saving goals |
        When the user accesses to goals from experiences section
        Then the user sees the following items in the screen
            | item      |
            | goal list |
            | add goal  |
