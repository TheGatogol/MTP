@dashboard_cases_errors
Feature: Dashboard Cases Errors

    @DCE001 @vbank
    @vbank-modified
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Show the screen error when fail to load one time
        Given a user with the following criteria
            | criteria                                      |
            | accounts                                      |
            | 1 attempted error in the redemption execution |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | sidebar                 |
            | dashboard error heading |
            | dashboard error message |
            | dashboard retry button  |

    @DCE002 @vbank
    @vbank-modified
    @MX @web @android @ios
    @smokeTest
    @backend(test)
    @web-done
    Scenario: Show the screen error definitive when fails to load more than 3 times
        Given a user with the following criteria
            | criteria                                                |
            | accounts                                                |
            | more than 3 attempted error in the redemption execution |
        When the user accesses to dashboard
        And the user retries "3" times
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | sidebar                 |
            | dashboard error heading |
            | dashboard error message |
            | dashboard exit button   |
