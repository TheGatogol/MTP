@emergencyZone
Feature: emergencyZone

    @EZ001 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Screen Validation - Emergency Zone
        Given a user with the following criteria
            | criteria        |
            | emergency zone  |
        And the user access the "dashboard" screen
        When the user enters the emergency zone menu
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | stolen card button        |
            | change password button    |
            | need cash button          |
            | call bbva button          |

    @EZ002 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Screen Validation - Emergency Lost Card
        Given a user with the following criteria
            | criteria        |
            | emergency zone  |
        And the user access the "dashboard" screen
        When the user enters the section where I can't find my card or it was stolen
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | toggle card button    |
            | lock card button      |

    @EZ003 @vbank
    @MX @web @android @ios
    @smokeTest
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Screen Validation - Emergency Change Password
        Given a user with the following criteria
            | criteria        |
            | emergency zone  |
        And the user access the "dashboard" screen
        When the user enter to need to change my password section
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | change password button    |

    @EZ004 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Screen Validation - Emergency Need Cash
        Given a user with the following criteria
            | criteria        |
            | emergency zone  |
        And the user access the "dashboard" screen
        When the user enter to need cash section
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | need cash button      |

    @EZ005 @vbank
    @MX @web @android @ios
    @smokeTest
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Screen Validation - Lock Card
        Given a user with the following criteria
            | criteria   |
            | emer zone  |
        And the user access the "dashboard" screen
        When the user enter to lock card section
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | text description      |
            | list cards            |

    @EZ006 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Screen Validation - Toggle Card
        Given a user with the following criteria
            | criteria        |
            | emergency zone  |
        And the user access the "dashboard" screen
        When the user enter to toggle card section
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | text description      |
            | list cards            |

    @EZ007 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Success Message - Toggle Card
        Given a user with the following criteria
            | criteria   |
            | emer zone  |
        And the user access the "dashboard" screen
        When the user enter to toggle card section
        And the user turn on or off a card
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | text description      |
            | list cards            |
            | success message       |

    @EZ008 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Error Message - Toggle Card
        Given a user with the following criteria
            | criteria   |
            | emer zone  |
        And the user access the "dashboard" screen
        When the user enter to toggle card section
        And the user turn on or off a card
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | text description      |
            | list cards            |
            | error message         |

    @EZ009 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Emergency Need Cash - Go To Cardless Withdrawal
        Given a user with the following criteria
            | criteria                              |
            | emergency with cardless withdrawal    |
        And the user access the "dashboard" screen
        And the user enter to need cash section
        When the user tries access to cardless withdrawal from emergency zone
        Then the user sees the "cardless withdrawal" screen
