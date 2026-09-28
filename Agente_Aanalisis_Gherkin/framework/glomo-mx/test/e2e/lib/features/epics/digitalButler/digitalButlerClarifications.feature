@chatBotClarifications
Feature: ChatBot - Clarifications

    @CDUA001
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    @smokeTest
    Scenario: Happy path - Money credit
        Given a user with the following criteria
            | criteria                        |
            | user with established movements |
        And the user access blue "with terms accepted"
        And the user send "unrecognized movement" messages
        When the user open modal success of "receipt"
        Then the user sees the following items in the screen
            | item                        | value       |
            | modal receipt header        |             |
            | modal receipt footer button |             |
            | modal receipt amount        | not visible |
            | modal receipt subtitle      | not visible |

    @CDUA002
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario: No related charges foundt
        Given a user with the following criteria
            | criteria                        |
            | user with established movements |
        And the user access blue "with terms accepted"
        When the user send "unrelated movement" messages
        Then the user sees the following items in the screen
            | item                    | value              |
            | chat bot custom message | No encontré cargos |
            | chips                   |                    |

    @CDUA003
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario: The user cancels the clarification
        Given a user with the following criteria
            | criteria                        |
            | user with established movements |
        And the user access blue "with terms accepted"
        When the user send "unrelated movement" messages
        Then the user sees the following items in the screen
            | item                    | value                     |
            | chat bot custom message | No realicé ningún reporte |
            | chips                   |                           |

    @CDUA004
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario: Happy path - Clarification
        Given a user with the following criteria
            | criteria                        |
            | user with established movements |
        And the user access blue "with terms accepted"
        And the user send "unrecognized movement" messages
        When the user open modal success of "receipt"
        Then the user sees the following items in the screen
            | item                        | value   |
            | modal receipt header        |         |
            | modal receipt footer button |         |
            | modal receipt amount        | visible |
            | modal receipt subtitle      |         |

    @CDUA005
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario: Happy path - Clarification without subscription
        Given a user with the following criteria
            | criteria                        |
            | user with established movements |
        And the user access blue "with terms accepted"
        And the user send "unrecognized movement" messages
        When the user open modal success of "receipt"
        Then the user sees the following items in the screen
            | item                        | value       |
            | modal receipt header        |             |
            | modal receipt footer button |             |
            | modal receipt amount        | not visible |
            | modal receipt subtitle      | not visible |

    @CDUA006
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario: Card blocking without charge report
        Given a user with the following criteria
            | criteria                        |
            | user with established movements |
        And the user access blue "with terms accepted"
        And the user send "unrecognized movement" messages
        When the user open modal success of "receipt"
        Then the user sees the following items in the screen
            | item                        | value       |
            | modal receipt header        |             |
            | modal receipt footer button |             |
            | modal receipt amount        | not visible |
            | modal receipt subtitle      | not visible |
