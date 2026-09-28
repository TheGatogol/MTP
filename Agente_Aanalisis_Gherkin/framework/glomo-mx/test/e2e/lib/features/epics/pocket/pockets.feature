@pockets
Feature: Pockets

    @POC001
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario Outline: Welcome - validate screen when there are no pockets created with <user>
        Given a user with the following criteria
            | criteria |
            | <user>   |
        When the user accesses information about the savings
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | close       |
            | icon        |
            | title       |
            | continue    |
            | description |
            | info        |
        Examples:
            | user                    |
            | account with payroll    |
            | account without payroll |

    @POC002
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario Outline: Create pocket - validate first step <user>
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to pockets screen
        When the user accesses to create pocket
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | account           |
            | title account     |
            | account found     |
            | title pocket      |
            | count pocket      |
            | input pocket      |
            | input text pocket |
            | message pocket    |
            | continue pocket   |
        Examples:
            | user                    |
            | account with payroll    |
            | account without payroll |

    @POC003
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario Outline: Create pocket - validate write <value> in the input name
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to create pocket
        When the user writes "<value>" in the pocket name
        Then the user sees the following items in the screen
            | item         | value    | status   |
            | header       |          |          |
            | input pocket | <result> | <status> |
        Examples:
            | value     | result    | status   |
            | pago amex | pago amex |          |
            | ñ´ç+`+@   |           | disabled |

    @POC004
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Create pocket - the user deletes the characters from the input
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to create pocket
        When the user writes "pago amex" in the pocket name
        And the user clears the pocket name
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | input pocket |

    @POC005
    @web
    @MX @vbank @backend(qa) @web-done @android @alternate-scenarios-smoke @ios
    Scenario: Create pocket - validate amount step
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to create pocket
        When the user writes "pago amex" in the pocket name
        And the user continues the process
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | amount title           |
            | count two              |
            | amount input           |
            | amount message input   |
            | scheduled amount title |
            | scheduled help icon    |
            | scheduled checbox      |
            | scheduled input amount |
            | continue amount        |

    @POC006
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario Outline: Create pocket - validate write <value> in the input amount
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to amount multistep
        When the user writes "<value>" in the pocket amount
        Then the user sees the following items in the screen
            | item         | value    |
            | header       |          |
            | amount input | <result> |
        Examples:
            | value     | result |
            | pago amex |        |
            | 220       | 220    |

    @POC007
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Create pocket - validate scheduled amount help modal
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to amount multistep
        When the user wants to know info about scheduled pocket amount
        Then the user sees the following items in the screen
            | item                                    |
            | header                                  |
            | scheduled help screen title             |
            | scheduled help screen icon              |
            | first description scheduled help screen |
            | last description scheduled help screen  |
            | accept scheduled help screen            |

    @POC008
    @web
    @MX @vbank @backend(qa) @web-done @android @alternate-scenarios-smoke @ios
    Scenario Outline: Create pocket - the user selects <element> to close scheduled modal screen
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to amount multistep
        And the user wants to know info about scheduled pocket amount
        When the user selects "<element>" to close the screen
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | amount title           |
            | count two              |
            | amount input           |
            | amount message input   |
            | scheduled amount title |
            | scheduled help icon    |
            | scheduled checbox      |
            | scheduled input amount |
            | continue amount        |
        Examples:
            | element       |
            | accept button |
            | close screen  |

    @POC009
    @web @smokeTest
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Happy path - create pocket
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to create pocket
        When the user writes "pago amex" in the pocket name
        And the user continues the process
        And the user writes "2000" in the pocket amount
        And the user choose check pocket
        And the user writes "2800" in the scheduled pocket amount
        And the user accept pockets
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | title            |
            | icon             |
            | date             |
            | pocket name      |
            | pocket amount    |
            | scheduled amount |
            | pocket account   |
            | invoice          |
            | email            |
            | message          |
            | quit             |

    @POC010
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario Outline: Create pocket - close success screen with <element>
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pocket creation success screen
        When the user select "<element>" success screen
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | operative create pocket |
            | operative short pocket  |
            | pocket title            |
            | pocket amount           |
            | pocket list             |
        Examples:
            | element     |
            | quit button |
            | close       |

    @POC011
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Create pocket - validate write <value> in scheduled pocket amount
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to amount multistep
        When the user choose check pocket
        And the user writes "@h?=ª!l!" in the scheduled pocket amount
        Then the user sees the following items in the screen
            | item                   | value |
            | header                 |       |
            | scheduled input amount |       |

    @POC012
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Create pocket - validate pocket summary
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to amount multistep
        When the user writes "2000" in the pocket amount
        And the user choose check pocket
        And the user writes "2800" in the scheduled pocket amount
        And the user continues the process pocket
        Then the user sees the following items in the screen
            | item                             |
            | header                           |
            | summary pocket title             |
            | change pocket name               |
            | summary pocket name              |
            | summary amount title             |
            | change pocket amount             |
            | summary pocket amount            |
            | summary scheduled amount         |
            | summary amount message           |
            | summary message                  |
            | amount summary section           |
            | scheduled amount summary section |
            | summary continue                 |

    @POC013
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Create pocket - validate pocket summary without payroll
        Given a user with the following criteria
            | criteria                |
            | account without payroll |
        And the user accesses to amount multistep
        When the user writes "2000" in the pocket amount
        And the user continues the process pocket
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | summary pocket title   |
            | change pocket name     |
            | summary pocket name    |
            | summary amount title   |
            | change pocket amount   |
            | summary pocket amount  |
            | summary amount message |
            | summary message        |
            | amount summary section |
            | summary continue       |

    @POC014
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Create pocket - create pocket only with money
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to amount multistep
        When the user writes "2000" in the pocket amount
        And the user accept pockets
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | title          |
            | icon           |
            | date           |
            | pocket name    |
            | pocket amount  |
            | pocket account |
            | invoice        |
            | quit           |

    @POC015
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Create pocket - Create pocket only with scheduled amount
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to amount multistep
        When the user choose check pocket
        And the user writes "2800" in the scheduled pocket amount
        And the user accept pockets
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | title          |
            | icon           |
            | date           |
            | pocket name    |
            | pocket amount  |
            | pocket account |
            | invoice        |
            | message        |
            | quit           |

    @POC016
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario Outline: Create pocket - Create pocket with <value> and withouth payroll
        Given a user with the following criteria
            | criteria                |
            | account without payroll |
        And the user accesses to amount multistep
        When the user writes "<value>" in the pocket amount
        And the user accept pockets
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | title          |
            | icon           |
            | date           |
            | pocket name    |
            | pocket amount  |
            | pocket account |
            | invoice        |
            | quit           |
        Examples:
            | value |
            | 2000  |
            | 0     |

    @POC017
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Happy path - go to pockets screen
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        When the user accesses to pockets screen
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | operative create pocket |
            | operative short pocket  |
            | pocket title            |
            | pocket amount           |
            | pocket list             |

    @POC018
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Pocket detail - go to pocket detail
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        When the user accesses to "pago mex" pocket
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | pocket name                |
            | pocket amount              |
            | scheduled amount           |
            | withdrawals operation      |
            | add money operation        |
            | edit operation             |
            | delete operation           |
            | empty title                |
            | image                      |
            | activity empty description |

    @POC019
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Pocket detail - go to pocket detail when have activity
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        When the user accesses to pocket detail screen when is "true"
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | pocket name           |
            | pocket amount         |
            | scheduled amount      |
            | withdrawals operation |
            | add money operation   |
            | edit operation        |
            | delete operation      |
            | activity              |
            | show all activity     |

    @POC020
    @web @smokeTest
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Happy path - the user see all activity pocket
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        When the user accesses to pocket detail screen when is "true"
        And the user accesses to all activity
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | list of activity |

    @POC021
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: happy path - Add Money
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to add money screen
        When the user writes the amount to add and continue
        And the user confirm the process
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | title                 |
            | icon                  |
            | date                  |
            | add money amount      |
            | add money pocket name |
            | add money account     |
            | add money invoice     |
            | email                 |
            | share                 |
            | quit                  |

    @POC022
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Add money - validate multistep
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        When the user accesses to add money screen
        Then the user sees the following items in the screen
            | item          | value    |
            | header        |          |
            | source        |          |
            | destination   |          |
            | input         |          |
            | input message |          |
            | continue      | disabled |

    @POC023
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Add money - the user deletes the characters from the input of add money
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to add money screen
        When the user writes "2000" in the add money amount
        And the user clears the input of add money amount
        Then the user sees the following items in the screen
            | item     | value    |
            | header   |          |
            | input    |          |
            | continue | disabled |

    @POC024
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Screen validation - validate input of add money
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to add money screen
        When the user writes "ñ´ç+`+@" in the add money amount
        Then the user sees the following items in the screen
            | item     | value    |
            | header   |          |
            | input    |          |
            | continue | disabled |

    @POC025
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Screen validation - go to summary of add money
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to add money screen
        When the user writes the amount to add and continue
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | change amount          |
            | summary amount         |
            | summary amount message |
            | amount section         |
            | accept                 |

    @POC026
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Screen validation - close add money success screen
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to add money success screen
        When the user select "quit button" add money success screen
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | pocket name           |
            | pocket amount         |
            | scheduled amount      |
            | withdrawals operation |
            | add money operation   |
            | edit operation        |
            | delete operation      |
            | activity              |
            | show all activity     |

    @POC027
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Delete Pocket - delete pocket
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to pocket detail screen when is "false"
        When the user removes pocket
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | title           |
            | icon            |
            | date            |
            | import returned |
            | pocket account  |
            | invoice         |
            | email           |
            | quit            |

    @POC028
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Screen validation - verify modal of delete pocket
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to pocket detail screen when is "false"
        When the user access the pocket "delete" operative
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | delete accept      |
            | delete cancel      |
            | delete icon        |
            | delete description |

    @POC029
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario Outline: Screen validation - Cancel pocket delete operation with <money>
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to "<money>" pocket
        When the user access the pocket "delete" operative
        And the user cancel pocket delete operation
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | pocket name           |
            | pocket amount         |
            | scheduled amount      |
            | withdrawals operation |
            | add money operation   |
            | edit operation        |
            | delete operation      |
            | activity              |
        Examples:
            | money    |
            | funds    |
            | no funds |

    @POC030
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario Outline: Delete Pocket - Close success screen whit <element> of delete pocket
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        When the user accesses to pocket detail screen when is "true"
        And the user removes pocket
        And the user select "<element>" delete success screen
        Then the user sees the following items in the screen
            | item                    | value    |
            | header                  |          |
            | operative create pocket |          |
            | operative short pocket  | <status> |
            | pocket title            |          |
            | pocket amount           |          |
            | pocket list             |          |
        Examples:
            | element     | status   |
            | quit button |          |
            | close       | disabled |

    @POC031
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario Outline: Edit pocket - Cancel editing process when <user>
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to pockets screen
        And the user accesses to pocket detail screen when is "false"
        When the user access the pocket "edit" operative
        And the user writes "RENTA" in the edit pocket name
        And the user cancel edit pocket
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | pocket name           |
            | pocket amount         |
            | withdrawals operation |
            | add money operation   |
            | edit operation        |
            | delete operation      |
            | activity              |

        Examples:
            | user                    |
            | account with payroll    |
            | account without payroll |

    @POC032
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario Outline: Edit pocket - Exit success screen with <element>
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to pocket detail screen when is "false"
        When the user access the pocket "edit" operative
        And the user writes "100" in the edit scheduled amount
        And the user confirm the process
        And the user select "<element>" edit pocket success screen
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | pocket name                |
            | pocket amount              |
            | scheduled amount           |
            | withdrawals operation      |
            | add money operation        |
            | edit operation             |
            | delete operation           |
            | empty title                |
            | image                      |
            | activity empty description |
        Examples:
            | element     |
            | quit button |
            | close       |

    @POC033
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: happy path - Edit pocket whit payroll
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to edit pocket screen
        When the user writes "3000" in the edit scheduled amount
        And the user confirm the process
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | edit icon             |
            | edit date             |
            | edit pocket name      |
            | edit scheduled amount |
            | edit email            |
            | invoice               |
            | message               |
            | quit                  |

    @POC034
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Edit pocket - Edit pocket without payroll
        Given a user with the following criteria
            | criteria                |
            | account without payroll |
        And the user accesses to edit pocket screen
        When the user writes "editar" in the edit pocket name
        And the user confirm the process
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | edit icon        |
            | edit date        |
            | edit pocket name |
            | invoice          |
            | quit             |

    @POC035
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario Outline: Screen validation - one pocket with <user>
        Given a user with the following criteria
            | criteria |
            | <user>   |
        When the user accesses to pockets screen
        Then the user sees the following items in the screen
            | item                    | value    |
            | header                  |          |
            | operative create pocket |          |
            | operative short pocket  | <status> |
            | pocket title            |          |
            | pocket amount           |          |
            | pocket list             |          |
        Examples:
            | user                    | status   |
            | account with payroll    |          |
            | account without payroll | disabled |

    @POC036
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Max pocket limit - modal informative
        Given a user with the following criteria
            | criteria                      |
            | max pocket limit with payroll |
        And the user accesses to pockets screen
        When the user tries to access to the create pocket operative
        Then the user sees a modal with the following elements:
            | item                |
            | pocket limit icon   |
            | pocket limit info   |
            | accept button       |

    @POC037
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Max pocket limit - accept modal informative
        Given a user with the following criteria
            | criteria                      |
            | max pocket limit with payroll |
        And the user accesses to pockets screen
        When the user tries to access to the create pocket operative
        And the user accepts the modal
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | operative create pocket |
            | operative short pocket  |
            | pocket title            |
            | pocket amount           |
            | pocket list             |

    @POC038
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario Outline: <user> - Go back to pockets
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to pockets screen
        When the user tries to access to the create pocket operative
        And the user accepts the modal
        Then the user sees the following items in the screen
            | item                    | value    |
            | header                  |          |
            | operative create pocket |          |
            | operative short pocket  | <status> |
            | pocket title            |          |
            | pocket amount           |          |
            | pocket list             |          |
        Examples:
            | user                             | status   |
            | max pocket limit with payroll    |          |
            | max pocket limit without payroll | disabled |

    @POC039
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Create pocket - validation account with no balance
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to amount multistep
        When the user writes "0" in the pocket amount
        And the user accept pockets
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | title          |
            | icon           |
            | date           |
            | pocket name    |
            | pocket amount  |
            | pocket account |
            | invoice        |
            | quit           |

    @POC040
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Create pocket - insufficient balance
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        When the user accesses to create pocket
        And the user writes "pago amex" in the pocket name
        And the user continues the process
        And the user writes "1000000000000" in the pocket amount
        Then the user sees the following items in the screen
            | item                       | value    |
            | continue amount            | disabled |
            | input amount message error |          |

    @POC041
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario Outline: Add money - insufficient balance with <criteria>
        Given a user with the following criteria
            | criteria   |
            | <criteria> |
        And the user accesses to add money screen
        When the user writes "100000000" in the add money amount
        Then the user sees the following items in the screen
            | item                | value    |
            | continue            | disabled |
            | input error message |          |
        Examples:
            | criteria                |
            | account with payroll    |
            | account without payroll |

    @POC042
    @web @ios @android @alternate-scenarios-smoke
    @MX @vbank @backend(qa) @web-done
    Scenario: Savings withdrawal - Validate elements
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        When the user accesses to "withdrawals" pocket
        And the user access the pocket "withdrawal" operative
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | source pocket       |
            | destination account |
            | icon                |
            | message             |
            | input               |
            | input message       |
            | continue button     |

    @POC043
    @web @ios @android @alternate-scenarios-smoke
    @MX @vbank @backend(qa) @web-done
    Scenario: Savings withdrawal - Happy path
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to "withdrawals" pocket
        And the user access the pocket "withdrawal" operative
        When the user enters "2000" for pocket withdrawal and continues
        And the user confirm the process
        Then the user sees the following items in the screen
            | item               |
            | title              |
            | icon               |
            | date               |
            | withdrawal amount  |
            | withdrawal account |
            | withdrawal invoice |
            | email              |
            | share              |
            | quit               |

    @POC044
    @web @ios @android @alternate-scenarios-smoke
    @MX @vbank @backend(qa) @web-done
    Scenario Outline: Savings withdrawal - exit success with <button> option
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to "withdrawals" pocket
        And the user access the pocket "withdrawal" operative
        And the user enters "2000" for pocket withdrawal and continues
        And the user confirm the process
        When the user select "<button>" withdrawal success screen
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | pocket name           |
            | pocket amount         |
            | scheduled amount      |
            | withdrawals operation |
            | add money operation   |
            | edit operation        |
            | delete operation      |
            | activity              |
        Examples:
            | button      |
            | quit button |
            | close       |

    @POC045
    @web @ios @android @alternate-scenarios-smoke
    @MX @vbank @backend(qa) @web-done
    @tmpExclude @JIRA.GLOMOGL-34070
    Scenario: Savings withdrawal - verify operative
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to "withdrawals" pocket
        When the user access the pocket "withdrawal" operative
        And the user enters "60000" for pocket withdrawal
        Then the user sees the following items in the screen
            | item                |
            | input error message |

    @POC046
    @web @ios @android @alternate-scenarios-smoke
    @MX @vbank @backend(qa) @web-done
    Scenario: Savings withdrawal - verify summary withdrawal
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to "withdrawals" pocket
        And the user access the pocket "withdrawal" operative
        When the user enters "2000" for pocket withdrawal and continues
        Then the user sees the following items in the screen
            | item                   |
            | summary change button  |
            | summary amount         |
            | summary amount message |
            | summary amount section |

    @POC047
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Delete Pocket - try to delete pocket three times
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to pocket detail screen when is "false"
        When the user retrie "3" delete pocket three times
        Then the user sees a "small" error with the following elements:
            | item          |
            | warning icon  |
            | title         |
            | description   |
            | accept button |

    @POC048
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Delete Pocket - close error message
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to pocket detail screen when is "false"
        When the user retrie "1" delete pocket three times
        And the user try delete pocket and close error message
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | operative create pocket |
            | operative short pocket  |
            | pocket title            |
            | pocket amount           |
            | pocket list             |

    @POC049
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke @manual @JIRA.GLOMOGL-26301
    Scenario: Sort Pocket - move pocket
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        When the user access the pocket "sort" operative
        And the user move "fund" to the top of the list
        And the user save the changes
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | success icon |
            | success text |

    @POC050
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Edit pocket - Remove programming
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to pocket detail screen when is "false"
        When the user access the pocket "edit" operative
        And the user removes scheduled amount
        And the user confirm the process
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | edit icon        |
            | edit date        |
            | edit pocket name |
            | edit email       |
            | invoice          |
            | quit             |

    @POC051
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke @manual @JIRA.GLOMOGL-26301
    Scenario: Sort Pocket - close sort pocket screen
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        When the user access the pocket "sort" operative
        And the user move "fund" to the top of the list
        And the user save the changes and close the screen
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | operative create pocket |
            | operative short pocket  |
            | pocket title            |
            | pocket amount           |
            | pocket list             |

    @POC052
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke @manual @JIRA.GLOMOGL-26301
    Scenario: Sort Pocket - validate informative modal
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        When the user access the pocket "sort" operative
        And the user move "fund" to the top of the list
        And the user closes the screen
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | informative icon  |
            | informative text  |
            | quit without save |
            | save and quit     |

    @POC053
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke @manual @JIRA.GLOMOGL-26301
    Scenario: Sort Pocket - close the screen and select save option
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        When the user access the pocket "sort" operative
        And the user move "fund" to the top of the list
        And the user closes the screen
        And the user select save and quit option
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | success icon |
            | success text |

    @POC054
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke @manual @JIRA.GLOMOGL-26301
    Scenario: Sort Pocket - the user select close without save option
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        When the user access the pocket "sort" operative
        And the user move "fund" to the top of the list
        And the user closes the screen
        And the user select close without save option
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | operative create pocket |
            | operative short pocket  |
            | pocket title            |
            | pocket amount           |
            | pocket list             |

    @POC055
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Sort Pocket - validate sort pockets screen
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        When the user access the pocket "sort" operative
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | first pocket |
            | description  |
            | save         |

    @POC056
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Verify elements of the alert message
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to pocket detail screen when is "false"
        When the user access the pocket "edit" operative
        And the user writes "INTERNET" in the edit pocket name
        And the user exits edit pocket
        Then the user sees the following items in the screen
            | item                  |
            | exit edit modal       |
            | continue edit modal   |

    @POC057
    @web
    @MX @vbank @backend(qa) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Verify changes made
        Given a user with the following criteria
            | criteria             |
            | account with payroll |
        And the user accesses to pockets screen
        And the user accesses to pocket detail screen when is "false"
        When the user access the pocket "edit" operative
        And the user writes "INTERNET" in the edit pocket name
        And the user saves his changes
        Then the user sees the following items in the screen
            | item                  | value         |
            | input name edit       | INTERNET      |
