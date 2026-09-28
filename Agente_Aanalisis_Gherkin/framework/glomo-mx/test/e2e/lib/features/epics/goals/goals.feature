@goals
Feature: Metas Saving Goals

    @MSG002
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done @smokeTest
    @backend-smoke
    Scenario: The user access to goals dashboard from dashboard
        Given a user with the following criteria
            | criteria             |
            | with goals           |
        And the user accesses to the plan account detail
        When the user navigates until "goal detail dashboard"
        Then the user sees the following items in the screen
            | item                    |
            | goal detail end date    |
            | goal detail info        |
            | goal detail progress    |
            | goal detail card banner |
            | goal detail movements   |

    @MSG003
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user accesses the goal creation
        Given a user with the following criteria
            | criteria        |
            | with goals plan |
        And the user accesses to the plan account detail
        When the user starts goal creation from "list goals dashboard"
        Then the user sees the following items in the screen
            | item        |
            | create goal |

    @MSG004
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user accesses the goal creation from financial health
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user starts goal creation from "list goals"
        Then the user sees the following items in the screen
            | item        |
            | create goal |

    @MSG005
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user access to the goals panel without goals created
        Given a user with the following criteria
            | criteria          |
            | without list goal |
        When the user accesses to goals dashboard
        Then the user sees the following items in the screen
            | item              |
            | not created goals |

    @MSG006
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user creates a plan account and goal for the first time
        Given a user with the following criteria
            | criteria     |
            | without plan |
        When the user accesses to goals dashboard
        And the user creates a goal for the first time
        Then the user sees the following items in the screen
            | item                                     |
            | successful create goal panel info        |
            | successful create goal summary           |
            | successful create goal go to meta button |

    @MSG007
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user creates a goal
        Given a user with the following criteria
            | criteria             |
            | with plan simulation |
        And the user accesses to goals dashboard
        And the user navigates until "plan simulator has goals"
        And the user completes all form steps
        When the user completes goal creation process
        Then the user sees the following items in the screen
            | item                                     |
            | successful create goal panel info        |
            | successful create goal summary           |
            | successful create goal go to meta button |

    @MSG008
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user creates a goal width a one active contribution
        Given a user with the following criteria
            | criteria         |
            | with goals rules |
        And the user accesses to goals dashboard
        And the user navigates until "plan simulator has goals"
        And the user activates a successful periodic contribution from step 3
        And the user completes all form steps
        When the user completes goal creation process
        Then the user sees the following items in the screen
            | item                                     |
            | successful create goal panel info        |
            | successful create goal summary           |
            | successful create goal go to meta button |

    @MSG009
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user accesses more plan information
        Given a user with the following criteria
            | criteria      |
            | with one goal |
        And the user accesses to goals dashboard
        And the user navigates until "plan simulator has goals"
        When the user reviews more information about how the plan works
        Then the user sees the following items in the screen
            | item              |
            | more info header  |
            | more info panel   |
            | more info details |

    @MSG010
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user goes completes goal form - App Step 3
        Given a user with the following criteria
            | criteria      |
            | with one goal |
        And the user accesses to goals dashboard
        When the user navigates until "plan simulator has goals"
        Then the user sees the following items in the screen
            | item                     |
            | simulator faqs           |
            | simulator panel          |
            | simulator advice         |
            | simulator purchases rule |
            | simulator periodic rule  |
            | simulator info           |

    @MSG011
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user modifies the savings concept
        Given a user with the following criteria
            | criteria      |
            | with one goal |
        And the user accesses to goals dashboard
        And the user starts goal creation from "general multistep process"
        When the user edits savings goal
        Then the user sees the following items in the screen
            | item         |
            | summary info |

    @MSG012
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user edits the contribution plan for purchases
        Given a user with the following criteria
            | criteria             |
            | with plan simulation |
        And the user accesses to goals dashboard
        And the user navigates until "plan simulator has goals"
        When the user edit contribution and save
        Then the user sees the following items in the screen
            | item         |
            | summary info |

    @MSG013
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user accesses automatic contributions with active savings rules
        Given a user with the following criteria
            | criteria      |
            | with one goal |
        And the user accesses to goals dashboard
        When the user navigates until "contribution plan"
        Then the user sees the following items in the screen
            | item                              |
            | automatic contributions header    |
            | contributions text                |
            | contributions add button          |
            | contributions toggle              |
            | contributions edit contribution   |
            | contributions delete contribution |

    @MSG014
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user creates a contribution through purchases to their goal
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        And the user accesses to self driven round up from "list goals"
        When the user creates a successful rounding rule
        Then the user sees the following items in the screen
            | item                         |
            | success summary              |
            | success notification message |

    @MSG015
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user accesses automatic contributions
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user navigates until "contribution plan"
        Then the user sees the following items in the screen
            | item                           |
            | automatic contributions header |

    @MSG016
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user accesses the selection of automatic contributions
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        And the user navigates until "contribution plan"
        When the user add a new contribution formula
        Then the user sees the following items in the screen
            | item                            |
            | automatic contribution rounding |
            | automatic contribution periodic |

    @MSG017
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user adds a contribution for percentage purchases
        Given a user with the following criteria
            | criteria      |
            | without rules |
        And the user accesses to goals dashboard
        When the user create its "percentage" rule
        Then the user sees the following items in the screen
            | item                         |
            | success header               |
            | success microilustration     |
            | success title                |
            | success summary              |
            | success notification message |
            | success edit button          |

    @MSG018
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user adds a contribution for rounding purchases.
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user create its "rounding" rule
        Then the user sees the following items in the screen
            | item                         |
            | success microilustration     |
            | success title                |
            | success summary              |
            | success notification message |
            | success edit button          |

    @MSG019
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario Outline: The user edits its purchases contribution by <rule>
        Given a user with the following criteria
            | criteria          |
            | credit card goals |
        And the user accesses to goals dashboard
        When the user edits its "<rule>" rule
        Then the user sees the following items in the screen
            | item                         |
            | success microilustration     |
            | success title                |
            | success summary              |
            | success notification message |
            | success edit button          |
        Examples:
            | rule       |
            | purchases  |
            | percentage |

    @MSG020
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user visits more information modal from purchases contribution
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user reads more about plan from purchases contribution
        Then the user sees the following items in the screen
            | item                             |
            | more info header                 |
            | more info microilustration       |
            | more info title                  |
            | purchases contribution accordion |
            | periodic contribution accordion  |

    @MSG021
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user creates a periodic contribution
        Given a user with the following criteria
            | criteria      |
            | without rules |
        And the user accesses to goals dashboard
        When the user "creates" a periodic contribution
        Then the user sees the following items in the screen
            | item                                              |
            | periodic contribution success modal header        |
            | periodic contribution success modal image         |
            | periodic contribution success modal title         |
            | periodic contribution success modal summary       |
            | periodic contribution success modal accept button |

    @MSG022
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user edits a periodic contribution
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user "edits" a periodic contribution
        Then the user sees the following items in the screen
            | item                                              |
            | periodic contribution success modal header        |
            | periodic contribution success modal image         |
            | periodic contribution success modal title         |
            | periodic contribution success modal summary       |
            | periodic contribution success modal accept button |

    @MSG023
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user deletes a purchases contribution
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user deletes a purchases contribution
        Then the user sees the following items in the screen
            | item                  |
            |delete success toast   |

    @MSG024
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user makes a contribution to its goal
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user makes a "complete contribution"
        Then the user sees the following items in the screen
            | item                                     |
            | contribution success modal header        |
            | contribution success modal process       |
            | contribution success modal summary       |

    @MSG025
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user makes a withdrawal from its goal
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user makes a "complete withdrawal"
        Then the user sees the following items in the screen
            | item                                   |
            | withdrawal success modal header        |
            | withdrawal success modal process       |
            | withdrawal success modal summary       |

    @MSG026
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user edits its goal
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user edits its goal
        Then the user sees the following items in the screen
            | item                   |
            | goal detail end date   |
            | goal detail info       |
            | goal detail progress   |
            | goal detail operations |

    @MSG027
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user deletes a goal without balance
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user deletes a goal "without" balance
        Then the user sees the following items in the screen
            | item          |
            | success toast |

    @MSG028
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user deletes a goal with balance
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user deletes a goal "with" balance
        Then the user sees the following items in the screen
            | item                                 |
            | deletion success modal header        |
            | deletion success modal process       |
            | deletion success modal summary       |

    @MSG029
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user reviews goal detail after completetion
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user navigates until "goal detail"
        Then the user sees the following items in the screen
            | item                 |
            | goal completed modal |

    @MSG030
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user withdraws all savings from goal completed
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user withdraws from a goal completed
        Then the user sees the following items in the screen
            | item                                                  |
            | withdraw savings success modal process                |
            | withdraw savings success modal summary                |
            | withdraw savings success modal create new goal button |

    @MSG031
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user creates a goal after completing one
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user creates a goal after completing one
        Then the user sees the following items in the screen
            | item                                     |
            | successful create goal panel info        |
            | successful create goal summary           |
            | successful create goal go to meta button |

    @MSG032
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user leaves withdrawal process after completing a goal
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the leaves the withdrawal process
        Then the user sees the following items in the screen
            | item                   |
            | goal detail end date   |
            | goal detail info       |
            | goal detail progress   |
            | goal detail operations |

    @MSG033
    @MX
    @vbank @backend(test)
    @web @ios @android
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: The user withdraws all savings from goal expired
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user withdraws from a goal expired
        Then the user sees the following items in the screen
            | item                                         |
            | withdraw savings success modal header        |
            | withdraw savings success modal process       |
            | withdraw savings success modal summary       |

    @MSG034
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user hires plan account and creates a goal for the first time - Happy Path
        Given a user with the following criteria
            | criteria     |
            | without plan |
        And the user accesses to goals dashboard
        When the user hires plan and creates a goal
        Then the user sees the following items in the screen
            | item                                     |
            | successful create goal panel info        |
            | successful create goal summary           |
            | successful create goal go to meta button |

    @MSG035
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user with credit cards hires plan account and creates a goal
        Given a user with the following criteria
            | criteria     |
            | without plan |
        And the user accesses to goals dashboard
        When the user hires plan and creates a goal
        Then the user sees the following items in the screen
            | item                                     |
            | successful create goal panel info        |
            | successful create goal summary           |
            | successful create goal go to meta button |

    @MSG036
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user exits goals dashboard
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user goes back to previous page
        Then the user accesses the "pfm dashboard detail" screen

    @MSG037
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user minor accesses to goals and create a goal
        Given a user with the following criteria
            | criteria                       |
            | goals for minors               |
            | goals for minors without goals |
        And the user accesses to goals dashboard as minor
        And the user navigates until "account creation"
        When the user completes goal creation process
        Then the user sees the following items in the screen
            | item                                     |
            | successful create goal panel info        |
            | successful create goal summary           |
            | successful create goal go to meta button |

    @MSG038
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user can activate and deactivate the scheduled contribution toggle button
        Given a user with the following criteria
            | criteria   |
            | with goals |
        And the user accesses to goals dashboard
        When the user turns on/off scheduled contribution
        Then the user sees the following items in the screen
            | item                           |
            | automatic contributions header |
            | contributions text             |
            | contributions toggle           |
