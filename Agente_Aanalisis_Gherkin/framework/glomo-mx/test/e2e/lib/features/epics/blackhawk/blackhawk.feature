@blackhawk
Feature: Blackhawk Gift Cards

    @BH001
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user accesses to gift cards for the first time
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        When the user consults more information about gift cards from the "onBoarding"
        Then the user sees the following items in the screen
            | item                |
            | information text 1  |
            | information text 2  |
            | information text 3  |
            | agree info button   |

    @BH003
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    @spherica
    Scenario: Gift Card list - More information on the list
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        And the user consults the list of card brands
        When the user consults more information about gift cards from the "list"
        Then the user sees the following items in the screen
            | item               |
            | container image    |
            | title              |
            | information text   |
            | close button right |

    @BH005
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    @spherica
    Scenario Outline: Gift Card list - FAQ <question> question
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        And the user goes to gift FAQ section
        When the user consult the "<question>" question
        Then the user sees the following items in the screen
            | item                    |
            | back faqs button right  |
            | title question          |
            | answer message          |

        Examples:
            | question |
            | first    |
            | second   |
            | third    |
            | fourth   |
            | fifth    |

    @BH006
    @MX @web @android @ios
    @backend(test) @vbank @web-done @smokeTest
    Scenario: fixed amount gift card purchase - Happy Path
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        And the user goes to purchase, choosing the "first" brand and "fixed" amount card
        And the user continues to the "summary" step of the card purchase
        When the user completes the card purchase
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | title             |
            | amount            |
            | icon card         |
            | name card         |
            | warning message   |
            | card code button  |
            | info message      |
            | share button      |

    @BH007
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Gift Card Purchase - customizable amount gift card purchase
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        And the user goes to purchase, choosing the "first" brand and "valid custom" amount card
        And the user continues to the "summary" step of the card purchase
        When the user completes the card purchase
        Then the user sees the following items in the screen
            | item              |
            | title             |
            | amount            |
            | icon card         |
            | name card         |
            | warning message   |
            | card code button  |
            | info message      |
            | share button      |

    @BH008
    @MX @web @android @ios
    @backend(test) @vbank @web-done @vbank-modified
    @alternate-scenarios-smoke
    Scenario: Gift Card Purchase - There is an error in the purchase service
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        And the user goes to purchase, choosing the "first" brand and "fixed" amount card
        And the user continues to the "summary" step of the card purchase
        When the user completes the card purchase
        Then the user sees the following items in the screen
            | item              |
            | modal header      |
            | icon image        |
            | error title       |
            | error text        |
            | retry button      |
            | cancel button     |

    @BH009
    @MX @web @android @ios
    @backend(test) @vbank @web-done @vbank-modified
    @alternate-scenarios-smoke
    Scenario: Gift Card list - There is an error in the list gift brands service
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        When the user consults the list of card brands
        Then the user sees the following items in the screen
            | item              |
            | modal header      |
            | icon image        |
            | error title       |
            | error text        |
            | retry button      |
            | cancel button     |

    @BH010
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Gift Card Purchase - the customizable amount is out of range of the card
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        When the user goes to purchase, choosing the "first" brand and "invalid custom" amount card
        Then the user sees the following items in the screen
            | item                    | value          |
            | amount header           |                |
            | amount error message    |                |
            | continue amount button  | disabled       |

    @BH011
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Gift Card Purchase - purchase with a single account with insufficient balance
        Given a user with the following criteria
            | criteria              |
            | insufficient balance  |
            | one account           |
            | blackhawk cards       |
        And the user accesses to "gift cards" operative from top up operationals
        When the user goes to purchase, choosing the "first" brand and "valid custom" amount card
        Then the user sees the following items in the screen
            | item                    | value          |
            | account header          |                |
            | account error message   |                |
            | continue account button | disabled       |

    @BH012
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: Gift Card list - check the purchase for the <brand> brand
        Given a user with the following criteria
            | criteria           |
            | multiple accounts  |
            | account in pesos   |
            | blackhawk cards    |
        And the user accesses to "gift cards" operative from top up operationals
        When the user consults the list of card brands
        And the user goes to purchase, choosing the "<brand>" brand
        Then the user sees the following items in the screen
            | item                     | value          |
            | header                   |                |
            | available cards step     | active         |

        Examples:
            | brand    |
            | first    |
            | eleventh |

    @BH014
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    Scenario: Gift Card Purchase - Confirm the operation even when the established limit is exceeded
        Given a user with the following criteria
            | criteria                               |
            | transaction approved with exceeded mtu |
        And the user accesses to "gift cards" operative from top up operationals
        And the user goes to purchase, choosing the "first" brand and "fixed" amount card
        And the user continues to the "summary" step of the card purchase
        And the user pays for a gift card with an amount greater than the established MTU
        When the user confirms the MTU exception
        Then the user sees the following items in the screen
            | item			                           |
            | close button confirmation max limit      |
            | header confirmation max limit            |
            | microillustration confirmation max limit |
            | title confirmation max limit             |
            | description confirmation max limit       |
            | button confirmation max limit            |
