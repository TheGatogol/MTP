@contractProductsSectionDataAuthorizationMultiproductAnalytics
Feature: Analytics - data authorization multiproduct

    @ANA_EVENT_CPS001
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: View the offer as the in the Opportunities section Priority 0 - App On Click Start
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | client offer multiproduct       |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user access to data authorization multiproduct from "opportunities section"
        Then the analytics events contains the following variables
            | item                                         | value                                                              | type         | event              |
            | page Instance ID                             | de                                                                 | string       | App On Click Start |
            | version DL                                   | 20250414_5.0                                                       | string       | App On Click Start |
            | page area                                    | privada                                                            | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                        | string       | App On Click Start |
            | channel                                      | online                                                             | string       | App On Click Start |
            | language                                     | ES                                                                 | string       | App On Click Start |
            | level 1                                      | oportunidades                                                      | string       | App On Click Start |
            | page intent                                  | informacion                                                        | string       | App On Click Start |
            | page name                                    | app:privada:personas:oportunidades                                 | string       | App On Click Start |
            | page segment                                 | personas                                                           | string       | App On Click Start |
            | project Name                                 | Glomo                                                              | string       | App On Click Start |
            | site App Name                                | App BBVA Mexico                                                    | string       | App On Click Start |
            | sysEnv                                       | app                                                                | string       | App On Click Start |
            | user age                                     | age                                                                | regexp named | App On Click Start |
            | device mobile                                | si                                                                 | string       | App On Click Start |
            | user gender                                  | gender                                                             | regexp named | App On Click Start |
            | profile ID                                   | profileID                                                          | regexp named | App On Click Start |
            | user segment global                          | 003001                                                             | string       | App On Click Start |
            | user userState                               | logado                                                             | string       | App On Click Start |
            | fulfillment model                            | online                                                             | string       | App On Click Start |
            | application step                             | oportunidades                                                      | string       | App On Click Start |
            | application name                             | consulta de datos                                                  | string       | App On Click Start |
            | application type                             | autogestion                                                        | string       | App On Click Start |
            | global application                           | cards on demand                                                    | string       | App On Click Start |
            | internal campaign attributes location        | contract product section--centro-14-18                             | string       | App On Click Start |
            | internal campaign attributes quantity        | 0                                                                  | string       | App On Click Start |
            | internal campaign attributes campaign name   | -autorizando la consulta podrias recibir ofertas disenadas para ti | string       | App On Click Start |
            | internal campaign attributes campaign format | card                                                               | string       | App On Click Start |
            | internal campaign attributes collective code | vd-                                                                | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                        | string       | App On Click Start |

    @ANA_EVENT_CPS002
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: View the offer in the nba section - App On Click Start
        Given a user with the following criteria
            | criteria                          |
            | data authorization multiproduct   |
            | client offer multiproduct nba nbo |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user access to data authorization multiproduct from "nba"
        Then the analytics events contains the following variables
            | item                                         | value                                                              | type         | event              |
            | page Instance ID                             | de                                                                 | string       | App On Click Start |
            | version DL                                   | 20250414_5.0                                                       | string       | App On Click Start |
            | page area                                    | privada                                                            | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                        | string       | App On Click Start |
            | channel                                      | online                                                             | string       | App On Click Start |
            | language                                     | ES                                                                 | string       | App On Click Start |
            | level 1                                      | posicion global                                                    | string       | App On Click Start |
            | level 2                                      | destacado                                                          | string       | App On Click Start |
            | page intent                                  | informacion                                                        | string       | App On Click Start |
            | page name                                    | app:privada:personas:posicion global:destacado                     | string       | App On Click Start |
            | page segment                                 | personas                                                           | string       | App On Click Start |
            | project Name                                 | Futura                                                             | string       | App On Click Start |
            | site App Name                                | App BBVA Mexico                                                    | string       | App On Click Start |
            | sysEnv                                       | app                                                                | string       | App On Click Start |
            | user age                                     | age                                                                | regexp named | App On Click Start |
            | device mobile                                | si                                                                 | string       | App On Click Start |
            | user gender                                  | gender                                                             | regexp named | App On Click Start |
            | profile ID                                   | profileID                                                          | regexp named | App On Click Start |
            | user segment global                          | 003001                                                             | string       | App On Click Start |
            | user userState                               | logado                                                             | string       | App On Click Start |
            | application step                             | me interesa posicion global nba                                    | string       | App On Click Start |
            | application name                             | consulta de datos                                                  | string       | App On Click Start |
            | internal campaign attributes location        | dashboard destacado-nba-superior-1-1-4                             | string       | App On Click Start |
            | internal campaign attributes quantity        | 0                                                                  | number       | App On Click Start |
            | internal campaign attributes campaign name   | -autorizando la consulta podrias recibir ofertas disenadas para ti | string       | App On Click Start |
            | internal campaign attributes campaign format | carrusel                                                           | string       | App On Click Start |
            | internal campaign attributes collective code | vd-                                                                | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                        | string       | App On Click Start |

    @ANA_EVENT_CPS003
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: View the offer in the nbo section - App On Click Start
        Given a user with the following criteria
            | criteria                          |
            | data authorization multiproduct   |
            | client offer multiproduct nba nbo |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user access to data authorization multiproduct from "nbo"
        Then the analytics events contains the following variables
            | item                                         | value                                                              | type         | event              |
            | page Instance ID                             | de                                                                 | string       | App On Click Start |
            | version DL                                   | 20250414_5.0                                                       | string       | App On Click Start |
            | page area                                    | privada                                                            | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                        | string       | App On Click Start |
            | channel                                      | online                                                             | string       | App On Click Start |
            | language                                     | ES                                                                 | string       | App On Click Start |
            | level 1                                      | posicion global                                                    | string       | App On Click Start |
            | level 2                                      | destacado                                                          | string       | App On Click Start |
            | page intent                                  | informacion                                                        | string       | App On Click Start |
            | page name                                    | app:privada:personas:posicion global:destacado                     | string       | App On Click Start |
            | page segment                                 | personas                                                           | string       | App On Click Start |
            | project Name                                 | Futura                                                             | string       | App On Click Start |
            | site App Name                                | App BBVA Mexico                                                    | string       | App On Click Start |
            | sysEnv                                       | app                                                                | string       | App On Click Start |
            | user age                                     | age                                                                | regexp named | App On Click Start |
            | device mobile                                | si                                                                 | string       | App On Click Start |
            | user gender                                  | gender                                                             | regexp named | App On Click Start |
            | profile ID                                   | profileID                                                          | regexp named | App On Click Start |
            | user segment global                          | 003001                                                             | string       | App On Click Start |
            | user userState                               | logado                                                             | string       | App On Click Start |
            | application step                             | me interesa posicion global nbo                                    | string       | App On Click Start |
            | application name                             | consulta de datos                                                  | string       | App On Click Start |
            | internal campaign attributes location        | dashboard destacado-te puede interesar-centro-1-1-5                | string       | App On Click Start |
            | internal campaign attributes quantity        | 0                                                                  | number       | App On Click Start |
            | internal campaign attributes campaign name   | -autorizando la consulta podrias recibir ofertas disenadas para ti | string       | App On Click Start |
            | internal campaign attributes campaign format | carrusel                                                           | string       | App On Click Start |
            | internal campaign attributes collective code | vd-                                                                | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                        | string       | App On Click Start |

    @ANA_EVENT_CPS004
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: data authorization multiproduct Multiproduct - App Page Visit
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | client offer multiproduct       |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user access to data authorization multiproduct from "opportunities section"
        Then the analytics events contains the following variables
            | item                | value                                                       | type         | event          |
            | page Instance ID    | de                                                          | string       | App Page Visit |
            | version DL          | 20250414_5.0                                                | string       | App Page Visit |
            | page area           | privada                                                     | string       | App Page Visit |
            | business unit       | BBVA Mexico                                                 | string       | App Page Visit |
            | channel             | online                                                      | string       | App Page Visit |
            | language            | ES                                                          | string       | App Page Visit |
            | level 1             | consulta de datos                                           | string       | App Page Visit |
            | level 2             | 1 autorizar consulta                                        | string       | App Page Visit |
            | page intent         | informacion                                                 | string       | App Page Visit |
            | page name           | app:privada:personas:consulta de datos:1 autorizar consulta | string       | App Page Visit |
            | page segment        | personas                                                    | string       | App Page Visit |
            | project Name        | Glomo                                                       | string       | App Page Visit |
            | site App Name       | App BBVA Mexico                                             | string       | App Page Visit |
            | sysEnv              | app                                                         | string       | App Page Visit |
            | user age            | age                                                         | regexp named | App Page Visit |
            | device mobile       | si                                                          | string       | App Page Visit |
            | user gender         | gender                                                      | regexp named | App Page Visit |
            | profile ID          | profileID                                                   | regexp named | App Page Visit |
            | user segment global | 003001                                                      | string       | App Page Visit |
            | user userState      | logado                                                      | string       | App Page Visit |
            | fulfillment model   | online                                                      | string       | App Page Visit |
            | application step    | 1 autorizar consulta                                        | string       | App Page Visit |
            | application name    | consulta de datos                                           | string       | App Page Visit |
            | application type    | autogestion                                                 | string       | App Page Visit |
            | global application  | cards on demand                                             | string       | App Page Visit |

    @ANA_EVENT_CPS005
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: See the conditions credit of the authorization - App Started & Page View
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | client offer multiproduct       |
        And the user access to data authorization multiproduct from "opportunities section"
        And the analytics interceptor service is initiated
        When the user access to credit history conditions
        Then the analytics events contains the following variables
            | item                | value                                                             | type         | event                  |
            | page Instance ID    | de                                                                | string       | App Started, Page View |
            | version DL          | 20250414_5.0                                                      | string       | App Started, Page View |
            | page area           | privada                                                           | string       | App Started, Page View |
            | business unit       | BBVA Mexico                                                       | string       | App Started, Page View |
            | channel             | online                                                            | string       | App Started, Page View |
            | language            | ES                                                                | string       | App Started, Page View |
            | level 2             | consulta historial credito                                        | string       | Page View              |
            | level 1             | consulta de datos                                                 | string       | App Started, Page View |
            | level 2             | 1 autorizar consulta                                              | string       | App Started            |
            | page intent         | informacion                                                       | string       | App Started, Page View |
            | page name           | app:privada:personas:consulta de datos:1 autorizar consulta       | string       | App Started            |
            | page name           | app:privada:personas:consulta de datos:consulta historial credito | string       | Page View              |
            | page segment        | personas                                                          | string       | App Started, Page View |
            | project Name        | Glomo                                                             | string       | App Started, Page View |
            | site App Name       | App BBVA Mexico                                                   | string       | App Started, Page View |
            | sysEnv              | app                                                               | string       | App Started, Page View |
            | user age            | age                                                               | regexp named | App Started, Page View |
            | device mobile       | si                                                                | string       | App Started, Page View |
            | user gender         | gender                                                            | regexp named | App Started, Page View |
            | profile ID          | profileID                                                         | regexp named | App Started, Page View |
            | user segment global | 003001                                                            | string       | App Started, Page View |
            | user userState      | logado                                                            | string       | App Started, Page View |
            | fulfillment model   | online                                                            | string       | App Started            |
            | application step    | consulta historial credito                                        | string       | App Started            |
            | application name    | consulta de datos                                                 | string       | App Started            |
            | application type    | autogestion                                                       | string       | App Started            |
            | global application  | cards on demand                                                   | string       | App Started            |

    @ANA_EVENT_CPS006
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: See the conditions laboral of the authorization - App Started & Page View
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | client offer multiproduct       |
        And the user access to data authorization multiproduct from "opportunities section"
        And the analytics interceptor service is initiated
        When the user access to demographic conditions
        Then the analytics events contains the following variables
            | item                | value                                                             | type         | event                  |
            | page Instance ID    | de                                                                | string       | App Started, Page View |
            | version DL          | 20250414_5.0                                                      | string       | App Started, Page View |
            | page area           | privada                                                           | string       | App Started, Page View |
            | business unit       | BBVA Mexico                                                       | string       | App Started, Page View |
            | channel             | online                                                            | string       | App Started, Page View |
            | language            | ES                                                                | string       | App Started, Page View |
            | level 2             | consulta historial laboral                                        | string       | Page View              |
            | level 1             | consulta de datos                                                 | string       | App Started, Page View |
            | level 2             | 1 autorizar consulta                                              | string       | App Started            |
            | page intent         | informacion                                                       | string       | App Started, Page View |
            | page name           | app:privada:personas:consulta de datos:1 autorizar consulta       | string       | App Started            |
            | page name           | app:privada:personas:consulta de datos:consulta historial laboral | string       | Page View              |
            | page segment        | personas                                                          | string       | App Started, Page View |
            | project Name        | Glomo                                                             | string       | App Started, Page View |
            | site App Name       | App BBVA Mexico                                                   | string       | App Started, Page View |
            | sysEnv              | app                                                               | string       | App Started, Page View |
            | user age            | age                                                               | regexp named | App Started, Page View |
            | device mobile       | si                                                                | string       | App Started, Page View |
            | user gender         | gender                                                            | regexp named | App Started, Page View |
            | profile ID          | profileID                                                         | regexp named | App Started, Page View |
            | user segment global | 003001                                                            | string       | App Started, Page View |
            | user userState      | logado                                                            | string       | App Started, Page View |
            | fulfillment model   | online                                                            | string       | App Started            |
            | application step    | consulta historial laboral                                        | string       | App Started            |
            | application name    | consulta de datos                                                 | string       | App Started            |
            | application type    | autogestion                                                       | string       | App Started            |
            | global application  | cards on demand                                                   | string       | App Started            |

    @ANA_EVENT_CPS007
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: See the privacy of the authorization - App Started & Page View
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | client offer multiproduct       |
        And the user access to data authorization multiproduct from "opportunities section"
        And the analytics interceptor service is initiated
        When the user access to privacy notice analytics
        Then the analytics events contains the following variables
            | item                | value                                                       | type         | event                  |
            | page Instance ID    | de                                                          | string       | App Started, Page View |
            | version DL          | 20250414_5.0                                                | string       | App Started, Page View |
            | page area           | privada                                                     | string       | App Started, Page View |
            | business unit       | BBVA Mexico                                                 | string       | App Started, Page View |
            | channel             | online                                                      | string       | App Started, Page View |
            | language            | ES                                                          | string       | App Started, Page View |
            | level 2             | aviso privacidad                                            | string       | Page View              |
            | level 1             | consulta de datos                                           | string       | App Started, Page View |
            | level 2             | 1 autorizar consulta                                        | string       | App Started            |
            | page intent         | informacion                                                 | string       | App Started, Page View |
            | page name           | app:privada:personas:consulta de datos:1 autorizar consulta | string       | App Started            |
            | page name           | app:privada:personas:consulta de datos:aviso privacidad     | string       | Page View              |
            | page segment        | personas                                                    | string       | App Started, Page View |
            | project Name        | Glomo                                                       | string       | App Started, Page View |
            | site App Name       | App BBVA Mexico                                             | string       | App Started, Page View |
            | sysEnv              | app                                                         | string       | App Started, Page View |
            | user age            | age                                                         | regexp named | App Started, Page View |
            | device mobile       | si                                                          | string       | App Started, Page View |
            | user gender         | gender                                                      | regexp named | App Started, Page View |
            | profile ID          | profileID                                                   | regexp named | App Started, Page View |
            | user segment global | 003001                                                      | string       | App Started, Page View |
            | user userState      | logado                                                      | string       | App Started, Page View |
            | fulfillment model   | online                                                      | string       | App Started            |
            | application step    | aviso privacidad                                            | string       | App Started            |
            | application name    | consulta de datos                                           | string       | App Started            |
            | application type    | autogestion                                                 | string       | App Started            |
            | global application  | cards on demand                                             | string       | App Started            |

    @ANA_EVENT_CPS008
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: See the check credit of the authorization credit history - App Started
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | client offer multiproduct       |
        And the user access to data authorization multiproduct from "opportunities section"
        And the analytics interceptor service is initiated
        When the user selects the authorization with "credit history"
        Then the analytics events contains the following variables
            | item                | value                                                       | type         | event       |
            | page Instance ID    | de                                                          | string       | App Started |
            | version DL          | 20250414_5.0                                                | string       | App Started |
            | page area           | privada                                                     | string       | App Started |
            | business unit       | BBVA Mexico                                                 | string       | App Started |
            | channel             | online                                                      | string       | App Started |
            | language            | ES                                                          | string       | App Started |
            | level 1             | consulta de datos                                           | string       | App Started |
            | level 2             | 1 autorizar consulta                                        | string       | App Started |
            | page intent         | informacion                                                 | string       | App Started |
            | page name           | app:privada:personas:consulta de datos:1 autorizar consulta | string       | App Started |
            | page segment        | personas                                                    | string       | App Started |
            | project Name        | Glomo                                                       | string       | App Started |
            | site App Name       | App BBVA Mexico                                             | string       | App Started |
            | sysEnv              | app                                                         | string       | App Started |
            | user age            | age                                                         | regexp named | App Started |
            | device mobile       | si                                                          | string       | App Started |
            | user gender         | gender                                                      | regexp named | App Started |
            | profile ID          | profileID                                                   | regexp named | App Started |
            | user segment global | 003001                                                      | string       | App Started |
            | user userState      | logado                                                      | string       | App Started |
            | fulfillment model   | online                                                      | string       | App Started |
            | application step    | autorizacion historial credito                              | string       | App Started |
            | application name    | consulta de datos                                           | string       | App Started |
            | application type    | autogestion                                                 | string       | App Started |
            | global application  | cards on demand                                             | string       | App Started |

    @ANA_EVENT_CPS009
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: See the check credit of the authorization employment and sociodemographic history - App Started
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | client offer multiproduct       |
        And the user access to data authorization multiproduct from "opportunities section"
        And the analytics interceptor service is initiated
        When the user selects the authorization with "employment and sociodemographic history"
        Then the analytics events contains the following variables
            | item                | value                                                       | type         | event       |
            | page Instance ID    | de                                                          | string       | App Started |
            | version DL          | 20250414_5.0                                                | string       | App Started |
            | page area           | privada                                                     | string       | App Started |
            | business unit       | BBVA Mexico                                                 | string       | App Started |
            | channel             | online                                                      | string       | App Started |
            | language            | ES                                                          | string       | App Started |
            | level 1             | consulta de datos                                           | string       | App Started |
            | level 2             | 1 autorizar consulta                                        | string       | App Started |
            | page intent         | informacion                                                 | string       | App Started |
            | page name           | app:privada:personas:consulta de datos:1 autorizar consulta | string       | App Started |
            | page segment        | personas                                                    | string       | App Started |
            | project Name        | Glomo                                                       | string       | App Started |
            | site App Name       | App BBVA Mexico                                             | string       | App Started |
            | sysEnv              | app                                                         | string       | App Started |
            | user age            | age                                                         | regexp named | App Started |
            | device mobile       | si                                                          | string       | App Started |
            | user gender         | gender                                                      | regexp named | App Started |
            | profile ID          | profileID                                                   | regexp named | App Started |
            | user segment global | 003001                                                      | string       | App Started |
            | user userState      | logado                                                      | string       | App Started |
            | fulfillment model   | online                                                      | string       | App Started |
            | application step    | autorizacion historial laboral                              | string       | App Started |
            | application name    | consulta de datos                                           | string       | App Started |
            | application type    | autogestion                                                 | string       | App Started |
            | global application  | cards on demand                                             | string       | App Started |

    @ANA_EVENT_CPS010
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: See interaction for the authorization - App Step 2 & App Completed
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | client offer multiproduct       |
        And the user access to data authorization multiproduct from "opportunities section"
        And the analytics interceptor service is initiated
        And the user selects the authorization with "complete"
        When the user confirms the authorization
        Then the analytics events contains the following variables
            | item                | value                                                 | type         | event                     |
            | page Instance ID    | de                                                    | string       | App Step 2, App Completed |
            | version DL          | 20250414_5.0                                          | string       | App Step 2, App Completed |
            | page area           | privada                                               | string       | App Step 2, App Completed |
            | business unit       | BBVA Mexico                                           | string       | App Step 2, App Completed |
            | channel             | online                                                | string       | App Step 2, App Completed |
            | language            | ES                                                    | string       | App Step 2, App Completed |
            | level 1             | consulta de datos                                     | string       | App Step 2, App Completed |
            | level 2             | pagina exitosa                                        | string       | App Completed             |
            | level 2             | 2 otp                                                 | string       | App Step 2                |
            | page intent         | informacion                                           | string       | App Step 2, App Completed |
            | page name           | app:privada:personas:consulta de datos:2 otp          | string       | App Step 2                |
            | page name           | app:privada:personas:consulta de datos:pagina exitosa | string       | App Completed             |
            | page segment        | personas                                              | string       | App Step 2, App Completed |
            | project Name        | Glomo                                                 | string       | App Step 2, App Completed |
            | site App Name       | App BBVA Mexico                                       | string       | App Step 2, App Completed |
            | sysEnv              | app                                                   | string       | App Step 2, App Completed |
            | user age            | age                                                   | regexp named | App Step 2, App Completed |
            | device mobile       | si                                                    | string       | App Step 2, App Completed |
            | user gender         | gender                                                | regexp named | App Step 2, App Completed |
            | profile ID          | profileID                                             | regexp named | App Step 2, App Completed |
            | user segment global | 003001                                                | string       | App Step 2, App Completed |
            | user userState      | logado                                                | string       | App Step 2, App Completed |
            | fulfillment model   | online                                                | string       | App Step 2, App Completed |
            | application step    | 2 otp                                                 | string       | App Step 2                |
            | application step    | pagina exitosa                                        | string       | App Completed             |
            | application name    | consulta de datos                                     | string       | App Step 2, App Completed |
            | application type    | autogestion                                           | string       | App Step 2, App Completed |
            | custom fields       | histcredito: true, histlaboral: true, firma:token     | string       | App Step 2, App Completed |
            | global application  | cards on demand                                       | string       | App Step 2, App Completed |
            | application state   | finalizado                                            | string       | App Completed             |

    @ANA_EVENT_CPS011
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: See the error for the authorization - Page View
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | client offer multiproduct       |
        And the user access to data authorization multiproduct from "opportunities section"
        And the analytics interceptor service is initiated
        And the user selects the authorization with "complete"
        When the user confirms the authorization
        Then the analytics events contains the following variables
            | item                | value                                                               | type         | event     |
            | page Instance ID    | de                                                                  | string       | Page View |
            | version DL          | 20250414_5.0                                                        | string       | Page View |
            | page area           | privada                                                             | string       | Page View |
            | business unit       | BBVA Mexico                                                         | string       | Page View |
            | channel             | online                                                              | string       | Page View |
            | error page          | error operacion no realizada                                        | string       | Page View |
            | language            | ES                                                                  | string       | Page View |
            | level 1             | consulta de datos                                                   | string       | Page View |
            | level 2             | error operacion no realizada                                        | string       | Page View |
            | page intent         | informacion                                                         | string       | Page View |
            | page name           | app:privada:personas:consulta de datos:error operacion no realizada | string       | Page View |
            | page segment        | personas                                                            | string       | Page View |
            | project Name        | Glomo                                                               | string       | Page View |
            | site App Name       | App BBVA Mexico                                                     | string       | Page View |
            | sysEnv              | app                                                                 | string       | Page View |
            | user age            | age                                                                 | regexp named | Page View |
            | device mobile       | si                                                                  | string       | Page View |
            | user gender         | gender                                                              | regexp named | Page View |
            | profile ID          | profileID                                                           | regexp named | Page View |
            | user segment global | 003001                                                              | string       | Page View |
            | user userState      | logado                                                              | string       | Page View |
