@checksManagementServiceTerms @checksManagement @checksSection @checks
Feature: Checks Management Service Terms

    @CMST001
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: Service Terms screen appears
        Given a user with the following criteria
            | criteria          |
            | account in pesos  |
            | checks management |
        And the user accesses to checks operatives with checks management active
        When the user selects the checks management option with "not activated" service terms
        Then the user sees the following items in the screen
            | item                 |
            | Header               |
            | Close button         |
            | Image                |
            | Title                |
            | Description          |
            | Bullets List         |
            | Icon Message Warning |
            | Icon Message Info    |
            | Terms Title          |
            | Terms Description    |
            | Accept Button        |
            | Cancel button        |

    @CM002
    @smokeTest
    @MX @vbank @backend(test) @manual @JIRA.GLOMOGL-26754 @softoken
    @web @ios @android
    Scenario: Service Terms screen appears and Accepts
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
        And the user accesses to checks operatives with checks management active
        When the user selects the checks management option with "not activated" service terms
        And the user confirms activate protection
        Then the user sees the following items in the screen
            | item                       |
            | Header                     |
            | Close button               |
            | Successful title           |
            | Asset successful operation |
            | Date and Time              |
            | Origin title               |
            | Origin value               |
            | Operation title            |
            | Operation number           |
            | Email title                |
            | Email                      |
            | Info Box                   |
            | Exit button                |
            | Management link            |

    @CMST003
    @MX @vbank @backend(test) @manual @JIRA.GLOMOGL-26754 @softoken
    @web @ios @android
    Scenario Outline: <exits> Service Terms in acceptance confirmation screen
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
        And the user accesses checks management option
        And the user confirms activate protection
        When the user <exits> the operative
        Then the user is in the Checks section screen

        Examples:
            | exits       |
            | exit_button |
            | exit_arrow  |

    @CMST004
    @smokeTest
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: Service Terms screen appears and declines
        Given a user with the following criteria
            | criteria          |
            | account in pesos  |
            | checks management |
        And the user accesses to checks operatives with checks management active
        When the user selects the checks management option with "not activated" service terms
        And the user declines the service terms
        Then the user sees a modal with the following elements:
            | item          |
            | Header        |
            | Close button  |
            | Hero Image    |
            | Message       |
            | Description   |
            | Bullets List  |
            | Accept Button |
            | Cancel Button |

    @CMST005
    @MX @vbank @backend(test) @manual @JIRA.GLOMOGL-26754 @softoken
    @web @ios @android
    Scenario: Service Terms screen appears and Declines in warning screen
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
        And the user accesses checks management option
        And the user accesses to the service terms screen
        And the user declines the service terms
        When the user finally declines the protection
        Then the user sees the following items in the screen
            | item                       |
            | Header                     |
            | Close button               |
            | Successful title           |
            | Asset successful operation |
            | Date and Time              |
            | Origin title               |
            | Origin value               |
            | Operation title            |
            | Operation number           |
            | Email title                |
            | Email                      |
            | Info Box                   |
            | Exit button                |

    @CMST006
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: Service Terms screen appears and Returns in warning screen
        Given a user with the following criteria
            | criteria          |
            | account in pesos  |
            | checks management |
        And the user accesses to checks operatives with checks management active
        And the user selects the checks management option with "not activated" service terms
        When the user declines the service terms
        And the user closes the declination modal
        Then the user accesses the "Checks Management Service Terms" screen

    @CMST007
    @MX @vbank @backend(test) @manual @JIRA.GLOMOGL-26754 @softoken
    @web @ios @android
    Scenario Outline: Exits Service Terms in declination confirmation screen when <exits>
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
        And the user has declined the service terms
        When the user <exits> the operative
        Then the user is in the Checks section screen

        Examples:
            | exits       |
            | exit_button |
            | exit_arrow  |

    @CMST008
    @MX @vbank @backend(test) @manual @JIRA.GLOMOGL-26754 @softoken
    @web @ios @android
    Scenario: Service Terms screen appears after declination
        Given a user with the following criteria
            | criteria                                             |
            | pesos account with checks management active declined |
        And the user accesses to management option
        When the user accesses to the service terms screen
        Then the user sees the following items in the screen
            | item                       | value       |
            | Header                     |             |
            | Close button               |             |
            | Title                      |             |
            | Check Asset                |             |
            | Main Text                  |             |
            | Shot Description Text      |             |
            | 2 bullet points            |             |
            | Info Box                   |             |
            | Terms and conditions title |             |
            | Terms and conditions Text  |             |
            | Confirmation button        | visible     |
            | Decline button             | not visible |

    @CMST009
    @smokeTest
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: Exits Service Terms screen
        Given a user with the following criteria
            | criteria          |
            | account in pesos  |
            | checks management |
        And the user accesses to checks operatives with checks management active
        When the user selects the checks management option with "not activated" service terms
        And the user goes back to previous page
        Then the user accesses the "Checks Section" screen
