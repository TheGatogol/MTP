@scheduledBillPayments
Feature: Scheduled Bill Payments Spherica

    @PS001
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Successful Scheduled Service Payment
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        And the user accepts the recurring charge format
        When the user completes the operation with OTP
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | amount                |
            | reference successful  |
            | service               |
            | folio                 |
            | share button          |

    @PS002
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @spherica
    Scenario Outline: Payment <paymentType> Service
        Given a user with the following criteria
            | criteria           |
            | programmed payment |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user chooses a "<paymentType>" service
        And the user accepts the recurring charge format
        When the user completes the operation with OTP
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | amount                |
            | service               |
            | reference successful  |
            | folio                 |
            | share button          |
        Examples:
            | paymentType |
            | new         |
            | saved       |

    @PS003
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @backend-smoke
    @alternate-scenarios-smoke @spherica
    Scenario: New Service Section
        Given a user with the following criteria
            | criteria           |
            | programmed payment |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        When the user selects new service option
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | fast access   |
            | services list |
            | search list   |

    @PS004
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @smokeTest
    @backend-smoke
    @alternate-scenarios-smoke @spherica
    Scenario: Service Detail
        Given a user with the following criteria
            | criteria                    |
            | account sufficient balance  |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        When the user captures the full name of the owner of the saved service option
        Then the user sees the following items in the screen
            | item             | value   |
            | header           |         |
            | continue button  | enabled |

    @PS005
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @backend-smoke
    @alternate-scenarios-smoke @spherica
    Scenario: Quick Access List Service
        Given a user with the following criteria
            | criteria       |
            | basic accounts |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects new service option
        When the user selects one service of the list
        Then the user sees the following items in the screen
            | item                 | value    |
            | header               |          |
            | reference            |          |
            | number of characters |          |
            | close button         |          |
            | owner full name      |          |
            | letter substitution  |          |
            | continue button      | disabled |

    @PS006
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @backend-smoke
    @alternate-scenarios-smoke @spherica
    Scenario: Saved Services Section basic accounts
        Given a user with the following criteria
            | criteria       |
            | basic accounts |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        When the user selects saves services
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | save service list |

    @PS007
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @backend-smoke
    @alternate-scenarios-smoke @spherica
    Scenario Outline: Search By <type> Service
        Given a user with the following criteria
            | criteria       |
            | basic accounts |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects new service option
        When the user searches by "<type>" service
        Then the user sees the following items in the screen
            | item       |
            | header     |
            | <element>  |
        Examples:
            | type          | element       |
            | three letters | services list |
            | four letters  | services list |
            | wrong         | wrong search  |

    @PS008
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @backend-smoke
    @alternate-scenarios-smoke @spherica
    Scenario: Delete the Searched Service
        Given a user with the following criteria
            | criteria                   |
            | account sufficient balance |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        When the user deletes the service searches
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | list of services |

    @PS009
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Max Amount Section
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        When the user selects an origin "account"
        Then the user sees the following items in the screen
            | item                   | value    |
            | header                 |          |
            | max amount             |          |
            | continue button step 3 | disabled |

    @PS010
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Accounts Available For The Process
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        When the user selects saved service option
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | accounts and cards |
            | origin table       |

    @PS011
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Cards Available For The Process
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        When the user selects saved service option
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | sufficient balance |
            | close button       |

    @PS012
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Access To Card Section
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        When the user selects cards section
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | origin table |

    @PS013
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario Outline: Access To See All <type> Section
        Given a user with the following criteria
            | criteria      |
            | various cards |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        When the user selects origin section and goes to "<type>" view all option
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | all origins |
        Examples:
            | type    |
            | account |
            | cards   |

    @PS014
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Close The See All Cards Section
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        And the user selects origin section and goes to "cards" view all option
        When the user closes "view all" section
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | origin table |

    @PS015
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Maximum Amount Section
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        When the user selects maximum amount section and goes to periodicity section
        Then the user sees the following items in the screen
            | item                        | value    |
            | header                      |          |
            | periodicity                 |          |
            | continue button periodicity | disabled |

    @PS016
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Terms And Conditions Section
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        And the user selects maximum amount section and goes to periodicity section
        When the user selects terms and conditions section
        Then the user sees the following items in the screen
            | item                        | value    |
            | header                      |          |
            | free cancellation           |          |
            | authorization of charges    |          |
            | continue button periodicity | disabled |

    @PS017
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Accept the Recurring Charge Format
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        When the user accepts the recurring charge format
        Then the user sees the following items in the screen
            | item                                 | value   |
            | header                               |         |
            | continue button terms and conditions | enabled |

    @PS018
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Delete the Save Service
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        And the user accepts the recurring charge format
        When the user "tries to" delete saved service option
        Then the user sees the following items in the screen
            | item                   |
            | delete service button  |
            | cancel button          |

    @PS019
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Confirm Delete Save Service
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        And the user accepts the recurring charge format
        When the user "completes" delete saved service option
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | close button   |
            | saved services |
            | new service    |

    @PS020
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Cancel Delete Saved Service
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        And the user accepts the recurring charge format
        When the user cancels delete the service
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | summary section  |

    @PS021
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Modify Service Detail From The Summary Section
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        And the user accepts the recurring charge format
        When the user modifies the service saved detail
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | summary section  |

    @PS022
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Summary Section
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        When the user accepts the recurring charge format
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | close button    |
            | summary section |
            | confirm button  |

    @PS023
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario Outline: Modify <type> Origin Section
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user continues the process with a "<type>" as origin
        And the user modifies the origin payment
        When the user select other "<type>" origin
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | summary section |
        Examples:
            | type    |
            | account |
            | card    |

    @PS024
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Modify Max Amount From Summary Section
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user continues the process with a "card" as origin
        When the user modifies the max amount
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | summary section  |

    @PS025
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Consult Terms And Conditions
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        And the user accepts the recurring charge format
        When the user selects terms and condition from the summary
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | summary section  |

    @PS026
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Modify Periodicity Option
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        And the user accepts the recurring charge format
        When the user selects periodicity from the summary
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | summary section  |

    @PS027
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Close Service Payment Section
        Given a user with the following criteria
            | criteria       |
            | basic accounts |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        When the user closes "service payment" section
        Then the user sees the following items in the screen
            | item                      |
            | exit operation button     |
            | continue operation button |

    @PS028
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Close Summary Section
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        And the user accepts the recurring charge format
        When the user closes "service payment" section
        Then the user sees the following items in the screen
            | item                      |
            | exit operation button     |
            | continue operation button |

    @PS029
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Cancel Operation Option
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        And the user accepts the recurring charge format
        When the user closes "operation" section
        Then the user sees the "bill payments home" screen

    @PS030
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Continue With Operation
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saved service option
        And the user accepts the recurring charge format
        When the user continues with the operation
        Then the user sees the following items in the screen
            | item            |
            | summary section |

    @PS031
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario Outline: <section> Help Section
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        When the user selects a save service and goes to "<section>" help section
        Then the user sees the following items in the screen
            | item              |
            | title section     |
            | close button      |
            | help information  |
            | understood button |
        Examples:
            | section    |
            | barcode    |
            | owner name |

    @PS032
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: closes barcode Barcode Help Section
        Given a user with the following criteria
            | criteria       |
            | basic accounts |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects a save service and goes to "barcode" help section
        When the user "closes barcode" the help section
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | owner full name |
            | reference       |

    @PS033
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Close Help Section Payment Method
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        When the user selects a save service and goes to help section payment method
        Then the user sees the following items in the screen
            | item                   |
            | accounts and cards     |

    @PS034
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Owner Name Help Section
        Given a user with the following criteria
            | criteria       |
            | basic accounts |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        When the user selects a save service and goes to "owner name" help section
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | owner full name |
            | reference       |

    @PS035
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Saved Service Section
        Given a user with the following criteria
            | criteria       |
            | basic accounts |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saves services
        When the user selects an saved service
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | owner full name |
            | reference       |

    @PS036
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Payment Origin Help Option
        Given a user with the following criteria
            | criteria       |
            | basic accounts |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saves services
        And the user selects an saved service
        When the user goes to payment origin help option
        Then the user sees the following items in the screen
            | item                       |
            | help payment section title |
            | close button               |
            | tip                        |

    @PS037
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Accept Payment Origin Help Message
        Given a user with the following criteria
            | criteria         |
            | service payments |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user accesses to the scheduled payment option
        And the user selects saves services
        And the user selects an saved service
        When the user goes to payment origin help option and continue with operation
        Then the user sees the following items in the screen
            | item               |
            | accounts and cards |
