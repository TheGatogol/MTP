@billPaymentsDashboardAnalytics
Feature: Analytics - Bill Payments Dashboard

    @ANA_EVENT_BPD001
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS App On Click Start - User access the bill payments dashboard
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the analytics interceptor service is initiated
        When the user accepts the onboarding bill payments dashboard
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event              |
            | analytics           | analytics/glomo_base                                   | json schema  | App On Click Start |
            | version DL          | 20250414_5.0                                           | string       | App On Click Start |
            | page intent         | informacion                                            | string       | App On Click Start |
            | page segment        | personas                                               | string       | App On Click Start |
            | page name           | app:privada:personas:cuentas:pagar servicio o impuesto | string       | App On Click Start |
            | sysEnv              | app                                                    | string       | App On Click Start |
            | channel             | online                                                 | string       | App On Click Start |
            | language            | ES                                                     | string       | App On Click Start |
            | level 1             | cuentas                                                | string       | App On Click Start |
            | level 2             | pagar servicio o impuesto                              | string       | App On Click Start |
            | business unit       | BBVA Mexico                                            | string       | App On Click Start |
            | site app name       | App BBVA Mexico                                        | string       | App On Click Start |
            | project name        | Glomo                                                  | string       | App On Click Start |
            | page area           | privada                                                | string       | App On Click Start |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                 | string       | App On Click Start |
            | device mobile       | si                                                     | string       | App On Click Start |
            | device root         | no root                                                | string       | App On Click Start |
            | user userState      | logado                                                 | string       | App On Click Start |
            | user segment global | 003001                                                 | string       | App On Click Start |
            | user gender         | gender                                                 | regexp named | App On Click Start |
            | user age            | age                                                    | regexp named | App On Click Start |
            | fulfillment model   | online                                                 | string       | App On Click Start |
            | application process | dashboard operativas                                   | string       | App On Click Start |
            | application type    | operativa                                              | string       | App On Click Start |
            | application name    | pagar servicio                                         | string       | App On Click Start |
            | application step    | pagar nuevo                                            | string       | App On Click Start |
            | global application  | bill payments                                          | string       | App On Click Start |

    @ANA_EVENT_BPD002
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS App Page Visit - User visits the bill payments dashboard
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the analytics interceptor service is initiated
        When the user accepts the onboarding bill payments dashboard
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event          |
            | version DL          | 20250414_5.0                                           | string       | App Page Visit |
            | page intent         | transaccion                                            | string       | App Page Visit |
            | page segment        | personas                                               | string       | App Page Visit |
            | page name           | app:privada:personas:cuentas:pagar servicio:1 servicio | string       | App Page Visit |
            | sysEnv              | app                                                    | string       | App Page Visit |
            | channel             | online                                                 | string       | App Page Visit |
            | language            | ES                                                     | string       | App Page Visit |
            | level 1             | cuentas                                                | string       | App Page Visit |
            | level 2             | pagar servicio                                         | string       | App Page Visit |
            | level 3             | 1 servicio                                             | string       | App Page Visit |
            | business unit       | BBVA Mexico                                            | string       | App Page Visit |
            | site app name       | App BBVA Mexico                                        | string       | App Page Visit |
            | project name        | Glomo                                                  | string       | App Page Visit |
            | page area           | privada                                                | string       | App Page Visit |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                 | string       | App Page Visit |
            | device mobile       | si                                                     | string       | App Page Visit |
            | device root         | no root                                                | string       | App Page Visit |
            | user userState      | logado                                                 | string       | App Page Visit |
            | user segment global | 003001                                                 | string       | App Page Visit |
            | user gender         | gender                                                 | regexp named | App Page Visit |
            | user age            | age                                                    | regexp named | App Page Visit |
            | fulfillment model   | online                                                 | string       | App Page Visit |
            | application process | dashboard operativas                                   | string       | App Page Visit |
            | application type    | operativa                                              | string       | App Page Visit |
            | application name    | pagar servicio                                         | string       | App Page Visit |
            | application step    | 1 servicio                                             | string       | App Page Visit |
            | global application  | bill payments                                          | string       | App Page Visit |

    @ANA_EVENT_BPD003
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Page View - Unavailable information
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        When the user choose saved services
        Then the analytics events contains the following variables
            | item                | value                                                                            | type         | event     |
            | analytics           | analytics/glomo_base                                                             | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                     | string       | Page View |
            | page intent         | transaccion                                                                      | string       | Page View |
            | page segment        | personas                                                                         | string       | Page View |
            | page name           | app:privada:personas:cuentas:pagar servicio:1 servicio:informacion no disponible | string       | Page View |
            | sysEnv              | app                                                                              | string       | Page View |
            | channel             | online                                                                           | string       | Page View |
            | language            | ES                                                                               | string       | Page View |
            | level 1             | cuentas                                                                          | string       | Page View |
            | level 2             | pagar servicio                                                                   | string       | Page View |
            | level 3             | 1 servicio                                                                       | string       | Page View |
            | level 4             | informacion no disponible                                                        | string       | Page View |
            | business unit       | BBVA Mexico                                                                      | string       | Page View |
            | site app name       | App BBVA Mexico                                                                  | string       | Page View |
            | project name        | Glomo                                                                            | string       | Page View |
            | error page          | informacion no disponible                                                        | string       | Page View |
            | page area           | privada                                                                          | string       | Page View |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                           | string       | Page View |
            | device mobile       | si                                                                               | string       | Page View |
            | device root         | no root                                                                          | string       | Page View |
            | user userState      | logado                                                                           | string       | Page View |
            | user segment global | 003001                                                                           | string       | Page View |
            | user gender         | gender                                                                           | regexp named | Page View |
            | user age            | age                                                                              | regexp named | Page View |
            | login type          |                                                                                  | string       | Page View |

    @ANA_EVENT_BPD004
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Page View - Choose New Service
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        When the user choose a new service
        Then the analytics events contains the following variables
            | item                | value                                                               | type             | event     |
            | analytics           | analytics/glomo_base                                                | json schema      | Page View |
            | version DL          | 20250414_5.0                                                        | string           | Page View |
            | page intent         | transaccion                                                         | string           | Page View |
            | page segment        | personas                                                            | string           | Page View |
            | page name           | app:privada:personas:cuentas:pagar servicio:1 servicio:elegir nuevo | string           | Page View |
            | sysEnv              | app                                                                 | string           | Page View |
            | channel             | online                                                              | string           | Page View |
            | language            | ES                                                                  | string           | Page View |
            | level 1             | cuentas                                                             | string           | Page View |
            | level 2             | pagar servicio                                                      | string           | Page View |
            | level 3             | 1 servicio                                                          | string           | Page View |
            | level 4             | elegir nuevo                                                        | string           | Page View |
            | business unit       | BBVA Mexico                                                         | string           | Page View |
            | site app name       | App BBVA Mexico                                                     | string           | Page View |
            | project name        | Glomo                                                               | string           | Page View |
            | page area           | privada                                                             | string           | Page View |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                              | string           | Page View |
            | device mobile       | si                                                                  | string           | Page View |
            | device root         | no root                                                             | string           | Page View |
            | user userState      | logado                                                              | string           | Page View |
            | user segment global | 003001                                                              | string           | Page View |
            | user gender         | gender                                                              | regexp named     | Page View |
            | user age            | age                                                                 | regexp named     | Page View |
            | application name    |                                                                     | empty str object | Page View |
            | login type          |                                                                     | string            | Page View |

    @ANA_EVENT_BPD005
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS App Started - Choose a new service
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        When the user choose a new service
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event       |
            | analytics           | analytics/glomo_base                                   | json schema  | App Started |
            | version DL          | 20250414_5.0                                           | string       | App Started |
            | page intent         | transaccion                                            | string       | App Started |
            | page segment        | personas                                               | string       | App Started |
            | page name           | app:privada:personas:cuentas:pagar servicio:1 servicio | string       | App Started |
            | sysEnv              | app                                                    | string       | App Started |
            | channel             | online                                                 | string       | App Started |
            | language            | ES                                                     | string       | App Started |
            | level 1             | cuentas                                                | string       | App Started |
            | level 2             | pagar servicio                                         | string       | App Started |
            | level 3             | 1 servicio                                             | string       | App Started |
            | business unit       | BBVA Mexico                                            | string       | App Started |
            | site app name       | App BBVA Mexico                                        | string       | App Started |
            | project name        | Glomo                                                  | string       | App Started |
            | page area           | privada                                                | string       | App Started |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                 | string       | App Started |
            | device mobile       | si                                                     | string       | App Started |
            | device root         | no root                                                | string       | App Started |
            | user userState      | logado                                                 | string       | App Started |
            | user segment global | 003001                                                 | string       | App Started |
            | user gender         | gender                                                 | regexp named | App Started |
            | user age            | age                                                    | regexp named | App Started |
            | fulfillment model   | online                                                 | string       | App Started |
            | application process | dashboard operativas                                   | string       | App Started |
            | application type    | operativa                                              | string       | App Started |
            | application name    | pagar servicio                                         | string       | App Started |
            | application step    | elegir nuevo                                           | string       | App Started |
            | global application  | bill payments                                          | string       | App Started |

    @ANA_EVENT_BPD006
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS App Started - Choose all saved services
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        When the user choose a view all saved services
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event       |
            | analytics           | analytics/glomo_base                                   | json schema  | App Started |
            | version DL          | 20250414_5.0                                           | string       | App Started |
            | page intent         | transaccion                                            | string       | App Started |
            | page segment        | personas                                               | string       | App Started |
            | page name           | app:privada:personas:cuentas:pagar servicio:1 servicio | string       | App Started |
            | sysEnv              | app                                                    | string       | App Started |
            | channel             | online                                                 | string       | App Started |
            | language            | ES                                                     | string       | App Started |
            | level 1             | cuentas                                                | string       | App Started |
            | level 2             | pagar servicio                                         | string       | App Started |
            | level 3             | 1 servicio                                             | string       | App Started |
            | business unit       | BBVA Mexico                                            | string       | App Started |
            | site app name       | App BBVA Mexico                                        | string       | App Started |
            | project name        | Glomo                                                  | string       | App Started |
            | page area           | privada                                                | string       | App Started |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                 | string       | App Started |
            | device mobile       | si                                                     | string       | App Started |
            | device root         | no root                                                | string       | App Started |
            | user userState      | logado                                                 | string       | App Started |
            | user segment global | 003001                                                 | string       | App Started |
            | user gender         | gender                                                 | regexp named | App Started |
            | user age            | age                                                    | regexp named | App Started |
            | fulfillment model   | online                                                 | string       | App Started |
            | application process | dashboard operativas                                   | string       | App Started |
            | application type    | operativa                                              | string       | App Started |
            | application name    | pagar servicio                                         | string       | App Started |
            | application step    | ver todos                                              | string       | App Started |
            | global application  | bill payments                                          | string       | App Started |

    @ANA_EVENT_BPD007
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS App Started - Choose saved service
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        When the user choose saved services
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event       |
            | analytics           | analytics/glomo_base                                   | json schema  | App Started |
            | version DL          | 20250414_5.0                                           | string       | App Started |
            | page intent         | transaccion                                            | string       | App Started |
            | page segment        | personas                                               | string       | App Started |
            | page name           | app:privada:personas:cuentas:pagar servicio:1 servicio | string       | App Started |
            | sysEnv              | app                                                    | string       | App Started |
            | channel             | online                                                 | string       | App Started |
            | language            | ES                                                     | string       | App Started |
            | level 1             | cuentas                                                | string       | App Started |
            | level 2             | pagar servicio                                         | string       | App Started |
            | level 3             | 1 servicio                                             | string       | App Started |
            | business unit       | BBVA Mexico                                            | string       | App Started |
            | site app name       | App BBVA Mexico                                        | string       | App Started |
            | project name        | Glomo                                                  | string       | App Started |
            | page area           | privada                                                | string       | App Started |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                 | string       | App Started |
            | device mobile       | si                                                     | string       | App Started |
            | device root         | no root                                                | string       | App Started |
            | user userState      | logado                                                 | string       | App Started |
            | user segment global | 003001                                                 | string       | App Started |
            | user gender         | gender                                                 | regexp named | App Started |
            | user age            | age                                                    | regexp named | App Started |
            | fulfillment model   | online                                                 | string       | App Started |
            | application process | dashboard operativas                                   | string       | App Started |
            | application type    | operativa                                              | string       | App Started |
            | application name    | pagar servicio                                         | string       | App Started |
            | application step    | american express co mexico                             | string       | App Started |
            | global application  | bill payments                                          | string       | App Started |

    @ANA_EVENT_BPD008
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard  ANALYTICS App Step 2 - Reference details
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        When the user choose saved services
        Then the analytics events contains the following variables
            | item                     | value                                                    | type         | event      |
            | analytics                | analytics/glomo_base                                     | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                             | string       | App Step 2 |
            | page intent              | transaccion                                              | string       | App Step 2 |
            | page segment             | personas                                                 | string       | App Step 2 |
            | page name                | app:privada:personas:cuentas:pagar servicio:2 referencia | string       | App Step 2 |
            | sysEnv                   | app                                                      | string       | App Step 2 |
            | channel                  | online                                                   | string       | App Step 2 |
            | language                 | ES                                                       | string       | App Step 2 |
            | level 1                  | cuentas                                                  | string       | App Step 2 |
            | level 2                  | pagar servicio                                           | string       | App Step 2 |
            | level 3                  | 2 referencia                                             | string       | App Step 2 |
            | business unit            | BBVA Mexico                                              | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                          | string       | App Step 2 |
            | project name             | Glomo                                                    | string       | App Step 2 |
            | page area                | privada                                                  | string       | App Step 2 |
            | device user agent        | GLOMO_MX/99.99.99 (Android;14;Samsung)                   | string       | App Step 2 |
            | device mobile            | si                                                       | string       | App Step 2 |
            | device root              | no root                                                  | string       | App Step 2 |
            | user userState           | logado                                                   | string       | App Step 2 |
            | user segment global      | 003001                                                   | string       | App Step 2 |
            | user gender              | gender                                                   | regexp named | App Step 2 |
            | user age                 | age                                                      | regexp named | App Step 2 |
            | product primary category | servicios                                                | string       | App Step 2 |
            | fulfillment model        | online                                                   | string       | App Step 2 |
            | application process      | dashboard operativas                                     | string       | App Step 2 |
            | application type         | operativa                                                | string       | App Step 2 |
            | application name         | pagar servicio                                           | string       | App Step 2 |
            | application step         | 2 referencia                                             | string       | App Step 2 |
            | global application       | bill payments                                            | string       | App Step 2 |

    @ANA_EVENT_BPD009
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Internal Link - Click More Information
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the analytics interceptor service is initiated
        When the user selects more information
        Then the analytics events contains the following variables
            | item                | value                                                    | type         | event         |
            | analytics           | analytics/glomo_base                                     | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                             | string       | Internal Link |
            | page intent         | transaccion                                              | string       | Internal Link |
            | page segment        | personas                                                 | string       | Internal Link |
            | page name           | app:privada:personas:cuentas:pagar servicio:2 referencia | string       | Internal Link |
            | sysEnv              | app                                                      | string       | Internal Link |
            | channel             | online                                                   | string       | Internal Link |
            | language            | ES                                                       | string       | Internal Link |
            | level 1             | cuentas                                                  | string       | Internal Link |
            | level 2             | pagar servicio                                           | string       | Internal Link |
            | level 3             | 2 referencia                                             | string       | Internal Link |
            | business unit       | BBVA Mexico                                              | string       | Internal Link |
            | site app name       | App BBVA Mexico                                          | string       | Internal Link |
            | project name        | Glomo                                                    | string       | Internal Link |
            | page area           | privada                                                  | string       | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                   | string       | Internal Link |
            | link name           | referencia de pago                                       | string       | Internal Link |
            | device mobile       | si                                                       | string       | Internal Link |
            | device root         | no root                                                  | string       | Internal Link |
            | user userState      | logado                                                   | string       | Internal Link |
            | user segment global | 003001                                                   | string       | Internal Link |
            | user gender         | gender                                                   | regexp named | Internal Link |
            | user age            | age                                                      | regexp named | Internal Link |
            | fulfillment model   |                                                          | string       | Internal Link |

    @ANA_EVENT_BPD010
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Internal Link - Select the barcode reader
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the analytics interceptor service is initiated
        When the user call native bar code
        Then the analytics events contains the following variables
            | item                | value                                                    | type         | event         |
            | analytics           | analytics/glomo_base                                     | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                             | string       | Internal Link |
            | page intent         | transaccion                                              | string       | Internal Link |
            | page segment        | personas                                                 | string       | Internal Link |
            | page name           | app:privada:personas:cuentas:pagar servicio:2 referencia | string       | Internal Link |
            | sysEnv              | app                                                      | string       | Internal Link |
            | channel             | online                                                   | string       | Internal Link |
            | language            | ES                                                       | string       | Internal Link |
            | level 1             | cuentas                                                  | string       | Internal Link |
            | level 2             | pagar servicio                                           | string       | Internal Link |
            | level 3             | 2 referencia                                             | string       | Internal Link |
            | business unit       | BBVA Mexico                                              | string       | Internal Link |
            | site app name       | App BBVA Mexico                                          | string       | Internal Link |
            | project name        | Glomo                                                    | string       | Internal Link |
            | page area           | privada                                                  | string       | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                   | string       | Internal Link |
            | link name           | referencia de camara                                     | string       | Internal Link |
            | device mobile       | si                                                       | string       | Internal Link |
            | device root         | no root                                                  | string       | Internal Link |
            | user userState      | logado                                                   | string       | Internal Link |
            | user segment global | 003001                                                   | string       | Internal Link |
            | user gender         | gender                                                   | regexp named | Internal Link |
            | user age            | age                                                      | regexp named | Internal Link |
            | fulfillment model   |                                                          | string       | Internal Link |

    @ANA_EVENT_BPD011
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Internal Link - Select the QR code reader
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the analytics interceptor service is initiated
        When the user call native qr code
        Then the analytics events contains the following variables
            | item                | value                                                    | type         | event         |
            | analytics           | analytics/glomo_base                                     | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                             | string       | Internal Link |
            | page intent         | transaccion                                              | string       | Internal Link |
            | page segment        | personas                                                 | string       | Internal Link |
            | page name           | app:privada:personas:cuentas:pagar servicio:2 referencia | string       | Internal Link |
            | sysEnv              | app                                                      | string       | Internal Link |
            | channel             | online                                                   | string       | Internal Link |
            | language            | ES                                                       | string       | Internal Link |
            | level 1             | cuentas                                                  | string       | Internal Link |
            | level 2             | pagar servicio                                           | string       | Internal Link |
            | level 3             | 2 referencia                                             | string       | Internal Link |
            | business unit       | BBVA Mexico                                              | string       | Internal Link |
            | site app name       | App BBVA Mexico                                          | string       | Internal Link |
            | project name        | Glomo                                                    | string       | Internal Link |
            | page area           | privada                                                  | string       | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                   | string       | Internal Link |
            | link name           | escanear qr                                              | string       | Internal Link |
            | device mobile       | si                                                       | string       | Internal Link |
            | device root         | no root                                                  | string       | Internal Link |
            | user userState      | logado                                                   | string       | Internal Link |
            | user segment global | 003001                                                   | string       | Internal Link |
            | user gender         | gender                                                   | regexp named | Internal Link |
            | user age            | age                                                      | regexp named | Internal Link |
            | fulfillment model   |                                                          | string       | Internal Link |

    @ANA_EVENT_BPD012
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @native
    @manual @JIRA.GLOMOGL-20021
    Scenario: Bill Payments Dashboard ANALYTICS Page View - Barcode error on reference step
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the analytics interceptor service is initiated
        When the user call native bar code
        Then the analytics events contains the following variables
            | item                | value                                                                                    | type             | event     |
            | analytics           | analytics/glomo_base                                                                     | json schema      | Page View |
            | version DL          | 20250414_5.0                                                                             | string           | Page View |
            | page intent         | transaccion                                                                              | string           | Page View |
            | page segment        | personas                                                                                 | string           | Page View |
            | page name           | app:privada:personas:cuentas:pagar servicio:2 referencia:error codigo de barras invalido | string           | Page View |
            | sysEnv              | app                                                                                      | string           | Page View |
            | channel             | online                                                                                   | string           | Page View |
            | language            | ES                                                                                       | string           | Page View |
            | level 1             | cuentas                                                                                  | string           | Page View |
            | level 2             | pagar servicio                                                                           | string           | Page View |
            | level 3             | 2 referencia                                                                             | string           | Page View |
            | level 4             | error codigo de barras invalido                                                          | string           | Page View |
            | business unit       | BBVA Mexico                                                                              | string           | Page View |
            | site app name       | App BBVA Mexico                                                                          | string           | Page View |
            | project name        | Glomo                                                                                    | string           | Page View |
            | error page          | error codigo de barras invalido                                                          | string           | Page View |
            | page area           | privada                                                                                  | string           | Page View |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                                   | string           | Page View |
            | device mobile       | si                                                                                       | string           | Page View |
            | device root         | no root                                                                                  | string           | Page View |
            | user userState      | logado                                                                                   | string           | Page View |
            | user segment global | 003001                                                                                   | string           | Page View |
            | user gender         | gender                                                                                   | regexp named     | Page View |
            | user age            | age                                                                                      | regexp named     | Page View |
            | application name    |                                                                                          | empty str object | Page View |

    @ANA_EVENT_BPD013
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @native
    @manual @JIRA.GLOMOGL-20021
    Scenario: Bill Payments Dashboard ANALYTICS Page View - QR code error on reference step
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the analytics interceptor service is initiated
        When the user call native qr code
        Then the analytics events contains the following variables
            | item                | value                                                                             | type             | event     |
            | analytics           | analytics/glomo_base                                                              | json schema      | Page View |
            | version DL          | 20250414_5.0                                                                      | string           | Page View |
            | page intent         | transaccion                                                                       | string           | Page View |
            | page segment        | personas                                                                          | string           | Page View |
            | page name           | app:privada:personas:cuentas:pagar servicio:2 referencia:error codigo qr invalido | string           | Page View |
            | sysEnv              | app                                                                               | string           | Page View |
            | channel             | online                                                                            | string           | Page View |
            | language            | ES                                                                                | string           | Page View |
            | level 1             | cuentas                                                                           | string           | Page View |
            | level 2             | pagar servicio                                                                    | string           | Page View |
            | level 3             | 2 referencia                                                                      | string           | Page View |
            | level 4             | error codigo qr invalido                                                          | string           | Page View |
            | business unit       | BBVA Mexico                                                                       | string           | Page View |
            | site app name       | App BBVA Mexico                                                                   | string           | Page View |
            | project name        | Glomo                                                                             | string           | Page View |
            | error page          | error codigo qr invalido                                                          | string           | Page View |
            | page area           | privada                                                                           | string           | Page View |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                            | string           | Page View |
            | device mobile       | si                                                                                | string           | Page View |
            | device root         | no root                                                                           | string           | Page View |
            | user userState      | logado                                                                            | string           | Page View |
            | user segment global | 003001                                                                            | string           | Page View |
            | user gender         | gender                                                                            | regexp named     | Page View |
            | user age            | age                                                                               | regexp named     | Page View |
            | application name    |                                                                                   | empty str object | Page View |

    @ANA_EVENT_BPD014
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Page View - Capture line error on reference step
        Given a user with the following criteria
            | criteria                          |
            | bill payments with email accounts |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 21   |
            | month | 6    |
            | year  | 2025 |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the analytics interceptor service is initiated
        And the user select payment of contributions "sipare" with reference
        When the user continue after entering capture line
        Then the analytics events contains the following variables
            | item                | value                                                                                  | type             | event     | event number |
            | analytics           | analytics/glomo_base                                                                   | json schema      | Page View | 2            |
            | version DL          | 20250414_5.0                                                                           | string           | Page View | 2            |
            | page intent         | transaccion                                                                            | string           | Page View | 2            |
            | page segment        | personas                                                                               | string           | Page View | 2            |
            | page name           | app:privada:personas:cuentas:pagar servicio:2 referencia:error linea captura no valida | string           | Page View | 2            |
            | sysEnv              | app                                                                                    | string           | Page View | 2            |
            | channel             | online                                                                                 | string           | Page View | 2            |
            | language            | ES                                                                                     | string           | Page View | 2            |
            | level 1             | cuentas                                                                                | string           | Page View | 2            |
            | level 2             | pagar servicio                                                                         | string           | Page View | 2            |
            | level 3             | 2 referencia                                                                           | string           | Page View | 2            |
            | level 4             | error linea captura no valida                                                          | string           | Page View | 2            |
            | business unit       | BBVA Mexico                                                                            | string           | Page View | 2            |
            | site app name       | App BBVA Mexico                                                                        | string           | Page View | 2            |
            | project name        | Glomo                                                                                  | string           | Page View | 2            |
            | error page          | error linea captura no valida                                                          | string           | Page View | 2            |
            | page area           | privada                                                                                | string           | Page View | 2            |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                                 | string           | Page View | 2            |
            | device mobile       | si                                                                                     | string           | Page View | 2            |
            | device root         | no root                                                                                | string           | Page View | 2            |
            | user userState      | logado                                                                                 | string           | Page View | 2            |
            | user segment global | 003001                                                                                 | string           | Page View | 2            |
            | user gender         | gender                                                                                 | regexp named     | Page View | 2            |
            | user age            | age                                                                                    | regexp named     | Page View | 2            |
            | application name    |                                                                                        | empty str object | Page View | 2            |
            | login type          |                                                                                        | string           | Page View | 2            |
            | application step    |                                                                                        | string           | Page View | 2            |
            | fulfillment model   |                                                                                        | string           | Page View | 2            |
            | global application  |                                                                                        | string           | Page View | 2            |

    @ANA_EVENT_BPD015
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS App Step 3 - Amount
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        When the user selects the service "liverpool" with reference "1234567890123456" and accepts modal
        Then the analytics events contains the following variables
            | item                     | value                                               | type         | event      |
            | analytics                | analytics/glomo_base                                | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                        | string       | App Step 3 |
            | page intent              | transaccion                                         | string       | App Step 3 |
            | page segment             | personas                                            | string       | App Step 3 |
            | page name                | app:privada:personas:cuentas:pagar servicio:3 monto | string       | App Step 3 |
            | sysEnv                   | app                                                 | string       | App Step 3 |
            | channel                  | online                                              | string       | App Step 3 |
            | language                 | ES                                                  | string       | App Step 3 |
            | level 1                  | cuentas                                             | string       | App Step 3 |
            | level 2                  | pagar servicio                                      | string       | App Step 3 |
            | level 3                  | 3 monto                                             | string       | App Step 3 |
            | business unit            | BBVA Mexico                                         | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                     | string       | App Step 3 |
            | project name             | Glomo                                               | string       | App Step 3 |
            | page area                | privada                                             | string       | App Step 3 |
            | device user agent        | GLOMO_MX/99.99.99 (Android;14;Samsung)              | string       | App Step 3 |
            | device mobile            | si                                                  | string       | App Step 3 |
            | device root              | no root                                             | string       | App Step 3 |
            | user userState           | logado                                              | string       | App Step 3 |
            | user segment global      | 003001                                              | string       | App Step 3 |
            | user gender              | gender                                              | regexp named | App Step 3 |
            | user age                 | age                                                 | regexp named | App Step 3 |
            | product primary category | servicios                                           | string       | App Step 3 |
            | product payment type     | 1234567890123456                                    | string       | App Step 3 |
            | fulfillment model        | online                                              | string       | App Step 3 |
            | application process      | dashboard operativas                                | string       | App Step 3 |
            | application type         | operativa                                           | string       | App Step 3 |
            | application name         | pagar servicio                                      | string       | App Step 3 |
            | application step         | 3 monto                                             | string       | App Step 3 |
            | global application       | bill payments                                       | string       | App Step 3 |

    @ANA_EVENT_BPD016
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Internal Link - Edit Service in amount
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user selects the service "cdmx" with reference "84118XXU73BDYD6KF6A1" and accepts modal
        And the analytics interceptor service is initiated
        When the user change the selected service
        Then the analytics events contains the following variables
            | item                | value                                               | type         | event         |
            | analytics           | analytics/glomo_base                                | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                        | string       | Internal Link |
            | page intent         | transaccion                                         | string       | Internal Link |
            | page segment        | personas                                            | string       | Internal Link |
            | page name           | app:privada:personas:cuentas:pagar servicio:3 monto | string       | Internal Link |
            | sysEnv              | app                                                 | string       | Internal Link |
            | channel             | online                                              | string       | Internal Link |
            | language            | ES                                                  | string       | Internal Link |
            | level 1             | cuentas                                             | string       | Internal Link |
            | level 2             | pagar servicio                                      | string       | Internal Link |
            | level 3             | 3 monto                                             | string       | Internal Link |
            | business unit       | BBVA Mexico                                         | string       | Internal Link |
            | site app name       | App BBVA Mexico                                     | string       | Internal Link |
            | project name        | Glomo                                               | string       | Internal Link |
            | page area           | privada                                             | string       | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)              | string       | Internal Link |
            | link name           | modificar servicio                                  | string       | Internal Link |
            | device mobile       | si                                                  | string       | Internal Link |
            | device root         | no root                                             | string       | Internal Link |
            | user userState      | logado                                              | string       | Internal Link |
            | user segment global | 003001                                              | string       | Internal Link |
            | user gender         | gender                                              | regexp named | Internal Link |
            | user age            | age                                                 | regexp named | Internal Link |
            | fulfillment model   |                                                     | string       | Internal Link |

    @ANA_EVENT_BPD017
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Page View - Invalid capture line on amount
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the user accepts the onboarding bill payments dashboard
        And the analytics interceptor service is initiated
        When the user selects the service "cdmx" with reference "01564030208901240330" up to the amount
        Then the analytics events contains the following variables
            | item                | value                                                                             | type             | event     | event number |
            | analytics           | analytics/glomo_base                                                              | json schema      | Page View | 2            |
            | version DL          | 20250414_5.0                                                                      | string           | Page View | 2            |
            | page intent         | transaccion                                                                       | string           | Page View | 2            |
            | page segment        | personas                                                                          | string           | Page View | 2            |
            | page name           | app:privada:personas:cuentas:pagar servicio:3 monto:error linea captura no valida | string           | Page View | 2            |
            | sysEnv              | app                                                                               | string           | Page View | 2            |
            | channel             | online                                                                            | string           | Page View | 2            |
            | language            | ES                                                                                | string           | Page View | 2            |
            | level 1             | cuentas                                                                           | string           | Page View | 2            |
            | level 2             | pagar servicio                                                                    | string           | Page View | 2            |
            | level 3             | 3 monto                                                                           | string           | Page View | 2            |
            | level 4             | error linea captura no valida                                                     | string           | Page View | 2            |
            | business unit       | BBVA Mexico                                                                       | string           | Page View | 2            |
            | site app name       | App BBVA Mexico                                                                   | string           | Page View | 2            |
            | project name        | Glomo                                                                             | string           | Page View | 2            |
            | error page          | linea captura no valida                                                           | string           | Page View | 2            |
            | page area           | privada                                                                           | string           | Page View | 2            |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                            | string           | Page View | 2            |
            | device mobile       | si                                                                                | string           | Page View | 2            |
            | device root         | no root                                                                           | string           | Page View | 2            |
            | user userState      | logado                                                                            | string           | Page View | 2            |
            | user segment global | 003001                                                                            | string           | Page View | 2            |
            | user gender         | gender                                                                            | regexp named     | Page View | 2            |
            | user age            | age                                                                               | regexp named     | Page View | 2            |
            | application name    |                                                                                   | empty str object | Page View | 2            |

    @ANA_EVENT_BPD018
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Page View - Error on amount
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the user accepts the onboarding bill payments dashboard
        And the analytics interceptor service is initiated
        When the user selects the service "cdmx" with reference "01564030208901240330" up to the amount
        Then the analytics events contains the following variables
            | item                | value                                                                        | type             | event     | event number |
            | analytics           | analytics/glomo_base                                                         | json schema      | Page View | 2            |
            | version DL          | 20250414_5.0                                                                 | string           | Page View | 2            |
            | page intent         | transaccion                                                                  | string           | Page View | 2            |
            | page segment        | personas                                                                     | string           | Page View | 2            |
            | page name           | app:privada:personas:cuentas:pagar servicio:3 monto:error importe incorrecto | string           | Page View | 2            |
            | sysEnv              | app                                                                          | string           | Page View | 2            |
            | channel             | online                                                                       | string           | Page View | 2            |
            | language            | ES                                                                           | string           | Page View | 2            |
            | level 1             | cuentas                                                                      | string           | Page View | 2            |
            | level 2             | pagar servicio                                                               | string           | Page View | 2            |
            | level 3             | 3 monto                                                                      | string           | Page View | 2            |
            | level 4             | error importe incorrecto                                                     | string           | Page View | 2            |
            | business unit       | BBVA Mexico                                                                  | string           | Page View | 2            |
            | site app name       | App BBVA Mexico                                                              | string           | Page View | 2            |
            | project name        | Glomo                                                                        | string           | Page View | 2            |
            | error page          | error importe incorrecto                                                     | string           | Page View | 2            |
            | page area           | privada                                                                      | string           | Page View | 2            |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                       | string           | Page View | 2            |
            | device mobile       | si                                                                           | string           | Page View | 2            |
            | device root         | no root                                                                      | string           | Page View | 2            |
            | user userState      | logado                                                                       | string           | Page View | 2            |
            | user segment global | 003001                                                                       | string           | Page View | 2            |
            | user gender         | gender                                                                       | regexp named     | Page View | 2            |
            | user age            | age                                                                          | regexp named     | Page View | 2            |
            | application name    |                                                                              | empty str object | Page View | 2            |
            | application step    |                                                                              | string           | Page View | 2            |

    @ANA_EVENT_BPD019
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS App Step 4 - Origin
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        When the user select "liverpool" with reference "1234567890123456" and amount "338"
        Then the analytics events contains the following variables
            | item                      | value                                                 | type          | event      |
            | analytics                 | analytics/glomo_base                                  | json schema   | App Step 4 |
            | version DL                | 20250414_5.0                                          | string        | App Step 4 |
            | page intent               | transaccion                                           | string        | App Step 4 |
            | page segment              | personas                                              | string        | App Step 4 |
            | page name                 | app:privada:personas:cuentas:pagar servicio:4 origen  | string        | App Step 4 |
            | sysEnv                    | app                                                   | string        | App Step 4 |
            | channel                   | online                                                | string        | App Step 4 |
            | language                  | ES                                                    | string        | App Step 4 |
            | level 1                   | cuentas                                               | string        | App Step 4 |
            | level 2                   | pagar servicio                                        | string        | App Step 4 |
            | level 3                   | 4 origen                                              | string        | App Step 4 |
            | business unit             | BBVA Mexico                                           | string        | App Step 4 |
            | site app name             | App BBVA Mexico                                       | string        | App Step 4 |
            | project name              | Glomo                                                 | string        | App Step 4 |
            | page area                 | privada                                               | string        | App Step 4 |
            | device user agent         | GLOMO_MX/99.99.99 (Android;14;Samsung)                | string        | App Step 4 |
            | device mobile             | si                                                    | string        | App Step 4 |
            | device root               | no root                                               | string        | App Step 4 |
            | user userState            | logado                                                | string        | App Step 4 |
            | user segment global       | 003001                                                | string        | App Step 4 |
            | user gender               | gender                                                | regexp named  | App Step 4 |
            | user age                  | age                                                   | regexp named  | App Step 4 |
            | product primary category  | cuentas                                               | string        | App Step 4 |
            | product primary category 1| servicios                                             | string        | App Step 4 |
            | product primary category 2| tarjetas                                              | string        | App Step 4 |
            | product subtype           | 0230                                                  | string        | App Step 4 |
            | product name              | Cuenta de Ahorro                                      | string        | App Step 4 |
            | product amount            | 338                                                   | number        | App Step 4 |
            | product currency          | MXN                                                   | string        | App Step 4 |
            | product payment amount    | 338                                                   | number        | App Step 4 |
            | product number of payments| 0                                                     | number        | App Step 4 |
            | fulfillment model         | online                                                | string        | App Step 4 |
            | application process       | dashboard operativas                                  | string        | App Step 4 |
            | application type          | operativa                                             | string        | App Step 4 |
            | application name          | pagar servicio                                        | string        | App Step 4 |
            | application step          | 4 origen                                              | string        | App Step 4 |
            | global application        | bill payments                                         | string        | App Step 4 |

    @ANA_EVENT_BPD020
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Internal Link - Edit Service in origin
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the analytics interceptor service is initiated
        When the user change the origin after selected service "cdmx" with reference "84118XXU73BDYD6KF6A1" to step "only service"
        Then the analytics events contains the following variables
            | item                | value                                                | type         | event         |
            | analytics           | analytics/glomo_base                                 | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                         | string       | Internal Link |
            | page intent         | transaccion                                          | string       | Internal Link |
            | page segment        | personas                                             | string       | Internal Link |
            | page name           | app:privada:personas:cuentas:pagar servicio:4 origen | string       | Internal Link |
            | sysEnv              | app                                                  | string       | Internal Link |
            | channel             | online                                               | string       | Internal Link |
            | language            | ES                                                   | string       | Internal Link |
            | level 1             | cuentas                                              | string       | Internal Link |
            | level 2             | pagar servicio                                       | string       | Internal Link |
            | level 3             | 4 origen                                             | string       | Internal Link |
            | business unit       | BBVA Mexico                                          | string       | Internal Link |
            | site app name       | App BBVA Mexico                                      | string       | Internal Link |
            | project name        | Glomo                                                | string       | Internal Link |
            | page area           | privada                                              | string       | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)               | string       | Internal Link |
            | link name           | modificar servicio                                   | string       | Internal Link |
            | device mobile       | si                                                   | string       | Internal Link |
            | device root         | no root                                              | string       | Internal Link |
            | user userState      | logado                                               | string       | Internal Link |
            | user segment global | 003001                                               | string       | Internal Link |
            | user gender         | gender                                               | regexp named | Internal Link |
            | user age            | age                                                  | regexp named | Internal Link |
            | fulfillment model   |                                                      | string       | Internal Link |

    @ANA_EVENT_BPD021
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Internal Link - Edit Amount in origin
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the analytics interceptor service is initiated
        When the user change the origin after selected service "cdmx" with reference "84118XXU73BDYD6KF6A1" to step "second"
        Then the analytics events contains the following variables
            | item                | value                                                | type         | event         |
            | analytics           | analytics/glomo_base                                 | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                         | string       | Internal Link |
            | page intent         | transaccion                                          | string       | Internal Link |
            | page segment        | personas                                             | string       | Internal Link |
            | page name           | app:privada:personas:cuentas:pagar servicio:4 origen | string       | Internal Link |
            | sysEnv              | app                                                  | string       | Internal Link |
            | channel             | online                                               | string       | Internal Link |
            | language            | ES                                                   | string       | Internal Link |
            | level 1             | cuentas                                              | string       | Internal Link |
            | level 2             | pagar servicio                                       | string       | Internal Link |
            | level 3             | 4 origen                                             | string       | Internal Link |
            | business unit       | BBVA Mexico                                          | string       | Internal Link |
            | site app name       | App BBVA Mexico                                      | string       | Internal Link |
            | project name        | Glomo                                                | string       | Internal Link |
            | page area           | privada                                              | string       | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)               | string       | Internal Link |
            | link name           | modificar monto                                      | string       | Internal Link |
            | device mobile       | si                                                   | string       | Internal Link |
            | device root         | no root                                              | string       | Internal Link |
            | user userState      | logado                                               | string       | Internal Link |
            | user segment global | 003001                                               | string       | Internal Link |
            | user gender         | gender                                               | regexp named | Internal Link |
            | user age            | age                                                  | regexp named | Internal Link |
            | fulfillment model   |                                                      | string       | Internal Link |

    @ANA_EVENT_BPD022
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS App Step 5 - Concept
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        When the user selects the service "liverpool" with reference "1234567890123456" up to the concept
        Then the analytics events contains the following variables
            | item                          | value                                                     | type          | event      |
            | analytics                     | analytics/glomo_base                                      | json schema   | App Step 5 |
            | version DL                    | 20250414_5.0                                              | string        | App Step 5 |
            | page intent                   | transaccion                                               | string        | App Step 5 |
            | page segment                  | personas                                                  | string        | App Step 5 |
            | page name                     | app:privada:personas:cuentas:pagar servicio:5 concepto    | string        | App Step 5 |
            | sysEnv                        | app                                                       | string        | App Step 5 |
            | channel                       | online                                                    | string        | App Step 5 |
            | language                      | ES                                                        | string        | App Step 5 |
            | level 1                       | cuentas                                                   | string        | App Step 5 |
            | level 2                       | pagar servicio                                            | string        | App Step 5 |
            | level 3                       | 5 concepto                                                | string        | App Step 5 |
            | business unit                 | BBVA Mexico                                               | string        | App Step 5 |
            | site app name                 | App BBVA Mexico                                           | string        | App Step 5 |
            | project name                  | Glomo                                                     | string        | App Step 5 |
            | page area                     | privada                                                   | string        | App Step 5 |
            | device user agent             | GLOMO_MX/99.99.99 (Android;14;Samsung)                    | string        | App Step 5 |
            | device mobile                 | si                                                        | string        | App Step 5 |
            | device root                   | no root                                                   | string        | App Step 5 |
            | user userState                | logado                                                    | string        | App Step 5 |
            | user segment global           | 003001                                                    | string        | App Step 5 |
            | user gender                   | gender                                                    | regexp named  | App Step 5 |
            | user age                      | age                                                       | regexp named  | App Step 5 |
            | product primary category      | cuentas                                                   | string        | App Step 5 |
            | product primary category 1    | tarjetas                                                  | string        | App Step 5 |
            | product primary category 2    | servicios                                                 | string        | App Step 5 |
            | product subtype               | 0230                                                      | string        | App Step 5 |
            | product subtype 1             | CREDIT_CARD                                               | string        | App Step 5 |
            | product name                  | Cuenta de Ahorro                                          | string        | App Step 5 |
            | product name 1                | AZUL BBVA                                                 | string        | App Step 5 |
            | product amount                | 338                                                       | number        | App Step 5 |
            | product amount 1              | 338                                                       | number        | App Step 5 |
            | product currency              | MXN                                                       | string        | App Step 5 |
            | product currency 1            | MXN                                                       | string        | App Step 5 |
            | product payment amount        | 338                                                       | number        | App Step 5 |
            | product payment amount 1      | 338                                                       | number        | App Step 5 |
            | product number of payments    | 0                                                         | number        | App Step 5 |
            | product number of payments 1  | 0                                                         | number        | App Step 5 |
            | fulfillment model             | online                                                    | string        | App Step 5 |
            | application process           | dashboard operativas                                      | string        | App Step 5 |
            | application type              | operativa                                                 | string        | App Step 5 |
            | application name              | pagar servicio                                            | string        | App Step 5 |
            | application step              | 5 concepto                                                | string        | App Step 5 |
            | global application            | bill payments                                             | string        | App Step 5 |
            | custom fields                 | opcion pago:un solo pago                                  | string        | App Step 5 |

    @ANA_EVENT_BPD023
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Internal Link - Edit Service in Concept
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user selects the service "sears" with reference "123456789" up to the concept
        And the analytics interceptor service is initiated
        When the user decides edit the "only service" step of service "sears" with reference "123456789"
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event         |
            | analytics           | analytics/glomo_base                                   | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                           | string       | Internal Link |
            | page intent         | transaccion                                            | string       | Internal Link |
            | page segment        | personas                                               | string       | Internal Link |
            | page name           | app:privada:personas:cuentas:pagar servicio:5 concepto | string       | Internal Link |
            | sysEnv              | app                                                    | string       | Internal Link |
            | channel             | online                                                 | string       | Internal Link |
            | language            | ES                                                     | string       | Internal Link |
            | level 1             | cuentas                                                | string       | Internal Link |
            | level 2             | pagar servicio                                         | string       | Internal Link |
            | level 3             | 5 concepto                                             | string       | Internal Link |
            | business unit       | BBVA Mexico                                            | string       | Internal Link |
            | site app name       | App BBVA Mexico                                        | string       | Internal Link |
            | project name        | Glomo                                                  | string       | Internal Link |
            | page area           | privada                                                | string       | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                 | string       | Internal Link |
            | link name           | modificar servicio                                     | string       | Internal Link |
            | device mobile       | si                                                     | string       | Internal Link |
            | device root         | no root                                                | string       | Internal Link |
            | user userState      | logado                                                 | string       | Internal Link |
            | user segment global | 003001                                                 | string       | Internal Link |
            | user gender         | gender                                                 | regexp named | Internal Link |
            | user age            | age                                                    | regexp named | Internal Link |
            | fulfillment model   |                                                        | string       | Internal Link |

    @ANA_EVENT_BPD024
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Internal Link - Edit Amount in Concept
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user selects the service "sears" with reference "123456789" up to the concept
        And the analytics interceptor service is initiated
        When the user decides edit the "second" step of service "sears" with reference "123456789"
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event         |
            | analytics           | analytics/glomo_base                                   | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                           | string       | Internal Link |
            | page intent         | transaccion                                            | string       | Internal Link |
            | page segment        | personas                                               | string       | Internal Link |
            | page name           | app:privada:personas:cuentas:pagar servicio:5 concepto | string       | Internal Link |
            | sysEnv              | app                                                    | string       | Internal Link |
            | channel             | online                                                 | string       | Internal Link |
            | language            | ES                                                     | string       | Internal Link |
            | level 1             | cuentas                                                | string       | Internal Link |
            | level 2             | pagar servicio                                         | string       | Internal Link |
            | level 3             | 5 concepto                                             | string       | Internal Link |
            | business unit       | BBVA Mexico                                            | string       | Internal Link |
            | site app name       | App BBVA Mexico                                        | string       | Internal Link |
            | project name        | Glomo                                                  | string       | Internal Link |
            | page area           | privada                                                | string       | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                 | string       | Internal Link |
            | link name           | modificar monto                                        | string       | Internal Link |
            | device mobile       | si                                                     | string       | Internal Link |
            | device root         | no root                                                | string       | Internal Link |
            | user userState      | logado                                                 | string       | Internal Link |
            | user segment global | 003001                                                 | string       | Internal Link |
            | user gender         | gender                                                 | regexp named | Internal Link |
            | user age            | age                                                    | regexp named | Internal Link |
            | fulfillment model   |                                                        | string       | Internal Link |

    @ANA_EVENT_BPD025
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Internal Link - Edit Origin in Concept
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user selects the service "sears" with reference "123456789" up to the concept
        And the analytics interceptor service is initiated
        When the user decides edit the "third" step of service "sears" with reference "123456789"
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event         |
            | analytics           | analytics/glomo_base                                   | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                           | string       | Internal Link |
            | page intent         | transaccion                                            | string       | Internal Link |
            | page segment        | personas                                               | string       | Internal Link |
            | page name           | app:privada:personas:cuentas:pagar servicio:5 concepto | string       | Internal Link |
            | sysEnv              | app                                                    | string       | Internal Link |
            | channel             | online                                                 | string       | Internal Link |
            | language            | ES                                                     | string       | Internal Link |
            | level 1             | cuentas                                                | string       | Internal Link |
            | level 2             | pagar servicio                                         | string       | Internal Link |
            | level 3             | 5 concepto                                             | string       | Internal Link |
            | business unit       | BBVA Mexico                                            | string       | Internal Link |
            | site app name       | App BBVA Mexico                                        | string       | Internal Link |
            | project name        | Glomo                                                  | string       | Internal Link |
            | page area           | privada                                                | string       | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                 | string       | Internal Link |
            | link name           | modificar origen                                       | string       | Internal Link |
            | device mobile       | si                                                     | string       | Internal Link |
            | device root         | no root                                                | string       | Internal Link |
            | user userState      | logado                                                 | string       | Internal Link |
            | user segment global | 003001                                                 | string       | Internal Link |
            | user gender         | gender                                                 | regexp named | Internal Link |
            | user age            | age                                                    | regexp named | Internal Link |
            | fulfillment model   |                                                        | string       | Internal Link |

    @ANA_EVENT_BPD026
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS App Step 6 - Summary
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        When the user select the summary service "liverpool" reference "1234567890123456" concept "myConcep"
        Then the analytics events contains the following variables
            | item                       | value                                                 | type         | event      |
            | analytics                  | analytics/glomo_base                                  | json schema  | App Step 6 |
            | version DL                 | 20250414_5.0                                          | string       | App Step 6 |
            | page intent                | transaccion                                           | string       | App Step 6 |
            | page segment               | personas                                              | string       | App Step 6 |
            | page name                  | app:privada:personas:cuentas:pagar servicio:6 resumen | string       | App Step 6 |
            | sysEnv                     | app                                                   | string       | App Step 6 |
            | channel                    | online                                                | string       | App Step 6 |
            | language                   | ES                                                    | string       | App Step 6 |
            | level 1                    | cuentas                                               | string       | App Step 6 |
            | level 2                    | pagar servicio                                        | string       | App Step 6 |
            | level 3                    | 6 resumen                                             | string       | App Step 6 |
            | business unit              | BBVA Mexico                                           | string       | App Step 6 |
            | site app name              | App BBVA Mexico                                       | string       | App Step 6 |
            | project name               | Glomo                                                 | string       | App Step 6 |
            | page area                  | privada                                               | string       | App Step 6 |
            | device user agent          | GLOMO_MX/99.99.99 (Android;14;Samsung)                | string       | App Step 6 |
            | device mobile              | si                                                    | string       | App Step 6 |
            | device root                | no root                                               | string       | App Step 6 |
            | user userState             | logado                                                | string       | App Step 6 |
            | user segment global        | 003001                                                | string       | App Step 6 |
            | user gender                | gender                                                | regexp named | App Step 6 |
            | user age                   | age                                                   | regexp named | App Step 6 |
            | product primary category   | cuentas                                               | string       | App Step 6 |
            | product primary category 1 | servicios                                             | string       | App Step 6 |
            | product primary category 2 | tarjetas                                              | string       | App Step 6 |
            | product subtype            | 0230                                                  | string       | App Step 6 |
            | product name               | Cuenta de Ahorro                                      | string       | App Step 6 |
            | product amount             | 338                                                   | number       | App Step 6 |
            | product currency           | MXN                                                   | string       | App Step 6 |
            | product payment amount     | 338                                                   | number       | App Step 6 |
            | product number of payments | 0                                                     | number       | App Step 6 |
            | fulfillment model          | online                                                | string       | App Step 6 |
            | application process        | dashboard operativas                                  | string       | App Step 6 |
            | application type           | operativa                                             | string       | App Step 6 |
            | application name           | pagar servicio                                        | string       | App Step 6 |
            | application step           | 6 resumen                                             | string       | App Step 6 |
            | global application         | bill payments                                         | string       | App Step 6 |
            | custom fields              | opcion pago:un solo pago                              | string       | App Step 6 |

    @ANA_EVENT_BPD027
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Internal Link - Edit Service in Summary
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user select the summary service "sears" reference "84118XXU73BDYD6KF6A1" concept "My Concept"
        And the analytics interceptor service is initiated
        When the user decides edit the "only service" step of service "sears" with reference "123456789"
        Then the analytics events contains the following variables
            | item                | value                                                 | type         | event         |
            | analytics           | analytics/glomo_base                                  | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                          | string       | Internal Link |
            | page intent         | transaccion                                           | string       | Internal Link |
            | page segment        | personas                                              | string       | Internal Link |
            | page name           | app:privada:personas:cuentas:pagar servicio:6 resumen | string       | Internal Link |
            | sysEnv              | app                                                   | string       | Internal Link |
            | channel             | online                                                | string       | Internal Link |
            | language            | ES                                                    | string       | Internal Link |
            | level 1             | cuentas                                               | string       | Internal Link |
            | level 2             | pagar servicio                                        | string       | Internal Link |
            | level 3             | 6 resumen                                             | string       | Internal Link |
            | business unit       | BBVA Mexico                                           | string       | Internal Link |
            | site app name       | App BBVA Mexico                                       | string       | Internal Link |
            | project name        | Glomo                                                 | string       | Internal Link |
            | page area           | privada                                               | string       | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                | string       | Internal Link |
            | link name           | modificar servicio                                    | string       | Internal Link |
            | device mobile       | si                                                    | string       | Internal Link |
            | device root         | no root                                               | string       | Internal Link |
            | user userState      | logado                                                | string       | Internal Link |
            | user segment global | 003001                                                | string       | Internal Link |
            | user gender         | gender                                                | regexp named | Internal Link |
            | user age            | age                                                   | regexp named | Internal Link |
            | fulfillment model   |                                                       | string       | Internal Link |

    @ANA_EVENT_BPD028
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Internal Link - modify amount
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        And the user select the summary service "liverpool" reference "1234567890123456" concept "myConcep"
        When the user deploys modify the "amount" step to bill payment
        Then the analytics events contains the following variables
            | item                | value                                                 | type         | event         |
            | analytics           | analytics/glomo_base                                  | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                          | string       | Internal Link |
            | page intent         | transaccion                                           | string       | Internal Link |
            | page segment        | personas                                              | string       | Internal Link |
            | page name           | app:privada:personas:cuentas:pagar servicio:6 resumen | string       | Internal Link |
            | sysEnv              | app                                                   | string       | Internal Link |
            | channel             | online                                                | string       | Internal Link |
            | language            | ES                                                    | string       | Internal Link |
            | level 1             | cuentas                                               | string       | Internal Link |
            | level 2             | pagar servicio                                        | string       | Internal Link |
            | level 3             | 6 resumen                                             | string       | Internal Link |
            | business unit       | BBVA Mexico                                           | string       | Internal Link |
            | site app name       | App BBVA Mexico                                       | string       | Internal Link |
            | project name        | Glomo                                                 | string       | Internal Link |
            | page area           | privada                                               | string       | Internal Link |
            | link name           | modificar monto                                       | string       | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                | string       | Internal Link |
            | device mobile       | si                                                    | string       | Internal Link |
            | device root         | no root                                               | string       | Internal Link |
            | user userState      | logado                                                | string       | Internal Link |
            | user segment global | 003001                                                | string       | Internal Link |
            | user gender         | gender                                                | regexp named | Internal Link |
            | user age            | age                                                   | regexp named | Internal Link |

    @ANA_EVENT_BPD029
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Internal Link - modify origin
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        And the user select the summary service "liverpool" reference "1234567890123456" concept "myConcep"
        When the user deploys modify the "origin" step to bill payment
        Then the analytics events contains the following variables
            | item                | value                                                 | type         | event         |
            | analytics           | analytics/glomo_base                                  | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                          | string       | Internal Link |
            | page intent         | transaccion                                           | string       | Internal Link |
            | page segment        | personas                                              | string       | Internal Link |
            | page name           | app:privada:personas:cuentas:pagar servicio:6 resumen | string       | Internal Link |
            | sysEnv              | app                                                   | string       | Internal Link |
            | channel             | online                                                | string       | Internal Link |
            | language            | ES                                                    | string       | Internal Link |
            | level 1             | cuentas                                               | string       | Internal Link |
            | level 2             | pagar servicio                                        | string       | Internal Link |
            | level 3             | 6 resumen                                             | string       | Internal Link |
            | business unit       | BBVA Mexico                                           | string       | Internal Link |
            | site app name       | App BBVA Mexico                                       | string       | Internal Link |
            | project name        | Glomo                                                 | string       | Internal Link |
            | page area           | privada                                               | string       | Internal Link |
            | link name           | modificar origen                                      | string       | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                | string       | Internal Link |
            | device mobile       | si                                                    | string       | Internal Link |
            | device root         | no root                                               | string       | Internal Link |
            | user userState      | logado                                                | string       | Internal Link |
            | user segment global | 003001                                                | string       | Internal Link |
            | user gender         | gender                                                | regexp named | Internal Link |
            | user age            | age                                                   | regexp named | Internal Link |

    @ANA_EVENT_BPD030
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Internal Link - modify concept
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        And the user select the summary service "liverpool" reference "1234567890123456" concept "myConcep"
        When the user deploys modify the "concept" step to bill payment
        Then the analytics events contains the following variables
            | item                | value                                                 | type         | event         |
            | analytics           | analytics/glomo_base                                  | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                          | string       | Internal Link |
            | page intent         | transaccion                                           | string       | Internal Link |
            | page segment        | personas                                              | string       | Internal Link |
            | page name           | app:privada:personas:cuentas:pagar servicio:6 resumen | string       | Internal Link |
            | sysEnv              | app                                                   | string       | Internal Link |
            | channel             | online                                                | string       | Internal Link |
            | language            | ES                                                    | string       | Internal Link |
            | level 1             | cuentas                                               | string       | Internal Link |
            | level 2             | pagar servicio                                        | string       | Internal Link |
            | level 3             | 6 resumen                                             | string       | Internal Link |
            | business unit       | BBVA Mexico                                           | string       | Internal Link |
            | site app name       | App BBVA Mexico                                       | string       | Internal Link |
            | project name        | Glomo                                                 | string       | Internal Link |
            | page area           | privada                                               | string       | Internal Link |
            | link name           | modificar concepto                                    | string       | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                | string       | Internal Link |
            | device mobile       | si                                                    | string       | Internal Link |
            | device root         | no root                                               | string       | Internal Link |
            | user userState      | logado                                                | string       | Internal Link |
            | user segment global | 003001                                                | string       | Internal Link |
            | user gender         | gender                                                | regexp named | Internal Link |
            | user age            | age                                                   | regexp named | Internal Link |

    @ANA_EVENT_BPD031
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Page View - Payment error on summary step
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the user accepts the onboarding bill payments dashboard
        And the analytics interceptor service is initiated
        When the user success payment in progress to "sears" reference "01564030208901240330" concept "nada"
        Then the analytics events contains the following variables
            | item                | value                                                                         | type             | event     |event number |
            | analytics           | analytics/glomo_base                                                          | json schema      | Page View |2            |
            | version DL          | 20250414_5.0                                                                  | string           | Page View |2            |
            | page intent         | transaccion                                                                   | string           | Page View |2            |
            | page segment        | personas                                                                      | string           | Page View |2            |
            | page name           | app:privada:personas:cuentas:pagar servicio:6 resumen:error pago no realizado | string           | Page View |2            |
            | sysEnv              | app                                                                           | string           | Page View |2            |
            | channel             | online                                                                        | string           | Page View |2            |
            | language            | ES                                                                            | string           | Page View |2            |
            | level 1             | cuentas                                                                       | string           | Page View |2            |
            | level 2             | pagar servicio                                                                | string           | Page View |2            |
            | level 3             | 6 resumen                                                                     | string           | Page View |2            |
            | level 4             | error pago no realizado                                                       | string           | Page View |2            |
            | business unit       | BBVA Mexico                                                                   | string           | Page View |2            |
            | site app name       | App BBVA Mexico                                                               | string           | Page View |2            |
            | project name        | Glomo                                                                         | string           | Page View |2            |
            | error page          | error pago no realizado                                                       | string           | Page View |2            |
            | page area           | privada                                                                       | string           | Page View |2            |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                        | string           | Page View |2            |
            | device mobile       | si                                                                            | string           | Page View |2            |
            | device root         | no root                                                                       | string           | Page View |2            |
            | user userState      | logado                                                                        | string           | Page View |2            |
            | user segment global | 003001                                                                        | string           | Page View |2            |
            | user gender         | gender                                                                        | regexp named     | Page View |2            |
            | user age            | age                                                                           | regexp named     | Page View |2            |
            | application name    |                                                                               | empty str object | Page View |2            |
            | application step    |                                                                               | string           | Page View | 2            |

    @ANA_EVENT_BPD032
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS App Completed - Reference Expired
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        When the user continue the summary service "radio" reference "5559047263503" concept "myConcep"
        Then the analytics events contains the following variables
            | item                       | value                                                      | type         | event         |
            | analytics                  | analytics/glomo_base                                       | json schema  | App Completed |
            | version DL                 | 20250414_5.0                                               | string       | App Completed |
            | page intent                | transaccion                                                | string       | App Completed |
            | page segment               | personas                                                   | string       | App Completed |
            | page name                  | app:privada:personas:cuentas:pagar servicio:pagina exitosa | string       | App Completed |
            | sysEnv                     | app                                                        | string       | App Completed |
            | channel                    | online                                                     | string       | App Completed |
            | language                   | ES                                                         | string       | App Completed |
            | level 1                    | cuentas                                                    | string       | App Completed |
            | level 2                    | pagar servicio                                             | string       | App Completed |
            | level 3                    | pagina exitosa                                             | string       | App Completed |
            | business unit              | BBVA Mexico                                                | string       | App Completed |
            | site app name              | App BBVA Mexico                                            | string       | App Completed |
            | project name               | Glomo                                                      | string       | App Completed |
            | page area                  | privada                                                    | string       | App Completed |
            | device user agent          | GLOMO_MX/99.99.99 (Android;14;Samsung)                     | string       | App Completed |
            | device mobile              | si                                                         | string       | App Completed |
            | device root                | no root                                                    | string       | App Completed |
            | user userState             | logado                                                     | string       | App Completed |
            | user segment global        | 003001                                                     | string       | App Completed |
            | user gender                | gender                                                     | regexp named | App Completed |
            | user age                   | age                                                        | regexp named | App Completed |
            | product primary category   | servicios                                                  | string       | App Completed |
            | product primary category 1 | cuentas                                                    | string       | App Completed |
            | product primary category 2 | tarjetas                                                   | string       | App Completed |
            | product payment type       | 5559047263503                                              | string       | App Completed |
            | fulfillment model          | online                                                     | string       | App Completed |
            | application process        | dashboard operativas                                       | string       | App Completed |
            | application type           | operativa                                                  | string       | App Completed |
            | application typology       | recibo vence pronto                                        | string       | App Completed |
            | application name           | pagar servicio                                             | string       | App Completed |
            | application step           | pagina exitosa                                             | string       | App Completed |
            | application state          | rechazado                                                  | string       | App Completed |
            | global application         | bill payments                                              | string       | App Completed |
            | custom fields              | opcion pago:un solo pago                                   | string       | App Completed |

    @ANA_EVENT_BPD033
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS App Step 7 - OTP
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        When the user continue the summary service "liverpool" reference "1234567890123456" concept "myConcep"
        Then the analytics events contains the following variables
            | item                          | value                                             | type          | event      |
            | analytics                     | analytics/glomo_base                              | json schema   | App Step 7 |
            | version DL                    | 20250414_5.0                                      | string        | App Step 7 |
            | page intent                   | transaccion                                       | string        | App Step 7 |
            | page segment                  | personas                                          | string        | App Step 7 |
            | page name                     | app:privada:personas:cuentas:pagar servicio:7 otp | string        | App Step 7 |
            | sysEnv                        | app                                               | string        | App Step 7 |
            | channel                       | online                                            | string        | App Step 7 |
            | language                      | ES                                                | string        | App Step 7 |
            | level 1                       | cuentas                                           | string        | App Step 7 |
            | level 2                       | pagar servicio                                    | string        | App Step 7 |
            | level 3                       | 7 otp                                             | string        | App Step 7 |
            | business unit                 | BBVA Mexico                                       | string        | App Step 7 |
            | site app name                 | App BBVA Mexico                                   | string        | App Step 7 |
            | project name                  | Glomo                                             | string        | App Step 7 |
            | page area                     | privada                                           | string        | App Step 7 |
            | device user agent             | GLOMO_MX/99.99.99 (Android;14;Samsung)            | string        | App Step 7 |
            | device mobile                 | si                                                | string        | App Step 7 |
            | device root                   | no root                                           | string        | App Step 7 |
            | user userState                | logado                                            | string        | App Step 7 |
            | user segment global           | 003001                                            | string        | App Step 7 |
            | user gender                   | gender                                            | regexp named  | App Step 7 |
            | user age                      | age                                               | regexp named  | App Step 7 |
            | product primary category      | tarjetas                                          | string        | App Step 7 |
            | product primary category 1    | cuentas                                           | string        | App Step 7 |
            | product primary category 2    | servicios                                         | string        | App Step 7 |
            | product subtype               | CREDIT_CARD                                       | string        | App Step 7 |
            | product subtype 1             | 0230                                              | string        | App Step 7 |
            | product name                  | AZUL BBVA                                         | string        | App Step 7 |
            | product name 1                | Cuenta de Ahorro                                  | string        | App Step 7 |
            | product amount                | 338                                               | number        | App Step 7 |
            | product amount 1              | 338                                               | number        | App Step 7 |
            | product currency              | MXN                                               | string        | App Step 7 |
            | product currency 1            | MXN                                               | string        | App Step 7 |
            | product payment amount        | 338                                               | number        | App Step 7 |
            | product payment amount 1      | 338                                               | number        | App Step 7 |
            | product number of payments    | 0                                                 | number        | App Step 7 |
            | product number of payments 1  | 0                                                 | number        | App Step 7 |
            | fulfillment model             | online                                            | string        | App Step 7 |
            | application process           | dashboard operativas                              | string        | App Step 7 |
            | application type              | operativa                                         | string        | App Step 7 |
            | application name              | pagar servicio                                    | string        | App Step 7 |
            | application step              | 7 otp                                             | string        | App Step 7 |
            | global application            | bill payments                                     | string        | App Step 7 |
            | custom fields                 | opcion pago:un solo pago                          | string        | App Step 7 |

    @ANA_EVENT_BPD034
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Page View - Capture line error on OTP
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the user accepts the onboarding bill payments dashboard
        And the analytics interceptor service is initiated
        And the user select payment of contributions "sipare" with reference
        When the user continue with the payment process
        Then the analytics events contains the following variables
            | item                | value                                                                              | type             | event     | event number |
            | analytics           | analytics/glomo_base                                                               | json schema      | Page View | 2            |
            | version DL          | 20250414_5.0                                                                       | string           | Page View | 2            |
            | page intent         | transaccion                                                                        | string           | Page View | 2            |
            | page segment        | personas                                                                           | string           | Page View | 2            |
            | page name           | app:privada:personas:cuentas:pagar servicio:7 otp:error linea de captura no valida | string           | Page View | 2            |
            | sysEnv              | app                                                                                | string           | Page View | 2            |
            | channel             | online                                                                             | string           | Page View | 2            |
            | language            | ES                                                                                 | string           | Page View | 2            |
            | level 1             | cuentas                                                                            | string           | Page View | 2            |
            | level 2             | pagar servicio                                                                     | string           | Page View | 2            |
            | level 3             | 7 otp                                                                              | string           | Page View | 2            |
            | level 4             | error linea de captura no valida                                                   | string           | Page View | 2            |
            | business unit       | BBVA Mexico                                                                        | string           | Page View | 2            |
            | site app name       | App BBVA Mexico                                                                    | string           | Page View | 2            |
            | project name        | Glomo                                                                              | string           | Page View | 2            |
            | error page          | error linea de captura no valida                                                   | string           | Page View | 2            |
            | page area           | privada                                                                            | string           | Page View | 2            |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                             | string           | Page View | 2            |
            | device mobile       | si                                                                                 | string           | Page View | 2            |
            | device root         | no root                                                                            | string           | Page View | 2            |
            | user userState      | logado                                                                             | string           | Page View | 2            |
            | user segment global | 003001                                                                             | string           | Page View | 2            |
            | user gender         | gender                                                                             | regexp named     | Page View | 2            |
            | user age            | age                                                                                | regexp named     | Page View | 2            |
            | application name    |                                                                                    | empty str object | Page View | 2            |
            | login type          |                                                                                    | string           | Page View | 2            |
            | application step    |                                                                                    | string           | Page View | 2            |
            | fulfillment model   |                                                                                    | string           | Page View | 2            |
            | global application  |                                                                                    | string           | Page View | 2            |

    @ANA_EVENT_BPD035
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS App Completed - Fraud Movement Error
        Given a user with the following criteria
            | criteria         |
            | aric fraud error |
        And the user attempts to access bill payments home
        And the user accepts the onboarding bill payments dashboard
        And the analytics interceptor service is initiated
        When the user finish a bill payment from dashboard service "sears" reference "1234567890" concept "myConcep"
        Then the analytics events contains the following variables
            | item                          | value                                                         | type          | event         |
            | analytics                     | analytics/glomo_base                                          | json schema   | App Completed |
            | version DL                    | 20250414_5.0                                                  | string        | App Completed |
            | page intent                   | transaccion                                                   | string        | App Completed |
            | page segment                  | personas                                                      | string        | App Completed |
            | page name                     | app:privada:personas:cuentas:pagar servicio:pagina exitosa    | string        | App Completed |
            | sysEnv                        | app                                                           | string        | App Completed |
            | channel                       | online                                                        | string        | App Completed |
            | language                      | ES                                                            | string        | App Completed |
            | level 1                       | cuentas                                                       | string        | App Completed |
            | level 2                       | pagar servicio                                                | string        | App Completed |
            | level 3                       | pagina exitosa                                                | string        | App Completed |
            | business unit                 | BBVA Mexico                                                   | string        | App Completed |
            | site app name                 | App BBVA Mexico                                               | string        | App Completed |
            | project name                  | Glomo                                                         | string        | App Completed |
            | page area                     | privada                                                       | string        | App Completed |
            | device user agent             | GLOMO_MX/99.99.99 (Android;14;Samsung)                        | string        | App Completed |
            | device mobile                 | si                                                            | string        | App Completed |
            | device root                   | no root                                                       | string        | App Completed |
            | user userState                | logado                                                        | string        | App Completed |
            | user segment global           | 003001                                                        | string        | App Completed |
            | user gender                   | gender                                                        | regexp named  | App Completed |
            | user age                      | age                                                           | regexp named  | App Completed |
            | product primary category      | tarjetas                                                      | string        | App Completed |
            | product primary category 1    | servicios                                                     | string        | App Completed |
            | product primary category 2    | cuentas                                                       | string        | App Completed |
            | product subtype               | CREDIT_CARD                                                   | string        | App Completed |
            | product name                  | RAYADOS BBVA                                                  | string        | App Completed |
            | product amount                | 338                                                           | number        | App Completed |
            | product currency              | MXN                                                           | string        | App Completed |
            | product payment amount        | 338                                                           | number        | App Completed |
            | product number of payments    | 0                                                             | number        | App Completed |
            | fulfillment model             | online                                                        | string        | App Completed |
            | application process           | dashboard operativas                                          | string        | App Completed |
            | application type              | operativa                                                     | string        | App Completed |
            | application typology          | requiere confirmacion                                         | string        | App Completed |
            | application name              | pagar servicio                                                | string        | App Completed |
            | application step              | pagina exitosa                                                | string        | App Completed |
            | application state             | en revision                                                   | string        | App Completed |
            | global application            | bill payments                                                 | string        | App Completed |
            | custom fields                 | opcion pago:un solo pago                                      | string        | App Completed |

    @ANA_EVENT_BPD036
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS App Completed - Payment in progress
        Given a user with the following criteria
            | criteria                    |
            | store and forward reference |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        When the user success payment in progress to "sky" reference "112233445678" concept "MyConcept"
        Then the analytics events contains the following variables
            | item                       | value                                                      | type         | event         |
            | analytics                  | analytics/glomo_base                                       | json schema  | App Completed |
            | version DL                 | 20250414_5.0                                               | string       | App Completed |
            | page intent                | transaccion                                                | string       | App Completed |
            | page segment               | personas                                                   | string       | App Completed |
            | page name                  | app:privada:personas:cuentas:pagar servicio:pagina exitosa | string       | App Completed |
            | sysEnv                     | app                                                        | string       | App Completed |
            | channel                    | online                                                     | string       | App Completed |
            | language                   | ES                                                         | string       | App Completed |
            | level 1                    | cuentas                                                    | string       | App Completed |
            | level 2                    | pagar servicio                                             | string       | App Completed |
            | level 3                    | pagina exitosa                                             | string       | App Completed |
            | business unit              | BBVA Mexico                                                | string       | App Completed |
            | site app name              | App BBVA Mexico                                            | string       | App Completed |
            | project name               | Glomo                                                      | string       | App Completed |
            | page area                  | privada                                                    | string       | App Completed |
            | device user agent          | GLOMO_MX/99.99.99 (Android;14;Samsung)                     | string       | App Completed |
            | device mobile              | si                                                         | string       | App Completed |
            | device root                | no root                                                    | string       | App Completed |
            | user userState             | logado                                                     | string       | App Completed |
            | user segment global        | 003001                                                     | string       | App Completed |
            | user gender                | gender                                                     | regexp named | App Completed |
            | user age                   | age                                                        | regexp named | App Completed |
            | product primary category   | servicios                                                  | string       | App Completed |
            | product primary category 1 | tarjetas                                                   | string       | App Completed |
            | product primary category 2 | cuentas                                                    | string       | App Completed |
            | product payment type       | 112233445678                                               | string       | App Completed |
            | fulfillment model          | online                                                     | string       | App Completed |
            | application process        | dashboard operativas                                       | string       | App Completed |
            | application type           | operativa                                                  | string       | App Completed |
            | application typology       | pago en proceso                                            | string       | App Completed |
            | application name           | pagar servicio                                             | string       | App Completed |
            | application step           | pagina exitosa                                             | string       | App Completed |
            | application state          | en revision                                                | string       | App Completed |
            | global application         | bill payments                                              | string       | App Completed |
            | custom fields              | opcion pago:un solo pago                                   | string       | App Completed |

    @ANA_EVENT_BPD037
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS App Completed - Payment success
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        When the user success payment in progress to "sears" reference "12345" concept "MyConcept"
        Then the analytics events contains the following variables
            | item                          | value                                                         | type          | event         |
            | analytics                     | analytics/glomo_base                                          | json schema   | App Completed |
            | version DL                    | 20250414_5.0                                                  | string        | App Completed |
            | page intent                   | transaccion                                                   | string        | App Completed |
            | page segment                  | personas                                                      | string        | App Completed |
            | page name                     | app:privada:personas:cuentas:pagar servicio:pagina exitosa    | string        | App Completed |
            | sysEnv                        | app                                                           | string        | App Completed |
            | channel                       | online                                                        | string        | App Completed |
            | language                      | ES                                                            | string        | App Completed |
            | level 1                       | cuentas                                                       | string        | App Completed |
            | level 2                       | pagar servicio                                                | string        | App Completed |
            | level 3                       | pagina exitosa                                                | string        | App Completed |
            | business unit                 | BBVA Mexico                                                   | string        | App Completed |
            | site app name                 | App BBVA Mexico                                               | string        | App Completed |
            | project name                  | Glomo                                                         | string        | App Completed |
            | page area                     | privada                                                       | string        | App Completed |
            | device user agent             | GLOMO_MX/99.99.99 (Android;14;Samsung)                        | string        | App Completed |
            | device mobile                 | si                                                            | string        | App Completed |
            | device root                   | no root                                                       | string        | App Completed |
            | user userState                | logado                                                        | string        | App Completed |
            | user segment global           | 003001                                                        | string        | App Completed |
            | user gender                   | gender                                                        | regexp named  | App Completed |
            | user age                      | age                                                           | regexp named  | App Completed |
            | product primary category      | cuentas                                                       | string        | App Completed |
            | product primary category 1    | tarjetas                                                      | string        | App Completed |
            | product primary category 2    | servicios                                                     | string        | App Completed |
            | product subtype               | 0230                                                          | string        | App Completed |
            | product name                  | Cuenta de Ahorro                                              | string        | App Completed |
            | product amount                | 338                                                           | number        | App Completed |
            | product amount 1              | 338                                                           | number        | App Completed |
            | product currency              | MXN                                                           | string        | App Completed |
            | product currency 1            | MXN                                                           | string        | App Completed |
            | product payment amount        | 338                                                           | number        | App Completed |
            | product payment amount 1      | 338                                                           | number        | App Completed |
            | product number of payments    | 0                                                             | number        | App Completed |
            | product number of payments 1  | 0                                                             | number        | App Completed |
            | fulfillment model             | online                                                        | string        | App Completed |
            | application process           | dashboard operativas                                          | string        | App Completed |
            | application type              | operativa                                                     | string        | App Completed |
            | application name              | pagar servicio                                                | string        | App Completed |
            | application step              | pagina exitosa                                                | string        | App Completed |
            | application state             | finalizado                                                    | string        | App Completed |
            | global application            | bill payments                                                 | string        | App Completed |
            | custom fields                 | opcion pago:un solo pago                                      | string        | App Completed |

    @ANA_EVENT_BPD038
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Internal Link - share
        Given a user with the following criteria
            | criteria                |
            | bill payments dashboard |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the analytics interceptor service is initiated
        When the user success payment in progress to "sears" reference "12345" concept "MyConcept" and shared service
        Then the analytics events contains the following variables
            | item                | value                                                      | type         | event         |
            | analytics           | analytics/glomo_base                                       | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                               | string       | Internal Link |
            | page intent         | transaccion                                                | string       | Internal Link |
            | page segment        | personas                                                   | string       | Internal Link |
            | page name           | app:privada:personas:cuentas:pagar servicio:pagina exitosa | string       | Internal Link |
            | sysEnv              | app                                                        | string       | Internal Link |
            | channel             | online                                                     | string       | Internal Link |
            | language            | ES                                                         | string       | Internal Link |
            | level 1             | cuentas                                                    | string       | Internal Link |
            | level 2             | pagar servicio                                             | string       | Internal Link |
            | level 3             | pagina exitosa                                             | string       | Internal Link |
            | business unit       | BBVA Mexico                                                | string       | Internal Link |
            | site app name       | App BBVA Mexico                                            | string       | Internal Link |
            | project name        | Glomo                                                      | string       | Internal Link |
            | page area           | privada                                                    | string       | Internal Link |
            | link name           | compartir                                                  | string       | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                     | string       | Internal Link |
            | device mobile       | si                                                         | string       | Internal Link |
            | device root         | no root                                                    | string       | Internal Link |
            | user userState      | logado                                                     | string       | Internal Link |
            | user segment global | 003001                                                     | string       | Internal Link |
            | user gender         | gender                                                     | regexp named | Internal Link |
            | user age            | age                                                        | regexp named | Internal Link |

    @ANA_EVENT_BPD039
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Page View - search without result
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the user accepts the onboarding bill payments dashboard
        And the analytics interceptor service is initiated
        And the user choose a new service
        When the user search "apple"
        Then the analytics events contains the following variables
            | item                | value                                                               | type             | event     | event number |
            | analytics           | analytics/glomo_base                                                | json schema      | Page View | 2            |
            | version DL          | 20250414_5.0                                                        | string           | Page View | 2            |
            | page intent         | transaccion                                                         | string           | Page View | 2            |
            | page segment        | personas                                                            | string           | Page View | 2            |
            | page name           | app:privada:personas:cuentas:pagar servicio:buscador sin resultados | string           | Page View | 2            |
            | sysEnv              | app                                                                 | string           | Page View | 2            |
            | channel             | online                                                              | string           | Page View | 2            |
            | language            | ES                                                                  | string           | Page View | 2            |
            | level 1             | cuentas                                                             | string           | Page View | 2            |
            | level 2             | pagar servicio                                                      | string           | Page View | 2            |
            | level 3             | buscador sin resultados                                             | string           | Page View | 2            |
            | business unit       | BBVA Mexico                                                         | string           | Page View | 2            |
            | site app name       | App BBVA Mexico                                                     | string           | Page View | 2            |
            | project name        | Glomo                                                               | string           | Page View | 2            |
            | page area           | privada                                                             | string           | Page View | 2            |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                              | string           | Page View | 2            |
            | device mobile       | si                                                                  | string           | Page View | 2            |
            | device root         | no root                                                              | string           | Page View | 2            |
            | user userState      | logado                                                              | string           | Page View | 2            |
            | user segment global | 003001                                                              | string           | Page View | 2            |
            | user gender         | gender                                                              | regexp named     | Page View | 2            |
            | user age            | age                                                                 | regexp named     | Page View | 2            |
            | application name    |                                                                     | empty str object | Page View | 2            |

    @ANA_EVENT_BPD040
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Page View - Payment option CDMX
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the analytics interceptor service is initiated
        When the user selects the "with points" payment option with reference "84118XXU73BDYD6KF6A1" up to the payment option
        Then the analytics events contains the following variables
            | item                | value                                                      | type             | event     | event number |
            | analytics           | analytics/glomo_base                                       | json schema      | Page View | 2            |
            | version DL          | 20250414_5.0                                               | string           | Page View | 2            |
            | page intent         | transaccion                                                | string           | Page View | 2            |
            | page segment        | personas                                                   | string           | Page View | 2            |
            | page name           | app:privada:personas:cuentas:pagar servicio:opcion de pago | string           | Page View | 2            |
            | sysEnv              | app                                                        | string           | Page View | 2            |
            | channel             | online                                                     | string           | Page View | 2            |
            | language            | ES                                                         | string           | Page View | 2            |
            | level 1             | cuentas                                                    | string           | Page View | 2            |
            | level 2             | pagar servicio                                             | string           | Page View | 2            |
            | level 3             | opcion de pago                                             | string           | Page View | 2            |
            | business unit       | BBVA Mexico                                                | string           | Page View | 2            |
            | site app name       | App BBVA Mexico                                            | string           | Page View | 2            |
            | project name        | Glomo                                                      | string           | Page View | 2            |
            | page area           | privada                                                    | string           | Page View | 2            |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                     | string           | Page View | 2            |
            | device mobile       | si                                                         | string           | Page View | 2            |
            | device root         | no root                                                    | string           | Page View | 2            |
            | user userState      | logado                                                     | string           | Page View | 2            |
            | user segment global | 003001                                                     | string           | Page View | 2            |
            | user gender         | gender                                                     | regexp named     | Page View | 2            |
            | user age            | age                                                        | regexp named     | Page View | 2            |
            | custom fields       | tarjetas:tarjetas credito:azul bbva                        | string           | Page View | 2            |
            | application name    |                                                            | empty str object | Page View | 2            |

    @ANA_EVENT_BPD041
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Page View - The user exit the process
        Given a user with the following criteria
            | criteria                        |
            | bill payments dashboard metrics |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        And the user selects the service "liverpool" with reference "1234567890123456" and accepts modal
        When the user exit process
        Then the analytics events contains the following variables
            | item                | value                                             | type             | event     | event number |
            | analytics           | analytics/glomo_base                              | json schema      | Page View | 2            |
            | version DL          | 20250414_5.0                                      | string           | Page View | 2            |
            | page intent         | transaccion                                       | string           | Page View | 2            |
            | page segment        | personas                                          | string           | Page View | 2            |
            | page name           | app:privada:personas:cuentas:pagar servicio:salir | string           | Page View | 2            |
            | sysEnv              | app                                               | string           | Page View | 2            |
            | channel             | online                                            | string           | Page View | 2            |
            | language            | ES                                                | string           | Page View | 2            |
            | level 1             | cuentas                                           | string           | Page View | 2            |
            | level 2             | pagar servicio                                    | string           | Page View | 2            |
            | level 3             | salir                                             | string           | Page View | 2            |
            | business unit       | BBVA Mexico                                       | string           | Page View | 2            |
            | site app name       | App BBVA Mexico                                   | string           | Page View | 2            |
            | project name        | Glomo                                             | string           | Page View | 2            |
            | page area           | privada                                           | string           | Page View | 2            |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)            | string           | Page View | 2            |
            | device mobile       | si                                                | string           | Page View | 2            |
            | device root         | no root                                           | string           | Page View | 2            |
            | user userState      | logado                                            | string           | Page View | 2            |
            | user segment global | 003001                                            | string           | Page View | 2            |
            | user gender         | gender                                            | regexp named     | Page View | 2            |
            | user age            | age                                               | regexp named     | Page View | 2            |
            | application name    |                                                   | empty str object | Page View | 2            |

    @ANA_EVENT_BPD042
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Internal Link - Click Exit Flow
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user selects the service "cdmx" with reference "84118XXU73BDYD6KF6A1" up to the amount
        And the analytics interceptor service is initiated
        When the user selects the modal and finish the flow
        Then the analytics events contains the following variables
            | item                | value                                             | type         | event         |
            | analytics           | analytics/glomo_base                              | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                      | string       | Internal Link |
            | page intent         | transaccion                                       | string       | Internal Link |
            | page segment        | personas                                          | string       | Internal Link |
            | page name           | app:privada:personas:cuentas:pagar servicio:salir | string       | Internal Link |
            | sysEnv              | app                                               | string       | Internal Link |
            | channel             | online                                            | string       | Internal Link |
            | language            | ES                                                | string       | Internal Link |
            | level 1             | cuentas                                           | string       | Internal Link |
            | level 2             | pagar servicio                                    | string       | Internal Link |
            | level 3             | salir                                             | string       | Internal Link |
            | business unit       | BBVA Mexico                                       | string       | Internal Link |
            | site app name       | App BBVA Mexico                                   | string       | Internal Link |
            | project name        | Glomo                                             | string       | Internal Link |
            | page area           | privada                                           | string       | Internal Link |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)            | string       | Internal Link |
            | link name           | salir                                             | string       | Internal Link |
            | device mobile       | si                                                | string       | Internal Link |
            | device root         | no root                                           | string       | Internal Link |
            | user userState      | logado                                            | string       | Internal Link |
            | user segment global | 003001                                            | string       | Internal Link |
            | user gender         | gender                                            | regexp named | Internal Link |
            | user age            | age                                               | regexp named | Internal Link |
            | fulfillment model   |                                                   | string       | Internal Link |

    @ANA_EVENT_BPD043
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Page View - Save Service
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user finish a cdmx bill payment with "84118XXU73BDYD6KF6A1" reference "760" amount "single payment" payment option
        And the analytics interceptor service is initiated
        When the user save "not save" service
        Then the analytics events contains the following variables
            | item                | value                                                                   | type             | event     |
            | analytics           | analytics/glomo_base                                                    | json schema      | Page View |
            | version DL          | 20250414_5.0                                                            | string           | Page View |
            | page intent         | transaccion                                                             | string           | Page View |
            | page segment        | personas                                                                | string           | Page View |
            | page name           | app:privada:personas:cuentas:pagar servicio:guardar servicio o impuesto | string           | Page View |
            | sysEnv              | app                                                                     | string           | Page View |
            | channel             | online                                                                  | string           | Page View |
            | language            | ES                                                                      | string           | Page View |
            | level 1             | cuentas                                                                 | string           | Page View |
            | level 2             | pagar servicio                                                          | string           | Page View |
            | level 3             | guardar servicio o impuesto                                             | string           | Page View |
            | business unit       | BBVA Mexico                                                             | string           | Page View |
            | site app name       | App BBVA Mexico                                                         | string           | Page View |
            | project name        | Glomo                                                                   | string           | Page View |
            | page area           | privada                                                                 | string           | Page View |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                  | string           | Page View |
            | device mobile       | si                                                                      | string           | Page View |
            | device root         | no root                                                                  | string           | Page View |
            | user userState      | logado                                                                  | string           | Page View |
            | user segment global | 003001                                                                  | string           | Page View |
            | user gender         | gender                                                                  | regexp named     | Page View |
            | user age            | age                                                                     | regexp named     | Page View |
            | application name    |                                                                         | empty str object | Page View |

    @ANA_EVENT_BPD044
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Internal Link - Save Service
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user finish a cdmx bill payment with "84118XXU73BDYD6KF6A1" reference "760" amount "single payment" payment option
        And the analytics interceptor service is initiated
        When the user save "save" service
        Then the analytics events contains the following variables
            | item                | value                                                                   | type         | event         | event number |
            | analytics           | analytics/glomo_base                                                    | json schema  | Internal Link | 1            |
            | version DL          | 20250414_5.0                                                            | string       | Internal Link | 1            |
            | page intent         | transaccion                                                             | string       | Internal Link | 1            |
            | page segment        | personas                                                                | string       | Internal Link | 1            |
            | page name           | app:privada:personas:cuentas:pagar servicio:guardar servicio o impuesto | string       | Internal Link | 1            |
            | sysEnv              | app                                                                     | string       | Internal Link | 1            |
            | channel             | online                                                                  | string       | Internal Link | 1            |
            | language            | ES                                                                      | string       | Internal Link | 1            |
            | level 1             | cuentas                                                                 | string       | Internal Link | 1            |
            | level 2             | pagar servicio                                                          | string       | Internal Link | 1            |
            | level 3             | guardar servicio o impuesto                                             | string       | Internal Link | 1            |
            | business unit       | BBVA Mexico                                                             | string       | Internal Link | 1            |
            | site app name       | App BBVA Mexico                                                         | string       | Internal Link | 1            |
            | project name        | Glomo                                                                   | string       | Internal Link | 1            |
            | page area           | privada                                                                 | string       | Internal Link | 1            |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                  | string       | Internal Link | 1            |
            | link name           | guardar                                                                 | string       | Internal Link | 1            |
            | device mobile       | si                                                                      | string       | Internal Link | 1            |
            | device root         | no root                                                                 | string       | Internal Link | 1            |
            | user userState      | logado                                                                  | string       | Internal Link | 1            |
            | user segment global | 003001                                                                  | string       | Internal Link | 1            |
            | user gender         | gender                                                                  | regexp named | Internal Link | 1            |
            | user age            | age                                                                     | regexp named | Internal Link | 1            |
            | fulfillment model   |                                                                         | string       | Internal Link | 1            |

    @ANA_EVENT_BPD045
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Page View - Error sipare no email
        Given a user with the following criteria
            | criteria               |
            | bill payments no email |
        And the user attempts to access bill payments home
        And the analytics interceptor service is initiated
        And the user accepts the onboarding bill payments dashboard
        And the user choose a new service
        When the user search and select "sipare"
        Then the analytics events contains the following variables
            | item                | value                                                                  | type             | event     | event number |
            | analytics           | analytics/glomo_base                                                   | json schema      | Page View | 2            |
            | version DL          | 20250414_5.0                                                           | string           | Page View | 2            |
            | page intent         | transaccion                                                            | string           | Page View | 2            |
            | page segment        | personas                                                               | string           | Page View | 2            |
            | page name           | app:privada:personas:cuentas:pagar servicio:error sin email registrado | string           | Page View | 2            |
            | sysEnv              | app                                                                    | string           | Page View | 2            |
            | channel             | online                                                                 | string           | Page View | 2            |
            | language            | ES                                                                     | string           | Page View | 2            |
            | level 1             | cuentas                                                                | string           | Page View | 2            |
            | level 2             | pagar servicio                                                         | string           | Page View | 2            |
            | level 3             | error sin email registrado                                             | string           | Page View | 2            |
            | business unit       | BBVA Mexico                                                            | string           | Page View | 2            |
            | site app name       | App BBVA Mexico                                                        | string           | Page View | 2            |
            | project name        | Glomo                                                                  | string           | Page View | 2            |
            | error page          | error sin email registrado                                             | string           | Page View | 2            |
            | page area           | privada                                                                | string           | Page View | 2            |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                 | string           | Page View | 2            |
            | device mobile       | si                                                                     | string           | Page View | 2            |
            | device root         | no root                                                                | string           | Page View | 2            |
            | user userState      | logado                                                                 | string           | Page View | 2            |
            | user segment global | 003001                                                                 | string           | Page View | 2            |
            | user gender         | gender                                                                 | regexp named     | Page View | 2            |
            | user age            | age                                                                    | regexp named     | Page View | 2            |
            | application name    |                                                                        | empty str object | Page View | 2            |

    @ANA_EVENT_BPD046
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Page View - Error Save Service
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user success payment in progress to "sears" reference "01564030208901240330" concept "My Concepto"
        And the analytics interceptor service is initiated
        When the user retry save service with alias "Hogar"
        Then the analytics events contains the following variables
            | item                | value                                                                                             | type             | event     | event number |
            | analytics           | analytics/glomo_base                                                                              | json schema      | Page View | 2            |
            | version DL          | 20250414_5.0                                                                                      | string           | Page View | 2            |
            | page intent         | transaccion                                                                                       | string           | Page View | 2            |
            | page segment        | personas                                                                                          | string           | Page View | 2            |
            | page name           | app:privada:personas:cuentas:pagar servicio:guardar servicio o impuesto:error tuvimos un problema | string           | Page View | 2            |
            | sysEnv              | app                                                                                               | string           | Page View | 2            |
            | channel             | online                                                                                            | string           | Page View | 2            |
            | language            | ES                                                                                                | string           | Page View | 2            |
            | level 1             | cuentas                                                                                           | string           | Page View | 2            |
            | level 2             | pagar servicio                                                                                    | string           | Page View | 2            |
            | level 3             | guardar servicio o impuesto                                                                       | string           | Page View | 2            |
            | level 4             | error tuvimos un problema                                                                         | string           | Page View | 2            |
            | business unit       | BBVA Mexico                                                                                       | string           | Page View | 2            |
            | site app name       | App BBVA Mexico                                                                                   | string           | Page View | 2            |
            | project name        | Glomo                                                                                             | string           | Page View | 2            |
            | error page          | error tuvimos un problema                                                                         | string           | Page View | 2            |
            | page area           | privada                                                                                           | string           | Page View | 2            |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                                                            | string           | Page View | 2            |
            | device mobile       | si                                                                                                | string           | Page View | 2            |
            | device root         | no root                                                                                           | string           | Page View | 2            |
            | user userState      | logado                                                                                            | string           | Page View | 2            |
            | user segment global | 003001                                                                                            | string           | Page View | 2            |
            | user gender         | gender                                                                                            | regexp named     | Page View | 2            |
            | user age            | age                                                                                               | regexp named     | Page View | 2            |
            | application name    |                                                                                                   | empty str object | Page View | 2            |

    @ANA_EVENT_BPD047
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Page View - Duplicate Alias
        Given a user with the following criteria
            | criteria                   |
            | bill payments              |
            | bill payments cdmx payment |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user success payment in progress to "sears" reference "01564030208901240330" concept "My Concepto"
        And the analytics interceptor service is initiated
        When the user save service with alias "Hogar"
        Then the analytics events contains the following variables
            | item                | value                                                             | type             | event     | event number |
            | analytics           | analytics/glomo_base                                              | json schema      | Page View | 2            |
            | version DL          | 20250414_5.0                                                      | string           | Page View | 2            |
            | page intent         | transaccion                                                       | string           | Page View | 2            |
            | page segment        | personas                                                          | string           | Page View | 2            |
            | page name           | app:privada:personas:cuentas:pagar servicio:error alias duplicado | string           | Page View | 2            |
            | sysEnv              | app                                                               | string           | Page View | 2            |
            | channel             | online                                                            | string           | Page View | 2            |
            | language            | ES                                                                | string           | Page View | 2            |
            | level 1             | cuentas                                                           | string           | Page View | 2            |
            | level 2             | pagar servicio                                                    | string           | Page View | 2            |
            | level 3             | error alias duplicado                                             | string           | Page View | 2            |
            | business unit       | BBVA Mexico                                                       | string           | Page View | 2            |
            | site app name       | App BBVA Mexico                                                   | string           | Page View | 2            |
            | project name        | Glomo                                                             | string           | Page View | 2            |
            | error page          | error alias duplicado                                             | string           | Page View | 2            |
            | page area           | privada                                                           | string           | Page View | 2            |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                            | string           | Page View | 2            |
            | device mobile       | si                                                                | string           | Page View | 2            |
            | device root         | no root                                                           | string           | Page View | 2            |
            | user userState      | logado                                                            | string           | Page View | 2            |
            | user segment global | 003001                                                            | string           | Page View | 2            |
            | user gender         | gender                                                            | regexp named     | Page View | 2            |
            | user age            | age                                                               | regexp named     | Page View | 2            |
            | application name    |                                                                   | empty str object | Page View | 2            |
            | application step    |                                                                   | string           | Page View | 2            |
            | login type          |                                                                   | string           | Page View | 2            |

    @ANA_EVENT_BPD048
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Page View - reuse operation footprint
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the analytics interceptor service is initiated
        When the user accesses the details of a movement from "detail product"
        Then the analytics events contains the following variables
            | item                | value                                                      | type             | event     |
            | analytics           | analytics/glomo_base                                       | json schema      | Page View |
            | version DL          | 20250414_5.0                                               | string           | Page View |
            | page intent         | transaccion                                                | string           | Page View |
            | page segment        | personas                                                   | string           | Page View |
            | page name           | app:privada:personas:cuentas:pagar servicio:pagina exitosa | string           | Page View |
            | sysEnv              | app                                                        | string           | Page View |
            | channel             | online                                                     | string           | Page View |
            | language            | ES                                                         | string           | Page View |
            | level 1             | cuentas                                                    | string           | Page View |
            | level 2             | pagar servicio                                             | string           | Page View |
            | level 3             | pagina exitosa                                             | string           | Page View |
            | business unit       | BBVA Mexico                                                | string           | Page View |
            | site app name       | App BBVA Mexico                                            | string           | Page View |
            | project name        | Glomo                                                      | string           | Page View |
            | page area           | privada                                                    | string           | Page View |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                     | string           | Page View |
            | device mobile       | si                                                         | string           | Page View |
            | device root         | no root                                                    | string           | Page View |
            | user userState      | logado                                                     | string           | Page View |
            | user segment global | 003001                                                     | string           | Page View |
            | user gender         | gender                                                     | regexp named     | Page View |
            | user age            | age                                                        | regexp named     | Page View |
            | application name    |                                                            | empty str object | Page View |

    @ANA_EVENT_BPD049
    @MX
    @analytics
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Bill Payments Dashboard ANALYTICS Page View - reuse operation
        Given a user with the following criteria
            | criteria               |
            | reuse operation detail |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the analytics interceptor service is initiated
        When the user wants to reuse an "service payments" operation
        Then the analytics events contains the following variables
            | item                | value                                                      | type             | event         | event number |
            | analytics           | analytics/glomo_base                                       | json schema      | Internal Link |1             |
            | version DL          | 20250414_5.0                                               | string           | Internal Link |1             |
            | page intent         | transaccion                                                | string           | Internal Link |1             |
            | page segment        | personas                                                   | string           | Internal Link |1             |
            | page name           | app:privada:personas:cuentas:pagar servicio:pagina exitosa | string           | Internal Link |1             |
            | sysEnv              | app                                                        | string           | Internal Link |1             |
            | channel             | online                                                     | string           | Internal Link |1             |
            | language            | ES                                                         | string           | Internal Link |1             |
            | level 1             | cuentas                                                    | string           | Internal Link |1             |
            | level 2             | pagar servicio                                             | string           | Internal Link |1             |
            | level 3             | pagina exitosa                                             | string           | Internal Link |1             |
            | business unit       | BBVA Mexico                                                | string           | Internal Link |1             |
            | site app name       | App BBVA Mexico                                            | string           | Internal Link |1             |
            | project name        | Glomo                                                      | string           | Internal Link |1             |
            | page area           | privada                                                    | string           | Internal Link |1             |
            | device user agent   | GLOMO_MX/99.99.99 (Android;14;Samsung)                     | string           | Internal Link |1             |
            | link name           | reutilizar operacion                                       | string           | Internal Link |1             |
            | device mobile       | si                                                         | string           | Internal Link |1             |
            | device root         | no root                                                    | string           | Internal Link |1             |
            | user userState      | logado                                                     | string           | Internal Link |1             |
            | user segment global | 003001                                                     | string           | Internal Link |1             |
            | user gender         | gender                                                     | regexp named     | Internal Link |1             |
            | user age            | age                                                        | regexp named     | Internal Link |1             |
            | fulfillment model   |                                                            | string           | Internal Link |1             |
