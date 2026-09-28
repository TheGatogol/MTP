@requestDebitCard
Feature: Request Debit Card

    @RDC001
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: The user accesses to the debit card request feature
        Given a user with the following criteria
            | criteria           |
            | debit card request |
        When the user accesses to dashboard
        And the user accesses to debit card request offer
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | image           |
            | title           |
            | benefits        |
            | features        |
            | considerations  |
            | message         |
            | continue button |

    @RDC002
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: The user makes step 1 of debit card request feature
        Given a user with the following criteria
            | criteria           |
            | debit card request |
        When the user is in the "delivery address" step of debit card request
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | delivery address    |
            | show address button |
            | continue button     |

    @RDC003
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: The user makes step 1 and tap on show delivery address of debit card request feature
        Given a user with the following criteria
            | criteria           |
            | debit card request |
        And the user is in the "delivery address" step of debit card request
        And the user tap on show delivery address
        When the sms key "12345678" is entered
        Then the user address is unmasked

    @RDC004
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: The user makes step 2 of debit card request feature
        Given a user with the following criteria
            | criteria           |
            | debit card request |
        When the user is in the "shipping summary" step of debit card request
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | delivery address |
            | confirm contract |

    @RDC005
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: The user successfully completes debit card request
        Given a user with the following criteria
            | criteria           |
            | debit card request |
        And the user is in the "shipping summary" step of debit card request
        And the user confirms contract of debit card request
        When the user confirms the sms key to finalize debit card request
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | debit card receipt  |
            | operation date      |
            | operation number    |
            | delivery address    |
            | information message |

    @RDC006
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX @smokeTest
    Scenario: View debit card request offer in dashboard
        Given a user with the following criteria
            | criteria           |
            | debit card request |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                | value   |
            | Banner Image        |         |
            | Banner Date         | visible |
            | Banner Description  |         |
            | Banner Link         |         |
            | Banner Close Button |         |

    @RDC007
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @MX
    Scenario: Close offer in dashboard
        Given a user with the following criteria
            | criteria           |
            | debit card request |
        When the user accesses to dashboard
        And the user close the offer
        Then the user does not see the offer
