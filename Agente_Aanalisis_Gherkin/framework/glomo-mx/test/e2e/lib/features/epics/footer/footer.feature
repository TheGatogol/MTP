@footer
Feature: Footer

    @FO001
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @smokeTest
    @backend-smoke
    Scenario Outline: <page> screen Validation
        Given a user with the following criteria
            | criteria           |
            | has 2 check deposited different days |
        When the user goes to <page> dashboard
        Then the user sees the following items in the screen
            | item         |
            | icon Home    |
            | icon Heart   |
            | icon Add     |
            | icon Mail    |
            | icon Contact |

        Examples:
            | page          |
            | Home          |
            | Opportunities |
