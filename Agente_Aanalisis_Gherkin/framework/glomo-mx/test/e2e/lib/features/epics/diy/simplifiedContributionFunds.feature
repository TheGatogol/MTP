@simplifiedContributionFunds
Feature: Simplified Contribution Of Funds

    @FID001
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    @smokeTest
    Scenario: Succeess Operation
        Given a user with the following criteria
            | criteria                    |
            | simplified investment funds |
        And the user starts the application at date:
            | hour  | 23 |
        And the user accesses to fund product detail
        And the user accesses to the fund
        And the user accesses to buy option
        When the user "goes to" buy and complete the process
        Then the user sees the following items in the screen
            | item           |
            | icon buy       |
            | amount success |
            | share button   |
            | text buy       |

    @FID002
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    @alternate-scenarios-smoke
    Scenario Outline: Operation With <liquidity>
        Given a user with the following criteria
            | criteria |
            | <type>   |
        And the user starts the application at date:
            | hour  | <hour> |
        And the user accesses to fund product detail
        And the user accesses to the fund
        And the user accesses to buy option
        When the user "goes to" buy and complete the process
        Then the user sees the following items in the screen
            | item           |
            | icon buy       |
            | amount success |
            | share button   |
            | text buy       |
        Examples:
            | hour | liquidity                      | type                           |
            | 23   | other liquidity                | 72h liquidity investment funds |
            | 3    | out of hours instant liquidity | simplified investment funds    |
            | 15   | out of hours other liquidity   | 72h liquidity investment funds |

    @FID003
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    @alternate-scenarios-smoke
    Scenario Outline: Edit Amount Operation at <hour> with <liquidity>
        Given a user with the following criteria
            | criteria |
            | <type>   |
        And the user starts the application at date:
            | hour  | <hour> |
        And the user accesses to fund product detail
        And the user accesses to the fund
        And the user accesses to buy option
        When the user "edits" buy and complete the process
        Then the user sees the following items in the screen
            | item           |
            | icon buy       |
            | amount success |
            | share button   |
            | text buy       |
        Examples:
            | hour | liquidity                      | type                           |
            | 23   | instant liquidity              | simplified investment funds    |
            | 23   | other liquidity                | 72h liquidity investment funds |
            | 3    | out of hours instant liquidity | simplified investment funds    |
            | 3    | out of hours other liquidity   | 72h liquidity investment funds |

    @FID004
    @MX @web @ios @android
    @vbank @backend(test) @backend-smoke
    @web-done
    @alternate-scenarios-smoke
    Scenario: Exits Operation With No Changes
        Given a user with the following criteria
            | criteria                    |
            | simplified investment funds |
        And the user starts the application at date:
            | hour  | 11 |
        And the user accesses to fund product detail
        And the user accesses to the fund
        And the user accesses to buy option
        When the user closes the buy section
        Then the user sees the "fund detail" screen

    @FID005
    @MX @web @ios @android
    @vbank @backend(test) @backend-smoke
    @web-done
    @alternate-scenarios-smoke
    Scenario: Exits Operation With Changes
        Given a user with the following criteria
            | criteria                    |
            | simplified investment funds |
        And the user starts the application at date:
            | hour  | 11 |
        And the user accesses to fund product detail
        And the user accesses to the fund
        And the user accesses to buy option
        When the user does a change in the amount and confirm the exit
        Then the user sees the "fund detail" screen

    @FID006
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    @alternate-scenarios-smoke
    Scenario: Continue With The Proccess
        Given a user with the following criteria
            | criteria                    |
            | simplified investment funds |
        And the user starts the application at date:
            | hour  | 23 |
        And the user accesses to fund product detail
        And the user accesses to the fund
        And the user accesses to buy option
        When the user tries to close the section but continue with the buy
        Then the user sees the following items in the screen
            | item           |
            | icon buy       |
            | amount success |
            | share button   |
            | text buy       |

    @FID007
    @MX @web @ios @android
    @vbank @backend(test) @backend-smoke
    @web-done
    @alternate-scenarios-smoke
    Scenario Outline: The User Access to <type> Tooltip
        Given a user with the following criteria
            | criteria                    |
            | simplified investment funds |
        And the user starts the application at date:
            | hour  | 11 |
        And the user accesses to fund product detail
        And the user accesses to the fund
        When the user selects "<type>" tooltip
        Then the user sees the following items in the screen
            | item    |
            | <title> |
            | <info>  |
            | <close> |
        Examples:
            | type                 | title                    | info            | close             |
            | bonds price          | title bonds price        | info price      | button price      |
            | operation schedule   | title operation schedule | info operation  | button operation  |
            | liquidity increase   | title increase           | info increase   | button increase   |
            | liquidity withdrawal | title withdrawal         | info withdrawal | button withdrawal |
            | investment account   | title account            | info account    | button account    |

    @FID008
    @MX @web @ios @android
    @vbank @backend(test) @backend-smoke
    @web-done
    @alternate-scenarios-smoke
    Scenario Outline: Amount <type>
        Given a user with the following criteria
            | criteria                    |
            | simplified investment funds |
        And the user starts the application at date:
            | hour  | 11 |
        And the user accesses to fund product detail
        And the user accesses to the fund
        And the user accesses to buy option
        When the user enters "<amount>" as the purchase amount
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | reported amount      |
            | notification amount |
        Examples:
            | amount  | type                 |
            | 999999  | greater than allowed |
            | 10      | greater less allowed |
