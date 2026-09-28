@ocLoanrecolocation
Feature: Oc Loan Relocation

    @OCLR001
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done @smokeTest
    Scenario: Relocation offer on the dashboard
        Given a user with the following criteria
            | criteria              |
            | loan relocation offer |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                   |
            | button loan relocation |
            | text loan relocation   |

    @OCLR002
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Offer relocation in opportunities as principal
        Given a user with the following criteria
            | criteria              |
            | loan relocation offer |
        When the user accesses contract product section
        Then the user sees the following items in the screen
            | item               |
            | main banner        |
            | main banner button |

    @OCLR003
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with COMMISSION - Help button "?" "Commission"
        Given a user with the following criteria
            | criteria              |
            | loan relocation offer |
        And the user accesses to loan relocation offer
        When the user selects "help commission" button
        Then the user sees the following items in the screen
            | item                         |
            | commission header            |
            | commission close button      |

    @OCLR004
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with LIFE INSURANCE - Offer details
        Given a user with the following criteria
            | criteria       |
            | life insurance |
        When the user accesses to loan relocation offer
        Then the user sees the following items in the screen
            | item                |
            | input               |
            | simulation text     |
            | benefits text       |
            | life insurance text |
            | life insurance icon |

    @OCLR005
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with LIFE AND UNEMPLOYMENT INSURANCE - Help button "?" - "Life and unemployment insurance"
        Given a user with the following criteria
            | criteria             |
            | life and work insure |
        And the user accesses to loan relocation offer
        When the user selects "work insurace" button
        Then the user sees the following items in the screen
            | item                            |
            | life insurace rules             |

    @OCLR006
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with LIFE INSURANCE - Help button "?" "Interest rates"
        Given a user with the following criteria
            | criteria       |
            | life insurance |
        And the user accesses to loan relocation offer
        When the user selects "interest rate" button
        Then the user sees the following items in the screen
            | item                 |
            | interest rate header |

    @OCLR007
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario Outline: Relocation offer with LIFE INSURANCE - <scenario>
        Given a user with the following criteria
            | criteria       |
            | life insurance |
        And the user accesses to loan relocation offer
        When the user selects "<data>" button
        Then the user sees the following items in the screen
            | item                |
            | simulation text     |
            | benefits text       |
            | life insurance text |
            | life insurance icon |
        Examples:
            | data                     | scenario                              |
            | change amount to request | change amount from the Summary screen |

    @OCLR008
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with LIFE INSURANCE - "Terms and conditions" section
        Given a user with the following criteria
            | criteria       |
            | life insurance |
        And the user accesses to loan relocation offer
        When the user selects "i want" button
        Then the user sees the following items in the screen
            | item                                | value    |
            | check credit bureau insurance       |          |
            | check liquidate insurance           |          |
            | check terms and conditions insurance|          |
            | check insurance                     |          |
            | continue button                     | disabled |

    @OCLR009
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario Outline: Relocation offer with LIFE INSURANCE - <scenario>
        Given a user with the following criteria
            | criteria       |
            | life insurance |
        And the user accesses to loan relocation offer
        When the user selects "<data>" button
        Then the user sees the following items in the screen
            | item                | value  | visibility   |
            | credit bureau       |        | <visibility> |
            | relocation header   |        | <visibility> |
            | continue button     | enable | <visibility> |
        Examples:
            | data                                   | scenario                            | visibility  |
            | change amount to request               | consult T&C from the Summary screen | not visible |
            | check termins and conditions insurance | Enable checkbox                     | visible     |

    @OCLR010
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with LIFE INSURANCE - Summary Screen
        Given a user with the following criteria
            | criteria       |
            | life insurance |
        And the user accesses to loan relocation offer
        When the user selects "summary screen" button
        Then the user sees the following items in the screen
            | item                             |
            | summary screen relocation        |
            | summary screen relocation change |
            | summary screen terms             |
            | summary screen terms change      |
            | close button                     |

    @OCLR011
    @web @ios @android @spherica
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with LIFE INSURANCE - Security Screen
        Given a user with the following criteria
            | criteria       |
            | life insurance |
        And the user accesses to loan relocation offer
        When the user to access to security screen
        Then the user sees the following items in the screen
            | item                   |
            | otp page header        |
            | otp page exit button   |
            | otp page icon          |
            | otp page input         |
            | otp page accept button |

    @OCLR012
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with LIFE INSURANCE - section "Terms and conditions" link "Authorization of history consultation"
        Given a user with the following criteria
            | criteria       |
            | life insurance |
        And the user accesses to loan relocation offer
        When the user selects "credit bureau authorization" button
        Then the user sees the following items in the screen
            | item                 |
            | credit bureau header |
            | credit bureau text   |

    @OCLR013
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with LIFE INSURANCE - change amount from the Summary screen and continue
        Given a user with the following criteria
            | criteria       |
            | life insurance |
        And the user accesses to loan relocation offer
        And the user selects "change amount to request" button
        When the user selects "i want" button
        Then the user sees the following items in the screen
            | item                                | value    |
            | check credit bureau insurance       |          |
            | check liquidate insurance           |          |
            | check terms and conditions insurance|          |
            | check insurance                     |          |
            | continue button                     | disabled |

    @OCLR014
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with LIFE INSURANCE - Modal exit the process
        Given a user with the following criteria
            | criteria       |
            | life insurance |
        And the user accesses to loan relocation offer
        When the user selects "exit modal" button
        Then the user sees the following items in the screen
            | item                     |
            | exit modal text          |
            | exit modal cancel button |
            | exit modal exit button   |

    @OCLR015
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with LIFE INSURANCE - Exit the process
        Given a user with the following criteria
            | criteria       |
            | life insurance |
        And the user accesses to loan relocation offer
        When the user selects "cancel process" button
        Then the user sees the "contract product section" screen

    @OCLR016
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario Outline: Relocation offer with LIFE INSURANCE - <scenario>
        Given a user with the following criteria
            | criteria       |
            | life insurance |
        And the user accesses to loan relocation offer
        When the user requests the "<data>"
        Then the user sees the following items in the screen
            | item        |
            | amount less |
        Examples:
            | data            | scenario                                                            |
            | amount exceeded | Error message in the amount with an amount greater than the maximum |
            | minimum amount  | Error message in the amount with an amount less than the minimum    |

    @OCLR017
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with LIFE INSURANCE - Edit quantity
        Given a user with the following criteria
            | criteria       |
            | life insurance |
        And the user accesses to loan relocation offer
        When the user requests the "new amount"
        Then the user sees the following items in the screen
            | item       |
            | new amount |

    @OCLR018
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with COMMISSION - "Terms and conditions" screen
        Given a user with the following criteria
            | criteria                        |
            | loan relocation with commission |
        And the user accesses to loan relocation offer
        When the user selects "i want" button
        Then the user sees the following items in the screen
            | item                       | value    |
            | close button               |          |
            | credit bureau              |          |
            | relocation header          |          |
            | check terms and conditions |          |
            | check liquidate            |          |
            | check credit bureau        |          |
            | continue button            | disabled |

    @OCLR019
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with COMMISSION - "Summary" screen
        Given a user with the following criteria
            | criteria                        |
            | loan relocation with commission |
        And the user accesses to loan relocation offer
        When the user selects "summary screen commission" button
        Then the user sees the following items in the screen
            | item                             |
            | summary screen relocation        |
            | summary screen relocation change |
            | summary screen terms             |
            | summary screen terms change      |
            | close button                     |

    @OCLR020
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with NO LIFE INSURANCE - "Offer details"
        Given a user with the following criteria
            | criteria               |
            | without life insurance |
        And the user accesses to loan relocation offer
        When the user selects "i want" button
        Then the user sees the following items in the screen
            | item                | value    |
            | close button        |          |
            | credit bureau       |          |
            | relocation header   |          |
            | continue button     | disabled |

    @OCLR021
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with COMMISSION - Screen "Terms and conditions" checkbox enabled
        Given a user with the following criteria
            | criteria                        |
            | loan relocation with commission |
        And the user accesses to loan relocation offer
        When the user selects "check termins and conditions" button
        Then the user sees the following items in the screen
            | item                | value  |
            | close button        |        |
            | credit bureau       |        |
            | relocation header   |        |
            | continue button     | enable |

    @OCLR022
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Relocation offer with LIFE INSURANCE - "Got it" button "Life Insurance"
        Given a user with the following criteria
            | criteria       |
            | life insurance |
        And the user accesses to loan relocation offer
        When the user selects "life insurace close" button
        Then the user sees the following items in the screen
            | item                |
            | simulation text     |
            | benefits text       |
            | life insurance text |
            | life insurance icon |
