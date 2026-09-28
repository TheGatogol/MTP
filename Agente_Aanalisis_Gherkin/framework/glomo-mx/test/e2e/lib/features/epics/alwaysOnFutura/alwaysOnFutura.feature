@alwaysOnFutura
Feature: Always On Futura

    @AOS001
    @smokeTest @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Always on mode in the Featured tab
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | credit card                |
            | stand in                   |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                                   | value  |
            | home title                             |        |
            | stand in header banner                 |        |
            | featured button                        |        |
            | your products section button           |        |
            | essential mode featured message        |        |
            | essential mode featured know more link |        |
            | main products title                    |        |
            | title frequent actions                 |        |
            | button movements main card             | hidden |
            | button bills main card                 | hidden |

    @AOS002
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Always On mode in the Your products tab
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | credit card                |
            | stand in                   |
        And the user accesses to dashboard
        When the user accesses their products section
        Then the user sees the following items in the screen
            | item                                   | value  |
            | home title                             |        |
            | stand in header banner                 |        |
            | featured button                        |        |
            | your products section button           |        |
            | essential mode products message        |        |
            | essential mode products know more link |        |
            | accounts family title                  |        |
            | amounts of accounts                    |        |
            | alias of accounts                      |        |
            | balance label of accounts              |        |
            | cards family title                     |        |
            | amounts of cards                       |        |
            | alias of cards                         |        |
            | balance label of cards                 |        |
            | accounts incomes expenses link         | hidden |
            | redeem points link                     | hidden |
