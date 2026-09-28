@operationalLimitsSettings
Feature: Operational Limits Settings

    @OPLIM001
    @MX @backend(test) @vbank
    @web @android @ios @web-done
    @backend-smoke
    Scenario: Access to Operational Limits Settings
        Given a user with the following criteria
            | criteria                                |
            | operational limits settings with errors |
        When the user accesses to operational limits settings
        Then the user sees the following items in the screen
            | item        | value   |
            | header      | enabled |
            | limits list |         |

    @OPLIM002
    @MX @backend(test) @vbank
    @web @android @ios @web-done
    @backend-smoke
    Scenario Outline: Info about Operational Limits Settings from <access>
        Given a user with the following criteria
            | criteria                                |
            | operational limits settings with errors |
        When the user go to about info from "<access>"
        Then the user sees the following items in the screen
            | item       |
            | info modal |

        Examples:
            | access    |
            | settings  |
            | info icon |

    @OPLIM003
    @backend-smoke
    @MX @backend(test) @vbank @alternate-scenarios-smoke
    @web @android @ios @web-done
    Scenario Outline: Edit Limit <type>
        Given a user with the following criteria
            | criteria                    |
            | operational limits settings |
        And the user accesses to operational limits settings
        When the user "edit" limit "<type>"
        Then the user sees the following items in the screen
            | item                 | value   |
            | header               | enabled |
            | limit operation info |         |
            | modify button        | enabled |
        Examples:
            | type      |
            | operation |
            | daily     |
            | montly    |

    @OPLIM004
    @backend-smoke
    @MX @backend(test) @vbank @smokeTest
    @web @android @ios @web-done
    Scenario Outline: Edit and Save Limit <type>
        Given a user with the following criteria
            | criteria                    |
            | operational limits settings |
        And the user accesses to operational limits settings
        When the user "edit and save" limit "<type>"
        Then the user sees the following items in the screen
            | item              | value   |
            | header            | enabled |
            | success operation |         |
        Examples:
            | type      |
            | operation |
            | daily     |
            | montly    |

    @OPLIM005
    @MX @backend(test) @vbank
    @web @android @ios @web-done
    @backend-smoke
    Scenario Outline: Error messages - amount is <edit>
        Given a user with the following criteria
            | criteria                    |
            | operational limits settings |
        And the user accesses to operational limits settings
        When the user type limit amount "<edit>"
        Then the user sees the following items in the screen
            | item       |
            | error text |

        Examples:
            | edit               |
            | lower than 1       |
            | higher than actual |
            | same than actual   |

    @OPLIM006
    @MX @backend(test) @vbank
    @web @android @ios @web-done
    Scenario: Controlled error
        Given a user with the following criteria
            | criteria                                |
            | operational limits settings with errors |
        And the user accesses to operational limits settings
        When the user "edit and save" limit "operation"
        Then the user sees the following items in the screen
            | item        |
            | modal error |

    @OPLIM007
    @MX @backend(test) @vbank
    @web @android @ios @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user accesses to Operational Limits Settings and exit
        Given a user with the following criteria
            | criteria         |
            | limit operations |
        And the user accesses to operational limits settings
        And the user accesses to limits "operation"
        And the user confirms the exit operation
        When the user goes back to previous page
        Then the user sees the "configure" screen

    @OPLIM008
    @MX @backend(test) @vbank
    @web @android @ios @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user accesses to Operational Limits Settings and deletes the amount entered
        Given a user with the following criteria
            | criteria         |
            | limit operations |
        And the user accesses to operational limits settings
        And the user "edit" limit "operation"
        When the user deletes the amount entered
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | cancel button        |
            | limit operation      |
            | limit operation info |

    @OPLIM009
    @MX @backend(test) @vbank
    @web @android @ios @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user accesses to Daily Operational Limits Settings and returns the back page
        Given a user with the following criteria
            | criteria         |
            | limit operations |
        And the user accesses to operational limits settings
        And the user accesses to limits "daily"
        When the user confirms the exit operation
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | limits list |
            | edit button |
