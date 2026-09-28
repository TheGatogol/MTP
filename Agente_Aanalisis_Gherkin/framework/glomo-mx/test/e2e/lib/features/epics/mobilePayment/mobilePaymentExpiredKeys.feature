@mobilePayment @mobilePaymentExpiredKeys
Feature: Mobile payment - Expired Keys
    As a BBVA user
    I want to renew, postpone or cancel my mobile payment
    if the mobile payment keys have expired
    #This feature only apply for android devices

    @MPEK001
    @android @native @smokeTest @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Expired-Keys: Case 1.1.1
    Scenario: User accept renewal after login from notification
        Given a user with the following criteria
            | criteria                           |
            | mobile payment keys expired        |
            | mobile payment activated           |
        And the user accesses the mobile payment renewal screen from notification
        When the user renews the mobile payment
        Then the user is in "dashboard" screen
        And the user sees the following items in the screen
            | item          | value                      |
            | success toast | Pago con celular renovado. |

    @MPEK002
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Expired-Keys: Case 1.1.2
    Scenario: User decline renewal after login
        Given a user with the following criteria
            | criteria                           |
            | mobile payment keys expired        |
            | mobile payment activated           |
        And the user accesses the mobile payment renewal screen from notification
        When the user declines to renew the mobile payment
        Then the user is in "dashboard" screen

    @MPEK003
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Expired-Keys: case 1.2.1.1
    Scenario: User accept renewal from card detail
        Given a user with the following criteria
            | criteria                    |
            | mobile payment keys expired |
            | accounts and cards          |
            | mobile payments activated   |
        And the user accesses to the card product detail with following criteria
            | type   | credit    |
            | status | operative |
            | on off | on        |
        And the user accesses to "mobile payment"
        When the user renews the mobile payment
        Then the user sees the following items in the screen
            | item                 | value                      |
            | success toast        | Pago con celular renovado. |
            | go back              |                            |
            | header               |                            |
            | icon faqs            |                            |
            | card detail          |                            |
            | default card toggle  |                            |

    @MPEK004
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Expired-Keys: case 1.2.1.2
    Scenario: User decline renewal from card detail
        Given a user with the following criteria
            | criteria                    |
            | mobile payment keys expired |
            | accounts and cards          |
            | mobile payments activated   |
        And the user accesses to the card product detail with following criteria
            | type   | credit    |
            | status | operative |
            | on off | on        |
        And the user accesses to "mobile payment"
        When the user declines to renew the mobile payment
        Then the user is in "card product detail" screen

    @MPEK005
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Expired-Keys: case 1.2.3.1
    Scenario: User accept renewal from Mobile Payment Settings
        Given a user with the following criteria
            | criteria                    |
            | mobile payment keys expired |
            | accounts and cards          |
            | mobile payments activated   |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        When the user renews the mobile payment
        Then the user sees the following items in the screen
            | item               | value                      |
            | confirmation toast | Pago con celular renovado. |
            | header             |                            |
            | back button        |                            |
            | icon faq           |                            |
            | security title     |                            |
            | security text      |                            |
            | security toggle    | deactivate                 |
            | cancel title       |                            |
            | cancel text        |                            |
            | cancel link        |                            |

    @MPEK006
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Expired-Keys: case 1.2.3.2
    Scenario: User decline renewal from Mobile Payment Settings
        Given a user with the following criteria
            | criteria                    |
            | mobile payment keys expired |
            | accounts and cards          |
            | mobile payments activated   |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to "mobile payment"
        When the user declines to renew the mobile payment
        Then the user is in "configuration" screen
