@goalsMinor
Feature: Goals Hiring Minor

    @MPM001
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @smokeTest
    @backend-smoke
    Scenario: The user shows success page
        Given a user with the following criteria
            | criteria          |
            | with two children |
        And the user selects goals hiring card
        When the user shows "success page"
        Then the user sees the following items in the screen
            | item                      |
            | success main title        |
            | success main panel        |
            | success main panel text   |
            | success folio description |

    @MPM002
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user shows success page from link card account selected
        Given a user with the following criteria
            | criteria          |
            | with two children |
        And the user selects minior hiring card
        And the user accesses to multistep
        When the user accesses to goals minors hiring confirm page
        Then the user sees the following items in the screen
            | item                      |
            | success main title        |
            | success main panel        |
            | success main panel text   |
            | success folio description |

    @MPM003
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user shows error hiring modal - Error hiring account
        Given a user with the following criteria
            | criteria          |
            | with two children |
        And the user selects minior hiring card
        And the user accesses to multistep
        When the user shows error hiring modal
        Then the user sees the following items in the screen
            | item                         |
            | no hiring header title modal |
            | no hiring description modal  |
            | no hiring button modal       |

    @MPM004
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user shows error hiring modal
        Given a user with the following criteria
            | criteria          |
            | with two children |
        And the user selects minior hiring card
        And the user accesses to multistep
        When user has encountered an error
        Then the user sees the following items in the screen
            | item                         |
            | no hiring header title modal |
            | no hiring description modal  |
            | no hiring button modal       |

    @MPM005
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: The user shows error hiring modal - Account already hired
        Given a user with the following criteria
            | criteria          |
            | with two children |
        And the user selects minior hiring card
        And the user accesses to multistep
        When the user accesses to goals minors hiring confirm page
        Then the user sees the following items in the screen
            | item                        |
            | main title duplicate modal  |
            | description duplicate modal |
