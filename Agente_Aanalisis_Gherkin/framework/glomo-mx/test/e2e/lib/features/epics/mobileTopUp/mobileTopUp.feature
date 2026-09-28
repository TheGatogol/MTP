@mobile_top_up
Feature: Mobile Top Up

    @MTU001
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @backend-smoke
    @vbank-modified
    #Added new feature flags to app settings service
    Scenario: The user with an account insufficent balanceto accesses the mobile top-up.
        Given a user with the following criteria
            | criteria                    |
            | profile user mobile         |
            | account insufficent balance |
        When the user accesses to operationals page
        And the user accesses to page top up
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | back button   |
            | error message |

    @MTU002
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @backend-smoke
    @vbank-modified
    #Added new feature flags to app settings service
    Scenario: The user accesses to the mobile top-up with view more accounts.
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | accounts            |
        And the user accesses to operationals page
        And the user accesses to page top up
        When the user "accesses view more accounts" in step 1
        Then the user sees the following items in the screen
            | item            |
            | header accounts |
            | close button    |
            | my accounts     |

    @MTU003
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @backend-smoke
    @vbank-modified
    #Added new feature flags to app settings service
    Scenario Outline: The user accesses confirm mobile top-up.
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to operationals page
        And the user accesses to page top up
        And the user accesses the "my phone number" from mobile top up
        And the user select the company "<company>"
        Then the user selects the amount of "<amount>" in step 3 to access "confirm mobile top-up" screen

        Examples:
            | company | amount |
            | UNEFON  | 50     |

    @MTU004
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @backend-smoke
    @vbank-modified
    #Added new feature flags to app settings service
    Scenario Outline: The user accesses sign operation mobile top-up.
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to operationals page
        And the user accesses to page top up
        And the user accesses the "my phone number" from mobile top up
        And the user select the company "<company>"
        Then the user selects the amount of "<amount>" in step 3 to access "sign operation" screen

        Examples:
            | company | amount |
            | UNEFON  | 50     |

    @MTU005
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @backend-smoke
    @vbank-modified
    #Added new feature flags to app settings service
    Scenario: The user accesses to mobile top-up with sufficient balance in accounts.
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | accounts            |
        When the user accesses to operationals page
        And the user accesses to page top up
        And the user "select one account" in step 1
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | new            |
            | my number      |
            | saved contacts |

    @MTU006
    @MX
    @vbank @backend(test) @no-spherica
    @ios @android @web
    @web-done
    @vbank-modified
    #Added new feature flags to app settings service
    Scenario Outline: The user performs the mobile top-up using the "my new phone number" option to "<case>"
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to operationals page
        And the user accesses to page top up
        And the user accesses the "my new phone number" from mobile top up
        And the user completes the form for a new number with these data: "<phoneNumber>", "<company>", "<name>", "<alias>", "<screen>"
        And the user selects the amount of "<amount>" in step 3 to access "the review" screen
        Then the user sees the following items in the screen
            | item                   | value           |
            | header success         | <success_value> |
            | header pending         | <pending_value> |
            | header section success | <success_value> |
            | header section pending | <pending_value> |
            | title                  | <title_value>   |
            | body section           |                 |
            | additional info        | <infobox_value> |
            | share button           | <success_value> |

        Examples:
            | phoneNumber | company  | name      | alias | amount | screen               | case                                      | success_value | pending_value | title_value | infobox_value |
            | 5561289375  | TELCEL   | Elizat    | Elizt | 50     | save unknown contact | save an unknown contact                   |               | not visible   | success     |               |
            | 5563278345  | MOVISTAR | Patricio  |       | 50     | unknown contact      | not save unknown contact                  |               | not visible   | success     | not visible   |
            | 5562450892  |          |           |       | 100    | known contact        | known contact with operator already added |               | not visible   | success     | not visible   |
            | 5612202427  | BAIT     | Alejandro | Alex  | 125    | save unknown contact | save an unknown contact bait success      |               | not visible   | success     | not visible   |
            | 5612202427  | BAIT     | Juan      |       | 65     | unknown contact      | not save unknown contact bait pending     | not visible   |               | pending     |               |

    @MTU007
    @MX
    @vbank @backend(test)
    @ios @android @web
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank-modified
    @no-spherica
    #Added new feature flags to app settings service
    Scenario Outline: The user performs the mobile top-up using the "contacts agenda" option to "<case>"
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to operationals page
        And the user accesses to page top up
        And the user accesses the "contacts agenda" from mobile top up
        And the user select the contact "<name>"
        And the user selects the amount of "<amount>" in step 3 to access "the review" screen
        Then the user sees the following items in the screen
            | item                   | value           |
            | header success         | <success_value> |
            | header pending         | <pending_value> |
            | header section success | <success_value> |
            | header section pending | <pending_value> |
            | title                  | <title_value>   |
            | body section           |                 |
            | additional info        | <infobox_value> |
            | share button           | <success_value> |

        Examples:
            | name       | amount | case                            | success_value | pending_value | title_value | infobox_value |
            | Mi Compa 1 | 50     | select the movistar company     |               | not visible   | success     | not visible   |
            | Javier     | 50     | select the telcel company       |               | not visible   | success     |               |
            | Prueba3    | 50     | select the at&t company         |               | not visible   | success     | not visible   |
            | Jorge      | 50     | select the unefon company       |               | not visible   | success     | not visible   |
            | Alex       | 125    | select the bait company success |               | not visible   | success     | not visible   |
            | Alex       | 65     | select the bait company pending | not visible   |               | pending     |               |

    @MTU008
    @MX
    @vbank @backend(test) @no-spherica
    @ios @android @web
    @web-done
    @vbank-modified
    #Added new feature flags to app settings service
    Scenario Outline: The user performs the mobile top-up using the "my phone number" option to "<case>"
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to operationals page
        And the user accesses to page top up
        And the user accesses the "my phone number" from mobile top up
        And the user select the company "<company>"
        And the user selects the amount of "<amount>" in step 3 to access "the review" screen
        Then the user sees the following items in the screen
            | item                   | value           |
            | header success         | <success_value> |
            | header pending         | <pending_value> |
            | header section success | <success_value> |
            | header section pending | <pending_value> |
            | title                  | <title_value>   |
            | body section           |                 |
            | additional info        | <pending_value> |
            | share button           | <success_value> |

        Examples:
            | company  | amount | case                            | success_value | pending_value | title_value |
            | UNEFON   | 50     | select the unefon company       |               | not visible   | success     |
            | AT&T     | 100    | select the at&t company         |               | not visible   | success     |
            | MOVISTAR | 50     | select the movistar company     |               | not visible   | success     |
            | BAIT     | 65     | select the bait company         |               | not visible   | success     |
            | BAIT     | 100    | select the bait company pending | not visible   |               | pending     |

    @MTU009
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @backend-smoke
    @vbank-modified
    #Added new feature flags to app settings service
    Scenario Outline: The user validates the mobile recharge amount change flow from the summary screen
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to operationals page
        And the user accesses to page top up
        And the user accesses the "my phone number" from mobile top up
        And the user select the company "<company>"
        And the user selects the amount of "<amount>" in step 3 to access "confirm mobile top-up" screen
        And the user selects change link from the amount section
        Then the user sees the following items in the screen
            | item                |
            | top-up amount title |
            | description         |
            | amount options      |
            | continue button     |

        Examples:
            | company | amount |
            | UNEFON  | 50     |

    @MTU010
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @serverError @vbank-modified
    #Added new feature flags to app settings service
    Scenario Outline: Error message: the user tries performs to mobile recharge using "my phone number"
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to operationals page
        And the user accesses to page top up
        And the user accesses the "my phone number" from mobile top up
        And the user select the company "<company>"
        And the user selects the amount of "<amount>" in step 3 to access "the modal error" screen
        Then the user sees an error modal with the following elements:
            | item          |
            | error icon    |
            | description   |
            | accept button |

        Examples:
            | company | amount |
            | UNEFON  | 100    |

    @MTU011
    @MX
    @vbank @backend(test) @no-spherica
    @smokeTest
    @ios @android @web
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank-modified
    #Added new feature flags to app settings service
    Scenario Outline: The user cancels the process of performs the mobile top-up using the "contacts agenda"
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to operationals page
        And the user accesses to page top up
        And the user accesses the "contacts agenda" from mobile top up
        And the user select the contact "<name>"
        And the user selects the amount of "<amount>" in step 3 to access "sign operation" screen
        Then the user cancels the operation of mobile top up

        Examples:
            | name       | amount |
            | Mi Compa 1 | 50     |

    @MTU012
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    #Added new feature flags to app settings service
    Scenario Outline: Predictive account detail - <case>
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to operationals page
        And the user accesses to page top up
        And the user accesses the "my new phone number" from mobile top up
        And the user completes the form for a new number with these data: "<phoneNumber>", "", "", "", "<screen>"
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | close button |
            | <button>     |
            | <item>       |

        Examples:
            | phoneNumber  | screen          | item                   | case                                          | button                    |
            | 5562450892   | known contact   | amount options         | Using Payee's Cell Number - New contact       | continue button           |
            | 5561288375   | unknown contact | input beneficiary name | Using the phoneNumber of the beneficiary when | continue button recipient |
            | 556128839080 | 10 numbers      | input phone number     | The number is displayed in the input          | continue button recipient |

    @MTU013
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @serverError @vbank-modified
    Scenario: Error message: the user tries to performs mobile top up duplicated
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to operationals page
        And the user accesses to page top up
        And the user accesses the "my phone number" from mobile top up
        And the user select the company "BAIT"
        And the user selects the amount of "30" in step 3 to access "the modal error" screen
        Then the user sees a modal with the following elements:
            | item           |
            | header         |
            | container icon |
            | title        |
            | description    |
            | accept button  |

    @MTU014
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @serverError @vbank-modified
    Scenario: The user wait for mobile top up response
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to operationals page
        And the user accesses to page top up
        And the user accesses the "my phone number" from mobile top up
        And the user select the company "BAIT"
        And the user selects the amount of "30" in step 3 to access "the spinner veil" screen
        Then the user sees the following items in the screen:
            | item            |
            | spinner veil    |
            | spinner title   |
            | spinner message |

    @MTU015
    @MX @SPHERICA-MTU006
    @vbank @backend(test) @spherica
    @ios @android @web
    @web-done
    @vbank-modified
    #Added new feature flags to app settings service
    Scenario Outline: The user performs the mobile top-up using the "my new phone number" option to "<case>" Spherica
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to operationals page
        And the user accesses to page top up
        And the user accesses the "my new phone number" from mobile top up
        And the user completes the form for a new number with these data: "<phoneNumber>", "<company>", "<name>", "<alias>", "<screen>"
        And the user selects the amount of "<amount>" in step 3 to access "the review" screen
        Then the user sees the following items in the screen
            | item            | value           |
            | header          |                 |
            | header section  |                 |
            | title           | <title_value>   |
            | body section    |                 |
            | additional info | <infobox_value> |
            | share button    | <success_value> |

        Examples:
            | phoneNumber | company  | name      | alias | amount | screen               | case                                      | success_value | title_value | infobox_value |
            | 5561289375  | TELCEL   | Elizat    | Elizt | 50     | save unknown contact | save an unknown contact                   |               | success     | not visible   |
            | 5563278345  | MOVISTAR | Patricio  |       | 50     | unknown contact      | not save unknown contact                  |               | success     | not visible   |
            | 5562450892  |          |           |       | 100    | known contact        | known contact with operator already added |               | success     | not visible   |
            | 5612202427  | BAIT     | Alejandro | Alex  | 125    | save unknown contact | save an unknown contact bait success      |               | success     | not visible   |
            | 5612202427  | BAIT     | Juan      |       | 65     | unknown contact      | not save unknown contact bait pending     | not visible   | pending     | not visible   |

    @MTU016
    @MX @SPHERICA-MTU007
    @vbank @backend(test) @spherica
    @ios @android @web
    @tmpExclude @JIRA.GLOMOMX-254311
    @web-done
    @vbank-modified
    #Added new feature flags to app settings service
    Scenario Outline: The user performs the mobile top-up using the "contacts agenda" option to "<case>" Spherica
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to operationals page
        And the user accesses to page top up
        And the user accesses the "contacts agenda" from mobile top up
        And the user select the contact "<name>"
        And the user selects the amount of "<amount>" in step 3 to access "the review" screen
        Then the user sees the following items in the screen
            | item            | value           |
            | header          |                 |
            | header section  |                 |
            | title           | <title_value>   |
            | body section    |                 |
            | additional info | <infobox_value> |
            | share button    | <success_value> |

        Examples:
            | name             | amount | case                            | success_value | title_value | infobox_value |
            | Compa 1          | 50     | select the movistar company     |               |  success     | not visible   |
            | Javier Hernandez | 50     | select the telcel company       |               |  success     | not visible   |
            | ATandT           | 50     | select the at&t company         |               |  success     | not visible   |
            | Jorge Diaz       | 50     | select the unefon company       |               |  success     | not visible   |
            | Alejandro        | 125    | select the bait company success |               |  success     | not visible   |
            | Alejandro        | 65     | select the bait company pending | not visible   |  pending     | not visible   |

    @MTU017
    @MX @SPHERICA-MTU008
    @vbank @backend(test) @spherica
    @ios @android @web
    @web-done
    @vbank-modified
    #Added new feature flags to app settings service
    Scenario Outline: The user performs the mobile top-up using the "my phone number" option to "<case>" Spherica
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to operationals page
        And the user accesses to page top up
        And the user accesses the "my phone number" from mobile top up
        And the user select the company "<company>"
        And the user selects the amount of "<amount>" in step 3 to access "the review" screen
        Then the user sees the following items in the screen
            | item            | value           |
            | header          |                 |
            | header section  |                 |
            | title           | <title_value>   |
            | body section    |                 |
            | share button    | <success_value> |

        Examples:
            | company  | amount | case                            | success_value | title_value |
            | UNEFON   | 50     | select the unefon company       |               | success     |
            | AT&T     | 100    | select the at&t company         |               | success     |
            | MOVISTAR | 50     | select the movistar company     |               | success     |
            | BAIT     | 65     | select the bait company         |               | success     |
            | BAIT     | 100    | select the bait company pending | not visible   | pending     |

    @MTU018
    @MX @SPHERICA-MTU011
    @vbank @backend(test) @spherica
    @ios @android @web
    @web-done
    @vbank-modified
    #Added new feature flags to app settings service
    Scenario: The user cancels the process of performs the mobile top-up using the "contacts agenda" Spherica
        Given a user with the following criteria
            | criteria            |
            | profile user mobile |
            | account             |
        When the user accesses to operationals page
        And the user accesses to page top up
        And the user accesses the "contacts agenda" from mobile top up
        And the user select the contact "Compa 1"
        And the user selects the amount of "50" in step 3 to access "sign operation" screen
        Then the user cancels the operation of mobile top up

    @MTU019
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: The user exceeded the limit of MTU
        Given a user with the following criteria
            | criteria                              |
            | exception transfers with exceeded mtu |
        And the user accesses to operationals page
        And the user accesses to page top up
        When the user performs a mobile top-up exceeding the MTU limit
        Then the user sees the following items in the screen
            | item			                   |
            | header limit exceeded            |
            | microillustration limit exceeded |
            | title limit exceeded             |
            | first paragraph limit exceeded   |
            | second paragraph limit exceeded  |
            | button limit exceeded            |
            | link limit exceeded              |

    @MTU020
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: The user confirm operation limit of MTU
        Given a user with the following criteria
            | criteria                              |
            | exception transfers with exceeded mtu |
        And the user accesses to operationals page
        And the user accesses to page top up
        And the user performs a mobile top-up exceeding the MTU limit
        When the user confirms the MTU exception
        Then the user sees the following items in the screen
            | item			                           |
            | close button confirmation max limit      |
            | header confirmation max limit            |
            | microillustration confirmation max limit |
            | title confirmation max limit             |
            | description confirmation max limit       |
            | button confirmation max limit            |
