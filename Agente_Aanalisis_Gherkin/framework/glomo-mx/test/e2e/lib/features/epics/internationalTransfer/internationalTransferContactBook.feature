@internationalTransferContactsBook
Feature: International Transfer Contacts Book

    @ITT001
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Access to international transfer
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        When the user accesses to the international transfer
        Then the user sees the following items in the screen
            | item           |
            | header title   |
            | button exit    |
            | text account   |
            | text addressee |
            | add recipient  |

    @ITT002
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Recipient details
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "fill bank details" option in the international transfer flow
        Then the user sees the following items in the screen
            | item                   |
            | accordion new contact  |
            | accordion contact book |

    @ITT003
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Save contact
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user accesses the activity economic with contact saved "Amigo1"
        Then the user sees the following items in the screen
            | item                      |
            | title economic activity   |
            | current economic activity |
            | foreign check             |
            | accept economic activity  |

    @ITT004
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Amount 3 of 4
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "foreign change" option in the international transfer flow
        Then the user sees the following items in the screen
            | item                |
            | foreign origin      |
            | foreign destination |
            | foreign message     |

    @ITT005
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Concept 4 of 4
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "concept" option in the international transfer flow
        Then the user sees the following items in the screen
            | item            |
            | reason transfer |
            | accept concept  |

    @ITT006
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Success page
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "success modal" option in the international transfer flow
        Then the user sees the following items in the screen
            | item            |
            | success title   |
            | success amount  |
            | success summary |
            | success message |
            | success actions |

    @ITT007
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: User with more than two accounts
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        When the user accesses to make an international transfer of the select operation
        Then the user sees the following items in the screen
            | item         |
            | account card |

    @ITT008
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario Outline: Multi-step Destination 1 of 3 <scenario_title>
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "list contacts" option in the international transfer flow
        Then the user sees the following items in the screen
            | item                     | value         |
            | more contacts            |               |
            | accordion new contact    |               |
            | accordion contact book   |               |
            | message contactless list | <contactless> |

        Examples:
            | scenario_title       | contactless |
            | Less than 5 contacts | not visible |
            | contactless          | visible     |

    @ITT009
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Contact existing
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "another search contact" option in the international transfer flow
        Then the user sees the following items in the screen
            | item                      |
            | accordion new contact     |
            | accordion contact book    |

    @ITT010
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Change alias when you already have a contact with that same alias
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "change alias" option in the international transfer flow
        Then the user sees the following items in the screen
            | item                      |
            | accordion new contact     |
            | accordion contact book    |
            | title economic activity   |
            | current economic activity |
            | foreign check             |
            | accept economic activity  |

    @ITT011
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Get out of the flow
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "summary and close" option in the international transfer flow
        Then the user sees the following items in the screen
            | item               |
            | icon modal exit    |
            | title modal exit   |
            | content modal exit |
            | button modal exit  |

    @ITT012
    @MX @smokeTest
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: User account amount in dollars
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "foreign change" option in the international transfer flow
        Then the user sees the following items in the screen
            | item                |
            | foreign origin      |
            | foreign destination |
            | foreign message     |

    @ITT013
    @MX @smokeTest
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario Outline: Economic activity 2 of 4 <scenario_title>
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "<step>" option in the international transfer flow
        Then the user sees the following items in the screen
            | item                      |
            | title economic activity   |
            | current economic activity |
            | foreign check             |
            | accept economic activity  |

        Examples:
            | scenario_title   | step                  |
            | save new contact | continue with contact |
            | new contact      | saved new contact     |

    @ITT014
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Successful screen dollar account
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "create transfer with us" option in the international transfer flow
        Then the user sees the following items in the screen
            | item            |
            | success title   |
            | success amount  |
            | success summary |
            | success message |
            | success actions |
