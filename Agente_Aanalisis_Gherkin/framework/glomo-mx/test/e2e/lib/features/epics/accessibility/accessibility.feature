@accessibility-suite
Feature: Accessibility

    @ARIA_AS001 @!vbank
    @MX @no-data-manager
    @web
    Scenario: Screen Validation
        Given the user accesses the Login Screen
        When the user accesses to "Assistance" item located in the sidebar
        Then the screen's accessibility is analysed

    @ARIA_OCPD001
    @web
    @MX @backend(artichoke) @vbank
    Scenario Outline: Orange Card - Access to security module for <status> credit card
        Given a user with the following criteria
            | criteria    |
            | Credit card |
        When the user accesses to the "<status>" "credit" card product detail
        Then the screen's accessibility is analysed

        Examples:
            | status              |
            | operative           |

    @ARIA_MV001
    @web
    @MX @backend(artichoke) @vbank
    Scenario: Access to movements - Credit
        Given a user with the following criteria
            | criteria     |
            | transactions |
        And the user accesses to the "mvf" "credit" card product detail
        When the user accesses to all movements
        Then the screen's accessibility is analysed
