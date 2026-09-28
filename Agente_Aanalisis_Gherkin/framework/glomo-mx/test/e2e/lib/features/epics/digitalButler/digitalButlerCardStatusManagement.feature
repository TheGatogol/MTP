@chatBotCardStatusManagement

Feature: Chatbot and card status management

    @GET001
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Information to turn off the user's physical TDD <time>
        Given a user with the following criteria
            | criteria         |
            | user with debit  |
        And the user access blue "with terms accepted"
        When the user write "Quiero apagar mi TDD fisica" in input text
        Then the user sees the following items in the screen
            | item                       |
            | chat bot message           |
            | suggestion button positive |
            | suggestion button cancel   |
        Examples:
            | time                 |
            | first time           |
            | after the first time |

    @GET002
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Information to <operation> the user's digital TDD
        Given a user with the following criteria
            | criteria                |
            | user with digital cards |
        And the user access blue "with terms accepted"
        When the user write "Quiero <operation> mi TDD digital" in input text
        Then the user sees the following items in the screen
            | item                       |
            | chat bot message           |
            | suggestion button positive |
            | suggestion button cancel   |
        Examples:
            | operation |
            | turnOn    |
            | turnOff   |

    @GET003
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    @smokeTest
    Scenario Outline: Turn off <type> card with the <option> given by Blue
        Given a user with the following criteria
            | criteria                |
            | user with debit         |
            | user with digital cards |
        And the user access blue "with terms accepted"
        When the user write "Quiero apagar mi TDD <type>" in input text
        And the user selects the "<option>" suggestion
        Then the user sees the following items in the screen
            | item               |
            | chat bot message   |
            | chips              |
        Examples:
            | type     | option  |
            | physical | cancel  |
            | digital  | cancel  |
            | physical | confirm |
            | digital  | confirm |

    @GET004
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Information for operation a specific physical TDD, that is <status>
        Given a user with the following criteria
            | criteria        |
            | user with debit |
        And the user access blue "with terms accepted"
        When the user write "Quiero <operation> mi tarjeta <status>" in input text
        Then the user sees the following items in the screen
            | item               |
            | chat bot message   |
            | chips              |
        Examples:
            | operation | status   |
            | apagar    | blocked  |
            | apagar    | turnOff  |
            | encender  | turnOn   |
            | encender  | expirate |

    @GET005
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Information to turn on the user's physical TDD <time>
        Given a user with the following criteria
            | criteria         |
            | user with debit  |
        And the user access blue "with terms accepted"
        When the user write "Quiero encender mi TDD fisica" in input text
        Then the user sees the following items in the screen
            | item                       |
            | chat bot message           |
            | suggestion button positive |
            | suggestion button cancel   |
        Examples:
            | time                 |
            | first time           |
            | after the first time |

    @GET006
    @MX
    @backend(test) @vbank
    @web-done
    @web @android @ios
    Scenario Outline:  Turn on <type> card with the <option> given by Blue
        Given a user with the following criteria
            | criteria                |
            | user with debit         |
        And the user access blue "with terms accepted"
        When the user write "Quiero encender mi TDD <type>" in input text
        And the user selects the "<option>" suggestion
        Then the user sees the following items in the screen
            | item               |
            | chat bot message   |
            | chips              |
        Examples:
            | type     | option  |
            | physical | cancel  |
            | digital  | cancel  |
            | physical | confirm |
            | digital  | confirm |
