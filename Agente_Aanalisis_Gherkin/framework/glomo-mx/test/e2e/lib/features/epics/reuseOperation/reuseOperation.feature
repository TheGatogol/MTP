@ReuseOperation
Feature: Reuse Operation

    @RO001 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario Outline: Valid expense movement <transaction>
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "<access>"
        When the user wants to reuse an "<transaction>" operation
        Then the user sees the following items in the screen
            | item                    |
            | Header                  |
            | Step product selector   |
            | Step recipient selector |
            | Step enter amount       |
            | Step concept            |
        Examples:
            | transaction        | access         |
            | internal transfer  | detail product |
            | interbank transfer | detail product |
            | own transfer       | detail product |

    @RO002 @vbank
    @MX @web @android @ios
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Summary of the transactions detail screen own transfer
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        When the user wants to reuse an "own transfer" operation
        Then the user sees the following items in the screen
            | item                     |
            | Header                   |
            | Step product selector    |
            | Origin title             |
            | Account name             |
            | Account label            |
            | Account balance          |
            | Step recipient selector  |
            | Receiver title           |
            | Receiver account name    |
            | Receiver account number  |
            | Receiver account balance |
            | Step enter amount        |
            | Amount title             |
            | Amount                   |
            | Step concept             |
            | Concept title            |
            | Concept                  |
            | Summary                  |

    @RO003 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @smokeTest
    Scenario: Screen validation success reuse own transfer
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to reuse an "own transfer" operation
        When the user accesses to the reuse operation success page "own transfer"
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept own             |
            | concept                 |
            | reference               |
            | operation type          |
            | operation number        |
            | users email             |
            | share button            |
            | exit button             |

    @RO004 @vbank
    @MX @web @android @ios
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Summary of the transactions detail screen of internal transfer
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        When the user wants to reuse an "internal transfer" operation
        Then the user sees the following items in the screen
            | item                    |
            | Header                  |
            | Step product selector   |
            | Origin title            |
            | Account name            |
            | Account label           |
            | Account balance         |
            | Step recipient selector |
            | Receiver title          |
            | Receiver name           |
            | Receiver avatar         |
            | Receiver alias          |
            | Receiver third account  |
            | Receiver third bank     |
            | Step enter amount       |
            | Amount title            |
            | Amount                  |
            | Step concept            |
            | Concept title           |
            | Concept                 |
            | Summary                 |

    @RO005 @vbank
    @MX @web @android @ios
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Screen validation otp token of internal transfer
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to reuse an "internal transfer" operation
        When the user attempts to access to the reuse operation success page "internal transfer"
        Then the user sees the following items in the screen
            | item                |
            | Header otp          |
            | Img otp             |
            | Title otp           |
            | Input otp           |
            | Continue button otp |

    @RO006 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Screen validation success of reuse internal transfer
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to reuse an "internal transfer" operation
        When the user accesses to the reuse operation success page "internal transfer"
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept own             |
            | concept                 |
            | reference               |
            | operation type          |
            | operation number        |
            | users email             |
            | share button            |
            | exit button             |

    @RO007 @vbank
    @MX @web @android @ios
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Summary of the transactions detail of reuse interbank transfer
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        When the user wants to reuse an "interbank transfer" operation
        Then the user sees the following items in the screen
            | item                    |
            | Header                  |
            | Step product selector   |
            | Origin title            |
            | Account name            |
            | Account label           |
            | Account balance         |
            | Step recipient selector |
            | Receiver title          |
            | Receiver name           |
            | Receiver avatar         |
            | Receiver alias          |
            | Receiver third account  |
            | Receiver third bank     |
            | Step enter amount       |
            | Amount title            |
            | Amount                  |
            | Step concept            |
            | Concept title           |
            | Reference concept       |
            | Step concept            |
            | Summary                 |

    @RO008 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Screen validation otp token of interbank transfer
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to reuse an "interbank transfer" operation
        When the user attempts to access to the reuse operation success page "interbank transfer"
        Then the user sees the following items in the screen
            | item                |
            | Header otp          |
            | Img otp             |
            | Title otp           |
            | Input otp           |
            | Continue button otp |

    @RO009 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @smokeTest
    Scenario: Screen validation success of reuse interbank transfer
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to reuse an "interbank transfer" operation
        When the user accesses to the reuse operation success page "interbank transfer"
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | share button            |
            | exit button             |

    @RO010 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Insufficient balance screen to transfer
        Given a user with the following criteria
            | criteria                          |
            | reuse operation balance error one |
        And the user accesses to the operative account product detail
        And the user accesses the "product detail account" screen
        And the user accesses the details of a movement from "detail product"
        When the user try to reuse an operation
        Then the user sees the following items in the screen:
            | item                           |
            | modal balance                  |
            | header not enough balance      |
            | close not enough balance       |
            | title not enough balance       |
            | description not enough balance |
            | change import button           |

    @RO011 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Summary of the transactions detail screen service payment
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        When the user wants to reuse an "service payments" operation
        Then the user sees the following items in the screen
            | item                  |
            | Header                |
            | Close button          |
            | Origin title          |
            | Origin account        |
            | Destination title     |
            | Destination name      |
            | Destination account   |
            | Destination name bank |
            | Amount title          |
            | Destination amount    |
            | Concept title         |
            | Concept label         |
            | Concept               |
            | Amount                |
            | Continue button       |

    @RO012 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @tmpExclude @JIRA.GLOMOMX-194989
    Scenario: Screen validation otp token service payment
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user select transaction with id "0-2"
        And the user wants to reuse an "service payments" operation
        When the user attempts to access to the reuse operation success page "service payments"
        Then the user sees the following items in the screen
            | item                |
            | Header otp          |
            | Img otp             |
            | Title otp           |
            | Input otp           |
            | Continue button otp |

    @RO013 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Screen validation success reuse service payment
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to reuse an "service payments" operation
        When the user accesses to the reuse operation success page "service payments"
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | successfull receipt     |
            | title                   |
            | date                    |
            | amount                  |
            | name                    |
            | id                      |
            | reference               |
            | alias                   |
            | operation               |
            | operation stored        |
            | origin                  |
            | origin masked stored    |
            | masked number           |
            | cie                     |
            | cie stored              |
            | operation number        |
            | operation number stored |
            | save                    |
            | share                   |
            | toast message           |
