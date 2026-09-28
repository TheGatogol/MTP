@NotificationDetail
Feature: Notification Detail

    @NDE001
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    @backend-smoke @smokeTest
    Scenario Outline: Access <type> error from notification center.
        Given a user with the following criteria
            | criteria                    |
            | payment error notifications |
        When the user accesses "<type>" detail notification
        Then the user sees the following items in the screen
            | item                       |
            | notification header        |
            | close notification         |
            | notification title         |
            | notification actions       |
            | notification description   |
            | notification type          |
            | notification category      |
            | notification date          |
        Examples:
            | type                       |
            | ccv payments error         |
            | date payment error         |
            | report payment error       |
            | cancel payment error       |

    @NDE002
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    @backend-smoke
    Scenario: Show payroll credit notification.
        Given a user with the following criteria
            | criteria          |
            | notifications     |
            | payroll credit    |
        When the user accesses center notification
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | search button               |
            | configuration button        |
            | payroll credit notification |

    @NDE003
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    @backend-smoke
    Scenario Outline: Access <notification_type> notification.
        Given a user with the following criteria
            | criteria            |
            | notifications       |
            | <notification_type> |
        And the user accesses "<notification_type>" detail notification
        When the user accesses to continue process operative
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | detail offer step   |
            | benefits            |
            | amount input        |
            | continue button     |
        Examples:
            | notification_type   |
            | payroll credit      |
            | personal loan       |

    @NDE004
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    @backend-smoke
    Scenario: Show credit card loan notification.
        Given a user with the following criteria
            | criteria      |
            | notifications |
            | credit card   |
        When the user accesses center notification
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | search button                 |
            | configuration button          |
            | credit card loan notification |

    @NDE005
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    @backend-smoke
    Scenario: Access NPA offer for TDC from the notification detail.
        Given a user with the following criteria
            | criteria            |
            | notifications       |
            | credit card         |
        And the user accesses "credit card offer" detail notification
        When the user navigates to the "credit card holder old" section
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | detail offer step |
