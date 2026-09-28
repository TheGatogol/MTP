@changeLimitsDebitCards
Feature: Change Limits Debit Cards

    @CLDC001
    @MX
    @web @ios @android
    @vbank @backend(test)
    @smokeTest
    @web-done
    @backend-smoke
    Scenario Outline: Display Modify Operational Limits Modal - <card_type> debit card
        Given a user with the following criteria
            | criteria    |
            | debit card  |
            | orange card |
            | <card_type> |
        When the user accesses to the "<status>" "debit" card product detail
        And the user selects the show more option for "<status>" card
        Then the user sees the following items in the screen
            | item                                  | value   |
            | Modify Operational Limits Entry Point | <state> |

        Examples:
            | card_type                           | status                       | state   |
            | status operative                    | operative                    | enabled |
            | status blocked pdt delivery         | blocked                      | hidden  |
            | status expired                      | expired                      | hidden  |
            | status pending delivery             | pending delivery             | enabled |
            | status pending embossing            | pending embossing            | enabled |
            | status overdraft                    | blocked                      | hidden  |
            | status blocked without pdt delivery | blocked                      | hidden  |

    @CLDC002
    @MX
    @web @ios @android
    @vbank @backend(artichoke)
    @manual @JIRA.GLOMOGL-26754
    Scenario: Display position of Modify Operational Limits Modal - <creditCardType> card
        Given a user with the following criteria
            | criteria             |
            | edit limit operative |
            | debit card           |
        And the user accesses to the "operative" "debit" card product detail
        When the user accesses modify operational limits operative
        Then the user sees the following items in the screen
            | item                            | positionBar     |
            | Modify Operational Limits Modal | First place     |

    @CLDC003
    @vbank
    @MX @web @android @ios
    @alternate-scenarios-smoke
    @backend(test)
    @web-done @vbank-modified
    @backend-smoke
    Scenario: Validate header help button in Expense control
        Given a user with the following criteria
            | criteria           |
            | change limits card |
            | debit card         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to expense control
        When the user access help header and understood
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | help icon       |
            | atm button        |
            | daily cash button |

    @CLDC004
    @vbank
    @MX @web @android @ios
    @alternate-scenarios-smoke
    @backend(test)
    @web-done @vbank-modified
    @backend-smoke
    Scenario Outline: Validate help button edit pencil in expense control "<case>"
        Given a user with the following criteria
            | criteria           |
            | change limits card |
            | debit card         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to expense control
        And the user access edit pencil "<buttonType>"
        When the user exits the help modal
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | new credit limit input |
            | current limit          |
            | current limit bar      |

        Examples:
            | buttonType    | case           |
            | atm cash      | limit shopping |
            | shopping cash | limit atm      |

    @CLDC005
    @vbank
    @MX @web @android @ios
    @alternate-scenarios-smoke
    @backend(test)
    @web-done @vbank-modified
    @backend-smoke
    Scenario: Validate help button in expense control
        Given a user with the following criteria
            | criteria           |
            | change limits card |
            | debit card         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to expense control
        When the user access help and understood
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | help button       |
            | atm button        |
            | daily cash button |

    @CLDC006
    @vbank
    @MX @web @android @ios
    @alternate-scenarios-smoke
    @backend(test)
    @web-done @vbank-modified
    @backend-smoke
    Scenario Outline: Validate daily limit "<case>"
        Given a user with the following criteria
            | criteria           |
            | change limits card |
            | debit card         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to expense control
        And the user access edit pencil "<buttonType>"
        When the user introduces "<value>" as new limit amount
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | new credit limit input |
            | current limit          |
            | current limit bar      |
            | icon warning           |
            | text error             |

        Examples:
            | buttonType    | case                         | value   |
            | atm cash      | limit higher atm             | 10000   |
            | shopping cash | limit higher shopping        | 3020000 |
            | atm cash      | error multiple limit atm     | 166     |
            | shopping cash | error multiple limitshopping | 66      |
            | atm cash      | limit lower atm              | 0       |
            | shopping cash | limit  lower shopping        | 49      |
