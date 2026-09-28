@mobile_contacts_agenda
Feature: Mobile Contacts Agenda

    @COA001
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    @backend-smoke
    #Added new feature flags to app settings service
    Scenario: Select my number.
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        And the user accesses to page top up
        And the user accesses the "contacts agenda" from mobile top up
        When the user select the contact "Elizat"
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | back button |
            | account     |
            | amount      |

    @COA002
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    @backend-smoke
    #Added new feature flags to app settings service
    Scenario: Select a phone number from a contact with two phone numbers
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to page top up
        And the user accesses the "contacts agenda" from mobile top up
        And the user select first phone number from contact
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | back button |
            | account     |
            | amount      |

    @COA003
    @MX
    @vbank @backend(test)
    @smokeTest
    @ios @android @web
    @web-done
    @vbank-modified
    @backend-smoke
    #Added new feature flags to app settings service
    Scenario Outline: Find contact by <findby>
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to page top up
        And the user accesses the "contacts agenda" from mobile top up
        And find contact by name "<data>"
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | contact              |
            | phone number contact |

        Examples:
            | findby       | data              |
            | Name         | Javier            |
            | Alias        | Javier Hernandez  |
            | phone number | 55 6245 0291        |

    @COA004
    @MX
    @vbank @backend(test)
    @smokeTest
    @ios @android @web
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank-modified
    @backend-smoke
    #Added new feature flags to app settings service
    Scenario: Delete contact
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to page top up
        And the user accesses the "contacts agenda" from mobile top up
        And the user delete the contact
        Then the user sees a modal with the following elements:
            | item 				|
            | title 	        |
            | description       |
            | Accept button     |

    @COA005
    @MX
    @vbank @backend(test)
    @smokeTest
    @ios @android @web
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank-modified
    @backend-smoke
    #Added new feature flags to app settings service
    Scenario: Delete phone number
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to page top up
        And the user accesses the "contacts agenda" from mobile top up
        And the user delete the cell phone
        Then the user sees a modal with the following elements:
            | item 				|
            | title 	        |
            | description       |
            | Accept button     |

    @COA006
    @MX @SPHERICA-COA001
    @vbank @backend(test) @spherica
    @ios @android @web
    @web-done
    @vbank-modified
    #Added new feature flags to app settings service
    Scenario: Select my number Spherica.
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        And the user accesses to page top up
        And the user accesses the "contacts agenda" from mobile top up
        When the user select the contact "Elizat"
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | back button |
            | account     |
            | amount      |
