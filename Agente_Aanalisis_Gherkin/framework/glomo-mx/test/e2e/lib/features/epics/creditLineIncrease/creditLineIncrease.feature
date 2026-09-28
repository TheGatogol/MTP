@creditLineIncrease
Feature: Credit Line Increase

    @ILC002
    @vbank
    @ios @android
    @web-done @web
    @backend-smoke @smokeTest
    @backend(test) @MX
    Scenario Outline: Show information explaining why to update the information <option>
        Given a user with the following criteria
            | criteria                    |
            | credit line increase offer  |
        And the user accesses to dashboard
        And the user goes to "<option>" using deeplink navigation
        When the user enters accordions "<option>"
        Then the user sees the following items in the screen
            | item                  |
            | accordion benefits    |

        Examples:
            | option                                |
            | credit line increase nilc             |
            | remember credit line increase nilc    |

    @ILC003
    @vbank
    @ios @android
    @backend-smoke
    @web-done @web
    @backend(test) @MX
    Scenario: Access the account update screen from the notification center
        Given a user with the following criteria
            | criteria                    |
            | credit line increase notif  |
        And the user accesses center notification
        And the user open credit line notification credit line increase
        When the user goes to nCreditLineIncrease page
        Then the user sees the following items in the screen
            | item                  |
            | content increment     |
            | accordion benefits    |

    @ILC004
    @vbank
    @ios @android
    @backend-smoke
    @web-done @web
    @backend(test) @MX
    Scenario: See the deep link to enter the productive ilc workflow
        Given a user with the following criteria
            | criteria                    |
            | credit line increase offer  |
        And the user accesses to dashboard
        And the user goes to "credit line increase nilc" using deeplink navigation
        When the user goes to increment review page
        Then the user sees the "increase card limit review" screen

    @ILC006
    @vbank
    @ios @android
    @backend-smoke
    @web-done @web
    @backend(test) @MX
    Scenario: View details for the notification
        Given a user with the following criteria
            | criteria                    |
            | credit line increase notif  |
        And the user accesses center notification
        When the user open credit line notification credit line increase
        Then the user sees the following items in the screen
            | item                       |
            | detail alert               |
            | share action button        |
            | icon button action         |
            | detail description content |
            | detail category content    |

    @ILC007
    @vbank
    @ios @android
    @backend-smoke
    @web-done @web
    @backend(test) @MX
    Scenario: Go to the opportunities section and see the ilc offer
        Given a user with the following criteria
            | criteria                    |
            | credit line increase offer  |
        When the user accesses contract product section
        Then the user sees the following items in the screen
            | item  | value            |
            | offer | n-limit-increase |

    @ILC008
    @vbank
    @ios @android
    @backend-smoke
    @web-done @web
    @backend(test) @MX
    Scenario: Access ILC from the NBA section in the dashboard
        Given a user with the following criteria
            | criteria                    |
            | credit line increase offer  |
        And the user accesses to dashboard
        And the user accesses offer card dashboard "NBA"
        When the user goes to increment review page
        Then the user sees the "increase card limit review" screen

    @ILC009
    @vbank
    @ios @android
    @backend-smoke
    @web-done @web
    @backend(test) @MX
    Scenario: Access ILC from the NBO section in the dashboard
        Given a user with the following criteria
            | criteria                    |
            | credit line increase offer  |
        And the user accesses to dashboard
        And the user accesses offer card dashboard "NBO"
        When the user goes to increment review page
        Then the user sees the "increase card limit review" screen
