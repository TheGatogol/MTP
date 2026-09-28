@loansPaymentPledge
Feature: Payment Pledge Loan

    @LPP001
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Validate entering into credit payment with restructuring offer
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        When the user navigate to loan payment
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | loan detail    |
            | mortage number |
            | pendign debt   |

    @LPP002
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    @smokeTest
    Scenario Outline: Schedule commitment date with payment option <option>
        Given a user with the following criteria
            | criteria                     |
            | loan payment pledge <option> |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the user fill payment pledge form with "<option>" option
        When the user confirm payment pledge resume
        Then the user sees the following items in the screen
            | item                               |
            | success header title               |
            | success header close button        |
            | success payment pledge title       |
            | success payment pledge amount text |
            | success detail title               |
            | success payment pledge message     |

        Examples:
            | option         |
            | receipt amount |
            | pay off        |

    @LPP003
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Schedule commitment date with payment option Other amount
        Given a user with the following criteria
            | criteria                    |
            | loan payment pledge pay off |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        When the user fill promise form with other amount and confirm
        Then the user sees the following items in the screen
            | item                               |
            | success header title               |
            | success header close button        |
            | success payment pledge title       |
            | success payment pledge amount text |
            | success detail title               |
            | success payment pledge message     |

    @LPP004
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Schedule engagement date - Edit Other amount
        Given a user with the following criteria
            | criteria                    |
            | loan payment pledge pay off |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        When the user fill promise form with other amount modify and confirm
        Then the user sees the following items in the screen
            | item                               |
            | success header title               |
            | success header close button        |
            | success payment pledge title       |
            | success payment pledge amount text |
            | success detail title               |
            | success payment pledge message     |

    @LPP005
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Schedule a commitment date with only one date available
        Given a user with the following criteria
            | criteria                     |
            | loan payment pledge no offer |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the user select payment pledge option
        When the user fill promise form with single date and confirm
        Then the user sees the following items in the screen
            | item                               |
            | success header title               |
            | success header close button        |
            | success payment pledge title       |
            | success payment pledge amount text |
            | success detail title               |
            | success payment pledge message     |

    @LPP006
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Modify Payment Commitment from the summary
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        When the user fill promise form with receipt amount and modify date
        Then the user sees the following items in the screen
            | item                           |
            | multistep header title         |
            | multistep header close button  |
            | loan detail title              |
            | payment step summary title     |
            | payment step summary edit link |
            | amount step summary title      |
            | confirm promise panel label    |
            | confirm promise panel button   |

    @LPP007
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Modify Payment Type from the Summary - Settlement
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the user select loan payment pledge option and select date
        When the user change to pay off and create payment pledge
        Then the user sees the following items in the screen
            | item                               |
            | success header title               |
            | success header close button        |
            | success payment pledge title       |
            | success payment pledge amount text |
            | success detail title               |
            | success payment pledge message     |

    @LPP008
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Modify Payment Type from Summary - Receipt Amount
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the user select loan payment pledge option and select date
        When the user change to monthly and create payment pledge
        Then the user sees the following items in the screen
            | item                           |
            | multistep header title         |
            | multistep header close button  |
            | loan detail title              |
            | payment step summary title     |
            | payment step summary edit link |
            | amount step summary title      |
            | confirm promise panel label    |
            | confirm promise panel button   |

    @LPP009
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Modify Payment Type from Summary - Other Amount
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the user select loan payment pledge option and select date
        When the user change to other amount and create payment pledge
        Then the user sees the following items in the screen
            | item                           |
            | multistep header title         |
            | multistep header close button  |
            | loan detail title              |
            | payment step summary title     |
            | payment step summary edit link |
            | amount step summary title      |
            | confirm promise panel label    |
            | confirm promise panel button   |

    @LPP010
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Validate entering the Payment Plan
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        When the user open offer option
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | microillustration |
            | description       |
            | understand button |

    @LPP011
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Validate entering the Reduction Plan
        Given a user with the following criteria
            | criteria                    |
            | loan payment pledge pay off |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        When the user open offer option
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | microillustration |
            | description       |
            | understand button |

    @LPP012
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Validate exit process
        Given a user with the following criteria
            | criteria                    |
            | loan payment pledge pay off |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the user fill payment pledge form with "receipt amount" option
        When the user confirm close multistep modal
        Then the user sees the following items in the screen
            | item                  |
            | header title          |
            | header close button   |
            | loan termination      |
            | current receipt       |
            | pay now button        |
            | payment pledge button |
            | offer panel title     |
            | offer panel link      |

    @LPP013
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Validate continue in the process
        Given a user with the following criteria
            | criteria                    |
            | loan payment pledge pay off |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the user fill payment pledge form with "receipt amount" option
        When the user tap close button but continue
        Then the user sees the following items in the screen
            | item                           |
            | multistep header title         |
            | multistep header close button  |
            | loan detail title              |
            | payment step summary title     |
            | payment step summary edit link |
            | amount step summary title      |
            | confirm promise panel label    |
            | confirm promise panel button   |

    @LPP014
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Validate exiting the process from the Pay credit screen
        Given a user with the following criteria
            | criteria                    |
            | loan payment pledge pay off |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the user select payment pledge option
        When the user close multistep modal
        Then the user sees the following items in the screen
            | item                  |
            | header title          |
            | header close button   |
            | loan termination      |
            | pay now button        |
            | payment pledge button |
            | offer panel title     |
            | offer panel link      |

    @LPP015
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario Outline: Validate error message when the amount <amount>
        Given a user with the following criteria
            | criteria                   |
            | loan payment pledge <user> |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        When the user fill amount step with "<amount>" other amount case
        Then the user sees the following items in the screen
            | item                          |
            | multistep header title        |
            | multistep header close button |
            | amount step other amount      |
            | other amount description      |
            | other amount input text       |
            | other amount info             |
            | <selector>                    |

        Examples:
            | amount            | selector           | user           |
            | more than total   | other amount alert | receipt amount |
            | less than one     | other amount alert | pay off        |
            | amount and delete | other amount alert | receipt amount |

    @LPP016
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Validate entering into credit payment with a restructuring offer and without the option to choose a payment commitment date
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        When the user goes to "screen loans payment pledge" using deeplink navigation
        Then the user sees the following items in the screen
            | item                 |
            | header title         |
            | header close button  |
            | notification message |
            | loan termination     |
            | current receipt      |
            | pay now button       |
            | offer panel title    |
            | offer panel link     |

    @LPP017
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario:  Validate entering credit payment without the option to choose a payment commitment date
        Given a user with the following criteria
            | criteria                    |
            | loan payment pledge pay off |
        And the user accesses to dashboard
        When the user goes to "screen loans payment pledge" using deeplink navigation
        Then the user sees the following items in the screen
            | item                 |
            | header title         |
            | header close button  |
            | notification message |
            | loan termination     |
            | current receipt      |
            | pay now button       |

    @LPP018
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Validate entering into credit payment without restructuring offer
        Given a user with the following criteria
            | criteria                     |
            | loan payment pledge no offer |
        And the user accesses to dashboard
        When the user goes to "screen loans payment pledge" using deeplink navigation
        Then the user sees the following items in the screen
            | item                  |
            | header title          |
            | header close button   |
            | notification message  |
            | loan termination      |
            | current receipt       |
            | pay now button        |
            | payment pledge button |

    @LPP019
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Schedule a commitment date with zero late payment
        Given a user with the following criteria
            | criteria                     |
            | loan payment pledge no offer |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        When the user fill promise data with last date and confirm
        Then the user sees the following items in the screen
            | item                               |
            | success header title               |
            | success header close button        |
            | success payment pledge title       |
            | success payment pledge amount text |
            | success detail title               |
            | success payment pledge message     |

    @LPP020
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Validate error when entering the Pay credit screen
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        When the user select loan payment option
        Then the user sees the following items in the screen
            | item                                       |
            | navigation error modal button              |
            | navigation error modal titles              |
            | navigation error modal description         |
            | navigation error modal header title        |
            | navigation error modal header close button |

    @LPP021
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Validate error when retrying to enter the Pay Credit screen
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        When the user select loan payment option and retry
        Then the user sees the following items in the screen
            | item                                       |
            | navigation error modal button              |
            | navigation error modal titles              |
            | navigation error modal description         |
            | navigation error modal header title        |
            | navigation error modal header close button |

    @LPP022
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Error while completing the payment date scheduling process
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the user select payment pledge option
        When the user fill promise data and confirm
        Then the user sees the following items in the screen
            | item                                    |
            | pledge creation error modal icon        |
            | pledge creation error modal title       |
            | pledge creation error modal description |
            | pledge creation error modal button      |

    @LPP023
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Validate error when retrying to schedule a commitment date
        Given a user with the following criteria
            | criteria                           |
            | loan payment pledge receipt amount |
        And the user accesses to dashboard
        And the user goes to "screen loans payment pledge" using deeplink navigation
        And the user select payment pledge option
        When the user fill promise data confirm and retry
        Then the user sees the following items in the screen
            | item                                    |
            | pledge creation error modal button      |
            | pledge creation error modal title       |
            | pledge creation error modal description |
            | pledge creation error modal icon        |
