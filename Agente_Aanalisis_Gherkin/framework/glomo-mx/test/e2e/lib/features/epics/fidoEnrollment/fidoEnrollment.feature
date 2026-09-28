@fido
Feature: Fast IDentity Online - FIDO
    @FIDO001
    @web @ios @android @MX
    @manual @JIRA.GLOMOGL-20071
    @smokeTest
    Scenario: User with ST and FIDO not configured
        Given a user with the following criteria
            | criteria          |
            | security          |
            | softoken          |
            | biometrics config |
            | not fido offered  |
        When the user logs in
        Then the user accesses the "fido" screen

    @FIDO002
    @web @ios @android @MX
    @manual @JIRA.GLOMOGL-20071
    Scenario: User with ST and FIDO configured reaches dashboard after login
        Given a user with the following criteria
            | criteria          |
            | security          |
            | softoken          |
            | biometrics config |
            | fido offered      |
        When the user logs in
        Then the user accesses the "dashboard" screen

    @FIDO003
    @web @ios @android @MX
    @manual @JIRA.GLOMOGL-20071
    Scenario: User declines to enroll FIDO
        Given a user with the following criteria
            | criteria          |
            | security          |
            | softoken          |
            | biometrics config |
            | not fido offered  |
        And the user access the "fido" screen
        When the user declines to enroll FIDO
        Then the user sees a "small" modal with the following elements:
            | item          |
            | error icon    |
            | description   |
            | accept button |

    @FIDO004
    @web @ios @android @MX
    @manual @JIRA.GLOMOGL-20071
    Scenario: User reaches dashboard after declining to enroll FIDO
        Given a user with the following criteria
            | criteria          |
            | security          |
            | softoken          |
            | biometrics config |
            | not fido offered  |
        And the user access the "fido" screen
        And the user declines to enroll FIDO
        When the user accepts the modal
        Then the user accesses the "dashboard" screen

    @FIDO005
    @web @ios @android @MX
    @manual @JIRA.GLOMOGL-20071
    Scenario: User starts enrolling FIDO
        Given a user with the following criteria
            | criteria          |
            | security          |
            | softoken          |
            | biometrics config |
            | not fido offered  |
        And the user access the "fido" screen
        When the user starts FIDO enrollment
        Then the user accesses the biometrics native pop up

    @FIDO006
    @web @ios @android @MX
    @manual @JIRA.GLOMOGL-20071
    Scenario: User introduces biometrics correctly in FIDO enrollment process
        Given a user with the following criteria
            | criteria          |
            | security          |
            | softoken          |
            | biometrics config |
            | not fido offered  |
        And the user access the "fido" screen
        And the user starts FIDO enrollment
        When the user introduces biometrics correctly
        Then the user is in the signing screen

    @FIDO007
    @web @ios @android @MX
    @manual @JIRA.GLOMOGL-20071
    Scenario: User finishes FIDO enrollment
        Given a user with the following criteria
            | criteria          |
            | security          |
            | softoken          |
            | biometrics config |
            | not fido offered  |
        And the user access the "fido" screen
        And the user starts FIDO enrollment
        When the user enrolls FIDO correctly
        Then the user sees the following items in the screen
           | item                   |
           | toast message          |

    @FIDO008
    @web @ios @android @MX
    @manual @JIRA.GLOMOGL-20071
    Scenario: User finishes FIDO enrollment 2
        Given a user with the following criteria
            | criteria          |
            | security          |
            | softoken          |
            | biometrics config |
            | not fido offered  |
        And the user access the "fido" screen
        And the user starts FIDO enrollment
        When the user enrolls FIDO correctly
        Then the user accesses the "dashboard" screen

    @FIDO009
    @web @ios @android @MX
    @manual @JIRA.GLOMOGL-20071
    Scenario: User cancels biometrics introduction in FIDO enrollment process
        Given a user with the following criteria
            | criteria          |
            | security          |
            | softoken          |
            | biometrics config |
            | not fido offered  |
        And the user access the "fido" screen
        And the user starts FIDO enrollment
        When the user cancels the introduction of its biometrics
        Then the user sees a "small" modal with the following elements:
            | item          |
            | error icon    |
            | description   |
            | accept button |

    @FIDO010
    @web @ios @android @MX
    @manual @JIRA.GLOMOGL-20071
    Scenario: User reaches dashboard after cancelling FIDO enrollment
        Given a user with the following criteria
            | criteria          |
            | security          |
            | softoken          |
            | biometrics config |
            | not fido offered  |
        And the user starts FIDO enrollment
        And the user cancels the introduction of its biometrics
        When the user accepts the modal
        Then the user accesses the "dashboard" screen

    @FIDO011
    @web @ios @android @MX
    @manual @JIRA.GLOMOGL-20071
    Scenario: User gets an error in FIDO enrollment process
        Given a user with the following criteria
            | criteria          |
            | security          |
            | softoken          |
            | biometrics config |
            | not fido offered  |
        And the user access the "fido" screen
        And the user starts FIDO enrollment
        When FIDO enrollment fails
        Then the user sees the following items in the screen
           | item                   |
           | toast error message    |

    @FIDO012
    @web @ios @android @MX
    @manual @JIRA.GLOMOGL-20071
    Scenario: User reaches dashboard after getting an error in FIDO enrollment process
        Given a user with the following criteria
            | criteria          |
            | security          |
            | softoken          |
            | biometrics config |
            | not fido offered  |
        And the user access the "fido" screen
        And the user starts FIDO enrollment
        When FIDO enrollment fails
        Then the user accesses the "dashboard" screen
