@BusinessInteligenceOverview
Feature: BusinessInteligenceOverview

    @BIO001
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    @smokeTest
    @backend-smoke
    Scenario Outline: The user sees Business period <type_period>
        Given a user with the following criteria
            | criteria          |
            | business overview |
        And the user starts the application
        And the user accesses as an openpay contracted user "without onboarding"
        And the user accesses to dashboard
        And the user accesses to 'all-merchants'
        When the user accesses to period "<type_period>"
        Then the user sees the following items in the screen:
            | item                      | value    |
            | label business week       | <state1> |
            | label business fort night | <state2> |
            | label business month      | <state3> |

        Examples:
            | type_period | state1    | state2    | state3    |
            | week        | enable    | invisible | invisible |
            | fort night  | invisible | enable    | invisible |
            | month       | invisible | invisible | enable    |

    @BIO002
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario Outline: The user sees Business period <type_period>
        Given a user with the following criteria
            | criteria          |
            | business overview |
        And the user starts the application
        And the user accesses as an openpay contracted user "without onboarding"
        And the user accesses to dashboard
        And the user accesses to 'all-merchants'
        When the user accesses to edit period "<type_period>"
        Then the user sees the following items in the screen:
            | item                       | value    |
            | label business three month | <state1> |
            | label business six month   | <state2> |
            | label business year        | <state3> |

        Examples:
            | type_period | state1    | state2    | state3    |
            | three       | enable    | invisible | invisible |
            | six         | invisible | enable    | invisible |
            | year        | invisible | invisible | enable    |

    @BIO003
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario Outline: The user see detail <type_period>
        Given a user with the following criteria
            | criteria          |
            | business overview |
        And the user starts the application
        And the user accesses as an openpay contracted user "without onboarding"
        And the user accesses to dashboard
        And the user accesses to 'all-merchants'
        And the user accesses to period "<type_period>"
        When the user accesses to view detail
        Then the user sees the following items in the screen:
            | item                        | value    |
            | label see detail week       | <state1> |
            | label see detail fort night | <state2> |
            | label see detail month      | <state3> |

        Examples:
            | type_period | state1    | state2    | state3    |
            | week        | enable    | invisible | invisible |
            | fort night  | invisible | enable    | invisible |
            | month       | invisible | invisible | enable    |

    @BIO004
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario Outline: The user sees detail period <type_period>
        Given a user with the following criteria
            | criteria          |
            | business overview |
        And the user starts the application
        And the user accesses as an openpay contracted user "without onboarding"
        And the user accesses to dashboard
        And the user accesses to 'all-merchants'
        And the user accesses to edit period "<type_period>"
        When the user accesses to view detail
        Then the user sees the following items in the screen:
            | item                   | value    |
            | label see detail three | <state1> |
            | label see detail six   | <state2> |
            | label see detail year  | <state3> |

        Examples:
            | type_period | state1    | state2    | state3    |
            | three       | enable    | invisible | invisible |
            | six         | invisible | enable    | invisible |
            | year        | invisible | invisible | enable    |

    @BIO005
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Validate business without movements
        Given a user with the following criteria
            | criteria          |
            | business over     |
            | without movements |
        And the user starts the application
        And the user accesses as an openpay contracted user "without onboarding"
        And the user accesses to dashboard
        When the user accesses to 'all-merchants'
        Then the user sees the following items in the screen:
            | item                    |
            | label without movements |
            | modal without movements |
            | img without movements   |

    @BIO006
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Validate first access with a single trade
        Given a user with the following criteria
            | criteria          |
            | business overview |
        And the user starts the application
        And the user accesses as an openpay contracted user "with onboarding"
        And the user accesses to dashboard
        And the user accesses to 'all-merchants'
        When the user accesses to onboarding business
        Then the user sees the following items in the screen
            | item               |
            | panel info         |
            | data graph         |
            | button see detail  |
            | button edit period |
