@fatcaValidationSurvey
Feature: Fatca Validation Survey

    @FAC001
    @vbank
    @ios @android
    @web-done @web
    @backend(test) @MX @smokeTest
    Scenario: Aded tax residence fiscal
        Given a user with the following criteria
            | criteria                 |
            | fatca validation survey  |
        And the user accesses to profile screen
        And the user taps on "add tax residence survey" profile button
        When the user selects the option correct info
        Then the user accesses the "profile" screen

    @FAC002
    @vbank
    @ios @android
    @web-done @web
    @backend(test) @MX
    Scenario: Additional tax residence
        Given a user with the following criteria
            | criteria                 |
            | fatca validation survey  |
        And the user accesses to profile screen
        And the user taps on "add tax residence survey" profile button
        When the user selects the option in other countries
        Then the user accesses the "profile" screen

    @FAC003
    @vbank
    @ios @android
    @web-done @web
    @backend(test) @MX
    Scenario: Add additional residence to the one added
        Given a user with the following criteria
            | criteria                 |
            | fatca validation survey  |
        And the user accesses to profile screen
        And the user taps on "add tax residence survey" profile button
        When the user adds a new additional tax residence "country"
        Then the user accesses the "profile" screen

    @FAC004
    @vbank
    @ios @android
    @web-done @web
    @backend(test) @MX
    Scenario: Disable link to add residences
        Given a user with the following criteria
            | criteria                                  |
            | fatca validation survey other residences  |
        And the user accesses to profile screen
        And the user taps on "add tax residence survey" profile button
        When the user adds a new additional tax residence "countries"
        Then the user accesses the "profile" screen

    @FAC005
    @vbank
    @ios @android
    @web-done @web
    @backend(test) @MX
    Scenario: Edit additional residence
        Given a user with the following criteria
            | criteria                 |
            | fatca validation survey  |
        And the user accesses to profile screen
        And the user taps on "add tax residence survey" profile button
        When the user edits a tax residence "success"
        Then the user accesses the "profile" screen

    @FAC006
    @vbank
    @ios @android
    @web-done @web
    @backend(test) @MX @backend-smoke
    Scenario: Remove additional residence
        Given a user with the following criteria
            | criteria                 |
            | fatca validation survey  |
        And the user accesses to profile screen
        And the user taps on "add tax residence survey" profile button
        When the user deletes a tax residence
        Then the user sees the following items in the screen
            | item                           |
            | header                         |
            | text add residence fiscal      |
            | link add residence fiscal      |
            | button confirm add residence   |

    @FAC007
    @vbank
    @ios @android
    @web-done @web
    @backend(test) @MX @backend-smoke
    Scenario: Incorrect tax residence information
        Given a user with the following criteria
            | criteria                 |
            | fatca validation survey  |
        And the user accesses to profile screen
        And the user taps on "add tax residence survey" profile button
        When the user selects the option incorrect info
        Then the user accesses the "profile" screen

    @FAC008
    @vbank
    @ios @android
    @web-done @web
    @backend(test) @MX
    Scenario: Editing the summary
        Given a user with the following criteria
            | criteria                 |
            | fatca validation survey  |
        And the user accesses to profile screen
        And the user taps on "add tax residence survey" profile button
        When the user edits the information from the summary screen "not completed"
        Then the user sees the following items in the screen
            | item                              |
            | text added residence medium modal |
            | select country form               |
            | select input                      |
            | button add residence              |

    @FAC009
    @vbank
    @ios @android
    @web-done @web
    @backend(test) @MX
    Scenario: Edit tax information section
        Given a user with the following criteria
            | criteria                 |
            | fatca validation survey  |
        And the user accesses to profile screen
        And the user taps on "add tax residence survey" profile button
        When the user edits the information from the summary screen "completed"
        Then the user sees the following items in the screen
            | item                  |
            | icon success          |
            | header modal success  |
            | close modal success   |
            | text success modal    |
            | email notification    |

    @FAC010
    @vbank
    @ios @android
    @web-done @web
    @backend(test) @MX
    Scenario: Make a change to be able to adjust a data
        Given a user with the following criteria
            | criteria                 |
            | fatca validation survey  |
        And the user accesses to profile screen
        And the user taps on "add tax residence survey" profile button
        When the user edits a tax residence from the summary
        Then the user sees the following items in the screen
            | item                  |
            | icon success          |
            | header modal success  |
            | close modal success   |
            | text success modal    |
            | email notification    |

    @FAC011
    @vbank
    @ios @android
    @web-done @web
    @backend(test) @MX @backend-smoke
    Scenario: Redirect to branch
        Given a user with the following criteria
            | criteria                 |
            | fatca validation survey  |
        And the user accesses to profile screen
        And the user taps on "add tax residence survey" profile button
        When the user redirects to branch from the summary
        Then the user accesses the "profile" screen

    @FAC012
    @vbank
    @ios @android
    @web-done @web
    @backend(test) @MX @backend-smoke
    Scenario: Edit residence and change tax information
        Given a user with the following criteria
            | criteria                 |
            | fatca validation survey  |
        And the user accesses to profile screen
        And the user taps on "add tax residence survey" profile button
        When the user edits a tax residence "invalid"
        Then the user sees the following items in the screen
            | item                           |
            | header                         |
            | icon edit residence            |
            | icon delete residence          |
            | link add residence fiscal      |
            | button confirm add residence   |

    @FAC013
    @vbank
    @ios @android
    @web-done @web
    @backend(test) @MX @backend-smoke
    Scenario: Tax identification number error
        Given a user with the following criteria
            | criteria                 |
            | fatca validation survey  |
        And the user accesses to profile screen
        And the user taps on "add tax residence survey" profile button
        When the user adds a new additional tax residence "residence"
        Then the user sees the following items in the screen
            | item                       |
            | header invalid residence   |
            | text invalid residence     |
            | button invalid residence   |

    @FAC014
    @vbank
    @ios @android
    @web-done @web
    @backend(test) @MX @backend-smoke
    Scenario: Exit the process from Update tax resistance
        Given a user with the following criteria
            | criteria                 |
            | fatca validation survey  |
        And the user accesses to profile screen
        And the user taps on "add tax residence survey" profile button
        When the user exits the process upon entering
        Then the user accesses the "profile" screen

    @FAC015
    @vbank
    @ios @android
    @web-done @web
    @backend(test) @MX @backend-smoke
    Scenario: Exit the process from Additional Tax Residences
        Given a user with the following criteria
            | criteria                 |
            | fatca validation survey  |
        And the user accesses to profile screen
        And the user taps on "add tax residence survey" profile button
        When the user exits the process of entering tax residences
        Then the user accesses the "profile" screen
