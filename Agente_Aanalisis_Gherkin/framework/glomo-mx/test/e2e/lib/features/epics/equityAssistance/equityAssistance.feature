@equityAssistance
Feature: Equity Assistance

    @EQA002
    @MX @smokeTest
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Validate when the user calls the office
        Given a user with the following criteria
            | criteria |
            | equity   |
        And the user starts the application at date:
            | day   | 22   |
            | month | 01   |
            | year  | 2026 |
            | hour  | 10   |
        And the user accesses to contract patrimonial
        And the user agrees to contact banker
        When the user calls office banker
        Then the user sees the following items in the screen
            | item        | value      |
            | cell phone  | Banquero 1 |
            | call office | Banquero 1 |

    @EQA003
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Validate contract list
        Given a user with the following criteria
            | criteria |
            | equity   |
        And the user starts the application at date:
            | day   | 22   |
            | month | 01   |
            | year  | 2026 |
            | hour  | 10   |
        And the user accesses to contract patrimonial
        And the user agrees to contact banker
        When the user accesses list of contracts
        Then the user sees the following items in the screen
            | item                 | value      |
            | indicator assistance |            |
            | cell phone           | Banquero 1 |
            | call office          | Banquero 1 |
            | check list           |            |

    @EQA004
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Validate photo when accessing contact banker
        Given a user with the following criteria
            | criteria |
            | equity   |
        And the user starts the application at date:
            | day   | 22   |
            | month | 01   |
            | year  | 2026 |
            | hour  | 10   |
        And the user accesses to contract patrimonial
        When the user agrees to contact banker
        Then the user sees the following items in the screen
            | item                 | value      |
            | indicator assistance |            |
            | cell phone           | Banquero 1 |
            | call office          | Banquero 1 |
            | img contact          |            |

    @EQA005
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Validate when user selects second banker
        Given a user with the following criteria
            | criteria |
            | equity   |
        And the user starts the application at date:
            | day   | 22   |
            | month | 01   |
            | year  | 2026 |
            | hour  | 10   |
        And the user accesses to contract patrimonial
        And the user agrees to contact banker
        When the user accesses to second banker
        Then the user sees the following items in the screen
            | item                      | value      |
            | button banker one disable |            |
            | cell phone                | Banquero 1 |
            | call office               | Banquero 1 |

    @EQA006
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Validate the error when accessing contact banker
        Given a user with the following criteria
            | criteria |
            | equity   |
        And the user accesses to contract patrimonial
        When the user agrees to contact banker
        Then the user sees the following items in the screen
            | item         |
            | modal error  |
            | label error  |
            | button error |

    @EQA007
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Validate outside of bussiness hours to banker one
        Given a user with the following criteria
            | criteria |
            | equity   |
        And the user starts the application at date:
            | day   | 22   |
            | month | 01   |
            | year  | 2026 |
            | hour  | 17   |
        And the user accesses to contract patrimonial
        When the user agrees to contact banker
        Then the user sees the following items in the screen
            | item                 | value      |
            | indicator assistance |            |
            | banker two           |            |
            | outside text 1       |            |
            | badge 1              |            |
            | cell phone           | Banquero 1 |
            | call equity          | Banquero 1 |

    @EQA008
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Validate outside of bussiness hours to banker two
        Given a user with the following criteria
            | criteria |
            | equity   |
        And the user starts the application at date:
            | day   | 22   |
            | month | 01   |
            | year  | 2026 |
            | hour  | 17   |
        And the user accesses to contract patrimonial
        And the user agrees to contact banker
        When the user accesses to second banker
        Then the user sees the following items in the screen
            | item                      | value      |
            | indicator assistance      |            |
            | button banker one disable |            |
            | outside text 2            |            |
            | badge 2                   |            |
            | cell phone                | Banquero 2 |
            | call equity               | Banquero 2 |
