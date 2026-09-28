@securityAcesss
Feature: Security Access

    @SA002
    @MX @vbank @smokeTest
    @backend(test) @web-done
    @ios @android @web
    @backend-smoke
    Scenario: Validation Screen - User clicks on the first tap option access and signatures
        Given a user with the following criteria
            | criteria      |
            | fido enrolled |
        And the user enters the main login and signatures screen
        When the user closed access and signatures initial modal
        Then the user sees the following items in the screen
            | item        |
            | Header text |
            | Switch      |
            | Text        |

    @SA003
    @MX @vbank
    @backend(test) @web-done
    @ios @android @web
    @backend-smoke
    Scenario: Validation Screen - The user clicks on biometrics switch and a modal shows up.
        Given a user with the following criteria
            | criteria      |
            | fido enrolled |
        And the user enters the main login and signatures screen
        And the user closed access and signatures initial modal
        When the user wants turn on the biometrics switch on access tab page
        Then the user sees the following items in the screen
            | item        |
            | Header text |
            | Button      |
            | blue link   |

    @SA004
    @MX @vbank
    @backend(test)
    @ios @android @web
    @manual @JIRA.GLOMOGL-20071
    Scenario: Validation Screen - The user clicks on switch and Biometrics aren ́t configured in device and activies biometrics.
        Given a user with the following criteria
            | criteria      |
            | fido enrolled |
        And the user enters the main login and signatures screen
        And the user closed access and signatures initial modal
        And the user wants turn on the biometrics switch on access tab page
        When the user accesses to the fido configuration page
        Then the user sees the following items in the screen
            | item                 |
            | Header text          |
            | Go back option       |
            | Representative image |
            | title                |
            | description info     |
            | blue button          |
            | blue link            |

    @SA005
    @MX @vbank
    @backend(test)
    @ios @android @web
    @manual @JIRA.GLOMOGL-20071
    Scenario: Validation Screen - The user finish the biometrics configuration and registration.
        Given a user with the following criteria
            | criteria      |
            | fido enrolled |
        And the user enters the main login and signatures screen
        And the user closed access and signatures initial modal
        And the user wants turn on the biometrics switch on access tab page
        When the user accesses to the fido configuration page
        Then the user sees a modal open
