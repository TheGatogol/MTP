@ocLoanOfferPage
Feature: OC Loan Offer Page

    @OCL001
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @smokeTest
    Scenario: The user happy path a loan offer process
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page nom          |
        And the user accesses to continue process operative "consumer loan"
        And the user next "otp" step
        When the user confirms the token signature oc loan
        Then the user sees the following items in the screen
             | item                               |
             | title success modal                |
             | amount to request success modal    |
             | date success modal                 |
             | term success modal                 |
             | monthly term success modal         |

    @OCL002
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: Immediate personal loan and life insurance.
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page revire       |
        And the user accesses to continue process operative "consumer loan"
        When the user next "terms and conditions" step
        Then the user sees the following items in the screen
             | item                                 |
             | continue button step 1               |
             | label accept terms and conditions    |
             | btn continue terms and conditions    |
             | header step 2                        |
             | text accept                          |
             | text promotion applied                |

    @OCL003
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: Happy path Payroll loan and life insurance.
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page nom          |
        And the user accesses to continue process operative "consumer loan"
        And the user next "otp" step
        When the user confirms the token signature oc loan
        Then the user sees the following items in the screen
             | item                                 |
             | title success modal                |
             | amount to request success modal    |
             | date success modal                 |
             | term success modal                 |
             | monthly term success modal         |

    @OCL004
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: Happy path Payroll loan, life insurance and unemployment insurance.
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page nom          |
        And the user accesses to continue process operative "consumer loan"
        And the user next "otp" step
        When the user confirms the token signature oc loan
        Then the user sees the following items in the screen
             | item                                 |
             | title success modal                |
             | amount to request success modal    |
             | date success modal                 |
             | term success modal                 |
             | monthly term success modal         |

    @OCL005
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: The user edits the simulator amount
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page nom          |
        And the user accesses to continue process operative "consumer loan"
        And the user next "lo quiero" step
        When the user performs the action "edit amount"
        Then the user sees the following items in the screen
             | item                                 |
             | message monthly payment including    |
             | continue button step 1               |
             | call advisor link                    |
             | notificacion message                 |

    @OCL006
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: The user edits the amount in an empty value field
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page nom          |
        And the user accesses to continue process operative "consumer loan"
        And the user next "lo quiero" step
        When the user performs the action "edit amount value empty"
        Then the user sees the following items in the screen
             | item                                 |
             | message monthly payment including    |
             | continue button step 1               |
             | call advisor link                    |
             | amount max and min                   |

    @OCL007
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: The user edits payment term
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page nom          |
        And the user accesses to continue process operative "consumer loan"
        And the user next "lo quiero" step
        When the user performs the action "edit payment term"
        Then the user sees the following items in the screen
             | item                                 |
             | message monthly payment including    |
             | continue button step 1               |
             | call advisor link                    |
             | amount max and min                   |

    @OCL008
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: Tooltip for the Fixed Annual Interest Rate section
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page nom          |
        And the user accesses to continue process operative "consumer loan"
        And the user next "open tooltip interest rate" step
        When the user exits the "exit interest rate" step
        Then the user sees the following items in the screen
             | item                                 |
             | message monthly payment including    |
             | continue button step 1               |
             | call advisor link                    |
             | amount max and min                   |

    @OCL009
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: Tooltip for the CAT section without IVA
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page nom          |
        And the user accesses to continue process operative "consumer loan"
        When the user next "open tooltip cat" step
        Then the user sees the following items in the screen
             | item                                 |
             | message monthly payment including    |
             | modal close                          |
             | generic description modal            |

    @OCL010
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: Tooltip for the section Commission for hiring excluding IVA
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page ppi          |
        And the user accesses to continue process operative "consumer loan"
        When the user next "open tooltip commission" step
        Then the user sees the following items in the screen
             | item                                 |
             | message monthly payment including    |
             | modal close                          |
             | generic description modal            |

    @OCL011
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: Help tooltip for the single payment section of life insurance
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page nom          |
        And the user accesses to continue process operative "consumer loan"
        When the user next "open tooltip life insurance" step
        Then the user sees the following items in the screen
             | item                                 |
             | message monthly payment including    |
             | modal close                          |
             | generic description modal    |

    @OCL012
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: Help tooltip for the Lump Sum Payment section of life and unemployment insurance
        Given a user with the following criteria
             | criteria                                                                     |
             | oc loan pre approved offer page life and unemployment insurance complete     |
        And the user accesses to continue process operative "consumer loan"
        When the user next "open tooltip life and unemployment insurance" step
        Then the user sees the following items in the screen
             | item                                 |
             | message monthly payment including    |
             | modal close                          |
             | generic description modal            |

    @OCL013
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: Link to authorization to consult my credit history
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page ppi          |
        And the user accesses to continue process operative "consumer loan"
        When the user next "open authorization my credit history" step
        Then the user sees the following items in the screen
             | item                                 |
             | message monthly payment including    |
             | modal close                          |

    @OCL014
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: Modify the Your Loan section of the summary screen
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page ppi          |
        And the user accesses to continue process operative "consumer loan"
        And the user next "summary" step
        When the user performs the action "edit step 1"
        Then the user sees the following items in the screen
                | item                                 |
                | message monthly payment including    |
                | continue button step 1               |
                | call advisor link                    |

    @OCL015
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: Modify the Terms and Conditions section of the summary screen
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page ppi          |
        And the user accesses to continue process operative "consumer loan"
        And the user next "summary" step
        When the user performs the action "edit step 2"
        Then the user sees the following items in the screen
                | item                                 |
                | message monthly payment including    |
                | continue button step 1               |
                | call advisor link                    |

    @OCL016
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: OTP screen from summary screen
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page ppi          |
        And the user accesses to continue process operative "consumer loan"
        When the user next "otp" step
        Then the user sees the following items in the screen
                | item                                  |
                | btn otp                               |

    @OCL017
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: Staying up-to-date opens new doors for you
        Given a user with the following criteria
             | criteria                                            |
             | oc loan pre approved offer page bad credit bureau   |
        And the user accesses to continue process operative "consumer loan"
        And the user next "otp" step
        When the user confirms the token signature oc loan
        Then the user sees the following items in the screen
             | item                               |
             | generic description modal          |

    @OCL018
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: Exit button from the screen Staying up-to-date opens new doors
        Given a user with the following criteria
            | criteria                                     |
            | oc loan pre approved offer page ppi          |
        And the user accesses to continue process operative "consumer loan"
        And the user next "otp" step
        And the user confirms the token signature oc loan
        When the user exits the "exit btn accepted" step
        Then the user sees the "contract product section" screen

    @OCL019
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: Continue with operation button
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page ppi          |
        And the user accesses to continue process operative "consumer loan"
        And the user next "terms and conditions" step
        When the user exits the "exit flow" step
        Then the user sees the following items in the screen
             |  item                                 |
             |  modal close                          |

    @OCL020
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: Happy path from Sustainable Use
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page ppi          |
        And the user accesses to continue process operative "consumer loan"
        And the user next "otp" step
        When the user confirms the token signature oc loan
        Then the user sees the following items in the screen
             | item                               |
             | title success modal                |
             | amount to request success modal    |
             | date success modal                 |
             | term success modal                 |
             | monthly term success modal         |

    @OCL021
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: Close button on the Explore Products screen
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page ppi          |
        And the user accesses to continue process operative "consumer loan"
        And the user next "catalog tab" step
        And the user accesses to product catalog
        And the user selected "sustainable products gas" sustainable
        When the user close page simulator
        Then the user sees the following items in the screen
             | item                               |
             | input amount                       |

    @OCL022
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario Outline: Change the percentage from <scenario> screen
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page ppi          |
        And the user accesses to continue process operative "consumer loan"
        And the user next "catalog tab" step
        And the user goes to the sustainable simulator
        When the user changed percentage "<range>"
        Then the user sees the following items in the screen
             | item                                 |
             | header                               |
             | input amount request                 |
        Examples:
            | scenario     | range |
            | 0% to 25%    | 25    |
            | 25% to 50%   | 50    |
            | 50% to 80%   | 80    |
            | 80% to 100%  | 100   |

    @OCL023
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: Amount less than the minimum
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page ppi          |
        And the user accesses to continue process operative "consumer loan"
        And the user next "lo quiero" step
        When the user performs the action "edit amount minimum value"
        Then the user sees the following items in the screen
             | item                                 |
             | message monthly payment including    |
             | continue button step 1               |
             | call advisor link                    |
             | amount max and min                   |

    @OCL024
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    @backend-smoke
    Scenario: Amount greater than the maximum
        Given a user with the following criteria
             | criteria                                     |
             | oc loan pre approved offer page ppi          |
        And the user accesses to continue process operative "consumer loan"
        And the user next "lo quiero" step
        When the user performs the action "edit amount maximum value"
        Then the user sees the following items in the screen
             | item                                 |
             | message monthly payment including    |
             | continue button step 1               |
             | call advisor link                    |
             | amount max and min                   |
