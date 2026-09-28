@chatBotCardDetail
Feature: ChatBot - Card Detail

    @DTA001
    @MX
    @backend(test) @vbank
    @backend-smoke
    @web-done
    @web @android @ios
    @smokeTest
    Scenario: Consult the detail of a credit card
        Given a user with the following criteria
            | criteria   |
            | debit card |
        And the user access blue "with terms accepted"
        When the user send "consult of detail credit card" messages
        Then the user sees the following items in the screen
            | item                             |
            | card detail image                |
            | card detail alias                |
            | card detail last digits          |
            | card detail card number          |
            | card detail card expiration date |

    @DTA002
    @MX
    @backend(test) @vbank
    @backend-smoke
    @web-done
    @web @android @ios
    Scenario: Copy the number of a debit card from the details
        Given a user with the following criteria
            | criteria    |
            | debit card  |
            | credit card |
        And the user access blue "with terms accepted"
        When the user send "consult of detail debit card" messages
        Then the user sees the following items in the screen
            | item                          |
            | card detail title card number |
            | card detail copy text action  |

    @DTA003
    @MX
    @backend(test) @vbank
    @backend-smoke
    @web-done
    @web @android @ios
    Scenario: Consult the data of a credit card blocked
        Given a user with the following criteria
            | criteria                |
            | user with blocked cards |
        And the user access blue "with terms accepted"
        And the user requests "Quiero ver los datos de mi tarjeta" for chooses an "desambiguation card" from the answer
        When the user requests: "credit card" message of "details termination blocked cards" products
        Then the user sees the following items in the screen
            | item                             |
            | card detail image                |
            | card detail alias                |
            | card detail last digits          |
            | card detail status               |
            | card detail title info list      |
            | card detail card expiration date |
            | card detail card number          |
            | card detail title card number    |
            | card detail copy text action     |

    @DTA004
    @MX
    @backend(test) @vbank
    @backend-smoke
    @web-done
    @web @android @ios
    Scenario: Get link for digital card dynamic CVV
        Given a user with the following criteria
            | criteria     |
            | digital card |
        And the user access blue "with terms accepted"
        When the user send "go to digital card" messages
        Then the user sees the following items in the screen
            | item                    | value                                                          |
            | header                  |                                                                |
            | chat bot custom message | En este enlace puedes consultar el CVV dinámico de tu tarjeta: |
            | link                    |                                                                |

    @DTA005
    @MX
    @backend(test) @vbank
    @backend-smoke
    @web-done
    @web @android @ios
    Scenario: Daily purchase limit
        Given a user with the following criteria
            | criteria    |
            | credit card |
        And the user access blue "with terms accepted"
        When the user send "purchase limit" messages
        Then the user sees the following items in the screen
            | item                    | value                                                  |
            | header                  |                                                        |
            | chat bot message        | Entendido. Este es el límite de compras de tu tarjeta: |
            | card detail alias       |                                                        |
            | card detail last digits |                                                        |
            | chat bot message        | Limite diario de compras                               |
            | chat bot message        | cantidad                                               |

    @DTA006
    @MX
    @backend(test) @vbank
    @backend-smoke
    @web-done
    @web @android @ios
    Scenario: Request full digital card data for online purchase
        Given a user with the following criteria
            | criteria     |
            | digital card |
        And the user access blue "with terms accepted"
        When the user send "td data" messages
        Then the user sees the following items in the screen
            | item                    | value                                        |
            | header                  |                                              |
            | chat bot custom message | Estos son los datos completos de tu tarjeta: |
            | form rating             |                                              |

    @DTA007
    @MX
    @backend(test) @vbank
    @backend-smoke
    @web-done
    @web @android @ios
    Scenario: Show all credit card data
        Given a user with the following criteria
            | criteria                       |
            | user with physical credit card |
        And the user access blue "with terms accepted"
        When the user send "all credit card data" messages
        Then the user sees the following items in the screen
            | item                        | value     |
            | header                      |           |
            | chat bot custom message     | Estos son los datos completos de tu tarjeta |
            | card detail last digits     |           |
            | card detail title info list |           |
            | card detail image           |           |
