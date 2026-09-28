@frequentServicesPayments
Feature: Frequent Services Payments

    @OPR001
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario Outline: The user has a pending frequent operation of <service_payment>
        Given a user with the following criteria
            | criteria                     |
            | frequent operations services |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                       | value             |
            | frequent operation message | <service_payment> |
        Examples:
            | service_payment                          |
            | service payment high certainty biweekly  |
            | service payment high certainty monthly   |
            | service payment high certainty bimonthly |
            | service payment high certainty quarterly |
            | service payment low certainty biweekly   |
            | service payment low certainty monthly    |
            | service payment low certainty bimonthly  |
            | service payment low certainty quarterly  |
            | service payment arcus biweekly           |
            | service payment arcus monthly            |
            | service payment arcus bimonthly          |
            | service payment arcus quarterly          |

    @OPR002
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @smokeTest
    Scenario Outline: Validate frequent service payment <type>
        Given a user with the following criteria
            | criteria                     |
            | frequent operations services |
        And the user accesses to dashboard
        When the user finish a bill payment "suggested service"
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | successfull receipt |
            | title               |
            | date                |
            | amount              |
            | name                |
            | id                  |
            | operation           |
            | origin              |
            | masked number       |
            | cie                 |
            | operation number    |
            | share               |
            | save                |
        Examples:
            | type           |
            | HIGH certainty |
            | ARCUS          |

    @OPR003
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Service payment notification without recommended amount
        Given a user with the following criteria
            | criteria                     |
            | frequent operations services |
        And the user accesses to dashboard
        When the user goes to bill payments page
        Then the user sees the following items in the screen
            | item                     | value    |
            | header                   |          |
            | amount                   |          |
            | continue button disabled | disabled |

    @OPR004
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Service payment notification with more than one service
        Given a user with the following criteria
            | criteria                     |
            | frequent operations services |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                              | value                      |
            | header                            |                            |
            | multiple frequent services button |                            |
            | frequent operation message        | multiple frequent services |

    @OPR005
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Validate that the amount can be edited
        Given a user with the following criteria
            | criteria                     |
            | frequent operations services |
        And the user accesses to dashboard
        And the user select the card to enter to a frequent service
        When the user changes the "amount" step of bill payments
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | amount label         |
            | concept label        |
            | confirm button       |
            | origin account label |
            | service label        |

    @OPR006
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Exit service payment
        Given a user with the following criteria
            | criteria                     |
            | frequent operations services |
        And the user accesses to dashboard
        And the user select the card to enter to a frequent service
        When the user opens the modal to exit the flow
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | summary        |
            | amount label   |
            | concept label  |
            | confirm button |
            | exit dashboard |

    @OPR007
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Continue in the service payment
        Given a user with the following criteria
            | criteria                     |
            | frequent operations services |
        And the user accesses to dashboard
        And the user select the card to enter to a frequent service
        When the user opens the modal to exit the flow
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | summary              |
            | amount label         |
            | concept label        |
            | confirm button       |
            | continue in the flow |

    @OPR008
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Edit from the operation summary
        Given a user with the following criteria
            | criteria                     |
            | frequent operations services |
        And the user accesses to dashboard
        And the user select the card to enter to a frequent service
        When the user changes the "amount" step of bill payments
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | amount label         |
            | concept label        |
            | confirm button       |
            | origin account label |
            | service label        |

    @OPR009
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Validate when the service fails to enter the notification
        Given a user with the following criteria
            | criteria                     |
            | frequent operations services |
        And the user accesses to dashboard
        When the user goes to bill payments page
        Then the user sees the following items in the screen
            | item         |
            | retry button |

    @OPR010
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Validate error when editing the amount and the account has insufficient funds
        Given a user with the following criteria
            | criteria                     |
            | frequent operations services |
        And the user accesses to dashboard
        And the user select the card to enter to a frequent service
        When the user edits the amount with an amount exceeding the limit
        Then the user sees the following items in the screen
            | item                   | value    |
            | continue button amount | disabled |

    @OPR011
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario Outline: Validate error when the service fails to upgrade with a service payment <type>
        Given a user with the following criteria
            | criteria                     |
            | frequent operations services |
        And the user accesses to dashboard
        And the user attempts finish a bill payment suggested service
        When the user retries "3" times
        Then the user sees the following items in the screen
            | item                  |
            | call bbva line button |
            | exit modal button     |
        Examples:
            | type           |
            | HIGH certainty |
            | ARCUS          |

    @OPR012
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: Validate error when trying to pay after hours
        Given a user with the following criteria
            | criteria                     |
            | frequent operations services |
        And the user accesses to dashboard
        When the user goes to bill payments page
        Then the user sees the following items in the screen
            | item         |
            | retry button |
