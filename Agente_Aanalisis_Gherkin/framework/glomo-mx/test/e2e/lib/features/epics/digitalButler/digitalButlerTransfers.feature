@redirectLinkBlueToTransfers
Feature: ChatBot - Links transfers

    @BLT001
    @MX
    @smokeTest
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Blue - Transferencia a cuenta o envío de dinero por DIMO
        Given a user with the following criteria
            | criteria |
            | user for blue links transfers navigation |
        And the user access blue "with terms accepted"
        And the user write "Blue quiero quiero que me ayudes a transferir 500 pesos al numero de cuenta 5541093241 por comida" in input text
        And the user selects "Transfer & dimo" link
        And the user continues after confirming destination data
        When the user completes the reuse transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | operation type          |
            | operation number        |
            | share button            |
            | exit button             |

    @BLT002
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Blue - Traspasos de una cuenta hacia otra cuenta o tarjeta propia
        Given a user with the following criteria
            | criteria |
            | user for blue links transfers navigation |
        And the user access blue "with terms accepted"
        And the user write "Blue quiero hacer una transferencia de mi cuenta pago a mi cuenta alcancia como ahorro" in input text
        And the user selects "Transfer & dimo" link
        When the user completes the transfer process
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | operation type          |
            | operation number        |
            | share button            |
            | exit button             |

    @BLT003
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Blue - Transferencia de TDC hacia una cuenta propia
        Given a user with the following criteria
            | criteria |
            | user for blue links transfers navigation |
        And the user access blue "with terms accepted"
        And the user write "Blue quiero hacer una transferencia de mi tdc a mi cuenta pago" in input text
        And the user selects "Transfer & dimo" link
        When the user completes the transfer process
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | operation type          |
            | operation number        |
            | share button            |
            | exit button             |

    @BLT004
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Blue - Transferencia interbancaria - Cliente da alias
        Given a user with the following criteria
            | criteria |
            | user for blue links transfers navigation |
        And the user access blue "with terms accepted"
        And the user write "Realiza una transfer a Maria de 100 pesos con concepto comida" in input text
        And the user selects "Transfer & dimo" link
        And the user continues after confirming destination data with otp
        When the user completes the reuse transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | operation type          |
            | operation number        |
            | share button            |
            | exit button             |

    @BLT005
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Blue - Transferencia a cuenta nueva BBVA
        Given a user with the following criteria
            | criteria |
            | user for blue links transfers navigation |
        And the user access blue "with terms accepted"
        And the user write "Envia una transferencia a la cuenta 00740010001507094579 de 150 con la nota comida escuela" in input text
        And the user selects "Transfer & dimo" link
        And the user saves the destination contact with alias "Karl" and confirms destination data with otp
        When the user completes the reuse transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | operation type          |
            | operation number        |
            | share button            |
            | exit button             |
