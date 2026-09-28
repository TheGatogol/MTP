@tipsFinanceProfiling
Feature: Tips Finance Profiling

    @TFP003
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Start the process from the Badges section
        Given a user with the following criteria
            | criteria                                 |
            | tips finance profiling                   |
        And the user accesses to edufin
        When the user close tips finance profiling onboarding
        Then the user sees the following items in the screen
            | item                                     |
            | general season status microillustration  |
            | general season status title              |
            | general season status description        |
            | general season info module               |
            | general badges module                    |

    @TFP004
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario Outline: Season progress navigation to <badge_type> badges
        Given a user with the following criteria
            | criteria                           |
            | tips finance profiling             |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        When the user navigates to "<badge_type>" badges section
        Then the user sees the following items in the screen
            | item                               |
            | general badges module              |
            | general badges module <badge_type> |
        Examples:
            | badge_type |
            | unique     |
            | common     |

    @TFP005
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Discover missions link on the badges screen
        Given a user with the following criteria
            | criteria                              |
            | tips finance profiling without badges |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        When the user accesses their "common" badges collection
        Then the user sees the following items in the screen
            | item                                  |
            | collection common collection badges   |

    @TFP006
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Badges screen your collection section activated identity
        Given a user with the following criteria
            | criteria                                  |
            | tips finance profiling without badges     |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        When the user accesses their "unique" badges collection
        Then the user sees the following items in the screen
            | item                                      |
            | collection unique collection              |
            | collection unique collection badge image  |
            | collection unique collection badge title  |
            | collection unique collection badge button |

    @TFP007
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Badges screen your collection section share activated identity
        Given a user with the following criteria
            | criteria                              |
            | tips finance profiling without badges |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        When the user accesses an obtained "unique" badge from their collection
        Then the user sees the following items in the screen
            | item                                  |
            | mission detail image                  |
            | mission detail title                  |
            | mission detail description            |
            | mission detail share button           |

    @TFP008
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Badges screen current season show detail
        Given a user with the following criteria
            | criteria                   |
            | tips finance profiling     |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        When the user enters to view their season history
        Then the user sees the following items in the screen
            | item                       |
            | season detail profile name |
            | season detail progress     |
            | season detail historic     |
            | season detail share        |

    @TFP009
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Badges screen your collection section show detail
        Given a user with the following criteria
            | criteria                             |
            | tips finance profiling               |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        When the user goes to their "common" badges collection
        Then the user sees the following items in the screen
            | item                                 |
            | collection common empty image        |
            | collection common empty title        |
            | collection common empty description  |
            | collection common empty link         |

    @TFP010
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Current season treasure chest missions
        Given a user with the following criteria
            | criteria                   |
            | tips finance profiling     |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        When the user enters a "badge" to view pending content
        Then the user sees the following items in the screen
            | item                       |
            | mission detail image       |
            | mission detail title       |
            | mission detail description |

    @TFP011
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Your collection view mission from active identity section
        Given a user with the following criteria
            | criteria                                  |
            | tips finance profiling                    |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        When the user goes to their "unique" badges collection
        Then the user sees the following items in the screen
            | item                                      |
            | collection unique collection              |
            | collection unique collection badge image  |
            | collection unique collection badge title  |
            | collection unique collection badge button |

    @TFP012
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Go to my account button from treasure chest
        Given a user with the following criteria
            | criteria               |
            | tips finance profiling |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        When the user enters a "mission" to view pending content
        Then the user sees the following items in the screen
            | item                   |
            | modal header           |
            | modal title            |
            | modal content          |
            | modal footer           |

    @TFP013
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario Outline: Validate pending badge modal closure with <action> action
        Given a user with the following criteria
            | criteria               |
            | tips finance profiling |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        When the user "<action>" the pending badge interaction
        Then the user sees the following items in the screen
            | item                   |
            | general badges module  |
        Examples:
            | action                 |
            | confirm                |
            | exit                   |

    @TFP014
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario Outline: Access specific missions by <type>
        Given a user with the following criteria
            | criteria                       |
            | tips finance profiling success |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        And the user accesses to profiling form
        When the user discover "<type>" success
        Then the user sees the following items in the screen
            | item                           |
            | success microillustration      |
            | success header                 |
            | success footer                 |
            | success title                  |
            | success description            |
        Examples:
            | type                           |
            | Money apprentice               |
            | Potential pro                  |
            | Mastermind                     |

    @TFP015
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @smokeTest
    Scenario Outline: The user <action_description> and returns to main screen
        Given a user with the following criteria
            | criteria                                  |
            | tips finance profiling                    |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        And the user accesses to profiling form
        When the user <action>
        Then the user sees the following items in the screen
            | item                                      |
            | general season status microillustration   |
            | general season status title               |
            | general season status description         |
            | general season info module                |
            | general badges module                     |
        Examples:
            | action_description   | action             |
            | completes profiler   | discovers profile  |
            | accesses profiler    | accesses profiling |

    @TFP016
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario Outline: Validate error when <error_type>
        Given a user with the following criteria
            | criteria                                 |
            | tips finance profiling                   |
        And the user accesses to edufin
        And the user close tips finance profiling onboarding
        And the user accesses to profiling form
        When the user discovers profile with "<action>" service error
        Then the user sees the following items in the screen
            | item                                     |
            | modal header                             |
            | modal title                              |
            | modal content                            |
        Examples:
            | error_type                               | action             |
            | accessing the Profiler                   | questionnaires     |
            | attempting to describe the profile       | customer profiling |
