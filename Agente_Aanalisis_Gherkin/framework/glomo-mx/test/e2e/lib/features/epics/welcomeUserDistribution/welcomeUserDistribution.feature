@WelcomeUserDistribution
Feature: Welcome User Distribution

    @WUD001
    @ios @android @native @android-done
    @MX @backend(test) @vbank
    Scenario Outline: Non-remembered user accesses app after fresh install: <device>
        Given a user accesses the application for the first time
        When the user is in the Welcome User Distribution
        Then the user sees the following items in the screen
            | item                     | status  |
            | video                    | <video> |
            | message                  |         |
            | entrar option            |         |
            | quiero una cuenta option |         |

        Examples:
            | device  | video   |
            | android | visible |

        @manual @JIRA.GLOMOGL-26754
        Examples:
        # Video: Unable to check the video element on iOS
            | device | video     |
            | ios    | not apply |

    @WUD002
    @android @ios @native
    @MX @backend(test) @vbank @vbank-modified
    @android-done @ios-done @smokeTest
    Scenario: User selects "Entrar" option
        Given a user accesses the application for the first time
        When the user is in the Welcome User Distribution
        And the user selects the "Entrar" option
        Then the user accesses the "public landing" screen
