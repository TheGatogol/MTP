@transversalEnrollment
Feature: Digital Activation - Transversal Enrollment

    @DATE001
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Access the Registration screen
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        When the user accesses to "Register" section
        Then the user sees the following items in the screen
            | item                   |
            | identify title         |
            | identify description   |
            | monoproduct entrypoint |
            | privacy notice link    |

    @DATE002
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Show help page when user selects "I don't have a card"
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        When the user accesses to non account client section and enters "only" personal data
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | personal data title       |
            | scan id button            |
            | text box name             |
            | text box last name        |
            | text box second last name |
            | text box birth date       |
            | text box birth place      |
            | gender male option        |
            | gender female option      |

    @DATE003
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Show recommendations when user scans ID
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section and enters "only" personal data
        When the user accesses to "scan recomendations" modal
        Then the user sees the following items in the screen
            | item                |
            | scan title modal    |
            | scan content modal  |
            | scan button modal   |

    @DATE004
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Show personal data form when user access non account section
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        When the user accesses to non account client section and enters "only" personal data
        Then the user sees the following items in the screen
            | item                             |
            | text box name                    |
            | reset name button                |
            | text box last name               |
            | reset last name button           |
            | text box second last name        |
            | reset second last name button    |
            | text box birth date              |
            | text box birth place             |
            | gender male option               |
            | gender female option             |
            | reset ine number                 |
            | button continue personal enabled |

    @DATE005
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Show help page when user selects "?"
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section and enters "only" personal data
        When the user accesses help register ine
        Then the user sees the following items in the screen
            | item                   |
            | help ine title modal   |
            | help ine close modal   |
            | help ine content modal |
            | help ine button modal  |

    @DATE006
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Show personal data screen when user selects <button> button in help screen
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section and enters "only" personal data
        When the user accesses help ine and "<button>" modal
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | personal data title       |
            | scan id button            |
            | text box name             |
            | text box last name        |
            | text box second last name |
            | text box birth date       |
            | text box birth place      |
            | gender male option        |
            | gender female option      |
        Examples:
            | button |
            | accept |
            | close  |

    @DATE007
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Show address screen when user enters correct personal data
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        When the user accesses to non account client section and enters "correct" personal data
        Then the user sees the following items in the screen
            | item                             |
            | text box street                  |
            | text box outside number          |
            | text box optional number         |
            | text box zip code                |
            | button continue address disabled |

    @DATE008
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Show empty inputs when user delete data in adress screen
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section and enters "correct" personal data
        When the user remove address information
        Then the user sees the following items in the screen
            | item                      |
            | empty text box street     |
            | empty text outside number |
            | empty text inner number   |
            | empty text zip code       |

    @DATE009
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Show continue button enabled when user fill inputs in address screen
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section and enters "correct" personal data
        When the user registers current address information and "not" continue
        Then the user sees the following items in the screen
            | item                            |
            | colony combo input              |
            | municipality                    |
            | state                           |
            | country                         |
            | text box street                 |
            | text box outside number         |
            | text box optional number        |
            | text box zip code               |
            | button continue address enabled |

    @DATE010
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Show continue button enabled when user fill inputs in address screen except inner number
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section and enters "correct" personal data
        When the user registers current address information with no inner number
        Then the user sees the following items in the screen
            | item                            |
            | text box street                 |
            | text box outside number         |
            | text box optional number        |
            | text box zip code               |
            | button continue address enabled |

    @DATE011
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Show contact screen when user fills address information
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section and enters "correct" personal data
        When the user registers current address information and "selects" continue
        Then the user sees the following items in the screen
            | item                             |
            | text box cell number             |
            | text box email                   |
            | text box confirm email           |
            | checkbox privacy                 |
            | disabled button continue contact |

    @DATE012
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Show empty inputs when user resets in address screen
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section and enters "correct" personal data
        And the user registers current address information and "selects" continue
        When the user registers current contact information and not continue
        Then the user sees the following items in the screen
            | item                            |
            | reset phone number button       |
            | reset email button              |
            | reset confirm email button      |
            | checkbox privacy checked        |
            | enabled button continue contact |

    @DATE013
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Show contract screen when user fill inputs in contact screen
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section and enters "correct" personal data
        And the user registers current address information and "selects" continue
        When the user registers their current contact information with "valid" phone
        Then the user sees the following items in the screen
            | item                                           |
            | header                                         |
            | checkbox terms and conditions contract account |
            | digital signature                              |

    @DATE014
    @MX @vbank
    @backend(test) @smokeTest
    @ios @android @web @web-done
    Scenario: Show sign screen when user accept contract
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section and enters "correct" personal data
        And the user registers current address information and "selects" continue
        And the user registers their current contact information with "valid" phone
        When the user accepts sign contract and "continue" otp
        Then the user sees the following items in the screen
            | item                   |
            | sign button            |
            | continue button        |
            | disabled delete button |

    @DATE015
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Show error modal when user enters incorrect personal data
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        When the user accesses to non account client section and enters "incorrect" personal data
        Then the user sees the following items in the screen
            | item                          |
            | error modal data close button |
            | error modal data title        |
            | error modal data content      |
            | error modal data scan button  |
            | error modal data retry button |

    @DATE016
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Show personal data screen when user tries to enter manually again
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section and enters "incorrect" personal data
        When the user tries to enter personal data and "again"
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | personal data title       |
            | scan id button            |
            | text box name             |
            | text box last name        |
            | text box second last name |
            | text box birth date       |
            | text box birth place      |
            | gender male option        |
            | gender female option      |

    @DATE017
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Show error modal when user enters incorrect personal data twice
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section and enters "incorrect" personal data
        When the user tries to enter personal data and "retry twice"
        Then the user sees the following items in the screen
            | item                          |
            | error modal data content      |
            | error modal data scan button  |

    @DATE018
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Show ID advice when user enter less than 9 digits
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        When the user accesses to non account client section and enters "short id" personal data
        Then the user sees the following items in the screen
            | item              |
            | digits advice ine |

    @DATE019
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario: Show birth date advice when user is youngster
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        When the user accesses to non account client section and enters "minor" personal data
        Then the user sees the following items in the screen
            | item                     |
            | error message birth date |

    @DATE020
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Show zip code advice when user enter <zip code case>
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section and enters "correct" personal data
        When the user enters the wrong info "<zip code case>"
        Then the user sees the following items in the screen
            | item                   |
            | error message zip code |
        Examples:
            | zip code case    |
            | zip code error   |
            | zip code short   |

    @DATE021
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Show input advice when user enter <wrong cases> in contact screen
        Given a user with the following criteria
            | criteria                                       |
            | transversal enrollment without card or account |
        And a user accesses the application
        And the user accesses to non account client section and enters "correct" personal data
        And the user registers current address information and "selects" continue
        When the user enters the wrong info "<wrong cases>"
        Then the user sees the following items in the screen
            | item          |
            | <screen item> |
        Examples:
            | wrong cases            | screen item               |
            | email invalid          | error message email       |
            | validate email         | error message email       |
            | number contact invalid | error message cell number |

    @DATE022
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Show error modal when user is <user type>
        Given a user with the following criteria
            | criteria    |
            | <user type> |
        And a user accesses the application
        And the user accesses to non account client section and enters "correct" personal data
        And the user registers current address information and "selects" continue
        When the user registers their current contact information with "valid" phone
        Then the user sees the following items in the screen
            | item                      |
            | error modal title         |
            | error modal close button  |
            | error modal content       |
        Examples:
            | user type                                  |
            | transversal enrollment with alerts         |
            | transversal enrollment with active channel |
            | transversal enrollment black list          |
            | transversal enrollment with card           |
            | transversal enrollment enrolled            |
