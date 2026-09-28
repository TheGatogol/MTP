@travelInsurance
Feature: Travel Insurance

    @TR001
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user accesses to the travel insurance screen
        Given a user with the following criteria
            | criteria         |
            | travel insurance |
        When the user goes to the travel insurance operation
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | destination radio button 1 |
            | destination radio button 2 |
            | date start selector        |
            | date end selector          |
            | traveler number input      |
    @TR002
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @smokeTest
    @backend-smoke
    Scenario: The user makes step 1 of travel insurance feature
        Given a user with the following criteria
            | criteria         |
            | travel insurance |
        When the user is in the "starting quotation" step of travel insurance contract
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | customer is a traveler link |
    @TR003
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user makes step 2 of travel insurance feature
        Given a user with the following criteria
            | criteria         |
            | travel insurance |
        When the user is in the "select traveler" step of travel insurance contract
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | account selected |
    @TR004
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user makes step 3 of travel insurance feature
        Given a user with the following criteria
            | criteria         |
            | travel insurance |
        When the user is in the "account select" step of travel insurance contract
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | checklist contract |
    @TR005
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user makes step 4 of travel insurance feature
        Given a user with the following criteria
            | criteria         |
            | travel insurance |
        When the user is in the "checklist contract" step of travel insurance contract
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | summary button confirm |
    @TR006
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user makes step 5 of travel insurance feature
        Given a user with the following criteria
            | criteria         |
            | travel insurance |
        When the user is in the "summary view confirm" step of travel insurance contract
        Then the user sees the following items in the screen
            | item   |
            | header |
    @TR007
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @smokeTest
    Scenario: The user makes a travel insurance contract
        Given a user with the following criteria
            | criteria         |
            | travel insurance |
        When the user is in the "otp modal" step of travel insurance contract
        Then the user sees the following items in the screen
            | item                               |
            | header                             |
            | insurance receipt                  |
            | insurance receipt policy           |
            | insurance receipt amount           |
            | insurance receipt exchange rate    |
            | insurance receipt exchanged amount |
            | insurance receipt account number   |
            | insurance receipt destination type |
            | insurance receipt from date        |
            | insurance receipt to date          |
            | insurance receipt traveler name    |
            | insurance receipt folio number     |
            | insurance receipt traveler email   |

    @TR008
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user fills travelers form and go back to modal
        Given a user with the following criteria
            | criteria         |
            | travel insurance |
        When the user is in the "travelers form" step of travel insurance contract
        And the user fills one of other traveler information
        And the user goes back to previous page
        Then the user sees a modal with the following elements:
            | item          |
            | accept button |
