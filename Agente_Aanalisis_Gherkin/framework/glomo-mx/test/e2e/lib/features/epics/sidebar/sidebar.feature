@sidebar
Feature: Sidebar

    @SB001
    @ios @android @native
    @MX @backend(test) @vbank
    @android-done @ios-done
    Scenario: Options in a user not logged and not cached
        Given a user not logged and not cached
        When the user accesses to the sidebar
        Then the user will see following options enabled in sidebar
            | item                    |
            | Sustainability Public   |
            | About                   |

    @SB002
    @ios @android @native
    @MX @backend(artichoke) @vbank
    @android-done @ios-done @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: Options in a user not logged and cached
        Given a user with the following criteria
            | criteria |
            | enabled  |
        And the user logs in and logs out
        When the user accesses to the sidebar
        Then the user will see following options enabled in sidebar
            | item                    |
            | Sustainability Public   |
            | About                   |

    @SB003
    @ios @android @native
    @MX @backend(artichoke) @vbank
    @smokeTest @manual @JIRA.GLOMOMX-163235
    Scenario: Options in a user logged
        Given a user with the following criteria
            | criteria |
            | enabled  |
        When the user access the "dashboard" screen
        And the user accesses to the sidebar
        Then the user will see following options enabled in sidebar
            | item              |
            | profile           |
            | Sustainability    |
            | clarifications    |
            | About             |
            | salir option    |
