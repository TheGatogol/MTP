@cardCreditCardPaymentPromise
Feature: Credit Card Payment Promise

    @CCPP002
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: The user select the payment promise option from menu
        Given a user with the following criteria
            | criteria                    |
            | credit card payment promise |
        And the user accesses to dashboard
        And the user goes to "screen credit card payment promise" using deeplink navigation
        When the user select payment promise option
        Then the user sees the following items in the screen
            | item                                 |
            | promise multistep                    |
            | card info step                       |
            | card info step title                 |
            | card front cover                     |
            | card name                            |
            | card number                          |
            | card debt amount                     |
            | card debt title                      |
            | card balance title                   |
            | card balance amount                  |
            | payment limit title                  |
            | payment limit date                   |
            | date step                            |
            | date step title                      |
            | date step label                      |
            | date step description                |
            | date step input                      |
            | date step continue button disabled   |

    @CCPP003
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: The user open the promise calendar
        Given a user with the following criteria
            | criteria                    |
            | credit card payment promise |
        And the user accesses to dashboard
        And the user goes to "screen credit card payment promise" using deeplink navigation
        And the user select payment promise option
        When the user open the promise calendar to select date
        Then the user sees the following items in the screen
            | item                          |
            | select date modal             |
            | calendar                      |
            | available date                |
            | calendar button               |

    @CCPP004
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: The user select a date an close calendar
        Given a user with the following criteria
            | criteria                    |
            | credit card payment promise |
        And the user accesses to dashboard
        And the user goes to "screen credit card payment promise" using deeplink navigation
        When the user open payment promise form and select a payment date
        Then the user sees the following items in the screen
            | item                                |
            | date step input filled              |
            | date step continue button enabled   |

    @CCPP005
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: The user continue to amount step
        Given a user with the following criteria
            | criteria                    |
            | credit card payment promise |
        And the user accesses to dashboard
        And the user goes to "screen credit card payment promise" using deeplink navigation
        When the user open payment promise form and confirm a payment date
        Then the user sees the following items in the screen
            | item                         |
            | date step summary            |
            | minimum amount radio         |
            | no interest amount radio     |
            | other amount radio           |
            | total amount radio           |

    @CCPP006
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: The user select a payment promise amount and continue to method step
        Given a user with the following criteria
            | criteria                           |
            | credit card payment promise client |
        And the user accesses to dashboard
        And the user goes to "screen credit card payment promise" using deeplink navigation
        When the user open payment promise form to fill date and amount steps
        Then the user sees the following items in the screen
            | item                 |
            | amount summary       |
            | individual radio     |
            | atm radio            |
            | correspondent radio  |

    @CCPP007
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: The user select a payment promise method
        Given a user with the following criteria
            | criteria                           |
            | credit card payment promise client |
        And the user accesses to dashboard
        And the user goes to "screen credit card payment promise" using deeplink navigation
        When the open and fill payment promise form
        Then the user sees the following items in the screen
            | item                   |
            | method summary         |
            | confirm promise panel  |

    @CCPP008
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @smokeTest
    @web-done
    Scenario: The user fill the payment promise form generate promise
        Given a user with the following criteria
            | criteria                    |
            | credit card payment promise |
        And the user accesses to dashboard
        And the user goes to "screen credit card payment promise" using deeplink navigation
        And the open and fill payment promise form
        When the user generate a promise
        Then the user sees the following items in the screen
            | item                          |
            | success image                 |
            | success title                 |
            | success operation date        |
            | payment promise date          |
            | card to pay                   |
            | payment promise amount        |
            | payment promise method        |
            | success promise help message  |
            | success promise exit button   |

    @CCPP009
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: The user return to menu when has a promise date selected
        Given a user with the following criteria
            | criteria                           |
            | credit card payment promise client |
        And the user accesses to dashboard
        And the user goes to "screen credit card payment promise" using deeplink navigation
        And the user open payment promise form and confirm a payment date
        When the user exit payment promise form
        Then the user sees the following items in the screen
            | item                      |
            | exit modal                |
            | exit modal icon           |
            | exit modal description    |
            | exit modal primary button |
            | exit modal continue link  |

    @CCPP010
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: The user select payment promise opction but has a pending promise
        Given a user with the following criteria
            | criteria                    |
            | credit card payment promise |
        And the user accesses to dashboard
        And the user goes to "screen credit card payment promise" using deeplink navigation
        When the user select payment promise option
        Then the user sees the following items in the screen
            | item                                    |
            | pending promise modal header            |
            | pending promise modal image             |
            | pending promise modal title             |
            | pending promise modal description       |
            | pending promise modal button            |
