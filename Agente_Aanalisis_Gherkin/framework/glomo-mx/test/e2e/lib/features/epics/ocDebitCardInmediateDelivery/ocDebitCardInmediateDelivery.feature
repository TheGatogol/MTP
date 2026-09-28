@ocDebitCardInmediateDelivery
Feature: Oc Debit Card Inmediate Delivery

    @LINCA002
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Validate the contracting of a TDD link card, selecting My address
        Given a user with the following criteria
            | criteria       |
            | linkcard offer |
        And the user accesses to childs linkcard
        And the user taps the "finish resume" in the debit card immediate delivery screen
        When the user finishes the process
        Then the user sees the following items in the screen
            | item              |
            | success header    |
            | success exit      |
            | success time      |
            | success account   |
            | success address   |
            | success date      |
            | success color     |
            | success alias     |
            | success comission |
            | success folio     |
            | success message   |
            | success caution   |

    @LINCA003
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Link Show address
        Given a user with the following criteria
            | criteria       |
            | linkcard offer |
        And the user accesses to childs linkcard
        When the user taps the "hide address" in the debit card immediate delivery screen
        Then the user sees the following items in the screen
            | item              |
            | show address text |

    @LINCA004
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @smokeTest
    @backend-smoke
    Scenario: Contracting a TDD Link Card, selecting Other address with internal number address
        Given a user with the following criteria
            | criteria       |
            | linkcard offer |
        And the user accesses to childs linkcard
        And the user taps the finish resume with another address and with internal number
        When the user finishes the process
        Then the user sees the following items in the screen
            | item              |
            | success header    |
            | success exit      |
            | success time      |
            | success account   |
            | success address   |
            | success reference |
            | success date      |
            | success color     |
            | success alias     |
            | success comission |
            | success folio     |
            | success message   |
            | success caution   |

    @LINCA005
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Contracting a TDD Link Card, selecting Other address without internal number address
        Given a user with the following criteria
            | criteria       |
            | linkcard offer |
        And the user accesses to childs linkcard
        And the user taps the finish resume with another address and without internal number
        When the user finishes the process
        Then the user sees the following items in the screen
            | item              |
            | success header    |
            | success exit      |
            | success time      |
            | success account   |
            | success address   |
            | success reference |
            | success date      |
            | success color     |
            | success alias     |
            | success comission |
            | success folio     |
            | success message   |
            | success caution   |

    @LINCA006
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Confirm that 4 card design options are displayed
        Given a user with the following criteria
            | criteria       |
            | linkcard offer |
        And the user accesses to childs linkcard
        When the user taps the "list of covers card step" in the debit card immediate delivery screen
        Then the user sees the following items in the screen
            | item              |
            | first card cover  |
            | second card cover |
            | third card cover  |
            | four card cover   |

    @LINCA007
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Modify link on the summary screen of the Shipping Address section
        Given a user with the following criteria
            | criteria       |
            | linkcard offer |
        And the user accesses to childs linkcard
        And the user taps the "finish resume" in the debit card immediate delivery screen
        When the user modifies the address from the request summary
        Then the user sees the following items in the screen
            | item                 |
            | my direction button  |
            | show address button  |
            | other address button |
            | privacy modal button |

    @LINCA008
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Modify link on the summary screen of the Personalization section
        Given a user with the following criteria
            | criteria       |
            | linkcard offer |
        And the user accesses to childs linkcard
        And the user taps the "finish resume" in the debit card immediate delivery screen
        When the user modifies the card cover from the request summary
        Then the user sees the following items in the screen
            | item                  |
            | first card cover      |
            | second card cover     |
            | third card cover      |
            | four card cover       |
            | nickname              |
            | card covers button    |

    @LINCA009
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Confirm that the "Privacy Notice" pop-up screen is displayed
        Given a user with the following criteria
            | criteria       |
            | linkcard offer |
        And the user accesses to childs linkcard
        When the user taps the "privacy modal" in the debit card immediate delivery screen
        Then the user sees the following items in the screen
            | item                         |
            | privacy header title         |
            | privacy header exit button   |
            | first paragraph              |
            | second paragraph             |

    @LINCA010
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Validate that you exit the process after the offer page
        Given a user with the following criteria
            | criteria       |
            | linkcard offer |
        And the user accesses to childs linkcard
        When the user leaves the linkcard flow from offer step
        And the user accesses to more information card
        Then the user sees the following items in the screen
            | item                       | value  |
            | header                     |        |
            | Card image full            | enable |
            | Copy pan action            |        |
            | Detail Card action         |        |

    @LINCA011
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Validate that the process is abandoned after adding at least one card on the summary screen
        Given a user with the following criteria
            | criteria       |
            | linkcard offer |
        And the user accesses to childs linkcard
        When the user leaves the linkcard flow from multistep step
        Then the user sees the following items in the screen
            | item                       | value   |
            | header                     |         |
            | Card image                 | enable  |
            | Copy pan action            | visible |
            | Detail Card action         | visible |

    @LINCA012
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Validate that the process is not abandoned after adding at least one card on the summary screen
        Given a user with the following criteria
            | criteria       |
            | linkcard offer |
        And the user accesses to childs linkcard
        When the user continues the linkcard process
        Then the user sees the following items in the screen
            | item                 |
            | my direction button  |
            | show address button  |
            | other address button |
            | privacy modal button |

    @LINCA013
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Modify link on the summary screen of the Personalization section and change nickname
        Given a user with the following criteria
            | criteria       |
            | linkcard offer |
        When the user accesses to childs linkcard
        And the user taps the "finish resume" in the debit card immediate delivery screen
        And the user modifies the card cover from the request summary
        And the user updates the card nickname in the personalization section
        Then the user sees the following items in the screen
        | item                        |
        | summary header              |
        | summary close button        |
        | associated account section  |
        | shipping address section    |
        | card personalization section |
        | summary success button      |

    @LINCA014
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Modify link on the summary screen of the Personalization section and continue without change
        Given a user with the following criteria
            | criteria       |
            | linkcard offer |
        And the user accesses to childs linkcard
        When the user taps the "finish resume" in the debit card immediate delivery screen
        And the user modifies the card cover from the request summary
        And the user continues step card cover
        Then the user sees the following items in the screen
        | item                        |
        | summary header              |
        | summary close button        |
        | associated account section  |
        | shipping address section    |
        | card personalization section |
        | summary success button      |
