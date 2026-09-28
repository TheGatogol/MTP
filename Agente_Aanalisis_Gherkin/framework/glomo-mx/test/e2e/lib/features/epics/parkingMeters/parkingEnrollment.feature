@parkingEnrollment
Feature: Parking Enrollment

    @PM002
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @backend-smoke
    Scenario: Parking Enrollment - Registration process
        Given a user with the following criteria
            | criteria          |
            | multiple accounts |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to register a parking meter account
        When the user continues to the "account linking" step of the parking enrollment
        Then the user sees the following items in the screen
            | item                       | value    |
            | second step title          |          |
            | link account step          | enabled  |
            | accept link account button | disabled |
            | terms step                 | disabled |

    @PM003
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @backend-smoke
    Scenario: Parking Enrollment - Terms and conditions
        Given a user with the following criteria
            | criteria          |
            | multiple accounts |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to register a parking meter account
        When the user continues to the "terms" step of the parking enrollment
        Then the user sees the following items in the screen
            | item                  | value    |
            | terms step            | enabled  |
            | third step title      |          |
            | accept check          |          |
            | pdf link              |          |
            | terms continue button | disabled |

    @PM004
    @MX @web @android @ios
    @backend(test) @vbank @web-done @smokeTest
    Scenario: Parking Enrollment - Register a parking meter account - Happy path
        Given a user with the following criteria
            | criteria          |
            | multiple accounts |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to register a parking meter account
        And the user continues to the "summary" step of the parking enrollment
        When the user completes the parking "enrollment"
        Then the user sees the following items in the screen
            | item             |
            | success image    |
            | success title    |
            | date operation   |
            | supplier         |
            | agreement        |
            | number reference |
            | account alias    |
            | type operation   |
            | recharge button  |
            | exit button      |

    @PM005
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    Scenario: Parking Enrollment - Go to recharge after registration
        Given a user with the following criteria
            | criteria          |
            | multiple accounts |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to register a parking meter account
        And the user continues to the "summary" step of the parking enrollment
        And the user completes the parking "enrollment"
        When the user goes to recharge his parking meter account
        Then the user sees the following items in the screen
            | item                        | value    |
            | parking account image       |          |
            | parking account information |          |
            | continue payment button     | disabled |
            | recharge amount step        | enabled  |
            | method payment step         | disabled |

    @PM006
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    Scenario: Parking Enrollment - Account already registered
        Given a user with the following criteria
            | criteria          |
            | multiple accounts |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to register a parking meter account
        And the user continues to the "summary" step of the parking enrollment
        When the user completes the parking "enrollment"
        Then the user sees the following items in the screen
            | item                            |
            | modal duplicate account warning |
            | change number button            |

    @PM007
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @backend-smoke
    Scenario: Parking Enrollment - Parking meter supplier information
        Given a user with the following criteria
            | criteria          |
            | multiple accounts |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to register a parking meter account
        When the user consults more information about parking "supplier"
        Then the user sees the following items in the screen
            | item                    |
            | informative image       |
            | informative description |
            | partner link            |
            | exit button             |

    @PM008
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    Scenario: Parking Enrollment - Error in the process of registering the parking account
        Given a user with the following criteria
            | criteria          |
            | multiple accounts |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to register a parking meter account
        And the user continues to the "summary" step of the parking enrollment
        When the user completes the parking "enrollment"
        Then the user sees the following items in the screen
            | item          |
            | icon image    |
            | error title   |
            | error text    |
            | retry button  |
            | cancel button |

    @PM009
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @backend-smoke
    Scenario: Parking Enrollment - Registration information after enrollment
        Given a user with the following criteria
            | criteria          |
            | multiple accounts |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to register a parking meter account
        And the user continues to the "summary" step of the parking enrollment
        When the user consults more information about parking "enrollment"
        Then the user sees the following items in the screen
            | item                     |
            | image onboarding         |
            | first step title         |
            | suppliers                |
            | contact suppliers        |
            | continue register button |

    @PM010
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @backend-smoke
    Scenario: Parking Enrollment - Change linking step after completing steps
        Given a user with the following criteria
            | criteria          |
            | multiple accounts |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to register a parking meter account
        And the user continues to the "summary" step of the parking enrollment
        When the user changes "account linking" step of enrollment
        Then the user sees the following items in the screen
            | item                       | value   |
            | second step title          |         |
            | number field               |         |
            | name field                 |         |
            | link account step          | enabled |
            | accept link account button | enabled |

    @PM011
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @backend-smoke
    Scenario: Parking Enrollment - Account not found with partner
        Given a user with the following criteria
            | criteria                |
            | multiple accounts       |
            | account in pesos        |
            | parking accounts        |
            | missing partner account |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to register a parking meter account
        When the user continues to the "terms" step of the parking enrollment
        Then the user sees the following items in the screen
            | item          |
            | icon image    |
            | error title   |
            | error text    |
            | retry button  |
            | cancel button |

    @PM012
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @backend-smoke
    Scenario: Parking Enrollment - Check the terms and conditions after registration
        Given a user with the following criteria
            | criteria          |
            | multiple accounts |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to register a parking meter account
        And the user continues to the "summary" step of the parking enrollment
        When the user changes "terms" step of enrollment
        Then the user sees the following items in the screen
            | item                  | value   |
            | terms step            | enabled |
            | third step title      |         |
            | accept check          |         |
            | pdf link              |         |
            | terms continue button | enabled |
