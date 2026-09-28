@nonPreApprovedCarCertificate
Feature: Non Pre Approved Car Certificate

    @PCC001
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @backend-smoke @smokeTest
    Scenario: Access to offer - Main Page
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        When the user accesses to non pre approved car certificate "main" screen
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | title form 1       |
            | description form 1 |
            | banner             |
            | continue button    |

    @PCC003
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @backend-smoke
    Scenario: Change selection to type car - Appears input car year
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        When the user changes the type car selection to preowned
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | title form 1       |
            | description form 1 |
            | banner             |
            | input car year     |

    @PCC004
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @backend-smoke
    Scenario Outline: Error message - <limit> <input>
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        When the user inserts a "<limit>" amount in "<input>"
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | title form 1       |
            | description form 1 |
            | banner             |
            | <error message>    |

        Examples:
            | limit   | input        | error message              |
            | higher  | price        | car price error message    |
            | less    | price        | car price error message    |
            | decimal | price        | car price error message    |
            | higher  | down payment | down payment error message |
            | less    | down payment | down payment error message |
            | decimal | down payment | down payment error message |

    @PCC005
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @backend-smoke
    Scenario: Close operative in main screen
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        And the user leaves the process
        When the user goes to dashboard using deeplink navigation
        Then the user accesses the "dashboard" screen

    @PCC006
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Service error - Access to main page
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        When the user accesses to non pre approved car certificate "main" screen
        Then the user sees an error modal open

    @PCC007
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @backend-smoke
    Scenario Outline: Open info modal - <infoModal>
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        When the user accesses to car certificate "<infoModal>" info modal
        Then the user sees a modal open

        Examples:
            | infoModal                       |
            | down payment                    |
            | interest rate                   |
            | commission for opening          |
            | cat                             |
            | life insurance                  |
            | monthly variable income         |
            | notice of privacy               |
            | quotations terms and conditions |
            | terms and conditions            |
            | credit history authorization    |

    @PCC008
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @backend-smoke
    Scenario Outline: Change Data in summary screen - <section> section
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        And the user accesses to non pre approved car certificate "summary section" screen
        When the user decides to change "<section>" in summary screen
        Then the user sees the following items in the screen
            | item             |
            | <title>          |
            | <description>    |
            | <continueButton> |

        Examples:
            | section              | title        | description        | continueButton                       |
            | users quotation      | title form 1 | description form 1 | continue button                      |
            | users data           | title form 2 | description form 2 | continue button in user data section |
            | terms and conditions | title TC     | description TC     | continue button TC                   |

    @PCC009
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @backend-smoke
    Scenario: Close process in summary screen
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        And the user leaves the process
        When the user goes to dashboard using deeplink navigation
        Then the user accesses the "dashboard" screen

    @PCC010
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @backend-smoke
    Scenario: Error message - Client indicates do not have varible incomes without indicate gross incomes
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        And the user accesses to non pre approved car certificate "your data section" screen
        When the user indicates do not have variable incomes without indicate gross incomes
        Then the user sees the following items in the screen
            | item                                       |
            | header                                     |
            | title form 2                               |
            | description form 2                         |
            | first indicate gross incomes error message |
            | continue button in user data section       |

    @PCC011
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @backend-smoke
    Scenario Outline: Error message - Client <typeEmployee> indicates to have gross incomes for <grossIncome> and variable incomes for <variableIncome>
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        And the user accesses to non pre approved car certificate "your data section" screen
        When the user indicates to be an "<typeEmployee>" worker with gross incomes for "<grossIncome>" and variable incomes for "<variableIncome>"
        Then the user sees the following items in the screen
            | item                                 |
            | header                               |
            | title form 2                         |
            | description form 2                   |
            | <errorMessage>                       |
            | continue button in user data section |

        Examples:
            | typeEmployee | grossIncome | variableIncome | errorMessage                   |
            | employee     | 5999.99     | 0              | gross incomes error message    |
            | employee     | 4999.99     | 1000           | variable incomes error message |
            | independent  | 0           | 5999.99        | variable incomes error message |
            | employee     | 0           | 6000           | variable incomes error message |
