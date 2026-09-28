@homeFrequentActions
Feature: Home Frequent Actions

    @HFA001
    @ios @android
    @MX
    @vbank
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Validate that the 3 frequent actions are displayed with a new client
        Given a user with the following criteria
            | criteria    |
            | futura user |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                                 |
            | frequent actions section             |
            | title frequent actions               |
            | frequent action send money dimo      |
            | frequent action pay service or tax   |
            | frequent action card less withdrawal |

    @HFA002
    @smokeTest @ios @android
    @MX
    @vbank
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Validate that the smart service operations are displayed in the action carousel
        Given a user with the following criteria
            | criteria    |
            | futura user |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                                         |
            | More operatives                              |
            | frequent action credit card payment          |
            | frequent action pay service or tax           |
            | frequent action recharge and packages        |

    @HFA003
    @ios @android
    @MX
    @vbank
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Validate frequent operations
        Given a user with the following criteria
            | criteria      |
            | futura user   |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                                         |
            | frequent actions section                     |
            | frequent action branches and atms            |
            | frequent action international transfers      |
            | frequent action card less withdrawal inquiry |
            | frequent action buy gift card                |
