@emergencyReports
Feature: Emergency Reports

    @ER001
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Access to the emergency reports screen
        Given a user with the following criteria
            | criteria          |
            | emergency reports |
        And the user accesses to dashboard
        When the user goes to "emergency reports" using deeplink navigation
        Then the user sees the following items in the screen
            | item                | value    |
            | button modal        | left     |
            | title section       |          |
            | subtitle section    |          |
            | emergency cards     |          |
            | emergency vehicle   |          |

    @ER002
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @smokeTest
    @web-done
    @backend-smoke
    Scenario Outline: Access to the emergency reports menu screen - <emergency>
        Given a user with the following criteria
            | criteria          |
            | emergency reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to "<emergency>" screen
        Then the user sees the following items in the screen
            | item                  | value                |
            | header menu           |                      |
            | detail policy         | <is_visible_policy>  |
            | button left menu      |                      |
            | button right menu     |                      |
            | title menu            |                      |
            | button stole          | <is_visible_card>    |
            | button rejected card  | <is_visible_card>    |
            | option shock          | <is_visible_vehicle> |
            | option crane          | <is_visible_vehicle> |
            | option stole          | <is_visible_vehicle> |
            | option assistance     | <is_visible_vehicle> |

        Examples:
            | emergency | is_visible_policy | is_visible_card | is_visible_vehicle |
            | card      | not visible       | visible         | not visible        |
            | vehicle   | visible           | not visible     | visible            |

    @ER003
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Access to the emergency reports faqs screen - card
        Given a user with the following criteria
            | criteria          |
            | emergency reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "card" screen
        When the user access to "faqs" screen
        Then the user sees the following items in the screen
            | item            | value                |
            | header faqs     |                      |
            | title faqs      |                      |
            | first question  |                      |
            | second question |                      |
            | third question  |                      |
            | fourth question |                      |
            | fifth question  |                      |

    @ER004
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Visible modal services error
        Given a user with the following criteria
            | criteria          |
            | emergency reports |
        And the user accesses to dashboard
        When the user goes to "emergency reports" using deeplink navigation
        Then the user sees the following items in the screen
            | item                |
            | header modal        |
            | button modal        |
            | title modal         |
            | icon type modal     |
            | description modal   |
            | link exit modal     |

    @ER005
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Visible modal change vehicle
        Given a user with the following criteria
            | criteria          |
            | emergency reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "vehicle" screen
        When the user access to report "change" screen
        Then the user sees the following items in the screen
            | item              |
            | header help       |
            | button right help |
            | radio group       |
            | description help  |

    @ER006
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario Outline: Emergency reports faqs description "<questions_cards>" screen - <emergency>
        Given a user with the following criteria
            | criteria          |
            | emergency reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "<emergency>" screen
        And the user access to "faqs" screen
        When the user select "<questions_cards>"
        Then the user sees the following items in the screen
            | item                    |
            | header detail faqs      |
            | title detail faqs       |
            | description detail faqs |

        Examples:
            | emergency | questions_cards |
            | card      | first question  |
            | card      | second question |
            | card      | third question  |
            | card      | fourth question |
            | card      | fifth question  |
            | vehicle   | first question  |

    @ER007
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user goes to dashboard from emergency reports
        Given a user with the following criteria
            | criteria          |
            | emergency reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user closes emergency "reports"
        Then the user accesses the "Dashboard" screen

    @ER008
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Access to sidebar the emergency reports screen
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses to dashboard
        When the user accesses to "emergency reports" item located in the sidebar
        Then the user sees the following items in the screen
            | item                | value    |
            | button modal        | left     |
            | title section       |          |
            | subtitle section    |          |
            | emergency cards     |          |
            | emergency vehicle   |          |

    @ER009
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Access to sidebar the emergency reports screen and go back
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses to dashboard
        And the user accesses to "emergency reports" item located in the sidebar
        When the user closes emergency "reports"
        Then the user accesses the "Dashboard" screen

    @ER010
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario Outline: Validate that in Emergencies there is only the <product> option
        Given a user with the following criteria
            | criteria          |
            | emergency reports |
        And the user accesses to dashboard
        When the user goes to "emergency reports" using deeplink navigation
        Then the user sees the following items in the screen
            | item                | value             |
            | button modal        | left              |
            | title section       |                   |
            | subtitle section    |                   |
            | emergency cards     | <card_product>    |
            | emergency vehicle   | <vehicle_product> |

        Examples:
            | product   | vehicle_product | card_product |
            | card      | not visible     | visible      |
            | vehicle   | visible         | not visible  |

    @ER011
    @MX @vbank
    @spherica
    @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Access lost or stolen card screen
        Given a user with the following criteria
            | criteria          |
            | emergency reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "card" screen
        When the user access to report "lost or stolen" screen
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | toggle card button    |
            | lock card button      |

    @ER012
    @MX @vbank
    @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Access to crash report
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to "vehicle crash" menu from "vehicle" screen
        Then the user sees the following items in the screen
            | item                |
            | header rcv          |
            | icon faqs rcv       |
            | icon close rcv      |
            | title step rcv      |
            | map static rcv      |
            | map static text     |
            | change location rcv |
            | accept location rcv |

    @ER013
    @MX @vbank
    @spherica
    @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Access to request crane
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to "vehicle crane" menu from "vehicle" screen
        Then the user sees the following items in the screen
            | item             |
            | title geo crane  |
            | map crane        |
            | change geo crane |
            | accept geo crane |

    @ER014
    @MX @vbank
    @spherica
    @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Access to report vehicle theft
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to "vehicle theft" menu from "vehicle" screen
        Then the user sees the following items in the screen
            | item                    |
            | location header vt      |
            | location faqs vt        |
            | location exit button vt |
            | title step one vt       |
            | map static vt           |
            | address detail vt       |
            | change location btn vt  |
            | continue button vt      |

    @ER015
    @MX @vbank
    @spherica
    @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Access to report glass damage
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "vehicle glass" menu from "vehicle" screen
        When the user accepts "select date of incident" action
        Then the user sees the following items in the screen
            | item                         |
            | date title glass             |
            | date input description glass |
            | date notification glass      |
            | date continue glass          |

    @ER016
    @MX @vbank
    @spherica
    @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Access request assistances
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to "vehicle assistances" menu from "vehicle" screen
        Then the user sees the following items in the screen
            | item                      |
            | header assistances        |
            | button right assistances  |
            | checkbox current          |
            | checkbox gasoline         |
            | checkbox tire             |
            | tire icon                 |
            | tire description          |

    @ER017
    @MX @vbank
    @spherica
    @web @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Select a motorcycle as a vehicle
        Given a user with the following criteria
            | criteria          |
            | emergency reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "vehicle" screen
        When the user access to report "motorcycle change" screen
        Then the user sees the following items in the screen
            | item                 |
            | header menu          |
            | detail policy        |
            | button left menu     |
            | button right menu    |
            | title menu           |
            | option shock         |
            | option crane         |
            | option stole         |

    @ER018
    @MX @vbank
    @spherica
    @web @android @ios
    @backend(test)
    @web-done
    Scenario: Validate error to access an vehicle
        Given a user with the following criteria
            | criteria          |
            | emergency reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to "vehicle" screen
        Then the user sees the following items in the screen
            | item                |
            | header modal        |
            | button modal        |
            | title modal         |
            | icon type modal     |
            | description modal   |
            | link exit modal     |
