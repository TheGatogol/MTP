@investAdvisoryAnalytics @analyticsInvestAdvisoryContribution
Feature: Investment Contribution Analytics

    @ANA_EVENT_COMP001
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - CTA Contract Detail
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        And the analytics interceptor service is initiated
        When the user funds can be loaded
        Then the analytics events contains the following variables
            | item                     | value                                             | type         | event              |
            | analytics                | analytics/glomo_base                              | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                      | string       | App On Click Start |
            | page name                | app:privada:personas:bbva invest contrato:detalle | string       | App On Click Start |
            | level 1                  | bbva invest contrato                              | string       | App On Click Start |
            | level 2                  | detalle                                           | string       | App On Click Start |
            | language                 | ES                                                | string       | App On Click Start |
            | page area                | privada                                           | string       | App On Click Start |
            | page intent              | informacion                                       | string       | App On Click Start |
            | channel                  | online                                            | string       | App On Click Start |
            | page instance ID         | de                                                | string       | App On Click Start |
            | page info version        | appVersion                                        | regexp named | App On Click Start |
            | page segment             | personas                                          | string       | App On Click Start |
            | sysEnv                   | app                                               | string       | App On Click Start |
            | business unit            | BBVA Mexico                                       | string       | App On Click Start |
            | site app name            | App BBVA Mexico                                   | string       | App On Click Start |
            | project name             | Glomo                                             | string       | App On Click Start |
            | device mobile            | si                                                | string       | App On Click Start |
            | user userState           | logado                                            | string       | App On Click Start |
            | user segment global      | 003001                                            | string       | App On Click Start |
            | profile ID               | profileID                                         | regexp named | App On Click Start |
            | user age                 | age                                               | regexp named | App On Click Start |
            | user gender              | gender                                            | regexp named | App On Click Start |
            | global application       | purchase investment service                       | string       | App On Click Start |
            | application name         | bbva invest compra                                | string       | App On Click Start |
            | application type         | contratacion                                      | string       | App On Click Start |
            | application step         | comprar                                           | string       | App On Click Start |
            | fulfillment model        | online                                            | string       | App On Click Start |
            | product primary category | inversiones                                       | string       | App On Click Start |
            | product subtype          | fondos inversion                                  | string       | App On Click Start |

    @ANA_EVENT_COMP002
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - Enter Quantity
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        And the analytics interceptor service is initiated
        When the user funds can be loaded
        Then the analytics events contains the following variables
            | item                     | value                                                         | type         | event          |
            | analytics                | analytics/glomo_base                                          | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                  | string       | App Page Visit |
            | page name                | app:privada:personas:bbva invest compra:1 introducir cantidad | string       | App Page Visit |
            | level 1                  | bbva invest compra                                            | string       | App Page Visit |
            | level 2                  | 1 introducir cantidad                                         | string       | App Page Visit |
            | language                 | ES                                                            | string       | App Page Visit |
            | page area                | privada                                                       | string       | App Page Visit |
            | page intent              | informacion                                                   | string       | App Page Visit |
            | channel                  | online                                                        | string       | App Page Visit |
            | page instance ID         | de                                                            | string       | App Page Visit |
            | page info version        | appVersion                                                    | regexp named | App Page Visit |
            | page segment             | personas                                                      | string       | App Page Visit |
            | sysEnv                   | app                                                           | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                   | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                               | string       | App Page Visit |
            | project name             | Glomo                                                         | string       | App Page Visit |
            | device mobile            | si                                                            | string       | App Page Visit |
            | user userState           | logado                                                        | string       | App Page Visit |
            | user segment global      | 003001                                                        | string       | App Page Visit |
            | profile ID               | profileID                                                     | regexp named | App Page Visit |
            | user age                 | age                                                           | regexp named | App Page Visit |
            | user gender              | gender                                                        | regexp named | App Page Visit |
            | global application       | purchase investment service                                   | string       | App Page Visit |
            | application name         | bbva invest compra                                            | string       | App Page Visit |
            | application type         | contratacion                                                  | string       | App Page Visit |
            | application typology     | tradicional                                                   | string       | App Page Visit |
            | application step         | 1 introducir cantidad                                         | string       | App Page Visit |
            | fulfillment model        | online                                                        | string       | App Page Visit |
            | product primary category | inversiones                                                   | string       | App Page Visit |
            | product subtype          | fondos inversion                                              | string       | App Page Visit |

    @ANA_EVENT_COMP003
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - First interaction
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to withdrawal and contribution page
        And the analytics interceptor service is initiated
        When the user set amount to invest
        Then the analytics events contains the following variables
            | item                     | value                                                         | type         | event       |
            | analytics                | analytics/glomo_base                                          | json schema  | App Started |
            | version DL               | 20250414_5.0                                                  | string       | App Started |
            | page name                | app:privada:personas:bbva invest compra:1 introducir cantidad | string       | App Started |
            | level 1                  | bbva invest compra                                            | string       | App Started |
            | level 2                  | 1 introducir cantidad                                         | string       | App Started |
            | language                 | ES                                                            | string       | App Started |
            | page area                | privada                                                       | string       | App Started |
            | page intent              | informacion                                                   | string       | App Started |
            | channel                  | online                                                        | string       | App Started |
            | page instance ID         | de                                                            | string       | App Started |
            | page info version        | appVersion                                                    | regexp named | App Started |
            | page segment             | personas                                                      | string       | App Started |
            | sysEnv                   | app                                                           | string       | App Started |
            | business unit            | BBVA Mexico                                                   | string       | App Started |
            | site app name            | App BBVA Mexico                                               | string       | App Started |
            | project name             | Glomo                                                         | string       | App Started |
            | device mobile            | si                                                            | string       | App Started |
            | user userState           | logado                                                        | string       | App Started |
            | user segment global      | 003001                                                        | string       | App Started |
            | profile ID               | profileID                                                     | regexp named | App Started |
            | user age                 | age                                                           | regexp named | App Started |
            | user gender              | gender                                                        | regexp named | App Started |
            | global application       | purchase investment service                                   | string       | App Started |
            | application name         | bbva invest compra                                            | string       | App Started |
            | application type         | contratacion                                                  | string       | App Started |
            | application typology     | tradicional                                                   | string       | App Started |
            | application step         | importe                                                       | string       | App Started |
            | fulfillment model        | online                                                        | string       | App Started |
            | product primary category | inversiones                                                   | string       | App Started |
            | product subtype          | fondos inversion                                              | string       | App Started |

    @ANA_EVENT_COMP004
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - Distribution
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to withdrawal and contribution page
        And the user set amount to invest
        And the analytics interceptor service is initiated
        When the user confirms the "amount"
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event      |
            | analytics                | analytics/glomo_base                                   | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                           | string       | App Step 2 |
            | page name                | app:privada:personas:bbva invest compra:2 distribucion | string       | App Step 2 |
            | level 1                  | bbva invest compra                                     | string       | App Step 2 |
            | level 2                  | 2 distribucion                                         | string       | App Step 2 |
            | language                 | ES                                                     | string       | App Step 2 |
            | page area                | privada                                                | string       | App Step 2 |
            | page intent              | informacion                                            | string       | App Step 2 |
            | channel                  | online                                                 | string       | App Step 2 |
            | page instance ID         | de                                                     | string       | App Step 2 |
            | page info version        | appVersion                                             | regexp named | App Step 2 |
            | page segment             | personas                                               | string       | App Step 2 |
            | sysEnv                   | app                                                    | string       | App Step 2 |
            | business unit            | BBVA Mexico                                            | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                        | string       | App Step 2 |
            | project name             | Glomo                                                  | string       | App Step 2 |
            | device mobile            | si                                                     | string       | App Step 2 |
            | user userState           | logado                                                 | string       | App Step 2 |
            | user segment global      | 003001                                                 | string       | App Step 2 |
            | profile ID               | profileID                                              | regexp named | App Step 2 |
            | user age                 | age                                                    | regexp named | App Step 2 |
            | user gender              | gender                                                 | regexp named | App Step 2 |
            | global application       | purchase investment service                            | string       | App Step 2 |
            | application name         | bbva invest compra                                     | string       | App Step 2 |
            | application type         | contratacion                                           | string       | App Step 2 |
            | application typology     | tradicional                                            | string       | App Step 2 |
            | application step         | 2 distribucion                                         | string       | App Step 2 |
            | fulfillment model        | online                                                 | string       | App Step 2 |
            | product primary category | inversiones                                            | string       | App Step 2 |
            | product subtype          | fondos inversion                                       | string       | App Step 2 |
            | product amount           | 5000                                                   | number       | App Step 2 |
            | product currency         | MXN                                                    | string       | App Step 2 |

    @ANA_EVENT_COMP005
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - Confirmation
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to withdrawal and contribution page
        And the user completes "amount" step
        And the analytics interceptor service is initiated
        When the user confirms the "distribution"
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event      |
            | analytics                | analytics/glomo_base                                   | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                           | string       | App Step 3 |
            | page name                | app:privada:personas:bbva invest compra:3 confirmacion | string       | App Step 3 |
            | level 1                  | bbva invest compra                                     | string       | App Step 3 |
            | level 2                  | 3 confirmacion                                         | string       | App Step 3 |
            | language                 | ES                                                     | string       | App Step 3 |
            | page area                | privada                                                | string       | App Step 3 |
            | page intent              | informacion                                            | string       | App Step 3 |
            | channel                  | online                                                 | string       | App Step 3 |
            | page instance ID         | de                                                     | string       | App Step 3 |
            | page info version        | appVersion                                             | regexp named | App Step 3 |
            | page segment             | personas                                               | string       | App Step 3 |
            | sysEnv                   | app                                                    | string       | App Step 3 |
            | business unit            | BBVA Mexico                                            | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                        | string       | App Step 3 |
            | project name             | Glomo                                                  | string       | App Step 3 |
            | device mobile            | si                                                     | string       | App Step 3 |
            | user userState           | logado                                                 | string       | App Step 3 |
            | user segment global      | 003001                                                 | string       | App Step 3 |
            | profile ID               | profileID                                              | regexp named | App Step 3 |
            | user age                 | age                                                    | regexp named | App Step 3 |
            | user gender              | gender                                                 | regexp named | App Step 3 |
            | global application       | purchase investment service                            | string       | App Step 3 |
            | application name         | bbva invest compra                                     | string       | App Step 3 |
            | application type         | contratacion                                           | string       | App Step 3 |
            | application typology     | tradicional                                            | string       | App Step 3 |
            | application step         | 3 confirmacion                                         | string       | App Step 3 |
            | fulfillment model        | online                                                 | string       | App Step 3 |
            | product primary category | inversiones                                            | string       | App Step 3 |
            | product subtype          | fondos inversion                                       | string       | App Step 3 |
            | product amount           | 5000                                                   | number       | App Step 3 |
            | product currency         | MXN                                                    | string       | App Step 3 |

    @ANA_EVENT_COMP006
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - Confirmation with OTP
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to withdrawal and contribution page
        And the user completes "summary" step
        And the analytics interceptor service is initiated
        When the user confirms the "contribution"
        Then the analytics events contains the following variables
            | item                | value                                       | type         | event     |
            | analytics           | analytics/glomo_base                        | json schema  | Page View |
            | version DL          | 20250414_5.0                                | string       | Page View |
            | page name           | app:privada:personas:bbva invest compra:otp | string       | Page View |
            | level 1             | bbva invest compra                          | string       | Page View |
            | level 2             | otp                                         | string       | Page View |
            | language            | ES                                          | string       | Page View |
            | page area           | privada                                     | string       | Page View |
            | page intent         | informacion                                 | string       | Page View |
            | channel             | online                                      | string       | Page View |
            | page instance ID    | de                                          | string       | Page View |
            | page info version   | appVersion                                  | regexp named | Page View |
            | page segment        | personas                                    | string       | Page View |
            | sysEnv              | app                                         | string       | Page View |
            | business unit       | BBVA Mexico                                 | string       | Page View |
            | site app name       | App BBVA Mexico                             | string       | Page View |
            | project name        | Glomo                                       | string       | Page View |
            | device mobile       | si                                          | string       | Page View |
            | user userState      | logado                                      | string       | Page View |
            | user segment global | 003001                                      | string       | Page View |
            | profile ID          | profileID                                   | regexp named | Page View |
            | user age            | age                                         | regexp named | Page View |
            | user gender         | gender                                      | regexp named | Page View |
            | custom fields       | firma:token                                 | string       | Page View |

    @ANA_EVENT_COMP007
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - End Step (hired)
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to withdrawal and contribution page
        And the user completes "all" step
        And the analytics interceptor service is initiated
        When the sms key "12345678" is entered
        Then the analytics events contains the following variables
            | item                         | value                                                  | type         | event         |
            | analytics                    | analytics/glomo_base                                   | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                           | string       | App Completed |
            | page name                    | app:privada:personas:bbva invest compra:pagina exitosa | string       | App Completed |
            | level 1                      | bbva invest compra                                     | string       | App Completed |
            | level 2                      | pagina exitosa                                         | string       | App Completed |
            | language                     | ES                                                     | string       | App Completed |
            | page area                    | privada                                                | string       | App Completed |
            | page intent                  | informacion                                            | string       | App Completed |
            | channel                      | online                                                 | string       | App Completed |
            | page instance ID             | de                                                     | string       | App Completed |
            | page info version            | appVersion                                             | regexp named | App Completed |
            | page segment                 | personas                                               | string       | App Completed |
            | sysEnv                       | app                                                    | string       | App Completed |
            | business unit                | BBVA Mexico                                            | string       | App Completed |
            | site app name                | App BBVA Mexico                                        | string       | App Completed |
            | project name                 | Glomo                                                  | string       | App Completed |
            | device mobile                | si                                                     | string       | App Completed |
            | user userState               | logado                                                 | string       | App Completed |
            | user segment global          | 003001                                                 | string       | App Completed |
            | profile ID                   | profileID                                              | regexp named | App Completed |
            | user age                     | age                                                    | regexp named | App Completed |
            | user gender                  | gender                                                 | regexp named | App Completed |
            | global application           | purchase investment service                            | string       | App Completed |
            | application name             | bbva invest compra                                     | string       | App Completed |
            | application type             | contratacion                                           | string       | App Completed |
            | application typology         | tradicional                                            | string       | App Completed |
            | application step             | pagina exitosa                                         | string       | App Completed |
            | custom fields                | firma:token                                            | string       | App Completed |
            | application state            | contratado                                             | string       | App Completed |
            | application operation number | 0076291270                                             | string       | App Completed |
            | fulfillment model            | online                                                 | string       | App Completed |
            | product primary category     | inversiones                                            | string       | App Completed |
            | product subtype              | fondos inversion                                       | string       | App Completed |
            | product amount               | 5000                                                   | number       | App Completed |
            | product currency             | MXN                                                    | string       | App Completed |
            | product state                | contratado                                             | string       | App Completed |

    @ANA_EVENT_COMP008
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - End Step (outTime)
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to withdrawal and contribution page
        And the user completes "all" step
        And the analytics interceptor service is initiated
        When the sms key "12345678" is entered
        Then the analytics events contains the following variables
            | item                         | value                                                  | type         | event         |
            | analytics                    | analytics/glomo_base                                   | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                           | string       | App Completed |
            | page name                    | app:privada:personas:bbva invest compra:pagina exitosa | string       | App Completed |
            | level 1                      | bbva invest compra                                     | string       | App Completed |
            | level 2                      | pagina exitosa                                         | string       | App Completed |
            | language                     | ES                                                     | string       | App Completed |
            | page area                    | privada                                                | string       | App Completed |
            | page intent                  | informacion                                            | string       | App Completed |
            | channel                      | online                                                 | string       | App Completed |
            | page instance ID             | de                                                     | string       | App Completed |
            | page info version            | appVersion                                             | regexp named | App Completed |
            | page segment                 | personas                                               | string       | App Completed |
            | sysEnv                       | app                                                    | string       | App Completed |
            | business unit                | BBVA Mexico                                            | string       | App Completed |
            | site app name                | App BBVA Mexico                                        | string       | App Completed |
            | project name                 | Glomo                                                  | string       | App Completed |
            | device mobile                | si                                                     | string       | App Completed |
            | user userState               | logado                                                 | string       | App Completed |
            | user segment global          | 003001                                                 | string       | App Completed |
            | profile ID                   | profileID                                              | regexp named | App Completed |
            | user age                     | age                                                    | regexp named | App Completed |
            | user gender                  | gender                                                 | regexp named | App Completed |
            | global application           | purchase investment service                            | string       | App Completed |
            | application name             | bbva invest compra                                     | string       | App Completed |
            | application type             | contratacion                                           | string       | App Completed |
            | application typology         | tradicional                                            | string       | App Completed |
            | application step             | pagina exitosa                                         | string       | App Completed |
            | custom fields                | firma:token                                            | string       | App Completed |
            | custom fields                | firma:token                                            | string       | App Completed |
            | application state            | en revision                                            | string       | App Completed |
            | application operation number | 202602170021483                                        | string       | App Completed |
            | fulfillment model            | online                                                 | string       | App Completed |
            | product primary category     | inversiones                                            | string       | App Completed |
            | product subtype              | fondos inversion                                       | string       | App Completed |
            | product amount               | 5000                                                   | number       | App Completed |
            | product currency             | MXN                                                    | string       | App Completed |
            | product state                | en revision                                            | string       | App Completed |

    @ANA_EVENT_COMP009
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - Share receipt
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to withdrawal and contribution page
        And the user completes "all" step
        And the analytics interceptor service is initiated
        And the sms key "12345678" is entered
        When the user selects the share receipt
        Then the analytics events contains the following variables
            | item                         | value                                                  | type         | event         |
            | analytics                    | analytics/glomo_base                                   | json schema  | External Link |
            | version DL                   | 20250414_5.0                                           | string       | External Link |
            | page name                    | app:privada:personas:bbva invest compra:pagina exitosa | string       | External Link |
            | level 1                      | bbva invest compra                                     | string       | External Link |
            | level 2                      | pagina exitosa                                         | string       | External Link |
            | language                     | ES                                                     | string       | External Link |
            | page area                    | privada                                                | string       | External Link |
            | page intent                  | informacion                                            | string       | External Link |
            | channel                      | online                                                 | string       | External Link |
            | page instance ID             | de                                                     | string       | External Link |
            | page info version            | appVersion                                             | regexp named | External Link |
            | page segment                 | personas                                               | string       | External Link |
            | sysEnv                       | app                                                    | string       | External Link |
            | business unit                | BBVA Mexico                                            | string       | External Link |
            | site app name                | App BBVA Mexico                                        | string       | External Link |
            | project name                 | Glomo                                                  | string       | External Link |
            | device mobile                | si                                                     | string       | External Link |
            | user userState               | logado                                                 | string       | External Link |
            | user segment global          | 003001                                                 | string       | External Link |
            | profile ID                   | profileID                                              | regexp named | External Link |
            | user age                     | age                                                    | regexp named | External Link |
            | user gender                  | gender                                                 | regexp named | External Link |
            | link url                     | compartir compra contratado                            | string       | External Link |

    @ANA_EVENT_COMP0010
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - Error Information Not Available
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to withdrawal and contribution page
        And the user completes "all" step
        And the analytics interceptor service is initiated
        When the sms key "12345678" is entered
        Then the analytics events contains the following variables
            | item                | value                                                                   | type         | event     |
            | analytics           | analytics/glomo_base                                                    | json schema  | Page View |
            | version DL          | 20250414_5.0                                                            | string       | Page View |
            | page name           | app:privada:personas:bbva invest compra:error informacion no disponible | string       | Page View |
            | level 1             | bbva invest compra                                                      | string       | Page View |
            | level 2             | error informacion no disponible                                         | string       | Page View |
            | error page          | error informacion no disponible                                         | string       | Page View |
            | language            | ES                                                                      | string       | Page View |
            | page area           | privada                                                                 | string       | Page View |
            | page intent         | informacion                                                             | string       | Page View |
            | channel             | online                                                                  | string       | Page View |
            | page instance ID    | de                                                                      | string       | Page View |
            | page info version   | appVersion                                                              | regexp named | Page View |
            | page segment        | personas                                                                | string       | Page View |
            | sysEnv              | app                                                                     | string       | Page View |
            | business unit       | BBVA Mexico                                                             | string       | Page View |
            | site app name       | App BBVA Mexico                                                         | string       | Page View |
            | project name        | Glomo                                                                   | string       | Page View |
            | device mobile       | si                                                                      | string       | Page View |
            | user userState      | logado                                                                  | string       | Page View |
            | user segment global | 003001                                                                  | string       | Page View |
            | profile ID          | profileID                                                               | regexp named | Page View |
            | user age            | age                                                                     | regexp named | Page View |
            | user gender         | gender                                                                  | regexp named | Page View |
