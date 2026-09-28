@investAdvisoryAnalytics @investAdvisoryPortfolioHiringAnalytics
Feature: Analytics - OC Investment Portfolio Hiring

    @ANA_EVENT_IAH001
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: CTA - Personalized Proposal
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user only accepts the assigned profile
        And the analytics interceptor service is initiated
        When the user starts the invest hiring process
        Then the analytics events contains the following variables
            | item                         | value                                                                    | type         | event              |
            | analytics                    | analytics/glomo_base                                                     | json schema  | App On Click Start |
            | version DL                   | 20250414_5.0                                                             | string       | App On Click Start |
            | page name                    | app:privada:personas:bbva invest perfilamiento:propuesta personalizada   | string       | App On Click Start |
            | level 1                      | bbva invest perfilamiento                                                | string       | App On Click Start |
            | level 2                      | propuesta personalizada                                                  | string       | App On Click Start |
            | language                     | ES                                                                       | string       | App On Click Start |
            | page area                    | privada                                                                  | string       | App On Click Start |
            | page intent                  | informacion                                                              | string       | App On Click Start |
            | channel                      | online                                                                   | string       | App On Click Start |
            | page instance ID             | de                                                                       | string       | App On Click Start |
            | page info version            | appVersion                                                               | regexp named | App On Click Start |
            | page segment                 | personas                                                                 | string       | App On Click Start |
            | sysEnv                       | app                                                                      | string       | App On Click Start |
            | business unit                | BBVA Mexico                                                              | string       | App On Click Start |
            | site app name                | App BBVA Mexico                                                          | string       | App On Click Start |
            | project name                 | Invest                                                                   | string       | App On Click Start |
            | device mobile                | si                                                                       | string       | App On Click Start |
            | user userState               | logado                                                                   | string       | App On Click Start |
            | user segment global          | 003001                                                                   | string       | App On Click Start |
            | profile ID                   | profileID                                                                | regexp named | App On Click Start |
            | user age                     | age                                                                      | regexp named | App On Click Start |
            | user gender                  | gender                                                                   | regexp named | App On Click Start |
            | global application           | investment service                                                       | string       | App On Click Start |
            | application name             | servicio inversion                                                       | string       | App On Click Start |
            | application type             | contratacion                                                             | string       | App On Click Start |
            | application step             | comenzar contratacion                                                    | string       | App On Click Start |
            | fulfillment model            | online/offline                                                           | string       | App On Click Start |
            | product primary category     | inversiones                                                              | string       | App On Click Start |
            | product subtype              | fondos inversion                                                         | string       | App On Click Start |

    @ANA_EVENT_IAH002
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: App page visit - Associated Accounts
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user accepts the assigned profile and start hiring
        Then the device contains the following variables
            | item                         | value                                                               | type         |
            | analytics                    | analytics/glomo_base                                                | json schema  |
            | version DL                   | 20250414_5.0                                                        | string       |
            | page name                    | app:privada:personas:bbva invest contratacion:1 cuentas asociadas   | string       |
            | level 1                      | bbva invest contratacion                                            | string       |
            | level 2                      | 1 cuentas asociadas                                                 | string       |
            | language                     | ES                                                                  | string       |
            | page area                    | privada                                                             | string       |
            | page intent                  | informacion                                                         | string       |
            | channel                      | online                                                              | string       |
            | page instance ID             | de                                                                  | string       |
            | page info version            | appVersion                                                          | regexp named |
            | page segment                 | personas                                                            | string       |
            | sysEnv                       | app                                                                 | string       |
            | business unit                | BBVA Mexico                                                         | string       |
            | site app name                | App BBVA Mexico                                                     | string       |
            | project name                 | Invest                                                              | string       |
            | device mobile                | si                                                                  | string       |
            | user userState               | logado                                                              | string       |
            | user segment global          | 003001                                                              | string       |
            | profile ID                   | profileID                                                           | regexp named |
            | user age                     | age                                                                 | regexp named |
            | user gender                  | gender                                                              | regexp named |
            | global application           | investment service                                                  | string       |
            | application name             | servicio inversion                                                  | string       |
            | application type             | contratacion                                                        | string       |
            | application step             | 1 cuentas asociadas                                                 | string       |
            | fulfillment model            | online/offline                                                      | string       |
            | product primary category     | inversiones                                                         | string       |
            | product subtype              | fondos inversion                                                    | string       |
            | qualified visits             | true                                                                | string       |

    @ANA_EVENT_IAH003
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: App Started - First interaction
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user accepts the assigned profile and start hiring
        And the analytics interceptor service is initiated
        When the user selects an account of his accounts
        Then the analytics events contains the following variables
            | item                         | value                                                               | type         | event       |
            | analytics                    | analytics/glomo_base                                                | json schema  | App Started |
            | version DL                   | 20250414_5.0                                                        | string       | App Started |
            | page name                    | app:privada:personas:bbva invest contratacion:1 cuentas asociadas   | string       | App Started |
            | level 1                      | bbva invest contratacion                                            | string       | App Started |
            | level 2                      | 1 cuentas asociadas                                                 | string       | App Started |
            | language                     | ES                                                                  | string       | App Started |
            | page area                    | privada                                                             | string       | App Started |
            | page intent                  | informacion                                                         | string       | App Started |
            | channel                      | online                                                              | string       | App Started |
            | page instance ID             | de                                                                  | string       | App Started |
            | page info version            | appVersion                                                          | regexp named | App Started |
            | page segment                 | personas                                                            | string       | App Started |
            | sysEnv                       | app                                                                 | string       | App Started |
            | business unit                | BBVA Mexico                                                         | string       | App Started |
            | site app name                | App BBVA Mexico                                                     | string       | App Started |
            | project name                 | Invest                                                              | string       | App Started |
            | device mobile                | si                                                                  | string       | App Started |
            | user userState               | logado                                                              | string       | App Started |
            | user segment global          | 003001                                                              | string       | App Started |
            | profile ID                   | profileID                                                           | regexp named | App Started |
            | user age                     | age                                                                 | regexp named | App Started |
            | user gender                  | gender                                                              | regexp named | App Started |
            | global application           | investment service                                                  | string       | App Started |
            | application name             | servicio inversion                                                  | string       | App Started |
            | application type             | contratacion                                                        | string       | App Started |
            | application step             | seleccionar cuenta                                                  | string       | App Started |
            | fulfillment model            | online/offline                                                      | string       | App Started |
            | product primary category     | inversiones                                                         | string       | App Started |
            | product subtype              | fondos inversion                                                    | string       | App Started |

    @ANA_EVENT_IAH004
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: App Step 2 - Terms and Conditions
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user accepts the "last" assigned profile, "starts" process "selects" from the proposal
        Then the device contains the following variables
            | item                         | value                                                                    | type         |
            | analytics                    | analytics/glomo_base                                                     | json schema  |
            | version DL                   | 20250414_5.0                                                             | string       |
            | page name                    | app:privada:personas:bbva invest contratacion:2 terminos y condiciones   | string       |
            | level 1                      | bbva invest contratacion                                                 | string       |
            | level 2                      | 2 terminos y condiciones                                                 | string       |
            | language                     | ES                                                                       | string       |
            | page area                    | privada                                                                  | string       |
            | page intent                  | informacion                                                              | string       |
            | channel                      | online                                                                   | string       |
            | page instance ID             | de                                                                       | string       |
            | page info version            | appVersion                                                               | regexp named |
            | page segment                 | personas                                                                 | string       |
            | sysEnv                       | app                                                                      | string       |
            | business unit                | BBVA Mexico                                                              | string       |
            | site app name                | App BBVA Mexico                                                          | string       |
            | project name                 | Invest                                                                   | string       |
            | device mobile                | si                                                                       | string       |
            | user userState               | logado                                                                   | string       |
            | user segment global          | 003001                                                                   | string       |
            | profile ID                   | profileID                                                                | regexp named |
            | user age                     | age                                                                      | regexp named |
            | user gender                  | gender                                                                   | regexp named |
            | global application           | investment service                                                       | string       |
            | application name             | servicio inversion                                                       | string       |
            | application type             | contratacion                                                             | string       |
            | application step             | 2 terminos y condiciones                                                 | string       |
            | fulfillment model            | online/offline                                                           | string       |
            | product primary category     | inversiones                                                              | string       |
            | product subtype              | fondos inversion                                                         | string       |

    @ANA_EVENT_IAH005
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: App Step 3 - Confirmation
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user accepts the "last" assigned profile, "starts" process "selects" from the proposal
        And the analytics interceptor service is initiated
        When the user "checks" the terms and conditions
        Then the analytics events contains the following variables
            | item                         | value                                                          | type         | event      |
            | analytics                    | analytics/glomo_base                                           | json schema  | App Step 3 |
            | version DL                   | 20250414_5.0                                                   | string       | App Step 3 |
            | page name                    | app:privada:personas:bbva invest contratacion:3 confirmacion   | string       | App Step 3 |
            | level 1                      | bbva invest contratacion                                       | string       | App Step 3 |
            | level 2                      | 3 confirmacion                                                 | string       | App Step 3 |
            | language                     | ES                                                             | string       | App Step 3 |
            | page area                    | privada                                                        | string       | App Step 3 |
            | page intent                  | informacion                                                    | string       | App Step 3 |
            | channel                      | online                                                         | string       | App Step 3 |
            | page instance ID             | de                                                             | string       | App Step 3 |
            | page info version            | appVersion                                                     | regexp named | App Step 3 |
            | page segment                 | personas                                                       | string       | App Step 3 |
            | sysEnv                       | app                                                            | string       | App Step 3 |
            | business unit                | BBVA Mexico                                                    | string       | App Step 3 |
            | site app name                | App BBVA Mexico                                                | string       | App Step 3 |
            | project name                 | Invest                                                         | string       | App Step 3 |
            | device mobile                | si                                                             | string       | App Step 3 |
            | user userState               | logado                                                         | string       | App Step 3 |
            | user segment global          | 003001                                                         | string       | App Step 3 |
            | profile ID                   | profileID                                                      | regexp named | App Step 3 |
            | user age                     | age                                                            | regexp named | App Step 3 |
            | user gender                  | gender                                                         | regexp named | App Step 3 |
            | global application           | investment service                                             | string       | App Step 3 |
            | application name             | servicio inversion                                             | string       | App Step 3 |
            | application type             | contratacion                                                   | string       | App Step 3 |
            | application step             | 3 confirmacion                                                 | string       | App Step 3 |
            | fulfillment model            | online/offline                                                 | string       | App Step 3 |
            | product primary category     | inversiones                                                    | string       | App Step 3 |
            | product subtype              | fondos inversion                                               | string       | App Step 3 |
            | product amount               | 20000                                                          | number       | App Step 3 |
            | product currency             | MXN                                                            | string       | App Step 3 |

    @ANA_EVENT_IAH006
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: App Step 4 - OTP
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user "concretes" the investment hiring process
        And the analytics interceptor service is initiated
        When the user proceeds to investment confirmation modal
        Then the analytics events contains the following variables
            | item                         | value                                                 | type         | event      |
            | analytics                    | analytics/glomo_base                                  | json schema  | App Step 4 |
            | version DL                   | 20250414_5.0                                          | string       | App Step 4 |
            | page name                    | app:privada:personas:bbva invest contratacion:4 otp   | string       | App Step 4 |
            | level 1                      | bbva invest contratacion                              | string       | App Step 4 |
            | level 2                      | 4 otp                                                 | string       | App Step 4 |
            | language                     | ES                                                    | string       | App Step 4 |
            | page area                    | privada                                               | string       | App Step 4 |
            | page intent                  | informacion                                           | string       | App Step 4 |
            | channel                      | online                                                | string       | App Step 4 |
            | page instance ID             | de                                                    | string       | App Step 4 |
            | page info version            | appVersion                                            | regexp named | App Step 4 |
            | page segment                 | personas                                              | string       | App Step 4 |
            | sysEnv                       | app                                                   | string       | App Step 4 |
            | business unit                | BBVA Mexico                                           | string       | App Step 4 |
            | site app name                | App BBVA Mexico                                       | string       | App Step 4 |
            | project name                 | Invest                                                | string       | App Step 4 |
            | device mobile                | si                                                    | string       | App Step 4 |
            | user userState               | logado                                                | string       | App Step 4 |
            | user segment global          | 003001                                                | string       | App Step 4 |
            | profile ID                   | profileID                                             | regexp named | App Step 4 |
            | user age                     | age                                                   | regexp named | App Step 4 |
            | user gender                  | gender                                                | regexp named | App Step 4 |
            | global application           | investment service                                    | string       | App Step 4 |
            | application name             | servicio inversion                                    | string       | App Step 4 |
            | application type             | contratacion                                          | string       | App Step 4 |
            | application step             | 4 otp                                                 | string       | App Step 4 |
            | fulfillment model            | online/offline                                        | string       | App Step 4 |
            | custom fields                | firma:token                                           | string       | App Step 4 |
            | product primary category     | inversiones                                           | string       | App Step 4 |
            | product subtype              | fondos inversion                                      | string       | App Step 4 |
            | product amount               | 20000                                                 | number       | App Step 4 |
            | product currency             | MXN                                                   | string       | App Step 4 |

    @ANA_EVENT_IAH007
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: App Completed - Finished
        Given a user with the following criteria
            | criteria                            |
            | invest advisory portfolio analytics |
        And the user selects payment plan offer "invest advisory"
        And the user "confirm" the investment hiring process
        And the analytics interceptor service is initiated
        When the user concretes the investment hiring process
        Then the analytics events contains the following variables
            | item                           | value                                                          | type         | event         |
            | analytics                      | analytics/glomo_base                                           | json schema  | App Completed |
            | version DL                     | 20250414_5.0                                                   | string       | App Completed |
            | page name                      | app:privada:personas:bbva invest contratacion:pagina exitosa   | string       | App Completed |
            | level 1                        | bbva invest contratacion                                       | string       | App Completed |
            | level 2                        | pagina exitosa                                                 | string       | App Completed |
            | language                       | ES                                                             | string       | App Completed |
            | page area                      | privada                                                        | string       | App Completed |
            | page intent                    | informacion                                                    | string       | App Completed |
            | channel                        | online                                                         | string       | App Completed |
            | page instance ID               | de                                                             | string       | App Completed |
            | page info version              | appVersion                                                     | regexp named | App Completed |
            | page segment                   | personas                                                       | string       | App Completed |
            | sysEnv                         | app                                                            | string       | App Completed |
            | business unit                  | BBVA Mexico                                                    | string       | App Completed |
            | site app name                  | App BBVA Mexico                                                | string       | App Completed |
            | project name                   | Invest                                                         | string       | App Completed |
            | device mobile                  | si                                                             | string       | App Completed |
            | user userState                 | logado                                                         | string       | App Completed |
            | user segment global            | 003001                                                         | string       | App Completed |
            | profile ID                     | profileID                                                      | regexp named | App Completed |
            | user age                       | age                                                            | regexp named | App Completed |
            | user gender                    | gender                                                         | regexp named | App Completed |
            | global application             | investment service                                             | string       | App Completed |
            | application name               | servicio inversion                                             | string       | App Completed |
            | application type               | contratacion                                                   | string       | App Completed |
            | application step               | pagina exitosa                                                 | string       | App Completed |
            | fulfillment model              | online/offline                                                 | string       | App Completed |
            | custom fields                  | firma:token                                                    | string       | App Completed |
            | application state              | contratado                                                     | string       | App Completed |
            | product primary category       | inversiones                                                    | string       | App Completed |
            | product subtype                | fondos inversion                                               | string       | App Completed |
            | product amount                 | 800                                                          | number       | App Completed |
            | product currency               | MXN                                                            | string       | App Completed |
            | product state                  | contratado                                                     | string       | App Completed |

    @ANA_EVENT_IAH008
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Error Information Not Available
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user "concretes" the investment hiring process
        And the analytics interceptor service is initiated
        When the user proceeds to investment confirmation modal
        Then the analytics events contains the following variables
            | item                    | value                                                                           | type         | event     |
            | analytics               | analytics/glomo_base                                                            | json schema  | Page View |
            | version DL              | 20250414_5.0                                                                    | string       | Page View |
            | page name               | app:privada:personas:bbva invest contratacion:error informacion no disponible   | string       | Page View |
            | level 1                 | bbva invest contratacion                                                        | string       | Page View |
            | level 2                 | error informacion no disponible                                                 | string       | Page View |
            | language                | ES                                                                              | string       | Page View |
            | page area               | privada                                                                         | string       | Page View |
            | page intent             | informacion                                                                     | string       | Page View |
            | channel                 | online                                                                          | string       | Page View |
            | page instance ID        | de                                                                              | string       | Page View |
            | page info version       | appVersion                                                                      | regexp named | Page View |
            | page segment            | personas                                                                        | string       | Page View |
            | sysEnv                  | app                                                                             | string       | Page View |
            | business unit           | BBVA Mexico                                                                     | string       | Page View |
            | site app name           | App BBVA Mexico                                                                 | string       | Page View |
            | project name            | Invest                                                                          | string       | Page View |
            | device mobile           | si                                                                              | string       | Page View |
            | user userState          | logado                                                                          | string       | Page View |
            | user segment global     | 003001                                                                          | string       | Page View |
            | profile ID              | profileID                                                                       | regexp named | Page View |
            | user age                | age                                                                             | regexp named | Page View |
            | error page              | error informacion no disponible                                                 | string       | Page View |

    @ANA_EVENT_IAH009
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Custom tag - select blue in portafolio hiring
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the analytics interceptor service is initiated
        When the user completes the hiring process and selects blue
        Then the analytics events contains the following variables
            | item                    | value                     | type         | event         |
            | analytics               | analytics/glomo_base      | json schema  | Internal Link |
            | version DL              | 20250414_5.0              | string       | Internal Link |
            | link name               | continuar con este perfil | string       | Internal Link |
            | level 1                 | bbva invest perfilamiento | string       | Internal Link |
            | level 2                 | mi perfil                 | string       | Internal Link |
            | language                | ES                        | string       | Internal Link |
            | page area               | privada                   | string       | Internal Link |
            | page intent             | informacion               | string       | Internal Link |
            | channel                 | online                    | string       | Internal Link |
            | page instance ID        | de                        | string       | Internal Link |
            | page info version       | appVersion                | regexp named | Internal Link |
            | page segment            | personas                  | string       | Internal Link |
            | sysEnv                  | app                       | string       | Internal Link |
            | business unit           | BBVA Mexico               | string       | Internal Link |
            | site app name           | App BBVA Mexico           | string       | Internal Link |
            | project name            | Glomo                     | string       | Internal Link |
            | device mobile           | si                        | string       | Internal Link |
            | user userState          | logado                    | string       | Internal Link |
            | user segment global     | 003001                    | string       | Internal Link |
            | profile ID              | profileID                 | regexp named | Internal Link |
            | user age                | age                       | regexp named | Internal Link |

    @ANA_EVENT_IAH010
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Custom tag - complete profiling and selects CMB in summary
        Given a user with the following criteria
            | criteria                           |
            | invest advisory portfolio proposal |
        And the user selects payment plan offer "invest advisory"
        And the analytics interceptor service is initiated
        When the user completes the hiring process and selects cmb
        Then the analytics events contains the following variables
            | item                    | value                     | type         | event         |
            | analytics               | analytics/glomo_base      | json schema  | Internal Link |
            | version DL              | 20250414_5.0              | string       | Internal Link |
            | link name               | continuar con este perfil | string       | Internal Link |
            | level 1                 | bbva invest perfilamiento | string       | Internal Link |
            | level 2                 | mi perfil                 | string       | Internal Link |
            | language                | ES                        | string       | Internal Link |
            | page area               | privada                   | string       | Internal Link |
            | page intent             | informacion               | string       | Internal Link |
            | channel                 | online                    | string       | Internal Link |
            | page instance ID        | de                        | string       | Internal Link |
            | page info version       | appVersion                | regexp named | Internal Link |
            | page segment            | personas                  | string       | Internal Link |
            | sysEnv                  | app                       | string       | Internal Link |
            | business unit           | BBVA Mexico               | string       | Internal Link |
            | site app name           | App BBVA Mexico           | string       | Internal Link |
            | project name            | Glomo                     | string       | Internal Link |
            | device mobile           | si                        | string       | Internal Link |
            | user userState          | logado                    | string       | Internal Link |
            | user segment global     | 003001                    | string       | Internal Link |
            | profile ID              | profileID                 | regexp named | Internal Link |
            | user age                | age                       | regexp named | Internal Link |

    @ANA_EVENT_IAH011
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: External Link - share documents hiring
        Given a user with the following criteria
            | criteria                            |
            | invest advisory portfolio analytics |
        And the user selects payment plan offer "invest advisory"
        And the user "confirm" the investment hiring process
        And the user concretes the investment hiring process
        And the analytics interceptor service is initiated
        When the user reviews the hiring documents share
        Then the analytics events contains the following variables
            | item                | value                                                                    | type         | event         |
            | analytics           | analytics/glomo_base                                                     | json schema  | External Link |
            | version DL          | 20250414_5.0                                                             | string       | External Link |
            | page name           | app:privada:personas:bbva invest contratacion:pagina exitosa             | string       | External Link |
            | level 1             | bbva invest contratacion                                                 | string       | External Link |
            | level 2             | pagina exitosa                                                           | string       | External Link |
            | language            | ES                                                                       | string       | External Link |
            | page area           | privada                                                                  | string       | External Link |
            | page intent         | informacion                                                              | string       | External Link |
            | channel             | online                                                                   | string       | External Link |
            | page instance ID    | de                                                                       | string       | External Link |
            | page info version   | appVersion                                                               | regexp named | External Link |
            | page segment        | personas                                                                 | string       | External Link |
            | sysEnv              | app                                                                      | string       | External Link |
            | business unit       | BBVA Mexico                                                              | string       | External Link |
            | site app name       | App BBVA Mexico                                                          | string       | External Link |
            | project name        | Glomo                                                                    | string       | External Link |
            | device mobile       | si                                                                       | string       | External Link |
            | user userState      | logado                                                                   | string       | External Link |
            | user segment global | 003001                                                                   | string       | External Link |
            | profile ID          | profileID                                                                | regexp named | External Link |
            | user age            | age                                                                      | regexp named | External Link |
            | link url            | compartir contratacion contratado                                        | string       | External Link |

    @ANA_EVENT_IAH012
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: External Link - terms and conditions document
        Given a user with the following criteria
            | criteria                            |
            | invest advisory portfolio           |
        And the user selects payment plan offer "invest advisory"
        And the user accepts the "last" assigned profile, "starts" process "selects" from the proposal
        And the analytics interceptor service is initiated
        When the user selects on the profiling PDF link
        Then the analytics events contains the following variables
            | item                | value                                                                    | type         | event         |
            | analytics           | analytics/glomo_base                                                     | json schema  | External Link |
            | version DL          | 20250414_5.0                                                             | string       | External Link |
            | page name           | app:privada:personas:bbva invest contratacion:2 terminos y condiciones   | string       | External Link |
            | level 1             | bbva invest contratacion                                                 | string       | External Link |
            | level 2             | 2 terminos y condiciones                                                 | string       | External Link |
            | language            | ES                                                                       | string       | External Link |
            | page area           | privada                                                                  | string       | External Link |
            | page intent         | informacion                                                              | string       | External Link |
            | channel             | online                                                                   | string       | External Link |
            | page instance ID    | de                                                                       | string       | External Link |
            | page info version   | appVersion                                                               | regexp named | External Link |
            | page segment        | personas                                                                 | string       | External Link |
            | sysEnv              | app                                                                      | string       | External Link |
            | business unit       | BBVA Mexico                                                              | string       | External Link |
            | site app name       | App BBVA Mexico                                                          | string       | External Link |
            | project name        | Glomo                                                                    | string       | External Link |
            | device mobile       | si                                                                       | string       | External Link |
            | user userState      | logado                                                                   | string       | External Link |
            | user segment global | 003001                                                                   | string       | External Link |
            | profile ID          | profileID                                                                | regexp named | External Link |
            | user age            | age                                                                      | regexp named | External Link |
            | link url            | ver pdf perfil de inversion                                              | string       | External Link |

    @ANA_EVENT_IAH013
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: External Link - show documents hiring
        Given a user with the following criteria
            | criteria                            |
            | invest advisory portfolio analytics |
        And the user selects payment plan offer "invest advisory"
        And the user "confirm" the investment hiring process
        And the user concretes the investment hiring process
        And the analytics interceptor service is initiated
        When the user selects on the hiring documents link
        Then the analytics events contains the following variables
            | item                | value                                                                    | type         | event         |
            | analytics           | analytics/glomo_base                                                     | json schema  | External Link |
            | version DL          | 20250414_5.0                                                             | string       | External Link |
            | page name           | app:privada:personas:bbva invest contratacion:pagina exitosa             | string       | External Link |
            | level 1             | bbva invest contratacion                                                 | string       | External Link |
            | level 2             | pagina exitosa                                                           | string       | External Link |
            | language            | ES                                                                       | string       | External Link |
            | page area           | privada                                                                  | string       | External Link |
            | page intent         | informacion                                                              | string       | External Link |
            | channel             | online                                                                   | string       | External Link |
            | page instance ID    | de                                                                       | string       | External Link |
            | page info version   | appVersion                                                               | regexp named | External Link |
            | page segment        | personas                                                                 | string       | External Link |
            | sysEnv              | app                                                                      | string       | External Link |
            | business unit       | BBVA Mexico                                                              | string       | External Link |
            | site app name       | App BBVA Mexico                                                          | string       | External Link |
            | project name        | Glomo                                                                    | string       | External Link |
            | device mobile       | si                                                                       | string       | External Link |
            | user userState      | logado                                                                   | string       | External Link |
            | user segment global | 003001                                                                   | string       | External Link |
            | profile ID          | profileID                                                                | regexp named | External Link |
            | user age            | age                                                                      | regexp named | External Link |
            | link url            | ver documentos contratacion contratado                                   | string       | External Link |
