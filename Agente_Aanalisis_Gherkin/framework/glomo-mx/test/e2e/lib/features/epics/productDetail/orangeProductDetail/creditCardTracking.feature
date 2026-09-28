@trackingTdc
Feature: Tracking TDC

    @TRT001
    @MX
    @vbank @backend(test)
    @web @ios @android
    @smokeTest
    @web-done
    Scenario Outline: the user access Track my card with <user>
        Given a user with the following criteria
            | criteria               |
            | credit card in transit |
            | <user>                 |
        When the user accesses to the "operative" "credit" card product detail
        And the user access Track my card
        Then the user sees the following items in the screen
            | item                             | value    |
            | header                           |          |
            | back button                      |          |
            | show button                      |          |
            | date card application            |          |
            | date manufacturing customization | <value1> |
            | date sent                        | <value2> |
            | date delivered                   | <value3> |
        Examples:
            | user                                   | value1      | value2      | value3      |
            | apply for a credit card                | not visible | not visible | not visible |
            | status manufacturing and customization |             | not visible | not visible |
            | sent credit card                       |             |             | not visible |
            | delivered                              |             |             |             |

    @TRT002
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Headeride address
        Given a user with the following criteria
            | criteria               |
            | credit card in transit |
            | sent credit card       |
        And the user accesses to the "operative" "credit" card product detail
        And the user access Track my card
        When the user hides the address
        Then the user sees the following items in the screen
            | item               |
            | header show        |
            | back button show   |
            | show adress button |
            | help icon          |
            | adress text        |

    @TRT003
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Exit track my card
        Given a user with the following criteria
            | criteria               |
            | credit card in transit |
            | sent credit card       |
        And the user accesses to the "operative" "credit" card product detail
        And the user access Track my card
        When the user goes back to orange card product detail
        Then the user sees the following items in the screen
            | item                         | value   |
            | header                       |         |
            | onoff action                 |         |
            | card location button         |         |
            | generate digital card action | enable  |
            | card image                   |         |

    @TRT004
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Error access the address
        Given a user with the following criteria
            | criteria               |
            | credit card in transit |
            | sent credit card       |
        And the user accesses to the "operative" "credit" card product detail
        And the user access Track my card
        When the user access the address
        Then the user sees the following items in the screen
            | item         |
            | icon error   |
            | text error   |
            | retry error  |
            | cancel error |

    @TRT005
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Show modal information
        Given a user with the following criteria
            | criteria               |
            | sent credit card       |
        And the user accesses to the "operative" "credit" card product detail
        And the user access Track my card
        When the user access the help information
        Then the user sees the following items in the screen
            | item               |
            | header information |
            | icon information   |
            | accept button      |
