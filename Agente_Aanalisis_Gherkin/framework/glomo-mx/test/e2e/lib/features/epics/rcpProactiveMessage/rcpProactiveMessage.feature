@rcpProactiveMessage
Feature: RCP Proactive Message

    @PDAPU001
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test) @backend-smoke
    @smokeTest
    Scenario Outline: Validate remove account limit when the account is <scenario>
        Given a user with the following criteria
            | criteria |
            | <user>   |
        When the user accesses to the first account product detail
        And the user accesses to upgrade customer from rcp message with "<scenario>" level
        Then the user sees the following items in the screen
            | item              |
            | title             |
            | paragraph         |
            | privacy term      |
            | sworn declaration |

        Examples:
            | user                         | scenario  |
            | rcp proactive message medium | medium    |
            | rcp proactive message high   | high      |

    @PDAPU002
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario Outline: Validate more info link when the account is <scenario>
        Given a user with the following criteria
            | criteria |
            | <user>   |
        When the user accesses to the first account product detail
        And the user open rcp more info modal with "<scenario>" level
        Then the user sees the following items in the screen
            | item                          |
            | rcp more info modal           |
            | rcp more info modal title     |
            | rcp more info modal content   |

        Examples:
            | user                         | scenario  |
            | rcp proactive message medium | medium    |
            | rcp proactive message high   | high      |

    @PDAPU003
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario Outline: Validate close account limit container when the account is <scenario>
        Given a user with the following criteria
            | criteria |
            | <user>   |
        When the user accesses to the first account product detail
        And the user close the account limit container "<scenario>"
        Then the user sees the following items in the screen
            | item                             | value       |
            | header                           |             |
            | account                          |             |
            | rcp proactive message <scenario> | not visible |
            | pockets card                     |             |

        Examples:
            | user                         | scenario  |
            | rcp proactive message medium | medium    |
            | rcp proactive message high   | high      |

    @PDAPU004
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Validate error when the user try to remove limit
        Given a user with the following criteria
            | criteria                   |
            | rcp proactive message high |
        When the user accesses to the first account product detail
        And the user accesses to upgrade customer from rcp message with "high" level
        Then the user sees the following items in the screen
            | item              |
            | error modal       |
            | error modal retry |
            | error modal exit  |

    @PDAPU005
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Validate error when the user try to remove limit 3 times
        Given a user with the following criteria
            | criteria                   |
            | rcp proactive message high |
        When the user accesses to the first account product detail
        And the user accesses to upgrade customer from rcp message with "high" level
        And the user retry error to remove the limit
        Then the user sees the following items in the screen
            | item                 |
            | full modal header    |
            | full continue button |
            | error icon           |

    @PDAPU006
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Validate error when the user access to account detail
        Given a user with the following criteria
            | criteria                   |
            | rcp proactive message high |
        When the user accesses to the first account product detail
        Then the user sees the following items in the screen
            | item                      |
            | account info error card   |
            | account retry button      |

    @PDAPU007
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: The user accesses the flow to remove the limit low
        Given a user with the following criteria
            | criteria                  |
            | rcp proactive message low |
        And the user accesses to the first account product detail
        When the user accesses to upgrade customer from "rcp account detail"
        Then the user sees the following items in the screen
            | item              |
            | title             |
            | paragraph         |
            | privacy term      |
            | sworn declaration |
