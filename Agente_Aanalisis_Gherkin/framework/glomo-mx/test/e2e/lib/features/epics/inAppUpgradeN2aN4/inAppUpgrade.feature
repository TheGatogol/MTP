@inAppUpgradeN2aN4
Feature:InApp Upgrade N2 a N4

    @IAU002
    @web @ios @android
    @backend(test)
    @MX
    @vbank
    @web-done @smokeTest
    Scenario Outline: Return to dashboard screen from "<case>"
        Given a user with the following criteria
            | criteria             |
            | in app upgrade n2 n4 |
        And the user accesses to dashboard
        And the user goes to "in app upgrade n2 a n4" using deeplink navigation
        When the user access the dashboard with "<button>"
        Then the user accesses the "dashboard" screen

        Examples:
            | case                   | button |
            | in other moment button | accept |
            | exit button            | exit   |

    @IAU003
    @web @ios @android
    @backend(test)
    @MX
    @vbank
    @web-done
    Scenario: User accesses the Learn More screen
        Given a user with the following criteria
            | criteria             |
            | in app upgrade n2 n4 |
        And the user accesses to dashboard
        And the user goes to "in app upgrade n2 a n4" using deeplink navigation
        When the user displays an informative message
        Then the user sees the following items in the screen
            | item             |
            | info modal close |
            | info buton modal |
            | info panel modal |

    @IAU004
    @web @ios @android
    @backend(test)
    @MX
    @vbank
    @web-done
    Scenario: User return to Your Account without Limits screen from Learn More screen
        Given a user with the following criteria
            | criteria             |
            | in app upgrade n2 n4 |
        And the user accesses to dashboard
        And the user goes to "in app upgrade n2 a n4" using deeplink navigation
        And the user displays an informative message
        When the user accepts terms and conditions of inApp
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | exit button                |
            | micro ilustration inapp n2 |
            | link                       |
            | accept button              |
