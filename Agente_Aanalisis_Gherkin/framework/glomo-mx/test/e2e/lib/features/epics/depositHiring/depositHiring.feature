@depositHiring
Feature: Deposit Hiring

    @DDH001
    @web @ios @android @no-data-manager
    @MX @backend(test) @vbank
    @manual @JIRA.GLOMOMX-133404
    Scenario: Deposit Hiring happy path
        Given the user "5531025051" and "Glomo2022"
        And the user goes to the contract payment offer operation
        When the user goes to the deposit hiring operation
        And the user completes the contracting process
        And the user confirms otp deposit code
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | title       |
            | amount      |
            | button exit |

    @DDH002
    @web
    @MX
    @android @ios
    @no-data-manager
    @vbank @backend(test) @manual @JIRA.GLOMOMX-133404
    Scenario: Deposit Hiring error otp
        Given the user "5531025051" and "Glomo2022"
        And the user goes to the contract payment offer operation
        When the user goes to the deposit hiring operation
        And the user completes the contracting process
        And the user confirms otp deposit code error
        Then the user sees a modal with the following elements:
            | item         |
            | title        |
            | icon help    |
            | information  |

    @DDH003
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @smokeTest
    @web-done
    Scenario: Deposit Hiring with coupon happy path store and forward
        Given a user with the following criteria
            | criteria       |
            | dh with coupon |
        And the user goes to the contract payment offer operation
        When the user goes to the deposit hiring operation
        And the user completes the contracting process
        And the user confirms otp deposit code
        Then the user sees the following items in the screen
            | item         |
            | balance icon |
            | balance text |

    @DDH004
    @web
    @vbank
    @MX @backend(test)
    @android
    @ios
    @manual @JIRA.GLOMOMX-133404
    Scenario: Deposit Hiring happy path store and forward
        Given a user with the following criteria
            | criteria          |
            | dh without coupon |
        And the user goes to the contract payment offer operation
        When the user goes to the deposit hiring operation
        And the user completes the contracting process
        And the user confirms otp deposit code
        Then the user sees the following items in the screen
            | item         |
            | balance icon |
            | balance text |

    @DDH005
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: Deposit Hiring with coupon happy path
        Given a user with the following criteria
            | criteria       |
            | dh with coupon |
        And the user goes to the contract payment offer operation
        When the user goes to the deposit hiring operation
        And the user completes the contracting process
        And the user confirms otp deposit code
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | title       |
            | amount      |
            | button exit |

    @DDH007
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: Deposit Hiring has a different currency
        Given a user with the following criteria
            | criteria         |
            | dh diff currency |
        When the user goes to the contract page
        Then the user sees a modal with the following elements:
            | item           |
            | close button   |
            | modal header   |
            | container icon |
            | titles         |
            | information    |
            | accept button  |

    @DDH008
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    @backend-smoke
    Scenario: Deposit Hiring Simulator Help Gat
        Given a user with the following criteria
            | criteria        |
            | dh with coupon  |
        And the user goes to the contract payment offer operation
        When the user goes to the deposit hiring operation
        And the user accesses to screen help modal gat
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | nominal gat |
            | real gat    |

    @DDH009
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: Deposit Hiring Radio Buttons Help instructions
        Given a user with the following criteria
            | criteria        |
            | dh with coupon  |
        And the user goes to the contract payment offer operation
        When the user goes to the deposit hiring operation
        And the user continues to instructions
        And the user completes the instructions
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | continue button |
            | info investment |

    @DDH010
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: Deposit Hiring expiration instruction help button
        Given a user with the following criteria
            | criteria       |
            | dh with coupon |
        And the user goes to the contract payment offer operation
        When the user goes to the deposit hiring operation
        And the user continues to instructions
        And the user accesses to modals on instructions
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | continue button |
            | info investment |

    @DDH011
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: Deposit Hiring validation of out of hours notification
        Given a user with the following criteria
            | criteria       |
            | dh with coupon |
        And the user goes to the contract payment offer operation
        When the user goes to the deposit hiring operation
        And the user completes the contracting process without otp
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | out of time text |

    @DDH012
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: Deposit Hiring with Promotion Coupon
        Given a user with the following criteria
            | criteria       |
            | dh with coupon |
        And the user goes to the contract payment offer operation
        When the user goes to the deposit hiring operation
        And the user goes to coupon on first step
        Then the user sees the following items in the screen
            | item               |
            | coupon image       |
            | coupon title       |
            | coupon description |
            | coupon info        |

    @DDH013
    @web
    @vbank
    @MX @backend(test)
    @android
    @ios
    @manual @JIRA.GLOMOMX-133404
    Scenario: Deposit Hiring without Promotion Coupon
        Given a user with the following criteria
            | criteria          |
            | dh without coupon |
        And the user goes to the contract payment offer operation
        When the user goes to the deposit hiring operation
        And the user dont have a coupon on first step
        Then the user sees the following items in the screen
            | item   |
            | header |

    @DDH014
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    Scenario: Deposit Hiring coupon info modal
        Given a user with the following criteria
            | criteria       |
            | dh with coupon |
        And the user goes to the contract payment offer operation
        When the user goes to the deposit hiring operation
        And the user accesses to screen coupon modal
        Then the user sees a modal with the following elements:
            | item           |
            | close button   |
            | modal header   |
            | container icon |
            | descriptions   |
            | titles         |
            | bullets list   |
            | accept button  |
