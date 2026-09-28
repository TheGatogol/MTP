@internationalRefunds
Feature: International Refunds

    @IR002
    @web
    @vbank @android @ios
    @MX
    @web-done
    @smokeTest
    @backend(test)
    Scenario Outline: The User completes data from <entry_point>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        When the user complete data from "<entry_point>"
        Then the user sees the following items in the screen
            | item                                          |
            | header                                        |
            | successful response title                     |
            | successful response date                      |
            | successful response amount title              |
            | successful response amount                    |
            | successful response sender bank               |
            | successful response sender account            |
            | successful response sender                    |
            | successful response receiver alias            |
            | successful response receiver account          |
            | successful response relationship to recipient |
            | successful response reason for transfer       |
            | successful response local economic activity   |
            | successful response operation type            |
            | successful response info message              |
            | successful response share btn                 |
            | successful response exit btn                  |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |

    @IR003
    @web
    @vbank @android @ios
    @MX
    @web-done
    @backend(test)
    Scenario Outline: The User completes data from <entry_point> and an error happens
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        When the user complete wrong data from "<entry_point>"
        Then the user sees an error modal with the following elements:
            | item          |
            | icon          |
            | title         |
            | description   |
            | retry button  |
            | cancel button |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |
