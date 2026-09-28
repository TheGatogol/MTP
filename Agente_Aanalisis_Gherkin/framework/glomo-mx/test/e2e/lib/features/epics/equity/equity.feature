@equity
Feature: Equity

    @PC002
    @MX @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke @smokeTest
    Scenario: Acceses to more info
        Given a user with the following criteria
            | criteria |
            | equity   |
        And the user accesses to equity
        When the user accesses to equity detail
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | general header             |
            | contract product           |
            | contract alias             |
            | contract number            |
            | contract number copy       |
            | management service label   |
            | management service tooltip |
            | associate products header  |
            | current account            |
            | current account copy       |
            | header button back         |

    @PC003
    @MX @backend(test)
    @vbank
    @web @android @ios
    @backend-smoke
    @web-done
    Scenario: Equity detail transfer
        Given a user with the following criteria
            | criteria |
            | equity   |
        And the user accesses to equity
        When the user accesses to equity transfer
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | select product step        |
            | transfer destination step  |
            | transfer amount step       |

    @PC004
    @MX @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario: Equity detail assistance - <Coming Soon>
        Given a user with the following criteria
            | criteria |
            | equity   |
        When the user accesses to equity
        Then the user accesses to assistance

    @PC005
    @MX @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario Outline: Happy Path Equity edit alias
        Given a user with the following criteria
            | criteria |
            | equity   |
        And the user accesses to equity
        And the user accesses the equity edit alias
        When the user clears and updates the alias with "<alias>"
        Then the user sees in "Equity Detail" screen correctly updated "" alias
        Examples:
            | alias  |
            | PT8684 |

    @PC006
    @MX @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario: Abort edit alias
        Given a user with the following criteria
            | criteria |
            | equity   |
        And the user accesses to equity
        And the user accesses the equity edit alias
        When the user goes back to previous page
        Then the user accesses the "equity" screen

    @PC007
    @MX @backend(test)
    @vbank
    @web @android @ios
    @web-done
    @backend-smoke
    Scenario: Back edit alias
        Given a user with the following criteria
            | criteria |
            | equity   |
        And the user accesses to equity
        And the user accesses the equity edit alias
        When The user modifies the alias to "equity" and cancels the alias editing
        Then the user sees the following items in the screen
            | item             |
            | accept btn modal |
            | cancel btn modal |

    @PC008
    @MX @backend(test)
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario Outline: Invalid entry edit alias
        Given a user with the following criteria
            | criteria |
            | equity   |
        And the user accesses to equity
        And the user accesses the equity edit alias
        And the user "cleans" the new alias
        When the user updates the alias with the new alias "<alias>"
        Then the user sees save button disabled on the screen

        Examples:
            | alias |
            | @#`., |

    @PC009
    @MX @test
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario: Show the modal for the management service type
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        When the user accesses the information of the type of management service
        Then the user sees a modal with the following elements:
            | item          |
            | title         |
            | description   |

    @PC010
    @MX @test
    @vbank @web-done
    @web @android @ios
    @backend-smoke
    Scenario: Show equity contracts fund detail
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        When the user accesses to equity fund detail
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | product summary |
            | operations list |
            | buy button      |
            | sale button     |
