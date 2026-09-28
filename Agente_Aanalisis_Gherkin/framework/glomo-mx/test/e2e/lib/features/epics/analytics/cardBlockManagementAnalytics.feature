@cardBlockManagementAnalytics
Feature: Card Block Management Analytics

    @ANA_EVENT_CBM001
    @analytics @MX
    @web @android @ios @web-done
    @vbank @backend(artichoke)
    Scenario Outline: Funnel - events - App On Click Start and App Page Visit - <management> management
        Given a user with the following criteria
            | criteria                   |
            | <card description>         |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses card block management operative with "<card status>" "<card type>" card
        Then the analytics events contains the following variables
            | item                     | value                                                             | type         | event                              |
            | analytics                | analytics/glomo_base                                              | json schema  | App On Click Start, App Page Visit |
            | version DL               | 20250414_5.0                                                      | string       | App On Click Start, App Page Visit |
            | page name                | app:privada:personas:tarjetas:<on click start>:detalle:operativas | string       | App On Click Start                 |
            | page name                | app:privada:personas:pedir reposicion:<page visit>                | string       | App Page Visit                     |
            | level 1                  | tarjetas                                                          | string       | App On Click Start                 |
            | level 1                  | pedir reposicion                                                  | string       | App Page Visit                     |
            | level 2                  | <on click start>                                                  | string       | App On Click Start                 |
            | level 2                  | <page visit>                                                      | string       | App Page Visit                     |
            | level 3                  | detalle                                                           | string       | App On Click Start                 |
            | level 4                  | operativas                                                        | string       | App On Click Start                 |
            | language                 | ES                                                                | string       | App On Click Start, App Page Visit |
            | page area                | privada                                                           | string       | App On Click Start, App Page Visit |
            | page intent              | informacion                                                       | string       | App On Click Start, App Page Visit |
            | channel                  | online                                                            | string       | App On Click Start, App Page Visit |
            | page instance ID         | de                                                                | string       | App On Click Start, App Page Visit |
            | page info version        | appVersion                                                        | regexp named | App On Click Start, App Page Visit |
            | page segment             | personas                                                          | string       | App On Click Start, App Page Visit |
            | sysEnv                   | app                                                               | string       | App On Click Start, App Page Visit |
            | business unit            | BBVA Mexico                                                       | string       | App On Click Start, App Page Visit |
            | site app name            | App BBVA Mexico                                                   | string       | App On Click Start, App Page Visit |
            | project name             | DIY Payments                                                      | string       | App On Click Start, App Page Visit |
            | device mobile            | si                                                                | string       | App On Click Start, App Page Visit |
            | user userState           | logado                                                            | string       | App On Click Start, App Page Visit |
            | user segment global      | 003001                                                            | string       | App On Click Start, App Page Visit |
            | profile ID               | profileID                                                         | regexp named | App On Click Start, App Page Visit |
            | user gender              | gender                                                            | regexp named | App On Click Start, App Page Visit |
            | user age                 | age                                                               | regexp named | App On Click Start, App Page Visit |
            | global application       | replacement card                                                  | string       | App On Click Start, App Page Visit |
            | application name         | pedir reposicion                                                  | string       | App On Click Start, App Page Visit |
            | application type         | operativa                                                         | string       | App On Click Start, App Page Visit |
            | application step         | detalle de tarjeta                                                | string       | App On Click Start                 |
            | application step         | <page visit>                                                      | string       | App Page Visit                     |
            | fulfillment model        | online                                                            | string       | App On Click Start, App Page Visit |
            | product primary category | tarjetas                                                          | string       | App On Click Start, App Page Visit |
            | product name             | <produc name>                                                     | string       | App On Click Start, App Page Visit |
            | product subtype          | <on click start>                                                  | string       | App On Click Start, App Page Visit |
            | internal campaign        |                                                                   | empty array  | App On Click Start, App Page Visit |
            | optimization attributes  |                                                                   | empty array  | App On Click Start, App Page Visit |

        Examples:
            | card type | card status     | on click start | page visit        | card description              | produc name                      | management           |
            | debit     | operative       | debito         | 1 motivo          | debit card operative          | tarjeta de debito replacement 1  | block                |
            | credit    | operative       | credito        | 1 motivo          | credit card operative         | tarjeta de credito replacement 1 | block and reposition |
            | credit    | blocked lost    | credito        | 1 tipo de tarjeta | credit card blocked by lost   | tarjeta de credito replacement 2 | reposition           |
            | debit     | blocked renewal | debito         | 1 tipo de tarjeta | debit card blocked by renewal | tarjeta de debito replacement 4  | renewal              |

    @ANA_EVENT_CBM002
    @analytics
    @MX @vbank @backend(artichoke)
    @web @ios @android @web-done
    Scenario Outline: Funnel - event - App Started - management <management> - step <step>
        Given a user with the following criteria
            | criteria                   |
            | <card description>         |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "<card status>" "<card type>" card
        And the analytics interceptor service is initiated
        When the user confirms the <management> card process with the following criteria
            | item     | value      |
            | reason   | <reason>   |
            | new card | <new card> |
        Then the analytics events contains the following variables
            | item                     | value                                             | type         | event       |
            | analytics                | analytics/glomo_base                              | json schema  | App Started |
            | version DL               | 20250414_5.0                                      | string       | App Started |
            | page name                | app:privada:personas:pedir reposicion:<page name> | string       | App Started |
            | level 1                  | pedir reposicion                                  | string       | App Started |
            | level 2                  | <page name>                                       | string       | App Started |
            | language                 | ES                                                | string       | App Started |
            | page area                | privada                                           | string       | App Started |
            | page intent              | informacion                                       | string       | App Started |
            | channel                  | online                                            | string       | App Started |
            | page instance ID         | de                                                | string       | App Started |
            | page info version        | appVersion                                        | regexp named | App Started |
            | page segment             | personas                                          | string       | App Started |
            | sysEnv                   | app                                               | string       | App Started |
            | business unit            | BBVA Mexico                                       | string       | App Started |
            | site app name            | App BBVA Mexico                                   | string       | App Started |
            | project name             | DIY Payments                                      | string       | App Started |
            | device mobile            | si                                                | string       | App Started |
            | user userState           | logado                                            | string       | App Started |
            | user segment global      | 003001                                            | string       | App Started |
            | profile ID               | profileID                                         | regexp named | App Started |
            | user gender              | gender                                            | regexp named | App Started |
            | user age                 | age                                               | regexp named | App Started |
            | global application       | replacement card                                  | string       | App Started |
            | application name         | pedir reposicion                                  | string       | App Started |
            | application type         | operativa                                         | string       | App Started |
            | application step         | <step>                                            | string       | App Started |
            | fulfillment model        | online                                            | string       | App Started |
            | product primary category | tarjetas                                          | string       | App Started |
            | product name             | <produc name>                                     | string       | App Started |
            | product subtype          | <product subtype>                                  | string       | App Started |
            | internal campaign        |                                                   | empty array  | App Started |
            | optimization attributes  |                                                   | empty array  | App Started |

        Examples:
            | management           | card type | card status     | reason | new card       | page name         | step          | card description              | produc name                      | product subtype |
            | block                | debit     | operative       | theft  |                | 1 motivo          | robo          | debit card operative          | tarjeta de debito replacement 1  | debito          |
            | block and reposition | credit    | operative       | lost   |                | 1 motivo          | extravio      | credit card operative         | tarjeta de credito replacement 1 | credito         |
            | reposition           | credit    | blocked lost    |        | instant        | 1 tipo de tarjeta | instantanea   | credit card blocked by lost   | tarjeta de credito replacement 2 | credito         |
            | reposition           | credit    | blocked lost    |        | custom         | 1 tipo de tarjeta | personalizada | credit card blocked by lost   | tarjeta de credito replacement 2 | credito         |
            | renewal              | debit     | blocked renewal |        | single instant | 1 tipo de tarjeta | continuar     | debit card blocked by renewal | tarjeta de debito replacement 4  | debito          |

    @ANA_EVENT_CBM003
    @analytics
    @MX @vbank @backend(artichoke)
    @web @ios @android @web-done
    Scenario Outline: Funnel - <scenario> - event - App Step 2
        Given a user with the following criteria
            | criteria                   |
            | <card description>         |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "<card status>" "<card type>" card
        And the analytics interceptor service is initiated
        When the user confirms the <management> card process with the following criteria
            | item     | value      |
            | reason   | <reason>   |
            | new card | <new card> |
        Then the analytics events contains the following variables
            | item                     | value                                          | type         | event      |
            | analytics                | analytics/glomo_base                           | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                   | string       | App Step 2 |
            | page name                | app:privada:personas:pedir reposicion:<step 2> | string       | App Step 2 |
            | level 1                  | pedir reposicion                               | string       | App Step 2 |
            | level 2                  | <step 2>                                       | string       | App Step 2 |
            | language                 | ES                                             | string       | App Step 2 |
            | page area                | privada                                        | string       | App Step 2 |
            | page intent              | informacion                                    | string       | App Step 2 |
            | channel                  | online                                         | string       | App Step 2 |
            | page instance ID         | de                                             | string       | App Step 2 |
            | page info version        | appVersion                                     | regexp named | App Step 2 |
            | page segment             | personas                                       | string       | App Step 2 |
            | sysEnv                   | app                                            | string       | App Step 2 |
            | business unit            | BBVA Mexico                                    | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                | string       | App Step 2 |
            | project name             | DIY Payments                                   | string       | App Step 2 |
            | device mobile            | si                                             | string       | App Step 2 |
            | user userState           | logado                                         | string       | App Step 2 |
            | user segment global      | 003001                                         | string       | App Step 2 |
            | profile ID               | profileID                                      | regexp named | App Step 2 |
            | user gender              | gender                                         | regexp named | App Step 2 |
            | user age                 | age                                            | regexp named | App Step 2 |
            | global application       | replacement card                               | string       | App Step 2 |
            | application name         | pedir reposicion                               | string       | App Step 2 |
            | application type         | operativa                                      | string       | App Step 2 |
            | application step         | <step 2>                                       | string       | App Step 2 |
            | application typology     | <typology>                                     | string       | App Step 2 |
            | application process      | <process>                                      | string       | App Step 2 |
            | fulfillment model        | online                                         | string       | App Step 2 |
            | product primary category | tarjetas                                       | string       | App Step 2 |
            | product name             | <product name>                                 | string       | App Step 2 |
            | product subtype          | <product subtype>                              | string       | App Step 2 |
            | product amount           | 0                                              | string       | App Step 2 |
            | product currency         | MXN                                            | string       | App Step 2 |
            | internal campaign        |                                                | empty array  | App Step 2 |
            | optimization attributes  |                                                | empty array  | App Step 2 |

        Examples:
            | scenario                             | management           | card type | card status     | reason | new card       | step 2               | typology | process               | card description              | product name                     | product subtype |
            | block                                | block                | debit     | operative       | theft  |                | 2 autorizacion       | robo     |                       | debit card operative          | debito bbva                      | debito          |
            | block and reposition                 | block and reposition | credit    | operative       | lost   |                | 2 tipo de tarjeta    | extravio |                       | credit card operative         | error cards replacement          | credito         |
            | reposition by lost and instant card  | reposition           | credit    | blocked lost    |        | instant        | 2 direccion de envio |          | tarjeta instantanea   | credit card blocked by lost   | tarjeta de credito replacement 2 | credito         |
            | reposition by stolen and custom card | reposition           | credit    | blocked stolen  |        | custom         | 2 direccion de envio |          | tarjeta personalizada | credit card blocked by stolen | tarjeta de credito replacement 3 | credito         |
            | renewal                              | renewal              | debit     | blocked renewal |        | single instant | 2 direccion de envio |          |                       | debit card blocked by renewal | tarjeta de debito replacement 4  | debito          |

    @ANA_EVENT_CBM004
    @analytics
    @MX @vbank @backend(artichoke)
    @web @ios @android @web-done
    Scenario Outline: Funnel - <management> - event - App Step 3
        Given a user with the following criteria
            | criteria                   |
            | <card description>         |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "<card status>" "<card type>" card
        And the analytics interceptor service is initiated
        When the user confirms the <management> card process with the following criteria
            | item     | value      |
            | reason   | <reason>   |
            | new card | <new card> |
            | address  | <address>  |
            | terms    | <terms>    |
        Then the analytics events contains the following variables
            | item                     | value                                          | type         | event      |
            | analytics                | analytics/glomo_base                           | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                   | string       | App Step 3 |
            | page name                | app:privada:personas:pedir reposicion:<step 3> | string       | App Step 3 |
            | level 1                  | pedir reposicion                               | string       | App Step 3 |
            | level 2                  | <step 3>                                       | string       | App Step 3 |
            | language                 | ES                                             | string       | App Step 3 |
            | page area                | privada                                        | string       | App Step 3 |
            | page intent              | informacion                                    | string       | App Step 3 |
            | channel                  | online                                         | string       | App Step 3 |
            | page instance ID         | de                                             | string       | App Step 3 |
            | page info version        | appVersion                                     | regexp named | App Step 3 |
            | page segment             | personas                                       | string       | App Step 3 |
            | sysEnv                   | app                                            | string       | App Step 3 |
            | business unit            | BBVA Mexico                                    | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                | string       | App Step 3 |
            | project name             | DIY Payments                                   | string       | App Step 3 |
            | device mobile            | si                                             | string       | App Step 3 |
            | user userState           | logado                                         | string       | App Step 3 |
            | user segment global      | 003001                                         | string       | App Step 3 |
            | profile ID               | profileID                                      | regexp named | App Step 3 |
            | user gender              | gender                                         | regexp named | App Step 3 |
            | user age                 | age                                            | regexp named | App Step 3 |
            | global application       | replacement card                               | string       | App Step 3 |
            | application name         | pedir reposicion                               | string       | App Step 3 |
            | application type         | operativa                                      | string       | App Step 3 |
            | application step         | <step 3>                                       | string       | App Step 3 |
            | application typology     | <typology>                                     | string       | App Step 3 |
            | application process      | <process>                                      | string       | App Step 3 |
            | custom fields            | <custom fields>                                | string       | App Step 3 |
            | fulfillment model        | online                                         | string       | App Step 3 |
            | product primary category | tarjetas                                       | string       | App Step 3 |
            | product name             | <product name>                                 | string       | App Step 3 |
            | product subtype          | <product subtype>                              | string       | App Step 3 |
            | product amount           | 0                                              | string       | App Step 3 |
            | product currency         | MXN                                            | string       | App Step 3 |
            | internal campaign        |                                                | empty array  | App Step 3 |
            | optimization attributes  |                                                | empty array  | App Step 3 |

        Examples:
            | management           | card type | card description              | card status     | reason | new card       | address | terms    | step 3                | typology | process             | custom fields               | product name | product subtype |
            | block                | debit     | debit card operative          | operative       | theft  |                |         | accepted | 3 resumen             | robo     |                     |                             | debito bbva  | debito          |
            | block and reposition | credit    | credit card operative         | operative       | lost   | instant        |         |          | 3 direccion de envio  | extravio | tarjeta instantanea | entrega de tarjeta:sucursal | gold bbva    | credito         |
            | renewal              | debit     | debit card blocked by renewal | blocked renewal |        | single instant | home    |          | 3 programa la entrega |          |                     |                             | debito bbva  | debito          |

    @ANA_EVENT_CBM005
    @analytics
    @MX @vbank @backend(artichoke)
    @web @ios @android @web-done
    Scenario Outline: Funnel - <management> - event - App Step 4
        Given a user with the following criteria
            | criteria                   |
            | <card description>         |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "<card status>" "<card type>" card
        And the analytics interceptor service is initiated
        When the user confirms the <management> card process with the following criteria
            | item     | value      |
            | reason   | <reason>   |
            | new card | <new card> |
            | address  | <address>  |
            | date     | <date>     |
        Then the analytics events contains the following variables
            | item                     | value                                          | type         | event      |
            | analytics                | analytics/glomo_base                           | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                   | string       | App Step 4 |
            | page name                | app:privada:personas:pedir reposicion:<step 4> | string       | App Step 4 |
            | level 1                  | pedir reposicion                               | string       | App Step 4 |
            | level 2                  | <step 4>                                       | string       | App Step 4 |
            | language                 | ES                                             | string       | App Step 4 |
            | page area                | privada                                        | string       | App Step 4 |
            | page intent              | informacion                                    | string       | App Step 4 |
            | channel                  | online                                         | string       | App Step 4 |
            | page instance ID         | de                                             | string       | App Step 4 |
            | page info version        | appVersion                                     | regexp named | App Step 4 |
            | page segment             | personas                                       | string       | App Step 4 |
            | sysEnv                   | app                                            | string       | App Step 4 |
            | business unit            | BBVA Mexico                                    | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                | string       | App Step 4 |
            | project name             | DIY Payments                                   | string       | App Step 4 |
            | device mobile            | si                                             | string       | App Step 4 |
            | user userState           | logado                                         | string       | App Step 4 |
            | user segment global      | 003001                                         | string       | App Step 4 |
            | profile ID               | profileID                                      | regexp named | App Step 4 |
            | user gender              | gender                                         | regexp named | App Step 4 |
            | user age                 | age                                            | regexp named | App Step 4 |
            | global application       | replacement card                               | string       | App Step 4 |
            | application name         | pedir reposicion                               | string       | App Step 4 |
            | application type         | operativa                                      | string       | App Step 4 |
            | application step         | <step 4>                                       | string       | App Step 4 |
            | application typology     | <typology>                                     | string       | App Step 4 |
            | application process      | <process>                                      | string       | App Step 4 |
            | custom fields            | <custom fields>                                | string       | App Step 4 |
            | fulfillment model        | online                                         | string       | App Step 4 |
            | product primary category | tarjetas                                       | string       | App Step 4 |
            | product name             | <product name>                                 | string       | App Step 4 |
            | product subtype          | <product subtype>                              | string       | App Step 4 |
            | product amount           | 0                                              | string       | App Step 4 |
            | product currency         | MXN                                            | string       | App Step 4 |
            | internal campaign        |                                                | empty array  | App Step 4 |
            | optimization attributes  |                                                | empty array  | App Step 4 |

        Examples:
            | management           | card type | card status     | reason | new card       | address    | date           | step 4                   | typology | process             | custom fields               | product name | product subtype | card description              |
            | block and reposition | credit    | operative       | lost   | instant        | any branch |                | 4 terminos y condiciones | extravio | tarjeta instantanea | entrega de tarjeta:sucursal | gold bbva    | credito         | credit card operative         |
            | renewal              | debit     | blocked renewal |        | single instant | home       | date selection | 4 resumen                |          |                     |                             | debito bbva  | debito          | debit card blocked by renewal |

    @ANA_EVENT_CBM006
    @analytics
    @MX @vbank @backend(artichoke)
    @web @ios @android @web-done
    Scenario Outline: Funnel - <case> - event - App Step 5
        Given a user with the following criteria
            | criteria                   |
            | credit card operative      |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses the reposition process with the following criteria
            | type             | credit         |
            | physical support | normal plastic |
            | status           | operative      |
            | product id       | AV             |
        And the analytics interceptor service is initiated
        When the user confirms the reposition card process with the following criteria
            | item     | value      |
            | reason   | <reason>   |
            | new card | <new card> |
            | address  | <address>  |
            | terms    | <terms>    |
        Then the analytics events contains the following variables
            | item                     | value                                           | type         | event      |
            | analytics                | analytics/glomo_base                            | json schema  | App Step 5 |
            | version DL               | 20250414_5.0                                    | string       | App Step 5 |
            | page name                | app:privada:personas:pedir reposicion:5 resumen | string       | App Step 5 |
            | level 1                  | pedir reposicion                                | string       | App Step 5 |
            | level 2                  | 5 resumen                                       | string       | App Step 5 |
            | language                 | ES                                              | string       | App Step 5 |
            | page area                | privada                                         | string       | App Step 5 |
            | page intent              | informacion                                     | string       | App Step 5 |
            | channel                  | online                                          | string       | App Step 5 |
            | page instance ID         | de                                              | string       | App Step 5 |
            | page info version        | appVersion                                      | regexp named | App Step 5 |
            | page segment             | personas                                        | string       | App Step 5 |
            | sysEnv                   | app                                             | string       | App Step 5 |
            | business unit            | BBVA Mexico                                     | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                 | string       | App Step 5 |
            | project name             | DIY Payments                                    | string       | App Step 5 |
            | device mobile            | si                                              | string       | App Step 5 |
            | user userState           | logado                                          | string       | App Step 5 |
            | user segment global      | 003001                                          | string       | App Step 5 |
            | profile ID               | profileID                                       | regexp named | App Step 5 |
            | user gender              | gender                                          | regexp named | App Step 5 |
            | user age                 | age                                             | regexp named | App Step 5 |
            | global application       | replacement card                                | string       | App Step 5 |
            | application name         | pedir reposicion                                | string       | App Step 5 |
            | application type         | operativa                                       | string       | App Step 5 |
            | application step         | 5 resumen                                       | string       | App Step 5 |
            | application typology     | <typology>                                      | string       | App Step 5 |
            | application process      | <process>                                       | string       | App Step 5 |
            | custom fields            | <custom fields>                                 | string       | App Step 5 |
            | fulfillment model        | online                                          | string       | App Step 5 |
            | product primary category | tarjetas                                        | string       | App Step 5 |
            | product name             | gold bbva                                       | string       | App Step 5 |
            | product subtype          | credito                                         | string       | App Step 5 |
            | product amount           | 0                                               | string       | App Step 5 |
            | product currency         | MXN                                             | string       | App Step 5 |
            | internal campaign        |                                                 | empty array  | App Step 5 |
            | optimization attributes  |                                                 | empty array  | App Step 5 |

        Examples:
            | reason | new card | address    | typology | case                                                        | custom fields                           | process               | terms    |
            | lost   | instant  | any branch | extravio | repositioning in for lost instant card, any branch delivery | entrega de tarjeta:sucursal             | tarjeta instantanea   | accepted |
            | theft  | custom   | home       | robo     | repositioning due to theft, custom card and home delivery   | entrega de tarjeta:domicilio registrado | tarjeta personalizada | accepted |

    @ANA_EVENT_CBM007
    @analytics
    @MX @vbank @backend(artichoke) @vbank-modified
    @web @ios @android @web-done
    # add  a short delay to card/replacement and schedules-deliveries,GET,1 services
    Scenario Outline: Funnel - <management> - event - App completed
        Given a user with the following criteria
            | criteria                   |
            | <card description>         |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "<card status>" "<card type>" card
        And the analytics interceptor service is initiated
        When the user completes the <management> card process with the following criteria
            | item     | value      |
            | reason   | <reason>   |
            | new card | <new card> |
            | address  | <address>  |
            | date     | <date>     |
            | terms    | <terms>    |
        Then the analytics events contains the following variables
            | item                         | value                                                | type         | event         |
            | analytics                    | analytics/glomo_base                                 | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                         | string       | App Completed |
            | page name                    | app:privada:personas:pedir reposicion:pagina exitosa | string       | App Completed |
            | level 1                      | pedir reposicion                                     | string       | App Completed |
            | level 2                      | pagina exitosa                                       | string       | App Completed |
            | language                     | ES                                                   | string       | App Completed |
            | page area                    | privada                                              | string       | App Completed |
            | page intent                  | informacion                                          | string       | App Completed |
            | channel                      | online                                               | string       | App Completed |
            | page instance ID             | de                                                   | string       | App Completed |
            | page info version            | appVersion                                           | regexp named | App Completed |
            | page segment                 | personas                                             | string       | App Completed |
            | sysEnv                       | app                                                  | string       | App Completed |
            | business unit                | BBVA Mexico                                          | string       | App Completed |
            | site app name                | App BBVA Mexico                                      | string       | App Completed |
            | project name                 | DIY Payments                                         | string       | App Completed |
            | device mobile                | si                                                   | string       | App Completed |
            | user userState               | logado                                               | string       | App Completed |
            | user segment global          | 003001                                               | string       | App Completed |
            | profile ID                   | profileID                                            | regexp named | App Completed |
            | user gender                  | gender                                               | regexp named | App Completed |
            | user age                     | age                                                  | regexp named | App Completed |
            | global application           | replacement card                                     | string       | App Completed |
            | application name             | pedir reposicion                                     | string       | App Completed |
            | application type             | operativa                                            | string       | App Completed |
            | application step             | pagina exitosa                                       | string       | App Completed |
            | application typology         | <typology>                                           | string       | App Completed |
            | application process          | <process>                                            | string       | App Completed |
            | application state            | finalizado                                           | string       | App Completed |
            | application operation number | <operation number>                                   | string       | App Completed |
            | fulfillment model            | online                                               | string       | App Completed |
            | product primary category     | tarjetas                                             | string       | App Completed |
            | product name                 | <product name>                                       | string       | App Completed |
            | product subtype              | <product subtype>                                    | string       | App Completed |
            | product amount               | 0                                                    | string       | App Completed |
            | product currency             | MXN                                                  | string       | App Completed |
            | internal campaign            |                                                      | empty array  | App Completed |
            | optimization attributes      |                                                      | empty array  | App Completed |

        Examples:
            | management           | card type | card status     | reason | new card       | address | date           | typology | process               | terms    | card description              | product subtype | product name | operation number  |
            | block                | debit     | operative       | theft  |                |         |                | robo     |                       | accepted | debit card operative          | debito          | debito bbva  | 2705              |
            | block and reposition | credit    | operative       | lost   | custom         | home    |                | extravio | tarjeta personalizada | accepted | credit card operative         | credito         | gold bbva    | 99592589746152228 |
            | reposition           | credit    | blocked         |        | custom         | home    |                |          | tarjeta personalizada | accepted | credit card blocked by lost   | credito         | gold bbva    | 15312965239693048 |
            | renewal              | debit     | blocked renewal |        | single instant | home    | date selection |          |                       |          | debit card blocked by renewal | debito          | debito bbva  | 75646873          |

    @ANA_CBM008
    @analytics
    @MX @vbank @backend(artichoke)
    @web @ios @android @web-done
    Scenario: Footprint - Page View - Otp
        Given a user with the following criteria
            | criteria                   |
            | credit card operative      |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses the block and reposition process with the following criteria
            | type             | credit         |
            | physical support | normal plastic |
            | status           | operative      |
            | product id       | AV             |
        And the user confirms the block and reposition card process with the following criteria
            | item     | value    |
            | reason   | lost     |
            | new card | custom   |
            | address  | home     |
            | terms    | accepted |
        When the user is in the otp modal
        Then the device contains the following variables
            | item                    | value                                     | type             |
            | analytics               | analytics/glomo_base                      | json schema      |
            | version DL              | 20250414_5.0                              | string           |
            | page name               | app:privada:personas:pedir reposicion:otp | string           |
            | level 1                 | pedir reposicion                          | string           |
            | level 2                 | otp                                       | string           |
            | language                | ES                                        | string           |
            | page area               | privada                                   | string           |
            | page intent             | informacion                               | string           |
            | channel                 | online                                    | string           |
            | page instance ID        | de                                        | string           |
            | page info version       | appVersion                                | regexp named     |
            | page segment            | personas                                  | string           |
            | sysEnv                  | app                                       | string           |
            | business unit           | BBVA Mexico                               | string           |
            | site app name           | App BBVA Mexico                           | string           |
            | project name            | DIY Payments                              | string           |
            | device mobile           | si                                        | string           |
            | user userState          | logado                                    | string           |
            | user segment global     | 003001                                    | string           |
            | profile ID              | profileID                                 | regexp named     |
            | user gender             | gender                                    | regexp named     |
            | user age                | age                                       | regexp named     |
            | custom fields           | firma:sms                                 | string           |
            | internal campaign       |                                           | empty array      |
            | optimization attributes |                                           | empty array      |
            | application             |                                           | empty str object |
            | products attributes     |                                           | empty array      |

    @ANA_EVENT_CBM009
    @analytics
    @MX @vbank @backend(artichoke)
    @web @ios @android @web-done
    Scenario Outline: Footprint - Page View - New Card - <management> management
        Given a user with the following criteria
            | criteria                   |
            | <card description>         |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses card block management operative with "<card status>" "debit" card
        Then the analytics events contains the following variables
            | item                    | value                                                  | type             | event     | event number |
            | analytics               | analytics/glomo_base                                   | json schema      | Page View | 3            |
            | version DL              | 20250414_5.0                                           | string           | Page View | 3            |
            | page name               | app:privada:personas:pedir reposicion:tu nueva tarjeta | string           | Page View | 3            |
            | level 1                 | pedir reposicion                                       | string           | Page View | 3            |
            | level 2                 | tu nueva tarjeta                                       | string           | Page View | 3            |
            | language                | ES                                                     | string           | Page View | 3            |
            | page area               | privada                                                | string           | Page View | 3            |
            | page intent             | informacion                                            | string           | Page View | 3            |
            | channel                 | online                                                 | string           | Page View | 3            |
            | page instance ID        | de                                                     | string           | Page View | 3            |
            | page info version       | appVersion                                             | regexp named     | Page View | 3            |
            | page segment            | personas                                               | string           | Page View | 3            |
            | sysEnv                  | app                                                    | string           | Page View | 3            |
            | business unit           | BBVA Mexico                                            | string           | Page View | 3            |
            | site app name           | App BBVA Mexico                                        | string           | Page View | 3            |
            | project name            | DIY Payments                                           | string           | Page View | 3            |
            | device mobile           | si                                                     | string           | Page View | 3            |
            | user userState          | logado                                                 | string           | Page View | 3            |
            | user segment global     | 003001                                                 | string           | Page View | 3            |
            | profile ID              | profileID                                              | regexp named     | Page View | 3            |
            | user gender             | gender                                                 | regexp named     | Page View | 3            |
            | user age                | age                                                    | regexp named     | Page View | 3            |
            | internal campaign       |                                                        | empty array      | Page View | 3            |
            | optimization attributes |                                                        | empty array      | Page View | 3            |
            | application             |                                                        | empty str object | Page View | 3            |
            | products attributes     |                                                        | empty array      | Page View | 3            |

        Examples:
            | management | card description              | card status     |
            | reposition | debit card blocked by lost    | blocked         |
            | renewal    | debit card blocked by renewal | blocked renewal |

    @ANA_EVENT_CBM010
    @analytics
    @MX @vbank @backend(artichoke)
    @web @ios @android @web-done
    Scenario: Footprint - Page View - New Card - block and reposition management
        Given a user with the following criteria
            | criteria                   |
            | credit card operative      |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses the block and reposition process with the following criteria
            | type             | credit         |
            | physical support | normal plastic |
            | status           | operative      |
            | product id       | AV             |
        And the analytics interceptor service is initiated
        When the user confirms the block and reposition card process with the following criteria
            | item   | value |
            | reason | lost  |
        Then the analytics events contains the following variables
            | item                    | value                                                  | type             | event     |
            | analytics               | analytics/glomo_base                                   | json schema      | Page View |
            | version DL              | 20250414_5.0                                           | string           | Page View |
            | page name               | app:privada:personas:pedir reposicion:tu nueva tarjeta | string           | Page View |
            | level 1                 | pedir reposicion                                       | string           | Page View |
            | level 2                 | tu nueva tarjeta                                       | string           | Page View |
            | language                | ES                                                     | string           | Page View |
            | page area               | privada                                                | string           | Page View |
            | page intent             | informacion                                            | string           | Page View |
            | channel                 | online                                                 | string           | Page View |
            | page instance ID        | de                                                     | string           | Page View |
            | page info version       | appVersion                                             | regexp named     | Page View |
            | page segment            | personas                                               | string           | Page View |
            | sysEnv                  | app                                                    | string           | Page View |
            | business unit           | BBVA Mexico                                            | string           | Page View |
            | site app name           | App BBVA Mexico                                        | string           | Page View |
            | project name            | DIY Payments                                           | string           | Page View |
            | device mobile           | si                                                     | string           | Page View |
            | user userState          | logado                                                 | string           | Page View |
            | user segment global     | 003001                                                 | string           | Page View |
            | profile ID              | profileID                                              | regexp named     | Page View |
            | user gender             | gender                                                 | regexp named     | Page View |
            | user age                | age                                                    | regexp named     | Page View |
            | internal campaign       |                                                        | empty array      | Page View |
            | optimization attributes |                                                        | empty array      | Page View |
            | application             |                                                        | empty str object | Page View |
            | products attributes     |                                                        | empty array      | Page View |

    @ANA_CBM011
    @analytics
    @MX @vbank @backend(artichoke)
    @web @ios @android @web-done
    Scenario: Footprint - Page View - Branch Locator
        Given a user with the following criteria
            | criteria                   |
            | credit card operative      |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses the block and reposition process with the following criteria
            | type             | credit         |
            | physical support | normal plastic |
            | status           | operative      |
            | product id       | AV             |
        And the user confirms the block and reposition card process with the following criteria
            | item     | value  |
            | reason   | lost   |
            | new card | custom |
        When the user accesses to the branch locator
        Then the device contains the following variables
            | item                    | value                                                       | type             |
            | analytics               | analytics/glomo_base                                        | json schema      |
            | version DL              | 20250414_5.0                                                | string           |
            | page name               | app:privada:personas:pedir reposicion:ubiciacion sucursales | string           |
            | level 1                 | pedir reposicion                                            | string           |
            | level 2                 | ubiciacion sucursales                                       | string           |
            | language                | ES                                                          | string           |
            | page area               | privada                                                     | string           |
            | page intent             | informacion                                                 | string           |
            | channel                 | online                                                      | string           |
            | page instance ID        | de                                                          | string           |
            | page info version       | appVersion                                                  | regexp named     |
            | page segment            | personas                                                    | string           |
            | sysEnv                  | app                                                         | string           |
            | business unit           | BBVA Mexico                                                 | string           |
            | site app name           | App BBVA Mexico                                             | string           |
            | project name            | DIY Payments                                                | string           |
            | device mobile           | si                                                          | string           |
            | user userState          | logado                                                      | string           |
            | user segment global     | 003001                                                      | string           |
            | profile ID              | profileID                                                   | regexp named     |
            | user gender             | gender                                                      | regexp named     |
            | user age                | age                                                         | regexp named     |
            | internal campaign       |                                                             | empty array      |
            | optimization attributes |                                                             | empty array      |
            | application             |                                                             | empty str object |
            | products attributes     |                                                             | empty array      |

    @ANA_CBM012
    @analytics
    @MX @vbank @backend(artichoke) @vbank-modified
    @web @ios @android @web-done
    # add a short delay to card/replacement services
    Scenario: Footprint - Error - Operacion no realizada
        Given a user with the following criteria
            | criteria                   |
            | card cannot be replaced    |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "operative" "credit" card
        And the user completes the block and reposition card process with the following criteria
            | item     | value    |
            | reason   | theft    |
            | new card | custom   |
            | address  | home     |
            | terms    | accepted |
        When the user attempts to replacement 3 times
        Then the device contains the following variables
            | item                    | value                                                        | type             |
            | analytics               | analytics/glomo_base                                         | json schema      |
            | version DL              | 20250414_5.0                                                 | string           |
            | page name               | app:privada:personas:pedir reposicion:operacion no realizada | string           |
            | level 1                 | pedir reposicion                                             | string           |
            | level 2                 | operacion no realizada                                       | string           |
            | error page              | operacion no realizada                                       | string           |
            | language                | ES                                                           | string           |
            | page area               | privada                                                      | string           |
            | page intent             | informacion                                                  | string           |
            | channel                 | online                                                       | string           |
            | page instance ID        | de                                                           | string           |
            | page info version       | appVersion                                                   | regexp named     |
            | page segment            | personas                                                     | string           |
            | sysEnv                  | app                                                          | string           |
            | business unit           | BBVA Mexico                                                  | string           |
            | site app name           | App BBVA Mexico                                              | string           |
            | project name            | DIY Payments                                                 | string           |
            | device mobile           | si                                                           | string           |
            | user userState          | logado                                                       | string           |
            | user segment global     | 003001                                                       | string           |
            | profile ID              | profileID                                                    | regexp named     |
            | user gender             | gender                                                       | regexp named     |
            | user age                | age                                                          | regexp named     |
            | internal campaign       |                                                              | empty array      |
            | optimization attributes |                                                              | empty array      |
            | application             |                                                              | empty str object |
            | products attributes     |                                                              | empty array      |

    @ANA_CBM013
    @analytics
    @MX @vbank @backend(artichoke)
    @web @ios @android @web-done
    Scenario Outline: Footprint - Error - Unload information - <card type> card
        Given a user with the following criteria
            | criteria                          |
            | card block and replacement        |
            | <card type> card operative        |
            | customer data cannot be retrieved |
            | card reissue conditions           |
        And the user attempts to access card block management operative with "operative" "<card type>" card
        When the user retries "3" times
        Then the device contains the following variables
            | item                    | value                                                                      | type             |
            | analytics               | analytics/glomo_base                                                       | json schema      |
            | version DL              | 20250414_5.0                                                               | string           |
            | page name               | app:privada:personas:tarjetas:<page name>:detalle:informacion no disponible | string           |
            | level 1                 | tarjetas                                                                   | string           |
            | level 2                 | <page name>                                                                 | string           |
            | level 3                 | detalle                                                                    | string           |
            | level 4                 | informacion no disponible                                                  | string           |
            | error page              | informacion no disponible                                                  | string           |
            | language                | ES                                                                         | string           |
            | page area               | privada                                                                    | string           |
            | page intent             | informacion                                                                | string           |
            | channel                 | online                                                                     | string           |
            | page instance ID        | de                                                                         | string           |
            | page info version       | appVersion                                                                 | regexp named     |
            | page segment            | personas                                                                   | string           |
            | sysEnv                  | app                                                                        | string           |
            | business unit           | BBVA Mexico                                                                | string           |
            | site app name           | App BBVA Mexico                                                            | string           |
            | project name            | DIY Payments                                                               | string           |
            | device mobile           | si                                                                         | string           |
            | user userState          | logado                                                                     | string           |
            | user segment global     | 003001                                                                     | string           |
            | profile ID              | profileID                                                                  | regexp named     |
            | user gender             | gender                                                                     | regexp named     |
            | user age                | age                                                                        | regexp named     |
            | internal campaign       |                                                                            | empty array      |
            | optimization attributes |                                                                            | empty array      |
            | application             |                                                                            | empty str object |
            | products attributes     |                                                                            | empty array      |

        Examples:
            | card type | page name |
            | credit    | credito   |
            | debit     | debito    |

    @ANA_CBM014
    @analytics
    @MX @vbank @backend(artichoke)
    @web @ios @android @web-done
    Scenario: Footprint - Error - unloaded information - show address
        Given a user with the following criteria
            | criteria                   |
            | credit card operative      |
            | card block and replacement |
            | error unmasking address    |
            | card reissue conditions    |
        And the user accesses card block management operative with "operative" "credit" card
        And the user confirms the block and reposition card process with the following criteria
            | item     | value  |
            | reason   | lost   |
            | new card | custom |
        And the user shows my address in replacement card process
        When the user attempts to show 3 times
        Then the device contains the following variables
            | item                    | value                                                                                           | type             |
            | analytics               | analytics/glomo_base                                                                            | json schema      |
            | version DL              | 20250414_5.0                                                                                    | string           |
            | page name               | app:privada:personas:pedir reposicion:2 direccion de envio:mostrar datos:informacion no cargada | string           |
            | level 1                 | pedir reposicion                                                                                | string           |
            | level 2                 | 2 direccion de envio                                                                            | string           |
            | level 3                 | mostrar datos                                                                                   | string           |
            | level 4                 | informacion no cargada                                                                          | string           |
            | error page              | informacion no cargada                                                                          | string           |
            | language                | ES                                                                                              | string           |
            | page area               | privada                                                                                         | string           |
            | page intent             | informacion                                                                                     | string           |
            | channel                 | online                                                                                          | string           |
            | page instance ID        | de                                                                                              | string           |
            | page info version       | appVersion                                                                                      | regexp named     |
            | page segment            | personas                                                                                        | string           |
            | sysEnv                  | app                                                                                             | string           |
            | business unit           | BBVA Mexico                                                                                     | string           |
            | site app name           | App BBVA Mexico                                                                                 | string           |
            | project name            | DIY Payments                                                                                    | string           |
            | device mobile           | si                                                                                              | string           |
            | user userState          | logado                                                                                          | string           |
            | user segment global     | 003001                                                                                          | string           |
            | profile ID              | profileID                                                                                       | regexp named     |
            | user gender             | gender                                                                                          | regexp named     |
            | user age                | age                                                                                             | regexp named     |
            | internal campaign       |                                                                                                 | empty array      |
            | optimization attributes |                                                                                                 | empty array      |
            | application             |                                                                                                 | empty str object |
            | products attributes     |                                                                                                 | empty array      |

    @ANA_CBM015
    @analytics
    @MX @vbank @backend(artichoke)
    @web @ios @android @web-done
    Scenario: Footprint - Error - unloaded information - hide address
        Given a user with the following criteria
            | criteria                   |
            | credit card operative      |
            | card block and replacement |
            | error masking address      |
            | card reissue conditions    |
        And the user accesses card block management operative with "operative" "credit" card
        And the user confirms the block and reposition card process with the following criteria
            | item     | value  |
            | reason   | lost   |
            | new card | custom |
        And the user shows my address in replacement card process
        And the user hides my address in replacement card process
        When the user attempts to hide 3 times
        Then the device contains the following variables
            | item                    | value                                                                                           | type             |
            | analytics               | analytics/glomo_base                                                                            | json schema      |
            | version DL              | 20250414_5.0                                                                                    | string           |
            | page name               | app:privada:personas:pedir reposicion:2 direccion de envio:ocultar datos:informacion no cargada | string           |
            | level 1                 | pedir reposicion                                                                                | string           |
            | level 2                 | 2 direccion de envio                                                                            | string           |
            | level 3                 | ocultar datos                                                                                   | string           |
            | level 4                 | informacion no cargada                                                                          | string           |
            | error page              | informacion no cargada                                                                          | string           |
            | language                | ES                                                                                              | string           |
            | page area               | privada                                                                                         | string           |
            | page intent             | informacion                                                                                     | string           |
            | channel                 | online                                                                                          | string           |
            | page instance ID        | de                                                                                              | string           |
            | page info version       | appVersion                                                                                      | regexp named     |
            | page segment            | personas                                                                                        | string           |
            | sysEnv                  | app                                                                                             | string           |
            | business unit           | BBVA Mexico                                                                                     | string           |
            | site app name           | App BBVA Mexico                                                                                 | string           |
            | project name            | DIY Payments                                                                                    | string           |
            | device mobile           | si                                                                                              | string           |
            | user userState          | logado                                                                                          | string           |
            | user segment global     | 003001                                                                                          | string           |
            | profile ID              | profileID                                                                                       | regexp named     |
            | user gender             | gender                                                                                          | regexp named     |
            | user age                | age                                                                                             | regexp named     |
            | internal campaign       |                                                                                                 | empty array      |
            | optimization attributes |                                                                                                 | empty array      |
            | application             |                                                                                                 | empty str object |
            | products attributes     |                                                                                                 | empty array      |
