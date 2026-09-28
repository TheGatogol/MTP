@ocLoanOfferPageSphericaAnalytics
Feature: Analytics - OC Loan Offer Page Spherica

    @ANA_PPL001
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved - App On Click Start Dashboard
        Given a user with the following criteria
            | criteria                                      |
            | oc loan pre approved offer page ppi dashboard |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to continue process operative "PRESTAMO PERSONAL INMEDIATO"
        Then the analytics events contains the following variables
            | item                                         | value                                                                                                                                                            | type         | event              |
            | analytics                                    | analytics/glomo_base                                                                                                                                             | json schema  | App On Click Start |
            | version DL                                   | 20250414_5.0                                                                                                                                                     | string       | App On Click Start |
            | page name                                    | app:privada:personas:posicion global:destacado                                                                                                                   | string       | App On Click Start |
            | level 1                                      | posicion global                                                                                                                                                  | string       | App On Click Start |
            | level 2                                      | destacado                                                                                                                                                        | string       | App On Click Start |
            | language                                     | ES                                                                                                                                                               | string       | App On Click Start |
            | page area                                    | privada                                                                                                                                                          | string       | App On Click Start |
            | page intent                                  | informacion                                                                                                                                                      | string       | App On Click Start |
            | channel                                      | online                                                                                                                                                           | string       | App On Click Start |
            | page instance ID                             | de                                                                                                                                                               | string       | App On Click Start |
            | page info version                            | appVersion                                                                                                                                                       | regexp named | App On Click Start |
            | page segment                                 | personas                                                                                                                                                         | string       | App On Click Start |
            | sysEnv                                       | app                                                                                                                                                              | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                                                                                                                      | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                                                                                                  | string       | App On Click Start |
            | project name                                 | Futura                                                                                                                                                           | string       | App On Click Start |
            | device mobile                                | si                                                                                                                                                               | string       | App On Click Start |
            | user userState                               | logado                                                                                                                                                           | string       | App On Click Start |
            | user segment global                          | 003001                                                                                                                                                           | string       | App On Click Start |
            | profile ID                                   | profileID                                                                                                                                                        | regexp named | App On Click Start |
            | user gender                                  | gender                                                                                                                                                           | regexp named | App On Click Start |
            | user age                                     | age                                                                                                                                                              | regexp named | App On Click Start |
            | global application                           | preapproved loan                                                                                                                                                 | string       | App On Click Start |
            | application name                             | prestamo personal one click                                                                                                                                      | string       | App On Click Start |
            | application type                             | contratacion                                                                                                                                                     | string       | App On Click Start |
            | application step                             | me interesa posicion global nbo                                                                                                                                  | string       | App On Click Start |
            | fulfillment model                            | online                                                                                                                                                           | string       | App On Click Start |
            | product primary category                     | prestamos                                                                                                                                                        | string       | App On Click Start |
            | product name                                 | prestamo personal inmediato                                                                                                                                      | string       | App On Click Start |
            | internal campaign attributes location        | dashboard destacado-te puede interesar-centro-1-1-5                                                                                                              | string       | App On Click Start |
            | internal campaign attributes campaign format | carrusel                                                                                                                                                         | string       | App On Click Start |
            | internal campaign attributes collective code | vd-                                                                                                                                                              | string       | App On Click Start |
            | internal campaign attributes name            | -cumple tus metas y sal de apuros obten tu prestamo                                                                                                              | string       | App On Click Start |
            | internal campaign attributes product         | prestamo personal inmediato                                                                                                                                      | string       | App On Click Start |
            | internal campaign attributes product code    | 0PPI                                                                                                                                                             | string       | App On Click Start |
            | internal campaign attributes quantity        | 1272200                                                                                                                                                          | number       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                                                                                                                      | string       | App On Click Start |
            | internal campaign site action name           | dashboard destacado-te puede interesar-centro-1-1-5:carrusel:vd-:-cumple tus metas y sal de apuros obten tu prestamo:prestamo personal inmediato:0PPI:1272200::: | string       | App On Click Start |
            | optimization attributes                      |                                                                                                                                                                  | empty array  | App On Click Start |

    @ANA_PPL002
    @analytics
    @MX
    @web
    @vbank @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved - App On Click Start Contract Product Section
        Given a user with the following criteria
            | criteria                            |
            | oc loan pre approved offer page nom |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to continue process operative "consumer loan"
        Then the analytics events contains the following variables
            | item                                         | value                                                                                  | type         | event              |
            | analytics                                    | analytics/glomo_base                                                                   | json schema  | App On Click Start |
            | version DL                                   | 20250414_5.0                                                                           | string       | App On Click Start |
            | page name                                    | app:privada:personas:oportunidades                                                     | string       | App On Click Start |
            | level 1                                      | oportunidades                                                                          | string       | App On Click Start |
            | language                                     | ES                                                                                     | string       | App On Click Start |
            | page area                                    | privada                                                                                | string       | App On Click Start |
            | page intent                                  | informacion                                                                            | string       | App On Click Start |
            | channel                                      | online                                                                                 | string       | App On Click Start |
            | page instance ID                             | de                                                                                     | string       | App On Click Start |
            | page info version                            | appVersion                                                                             | regexp named | App On Click Start |
            | page segment                                 | personas                                                                               | string       | App On Click Start |
            | sysEnv                                       | app                                                                                    | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                                            | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                        | string       | App On Click Start |
            | project name                                 | Glomo                                                                                  | string       | App On Click Start |
            | device mobile                                | si                                                                                     | string       | App On Click Start |
            | user userState                               | logado                                                                                 | string       | App On Click Start |
            | user segment global                          | 003001                                                                                 | string       | App On Click Start |
            | profile ID                                   | profileID                                                                              | regexp named | App On Click Start |
            | user gender                                  | gender                                                                                 | regexp named | App On Click Start |
            | user age                                     | age                                                                                    | regexp named | App On Click Start |
            | global application                           | preapproved loan                                                                       | string       | App On Click Start |
            | application name                             | prestamo personal one click                                                            | string       | App On Click Start |
            | application type                             | contratacion                                                                           | string       | App On Click Start |
            | application step                             | me interesa oportunidades                                                              | string       | App On Click Start |
            | fulfillment model                            | online                                                                                 | string       | App On Click Start |
            | product primary category                     | prestamos                                                                              | string       | App On Click Start |
            | product name                                 | prestamo nomina                                                                        | string       | App On Click Start |
            | internal campaign attributes location        | oportunidades dashboard-superior-1-15                                                  | string       | App On Click Start |
            | internal campaign attributes campaign format | card                                                                                   | string       | App On Click Start |
            | internal campaign attributes collective code | vd-                                                                                    | string       | App On Click Start |
            | internal campaign attributes name            | -solicita tu prestamo                                                                  | string       | App On Click Start |
            | internal campaign attributes product         | prestamo nomina                                                                        | string       | App On Click Start |
            | internal campaign attributes product code    | 0NOM                                                                                   | string       | App On Click Start |
            | internal campaign attributes quantity        | 1199300.00                                                                             | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                                            | string       | App On Click Start |
            | internal campaign site action name           | oportunidades dashboard-superior-1-15:card:vd-:-solicita tu prestamo:prestamo nomina:: | string       | App On Click Start |
            | optimization attributes                      |                                                                                        | empty array  | App On Click Start |

    @ANA_PPL003
    @analytics
    @MX
    @web
    @vbank @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved - App Page Visit
        Given a user with the following criteria
            | criteria                            |
            | oc loan pre approved offer page nom |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to continue process operative "consumer loan"
        Then the analytics events contains the following variables
            | item                     | value                                                      | type         | event          |
            | analytics                | analytics/glomo_base                                       | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                               | string       | App Page Visit |
            | page name                | app:privada:personas:prestamo personal one click:1 detalle | string       | App Page Visit |
            | level 1                  | prestamo personal one click                                | string       | App Page Visit |
            | level 2                  | 1 detalle                                                  | string       | App Page Visit |
            | language                 | ES                                                         | string       | App Page Visit |
            | page area                | privada                                                    | string       | App Page Visit |
            | page intent              | transaccion                                                | string       | App Page Visit |
            | channel                  | online                                                     | string       | App Page Visit |
            | page instance ID         | de                                                         | string       | App Page Visit |
            | page info version        | appVersion                                                 | regexp named | App Page Visit |
            | page segment             | personas                                                   | string       | App Page Visit |
            | sysEnv                   | app                                                        | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                            | string       | App Page Visit |
            | project name             | DIY E2E Sales                                              | string       | App Page Visit |
            | device mobile            | si                                                         | string       | App Page Visit |
            | user userState           | logado                                                     | string       | App Page Visit |
            | user segment global      | 003001                                                     | string       | App Page Visit |
            | profile ID               | profileID                                                  | regexp named | App Page Visit |
            | user gender              | gender                                                     | regexp named | App Page Visit |
            | user age                 | age                                                        | regexp named | App Page Visit |
            | global application       | preapproved loan                                           | string       | App Page Visit |
            | application name         | prestamo personal one click                                | string       | App Page Visit |
            | application type         | contratacion                                               | string       | App Page Visit |
            | application typology     | preaprobado                                                | string       | App Page Visit |
            | application process      | cliente sin codigo promocional                             | string       | App Page Visit |
            | application step         | 1 detalle                                                  | string       | App Page Visit |
            | fulfillment model        | online                                                     | string       | App Page Visit |
            | qualified visits         | true                                                       | string       | App Page Visit |
            | product primary category | prestamos                                                  | string       | App Page Visit |
            | product name             | prestamo nomina                                            | string       | App Page Visit |
            | internal campaign        |                                                            | empty array  | App Page Visit |
            | optimization attributes  |                                                            | empty array  | App Page Visit |

    @ANA_PPL004
    @analytics
    @MX
    @web
    @vbank @ios @android
    @backend(test)
    @web-done
    Scenario Outline: OC Loan Preapproved - App Started - <element>
        Given a user with the following criteria
            | criteria                               |
            | oc loan pre approved offer page <user> |
        And the user accesses to continue process operative "consumer loan"
        And the analytics interceptor service is initiated
        When the user next "open tooltip <element>" step
        Then the analytics events contains the following variables
            | item                     | value                                                      | type         | event       |
            | analytics                | analytics/glomo_base                                       | json schema  | App Started |
            | version DL               | 20250414_5.0                                               | string       | App Started |
            | page name                | app:privada:personas:prestamo personal one click:1 detalle | string       | App Started |
            | level 1                  | prestamo personal one click                                | string       | App Started |
            | level 2                  | 1 detalle                                                  | string       | App Started |
            | language                 | ES                                                         | string       | App Started |
            | page area                | privada                                                    | string       | App Started |
            | page intent              | transaccion                                                | string       | App Started |
            | channel                  | online                                                     | string       | App Started |
            | page instance ID         | de                                                         | string       | App Started |
            | page info version        | appVersion                                                 | regexp named | App Started |
            | page segment             | personas                                                   | string       | App Started |
            | sysEnv                   | app                                                        | string       | App Started |
            | business unit            | BBVA Mexico                                                | string       | App Started |
            | site app name            | App BBVA Mexico                                            | string       | App Started |
            | project name             | DIY E2E Sales                                              | string       | App Started |
            | device mobile            | si                                                         | string       | App Started |
            | user userState           | logado                                                     | string       | App Started |
            | user segment global      | 003001                                                     | string       | App Started |
            | profile ID               | profileID                                                  | regexp named | App Started |
            | user gender              | gender                                                     | regexp named | App Started |
            | user age                 | age                                                        | regexp named | App Started |
            | global application       | preapproved loan                                           | string       | App Started |
            | application name         | prestamo personal one click                                | string       | App Started |
            | application type         | contratacion                                               | string       | App Started |
            | application typology     | preaprobado                                                | string       | App Started |
            | application process      | cliente sin codigo promocional                             | string       | App Started |
            | application step         | <application step>                                         | string       | App Started |
            | fulfillment model        | online                                                     | string       | App Started |
            | product primary category | prestamos                                                  | string       | App Started |
            | product name             | prestamo nomina                                            | string       | App Started |
            | internal campaign        |                                                            | empty array  | App Started |
            | optimization attributes  |                                                            | empty array  | App Started |
        Examples:
            | user               | element             | application step                |
            | nom                | interest rate       | info tasa interes               |
            | nom life insurance | life insurance rate | info seguro de vida y desempleo |

    @ANA_PPL005
    @analytics
    @MX
    @web
    @vbank @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved - App Step 2
        Given a user with the following criteria
            | criteria                            |
            | oc loan pre approved offer page nom |
        And the user accesses to continue process operative "consumer loan"
        And the analytics interceptor service is initiated
        When the user next "terms and conditions" step
        Then the analytics events contains the following variables
            | item                       | value                                                                     | type         | event      |
            | analytics                  | analytics/glomo_base                                                      | json schema  | App Step 2 |
            | version DL                 | 20250414_5.0                                                              | string       | App Step 2 |
            | page name                  | app:privada:personas:prestamo personal one click:2 terminos y condiciones | string       | App Step 2 |
            | level 1                    | prestamo personal one click                                               | string       | App Step 2 |
            | level 2                    | 2 terminos y condiciones                                                  | string       | App Step 2 |
            | language                   | ES                                                                        | string       | App Step 2 |
            | page area                  | privada                                                                   | string       | App Step 2 |
            | page intent                | transaccion                                                               | string       | App Step 2 |
            | channel                    | online                                                                    | string       | App Step 2 |
            | page instance ID           | de                                                                        | string       | App Step 2 |
            | page info version          | appVersion                                                                | regexp named | App Step 2 |
            | page segment               | personas                                                                  | string       | App Step 2 |
            | sysEnv                     | app                                                                       | string       | App Step 2 |
            | business unit              | BBVA Mexico                                                               | string       | App Step 2 |
            | site app name              | App BBVA Mexico                                                           | string       | App Step 2 |
            | project name               | DIY E2E Sales                                                             | string       | App Step 2 |
            | device mobile              | si                                                                        | string       | App Step 2 |
            | user userState             | logado                                                                    | string       | App Step 2 |
            | user segment global        | 003001                                                                    | string       | App Step 2 |
            | profile ID                 | profileID                                                                 | regexp named | App Step 2 |
            | user gender                | gender                                                                    | regexp named | App Step 2 |
            | user age                   | age                                                                       | regexp named | App Step 2 |
            | global application         | preapproved loan                                                          | string       | App Step 2 |
            | application name           | prestamo personal one click                                               | string       | App Step 2 |
            | application type           | contratacion                                                              | string       | App Step 2 |
            | application typology       | preaprobado                                                               | string       | App Step 2 |
            | application process        | cliente sin codigo promocional                                            | string       | App Step 2 |
            | application step           | 2 terminos y condiciones                                                  | string       | App Step 2 |
            | application offer          | mejora tasa interes                                                       | string       | App Step 2 |
            | fulfillment model          | online                                                                    | string       | App Step 2 |
            | product primary category   | prestamos                                                                 | string       | App Step 2 |
            | product name               | prestamo nomina                                                           | string       | App Step 2 |
            | product amount             | 1199300                                                                   | string       | App Step 2 |
            | product payment amount     | 49242.14                                                                  | string       | App Step 2 |
            | product number of payments | 60                                                                        | string       | App Step 2 |
            | product payment type       | mensual                                                                   | string       | App Step 2 |
            | product currency           | MXN                                                                       | string       | App Step 2 |
            | product interest rate      | 44.1                                                                      | string       | App Step 2 |
            | products term              | 60                                                                        | string       | App Step 2 |
            | custom fields              | uso prestamo:sostenible                                                   | string       | App Step 2 |
            | internal campaign          |                                                                           | empty array  | App Step 2 |
            | optimization attributes    |                                                                           | empty array  | App Step 2 |

    @ANA_PPL006
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved - App Step 3
        Given a user with the following criteria
            | criteria                            |
            | oc loan pre approved offer page nom |
        And the user accesses to continue process operative "consumer loan"
        And the analytics interceptor service is initiated
        When the user next "summary" step
        Then the analytics events contains the following variables
            | item                       | value                                                           | type         | event      |
            | analytics                  | analytics/glomo_base                                            | json schema  | App Step 3 |
            | version DL                 | 20250414_5.0                                                    | string       | App Step 3 |
            | page name                  | app:privada:personas:prestamo personal one click:3 confirmacion | string       | App Step 3 |
            | level 1                    | prestamo personal one click                                     | string       | App Step 3 |
            | level 2                    | 3 confirmacion                                                  | string       | App Step 3 |
            | language                   | ES                                                              | string       | App Step 3 |
            | page area                  | privada                                                         | string       | App Step 3 |
            | page intent                | transaccion                                                     | string       | App Step 3 |
            | channel                    | online                                                          | string       | App Step 3 |
            | page instance ID           | de                                                              | string       | App Step 3 |
            | page info version          | appVersion                                                      | regexp named | App Step 3 |
            | page segment               | personas                                                        | string       | App Step 3 |
            | sysEnv                     | app                                                             | string       | App Step 3 |
            | business unit              | BBVA Mexico                                                     | string       | App Step 3 |
            | site app name              | App BBVA Mexico                                                 | string       | App Step 3 |
            | project name               | DIY E2E Sales                                                   | string       | App Step 3 |
            | device mobile              | si                                                              | string       | App Step 3 |
            | user userState             | logado                                                          | string       | App Step 3 |
            | user segment global        | 003001                                                          | string       | App Step 3 |
            | profile ID                 | profileID                                                       | regexp named | App Step 3 |
            | user gender                | gender                                                          | regexp named | App Step 3 |
            | user age                   | age                                                             | regexp named | App Step 3 |
            | global application         | preapproved loan                                                | string       | App Step 3 |
            | application name           | prestamo personal one click                                     | string       | App Step 3 |
            | application type           | contratacion                                                    | string       | App Step 3 |
            | application typology       | preaprobado                                                     | string       | App Step 3 |
            | application process        | cliente sin codigo promocional                                  | string       | App Step 3 |
            | application step           | 3 confirmacion                                                  | string       | App Step 3 |
            | application offer          | mejora tasa interes                                             | string       | App Step 3 |
            | fulfillment model          | online                                                          | string       | App Step 3 |
            | product primary category   | prestamos                                                       | string       | App Step 3 |
            | product name               | prestamo nomina                                                 | string       | App Step 3 |
            | product amount             | 1199300                                                         | String       | App Step 3 |
            | product payment amount     | 49242.14                                                        | string       | App Step 3 |
            | product number of payments | 60                                                              | string       | App Step 3 |
            | product payment type       | mensual                                                         | string       | App Step 3 |
            | product currency           | MXN                                                             | string       | App Step 3 |
            | product interest rate      | 44.1                                                            | string       | App Step 3 |
            | products term              | 60                                                              | string       | App Step 3 |
            | custom fields              | uso prestamo:sostenible                                         | string       | App Step 3 |
            | internal campaign          |                                                                 | empty array  | App Step 3 |
            | optimization attributes    |                                                                 | empty array  | App Step 3 |

    @ANA_PPL007
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved - App Step 4
        Given a user with the following criteria
            | criteria                            |
            | oc loan pre approved offer page ppi |
        And the user accesses to continue process operative "consumer loan"
        And the analytics interceptor service is initiated
        When the user next "otp" step
        Then the analytics events contains the following variables
            | item                       | value                                                  | type         | event      |
            | analytics                  | analytics/glomo_base                                   | json schema  | App Step 4 |
            | version DL                 | 20250414_5.0                                           | string       | App Step 4 |
            | page name                  | app:privada:personas:prestamo personal one click:4 otp | string       | App Step 4 |
            | level 1                    | prestamo personal one click                            | string       | App Step 4 |
            | level 2                    | 4 otp                                                  | string       | App Step 4 |
            | language                   | ES                                                     | string       | App Step 4 |
            | page area                  | privada                                                | string       | App Step 4 |
            | page intent                | transaccion                                            | string       | App Step 4 |
            | channel                    | online                                                 | string       | App Step 4 |
            | page instance ID           | de                                                     | string       | App Step 4 |
            | page info version          | appVersion                                             | regexp named | App Step 4 |
            | page segment               | personas                                               | string       | App Step 4 |
            | sysEnv                     | app                                                    | string       | App Step 4 |
            | business unit              | BBVA Mexico                                            | string       | App Step 4 |
            | site app name              | App BBVA Mexico                                        | string       | App Step 4 |
            | project name               | DIY E2E Sales                                          | string       | App Step 4 |
            | device mobile              | si                                                     | string       | App Step 4 |
            | user userState             | logado                                                 | string       | App Step 4 |
            | user segment global        | 003001                                                 | string       | App Step 4 |
            | profile ID                 | profileID                                              | regexp named | App Step 4 |
            | user gender                | gender                                                 | regexp named | App Step 4 |
            | user age                   | age                                                    | regexp named | App Step 4 |
            | global application         | preapproved loan                                       | string       | App Step 4 |
            | application name           | prestamo personal one click                            | string       | App Step 4 |
            | application type           | contratacion                                           | string       | App Step 4 |
            | application typology       | preaprobado                                            | string       | App Step 4 |
            | application process        | cliente sin codigo promocional                         | string       | App Step 4 |
            | application step           | 4 otp                                                  | string       | App Step 4 |
            | application offer          | mejora tasa interes                                    | string       | App Step 4 |
            | fulfillment model          | online                                                 | string       | App Step 4 |
            | product primary category   | prestamos                                              | string       | App Step 4 |
            | product name               | prestamo personal inmediato                            | string       | App Step 4 |
            | product amount             | 1092400                                                | String       | App Step 4 |
            | product payment amount     | 48987.27                                               | string       | App Step 4 |
            | product number of payments | 60                                                     | string       | App Step 4 |
            | product payment type       | mensual                                                | string       | App Step 4 |
            | product currency           | MXN                                                    | string       | App Step 4 |
            | product interest rate      | 52.5                                                   | string       | App Step 4 |
            | products term              | 60                                                     | string       | App Step 4 |
            | custom fields              | uso prestamo:sostenible, firma:token                   | string       | App Step 4 |
            | internal campaign          |                                                        | empty array  | App Step 4 |
            | optimization attributes    |                                                        | empty array  | App Step 4 |

    @ANA_PPL008
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved - App Completed
        Given a user with the following criteria
            | criteria                                     |
            | oc loan pre approved offer page ppi complete |
        And the user accesses to continue process operative "consumer loan"
        And the user next "otp" step
        And the analytics interceptor service is initiated
        When the user confirms the token signature oc loan
        Then the analytics events contains the following variables:
            | item                         | value                                                           | type         | event         |
            | analytics                    | analytics/glomo_base                                            | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                    | string       | App Completed |
            | page name                    | app:privada:personas:prestamo personal one click:pagina exitosa | string       | App Completed |
            | level 1                      | prestamo personal one click                                     | string       | App Completed |
            | level 2                      | pagina exitosa                                                  | string       | App Completed |
            | language                     | ES                                                              | string       | App Completed |
            | page area                    | privada                                                         | string       | App Completed |
            | page intent                  | transaccion                                                     | string       | App Completed |
            | channel                      | online                                                          | string       | App Completed |
            | page instance ID             | de                                                              | string       | App Completed |
            | page info version            | appVersion                                                      | regexp named | App Completed |
            | page segment                 | personas                                                        | string       | App Completed |
            | sysEnv                       | app                                                             | string       | App Completed |
            | business unit                | BBVA Mexico                                                     | string       | App Completed |
            | site app name                | App BBVA Mexico                                                 | string       | App Completed |
            | project name                 | DIY E2E Sales                                                   | string       | App Completed |
            | device mobile                | si                                                              | string       | App Completed |
            | user userState               | logado                                                          | string       | App Completed |
            | user segment global          | 003001                                                          | string       | App Completed |
            | profile ID                   | profileID                                                       | regexp named | App Completed |
            | user gender                  | gender                                                          | regexp named | App Completed |
            | user age                     | age                                                             | regexp named | App Completed |
            | global application           | preapproved loan                                                | string       | App Completed |
            | application name             | prestamo personal one click                                     | string       | App Completed |
            | application type             | contratacion                                                    | string       | App Completed |
            | application typology         | preaprobado                                                     | string       | App Completed |
            | application process          | cliente sin codigo promocional                                  | string       | App Completed |
            | application step             | pagina exitosa                                                  | string       | App Completed |
            | application offer            | mejora tasa interes                                             | string       | App Completed |
            | application state            | contratado                                                      | string       | App Completed |
            | application operation number | 0085056237                                                      | string       | App Completed |
            | fulfillment model            | online                                                          | string       | App Completed |
            | product primary category     | prestamos                                                       | string       | App Completed |
            | product name                 | prestamo personal inmediato                                     | string       | App Completed |
            | product amount               | 1092400                                                         | string       | App Completed |
            | product payment amount       | 48987.27                                                        | string       | App Completed |
            | product number of payments   | 60                                                              | string       | App Completed |
            | product payment type         | mensual                                                         | string       | App Completed |
            | product currency             | MXN                                                             | string       | App Completed |
            | product interest rate        | 54.5                                                            | string       | App Completed |
            | products term                | 60                                                              | string       | App Completed |
            | product state                | contratado                                                      | string       | App Completed |
            | custom fields                | uso prestamo:sostenible, firma:token                            | string       | App Completed |
            | internal campaign            |                                                                 | empty array  | App Completed |
            | optimization attributes      |                                                                 | empty array  | App Completed |

    @ANA_PPL009
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved - App Completed (Pending)
        Given a user with the following criteria
            | criteria                                     |
            | oc loan pre approved offer page ppi complete |
        And the user accesses to continue process operative "consumer loan"
        And the user next "otp" step
        And the analytics interceptor service is initiated
        When the user confirms the token signature oc loan
        Then the analytics events contains the following variables:
            | item                         | value                                                           | type         | event         |
            | analytics                    | analytics/glomo_base                                            | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                    | string       | App Completed |
            | page name                    | app:privada:personas:prestamo personal one click:pagina exitosa | string       | App Completed |
            | level 1                      | prestamo personal one click                                     | string       | App Completed |
            | level 2                      | pagina exitosa                                                  | string       | App Completed |
            | language                     | ES                                                              | string       | App Completed |
            | page area                    | privada                                                         | string       | App Completed |
            | page intent                  | transaccion                                                     | string       | App Completed |
            | channel                      | online                                                          | string       | App Completed |
            | page instance ID             | de                                                              | string       | App Completed |
            | page info version            | appVersion                                                      | regexp named | App Completed |
            | page segment                 | personas                                                        | string       | App Completed |
            | sysEnv                       | app                                                             | string       | App Completed |
            | business unit                | BBVA Mexico                                                     | string       | App Completed |
            | site app name                | App BBVA Mexico                                                 | string       | App Completed |
            | project name                 | DIY E2E Sales                                                   | string       | App Completed |
            | device mobile                | si                                                              | string       | App Completed |
            | user userState               | logado                                                          | string       | App Completed |
            | user segment global          | 003001                                                          | string       | App Completed |
            | profile ID                   | profileID                                                       | regexp named | App Completed |
            | user gender                  | gender                                                          | regexp named | App Completed |
            | user age                     | age                                                             | regexp named | App Completed |
            | user segment profile         | beneficio 39                                                    | string       | App Completed |
            | global application           | preapproved loan                                                | string       | App Completed |
            | application name             | prestamo personal one click                                     | string       | App Completed |
            | application type             | contratacion                                                    | string       | App Completed |
            | application typology         | preaprobado                                                     | string       | App Completed |
            | application process          | cliente sin codigo promocional                                  | string       | App Completed |
            | application step             | pagina exitosa                                                  | string       | App Completed |
            | application offer            | mejora tasa interes                                             | string       | App Completed |
            | application state            | en revision                                                     | string       | App Completed |
            | application operation number | 0085056237                                                      | string       | App Completed |
            | fulfillment model            | online                                                          | string       | App Completed |
            | product primary category     | prestamos                                                       | string       | App Completed |
            | product name                 | prestamo personal inmediato                                     | string       | App Completed |
            | product amount               | 1092400                                                         | string       | App Completed |
            | product payment amount       | 48987.27                                                        | string       | App Completed |
            | product number of payments   | 60                                                              | string       | App Completed |
            | product payment type         | mensual                                                         | string       | App Completed |
            | product currency             | MXN                                                             | string       | App Completed |
            | product interest rate        | 54.5                                                            | string       | App Completed |
            | products term                | 60                                                              | string       | App Completed |
            | product state                | en revision                                                     | string       | App Completed |
            | custom fields                | uso prestamo:sostenible, firma:token                            | string       | App Completed |
            | internal campaign            |                                                                 | empty array  | App Completed |
            | optimization attributes      |                                                                 | empty array  | App Completed |

    @ANA_PPL010
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved - App Completed (Rejected)
        Given a user with the following criteria
            | criteria                                     |
            | oc loan pre approved offer page ppi complete |
        And the user accesses to continue process operative "consumer loan"
        And the user next "otp" step
        And the analytics interceptor service is initiated
        When the user confirms the token signature oc loan
        Then the analytics events contains the following variables:
            | item                         | value                                                           | type         | event         |
            | analytics                    | analytics/glomo_base                                            | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                    | string       | App Completed |
            | page name                    | app:privada:personas:prestamo personal one click:pagina exitosa | string       | App Completed |
            | level 1                      | prestamo personal one click                                     | string       | App Completed |
            | level 2                      | pagina exitosa                                                  | string       | App Completed |
            | language                     | ES                                                              | string       | App Completed |
            | page area                    | privada                                                         | string       | App Completed |
            | page intent                  | transaccion                                                     | string       | App Completed |
            | channel                      | online                                                          | string       | App Completed |
            | page instance ID             | de                                                              | string       | App Completed |
            | page info version            | appVersion                                                      | regexp named | App Completed |
            | page segment                 | personas                                                        | string       | App Completed |
            | sysEnv                       | app                                                             | string       | App Completed |
            | business unit                | BBVA Mexico                                                     | string       | App Completed |
            | site app name                | App BBVA Mexico                                                 | string       | App Completed |
            | project name                 | DIY E2E Sales                                                   | string       | App Completed |
            | device mobile                | si                                                              | string       | App Completed |
            | user userState               | logado                                                          | string       | App Completed |
            | user segment global          | 003001                                                          | string       | App Completed |
            | profile ID                   | profileID                                                       | regexp named | App Completed |
            | user gender                  | gender                                                          | regexp named | App Completed |
            | user age                     | age                                                             | regexp named | App Completed |
            | user segment profile         | beneficio 38                                                    | string       | App Completed |
            | global application           | preapproved loan                                                | string       | App Completed |
            | application name             | prestamo personal one click                                     | string       | App Completed |
            | application type             | contratacion                                                    | string       | App Completed |
            | application typology         | preaprobado                                                     | string       | App Completed |
            | application process          | cliente sin codigo promocional                                  | string       | App Completed |
            | application step             | pagina exitosa                                                  | string       | App Completed |
            | application offer            | mejora tasa interes                                             | string       | App Completed |
            | application state            | rechazado                                                       | string       | App Completed |
            | application operation number |                                                                 | string       | App Completed |
            | fulfillment model            | online                                                          | string       | App Completed |
            | product primary category     | prestamos                                                       | string       | App Completed |
            | product name                 | prestamo nomina                                                 | string       | App Completed |
            | product amount               | 750000                                                          | string       | App Completed |
            | product payment amount       | 28141.08                                                        | string       | App Completed |
            | product number of payments   | 60                                                              | string       | App Completed |
            | product payment type         | mensual                                                         | string       | App Completed |
            | product currency             | MXN                                                             | string       | App Completed |
            | product interest rate        | 40.1                                                            | string       | App Completed |
            | products term                | 60                                                              | string       | App Completed |
            | product state                | rechazado                                                       | string       | App Completed |
            | custom fields                | uso prestamo:sostenible, firma:token, rechazo: rechazo buro     | string       | App Completed |
            | internal campaign            |                                                                 | empty array  | App Completed |
            | optimization attributes      |                                                                 | empty array  | App Completed |

    @ANA_PPL011
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved - Footprint Dashboard
        Given a user with the following criteria
            | criteria                            |
            | oc loan pre approved offer page nom |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user navigates to the oc loan offer
        Then the analytics events contains the following variables
            | item                                         | value                                                 | type             | event     | event number |
            | analytics                                    | analytics/glomo_base                                  | json schema      | Page View | 1            |
            | version DL                                   | 20250414_5.0                                          | string           | Page View | 1            |
            | page name                                    | app:privada:personas:posicion global:destacado        | string           | Page View | 1            |
            | level 1                                      | posicion global                                       | string           | Page View | 1            |
            | level 2                                      | destacado                                             | string           | Page View | 1            |
            | language                                     | ES                                                    | string           | Page View | 1            |
            | page area                                    | privada                                               | string           | Page View | 1            |
            | page intent                                  | informacion                                           | string           | Page View | 1            |
            | channel                                      | online                                                | string           | Page View | 1            |
            | page info version                            | appVersion                                            | regexp named     | Page View | 1            |
            | page segment                                 | personas                                              | string           | Page View | 1            |
            | sysEnv                                       | app                                                   | string           | Page View | 1            |
            | business unit                                | BBVA Mexico                                           | string           | Page View | 1            |
            | site app name                                | App BBVA Mexico                                       | string           | Page View | 1            |
            | project name                                 | Futura                                                | string           | Page View | 1            |
            | device mobile                                | si                                                    | string           | Page View | 1            |
            | user userState                               | logado                                                | string           | Page View | 1            |
            | user segment global                          | 003001                                                | string           | Page View | 1            |
            | profile ID                                   | profileID                                             | regexp named     | Page View | 1            |
            | internal campaign attributes location        | dashboard destacado-te puede interesar-superior-1-1-5 | string           | Page View | 1            |
            | internal campaign attributes campaign format | carrusel                                              | string           | Page View | 1            |
            | internal campaign attributes collective code | -                                                     | string           | Page View | 1            |
            | internal campaign attributes name            | Cumple tus metas y sal de apuros. Obtén tu préstamo   | string           | Page View | 1            |
            | internal campaign attributes product         |                                                       | string           | Page View | 1            |
            | internal campaign attributes product code    |                                                       | string           | Page View | 1            |
            | internal campaign attributes quantity        | 1199300                                               | string           | Page View | 1            |
            | optimization attributes                      |                                                       | empty array      | Page View | 1            |
            | application                                  |                                                       | empty str object | Page View | 1            |
            | products attributes                          |                                                       | empty array      | Page View | 1            |

    @ANA_PPL012
    @analytics
    @MX
    @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved -  App Page Visit interest rate
        Given a user with the following criteria
            | criteria                            |
            | oc loan pre approved offer page nom |
        And the user accesses to continue process operative "consumer loan"
        And the analytics interceptor service is initiated
        When the user next "open tooltip interest rate" step
        Then the analytics events contains the following variables
            | item                    | value                                                                            | type             | event     |
            | analytics               | analytics/glomo_base                                                             | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                     | string           | Page View |
            | page name               | app:privada:personas:prestamo personal one click:1 detalle:tasas de interes fijo | string           | Page View |
            | level 1                 | prestamo personal one click                                                      | string           | Page View |
            | level 2                 | 1 detalle                                                                        | string           | Page View |
            | level 3                 | tasas de interes fijo                                                            | string           | Page View |
            | language                | ES                                                                               | string           | Page View |
            | page area               | privada                                                                          | string           | Page View |
            | page intent             | transaccion                                                                      | string           | Page View |
            | channel                 | online                                                                           | string           | Page View |
            | page instance ID        | de                                                                               | string           | Page View |
            | page info version       | appVersion                                                                       | regexp named     | Page View |
            | page segment            | personas                                                                         | string           | Page View |
            | sysEnv                  | app                                                                              | string           | Page View |
            | business unit           | BBVA Mexico                                                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                                                  | string           | Page View |
            | project name            | DIY E2E Sales                                                                    | string           | Page View |
            | device mobile           | si                                                                               | string           | Page View |
            | user userState          | logado                                                                           | string           | Page View |
            | user segment global     | 003001                                                                           | string           | Page View |
            | profile ID              | profileID                                                                        | regexp named     | Page View |
            | user gender             | gender                                                                           | regexp named     | Page View |
            | user age                | age                                                                              | regexp named     | Page View |
            | internal campaign       |                                                                                  | empty array      | Page View |
            | optimization attributes |                                                                                  | empty array      | Page View |
            | application             |                                                                                  | empty str object | Page View |
            | products attributes     |                                                                                  | empty array      | Page View |

    @ANA_PPL013
    @analytics
    @MX
    @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved -  App Page Visit commission
        Given a user with the following criteria
            | criteria                            |
            | oc loan pre approved offer page ppi |
        And the user accesses to continue process operative "consumer loan"
        And the analytics interceptor service is initiated
        When the user next "open tooltip commission" step
        Then the analytics events contains the following variables
            | item                    | value                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                                       | string           | Page View |
            | page name               | app:privada:personas:prestamo personal one click:comision apertura | string           | Page View |
            | level 1                 | prestamo personal one click                                        | string           | Page View |
            | level 2                 | comision apertura                                                  | string           | Page View |
            | language                | ES                                                                 | string           | Page View |
            | page area               | privada                                                            | string           | Page View |
            | page intent             | transaccion                                                        | string           | Page View |
            | channel                 | online                                                             | string           | Page View |
            | page instance ID        | de                                                                 | string           | Page View |
            | page info version       | appVersion                                                         | regexp named     | Page View |
            | page segment            | personas                                                           | string           | Page View |
            | sysEnv                  | app                                                                | string           | Page View |
            | business unit           | BBVA Mexico                                                        | string           | Page View |
            | site app name           | App BBVA Mexico                                                    | string           | Page View |
            | project name            | DIY E2E Sales                                                      | string           | Page View |
            | device mobile           | si                                                                 | string           | Page View |
            | user userState          | logado                                                             | string           | Page View |
            | user segment global     | 003001                                                             | string           | Page View |
            | profile ID              | profileID                                                          | regexp named     | Page View |
            | user gender             | gender                                                             | regexp named     | Page View |
            | user age                | age                                                                | regexp named     | Page View |
            | internal campaign       |                                                                    | empty array      | Page View |
            | optimization attributes |                                                                    | empty array      | Page View |
            | application             |                                                                    | empty str object | Page View |
            | products attributes     |                                                                    | empty array      | Page View |

    @ANA_PPL014
    @analytics
    @MX
    @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved -  App Page Visit open tooltip cat
        Given a user with the following criteria
            | criteria                            |
            | oc loan pre approved offer page nom |
        And the user accesses to continue process operative "consumer loan"
        And the analytics interceptor service is initiated
        When the user next "open tooltip cat" step
        Then the analytics events contains the following variables
            | item                    | value                                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                 | string           | Page View |
            | page name               | app:privada:personas:prestamo personal one click:1 detalle:costo anual total | string           | Page View |
            | level 1                 | prestamo personal one click                                                  | string           | Page View |
            | level 2                 | 1 detalle                                                                    | string           | Page View |
            | language                | ES                                                                           | string           | Page View |
            | page area               | privada                                                                      | string           | Page View |
            | page intent             | transaccion                                                                  | string           | Page View |
            | channel                 | online                                                                       | string           | Page View |
            | page instance ID        | de                                                                           | string           | Page View |
            | page info version       | appVersion                                                                   | regexp named     | Page View |
            | page segment            | personas                                                                     | string           | Page View |
            | sysEnv                  | app                                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                                              | string           | Page View |
            | project name            | DIY E2E Sales                                                                | string           | Page View |
            | device mobile           | si                                                                           | string           | Page View |
            | user userState          | logado                                                                       | string           | Page View |
            | user segment global     | 003001                                                                       | string           | Page View |
            | profile ID              | profileID                                                                    | regexp named     | Page View |
            | user gender             | gender                                                                       | regexp named     | Page View |
            | user age                | age                                                                          | regexp named     | Page View |
            | internal campaign       |                                                                              | empty array      | Page View |
            | optimization attributes |                                                                              | empty array      | Page View |
            | application             |                                                                              | empty str object | Page View |
            | products attributes     |                                                                              | empty array      | Page View |

    @ANA_PPL015
    @analytics
    @MX
    @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved - Footprint beneficios
        Given a user with the following criteria
            | criteria                            |
            | oc loan pre approved offer page nom |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to continue process operative "consumer loan"
        Then the analytics events contains the following variables
            | item                    | value                                                       | type             | event     |
            | analytics               | analytics/glomo_base                                        | json schema      | Page View |
            | version DL              | 20250414_5.0                                                | string           | Page View |
            | page name               | app:privada:personas:prestamo personal one click:beneficios | string           | Page View |
            | level 1                 | prestamo personal one click                                 | string           | Page View |
            | level 2                 | beneficios                                                  | string           | Page View |
            | language                | ES                                                          | string           | Page View |
            | page area               | privada                                                     | string           | Page View |
            | page intent             | transaccion                                                 | string           | Page View |
            | channel                 | online                                                      | string           | Page View |
            | page instance ID        | de                                                          | string           | Page View |
            | page info version       | appVersion                                                  | regexp named     | Page View |
            | page segment            | personas                                                    | string           | Page View |
            | sysEnv                  | app                                                         | string           | Page View |
            | business unit           | BBVA Mexico                                                 | string           | Page View |
            | site app name           | App BBVA Mexico                                             | string           | Page View |
            | project name            | DIY E2E Sales                                               | string           | Page View |
            | device mobile           | si                                                          | string           | Page View |
            | user userState          | logado                                                      | string           | Page View |
            | user segment global     | 003001                                                      | string           | Page View |
            | profile ID              | profileID                                                   | regexp named     | Page View |
            | user gender             | gender                                                      | regexp named     | Page View |
            | user age                | age                                                         | regexp named     | Page View |
            | internal campaign       |                                                             | empty array      | Page View |
            | optimization attributes |                                                             | empty array      | Page View |
            | application             |                                                             | empty str object | Page View |
            | products attributes     |                                                             | empty array      | Page View |

    @ANA_PPL016
    @analytics
    @MX
    @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved - Footprint Sustainable Catalog
        Given a user with the following criteria
            | criteria                                        |
            | oc loan pre approved offer page nom sustainable |
        And the user accesses contract product section
        And the user accesses to continue process operative "consumer loan"
        And the analytics interceptor service is initiated
        When the user next "sustainable catalog" step
        Then the analytics events contains the following variables
            | item                    | value                                                                             | type             | event     |
            | analytics               | analytics/glomo_base                                                              | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                      | string           | Page View |
            | page name               | app:privada:personas:prestamo personal one click:explorador productos sostenibles | string           | Page View |
            | level 1                 | prestamo personal one click                                                       | string           | Page View |
            | level 2                 | explorador productos sostenibles                                                  | string           | Page View |
            | language                | ES                                                                                | string           | Page View |
            | page area               | privada                                                                           | string           | Page View |
            | page intent             | transaccion                                                                       | string           | Page View |
            | channel                 | online                                                                            | string           | Page View |
            | page instance ID        | de                                                                                | string           | Page View |
            | page info version       | appVersion                                                                        | regexp named     | Page View |
            | page segment            | personas                                                                          | string           | Page View |
            | sysEnv                  | app                                                                               | string           | Page View |
            | business unit           | BBVA Mexico                                                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                                                   | string           | Page View |
            | project name            | DIY E2E Sales                                                                     | string           | Page View |
            | device mobile           | si                                                                                | string           | Page View |
            | user userState          | logado                                                                            | string           | Page View |
            | user segment global     | 003001                                                                            | string           | Page View |
            | profile ID              | profileID                                                                         | regexp named     | Page View |
            | user gender             | gender                                                                            | regexp named     | Page View |
            | user age                | age                                                                               | regexp named     | Page View |
            | internal campaign       |                                                                                   | empty array      | Page View |
            | optimization attributes |                                                                                   | empty array      | Page View |
            | application             |                                                                                   | empty str object | Page View |
            | products attributes     |                                                                                   | empty array      | Page View |

    @ANA_PPL017
    @analytics
    @MX
    @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved - Footprint Sustainable Simulator
        Given a user with the following criteria
            | criteria                                        |
            | oc loan pre approved offer page nom sustainable |
        And the user accesses contract product section
        And the user accesses to continue process operative "consumer loan"
        And the analytics interceptor service is initiated
        When the user next "sustainable simulator" step
        Then the analytics events contains the following variables
            | item                    | value                                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                 | string           | Page View |
            | page name               | app:privada:personas:prestamo personal one click:simulador tasas sostenibles | string           | Page View |
            | level 1                 | prestamo personal one click                                                  | string           | Page View |
            | level 2                 | simulador tasas sostenibles                                                  | string           | Page View |
            | language                | ES                                                                           | string           | Page View |
            | page area               | privada                                                                      | string           | Page View |
            | page intent             | transaccion                                                                  | string           | Page View |
            | channel                 | online                                                                       | string           | Page View |
            | page instance ID        | de                                                                           | string           | Page View |
            | page info version       | appVersion                                                                   | regexp named     | Page View |
            | page segment            | personas                                                                     | string           | Page View |
            | sysEnv                  | app                                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                                              | string           | Page View |
            | project name            | DIY E2E Sales                                                                | string           | Page View |
            | device mobile           | si                                                                           | string           | Page View |
            | user userState          | logado                                                                       | string           | Page View |
            | user segment global     | 003001                                                                       | string           | Page View |
            | profile ID              | profileID                                                                    | regexp named     | Page View |
            | user gender             | gender                                                                       | regexp named     | Page View |
            | user age                | age                                                                          | regexp named     | Page View |
            | internal campaign       |                                                                              | empty array      | Page View |
            | optimization attributes |                                                                              | empty array      | Page View |
            | application             |                                                                              | empty str object | Page View |
            | products attributes     |                                                                              | empty array      | Page View |

    @ANA_PPL018
    @analytics
    @MX @vbank
    @web @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved - Footprint Dashboard - NBA
        Given a user with the following criteria
            | criteria                                |
            | oc loan pre approved offer page nom nba |
        When the user accesses to dashboard
        Then the device contains the following variables
            | item                                           | value                                                                             | type         |
            | analytics                                      | analytics/glomo_base                                                              | json schema  |
            | version DL                                     | 20250414_5.0                                                                      | string       |
            | page name                                      | app:privada:personas:posicion global:destacado                                    | string       |
            | level 1                                        | posicion global                                                                   | string       |
            | level 2                                        | destacado                                                                         | string       |
            | language                                       | ES                                                                                | string       |
            | page area                                      | privada                                                                           | string       |
            | page intent                                    | informacion                                                                       | string       |
            | channel                                        | online                                                                            | string       |
            | page instance ID                               | de                                                                                | string       |
            | page info version                              | appVersion                                                                        | regexp named |
            | page segment                                   | personas                                                                          | string       |
            | sysEnv                                         | app                                                                               | string       |
            | business unit                                  | BBVA Mexico                                                                       | string       |
            | site app name                                  | App BBVA Mexico                                                                   | string       |
            | project name                                   | Futura                                                                            | string       |
            | device mobile                                  | si                                                                                | string       |
            | user userState                                 | logado                                                                            | string       |
            | user segment global                            | 003001                                                                            | string       |
            | profile ID                                     | profileID                                                                         | regexp named |
            | internal campaign attributes location          | dashboard destacado-nba-superior-1-1-5                                            | string       |
            | internal campaign attributes campaign format   | carrusel                                                                          | string       |
            | internal campaign attributes collective code   | -                                                                                 | string       |
            | internal campaign attributes name              | Aprovecha tu descuento especial. Obtén un préstamo                                | string       |
            | internal campaign attributes product           |                                                                                   | string       |
            | internal campaign attributes product code      |                                                                                   | string       |
            | internal campaign attributes quantity          | 2000000                                                                           | string       |
            | internal campaign attributes location 1        | dashboard destacado-nba-superior-2-2-5                                            | string       |
            | internal campaign attributes campaign format 1 | carrusel                                                                          | string       |
            | internal campaign attributes collective code 1 | -                                                                                 | string       |
            | internal campaign attributes campaign name 1   | No necesitas ser experto, para invertir en fondos BBVA. Comienza hoy desde $50.00 | string       |
            | internal campaign attributes product 1         |                                                                                   | string       |
            | internal campaign attributes product code 1    |                                                                                   | string       |
            | internal campaign attributes quantity 1        | 0                                                                                 | string       |

    @ANA_PPL019
    @analytics
    @MX
    @web
    @vbank @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved - App Page Visit - Dashboard - NBO
        Given a user with the following criteria
            | criteria                                      |
            | oc loan pre approved offer page ppi dashboard |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to continue process operative "PRESTAMO PERSONAL INMEDIATO"
        Then the analytics events contains the following variables
            | item                     | value                                                      | type         | event          |
            | analytics                | analytics/glomo_base                                       | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                               | string       | App Page Visit |
            | page name                | app:privada:personas:prestamo personal one click:1 detalle | string       | App Page Visit |
            | level 1                  | prestamo personal one click                                | string       | App Page Visit |
            | level 2                  | 1 detalle                                                  | string       | App Page Visit |
            | language                 | ES                                                         | string       | App Page Visit |
            | page area                | privada                                                    | string       | App Page Visit |
            | page intent              | transaccion                                                | string       | App Page Visit |
            | channel                  | online                                                     | string       | App Page Visit |
            | page instance ID         | de                                                         | string       | App Page Visit |
            | page info version        | appVersion                                                 | regexp named | App Page Visit |
            | page segment             | personas                                                   | string       | App Page Visit |
            | sysEnv                   | app                                                        | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                            | string       | App Page Visit |
            | project name             | DIY E2E Sales                                              | string       | App Page Visit |
            | device mobile            | si                                                         | string       | App Page Visit |
            | user userState           | logado                                                     | string       | App Page Visit |
            | user segment global      | 003001                                                     | string       | App Page Visit |
            | profile ID               | profileID                                                  | regexp named | App Page Visit |
            | user gender              | gender                                                     | regexp named | App Page Visit |
            | user age                 | age                                                        | regexp named | App Page Visit |
            | global application       | preapproved loan                                           | string       | App Page Visit |
            | application name         | prestamo personal one click                                | string       | App Page Visit |
            | application type         | contratacion                                               | string       | App Page Visit |
            | application typology     | preaprobado                                                | string       | App Page Visit |
            | application process      | cliente sin codigo promocional                             | string       | App Page Visit |
            | application step         | 1 detalle                                                  | string       | App Page Visit |
            | fulfillment model        | online                                                     | string       | App Page Visit |
            | qualified visits         | true                                                       | string       | App Page Visit |
            | product primary category | prestamos                                                  | string       | App Page Visit |
            | product name             | prestamo personal inmediato                                | string       | App Page Visit |
            | internal campaign        |                                                            | empty array  | App Page Visit |
            | optimization attributes  |                                                            | empty array  | App Page Visit |

    @ANA_PPL020
    @analytics
    @MX
    @web
    @vbank @ios @android
    @backend(test)
    @web-done
    Scenario: OC Loan Preapproved - App Step 4 - Dashboard - NBO
        Given a user with the following criteria
            | criteria                                      |
            | oc loan pre approved offer page ppi dashboard |
        And the user accesses to dashboard
        And the user accesses to continue process operative "PRESTAMO PERSONAL INMEDIATO"
        And the analytics interceptor service is initiated
        When the user next "otp" step
        Then the analytics events contains the following variables
            | item                       | value                                                  | type         | event      |
            | analytics                  | analytics/glomo_base                                   | json schema  | App Step 4 |
            | version DL                 | 20250414_5.0                                           | string       | App Step 4 |
            | page name                  | app:privada:personas:prestamo personal one click:4 otp | string       | App Step 4 |
            | level 1                    | prestamo personal one click                            | string       | App Step 4 |
            | level 2                    | 4 otp                                                  | string       | App Step 4 |
            | language                   | ES                                                     | string       | App Step 4 |
            | page area                  | privada                                                | string       | App Step 4 |
            | page intent                | transaccion                                            | string       | App Step 4 |
            | channel                    | online                                                 | string       | App Step 4 |
            | page instance ID           | de                                                     | string       | App Step 4 |
            | page info version          | appVersion                                             | regexp named | App Step 4 |
            | page segment               | personas                                               | string       | App Step 4 |
            | sysEnv                     | app                                                    | string       | App Step 4 |
            | business unit              | BBVA Mexico                                            | string       | App Step 4 |
            | site app name              | App BBVA Mexico                                        | string       | App Step 4 |
            | project name               | DIY E2E Sales                                          | string       | App Step 4 |
            | device mobile              | si                                                     | string       | App Step 4 |
            | user userState             | logado                                                 | string       | App Step 4 |
            | user segment global        | 003001                                                 | string       | App Step 4 |
            | profile ID                 | profileID                                              | regexp named | App Step 4 |
            | user gender                | gender                                                 | regexp named | App Step 4 |
            | user age                   | age                                                    | regexp named | App Step 4 |
            | global application         | preapproved loan                                       | string       | App Step 4 |
            | application name           | prestamo personal one click                            | string       | App Step 4 |
            | application type           | contratacion                                           | string       | App Step 4 |
            | application typology       | preaprobado                                            | string       | App Step 4 |
            | application process        | cliente sin codigo promocional                         | string       | App Step 4 |
            | application step           | 4 otp                                                  | string       | App Step 4 |
            | application offer          | mejora tasa interes                                    | string       | App Step 4 |
            | fulfillment model          | online                                                 | string       | App Step 4 |
            | product primary category   | prestamos                                              | string       | App Step 4 |
            | product name               | prestamo personal inmediato                            | string       | App Step 4 |
            | product amount             | 1839500                                                | string       | App Step 4 |
            | product payment amount     | 49329.65                                               | string       | App Step 4 |
            | product number of payments | 60                                                     | string       | App Step 4 |
            | product payment type       | mensual                                                | string       | App Step 4 |
            | product currency           | MXN                                                    | string       | App Step 4 |
            | product interest rate      | 19.9                                                   | string       | App Step 4 |
            | products term              | 60                                                     | string       | App Step 4 |
            | custom fields              | uso prestamo:sostenible, firma:token                   | string       | App Step 4 |
            | internal campaign          |                                                        | empty array  | App Step 4 |
            | optimization attributes    |                                                        | empty array  | App Step 4 |
