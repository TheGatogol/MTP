@emergencyAssistancesVehicleReportAnalytics
Feature: Analytics - Emergency Assistances Vehicle Report

    @ANA_EAR001
    @analytics
    @MX
    @web @web-done
    @vbank @android @ios
    @backend(test)
    Scenario: Access to the emergency assistances vehicle reports screen
        Given a user with the following criteria
            |          criteria               |
            | emergency assistances vehicle   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to "vehicle assistances" menu from "vehicle" screen
        Then the device contains the following variables
            | item                     | value                                                                | type         |
            | analytics                | analytics/glomo_base                                                 | json schema  |
            | page name                | app:privada:personas:emergencias:vehiculo:asistencias                | string       |
            | level 1                  | emergencias                                                          | string       |
            | level 2                  | vehiculo                                                             | string       |
            | level 3                  | asistencias                                                          | string       |
            | language                 | ES                                                                   | string       |
            | page area                | privada                                                              | string       |
            | page intent              | informacion                                                          | string       |
            | channel                  | online                                                               | string       |
            | page instance ID         | de                                                                   | string       |
            | page info version        | appVersion                                                           | regexp named |
            | page segment             | personas                                                             | string       |
            | sysEnv                   | app                                                                  | string       |
            | business unit            | BBVA Mexico                                                          | string       |
            | site app name            | App BBVA Mexico                                                      | string       |
            | project name             | Glomo                                                                | string       |
            | device mobile            | si                                                                   | string       |
            | user userState           | logado                                                               | string       |
            | profile ID               | profileID                                                            | regexp named |
            | user segment global      | 003001                                                               | string       |
            | user gender              | gender                                                               | regexp named |
            | user age                 | age                                                                  | regexp named |
            |custom fields             |                            	                                      | string       |

    @ANA_EAR002
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to the step location assistances screen
        Given a user with the following criteria
            |           criteria              |
            | emergency assistances vehicle   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle assistances" for select "all assists"
        Then the device contains the following variables
            | item                     | value                                                                          | type         |
            | analytics                | analytics/glomo_base                                                           | json schema  |
            | page name                | app:privada:personas:emergencias:vehiculo:asistencias:ubicacion del vehiculo   | string       |
            | level 1                  | emergencias                                                                    | string       |
            | level 2                  | vehiculo                                                                       | string       |
            | level 3                  | asistencias                                                                    | string       |
            | level 4                  | ubicacion del vehiculo                                                         | string       |
            | language                 | ES                                                                             | string       |
            | page area                | privada                                                                        | string       |
            | page intent              | informacion                                                                    | string       |
            | channel                  | online                                                                         | string       |
            | page instance ID         | de                                                                             | string       |
            | page info version        | appVersion                                                                     | regexp named |
            | page segment             | personas                                                                       | string       |
            | sysEnv                   | app                                                                            | string       |
            | business unit            | BBVA Mexico                                                                    | string       |
            | site app name            | App BBVA Mexico                                                                | string       |
            | project name             | Glomo                                                                          | string       |
            | device mobile            | si                                                                             | string       |
            | user userState           | logado                                                                         | string       |
            | profile ID               | profileID                                                                      | regexp named |
            | user segment global      | 003001                                                                         | string       |
            | user gender              | gender                                                                         | regexp named |
            | user age                 | age                                                                            | regexp named |
            |custom fields             | asistencia:paso de corriente, asistencia:gasolina, asistencia:cambio de llanta | string       |

    @ANA_EAR003
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to the modal change location screen
        Given a user with the following criteria
            |          criteria               |
            | emergency assistances vehicle   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle assistances" for select "change location"
        Then the device contains the following variables
            | item                     | value                                                                                | type         |
            | analytics                | analytics/glomo_base                                                                 | json schema  |
            | page name                | app:privada:personas:emergencias:vehiculo:asistencias:cambiar ubicacion del vehiculo | string       |
            | level 1                  | emergencias                                                                          | string       |
            | level 2                  | vehiculo                                                                             | string       |
            | level 3                  | asistencias                                                                          | string       |
            | level 4                  | cambiar ubicacion del vehiculo                                                       | string       |
            | language                 | ES                                                                                   | string       |
            | page area                | privada                                                                              | string       |
            | page intent              | informacion                                                                          | string       |
            | channel                  | online                                                                               | string       |
            | page instance ID         | de                                                                                   | string       |
            | page info version        | appVersion                                                                           | regexp named |
            | page segment             | personas                                                                             | string       |
            | sysEnv                   | app                                                                                  | string       |
            | business unit            | BBVA Mexico                                                                          | string       |
            | site app name            | App BBVA Mexico                                                                      | string       |
            | project name             | Glomo                                                                                | string       |
            | device mobile            | si                                                                                   | string       |
            | user userState           | logado                                                                               | string       |
            | profile ID               | profileID                                                                            | regexp named |
            | user segment global      | 003001                                                                               | string       |
            | user gender              | gender                                                                               | regexp named |
            | user age                 | age                                                                                  | regexp named |
            |custom fields             | asistencia:paso de corriente                                                         | string       |

    @ANA_EAR004
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to the step summary assistances screen
        Given a user with the following criteria
            |           criteria              |
            | emergency assistances vehicle   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle assistances" for select "accept location"
        Then the device contains the following variables
            | item                     | value                                                                | type         |
            | analytics                | analytics/glomo_base                                                 | json schema  |
            | page name                | app:privada:personas:emergencias:vehiculo:asistencias:resumen        | string       |
            | level 1                  | emergencias                                                          | string       |
            | level 2                  | vehiculo                                                             | string       |
            | level 3                  | asistencias                                                          | string       |
            | level 4                  | resumen                                                              | string       |
            | language                 | ES                                                                   | string       |
            | page area                | privada                                                              | string       |
            | page intent              | informacion                                                          | string       |
            | channel                  | online                                                               | string       |
            | page instance ID         | de                                                                   | string       |
            | page info version        | appVersion                                                           | regexp named |
            | page segment             | personas                                                             | string       |
            | sysEnv                   | app                                                                  | string       |
            | business unit            | BBVA Mexico                                                          | string       |
            | site app name            | App BBVA Mexico                                                      | string       |
            | project name             | Glomo                                                                | string       |
            | device mobile            | si                                                                   | string       |
            | user userState           | logado                                                               | string       |
            | profile ID               | profileID                                                            | regexp named |
            | user segment global      | 003001                                                               | string       |
            | user gender              | gender                                                               | regexp named |
            | user age                 | age                                                                  | regexp named |
            |custom fields             | asistencia:paso de corriente                                                         | string       |

    @ANA_EAR005
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to the modal success screen
        Given a user with the following criteria
            |           criteria              |
            | emergency assistances vehicle   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle assistances" for select "create report"
        Then the device contains the following variables
            | item                     | value                                                                | type         |
            | analytics                | analytics/glomo_base                                                 | json schema  |
            | page name                | app:privada:personas:emergencias:vehiculo:asistencias:reporte exitoso| string       |
            | level 1                  | emergencias                                                          | string       |
            | level 2                  | vehiculo                                                             | string       |
            | level 3                  | asistencias                                                          | string       |
            | level 4                  | reporte exitoso                                                      | string       |
            | language                 | ES                                                                   | string       |
            | page area                | privada                                                              | string       |
            | page intent              | informacion                                                          | string       |
            | channel                  | online                                                               | string       |
            | page instance ID         | de                                                                   | string       |
            | page info version        | appVersion                                                           | regexp named |
            | page segment             | personas                                                             | string       |
            | sysEnv                   | app                                                                  | string       |
            | business unit            | BBVA Mexico                                                          | string       |
            | site app name            | App BBVA Mexico                                                      | string       |
            | project name             | Glomo                                                                | string       |
            | device mobile            | si                                                                   | string       |
            | user userState           | logado                                                               | string       |
            | profile ID               | profileID                                                            | regexp named |
            | user segment global      | 003001                                                               | string       |
            | user gender              | gender                                                               | regexp named |
            | user age                 | age                                                                  | regexp named |
            |custom fields             | asistencia:gasolina, asistencia:cambio de llanta                     | string       |

    @ANA_EAR006
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario Outline: Access to the modal succes -  <selection>
        Given a user with the following criteria
            |           criteria              |
            | emergency assistances vehicle   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to report "vehicle assistances" for select "create report"
        When the user accepts "<selection>" action
        Then the device contains the following variables
            | item                     | value                                                                 | type         |
            | analytics                | analytics/glomo_base                                                  | json schema  |
            | page name                | app:privada:personas:emergencias:vehiculo:asistencias:reporte exitoso | string       |
            | level 1                  | emergencias                                                           | string       |
            | level 2                  | vehiculo                                                              | string       |
            | level 3                  | asistencias                                                           | string       |
            | level 4                  | reporte exitoso                                                       | string       |
            | language                 | ES                                                                    | string       |
            | page area                | privada                                                               | string       |
            | page intent              | informacion                                                           | string       |
            | channel                  | online                                                                | string       |
            | page instance ID         | de                                                                    | string       |
            | page info version        | appVersion                                                            | regexp named |
            | page segment             | personas                                                              | string       |
            | sysEnv                   | app                                                                   | string       |
            | business unit            | BBVA Mexico                                                           | string       |
            | site app name            | App BBVA Mexico                                                       | string       |
            | project name             | Glomo                                                                 | string       |
            | link url                 | <value>                                                               | string       |
            | device mobile            | si                                                                    | string       |
            | user userState           | logado                                                                | string       |
            | profile ID               | profileID                                                             | regexp named |
            | user segment global      | 003001                                                                | string       |
            | user gender              | gender                                                                | regexp named |
            | user age                 | age                                                                   | regexp named |
            |custom fields             |                                                                       | string       |

        Examples:
            | selection                         | value                          |
            | call assistance in success screen | llama a la linea de asistencia |
            | view policy assists               | ver poliza                     |

    @ANA_EAR007
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to the modal already report screen
        Given a user with the following criteria
            |           criteria              |
            | emergency assistances vehicle   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle assistances" for select "create report"
        Then the device contains the following variables
            | item                     | value                                                                 | type         |
            | analytics                | analytics/glomo_base                                                  | json schema  |
            | page name                | app:privada:personas:emergencias:vehiculo:asistencias:reporte en curso| string       |
            | level 1                  | emergencias                                                           | string       |
            | level 2                  | vehiculo                                                              | string       |
            | level 3                  | asistencias                                                           | string       |
            | level 4                  | reporte en curso                                                      | string       |
            | language                 | ES                                                                    | string       |
            | page area                | privada                                                               | string       |
            | page intent              | informacion                                                           | string       |
            | channel                  | online                                                                | string       |
            | page instance ID         | de                                                                    | string       |
            | page info version        | appVersion                                                            | regexp named |
            | page segment             | personas                                                              | string       |
            | sysEnv                   | app                                                                   | string       |
            | business unit            | BBVA Mexico                                                           | string       |
            | site app name            | App BBVA Mexico                                                       | string       |
            | project name             | Glomo                                                                 | string       |
            | device mobile            | si                                                                    | string       |
            | user userState           | logado                                                                | string       |
            | profile ID               | profileID                                                             | regexp named |
            | user segment global      | 003001                                                                | string       |
            | user gender              | gender                                                                | regexp named |
            | user age                 | age                                                                   | regexp named |
            |custom fields             |                                                                       | string       |

    @ANA_EAR008
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to the modal already report - call bbva line
        Given a user with the following criteria
            |           criteria              |
            | emergency assistances vehicle   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to report "vehicle assistances" for select "create report"
        When the user accepts "call assistance in progress screen" action
        Then the device contains the following variables
            | item                     | value                                                                 | type         |
            | analytics                | analytics/glomo_base                                                  | json schema  |
            | page name                | app:privada:personas:emergencias:vehiculo:asistencias:reporte en curso| string       |
            | level 1                  | emergencias                                                           | string       |
            | level 2                  | vehiculo                                                              | string       |
            | level 3                  | asistencias                                                           | string       |
            | level 4                  | reporte en curso                                                      | string       |
            | language                 | ES                                                                    | string       |
            | page area                | privada                                                               | string       |
            | page intent              | informacion                                                           | string       |
            | channel                  | online                                                                | string       |
            | page instance ID         | de                                                                    | string       |
            | page info version        | appVersion                                                            | regexp named |
            | page segment             | personas                                                              | string       |
            | sysEnv                   | app                                                                   | string       |
            | business unit            | BBVA Mexico                                                           | string       |
            | site app name            | App BBVA Mexico                                                       | string       |
            | project name             | Glomo                                                                 | string       |
            | device mobile            | si                                                                    | string       |
            | user userState           | logado                                                                | string       |
            | profile ID               | profileID                                                             | regexp named |
            | link url                 | llamar                                                                | string       |
            | user segment global      | 003001                                                                | string       |
            | user gender              | gender                                                                | regexp named |
            | user age                 | age                                                                   | regexp named |
            |custom fields             |                                                                       | string       |
