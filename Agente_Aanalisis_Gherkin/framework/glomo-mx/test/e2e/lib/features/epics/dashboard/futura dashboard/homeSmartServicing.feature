@homeSmartServicing
Feature: Home Smart Servicing

    @HSS002
    @vbank @smokeTest
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Validates that at the end of a transfer
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        And the user goes to the smart servicing card
        And the user accesses to the smart servicing card
        And the user completes the reuse transfer process with otp code
        When the user access the "dashboard" screen
        Then the user sees the following items in the screen
            | item                               |
            | carousel smart servicing disappear |

    @HSS003
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Carousel hides when last shortcut is deleted
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        And the user goes to the smart servicing card
        When the user closes item smart servicing from carousel
        Then the user sees the following items in the screen
            | item                               |
            | carousel smart servicing disappear |

    @HSS004
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Item is removed when close button is clicked
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        And the user goes to the smart servicing card
        When the user closes item smart servicing from carousel
        Then the user sees the following items in the screen
            | item                                 |
            | first card smart servicing disappear |

    @HSS005
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: The user validates that the deleted item is not displayed in the carousel
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        And the user goes to view all smart servicing
        And the user closes item smart servicing from list
        When the user exist from smart servicing list
        Then the user sees the following items in the screen
            | item                                 |
            | first card smart servicing disappear |

    @HSS006
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: The user validates that selecting the discard button removes the item and makes it disappear from the list.
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        And the user goes to view all smart servicing
        When the user closes item smart servicing from list
        Then the user sees the following items in the screen
            | item                                |
            | item list smart servicing disappear |

    @HSS007
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: The user validates that the "Your shortcuts for today" screen is closed and the client is redirected to the home page
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        And the user goes to view all smart servicing
        When the user exist from smart servicing list
        Then the user sees the following items in the screen
            | item                     |
            | carousel smart servicing |

    @HSS008
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: The user validates international transfers to a saved contact
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        And the user goes to the smart servicing card
        And the user selects the "international transfer" smart servicing carousel option
        And the user selects the "prefilled transfer smart servicing" option in the international transfer flow
        When the user access the "dashboard" screen
        Then the user sees the following items in the screen
            | item                               |
            | carousel smart servicing disappear |

    @HSS009
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: The user validates international transfers without saved contacts
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        And the user goes to the smart servicing card
        When the user selects the "international transfer" smart servicing carousel option
        Then the user sees the following items in the screen
            | item                             |
            | notification message new contact |

    @HSS011
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: The user sees the blue credit card payment summary
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user selects the "credit card payment" smart servicing carousel option
        When the user selects "minimum amount" payment method and account with "MXN" currency
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | card to pay collapsed     |
            | type of payment collapsed |
            | account info collapsed    |
            | summary                   |

    @HSS012
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario Outline: The user sees the <type_card> credit card payment summary
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user selects the "credit card payment" smart servicing carousel option
        When the user selects "minimum amount" payment method and account with "MXN" currency
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | card to pay collapsed     |
            | type of payment collapsed |
            | account info collapsed    |
            | summary                   |
        Examples:
            | type_card       |
            | congelada-crea  |
            | educacion       |

    @HSS013
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: User returns to shortcuts carousel
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        And the user goes to view all smart servicing
        When the user exist from smart servicing list
        Then the user sees the following items in the screen
            | item                     |
            | carousel smart servicing |

    @HSS014
    @MX
    @ios @android @web
    @vbank @backend(test)
    @web-done
    Scenario: The user validates that the amounts are displayed hidden in the item.
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        When the user goes to the smart servicing card
        Then the user sees the following items in the screen
            | item                     |
            | carousel smart servicing |

    @HSS015
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario Outline: A <type_transfer> transfer shows summary screen
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        And the user goes to the smart servicing card
        When the user selects the "transfer" smart servicing carousel option
        Then the user sees the following items in the screen
            | item                      |
            | change destination button |
            | change amount button      |
            | change concept button     |
        Examples:
            | type_transfer |
            | own           |
            | internal      |
            | interbank     |

    @HSS017
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Card remains after Other amount payment
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user selects the "credit card payment" smart servicing carousel option
        And the user selects "another amount" payment method and account with "MXN" currency
        And the user goes to the card payment receipt operation
        When the user access the "dashboard" screen
        Then the user sees the following items in the screen
            | item                     |
            | carousel smart servicing |

    @HSS018
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Card is removed after Other amount payment above minimum
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user selects the "credit card payment" smart servicing carousel option
        And the user selects "another amount" payment method and account with "MXN" currency
        And the user goes to the card payment receipt operation
        And the user access the "dashboard" screen
        When the user goes to the smart servicing card
        Then the user sees the following items in the screen
            | item                                 |
            | first card smart servicing disappear |

    @HSS019
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Card is removed after Other amount payment
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user selects the "credit card payment" smart servicing carousel option
        And the user selects "minimum amount" payment method and account with "MXN" currency
        When the user goes to the card payment receipt operation
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | operation status |

    @HSS020
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Card is removed after end transfer
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        And the user accesses to the smart servicing card
        And the user completes the reuse transfer process with otp code
        When the user access the "dashboard" screen
        Then the user sees the following items in the screen
            | item                                 |
            | first card smart servicing disappear |
