@depositPurchase
Feature: Deposit Purchase

    @DDP001
    @web
    @vbank
    @MX @backend(test)
    @android
    @ios
    @web-done
    @smokeTest
    Scenario: Deposit Purchase happy path
        Given a user with the following criteria
            | criteria          |
            | deposits purchase |
        And the user accesses to dashboard
        And the user accesses to purchase deposit "0003IN9302"
        And the user select simulate new continue
        And the user select renovation
        When the user confirms otp code
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | title       |
            | amount      |
            | button exit |

    @DDP002
    @MX
    @web
    @vbank
    @backend(test)
    @ios
    @android
    @web-done
    @backend-smoke
    Scenario: Deposit Purchase Simulator Help Gat
        Given a user with the following criteria
            | criteria          |
            | deposits purchase |
        And the user accesses to dashboard
        And the user accesses to purchase deposit "Inversión"
        When the user accesses to screen help gat
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | icon header   |
            | accept button |

    @DDP003
    @web
    @vbank
    @MX @backend(test)
    @android
    @ios
    @web-done
    @backend-smoke
    Scenario: Deposit Purchase Radio Buttons Help instructions
        Given a user with the following criteria
            | criteria          |
            | deposits purchase |
        And the user accesses to dashboard
        And the user accesses to purchase deposit "Inversión"
        And the user select simulate new continue
        When the user accesses to screen help instruction
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | icon header   |
            | accept button |

    @DDP004
    @web
    @vbank
    @MX @backend(test)
    @android
    @ios
    @web-done
    @no-spherica
    Scenario: Deposit Purchase with coupon happy path
        Given a user with the following criteria
            | criteria                 |
            | deposits purchase coupon |
        And the user accesses to purchase deposit "0003IN9302"
        And the user select simulate new continue
        And the user select renovation
        When the user confirms otp code
        Then the user sees the following items in the screen
            | item        |
            | coupon      |

    @DDP005
    @web
    @vbank
    @MX @backend(test)
    @android
    @ios
    @web-done
    @no-spherica
    Scenario: Deposit Purchase with copupon happy path store and forward
        Given a user with the following criteria
            | criteria                 |
            | deposits purchase coupon |
        And the user accesses to purchase deposit "0003IN9302"
        And the user select simulate new continue
        And the user select renovation
        When the user confirms otp code
        Then the user sees the following items in the screen
            | item          |
            | coupon        |
            | store forward |

    @DDP006
    @web
    @vbank
    @MX @backend(test)
    @android
    @ios
    @web-done
    Scenario: Deposit Purchase happy path store and forward
        Given a user with the following criteria
            | criteria          |
            | deposits purchase |
        And the user accesses to purchase deposit "0003IN9302"
        And the user select simulate new continue
        And the user select renovation
        When the user confirms otp code
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | title         |
            | amount        |
            | button exit   |

    @DDP007
    @web
    @vbank
    @MX @backend(test)
    @android
    @ios
    @manual @JIRA.GLOMOMX-180163
    Scenario: Deposit Purchase Promotion Coupon
        Given a user with the following criteria
            | criteria          |
            | deposits purchase |
        When the user accesses to purchase deposit "0326"
        Then the user sees the following items in the screen
            | item          |
            | coupon header |
            | coupon detail |

    @DDP008
    @web
    @vbank
    @MX @backend(test)
    @android
    @manual @JIRA.GLOMOMX-180163
    Scenario: Deposit Purchase coupon info modal
        Given a user with the following criteria
            | criteria          |
            | deposits purchase |
        When the user accesses to purchase deposit "9820"
        And the user accesses to screen coupon info modal
        Then the user sees the following items in the screen
            | item                               |
            | header modal coupon                |
            | image modal coupon                 |
            | template modal coupon              |
            | text promotion modal coupon        |
            | description promotion modal coupon |

    @DDP009
    @web
    @vbank
    @MX @backend(test)
    @android
    @ios
    @manual @JIRA.GLOMOMX-180163
    Scenario: Deposit Purchase Promotion Coupon 2
        Given a user with the following criteria
            | criteria          |
            | deposits purchase |
        And the user accesses to purchase deposit "0326"
        When the user changes days and amount in slider to show comparative table
        Then the user sees the following items in the screen
            | item              |
            | panel comparative |

    @DDP010
    @web
    @vbank
    @MX @backend(test)
    @android
    @ios
    @manual @JIRA.GLOMOMX-180163
    Scenario: Deposit Purchase Promotion Coupon 3
        Given a user with the following criteria
            | criteria          |
            | deposits purchase |
        And the user accesses to purchase deposit "0326"
        When the user changes days and amount in slider
        Then the user sees the following items in the screen
            | item              |
            | panel comparative |

    @DDP012
    @web
    @vbank
    @MX @backend(test)
    @android
    @ios
    @web-done
    Scenario: Deposit Purchase expiration instruction help button
        Given a user with the following criteria
            | criteria                 |
            | deposits purchase coupon |
        And the user accesses to purchase deposit "0003IN9302"
        And the user select simulate new continue
        When the user accesses to the help modals
        Then the user sees the following items in the screen
            | item            |
            | title header    |
            | continue button |
            | info investment |
