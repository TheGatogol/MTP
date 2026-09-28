@investAdvisory @investAdvisoryPortfolio
Feature: OC Investment Portfolio Onboarding

    @ONBO001
    @vbank @MX
    @ios @android @web @smokeTest
    @backend(test) @web-done
    Scenario: Profiling Test Validation
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user completes his profiling
        Then the user sees the following items in the screen
            | item                       |
            | questionnaire resume label |
            | experience step title      |
            | your inversion label       |
            | preferences label          |
            | known profile button       |

    @ONBO002
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validation of the "Edit" link from each section
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user completes and edits "all" sections of the profile
        Then the user sees the following items in the screen
            | item                       |
            | questionnaire resume label |
            | experience resume label    |
            | your inversion label       |
            | preferences label          |
            | known profile button       |

    @ONBO003
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validation of the "Edit" link from the summary screen
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user completes and edits "some" sections of the profile
        Then the user sees the following items in the screen
            | item                              |
            | investment profile description    |
            | continue with this profile button |
            | profile again link                |

    @ONBO004
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validation of the correct selection of the checkboxes
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user selects all the options of experience step
        Then the user sees the following items in the screen
            | item                           |
            | experience resume label        |
            | initial amount header          |
            | initial amount field           |
            | initial amount disabled button |

    @ONBO005
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the risk level "No losses"
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user completes his profile with a risk level "no losses"
        Then the user sees the following items in the screen
            | item                       |
            | questionnaire resume label |
            | experience resume label    |
            | your inversion label       |
            | preferences label          |
            | risk label                 |
            | known profile button       |

    @ONBO006
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the risk level "Lower risk and return"
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user completes his profile with a risk level "lower"
        Then the user sees the following items in the screen
            | item                       |
            | questionnaire resume label |
            | experience resume label    |
            | your inversion label       |
            | preferences label          |
            | risk label lower           |
            | known profile button       |

    @ONBO007
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the risk level "Moderate risk and return"
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user completes his profile with a risk level "moderate"
        Then the user sees the following items in the screen
            | item                       |
            | questionnaire resume label |
            | experience resume label    |
            | your inversion label       |
            | preferences label          |
            | risk label moderate        |
            | known profile button       |

    @ONBO008
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the risk level "High risk and return"
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user completes his profile with a risk level "high"
        Then the user sees the following items in the screen
            | item                       |
            | questionnaire resume label |
            | experience resume label    |
            | your inversion label       |
            | preferences label          |
            | risk label high            |
            | known profile button       |

    @ONBO009
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate that the attitude towards loss is "withdrawal"
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user completes his profiling
        Then the user sees the following items in the screen
            | item                       |
            | questionnaire resume label |
            | experience resume label    |
            | your inversion label       |
            | preferences label          |
            | attitude label             |
            | known profile button       |

    @ONBO010
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate that the attitude towards loss is "Keep me"
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user completes his profiling
        Then the user sees the following items in the screen
            | item                       |
            | questionnaire resume label |
            | experience resume label    |
            | your inversion label       |
            | preferences label          |
            | attitude label keep me     |
            | known profile button       |

    @ONBO011
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate that the attitude towards loss is "Invest more"
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user completes his profiling
        Then the user sees the following items in the screen
            | item                       |
            | questionnaire resume label |
            | experience resume label    |
            | your inversion label       |
            | preferences label          |
            | attitude label invest more |
            | known profile button       |

    @ONBO012
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the "Conservative" profile
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user accepts his profiling "conservative"
        Then the user sees the following items in the screen
            | item                       |
            | proposal detail header     |
            | strategies label           |
            | capital preservation label |
            | flow generation label      |
            | capital growth label       |
            | start hiring button        |

    @ONBO013
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the "Traditional" profile
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user accepts his profiling "traditional"
        Then the user sees the following items in the screen
            | item                   |
            | proposal detail header |
            | strategies label       |
            | liquidez label         |
            | start hiring button    |

    @ONBO014
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the "Moderate" profile
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user accepts his profiling "moderate"
        Then the user sees the following items in the screen
            | item                       |
            | proposal detail header     |
            | strategies label           |
            | capital preservation label |
            | flow generation label      |
            | capital growth label       |
            | start hiring button        |

    @ONBO015
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the "Aggressive" profile
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user accepts his profiling "aggressive"
        Then the user sees the following items in the screen
            | item                       |
            | proposal detail header     |
            | strategies label           |
            | capital preservation label |
            | flow generation label      |
            | capital growth label       |
            | start hiring button        |

    @ONBO016
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the operation of the "Reprofile me" link
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user accepts her profile and fills out the form again
        Then the user sees the following items in the screen
            | item                         |
            | questionnaire invest header  |
            | experience step title active |
            | experience step instruction  |
            | continue button disabled     |

    @ONBO017
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate custom proposal
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user accepts his profiling "conservative" then "start"
        Then the user sees the following items in the screen
            | item                           |
            | invest hiring header           |
            | associated account title       |
            | associated account instruction |
            | account label                  |

    @ONBO018
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the operation of the edit icon on the "Custom proposal" screen
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user accepts his profiling "conservative" then "edit"
        Then the user sees the following items in the screen
            | item                       |
            | proposal detail header     |
            | strategies label           |
            | capital preservation label |
            | flow generation label      |
            | capital growth label       |
            | start hiring button        |

    @ONBO019
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the operation of the "View scenarios" link on the "Custom proposal" screen
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user accepts their profiles and views the scenarios
        Then the user sees the following items in the screen
            | item                       |
            | proposal detail header     |
            | strategies label           |
            | capital preservation label |
            | flow generation label      |
            | capital growth label       |
            | start hiring button        |

    @ONBO020
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the detail of "Capital Preservation, Cash Flow Generation, Capital Growth"
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user accepts the profile and validates the "details" of the proposal
        Then the user sees the following items in the screen
            | item                         |
            | strategy details label       |
            | capital growth fund name     |
            | capital growth fund key      |
            | capital growth fund schedule |
            | dc document                  |
            | mr document                  |
            | pr document                  |

    @ONBO021
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the "Liquidity" detail
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user accepts the profile and validates the "detail" of the proposal
        Then the user sees the following items in the screen
            | item                    |
            | liquidity label         |
            | strategy details label  |
            | liquidity fund name     |
            | liquidity fund key      |
            | liquidity fund schedule |
            | dc document             |
            | mr document             |
            | pr document             |

    @ONBO022
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the exit modal when leaving the "Experience (1 of 7)" screen when changes have been made
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user selling the profiling process from "experience"
        Then the user sees the following items in the screen
            | item                       |
            | questionnaire resume label |
            | modal exit hiring header   |
            | modal exit hiring continue |
            | modal exit hiring return   |

    @ONBO023
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the exit modal when leaving the summary screen
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user selling the profiling process from "amount"
        Then the user sees the following items in the screen
            | item                       |
            | questionnaire resume label |
            | modal exit hiring header   |
            | modal exit hiring continue |
            | modal exit hiring return   |

    @ONBO024
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the exit modal when leaving the profiling result screen
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user selling the profiling process from "success"
        Then the user sees the following items in the screen
            | item                       |
            | questionnaire resume label |
            | modal exit hiring header   |
            | modal exit hiring continue |
            | modal exit hiring return   |

    @ONBO025
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the amount is not available in accounts
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user enters an amount less than the minimum allowed in the initial amount step
        Then the user sees the following items in the screen
            | item                           |
            | initial amount field           |
            | text input notification error  |
            | initial amount disabled button |

    @ONBO026
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the error message when the account level is not updated
        Given a user with the following criteria
            | criteria                         |
            | invest advisory error onboarding |
        And the user accesses contract product section
        When the user selects payment plan offer "invest advisory"
        Then the user sees the following items in the screen
            | item                             |
            | modal warning operation header   |
            | modal warning operation continue |
            | modal warning operation return   |

    @ONBO027
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    @no-spherica
    Scenario: Validate the error message when there are no beneficiaries in the account
        Given a user with the following criteria
            | criteria                         |
            | invest advisory error onboarding |
        And the user accesses contract product section
        When the user selects payment plan offer "invest advisory"
        Then the user sees the following items in the screen
            | item                             |
            | modal warning operation header   |
            | modal warning operation continue |
            | modal warning operation return   |

    @ONBO028
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    @no-spherica
    Scenario: Validate the error message when you do not have 100% of beneficiaries in the account
        Given a user with the following criteria
            | criteria                         |
            | invest advisory error onboarding |
        And the user accesses contract product section
        When the user selects payment plan offer "invest advisory"
        Then the user sees the following items in the screen
            | item                             |
            | modal warning operation header   |
            | modal warning operation continue |
            | modal warning operation return   |

    @ONBO029
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate error when the amount to be invested is greater than the available amount
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user tries to invest as little as posible "accepting" the assigned profile
        Then the user sees the following items in the screen
            | item                             |
            | modify amount modal header       |
            | modify amount modal close        |
            | modify amount modal title        |
            | modify amount modal warning icon |
            | modify amount modal text         |
            | modify amount modal input        |
            | modify amount modal input error  |
            | modify amount modal notification |
            | modify amount modal continue     |

    @ONBO030
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate error when the amount is not available in the account
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user "with not enough balance enters" the amount in the initial amount step
        Then the user sees the following items in the screen
            | item                          |
            | text input notification error |

    @ONBO031
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate error in custom proposal when the amount is not available in the account
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user tries to invest as little as posible "trying to accept" the assigned profile
        Then the user sees the following items in the screen
            | item                                     |
            | unavailable operation modal header       |
            | unavailable operation modal close        |
            | unavailable operation modal warning icon |
            | unavailable operation modal title        |
            | unavailable operation modal text         |
            | unavailable operation modal exit         |
            | unavailable operation modal call         |

    @ONBO032
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the risk level high risk and return from proposal
        Given a user with the following criteria
            | criteria                           |
            | invest advisory portfolio proposal |
        And the user selects payment plan offer "invest advisory"
        When the user completes his profile with a risk level "moderate"
        Then the user sees the following items in the screen
            | item                       |
            | questionnaire resume label |
            | experience resume label    |
            | your inversion label       |
            | preferences label          |
            | risk label moderate        |
            | known profile button       |

    @ONBO033
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Return to the beginning from the personalized proposal
        Given a user with the following criteria
            | criteria                           |
            | invest advisory portfolio proposal |
        And the user selects payment plan offer "invest advisory"
        When the user accepts their profiles and backs to personalized proposal
        Then the user sees the following items in the screen
            | item                              |
            | investment profile description    |
            | continue with this profile button |
            | profile again link                |

    @ONBO034
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: The user exits the process without making any changes
        Given a user with the following criteria
            | criteria                           |
            | invest advisory portfolio proposal |
        And the user selects payment plan offer "invest advisory"
        When the user goes back to previous page
        Then the user sees the "contract product section" screen

    @ONBO035
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Access BBVA invest without an n4 account
        Given a user with the following criteria
            | criteria                           |
            | invest advisory portfolio proposal |
        And the user accesses contract product section
        When the user selects payment plan offer "invest advisory"
        Then the user sees the following items in the screen
            | item                             |
            | modal warning operation header   |
            | modal warning operation continue |
            | modal warning operation return   |
            | modal warning exit               |
            | modal warning title              |

    @ONBO036
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Access I want an advisor to call me from BBVA Invest
        Given a user with the following criteria
            | criteria                           |
            | invest advisory portfolio proposal |
        And the user starts the application at date:
            | hour  | 18   |
            | day   | 27   |
            | month | 04   |
            | year  | 2026 |
        And the user selects payment plan offer "invest advisory"
        When the user user completes his profiling and access to call me back
        And the user accesses to I want to call a personal advisor "proposal"
        Then the user accesses the "call me back" screen

    @ONBO037
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Access Blue through BBVA Invest
        Given a user with the following criteria
            | criteria                           |
            | invest advisory portfolio proposal |
        And the user selects payment plan offer "invest advisory"
        When the user fills out profiling questionnaire the "experience" step
        And the user access blue "proposal"
        Then the user accesses the "digital butler" screen
