@liteOnBoardingForeing
Feature: Lite Onboarding Foreigners

    @LOF001
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: From data filling to identity verification
        Given a user with the following criteria
            | criteria                 |
            | open new account foreing |
        And the user is in the Welcome screen
        When the user accesses the foreign country
        And the user accesses for the first time and enters personal data
        And the user enters current address information
        And the user enters contact information
        Then the user sees the following items in the screen
            | item                                 |
            | header upload documentation          |
            | button scan your passport            |
            | button take a selfie                 |
            | button continue upload documentation |

    @LOF002
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @backend-smoke
    Scenario: Change name and continue
        Given a user with the following criteria
            | criteria                 |
            | open new account foreing |
        And the user is in the Welcome screen
        When the user accesses the foreign country
        And the user accesses for the first time and enters personal data
        And the user changes the name and continues with the process
        Then the user sees the following items in the screen
            | item                  |
            | input street          |
            | input external number |
            | input internal number |
            | input postal code     |

    @LOF003
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @backend-smoke
    Scenario: Modify street and continue
        Given a user with the following criteria
            | criteria                 |
            | open new account foreing |
        And the user is in the Welcome screen
        When the user accesses the foreign country
        And the user accesses for the first time and enters personal data
        And the user enters current address information
        And the user changes the street and continues with the process
        Then the user sees the following items in the screen
            | item                                 |
            | input cells phone number             |
            | input email                          |
            | notification message contact details |
            | check privacy notice                 |

    @LOF004
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @backend-smoke @smokeTest
    Scenario: Validate the button understood to know more about foreigners
        Given a user with the following criteria
            | criteria                 |
            | open new account foreing |
        And the user is in the Welcome screen
        When the user accesses the foreign country
        And the user "closes" the information modal in welcome
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | button open account  |
            | link know more       |
            | button close welcome |

    @LOF005
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @backend-smoke
    Scenario Outline: Validate the <case>
        Given a user with the following criteria
            | criteria                 |
            | open new account foreing |
        And the user is in the Welcome screen
        When the user accesses the foreign country
        And the user "<value>" the information modal in personal data
        Then the user sees the following items in the screen
            | item                   |
            | input name             |
            | input first last name  |
            | input second last name |
            | input country          |
        Examples:
            | case                                                | value      |
            | understood button to learn more about personal data | understood |
            | x button to learn more about personal data          | closes     |

    @LOF006
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @backend-smoke
    Scenario Outline: Validate the <case>
        Given a user with the following criteria
            | criteria                 |
            | open new account foreing |
        And the user is in the Welcome screen
        When the user accesses the foreign country
        And the user accesses for the first time and enters personal data
        And the user enters current address information
        And the user "<value>" the information modal in privacy notice
        Then the user sees the following items in the screen
            | item                                 |
            | input cells phone number             |
            | input email                          |
            | notification message contact details |
            | check privacy notice                 |
        Examples:
            | case                             | value      |
            | understood privacy notice button | understood |
            | privacy notice button            | closes     |

    @LOF007
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @backend-smoke
    Scenario Outline: Validate when entering incorrectly <case>
        Given a user with the following criteria
            | criteria                 |
            | open new account foreing |
        And the user is in the Welcome screen
        When the user accesses the foreign country
        And the user reports "<case>" incorrectly in personal data
        Then the user sees the following items in the screen
            | item                        |
            | input name                  |
            | input first last name       |
            | input second last name      |
            | input country               |
            | error message personal data |
        Examples:
            | case             |
            | name             |
            | date             |
            | passport         |

    @LOF008
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @backend-smoke
    Scenario Outline: Validate <case>
        Given a user with the following criteria
            | criteria                 |
            | open new account foreing |
        And the user is in the Welcome screen
        When the user accesses the foreign country
        And the user accesses for the first time and enters personal data
        And the user reports "<value>" incorrectly in current address
        Then the user sees the following items in the screen
            | item                          |
            | input street                  |
            | input external number         |
            | input internal number         |
            | input postal code             |
            | error message current address |
        Examples:
            | case                             | value                       |
            | when entering incorrectly street | street                      |
            | zip code incorrect               | postal code                 |
            | zip code only five characters    | postal code five characters |

    @LOF009
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @backend-smoke
    Scenario Outline: Validate <case>
        Given a user with the following criteria
            | criteria                 |
            | open new account foreing |
        And the user is in the Welcome screen
        When the user accesses the foreign country
        And the user accesses for the first time and enters personal data
        And the user enters current address information
        And the user reports "<value>" incorrectly in contact details
        Then the user sees the following items in the screen
            | item                                 |
            | input cells phone number             |
            | input email                          |
            | notification message contact details |
            | check privacy notice                 |
            | error message contact details        |
        Examples:
            | case                                       | value         |
            | incomplete cell phone number               | cell number   |
            | cell phone number less than ten characters | email         |
            | error emails do not match                  | email confirm |
