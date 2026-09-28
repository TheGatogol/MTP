@billpayments
Feature: Bill Payments

    @BP002
    @MX
    @vbank @backend(test)
    @ios @android @web
    @smokeTest
    @web-done
    Scenario: The user make a bill payment from product detail with new service
        Given a user with the following criteria
            | criteria      |
            | bill payments |
        And the user selects an account
        When the user finish a bill payment "service"
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | successfull receipt |
            | title               |
            | date                |
            | amount              |
            | id                  |
            | operation           |
            | origin              |
            | masked number       |
            | cie                 |
            | operation number    |
            | share               |
            | save                |

    @BP003
    @MX
    @vbank @backend(test)
    @web
    @manual
    @JIRA.GLOMOGL-20414
    Scenario: The user stores a service as favorite
        Given a user with the following criteria
            | criteria      |
            | bill payments |
        And the user selects an account
        When the user finish a bill payment "service"
        And the user store the service with alias "card"
        Then the user sees the following items in the screen
            | item          |
            | toast message |

    @BP004
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @alternate-scenarios-smoke
    Scenario: The user make a bill payment from product detail with stored service
        Given a user with the following criteria
            | criteria        |
            | bill payments   |
            | stored services |
        And the user selects an account
        And the user selects an stored service
        When the user finish a bill payment "stored service"
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | successfull receipt     |
            | title                   |
            | date                    |
            | amount                  |
            | id                      |
            | reference               |
            | alias                   |
            | operation stored        |
            | origin stored           |
            | share                   |
            | masked number stored    |
            | cie stored              |
            | operation number stored |

    @BP005 @MX
    @ios @android @web
    @vbank @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario: The user modifies the amount from the account detail
        Given a user with the following criteria
            | criteria                     |
            | bill payments product detail |
        When the user selects an account
        And the user is in the "summary not saved" step of bill payments
        And the user changes the amount and confirms the change
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | amount label         |
            | concept label        |
            | confirm button       |
            | origin account label |
            | service label        |

    @BP006 @MX
    @ios @android @web
    @vbank @backend(test)
    @vbank-modified
    @web-done @alternate-scenarios-smoke
    Scenario: The user pays the service from the account detail with other import
        Given a user with the following criteria
            | criteria                     |
            | bill payments product detail |
        When the user selects an account
        And the user is in the "review" step of bill payments
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | successfull receipt |
            | title               |
            | date                |
            | amount              |
            | id                  |
            | operation           |
            | origin              |
            | masked number       |
            | cie                 |
            | operation number    |
            | share               |
            | save                |

    @BP007 @MX
    @ios @android @web
    @vbank @backend(test)
    @vbank-modified
    @web-done @alternate-scenarios-smoke
    Scenario: The user pays a new service without saving
        Given a user with the following criteria
            | criteria                     |
            | bill payments product detail |
        And the user selects an account
        When the user finish a bill payment "service"
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | successfull receipt |
            | title               |
            | date                |
            | amount              |
            | id                  |
            | operation           |
            | origin              |
            | masked number       |
            | cie                 |
            | operation number    |
            | share               |
            | save                |

    @BP008 @MX
    @ios @android @web
    @vbank @backend(test)
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user searches a new service
        Given a user with the following criteria
            | criteria                     |
            | bill payments product detail |
        When the user accesses to bill payments from "product detail"
        And the user searches for the service "IZZ"
        And the user deletes the search
        And the user searches for the service "IZZI"
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | title results   |
            | agreement label |

    @BP009 @MX
    @ios @android @web
    @vbank @backend(test)
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Failed to search a new service
        Given a user with the following criteria
            | criteria       |
            | one account    |
            | bill payments  |
            | common account |
        When the user accesses to bill payments from "product detail"
        And the user searches for the service "FedEX"
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | info message      |
            | image description |

    @BP010 @MX
    @ios @android @web
    @vbank @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario: The user cancels the service payment
        Given a user with the following criteria
            | criteria                     |
            | bill payments product detail |
        When the user selects an account
        And the user is in the "summary not saved" step of bill payments
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | summary              |
            | origin account label |
            | service label        |
            | concept label        |

    @BP011 @MX
    @ios @android @web
    @vbank @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311 @alternate-scenarios-smoke
    Scenario: The user does not get a response for reference search
        Given a user with the following criteria
            | criteria                     |
            | bill payments product detail |
        When the user selects an account
        And the user is in the otp modal from special service
        Then the user sees a modal open

    @BP012 @MX
    @ios @android @web
    @vbank @backend(test)
    @vbank-modified
    @web-done @alternate-scenarios-smoke
    Scenario: Payment of services when there are no debts
        Given a user with the following criteria
            | criteria                     |
            | bill payments product detail |
        When the user selects an account
        And the user selects an stored service
        And the user finish a bill payment "service"
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | successfull receipt     |
            | title                   |
            | date                    |
            | amount                  |
            | id                      |
            | reference               |
            | alias                   |
            | operation stored        |
            | origin stored           |
            | share                   |
            | masked number stored    |
            | cie stored              |
            | operation number stored |

    @BP013 @MX
    @ios @android @web
    @vbank @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario: The user changes the concept from the summary section
        Given a user with the following criteria
            | criteria                     |
            | bill payments product detail |
        When the user selects an account
        And the user is in the "summary not saved" step of bill payments
        And the user changes the concept
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | amount label         |
            | confirm button       |
            | commission label     |
            | origin account label |
            | service label        |

    @BP014 @MX
    @ios @android @web
    @vbank @backend(test)
    @vbank-modified
    @web-done @alternate-scenarios-smoke
    Scenario: The user completes a bill payment without concept
        Given a user with the following criteria
            | criteria                     |
            | bill payments product detail |
        When the user selects an account
        And the user finish a bill payment "service"
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | successfull receipt |
            | title               |
            | date                |
            | amount              |
            | id                  |
            | operation           |
            | origin              |
            | masked number       |
            | cie                 |
            | operation number    |
            | share               |
            | save                |

    @BP015 @MX
    @ios @android @web
    @vbank @backend(test)
    @vbank-modified
    @web-done @alternate-scenarios-smoke
    Scenario: The user pays for a service
        Given a user with the following criteria
            | criteria                     |
            | bill payments product detail |
        When the user selects an account
        And the user selects an stored service
        And the user finish a bill payment "service"
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | successfull receipt     |
            | title                   |
            | date                    |
            | amount                  |
            | id                      |
            | reference               |
            | alias                   |
            | operation stored        |
            | origin stored           |
            | share                   |
            | masked number stored    |
            | cie stored              |
            | operation number stored |

    @BP016
    @MX
    @ios @android @web
    @vbank @backend(test)
    @web-done
    Scenario: Make Bill Payment from Product Detail With Limit Exceeded MTU
        Given a user with the following criteria
            | criteria                              |
            | exception transfers with exceeded mtu |
        When the user completes the MTU limit payment from fast access with reference "000035241"
        Then the user sees the following items in the screen
            | item                             |
            | header limit exceeded            |
            | microillustration limit exceeded |
            | title limit exceeded             |
            | first paragraph limit exceeded   |
            | second paragraph limit exceeded  |
            | button limit exceeded            |

    @BP017
    @MX
    @ios @android @web
    @vbank @backend(test)
    @web-done
    Scenario: Make the service payment confirming the MTU limit
        Given a user with the following criteria
            | criteria                              |
            | exception transfers with exceeded mtu |
        And the user completes the MTU limit payment from fast access with reference "000035241"
        When the user confirms the MTU exception
        Then the user sees the following items in the screen
            | item                                     |
            | close button confirmation max limit      |
            | header confirmation max limit            |
            | microillustration confirmation max limit |
            | title confirmation max limit             |
            | description confirmation max limit       |
            | button confirmation max limit            |

    @BPT001
    @ios @android @web
    @vbank @backend(test)
    @MX @web-done @smokeTest
    Scenario Outline: Happy path payment <payment> method
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        When the user finish a cdmx bill payment with "84118XXU73BDYD6KF6A1" reference "760" amount "<payment>" payment option
        Then the user sees the following items in the screen
            | item                      |
            | header success            |
            | title header success      |
            | date success              |
            | amount success            |
            | id service success        |
            | reference service success |
            | concept service success   |
            | cie                       |
            | share                     |
            | save                      |
        Examples:
            | payment        |
            | single payment |
            | with points    |
            | msi            |

    @BPT002
    @ios @android @web
    @vbank @backend(test)
    @MX @web-done
    Scenario Outline: Validate payment option <payment>
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        When the user selects the "<payment>" payment option with reference "84118XXU73BDYD6KF6A1" up to the payment option
        Then the user sees the following items in the screen
            | item                                | visibility |
            | title header payment option step    |            |
            | single payment radio button         |            |
            | msi payment radio button            |            |
            | points payment radio button         | <visible>  |
            | continue button payment option step |            |
        Examples:
            | payment        | visible     |
            | single payment | not visible |
            | with points    | visible     |

    @BPT003
    @ios @android @web
    @vbank @backend(test)
    @MX @web-done
    Scenario Outline: Modify from summary <step> step
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user select the summary service "cdmx" reference "84118XXU73BDYD6KF6A1" concept "default"
        When the user deploys modify the "<step>" step to bill payment
        Then the user sees the following items in the screen
            | item                        | visibility |
            | header                      |            |
            | title step one summary      |            |
            | edit link step one summary  |            |
            | title step two summary      |            |
            | edit link step two summary  |            |
            | edit link step five summary | <visible>  |
        Examples:
            | step           | visible     |
            | origin         | visible     |
            | payment option | not visible |
