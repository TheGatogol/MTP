@checksManagementAuthorize @checksManagement @checks
Feature: Checks Management (Authorize)

    @CMA001
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Authorizing a check in checks management authorize screen entering from checks section screen
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        When the user selects the option to add check
        Then the user sees the following items in the screen
            | item                                         |
            | Header                                       |
            | Close button                                 |
            | Help icon                                    |
            | Collapsed account title                      |
            | Collapsed account alias                      |
            | Collapsed account number                     |
            | Collapsed account amount                     |
            | Check data step title                        |
            | Check data step description                  |
            | Add check link                               |
            | Check data info box                          |
            | Disabled continue button                     |

    @CMA002
    @MX @vbank @web-done @backend(test) @manual @JIRA.GLOMOGL-26754
    @web @ios @android
    Scenario: Authorizing a check in checks management screen with empty check management data step opened entering from checks management service terms screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | hasn't accepted the management service terms |
        And the user accesses to the check management confirmation acceptance screen
        When the user wants to authorize a check
        Then the user sees the following items in the screen
            | item                                         |
            | Header                                       |
            | Close button                                 |
            | Help icon                                    |
            | Header title                                 |
            | Collapsed account title                      |
            | Collapsed account alias                      |
            | Collapsed account number                     |
            | Collapsed account amount                     |
            | Check data step title                        |
            | Check data step description                  |
            | Add check link                               |
            | Check data info box                          |
            | Check data continue button                   |

    @CMA003
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario Outline: Adding information in management add check screen. Check: <check_num_input>, Input: <amount_input>
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        And the user selects the option to add check
        When the user adds a check and fill "<check_num_input>" "<amount_input>"
        Then the user sees the following items in the screen
            | item                        | value               |
            | Header                      |                     |
            | Close button                |                     |
            | Text                        |                     |
            | check number input          |                     |
            | check number information    |  <check_num_info>   |
            | Amount                      |                     |
            | Save button                 |  <save_button>      |
            | Cancel button               |                     |

        Examples:
            | check_num_input | amount_input | save_button | check_num_info |
            | empty           | empty        | not enabled | information    |
            | empty           | valid_amount | not enabled | information    |
            | valid_number    | empty        | not enabled | information    |
            | valid_number    | valid_amount | enabled     | information    |

    @CMA004
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Saves in the filled management add check screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        And the user selects the option to add check
        And the user adds a check and fill "valid_number" "valid_amount"
        When the user saves
        Then the user is in the checks management operation screen
        And the user sees the following items in the screen
            | item                                          |
            | Header                                        |
            | Close button                                  |
            | Help icon                                      |
            | Collapsed account title                       |
            | Collapsed account alias                       |
            | Collapsed account number                      |
            | Collapsed account amount                      |
            | Check data step title                         |
            | Check data step description                   |
            | Check data info box                           |
            | Check title                                   |
            | Edit icon                                     |
            | Trash icon                                    |
            | Check number data                             |
            | Amount data                                   |
            | Active continue button                       |

    @CMA005
    @MX @vbank @web-done @backend(test) @smokeTest
    @web @ios @android
    Scenario: Continues in the filled check management data step
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        And the user selects the option to add check
        When the user goes to the "summary" step
        Then the user sees the following items in the screen
            | item                                         |
            | Header                                       |
            | Close button                                 |
            | Help icon                                     |
            | Collapsed account title                      |
            | Collapsed account alias                      |
            | Collapsed account number                     |
            | Collapsed account amount                     |
            | Check data step title                        |
            | Change link                                  |
            | Collapsed check title                        |
            | Collapsed check number data                  |
            | Collapsed check amount data                  |
            | Summary amount title                         |
            | Summary amount data                          |
            | Summary continue button                      |

    @CMA006
    @MX @manual @JIRA.GLOMOGL-26754
    @ios @android @web
    Scenario: Continues in the check management summary screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user access to the check management summary screen
        When the user continues
        Then the user is in the signing screen

    @CMA007
    @MX @smokeTest @manual @JIRA.GLOMOGL-26754
    @ios @android @web
    Scenario: Signs the check management operation and receives management confirmation receipt
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to the signing screen of check management operation
        When the user signs
        Then the user sees the following items in the screen
            | item                             |
            | Header                           |
            | Close button                     |
            | Header title                     |
            | Confirmation asset               |
            | Confirmation title               |
            | Date and time                    |
            | Amount title                     |
            | Amount                           |
            | Amount  information              |
            | Collapsed account title          |
            | Origin data                      |
            | Check title                      |
            | Check number title               |
            | Check number data                |
            | Amount title                     |
            | Amount data                      |
            | Expiration date title            |
            | Expiration date data             |
            | Operation type title             |
            | Operation type data              |
            | Operation number title           |
            | Operation number data            |
            | Email title                      |
            | Obfuscated email data            |
            | Share button                     |
            | Exit button                      |

    @CMA008
    @MX @vbank @web-done @backend(test) @manual @JIRA.GLOMOGL-26754
    @web @ios @android
    Scenario Outline: Exit operative <exit_method> it in the management confirmation receipt screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to the management confirmation receipt screen
        When the user exists <exit_method>
        Then the user is in the Checks section screen

        Examples:
            | exit_method |
            | accepting   |
            | closing     |

    @CMA009
    @MX @manual @JIRA.GLOMOGL-26754
    @ios @android @web
    Scenario: Shares in the management confirmation receipt screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to the management confirmation receipt screen
        When the user shares
        Then the user shares the management confirmation receipt

    @CMA010
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Exits in the checks management operation screen when no data filled
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        When the user selects the option to add check
        Then the user closes the current operative

    @CMA011
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: View help management screen in the checks management operation screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        And the user selects the option to add check
        When the user asks for help management screen
        Then the user sees a modal with the following elements:
          | item          |
          | Header        |
          | Close button  |
          | Question icon |
          | Message       |
          | Description   |
          | Bullets List  |
          | Accept Button |

    @CMA012
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Exits the help management screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        And the user selects the option to add check
        And the user asks for help management screen
        When the user closes the modal
        Then the user accesses the "checks management operative" screen

    @CMA013
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Cancels in the management add check screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        And the user selects the option to add check
        And the user adds a check
        When the user closes the current operative
        Then the user accesses the "checks management operative" screen

    @CMA014
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Changes in the check management summary screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks management summary screen
        When the user uncollapsed "check data" step
        Then the user is in the checks management operation screen

    @CMA015
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Edits check in the filled check management data step
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user has filled check management data step
        When the user edits the check
        Then the user is in the filled check management data add check
        And the user sees the following items in the screen
            | item        | value    |
            | Save button | disabled |

    @CMA016
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Removes check in the filled check management data step
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user has filled check management data step
        When the user removes the check
        Then the user sees a modal with the following elements:
            | item          |
            | Warning Icon  |
            # | Message       |
            | Description   |
            | Accept Button |
            | Cancel button |

    @CMA017
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Removes check in the warning delete check screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user is in the warning delete check screen
        When the user confirms check removal
        Then the user is in the empty check management data step

    @CMA018
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Cancels check in the warning delete check screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user is in the warning delete check screen
        When the user cancels check removal
        Then the user is in the checks management operation screen

    @CMA019
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Leaves the process in the filled check management screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks management summary screen
        When the user closes the current operative
        Then the user sees a "small" modal with the following elements:
            | item          |
            | error icon    |
            | description   |
            | accept button |
            | cancel button |

    @CMA020
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: To leave the process screen and continues
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks management summary screen
        When the user closes the current operative
        And the user cancel exits from operative
        Then the user is in the checks management operation screen filled

    @CMA021
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: To leave the process screen and exits
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        When the user accesses to checks management summary screen
        Then the user confirms to leave the operative

    @CMA022
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario Outline: Types <number> digits in check number input in the management add check screen
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        And the user selects the option to add check
        When the user types "<number>" digits in the check number input
        Then the app shows an error message in the check "number" input

        Examples:
            | number |
            | 1      |
            | 3      |
            | 6      |

    @CMA023
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Inserts 0 in the amount in the management add check screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        And the user selects the option to add check
        When the user inserts 0 in the amount
        Then the app shows an error message in the check "amount" input
