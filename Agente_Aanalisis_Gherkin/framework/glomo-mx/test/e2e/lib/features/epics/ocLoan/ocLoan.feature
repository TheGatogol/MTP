@ocLoan
Feature: Oc Loan

    @OCLOAN001
    @MX @web @vbank @backend(test)
    @ios @android @web-done @backend-smoke
    Scenario Outline: The user with <case> accesses from deeplink
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to dashboard
        When the user goes to "oc loan web plus glomo" using deeplink navigation
        Then the user sees the following items in the screen
            | item                 | visible   |
            | header               |           |
            | loan detail          |           |
            | terms and conditions |           |
            | insurance coverage   | <visible> |

        Examples:
            | case                     | user                     | visible |
            | PPI offer                | ppi offer                |         |
            | NOM offer with insurance | nom offer with insurance | visible |

    @OCLOAN003
    @MX @web @vbank @backend(test)
    @ios @android @web-done @backend-smoke
    Scenario Outline: The user with <case> alternative accesses from deeplink
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to dashboard
        When the user goes to "oc loan web plus glomo" using deeplink navigation
        And the user accesses the details of the credit history authorization and then returns
        Then the user sees the following items in the screen
            | item                 | visible   |
            | header               |           |
            | loan detail          |           |
            | terms and conditions |           |
            | insurance coverage   | <visible> |

        Examples:
            | case                     | user                     | visible |
            | PPI offer                | ppi offer                |         |
            | NOM offer with insurance | nom offer with insurance | visible |

    @OCLOAN004
    @MX @web @vbank @backend(test)
    @ios @android @web-done @backend-smoke
    Scenario Outline: The user with <case> accepts the terms and conditions
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to dashboard
        When the user goes to "oc loan web plus glomo" using deeplink navigation
        And the user with "<user>" accepts the conditions
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | loan detail          |
            | terms and conditions |
            | continue button      |

        Examples:
            | case                     | user                     |
            | PPI offer                | ppi offer                |
            | NOM offer with insurance | nom offer with insurance |

    @OCLOAN005
    @MX @web @vbank @backend(test)
    @ios @android @web-done @backend-smoke
    Scenario Outline: The user with <case> continues with the contracting process
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to dashboard
        When the user goes to "oc loan web plus glomo" using deeplink navigation
        And the user with "<user>" continues with the contracting process
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | loan detail                  |
            | terms and conditions summary |
            | confirm button               |

        Examples:
            | case                     | user                     |
            | PPI offer                | ppi offer                |
            | NOM offer with insurance | nom offer with insurance |

    @OCLOAN006
    @MX @web @vbank @backend(test)
    @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    Scenario Outline: The user with <case> enter the otp
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to dashboard
        When the user goes to "oc loan web plus glomo" using deeplink navigation
        And the user with "<user>" enters the otp
        Then the user sees the following items in the screen
            | item                 |
            | receipt header       |
            | receipt panel        |
            | loan contract detail |
            | email notification   |
            | actions buttons      |

        Examples:
            | case                     | user                     |
            | PPI offer                | ppi offer                |
            | NOM offer with insurance | nom offer with insurance |

    @OCLOAN007
    @MX @web @vbank @backend(test)
    @ios @android @tmpExclude @JIRA.GLOMOMX-254311
    @smokeTest
    Scenario: The user opens the credit history authorization
        Given a user with the following criteria
            | criteria  |
            | PPI offer |
        And the user accesses to dashboard
        When the user goes to "oc loan web plus glomo" using deeplink navigation
        And the user opens the credit history authorization
        Then the user sees the following items in the screen
            | item            |
            | documents modal |

    @OCLOAN008
    @MX @web @vbank @backend(test)
    @ios @android @web-done
    Scenario: The user tries to enters the loan details again
        Given a user with the following criteria
            | criteria  |
            | PPI offer |
        And the user accesses to dashboard
        When the user goes to "oc loan web plus glomo" using deeplink navigation
        And the user tries to enters the loan details again
        Then the user sees the following items in the screen
            | item        |
            | error modal |
