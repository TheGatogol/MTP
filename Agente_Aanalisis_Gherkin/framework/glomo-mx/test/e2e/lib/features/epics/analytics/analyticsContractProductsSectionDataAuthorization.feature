@contractProductsSectionDataAuthorizationAnalytics
Feature: Analytics - Contract Products Section Data Authorization

    @ANA_EVENT_COP001
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: View the offer as the <case> in the Opportunities section - App On Click Start
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | client offer success                         |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user access contract products section data authorization from nbo
        Then the analytics events contains the following variables
            | item                                         | value                                                              | type         | event              |
            | version DL                                   | 20190718_4.0                                                       | string       | App On Click Start |
            | page Instance ID                             | de                                                                 | string       | App On Click Start |
            | sysEnv                                       | app                                                                | string       | App On Click Start |
            | page segment                                 | personas                                                           | string       | App On Click Start |
            | page intent                                  | landing page                                                       | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                        | string       | App On Click Start |
            | page area                                    | privada                                                            | string       | App On Click Start |
            | language                                     | ES                                                                 | string       | App On Click Start |
            | channel                                      | online                                                             | string       | App On Click Start |
            | site App Name                                | App BBVA Mexico                                                    | string       | App On Click Start |
            | project Name                                 | Glomo                                                              | string       | App On Click Start |
            | level 1                                      | oportunidades                                                      | string       | App On Click Start |
            | page name                                    | app:privada:personas:oportunidades                                 | string       | App On Click Start |
            | device mobile                                | si                                                                 | string       | App On Click Start |
            | user segment global                          | 003001                                                             | string       | App On Click Start |
            | user userState                               | logado                                                             | string       | App On Click Start |
            | profile ID                                   | profileID                                                          | regexp named | App On Click Start |
            | user gender                                  | gender                                                             | regexp named | App On Click Start |
            | user age                                     | age                                                                | regexp named | App On Click Start |
            | fulfillment model                            | online                                                             | string       | App On Click Start |
            | application step                             | oportunidades                                                      | string       | App On Click Start |
            | application state                            | inicio                                                             | string       | App On Click Start |
            | application name                             | autorizacion de datos                                              | string       | App On Click Start |
            | application type                             | autogestion                                                        | string       | App On Click Start |
            | global application                           | cards on demand                                                    | string       | App On Click Start |
            | internal campaign attributes location        | contract product section--superior-1-17                            | string       | App On Click Start |
            | internal campaign attributes quantity        |                                                                    | string       | App On Click Start |
            | internal campaign attributes campaign name   | -autorizando la consulta podrias recibir ofertas disenadas para ti | string       | App On Click Start |
            | internal campaign attributes campaign format | list                                                               | string       | App On Click Start |
            | internal campaign attributes collective code |                                                                    | string       | App On Click Start |

    @ANA_EVENT_COP002
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: Contract Products Section Data Authorization - App Page Visit
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | client offer success                         |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user access contract products section data authorization from nbo
        Then the analytics events contains the following variables
            | item                | value                                                          | type         | event          |
            | version DL          | 20190718_4.0                                                   | string       | App Page Visit |
            | page Instance ID    | de                                                             | string       | App Page Visit |
            | sysEnv              | app                                                            | string       | App Page Visit |
            | page segment        | personas                                                       | string       | App Page Visit |
            | page intent         | informacion                                                    | string       | App Page Visit |
            | business unit       | BBVA Mexico                                                    | string       | App Page Visit |
            | page area           | privada                                                        | string       | App Page Visit |
            | language            | ES                                                             | string       | App Page Visit |
            | channel             | online                                                         | string       | App Page Visit |
            | site App Name       | App BBVA Mexico                                                | string       | App Page Visit |
            | project Name        | Glomo                                                          | string       | App Page Visit |
            | level 1             | autorizacion de datos                                          | string       | App Page Visit |
            | level 2             | 1 consulta de datos                                            | string       | App Page Visit |
            | page name           | app:privada:personas:autorizacion de datos:1 consulta de datos | string       | App Page Visit |
            | device mobile       | si                                                             | string       | App Page Visit |
            | user segment global | 003001                                                         | string       | App Page Visit |
            | user userState      | logado                                                         | string       | App Page Visit |
            | profile ID          | profileID                                                      | regexp named | App Page Visit |
            | user gender         | gender                                                         | regexp named | App Page Visit |
            | user age            | age                                                            | regexp named | App Page Visit |
            | fulfillment model   | online                                                         | string       | App Page Visit |
            | application step    | 1 consulta de datos                                            | string       | App Page Visit |
            | application state   | inicio                                                         | string       | App Page Visit |
            | application name    | autorizacion de datos                                          | string       | App Page Visit |
            | application type    | autogestion                                                    | string       | App Page Visit |
            | global application  | cards on demand                                                | string       | App Page Visit |

    @ANA_EVENT_COP003
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: See the conditions of the authorization - App Started & Page View
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | client offer success                         |
        When the user access contract products section data authorization from nbo
        And the analytics interceptor service is initiated
        And the user enter the authorization conditions
        Then the analytics events contains the following variables
            | item                | value                                                          | type         | event                  |
            | version DL          | 20190718_4.0                                                   | string       | App Started, Page View |
            | page Instance ID    | de                                                             | string       | App Started, Page View |
            | sysEnv              | app                                                            | string       | App Started, Page View |
            | page segment        | personas                                                       | string       | App Started, Page View |
            | page intent         | informacion                                                    | string       | App Started, Page View |
            | business unit       | BBVA Mexico                                                    | string       | App Started, Page View |
            | page area           | privada                                                        | string       | App Started, Page View |
            | language            | ES                                                             | string       | App Started, Page View |
            | channel             | online                                                         | string       | App Started, Page View |
            | site App Name       | App BBVA Mexico                                                | string       | App Started, Page View |
            | project Name        | Glomo                                                          | string       | App Started, Page View |
            | level 1             | autorizacion de datos                                          | string       | App Started, Page View |
            | level 2             | condiciones                                                    | string       | Page View              |
            | level 2             | 1 consulta de datos                                            | string       | App Started            |
            | page name           | app:privada:personas:autorizacion de datos:1 consulta de datos | string       | App Started            |
            | page name           | app:privada:personas:autorizacion de datos:condiciones         | string       | Page View              |
            | device mobile       | si                                                             | string       | App Started, Page View |
            | user segment global | 003001                                                         | string       | App Started, Page View |
            | user userState      | logado                                                         | string       | App Started, Page View |
            | profile ID          | profileID                                                      | regexp named | App Started, Page View |
            | user gender         | gender                                                         | regexp named | App Started, Page View |
            | user age            | age                                                            | regexp named | App Started, Page View |
            | fulfillment model   | online                                                         | string       | App Started            |
            | application step    | revisa las condiciones                                         | string       | App Started            |
            | application name    | autorizacion de datos                                          | string       | App Started            |
            | application type    | autogestion                                                    | string       | App Started            |
            | global application  | cards on demand                                                | string       | App Started            |

    @ANA_EVENT_COP004
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: See the privacy notice information - App Started & Page View
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | client offer success                         |
        When the user access contract products section data authorization from nbo
        And the analytics interceptor service is initiated
        And the user enter the privacy notice
        Then the analytics events contains the following variables
            | item                | value                                                          | type         | event                  |
            | version DL          | 20190718_4.0                                                   | string       | App Started, Page View |
            | page Instance ID    | de                                                             | string       | App Started, Page View |
            | sysEnv              | app                                                            | string       | App Started, Page View |
            | page segment        | personas                                                       | string       | App Started, Page View |
            | page intent         | informacion                                                    | string       | App Started, Page View |
            | business unit       | BBVA Mexico                                                    | string       | App Started, Page View |
            | page area           | privada                                                        | string       | App Started, Page View |
            | language            | ES                                                             | string       | App Started, Page View |
            | channel             | online                                                         | string       | App Started, Page View |
            | site App Name       | App BBVA Mexico                                                | string       | App Started            |
            | project Name        | Glomo                                                          | string       | App Started,Page View  |
            | level 1             | autorizacion de datos                                          | string       | App Started            |
            | level 2             | aviso de privacidad                                            | string       | Page View              |
            | level 2             | 1 consulta de datos                                            | string       | App Started            |
            | page name           | app:privada:personas:autorizacion de datos:1 consulta de datos | string       | App Started            |
            | page name           | app:privada:personas:autorizacion de datos:aviso de privacidad | string       | Page View              |
            | device mobile       | si                                                             | string       | App Started            |
            | user segment global | 003001                                                         | string       | App Started,Page View  |
            | user userState      | logado                                                         | string       | App Started,Page View  |
            | profile ID          | profileID                                                      | regexp named | App Started,Page View  |
            | user gender         | gender                                                         | regexp named | App Started,Page View  |
            | user age            | age                                                            | regexp named | App Started,Page View  |
            | fulfillment model   | online                                                         | string       | App Started            |
            | application step    | consulta el aviso de privacidad                                | string       | App Started            |
            | application name    | autorizacion de datos                                          | string       | App Started            |
            | application type    | autogestion                                                    | string       | App Started            |
            | global application  | cards on demand                                                | string       | App Started            |

    @ANA_EVENT_COP005
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: User clicks on authorize - App Started
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | client offer success                         |
        When the user access contract products section data authorization from nbo
        And the analytics interceptor service is initiated
        And the user performs successful authorization
        Then the analytics events contains the following variables
            | item                | value                                                          | type         | event       |
            | version DL          | 20190718_4.0                                                   | string       | App Started |
            | page Instance ID    | de                                                             | string       | App Started |
            | sysEnv              | app                                                            | string       | App Started |
            | page segment        | personas                                                       | string       | App Started |
            | page intent         | informacion                                                    | string       | App Started |
            | business unit       | BBVA Mexico                                                    | string       | App Started |
            | page area           | privada                                                        | string       | App Started |
            | language            | ES                                                             | string       | App Started |
            | channel             | online                                                         | string       | App Started |
            | site App Name       | App BBVA Mexico                                                | string       | App Started |
            | project Name        | Glomo                                                          | string       | App Started |
            | level 1             | autorizacion de datos                                          | string       | App Started |
            | level 2             | 1 consulta de datos                                            | string       | App Started |
            | page name           | app:privada:personas:autorizacion de datos:1 consulta de datos | string       | App Started |
            | device mobile       | si                                                             | string       | App Started |
            | user segment global | 003001                                                         | string       | App Started |
            | user userState      | logado                                                         | string       | App Started |
            | profile ID          | profileID                                                      | regexp named | App Started |
            | user gender         | gender                                                         | regexp named | App Started |
            | user age            | age                                                            | regexp named | App Started |
            | fulfillment model   | online                                                         | string       | App Started |
            | application step    | autorizar                                                      | string       | App Started |
            | application name    | autorizacion de datos                                          | string       | App Started |
            | application type    | autogestion                                                    | string       | App Started |
            | global application  | cards on demand                                                | string       | App Started |

    @ANA_EVENT_COP006
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: See success screen - App Completed
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | client offer success                         |
        When the user access contract products section data authorization from nbo
        And the analytics interceptor service is initiated
        And the user performs successful authorization
        Then the analytics events contains the following variables
            | item                | value                                                     | type         | event         |
            | version DL          | 20190718_4.0                                              | string       | App Completed |
            | page Instance ID    | de                                                        | string       | App Completed |
            | sysEnv              | app                                                       | string       | App Completed |
            | page segment        | personas                                                  | string       | App Completed |
            | page intent         | informacion                                               | string       | App Completed |
            | business unit       | BBVA Mexico                                               | string       | App Completed |
            | page area           | privada                                                   | string       | App Completed |
            | language            | ES                                                        | string       | App Completed |
            | channel             | online                                                    | string       | App Completed |
            | site App Name       | App BBVA Mexico                                           | string       | App Completed |
            | project Name        | Glomo                                                     | string       | App Completed |
            | level 1             | autorizacion de datos                                     | string       | App Completed |
            | level 2             | pagina exitosa                                            | string       | App Completed |
            | page name           | app:privada:personas:autorizacion de datos:pagina exitosa | string       | App Completed |
            | device mobile       | si                                                        | string       | App Completed |
            | user segment global | 003001                                                    | string       | App Completed |
            | user userState      | logado                                                    | string       | App Completed |
            | profile ID          | profileID                                                 | regexp named | App Completed |
            | user gender         | gender                                                    | regexp named | App Completed |
            | user age            | age                                                       | regexp named | App Completed |
            | fulfillment model   | online                                                    | string       | App Completed |
            | application step    | pagina exitosa                                            | string       | App Completed |
            | application state   | finalizado                                                | string       | App Completed |
            | application name    | autorizacion de datos                                     | string       | App Completed |
            | application type    | autogestion                                               | string       | App Completed |
            | global application  | cards on demand                                           | string       | App Completed |

    @ANA_EVENT_COP007
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: Contract Products Section Data Authorization Nbo - App On Click Start
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | client offer success                         |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user access contract products section data authorization from nbo
        Then the analytics events contains the following variables
            | item                                         | value                                                             | type         | event              |
            | page Instance ID                             | de                                                                | string       | App On Click Start |
            | sysEnv                                       | app                                                               | string       | App On Click Start |
            | page segment                                 | personas                                                          | string       | App On Click Start |
            | page intent                                  | landing page                                                      | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                       | string       | App On Click Start |
            | page area                                    | privada                                                           | string       | App On Click Start |
            | language                                     | ES                                                                | string       | App On Click Start |
            | channel                                      | online                                                            | string       | App On Click Start |
            | site App Name                                | App BBVA Mexico                                                   | string       | App On Click Start |
            | project Name                                 | Glomo                                                             | string       | App On Click Start |
            | level 1                                      | posicion global                                                   | string       | App On Click Start |
            | level 2                                      | destacado                                                         | string       | App On Click Start |
            | page name                                    | app:privada:personas:posicion global:destacado                    | string       | App On Click Start |
            | device mobile                                | si                                                                | string       | App On Click Start |
            | user segment global                          | 003001                                                            | string       | App On Click Start |
            | user userState                               | logado                                                            | string       | App On Click Start |
            | profile ID                                   | profileID                                                         | regexp named | App On Click Start |
            | user gender                                  | gender                                                            | regexp named | App On Click Start |
            | user age                                     | age                                                               | regexp named | App On Click Start |
            | fulfillment model                            | online                                                            | string       | App On Click Start |
            | application step                             | me interesa posicion global                                       | string       | App On Click Start |
            | application name                             | Consulta de datos                                                 | string       | App On Click Start |
            | application type                             | autogestion                                                       | string       | App On Click Start |
            | global application                           | cards on demand                                                   | string       | App On Click Start |
            | internal campaign attributes location        | dashboard destacado-te puede interesar-1-6                        | string       | App On Click Start |
            | internal campaign attributes quantity        | 0                                                                 | number       | App On Click Start |
            | internal campaign attributes campaign name   | Autorizando la consulta podrías recibir ofertas diseñadas para ti | string       | App On Click Start |
            | internal campaign attributes campaign format | card                                                              | string       | App On Click Start |
            | internal campaign attributes collective code | -                                                                 | string       | App On Click Start |

    @ANA_EVENT_COP008
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: Contract Products Section Data Authorization Nba - App On Click Start
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | client offer success                         |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user access contract products section data authorization from nba
        Then the analytics events contains the following variables
            | item                                         | value                                                             | type         | event              |
            | page Instance ID                             | de                                                                | string       | App On Click Start |
            | sysEnv                                       | app                                                               | string       | App On Click Start |
            | page segment                                 | personas                                                          | string       | App On Click Start |
            | page intent                                  | landing page                                                      | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                       | string       | App On Click Start |
            | page area                                    | privada                                                           | string       | App On Click Start |
            | language                                     | ES                                                                | string       | App On Click Start |
            | channel                                      | online                                                            | string       | App On Click Start |
            | site App Name                                | App BBVA Mexico                                                   | string       | App On Click Start |
            | project Name                                 | Glomo                                                             | string       | App On Click Start |
            | level 1                                      | posicion global                                                   | string       | App On Click Start |
            | level 2                                      | destacado                                                         | string       | App On Click Start |
            | page name                                    | app:privada:personas:posicion global:destacado                    | string       | App On Click Start |
            | device mobile                                | si                                                                | string       | App On Click Start |
            | user segment global                          | 003001                                                            | string       | App On Click Start |
            | user userState                               | logado                                                            | string       | App On Click Start |
            | profile ID                                   | profileID                                                         | regexp named | App On Click Start |
            | user gender                                  | gender                                                            | regexp named | App On Click Start |
            | user age                                     | age                                                               | regexp named | App On Click Start |
            | fulfillment model                            | online                                                            | string       | App On Click Start |
            | application step                             | nba                                                               | string       | App On Click Start |
            | application name                             | Consulta de datos                                                 | string       | App On Click Start |
            | application type                             | autogestion                                                       | string       | App On Click Start |
            | global application                           | cards on demand                                                   | string       | App On Click Start |
            | internal campaign attributes location        | dashboard destacado-nba-4-5                                       | string       | App On Click Start |
            | internal campaign attributes quantity        | 0                                                                 | number       | App On Click Start |
            | internal campaign attributes campaign name   | Autorizando la consulta podrías recibir ofertas diseñadas para ti | string       | App On Click Start |
            | internal campaign attributes campaign format | carrusel                                                          | string       | App On Click Start |
            | internal campaign attributes collective code | -                                                                 | string       | App On Click Start |

    @ANA_EVENT_COP009
    @analytics
    @backend(test) @vbank @MX
    @ios @android @web
    @web-done
    Scenario: Interaction click in check - Interaction Link
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | client offer success                         |
        When the user access contract products section data authorization from nbo
        And the analytics interceptor service is initiated
        And the user accepts the authorization
        Then the analytics events contains the following variables
            | item                | value                                                          | type         | event            |
            | version DL          | 20190718_4.0                                                   | string       | Interaction Link |
            | page Instance ID    | de                                                             | string       | Interaction Link |
            | sysEnv              | app                                                            | string       | Interaction Link |
            | page segment        | personas                                                       | string       | Interaction Link |
            | page intent         | informacion                                                    | string       | Interaction Link |
            | business unit       | BBVA Mexico                                                    | string       | Interaction Link |
            | page area           | privada                                                        | string       | Interaction Link |
            | language            | ES                                                             | string       | Interaction Link |
            | channel             | online                                                         | string       | Interaction Link |
            | site App Name       | App BBVA Mexico                                                | string       | Interaction Link |
            | project Name        | Glomo                                                          | string       | Interaction Link |
            | level 1             | autorizacion de datos                                          | string       | Interaction Link |
            | level 2             | 1 consulta de datos                                            | string       | Interaction Link |
            | page name           | app:privada:personas:autorizacion de datos:1 consulta de datos | string       | Interaction Link |
            | device mobile       | si                                                             | string       | Interaction Link |
            | user segment global | 003001                                                         | string       | Interaction Link |
            | user userState      | logado                                                         | string       | Interaction Link |
            | profile ID          | profileID                                                      | regexp named | Interaction Link |
            | user gender         | gender                                                         | regexp named | Interaction Link |
            | user age            | age                                                            | regexp named | Interaction Link |
            | interaction level   | autorizo la consulta de mis datos                              | string       | Interaction Link |
