@profileRecipients
Feature: Profile Recipients

    @PRORE001
    @web
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Screen validation - the user goes to help modal
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        When the user accesses to "profile recipients help" screen
        Then the user sees the following items in the screen
            | item               |
            | welcome modal icon |
            | recomendation      |
            | description        |
            | privacy link       |
            | continue           |

    @PRORE002
    @web @smokeTest
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Happy path - the user register a beneficiary
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user goes to register beneficiary with "00740010001500616511" account
        When the user fills the beneficiary data and continue
        And the user assigns a percentage to the beneficiary
        And the user registers the beneficiary
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | icon          |
            | date          |
            | account       |
            | beneficiaries |
            | close         |

    @PRORE003
    @web
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Screen validation - the user sees the second step when he has no recipients
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        When the user chooses the "00740010001500616511" account
        Then the user sees the following items in the screen
            | item                 |
            | step two title       |
            | step two             |
            | step two description |
            | register beneficiary |
            | message              |
            | continue             |

    @PRORE004
    @web
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Screen validation - the user goes to register screen
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        When the user chooses the "00740010001500616511" account
        And the user accesses to register screen
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | title            |
            | name             |
            | lastname         |
            | relationship     |
            | birthday         |
            | show address     |
            | address          |
            | new address      |
            | register address |
            | continue         |

    @PRORE005
    @web
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario Outline: Screen validation - the user goes to summary section when have <user>
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to "profile recipients" screen
        When the user chooses the "<account>" account
        And the user accesses to summary screen
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | title                |
            | change account       |
            | step two title       |
            | change beneficiaries |
            | beneficiaries list   |
            | finish button        |
        Examples:
            | user                    | account              |
            | profile recipients      | 00740680001500850815 |
            | full profile recipients | 00740680001500850807 |

    @PRORE006
    @web
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: Screen validation - access to recipients screen when you have more than one account
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        When the user accesses to "profile recipients" screen
        Then the user sees the following items in the screen
            | item                 |
            | title                |
            | header               |
            | account              |
            | step one             |
            | step two title       |
            | step two             |
            | step two description |

    @PRORE007
    @web @ios @android
    @MX @vbank @backend(test) @tmpExclude @JIRA.GLOMOMX-254311 @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Screen validation - the user access to consult the privacy notice
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        When the user accesses to "profile privacy notice" screen
        Then the user sees the following items in the screen
            | item                |
            | privacy icon        |
            | privacy description |
            | privacy continue    |

    @PRORE008
    @web
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: Screen validation - the user access the recipients screen first step
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        When the user accesses to "profile recipients" screen
        Then the user sees the following items in the screen
            | item     |
            | title    |
            | header   |
            | account  |
            | step one |

    @PRORE009
    @web
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Screen validation - the user accesses and assigns the percentages to the recipients
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        And the user goes to register beneficiary with "00740680001500850815" account
        When the user fills the beneficiary data and continue
        And the user assigns a percentage to the beneficiary
        Then the user sees the following items in the screen
            | item                 |
            | step two title       |
            | step two             |
            | step two description |
            | register beneficiary |
            | message              |
            | beneficiaries list   |
            | full percentage      |
            | continue             |

    @PRORE010
    @web
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Screen validation - the user sees the recipients screen when he has the maximum registered
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        And the user goes to register beneficiary with "00740680001500850807" account
        When the user fills the beneficiary data and continue
        Then the user sees the following items in the screen
            | item                 |
            | step two title       |
            | step two             |
            | step two description |
            | message              |
            | beneficiaries list   |
            | register beneficiary |
            | full percentage      |
            | continue             |

    @PRORE011
    @web
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Screen validation - the user see the success screen with the maximum number of recipients
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        When the user chooses the "00740680001500850807" account
        And the user registers the beneficiary
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | icon          |
            | date          |
            | account       |
            | beneficiaries |
            | close         |

    @PRORE012
    @web
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: Screen validation - the user changes the account assigned to the recipients
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        When the user chooses the "00740680001500850815" account
        And the user decides to change the account
        Then the user sees the following items in the screen
            | item     |
            | header   |
            | title    |
            | account  |
            | step one |

    @PRORE013
    @web
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Screen validation - the user changes recipients
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        When the user chooses the "00740680001500850807" account
        And the user accesses to summary screen
        And the user changes a beneficiary
        And the user applies the beneficiary changes
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | icon          |
            | date          |
            | account       |
            | beneficiaries |
            | close         |

    @PRORE014
    @web
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Screen validation - the user indicates that he wants to register a new address
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user goes to register beneficiary with "00740010001500616511" account
        When the user selects to register another address
        Then the user sees the following items in the screen
            | item             | value    |
            | header           |          |
            | title            |          |
            | name             |          |
            | lastname         |          |
            | relationship     |          |
            | birthday         |          |
            | show address     |          |
            | address          |          |
            | new address      |          |
            | register address | enabled  |
            | continue         | disabled |

    @PRORE015
    @web
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Screen validation - validate screen to register new address
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user goes to register beneficiary with "00740010001500616511" account
        When the user accesses to "register another address" screen
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | street          |
            | exterior number |
            | interior number |
            | zip code        |
            | search          |
            | colony          |
            | municipality    |
            | state           |
            | country         |
            | continue        |

    @PRORE016
    @web
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Screen validation - a new address is registered
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user goes to register beneficiary with "00740010001500616511" account
        And the user fills the beneficiary data and stay
        When the user accesses to "register another address" screen
        And the user fills the new address data
        Then the user sees the following items in the screen
            | item         | value   |
            | header       |         |
            | title        |         |
            | name         |         |
            | lastname     |         |
            | relationship |         |
            | birthday     |         |
            | show address |         |
            | address      |         |
            | new address  |         |
            | continue     | enabled |

    @PRORE017
    @web
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Screen validation - the user leave the process
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        When the user chooses the "00740680001500850815" account
        And the user closes the beneficiary screen
        Then the user sees the following items in the screen
            | item        |
            | accept      |
            | cancel      |
            | icon        |
            | description |

    @PRORE018
    @web
    @MX @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Error - the user tries to load the recipients three times
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        When the user chooses the "00740680001500850815" account
        And the user tries to access the recipients list three times
        Then the user sees the following items in the screen
            | item                    | value     |
            | accept modal error      | invisible |
            | icon modal error        |           |
            | description modal error |           |

    @PRORE019
    @web @MX
    @vbank @backend(test) @web-done @ios @android @alternate-scenarios-smoke
    Scenario: Error - the user is blacklisted
        Given a user with the following criteria
            | criteria                      |
            | profile recipients black list |
        And the user acceses to profile recipients screen
        When the user chooses the "00740010001500998839" account
        And the user tries registers the beneficiary
        Then the user sees the following items in the screen
            | item                   |
            | title black list       |
            | description black list |
            | finish black list      |

    @PRORE020
    @web @MX
    @vbank @backend(test) @backend-smoke
    @web-done @ios @android
    Scenario: Register recipient
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to profile recipients screen
        And the user adds a beneficiary with "same" address
        When the user sends "one" percentage for the beneficiary
        Then the user sees the following items in the screen
            | item                          |
            | success date hour             |
            | success date hour content     |
            | success account text          |
            | success account content       |
            | success title recipients      |
            | success name recipient        |
            | success porcentage recipient  |
            | success notification message  |

    @PRORE021
    @web @MX
    @vbank @backend(test) @backend-smoke
    @web-done @ios @android
    Scenario: The user has more than one account
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        When the user accesses to profile recipients screen
        Then the user sees the following items in the screen
            | item                 |
            | close btn            |
            | accounts             |
            | header beneficiaries |

    @PRORE022
    @web @MX
    @vbank @backend(test) @backend-smoke
    @web-done @ios @android
    Scenario: See the privacy notice
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user with an already registered recipient accesses to profile recipients
        When the user accesses to privacy notices screen
        Then the user sees the following items in the screen
            | item          |
            | close privacy |
            | privacy text  |

    @PRORE023
    @web @MX
    @vbank @backend(test) @backend-smoke
    @web-done @ios @android
    Scenario: View the user full address
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user with an already registered recipient accesses to profile recipients
        When the user reveals address data
        Then the user sees the following items in the screen
            | item                    |
            | address                 |
            | button continue         |

    @PRORE024
    @web @MX
    @vbank @backend(test) @backend-smoke
    @web-done @ios @android
    Scenario Outline: Register recipient with various address types and "<percentage>"
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user with an already registered recipient accesses to profile recipients
        And the user selects an account for the recipient
        And the user adds a beneficiary with "<addressType>" address
        When the user sends "<percentage>" percentage for the beneficiary
        Then the user sees the following items in the screen
            | item                          |
            | success date hour             |
            | success date hour content     |
            | success account text          |
            | success account content       |
            | success title recipients      |
            | success name recipient        |
            | success porcentage recipient  |
            | success notification message  |

        Examples:
            | addressType | percentage |
            | same        | six        |
            | different   | two        |

    @PRORE025
    @web @MX
    @vbank @backend(test) @backend-smoke
    @web-done @ios @android
    Scenario: Modify the source account from the summary
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to profile recipients screen
        And the user selects an account for the recipient
        And the user adds a beneficiary with "same" address
        And the user continues to summary
        When the user changes the account for the beneficiary
        Then the user sees the following items in the screen
            | item                       |
            | step 2 account             |
            | step 2 button continue     |

    @PRORE026
    @web @MX
    @vbank @backend(test) @backend-smoke
    @web-done @ios @android
    Scenario: Remove recipient from the summary
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user with an already registered recipient accesses to profile recipients
        And the user selects an account for the recipient
        When the user removes recipient
        Then the user sees the following items in the screen
            | item                          |
            | success date hour             |
            | success date hour content     |
            | success account text          |
            | success account content       |
            | success title recipients      |
            | success name recipient        |
            | success porcentage recipient  |
            | success notification message  |

    @PRORE027
    @web @MX
    @vbank @backend(test) @backend-smoke
    @web-done @ios @android
    Scenario: Edit recipients information
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user with an already registered recipient accesses to profile recipients
        And the user selects an account for the recipient
        When the user edits recipients information
        Then the user sees the following items in the screen
            | item                    |
            | first name field        |
            | last name field         |
            | second last name field  |
            | relation type field     |
            | birth date field        |
            | radiobutton address     |
            | radiobutton new address |
            | button continue         |

    @PRORE028
    @web @MX
    @vbank @backend(test)
    @web-done @ios @android
    Scenario Outline: Warning message in textbox <field>
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to profile recipients screen
        And the user selects an account for the recipient
        When the user registers wrongly with a "<field>"
        Then the user sees the following items in the screen
            | item                    |
            | radiobutton new address |
            | error message           |

        Examples:
            | field                                   |
            | empty name                              |
            | empty first last name                   |
            | empty second last name                  |
            | street too long                         |
            | postal code with fewer than five digits |
            | invalid postal code                     |

    @PRORE029
    @web @MX
    @vbank @backend(test)
    @web-done @ios @android
    Scenario: Warning message in textbox higher percentage
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user with an already registered recipient accesses to profile recipients
        And the user selects an account for the recipient
        When the user assigns a percentage above one hundred
        Then the user sees the following items in the screen
            | item                    |
            | error message           |

    @PRORE030
    @web @MX
    @vbank @backend(test) @backend-smoke
    @web-done @ios @android
    Scenario: Exit the process after adding a recipient
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to profile recipients screen
        And the user selects an account for the recipient
        And the user adds a beneficiary with "same" address
        And the user continues to summary
        When the user closes the profile recipient form
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | change avatar |

    @PRORE031
    @web @MX
    @vbank @backend(test) @backend-smoke
    @web-done @ios @android
    Scenario: Warning message in account
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to profile recipients screen
        When the user selects a solidary account
        Then the user sees the following items in the screen
            | item                 |
            | warning header       |
            | warning close        |
            | warning icon         |
            | warning button retry |
            | warning link exit    |

    @PRORE032
    @web @MX
    @vbank @backend(test) @backend-smoke
    @web-done @ios @android
    Scenario: See the privacy notice by clicking on the link NBA
        Given a user with the following criteria
            | criteria                              |
            | profile recipients products dashboard |
        When the user accesses to dashboard
        And the user access profile recipients from nba
        Then the user sees the following items in the screen
            | item                    |
            | onboarding description  |
            | onboarding bullet       |
            | onboarding privacy link |
            | continue button         |

    @PRORE033
    @web @MX
    @vbank @backend(test) @backend-smoke
    @web-done @ios @android
    Scenario: See the privacy notice by clicking on the link NBO
        Given a user with the following criteria
            | criteria                              |
            | profile recipients products dashboard |
        When the user accesses to dashboard
        And the user access profile recipients from nbo
        Then the user sees the following items in the screen
            | item                    |
            | onboarding description  |
            | onboarding bullet       |
            | onboarding privacy link |
            | continue button         |

    @PRORE034
    @web @MX
    @vbank @backend(test) @backend-smoke
    @web-done @ios @android
    Scenario: Enter the Futura Home and see the NBA section
        Given a user with the following criteria
            | criteria                              |
            | profile recipients products dashboard |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                   |
            | NBA profile recipients |
            | NBA button cpspr       |
