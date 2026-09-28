@mobilePayment @mobilePaymentProductDetail
Feature: Mobile payment - Product detail
    As a BBVA user
    I want to configure Android Mobile Payment from the card details
    #This feature only apply for android devices

    @MPPD001
    @android @native
    @MX @android-done @vbank @backend(artichoke)
    @tmpExclude @JIRA.GLOMOMX-180582
    #UX Mobile-Payment_MX_Entrypoints: Case 1.3
    Scenario Outline: Entry points: Device <device> accesses to mobile payment from product detail and Mobile Payment is <status element>
        Given a user with the following criteria
            | criteria                         |
            | mobile payments <status service> |
        When the user accesses to the operative account product detail
        Then the user sees the following items in the screen
            | item            | value            |
            | mobile payments | <status element> |

        Examples:
            | device      | status service | status element |
            | without nfc | activated      | not visible    |

        @manual @JIRA.GLOMOGL-27158 @!vbank
        Examples:
            | device     | status service | status element |
            | with nfc   | activated      | visible        |
            | with nfc 2 | not activated  | visible        |

    @MPPD002
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Activacion_PD: Case 1.1 / 1.1.1.1
    Scenario: Card activation: Access to mobile payment for the first time and associate available card
        Given a user with the following criteria
            | criteria                              |
            | accounts and cards                    |
            | mobile payments service not activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit    |
            | status | available |
        And the user tries to access to mobile payment from "banner product detail"
        And the user does the mobile payment onboarding and OTP validation
        When the user exits from associated card confirmation screen
        Then the user is in the "product detail" screen

    @MPPD003
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Activacion_PD: Case 1.1 / 1.1.1.2
    Scenario: Card activation: Access to mobile payment for the first time and associate not available card
        Given a user with the following criteria
            | criteria                              |
            | operative not available card          |
            | mobile payments service not activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit        |
            | status | not available |
        And the user tries to access to mobile payment from "banner product detail"
        And the user does the mobile payment onboarding and OTP validation
        When the user understands and "come back" from card associate screen
        Then the user is in the "product detail" screen

    @MPPD004
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Activacion_PD: Case 1.1 / 1.1.2
    Scenario: Card activation: Access to mobile payment for the first time and exit of mobile payment onboarding
        Given a user with the following criteria
            | criteria                              |
            | operative not available card          |
            | mobile payments service not activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit        |
            | status | not available |
        And the user accesses to mobile payment from "banner product detail"
        When the user exits of mobile payment onboarding
        Then the user is in the "product detail" screen

    @MPPD005
    @android @native @smokeTest @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Activacion_PD: Case 1.2 / 1.2.1
    Scenario: Card activation: Access to mobile payment and associate available card
        Given a user with the following criteria
            | criteria                          |
            | accounts and cards                |
            | mobile payments service activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit    |
            | status | available |
        And the user accesses to mobile payment from "banner product detail"
        When the user exits from associated card confirmation screen
        Then the user is in the "product detail" screen

    @MPPD006
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Activacion_PD: Case 1.2 / 1.2.2
    Scenario: Card activation: Access to mobile payment and associate not available card
        Given a user with the following criteria
            | criteria                          |
            | accounts and cards                |
            | mobile payments service activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit    |
            | status | available |
        And the user accesses to mobile payment from "banner product detail"
        When the user understands and "associate card" from card associate screen
        Then the user is in the "product detail" screen

    @MPPD007
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_States: Case 1.1 / 1.2.1 / 1.2.2
    #UX Mobile-Payment_MX_Activacion_PD Case 4.1
    #UX Mobile-Payment_MX_Entrypoints: Case 1.3 / 2.3
    Scenario Outline: Card activation: Access to mobile payment whit <description>
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit     |
            | status | associated |
        When the user accesses to mobile payment from "banner product detail"
        Then the user sees the following items in the screen
            | item                     | value       |
            | go back                  |             |
            | header                   |             |
            | icon faqs                |             |
            | card detail              |             |
            | info card not associated | not visible |
            | default card toggle      | not visible |
            | NFC activate panel       | <state>     |
            | default card             | enabled     |

        Examples:
            | description   | state       |
            | NFC disabled  |             |
            | NFC activated | not visible |

    @MPPD008
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Activacion_PD: Case 2
    Scenario: Card activation: Access to mobile payment whit NFC OFF - activated NFC in native settings
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit     |
            | status | associated |
        And the user accesses to mobile payment from "banner product detail"
        When the user actives NFC from native settings
        Then the user sees the following items in the screen
            | item                     | value       |
            | go back                  |             |
            | header                   |             |
            | icon faqs                |             |
            | card detail              |             |
            | info card not associated | not visible |
            | default card toggle      | not visible |
            | NFC activate panel       | not visible |
            | default card             | enabled     |

    @MPPD009
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Activacion_PD: Case 3.1 / 3.1.1
    Scenario: Card activation: Select one card as default
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit     |
            | status | associated |
        And the user accesses to mobile payment from "banner product detail"
        When the user selects the card to default card
        Then the user sees the following items in the screen
            | item                       |
            | success toast default card |

    @MPPD010
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Activacion_PD: Case 3.1 / 3.1.2
    Scenario: Card activation: Select one card as default when exist other default card
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit     |
            | status | associated |
        And the user accesses to mobile payment from "banner product detail"
        And the user selects the card to default card
        When the user accepts the notice that another default card exists
        Then the user sees the following items in the screen
            | item                       |
            | success toast default card |

    @MPPD011
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Activacion_PD: Case 3.2
    Scenario: Card activation: Select one card as undefault
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit     |
            | status | associated |
        And the user accesses to mobile payment from "banner product detail"
        When the user selects the card to undefault card
        Then the user sees the following items in the screen
            | item                         |
            | success toast undefault card |

    @MPPD012
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Activacion_PD: Case 4.1.1
    Scenario: Access to faq list mobile payment with associated card
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit     |
            | status | associated |
        And the user accesses to mobile payment from "banner product detail"
        When the user accesses to faqs mobile payment
        Then the user sees the following items in the screen
            | item     |
            | header   |
            | close    |
            | title    |
            | faq list |

    @MPPD013
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Activacion_PD: Case 4.1.1 - 4.1.10
    Scenario Outline: Access to details of faqs mobile payment with associated card <name faq>
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit     |
            | status | associated |
        And the user accesses to mobile payment from "banner product detail"
        When the user accesses to details of faq "<name faq>" mobile payment
        Then the user sees the following items in the screen
            | item   |
            | header |
            | close  |
            | image  |
            | title  |
            | info   |

        Examples:
            | name faq |
            | faq 1    |
            | faq 2    |
            | faq 3    |
            | faq 4    |
            | faq 5    |
            | faq 6    |
            | faq 7    |
            | faq 8    |
            | faq 9    |
            | faq 10   |

    @MPPD014
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_States: Case 1.1
    Scenario: Card activation: Access to mobile payment without card added
        Given a user with the following criteria
            | criteria                          |
            | accounts and cards                |
            | mobile payments service activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit    |
            | status | available |
        When the user accesses to mobile payment from "banner product detail"
        Then the user sees the following items in the screen
            | item                     | value       |
            | go back                  |             |
            | header                   |             |
            | icon faqs                |             |
            | card detail              |             |
            | info card not associated |             |
            | default card toggle      | not visible |
            | associate card button    |             |

    @MPPD015
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_States: Case 1.2.1
    Scenario: Card activation: Access to mobile payment with card added and NFC disabled
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit     |
            | status | associated |
        When the user accesses to mobile payment from "banner product detail"
        Then the user sees the following items in the screen
            | item                     | value       |
            | go back                  |             |
            | header                   |             |
            | icon faqs                |             |
            | card detail              |             |
            | info card not associated | not visible |
            | default card toggle      | not visible |
            | NFC activate panel       |             |
            | default card             | enabled     |

    @MPPD016
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_States: Case 1.2.3 / 1.2.4 / 1.2.5 / 1.2.6 / 1.2.7
    Scenario Outline: Card activation: Access to mobile payment with <status> card
        Given a user with the following criteria
            | criteria                          |
            | operative <status> card           |
            | mobile payments service activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit   |
            | status | <status> |
        When the user tries to access to mobile payment from "banner product detail"
        Then the user sees a "small" modal with the following elements:
            | item         | value  |
            | warning icon |        |
            | title        | <text> |
            | description  |        |
            | understand   |        |
        Examples:
            | status            | text                       |
            | off               | Tarjeta apagada            |
            | pending activated | Activar tarjeta            |
            | pending delivery  | Tarjeta en camino          |
            | blocked card      | Tarjeta bloqueada          |
            | credit limit      | Límite de credito excedido |

    @MPPD017
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Activacion_PD: Error 1
    Scenario: Card activation: Error when accessing the mobile payment
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit     |
            | status | associated |
        When the user tries to access to mobile payment from "banner product detail"
        Then the user sees a "small" error with the following elements:
            | item         |
            | warning icon |
            | title        |
            | description  |
            | retry        |
            | exit         |

    @MPPD018
    @android @native @!vbank
    @MX @manual @JIRA.GLOMOGL-27158
    #UX Mobile-Payment_MX_Activacion_PD: Error 1.2 / 1.3
    Scenario: Card activation: Error when accessing the mobile payment 3 times
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit     |
            | status | associated |
        And the user tries to access to mobile payment from "banner product detail"
        When the user retries access "3" times
        Then the user sees a "small" error with the following elements:
            | item         | value       |
            | warning icon |             |
            | title        |             |
            | description  |             |
            | retry        | not visible |
            | exit         |             |

    @MPPD019
    @android @native @smokeTest @!vbank
    @MX @manual @JIRA.GLOMOGL-22070
    #UX Mobile-Payment_MX_Entrypoints: Case 2.3
    Scenario: Access to mobile payment from product detail - NFC ON - App nor selected for pay
        Given a user with the following criteria
            | criteria                          |
            | operative associated card         |
            | mobile payments service activated |
        And the user accesses to the card product detail with following criteria
            | type   | credit     |
            | status | associated |
        And the user tries to access to mobile payment from "banner product detail"
        When the user accesses to modal payments settings and default app for payments
        Then the user sees the following items in the screen
            | item                | value        |
            | go back             |              |
            | header              |              |
            | icon faqs           |              |
            | card detail         |              |
            | default card toggle | not activate |
