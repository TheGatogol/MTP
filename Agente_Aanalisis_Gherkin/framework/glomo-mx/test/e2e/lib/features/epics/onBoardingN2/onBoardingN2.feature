@onBoardingN2
Feature: OnBoarding Account Digital N2

    @ONB002
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @smokeTest
    @backend-smoke
    Scenario: Open an account- screen validation
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        When the user goes to "screen open account"
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | text box name             |
            | text box last name        |
            | text box second last name |
            | text box birth date       |
            | text box birth place      |

    @ONB003
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Register personal data
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        When the user accesses for the first time and enters "correct" personal data
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | text box name             |
            | text box last name        |
            | text box second last name |
            | text box birth date       |
            | text box birth place      |

    @ONB004
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Register personal data address
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        When the user registers current address information and "no selects" continue
        Then the user sees the following items in the screen
            | item         |
            | municipality |
            | state        |
            | country      |

    @ONB005
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Validate list zip code
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        When the user registers current address information and "no selects" continue
        Then the user sees the following items in the screen
            | item         | value   |
            | country      |         |
            | list country | enabled |

    @ONB006
    @MX
    @vbank @backend(test)
    @ios @android @web @manual @JIRA.GLOMOMX-237722
    @web-done
    Scenario: Validate contact information section
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        When the user registers current address information and "selects" continue
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | text box cell number    |
            | text box email          |
            | text box confirm email  |
            | message privacy         |
            | button continue contact |

    @ONB007
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Register personal data - contract
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the user registers their current contact information with "valid" phone
        When the user accepts terms and conditions of contracts and "no wants" to sign
        Then the user sees the following items in the screen
            | item                                           |
            | header                                         |
            | checkbox terms and conditions libreton         |
            | checkbox terms and conditions contract account |
            | checkbox offers                                |
            | digital signature                              |

    @ONB008
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Register personal data password
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the user registers their current contact information with "valid" phone
        When the user accepts terms and conditions of contracts and "wants" to sign
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | text box password         |
            | text box confirm password |
            | button continue password  |

    @ONB009
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Register personal summary
        Given a user with the following criteria
            | criteria         |
            | open an account  |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the user registers their current contact information with "valid" phone
        And the user accepts terms and conditions of contracts and "wants" to sign
        When the user enters password data
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | heading address data   |
            | heading contact data   |
            | heading contracts data |

    @ONB010
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: Validate create account with <scenario>
        Given a user with the following criteria
            | criteria   |
            | <criteria> |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the user registers their current contact information with "valid" phone
        And the user accepts terms and conditions of contracts and "wants" to sign
        When the user enters password data and registers an account
        Then the user sees the following items in the screen
            | item              | value         |
            | header            | visible       |
            | img success       | visible       |
            | container message | visible       |
            | oc banner         | <is_visible>  |
            | banner class      | <is_visible>  |

        Examples:
            | scenario              | criteria               | is_visible |
            | standard account      | open new account       | no visible |
            | fall-in option banner | fall in option enabled | visible    |

    @ONB011
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Validate accesses account
        Given a user with the following criteria
            | criteria         |
            | open new account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the user registers their current contact information with "valid" phone
        And the user accepts terms and conditions of contracts and "wants" to sign
        When the user enters password data and registers an account
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | img success       |
            | container message |

    @ONB012
    @MX
    @vbank @backend(test)
    @ios @android @web @manual @JIRA.GLOMOMX-237722
    @web-done
    Scenario: Account Digital - edit address
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        When the user registers current address information and "no selects" continue
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | heading address data   |
            | heading contact data   |
            | heading contracts data |

    @ONB013
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-268871
    Scenario: Account Digital - More Info
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user goes to "register account"
        When the user accesses to "more information" modal
        Then the user sees the following items in the screen
            | item                          |
            | header more info modal        |
            | description more info modal   |
            | exit button more info modal   |
            | accept button more info modal |

    @ONB014
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-268871
    Scenario Outline: Account Digital - close more info screen with <button>
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user goes to "register account"
        And the user accesses to "more information" modal
        When the user exits the modal "more information" through the "<button>" button
        Then the user sees the following items in the screen
            | item                   |
            | header more info modal |
            | notification message   |
            | considerations         |
            | privacy message        |
            | view more info         |

        Examples:
            | button |
            | x      |
            | accept |

    @ONB015
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: Account Digital - Privacy notice
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user goes to "register account"
        When the user accesses to "privacy notice" modal
        Then the user sees the following items in the screen
            | item                        |
            | header privacy modal        |
            | description privacy modal   |
            | exit button privacy modal   |
            | accept button privacy modal |

    @ONB016
    @MX
    @vbank @backend(test)
    @ios @android @web @manual @JIRA.GLOMOMX-237722
    @web-done
    Scenario: Register personal - help modal INE
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user goes to "screen open account"
        When the user accesses to "ine tooltip" modal
        Then the user sees the following items in the screen
            | item                |
            | header modal        |
            | description modal   |
            | exit button modal   |
            | accept button modal |

    @ONB017
    @MX
    @vbank @backend(test)
    @ios @android @web @manual @JIRA.GLOMOMX-237722
    @web-done
    Scenario: Open an account digital - offers and promotions modal
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the user registers their current contact information with "valid" phone
        When the user accesses to "offers and promotions" modal
        Then the user sees the following items in the screen
            | item                       |
            | header offers modal        |
            | description offers modal   |
            | exit button offers modal   |
            | accept button offers modal |

    @ONB018
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-268871
    Scenario: Open an account digital - close screen
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user goes to "register account"
        When the user closes the account digital screen
        Then the user accesses the "welcome" screen

    @ONB019
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-254401
    Scenario: Register personal - date error
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user goes to "screen open account"
        When the user enters the wrong info "date error"
        Then the user sees the following items in the screen
            | item                     |
            | error message birth date |

    @ONB020
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-254401
    Scenario Outline: Account digital - address <value>
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        When the user enters the wrong info "<value>"
        Then the user sees the following items in the screen
            | item                   |
            | error message zip code |

        Examples:
            | value            |
            | zip code error   |
            | zip code invalid |

    @ONB021
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-254401
    Scenario: Account digital - contact number error
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        And the user registers current address information and "selects" continue
        When the user enters the wrong info "number contact invalid"
        Then the user sees the following items in the screen
            | item                      |
            | error message cell number |

    @ONB022
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-254401
    Scenario Outline: Register personal email - <value>
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        And the user registers current address information and "selects" continue
        When the user enters the wrong info "<value>"
        Then the user sees the following items in the screen
            | item                |
            | error message email |

        Examples:
            | value          |
            | email invalid  |
            | validate email |

    @ONB023
    @MX
    @vbank @backend(test)
    @ios @android @web @manual @JIRA.GLOMOMX-237722
    @web-done
    Scenario Outline: Register personal - section <value>
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        And the user enters the fourth section
        And the user wants add signature
        When the user enters the wrong info "<value>"
        Then the user sees the following items in the screen
            | item                   |
            | error message password |

        Examples:
            | value             |
            | password invalid  |
            | validate password |

    @ONB024
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @manual @JIRA.GLOMOMX-254401
    Scenario: Open modal sms
        Given a user with the following criteria
            | criteria         |
            | open new account |
        And the user is in the Welcome screen
        And the user accesses for the first time and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the user registers their current contact information with "valid" phone
        And the user accepts terms and conditions of contracts and "wants" to sign
        When the user enters password data
        Then the user sees the following items in the screen
            | item                   |
            | otp page header        |
            | otp page exit button   |
            | otp page image         |
            | otp page text          |
            | otp page resend button |
            | otp page input         |
            | otp page accept button |

    @ONB025
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-254401
    Scenario: Register personal data - non binary notification message
        Given a user with the following criteria
            | criteria        |
            | open an account |
        And the user is in the Welcome screen
        And the user goes to "screen open account"
        When the user taps on "sex option non binary" item
        Then the user sees the following items in the screen
            | item                            |
            | message notification non binary |
