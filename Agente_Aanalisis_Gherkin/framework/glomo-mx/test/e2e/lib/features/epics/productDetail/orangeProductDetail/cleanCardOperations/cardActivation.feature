@cardActivation
Feature: Clean Card Activation

    @CCA001
    @web @android @ios
    @vbank @spherica
    @MX @backend(artichoke)
    @smokeTest
    @web-done
    Scenario Outline: Access to the activation operative of a clean card - Activate a clean card
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the user accesses the card activation
        And the user tries to open scanner
        When the user scans the qr code of the "inoperative" card
        Then the user sees a "full height" modal with the following elements:
            | item              | value    |
            | header            | <header> |
            | hero image full   |          |
            | title modal       | <title>  |
            | description modal |          |

        Examples:
            | header                | title                     |
            | Activación de tarjeta | Tajeta activada con éxito |

    @CCA002
    @web @android @ios
    @vbank @spherica
    @MX @backend(test)
    @web-done @backend-smoke
    Scenario: Access to the activation operative of a clean card - FAQs modal
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the user accesses the card activation
        When the user accesses more information
        Then the user sees the following items in the screen
            | item               |
            | Faqs modal         |

    @CCA003
    @web @android @ios
    @vbank
    @MX @backend(artichoke)
    @web-done
    Scenario Outline: Access to the activation operative of a clean card - The card is not eligible to be activated in the app
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card inoperative atm error" "credit" card product detail
        And the user accesses the card activation
        And the user tries to open scanner
        When the user scans the qr code of the "atm error" card
        Then the user sees a "full height" modal with the following elements:
            | item          | value    |
            | header        | <header> |
            | hero image    |          |
            | description   |          |
            | accept button |          |

        Examples:
            | header          |
            | Activar tarjeta |

    @CCA004
    @web @android @ios
    @vbank @spherica
    @MX @backend(artichoke)
    @web-done
    Scenario Outline: Access to the activation operative of a clean card - Operation process error
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card inoperative process error" "credit" card product detail
        And the user accesses the card activation
        And the user tries to open scanner
        When the user scans the qr code of the "process error" card
        Then the user sees a "full height" modal with the following elements:
            | item              | value     |
            | header            | <header>  |
            | hero image full   |           |
            | message           | <message> |
            | description modal |           |
            | accept button     |           |
            | cancel button     |           |

        Examples:
            | header | message                        |
            | Error  | <b>Activación no realizada</b> |

    @CCA005
    @web @android @ios
    @vbank @spherica
    @MX @backend(artichoke)
    @web-done
    Scenario Outline: Access to the activation operative of a clean card - Exceeds the limit of attempts
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card inoperative exceeded attempts" "credit" card product detail
        And the user accesses the card activation
        And the user tries to open scanner
        When the user scans the qr code of the "exceeded attempts" card
        Then the user sees a "full height" modal with the following elements:
            | item                  | value           |
            | header                | <header>        |
            | hero image full       |                 |
            | message               | <message>       |
            | description modal     |                 |
            | accept button         | <accept_button> |
            | cancel button         |                 |

        Examples:
            | header | message                        | accept_button       |
            | Error  | <b>Activación no realizada</b> | Llamar a Línea BBVA |

    @CCA006
    @web @android @ios
    @vbank @spherica
    @MX @backend(artichoke)
    @web-done
    Scenario Outline: Access to the activation operative of a clean card - QR code scanned is invalid
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the user accesses the card activation
        And the user tries to open scanner
        When the user scans the qr code of the "visualization error" card
        Then the user sees a "full height" modal with the following elements:
            | item                  | value     |
            | header                | <header>  |
            | hero image icon       |           |
            | message title         | <message> |
            | description           |           |
            | accept button         |           |
            | cancel button         |           |

        Examples:
            | header | message                        |
            | Error  | <b>No pudimos leer este QR</b> |

    @CCA007
    @web @android @ios
    @vbank
    @MX @backend(artichoke)
    @web-done
    Scenario: Access to the activation operative of a clean card - Card activated in the Orange Card Detail
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the user accesses the card activation
        And the user tries to open scanner
        When the user scans the qr code of the "inoperative" card
        And the user closes the successful card activation screen
        Then the user accesses the "Orange Card Detail" screen

    @CCA008
    @web @android @ios
    @vbank
    @MX @backend(test)
    @web-done @backend-smoke
    Scenario: The user cancel the operation from the activate card screen
        Given a user with the following criteria
            | criteria               |
            | clean card operative   |
            | card activation        |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the user accesses the card activation
        When the user goes back to orange card product detail
        Then the user sees the following items in the screen
            | item 				   | value   |
            | header 			   |         |
            | onoff action	       | disable |
            | digital card payment | enable  |
            | card alias           | enable  |
            | card image           |         |

    @CCA009
    @web @android @ios
    @vbank @manual @JIRA.GLOMOGL-20021
    @MX @backend(test)
    Scenario: The user exit the screen scan qr
        Given a user with the following criteria
            | criteria               |
            | clean card operative   |
            | card activation        |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the user accesses the card activation
        And the user accesses scan qr
        When the user exit scan qr
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | icon card             |
            | more information link |
            | scan button           |

    @CCA010
    @web @android @ios
    @vbank
    @MX @backend(test)
    @web-done
    Scenario: The user enters an active credit card
        Given a user with the following criteria
            | criteria               |
            | clean card operative   |
            | card activation        |
        When the user accesses to the "operative" "credit" card product detail
        Then the user sees the following items in the screen
            | item                           | value       |
            | header 			             |             |
            | generate digital card action   | enable      |
            | card activation button         | not visible |
            | onoff action	                 | enable      |
            | card alias                     | enable      |
            | card image                     |             |

    @CCA011
    @web @android @ios
    @vbank
    @MX @backend(test)
    @manual @JIRA.GLOMOGL-31643
    Scenario: The user activates the credit card through CVV
        Given a user with the following criteria
            | criteria               |
            | clean card inoperative |
            | card activation cvv    |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the user accesses the card activation cvv
        When the user activates a card through cvv
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | exit button    |
            | icon help      |
            | information 	 |
            | understood     |

    @CCA012
    @web @android @ios
    @vbank
    @MX @backend(test)
    @web-done
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: The user consults the credit card help screen
        Given a user with the following criteria
            | criteria               |
            | clean card inoperative |
            | card activation cvv    |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the user accesses the card activation cvv
        When the user accesses help button
        Then the user sees the following items in the screen
            | item                |
            | header modal        |
            | exit button modal   |
            | icon help modal     |
            | information modal	  |
            | understood modal    |

    @CCA013
    @web @android @ios
    @vbank
    @MX @backend(test)
    @web-done
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: The user cancels the credit card activation process
        Given a user with the following criteria
            | criteria               |
            | clean card inoperative |
            | card activation cvv    |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the user accesses the card activation cvv
        When the user goes back to orange card product detail
        Then the user sees the following items in the screen
            | item                           | value       |
            | header 			             |             |
            | generate digital card action   | enable      |
            | card activation button         |             |
            | onoff action	                 | disable     |
            | card alias                     | enable      |
            | card image                     |             |

    @CCA014
    @web @android @ios
    @vbank
    @MX @backend(test)
    @web-done
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: The user continues the credit card activation process
        Given a user with the following criteria
            | criteria               |
            | clean card inoperative |
            | card activation cvv    |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the user accesses the card activation cvv
        When the user continue in card activation cvv
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | exit button     |
            | help button     |
            | input cvv	      |
            | continue button |
