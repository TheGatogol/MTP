@chatBotRotingOtherChannels

Feature: ChatBot - Routing Other Channels

    @CP0001
    @MX
    @backend(test)
    @vbank
    @web-done
    @web @android @ios
    Scenario: Generate access to cancel withholdings
        Given a user with the following criteria
            | criteria                          |
            | user with routing others channels |
        And the user access blue "with terms accepted"
        And the user write "Cancelar retenciones" in input text
        When the user selects "call telephone advisor" link
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | user message |
            | link         |

    @CP0002
    @MX
    @backend(test)
    @vbank
    @web-done
    @web @android @ios
    Scenario: Generate access to contract a recurring account
        Given a user with the following criteria
            | criteria                          |
            | user with routing others channels |
        And the user access blue "with terms accepted"
        When the user write "Quiero contratar una cuenta recurrente" in input text
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | user message |
            | link         |

    @CP0003
    @MX
    @backend(test)
    @smokeTest
    @vbank
    @web-done
    @web @android @ios
    Scenario: Generate assistance to open an account
        Given a user with the following criteria
            | criteria                          |
            | user with routing others channels |
        And the user access blue "with terms accepted"
        And the user write "Quiero contratar una cuenta" in input text
        And the user accesses to "atm locator" screen from shortcuts
        When the user leaves atmLocator and return blue screen
        Then the user sees the "digital butler" screen
