@mobileTopUpPackages
Feature: Mobile Top Up Packages

    @MTUP001
    @MX
    @vbank @backend(test)
    @ios @android @web
    @manual @JIRA.GLOMOMX-267301
    Scenario: Navigate the mobile top up packages welcome menu by swiping
        Given a user with the following criteria
            | criteria                   |
            | mobile top up packages     |
            | mtup user with tdd and tdc |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        When the user navigates the onboarding page "by swiping"
        Then the user sees the following items in the screen
            | item                                 |
            | play button                          |
            | back button                          |
            | next button                          |
            | exit button                          |
            | onboarding third page main message   |
            | onboarding third page bottom message |
            | onboarding accept button             |

    @MTUP002
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Navigate the mobile top up packages welcome menu with the play button
        Given a user with the following criteria
            | criteria                   |
            | mobile top up packages     |
            | mtup user with tdd and tdc |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        When the user navigates the onboarding page "with the play button"
        Then the user sees the following items in the screen
            | item                                  |
            | play button                           |
            | back button                           |
            | next button                           |
            | exit button                           |
            | onboarding second page main message   |
            | onboarding second page bottom message |
            | onboarding accept button              |

    @MTUP003
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Navigate the mobile top up packages welcome menu with the next and back button
        Given a user with the following criteria
            | criteria                   |
            | mobile top up packages     |
            | mtup user with tdd and tdc |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        When the user navigates the onboarding page "with the next and back button"
        Then the user sees the following items in the screen
            | item                                 |
            | play button                          |
            | back button                          |
            | next button                          |
            | exit button                          |
            | onboarding first page main message   |
            | onboarding accept button             |

    @MTUP004
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Close the mobile top up packages welcome screen with exit button
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        When the user "exits the onboarding" from mobile top up packages
        Then the user sees the "top up" screen

    @MTUP005
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @smokeTest
    Scenario: Top up to a new Telcel number and save contact
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills the form for a new "Telcel" number with name "Veronica" "saving the contact"
        And the user selects the "package" of "150" MXN and select "an account" as payment method
        When the user confirms the mobile top up package purchase
        Then the user sees the following items in the screen
            | item                   |
            | otp page header        |
            | otp page exit button   |
            | otp page icon          |
            | otp page text          |
            | otp page input         |
            | otp page accept button |

    @MTUP006
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Top up Telcel to saved contact
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user selects a saved "Telcel" contact and a "150" MXN "package"
        And the user selects "an account" as payment method
        When the user confirms the mobile top up package purchase
        Then the user sees the following items in the screen
            | item                   |
            | otp page header        |
            | otp page exit button   |
            | otp page icon          |
            | otp page text          |
            | otp page input         |
            | otp page accept button |

    @MTUP007
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: View the more information screen of the cell phone top up step
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills the form for a new "Telcel" number with name "Jose" "saving the contact"
        When the user reads package information
        Then the user sees the following items in the screen
            | item                            |
            | header modal                    |
            | modals close button             |
            | title modal more information    |
            | modal icon                      |
            | terms and conditions label      |

    @MTUP008
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Validate consultation of telcel package list
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills the form for a new "Telcel" number with name "Alfonso" "saving the contact"
        When the user acceses to all "complete packages list"
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | amount step header     |
            | amount current step    |
            | package step label     |
            | packages list          |
            | view more link         |
            | package information    |
            | amount continue button |

    @MTUP009
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Modify top up from summary screen
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills a new "Telcel" contact and selects a "150" MXN "package"
        And the user selects "an account" as payment method
        When the user decides to modify the "amount"
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | amount step header     |
            | amount current step    |
            | package step label     |
            | packages list          |
            | view more link         |
            | package information    |
            | amount continue button |

    @MTUP010
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Modify payment method from summary screen
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user selects a saved "Telcel" contact and a "150" MXN "package"
        And the user selects "an account" as payment method
        When the user decides to modify the "payment method"
        Then the user sees the following items in the screen
            | item                 |
            | payment step header  |
            | payment step label   |
            | payment current step |
            | accounts             |

    @MTUP011
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @smokeTest
    Scenario: Top up to a new bait number by paying with credit card
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdc     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills a new "Bait" contact and selects a "125" MXN "amount"
        And the user selects "a credit card" as payment method
        When the user confirms the mobile top up package purchase
        Then the user sees the following items in the screen
            | item                   |
            | otp page header        |
            | otp page exit button   |
            | otp page icon          |
            | otp page text          |
            | otp page input         |
            | otp page accept button |

    @MTUP012
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Top up to new AT&T number and save contact
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills the form for a new "AT&T" number with name "Manuel" "saving the contact"
        And the user selects the "amount" of "150" MXN and select "an account" as payment method
        When the user confirms the mobile top up package purchase
        Then the user sees the following items in the screen
            | item                   |
            | otp page header        |
            | otp page exit button   |
            | otp page icon          |
            | otp page text          |
            | otp page input         |
            | otp page accept button |

    @MTUP013
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Top up to a bait saved contact
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user selects a saved "Bait" contact and a "125" MXN "amount"
        And the user selects "an account" as payment method
        When the user confirms the mobile top up package purchase
        Then the user sees the following items in the screen
            | item                   |
            | otp page header        |
            | otp page exit button   |
            | otp page icon          |
            | otp page text          |
            | otp page input         |
            | otp page accept button |

    @MTUP014
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Validate when user decides not to save contact
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        When the user fills the form for a new "AT&T" number with name "Daniel" "without saving"
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | amount step header              |
            | amount current step             |
            | amounts list                    |
            | amount continue button disabled |

    @MTUP015
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: Modify contact data when making a top up for <company>
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills a new "<company>" contact and selects a "<amount>" MXN "<amount_type>"
        And the user decides to modify the "contact"
        When the user chooses to "confirm" from the modal
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | new contact label  |
            | new contact button |
            | new contact form   |

        Examples:
            | company  | amount_type | amount |
            | Telcel   | package     | 150    |
            | Bait     | amount      | 125    |

    @MTUP016
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: Close modify top up modal using <action> button
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills a new "Telcel" contact and selects a "150" MXN "package"
        And the user decides to modify the "contact"
        When the user chooses to "<action>" from the modal
        Then the user sees the following items in the screen
            | item                 |
            | payment step header  |
            | payment step label   |
            | payment current step |
            | accounts             |

        Examples:
            | action |
            | cancel |
            | exit   |

    @MTUP017
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Modify amount
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills a new "Telcel" contact and selects a "150" MXN "package"
        When the user decides to modify the "amount"
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | amount step header     |
            | amount current step    |
            | package step label     |
            | packages list          |
            | view more link         |
            | package information    |
            | amount continue button |

    @MTUP018
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Modify amount when saved contact was selected
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user selects a saved "Telcel" contact and a "150" MXN "package"
        When the user decides to modify the "amount"
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | amount step header     |
            | amount current step    |
            | package step label     |
            | packages list          |
            | view more link         |
            | package information    |
            | amount continue button |

    @MTUP019
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Modify payment method when user only has accounts
        Given a user with the following criteria
            | criteria                     |
            | mobile top up packages       |
            | mtup user has accounts       |
            | mtup user has credit cards   |
            | mtup user has saved contacts |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user selects a saved "Telcel" contact and a "150" MXN "package"
        And the user selects "an account" as payment method
        When the user decides to modify the "payment method" and select another account
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | contact step resumen content |
            | amount step resumen content  |
            | payment step resumen content |
            | confirmation step            |

    @MTUP020
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Cancel top up
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills a new "Telcel" contact and selects a "150" MXN "package"
        And the user selects "an account" as payment method
        When the user attemps to exit and "confirm exit" from mobile top up packages
        Then the user sees the "top up" screen

    @MTUP021
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Continue with operation
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills a new "Telcel" contact and selects a "150" MXN "package"
        And the user selects "an account" as payment method
        When the user attemps to exit and "continue with the operation" from mobile top up packages
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | contact step resumen content |
            | amount step resumen content  |
            | payment step resumen content |
            | confirmation step            |

    @MTUP022
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: Validate screen <case>
        Given a user with the following criteria
            | criteria                     |
            | mobile top up packages       |
            | mtup user has accounts       |
            | mtup user has credit cards   |
            | mtup user has saved contacts |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills a new "<company>" contact and selects a "<amount>" MXN "<amount_type>"
        And the user acceses to all "<case>"
        When the user "<action>" from the expanded list
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | contact step resumen content |
            | amount step resumen content  |
            | payment step resumen content |
            | confirmation step            |

        Examples:
            | case         | company | amount | amount_type | action                |
            | accounts     | Telcel  | 150    | package     | selects an account    |
            | credit cards | Bait    | 125    | amount      | selects a credit card |

    @MTUP023
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Validate close accounts screen
        Given a user with the following criteria
            | criteria                     |
            | mobile top up packages       |
            | mobile top up packages       |
            | mtup user has accounts       |
            | mtup user has credit cards   |
            | mtup user has saved contacts |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills a new "Bait" contact and selects a "100" MXN "amount"
        And the user acceses to all "collapsible accounts"
        When the user "chooses to close" from the expanded list
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | collapsible accounts list |
            | collapsible cards list    |

    @MTUP024
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: View contact list
        Given a user with the following criteria
            | criteria                     |
            | mobile top up packages       |
            | mobile top up packages       |
            | mtup user has accounts       |
            | mtup user has credit cards   |
            | mtup user has saved contacts |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user accesses the saved contacts from contact step
        When the user acceses to all "contacts"
        Then the user sees the following items in the screen
            | item                    |
            | all contacts header     |
            | all contacts search bar |
            | all contacts list       |

    @MTUP025
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Delete a contact from address book
        Given a user with the following criteria
            | criteria                     |
            | mobile top up packages       |
            | mtup user has accounts       |
            | mtup user has credit cards   |
            | mtup user has saved contacts |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user decides to delete a contact
        When the user chooses to "delete" from the modal
        Then the user deletes the contact successfully

    @MTUP026
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Cancel delete a contact from the address book
        Given a user with the following criteria
            | criteria                     |
            | mobile top up packages       |
            | mtup user has accounts       |
            | mtup user has credit cards   |
            | mtup user has saved contacts |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user decides to delete a contact
        When the user chooses to "cancel deletion" from the modal
        Then the user sees the following items in the screen
            | item                         |
            | saved contacts label         |
            | saved contacts subheader     |
            | saved contacts view all link |
            | saved contacts list          |

    @MTUP027
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Add an additional number to a saved contact
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills the form for a new "Bait" number with name "Brenda" "saving the contact"
        When the user chooses to "add additional number" from the modal
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | amount step header     |
            | amount current step    |
            | amounts list           |
            | amounts information    |
            | amount continue button |

    @MTUP028
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Change alias when entering alias in use
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills the form for a new "Bait" number with name "Brenda" "saving the contact"
        When the user chooses to "change the alias" from the modal
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | new contact label  |
            | new contact button |
            | new contact form   |

    @MTUP029
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Error message when top up fails
        Given a user with the following criteria
            | criteria                     |
            | mobile top up packages       |
            | mtup user has accounts       |
            | mtup user has credit cards   |
            | mtup user has saved contacts |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user selects a saved "Bait" contact and a "125" MXN "amount"
        And the user selects "a credit card" as payment method
        When the user confirms the mobile top up purchase and completes the otp
        Then the user sees the following items in the screen
            | item                 |
            | header modal         |
            | modal title          |
            | modal confirm button |
            | modal icon           |

    @MTUP030
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Save contact error
        Given a user with the following criteria
            | criteria                     |
            | mobile top up packages       |
            | mtup user has accounts       |
            | mtup user has credit cards   |
            | mtup user has saved contacts |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills the form for a new "Bait" number with name "Kalev" "saving the contact"
        When the user retries to save the contact "3" times
        Then the user sees the following items in the screen
            | item                 |
            | header modal         |
            | modals close button  |
            | modal icon           |
            | modal title          |
            | modal confirm button |

    @MTUP031
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Account insufficient balance error
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        When the user selects a saved "Telcel" contact and a "150" MXN "package"
        Then the user sees the following items in the screen
            | item                               |
            | payment step header                |
            | payment step label                 |
            | payment current step               |
            | accounts                           |
            | insufficient balance account       |
            | insufficient balance account title |

    @MTUP032
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Credit card insufficient balance error
        Given a user with the following criteria
            | criteria                     |
            | mobile top up packages       |
            | mtup user has accounts       |
            | mtup user has credit cards   |
            | mtup user has saved contacts |
        And the user accesses the top up packages page from the operationals page
        And the user accesses to page top up packages
        And the user fills a new "Bait" contact and selects a "125" MXN "amount"
        When the user open credit cards list
        Then the user sees the following items in the screen
            | item                             |
            | payment step header              |
            | payment current step             |
            | insufficient balance card        |
            | insufficient balance card title  |
