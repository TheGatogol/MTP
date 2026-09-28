@mortgageTrackingInformative
Feature: Mortgage Tracking Informative

    @MTI002
    @web @ios @android
    @vbank @MX
    @backend(test)
    @web-done
    @smokeTest
    Scenario: Validation Screen - Mortgage Tracking Document Detail
        Given a user with the following criteria
            | criteria          |
            | mortgage tracking |
        And the user accesses to mortgage tracking card
        When the user accesses to request detail page
        Then the user sees the following items in the screen
            | item              |
            | header detail     |
            | product           |
            | credit name       |
            | subproduct credit |
            | folio             |
            | request date      |
            | expiration date   |
            | amount request    |
            | term              |
            | month payment     |
            | second title      |
            | interest rate     |
            | cat               |
            | notification      |

    @MTI003
    @web @ios @android
    @vbank @MX
    @backend(test)
    @web-done
    Scenario Outline: Validation Modal - Mortgage Tracking Document Detail Help Modal <help>
        Given a user with the following criteria
            | criteria          |
            | mortgage tracking |
        And the user accesses to mortgage tracking card
        And the user accesses to request detail page
        When the user chooses the "<help>" information
        Then the user sees the following items in the screen
            | item                |
            | header tooltip      |
            | title tooltip       |
            | description tooltip |
            | button tooltip      |

        Examples:
            | help       |
            | expiration |
            | amount     |
            | payment    |

    @MTI004
    @web @ios @android
    @vbank @MX
    @backend(test)
    @web-done
    Scenario Outline: Validation Modal - Mortgage Tracking Detail Modal <link>
        Given a user with the following criteria
            | criteria          |
            | mortgage tracking |
        And the user accesses to mortgage tracking card
        When the user accesses to the detail step link
        Then the user sees the following items in the screen
            | item                  |
            | modal tracking header |
            | modal tracking title  |
            | modal tracking button |

        Examples:
            | link                      |
            | documentation needed      |
            | appraisal documentation   |
            | appraisal defining date   |
            | appraisal defined date    |
            | appraisal result date     |
            | appraisal amount result   |
            | notarial choose notary    |
            | notarial data notary      |
            | notarial choose signature |
            | notarial date signature   |
            | documentation rejected    |
            | documentation validation  |
            | appraisal upload document |
            | appraisal validation      |
            | appraisal rejected        |
            | tracking completed        |

    @MTI005
    @web @ios @android
    @vbank @MX
    @backend(test)
    @web-done
    Scenario: Validation Modal - limit time documentation
        Given a user with the following criteria
            | criteria                  |
            | mortgage tracking expired |
        And the user accesses to dashboard
        And the user accesses contract product section
        When the user accesses to mortgage tracking card
        Then the user sees the following items in the screen
            | item          |
            | warning modal |
