@homeExperiencesSection
Feature: Home Experiences Section

    @HE001
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Validate that the "Experiences" screen is displayed
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        When the user accesses the experiences section list
        Then the user sees the following items in the screen
            | item                                |
            | header list experience section      |
            | back mini button experience section |
            | title list experience section       |
            | carousel experiences section        |

    @HE002
    @smokeTest @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Ensure last card is shown when carousel overflows
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        When the user accesses the last card from the carousel
        Then the user sees the following items in the screen
            | item                                        |
            | title carousel experience section           |
            | link to view all experience section         |
            | item four to four on experiences section    |
            | button next card to experiences section     |
            | button previous card to experiences section |
            | last card experiences section               |

    @HE003
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Validate that the user has more than 1 experience and less than 4.
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        When the user accesses the next card from the carousel
        Then the user sees the following items in the screen
            | item                                        |
            | title carousel experience section           |
            | link to view all experience section         |
            | item two to four on experiences section     |
            | button next card to experiences section     |
            | button previous card to experiences section |
            | next card experiences section               |

    @HE005
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: The client does not have an available item
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        When the user attempt accesses the experiences section card
        Then the user sees the following items in the screen
            | item                                  |
            | carousel experience section disappear |

    @HE006
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Access the list of experiences through the "see more" button in the header
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        When the user accesses the experiences section list
        Then the user sees the following items in the screen
            | item                     |
            | list experiences section |
