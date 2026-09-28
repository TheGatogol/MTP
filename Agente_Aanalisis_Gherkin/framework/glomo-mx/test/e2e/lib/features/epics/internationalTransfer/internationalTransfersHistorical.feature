@internationalTransfersHistorical
Feature: International Transfers Historical

    @ITH001
    @MX
    @android @ios @web
    @web-done
    @backend(test)
    @vbank
    @backend-smoke
    Scenario Outline: Access to International Transfers Panel from <entry point>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers historical          |
            | international transfers with one n4 account |
        And the user accesses to operatives screen from "<entry point>"
        When the user accesses to international transfers panel screen
        Then the user sees the following items in the screen
            | item                                  |
            | header page                           |
            | movements sent button                 |
            | movements received button             |
            | make an international transfer button |

        Examples:
            | entry point      |
            | account detail   |
            | select operation |

    @ITH002
    @MX
    @android @ios @web
    @web-done
    @backend(test)
    @vbank @smokeTest
    @backend-smoke
    Scenario Outline: Access to view movements <movement type> from select operation
        Given a user with the following criteria
            | criteria                                 |
            | international transfers historical       |
            | international transfers many n4 accounts |
        And the user accesses to operatives screen from "select operation"
        When the user accesses to view movements "<movement type>"
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | movements date |
            | movement       |

        Examples:
            | movement type |
            | sent          |
            | received      |

    @ITH003
    @MX
    @android @ios @web
    @web-done
    @backend(test)
    @vbank
    @backend-smoke
    Scenario: Access to make an international transfer and has many n4 account from select operation
        Given a user with the following criteria
            | criteria                                 |
            | international transfers historical       |
            | international transfers many n4 accounts |
        And the user accesses to operatives screen from "select operation"
        When the user accesses to make an international transfer and has "many n4 account"
        Then the user sees the following items in the screen
            | item                             |
            | account list header              |
            | account list header close button |
            | account list title               |
            | account list item                |
            | account list close button        |

    @ITH004
    @MX
    @android @ios @web
    @web-done
    @backend(test)
    @vbank
    @backend-smoke
    Scenario Outline: Access to view movements <movement type> and there aren't movements
        Given a user with the following criteria
            | criteria                                    |
            | international transfers historical          |
            | international transfers with one n4 account |
        And the user accesses to operatives screen from "select operation"
        When the user accesses to view movements "<movement type>"
        Then the user sees the following items in the screen
            | item                   |
            | empty historical image |
            | empty historical text  |

        Examples:
            | movement type |
            | sent          |
            | received      |

    @ITH005
    @MX
    @android @ios @web
    @web-done
    @backend(test)
    @vbank
    @backend-smoke
    Scenario: Access to make an international transfer and has many n4 account
        Given a user with the following criteria
            | criteria                                 |
            | international transfers historical       |
            | international transfers many n4 accounts |
        And the user accesses to operatives screen from "select operation"
        And the user accesses to make an international transfer and has "many n4 account"
        When the user selects the first account
        Then the user sees the following items in the screen
            | item           |
            | header title   |
            | button exit    |
            | text account   |
            | text addressee |
            | add recipient  |
