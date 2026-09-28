@redirectCallMeBack @leadMortgageRemoteBanker
Feature: Redirect Call Me Back Lead Mortgage Remote Banker

    @CMBMR002
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done @smokeTest
    Scenario: The user with assistance manager accesses go to terms and conditions mortgage
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
        And the user accesses the lead mortgage offer
        When the user continues to the terms and conditions section
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | close button |

    @CMBMR003
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: The user with assistance manager accesses Summary Lead Mortgage
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
        And the user accesses the lead mortgage offer
        When the user completes the simulation and accepts the terms and conditions
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | close button |

    @CMBMR004
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: User with assistance manager accesses go to Mortgage Success screen
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
            | remote banking user        |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 10   |
            | month | 4    |
            | year  | 2024 |
        And the user accesses the lead mortgage offer
        When the user accesses to lead mortgage review
        Then the user sees the following items in the screen
            | item                 | value   |
            | sticky call atention |         |

    @CMBMR005
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: The user with assistance manager sees otp Lead Mortgage
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
            | remote banking user        |
        And the user accesses the lead mortgage offer
        When the user apply for a lead mortgage
        Then the user sees the following items in the screen
            | item                  |
            | header token          |
            | back token            |
            | cancel button token   |
            | continue button token |

    @CMBMR006
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: The user calls assistance manager after hours from checkbox section
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
            | remote banking user        |
        And the user starts the application at date:
            | hour  | 18   |
            | day   | 14   |
            | month | 8    |
            | year  | 2024 |
        And the user accesses the lead mortgage offer
        And the user selects mortgage options
        And the user accesses to I want to call a personal advisor "link"
        When the user confirms the call
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | image             |
            | modal description |
            | confirm button    |

    @CMBMR007
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: The user schedule a call with an assistance manager after hours
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
            | remote banking user        |
        And the user starts the application at date:
            | hour  | 18   |
            | day   | 14   |
            | month | 8    |
            | year  | 2024 |
        And the user accesses the lead mortgage offer
        And the user selects mortgage options
        And the user accesses to I want to call a personal advisor "link"
        When the user confirms the call
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | image             |
            | modal description |
            | confirm button    |

    @CMBMR008
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: The user confirms the call with an assistance manager
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
            | account                    |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 10   |
            | month | 4    |
            | year  | 2024 |
        And the user accesses the lead mortgage offer
        And the user selects mortgage options
        And the user accesses to I want to call a personal advisor "link"
        When the user finish assistance manager
        Then the user accesses the "lead mortgage" screen

    @CMBMR009
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: The user accesses to I want an advisor to call me with previous request
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
            | account                    |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 10   |
            | month | 4    |
            | year  | 2024 |
        And the user accesses the lead mortgage offer
        And the user selects mortgage options
        And the user accesses to I want to call a personal advisor "link"
        And the user finish assistance manager
        And the user selects mortgage options
        When the user accesses to I want to call a personal advisor "link"
        Then the user sees the following items in the screen
            | item              |
            | header check      |
            | image check icon  |
            | description       |
            | understood button |

    @CMBMR010
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    @alternate-scenarios-smoke
    Scenario Outline: Access to i want to call a personal advisor from <option> - <schedule>
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
            | <scenery>                  |
        And the user starts the application at date:
            | day   | 8      |
            | month | 4      |
            | year  | 2024   |
            | hour  | <hour> |
        And the user accesses the lead mortgage offer
        And the user selects mortgage options
        When the user accesses to I want to call a personal advisor "<option>"
        Then the user sees the following items in the screen
            | item          |
            | header <page> |
            | image <page>  |
            | <item1>       |
            | <item2>       |
            | <item3>       |
        Examples:
            | schedule                          | hour | scenery  | option | page            | item1                       | item2        | item3                          |
            | Before starting the service hours | 6    | accounts | link   | schedule a call | description schedule a call | radio button | confirm button schedule a call |
            | Before ending the schedule        | 17   | account  | link   | check           | description                 | timer        | understood button              |
            | After starting the schedule       | 10   | account  | link   | check           | description                 | timer        | understood button              |
            | After ending the schedule         | 18   | accounts | link   | schedule a call | description schedule a call | radio button | confirm button schedule a call |
            | Customer after hours              | 20   | accounts | link   | schedule a call | description schedule a call | radio button | confirm button schedule a call |

    @CMBMR011
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: The user selects a valid date in off hours
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
        And the user starts the application at date:
            | day   | 6    |
            | month | 6    |
            | year  | 2024 |
            | hour  | 6    |
        And the user accesses the lead mortgage offer
        And the user selects mortgage options
        And the user accesses to I want to call a personal advisor "link"
        When the user selects schedule
        Then the user sees the following items in the screen
            | item                           |
            | header schedule a call         |
            | image schedule a call          |
            | description schedule a call    |
            | radio button                   |
            | confirm button schedule a call |

    @CMBMR012
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    @alternate-scenarios-smoke
    Scenario: Access to i want to call a personal advisor from header - non-working day
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
            | account                    |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 14   |
            | month | 7    |
            | year  | 2024 |
        And the user accesses the lead mortgage offer
        And the user selects mortgage options
        When the user accesses to I want to call a personal advisor "link"
        Then the user sees the following items in the screen
            | item                 |
            | header not available |
            | button back          |
            | text not available   |
            | button call add      |
            | button exit          |

    @CMBMR013
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    @alternate-scenarios-smoke
    Scenario: Access to days to call a personal advisor from the header - non-working day
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
            | account                    |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 14   |
            | month | 7    |
            | year  | 2024 |
        And the user accesses the lead mortgage offer
        And the user selects mortgage options
        And the user accesses to I want to call a personal advisor "link"
        When the user access day of the call
        Then the user sees the following items in the screen
            | item                           |
            | header schedule a call         |
            | image schedule a call          |
            | description schedule a call    |
            | radio button                   |
            | confirm button schedule a call |

    @CMBMR014
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    @alternate-scenarios-smoke
    Scenario: Select a day to call a personal advisor from the header - non-working day
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
            | account                    |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 14   |
            | month | 7    |
            | year  | 2024 |
        And the user accesses the lead mortgage offer
        And the user selects mortgage options
        And the user accesses to I want to call a personal advisor "link"
        And the user access day of the call
        When the user selects schedule
        Then the user sees the following items in the screen
            | item                           |
            | header schedule a call         |
            | image schedule a call          |
            | description schedule a call    |
            | radio button                   |
            | confirm button schedule a call |

    @CMBMR015
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    @alternate-scenarios-smoke
    Scenario: Confirm call to personal advisor from header - non-working day
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
            | account                    |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 14   |
            | month | 7    |
            | year  | 2024 |
        And the user accesses the lead mortgage offer
        And the user selects mortgage options
        And the user accesses to I want to call a personal advisor "link"
        And the user access day of the call
        When the user confirms the call
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | image             |
            | modal description |
            | confirm button    |

    @CMBMR016
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: The user confirms the call with an assistance manager after hours
        Given a user with the following criteria
            | criteria                   |
            | remote assistance mortgage |
            | remote banking user        |
        And the user starts the application at date:
            | hour  | 18   |
            | day   | 14   |
            | month | 8    |
            | year  | 2024 |
        And the user accesses the lead mortgage offer
        And the user selects mortgage options
        And the user accesses to I want to call a personal advisor "link"
        And the user confirms the call
        When the user finish assistance manager
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | close button |
