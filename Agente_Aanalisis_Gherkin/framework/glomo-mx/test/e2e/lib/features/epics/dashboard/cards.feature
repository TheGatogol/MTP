@dashboard_cards
Feature: Dashboard Cards

    @DC001 @vbank
    @MX @web @android @ios
    @smokeTest
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Product with single currency in credit cards
        Given a user with the following criteria
            | criteria        |
            | dashboard cards |
            | single currency |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                   | currency    |
            | header                 |             |
            | greeting               |             |
            | help button            |             |
            | sidebar                |             |
            | title                  | no-currency |
            | alias                  | MXN         |
            | card image             | MXN         |
            | primary amount         | MXN         |
            | number                 | MXN         |
            | label primary amount   | MXN         |
            | secondary amount       | MXN         |
            | label secondary amount | MXN         |

    @DC002 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Product with single currency in virtual credit card
        Given a user with the following criteria
            | criteria        |
            | dashboard cards |
            | virtual card    |
            | single currency |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                   | currency    |
            | header                 |             |
            | greeting               |             |
            | help button            |             |
            | sidebar                |             |
            | title                  | no-currency |
            | alias                  | MXN         |
            | icon virtual card      | MXN         |
            | card image             | MXN         |
            | primary amount         | MXN         |
            | label primary amount   | MXN         |
            | number                 | MXN         |
            | secondary amount       | MXN         |
            | label secondary amount | MXN         |

    @DC003 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Product with single currency in debit card
        Given a user with the following criteria
            | criteria        |
            | dashboard cards |
            | single currency |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item        | currency    |
            | header      |             |
            | greeting    |             |
            | help button |             |
            | sidebar     |             |
            | title       |             |
            | alias       | MXN         |
            | card image  | MXN         |
            | number      | MXN         |

    @DC004 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Product with single currency in virtual debit card
        Given a user with the following criteria
            | criteria           |
            | dashboard cards    |
            | virtual debit card |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item              | currency    |
            | header            |             |
            | greeting          |             |
            | help button       |             |
            | sidebar           |             |
            | title             |             |
            | alias             | MXN         |
            | icon virtual card | MXN         |
            | card image        | MXN         |
            | number            | MXN         |

    @DC005 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: Product <status> status with single currency in debit card
        Given a user with the following criteria
            | criteria          |
            | dashboard cards   |
            | debit card status |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                 | currency    |
            | header               |             |
            | greeting             |             |
            | help button          |             |
            | sidebar              |             |
            | title                |             |
            | alias                | MXN         |
            | card image           | MXN         |
            | number               | MXN         |
            | status message right | MXN         |
        Examples:
            | status            |
            | inoperative       |
            | blocked           |
            | canceled          |
            | pending_delivery  |
            | pending_embossing |
            | expired           |
            | off               |

    @DC006 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: Product <status> status with single currency in credit card
        Given a user with the following criteria
            | criteria           |
            | dashboard cards    |
            | credit card status |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                   | currency    |
            | header                 |             |
            | greeting               |             |
            | help button            |             |
            | sidebar                |             |
            | title                  | no-currency |
            | alias                  | MXN         |
            | card image             | MXN         |
            | primary amount         | MXN         |
            | number                 | MXN         |
            | label primary amount   | MXN         |
            | secondary amount       | MXN         |
            | label secondary amount | MXN         |
            | status message below   | MXN         |
        Examples:
            | status            |
            | inoperative       |
            | blocked           |
            | canceled          |
            | pending_delivery  |
            | pending_embossing |
            | off               |

    @DC007 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: Product <cardStatus> status with single currency in additional credit cards
        Given a user with the following criteria
            | criteria                      |
            | dashboard cards               |
            | additional credit card status |
        When the user accesses to the "operative" "credit" card product detail
        And the user displays additional cards
        Then the user sees the following items in the screen
            | item                     |
            | header                   |
            | card image               |
            | additional card title    |
            | additional card image    |
            | additional card amount   |
            | <cardStatus> additional  |
        Examples:
            | cardStatus         |
            | operative          |
            | inactive           |
            | blocked            |
            | expired            |
            | canceled           |
            | pending delivery   |
            | pending embossing  |
            | off                |

    @DC008 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: Product <status> status with single currency in business debit card
        Given a user with the following criteria
            | criteria                      |
            | dashboard cards               |
            | business debit card status    |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                 | currency    |
            | header               |             |
            | greeting             |             |
            | help button          |             |
            | sidebar              |             |
            | title                |             |
            | alias                | MXN         |
            | card image           | MXN         |
            | number               | MXN         |
            | status message right | MXN         |
        Examples:
            | status            |
            | inoperative       |
            | blocked           |
            | canceled          |
            | pending_delivery  |
            | pending_embossing |
            | expired           |
            | off               |

    @DC009 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @vbank-modified @alternate-scenarios-smoke
    Scenario: Error in the card service
        Given a user with the following criteria
            | criteria        |
            | dashboard cards |
            | error service   |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | sidebar                 |
            | dashboard error heading |
            | dashboard error message |
            | dashboard exit button   |
