@creditCardPaymentReminderSettings
Feature: Credit Card Payment Reminder Settings

    @ICD001
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Open notifications configuration - no credit card
        Given a user with the following criteria
            | criteria       |
            | no credit card |
        And the user accesses to "configuration" item located in the sidebar
        When the user accesses to notifications option in configure products
        Then the user sees the following items in the screen
            | item                   |
            | header title           |
            | notifications toggle   |
            | accounts configuration |
            | cards configuration    |
            | header title           |

    @ICD002
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Modify days before payment deadline
        Given a user with the following criteria
            | criteria                              |
            | credit card payment reminder settings |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to credit card payment reminder settings
        And the user accesses the reminder settings edition
        When the user selects "10 días hábiles" from the days dropdown
        Then the user sees the following items in the screen
            | item                          | value   |
            | header title                  |         |
            | reminders toggle              |         |
            | business day before checkbox  |         |
            | custom day checkbox           |         |
            | days dropdown                 |         |
            | app notification radio button |         |
            | save button                   | enabled |

    @ICD003
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    @smokeTest
    Scenario Outline: Save payment reminders modification - <message_item>
        Given a user with the following criteria
            | criteria   |
            | <criteria> |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to credit card payment reminder settings
        And the user accesses the reminder settings edition
        And the user <action>
        When the user confirms the reminder settings changes
        Then the user sees the following items in the screen
            | item           |
            | back button    |
            | header title   |
            | cards list     |
            | modify link    |
            | <message_item> |

        Examples:
            | criteria                                      | action                                             | message_item          |
            | credit card payment reminder settings         | selects "10 días hábiles" from the days dropdown   | reminders modified    |
            | credit card payment reminder settings enabled | toggles off the toggle                             | reminders deactivated |

    @ICD004
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Uncheck custom day checkbox
        Given a user with the following criteria
            | criteria                              |
            | credit card payment reminder settings |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to credit card payment reminder settings
        And the user accesses the reminder settings edition
        When the user disables the custom day reminder option
        Then the user sees the following items in the screen
            | item                          | value   |
            | header title                  |         |
            | reminders toggle              |         |
            | business day before checkbox  |         |
            | custom day checkbox unchecked |         |
            | app notification radio button |         |
            | save button                   | enabled |

    @ICD005
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Uncheck business day before checkbox
        Given a user with the following criteria
            | criteria                              |
            | credit card payment reminder settings |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to credit card payment reminder settings
        And the user accesses the reminder settings edition
        When the user disables the business day reminder option
        Then the user sees the following items in the screen
            | item                   | value   |
            | header title           |         |
            | reminders toggle off   |         |
            | warning message        |         |
            | next payment date info |         |
            | save button            | enabled |

    @ICD006
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Deactivate payment reminders toggle
        Given a user with the following criteria
            | criteria                              |
            | credit card payment reminder settings |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to credit card payment reminder settings
        And the user accesses the reminder settings edition
        When the user toggles off the toggle
        Then the user sees the following items in the screen
            | item                   | value   |
            | header title           |         |
            | reminders toggle off   |         |
            | warning message        |         |
            | next payment date info |         |
            | save button            | enabled |

    @ICD007
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Deactivate all reminder options
        Given a user with the following criteria
            | criteria                              |
            | credit card payment reminder settings |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to credit card payment reminder settings
        And the user accesses the reminder settings edition
        When the user disables all reminder options
        Then the user sees the following items in the screen
            | item                   | value   |
            | reminders toggle off   |         |
            | warning message        |         |
            | next payment date info |         |
            | save button            | enabled |

    @ICD008
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Activate payment reminders
        Given a user with the following criteria
            | criteria                                       |
            | credit card payment reminder settings disabled |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to credit card payment reminder settings
        And the user accesses the reminder settings edition
        When the user toggles on the toggle
        Then the user sees the following items in the screen
            | item                          | value    |
            | header title                  |          |
            | reminders toggle on           |          |
            | business day before checkbox  |          |
            | custom day checkbox           |          |
            | app notification radio button |          |
            | save button                   | enabled  |

    @ICD009
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Activate email payment reminders
        Given a user with the following criteria
            | criteria                              |
            | credit card payment reminder settings |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to credit card payment reminder settings
        And the user accesses the reminder settings edition
        When the user sets the reminder notification channel to email
        Then the user sees the following items in the screen
            | item                          | value   |
            | header title                  |         |
            | reminders toggle on           |         |
            | business day before checkbox  |         |
            | custom day checkbox           |         |
            | days dropdown                 |         |
            | email radio button selected   |         |
            | save button                   | enabled |

    @ICD010
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: View help FAQ answers
        Given a user with the following criteria
            | criteria                              |
            | credit card payment reminder settings |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to credit card payment reminder settings
        And the user accesses the reminder settings edition
        When the user requests help about payment reminders
        Then the user sees the following items in the screen
            | item                                  |
            | help title                            |
            | close button                          |
            | question what are payment reminders   |
            | question what is the payment deadline |
            | question what are business days       |
            | question how to deactivate reminders  |
            | question why keep receiving reminders |

    @ICD011
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Navigate back to modify reminders from help screen
        Given a user with the following criteria
            | criteria                              |
            | credit card payment reminder settings |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to credit card payment reminder settings
        And the user accesses the reminder settings edition
        And the user requests help about payment reminders
        When the user closes the payment reminders help
        Then the user sees the following items in the screen
            | item                          | value    |
            | header title                  |          |
            | reminders toggle on           |          |
            | business day before checkbox  |          |
            | custom day checkbox           |          |
            | days dropdown                 |          |
            | app notification radio button |          |
            | save button                   | disabled |

    @ICD012
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @spherica
    Scenario: Navigate back to notifications settings from credit card payment reminder help
        Given a user with the following criteria
            | criteria                              |
            | credit card payment reminder settings |
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to notifications option in configure products
        And the user view modal help
        When the user closes the modal
        Then the user sees the following items in the screen
            | item                                       |
            | header title                               |
            | notifications toggle                       |
            | accounts configuration                     |
            | cards configuration                        |
            | credit card payment reminder settings link |
