@npaCreditCard
Feature: Npa Credit Card

    @PRD001
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario Outline: Display <case>
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses on non pre approved credit card "successfully"
        When the user continue to checks page
        Then the user sees the following items in the screen
            | item                    |
            | panel checks title      |
            | <item1>                 |
            | <item2>                 |
            | <item3>                 |
            | <item4>                 |
            | button continue checks  |
        Examples:
            | case                                    | user                     | item1                 | item2       | item3               | item4        |
            | CC and bureau checkboxes                | npa credit card bureau   | panel checks subtitle | text checks | link authorization  | check main   |
            | the checkbox credit card authorization  | npa credit card success  | panel bureau          | check only  | close button checks | panel checks |

    @PRD002
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done @smokeTest
    Scenario Outline: Approve a customer evaluation by the "<case>"
        Given a user with the following criteria
            | criteria         |
            | npa cc new model |
        And the user accesses on non pre approved credit card "successfully"
        And the user continue to checks page
        And the user receives approval for their request
        When the user goes to pre approved credit card from npa credit card
        Then the user sees the "credit card holder" screen
        Examples:
            | case              |
            | new model         |
            | traditional model |

    @PRD003
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario: Return to the "We need to check your data" screen
        Given a user with the following criteria
            | criteria                 |
            | npa credit card bureau   |
        And the user accesses on non pre approved credit card "successfully"
        And the user continue to checks page
        And the user open modal of authorization
        When the user close the modal authorization
        Then the user sees the following items in the screen
            | item                    |
            | panel checks subtitle   |
            | text checks             |
            | link authorization      |
            | check main              |
            | button continue checks  |

    @PRD004
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario: Exit the modal mean of the profit detail
        Given a user with the following criteria
            | criteria                 |
            | npa credit card success  |
        And the user accesses on non pre approved credit card "successfully"
        And the user open modal of benefits
        When the user close the modal benefits
        Then the user sees the following items in the screen
            | item                |
            | panel offer title   |
            | list benefits       |
            | link detail         |
            | button continue     |

    @PRD005
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario: Confirm exit from the flow and return to the access point
        Given a user with the following criteria
            | criteria                 |
            | npa credit card bureau   |
        And the user accesses on non pre approved credit card "successfully"
        And the user continue to checks page
        And the user tries to exit from the checks page
        When the user close the exit modal
        Then the user sees the "contract product section" screen

    @PRD006
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario Outline: Return to the flow from the exit modal by pressing the "<case>" button
        Given a user with the following criteria
            | criteria                 |
            | npa credit card bureau   |
        And the user accesses on non pre approved credit card "successfully"
        And the user continue to checks page
        And the user tries to exit from the checks page
        When the user closes the exit modal through the "<case>" method
        Then the user sees the following items in the screen
            | item                    |
            | panel checks title      |
            | panel checks subtitle   |
            | text checks             |
            | link authorization      |
            | check main              |
            | button continue checks  |
        Examples:
            | case  |
            | back  |
            | close |

    @PRD007
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario: Exits the flow without modification
        Given a user with the following criteria
            | criteria                 |
            | npa credit card success  |
        And the user accesses on non pre approved credit card "successfully"
        When the user close the offer page
        Then the user sees the "contract product section" screen

    @PRD008
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario Outline: Return to the entry point after being rejected by the "<case>" button.
        Given a user with the following criteria
            | criteria           |
            | npa cc traditional |
        And the user accesses on non pre approved credit card "successfully"
        And the user continue to checks page
        And the user receives approval for their request
        When the user closes the rejection modal through the "<element>" method
        Then the user sees the "contract product section" screen
        Examples:
            | case                          | element  |
            | new model, with exit          | exit     |
            | traditional model, with exit  | exit     |
            | new model, with close         | close    |
            | traditional model, with close | close    |

    @PRD009
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario Outline: Close the modal media by the "<case>" button.
        Given a user with the following criteria
            | criteria           |
            | npa cc traditional |
        And the user accesses on non pre approved credit card "successfully"
        And the user continue to checks page
        And the user receives approval for their request
        And the user proceeds to view more information
        When the user closes the media modal through the "<element>" method
        Then the user sees the following items in the screen
            | item                          |
            | internal bureau title         |
            | internal bureau bullets       |
            | internal bureau button exit   |
            | internal bureau button info   |
        Examples:
            | case                           | element      |
            | traditional model, with back   | back         |
            | new model, with back           | back         |
            | traditional model, with close  | close        |
            | new model, with close          | close        |

    @PRD010
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario: Go to profile to update information
        Given a user with the following criteria
            | criteria                    |
            | npa credit card update info |
        And the user accesses on non pre approved credit card "unsuccessfully"
        When the user go to profile
        Then the user sees the "profile" screen

    @PRD011
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario Outline: Exit the flow using the "<case>" button when prompted to update data
        Given a user with the following criteria
            | criteria                    |
            | npa credit card update info |
        And the user accesses on non pre approved credit card "unsuccessfully"
        When the user closes the lack of info modal through the "<case>" method
        Then the user sees the "contract product section" screen
        Examples:
            | case    |
            | exit    |
            | close   |

    @PRD012
    @MX @vbank
    @backend(test)
    @ios @android @web
    @backend-smoke
    @web-done
    Scenario: Scoring validation is taking more than 15 seconds and there is still no response.
        Given a user with the following criteria
            | criteria           |
            | npa cc traditional |
        And the user accesses on non pre approved credit card "successfully"
        And the user continue to checks page
        And the user receives approval for their request
        When the user closes the waiting modal
        Then the user sees the "contract product section" screen
