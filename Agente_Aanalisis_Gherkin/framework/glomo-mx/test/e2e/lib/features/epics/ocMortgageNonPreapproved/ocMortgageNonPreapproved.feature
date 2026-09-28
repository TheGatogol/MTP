@ocMortgageNonPreapproved
Feature: Oc Mortgage Non Preapproved

    @OMNA001
    @web @ios @android
    @MX @backend(test)
    @vbank @web-done
    Scenario Outline: Validate credit contracting <type_credit>
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "<type_credit>" payment "<type_payment>"
        And the user accesses the "950000" and "450000" and "<period>"
        And the user accesses the type occupation "<occupation>" business "<type_business>"
        When the user accesses the information of work "<years_of_work>" and "<type_house>" and "<advisory>" and "go to success page"
        Then the user sees the following items in the screen
            | item                 |
            | close success modal     |
            | success header title    |
            | success title           |
            | success icon            |
            | success amount          |
            | success list            |
            | success alert           |
            | success download button |
            | success shared button   |

        Examples:
            | type_credit               | type_payment    | period | occupation | type_business | years_of_work | type_house | advisory |
            | buy apartment             | buy property    | 15     | employee   | private       | 4             | own        | yes      |
            | change my mortgage        |                 | 10     | other      | public        | 4             | own        | yes      |
            | mortgage my property      | buy property    | 5      | employee   | private       | 9             | family     | no       |
            | remodel my house          | buy property    | 20     | other      | public        | 4             | own        | yes      |
            | buy land                  | buy property    | 10     | employee   | private       | 10            | rented     | no       |
            | buy cost apartment        | credit amount   | 15     | employee   | private       | 4             | own        | yes      |
            | buy apartment pay monthly | monthly payment | 15     | employee   | private       | 4             | own        | yes      |

    @OMNA002
    @ios @android @web
    @MX @backend(test)
    @vbank @web-done
    @backend-smoke
    Scenario: Validate select document terms and conditions
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses the type occupation "other" business "private"
        When the user accesses the information of work "9" and "own" and "yes" and "open and close terms"
        Then the user sees the following items in the screen
            | item                         |
            | document terms and condition |
            | document notice privacy      |
            | document credit bureau       |

    @OMNA003
    @web @ios @android
    @MX @backend(test)
    @vbank @web-done
    @backend-smoke
    Scenario: Validate select document notice privacy
        Given a user with the following criteria
            | criteria          |
            | oc mortgage pre   |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses the type occupation "other" business "private"
        When the user accesses the information of work "9" and "own" and "yes" and "open and close notice privacy"
        Then the user sees the following items in the screen
            | item                         |
            | document terms and condition |
            | document notice privacy      |
            | document credit bureau       |

    @OMNA004
    @ios @android @web
    @MX @backend(test)
    @vbank @web-done
    @backend-smoke
    Scenario: Validate select document credit bureau
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses the type occupation "other" business "private"
        When the user accesses the information of work "9" and "own" and "yes" and "open and close credit bureau"
        Then the user sees the following items in the screen
            | item                         |
            | document terms and condition |
            | document notice privacy      |
            | document credit bureau       |

    @OMNA005
    @ios @android @web
    @MX @backend(test)
    @vbank @web-done
    @backend-smoke
    Scenario: Validate change amount
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user clear amount
        When the user accesses insert amount "450000"
        Then the user sees the following items in the screen
            | item               |
            | type credit button |
            | type payment       |
            | type period        |

    @OMNA006
    @ios @android @web
    @MX @backend(test)
    @vbank @web-done
    @backend-smoke
    Scenario: Validate change period
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        When the user accesses change period "5"
        Then the user sees the following items in the screen
            | item               |
            | type credit button |
            | type payment       |
            | type period        |

    @OMNA007
    @ios @android @web
    @MX @backend(test)
    @vbank @web-done
    @backend-smoke
    Scenario: Validate change amount income
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses the type occupation "other" business "private"
        When the user accesses the information of work "9" and "own" and "yes" and "modify amount income"
        Then the user sees the following items in the screen
            | item                      |
            | modify button credit      |
            | modify button data source |
            | modify button terms       |

    @OMNA008
    @ios @android @web
    @MX @backend(test)
    @vbank @web-done
    @backend-smoke
    Scenario: Validate change type business
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses the type occupation "other" business "private"
        When the user accesses the information of work "9" and "own" and "yes" and "modify type business"
        Then the user sees the following items in the screen
            | item                      |
            | modify button credit      |
            | modify button data source |
            | modify button terms       |

    @OMNA009
    @ios @android @web
    @MX @backend(test)
    @vbank @web-done
    @backend-smoke
    Scenario: Validate change type terms and conditions
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses the type occupation "other" business "private"
        When the user accesses the information of work "9" and "own" and "yes" and "modify type terms"
        Then the user sees the following items in the screen
            | item                      |
            | modify button credit      |
            | modify button data source |
            | modify button terms       |

    @OMNA010
    @ios @android @web
    @MX @backend(test)
    @vbank @web-done
    @backend-smoke
    Scenario: Validate exit modal oboarding
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses to the oc mortgage
        When the user accesses exit simulation mortgage
        Then the user sees the following items in the screen
            | item                        |
            | modal onboarding img        |
            | label onboarding            |
            | continue button onboarding  |

    @OMNA011
    @ios @android @web
    @MX @backend(test)
    @vbank @web-done
    @backend-smoke
    Scenario: Validate continue process modal simulation
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses exit simulation mortgage
        When the user accesses continue modal simulation
        Then the user sees the following items in the screen
            | item               |
            | type credit button |
            | type payment       |
            | type period        |

    @OMNA012
    @ios @android @web
    @MX @backend(test)
    @vbank @web-done
    @backend-smoke
    Scenario: Validate exit process simulation
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses exit simulation mortgage
        When the user accesses exit modal simulation
        Then the user sees the following items in the screen
            | item                        |
            | modal onboarding img        |
            | label onboarding            |
            | continue button onboarding  |

    @OMNA013
    @ios @android @web
    @MX @backend(test)
    @vbank @web-done
    @smokeTest
    Scenario: Validate exit screen success
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses the type occupation "other" business "private"
        When the user accesses the information of work "9" and "own" and "yes" and "close success page"
        Then the user sees the "contract product section" screen

    @OMNA014
    @ios @android @web
    @MX @backend(test)
    @vbank @web-done
    Scenario: Validate exit process modal simulation
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses the type occupation "other" business "private"
        When the user accesses the information of work "9" and "own" and "yes" and "continue modal simulation"
        Then the user sees the following items in the screen
            | item                      |
            | modify button credit      |
            | modify button data source |
            | modify button terms       |

    @OMNA015
    @ios @android @web
    @MX @backend(test)
    @vbank @web-done
    @backend-smoke
    Scenario Outline: Validate credit contracting <tooltip>
        Given a user with the following criteria
            | criteria        |
            | oc mortgage pre |
        And the user access to the "oc mortgage" offer
        And the user accesses the type of "<type_credit>" payment "<type_payment>"
        And the user accesses the "950000" and "450000" and "<period>"
        When the user accesses tooltip fees and costs "<tooltip>"
        Then the user sees the following items in the screen
            | item               | value     |
            | type credit button | visible   |
            | type payment       | <status2> |
            | type period        | visible   |

        Examples:
            | type_credit          | type_payment | period | tooltip            | status2     |
            | buy apartment        | buy property | 5      | opening commission | visible     |
            | change my mortgage   |              | 10     | interest rate      | not visible |
            | mortgage my property | buy property | 5      | cat without vat    | visible     |

    @OMNA016
    @web @ios @android
    @MX @backend(test)
    @vbank @web-done
    Scenario: Validate simulation not approved
        Given a user with the following criteria
            | criteria          |
            | oc mortgage pre   |
        And the user access to the "oc mortgage error" offer
        And the user accesses the type of "buy apartment" payment "buy property"
        And the user accesses the "300000" and "45000" and "10"
        And the user accesses the type occupation "other" business "private"
        When the user accesses the information of work "9" and "own" and "yes" and "go to success page"
        Then the user sees the following items in the screen
            | item                             |
            | not approved modal content       |
            | not approved modal title         |
            | not approved modal accept button |
            | not approved modal icon          |
