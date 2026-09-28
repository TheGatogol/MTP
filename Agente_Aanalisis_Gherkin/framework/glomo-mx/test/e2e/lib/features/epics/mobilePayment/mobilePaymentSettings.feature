@mobilePayment @mobilePaymentSettings
Feature: Mobile payment - Settings
    As a BBVA user
    I want to configure Mobile Payment from settings
    #This feature only apply for android devices

    @MPS001
    @android @native
    @MX @android-done @vbank @backend(artichoke)
    @tmpExclude @JIRA.GLOMOMX-180582
    #UX Mobile-Payment_MX_Entrypoints: Case 1.2 / 2.1
    Scenario Outline: Entry points: Device <device> accesses to mobile payment settings and Mobile Payment is <status element>
        Given a user with the following criteria
            | criteria                         |
            | mobile payments <status service> |
        And the user accesses to dashboard
        When the user accesses to "configuration" item located in the sidebar
        Then the user sees the following items in the screen
            | item            | value            |
            | mobile payments | <status element> |

        Examples:
            | device      | status service | status element |
            | without nfc | activated      | not visible    |

        @manual @JIRA.GLOMOGL-27158
        Examples:
            | device     | status service | status element |
            | with nfc   | activated      | visible        |
            | with nfc 2 | not activated  | visible        |

    @MPS002
    @smokeTest
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Settings: Case 1.1
    #UX Mobile-Payment_MX_Entrypoints: Case 1.2.1
    Scenario: Settings: Activate mobile payment service
        Given a user with the following criteria
            | criteria                              |
            | mobile payments service not activated |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to mobile payment setting
        When the user activates mobile payment service and otp process
        Then the user sees the following items in the screen
            | item               | value      |
            | confirmation toast |            |
            | header             |            |
            | back button        |            |
            | icon faq           |            |
            | security title     |            |
            | security text      |            |
            | security toggle    | deactivate |
            | cancel title       |            |
            | cancel text        |            |
            | cancel link        |            |

    @MPS003
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Settings: Case 1.2.1
    #UX Mobile-Payment_MX_Entrypoints: Case 1.2.2 / 2.2
    Scenario: Settings: Cancel mobile payment service
        Given a user with the following criteria
            | criteria                          |
            | mobile payments service activated |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        When the user cancels mobile payment service
        Then the user sees the following items in the screen
            | item                                  | value       |
            | confirmation toast                    |             |
            | header                                |             |
            | back button                           | not visible |
            | icon faq                              | not visible |
            | close buton                           |             |
            | security title                        | not visible |
            | security text                         | not visible |
            | security toggle                       | not visible |
            | cancel title                          | not visible |
            | cancel text                           | not visible |
            | cancel link                           | not visible |
            | activate mobile payment - icon        |             |
            | activate mobile payment - title       |             |
            | activate mobile payment - description |             |
            | activate mobile payment - button      |             |

    @MPS004
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Entrypoints: Case 2.2
    Scenario: Settings: Access to mobile payment setting - NFC ON - App nor selected for pay
        Given a user with the following criteria
            | criteria                          |
            | mobile payments service activated |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to mobile payment setting
        When the user accesses to modal payments settings and default app for payments
        Then the user sees the following items in the screen
            | item            | value        |
            | header          |              |
            | back button     |              |
            | icon faq        |              |
            | close buton     |              |
            | security title  |              |
            | security text   |              |
            | security toggle | not activate |
            | cancel title    |              |
            | cancel text     |              |
            | cancel link     |              |

    @MPS005
    @smokeTest
    @android @native
    @MX @manual @JIRA.GLOMOGL-27158 @!vbank
    #UX Mobile-Payment_MX_Settings: Case 1.2.2 / 1.2.3
    Scenario Outline: Settings: Switch to <value> to allow security settings
        Given a user with the following criteria
            | criteria                          |
            | mobile payments service activated |
            | <option> security settings        |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to mobile payment setting
        When the user "<value>" switch to allow security settings
        Then the user sees the following items in the screen
            | item               | value   |
            | confirmation toast |         |
            | header             |         |
            | back button        |         |
            | icon faq           |         |
            | security title     |         |
            | security text      |         |
            | security toggle    | <value> |
            | cancel title       |         |
            | cancel text        |         |
            | cancel link        |         |
        Examples:
            | option     | value       |
            | activate   | deactivates |
            | deactivate | activates   |

    @MPS006
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Settings: Error Case 1.1
    Scenario: Error to cancel the mobile payment service and retry to access
        Given a user with the following criteria
            | criteria                          |
            | mobile payments service activated |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user tries to cancel mobile payment service
        When the user retries error "2" times
        Then the user sees a "small" error with the following elements:
            | item         |
            | warning icon |
            | title        |
            | description  |
            | exit         |

    @MPS007
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Settings: Error Case 1.2.1 / 1.2.2
    Scenario Outline: Error to switch to to <value> to allow security settings
        Given a user with the following criteria
            | criteria                          |
            | mobile payments service activated |
            | <option> security settings        |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user "<value>" switch to allow security settings
        When the user retries error "2" times
        Then the user sees a "small" error with the following elements:
            | item         |
            | warning icon |
            | title        |
            | description  |
            | exit         |
        Examples:
            | option     | value       |
            | activate   | deactivates |
            | deactivate | activates   |
