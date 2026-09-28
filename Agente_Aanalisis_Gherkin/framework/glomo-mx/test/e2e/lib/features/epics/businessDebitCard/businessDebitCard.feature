@businesDebitCard
Feature: Business Debit Card

    @TDE001
    @web-done @ios @android
    @vbank
    @backend(test)
    @MX
    @smokeTest
    @web
    Scenario: User sees following items in product detail
        Given a user with the following criteria
            | criteria    |
            | business debit card |
        When the user accesses to the "business" "debit" card product detail
        Then the user sees the following items in the screen
            | item           |
            | Masked Amount  |

    @TDE002
    @web-done @ios @android
    @vbank
    @backend(test)
    @MX
    @web
    Scenario: User sees following items in the operatives of product detail
        Given a user with the following criteria
            | criteria            |
            | business debit card |
        When the user accesses to the "business" "debit" card product detail
        Then the user sees the following items in the screen
            | item                         | value  |
            | nip number                   | enable |
            | generate digital card action | enable |

    @TDE004
    @web-done @ios @android
    @vbank
    @backend(test)
    @MX
    @web
    Scenario: User select perfil
        Given a user with the following criteria
            | criteria    |
            | business debit card |
        And the user accesses to dashboard
        And the user accesses to the sidebar
        When the user accesses to "Profile" item located in the sidebar
        Then the user sees the following items in the screen
            | item             | value   |
            | address title    | hidden  |
            | title kyc        | hidden  |

    @TDE005
    @web-done @ios @android
    @vbank
    @backend(test)
    @MX
    @web
    Scenario: User sees emergency zone
        Given a user with the following criteria
            | criteria    |
            | business debit card |
        And the user accesses to dashboard
        And the user enters the emergency zone menu
        When the user enter to business debit card modal
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | title                |
            | header right button  |
            | subtitle             |
            | button               |

    @TDE006
    @web-done @ios @android
    @vbank
    @backend(test)
    @MX
    @web
    Scenario: User select pfmCheckup from footer
        Given a user with the following criteria
            | criteria    |
            | business debit card |
        And the user accesses to dashboard
        When the user enter to business debit card modal from "pfm" section
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | title                |
            | header right button  |
            | subtitle             |
            | button               |

    @TDE007
    @web-done @ios @android
    @vbank
    @backend(test)
    @MX
    @web
    Scenario: User select add from footer
        Given a user with the following criteria
            | criteria    |
            | business debit card |
        And the user accesses to dashboard
        When the user enter to business debit card modal from "add" section
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | title                |
            | header right button  |
            | subtitle             |
            | button               |

    @TDE008
    @web-done @ios @android
    @vbank
    @backend(test)
    @MX
    @web
    Scenario: User sees item from dashboard
        Given a user with the following criteria
            | criteria    |
            | business debit card |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                              | value       |
            | Transfer operative                | not visible |
            | Opportunities operative           | not visible |
            | CardLess with draw operative      | not visible |
            | More operatives                   | not visible |
            | carousel bbva                     | not visible |
            | Incomes x expenses PFM access     | not visible |
            | icon notification                 | no-visible  |
            | Balance Box                       | not visible |
            | help button                       | not visible |

    @TDE009
    @web-done @ios @android
    @vbank
    @backend(test)
    @MX
    @web
    Scenario: User select business debit card account
        Given a user with the following criteria
            | criteria    |
            | business debit card |
        And the user accesses to dashboard
        When the user accesses to the first account product detail
        Then the user sees the following items in the screen
            | item                            | value       |
            | header                          |             |
            | account                         | not visible |
            | amount                          | not visible |
            | view account data link          | not visible |
            | carrousel                       | not visible |
            | operations module               | not visible |
            | account info limited enterprise |             |
            | pockets limited enterprise      |             |

    @TDE010
    @web-done @ios @android
    @vbank
    @backend(test)
    @MX
    @web
    Scenario: User select security settings in configuration options
        Given a user with the following criteria
            | criteria    |
            | business debit card |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        When the user accesses the business debit modal from "security settings" option in configure products
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | title                |
            | header right button  |
            | subtitle             |
            | button               |

    @TDE011
    @web-done @ios @android
    @vbank
    @backend(test)
    @MX
    @web
    Scenario: User select operation configuration in configuration options
        Given a user with the following criteria
            | criteria    |
            | business debit card |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        When the user accesses the business debit modal from "operation configuration" option in configure products
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | title                |
            | header right button  |
            | subtitle             |
            | button               |
