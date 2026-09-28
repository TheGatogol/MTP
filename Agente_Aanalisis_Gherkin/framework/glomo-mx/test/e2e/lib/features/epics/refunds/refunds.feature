@refoundTransfers

Feature: Refound transfers
    @RT001 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Description refund money screen
        Given a user with the following criteria
            | criteria                  |
            | interbank transfer refund |
        And the user access the "dashboard" screen
        When the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to refund money
        Then the user sees the following items in the screen
            | item                | value |
            | Modal Header        |       |
            | Modal Close button  |       |
            | Information icon    |       |
            | Descriptions        |       |
            | Refund money button |       |
            | Cancel link         |       |

    @RT002 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Summary of the transactions detail  screen
        Given a user with the following criteria
            | criteria                  |
            | interbank transfer refund |
        And the user access the "dashboard" screen
        When the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to refund money
        And the user accept modal information
        Then the user sees the following items in the screen
            | item                    | value |
            | Header                  |       |
            | Close button            |       |
            | Origin title            |       |
            | Origin account label    |       |
            | Origin amount           |       |
            | Origin account          |       |
            | Origin amount label     |       |
            | Destination title       |       |
            | Destination avatar Icon |       |
            | Destination name        |       |
            | Destination account     |       |
            | Destination name bank   |       |
            | Amount title            |       |
            | Destination amount      |       |
            | Concept title           |       |
            | Reference label         |       |
            | Reference               |       |
            | Concept label           |       |
            | Concept                 |       |
            | Refund amount label     |       |
            | Amount                  |       |
            | Tax amount label        |       |
            | Tax amount              |       |
            | Continue button         |       |

    @RT003 @vbank
    @MX @web @android @ios
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Screen validation otp token
        Given a user with the following criteria
            | criteria                  |
            | interbank transfer refund |
        And the user access the "dashboard" screen
        When the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to refund money
        And the user confim refund review information
        Then the user sees the following items in the screen
            | item                | value |
            | Header otp          |       |
            | Img otp             |       |
            | Title otp           |       |
            | Input otp           |       |
            | Continue button otp |       |

    @RT004 @vbank
    @MX @web @android @ios
    @smokeTest
    @backend(test)
    @web-done
    Scenario: Screen validation success refund
        Given a user with the following criteria
            | criteria                  |
            | interbank transfer refund |
        And the user access the "dashboard" screen
        When the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to refund money
        And the user insert otp token and continue
        Then the user sees the following items in the screen
            | item                     | value |
            | header                   |       |
            | title                    |       |
            | subtitle                 |       |
            | amount label             |       |
            | amount wrapper           |       |
            | origin data              |       |
            | label Concepto           |       |
            | label Referencia         |       |
            | label Tipo de operación  |       |
            | label Folio de operación |       |
            | label Clave rastreo      |       |
            | label email              |       |
            | link share               |       |

    @RT005 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Insufficient balance screen
        Given a user with the following criteria
            | criteria                  |
            | interbank transfer refund |
        And the user access the "dashboard" screen
        When the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user wants to refund money
        And the user has not enough funds in his account to refund money.
        Then the user sees the following items in the screen
            | item                             |
            | Header                           |
            | Close button                     |
            | Information icon modal           |
            | Insufficient balance title modal |
            | Insufficient balance label modal |
