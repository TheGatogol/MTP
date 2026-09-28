@internationalTransfersContactAgenda
Feature: International Transfer Contact Agenda

    @CAG001
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: View the client's BBVA contacts
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "list contacts" option in the international transfer flow
        Then the user sees the following items in the screen
            | item                 |
            | header contacts list |
            | list contacts        |

    @CAG002
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done @smokeTest
    @backend-smoke
    Scenario Outline: Search for BBVA contact by <action> without results
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user accesses the contact list to search by "<contact>"
        Then the user sees the following items in the screen
            | item                      | value   |
            | input search contact      | visible |
            | message contactless agenda| visible |

        Examples:
            | action | contact    |
            | name   | Juan Jose  |
            | number | 5566774334 |

    @CAG003
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Search BBVA contact
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user accesses the contact list to search by "Amigo Bbva"
        Then the user sees the following items in the screen
            | item                 |
            | input search contact |
            | contact selected     |
            | contact searched     |

    @CAG004
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Bbva contact deletion error
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "delete contact" option in the international transfer flow
        Then the user sees the following items in the screen
            | item                 |
            | icon error delete    |
            | title error delete   |
            | content error delete |
            | button error delete  |
            | link error delete    |

    @CAG005
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: BBVA contacts loading error screen
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "list contacts" option in the international transfer flow
        Then the user sees the following items in the screen
            | item                |
            | icon modal error    |
            | title modal error   |
            | content modal error |
