@parkingRecharge
Feature: Parking Recharge

    @PR001
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    Scenario: Parking Recharge List - The user has a parking meter account
        Given a user with the following criteria
            | criteria          |
            | various accounts  |
            | account in pesos  |
            | parking accounts  |
        When the user accesses to "parking meters" operative from top up operationals
        Then the user sees the following items in the screen
            | item                | value   |
            | parking title       |         |
            | image account       |         |
            | information account |         |
            | recharge button     | active  |
            | delete button       | active  |
            | add account button  | visible |

    @PR002
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @backend-smoke
    Scenario: Parking Recharge List - Maximum registered parking accounts
        Given a user with the following criteria
            | criteria          |
            | five accounts     |
            | account in pesos  |
            | parking accounts  |
        When the user accesses to "parking meters" operative from top up operationals
        Then the user sees the following items in the screen
            | item                    | value  |
            | parking title           |        |
            | accounts list           |        |
            | information box message |        |
            | add account button      | hidden |

    @PR003
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @backend-smoke
    Scenario: Parking Recharge List - No registered accounts
        Given a user with the following criteria
            | criteria          |
            | without accounts  |
            | account in pesos  |
            | parking accounts  |
        When the user accesses to "parking meters" operative from top up operationals
        Then the user sees the following items in the screen
            | item               | value   |
            | parking title      |         |
            | empty image        |         |
            | information text   |         |
            | add account button | visible |

    @PR004
    @MX @web @android @ios
    @backend(test) @vbank @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Parking Recharge List - The user eliminates a parking account
        Given a user with the following criteria
            | criteria          |
            | multiple accounts |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        When the user eliminates their parking meter account
        Then the user sees the following items in the screen
            | item                | value   |
            | delete confirmation |         |
            | parking title       |         |
            | empty image         |         |
            | information text    |         |
            | add account button  | visible |

    @PR005
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @backend-smoke
    Scenario Outline: Parking Recharge List - FAQ <question> question
        Given a user with the following criteria
            | criteria          |
            | various accounts  |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        When the user consults the "<question>" question of FAQS about parking meters
        Then the user sees the following items in the screen
            | item           |
            | image question |
            | title question |
            | answer message |

        Examples:
            | question |
            | first    |
            | second   |
            | third    |
            | fourth   |

    @PR006
    @MX @web @android @ios
    @backend(test) @vbank @web-done @vbank-modified
    Scenario: Parking Recharge List - There is an error in the list of parking accounts
        Given a user with the following criteria
            | criteria          |
            | multiple accounts |
            | account in pesos  |
            | parking accounts  |
        When the user accesses to "parking meters" operative from top up operationals
        Then the user sees the following items in the screen
            | item          |
            | icon image    |
            | error title   |
            | error text    |
            | retry button  |
            | cancel button |

    @PR007
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    Scenario: Parking Recharge - The user accesses the recharge of their parking meter account
        Given a user with the following criteria
            | criteria          |
            | various accounts  |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        When the user goes to recharge his parking meter account
        Then the user sees the following items in the screen
            | item                        | value    |
            | parking account image       |          |
            | parking account information |          |
            | continue payment button     | disabled |
            | recharge amount step        | enabled  |
            | method payment step         | disabled |

    @PR008
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    Scenario: Parking Recharge - The user chooses an amount to recharge
        Given a user with the following criteria
            | criteria          |
            | various accounts  |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to recharge his parking meter account
        When the user continues to the "payment method" step of the parking recharge
        Then the user sees the following items in the screen
            | item                        | value   |
            | parking account image       |         |
            | parking account information |         |
            | method payment step         | enabled |

    @PR009
    @MX @web @android @ios
    @backend(test) @vbank @web-done @smokeTest
    Scenario: Parking Recharge - Complete recharging of parking meters - Happy path
        Given a user with the following criteria
            | criteria          |
            | multiple accounts |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to recharge his parking meter account
        And the user continues to the "summary" step of the parking recharge
        When the user completes the parking "recharge"
        Then the user sees the following items in the screen
            | item                 |
            | title                |
            | date                 |
            | recharge amount      |
            | fees message         |
            | partner icon         |
            | recharge information |
            | email information    |
            | share button         |
            | exit button          |

    @PR010
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    Scenario Outline: Parking Recharge - Recharge with "<type_account>" account
        Given a user with the following criteria
            | criteria         |
            | one account      |
            | parking accounts |
            | <type_account>   |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to recharge his parking meter account
        When the user continues to the "payment method" step of the parking recharge
        Then the user sees the following items in the screen
            | item                    | value           |
            | method payment step     | enabled         |
            | alert message balance   | <value>         |
            | account warning message | <value>         |
            | continue account button | <button_status> |

        Examples:
            | type_account         | button_status | value       |
            | funds                | enabled       | not visible |
            | insufficient balance | disabled      | visible     |

    @PR011
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    Scenario: Parking Recharge - Consult more information when recharging
        Given a user with the following criteria
            | criteria          |
            | various accounts  |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to recharge his parking meter account
        When the user consults more information about parking "recharge"
        Then the user sees the following items in the screen
            | item             |
            | modal icon       |
            | modal title      |
            | information text |
            | accept button    |

    @PR012
    @MX @web @android @ios
    @backend(test) @vbank @web-done @vbank-modified
    Scenario: Parking Recharge - There was an error recharging the parking meters
        Given a user with the following criteria
            | criteria          |
            | multiple accounts |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to recharge his parking meter account
        And the user continues to the "summary" step of the parking recharge
        When the user completes the parking "recharge"
        Then the user sees the following items in the screen
            | item          |
            | icon image    |
            | error title   |
            | error text    |
            | retry button  |
            | cancel button |

    @PR013
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    Scenario: Parking Recharge - The user has multiple payment methods
        Given a user with the following criteria
            | criteria                |
            | multiple pesos accounts |
            | parking accounts        |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to recharge his parking meter account
        And the user continues to the "payment method" step of the parking recharge
        When the user reviews all his payment methods
        Then the user sees the following items in the screen
            | item                |
            | all payment methods |
            | close button        |

    @PR014
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    Scenario: Parking Recharge - The user changes the amount to recharge
        Given a user with the following criteria
            | criteria          |
            | various accounts  |
            | account in pesos  |
            | parking accounts  |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to recharge his parking meter account
        And the user continues to the "summary" step of the parking recharge
        When the user changes the "amount"
        Then the user sees the following items in the screen
            | item                    | value   |
            | quantities              |         |
            | information box         |         |
            | continue payment button | enabled |

    @PR015
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    Scenario: Parking Recharge - The user changes the payment method
        Given a user with the following criteria
            | criteria                |
            | multiple pesos accounts |
            | parking accounts        |
        And the user accesses to "parking meters" operative from top up operationals
        And the user goes to recharge his parking meter account
        And the user continues to the "summary" step of the parking recharge
        When the user changes the "payment method"
        Then the user sees the following items in the screen
            | item             |
            | account selected |
            | action buttons   |

    @PR016
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    Scenario: Parking Recharge - Error in the verification of accounts registered with the partner
        Given a user with the following criteria
            | criteria          |
            | multiple accounts |
            | account in pesos  |
            | parking accounts  |
        When the user accesses to "parking meters" operative from top up operationals
        Then the user sees the following items in the screen
            | item                | value    |
            | parking title       |          |
            | image account       |          |
            | information account |          |
            | warning message     |          |
            | recharge button     | disabled |
            | delete button       | active   |
            | add account button  | visible  |
