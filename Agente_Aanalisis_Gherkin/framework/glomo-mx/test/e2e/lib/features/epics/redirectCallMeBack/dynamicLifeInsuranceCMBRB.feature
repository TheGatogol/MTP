@redirectCallMeBack
Feature: Redirect Call Me Back Dynamic Life Insurance Remote Banker

    @CMBDR002
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: When the user enters call me back from the header
        Given a user with the following criteria
            | criteria                           |
            | remote banking user life insurance |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 27   |
            | month | 10   |
            | year  | 2023 |
        When the user accesses to dynamic life insurance offer
        And the user accesses to I want to call a personal advisor "header"
        Then the user sees the following items in the screen
            | item              |
            | image check       |
            | description       |
            | countdown timer   |
            | info message      |
            | understood button |

    @CMBDR003
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: When the user enters call me back from the link sticky
        Given a user with the following criteria
            | criteria                           |
            | remote banking user life insurance |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 27   |
            | month | 10   |
            | year  | 2023 |
        When the user accesses to dynamic life insurance offer
        And the user accesses to I want to call a personal advisor "link"
        Then the user sees the following items in the screen
            | item              |
            | image check       |
            | description       |
            | countdown timer   |
            | info message      |
            | understood button |

    @CMBDR004
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: When The user enters call me back but has a previous request assigned
        Given a user with the following criteria
            | criteria                           |
            | remote banking user life insurance |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 27   |
            | month | 10   |
            | year  | 2023 |
        When the user accesses to dynamic life insurance offer
        And the user accesses to I want to call a personal advisor "header"
        Then the user sees the following items in the screen
            | item              |
            | image check icon  |
            | description       |
            | understood button |

    @CMBDR005
    @web @ios @android
    @backend(test) @vbank
    @MX @manual @JIRA.GLOMOMX-215003
    @web-done
    Scenario: When the user schedules a call me back by selecting date and time
        Given a user with the following criteria
            | criteria                           |
            | remote banking user life insurance |
        And the user starts the application at date:
            | hour  | 6    |
            | day   | 27   |
            | month | 10   |
            | year  | 2023 |
        When the user accesses to dynamic life insurance offer
        And the user accesses to I want to call a personal advisor "header"
        And the user selects schedule
        And the user confirms the shown schedule
        Then the user sees the following items in the screen
            | item              |
            | header check      |
            | image check       |
            | description       |
            | date              |
            | info message      |
            | understood button |

    @CMBDR006
    @web @ios @android
    @backend(test) @vbank
    @MX @manual @JIRA.GLOMOMX-215003
    @web-done
    Scenario: When the user sends a call me back with date and time but has received a previous request
        Given a user with the following criteria
            | criteria                           |
            | remote banking user life insurance |
        And the user starts the application at date:
            | hour  | 6    |
            | day   | 27   |
            | month | 10   |
            | year  | 2023 |
        When the user accesses to dynamic life insurance offer
        And the user accesses to I want to call a personal advisor "header"
        And the user selects schedule
        And the user confirms the shown schedule
        Then the user sees the following items in the screen
            | item              |
            | image check       |
            | description       |
            | understood button |

    @CMBDR007
    @web @ios @android
    @backend(test) @vbank
    @MX
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: When the user enters call me back on a non-working day
        Given a user with the following criteria
            | criteria                           |
            | remote banking user life insurance |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 27   |
            | month | 10   |
            | year  | 2023 |
        When the user accesses to dynamic life insurance offer
        And the user accesses to I want to call a personal advisor "header"
        Then the user sees the following items in the screen
            | item                    |
            | schedule header         |
            | clock image             |
            | title                   |
            | non working description |
            | schedule call button    |
            | exit button             |

    @CMBDR008
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    Scenario: When the user uses call me back on a non-working day and sees dates and times
        Given a user with the following criteria
            | criteria                           |
            | remote banking user life insurance |
        And the user starts the application at date:
            | hour  | 10     |
            | day   | 27     |
            | month | 10     |
            | year  | 2023   |
        When the user accesses to dynamic life insurance offer
        And the user accesses to I want to call a personal advisor "header"
        And the user advances to the schedule call screen
        Then the user sees the following items in the screen
            | item                           |
            | header schedule a call         |
            | image schedule a call          |
            | description schedule a call    |
            | radio button                   |
            | confirm button schedule a call |

    @CMBDR009
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    @smokeTest
    Scenario: When the user uses call me back on a non-working day and successfully requests
        Given a user with the following criteria
            | criteria                           |
            | remote banking user life insurance |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 27   |
            | month | 10   |
            | year  | 2023 |
        When the user accesses to dynamic life insurance offer
        And the user accesses to I want to call a personal advisor "header"
        And the user advances to the schedule call screen
        And the user selects schedule
        And the user confirms the shown schedule
        Then the user sees the following items in the screen
            | item              |
            | header check      |
            | image check       |
            | description       |
            | date              |
            | info message      |
            | understood button |
