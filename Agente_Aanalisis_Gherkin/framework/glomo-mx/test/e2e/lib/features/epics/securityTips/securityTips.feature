@securityTips
Feature: securityTips

    @ST001
    @vbank
    @MX
    @web
    @android
    @ios
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Screen Validation - Security Tips Dashboard
        Given a user with the following criteria
            | criteria      |
            | security tips |
        And the user access the "dashboard" screen
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

    @ST002
    @vbank
    @MX
    @web
    @android
    @ios
    @smokeTest
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Screen Validation - Security Tips See Security Glossary
        Given a user with the following criteria
            | criteria          |
            | security glossary |
        And the user access the "dashboard" screen
        When the user enters to glossary the security tips
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | back button       |
            | section title     |
            | drop down buttons |

    @ST003
    @vbank
    @MX
    @web
    @android
    @ios
    @alternate-scenarios-smoke
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Screen Validation - Security Tips Do A Search On The Glossary
        Given a user with the following criteria
            | criteria          |
            | search glossary   |
        When the user enters to glossary the security tips
        And the user search "con" in the glossary and erase the search
        And the user search "shi" in the glossary
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | back button       |
            | section title     |
            | drop down buttons |

    @ST004
    @vbank
    @MX
    @web
    @android
    @ios
    @alternate-scenarios-smoke
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Screen Validation - Security Tips Do A Wrong Search On The Glossary
        Given a user with the following criteria
            | criteria      |
            | wrong search  |
        And the user enters to glossary the security tips
        When the user search "vw" in the glossary
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | back button       |
            | search icon       |
            | no result content |

    @ST005
    @vbank
    @MX
    @web
    @android
    @ios
    @alternate-scenarios-smoke
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Screen Validation - Security Tips Acces To Info Tip
        Given a user with the following criteria
            | criteria          |
            | wrong search      |
        And the user enters security tips into menu setting
        And the user access to the "principalsecuritytip" info tip
        When the user accept the info tip
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | back button          |
            | content panel info   |
            | security glossary    |
            | list 3 tips          |
            | list social security |

    @ST006
    @vbank
    @MX
    @web
    @android
    @ios
    @alternate-scenarios-smoke
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Screen Validation - Security Tips Show More Info
        Given a user with the following criteria
            | criteria  |
            | more info |
        And the user enters to glossary the security tips
        When the user goes to the info tip and display the info
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | back button      |
            | plus button info |

    @ST007
    @vbank
    @MX
    @web
    @android
    @ios
    @alternate-scenarios-smoke
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Screen Validation - Security Tips See More Link
        Given a user with the following criteria
            | criteria  |
            | first tip |
        And the user access the "dashboard" screen
        And the user enters security tips into menu setting
        And the user access to the "securityTip1" info tip
        And the user accept the info tip
        When the user goes back to security dashboard
        Then the user sees the "dashboard" screen

    @ST008
    @vbank
    @MX
    @web
    @android
    @ios
    @alternate-scenarios-smoke
    @backend(test)
    @manual @JIRA.GLOMOMX-221500
    @backend-smoke
    Scenario: Screen Validation - Security Second Tips See More Link
        Given a user with the following criteria
            | criteria     |
            | second tip   |
        And the user access the "dashboard" screen
        And the user enters security tips into menu setting
        When the user access to the "securityTip2" info tip
        Then the user sees the following items in the screen
            | item              |
            | header tip        |
            | img tip           |
            | message tip       |
            | button close tip  |
            | accept tip        |
