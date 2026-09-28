@mgmPayrollPortability
Feature: Member get Member Payroll Portability

    @MPW001
    @MX @backend(test)
    @vbank
    @smokeTest
    @web @web-done
    @ios @android
    Scenario: The user accesses to the mgm payroll portability modification operation
        Given a user with the following criteria
            | criteria                        |
            | dynamics portability invitation |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "payroll portability registration form"
        When the user "registers" the referrals personal information portabilidad
        Then the user sees the following items in the screen
            | item                                        |
            | successfully registered title               |
            | successfully registered info text           |
            | successfully registered full name           |
            | successfully registered email               |
            | successfully registered birthday            |
            | successfully registered accordion           |
            | successfully registered someone else button |

    @MPW003
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: The user continuos register process from bonus detail
        Given a user with the following criteria
            | criteria               |
            | has offers and rewards |
        And the user accesses to invite your friend in the sidebar
        And the user taps on the "rewards option"
        When the user taps on the "bonification item"
        Then the user sees the following items in the screen
            | item                                |
            | mgm bonification header             |
            | mgm bonification message            |
            | mgm bonification rewards text       |
            | mgm bonification info box           |
            | mgm bonification go dynamics button |

    @MPW004
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: The user accesses to the mgm payroll portability from rewards detail
        Given a user with the following criteria
            | criteria               |
            | has offers and rewards |
        And the user accesses to invite your friend in the sidebar
        And the user taps on the "rewards option"
        When the user taps on the "reward item"
        Then the user sees the following items in the screen
            | item                                    |
            | mgm reward detail header                |
            | mgm rewards detail total                |
            | mgm rewards detail paragraph            |
            | mgm rewards detail link rewards history |

    @MPW005
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario Outline:  The user accesses to the mgm payroll portability and fill out the form input up to the <label> incorrectly
        Given a user with the following criteria
            | criteria                        |
            | dynamics portability invitation |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "payroll portability registration form"
        When the user fills out the form input up to the "<label>" incorrectly
        Then the user sees the following items in the screen
            | item                                | value    | visibility        |
            | form description                    |          |                   |
            | form input name                     |          |                   |
            | form input first surname            |          |                   |
            | form input second surname           |          |                   |
            | form input email                    |          |                   |
            | form input birthdate                |          |                   |
            | form button disabled                | disabled |                   |
            | form first surname remove button    |          | <buttonLastName>  |
            | form first surname error message    |          | <errorMessage1>   |
            | form second last name remove button |          | <button2LastName> |
            | form second last name error message |          | <errorMessage2>   |

        Examples:
            | label            | buttonLastName | button2LastName | errorMessage1 | errorMessage2 |
            | first last name  | visible        | not visible     | visible       | not visible   |
            | second last name | visible        | visible         | not visible   | visible       |

    @MPW006
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario:  The user accesses to the mgm payroll portability and fill out the form input up to the email incorrectly
        Given a user with the following criteria
            | criteria                        |
            | dynamics portability invitation |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "payroll portability registration form"
        When the user fills out the form input up to the "email" incorrectly
        Then the user sees the following items in the screen
            | item                      | value    |
            | form description          |          |
            | form input name           |          |
            | form input first surname  |          |
            | form input second surname |          |
            | form input email          |          |
            | form input birthdate      |          |
            | form button disabled      | disabled |
            | form email remove button  |          |
            | form email error message  |          |

    @MPW007
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario:  The user accesses to the mgm payroll portability and fill out the form input up to the birthday incorrectly
        Given a user with the following criteria
            | criteria                        |
            | dynamics portability invitation |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "payroll portability registration form"
        When the user fills out the form input up to the "birthday" incorrectly
        Then the user sees the following items in the screen
            | item                        | value    |
            | form description            |          |
            | form input name             |          |
            | form input first surname    |          |
            | form input second surname   |          |
            | form input email            |          |
            | form input birthdate        |          |
            | form button disabled        | disabled |
            | form birthday remove button |          |
            | form birthday error message |          |
