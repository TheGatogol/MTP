@securityProfile
Feature: Security Profile

    @SP002
    @MX @vbank
    @backend(test) @web-done
    @ios @android @web
    @backend-smoke
    Scenario: Validation Screen - The user access security profile pending actions page
        Given a user with the following criteria
            | criteria          |
            | security glossary |
        And the user access to security profile
        When the user accesses to pending actions
        Then the user sees the following items in the screen
            | item                        |
            | pending actions header      |
            | pending actions button left |
            | security tips zone          |
            | screen lock zone            |
            | verify email zone           |

    @SP003
    @MX @vbank @smokeTest
    @backend(test) @no-spherica
    @ios @android @web @android-done @ios-done
    Scenario: Validate the Fast and secure access screen
        Given a user with the following criteria
            | criteria          |
            | security profile  |
        And the user access to security profile
        When the user accesses to the fido configuration page
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | image          |
            | title          |
            | description    |
            | accept button  |
            | cancel button  |

    @SP004
    @MX @vbank
    @backend(test) @web-done
    @ios @android @web
    Scenario: Validate the Activate notifications screen
        Given a user with the following criteria
            | criteria          |
            | security profile  |
        And the user access to security profile
        When the user accesses to notifications option in configure products
        Then the user sees the following items in the screen
            | item                   |
            | header title           |
            | back button            |
            | help button            |
            | switch element         |
            | accounts configuration |
            | cards configuration    |

    @SP005
    @MX @vbank
    @backend(test) @web-done
    @ios @android @web
    Scenario: Validate the Information screen
        Given a user with the following criteria
            | criteria          |
            | security profile  |
        And the user access to security profile
        When the user accesses to update identity document page
        Then the user sees the "video selfie" screen

    @SP006
    @MX @vbank
    @backend(test) @web-done
    @ios @android @web
    Scenario: Exit from Information screen
        Given a user with the following criteria
            | criteria          |
            | security profile  |
        And the user access to security profile
        When the user accesses to "identity document" option on the security profile site
        And the user leaves the process
        Then the user sees the "security profile" screen

    @SP007
    @MX @vbank
    @backend(test) @web-done
    @ios @android @web
    Scenario: Validate the link Review the safety tips
        Given a user with the following criteria
            | criteria          |
            | security profile  |
        And the user access to security profile
        When the user enters security tips into menu setting
        Then the user sees the following items in the screen
            | item                     |
            | header                   |
            | main illustration        |
            | back button              |
            | content panel info       |
            | security glossary        |
            | list 3 tips              |
            | secondary illustration 1 |
            | secondary illustration 2 |
            | list social security     |

    @SP008
    @MX @vbank
    @backend(test) @web-done
    @ios @android @web
    Scenario Outline: Validate the link "<page>"
        Given a user with the following criteria
            | criteria          |
            | security profile  |
        And the user access to security profile
        When the user accesses to "<page>" option on the security profile site
        Then the user sees the "<page>" screen

        Examples:
            | page                 |
            | email verification   |
            | discreet mode        |

    @SP009
    @MX @vbank
    @backend(test) @manual
    @ios @android @web @JIRA.GLOMOGL-20071
    Scenario: Validate the Profile Protection screen when all recommendations have been completed
        Given a user with the following criteria
            | criteria          |
            | security profile  |
        When the user access to security profile with all recommedations completed
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | back button               |
            | right button              |
            | image                     |
            | title                     |
            | description text          |
            | securiy profile section   |
            | securiy tips section      |
            | progress bar              |

    @SP010
    @MX @vbank
    @backend(test) @manual
    @ios @android @web @JIRA.GLOMOGL-20071
    Scenario: Validate the Profile Protection screen with the recommendations checked
        Given a user with the following criteria
            | criteria          |
            | security profile  |
        When the user access to security profile with all recommedations checked
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | back button               |
            | right button              |
            | title                     |
            | biometrics checked        |
            | identification checked    |
            | notifications checked     |
            | screen lock checked       |
            | dynamic cvv checked       |
            | security tips checked     |
            | app actualization checked |
            | discreet mode checked     |
            | email validation checked  |

    @SP011
    @MX @vbank
    @backend(test) @manual
    @ios @android @web @JIRA.GLOMOGL-20071
    Scenario: Validate the "back" button on the Profile Protection screen when recommendations are checked
        Given a user with the following criteria
            | criteria          |
            | security profile  |
        And the user access to security profile with all recommedations completed
        When the user closes the current operative
        Then the user sees the "security menu" screen

    @SP012
    @MX @vbank
    @backend(test) @manual
    @ios @android @web @JIRA.GLOMOGL-20071
    Scenario: Validate the link Safety Tips
        Given a user with the following criteria
            | criteria          |
            | security profile  |
        And the user access to security profile with all recommedations completed
        When the user accesses to "security tips" option on the security profile site
        Then the user sees the "security tips" screen

    @SP013
    @MX @vbank
    @backend(test) @web-done
    @ios @android @web
    Scenario: Validate the "back" button on the Profile Protection screen
        Given a user with the following criteria
            | criteria          |
            | security profile  |
        And the user access to security profile
        When the user closes the current operative
        Then the user sees the "security menu" screen
