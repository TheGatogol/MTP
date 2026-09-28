@pfm @pfmConfiguration
Feature: PFM Configuration

    @CON002
    @ios @android @web
    @MX @smokeTest
    @backend(test) @vbank @spherica
    @web-done
    Scenario: PFM Configuration - Display change confirmation modal
        Given a user with the following criteria
            | criteria              |
            | pfm spherica user     |
        When the user accesses PFM settings
        And the user change config products without saving
        And the user selects right option
        Then the user sees the following items in the screen
            | item                  |
            | modalHeaderText       |
            | modalHeaderButton     |
            | modalPrimaryText      |
            | modalSecondaryText    |
            | modalExitButton       |

    @CON003
    @ios @android @web
    @MX @smokeTest
    @backend(test) @vbank @spherica
    @web-done
    Scenario: PFM Configuration - Validate error message when saving configuration changes
        Given a user with the following criteria
            | criteria                     |
            | pfm spherica settings error  |
        When the user accesses PFM settings
        And the user change config pfm products
        Then the user sees the following items in the screen
            | item                         |
            | errorModalHeaderButton       |
            | errorModalText               |
            | errorModalButton             |
