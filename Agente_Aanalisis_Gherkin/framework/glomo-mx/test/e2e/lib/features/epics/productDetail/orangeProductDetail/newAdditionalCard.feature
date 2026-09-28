@NewAdditionalCard
Feature: New Additional Card

    @NAC001
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    @backend-smoke
    Scenario: Access to request an additional card
        Given a user with the following criteria
            | criteria            |
            | tdc additional card |
        And the user go to detail card to add cards
        And the user displays the additional credit cards module
        When the user request an additional credit card
        Then the user sees the following items in the screen
            | item               |
            | tdc header         |
            | interested button  |
            | exit header button |
            | tdc info text      |
            | tdc amount offer   |
            | tdc benefit text   |

    @NAC002
    @vbank
    @MX
    @backend(test)
    @web @ios @android @web-done
    @backend-smoke
    Scenario: Access to additional card form
        Given a user with the following criteria
            | criteria            |
            | tdc additional card |
        When the user go to request an additional credit card
        Then the user sees the following items in the screen
            | item                  |
            | data form title       |
            | input credit limit    |
            | input name            |
            | input lastname        |
            | input mother lastname |
            | input birthdate       |

    @NAC003
    @vbank
    @MX @web-done
    @web @ios @android @backend(test)
    @backend-smoke
    Scenario Outline: Additional Credit Card Step - Interact with <inputs> textbox
        Given a user with the following criteria
            | criteria            |
            | new additional card |
        When the user go to request an additional credit card
        And the user interact with "additional card" step and "active" flag state
        And the user interact with "<inputs>" step and "inactive" flag state
        Then the user sees the following items in the screen
            | item    |
            | <value> |

        Examples:
            | inputs           | value                 |
            | credit limit     | input credit limit    |
            | name             | input name            |
            | last name        | input lastname        |
            | mother last name | input mother lastname |
            | birthdate        | input birthdate       |
            | all data         | address header        |

    @NAC004
    @vbank
    @MX
    @backend(test)
    @web @ios @android @web-done
    @backend-smoke
    Scenario: Interact Shipment Address Step
        Given a user with the following criteria
            | criteria            |
            | tdc additional card |
        And the user go to request an additional credit card
        When the user interact with "shipment address" step and "active" flag state
        Then the user sees the following items in the screen
            | item           |
            | legal header   |
            | legal checkbox |

    @NAC005
    @vbank
    @MX
    @backend(test)
    @web @ios @android @web-done
    @backend-smoke
    Scenario: Interact Legal Terms Step
        Given a user with the following criteria
            | criteria            |
            | tdc additional card |
        And the user go to request an additional credit card
        When the user interact with "legal terms" step and "active" flag state
        Then the user sees the following items in the screen
            | item                  |
            | info change button    |
            | data change button    |
            | address change button |
            | legal change button   |
            | request button        |

    @NAC006
    @vbank
    @MX @backend(test) @smokeTest
    @web @ios @android @web-done
    @backend-smoke
    Scenario: Interact Summary Step
        Given a user with the following criteria
            | criteria            |
            | tdc additional card |
        And the user go to request an additional credit card
        When the user interact with "summary" step and "active" flag state
        Then the user sees the following items in the screen
            | item                |
            | Header otp          |
            | Img otp             |
            | Title otp           |
            | Input otp           |
            | Continue button otp |

    @NAC007
    @vbank
    @MX
    @backend(test)
    @web @ios @android @web-done
    @backend-smoke
    Scenario: Request an Infinite Additional Card
        Given a user with the following criteria
            | criteria               |
            | additional cc infinite |
        And the user go to request an additional credit card
        When the user interact with "summary" step and "active" flag state
        Then the user sees the following items in the screen
            | item                |
            | Header otp          |
            | Img otp             |
            | Title otp           |
            | Input otp           |
            | Continue button otp |

    @NAC008
    @vbank
    @MX
    @web @ios @android
    @web-done
    @smokeTest @backend(test)
    @backend-smoke
    Scenario: Access to Address Shipment Tooltip
        Given a user with the following criteria
            | criteria            |
            | new additional card |
        And the user go to request an additional credit card
        When the user opens help info from address step
        Then the user sees the following items in the screen
            | item           |
            | address header |

    @NAC009
    @vbank
    @MX @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: Change data from data client step
        Given a user with the following criteria
            | criteria            |
            | new additional card |
        And the user go to request an additional credit card
        And the user interact with "summary" step and "inactive" flag state
        When the user interact with "data client" step and "inactive" flag state
        Then the user sees the following items in the screen
            | item                  |
            | info change button    |
            | data change button    |
            | address change button |
            | legal change button   |
            | request button        |

    @NAC010
    @vbank
    @MX @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: Cancel requesting by exiting process
        Given a user with the following criteria
            | criteria            |
            | new additional card |
        And the user go to request an additional credit card
        When the user confirm modal
        Then the user sees the following items in the screen
            | item       |
            | card image |

    @NAC011
    @vbank
    @MX @backend(test)
    @web @ios @android @web-done
    @backend-smoke
    Scenario Outline: The <limit> limit amount is restricted
        Given a user with the following criteria
            | criteria            |
            | new additional card |
        And the user go to request an additional credit card
        When the set an amount of "<value>" pesos for credit limit
        Then the user sees the following items in the screen
            | item        |
            | limit error |

        Examples:
            | limit   | value  |
            | minimum | 10     |
            | maximum | 100000 |

    @NAC012
    @vbank
    @MX @backend(test)
    @web @ios @android @web-done
    @backend-smoke
    Scenario: Number limit of additional cards is reached
        Given a user with the following criteria
            | criteria             |
            | max additional cards |
        And the user go to detail card to add cards
        When the user displays the additional credit cards module
        Then the user does not see the following items in the screen
            | item                                  |
            | request additional credit card button |

    @NAC013
    @vbank
    @MX @backend(test)
    @web @ios @android @web-done
    @backend-smoke
    Scenario: Illegal birthdate
        Given a user with the following criteria
            | criteria            |
            | tdc additional card |
        And the user go to request an additional credit card
        And the user interact with "additional card" step and "active" flag state
        When the user interact with "birthdate" step and "inactive" flag state
        Then the user sees the following items in the screen
            | item                  |
            | input name            |
            | input lastname        |
            | input mother lastname |
            | input birthdate       |

    @NAC014
    @vbank @vbank-modified
    @MX @backend(test)
    @web @ios @android @web-done
    Scenario: Request an Additional Credit Card
        Given a user with the following criteria
            | criteria            |
            | additional card new |
        And the user go to request an additional credit card
        When the user interact with "summary" step and "active" flag state
        And the user try request additional credit card
        Then the user sees the following items in the screen
            | item              |
            | header success    |
            | tdc information   |
            | user information  |
            | email information |
            | exit button       |
            | cross icon button |

    @NAC015
    @vbank @vbank-modified
    @MX @backend(test)
    @web @ios @android @web-done
    Scenario: Request an Additional Infinite Credit Card
        Given a user with the following criteria
            | criteria               |
            | additional cc infinite |
        And the user go to request an additional credit card
        When the user interact with "summary" step and "active" flag state
        And the user try request additional credit card
        Then the user sees the following items in the screen
            | item              |
            | header success    |
            | tdc information   |
            | user information  |
            | email information |
            | exit button       |
            | cross icon button |

    @NAC016
    @vbank @vbank-modified
    @MX @backend(test)
    @web @ios @android @web-done
    Scenario: Error OTP by requesting an Additional Credit Card
        Given a user with the following criteria
            | criteria            |
            | new additional card |
        And the user go to request an additional credit card
        When the user interact with "summary" step and "active" flag state
        And the user try request additional credit card
        Then the user sees the following items in the screen
            | item          |
            | description   |
            | close button  |
            | accept button |

    @NAC017
    @vbank
    @MX @backend(test)
    @web @ios @android @web-done
    @backend-smoke
    Scenario: Branch list - access to map
        Given a user with the following criteria
            | criteria            |
            | tdc additional card |
        And the user go to request an additional credit card
        When the user access to map from address step
        Then the user sees the following items in the screen
            | item                |
            | map branch          |
            | search branch input |
