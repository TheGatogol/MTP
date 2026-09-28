@billPaymentsDashboard
Feature: Bill Payments Dashboard Spherica

    @PUV001
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done @backend-smoke @spherica
    Scenario: Onboarding
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        When the user accepts the onboarding bill payments dashboard
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | title header               |
            | exit button header         |
            | title step one             |
            | button to pay new services |
            | title saved services       |
            | title link view all        |

    @PUV002
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Happy Path
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user select the summary service "sears" reference "12345" concept "myConcep"
        When the user finish a bill payment
        Then the user sees the following items in the screen
            | item                      |
            | header success            |
            | title header success      |
            | date success              |
            | amount success            |
            | name service success      |
            | id service success        |
            | reference service success |
            | type operation            |
            | origin success            |
            | concept service success   |
            | cie                       |
            | operation folio           |
            | operation number          |
            | share                     |
            | save                      |

    @PUV003
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done @backend-smoke @spherica
    Scenario: Select Service
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        When the user selects the service "izzi" with reference "123456789"
        Then the user sees the following items in the screen
            | item                              |
            | header                            |
            | title header                      |
            | exit button header                |
            | text box reference                |
            | camera button icon                |
            | service detail information icon   |
            | button continue service detail    |
            | title link choose another service |

    @PUV004
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Pay New Service
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user select the summary service "sky" reference "123456789" concept "myConcep"
        When the user finish a bill payment
        Then the user sees the following items in the screen
            | item                      |
            | name service success      |
            | id service success        |
            | reference service success |
            | type operation            |
            | origin success            |
            | concept service success   |
            | cie                       |
            | operation folio           |
            | operation number          |

    @PUV005
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done @spherica @timemachine
    Scenario: Pay Tax Sat
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user starts the application at date
            | hour  | 9    |
            | day   | 4    |
            | month | 10   |
            | year  | 2026 |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user select "sat" with reference "04240276174744638260" and amount "338"
        When the user completed pay tax
        Then the user sees the following items in the screen
            | item                      |
            | header success            |
            | title header success      |
            | amount success            |
            | name service success      |
            | id service success        |
            | reference service success |
            | type operation            |
            | origin success            |
            | concept service success   |
            | cie                       |
            | operation folio           |
            | operation number          |
            | share                     |
            | save                      |

    @PUV006
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Only One Payment Method
        Given a user with the following criteria
            | criteria                       |
            | bill payments only one account |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user select the summary service "sears" reference "123456789" concept "myConcep"
        When the user finish a bill payment
        Then the user sees the following items in the screen
            | item                      |
            | date success              |
            | amount success            |
            | name service success      |
            | id service success        |
            | reference service success |
            | type operation            |
            | origin success            |
            | concept service success   |
            | cie                       |
            | operation folio           |
            | operation number          |
            | share                     |
            | save                      |

    @PUV007
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: More Than One Payment Method
        Given a user with the following criteria
            | criteria                    |
            | bill payments many accounts |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user select the summary service "qualitas" reference "123456789" concept "myConcep"
        When the user finish a bill payment
        Then the user sees the following items in the screen
            | item                      |
            | id service success        |
            | reference service success |
            | type operation            |
            | origin success            |
            | concept service success   |
            | operation folio           |
            | operation number          |

    @PUV008
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done @backend-smoke @spherica
    Scenario: All Accounts
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        When the user selects all accounts of the service "sears" with reference "1234567890"
        Then the user sees the following items in the screen
            | item                              |
            | title all accounts modal          |
            | label all accounts modal          |
            | close button all accounts modal   |
            | name account all accounts modal   |
            | number account all accounts modal |

    @PUV009
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Saved Services
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        When the user saves new service
        Then the user sees the following items in the screen
            | item                 |
            | header success       |
            | title header success |
            | share                |
            | save                 |
            | toast saved service  |

    @PUV010
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done @backend-smoke @spherica
    Scenario: Close on the new service or tax screen
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user selects the service "izzi" with reference "123456789"
        When the user closes the screen new service or tax
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | title header               |
            | exit button header         |
            | title step one             |
            | button to pay new services |
            | title saved services       |
            | title link view all        |

    @PUV011
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done @backend-smoke @spherica
    Scenario: Exit From The Modal Medium
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        When the user selects the service "izzi" with reference "123456789" up to the concept
        Then the user sees the following items in the screen
            | item                         |
            | exit button header           |
            | title header                 |
            | title step one summary       |
            | edit link step one summary   |
            | title step two summary       |
            | edit link step two summary   |
            | title step three summary     |
            | edit link step three summary |

    @PUV012
    @vbank
    @MX @backend(test)
    @web @android @ios @backend-smoke
    @web-done @smokeTest @spherica
    Scenario: Not Abandon The Operation
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user selects the service "sears" with reference "123456789" up to the concept
        When the user decides not to abandon the operation
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | title header                 |
            | title step one summary       |
            | edit link step one summary   |
            | title step two summary       |
            | edit link step two summary   |
            | title step three summary     |
            | edit link step three summary |

    @PUV013
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done @backend-smoke @spherica
    Scenario: Change The Selected Service
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user selects the service "sears" with reference "123456789" up to the concept
        When the user change the selected service
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | title header               |
            | exit button header         |
            | title step one             |
            | button to pay new services |
            | title saved services       |

    @PUV014
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done @smokeTest @backend-smoke @spherica
    Scenario Outline: Edit <data> Step Summary
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user selects the service "sears" with reference "123456789" up to the concept
        When the user decides edit the "<data>" step of service "sears" with reference "123456789"
        Then the user sees the following items in the screen
            | item                         | visibility                   |
            | header                       |                              |
            | title header                 |                              |
            | title step one summary       |                              |
            | edit link step one summary   |                              |
            | title step two summary       |                              |
            | edit link step two summary   | <edit step two visibility>   |
            | title step three summary     |                              |
            | edit link step three summary | <edit step three visibility> |

        Examples:
            | data   | edit step two visibility | edit step three visibility |
            | first  | not visible              | not visible                |
            | second | not visible              |                            |
            | third  |                          |                            |
            | fourth |                          |                            |

    @PUV015
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done @backend-smoke @spherica
    Scenario Outline: Service Information Screen With <service>
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user selects the service "<service>" with reference "<reference>"
        When the user view the information screen of service and "cancel" the information
        Then the user sees the following items in the screen
            | item                              |
            | header                            |
            | title header                      |
            | exit button header                |
            | text box reference                |
            | camera button icon                |
            | service detail information icon   |
            | button continue service detail    |
            | title link choose another service |

        Examples:
            | service   | reference            |
            | total     | 12345678901          |
            | sat       | 042402H0194744638276 |

    @PUV016
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done @backend-smoke @spherica
    Scenario: Cancel Service Information Screen With Telmex
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user selects the service "total" with reference "12345678901"
        When the user view the information screen of service and "accepts" the information
        Then the user sees the following items in the screen
            | item                              |
            | header                            |
            | title header                      |
            | exit button header                |
            | text box reference                |
            | camera button icon                |
            | service detail information icon   |
            | button continue service detail    |
            | title link choose another service |
