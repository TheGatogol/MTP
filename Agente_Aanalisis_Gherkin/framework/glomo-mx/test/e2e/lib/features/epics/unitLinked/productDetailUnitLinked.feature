@productDetailUnitLinked
Feature: Product Detail Unit Linked

    @ULP001
    @vbank
    @MX @android @ios @web
    @backend(test)
    @smokeTest
    @tmpExclude @JIRA.GLOMOMX-192448
    @web-done
    Scenario: Validate policy screen
        Given a user with the following criteria
            | criteria            |
            | contract patrimonial|
            | product detail unit |
        When the user accesses to unit linked
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | return button |
            | title         |
            | detail policy |
            | edit alias    |

    @ULP002
    @vbank
    @MX @android @ios @web
    @backend(test)
    @alternate-scenarios-smoke
    @web-done
    Scenario: Return dashbord from policy screen
        Given a user with the following criteria
            | criteria             |
            | contract patrimonial |
            | product detail unit  |
        When the user accesses to unit linked
        And the user goes back to previous page
        Then the user accesses the "dashboard" screen

    @ULP003
    @vbank
    @MX @android @ios @web
    @backend(test)
    @alternate-scenarios-smoke
    @web-done
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: Validate policy detail screen
        Given a user with the following criteria
             | criteria             |
             | contract patrimonial |
             | product detail unit  |
        When the user accesses to unit linked
        And the user accesses to policy detail
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | return button policy  |
            | tag general           |
            | tag product           |
            | tag num policy        |
            | link copy             |

    @ULP004
    @vbank
    @MX @android @ios @web
    @backend(test)
    @alternate-scenarios-smoke
    @web-done
    Scenario: Copy the policy number
        Given a user with the following criteria
            | criteria             |
            | contract patrimonial |
            | product detail unit  |
        When the user accesses to unit linked
        And the user accesses to policy detail
        And the user copies the policy number
        Then the user sees the following items in the screen
            | item               |
            | successful message |

    @ULP005
    @vbank
    @MX @android @ios @web
    @backend(test)
    @alternate-scenarios-smoke
    @web-done
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: Return to policy screen
        Given a user with the following criteria
            | criteria             |
            | contract patrimonial |
            | product detail unit  |
        When the user accesses to unit linked
        And the user accesses to policy detail
        And the user goes to the policy screen
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | return button |
            | title         |
            | detail policy |
            | edit alias    |

    @ULP006
    @vbank
    @MX @android @ios @web
    @backend(test)
    @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Validate alias edit screen
        Given a user with the following criteria
            | criteria             |
            | contract patrimonial |
            | product detail unit  |
        When the user accesses to unit linked
        And the user accesses the unit linked edit alias
        Then the user sees the following items in the screen
            | item               |
            | header main        |
            | header title text  |
            | input alias        |
            | save alias btn     |
