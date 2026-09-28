@securitySettingsAccess
Feature: Security Settings Access

    @SSA002
    @MX @backend(test) @smokeTest
    @vbank
    @ios @android @web
    @web-done
    Scenario: Four items are displayed within the button list when biometrics authenticators or invisible login
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user accesses to dashboard
        When the user accesses to "Security Menu" item located in the sidebar
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | back button                 |
            | access and signatures       |
            | app permissions             |
            | security tips               |
            | facial recognition settings |

    @SSA003
    @MX @backend(test)
    @vbank @no-data-manager
    @ios @android @web
    @web-done
    Scenario: Go Back from Security Menu when the user is not logged in
        Given the user accesses the Login Screen
        And the user accesses to "Security Menu" item located in the sidebar
        When the user goes back to previous page
        Then the user accesses the "login" screen

    @SSA004
    @MX @backend(test)
    @vbank @no-data-manager
    @ios @android @web
    @web-done
    Scenario Outline: The user sees the button <button> with its icon and label within the list of buttons when the user has not logged in
        Given the user accesses the Login Screen
        When the user accesses to "Security Menu" item located in the sidebar
        Then the user sees the following items in the screen
            | item           |
            | <button> icon  |
            | <button> label |

        Examples:
            | button          |
            | app permissions |
            | security tips   |

    @SSA005
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done
    Scenario Outline: The user sees the button <button> with its icon and label within the list of buttons when biometrics authenticators or invisible login
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user accesses to dashboard
        When the user accesses to "Security Menu" item located in the sidebar
        Then the user sees the following items in the screen
            | item           |
            | <button> icon  |
            | <button> label |

        Examples:
            | button                      |
            | access and signatures       |
            | app permissions             |
            | security tips               |
            | facial recognition settings |

    @SSA006
    @MX @backend(test)
    @vbank @no-data-manager
    @ios @android @web
    @web-done
    Scenario: The user sees that the page title is correct
        Given the user accesses the Login Screen
        When the user accesses to "Security Menu" item located in the sidebar
        Then the user sees the following items in the screen
            | item                |
            | security menu title |

    @SSA007
    @MX
    @vbank @backend(qa)
    @ios @android @web
    @alternate-scenarios-smoke
    @web-done
    Scenario: Screen Validation - App permissions Dashboard
        Given a user with the following criteria
            | criteria         |
            | setting access   |
        And the user accesses to dashboard
        When the user accesses to "Security Menu" item located in the sidebar
        And the user accesses to app permissions
        Then the user sees the following items in the screen
            | item                           |
            | header title                   |
            | information icon               |
            | back button                    |
            | notification description label |
            | camera description label       |

    @SSA008
    @MX @backend(qa)
    @vbank @no-data-manager
    @alternate-scenarios-smoke
    @ios @android @web
    @web-done
    Scenario: The user access to Application permissions options when the user is not logged in
        Given the user access the Login Screen
        When the user accesses to "Security Menu" item located in the sidebar
        And the user accesses to app permissions
        Then the user sees the following items in the screen
            | item                        |
            | header title                   |
            | information icon               |
            | back button                    |
            | notification description label |
            | camera description label       |
