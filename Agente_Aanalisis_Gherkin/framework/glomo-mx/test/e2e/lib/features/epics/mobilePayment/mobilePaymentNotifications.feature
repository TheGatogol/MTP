@mobilePayment @mobilePaymentPush
Feature: Mobile payment - Notifications Push
    As a BBVA user
    I want to receive notifications on my device
    #Push Notifications Service Activation
    #This feature only apply for android devices

    @MPN001
    @android @native @smokeTest @!vbank
    @MX @manual @JIRA.GLOMOGL-22070
    #UX Mobile-Payment_MX_Notification-Payment  Case 1.1.1.1a / 1.2.1
    Scenario: Push notification after to do payment success with settings ON - notification result
        Given a user with the following criteria
            | criteria                          |
            | mobile payments service activated |
            | operative associated card         |
        And the user opens the push notification "payment success"
        When the user opens the push notification "confirmation"
        Then the user sees the following items in the screen
            | item                  |
            | close button          |
            | header                |
            | icon connect success  |
            | title connect success |
            | text connect success  |
            | understand            |

    @MPN002
    @android @native @smokeTest @!vbank
    @MX @manual @JIRA.GLOMOGL-22070
    #UX Mobile-Payment_MX_Notification-Payment  Case 1.1.1.1b
    Scenario: Push notification after to do payment success
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user opens the push notification "payment success"
        When the user "understands" notification
        Then the user is in "notification confirmation" screen

    @MPN003
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-22070
    #UX Mobile-Payment_MX_Notification-Payment  Case 1.1.1.2
    Scenario: Push notification after to do payment error - notification result
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        When the user opens the push notification "payment error"
        Then the user sees the following items in the screen
            | item                |
            | close button        |
            | header              |
            | icon connect error  |
            | title connect error |
            | text connect error  |
            | exit                |

    @MPN004
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-22070
    #UX Mobile-Payment_MX_Notification-Payment  Case 1.1.2.1a / 1.1.2.2a
    Scenario Outline: Push notification after to do payment exceed amount limit with authentication <authentication> - notification result
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user opens the push notification "payment exceed amount limit"
        When the user authorizes authentication method native
        Then the user sees the following items in the screen
            | item         |
            | close button |
            | header       |
            | icon <type>  |
            | title <type> |
            | text <type>  |
            | <action>     |
        Examples:
            | authentication | type               | action   |
            | ON             | allow              | continue |
            | OFF            | notification allow | exit     |

    @MPN005
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-22070
    #UX Mobile-Payment_MX_Notification-Payment  Case 1.1.2.1b / 1.1.2.2b
    Scenario Outline: Push notification after to do payment exceed amount limit with authentication <authentication>
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user opens the push notification "payment exceed amount limit"
        When the user "<action>" notification
        Then the user is in "<authentication native screen>" screen
        Examples:
            | authentication | action   | authentication native screen |
            | ON             | continue | authentication method native |
            | OFF            | exit     | security settings native     |

    @MPN006
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-22070
    #UX Mobile-Payment_MX_Notification-Payment  Case 1.1.3.1 / 1.1.2.1c
    Scenario: Push notification after to allow authentication notification authorization success
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user opens the push notification "payment exceed amount limit"
        And the user complete the process to authorize authentication method native
        And the user "continues" notification
        When the user opens the push notification "confirmation"
        Then the user sees the following items in the screen
            | item                      |
            | close button              |
            | header                    |
            | icon connect successfully |
            | title successfully        |
            | text successfully         |
            | understand                |

    @MPN007
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-22070
    #UX Mobile-Payment_MX_Notification-Payment  Case 1.1.3.3
    Scenario: Push notification after to allow authentication notification authorization closed
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user opens the push notification "payment exceed amount limit"
        And the user complete the process to authorize authentication method native
        And the user complete the process to authorize authentication method native
        When the user opens the push notification "confirmation"
        Then the user sees the following items in the screen
            | item                      |
            | close button              |
            | header                    |
            | icon connect successfully |
            | title successfully        |
            | text successfully         |
            | understand                |

    @MPN008
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-22070
    #UX Mobile-Payment_MX_Notification-Payment  Case 1.1.3.2
    Scenario: Push notification after to do authentication off
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user opens the push notification "authentication off"
        When the user "exits" notification
        Then the user is in "security settings native" screen

    @MPN009
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-22070
    #UX Mobile-Payment_MX_Notification-Payment  Case 1.2.2 / 1.2.3
    Scenario Outline: Push notification after to do authentication ON - Device locked - <notification>
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user opens the push notification "<notification>"
        And the user unlocked device
        And the user "continues" notification
        When the user opens the push notification "confirmation"
        Then the user sees the following items in the screen
            | item                      |
            | close button              |
            | header                    |
            | icon connect successfully |
            | title successfully        |
            | text successfully         |
            | understand                |
        Examples:
            | notification                |
            | payment exceed amount limit |
            | settings configuration      |

    @MPN010
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-22070
    #UX Mobile-Payment_MX_Notification-Payment  Case 3.1 / 3.2
    Scenario Outline: Push notification after to do authentication ON - Device locked - <notification>
        Given a user with the following criteria
            | criteria                          |
            | operative <notification>          |
            | mobile payments service activated |
        And the user opens the push notification "<notification>"
        And the user unlocked device
        When the user "continues" notification
        Then the user sees the following items in the screen
            | item                |
            | close button        |
            | header              |
            | icon <type screen>  |
            | title <type screen> |
            | text <type screen>  |
            | exit                |
        Examples:
            | notification       | type screen |
            | card tokenized     | choose      |
            | card not tokenized | associate   |

    @MPN011
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-22070
    #UX Mobile-Payment_MX_Notification-Activation  Case 1.1.1.1
    Scenario: Push notification access to card activation after login - NFC ON - App selected for pay
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user opens the push notification "card activation"
        When the user does login
        Then the user sees the following items in the screen
            | item                     | value         |
            | go back                  |               |
            | header                   |               |
            | icon faqs                |               |
            | card detail              |               |
            | info card not associated |               |
            | default card toggle      | not activated |

    @MPN012
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-22070
    #UX Mobile-Payment_MX_Notification-Activation  Case 1.1.1.2
    Scenario: Push notification access to card activation after login - NFC ON - App nor selected for pay
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user opens the push notification "card activation"
        And the user does login
        When the user accesses to native settings and default app for payments
        Then the user sees the following items in the screen
            | item                     | value        |
            | go back                  |              |
            | header                   |              |
            | icon faqs                |              |
            | card detail              |              |
            | info card not associated |              |
            | default card toggle      | not activate |

    @MPN013
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-22070
    #UX Mobile-Payment_MX_Notification-Activation  Case 1.1.2.1
    Scenario: Push notification access to card activation after login - NFC OFF - App selected for pay
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user opens the push notification "card activation"
        And the user does login
        When the user actives NFC from native settings
        Then the user sees the following items in the screen
            | item                     | value         |
            | go back                  |               |
            | header                   |               |
            | icon faqs                |               |
            | card detail              |               |
            | info card not associated |               |
            | default card toggle      | not activated |

    @MPN014
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-22070
    #UX Mobile-Payment_MX_Notification-Activation  Case 1.1.2.2
    Scenario: Push notification access to card activation after login - NFC OFF - App not selected for pay
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user opens the push notification "card activation"
        And the user does login
        And the user accesses to native settings and default app for payments
        When the user actives NFC from native settings
        Then the user sees the following items in the screen
            | item                     | value         |
            | go back                  |               |
            | header                   |               |
            | icon faqs                |               |
            | card detail              |               |
            | info card not associated |               |
            | default card toggle      | not activated |
