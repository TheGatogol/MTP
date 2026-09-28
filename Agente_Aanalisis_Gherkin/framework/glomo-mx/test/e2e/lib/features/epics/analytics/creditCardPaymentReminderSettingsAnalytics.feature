@creditCardPaymentReminderSettingsAnalytics
Feature: Analytics - Credit Card Payment Reminder Settings

    @ANA_CCPRS001
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Page View - Notifications settings page
        Given a user with the following criteria
            | criteria                              |
            | credit card payment reminder settings |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the analytics interceptor service is initiated
        When the user accesses to notifications option in configure products
        Then the analytics events contains the following variables
            | item                    | value                                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                                    | json schema      | Page View |
            | version DL              | 20250414_5.0                                                            | string           | Page View |
            | page name               | app:privada:personas:configuracion:notificaciones                       | string           | Page View |
            | level 1                 | configuracion                                                           | string           | Page View |
            | level 2                 | notificaciones                                                          | string           | Page View |
            | language                | ES                                                                      | string           | Page View |
            | page area               | privada                                                                 | string           | Page View |
            | page intent             | informacion                                                             | string           | Page View |
            | page segment            | personas                                                                | string           | Page View |
            | channel                 | online                                                                  | string           | Page View |
            | sysEnv                  | app                                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                                         | string           | Page View |
            | project name            | Glomo                                                                   | string           | Page View |
            | page instance ID        | de                                                                      | string           | Page View |
            | page info version       | appVersion                                                              | regexp named     | Page View |
            | user userState          | logado                                                                  | string           | Page View |
            | user segment global     | 003001                                                                  | string           | Page View |
            | user gender             | gender                                                                  | regexp named     | Page View |
            | user age                | age                                                                     | regexp named     | Page View |
            | internal campaign       |                                                                         | empty array      | Page View |
            | optimization attributes |                                                                         | empty array      | Page View |
            | application name        |                                                                         | empty str object | Page View |
            | products attributes     |                                                                         | empty array      | Page View |

    @ANA_CCPRS002
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Internal Link - Configure credit card payment reminder
        Given a user with the following criteria
            | criteria                              |
            | credit card payment reminder settings |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to notifications option in configure products
        And the analytics interceptor service is initiated
        When the user accesses to credit card payment reminder settings
        Then the analytics events contains the following variables
            | item                    | value                                                                   | type             | event         |
            | analytics               | analytics/glomo_base                                                    | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                            | string           | Internal Link |
            | page name               | app:privada:personas:configuracion:notificaciones                       | string           | Internal Link |
            | level 1                 | configuracion                                                           | string           | Internal Link |
            | level 2                 | notificaciones                                                          | string           | Internal Link |
            | language                | ES                                                                      | string           | Internal Link |
            | page area               | privada                                                                 | string           | Internal Link |
            | page intent             | informacion                                                             | string           | Internal Link |
            | page segment            | personas                                                                | string           | Internal Link |
            | channel                 | online                                                                  | string           | Internal Link |
            | sysEnv                  | app                                                                     | string           | Internal Link |
            | business unit           | BBVA Mexico                                                             | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                         | string           | Internal Link |
            | project name            | Glomo                                                                   | string           | Internal Link |
            | link name               | configurar recordatorios de pago de tarjeta de credito                  | string           | Internal Link |
            | user userState          | logado                                                                  | string           | Internal Link |
            | user segment global     | 003001                                                                  | string           | Internal Link |
            | user gender             | gender                                                                  | regexp named     | Internal Link |
            | user age                | age                                                                     | regexp named     | Internal Link |
            | application name        |                                                                         | empty str object | Internal Link |

    @ANA_CCPRS003
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Page View - Modify reminders screen
        Given a user with the following criteria
            | criteria                              |
            | credit card payment reminder settings |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to notifications option in configure products
        And the user accesses to credit card payment reminder settings
        And the analytics interceptor service is initiated
        When the user accesses the reminder settings edition
        Then the analytics events contains the following variables
            | item                    | value                                                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                                                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                                       | string           | Page View |
            | page name               | app:privada:personas:configuracion:notificaciones:recordatorio de pago tdc:modificar recordatorio  | string           | Page View |
            | level 1                 | configuracion                                                                                      | string           | Page View |
            | level 2                 | notificaciones                                                                                     | string           | Page View |
            | level 3                 | recordatorio de pago tdc                                                                           | string           | Page View |
            | level 4                 | modificar recordatorio                                                                             | string           | Page View |
            | language                | ES                                                                                                 | string           | Page View |
            | page area               | privada                                                                                            | string           | Page View |
            | page intent             | informacion                                                                                        | string           | Page View |
            | page segment            | personas                                                                                           | string           | Page View |
            | channel                 | online                                                                                             | string           | Page View |
            | sysEnv                  | app                                                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                                                                    | string           | Page View |
            | project name            | Glomo                                                                                              | string           | Page View |
            | page instance ID        | de                                                                                                 | string           | Page View |
            | page info version       | appVersion                                                                                         | regexp named     | Page View |
            | user userState          | logado                                                                                             | string           | Page View |
            | user segment global     | 003001                                                                                             | string           | Page View |
            | user gender             | gender                                                                                             | regexp named     | Page View |
            | user age                | age                                                                                                | regexp named     | Page View |
            | internal campaign       |                                                                                                    | empty array      | Page View |
            | optimization attributes |                                                                                                    | empty array      | Page View |
            | application name        |                                                                                                    | empty str object | Page View |
            | products attributes     |                                                                                                    | empty array      | Page View |

    @ANA_CCPRS004
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Interaction Link - Activate payment reminder toggle
        Given a user with the following criteria
            | criteria                                      |
            | credit card payment reminder settings disabled |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to notifications option in configure products
        And the user accesses to credit card payment reminder settings
        And the user accesses the reminder settings edition
        And the analytics interceptor service is initiated
        When the user toggles on the toggle
        Then the analytics events contains the following variables
            | item                    | value                                                                                              | type             | event            |
            | analytics               | analytics/glomo_base                                                                               | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                                                                       | string           | Interaction Link |
            | page name               | app:privada:personas:configuracion:notificaciones:recordatorio de pago tdc:modificar recordatorio  | string           | Interaction Link |
            | level 1                 | configuracion                                                                                      | string           | Interaction Link |
            | level 2                 | notificaciones                                                                                     | string           | Interaction Link |
            | level 3                 | recordatorio de pago tdc                                                                           | string           | Interaction Link |
            | level 4                 | modificar recordatorio                                                                             | string           | Interaction Link |
            | language                | ES                                                                                                 | string           | Interaction Link |
            | page area               | privada                                                                                            | string           | Interaction Link |
            | page intent             | informacion                                                                                        | string           | Interaction Link |
            | page segment            | personas                                                                                           | string           | Interaction Link |
            | channel                 | online                                                                                             | string           | Interaction Link |
            | sysEnv                  | app                                                                                                | string           | Interaction Link |
            | business unit           | BBVA Mexico                                                                                        | string           | Interaction Link |
            | site app name           | App BBVA Mexico                                                                                    | string           | Interaction Link |
            | project name            | Glomo                                                                                              | string           | Interaction Link |
            | interaction level       | activar recordatorio de pago                                                                       | string           | Interaction Link |
            | user userState          | logado                                                                                             | string           | Interaction Link |
            | user segment global     | 003001                                                                                             | string           | Interaction Link |
            | user gender             | gender                                                                                             | regexp named     | Interaction Link |
            | user age                | age                                                                                                | regexp named     | Interaction Link |
            | application name        |                                                                                                    | empty str object | Interaction Link |

    @ANA_CCPRS005
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Interaction Link - Deactivate payment reminder toggle
        Given a user with the following criteria
            | criteria                              |
            | credit card payment reminder settings |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to notifications option in configure products
        And the user accesses to credit card payment reminder settings
        And the user accesses the reminder settings edition
        And the analytics interceptor service is initiated
        When the user toggles off the toggle
        Then the analytics events contains the following variables
            | item                    | value                                                                                              | type             | event            |
            | analytics               | analytics/glomo_base                                                                               | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                                                                       | string           | Interaction Link |
            | page name               | app:privada:personas:configuracion:notificaciones:recordatorio de pago tdc:modificar recordatorio  | string           | Interaction Link |
            | level 1                 | configuracion                                                                                      | string           | Interaction Link |
            | level 2                 | notificaciones                                                                                     | string           | Interaction Link |
            | level 3                 | recordatorio de pago tdc                                                                           | string           | Interaction Link |
            | level 4                 | modificar recordatorio                                                                             | string           | Interaction Link |
            | language                | ES                                                                                                 | string           | Interaction Link |
            | page area               | privada                                                                                            | string           | Interaction Link |
            | page intent             | informacion                                                                                        | string           | Interaction Link |
            | page segment            | personas                                                                                           | string           | Interaction Link |
            | channel                 | online                                                                                             | string           | Interaction Link |
            | sysEnv                  | app                                                                                                | string           | Interaction Link |
            | business unit           | BBVA Mexico                                                                                        | string           | Interaction Link |
            | site app name           | App BBVA Mexico                                                                                    | string           | Interaction Link |
            | project name            | Glomo                                                                                              | string           | Interaction Link |
            | interaction level       | desactivar recordatorio de pago                                                                    | string           | Interaction Link |
            | user userState          | logado                                                                                             | string           | Interaction Link |
            | user segment global     | 003001                                                                                             | string           | Interaction Link |
            | user gender             | gender                                                                                             | regexp named     | Interaction Link |
            | user age                | age                                                                                                | regexp named     | Interaction Link |
            | application name        |                                                                                                    | empty str object | Interaction Link |

    @ANA_CCPRS006
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Page View - Error info not available on load
        Given a user with the following criteria
            | criteria                                         |
            | credit card payment reminder settings error       |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to notifications option in configure products
        And the analytics interceptor service is initiated
        When the user accesses to credit card payment reminder settings
        Then the analytics events contains the following variables
            | item                    | value                                                                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                                                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                                                 | string           | Page View |
            | page name               | app:privada:personas:configuracion:notificaciones:recordatorio de pago tdc:error informacion no disponible   | string           | Page View |
            | level 1                 | configuracion                                                                                                | string           | Page View |
            | level 2                 | notificaciones                                                                                               | string           | Page View |
            | level 3                 | recordatorio de pago tdc                                                                                     | string           | Page View |
            | level 4                 | error informacion no disponible                                                                              | string           | Page View |
            | error page              | error informacion no disponible                                                                              | string           | Page View |
            | language                | ES                                                                                                           | string           | Page View |
            | page area               | privada                                                                                                      | string           | Page View |
            | page intent             | informacion                                                                                                  | string           | Page View |
            | page segment            | personas                                                                                                     | string           | Page View |
            | channel                 | online                                                                                                       | string           | Page View |
            | sysEnv                  | app                                                                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                                                                              | string           | Page View |
            | project name            | Glomo                                                                                                        | string           | Page View |
            | user userState          | logado                                                                                                       | string           | Page View |
            | user segment global     | 003001                                                                                                       | string           | Page View |
            | user gender             | gender                                                                                                       | regexp named     | Page View |
            | user age                | age                                                                                                          | regexp named     | Page View |
            | application name        |                                                                                                              | empty str object | Page View |

    @ANA_CCPRS007
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Page View - Error operation not performed on save
        Given a user with the following criteria
            | criteria                                         |
            | credit card payment reminder settings retry error |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to notifications option in configure products
        And the user accesses to credit card payment reminder settings
        And the user accesses the reminder settings edition
        And the user toggles off the toggle
        And the analytics interceptor service is initiated
        When the user confirms the reminder settings changes
        Then the analytics events contains the following variables
            | item                    | value                                                                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                                                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                                               | string           | Page View |
            | page name               | app:privada:personas:configuracion:notificaciones:recordatorio de pago tdc:error operacion no realizada    | string           | Page View |
            | level 1                 | configuracion                                                                                              | string           | Page View |
            | level 2                 | notificaciones                                                                                             | string           | Page View |
            | level 3                 | recordatorio de pago tdc                                                                                   | string           | Page View |
            | level 4                 | error operacion no realizada                                                                               | string           | Page View |
            | error page              | error operacion no realizada                                                                               | string           | Page View |
            | language                | ES                                                                                                         | string           | Page View |
            | page area               | privada                                                                                                    | string           | Page View |
            | page intent             | informacion                                                                                                | string           | Page View |
            | page segment            | personas                                                                                                   | string           | Page View |
            | channel                 | online                                                                                                     | string           | Page View |
            | sysEnv                  | app                                                                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                                                                            | string           | Page View |
            | project name            | Glomo                                                                                                      | string           | Page View |
            | user userState          | logado                                                                                                     | string           | Page View |
            | user segment global     | 003001                                                                                                     | string           | Page View |
            | user gender             | gender                                                                                                     | regexp named     | Page View |
            | user age                | age                                                                                                        | regexp named     | Page View |
            | application name        |                                                                                                            | empty str object | Page View |

    @ANA_CCPRS008
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Page View - Success after modifying reminders
        Given a user with the following criteria
            | criteria                              |
            | credit card payment reminder settings |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to notifications option in configure products
        And the user accesses to credit card payment reminder settings
        And the user accesses the reminder settings edition
        And the user selects "10 días hábiles" from the days dropdown
        And the analytics interceptor service is initiated
        When the user confirms the reminder settings changes
        Then the analytics events contains the following variables
            | item                    | value                                                                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                                                                    | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                                            | string           | Page View |
            | page name               | app:privada:personas:configuracion:notificaciones:recordatorio de pago tdc:modificaste tus recordatorios | string           | Page View |
            | level 1                 | configuracion                                                                                           | string           | Page View |
            | level 2                 | notificaciones                                                                                          | string           | Page View |
            | level 3                 | recordatorio de pago tdc                                                                                | string           | Page View |
            | level 4                 | modificaste tus recordatorios                                                                           | string           | Page View |
            | language                | ES                                                                                                      | string           | Page View |
            | page area               | privada                                                                                                 | string           | Page View |
            | page intent             | informacion                                                                                             | string           | Page View |
            | page segment            | personas                                                                                                | string           | Page View |
            | channel                 | online                                                                                                  | string           | Page View |
            | sysEnv                  | app                                                                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                                                                         | string           | Page View |
            | project name            | Glomo                                                                                                   | string           | Page View |
            | page instance ID        | de                                                                                                      | string           | Page View |
            | page info version       | appVersion                                                                                              | regexp named     | Page View |
            | user userState          | logado                                                                                                  | string           | Page View |
            | user segment global     | 003001                                                                                                  | string           | Page View |
            | user gender             | gender                                                                                                  | regexp named     | Page View |
            | user age                | age                                                                                                     | regexp named     | Page View |
            | internal campaign       |                                                                                                         | empty array      | Page View |
            | optimization attributes |                                                                                                         | empty array      | Page View |
            | application name        |                                                                                                         | empty str object | Page View |
            | products attributes     |                                                                                                         | empty array      | Page View |
