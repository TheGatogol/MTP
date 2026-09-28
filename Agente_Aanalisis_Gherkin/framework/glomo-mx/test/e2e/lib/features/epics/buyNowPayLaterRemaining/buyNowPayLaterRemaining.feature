@buyNowPayLaterRemaining
Feature: Buy Now Pay Later Remaining

    @BNPLR002
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Show multistep page
        Given a user with the following criteria
            | criteria                                  |
            | buy now pay later with approved microloan |
        And the user accesses to dashboard
        And the user goes to "buy now pay later remaining" using deeplink navigation
        When the user gets the step one of multistep
        Then the user sees the following items in the screen:
            | item                              | value     |
            | terms and conditions checbox one  | unchecked |
            | terms and conditions checbox two  | unchecked |
            | terms and conditions checbox tree | unchecked |
            | terms and conditions continue     |           |

    @BNPLR003
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Show summary page
        Given a user with the following criteria
            | criteria                                  |
            | buy now pay later with approved microloan |
        And the user accesses to dashboard
        And the user goes to "buy now pay later remaining" using deeplink navigation
        And the user gets the step one of multistep
        When the user complete the buy now pay later multistep
        Then the user sees the following items in the screen:
            | item           |
            | header summary |
            | confirm button |

    @BNPLR004
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Show otp screen
        Given a user with the following criteria
            | criteria                                  |
            | buy now pay later with approved microloan |
        And the user accesses to dashboard
        And the user goes to "buy now pay later remaining" using deeplink navigation
        When the user confirms the form and continues to otp screen
        Then the user sees the following items in the screen:
            | item               |
            | screen OTP         |
            | confirm button Otp |

    @BNPLR005
    @smokeTest
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Show hiring page
        Given a user with the following criteria
            | criteria                                  |
            | buy now pay later with approved microloan |
        And the user accesses to dashboard
        And the user goes to "buy now pay later remaining" using deeplink navigation
        And the user confirms the form and continues to otp screen
        When the user accesses to the buy now pay later success page
        Then the user sees the following items in the screen:
            | item                           |
            | success page title             |
            | success page microillustration |
            | success page header            |

    @BNPLR006
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Show modal Error
        Given a user with the following criteria
            | criteria                                  |
            | buy now pay later with approved microloan |
        And the user accesses to dashboard
        When the user goes to "buy now pay later remaining" using deeplink navigation
        Then the user sees the following items in the screen:
            | item                                 |
            | modal error not enough amount header |
            | modal error not enough amount title  |
