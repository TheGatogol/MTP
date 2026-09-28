@analyticsMortgageTrackingInformative
Feature: Analytics - Mortgage Tracking Informative

    @ANA_MTI001
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: Mortgage Tracking - Page View - Main Page Mortgage Tracking From Contract Product Section
        Given a user with the following criteria
            | criteria          |
            | mortgage tracking |
        When the user accesses to mortgage tracking card
        Then the device contains the following variables
            | item                | value                                                                                                      | type         |
            | analytics           | analytics/glomo_base                                                                                       | json schema  |
            | page name           | app:privada:personas:prestamos:credito hipotecario:seguimiento solicitud                                   | string       |
            | level 1             | prestamos                                                                                                  | string       |
            | level 2             | credito hipotecario                                                                                        | string       |
            | level 3             | seguimiento solicitud                                                                                      | string       |
            | language            | ES                                                                                                         | string       |
            | page area           | privada                                                                                                    | string       |
            | page intent         | informacion                                                                                                | string       |
            | channel             | online                                                                                                     | string       |
            | page instance ID    | de                                                                                                         | string       |
            | page info version   | appVersion                                                                                                 | regexp named |
            | page segment        | personas                                                                                                   | string       |
            | sysEnv              | app                                                                                                        | string       |
            | business unit       | BBVA Mexico                                                                                                | string       |
            | site app name       | App BBVA Mexico                                                                                            | string       |
            | project name        | Glomo                                                                                                      | string       |
            | device mobile       | si                                                                                                         | string       |
            | user userState      | logado                                                                                                     | string       |
            | profile ID          | profileID                                                                                                  | regexp named |
            | user segment global | 003001                                                                                                     | string       |
            | custom fields       | estado solicitud credito hipotecario:pendiente,etapa solicitud credito hipotecario:documentacion necesaria | string       |

    @ANA_EVENT_MTI002
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: Mortgage Tracking - Page View - Mortgage Tracking Detail Modal documentation needed
        Given a user with the following criteria
            | criteria          |
            | mortgage tracking |
        And the user accesses to mortgage tracking card
        And the analytics interceptor service is initiated
        When the user accesses to the detail step link
        Then the analytics events contains the following variables
            | item                | value                                                                                          | type         | event     |
            | analytics           | analytics/glomo_base                                                                           | json schema  | Page View |
            | page name           | app:privada:personas:prestamos:credito hipotecario:seguimiento solicitud:detalle documentacion | string       | Page View |
            | level 1             | prestamos                                                                                      | string       | Page View |
            | level 2             | credito hipotecario                                                                            | string       | Page View |
            | level 3             | seguimiento solicitud                                                                          | string       | Page View |
            | level 4             | detalle documentacion                                                                          | string       | Page View |
            | language            | ES                                                                                             | string       | Page View |
            | page area           | privada                                                                                        | string       | Page View |
            | page intent         | informacion                                                                                    | string       | Page View |
            | channel             | online                                                                                         | string       | Page View |
            | page instance ID    | de                                                                                             | string       | Page View |
            | page info version   | appVersion                                                                                     | regexp named | Page View |
            | page segment        | personas                                                                                       | string       | Page View |
            | sysEnv              | app                                                                                            | string       | Page View |
            | business unit       | BBVA Mexico                                                                                    | string       | Page View |
            | site app name       | App BBVA Mexico                                                                                | string       | Page View |
            | project name        | Glomo                                                                                          | string       | Page View |
            | device mobile       | si                                                                                             | string       | Page View |
            | user userState      | logado                                                                                         | string       | Page View |
            | profile ID          | profileID                                                                                      | regexp named | Page View |
            | user segment global | 003001                                                                                         | string       | Page View |

    @ANA_EVENT_MTI003
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: Mortgage Tracking - Page View - Mortgage Tracking Detail Modal appraisal documentation
        Given a user with the following criteria
            | criteria          |
            | mortgage tracking |
        And the user accesses to mortgage tracking card
        And the analytics interceptor service is initiated
        When the user accesses to the detail step link
        Then the analytics events contains the following variables
            | item                | value                                                                                               | type         | event     |
            | analytics           | analytics/glomo_base                                                                                | json schema  | Page View |
            | page name           | app:privada:personas:prestamos:credito hipotecario:seguimiento solicitud:avaluo documentos inmueble | string       | Page View |
            | level 1             | prestamos                                                                                           | string       | Page View |
            | level 2             | credito hipotecario                                                                                 | string       | Page View |
            | level 3             | seguimiento solicitud                                                                               | string       | Page View |
            | level 4             | avaluo documentos inmueble                                                                          | string       | Page View |
            | language            | ES                                                                                                  | string       | Page View |
            | page area           | privada                                                                                             | string       | Page View |
            | page intent         | informacion                                                                                         | string       | Page View |
            | channel             | online                                                                                              | string       | Page View |
            | page instance ID    | de                                                                                                  | string       | Page View |
            | page info version   | appVersion                                                                                          | regexp named | Page View |
            | page segment        | personas                                                                                            | string       | Page View |
            | sysEnv              | app                                                                                                 | string       | Page View |
            | business unit       | BBVA Mexico                                                                                         | string       | Page View |
            | site app name       | App BBVA Mexico                                                                                     | string       | Page View |
            | project name        | Glomo                                                                                               | string       | Page View |
            | device mobile       | si                                                                                                  | string       | Page View |
            | user userState      | logado                                                                                              | string       | Page View |
            | profile ID          | profileID                                                                                           | regexp named | Page View |
            | user segment global | 003001                                                                                              | string       | Page View |

    @ANA_EVENT_MTI004
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: Mortgage Tracking - Page View - Mortgage Tracking Detail Modal appraisal defining date
        Given a user with the following criteria
            | criteria          |
            | mortgage tracking |
        And the user accesses to mortgage tracking card
        And the analytics interceptor service is initiated
        When the user accesses to the detail step link
        Then the analytics events contains the following variables
            | item                | value                                                                                            | type         | event     |
            | analytics           | analytics/glomo_base                                                                             | json schema  | Page View |
            | page name           | app:privada:personas:prestamos:credito hipotecario:seguimiento solicitud:avaluo definiendo fecha | string       | Page View |
            | level 1             | prestamos                                                                                        | string       | Page View |
            | level 2             | credito hipotecario                                                                              | string       | Page View |
            | level 3             | seguimiento solicitud                                                                            | string       | Page View |
            | level 4             | avaluo definiendo fecha                                                                          | string       | Page View |
            | language            | ES                                                                                               | string       | Page View |
            | page area           | privada                                                                                          | string       | Page View |
            | page intent         | informacion                                                                                      | string       | Page View |
            | channel             | online                                                                                           | string       | Page View |
            | page instance ID    | de                                                                                               | string       | Page View |
            | page info version   | appVersion                                                                                       | regexp named | Page View |
            | page segment        | personas                                                                                         | string       | Page View |
            | sysEnv              | app                                                                                              | string       | Page View |
            | business unit       | BBVA Mexico                                                                                      | string       | Page View |
            | site app name       | App BBVA Mexico                                                                                  | string       | Page View |
            | project name        | Glomo                                                                                            | string       | Page View |
            | device mobile       | si                                                                                               | string       | Page View |
            | user userState      | logado                                                                                           | string       | Page View |
            | profile ID          | profileID                                                                                        | regexp named | Page View |
            | user segment global | 003001                                                                                           | string       | Page View |

    @ANA_EVENT_MTI005
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: Mortgage Tracking - Page View - Mortgage Tracking Detail Modal appraisal defined date
        Given a user with the following criteria
            | criteria          |
            | mortgage tracking |
        And the user accesses to mortgage tracking card
        And the analytics interceptor service is initiated
        When the user accesses to the detail step link
        Then the analytics events contains the following variables
            | item                | value                                                                                       | type         | event     |
            | analytics           | analytics/glomo_base                                                                        | json schema  | Page View |
            | page name           | app:privada:personas:prestamos:credito hipotecario:seguimiento solicitud:avaluo fecha lista | string       | Page View |
            | level 1             | prestamos                                                                                   | string       | Page View |
            | level 2             | credito hipotecario                                                                         | string       | Page View |
            | level 3             | seguimiento solicitud                                                                       | string       | Page View |
            | level 4             | avaluo fecha lista                                                                          | string       | Page View |
            | language            | ES                                                                                          | string       | Page View |
            | page area           | privada                                                                                     | string       | Page View |
            | page intent         | informacion                                                                                 | string       | Page View |
            | channel             | online                                                                                      | string       | Page View |
            | page instance ID    | de                                                                                          | string       | Page View |
            | page info version   | appVersion                                                                                  | regexp named | Page View |
            | page segment        | personas                                                                                    | string       | Page View |
            | sysEnv              | app                                                                                         | string       | Page View |
            | business unit       | BBVA Mexico                                                                                 | string       | Page View |
            | site app name       | App BBVA Mexico                                                                             | string       | Page View |
            | project name        | Glomo                                                                                       | string       | Page View |
            | device mobile       | si                                                                                          | string       | Page View |
            | user userState      | logado                                                                                      | string       | Page View |
            | profile ID          | profileID                                                                                   | regexp named | Page View |
            | user segment global | 003001                                                                                      | string       | Page View |

    @ANA_EVENT_MTI006
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: Mortgage Tracking - Page View - Mortgage Tracking Detail Modal appraisal result date
        Given a user with the following criteria
            | criteria          |
            | mortgage tracking |
        And the user accesses to mortgage tracking card
        And the analytics interceptor service is initiated
        When the user accesses to the detail step link
        Then the analytics events contains the following variables
            | item                | value                                                                                                | type         | event     |
            | analytics           | analytics/glomo_base                                                                                 | json schema  | Page View |
            | page name           | app:privada:personas:prestamos:credito hipotecario:seguimiento solicitud:avaluo analizando resultado | string       | Page View |
            | level 1             | prestamos                                                                                            | string       | Page View |
            | level 2             | credito hipotecario                                                                                  | string       | Page View |
            | level 3             | seguimiento solicitud                                                                                | string       | Page View |
            | level 4             | avaluo analizando resultado                                                                          | string       | Page View |
            | language            | ES                                                                                                   | string       | Page View |
            | page area           | privada                                                                                              | string       | Page View |
            | page intent         | informacion                                                                                          | string       | Page View |
            | channel             | online                                                                                               | string       | Page View |
            | page instance ID    | de                                                                                                   | string       | Page View |
            | page info version   | appVersion                                                                                           | regexp named | Page View |
            | page segment        | personas                                                                                             | string       | Page View |
            | sysEnv              | app                                                                                                  | string       | Page View |
            | business unit       | BBVA Mexico                                                                                          | string       | Page View |
            | site app name       | App BBVA Mexico                                                                                      | string       | Page View |
            | project name        | Glomo                                                                                                | string       | Page View |
            | device mobile       | si                                                                                                   | string       | Page View |
            | user userState      | logado                                                                                               | string       | Page View |
            | profile ID          | profileID                                                                                            | regexp named | Page View |
            | user segment global | 003001                                                                                               | string       | Page View |

    @ANA_EVENT_MTI007
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Mortgage Tracking - Page View - Mortgage Tracking Detail Modal appraisal amount result
        Given a user with the following criteria
            | criteria          |
            | mortgage tracking |
        And the user accesses to mortgage tracking card
        And the analytics interceptor service is initiated
        When the user accesses to the detail step link
        Then the analytics events contains the following variables
            | item                | value                                                                                           | type         | event     |
            | analytics           | analytics/glomo_base                                                                            | json schema  | Page View |
            | page name           | app:privada:personas:prestamos:credito hipotecario:seguimiento solicitud:avaluo resultado listo | string       | Page View |
            | level 1             | prestamos                                                                                       | string       | Page View |
            | level 2             | credito hipotecario                                                                             | string       | Page View |
            | level 3             | seguimiento solicitud                                                                           | string       | Page View |
            | level 4             | avaluo resultado listo                                                                          | string       | Page View |
            | language            | ES                                                                                              | string       | Page View |
            | page area           | privada                                                                                         | string       | Page View |
            | page intent         | informacion                                                                                     | string       | Page View |
            | channel             | online                                                                                          | string       | Page View |
            | page instance ID    | de                                                                                              | string       | Page View |
            | page info version   | appVersion                                                                                      | regexp named | Page View |
            | page segment        | personas                                                                                        | string       | Page View |
            | sysEnv              | app                                                                                             | string       | Page View |
            | business unit       | BBVA Mexico                                                                                     | string       | Page View |
            | site app name       | App BBVA Mexico                                                                                 | string       | Page View |
            | project name        | Glomo                                                                                           | string       | Page View |
            | device mobile       | si                                                                                              | string       | Page View |
            | user userState      | logado                                                                                          | string       | Page View |
            | profile ID          | profileID                                                                                       | regexp named | Page View |
            | user segment global | 003001                                                                                          | string       | Page View |

    @ANA_EVENT_MTI008
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Mortgage Tracking - Page View - Mortgage Tracking Detail Modal notarial choose notary
        Given a user with the following criteria
            | criteria          |
            | mortgage tracking |
        And the user accesses to mortgage tracking card
        And the analytics interceptor service is initiated
        When the user accesses to the detail step link
        Then the analytics events contains the following variables
            | item                | value                                                                                               | type         | event     |
            | analytics           | analytics/glomo_base                                                                                | json schema  | Page View |
            | page name           | app:privada:personas:prestamos:credito hipotecario:seguimiento solicitud:notarial asignando notario | string       | Page View |
            | level 1             | prestamos                                                                                           | string       | Page View |
            | level 2             | credito hipotecario                                                                                 | string       | Page View |
            | level 3             | seguimiento solicitud                                                                               | string       | Page View |
            | level 4             | notarial asignando notario                                                                          | string       | Page View |
            | language            | ES                                                                                                  | string       | Page View |
            | page area           | privada                                                                                             | string       | Page View |
            | page intent         | informacion                                                                                         | string       | Page View |
            | channel             | online                                                                                              | string       | Page View |
            | page instance ID    | de                                                                                                  | string       | Page View |
            | page info version   | appVersion                                                                                          | regexp named | Page View |
            | page segment        | personas                                                                                            | string       | Page View |
            | sysEnv              | app                                                                                                 | string       | Page View |
            | business unit       | BBVA Mexico                                                                                         | string       | Page View |
            | site app name       | App BBVA Mexico                                                                                     | string       | Page View |
            | project name        | Glomo                                                                                               | string       | Page View |
            | device mobile       | si                                                                                                  | string       | Page View |
            | user userState      | logado                                                                                              | string       | Page View |
            | profile ID          | profileID                                                                                           | regexp named | Page View |
            | user segment global | 003001                                                                                              | string       | Page View |

    @ANA_EVENT_MTI009
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Mortgage Tracking - Page View - Mortgage Tracking Detail Modal notarial data notary
        Given a user with the following criteria
            | criteria          |
            | mortgage tracking |
        And the user accesses to mortgage tracking card
        And the analytics interceptor service is initiated
        When the user accesses to the detail step link
        Then the analytics events contains the following variables
            | item                | value                                                                                              | type         | event     |
            | analytics           | analytics/glomo_base                                                                               | json schema  | Page View |
            | page name           | app:privada:personas:prestamos:credito hipotecario:seguimiento solicitud:notarial notario asignado | string       | Page View |
            | level 1             | prestamos                                                                                          | string       | Page View |
            | level 2             | credito hipotecario                                                                                | string       | Page View |
            | level 3             | seguimiento solicitud                                                                              | string       | Page View |
            | level 4             | notarial notario asignado                                                                          | string       | Page View |
            | language            | ES                                                                                                 | string       | Page View |
            | page area           | privada                                                                                            | string       | Page View |
            | page intent         | informacion                                                                                        | string       | Page View |
            | channel             | online                                                                                             | string       | Page View |
            | page instance ID    | de                                                                                                 | string       | Page View |
            | page info version   | appVersion                                                                                         | regexp named | Page View |
            | page segment        | personas                                                                                           | string       | Page View |
            | sysEnv              | app                                                                                                | string       | Page View |
            | business unit       | BBVA Mexico                                                                                        | string       | Page View |
            | site app name       | App BBVA Mexico                                                                                    | string       | Page View |
            | project name        | Glomo                                                                                              | string       | Page View |
            | device mobile       | si                                                                                                 | string       | Page View |
            | user userState      | logado                                                                                             | string       | Page View |
            | profile ID          | profileID                                                                                          | regexp named | Page View |
            | user segment global | 003001                                                                                             | string       | Page View |

    @ANA_EVENT_MTI010
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Mortgage Tracking - Page View - Mortgage Tracking Detail Modal notarial choose signature
        Given a user with the following criteria
            | criteria          |
            | mortgage tracking |
        And the user accesses to mortgage tracking card
        And the analytics interceptor service is initiated
        When the user accesses to the detail step link
        Then the analytics events contains the following variables
            | item                | value                                                                                            | type         | event     |
            | analytics           | analytics/glomo_base                                                                             | json schema  | Page View |
            | page name           | app:privada:personas:prestamos:credito hipotecario:seguimiento solicitud:notarial firma notarial | string       | Page View |
            | level 1             | prestamos                                                                                        | string       | Page View |
            | level 2             | credito hipotecario                                                                              | string       | Page View |
            | level 3             | seguimiento solicitud                                                                            | string       | Page View |
            | level 4             | notarial firma notarial                                                                          | string       | Page View |
            | language            | ES                                                                                               | string       | Page View |
            | page area           | privada                                                                                          | string       | Page View |
            | page intent         | informacion                                                                                      | string       | Page View |
            | channel             | online                                                                                           | string       | Page View |
            | page instance ID    | de                                                                                               | string       | Page View |
            | page info version   | appVersion                                                                                       | regexp named | Page View |
            | page segment        | personas                                                                                         | string       | Page View |
            | sysEnv              | app                                                                                              | string       | Page View |
            | business unit       | BBVA Mexico                                                                                      | string       | Page View |
            | site app name       | App BBVA Mexico                                                                                  | string       | Page View |
            | project name        | Glomo                                                                                            | string       | Page View |
            | device mobile       | si                                                                                               | string       | Page View |
            | user userState      | logado                                                                                           | string       | Page View |
            | profile ID          | profileID                                                                                        | regexp named | Page View |
            | user segment global | 003001                                                                                           | string       | Page View |

    @ANA_EVENT_MTI011
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Mortgage Tracking - Page View - Mortgage Tracking Detail Modal notarial date signature
        Given a user with the following criteria
            | criteria          |
            | mortgage tracking |
        And the user accesses to mortgage tracking card
        And the analytics interceptor service is initiated
        When the user accesses to the detail step link
        Then the analytics events contains the following variables
            | item                | value                                                                                           | type         | event     |
            | analytics           | analytics/glomo_base                                                                            | json schema  | Page View |
            | page name           | app:privada:personas:prestamos:credito hipotecario:seguimiento solicitud:notarial detalle firma | string       | Page View |
            | level 1             | prestamos                                                                                       | string       | Page View |
            | level 2             | credito hipotecario                                                                             | string       | Page View |
            | level 3             | seguimiento solicitud                                                                           | string       | Page View |
            | level 4             | notarial detalle firma                                                                          | string       | Page View |
            | language            | ES                                                                                              | string       | Page View |
            | page area           | privada                                                                                         | string       | Page View |
            | page intent         | informacion                                                                                     | string       | Page View |
            | channel             | online                                                                                          | string       | Page View |
            | page instance ID    | de                                                                                              | string       | Page View |
            | page info version   | appVersion                                                                                      | regexp named | Page View |
            | page segment        | personas                                                                                        | string       | Page View |
            | sysEnv              | app                                                                                             | string       | Page View |
            | business unit       | BBVA Mexico                                                                                     | string       | Page View |
            | site app name       | App BBVA Mexico                                                                                 | string       | Page View |
            | project name        | Glomo                                                                                           | string       | Page View |
            | device mobile       | si                                                                                              | string       | Page View |
            | user userState      | logado                                                                                          | string       | Page View |
            | profile ID          | profileID                                                                                       | regexp named | Page View |
            | user segment global | 003001                                                                                          | string       | Page View |

    @ANA_MTI012
    @analytics
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Mortgage Tracking - Page View - Limit time documentation
        Given a user with the following criteria
            | criteria          |
            | mortgage tracking |
        When the user accesses to mortgage tracking card
        Then the device contains the following variables
            | item                | value                                                                                              | type         |
            | analytics           | analytics/glomo_base                                                                               | json schema  |
            | page name           | app:privada:personas:prestamos:credito hipotecario:seguimiento solicitud:error solicitud rechazada | string       |
            | level 1             | prestamos                                                                                          | string       |
            | level 2             | credito hipotecario                                                                                | string       |
            | level 3             | seguimiento solicitud                                                                              | string       |
            | level 4             | error solicitud rechazada                                                                          | string       |
            | error page          | error solicitud rechazada                                                                          | string       |
            | language            | ES                                                                                                 | string       |
            | page area           | privada                                                                                            | string       |
            | page intent         | informacion                                                                                        | string       |
            | channel             | online                                                                                             | string       |
            | page instance ID    | de                                                                                                 | string       |
            | page info version   | appVersion                                                                                         | regexp named |
            | page segment        | personas                                                                                           | string       |
            | sysEnv              | app                                                                                                | string       |
            | business unit       | BBVA Mexico                                                                                        | string       |
            | site app name       | App BBVA Mexico                                                                                    | string       |
            | project name        | Glomo                                                                                              | string       |
            | device mobile       | si                                                                                                 | string       |
            | user userState      | logado                                                                                             | string       |
            | profile ID          | profileID                                                                                          | regexp named |
            | user segment global | 003001                                                                                             | string       |
