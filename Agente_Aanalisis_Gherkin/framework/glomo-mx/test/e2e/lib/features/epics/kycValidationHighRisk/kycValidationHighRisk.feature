@kycValidationHighRisk
Feature: KYC Validation High Risk

    @CAR002
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    @backend-smoke
    Scenario: Access to the financial relationships privacy notice
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | first time questionnaire |
        And the user accesses to profile screen
        And the user taps on "add kyc validation high risk" profile button
        When the user accesses the privacy notice modal
        Then the user sees the following items in the screen
            | item                 |
            | privacy header       |
            | privacy content      |
            | privacy close button |

    @CAR003
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    @backend-smoke
    Scenario: Exit the financial relationships privacy notice
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | first time questionnaire |
        And the user accesses to profile screen
        And the user taps on "add kyc validation high risk" profile button
        And the user accesses the privacy notice modal
        When the user closes the privacy notice modal
        Then the user sees the following items in the screen
            | item                  |
            | header modal          |
            | title modal           |
            | icon modal            |
            | content modal         |
            | close button modal    |
            | link privacy modal    |
            | continue button modal |

    @CAR004
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Access to work and income step
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
        And the user accesses to profile screen
        When the user accesses to the "work and income" questionnaire step
        Then the user sees the following items in the screen
            | item                         |
            | work income title            |
            | work income current step     |
            | monthly income listbox       |
            | resource destination listbox |
            | document type listbox        |

    @CAR005
    @web @ios @android
    @backend(test)
    @MX @smokeTest
    @vbank
    @web-done
    Scenario: Source of income - Other
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | first time questionnaire |
        And the user accesses to profile screen
        And the user taps on "add kyc validation high risk" profile button
        And the user goes to the "use of account" step
        And the user enters to the "use of account" tooltip
        And the user selects other main source of income
        When the user fills the work income form for other source of income
        Then the user sees the following items in the screen
            | item                          |
            | document upload icon          |
            | document upload title         |
            | document upload content       |
            | document upload close button  |
            | document upload footer button |

    @CAR006
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Return to work and income step
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
        And the user accesses to profile screen
        And the user accesses to the "work and income" questionnaire step
        When the user enters to the "live or have a business abroad" tooltip
        Then the user sees the following items in the screen
            | item                         |
            | work income title            |
            | work income current step     |
            | monthly income listbox       |
            | resource destination listbox |
            | document type listbox        |

    @CAR007
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Document upload information modal
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
        And the user accesses to profile screen
        And the user accesses to the "work and income" questionnaire step
        When the user enters to the document upload modal
        Then the user sees the following items in the screen
            | item                          |
            | document upload icon          |
            | document upload title         |
            | document upload content       |
            | document upload close button  |
            | document upload footer button |

    @CAR008
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario Outline: Use of account answer <option>
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | first time questionnaire |
        And the user accesses to profile screen
        And the user taps on "add kyc validation high risk" profile button
        And the user goes to the "use of account" step
        When the user aswers "<option>" and selects the main source of income
        Then the user sees the following items in the screen
            | item                                 |
            | financial relationships close button |
            | account use title                    |
            | legal representative question        |
            | account loan question                |
            | main source of income listbox        |
            | account use continue button          |

        Examples:
            | option |
            | no     |
            | yes    |

    @CAR009
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Go to branch screen
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | first time questionnaire |
        And the user accesses to profile screen
        And the user taps on "add kyc validation high risk" profile button
        And the user goes to the "use of account" step
        And the user aswers "yes" and selects the main source of income
        When the user selects a proof of income type
        Then the user sees the following items in the screen
            | item                      |
            | branch modal header       |
            | branch modal close button |
            | branch modal title        |
            | branch modal content      |

    @CAR010
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Branch process
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | branch assistance        |
        And the user accesses to profile screen
        When the user taps on "add kyc validation high risk" profile button
        Then the user sees the following items in the screen
            | item                      |
            | branch modal header       |
            | branch modal close button |
            | branch modal title        |
            | branch modal content      |

    @CAR011
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Validate income source display
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | pep client               |
        And the user accesses to profile screen
        And the user taps on "add kyc validation high risk" profile button
        When the user selects yes to public position question
        Then the user sees the following items in the screen
            | item                           |
            | public activity title          |
            | public activity step container |

    @CAR012
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Exit the process
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | branch assistance        |
        And the user accesses to profile screen
        And the user taps on "add kyc validation high risk" profile button
        When the user exits the go branch screen
        Then the user accesses the "dashboard" screen

    @CAR013
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Personal information for non-economic dependents
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
        And the user accesses to profile screen
        And the user accesses to the "personal information" questionnaire step
        When the user selects none to economic dependents question
        Then the user sees the following items in the screen
            | item                                |
            | personal information title          |
            | personal information step container |
            | personal information question one   |
            | personal information question two   |

    @CAR014
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Personal information with economic dependents
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
        And the user accesses to profile screen
        And the user accesses to the "personal information" questionnaire step
        When the user fills the personal information form
        Then the user sees the following items in the screen
            | item                                 |
            | personal information title           |
            | personal information step container  |
            | personal information question one    |
            | personal information question two    |
            | personal information continue button |

    @CAR015
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario Outline: Work and income own business <option>
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | business owner           |
        And the user accesses to profile screen
        And the user accesses to the "work and income" questionnaire step
        When the user fills the work income form "<option>"
        Then the user sees the following items in the screen
            | item                     |
            | work income title        |
            | work income current step |
            | purpose of account       |
            | upload document link     |

        Examples:
            | option                       |
            | inside mexico                |
            | outside of mexico            |
            | inside and outside of mexico |

    @CAR016
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Validate the income proof option in the work and income form
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | employment client        |
        And the user accesses to profile screen
        And the user accesses to the "work and income" questionnaire step
        When the user fills the work income employment form
        Then the user sees the following items in the screen
            | item                     |
            | work income title        |
            | work income current step |
            | purpose of account       |
            | upload document link     |

    @CAR017
    @web @ios @android
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: Validate the document upload screen in the work and income form
        Given a user with the following criteria
            | criteria                 |
            | kyc validation high risk |
            | business owner           |
        And the user accesses to profile screen
        And the user accesses to the "work and income" questionnaire step
        And the user fills the work income form "inside and outside of mexico"
        When the user enters to the document upload modal
        Then the user sees the following items in the screen
            | item                          |
            | document upload icon          |
            | document upload title         |
            | document upload content       |
            | document upload close button  |
            | document upload footer button |
