@accountUpgrade @n2ToN4AccountUpgrade
Feature: N2 to N4 account upgrade

    @NAU001
    @MX @backend(test)
    @vbank
    @tmpExclude @JIRA.GLOMOMX-192448
    @web @web-done
    Scenario: User navigates to account upgrade multistep
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from N2 to N4 |
        When the user navigates to account upgrade multistep
        Then the user sees the following items in the screen
            | item                              | value    |
            | header                            |          |
            | Verification step title           |          |
            | Verification step icons           |          |
            | Option to scan document           | enabled  |
            | Option to take selfie             | disabled |
            | Verification step continue button | disabled |

    @NAU002
    @MX @vbank
    @web @android @ios
    @smokeTest
    @backend(test)
    @web-done
    @timemachine
    Scenario Outline: Regularize clients N4 of massive payroll with documents, alerting <timelapse>
        Given a user with the following criteria
            | criteria       |
            | accounts       |
            | account detail |
        And the user starts the application at date:
            | day   | <day>   |
            | month | <month> |
            | year  | <year>  |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item         | currency |
            | header       |          |
            | greeting     |          |
            | help button  |          |
            | sidebar      |          |
            | title        | MXN      |
            | alias        | MXN      |
            | amount       | MXN      |
            | number       | MXN      |
            | label amount | MXN      |

        Examples:
            | timelapse       | day | month | year |
            | day 1 to 10     | 23  | 7     | 2021 |
            | days 11 to 55   | 22  | 8     | 2021 |
            | days 56 or more | 22  | 9     | 2021 |

    @NAU003
    @MX @vbank
    @web @android @ios
    @backend(test) @vbank-modified
    @web-done
    @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-192448 @JIRA.GLOMOGL-34070
    Scenario: Upgrade N2 to N4.
        Given a user with the following criteria
            | criteria                   |
            | dashboard accounts         |
            | accounts status incomplete |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item         | currency |
            | header       |          |
            | greeting     |          |
            | help button  |          |
            | sidebar      |          |
            | title        | MXN      |
            | alias        | MXN      |
            | amount       | MXN      |
            | number       | MXN      |
            | label amount | MXN      |
            | info alert   | MXN      |

    @NAU004
    @MX @vbank
    @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    Scenario: Regularize clients N4 of massive payroll with documents, blocked alert
        Given a user with the following criteria
            | criteria                |
            | dashboard accounts      |
            | accounts status blocked |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item          | currency |
            | header        |          |
            | greeting      |          |
            | help button   |          |
            | sidebar       |          |
            | title         | MXN      |
            | alias         | MXN      |
            | amount        | MXN      |
            | number        | MXN      |
            | label amount  | MXN      |
            | blocked alert | MXN      |
