@featureFlags
Feature: Feature Flags

    @FF_CS001 @checksSection
    @ios @android
    @MX @backend(test)
    @vbank @vbank-modified
    @web @web-done
    @smokeTest @backend-smoke
    Scenario Outline: Account Product Detail - Check Section feature flags: <state>
        Given a user with the following criteria
            | criteria                          |
            | pesos account with checks allowed |
        When the user access account product detail with checks
        Then the user sees the following items in the screen
            | item              | value   |
            | checks operative  | <state> |

        Examples:
            | state         |
            | visible       |
            | not visible   |

    @FF_CS002 @checksSection @checks
    @ios @android @web
    @MX @backend(test)
    @vbank @vbank-modified
    @web-done
    Scenario Outline: Checks Deposit feature flags - Deposit: <state>
        Given a user with the following criteria
            | criteria                          |
            | pesos account with checks allowed |
        When the user accesses to checks operatives with checks management active
        Then the user sees the following items in the screen
            | item                      | value   |
            | main text deposit         | <state> |
            | short description deposit | <state> |

        Examples:
            | state       |
            | active      |
            | not visible |

    @FF_CS003 @checksSection @checks
    @ios @android @web
    @MX @backend(test)
    @vbank @vbank-modified
    @web-done
    Scenario Outline: Checks Deposit feature flags - Management: <state>
        Given a user with the following criteria
            | criteria                          |
            | pesos account with checks allowed |
        When the user accesses to checks operatives with checks management active
        Then the user sees the following items in the screen
            | item                         | value   |
            | main text management         | <state> |
            | short description management | <state> |

        Examples:
            | state    |
            | active   |
            | disabled |
