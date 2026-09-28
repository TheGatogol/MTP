@pfm @pfmDashboard
Feature: PFM Dashboard

    @DDE001
    @ios @android @web
    @MX @smokeTest
    @backend(test) @vbank
    @web-done
    Scenario: PFM Dashboard - Access link incomes
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        When the user accesses PFM categorization from "link incomes"
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | header back button          |
            | elements tab                |
            | movements tab               |
            | group detail data           |
            | group detail total amount   |
            | category tab                |

    @DDE002
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: PFM Dashboard - Access link saving
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        When the user accesses PFM categorization from "link saving"
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | header back button          |
            | elements tab                |
            | movements tab               |
            | group detail data           |
            | group detail total amount   |
            | category tab                |

    @DDE003
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: PFM Dashboard - Access link investment
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        When the user accesses PFM categorization from "link investment"
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | header back button          |
            | elements tab                |
            | movements tab               |
            | group detail data           |
            | group detail total amount   |
            | category tab                |

    @DDE004
    @ios @android @web
    @MX
    @backend(test) @vbank @spherica
    @web-done
    Scenario: PFM Dashboard -  Error accessing the View Expenses and Income screen
        Given a user with the following criteria
            | criteria                  |
            | pfm spherica error         |
        When the user accesses dashboard detail PFM "footer"
        Then the user sees the following items in the screen
            | item                      |
            | header products           |
            | header settings access    |
            | pfm period dates          |
            | error message text        |
            | error message link        |

    @DDE005
    @ios @android @web
    @MX
    @backend(test) @vbank @spherica
    @web-done
    Scenario: PFM Dashboard - Access Expenses from the Featured module
        Given a user with the following criteria
            | criteria              |
            | pfm spherica user     |
        When the user accesses dashboard detail PFM "footer"
        And the user selects incomes from the featured module
        Then the user sees the following items in the screen
            | item                  |
            | incomes header text   |
            | incomes header link   |
            | incomes content       |

    @DDE006
    @ios @android @web
    @MX
    @backend(test) @vbank @spherica
    @web-done
    Scenario: PFM Dashboard - Error loading list of movements
        Given a user with the following criteria
            | criteria                  |
            | pfm spherica error        |
        When the user accesses dashboard detail PFM "footer"
        Then the user sees the following items in the screen
            | item                      |
            | header products           |
            | header settings access    |
            | pfm period dates          |
            | error message list title  |
            | error message list text   |
            | error message list link   |

    @DDE007
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done @tmpExclude @JIRA.GLOMOMX-249029
    Scenario: PFM Dashboard - Browse welcome tooltips
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        And the user accesses dashboard detail PFM "onboarding footer"
        When the user closes onboarding modal and tooltips
        Then the user sees the following items in the screen
            | item                                 |
            | Header                               |
            | PFM period dates                     |
            | Income title                         |
            | Incomes progress chart               |
            | Expenses title                       |
            | Expenses aggregated amount           |
            | Expenses progress chart              |
            | Expenses view more access            |

    @DDE008
    @ios @android @web
    @MX
    @backend(test) @vbank @spherica
    @web-done
    Scenario: PFM Dashboard with a least one expense category
        Given a user with the following criteria
            | criteria              |
            | pfm spherica user     |
        When the user accesses dashboard detail PFM "footer"
        And the user accesses to dashboard from PFM Dashboard
        Then the user accesses the "dashboard" screen
