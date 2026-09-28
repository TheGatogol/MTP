@codicelSendMoney
Feature: Codicel envio de dinero

    @CSM001
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    @backend-smoke
    Scenario: Screen Validation - Send Money
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        Then the user sees the following items in the screen
            | item                    | value    |
            | header                  |          |
            | product info            |          |
            | phone number            | enabled  |
            | search contacts         |          |
            | continue button phone   | disabled |

    @CSM002
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    @backend-smoke
    Scenario: Go back to Product Detail
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user goes back to previous page
        Then the user accesses the "product detail account" screen

    @CSM003
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    @backend-smoke
    Scenario: Phone number of destinatary
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user introduces "5533534553" as phone number
        Then the user sees the following items in the screen
            | item                  | value   |
            | continue button phone | enabled |

    @CSM004
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    @backend-smoke
    Scenario: The user sees the invitation modal
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user introduces "5566778899" as phone number
        And the user accepts the "destinatary"
        Then the user sees a modal with the following elements:
            | item               |
            | header             |
            | invitation message |
            | send invitation    |
            | cancel invitation  |
            | phone number       |

    @CSM005
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    @backend-smoke
    Scenario: The user accepts the invitation modal
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user introduces "5566778899" as phone number
        And the user accepts the "destinatary"
        And the user accepts the "invitation modal"
        Then the user sees the following items in the screen
            | item                    | value    |
            | header                  |          |
            | product info            |          |
            | phone number            | enabled  |
            | search contacts         |          |
            | continue button phone   | disabled |

    @CSM006
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    @backend-smoke
    Scenario: The user sees the ammount step
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user introduces "5533534553" as phone number
        And the user accepts the "destinatary"
        Then the user sees the following items in the screen
            | item                   | value    |
            | amount title           |          |
            | amount subtitle        |          |
            | limited amount         | enabled  |
            | continue button amount | disabled |

    @CSM007
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    @backend-smoke
    Scenario: The user adds the ammount
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user introduces "5533534553" as phone number
        And the user accepts the "destinatary"
        And the user introduces "20" as an ammount
        Then the user sees the following items in the screen
            | item                   | value   |
            | continue button amount | enabled |

    @CSM008
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    @backend-smoke
    Scenario: The user visualizes the modify destinatary confirmation modal when trying to modify it
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user introduces "5533534553" as phone number
        And the user accepts the "destinatary"
        And the user selects to modify the "destinatary"
        Then the user sees a modal with the following elements:
            | item             |
            | icon             |
            | change contact   |
            | continue process |
            | modal text       |

    @CSM009
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    @backend-smoke
    Scenario: The user completely goes to modify the destinatary from the ammount step
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user introduces "5533534553" as phone number
        And the user accepts the "destinatary"
        And the user selects to modify the "destinatary"
        And the user "accepts" the change destinatary modal
        Then the user sees the following items in the screen
            | item                    | value    |
            | header                  |          |
            | product info            |          |
            | phone number            | enabled  |
            | search contacts         |          |
            | continue button phone   | disabled |

    @CSM010
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    @backend-smoke
    Scenario: The user continues the process after initially trying to modify the destinatary
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user introduces "5533534553" as phone number
        And the user accepts the "destinatary"
        And the user selects to modify the "destinatary"
        And the user "denys" the change destinatary modal
        Then the user sees the following items in the screen
            | item                   | value    |
            | amount title           |          |
            | amount subtitle        |          |
            | limited amount         | enabled  |
            | continue button amount | disabled |

    @CSM011
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    @backend-smoke
    Scenario: The user exits the process from the ammount step
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user introduces "5533534553" as phone number
        And the user accepts the "destinatary"
        And the user goes back to previous page with exit modal
        Then the user accesses the "product detail account" screen

    @CSM012
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    @backend-smoke
    Scenario Outline: The <type> user sees the concept step
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user introduces "<phone>" as phone number
        And the user accepts the "destinatary"
        And the user introduces "20" as an ammount
        And the user accepts the "ammount"
        Then the user sees the following items in the screen
            | item                    | value   |
            | concept title           |         |
            | reference input         | <value> |
            | reference input message | <value> |
            | concept input           | enabled |
            | concept input message   | enabled |
        Examples:
            | type         | phone      | value    |
            | interbancary | 9064601500 | enabled  |
            | intrabancary | 5533534553 | disabled |

    @CSM013
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    @backend-smoke
    Scenario: The user add the reference and concept
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user introduces "9064601500" as phone number
        And the user accepts the "destinatary"
        And the user introduces "20" as an ammount
        And the user accepts the "ammount"
        And the user adds "1612240" as reference
        And the user adds "Reasons" as concept
        Then the user sees the inputs are full

    @CSM014
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    @backend-smoke
    Scenario: The user goes to modify the ammount from the concept step
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user introduces "5533534553" as phone number
        And the user accepts the "destinatary"
        And the user introduces "20" as an ammount
        And the user accepts the "ammount"
        And the user selects to modify the "ammount"
        Then the user sees the following items in the screen
            | item                   | value   |
            | amount title           |         |
            | amount subtitle        |         |
            | limited amount         | enabled |
            | continue button amount | enabled |

    @CSM015
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    @backend-smoke
    Scenario: The user sees the summary step
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user completes the operations with an "intrabancary" destinatary
        Then the user sees the following items in the screen
            | item              | value   |
            | summary title     |         |
            | summary commision |         |
            | send money button | enabled |

    @CSM016
    @alternate-scenarios-smoke
    @backend-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario: The user goes to modify the concept from the summary step
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user completes the operations with an "intrabancary" destinatary
        And the user selects to modify the "concept"
        Then the user sees the following items in the screen
            | item                    | value   |
            | concept title           |         |
            | concept input           | enabled |
            | continue button concept | enabled |

    @CSM017
    @smokeTest
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario Outline: The user successfully does an <type> transaction
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user completes the operations with an "<type>" destinatary
        And the user completes the summary
        Then the user sees the following items in the screen
            | item                     | value  |
            | header                   |        |
            | header image             |        |
            | header icon              |        |
            | main title               |        |
            | successfull amount label |        |
            | successfull amount       |        |
            | top info list            |        |
            | message                  | <type> |
            | banxico link             | <type> |
            | operations list          | <type> |
        Examples:
            | type         |
            | interbancary |
            | intrabancary |

    @CSM018
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    Scenario Outline: The user successfully exits the success screen using the <button> button
        Given a user with the following criteria
            | criteria  |
            | dimo user |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user completes the operations with an "intrabancary" destinatary
        And the user completes the summary
        And the user exits the success page through the "<button>" button
        Then the user accesses the vinculation screen
        Examples:
            | button |
            | x      |

    @CSM019
    @smokeTest
    @MX @vbank @backend(test)
    @web-done @web @ios @android
    @backend-smoke
    Scenario Outline: The user enters the concept by <type> of transfer
        Given a user with the following criteria
            | criteria      |
            | dimo transfer |
        When the user goes to the codicel send money operation
        And the user select origin account
        And the user introduces "<phone>" and "<concept>"
        Then the user sees the inputs are full
        Examples:
            | type         | phone      | concept                             |
            | intrabancary | 5533534553 | conceptoquincee                     |
            | interbancary | 9064601500 | conceptotreintaycincoconceptooooooo |
