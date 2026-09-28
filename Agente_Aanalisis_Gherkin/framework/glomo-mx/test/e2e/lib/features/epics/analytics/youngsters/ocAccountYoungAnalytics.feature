@ocAccountYoungAnalytics
Feature: OC Account Young Analytics

    @ANA_EVENT_OCAY001
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Accesses to the offer - App On Click Start - App Page Visit
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to the oc account young offer detail
        Then the analytics events contains the following variables
            | item                                         | value                                                                                                                               | type         | event                              |
            | analytics                                    | analytics/glomo_base                                                                                                                | json schema  | App On Click Start, App Page Visit |
            | version DL                                   | 20250414_5.0                                                                                                                        | string       | App On Click Start, App Page Visit |
            | page name                                    | app:privada:personas:oportunidades                                                                                                  | string       | App On Click Start                 |
            | page name                                    | app:privada:personas:link card:contratar cuenta:1 detalle                                                                           | string       | App Page Visit                     |
            | level 1                                      | oportunidades                                                                                                                       | string       | App On Click Start                 |
            | level 1                                      | link card                                                                                                                           | string       | App Page Visit                     |
            | level 2                                      | contratar cuenta                                                                                                                    | string       | App Page Visit                     |
            | level 3                                      | 1 detalle                                                                                                                           | string       | App Page Visit                     |
            | language                                     | ES                                                                                                                                  | string       | App On Click Start, App Page Visit |
            | page area                                    | privada                                                                                                                             | string       | App On Click Start, App Page Visit |
            | page intent                                  | informacion                                                                                                                         | string       | App On Click Start                 |
            | page intent                                  | transaccion                                                                                                                         | string       | App Page Visit                     |
            | channel                                      | online                                                                                                                              | string       | App On Click Start, App Page Visit |
            | page instance ID                             | de                                                                                                                                  | string       | App On Click Start, App Page Visit |
            | page info version                            | appVersion                                                                                                                          | regexp named | App On Click Start, App Page Visit |
            | page segment                                 | personas                                                                                                                            | string       | App On Click Start, App Page Visit |
            | sysEnv                                       | app                                                                                                                                 | string       | App On Click Start, App Page Visit |
            | business unit                                | BBVA Mexico                                                                                                                         | string       | App On Click Start, App Page Visit |
            | site app name                                | App BBVA Mexico                                                                                                                     | string       | App On Click Start, App Page Visit |
            | project name                                 | DIY E2E Sales                                                                                                                       | string       | App On Click Start, App Page Visit |
            | device mobile                                | si                                                                                                                                  | string       | App On Click Start, App Page Visit |
            | user userState                               | logado                                                                                                                              | string       | App On Click Start, App Page Visit |
            | user segment global                          | 003001                                                                                                                              | string       | App On Click Start, App Page Visit |
            | profile ID                                   | profileID                                                                                                                           | regexp named | App On Click Start, App Page Visit |
            | user gender                                  | gender                                                                                                                              | regexp named | App On Click Start, App Page Visit |
            | user age                                     | age                                                                                                                                 | regexp named | App On Click Start, App Page Visit |
            | global application                           | oc account youngsters                                                                                                               | string       | App On Click Start, App Page Visit |
            | application name                             | contratar cuenta joven                                                                                                              | string       | App On Click Start, App Page Visit |
            | application type                             | contratacion                                                                                                                        | string       | App On Click Start, App Page Visit |
            | fulfillment model                            | online                                                                                                                              | string       | App On Click Start, App Page Visit |
            | application step                             | oportunidades                                                                                                                       | string       | App On Click Start                 |
            | application step                             | 1 detalle                                                                                                                           | string       | App Page Visit                     |
            | product primary category                     | cuentas                                                                                                                             | string       | App On Click Start, App Page Visit |
            | product name                                 | cuenta link card                                                                                                                    | string       | App On Click Start, App Page Visit |
            | qualified visits                             | true                                                                                                                                | string       | App Page Visit                     |
            | internal campaign                            |                                                                                                                                     | empty array  | App Page Visit                     |
            | internal campaign attributes location        | contract product section--centro-5-10                                                                                               | string       | App On Click Start                 |
            | internal campaign attributes campaign format | list                                                                                                                                | string       | App On Click Start                 |
            | internal campaign attributes collective code |                                                                                                                                     | string       | App On Click Start                 |
            | internal campaign attributes name            | -link card es la herramienta para iniciar una vida financiera a temprana edad                                                       | string       | App On Click Start                 |
            | internal campaign attributes product         | inversiones                                                                                                                         | string       | App On Click Start                 |
            | internal campaign attributes product code    |                                                                                                                                     | string       | App On Click Start                 |
            | internal campaign attributes quantity        |                                                                                                                                     | string       | App On Click Start                 |
            | internal campaign event name                 | IntCmpClick                                                                                                                         | string       | App On Click Start                 |
            | internal campaign site action name           | contract product section--centro-5-10:list::-link card es la herramienta para iniciar una vida financiera a temprana edad:cuentas:: | string       | App On Click Start                 |
            | optimization attributes                      |                                                                                                                                     | empty array  | App On Click Start, App Page Visit |

    @ANA_EVENT_OCAY002
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario Outline: Selects a <element> element from offer page - App Started
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses to the oc account young offer detail
        And the analytics interceptor service is initiated
        When the user selects "<element>" element from oc account young
        Then the analytics events contains the following variables
            | item                     | value                                                     | type         | event       |
            | analytics                | analytics/glomo_base                                      | json schema  | App Started |
            | version DL               | 20250414_5.0                                              | string       | App Started |
            | page name                | app:privada:personas:link card:contratar cuenta:1 detalle | string       | App Started |
            | level 1                  | link card                                                 | string       | App Started |
            | level 2                  | contratar cuenta                                          | string       | App Started |
            | level 3                  | 1 detalle                                                 | string       | App Started |
            | language                 | ES                                                        | string       | App Started |
            | page area                | privada                                                   | string       | App Started |
            | page intent              | transaccion                                               | string       | App Started |
            | channel                  | online                                                    | string       | App Started |
            | page instance ID         | de                                                        | string       | App Started |
            | page info version        | appVersion                                                | regexp named | App Started |
            | page segment             | personas                                                  | string       | App Started |
            | sysEnv                   | app                                                       | string       | App Started |
            | business unit            | BBVA Mexico                                               | string       | App Started |
            | site app name            | App BBVA Mexico                                           | string       | App Started |
            | project name             | DIY E2E Sales                                             | string       | App Started |
            | device mobile            | si                                                        | string       | App Started |
            | user userState           | logado                                                    | string       | App Started |
            | user segment global      | 003001                                                    | string       | App Started |
            | profile ID               | profileID                                                 | regexp named | App Started |
            | user gender              | gender                                                    | regexp named | App Started |
            | user age                 | age                                                       | regexp named | App Started |
            | global application       | oc account youngsters                                     | string       | App Started |
            | application name         | contratar cuenta joven                                    | string       | App Started |
            | application type         | contratacion                                              | string       | App Started |
            | fulfillment model        | online                                                    | string       | App Started |
            | application step         | <step>                                                    | string       | App Started |
            | product primary category | cuentas                                                   | string       | App Started |
            | product name             | cuenta link card                                          | string       | App Started |
            | internal campaign        |                                                           | empty array  | App Started |
            | optimization attributes  |                                                           | empty array  | App Started |
        Examples:
            | element             | step                             |
            | terms link          | consultar terminos y condiciones |
            | limit detail link   | consultar detalle del limite     |
            | gat link            | consultar ganancia anual total   |
            | notice privacy link | consultar aviso de privacidad    |
            | continue button     | continuar                        |

    @ANA_EVENT_OCAY003
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Minor information - App Step 2
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accepts to the oc account young offer detail
        Then the analytics events contains the following variables
            | item                     | value                                                             | type         | event      |
            | analytics                | analytics/glomo_base                                              | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                      | string       | App Step 2 |
            | page name                | app:privada:personas:link card:contratar cuenta:2 datos del menor | string       | App Step 2 |
            | level 1                  | link card                                                         | string       | App Step 2 |
            | level 2                  | contratar cuenta                                                  | string       | App Step 2 |
            | level 3                  | 2 datos del menor                                                 | string       | App Step 2 |
            | language                 | ES                                                                | string       | App Step 2 |
            | page area                | privada                                                           | string       | App Step 2 |
            | page intent              | transaccion                                                       | string       | App Step 2 |
            | channel                  | online                                                            | string       | App Step 2 |
            | page instance ID         | de                                                                | string       | App Step 2 |
            | page info version        | appVersion                                                        | regexp named | App Step 2 |
            | page segment             | personas                                                          | string       | App Step 2 |
            | sysEnv                   | app                                                               | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                       | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                   | string       | App Step 2 |
            | project name             | DIY E2E Sales                                                     | string       | App Step 2 |
            | device mobile            | si                                                                | string       | App Step 2 |
            | user userState           | logado                                                            | string       | App Step 2 |
            | user segment global      | 003001                                                            | string       | App Step 2 |
            | profile ID               | profileID                                                         | regexp named | App Step 2 |
            | user gender              | gender                                                            | regexp named | App Step 2 |
            | user age                 | age                                                               | regexp named | App Step 2 |
            | global application       | oc account youngsters                                             | string       | App Step 2 |
            | application name         | contratar cuenta joven                                            | string       | App Step 2 |
            | application type         | contratacion                                                      | string       | App Step 2 |
            | fulfillment model        | online                                                            | string       | App Step 2 |
            | application step         | 2 datos del menor                                                 | string       | App Step 2 |
            | product primary category | cuentas                                                           | string       | App Step 2 |
            | product name             | cuenta link card                                                  | string       | App Step 2 |
            | internal campaign        |                                                                   | empty array  | App Step 2 |
            | optimization attributes  |                                                                   | empty array  | App Step 2 |

    @ANA_EVENT_OCAY004
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Minor Birth Certificate - App Step 3
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        When the user completes the minor information
        Then the analytics events contains the following variables
            | item                     | value                                                                | type         | event      |
            | analytics                | analytics/glomo_base                                                 | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                         | string       | App Step 3 |
            | page name                | app:privada:personas:link card:contratar cuenta:3 acta de nacimiento | string       | App Step 3 |
            | level 1                  | link card                                                            | string       | App Step 3 |
            | level 2                  | contratar cuenta                                                     | string       | App Step 3 |
            | level 3                  | 3 acta de nacimiento                                                 | string       | App Step 3 |
            | language                 | ES                                                                   | string       | App Step 3 |
            | page area                | privada                                                              | string       | App Step 3 |
            | page intent              | transaccion                                                          | string       | App Step 3 |
            | channel                  | online                                                               | string       | App Step 3 |
            | page instance ID         | de                                                                   | string       | App Step 3 |
            | page info version        | appVersion                                                           | regexp named | App Step 3 |
            | page segment             | personas                                                             | string       | App Step 3 |
            | sysEnv                   | app                                                                  | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                          | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                      | string       | App Step 3 |
            | project name             | DIY E2E Sales                                                        | string       | App Step 3 |
            | device mobile            | si                                                                   | string       | App Step 3 |
            | user userState           | logado                                                               | string       | App Step 3 |
            | user segment global      | 003001                                                               | string       | App Step 3 |
            | profile ID               | profileID                                                            | regexp named | App Step 3 |
            | user gender              | gender                                                               | regexp named | App Step 3 |
            | user age                 | age                                                                  | regexp named | App Step 3 |
            | global application       | oc account youngsters                                                | string       | App Step 3 |
            | application name         | contratar cuenta joven                                               | string       | App Step 3 |
            | application type         | contratacion                                                         | string       | App Step 3 |
            | fulfillment model        | online                                                               | string       | App Step 3 |
            | application step         | 3 acta de nacimiento                                                 | string       | App Step 3 |
            | product primary category | cuentas                                                              | string       | App Step 3 |
            | product name             | cuenta link card                                                     | string       | App Step 3 |
            | internal campaign        |                                                                      | empty array  | App Step 3 |
            | optimization attributes  |                                                                      | empty array  | App Step 3 |

    @ANA_EVENT_OCAY005
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Minor Address - App Step 4
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        And the user completes the minor information
        When the user uploads the birth certificate file and continues
        Then the analytics events contains the following variables
            | item                     | value                                                       | type         | event      |
            | analytics                | analytics/glomo_base                                        | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                                | string       | App Step 4 |
            | page name                | app:privada:personas:link card:contratar cuenta:4 domicilio | string       | App Step 4 |
            | level 1                  | link card                                                   | string       | App Step 4 |
            | level 2                  | contratar cuenta                                            | string       | App Step 4 |
            | level 3                  | 4 domicilio                                                 | string       | App Step 4 |
            | language                 | ES                                                          | string       | App Step 4 |
            | page area                | privada                                                     | string       | App Step 4 |
            | page intent              | transaccion                                                 | string       | App Step 4 |
            | channel                  | online                                                      | string       | App Step 4 |
            | page instance ID         | de                                                          | string       | App Step 4 |
            | page info version        | appVersion                                                  | regexp named | App Step 4 |
            | page segment             | personas                                                    | string       | App Step 4 |
            | sysEnv                   | app                                                         | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                 | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                             | string       | App Step 4 |
            | project name             | DIY E2E Sales                                               | string       | App Step 4 |
            | device mobile            | si                                                          | string       | App Step 4 |
            | user userState           | logado                                                      | string       | App Step 4 |
            | user segment global      | 003001                                                      | string       | App Step 4 |
            | profile ID               | profileID                                                   | regexp named | App Step 4 |
            | user gender              | gender                                                      | regexp named | App Step 4 |
            | user age                 | age                                                         | regexp named | App Step 4 |
            | global application       | oc account youngsters                                       | string       | App Step 4 |
            | application name         | contratar cuenta joven                                      | string       | App Step 4 |
            | application type         | contratacion                                                | string       | App Step 4 |
            | fulfillment model        | online                                                      | string       | App Step 4 |
            | application step         | 4 domicilio                                                 | string       | App Step 4 |
            | product primary category | cuentas                                                     | string       | App Step 4 |
            | product name             | cuenta link card                                            | string       | App Step 4 |
            | internal campaign        |                                                             | empty array  | App Step 4 |
            | optimization attributes  |                                                             | empty array  | App Step 4 |

    @ANA_EVENT_OCAY006
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Digital Services - App Step 5
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        And the user completes the minor information
        And the user uploads the birth certificate file and continues
        When the user selects same address and continues
        Then the analytics events contains the following variables
            | item                     | value                                                                 | type         | event      |
            | analytics                | analytics/glomo_base                                                  | json schema  | App Step 5 |
            | version DL               | 20250414_5.0                                                          | string       | App Step 5 |
            | page name                | app:privada:personas:link card:contratar cuenta:5 servicios digitales | string       | App Step 5 |
            | level 1                  | link card                                                             | string       | App Step 5 |
            | level 2                  | contratar cuenta                                                      | string       | App Step 5 |
            | level 3                  | 5 servicios digitales                                                 | string       | App Step 5 |
            | language                 | ES                                                                    | string       | App Step 5 |
            | page area                | privada                                                               | string       | App Step 5 |
            | page intent              | transaccion                                                           | string       | App Step 5 |
            | channel                  | online                                                                | string       | App Step 5 |
            | page instance ID         | de                                                                    | string       | App Step 5 |
            | page info version        | appVersion                                                            | regexp named | App Step 5 |
            | page segment             | personas                                                              | string       | App Step 5 |
            | sysEnv                   | app                                                                   | string       | App Step 5 |
            | business unit            | BBVA Mexico                                                           | string       | App Step 5 |
            | site app name            | App BBVA Mexico                                                       | string       | App Step 5 |
            | project name             | DIY E2E Sales                                                         | string       | App Step 5 |
            | device mobile            | si                                                                    | string       | App Step 5 |
            | user userState           | logado                                                                | string       | App Step 5 |
            | user segment global      | 003001                                                                | string       | App Step 5 |
            | profile ID               | profileID                                                             | regexp named | App Step 5 |
            | user gender              | gender                                                                | regexp named | App Step 5 |
            | user age                 | age                                                                   | regexp named | App Step 5 |
            | global application       | oc account youngsters                                                 | string       | App Step 5 |
            | application name         | contratar cuenta joven                                                | string       | App Step 5 |
            | application type         | contratacion                                                          | string       | App Step 5 |
            | fulfillment model        | online                                                                | string       | App Step 5 |
            | application step         | 5 servicios digitales                                                 | string       | App Step 5 |
            | product primary category | cuentas                                                               | string       | App Step 5 |
            | product name             | cuenta link card                                                      | string       | App Step 5 |
            | internal campaign        |                                                                       | empty array  | App Step 5 |
            | optimization attributes  |                                                                       | empty array  | App Step 5 |

    @ANA_EVENT_OCAY007
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Terms and conditions - App Step 6
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        When the user goes to terms and conditions without digital services without modal
        Then the analytics events contains the following variables
            | item                     | value                                                                    | type         | event      |
            | analytics                | analytics/glomo_base                                                     | json schema  | App Step 6 |
            | version DL               | 20250414_5.0                                                             | string       | App Step 6 |
            | page name                | app:privada:personas:link card:contratar cuenta:6 terminos y condiciones | string       | App Step 6 |
            | level 1                  | link card                                                                | string       | App Step 6 |
            | level 2                  | contratar cuenta                                                         | string       | App Step 6 |
            | level 3                  | 6 terminos y condiciones                                                 | string       | App Step 6 |
            | language                 | ES                                                                       | string       | App Step 6 |
            | page area                | privada                                                                  | string       | App Step 6 |
            | page intent              | transaccion                                                              | string       | App Step 6 |
            | channel                  | online                                                                   | string       | App Step 6 |
            | page instance ID         | de                                                                       | string       | App Step 6 |
            | page info version        | appVersion                                                               | regexp named | App Step 6 |
            | page segment             | personas                                                                 | string       | App Step 6 |
            | sysEnv                   | app                                                                      | string       | App Step 6 |
            | business unit            | BBVA Mexico                                                              | string       | App Step 6 |
            | site app name            | App BBVA Mexico                                                          | string       | App Step 6 |
            | project name             | DIY E2E Sales                                                            | string       | App Step 6 |
            | device mobile            | si                                                                       | string       | App Step 6 |
            | user userState           | logado                                                                   | string       | App Step 6 |
            | user segment global      | 003001                                                                   | string       | App Step 6 |
            | profile ID               | profileID                                                                | regexp named | App Step 6 |
            | user gender              | gender                                                                   | regexp named | App Step 6 |
            | user age                 | age                                                                      | regexp named | App Step 6 |
            | global application       | oc account youngsters                                                    | string       | App Step 6 |
            | application name         | contratar cuenta joven                                                   | string       | App Step 6 |
            | application type         | contratacion                                                             | string       | App Step 6 |
            | fulfillment model        | online                                                                   | string       | App Step 6 |
            | application step         | 6 terminos y condiciones                                                 | string       | App Step 6 |
            | product primary category | cuentas                                                                  | string       | App Step 6 |
            | product name             | cuenta link card                                                         | string       | App Step 6 |
            | application typology     | sin servicios digitales                                                  | string       | App Step 6 |
            | internal campaign        |                                                                          | empty array  | App Step 6 |
            | optimization attributes  |                                                                          | empty array  | App Step 6 |

    @ANA_EVENT_OCAY008
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Summary View - App Step 7
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        When the user accepts terms and conditions without digital services without modal
        Then the analytics events contains the following variables
            | item                     | value                                                          | type         | event      |
            | analytics                | analytics/glomo_base                                           | json schema  | App Step 7 |
            | version DL               | 20250414_5.0                                                   | string       | App Step 7 |
            | page name                | app:privada:personas:link card:contratar cuenta:7 confirmacion | string       | App Step 7 |
            | level 1                  | link card                                                      | string       | App Step 7 |
            | level 2                  | contratar cuenta                                               | string       | App Step 7 |
            | level 3                  | 7 confirmacion                                                 | string       | App Step 7 |
            | language                 | ES                                                             | string       | App Step 7 |
            | page area                | privada                                                        | string       | App Step 7 |
            | page intent              | transaccion                                                    | string       | App Step 7 |
            | channel                  | online                                                         | string       | App Step 7 |
            | page instance ID         | de                                                             | string       | App Step 7 |
            | page info version        | appVersion                                                     | regexp named | App Step 7 |
            | page segment             | personas                                                       | string       | App Step 7 |
            | sysEnv                   | app                                                            | string       | App Step 7 |
            | business unit            | BBVA Mexico                                                    | string       | App Step 7 |
            | site app name            | App BBVA Mexico                                                | string       | App Step 7 |
            | project name             | DIY E2E Sales                                                  | string       | App Step 7 |
            | device mobile            | si                                                             | string       | App Step 7 |
            | user userState           | logado                                                         | string       | App Step 7 |
            | user segment global      | 003001                                                         | string       | App Step 7 |
            | profile ID               | profileID                                                      | regexp named | App Step 7 |
            | user gender              | gender                                                         | regexp named | App Step 7 |
            | user age                 | age                                                            | regexp named | App Step 7 |
            | global application       | oc account youngsters                                          | string       | App Step 7 |
            | application name         | contratar cuenta joven                                         | string       | App Step 7 |
            | application type         | contratacion                                                   | string       | App Step 7 |
            | fulfillment model        | online                                                         | string       | App Step 7 |
            | application step         | 7 confirmacion                                                 | string       | App Step 7 |
            | product primary category | cuentas                                                        | string       | App Step 7 |
            | product name             | cuenta link card                                               | string       | App Step 7 |
            | application typology     | sin servicios digitales                                        | string       | App Step 7 |
            | internal campaign        |                                                                | empty array  | App Step 7 |
            | optimization attributes  |                                                                | empty array  | App Step 7 |

    @ANA_EVENT_OCAY009
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Otp - App Step 8
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        And the user accepts terms and conditions without digital services without modal
        When the user confirms the confirmation view step
        Then the analytics events contains the following variables
            | item                     | value                                                 | type         | event      |
            | analytics                | analytics/glomo_base                                  | json schema  | App Step 8 |
            | version DL               | 20250414_5.0                                          | string       | App Step 8 |
            | page name                | app:privada:personas:link card:contratar cuenta:8 otp | string       | App Step 8 |
            | level 1                  | link card                                             | string       | App Step 8 |
            | level 2                  | contratar cuenta                                      | string       | App Step 8 |
            | level 3                  | 8 otp                                                 | string       | App Step 8 |
            | language                 | ES                                                    | string       | App Step 8 |
            | page area                | privada                                               | string       | App Step 8 |
            | page intent              | transaccion                                           | string       | App Step 8 |
            | channel                  | online                                                | string       | App Step 8 |
            | page instance ID         | de                                                    | string       | App Step 8 |
            | page info version        | appVersion                                            | regexp named | App Step 8 |
            | page segment             | personas                                              | string       | App Step 8 |
            | sysEnv                   | app                                                   | string       | App Step 8 |
            | business unit            | BBVA Mexico                                           | string       | App Step 8 |
            | site app name            | App BBVA Mexico                                       | string       | App Step 8 |
            | project name             | DIY E2E Sales                                         | string       | App Step 8 |
            | device mobile            | si                                                    | string       | App Step 8 |
            | user userState           | logado                                                | string       | App Step 8 |
            | user segment global      | 003001                                                | string       | App Step 8 |
            | profile ID               | profileID                                             | regexp named | App Step 8 |
            | user gender              | gender                                                | regexp named | App Step 8 |
            | user age                 | age                                                   | regexp named | App Step 8 |
            | global application       | oc account youngsters                                 | string       | App Step 8 |
            | application name         | contratar cuenta joven                                | string       | App Step 8 |
            | application type         | contratacion                                          | string       | App Step 8 |
            | fulfillment model        | online                                                | string       | App Step 8 |
            | application step         | 8 otp                                                 | string       | App Step 8 |
            | product primary category | cuentas                                               | string       | App Step 8 |
            | product name             | cuenta link card                                      | string       | App Step 8 |
            | application typology     | sin servicios digitales                               | string       | App Step 8 |
            | custom fields            | firma:token                                           | string       | App Step 8 |
            | internal campaign        |                                                       | empty array  | App Step 8 |
            | optimization attributes  |                                                       | empty array  | App Step 8 |

    @ANA_EVENT_OCAY010
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Complete the contracting - App Completed
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        And the user accepts terms and conditions without digital services without modal
        When the user signs the confirmation view step
        Then the analytics events contains the following variables
            | item                         | value                                                          | type         | event         |
            | analytics                    | analytics/glomo_base                                           | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                   | string       | App Completed |
            | page name                    | app:privada:personas:link card:contratar cuenta:pagina exitosa | string       | App Completed |
            | level 1                      | link card                                                      | string       | App Completed |
            | level 2                      | contratar cuenta                                               | string       | App Completed |
            | level 3                      | pagina exitosa                                                 | string       | App Completed |
            | language                     | ES                                                             | string       | App Completed |
            | page area                    | privada                                                        | string       | App Completed |
            | page intent                  | transaccion                                                    | string       | App Completed |
            | channel                      | online                                                         | string       | App Completed |
            | page instance ID             | de                                                             | string       | App Completed |
            | page info version            | appVersion                                                     | regexp named | App Completed |
            | page segment                 | personas                                                       | string       | App Completed |
            | sysEnv                       | app                                                            | string       | App Completed |
            | business unit                | BBVA Mexico                                                    | string       | App Completed |
            | site app name                | App BBVA Mexico                                                | string       | App Completed |
            | project name                 | DIY E2E Sales                                                  | string       | App Completed |
            | device mobile                | si                                                             | string       | App Completed |
            | user userState               | logado                                                         | string       | App Completed |
            | user segment global          | 003001                                                         | string       | App Completed |
            | profile ID                   | profileID                                                      | regexp named | App Completed |
            | user gender                  | gender                                                         | regexp named | App Completed |
            | user age                     | age                                                            | regexp named | App Completed |
            | global application           | oc account youngsters                                          | string       | App Completed |
            | application name             | contratar cuenta joven                                         | string       | App Completed |
            | application type             | contratacion                                                   | string       | App Completed |
            | fulfillment model            | online                                                         | string       | App Completed |
            | application state            | contratado                                                     | string       | App Completed |
            | application operation number | 5749149860                                                     | string       | App Completed |
            | application step             | pagina exitosa                                                 | string       | App Completed |
            | product primary category     | cuentas                                                        | string       | App Completed |
            | product name                 | cuenta link card                                               | string       | App Completed |
            | application typology         | sin servicios digitales                                        | string       | App Completed |
            | product state                | contratado                                                     | string       | App Completed |
            | custom fields                | firma:token                                                    | string       | App Completed |
            | internal campaign            |                                                                | empty array  | App Completed |
            | optimization attributes      |                                                                | empty array  | App Completed |

    @ANA_EVENT_OCAY011
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Account Limit Exceeded - Page View
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        When the user goes to terms and conditions without digital services without modal
        Then the analytics events contains the following variables
            | item                    | value                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                               | string           | Page View |
            | page name               | app:privada:personas:link card:limite de cuentas alcanzado | string           | Page View |
            | level 1                 | link card                                                  | string           | Page View |
            | level 2                 | limite de cuentas alcanzado                                | string           | Page View |
            | language                | ES                                                         | string           | Page View |
            | page area               | privada                                                    | string           | Page View |
            | page intent             | transaccion                                                | string           | Page View |
            | channel                 | online                                                     | string           | Page View |
            | page instance ID        | de                                                         | string           | Page View |
            | page info version       | appVersion                                                 | regexp named     | Page View |
            | page segment            | personas                                                   | string           | Page View |
            | sysEnv                  | app                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                            | string           | Page View |
            | project name            | DIY E2E Sales                                              | string           | Page View |
            | device mobile           | si                                                         | string           | Page View |
            | user userState          | logado                                                     | string           | Page View |
            | user segment global     | 003001                                                     | string           | Page View |
            | profile ID              | profileID                                                  | regexp named     | Page View |
            | user gender             | gender                                                     | regexp named     | Page View |
            | user age                | age                                                        | regexp named     | Page View |
            | internal campaign       |                                                            | empty array      | Page View |
            | optimization attributes |                                                            | empty array      | Page View |
            | application             |                                                            | empty str object | Page View |
            | products attributes     |                                                            | empty array      | Page View |

    @ANA_EVENT_OCAY012
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Additional Information - Page View
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        When the user completes the minor information
        Then the analytics events contains the following variables
            | item                    | value                                                             | type             | event     |
            | analytics               | analytics/glomo_base                                              | json schema      | Page View |
            | version DL              | 20250414_5.0                                                      | string           | Page View |
            | page name               | app:privada:personas:link card:contratar cuenta:datos adicionales | string           | Page View |
            | level 1                 | link card                                                         | string           | Page View |
            | level 2                 | contratar cuenta                                                  | string           | Page View |
            | level 3                 | datos adicionales                                                 | string           | Page View |
            | language                | ES                                                                | string           | Page View |
            | page area               | privada                                                           | string           | Page View |
            | page intent             | transaccion                                                       | string           | Page View |
            | channel                 | online                                                            | string           | Page View |
            | page instance ID        | de                                                                | string           | Page View |
            | page info version       | appVersion                                                        | regexp named     | Page View |
            | page segment            | personas                                                          | string           | Page View |
            | sysEnv                  | app                                                               | string           | Page View |
            | business unit           | BBVA Mexico                                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                                   | string           | Page View |
            | project name            | DIY E2E Sales                                                     | string           | Page View |
            | device mobile           | si                                                                | string           | Page View |
            | user userState          | logado                                                            | string           | Page View |
            | user segment global     | 003001                                                            | string           | Page View |
            | profile ID              | profileID                                                         | regexp named     | Page View |
            | user gender             | gender                                                            | regexp named     | Page View |
            | user age                | age                                                               | regexp named     | Page View |
            | internal campaign       |                                                                   | empty array      | Page View |
            | optimization attributes |                                                                   | empty array      | Page View |
            | application             |                                                                   | empty str object | Page View |
            | products attributes     |                                                                   | empty array      | Page View |

    @ANA_EVENT_OCAY013
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Deposit Limit Information - Page View
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accesses to the oc account young offer detail
        When the user selects "limit detail link" element from oc account young
        Then the analytics events contains the following variables
            | item                    | value                                                               | type             | event     |
            | analytics               | analytics/glomo_base                                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                                        | string           | Page View |
            | page name               | app:privada:personas:link card:contratar cuenta:limite de depositos | string           | Page View |
            | level 1                 | link card                                                           | string           | Page View |
            | level 2                 | contratar cuenta                                                    | string           | Page View |
            | level 3                 | limite de depositos                                                 | string           | Page View |
            | language                | ES                                                                  | string           | Page View |
            | page area               | privada                                                             | string           | Page View |
            | page intent             | transaccion                                                         | string           | Page View |
            | channel                 | online                                                              | string           | Page View |
            | page instance ID        | de                                                                  | string           | Page View |
            | page info version       | appVersion                                                          | regexp named     | Page View |
            | page segment            | personas                                                            | string           | Page View |
            | sysEnv                  | app                                                                 | string           | Page View |
            | business unit           | BBVA Mexico                                                         | string           | Page View |
            | site app name           | App BBVA Mexico                                                     | string           | Page View |
            | project name            | DIY E2E Sales                                                       | string           | Page View |
            | device mobile           | si                                                                  | string           | Page View |
            | user userState          | logado                                                              | string           | Page View |
            | user segment global     | 003001                                                              | string           | Page View |
            | profile ID              | profileID                                                           | regexp named     | Page View |
            | user gender             | gender                                                              | regexp named     | Page View |
            | user age                | age                                                                 | regexp named     | Page View |
            | internal campaign       |                                                                     | empty array      | Page View |
            | optimization attributes |                                                                     | empty array      | Page View |
            | application             |                                                                     | empty str object | Page View |
            | products attributes     |                                                                     | empty array      | Page View |

    @ANA_EVENT_OCAY014
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: No Contracting Account Error - Page View
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        And the user goes to terms and conditions without digital services without modal
        When the user retries "3" more times
        Then the analytics events contains the following variables
            | item                    | value                                                                                 | type             | event     |
            | analytics               | analytics/glomo_base                                                                  | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                          | string           | Page View |
            | page name               | app:privada:personas:link card:contratar cuenta:error la cuenta no se puede contratar | string           | Page View |
            | level 1                 | link card                                                                             | string           | Page View |
            | level 2                 | contratar cuenta                                                                      | string           | Page View |
            | level 3                 | error la cuenta no se puede contratar                                                 | string           | Page View |
            | language                | ES                                                                                    | string           | Page View |
            | page area               | privada                                                                               | string           | Page View |
            | page intent             | transaccion                                                                           | string           | Page View |
            | channel                 | online                                                                                | string           | Page View |
            | page instance ID        | de                                                                                    | string           | Page View |
            | page info version       | appVersion                                                                            | regexp named     | Page View |
            | page segment            | personas                                                                              | string           | Page View |
            | sysEnv                  | app                                                                                   | string           | Page View |
            | business unit           | BBVA Mexico                                                                           | string           | Page View |
            | site app name           | App BBVA Mexico                                                                       | string           | Page View |
            | project name            | DIY E2E Sales                                                                         | string           | Page View |
            | device mobile           | si                                                                                    | string           | Page View |
            | user userState          | logado                                                                                | string           | Page View |
            | user segment global     | 003001                                                                                | string           | Page View |
            | profile ID              | profileID                                                                             | regexp named     | Page View |
            | user gender             | gender                                                                                | regexp named     | Page View |
            | user age                | age                                                                                   | regexp named     | Page View |
            | error page              | error la cuenta no se puede contratar                                                 | string           | Page View |
            | internal campaign       |                                                                                       | empty array      | Page View |
            | optimization attributes |                                                                                       | empty array      | Page View |
            | application             |                                                                                       | empty str object | Page View |
            | products attributes     |                                                                                       | empty array      | Page View |

    @ANA_EVENT_OCAY015
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: No Validate Information Error - Page View
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        And the user completes the minor information
        When the user retries "3" more times
        Then the analytics events contains the following variables
            | item                    | value                                                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                                                    | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                            | string           | Page View |
            | page name               | app:privada:personas:link card:contratar cuenta:error no se pudo validar la informacion | string           | Page View |
            | level 1                 | link card                                                                               | string           | Page View |
            | level 2                 | contratar cuenta                                                                        | string           | Page View |
            | level 3                 | error no se pudo validar la informacion                                                 | string           | Page View |
            | language                | ES                                                                                      | string           | Page View |
            | page area               | privada                                                                                 | string           | Page View |
            | page intent             | transaccion                                                                             | string           | Page View |
            | channel                 | online                                                                                  | string           | Page View |
            | page instance ID        | de                                                                                      | string           | Page View |
            | page info version       | appVersion                                                                              | regexp named     | Page View |
            | page segment            | personas                                                                                | string           | Page View |
            | sysEnv                  | app                                                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                                                         | string           | Page View |
            | project name            | DIY E2E Sales                                                                           | string           | Page View |
            | device mobile           | si                                                                                      | string           | Page View |
            | user userState          | logado                                                                                  | string           | Page View |
            | user segment global     | 003001                                                                                  | string           | Page View |
            | profile ID              | profileID                                                                               | regexp named     | Page View |
            | user gender             | gender                                                                                  | regexp named     | Page View |
            | user age                | age                                                                                     | regexp named     | Page View |
            | error page              | error no se pudo validar la informacion                                                 | string           | Page View |
            | internal campaign       |                                                                                         | empty array      | Page View |
            | optimization attributes |                                                                                         | empty array      | Page View |
            | application             |                                                                                         | empty str object | Page View |
            | products attributes     |                                                                                         | empty array      | Page View |

    @ANA_EVENT_OCAY016
    @analytics
    @web @ios @android @manual @JIRA.GLOMOGL-20021
    @MX @backend(test) @vbank @web-done
    Scenario: Upload Photo Error - Page View
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        And the user fills the minor information and continues
        When the user uploads the birth certificate exceeded file and continues
        Then the analytics events contains the following variables
            | item                    | value                                                               | type             | event     |
            | analytics               | analytics/glomo_base                                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                                        | string           | Page View |
            | page name               | app:privada:personas:link card:contratar cuenta:error foto del acta | string           | Page View |
            | level 1                 | link card                                                           | string           | Page View |
            | level 2                 | contratar cuenta                                                    | string           | Page View |
            | level 3                 | error foto del acta                                                 | string           | Page View |
            | language                | ES                                                                  | string           | Page View |
            | page area               | privada                                                             | string           | Page View |
            | page intent             | transaccion                                                         | string           | Page View |
            | channel                 | online                                                              | string           | Page View |
            | page instance ID        | de                                                                  | string           | Page View |
            | page info version       | appVersion                                                          | regexp named     | Page View |
            | page segment            | personas                                                            | string           | Page View |
            | sysEnv                  | app                                                                 | string           | Page View |
            | business unit           | BBVA Mexico                                                         | string           | Page View |
            | site app name           | App BBVA Mexico                                                     | string           | Page View |
            | project name            | DIY E2E Sales                                                       | string           | Page View |
            | device mobile           | si                                                                  | string           | Page View |
            | user userState          | logado                                                              | string           | Page View |
            | user segment global     | 003001                                                              | string           | Page View |
            | profile ID              | profileID                                                           | regexp named     | Page View |
            | user gender             | gender                                                              | regexp named     | Page View |
            | user age                | age                                                                 | regexp named     | Page View |
            | error page              | error foto del acta                                                 | string           | Page View |
            | internal campaign       |                                                                     | empty array      | Page View |
            | optimization attributes |                                                                     | empty array      | Page View |
            | application             |                                                                     | empty str object | Page View |
            | products attributes     |                                                                     | empty array      | Page View |

    @ANA_EVENT_OCAY017
    @analytics
    @web @ios @android @manual @JIRA.GLOMOGL-20021
    @MX @backend(test) @vbank @web-done
    Scenario: Upload Document Error - Page View
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        And the user fills the minor information and continues
        When the user uploads the birth certificate file and continues
        Then the analytics events contains the following variables
            | item                    | value                                                                    | type             | event     |
            | analytics               | analytics/glomo_base                                                     | json schema      | Page View |
            | version DL              | 20250414_5.0                                                             | string           | Page View |
            | page name               | app:privada:personas:link card:contratar cuenta:error carga de documento | string           | Page View |
            | level 1                 | link card                                                                | string           | Page View |
            | level 2                 | contratar cuenta                                                         | string           | Page View |
            | level 3                 | error carga de documento                                                 | string           | Page View |
            | language                | ES                                                                       | string           | Page View |
            | page area               | privada                                                                  | string           | Page View |
            | page intent             | transaccion                                                              | string           | Page View |
            | channel                 | online                                                                   | string           | Page View |
            | page instance ID        | de                                                                       | string           | Page View |
            | page info version       | appVersion                                                               | regexp named     | Page View |
            | page segment            | personas                                                                 | string           | Page View |
            | sysEnv                  | app                                                                      | string           | Page View |
            | business unit           | BBVA Mexico                                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                                          | string           | Page View |
            | project name            | DIY E2E Sales                                                            | string           | Page View |
            | device mobile           | si                                                                       | string           | Page View |
            | user userState          | logado                                                                   | string           | Page View |
            | user segment global     | 003001                                                                   | string           | Page View |
            | profile ID              | profileID                                                                | regexp named     | Page View |
            | user gender             | gender                                                                   | regexp named     | Page View |
            | user age                | age                                                                      | regexp named     | Page View |
            | error page              | error carga de documento                                                 | string           | Page View |
            | internal campaign       |                                                                          | empty array      | Page View |
            | optimization attributes |                                                                          | empty array      | Page View |
            | application             |                                                                          | empty str object | Page View |
            | products attributes     |                                                                          | empty array      | Page View |

    @ANA_EVENT_OCAY018
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Show Address Otp - Page View
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        And the user completes the minor information
        And the user uploads the birth certificate file and continues
        When the user selects show address
        Then the analytics events contains the following variables
            | item                    | value                                                           | type         | event     |
            | analytics               | analytics/glomo_base                                            | json schema  | Page View |
            | version DL              | 20250414_5.0                                                    | string       | Page View |
            | page name               | app:privada:personas:link card:contratar cuenta:4 domicilio:otp | string       | Page View |
            | level 1                 | link card                                                       | string       | Page View |
            | level 2                 | contratar cuenta                                                | string       | Page View |
            | level 3                 | 4 domicilio                                                     | string       | Page View |
            | level 4                 | otp                                                             | string       | Page View |
            | language                | ES                                                              | string       | Page View |
            | page area               | privada                                                         | string       | Page View |
            | page intent             | transaccion                                                     | string       | Page View |
            | channel                 | online                                                          | string       | Page View |
            | page instance ID        | de                                                              | string       | Page View |
            | page info version       | appVersion                                                      | regexp named | Page View |
            | page segment            | personas                                                        | string       | Page View |
            | sysEnv                  | app                                                             | string       | Page View |
            | business unit           | BBVA Mexico                                                     | string       | Page View |
            | site app name           | App BBVA Mexico                                                 | string       | Page View |
            | project name            | DIY E2E Sales                                                   | string       | Page View |
            | device mobile           | si                                                              | string       | Page View |
            | user userState          | logado                                                          | string       | Page View |
            | user segment global     | 003001                                                          | string       | Page View |
            | profile ID              | profileID                                                       | regexp named | Page View |
            | user gender             | gender                                                          | regexp named | Page View |
            | user age                | age                                                             | regexp named | Page View |
            | custom fields           | firma:token                                                     | string       | Page View |
            | internal campaign       |                                                                 | empty array  | Page View |
            | optimization attributes |                                                                 | empty array  | Page View |
            | products attributes     |                                                                 | empty array  | Page View |

    @ANA_EVENT_OCAY019
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: No Match Curp - Page View
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        And the user completes the minor information
        When the user retries fill the additional information
        Then the analytics events contains the following variables
            | item                    | value                                                                              | type             | event     | event number |
            | analytics               | analytics/glomo_base                                                               | json schema      | Page View | 2            |
            | version DL              | 20250414_5.0                                                                       | string           | Page View | 2            |
            | page name               | app:privada:personas:link card:contratar cuenta:datos adicionales:curp no coincide | string           | Page View | 2            |
            | level 1                 | link card                                                                          | string           | Page View | 2            |
            | level 2                 | contratar cuenta                                                                   | string           | Page View | 2            |
            | level 3                 | datos adicionales                                                                  | string           | Page View | 2            |
            | level 4                 | curp no coincide                                                                   | string           | Page View | 2            |
            | language                | ES                                                                                 | string           | Page View | 2            |
            | page area               | privada                                                                            | string           | Page View | 2            |
            | page intent             | transaccion                                                                        | string           | Page View | 2            |
            | channel                 | online                                                                             | string           | Page View | 2            |
            | page instance ID        | de                                                                                 | string           | Page View | 2            |
            | page info version       | appVersion                                                                         | regexp named     | Page View | 2            |
            | page segment            | personas                                                                           | string           | Page View | 2            |
            | sysEnv                  | app                                                                                | string           | Page View | 2            |
            | business unit           | BBVA Mexico                                                                        | string           | Page View | 2            |
            | site app name           | App BBVA Mexico                                                                    | string           | Page View | 2            |
            | project name            | DIY E2E Sales                                                                      | string           | Page View | 2            |
            | device mobile           | si                                                                                 | string           | Page View | 2            |
            | user userState          | logado                                                                             | string           | Page View | 2            |
            | user segment global     | 003001                                                                             | string           | Page View | 2            |
            | profile ID              | profileID                                                                          | regexp named     | Page View | 2            |
            | user gender             | gender                                                                             | regexp named     | Page View | 2            |
            | user age                | age                                                                                | regexp named     | Page View | 2            |
            | internal campaign       |                                                                                    | empty array      | Page View | 2            |
            | optimization attributes |                                                                                    | empty array      | Page View | 2            |
            | application             |                                                                                    | empty str object | Page View | 2            |
            | products attributes     |                                                                                    | empty array      | Page View | 2            |

    @ANA_EVENT_OCAY020
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario Outline: No Match Curp - <link name> link - Internal Link
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        And the user completes the minor information
        And the user retries fill the additional information
        When the user selects "<element>" element from oc account young
        Then the analytics events contains the following variables
            | item                    | value                                                                              | type             | event         |
            | analytics               | analytics/glomo_base                                                               | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                                       | string           | Internal Link |
            | page name               | app:privada:personas:link card:contratar cuenta:datos adicionales:curp no coincide | string           | Internal Link |
            | level 1                 | link card                                                                          | string           | Internal Link |
            | level 2                 | contratar cuenta                                                                   | string           | Internal Link |
            | level 3                 | datos adicionales                                                                  | string           | Internal Link |
            | level 4                 | curp no coincide                                                                   | string           | Internal Link |
            | language                | ES                                                                                 | string           | Internal Link |
            | page area               | privada                                                                            | string           | Internal Link |
            | page intent             | transaccion                                                                        | string           | Internal Link |
            | channel                 | online                                                                             | string           | Internal Link |
            | page instance ID        | de                                                                                 | string           | Internal Link |
            | page info version       | appVersion                                                                         | regexp named     | Internal Link |
            | page segment            | personas                                                                           | string           | Internal Link |
            | sysEnv                  | app                                                                                | string           | Internal Link |
            | business unit           | BBVA Mexico                                                                        | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                                    | string           | Internal Link |
            | project name            | DIY E2E Sales                                                                      | string           | Internal Link |
            | device mobile           | si                                                                                 | string           | Internal Link |
            | user userState          | logado                                                                             | string           | Internal Link |
            | user segment global     | 003001                                                                             | string           | Internal Link |
            | profile ID              | profileID                                                                          | regexp named     | Internal Link |
            | user gender             | gender                                                                             | regexp named     | Internal Link |
            | user age                | age                                                                                | regexp named     | Internal Link |
            | link name               | <link name>                                                                        | string           | Internal Link |
            | internal campaign       |                                                                                    | empty array      | Internal Link |
            | optimization attributes |                                                                                    | empty array      | Internal Link |
            | application             |                                                                                    | empty str object | Internal Link |
            | products attributes     |                                                                                    | empty array      | Internal Link |
        Examples:
            | element             | link name      |
            | accept modal button | salir          |
            | exit modal button   | ver sucursales |

    @ANA_EVENT_OCAY021
    @analytics
    @web @ios @android @manual @JIRA.GLOMOGL-20021
    @MX @backend(test) @vbank @web-done
    Scenario: Take photo to the birth certificate - Page View
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        And the user accepts to the oc account young offer detail
        And the user completes the minor information
        When the user uploads the birth certificate file
        Then the analytics events contains the following variables
            | item                    | value                                                              | type             | event     |
            | analytics               | analytics/glomo_base                                               | json schema      | Page View |
            | version DL              | 20250414_5.0                                                       | string           | Page View |
            | page name               | app:privada:personas:link card:contratar cuenta:previsualizar foto | string           | Page View |
            | level 1                 | link card                                                          | string           | Page View |
            | level 2                 | contratar cuenta                                                   | string           | Page View |
            | level 3                 | previsualizar foto                                                 | string           | Page View |
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
