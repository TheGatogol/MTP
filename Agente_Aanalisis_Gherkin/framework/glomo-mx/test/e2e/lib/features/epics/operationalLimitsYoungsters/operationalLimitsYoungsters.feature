@operationalLimitsYoungsters
Feature: Operational Limits - Youngsters

    @OLY002
    @MX @backend(test) @vbank
    @web @android @ios @web-done
    @backend-smoke
    Scenario Outline: The <user> user accesses to the main parental control account limits operation
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to parental control account limits
        When the user accepts the "initial information" modal
        Then the user sees the following items in the screen
            | item                        | value   |
            | header title                |         |
            | return button               |         |
            | header help button          |         |
            | main title                  |         |
            | daily limit title           |         |
            | daily limit value           |         |
            | daily limit edit button     | <value> |
            | operation limit title       |         |
            | operation limit value       |         |
            | operation limit edit button | <value> |
            | monthly limit title         |         |
            | monthly limit value         |         |
            | monthly limit edit button   | <value> |

        Examples:
            | user                       | value |
            | alternative parent control | true  |
            | youngster control          | false |

    @OLY003
    @MX @backend(test) @vbank
    @web @android @ios @web-done
    @backend-smoke
    Scenario Outline: The <user> user accesses to the limits help screen
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to parental control account limits
        And the user accepts the "initial information" modal
        When the user accesses to "parental control" help modal
        Then the user sees the following items in the screen
            | item                  |
            | modal header          |
            | modal icon            |
            | modal subtitle        |
            | modal content         |
            | modal continue button |

        Examples:
            | user                       |
            | alternative parent control |
            | youngster control          |

    @OLY004
    @MX @backend(test) @vbank
    @web @android @ios @web-done
    @backend-smoke
    Scenario Outline: The parent user accesses the <limit> modal
        Given a user with the following criteria
            | criteria                   |
            | alternative parent control |
        And the user accesses to parental control account limits
        And the user accepts the "initial information" modal
        When the user accesses to "<limit>" help modal
        Then the user sees the following items in the screen
            | item                       | value    |
            | edit modal actual limit    |          |
            | edit modal main subtitle   |          |
            | edit modal input           |          |
            | edit modal input title     |          |
            | edit modal input message   |          |
            | edit modal message icon    |          |
            | edit modal message text    |          |
            | edit modal continue button | disabled |
            | edit modal cancel button   |          |

        Examples:
            | limit                 |
            | edit operation limits |
            | edit daily limits     |
            | edit monthly limits   |

    @OLY005
    @MX @backend(test) @vbank @smokeTest
    @web @android @ios @web-done
    @backend-smoke
    Scenario Outline: The parent user decides not to edit the <typeOfLimit>
        Given a user with the following criteria
            | criteria                   |
            | alternative parent control |
        And the user accesses to parental control account limits
        And the user accepts the "initial information" modal
        And the user accesses to "<limit>" help modal
        When the user cancels the limit editing process
        Then the user sees the following items in the screen
            | item                        | value   |
            | header title                |         |
            | return button               |         |
            | header help button          |         |
            | main title                  |         |
            | daily limit title           |         |
            | daily limit value           |         |
            | daily limit edit button     | true    |
            | operation limit title       |         |
            | operation limit value       |         |
            | operation limit edit button | true    |
            | monthly limit title         |         |
            | monthly limit value         |         |
            | monthly limit edit button   | true    |

        Examples:
            | limit                 | typeOfLimit      |
            | edit operation limits | operation limits |
            | edit daily limits     | daily limits     |
            | edit monthly limits   | monthly limits   |
