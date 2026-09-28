@digitalButlerBankStatement
Feature: chatBot - bank statements

    @RSB001
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    @smokeTest
    Scenario: Request a TDC EDC consultation with a specific date
        Given a user with the following criteria
            | criteria       |
            | card statement |
        And the user access blue "with terms accepted"
        When the user send "card statement" messages
        Then the user sees the following items in the screen
            | item            |
            | statement title |
            | statement date  |

    @RSB002
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario: Consult another extract
        Given a user with the following criteria
            | criteria          |
            | account statement |
        And the user access blue "with terms accepted"
        And the user send "account statement" messages
        When the user selects chip of continuity "account statement"
        Then the user sees the following items in the screen
            | item                    | value                                                |
            | chat bot custom message | indícame en un solo mensaje el mes y año que quieres |

    @RSB003
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario: Consult EDC without specific date
        Given a user with the following criteria
            | criteria       |
            | card statement |
        And the user access blue "with terms accepted"
        When the user send "account statement" messages
        Then the user sees the following items in the screen
            | item            |
            | statement title |
            | statement date  |

    @RSB004
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Check EDC of <product> from the last 3 months
        Given a user with the following criteria
            | criteria   |
            | <criteria> |
        And the user access blue "with terms accepted"
        When the user send "<product> statement last 3 months" messages
        Then the user sees the following items in the screen
            | item            |
            | statement title |
            | statement date  |

        Examples:
            | product     | criteria          |
            | account     | account statement |
            | credit card | card statement    |

    @RSB005
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario: Consult EDC when the period is partially indicated
        Given a user with the following criteria
            | criteria          |
            | account statement |
        And the user access blue "with terms accepted"
        When the user send "account statement" messages
        Then the user sees the following items in the screen
            | item                    | value                           |
            | chat bot custom message | ¿Qué mes te gustaría consultar? |

    @RSB006
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario: Consult EDC for a period after the current month
        Given a user with the following criteria
            | criteria          |
            | account statement |
        And the user access blue "with terms accepted"
        When the user send "account statement" messages
        Then the user sees the following items in the screen
            | item                    | value                           |
            | chat bot custom message | Todavía no ha llegado esa fecha |

    @RSB007
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario: Check EDC prior to available limit
        Given a user with the following criteria
            | criteria          |
            | account statement |
        And the user access blue "with terms accepted"
        When the user send "account statement" messages
        Then the user sees the following items in the screen
            | item                    | value                         |
            | chat bot custom message | No encontré estados de cuenta |

    @RSB008
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario: Consult EDC of an extract without data
        Given a user with the following criteria
            | criteria          |
            | account statement |
        And the user access blue "with terms accepted"
        When the user send "account statement" messages
        Then the user sees the following items in the screen
            | item                    | value                         |
            | chat bot custom message | No encontré estados de cuenta |

    @RSB009
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Error querying EDC of incompatible <product>
        Given a user with the following criteria
            | criteria   |
            | <criteria> |
        And the user access blue "with terms accepted"
        When the user send "<product> incompatible statement" messages
        Then the user sees the following items in the screen
            | item                    | value                                                 |
            | chat bot custom message | puedo darte estados de cuentas de tarjetas de crédito |

        Examples:
            | product     | criteria          |
            | account     | account statement |
            | credit card | card statement    |

    @RSB010
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario: Consult EDC for non-consecutive month
        Given a user with the following criteria
            | criteria          |
            | account statement |
        And the user access blue "with terms accepted"
        When the user send "account non consecutive statement" messages
        Then the user sees the following items in the screen
            | item                    | value                                                            |
            | chat bot custom message | sólo puedo darte hasta 3 estados de cuenta de meses consecutivos |
