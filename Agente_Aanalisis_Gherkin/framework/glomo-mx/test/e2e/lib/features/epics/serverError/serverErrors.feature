@serverErrors
Feature: Server Errors - Generic Handling

    @SR001
    @MX
    @vbank
    @web-done @web @backend(test)
    @serverError @vbank-modified
    @smokeTest
    Scenario Outline: Review - Error "<error_type>" when confirm activate protection
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks operatives with checks management active
        When the user selects the checks management option
        And the user confirms activate protection
        Then the user sees a "small" error with the following elements:
            | item          |
            | title         |
            | description   |
            | error icon    |
            | accept button |

        Examples:
            | error_type |
            | 400        |

    @SR002
    @MX
    @vbank
    @web-done @web @backend(test)
    @serverError @vbank-modified
    @no-spherica
    Scenario Outline: Review navigation - Error "<error_type>" when exit when confirm activate protection
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option
        When the user confirms activate protection
        And the user confirm exit from the error screen
        Then the user accesses the "Checks Management Service Terms" screen

        Examples:
            | error_type |
            | 400        |

    @SR003
    @MX
    @vbank
    @web-done @web @backend(test) @manual @JIRA.GLOMOGL-26754 @softoken
    @serverError
    Scenario Outline: Review - Success after "<times>" retries when confirm activate protection
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | checks management error                     |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option
        When the user confirms activate protection
        And the user retries at the error message "<times>" times
        Then the user is in check management confirmation acceptance screen

        Examples:
            | times |
            | 1     |
            | 2     |

    @SR004
    @MX
    @vbank
    @web-done @web @backend(test)
    @serverError @vbank-modified
    Scenario Outline: Review - Error "<error_type>" when confirm declination protection
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option
        When the user declines the service terms
        And the user finally declines the service terms
        Then the user sees a "small" error with the following elements:
            | item          |
            | title         |
            | description   |
            | error icon    |
            | accept button |

        Examples:
            | error_type |
            | 400        |

    @SR005
    @MX
    @vbank @backend(test)
    @ios @android @web @web-done
    @serverError @vbank-modified
    @no-spherica
    Scenario Outline: Review navigation - Error "<error_type>" when exit when confirm declination protection
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option
        When the user declines the service terms
        And the user confirm exit from the error screen
        Then the user accesses the "Checks Management Service Terms" screen

        Examples:
            | error_type |
            | 400        |

    @SR006
    @MX
    @vbank
    @ios @android @web @web-done @manual @JIRA.GLOMOGL-26754 @softoken
    @serverError
    Scenario Outline: Review - Success after "<times>" retries when confirm declination protection
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | checks management error                     |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option
        When the user declines the service terms
        And the user retries at the error message "<times>" times
        Then the user is in check management confirmation declination screen
        Examples:
            | times |
            | 1     |
            | 2     |

    @SR007
    @MX
    @vbank
    @web-done @web @backend(test)
    @serverError @vbank-modified
    @no-spherica
    Scenario Outline: Review - Error "<error_type>" when entering checks management service terms screen
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks operatives with checks management active
        When the user accesses checks management option
        Then the user sees a "small" error with the following elements:
            | item          |
            | title         |
            | description   |
            | error icon    |
            | accept button |

        Examples:
            | error_type |
            | 400        |

    @SR008
    @MX
    @vbank
    @web-done @web @backend(test)
    @serverError @vbank-modified
    Scenario Outline: Review navigation - Error "<error_type>" when entering checks management service terms screen
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks operatives with checks management active
        When the user accesses checks management option
        And the user accepts the error modal
        Then the user accesses the "checks management service terms" screen

        Examples:
            | error_type |
            | 400        |

    @SR009
    @MX
    @vbank
    @web-done @web @backend(test) @manual @JIRA.GLOMOGL-26754
    @serverError
    Scenario Outline: Review navigation - Error "<times>" when entering checks management service terms screen
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | checks management error                     |
        And the user accesses to checks operatives with checks management active
        When the user accesses checks management option
        And the user retries the operation "<times>" times
        Then the user is in check management service terms screen

        Examples:
            | times |
            | 1     |
            | 2     |

    @SR010
    @MX
    @vbank
    @web-done @web @backend(test) @manual @JIRA.GLOMOGL-26754
    @serverError
    Scenario: Review navigation - Error "<error_type>" when entering checks management service terms screen
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | checks management error                     |
        And the user accesses to checks operatives with checks management active
        And the user accesses checks management operation
        When the user has no internet connection
        Then the user sees the following items in the screen
            | item  |
            | toast |
            | text  |
