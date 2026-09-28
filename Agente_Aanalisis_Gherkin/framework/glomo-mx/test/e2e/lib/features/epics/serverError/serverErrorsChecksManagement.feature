@serverErrors @checksManagementAuthorize @checksManagement @checks
Feature: Checks Management (Authorize) - Server Errors

    @SRCM001
    @MX @vbank @web-done @backend(test)
    @web @ios @android @vbank-modified
    @smokeTest
    Scenario Outline: Review - Error "<error_type>" when continues in the check management summary screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "activated" service terms
        And the user selects the option to add check
        And the user fill a check
        And the user goes to the "summary" step
        And the user confirms simulation
        When the user confirm otp
        Then the user sees a "small" error with the following elements:
            | item          |
            | title         |
            | error icon    |
            | accept button |
            | cancel button |

        Examples:
            | error_type |
            | 400        |
            | 500        |

    @SRCM002
    @MX @vbank @web-done @backend(test)
    @web @ios @android @vbank-modified
    Scenario Outline: Review navigation - Error "<error_type>" when exit when continues in the check management summary screen
        Given a user with the following criteria
            | criteria                                     |
            | pesos account with checks management active  |
            | has accepted the management service terms    |
        And the user accesses to checks operatives with checks management active
        When the user selects the checks management option with "activated" service terms
        And the user selects the option to add check
        And the user fill a check
        And the user goes to the "summary" step
        And the user confirms simulation
        And the user confirm otp
        Then the user closes the error modal

        Examples:
            | error_type |
            | 400        |
            | 500        |

    @SRCM003
    @MX @ios @android @web @manual @JIRA.GLOMOGL-26754
    Scenario Outline: Review - Success after "<times>" retries when exit when continues in the check management summary screen
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to the check management summary screen
        When the user attempts to continue
        And the user retries at the error message "<times>" times
        Then the user is in the signing screen

        Examples:
            | times |
            | 1     |
            | 2     |

    @SRCM004
    @MX @ios @android @web @manual @JIRA.GLOMOGL-26754
    Scenario Outline: Review - Error "<error_type>" when signs the check management operation
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to the signing screen of check management operation
        When the user attempts to sign
        Then the user sees a "small" modal with the following elements:
            | item          |
            | title         |
            | error icon    |
            | accept button |

        Examples:
            | error_type |
            | 400        |
            | 500        |

    @SRCM005
    @MX @ios @android @web @manual @JIRA.GLOMOGL-26754
    Scenario Outline: Review navigation - Error "<error_type>" when signs the check management operation
        Given a user with the following criteria
            | criteria                 |
            | account in pesos |
            | has checks account |
            | has accepted the management service terms  |
        And the user accesses to the signing screen of check management operation
        When the user attempts to sign
        And the user exit from the error screen
        Then the user is in "checks section" screen

        Examples:
            | error_type |
            | 400        |
            | 500        |

    @SRCM006
    @MX @ios @android @web @manual @JIRA.GLOMOGL-26754
    Scenario Outline: Review - Success after "<times>" retries when signs the check management operation
        Given a user with the following criteria
              | criteria                 |
              | account in pesos |
              | has checks account |
              | has accepted the management service terms  |
        And the user accesses to the signing screen of check management operation
        When the user attempts to sign
        And the user retries at the error message "<times>" times
        Then the user is in the management confirmation receipt screen

        Examples:
            | times |
            | 1     |
            | 2     |
