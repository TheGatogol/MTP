@updateNationalId
Feature: Id

    @ID001
    @MX @web
    @vbank @web-done
    @backend(test)
    @smokeTest
    Scenario: The user access to the profile screen
        Given a user with the following criteria
            | criteria      |
            | id add        |
        And the user accesses to profile screen
        When the user accesses to add "identification" screen
        Then the user sees the following items in the screen
            | item                              |
            | scan identification               |
            | take selfie                       |
            | notice privacy                    |
            | check button                      |
            | continue button first step        |
            | help button                       |
            | input ocr                         |
            | input key                         |
            | input number                      |
            | input validity                    |
            | second step icon message          |
            | continue button second step       |

    @ID002
    @MX @web
    @vbank @web-done
    @backend(test)
    Scenario: The user open privacy notice modal
        Given a user with the following criteria
            | criteria      |
            | id add        |
        And the user accesses to profile screen
        And the user accesses to add "identification" screen
        When the user reads the privacy notice
        Then the user sees a modal with the following elements:
            | item                  |
            | header                |
            | close button          |
            | description           |
            | accept button         |

    @ID003
    @MX @web
    @vbank @web-done
    @backend(test)
    Scenario: The user see the recommendations screen
        Given a user with the following criteria
            | criteria      |
            | id add        |
        And the user accesses to profile screen
        And the user accesses to add "identification" screen
        When the user reads the recommendations to scan the ID
        Then the user sees a modal with the following elements:
            | item                  |
            | header                |
            | close button          |
            | hero image            |
            | accept button         |

    ####### This tests must be run manually because it's necessary to use veridas plugin ######
    @ID004
    @MX @web
    @vbank @manual @JIRA.GLOMOGL-23505
    @backend(test)
    Scenario: The user scan their id
        Given a user with the following criteria
            | criteria  |
            | id add    |
        And the user accesses to profile screen
        And the user accesses to add "identification" screen
        And the user reads the recommendations to scan the ID
        And the user scan their identification
        And the user takes a selfie
        When the user accepts the privacy notice
        Then the user sees the following items in the screen
            | item                              |
            | id picture front                  |
            | id picture back                   |
            | id selfie                         |
            | check button                      |
            | continue button first step        |
            | help button                       |
            | input ocr                         |
            | input key                         |
            | input number                      |
            | input validity                    |
            | continue button second step       |
            | second step icon message          |

    ####### This test must be run manually because it's necessary to use veridas plugin ######
    @ID005
    @MX @web
    @vbank @manual @JIRA.GLOMOGL-23505
    @backend(test)
    Scenario: The user scan their id and continues to step two
        Given a user with the following criteria
            | criteria  |
            | id add    |
        And the user accesses to profile screen
        And the user accesses to add "identification" screen
        And the user reads the recommendations to scan the ID
        And the user scan their identification
        And the user takes a selfie
        And the user accepts the privacy notice
        When the user continues to the second step
        Then the user sees the following items in the screen
            | item                              |
            | change photos button              |
            | files scanned                     |
            | help button                       |
            | input ocr                         |
            | input key                         |
            | input number                      |
            | input validity                    |
            | continue button second step       |
            | second step icon message          |

    ####### This test must be run manually because it's necessary to use veridas plugin ######
    @ID006
    @MX @web
    @vbank @manual @JIRA.GLOMOGL-23505
    @backend(test)
    Scenario: The user completes the resume screen
        Given a user with the following criteria
            | criteria      |
            | id add        |
        And the user accesses to profile screen
        And the user accesses to add "identification" screen
        And the user reads the recommendations to scan the ID
        And the user scan their identification
        And the user takes a selfie
        And the user accepts the privacy notice
        And the user continues to the second step
        When the user continues to the resume screen
        Then the user sees the following items in the screen
            | item                              |
            | change photos button              |
            | files scanned                     |
            | change inputs button              |
            | validity data                     |
            | ocr data                          |

    ####### This test must be run manually because it's necessary to use veridas plugin ######
    @ID007
    @MX @web
    @vbank @manual @JIRA.GLOMOGL-23505
    @backend(test)
    Scenario: The user completes the national id flow
        Given a user with the following criteria
            | criteria      |
            | id add        |
        And the user accesses to profile screen
        And the user accesses to add "identification" screen
        And the user reads the recommendations to scan the ID
        And the user scan their identification
        And the user accepts the privacy notice
        And the user continues to the second step
        And the user continues to the resume screen
        When the user continues to the success screen
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | operation date               |
            | message                      |
            | email                        |
            | exit button                  |

    @ID008
    @MX @web @android @ios
    @vbank @web-done
    @backend(test)
    Scenario: The user access to the profile screen id incomplete
        Given a user with the following criteria
            | criteria             |
            | has incomplete id    |
        And the user accesses to profile screen
        And the user taps on "personal info show data" profile button
        When the user accesses to edit "identification" screen
        Then the user sees a modal with the following elements:
            | item                  |
            | header                |
            | close button          |
            | description           |
            | accept button         |

    @ID009
    @MX @web
    @vbank @web-done
    @backend(test)
    Scenario: The user exit identification detail
        Given a user with the following criteria
            | criteria             |
            | has incomplete id    |
        And the user accesses to identification validation screen
        When the user closes identification screen
        Then the user sees the "profile" screen
