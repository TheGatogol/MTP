@configureProducts
Feature: Configure Products

    @CP002
    @MX @vbank @backend(test) @web-done
    @web @android @ios
    @backend-smoke
    Scenario: Configure products - a product in each category
        Given a user with the following criteria
            | criteria             |
            | configure products 5 |
        When the user accesses to show and hide product section
        Then the user sees the following items in the screen
            | item                 |
            | view several product |

    @CP003
    @MX @vbank @backend(test) @web-done
    @smokeTest @web @android @ios
    Scenario: Configure products- several products in each category
        Given a user with the following criteria
            | criteria           |
            | configure products |
            | with categories    |
        When the user accesses to show and hide product section
        Then the user sees the following items in the screen
            | item                                   |
            | view several products in each category |

    @CP004
    @MX @vbank @backend(test) @web-done
    @smokeTest @web @android @ios
    @backend-smoke
    Scenario: Configure products - first time access
        Given a user with the following criteria
            | criteria           |
            | configure products |
            | with categories    |
        When the user accesses to show and hide product section
        Then the user sees the following items in the screen
            | item          |
            | button accept |

    @CP005
    @MX @web @vbank @backend(test) @web-done @android @ios @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Configure products - when a category has a main product
        Given a user with the following criteria
            | criteria           |
            | configure products |
            | only account       |
        When the user accesses to show and hide product section
        Then the user sees the following items in the screen
            | item                         |
            | main account disabled button |

    @CP006
    @MX @web @vbank @backend(test) @web-done @android @ios @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Configure products - the user has only one product and this is the main account
        Given a user with the following criteria
            | criteria           |
            | configure products |
            | only account       |
        When the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to show and hide product screen
        Then the user goes back to previous page

    @CP007
    @MX @web @vbank @backend(test) @web-done @android @ios @alternate-scenarios-smoke
    Scenario: Configure products - hide a category
        Given a user with the following criteria
            | criteria           |
            | configure products |
            | cards on           |
        When the user accesses to show and hide product section
        Then the user deactivates the card category

    @CP008
    @MX @web @vbank @backend(test) @web-done @android @ios @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Configure products - hide only a product
        Given a user with the following criteria
            | criteria             |
            | configure products 5 |
        When the user accesses to show and hide product section
        Then the user deactivates a savings account product

    @CP009
    @MX @web @vbank @backend(test) @web-done @android @ios @alternate-scenarios-smoke
    Scenario: Configure products - hide all equity contracts
        Given a user with the following criteria
            | criteria           |
            | configure products |
        When the user accesses to show and hide product section
        Then the user turns off all the patrimonial contract category

    @CP010
    @MX @web @vbank @backend(test) @web-done @android @ios @alternate-scenarios-smoke
    Scenario: Configure products - hide an equity contract
        Given a user with the following criteria
            | criteria           |
            | configure products |
        When the user accesses to show and hide product section
        Then the user cancels a single patrimonial contract

    @CP011
    @MX @web @vbank @backend(test) @web-done @android @ios @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Configure products - hide the last product in a category
        Given a user with the following criteria
            | criteria           |
            | configure products |
            | with categories    |
        When the user accesses to show and hide product section
        Then the user shutdown of several products in a category

    @CP012
    @MX @web @vbank @backend(test) @web-done @android @ios @alternate-scenarios-smoke
    Scenario: Configure products - show a category
        Given a user with the following criteria
            | criteria           |
            | configure products |
            | cards off          |
        When the user accesses to show and hide product section
        Then the user active the card category

    @CP013
    @MX @web @vbank @backend(test) @web-done @android @ios @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Configure products - show only a product
        Given a user with the following criteria
            | criteria             |
            | configure products 5 |
        When the user accesses to show and hide product section
        Then the user activates a savings account product

    @CP014
    @MX @web @vbank @backend(test) @web-done
    @android @ios @alternate-scenarios-smoke
    Scenario: Configure products - help icon
        Given a user with the following criteria
            | criteria           |
            | configure products |
        And the user accesses to show and hide product section
        When the user accesses to help modal
        Then the user sees the following items in the screen
            | item          |
            | button accept |
            | title         |
            | text info     |
