@contactsAgenda
Feature: Contacts Agenda

    @CA002
    @MX @vbank @web-done
    @smokeTest @backend(test)
    @ios @android @web
    @backend-smoke
    @no-spherica
    Scenario Outline: Validation Screen - <product> Agenda confirm delete
        Given a user with the following criteria
            | criteria        |
            | contacts agenda |
		    | multi contacts  |
        When the user accesses to the operative account product detail
        And the user accesses the agenda screen
        And the user deletes a "<product>" user
        And the user "confirms" the action
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | close button    |
            | input search    |
            | green toast     |
        Examples:
            | product |
            | contact |
            | product |

    @CA003
    @MX @vbank @web-done
    @smokeTest @backend(test)
    @ios @android @web
    @backend-smoke
    @no-spherica
    Scenario: Validation Screen - Contacts Agenda cancel delete
        Given a user with the following criteria
            | criteria        |
            | contacts agenda |
            | more contacts   |
        When the user accesses to the operative account product detail
        And the user accesses the agenda screen
        And the user deletes a "contact" user
        And the user cancels the operation modal
        Then the user is in the contacts agenda screen

    @CA004
    @MX @vbank
    @backend(test) @web-done
    @ios @android @web
    @backend-smoke
    Scenario: Contacts Agenda - Search Contact
        Given a user with the following criteria
            | criteria        |
            | contacts agenda |
            | more contacts   |
        When the user accesses to the operative account product detail
        And the user accesses the agenda screen
        And the user search a contact
        Then the user sees a contact search result

    @CA005
    @MX @vbank
    @backend(test)
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Validation Screen - Contact Selected From Contacts Agenda
        Given a user with the following criteria
            | criteria        |
            | contacts agenda |
            | more contacts   |
        When the user accesses to the operative account product detail
        And the user accesses the agenda screen
        And the user selects a contact user
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | recipient selector    |
            | currency selector     |

    @CA006
    @MX @vbank
    @backend(test) @web-done
    @ios @android @web @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Login successful
        Given a user with the following criteria
            | criteria        |
            | contacts agenda |
		    | multi contacts  |
        When the user access the "dashboard" screen
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | greeting    |
            | help button |
            | sidebar     |
            | cards       |

    @CA007
    @MX @vbank @web-done
    @smokeTest @backend(test)
    @ios @android @web
    @backend-smoke
    @spherica
    Scenario: Validation Screen - Product Agenda confirm delete
        Given a user with the following criteria
            | criteria        |
            | contacts agenda |
		    | multi contacts  |
        When the user accesses to the operative account product detail
        And the user accesses the agenda screen
        And the user deletes a "product" user
        And the user "confirms" the action
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | close button    |
            | input search    |
            | green toast     |
