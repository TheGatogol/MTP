@profile
Feature: Profile

    @PRO001
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    @backend-smoke
    Scenario Outline: Profile - <user> profile info box
        Given a user with the following criteria
            | criteria |
            | profile  |
            | <user>   |
        When the user accesses to profile screen
        Then the user sees the following items in the screen
            | item              | value     |
            | top info box      | <type>    |
            | top info title    | <title>   |
            | top info message  |           |
            | top info list     | <list>    |
            | tag pending       | <tag>     |
        Examples:
            | user                      | type         | title   | list    | tag     |
            | native digital            | info-dark    | visible | hidden  |         |
            | lack of documents         | info-dark    | visible | hidden  |         |
            | blocked full documents    | warning-dark | visible | hidden  |         |
            | blocked lack of documents | warning-dark | visible | visible |         |
            | pending validate email    | warning-dark | visible |         | visible |

    @PRO002
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    @backend-smoke
    Scenario Outline: Profile - <status> identity documents
        Given a user with the following criteria
            | criteria               |
            | profile                |
            | <status> identity docs |
        And the user accesses to profile screen
        When the user <show_btn> on "personal info show data" profile button
        Then the user sees the following items in the screen
            | item                    | value      |
            | personal info title     |            |
            | complete name           |            |
            | birth data              |            |
            | curp                    | <value>    |
            | curp edit btn           | <edit_btn> |
            | curp warning            | <warning>  |
            | curp add btn            | <add_btn>  |
            | identification          | <value>    |
            | identification exp date | <exp_date> |
            | identification edit btn | <edit_btn> |
            | identification warning  | <warning>  |
            | identification add btn  | <add_btn>  |
        Examples:
            | status            | show_btn   | add_btn | value    | exp_date | edit_btn | warning |
            | pending unmasked  | taps       | hidden  | unmasked | visible  | enabled  | visible |
            | complete unmasked | taps       | hidden  | unmasked | visible  | odd      | hidden  |

    @PRO003
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: Profile - unmasked contacts
        Given a user with the following criteria
            | criteria         |
            | profile          |
            | unmasked contacts |
        And the user accesses to profile screen
        When the user taps on "contacts show data" profile button
        Then the user sees the following items in the screen
            | item               | value      |
            | mobile title       |            |
            | mobile             | <state>    |
            | mobile info button |            |
            | email title        |            |
            | email              | <state>    |
            | email edit button  | enabled    |

    @PRO004
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    @smokeTest @backend-smoke
    Scenario Outline: Profile - <status> FATCA
        Given a user with the following criteria
            | criteria       |
            | profile        |
            | <status> fatca |
        And the user accesses to profile screen
        When the user <show_btn> on "tax residence show data" profile button
        Then the user sees the following items in the screen
            | item                             | value      |
            | tax residence header             |            |
            | tax residence                    | <details>  |
            | tax residence tooltip            |            |
            | tax residence status label       | <label>    |
            | tax residence edit button        | <details>  |
            | tax residence warning            | <warning>  |
            | main tax residence title         | <details>  |
            | main tax residence country       | <details>  |
            | main tax residence nif           | <details>  |
            | tax residence add button         | <details>  |
        Examples:
            | status   | show_btn   | label   | details  | warning |
            | pending  | taps       | visible | visible  | visible |
            | complete | taps       | hidden  | visible  | hidden  |
