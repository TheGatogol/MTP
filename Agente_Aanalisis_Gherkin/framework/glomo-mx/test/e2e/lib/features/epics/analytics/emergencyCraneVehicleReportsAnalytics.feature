@emergencyCraneVehicleReportsAnalytics
Feature: Analytics - Emergency Crane Vehicle Report

    @ANA_REG001
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Access to the emergency crane vehicle reports screen
        Given a user with the following criteria
            | criteria                        |
            | emergency crane vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to "vehicle crane" menu from "vehicle" screen
        Then the device contains the following variables
            | item                | value                                                                 | type         |
            | analytics           | analytics/glomo_base                                                  | json schema  |
            | page name           | app:privada:personas:emergencias:vehiculo:grua:ubicacion del vehiculo | string       |
            | level 1             | emergencias                                                           | string       |
            | level 2             | vehiculo                                                              | string       |
            | level 3             | grua                                                                  | string       |
            | level 4             | ubicacion del vehiculo                                                | string       |
            | language            | ES                                                                    | string       |
            | page area           | privada                                                               | string       |
            | page intent         | informacion                                                           | string       |
            | channel             | online                                                                | string       |
            | page instance ID    | de                                                                    | string       |
            | page info version   | appVersion                                                            | regexp named |
            | page segment        | personas                                                              | string       |
            | sysEnv              | app                                                                   | string       |
            | business unit       | BBVA Mexico                                                           | string       |
            | site app name       | App BBVA Mexico                                                       | string       |
            | project name        | Glomo                                                                 | string       |
            | device mobile       | si                                                                    | string       |
            | user userState      | logado                                                                | string       |
            | profile ID          | profileID                                                             | regexp named |
            | user segment global | 003001                                                                | string       |
            | user gender         | gender                                                                | regexp named |
            | user age            | age                                                                   | regexp named |

    @ANA_REG002
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: The user sees the change modal report
        Given a user with the following criteria
            | criteria                        |
            | emergency crane vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crane" for select "change geolocation"
        Then the device contains the following variables
            | item                | value                                                                         | type         |
            | analytics           | analytics/glomo_base                                                          | json schema  |
            | page name           | app:privada:personas:emergencias:vehiculo:grua:cambiar ubicacion del vehiculo | string       |
            | level 1             | emergencias                                                                   | string       |
            | level 2             | vehiculo                                                                      | string       |
            | level 3             | grua                                                                          | string       |
            | level 4             | cambiar ubicacion del vehiculo                                                | string       |
            | language            | ES                                                                            | string       |
            | page area           | privada                                                                       | string       |
            | page intent         | informacion                                                                   | string       |
            | channel             | online                                                                        | string       |
            | page instance ID    | de                                                                            | string       |
            | page info version   | appVersion                                                                    | regexp named |
            | page segment        | personas                                                                      | string       |
            | sysEnv              | app                                                                           | string       |
            | business unit       | BBVA Mexico                                                                   | string       |
            | site app name       | App BBVA Mexico                                                               | string       |
            | project name        | Glomo                                                                         | string       |
            | device mobile       | si                                                                            | string       |
            | user userState      | logado                                                                        | string       |
            | profile ID          | profileID                                                                     | regexp named |
            | user segment global | 003001                                                                        | string       |
            | user gender         | gender                                                                        | regexp named |
            | user age            | age                                                                           | regexp named |

    @ANA_REG003
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: The user complete the first step
        Given a user with the following criteria
            | criteria                        |
            | emergency crane vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crane" for select "accept change geolocation"
        Then the device contains the following variables
            | item                | value                                                  | type         |
            | analytics           | analytics/glomo_base                                   | json schema  |
            | page name           | app:privada:personas:emergencias:vehiculo:grua:resumen | string       |
            | level 1             | emergencias                                            | string       |
            | level 2             | vehiculo                                               | string       |
            | level 3             | grua                                                   | string       |
            | level 4             | resumen                                                | string       |
            | language            | ES                                                     | string       |
            | page area           | privada                                                | string       |
            | page intent         | informacion                                            | string       |
            | channel             | online                                                 | string       |
            | page instance ID    | de                                                     | string       |
            | page info version   | appVersion                                             | regexp named |
            | page segment        | personas                                               | string       |
            | sysEnv              | app                                                    | string       |
            | business unit       | BBVA Mexico                                            | string       |
            | site app name       | App BBVA Mexico                                        | string       |
            | project name        | Glomo                                                  | string       |
            | device mobile       | si                                                     | string       |
            | user userState      | logado                                                 | string       |
            | profile ID          | profileID                                              | regexp named |
            | user segment global | 003001                                                 | string       |
            | user gender         | gender                                                 | regexp named |
            | user age            | age                                                    | regexp named |

    @ANA_REG004
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: The user sees the success modal report
        Given a user with the following criteria
            | criteria                        |
            | emergency crane vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crane" for select "create report"
        Then the device contains the following variables
            | item                | value                                                          | type         |
            | analytics           | analytics/glomo_base                                           | json schema  |
            | page name           | app:privada:personas:emergencias:vehiculo:grua:reporte exitoso | string       |
            | level 1             | emergencias                                                    | string       |
            | level 2             | vehiculo                                                       | string       |
            | level 3             | grua                                                           | string       |
            | level 4             | reporte exitoso                                                | string       |
            | language            | ES                                                             | string       |
            | page area           | privada                                                        | string       |
            | page intent         | informacion                                                    | string       |
            | channel             | online                                                         | string       |
            | page instance ID    | de                                                             | string       |
            | page info version   | appVersion                                                     | regexp named |
            | page segment        | personas                                                       | string       |
            | sysEnv              | app                                                            | string       |
            | business unit       | BBVA Mexico                                                    | string       |
            | site app name       | App BBVA Mexico                                                | string       |
            | project name        | Glomo                                                          | string       |
            | device mobile       | si                                                             | string       |
            | user userState      | logado                                                         | string       |
            | profile ID          | profileID                                                      | regexp named |
            | user segment global | 003001                                                         | string       |
            | user gender         | gender                                                         | regexp named |
            | user age            | age                                                            | regexp named |

    @ANA_REG005
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: The user sees the success modal report view policy
        Given a user with the following criteria
            | criteria                        |
            | emergency crane vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crane" for select "view policy crane"
        Then the device contains the following variables
            | item                | value                                                          | type         |
            | analytics           | analytics/glomo_base                                           | json schema  |
            | page name           | app:privada:personas:emergencias:vehiculo:grua:reporte exitoso | string       |
            | level 1             | emergencias                                                    | string       |
            | level 2             | vehiculo                                                       | string       |
            | level 3             | grua                                                           | string       |
            | level 4             | reporte exitoso                                                | string       |
            | link url            | ver poliza                                                     | string       |
            | language            | ES                                                             | string       |
            | page area           | privada                                                        | string       |
            | page intent         | informacion                                                    | string       |
            | channel             | online                                                         | string       |
            | page instance ID    | de                                                             | string       |
            | page info version   | appVersion                                                     | regexp named |
            | page segment        | personas                                                       | string       |
            | sysEnv              | app                                                            | string       |
            | business unit       | BBVA Mexico                                                    | string       |
            | site app name       | App BBVA Mexico                                                | string       |
            | project name        | Glomo                                                          | string       |
            | device mobile       | si                                                             | string       |
            | user userState      | logado                                                         | string       |
            | profile ID          | profileID                                                      | regexp named |
            | user segment global | 003001                                                         | string       |
            | user gender         | gender                                                         | regexp named |
            | user age            | age                                                            | regexp named |

    @ANA_REG006
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: The user sees the success modal report call line
        Given a user with the following criteria
            | criteria                        |
            | emergency crane vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crane" for select "call success crane"
        Then the device contains the following variables
            | item                | value                                                          | type         |
            | analytics           | analytics/glomo_base                                           | json schema  |
            | page name           | app:privada:personas:emergencias:vehiculo:grua:reporte exitoso | string       |
            | level 1             | emergencias                                                    | string       |
            | level 2             | vehiculo                                                       | string       |
            | level 3             | grua                                                           | string       |
            | level 4             | reporte exitoso                                                | string       |
            | link url            | llama a la linea de asistencia                                 | string       |
            | language            | ES                                                             | string       |
            | page area           | privada                                                        | string       |
            | page intent         | informacion                                                    | string       |
            | channel             | online                                                         | string       |
            | page instance ID    | de                                                             | string       |
            | page info version   | appVersion                                                     | regexp named |
            | page segment        | personas                                                       | string       |
            | sysEnv              | app                                                            | string       |
            | business unit       | BBVA Mexico                                                    | string       |
            | site app name       | App BBVA Mexico                                                | string       |
            | project name        | Glomo                                                          | string       |
            | device mobile       | si                                                             | string       |
            | user userState      | logado                                                         | string       |
            | profile ID          | profileID                                                      | regexp named |
            | user segment global | 003001                                                         | string       |
            | user gender         | gender                                                         | regexp named |
            | user age            | age                                                            | regexp named |

    @ANA_REG007
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: The user sees the already report modal
        Given a user with the following criteria
            | criteria                        |
            | emergency crane vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crane" for select "create report"
        Then the device contains the following variables
            | item                | value                                                           | type         |
            | analytics           | analytics/glomo_base                                            | json schema  |
            | page name           | app:privada:personas:emergencias:vehiculo:grua:reporte en curso | string       |
            | level 1             | emergencias                                                     | string       |
            | level 2             | vehiculo                                                        | string       |
            | level 3             | grua                                                            | string       |
            | level 4             | reporte en curso                                                | string       |
            | language            | ES                                                              | string       |
            | page area           | privada                                                         | string       |
            | page intent         | informacion                                                     | string       |
            | channel             | online                                                          | string       |
            | page instance ID    | de                                                              | string       |
            | page info version   | appVersion                                                      | regexp named |
            | page segment        | personas                                                        | string       |
            | sysEnv              | app                                                             | string       |
            | business unit       | BBVA Mexico                                                     | string       |
            | site app name       | App BBVA Mexico                                                 | string       |
            | project name        | Glomo                                                           | string       |
            | device mobile       | si                                                              | string       |
            | user userState      | logado                                                          | string       |
            | profile ID          | profileID                                                       | regexp named |
            | user segment global | 003001                                                          | string       |
            | user gender         | gender                                                          | regexp named |
            | user age            | age                                                             | regexp named |

    @ANA_REG008
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: The user sees the progress modal report call line
        Given a user with the following criteria
            | criteria                        |
            | emergency crane vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crane" for select "call progress crane"
        Then the device contains the following variables
            | item                | value                                                           | type         |
            | analytics           | analytics/glomo_base                                            | json schema  |
            | page name           | app:privada:personas:emergencias:vehiculo:grua:reporte en curso | string       |
            | level 1             | emergencias                                                     | string       |
            | level 2             | vehiculo                                                        | string       |
            | level 3             | grua                                                            | string       |
            | level 4             | reporte en curso                                                | string       |
            | link url            | llamar                                                          | string       |
            | language            | ES                                                              | string       |
            | page area           | privada                                                         | string       |
            | page intent         | informacion                                                     | string       |
            | channel             | online                                                          | string       |
            | page instance ID    | de                                                              | string       |
            | page info version   | appVersion                                                      | regexp named |
            | page segment        | personas                                                        | string       |
            | sysEnv              | app                                                             | string       |
            | business unit       | BBVA Mexico                                                     | string       |
            | site app name       | App BBVA Mexico                                                 | string       |
            | project name        | Glomo                                                           | string       |
            | device mobile       | si                                                              | string       |
            | user userState      | logado                                                          | string       |
            | profile ID          | profileID                                                       | regexp named |
            | user segment global | 003001                                                          | string       |
            | user gender         | gender                                                          | regexp named |
            | user age            | age                                                             | regexp named |
