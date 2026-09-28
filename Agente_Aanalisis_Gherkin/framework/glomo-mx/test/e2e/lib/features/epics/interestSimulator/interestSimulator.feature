@interestSimulator
Feature: Interest Simulator

    @IS002
    @MX
    @web
    @backend(test)
    @vbank
    @web-done @smokeTest
    Scenario: The user indicates the minimum payment in the simulator
        Given a user with the following criteria
            | criteria                       |
            | credit card user with simulate |
        And the user goes to the simulate interest
        When the user indicates "minimum payment" in the simulator
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | amount title         |
            | amount               |
            | amount description   |
            | slider               |
            | info box             |
            | approximate interest |
            | other amount button  |
            | image header         |
            | more information     |
            | pay card button      |

    @IS003
    @MX
    @web
    @backend(test)
    @vbank
    @web-done
    Scenario: The user indicates the payment so as not to generate interest
        Given a user with the following criteria
            | criteria                       |
            | credit card user with simulate |
        And the user goes to the simulate interest
        When the user indicates "payment so as not to generate interest" in the simulator
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | amount title         |
            | amount               |
            | amount description   |
            | slider               |
            | info box             |
            | approximate interest |
            | other amount button  |
            | image header         |
            | more information     |
            | pay card button      |

    @IS004
    @MX
    @web
    @backend(test)
    @vbank
    @web-done
    Scenario: The user indicates full payment in the simulator
        Given a user with the following criteria
            | criteria                       |
            | credit card user with simulate |
        And the user goes to the simulate interest
        When the user indicates "full payment" in the simulator
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | amount title         |
            | amount               |
            | amount description   |
            | slider               |
            | info box             |
            | approximate interest |
            | other amount button  |
            | image header         |
            | more information     |
            | pay card button      |

    @IS005
    @MX
    @web
    @backend(test)
    @vbank
    @web-done
    Scenario: The user enters the modal to get more information
        Given a user with the following criteria
            | criteria                       |
            | credit card user with simulate |
        And the user goes to the simulate interest
        When the user enters the modal to get more information
        Then the user sees a modal with the following elements:
            | item          |
            | headerHalf    |
            | information   |
            | close button  |

    @IS006
    @MX
    @web
    @backend(test)
    @vbank
    @web-done
    Scenario: The user enters the modal to specify an amount
        Given a user with the following criteria
            | criteria                       |
            | credit card user with simulate |
        And the user goes to the simulate interest
        When the user indicates "other amount" in the simulator
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | amount title         |
            | amount               |
            | amount description   |
            | slider               |
            | info box             |
            | approximate interest |
            | other amount button  |
            | image header         |
            | more information     |
            | pay card button      |
