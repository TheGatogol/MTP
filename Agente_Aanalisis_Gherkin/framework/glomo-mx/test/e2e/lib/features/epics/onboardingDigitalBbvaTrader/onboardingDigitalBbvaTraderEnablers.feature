@onboardingDigitalBbvaTrader @onboardingDigitalBbvaTraderEnablers
Feature: BBVA Trader Onboarding Enablers

    @BTH001
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke @smokeTest
    Scenario: Contract BBVA Trader banker section
        Given a user with the following criteria
            | criteria                      |
            | onboarding btrader commercial personal plus |
        And the user goes to the onboarding bbva trader offer
        And the user accepts the onboarding offer
        And the user completes the onboarding flow "by selecting an account"
        When the user confirms the operation onboarding
        Then the user sees the following items in the screen
            | item                |
            | success title       |
            | success resume      |
            | entry point btrader |
            | success button row  |
