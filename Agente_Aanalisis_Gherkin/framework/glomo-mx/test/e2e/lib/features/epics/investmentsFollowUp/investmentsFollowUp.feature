@investmentsFollowUp
Feature: My Investments

    @MI001
    @MX @vbank @web-done @backend(test)
    @smokeTest
    @web @ios @android
    @backend-smoke
    Scenario: My Investments dashboard
        Given a user with the following criteria
            | criteria              |
            | user with investments |
            | investments follow up |
        And the user accesses My Investments dashboard "with onboarding"
        When the user closes the onboarding
        Then the user sees the following items in the screen
            | item                            |
            | follow up investments dashboard |
            | selector by value               |
            | selector by profitability       |
            | total investment                |
            | investment chart                |
            | period one month                |
            | period three months             |
            | period year to date             |
            | more info access                |
            | icons                           |

    @MI002
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: My Investments dashboard - Access to FAQs
        Given a user with the following criteria
            | criteria              |
            | user with investments |
            | investments follow up |
        And the user accesses My Investments dashboard "without onboarding"
        When the user opens the FAQs
        Then the user sees the following items in the screen
            | item          |
            | faq list open |
            | faq1          |
            | faq2          |
            | faq3          |
            | faq4          |

    @MI003
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @localStorage @JIRA.GLOMOGL-17702
    Scenario: My Investments dashboard - Access without show onboarding information
        Given a user with the following criteria
            | criteria              |
            | user with investments |
            | investments follow up |
        When the user accesses My Investments dashboard "without onboarding"
        Then the user does not see the following items in the screen
            | item       |
            | onboarding |

    @MI004
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: My Investments dashboard - Chart values and profitabilities
        Given a user with the following criteria
            | criteria              |
            | user with investments |
        And the user accesses My Investments dashboard "without onboarding"
        And the user selects data by "profitability"
        And the user selects period "one year"
        And the user selects the position "-100" into chart
        When the new amount "2.294374" has been uploaded
        Then the user sees next values
            | item             | attribute             | value     |
            | total investment | amount                | 2.294374  |
            | total investment | unit                  | %         |
            | total investment | description           | $5,419.88 |
            | total investment | description no format | 5419.875  |

    @MI005
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @exclude-headless @JIRA.GLOMOGL-26384
    Scenario: My Investments dashboard - Product access
        Given a user with the following criteria
            | criteria              |
            | user with investments |
            | investments follow up |
        And the user accesses My Investments dashboard "without onboarding"
        And the user selects the corresponding product
        When the user accesses to fund product detail
        Then the user sees the following items in the screen
            | item               |
            | fund contract      |
            | funds help tooltip |
            | fund list          |

    @MI006
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: My Investments dashboard - Access to FAQ detail
        Given a user with the following criteria
            | criteria              |
            | user with investments |
            | investments follow up |
        And the user accesses My Investments dashboard "without onboarding"
        And the user opens the FAQs
        When the user opens the FAQ "faq1"
        Then the user sees the following items in the screen
            | item       |
            | faq detail |

    @MI007
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario Outline: My Investments dashboard - Check new periods "<period>"
        Given a user with the following criteria
            | criteria              |
            | user with investments |
        And the user accesses My Investments dashboard "without onboarding"
        And the user selects data by "profitability"
        When the user selects the period "<period>"
        Then the user sees next values
            | item             | attribute             | value    |
            | total investment | amount                | <value>  |
            | total investment | unit                  | %        |
            | total investment | description           | <value2> |
            | total investment | description no format | <value3> |

        Examples:
            | period            | value     | value2     | value3       |
            | two years         | 9.643458  | $35,676.01 | 35676.007813 |
            | start investment  | 10.048903 | $48,541.36 | 48541.355469 |

    @MI008
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: My Investments dashboard - Check custom dates
        Given a user with the following criteria
            | criteria              |
            | user with investments |
        And the user accesses My Investments dashboard "without onboarding"
        And the user opens custom date and selects start "2023-01-05" and end "2023-10-18" date
        And the user accept the changes
        When the user selects data by "profitability"
        Then the user sees next values
            | item             | attribute             | value        |
            | total investment | amount                | 5.125555     |
            | total investment | unit                  | %            |
            | total investment | description           | $20,063.05   |
            | total investment | description no format | 20063.052734 |

    @MI009
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: My Investments dashboard - Period of more than two years
        Given a user with the following criteria
            | criteria              |
            | user with investments |
            | investments follow up |
        And the user accesses My Investments dashboard "without onboarding"
        And the user opens custom date and selects start "2021-01-05" and end "2023-10-18" date
        When the user accept the changes
        Then the user sees the following items in the screen
            | item                        |
            | monthly informative message |

    @MI010
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: My Investments dashboard - Validate link, see terms
        Given a user with the following criteria
            | criteria              |
            | user with investments |
            | investments follow up |
        And the user accesses My Investments dashboard "without onboarding"
        When the user opens the term description modal
        Then the user sees the following items in the screen
            | item              |
            | terms description |

    @MI011
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: My Investments dashboard - validate card functionality recent publications
        Given a user with the following criteria
            | criteria              |
            | user with investments |
            | investments follow up |
        And the user accesses My Investments dashboard "without onboarding"
        And the user views more articles in financial health
        When the user close section recent posts
        Then the user sees the following items in the screen
            | item                    |
            | back button             |
            | terms link              |
            | recent publications     |
            | carousel                |
            | number of carousel      |

    @MI012
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: My Investments dashboard - consult distribution screen
        Given a user with the following criteria
            | criteria              |
            | user with investments |
            | investments follow up |
        And the user accesses My Investments dashboard "without onboarding"
        When the user accesses My Investments distribution
        Then the user sees the following items in the screen
            | item                                              |
            | follow up investments distribution of investments |

    @MI013
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: My Investments dashboard - See full list of contracts
        Given a user with the following criteria
            | criteria              |
            | user with investments |
        And the user accesses My Investments dashboard "without onboarding"
        When the user shows list contracts
        Then the user sees the following items in the screen
            | item                                |
            | contracts expandable panel expanded |
            | show first contract                 |
            | show second contract                |

    @MI014
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: My Investments dashboard - Validate when there is no data for the selected period
        Given a user with the following criteria
            | criteria              |
            | user with investments |
            | investments follow up |
        And the user accesses My Investments dashboard "without onboarding"
        And a system error occurs
        And the user taps the retry button
        When a system error occurs
        Then the user sees the following items in the screen
            | item              |
            | error header      |
            | closebutton       |
            | tag error         |
            | exitbutton        |
