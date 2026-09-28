@fundsWithdrawal
Feature: Funds Withdrawal

    @FW001
    @web @vbank
    @MX @backend(test)
    @android @ios
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user accesses to the funds withdrawal screen
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        When the user accesses to the funds withdrawal screen
        Then the user sees the following items in the screen
            | item               |
            | Header             |
            | Fund offer summary |
            | Selected account   |
            | Continue button    |

    @FW002
    @web @vbank
    @MX @backend(test)
    @android @ios
    @web-done
    Scenario Outline: The user validates <option> of a <type> sale with <fund>
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
            | funds withdrawal |
            | <fund>           |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 21     |
            | month | 2      |
            | year  | 2024   |
        And the user selects a type of "<type>" sale
        When the user completes a fund withdrawal
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | investment date   |
            | investment amount |
            | review message    |

        Examples:
            | option                          | hour | fund                     | type    |
            | successful sale within schedule | 19   | immediate liquidity fund | parcial |
            | successful sale within schedule | 11   | immediate liquidity fund | total   |
            | successful sale after hours     | 5    | immediate liquidity fund | parcial |
            | sale in process within schedule | 13   | medium or long term fund | total   |
            | sale in process within schedule | 17   | medium or long term fund | parcial |
            | sale in process after hours     | 1    | medium or long term fund | parcial |
            | sale in process after hours     | 3    | immediate liquidity fund | total   |
            | sale in process after hours     | 4    | medium or long term fund | total   |

    @FW003
    @web @vbank
    @MX @backend(test)
    @android @ios
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user validate the sales type section
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
            | funds withdrawal |
        When the user accesses to the "step 2" section of the funds withdrawal screen
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | sales type                |
            | partial withdrawal button |
            | total withdrawal button   |

    @FW004
    @web @vbank
    @MX @backend(test)
    @android @ios
    @web-done
    @alternate-scenarios-smoke
    Scenario Outline: The user validates the amount to sell section of a <option> sale <schedule>
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
            | funds withdrawal |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 15     |
            | month | 2      |
            | year  | 2024   |
        When the user selects a type of "<option>" sale
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | type of sale          |
            | sale                  |
            | confirm amount button |

        Examples:
            | option  | hour | schedule     |
            | parcial | 19   | within hours |
            | total   | 11   | within hours |
            | parcial | 5    | after hours  |
            | total   | 2    | after hours  |

    @FW005
    @web @vbank
    @MX @backend(test)
    @android @ios
    @web-done
    Scenario Outline: The user validates the summary screen of a <option> sale <schedule> with <typeFund>
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
            | funds withdrawal |
            | <typeFund>       |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 15     |
            | month | 2      |
            | year  | 2024   |
        And the user selects a type of "<option>" sale
        When the user accesses to the "step 4" section of the funds withdrawal screen
        Then the user sees the following items in the screen
            | item                     |
            | header                   |
            | operation amount         |
            | confirm operation button |
            | modal                    |
            | change type of sale      |
            | change amount sell       |

        Examples:
            | option  | hour | schedule     | typeFund                 |
            | parcial | 19   | within hours | immediate liquidity fund |
            | parcial | 11   | within hours | medium or long term fund |
            | total   | 19   | within hours | immediate liquidity fund |
            | total   | 11   | within hours | medium or long term fund |
            | parcial | 1    | after hours  | immediate liquidity fund |
            | parcial | 1    | after hours  | medium or long term fund |
            | total   | 2    | after hours  | immediate liquidity fund |
            | total   | 2    | after hours  | medium or long term fund |

    @FW006
    @web @vbank
    @MX @backend(test)
    @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: The user validates the link change in <section>
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
            | funds withdrawal |
        And the user selects a type of "parcial" sale
        When the user selects link change from the "<section>"
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | type of sale          |
            | confirm amount button |

        Examples:
            | section                       |
            | sales type section            |
            | section modify amount to sell |

    @FW007
    @web @vbank
    @MX @backend(test)
    @android @ios
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    @spherica
    Scenario Outline: The user validates modal when changing <section>
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
            | funds withdrawal |
        When the user selects link change from the "<section>"
        Then the user sees a "small" error with the following elements:
            | item          |
            | description   |
            | accept button |

        Examples:
            | section                |
            | withdrawal type        |
            | amount to sell section |

    @FW008
    @web @vbank
    @MX @backend(test)
    @android @ios
    @web-done
    @backend-smoke
    @spherica
    Scenario: Exit summary screen
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
            | funds withdrawal |
        And the user selects a type of "parcial" sale
        When the user accesses to the "step 4" section of the funds withdrawal screen
        And the user exits the resume screen
        Then the user sees a "small" error with the following elements:
            | item          |
            | description   |
            | accept button |

    @FW009
    @web @vbank
    @MX @backend(test)
    @android @ios
    @web-done
    @smokeTest
    @backend-smoke
    Scenario Outline: Validate error message when the user adds an amount <option>
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
            | funds withdrawal |
        And the user selects a type of "parcial" sale
        When the user adds the quantity of "<amount>" to sell
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | message error |
            | error icon    |

        Examples:
            | option                            | amount |
            | less than the minimum to sell     | minor  |
            | greater than your account balance | major  |

    @FW010
    @web @vbank
    @MX @backend(test)
    @android @ios
    @web-done
    @spherica
    Scenario: Error message when user chooses an unavailable background
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
            | funds withdrawal |
        When the user tries completes a sale of the fund
        Then the user sees a "big" error with the following elements:
            | item 			|
            | title 	    |
            | close button  |
            | accept button |
