@dashboard_united_linked
Feature: Dashboard United Linked

    @DUL001 @vbank
    @MX @web @android @ios
    @smokeTest
    @tmpExclude @JIRA.GLOMOMX-254311
    @backend(test) @alternate-scenarios-smoke
    Scenario: Only one product in United Linked module
        Given a user with the following criteria
            | criteria                |
            | dashboard united linked |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item             | currency |
            | header           |          |
            | greeting         |          |
            | help button      |          |
            | sidebar          |          |
            | title            | MXN      |
            | alias            | MXN      |
            | masked amount    | MXN      |
            | number           | MXN      |
            | label amount     | MXN      |
            | show/hide button | MXN      |

    @DUL002 @vbank
    @MX @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311
    @backend(test) @alternate-scenarios-smoke
    Scenario: More than one product in United Linked module
        Given a user with the following criteria
            | criteria                |
            | dashboard united linked |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item             | currency |
            | header           |          |
            | greeting         |          |
            | help button      |          |
            | sidebar          |          |
            | title            | MXN      |
            | title amount     | MXN      |
            | alias            | MXN      |
            | masked amount    | MXN      |
            | number           | MXN      |
            | label amount     | MXN      |
            | show/hide button | MXN      |

    @DUL003 @vbank
    @MX @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311
    @backend(test) @alternate-scenarios-smoke
    Scenario: Show & Hide balances in United Linked module
        Given a user with the following criteria
            | criteria                |
            | dashboard united linked |
        When the user accesses to dashboard
        And the user shows balances in "MXN" currency
        Then the user sees the following items in the screen
            | item             | currency |
            | header           |          |
            | greeting         |          |
            | help button      |          |
            | sidebar          |          |
            | title            | MXN      |
            | alias            | MXN      |
            | amount           | MXN      |
            | number           | MXN      |
            | label amount     | MXN      |
            | show/hide button | MXN      |

    @DUL004 @vbank
    @MX @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311
    @backend(test) @alternate-scenarios-smoke
    Scenario Outline: Verify "<sections>" section
        Given a user with the following criteria
            | criteria              |
            | dashboard unit linked |
            | account dolars        |
            | credits cards         |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item             | currency   |
            | header           |            |
            | greeting         |            |
            | help button      |            |
            | sidebar          |            |
            | alias            | <currency> |
        Examples:
            | sections           | currency |
            | credit             | MXN      |
            | dashboard          | MXN      |
            | common account     | MXN      |
            | dolars account     | USD      |
            | cards section      | MXN      |

    @DUL005
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank
    @MX
    @backend(test) @alternate-scenarios-smoke
    Scenario: Verify term investments section
        Given a user with the following criteria
            | criteria              |
            | dashboard unit linked |
            | term investments      |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | greeting              |
            | help button           |
            | sidebar               |
            | funds sub header text |
            | first fund type       |
            | first fund amount     |

    @DUL006
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank
    @MX
    @backend(test) @alternate-scenarios-smoke
    Scenario: Verify insurance section
        Given a user with the following criteria
            | criteria              |
            | dashboard unit linked |
            | term investments      |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | greeting      |
            | help button   |
            | sidebar       |
            | header title  |
            | product title |

    @DUL007
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank
    @MX
    @backend(test) @alternate-scenarios-smoke
    Scenario: Verify multistrategy section
        Given a user with the following criteria
            | criteria               |
            | dashboard unit linked  |
            | multiple sections      |
            | multistrategy          |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item          | currency   |
            | header        |            |
            | greeting      |            |
            | help button   |            |
            | sidebar       |            |
            | title         |            |
            | multistrategy |            |

    @DUL008
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank
    @MX
    @backend(test) @alternate-scenarios-smoke
    Scenario: Verify credits section
        Given a user with the following criteria
            | criteria              |
            | dashboard unit linked |
            | credits banner        |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | greeting             |
            | help button          |
            | sidebar              |
            | loan sub header text |
            | first loan amount    |

    @DUL009
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank
    @MX
    @backend(test) @alternate-scenarios-smoke
    Scenario: Unit linked - Loading Error
        Given a user with the following criteria
            | criteria               |
            | dashboard unit linked  |
            | multiple sections      |
            | multistrategy          |
        When the user accesses to dashboard
        And the user shows balances in unit linked section
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | retry error      |
            | loading error    |
