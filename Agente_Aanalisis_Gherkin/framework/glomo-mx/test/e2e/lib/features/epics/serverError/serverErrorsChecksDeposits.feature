@serverErrors @checksDeposit @checksDepositsDetail @checks
Feature: Checks Deposit - Server Errors

    @SRCDL001
    @MX @vbank @web-done @backend(test)
    @web @ios @android @vbank-modified
    @smokeTest
    Scenario Outline: Checks Deposits List with status <check_status> - Error <error_type>
        Given a user with the following criteria
            | criteria                             |
            | digital checks                       |
            | account in pesos                     |
            | has 1 check deposited <check_status> |
        When the user attempts to access to the checks deposit list screen
        Then the user sees a "small" error with the following elements:
            | item          |
            | title         |
            | error icon    |
            | accept button |
            | cancel button |

        Examples:
            | check_status | error_type |
            | charged      | 400        |
            | charged      | 500        |
            | rejected     | 400        |
            | rejected     | 500        |

    @SRCDL002
    @MX @vbank @web-done @backend(test)
    @web @ios @android @vbank-modified
    Scenario Outline: Review navigation - Error "<error_type>" when exit when accesses checks deposit list from checks section
        Given a user with the following criteria
            | criteria                  |
            | digital checks            |
            | account in pesos          |
            | has 6 check deposited     |
        And the user attempts to access to the checks deposit list screen
        When the user closes the error modal
        Then the user accesses the "Checks Section" screen

        Examples:
            | error_type |
            | 400        |
            | 500        |

    @SRCDL003
    @MX @vbank @web-done @backend(test)
    @web @ios @android @vbank-modified
    Scenario Outline: Review - Success after "<times>" retries when accesses checks deposit list from checks section
        Given a user with the following criteria
            | criteria                  |
            | digital checks            |
            | account in pesos          |
            | has 6 check deposited     |
        And the user attempts to access to the checks deposit list screen
        When the user retries the operation "<times>" times
        Then the user accesses the "Checks Deposit List" screen

        Examples:
            | times |
            | 1     |
            | 2     |

    @SRCDL004
    @MX @vbank @web-done @backend(test)
    @web @ios @android @vbank-modified
    @manual @JIRA.GLOMOMX-249381
    Scenario Outline: Review - Error "<error_type>" when the user filters in filter check deposits list options screen
        Given a user with the following criteria
            | criteria                  |
            | digital checks            |
            | account in pesos          |
            | has 6 check deposited     |
        When the user attempts to access to the filter check deposits list options screen
        Then the user sees a "small" error with the following elements:
            | item          | type         |
            | title         | <error_type> |

        Examples:
            | error_type |
            | 400        |
            | 500        |

    @SRCDL005
    @MX @vbank @web-done @backend(test)
    @web @ios @android @vbank-modified
    @manual @JIRA.GLOMOMX-249381
    Scenario Outline: Review navigation - Error "<error_type>" when exit when the user filters in filter check deposits list options screen
        Given a user with the following criteria
            | criteria                  |
            | digital checks            |
            | account in pesos          |
            | has 6 check deposited     |
        And the user attempts to access to the filter check deposits list options screen
        When the user closes the error modal
        Then the user accesses the "Checks Deposit List" screen

        Examples:
            | error_type |
            | 400        |
            | 500        |

    @SRCDL006
    @MX @vbank @web-done @backend(test)
    @web @ios @android @vbank-modified @tmpExclude @JIRA.GLOMOMX-174596
    Scenario Outline: Review - Success after "<times>" retries when the user filters in filter check deposits list options screen
        Given a user with the following criteria
            | criteria                  |
            | digital checks            |
            | account in pesos          |
            | has 6 check deposited     |
        And the user accesses the filter check deposits list options screen
        And the user filters by accepted status
        When the user retries the operation "<times>" times
        Then the user accesses the "Checks Deposit List" screen

        Examples:
            | times |
            | 1     |
            | 2     |

    @SRCDD001
    @MX @vbank @web-done @backend(test)
    @web @ios @android @vbank-modified
    Scenario Outline: Checks Deposits Detail with status <check_status> - Error <error_type>
        Given a user with the following criteria
            | criteria                                    |
            | digital checks                              |
            | account in pesos                            |
            | has at least 1 check deposit <check_status> |
        And the user accesses the checks deposit list screen
        When the user accesses a "<check_status>" check
        Then the user sees a "small" error with the following elements:
            | item          |
            | title         |
            | error icon    |
            | accept button |
            | cancel button |

        Examples:
            | check_status | error_type |
            | charged      | 400        |
            | charged      | 500        |
            | rejected     | 400        |
            | rejected     | 500        |

    @SRCDD002
    @MX @vbank @web-done @backend(test)
    @web @ios @android @vbank-modified
    Scenario Outline: Checks Deposits Detail with status <check_status> - Error <error_type> exit action
        Given a user with the following criteria
            | criteria                                    |
            | digital checks                              |
            | account in pesos                            |
            | has at least 1 check deposit <check_status> |
        And the user accesses the checks deposit list screen
        And the user accesses a "<check_status>" check
        When the user closes the error modal
        Then the user accesses the "Checks Deposit List" screen

        Examples:
            | check_status | error_type |
            | charged      | 400        |
            | charged      | 500        |
            | rejected     | 400        |
            | rejected     | 500        |

    @SRCDD003
    @MX @ios @android @web @manual @JIRA.GLOMOGL-26754
    Scenario Outline: Checks Deposits Detail with status <check_status> - Success after <times> retries
        Given a user with the following criteria
            | criteria                                    |
            | has at least 1 check deposit <check_status> |
        And the user accesses the checks deposit list screen
        When the user accesses a "<check_status>" check
        And the user retries at the error message "<times>" times
        Then the user is in the checks detail screen

        Examples:
            | check_status | times |
            | charged      | 1     |
            | charged      | 2     |
            | rejected     | 1     |
            | rejected     | 2     |
