@redirectCallMeBackRemote
Feature: Redirect Call Me Back Funds Remote Banker

    @CMBFR001
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: The user with assistance manager accesses to account fund hiring offer screen
        Given a user with the following criteria
            | criteria                        |
            | remote assistance funds hiring  |
        When the user goes to the funds hiring operation
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | telephone icon       |
            | sticky button        |
            | start process button |

    @CMBFR002
    @web @ios @android
    @backend(test) @vbank
    @MX @manual @JIRA.GLOMOMX-215003
    @web-done
    Scenario Outline: The user tries to call an assistance manager <case>
        Given a user with the following criteria
            | criteria                        |
            | remote assistance funds hiring  |
        When the user starts the application at date:
            | hour  | <hour> |
            | day   | <day>  |
            | month | 01     |
            | year  | 2024   |
        And the user goes to the funds hiring operation
        And the user calls the advisor from "header step 1"
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | image             |
            | modal description |
            | select date       |
            | confirm button    |
        Examples:
            | case                 | day  |hour |
            | on a non-working day | 01   | 1   |
            | after hours          | 09   | 1   |

    @CMBFR003
    @web @ios @android
    @backend(test) @vbank
    @MX @smokeTest
    @web-done
    @manual @JIRA.GLOMOMX-245990
    Scenario Outline: The user calls assistance manager <case>
        Given a user with the following criteria
            | criteria                        |
            | remote assistance funds hiring  |
        When the user starts the application at date:
            | hour  | 12     |
            | day   | 12     |
            | month | 01     |
            | year  | 2024   |
        And the user goes to the funds hiring operation
        And the user is in the "<scenery>" step of funds hiring operation
        And the user calls the advisor from "<step>"
        Then the user sees the following items in the screen
            | item              |
            | image check       |
            | description       |
            | timer             |
            | info message      |
            | understood button |
        Examples:
            | case                      | scenery              | step          |
            | from terms and conditions | terms and conditions | header step 7 |
            | from input amount         | input amount         | header step 5 |

    @CMBFR004
    @web @ios @android
    @backend(test) @vbank
    @MX @manual @JIRA.GLOMOMX-215003
    @web-done
    Scenario: The user confirms the call with an assistance manager
        Given a user with the following criteria
            | criteria                        |
            | remote assistance funds hiring  |
        When the user starts the application at date:
            | hour  | 1      |
            | day   | 12     |
            | month | 01     |
            | year  | 2024   |
        And the user goes to the funds hiring operation
        And the user calls the advisor from "header step 1"
        And the user confirms the call
        Then the user sees the following items in the screen
            | item              |
            | image check       |
            | description       |
            | date              |
            | info message      |
            | understood button |

    @CMBFR005
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: The user tries to call an assistance manager previous request
        Given a user with the following criteria
            | criteria                        |
            | remote assistance funds hiring  |
        When the user starts the application at date:
            | hour  | 12   |
            | day   | 09   |
            | month | 01   |
            | year  | 2024 |
        And the user goes to the funds hiring operation
        And the user calls the advisor from "header step 1"
        And the user close the call
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | telephone icon       |
            | sticky button        |
            | start process button |

    @CMBFR006
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: The user tries to call an assistance manager within hours
        Given a user with the following criteria
            | criteria                        |
            | remote assistance funds hiring  |
        When the user starts the application at date:
            | hour  | 12   |
            | day   | 09   |
            | month | 01   |
            | year  | 2024 |
        And the user goes to the funds hiring operation
        And the user calls the advisor from "header step 1"
        Then the user sees the following items in the screen
            | item              |
            | image check       |
            | description       |
            | timer             |
            | info message      |
            | understood button |
