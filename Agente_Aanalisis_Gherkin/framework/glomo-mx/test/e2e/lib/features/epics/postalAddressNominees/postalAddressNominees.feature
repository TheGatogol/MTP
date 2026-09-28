@postalAddressNominees
Feature: Postal Address Nominees

    @PAN002
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario: The user accesses to the postal address nominees operation
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        When the user accepts the modal
        Then the user sees the following items in the screen
            | item                      | disabled |
            | header                    |          |
            | title                     |          |
            | subtitle                  |          |
            | street name input         |          |
            | exterior number input     |          |
            | interior number input     |          |
            | postal code input         |          |
            | colony drop down button   | true     |
            | city field                | true     |
            | state field               | true     |
            | country field             | true     |
            | privacy title             |          |
            | privacy subtitle          |          |
            | privacy link              |          |
            | continue button           | true     |

    @PAN003
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario: The user fills the update payroll address form
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        And the user accepts the modal
        When the user fills the update address form with the following data
            | input                 | value |
            | street name input     | 41    |
            | exterior number input | 532A  |
            | interior number input | 12    |
            | postal code input     | 97000 |
            | neighborhood          |       |
        Then the user sees the following items in the screen
            | item                    | disabled | hasValue |
            | street name input       |          | true     |
            | exterior number input   |          | true     |
            | interior number input   |          | true     |
            | postal code input       |          | true     |
            | colony drop down button | false    |          |
            | city field              | false    | true     |
            | state field             | false    | true     |
            | country field           | false    | true     |
            | continue button         | false    |          |

    @PAN004
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario: The user erases the values from the update payroll address form inputs
        Given a user with the following criteria
            | criteria                    |
            | postal address nominees     |
        And the user accesses the "postal address nominees" operation
        And the user accepts the modal
        And the user fills the update address form with the following data
            | input                 | value |
            | street name input     | 41    |
            | exterior number input | 532A  |
            | interior number input | 12    |
            | postal code input     | 97000 |
        When the user erases the values from the following inputs
            | input                 |
            | street name input     |
            | exterior number input |
            | interior number input |
            | postal code input     |
        Then the user sees the following items in the screen
            | item                    | disabled | hasValue |
            | street name input       |          | false    |
            | exterior number input   |          | false    |
            | interior number input   |          | false    |
            | postal code input       |          | false    |
            | colony drop down button | true     |          |

    @PAN005
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario: The user sees the error message when he inputs an invalid postal code
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        And the user accepts the modal
        When the user fills the update address form with the following data
            | input             | value |
            | postal code input | 12345 |
        Then the user sees the following items in the screen
            | item                      |
            | postal code error message |

    @PAN006
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario: The user enters the privacy notice screen
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        And the user accepts the modal
        When the user goes to the privacy notice screen
        Then the user sees a modal with the following elements:
            | item          |
            | title         |
            | main text     |
            | accept button |

    @PAN007
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario Outline: The user exits the privacy notice screen using the <button> button
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        And the user accepts the modal
        And the user goes to the privacy notice screen
        When the user exits the privacy notice screen through the "<button>" button
        Then the user sees the following items in the screen
            | item                      | disabled |
            | header                    |          |
            | title                     |          |
            | subtitle                  |          |
            | street name input         |          |
            | exterior number input     |          |
            | interior number input     |          |
            | postal code input         |          |
        Examples:
            | button |
            | accept |
            | X      |

    @PAN008
    @MX
    @web
    @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario Outline: The user sees the colony dropdown menu when he inputs a "<correctCP>" postal code
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        And the user accepts the modal
        And the user fills the update address form with the following data
            | input             | value   |
            | postal code input | <value> |
        When the user opens the colony menu
        Then the user sees the following items in the screen
            | item        | hasValue   |
            | colony menu | <hasValue> |
        Examples:
            | value | hasValue | correctCP |
            | 97000 | true     | correct   |
            | 12345 | false    | incorrect |

    @PAN009
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done @smokeTest
    Scenario: The user completes the postal address nominees process
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        And the user accepts the modal
        And the user fills the update address form with the following data
            | input                 | value |
            | street name input     | 41    |
            | exterior number input | 532A  |
            | interior number input | 12    |
            | postal code input     | 97000 |
            | neighborhood          |       |
        When the user correctly accepts the form
        Then the user sees the following items in the screen
            | item             |
            | success icon     |
            | success title    |
            | date             |
            | success subtitle |
            | address title    |
            | address          |
            | folio title      |
            | folio            |
            | mail title       |
            | mail             |
            | accept button    |

    @PAN010
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario Outline: The user exits the postal address nominees success screen through the <button> button
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        And the user accepts the modal
        And the user fills the update address form with the following data
            | input                 | value |
            | street name input     | 41    |
            | exterior number input | 532A  |
            | interior number input | 12    |
            | postal code input     | 97000 |
            | neighborhood          |       |
        And the user correctly accepts the form
        When the user exits the screen using the "<button>" option
        Then the user accesses the "dashboard" screen
        Examples:
            | button        |
            | x             |
            | accept button |

    @PAN011
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario: The user accesses the application after completing the updating address process
        Given a user with the following criteria
            | criteria                        |
            | postal address nominees success |
        When the user accesses to dashboard
        Then the user accesses the "dashboard" screen

    @PAN012
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario: The user accesses the transfer function after completing the updating address process
        Given a user with the following criteria
            | criteria                        |
            | postal address nominees success |
        When the user accesses to transfer
        Then the user accesses the "transfer" screen

    @PAN013
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario: The user sees the loading data error screen
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        And the user accepts the modal
        And the user fills the update address form with the following data
            | input                 | value |
            | street name input     | 41    |
            | exterior number input | 532A  |
            | interior number input | 12    |
            | postal code input     | 97000 |
            | neighborhood          |       |
        When the user mistakenly accepts the form
        Then the user sees a modal with the following elements:
            | item           |
            | container icon |
            | main text      |
            | accept button  |

    @PAN014
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario: The user retries the error modal 3 times
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        And the user accepts the modal
        And the user fills the update address form with the following data
            | input                 | value |
            | street name input     | 41    |
            | exterior number input | 532A  |
            | interior number input | 12    |
            | postal code input     | 97000 |
            | neighborhood          |       |
        And the user mistakenly accepts the form
        When the user retries "3" more times
        Then the user is redirected to the login screen

    @PAN015
    @MX
    @web
    @ios @android
    @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    Scenario: The user exits the error loading data modal
        Given a user with the following criteria
            | criteria                |
            | postal address nominees |
        And the user accesses the "postal address nominees" operation
        And the user accepts the modal
        And the user fills the update address form with the following data
            | input                 | value |
            | street name input     | 41    |
            | exterior number input | 532A  |
            | interior number input | 12    |
            | postal code input     | 97000 |
            | neighborhood          |       |
        And the user mistakenly accepts the form
        When the user accepts the modal
        Then the user sees the following items in the screen
            | item            |
            | continue button |
