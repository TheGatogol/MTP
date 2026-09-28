@ocAdditionalCreditCard
Feature: OC Additional Credit Card

    @TCA001
    @vbank
    @MX
    @web @ios @android
    @web-done
    @smokeTest
    @spherica
    @backend(test)
    Scenario Outline: The user <scenario> accesses to additional credit card
        Given a user with the following criteria
            | criteria                          |
            | additional credit card <scenario> |
        And the user accesses to the "<card>" "credit" card product detail
        And the user displays the additional credit cards module
        When the user accesses to additional credit card
        Then the user sees the following items in the screen:
            | item                             |
            | header offer page                |
            | panel container offer page       |
            | additional card panel offer page |
            | benefits offer page              |
            | considerations offer page        |
            | message data privacy offer page  |
            | privacy link offer page          |
            | continue button offer page       |
        Examples:
            | scenario    | card     |
            | renapo      | gold     |
            | patrimonial | infinite |

    @TCA002
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario Outline: The user <scenario> goes to the additional card step
        Given a user with the following criteria
            | criteria                          |
            | additional credit card <scenario> |
        And the user accesses to the "<card>" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        When the user goes to the "additional card" step
        Then the user sees the following items in the screen:
            | item                                    | value    |
            | header additional card                  |          |
            | description additional card             |          |
            | input amount additional card            |          |
            | description person data additional card |          |
            | input name additional card              |          |
            | input last name additional card         |          |
            | input second last name additional card  |          |
            | input birthdate additional card         |          |
            | input form select additional card       |          |
            | description gender additional card      |          |
            | gender man additional card              |          |
            | gender woman additional card            |          |
            | gender binary additional card           |          |
            | notification message additional card    |          |
            | button continue additional card         | disabled |
        Examples:
            | scenario    | card     |
            | renapo      | gold     |
            | patrimonial | infinite |

    @TCA003
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    @spherica
    @backend-smoke
    Scenario Outline: The user completes the <scenario> screen
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        When the user goes to the "<step>" step
        Then the user sees the following items in the screen:
            | item            | value       |
            | <expected-item> | enabled     |
        Examples:
            | scenario                 | step                              | expected-item                        |
            | additional card form     | fill out the additional card form | button continue additional card      |
            | my home shipping address | my home                           | button continue shipping address     |
            | terms and conditions     | accept terms and conditions       | button continue terms and conditions |

    @TCA004
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario Outline: The user <scenario> goes to the shipping address step
        Given a user with the following criteria
            | criteria                          |
            | additional credit card <scenario> |
        And the user accesses to the "<card>" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        When the user goes to the "shipping address" step
        Then the user sees the following items in the screen:
            | item                             | value       |
            | header shipping address          |             |
            | <desc> shipping address          |             |
            | <title> shipping address         |             |
            | <location> shipping address      |             |
            | <show_location> shipping address |             |
            | button continue shipping address | <isEnabled> |
        Examples:
            | scenario    | card     | desc                    | title             | location                  | show_location             | isEnabled |
            | renapo      | gold     | description             | my home           | branch                    | show address              | disabled  |
            | patrimonial | infinite | description patrimonial | title patrimonial | show location patrimonial | show location patrimonial | enabled   |

    @TCA005
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario Outline: The user <scenario> goes to the terms and conditions step
        Given a user with the following criteria
            | criteria                          |
            | additional credit card <scenario> |
        And the user accesses to the "<card>" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        When the user goes to the "terms and conditions" step
        Then the user sees the following items in the screen:
            | item                                 | value    |
            | header terms and conditions          |          |
            | description terms and conditions     |          |
            | checkbox option terms and conditions |          |
            | button continue terms and conditions | disabled |
        Examples:
            | scenario    | card     |
            | renapo      | gold     |
            | patrimonial | infinite |

    @TCA006
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    @backend-smoke
    Scenario: The user goes to the summary step
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        When the user goes to the "summary" step
        Then the user sees the following items in the screen:
            | item                       |
            | multistep all completed    |
            | summary card holder        |
            | confirmation all completed |

    @TCA007
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario Outline: The user <scenario> accesses the success screen
        Given a user with the following criteria
            | criteria                          |
            | additional credit card <scenario> |
        And the user accesses to the "<card>" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        And the user goes to the "hire" step
        When the user confirms the token signature
        Then the user sees the following items in the screen:
            | item                    |
            | header success modal    |
            | close success modal     |
            | date success modal      |
            | card success modal      |
            | name success modal      |
            | folio success modal     |
            | operative success modal |
        Examples:
            | scenario    | card     |
            | renapo      | gold     |
            | patrimonial | infinite |

    @TCA008
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    @backend-smoke
    Scenario: The user displays the full address
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        When the user goes to the "show address" step
        Then the user sees the following items in the screen:
            | item                         |
            | deobfuscate shipping address |

    @TCA009
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: The user patrimonial displays the full address
        Given a user with the following criteria
            | criteria                           |
            | additional credit card patrimonial |
        And the user accesses to the "infinite" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        When the user goes to the "show heritage office" step
        Then the user sees the following items in the screen:
            | item                             | value   |
            | button continue shipping address | enabled |

    @TCA010
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    @backend-smoke
    Scenario: The user reviews the modified additional card data
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        And the user goes to the "summary" step
        When the user modifies the "additional card" step
        Then the user sees the following items in the screen:
            | item                                    | value   |
            | header additional card                  |         |
            | description additional card             |         |
            | input amount additional card            |         |
            | description person data additional card |         |
            | input name additional card              |         |
            | input last name additional card         |         |
            | input second last name additional card  |         |
            | input birthdate additional card         |         |
            | input form select additional card       |         |
            | description gender additional card      |         |
            | gender man additional card              |         |
            | gender woman additional card            |         |
            | gender binary additional card           |         |
            | notification message additional card    |         |
            | button continue additional card         | enabled |

    @TCA011
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    @backend-smoke
    Scenario: The user edits the information of his additional card
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        And the user goes to the "summary" step
        And the user modifies the "additional card" step
        When the user modifies the "renapo information" step
        Then the user sees the following items in the screen:
            | item                                   | value   |
            | input amount additional card           |         |
            | input name additional card             |         |
            | input last name additional card        |         |
            | input second last name additional card |         |
            | button continue additional card        | enabled |

    @TCA012
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    @backend-smoke
    Scenario: The user presses edit additional card
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        And the user goes to the "summary" step
        And the user modifies the "additional card" step
        When the user proceeds to "continue additional card" step
        Then the user sees the following items in the screen:
            | item                                   |
            | summary amount additional card         |
            | summary name additional card           |
            | summary birthdate additional card      |
            | summary place of birth additional card |
            | summary gender additional card         |

    @TCA013
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    @backend-smoke
    Scenario: The user confirms that the terms and conditions button is enabled
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        And the user goes to the "summary" step
        When the user modifies the "terms and conditions" step
        Then the user sees the following items in the screen:
            | item                                 | value   |
            | button continue terms and conditions | enabled |

    @TCA014
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    @backend-smoke
    Scenario: The user presses edit terms and conditions
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        And the user goes to the "summary" step
        And the user modifies the "terms and conditions" step
        When the user proceeds to "continue terms and conditions" step
        Then the user sees the following items in the screen:
            | item                       |
            | multistep all completed    |
            | confirmation all completed |

    @TCA015
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    @backend-smoke
    Scenario: The user returns to the card detail section screen
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        When the user navigates back to the card details section in the "card detail"
        Then the user sees the "orange card detail" screen

    @TCA016
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    @backend-smoke
    Scenario: The user completes the flow and presses the exit button
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        And the user goes to the "summary" step
        When the user proceeds to "open modal exit" step
        Then the user sees the following items in the screen:
            | item                              |
            | header generic modal              |
            | close generic modal               |
            | content description generic modal |
            | exit button generic modal         |
            | accept button generic modal       |

    @TCA017
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    @backend-smoke
    Scenario: The user completes the flow and returns to the card details section screen
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        And the user goes to the "summary" step
        When the user navigates back to the card details section in the "exit flow"
        Then the user sees the "orange card detail" screen

    @TCA018
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    @backend-smoke
    Scenario: The user opens the privacy notice
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        When the user goes to the "privacy notice" step
        Then the user sees the following items in the screen:
            | item                        |
            | header generic modal        |
            | close generic modal         |
            | paragraph generic modal     |
            | paragraph two generic modal |

    @TCA019
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    @backend-smoke
    Scenario Outline: The user <step>
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        When the user goes to the "<step>" step
        Then the user sees the following items in the screen:
            | item            |
            | <expected-item> |
        Examples:
            | step                  | expected-item                      |
            | enter lower balance   | error the balance                  |
            | enter maximum balance | error the balance                  |
            | resets the name field | invalid input name additional card |

    @TCA020
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    @backend-smoke
    Scenario: The user has an error when entering their last name
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        When the user goes to the "reset input last name" step
        Then the user sees the following items in the screen:
            | item                                    |
            | invalid input last name additional card |

    @TCA021
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    @backend-smoke
    Scenario: The user only fills in one last name
        Given a user with the following criteria
            | criteria                      |
            | additional credit card renapo |
        And the user accesses to the "gold" "credit" card product detail
        And the user displays the additional credit cards module
        And the user accesses to additional credit card
        When the user goes to the "fill in only 1 last name" step
        Then the user sees the following items in the screen:
            | item                            | value   |
            | button continue additional card | enabled |
