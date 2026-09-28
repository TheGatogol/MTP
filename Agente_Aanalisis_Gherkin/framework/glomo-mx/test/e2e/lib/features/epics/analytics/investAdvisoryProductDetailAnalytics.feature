@investAdvisoryAnalytics @analyticsInvestAdvisoryProductDetail
Feature: Product Detail - Invest Analytics

    @ANA_EVENT_PRDE001
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - Page View
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to product detail invest advisory
        Then the analytics events contains the following variables
            | item                | value                                             | type         | event     |
            | analytics           | analytics/glomo_base                              | json schema  | Page View |
            | version DL          | 20250414_5.0                                      | string       | Page View |
            | page name           | app:privada:personas:bbva invest contrato:detalle | string       | Page View |
            | level 1             | bbva invest contrato                              | string       | Page View |
            | level 2             | detalle                                           | string       | Page View |
            | language            | ES                                                | string       | Page View |
            | page area           | privada                                           | string       | Page View |
            | page intent         | informacion                                       | string       | Page View |
            | channel             | online                                            | string       | Page View |
            | page instance ID    | de                                                | string       | Page View |
            | page info version   | appVersion                                        | regexp named | Page View |
            | page segment        | personas                                          | string       | Page View |
            | sysEnv              | app                                               | string       | Page View |
            | business unit       | BBVA Mexico                                       | string       | Page View |
            | site app name       | App BBVA Mexico                                   | string       | Page View |
            | project name        | Glomo                                             | string       | Page View |
            | device mobile       | si                                                | string       | Page View |
            | user userState      | logado                                            | string       | Page View |
            | user segment global | 003001                                            | string       | Page View |
            | profile ID          | profileID                                         | regexp named | Page View |
            | user age            | age                                               | regexp named | Page View |
            | user gender         | gender                                            | regexp named | Page View |
            | user segment profile| con estrategia de portafolio                      | string       | Page View |

    @ANA_EVENT_PRDE002
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - Page View Detail
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        And the analytics interceptor service is initiated
        When the user opens contract detail
        Then the analytics events contains the following variables
            | item                | value                                                                  | type         | event     |
            | analytics           | analytics/glomo_base                                                   | json schema  | Page View |
            | version DL          | 20250414_5.0                                                           | string       | Page View |
            | page name           | app:privada:personas:bbva invest contrato:detalle:detalle del contrato | string       | Page View |
            | level 1             | bbva invest contrato                                                   | string       | Page View |
            | level 2             | detalle                                                                | string       | Page View |
            | level 3             | detalle del contrato                                                   | string       | Page View |
            | language            | ES                                                                     | string       | Page View |
            | page area           | privada                                                                | string       | Page View |
            | page intent         | informacion                                                            | string       | Page View |
            | channel             | online                                                                 | string       | Page View |
            | page instance ID    | de                                                                     | string       | Page View |
            | page info version   | appVersion                                                             | regexp named | Page View |
            | page segment        | personas                                                               | string       | Page View |
            | sysEnv              | app                                                                    | string       | Page View |
            | business unit       | BBVA Mexico                                                            | string       | Page View |
            | site app name       | App BBVA Mexico                                                        | string       | Page View |
            | project name        | Glomo                                                                  | string       | Page View |
            | device mobile       | si                                                                     | string       | Page View |
            | user userState      | logado                                                                 | string       | Page View |
            | user segment global | 003001                                                                 | string       | Page View |
            | profile ID          | profileID                                                              | regexp named | Page View |
            | user age            | age                                                                    | regexp named | Page View |
            | user gender         | gender                                                                 | regexp named | Page View |

    @ANA_EVENT_PRDE003
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - Page View - Liquidity
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        And the analytics interceptor service is initiated
        When the user selects the fund liquidity option
        Then the analytics events contains the following variables
            | item                | value                                                      | type         | event     | event number |
            | analytics           | analytics/glomo_base                                       | json schema  | Page View | 1            |
            | version DL          | 20250414_5.0                                               | string       | Page View | 1            |
            | page name           | app:privada:personas:bbva invest contrato:detalle:liquidez | string       | Page View | 1            |
            | level 1             | bbva invest contrato                                       | string       | Page View | 1            |
            | level 2             | detalle                                                    | string       | Page View | 1            |
            | level 3             | liquidez                                                   | string       | Page View | 1            |
            | language            | ES                                                         | string       | Page View | 1            |
            | page area           | privada                                                    | string       | Page View | 1            |
            | page intent         | informacion                                                | string       | Page View | 1            |
            | channel             | online                                                     | string       | Page View | 1            |
            | page instance ID    | de                                                         | string       | Page View | 1            |
            | page info version   | appVersion                                                 | regexp named | Page View | 1            |
            | page segment        | personas                                                   | string       | Page View | 1            |
            | sysEnv              | app                                                        | string       | Page View | 1            |
            | business unit       | BBVA Mexico                                                | string       | Page View | 1            |
            | site app name       | App BBVA Mexico                                            | string       | Page View | 1            |
            | project name        | Glomo                                                      | string       | Page View | 1            |
            | device mobile       | si                                                         | string       | Page View | 1            |
            | user userState      | logado                                                     | string       | Page View | 1            |
            | user segment global | 003001                                                     | string       | Page View | 1            |
            | profile ID          | profileID                                                  | regexp named | Page View | 1            |
            | user age            | age                                                        | regexp named | Page View | 1            |
            | user gender         | gender                                                     | regexp named | Page View | 1            |

    @ANA_EVENT_PRDE004
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - Page View - Capital Preservation
        Given a user with the following criteria
            | criteria                      |
            | invest advisory multistrategy |
        And the user accesses to product detail invest advisory
        And the analytics interceptor service is initiated
        When the user selects the capital preservation option
        Then the analytics events contains the following variables
            | item                | value                                                                     | type         | event     | event number |
            | analytics           | analytics/glomo_base                                                      | json schema  | Page View | 1            |
            | version DL          | 20250414_5.0                                                              | string       | Page View | 1            |
            | page name           | app:privada:personas:bbva invest contrato:detalle:preservacion de capital | string       | Page View | 1            |
            | level 1             | bbva invest contrato                                                      | string       | Page View | 1            |
            | level 2             | detalle                                                                   | string       | Page View | 1            |
            | level 3             | preservacion de capital                                                   | string       | Page View | 1            |
            | language            | ES                                                                        | string       | Page View | 1            |
            | page area           | privada                                                                   | string       | Page View | 1            |
            | page intent         | informacion                                                               | string       | Page View | 1            |
            | channel             | online                                                                    | string       | Page View | 1            |
            | page instance ID    | de                                                                        | string       | Page View | 1            |
            | page info version   | appVersion                                                                | regexp named | Page View | 1            |
            | page segment        | personas                                                                  | string       | Page View | 1            |
            | sysEnv              | app                                                                       | string       | Page View | 1            |
            | business unit       | BBVA Mexico                                                               | string       | Page View | 1            |
            | site app name       | App BBVA Mexico                                                           | string       | Page View | 1            |
            | project name        | Glomo                                                                     | string       | Page View | 1            |
            | device mobile       | si                                                                        | string       | Page View | 1            |
            | user userState      | logado                                                                    | string       | Page View | 1            |
            | user segment global | 003001                                                                    | string       | Page View | 1            |
            | profile ID          | profileID                                                                 | regexp named | Page View | 1            |
            | user age            | age                                                                       | regexp named | Page View | 1            |
            | user gender         | gender                                                                    | regexp named | Page View | 1            |

    @ANA_EVENT_PRDE005
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - Page View - Flow Generation
        Given a user with the following criteria
            | criteria                      |
            | invest advisory multistrategy |
        And the user accesses to product detail invest advisory
        And the analytics interceptor service is initiated
        When the user selects the flow generation option
        Then the analytics events contains the following variables
            | item                | value                                                                 | type         | event     | event number |
            | analytics           | analytics/glomo_base                                                  | json schema  | Page View | 1            |
            | version DL          | 20250414_5.0                                                          | string       | Page View | 1            |
            | page name           | app:privada:personas:bbva invest contrato:detalle:generacion de flujo | string       | Page View | 1            |
            | level 1             | bbva invest contrato                                                  | string       | Page View | 1            |
            | level 2             | detalle                                                               | string       | Page View | 1            |
            | level 3             | generacion de flujo                                                   | string       | Page View | 1            |
            | language            | ES                                                                    | string       | Page View | 1            |
            | page area           | privada                                                               | string       | Page View | 1            |
            | page intent         | informacion                                                           | string       | Page View | 1            |
            | channel             | online                                                                | string       | Page View | 1            |
            | page instance ID    | de                                                                    | string       | Page View | 1            |
            | page info version   | appVersion                                                            | regexp named | Page View | 1            |
            | page segment        | personas                                                              | string       | Page View | 1            |
            | sysEnv              | app                                                                   | string       | Page View | 1            |
            | business unit       | BBVA Mexico                                                           | string       | Page View | 1            |
            | site app name       | App BBVA Mexico                                                       | string       | Page View | 1            |
            | project name        | Glomo                                                                 | string       | Page View | 1            |
            | device mobile       | si                                                                    | string       | Page View | 1            |
            | user userState      | logado                                                                | string       | Page View | 1            |
            | user segment global | 003001                                                                | string       | Page View | 1            |
            | profile ID          | profileID                                                             | regexp named | Page View | 1            |
            | user age            | age                                                                   | regexp named | Page View | 1            |
            | user gender         | gender                                                                | regexp named | Page View | 1            |

    @ANA_EVENT_PRDE006
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - Page View - Capital Growth
        Given a user with the following criteria
            | criteria                      |
            | invest advisory multistrategy |
        And the user accesses to product detail invest advisory
        And the analytics interceptor service is initiated
        When the user selects the capital growth option
        Then the analytics events contains the following variables
            | item                | value                                                                    | type         | event     | event number |
            | analytics           | analytics/glomo_base                                                     | json schema  | Page View | 1            |
            | version DL          | 20250414_5.0                                                             | string       | Page View | 1            |
            | page name           | app:privada:personas:bbva invest contrato:detalle:crecimiento de capital | string       | Page View | 1            |
            | level 1             | bbva invest contrato                                                     | string       | Page View | 1            |
            | level 2             | detalle                                                                  | string       | Page View | 1            |
            | level 3             | crecimiento de capital                                                   | string       | Page View | 1            |
            | language            | ES                                                                       | string       | Page View | 1            |
            | page area           | privada                                                                  | string       | Page View | 1            |
            | page intent         | informacion                                                              | string       | Page View | 1            |
            | channel             | online                                                                   | string       | Page View | 1            |
            | page instance ID    | de                                                                       | string       | Page View | 1            |
            | page info version   | appVersion                                                               | regexp named | Page View | 1            |
            | page segment        | personas                                                                 | string       | Page View | 1            |
            | sysEnv              | app                                                                      | string       | Page View | 1            |
            | business unit       | BBVA Mexico                                                              | string       | Page View | 1            |
            | site app name       | App BBVA Mexico                                                          | string       | Page View | 1            |
            | project name        | Glomo                                                                    | string       | Page View | 1            |
            | device mobile       | si                                                                       | string       | Page View | 1            |
            | user userState      | logado                                                                   | string       | Page View | 1            |
            | user segment global | 003001                                                                   | string       | Page View | 1            |
            | profile ID          | profileID                                                                | regexp named | Page View | 1            |
            | user age            | age                                                                      | regexp named | Page View | 1            |
            | user gender         | gender                                                                   | regexp named | Page View | 1            |

    @ANA_EVENT_PRDE007
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - Page View - Error Operation Not Available
        Given a user with the following criteria
            | criteria              |
            | invest advisory error |
        And the user accesses to product detail invest advisory
        And the analytics interceptor service is initiated
        When user funds can not be loaded
        Then the analytics events contains the following variables
            | item                | value                                                                           | type         | event     |
            | analytics           | analytics/glomo_base                                                            | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                    | string       | Page View |
            | page name           | app:privada:personas:bbva invest contrato:detalle:error operacion no disponible | string       | Page View |
            | level 1             | bbva invest contrato                                                            | string       | Page View |
            | level 2             | detalle                                                                         | string       | Page View |
            | level 3             | error operacion no disponible                                                   | string       | Page View |
            | error page          | error operacion no disponible                                                   | string       | Page View |
            | language            | ES                                                                              | string       | Page View |
            | page area           | privada                                                                         | string       | Page View |
            | page intent         | informacion                                                                     | string       | Page View |
            | channel             | online                                                                          | string       | Page View |
            | page instance ID    | de                                                                              | string       | Page View |
            | page info version   | appVersion                                                                      | regexp named | Page View |
            | page segment        | personas                                                                        | string       | Page View |
            | sysEnv              | app                                                                             | string       | Page View |
            | business unit       | BBVA Mexico                                                                     | string       | Page View |
            | site app name       | App BBVA Mexico                                                                 | string       | Page View |
            | project name        | Glomo                                                                           | string       | Page View |
            | device mobile       | si                                                                              | string       | Page View |
            | user userState      | logado                                                                          | string       | Page View |
            | user segment global | 003001                                                                          | string       | Page View |
            | profile ID          | profileID                                                                       | regexp named | Page View |
            | user age            | age                                                                             | regexp named | Page View |
            | user gender         | gender                                                                          | regexp named | Page View |

    @ANA_EVENT_PRDE008
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - Page View - Error Information Not Available
        Given a user with the following criteria
            | criteria              |
            | invest advisory error |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to product detail invest advisory
        Then the analytics events contains the following variables
            | item                | value                                                                             | type         | event     | event number |
            | version DL          | 20250414_5.0                                                                      | string       | Page View | 2            |
            | page name           | app:privada:personas:bbva invest contrato:detalle:error informacion no disponible | string       | Page View | 2            |
            | level 1             | bbva invest contrato                                                              | string       | Page View | 2            |
            | level 2             | detalle                                                                           | string       | Page View | 2            |
            | level 3             | error informacion no disponible                                                   | string       | Page View | 2            |
            | error page          | error informacion no disponible                                                   | string       | Page View | 2            |
            | language            | ES                                                                                | string       | Page View | 2            |
            | page area           | privada                                                                           | string       | Page View | 2            |
            | page intent         | informacion                                                                       | string       | Page View | 2            |
            | channel             | online                                                                            | string       | Page View | 2            |
            | page instance ID    | de                                                                                | string       | Page View | 2            |
            | page info version   | appVersion                                                                        | regexp named | Page View | 2            |
            | page segment        | personas                                                                          | string       | Page View | 2            |
            | sysEnv              | app                                                                               | string       | Page View | 2            |
            | business unit       | BBVA Mexico                                                                       | string       | Page View | 2            |
            | site app name       | App BBVA Mexico                                                                   | string       | Page View | 2            |
            | project name        | Glomo                                                                             | string       | Page View | 2            |
            | device mobile       | si                                                                                | string       | Page View | 2            |
            | user userState      | logado                                                                            | string       | Page View | 2            |
            | user segment global | 003001                                                                            | string       | Page View | 2            |
            | profile ID          | profileID                                                                         | regexp named | Page View | 2            |
            | user age            | age                                                                               | regexp named | Page View | 2            |
            | user gender         | gender                                                                            | regexp named | Page View | 2            |

    @ANA_EVENT_PRDE009
    @analytics
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Analytics - Page View - Terms and Conditions
        Given a user with the following criteria
            | criteria                              |
            | invest advisory terms and conditions  |
        And the user accesses to product detail invest advisory
        And the analytics interceptor service is initiated
        When the user opens terms and conditions
        Then the analytics events contains the following variables
            | item                | value                                                                         | type         | event     |
            | analytics           | analytics/glomo_base                                                          | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                  | string       | Page View |
            | page name           | app:privada:personas:bbva invest contrato:detalle:estrategias del portafolio  | string       | Page View |
            | level 1             | bbva invest contrato                                                          | string       | Page View |
            | level 2             | detalle                                                                       | string       | Page View |
            | level 3             | estrategias del portafolio                                                    | string       | Page View |
            | language            | ES                                                                            | string       | Page View |
            | page area           | privada                                                                       | string       | Page View |
            | page intent         | informacion                                                                   | string       | Page View |
            | page instance ID    | de                                                                            | string       | Page View |
            | page info version   | appVersion                                                                    | regexp named | Page View |
            | page segment        | personas                                                                      | string       | Page View |
            | sysEnv              | app                                                                           | string       | Page View |
            | business unit       | BBVA Mexico                                                                   | string       | Page View |
            | site app name       | App BBVA Mexico                                                               | string       | Page View |
            | project name        | Glomo                                                                         | string       | Page View |
            | device mobile       | si                                                                            | string       | Page View |
            | user userState      | logado                                                                        | string       | Page View |
            | user segment global | 003001                                                                        | string       | Page View |
            | profile ID          | profileID                                                                     | regexp named | Page View |
            | user age            | age                                                                           | regexp named | Page View |
            | user gender         | gender                                                                        | regexp named | Page View |
