@investAdvisoryAnalytics @investAdvisoryPortfolioProfilingAnalytics
Feature: Analytics - OC Investment Portfolio

    @ANA_EVENT_IAP001
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Welcome
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user selects payment plan offer "invest advisory"
        Then the analytics events contains the following variables
            | item                | value                                                     | type         | event     | event number |
            | analytics           | analytics/glomo_base                                      | json schema  | Page View | 1            |
            | version DL          | 20250414_5.0                                              | string       | Page View | 1            |
            | page name           | app:privada:personas:bbva invest perfilamiento:bienvenida | string       | Page View | 1            |
            | level 1             | bbva invest perfilamiento                                 | string       | Page View | 1            |
            | level 2             | bienvenida                                                | string       | Page View | 1            |
            | language            | ES                                                        | string       | Page View | 1            |
            | page area           | privada                                                   | string       | Page View | 1            |
            | page intent         | informacion                                               | string       | Page View | 1            |
            | channel             | online                                                    | string       | Page View | 1            |
            | page instance ID    | de                                                        | string       | Page View | 1            |
            | page info version   | appVersion                                                | regexp named | Page View | 1            |
            | page segment        | personas                                                  | string       | Page View | 1            |
            | sysEnv              | app                                                       | string       | Page View | 1            |
            | business unit       | BBVA Mexico                                               | string       | Page View | 1            |
            | site app name       | App BBVA Mexico                                           | string       | Page View | 1            |
            | project name        | Glomo                                                     | string       | Page View | 1            |
            | device mobile       | si                                                        | string       | Page View | 1            |
            | user userState      | logado                                                    | string       | Page View | 1            |
            | user segment global | 003001                                                    | string       | Page View | 1            |
            | profile ID          | profileID                                                 | regexp named | Page View | 1            |
            | user age            | age                                                       | regexp named | Page View | 1            |
            | user gender         | gender                                                    | regexp named | Page View | 1            |

    @ANA_EVENT_IAP002
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Experience
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the analytics interceptor service is initiated
        When the user fills out profiling questionnaire the "experience" step
        Then the analytics events contains the following variables
            | item                | value                                                      | type         | event     |
            | analytics           | analytics/glomo_base                                       | json schema  | Page View |
            | version DL          | 20250414_5.0                                               | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:experiencia | string       | Page View |
            | level 1             | bbva invest perfilamiento                                  | string       | Page View |
            | level 2             | experiencia                                                | string       | Page View |
            | language            | ES                                                         | string       | Page View |
            | page area           | privada                                                    | string       | Page View |
            | page intent         | informacion                                                | string       | Page View |
            | channel             | online                                                     | string       | Page View |
            | page instance ID    | de                                                         | string       | Page View |
            | page info version   | appVersion                                                 | regexp named | Page View |
            | page segment        | personas                                                   | string       | Page View |
            | sysEnv              | app                                                        | string       | Page View |
            | business unit       | BBVA Mexico                                                | string       | Page View |
            | site app name       | App BBVA Mexico                                            | string       | Page View |
            | project name        | Glomo                                                      | string       | Page View |
            | device mobile       | si                                                         | string       | Page View |
            | user userState      | logado                                                     | string       | Page View |
            | user segment global | 003001                                                     | string       | Page View |
            | profile ID          | profileID                                                  | regexp named | Page View |
            | user age            | age                                                        | regexp named | Page View |

    @ANA_EVENT_IAP003
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Initial Amount
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user fills out profiling questionnaire up to the "experience" step
        And the analytics interceptor service is initiated
        When the user fills out profiling questionnaire the "initial amount" step
        Then the analytics events contains the following variables
            | item                | value                                                          | type         | event     |
            | analytics           | analytics/glomo_base                                           | json schema  | Page View |
            | version DL          | 20250414_5.0                                                   | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:importe inicial | string       | Page View |
            | level 1             | bbva invest perfilamiento                                      | string       | Page View |
            | level 2             | importe inicial                                                | string       | Page View |
            | language            | ES                                                             | string       | Page View |
            | page area           | privada                                                        | string       | Page View |
            | page intent         | informacion                                                    | string       | Page View |
            | channel             | online                                                         | string       | Page View |
            | page instance ID    | de                                                             | string       | Page View |
            | page info version   | appVersion                                                     | regexp named | Page View |
            | page segment        | personas                                                       | string       | Page View |
            | sysEnv              | app                                                            | string       | Page View |
            | business unit       | BBVA Mexico                                                    | string       | Page View |
            | site app name       | App BBVA Mexico                                                | string       | Page View |
            | project name        | Glomo                                                          | string       | Page View |
            | device mobile       | si                                                             | string       | Page View |
            | user userState      | logado                                                         | string       | Page View |
            | user segment global | 003001                                                         | string       | Page View |
            | profile ID          | profileID                                                      | regexp named | Page View |
            | user age            | age                                                            | regexp named | Page View |

    @ANA_EVENT_IAP004
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Investment Term
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user fills out profiling questionnaire up to the "initial amount" step
        And the analytics interceptor service is initiated
        When the user fills out profiling questionnaire the "investment term" step
        Then the analytics events contains the following variables
            | item                | value                                                                | type         | event     |
            | analytics           | analytics/glomo_base                                                 | json schema  | Page View |
            | version DL          | 20250414_5.0                                                         | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:plazo de la inversion | string       | Page View |
            | level 1             | bbva invest perfilamiento                                            | string       | Page View |
            | level 2             | plazo de la inversion                                                | string       | Page View |
            | language            | ES                                                                   | string       | Page View |
            | page area           | privada                                                              | string       | Page View |
            | page intent         | informacion                                                          | string       | Page View |
            | channel             | online                                                               | string       | Page View |
            | page instance ID    | de                                                                   | string       | Page View |
            | page info version   | appVersion                                                           | regexp named | Page View |
            | page segment        | personas                                                             | string       | Page View |
            | sysEnv              | app                                                                  | string       | Page View |
            | business unit       | BBVA Mexico                                                          | string       | Page View |
            | site app name       | App BBVA Mexico                                                      | string       | Page View |
            | project name        | Glomo                                                                | string       | Page View |
            | device mobile       | si                                                                   | string       | Page View |
            | user userState      | logado                                                               | string       | Page View |
            | user segment global | 003001                                                               | string       | Page View |
            | profile ID          | profileID                                                            | regexp named | Page View |
            | user age            | age                                                                  | regexp named | Page View |

    @ANA_EVENT_IAP005
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Investment Percentage
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user fills out profiling questionnaire up to the "investment term" step
        And the analytics interceptor service is initiated
        When the user fills out profiling questionnaire the "investment percentage" step
        Then the analytics events contains the following variables
            | item                | value                                                                    | type         | event     |
            | analytics           | analytics/glomo_base                                                     | json schema  | Page View |
            | version DL          | 20250414_5.0                                                             | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:porcentaje para inversion | string       | Page View |
            | level 1             | bbva invest perfilamiento                                                | string       | Page View |
            | level 2             | porcentaje para inversion                                                | string       | Page View |
            | language            | ES                                                                       | string       | Page View |
            | page area           | privada                                                                  | string       | Page View |
            | page intent         | informacion                                                              | string       | Page View |
            | channel             | online                                                                   | string       | Page View |
            | page instance ID    | de                                                                       | string       | Page View |
            | page info version   | appVersion                                                               | regexp named | Page View |
            | page segment        | personas                                                                 | string       | Page View |
            | sysEnv              | app                                                                      | string       | Page View |
            | business unit       | BBVA Mexico                                                              | string       | Page View |
            | site app name       | App BBVA Mexico                                                          | string       | Page View |
            | project name        | Glomo                                                                    | string       | Page View |
            | device mobile       | si                                                                       | string       | Page View |
            | user userState      | logado                                                                   | string       | Page View |
            | user segment global | 003001                                                                   | string       | Page View |
            | profile ID          | profileID                                                                | regexp named | Page View |
            | user age            | age                                                                      | regexp named | Page View |

    @ANA_EVENT_IAP006
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Risk Level
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user fills out profiling questionnaire up to the "investment percentage" step
        And the analytics interceptor service is initiated
        When the user fills out profiling questionnaire the "investment expectations" step
        Then the analytics events contains the following variables
            | item                | value                                                                       | type         | event     |
            | analytics           | analytics/glomo_base                                                        | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:expectativas de la inversion | string       | Page View |
            | level 1             | bbva invest perfilamiento                                                   | string       | Page View |
            | level 2             | expectativas de la inversion                                                | string       | Page View |
            | language            | ES                                                                          | string       | Page View |
            | page area           | privada                                                                     | string       | Page View |
            | page intent         | informacion                                                                 | string       | Page View |
            | channel             | online                                                                      | string       | Page View |
            | page instance ID    | de                                                                          | string       | Page View |
            | page info version   | appVersion                                                                  | regexp named | Page View |
            | page segment        | personas                                                                    | string       | Page View |
            | sysEnv              | app                                                                         | string       | Page View |
            | business unit       | BBVA Mexico                                                                 | string       | Page View |
            | site app name       | App BBVA Mexico                                                             | string       | Page View |
            | project name        | Glomo                                                                       | string       | Page View |
            | device mobile       | si                                                                          | string       | Page View |
            | user userState      | logado                                                                      | string       | Page View |
            | user segment global | 003001                                                                      | string       | Page View |
            | profile ID          | profileID                                                                   | regexp named | Page View |
            | user age            | age                                                                         | regexp named | Page View |

    @ANA_EVENT_IAP007
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Performance
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user fills out profiling questionnaire up to the "investment expectations" step
        And the analytics interceptor service is initiated
        When the user fills out profiling questionnaire the "performance" step
        Then the analytics events contains the following variables
            | item                | value                                                      | type         | event     |
            | analytics           | analytics/glomo_base                                       | json schema  | Page View |
            | version DL          | 20250414_5.0                                               | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:rendimiento | string       | Page View |
            | level 1             | bbva invest perfilamiento                                  | string       | Page View |
            | level 2             | rendimiento                                                | string       | Page View |
            | language            | ES                                                         | string       | Page View |
            | page area           | privada                                                    | string       | Page View |
            | page intent         | informacion                                                | string       | Page View |
            | channel             | online                                                     | string       | Page View |
            | page instance ID    | de                                                         | string       | Page View |
            | page info version   | appVersion                                                 | regexp named | Page View |
            | page segment        | personas                                                   | string       | Page View |
            | sysEnv              | app                                                        | string       | Page View |
            | business unit       | BBVA Mexico                                                | string       | Page View |
            | site app name       | App BBVA Mexico                                            | string       | Page View |
            | project name        | Glomo                                                      | string       | Page View |
            | device mobile       | si                                                         | string       | Page View |
            | user userState      | logado                                                     | string       | Page View |
            | user segment global | 003001                                                     | string       | Page View |
            | profile ID          | profileID                                                  | regexp named | Page View |
            | user age            | age                                                        | regexp named | Page View |

    @ANA_EVENT_IAP008
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Attitude towards loss
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user fills out profiling questionnaire up to the "performance" step
        And the analytics interceptor service is initiated
        When the user fills out profiling questionnaire the "lost attitude" step
        Then the analytics events contains the following variables
            | item                | value                                                                  | type         | event     |
            | analytics           | analytics/glomo_base                                                   | json schema  | Page View |
            | version DL          | 20250414_5.0                                                           | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:actitud ante la perdida | string       | Page View |
            | level 1             | bbva invest perfilamiento                                              | string       | Page View |
            | level 2             | actitud ante la perdida                                                | string       | Page View |
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

    @ANA_EVENT_IAP009
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Profiling Completed
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user fills out profiling questionnaire up to the "lost attitude" step
        And the analytics interceptor service is initiated
        When the user "completes" profiling questionnaire
        Then the analytics events contains the following variables
            | item                | value                                                     | type         | event     |
            | analytics           | analytics/glomo_base                                      | json schema  | Page View |
            | version DL          | 20250414_5.0                                              | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:finalizado | string       | Page View |
            | level 1             | bbva invest perfilamiento                                 | string       | Page View |
            | level 2             | finalizado                                                | string       | Page View |
            | language            | ES                                                        | string       | Page View |
            | page area           | privada                                                   | string       | Page View |
            | page intent         | informacion                                               | string       | Page View |
            | channel             | online                                                    | string       | Page View |
            | page instance ID    | de                                                        | string       | Page View |
            | page info version   | appVersion                                                | regexp named | Page View |
            | page segment        | personas                                                  | string       | Page View |
            | sysEnv              | app                                                       | string       | Page View |
            | business unit       | BBVA Mexico                                               | string       | Page View |
            | site app name       | App BBVA Mexico                                           | string       | Page View |
            | project name        | Glomo                                                     | string       | Page View |
            | device mobile       | si                                                        | string       | Page View |
            | user userState      | logado                                                    | string       | Page View |
            | user segment global | 003001                                                    | string       | Page View |
            | profile ID          | profileID                                                 | regexp named | Page View |
            | user age            | age                                                       | regexp named | Page View |

    @ANA_EVENT_IAP010
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - My Profile
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user "starts" profiling questionnaire
        And the analytics interceptor service is initiated
        When the user sends questionnaire and is redirected to the result page
        Then the analytics events contains the following variables
            | item                | value                                                    | type         | event     |
            | analytics           | analytics/glomo_base                                     | json schema  | Page View |
            | version DL          | 20250414_5.0                                             | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:mi perfil | string       | Page View |
            | level 1             | bbva invest perfilamiento                                | string       | Page View |
            | level 2             | mi perfil                                                | string       | Page View |
            | language            | ES                                                       | string       | Page View |
            | page area           | privada                                                  | string       | Page View |
            | page intent         | informacion                                              | string       | Page View |
            | channel             | online                                                   | string       | Page View |
            | page instance ID    | de                                                       | string       | Page View |
            | page info version   | appVersion                                               | regexp named | Page View |
            | page segment        | personas                                                 | string       | Page View |
            | sysEnv              | app                                                      | string       | Page View |
            | business unit       | BBVA Mexico                                              | string       | Page View |
            | site app name       | App BBVA Mexico                                          | string       | Page View |
            | project name        | Glomo                                                    | string       | Page View |
            | device mobile       | si                                                       | string       | Page View |
            | user userState      | logado                                                   | string       | Page View |
            | user segment global | 003001                                                   | string       | Page View |
            | profile ID          | profileID                                                | regexp named | Page View |
            | user age            | age                                                      | regexp named | Page View |
            | custom fields       | invest mi perfil:conservador                             | string       | Page View |

    @ANA_EVENT_IAP011
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Internal Link - Continue Or Re-Puncture Me
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the analytics interceptor service is initiated
        When the user only accepts the assigned profile
        Then the analytics events contains the following variables
            | item                | value                                                    | type         | event         |
            | analytics           | analytics/glomo_base                                     | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                             | string       | Internal Link |
            | page name           | app:privada:personas:bbva invest perfilamiento:mi perfil | string       | Internal Link |
            | level 1             | bbva invest perfilamiento                                | string       | Internal Link |
            | level 2             | mi perfil                                                | string       | Internal Link |
            | link name           | continuar con este perfil                                | string       | Internal Link |
            | language            | ES                                                       | string       | Internal Link |
            | page area           | privada                                                  | string       | Internal Link |
            | page intent         | informacion                                              | string       | Internal Link |
            | channel             | online                                                   | string       | Internal Link |
            | page instance ID    | de                                                       | string       | Internal Link |
            | page info version   | appVersion                                               | regexp named | Internal Link |
            | page segment        | personas                                                 | string       | Internal Link |
            | sysEnv              | app                                                      | string       | Internal Link |
            | business unit       | BBVA Mexico                                              | string       | Internal Link |
            | site app name       | App BBVA Mexico                                          | string       | Internal Link |
            | project name        | Glomo                                                    | string       | Internal Link |
            | device mobile       | si                                                       | string       | Internal Link |
            | user userState      | logado                                                   | string       | Internal Link |
            | user segment global | 003001                                                   | string       | Internal Link |
            | profile ID          | profileID                                                | regexp named | Internal Link |
            | user age            | age                                                      | regexp named | Internal Link |
            | custom fields       | invest mi perfil:tradicional                             | string       | Internal Link |

    @ANA_EVENT_IAP012
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Personalized Proposal
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user accepts his profiling "conservative"
        Then the device contains the following variables
            | item                | value                                                                  | type         |
            | analytics           | analytics/glomo_base                                                   | json schema  |
            | version DL          | 20250414_5.0                                                           | string       |
            | page name           | app:privada:personas:bbva invest perfilamiento:propuesta personalizada | string       |
            | level 1             | bbva invest perfilamiento                                              | string       |
            | level 2             | propuesta personalizada                                                | string       |
            | language            | ES                                                                     | string       |
            | page area           | privada                                                                | string       |
            | page intent         | informacion                                                            | string       |
            | channel             | online                                                                 | string       |
            | page instance ID    | de                                                                     | string       |
            | page info version   | appVersion                                                             | regexp named |
            | page segment        | personas                                                               | string       |
            | sysEnv              | app                                                                    | string       |
            | business unit       | BBVA Mexico                                                            | string       |
            | site app name       | App BBVA Mexico                                                        | string       |
            | project name        | Glomo                                                                  | string       |
            | device mobile       | si                                                                     | string       |
            | user userState      | logado                                                                 | string       |
            | user segment global | 003001                                                                 | string       |
            | profile ID          | profileID                                                              | regexp named |
            | user age            | age                                                                    | regexp named |

    @ANA_EVENT_IAP013
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Investment Scenarios
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user accepts his profiling "conservative"
        And the analytics interceptor service is initiated
        When the user accesses to invest scenarios modal
        Then the analytics events contains the following variables
            | item                | value                                                                     | type         | event     |
            | analytics           | analytics/glomo_base                                                      | json schema  | Page View |
            | version DL          | 20250414_5.0                                                              | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:escenarios de la inversion | string       | Page View |
            | level 1             | bbva invest perfilamiento                                                 | string       | Page View |
            | level 2             | escenarios de la inversion                                                | string       | Page View |
            | language            | ES                                                                        | string       | Page View |
            | page area           | privada                                                                   | string       | Page View |
            | page intent         | informacion                                                               | string       | Page View |
            | channel             | online                                                                    | string       | Page View |
            | page instance ID    | de                                                                        | string       | Page View |
            | page info version   | appVersion                                                                | regexp named | Page View |
            | page segment        | personas                                                                  | string       | Page View |
            | sysEnv              | app                                                                       | string       | Page View |
            | business unit       | BBVA Mexico                                                               | string       | Page View |
            | site app name       | App BBVA Mexico                                                           | string       | Page View |
            | project name        | Glomo                                                                     | string       | Page View |
            | device mobile       | si                                                                        | string       | Page View |
            | user userState      | logado                                                                    | string       | Page View |
            | user segment global | 003001                                                                    | string       | Page View |
            | profile ID          | profileID                                                                 | regexp named | Page View |
            | user age            | age                                                                       | regexp named | Page View |

    @ANA_EVENT_IAP014
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Capital Preservation
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user accepts his profiling "conservative"
        And the analytics interceptor service is initiated
        When the user accesses the details of the "capital preservation" strategy
        Then the analytics events contains the following variables
            | item                | value                                                                  | type         | event     |
            | analytics           | analytics/glomo_base                                                   | json schema  | Page View |
            | version DL          | 20250414_5.0                                                           | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:preservacion de capital | string       | Page View |
            | level 1             | bbva invest perfilamiento                                              | string       | Page View |
            | level 2             | preservacion de capital                                                | string       | Page View |
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

    @ANA_EVENT_IAP015
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Flow Generation
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user accepts his profiling "conservative"
        And the analytics interceptor service is initiated
        When the user accesses the details of the "flow generation" strategy
        Then the analytics events contains the following variables
            | item                | value                                                              | type         | event     |
            | analytics           | analytics/glomo_base                                               | json schema  | Page View |
            | version DL          | 20250414_5.0                                                       | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:generacion de flujo | string       | Page View |
            | level 1             | bbva invest perfilamiento                                          | string       | Page View |
            | level 2             | generacion de flujo                                                | string       | Page View |
            | language            | ES                                                                 | string       | Page View |
            | page area           | privada                                                            | string       | Page View |
            | page intent         | informacion                                                        | string       | Page View |
            | channel             | online                                                             | string       | Page View |
            | page instance ID    | de                                                                 | string       | Page View |
            | page info version   | appVersion                                                         | regexp named | Page View |
            | page segment        | personas                                                           | string       | Page View |
            | sysEnv              | app                                                                | string       | Page View |
            | business unit       | BBVA Mexico                                                        | string       | Page View |
            | site app name       | App BBVA Mexico                                                    | string       | Page View |
            | project name        | Glomo                                                              | string       | Page View |
            | device mobile       | si                                                                 | string       | Page View |
            | user userState      | logado                                                             | string       | Page View |
            | user segment global | 003001                                                             | string       | Page View |
            | profile ID          | profileID                                                          | regexp named | Page View |
            | user age            | age                                                                | regexp named | Page View |

    @ANA_EVENT_IAP016
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Capital Growth
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user accepts his profiling "conservative"
        And the analytics interceptor service is initiated
        When the user accesses the details of the "capital growth" strategy
        Then the analytics events contains the following variables
            | item                | value                                                                 | type         | event     |
            | analytics           | analytics/glomo_base                                                  | json schema  | Page View |
            | version DL          | 20250414_5.0                                                          | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:crecimiento de capital | string       | Page View |
            | level 1             | bbva invest perfilamiento                                             | string       | Page View |
            | level 2             | crecimiento de capital                                                | string       | Page View |
            | language            | ES                                                                    | string       | Page View |
            | page area           | privada                                                               | string       | Page View |
            | page intent         | informacion                                                           | string       | Page View |
            | channel             | online                                                                | string       | Page View |
            | page instance ID    | de                                                                    | string       | Page View |
            | page info version   | appVersion                                                            | regexp named | Page View |
            | page segment        | personas                                                              | string       | Page View |
            | sysEnv              | app                                                                   | string       | Page View |
            | business unit       | BBVA Mexico                                                           | string       | Page View |
            | site app name       | App BBVA Mexico                                                       | string       | Page View |
            | project name        | Glomo                                                                 | string       | Page View |
            | device mobile       | si                                                                    | string       | Page View |
            | user userState      | logado                                                                | string       | Page View |
            | user segment global | 003001                                                                | string       | Page View |
            | profile ID          | profileID                                                             | regexp named | Page View |
            | user age            | age                                                                   | regexp named | Page View |

    @ANA_EVENT_IAP017
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Liquidity
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user accepts his profiling "traditional"
        And the analytics interceptor service is initiated
        When the user accesses the details of the "liquidity" strategy
        Then the analytics events contains the following variables
            | item                | value                                                   | type         | event     |
            | analytics           | analytics/glomo_base                                    | json schema  | Page View |
            | version DL          | 20250414_5.0                                            | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:liquidez | string       | Page View |
            | level 1             | bbva invest perfilamiento                               | string       | Page View |
            | level 2             | liquidez                                                | string       | Page View |
            | language            | ES                                                      | string       | Page View |
            | page area           | privada                                                 | string       | Page View |
            | page intent         | informacion                                             | string       | Page View |
            | channel             | online                                                  | string       | Page View |
            | page instance ID    | de                                                      | string       | Page View |
            | page info version   | appVersion                                              | regexp named | Page View |
            | page segment        | personas                                                | string       | Page View |
            | sysEnv              | app                                                     | string       | Page View |
            | business unit       | BBVA Mexico                                             | string       | Page View |
            | site app name       | App BBVA Mexico                                         | string       | Page View |
            | project name        | Glomo                                                   | string       | Page View |
            | device mobile       | si                                                      | string       | Page View |
            | user userState      | logado                                                  | string       | Page View |
            | user segment global | 003001                                                  | string       | Page View |
            | profile ID          | profileID                                               | regexp named | Page View |
            | user age            | age                                                     | regexp named | Page View |

    @ANA_EVENT_IAP018
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Error Operation Not Available
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user selects payment plan offer "invest advisory not available"
        Then the analytics events contains the following variables
            | item                | value                                                                        | type         | event     |
            | analytics           | analytics/glomo_base                                                         | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                 | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:error operacion no disponible | string       | Page View |
            | level 1             | bbva invest perfilamiento                                                    | string       | Page View |
            | level 2             | error operacion no disponible                                                | string       | Page View |
            | language            | ES                                                                           | string       | Page View |
            | page area           | privada                                                                      | string       | Page View |
            | page intent         | informacion                                                                  | string       | Page View |
            | channel             | online                                                                       | string       | Page View |
            | page instance ID    | de                                                                           | string       | Page View |
            | page info version   | appVersion                                                                   | regexp named | Page View |
            | page segment        | personas                                                                     | string       | Page View |
            | sysEnv              | app                                                                          | string       | Page View |
            | business unit       | BBVA Mexico                                                                  | string       | Page View |
            | site app name       | App BBVA Mexico                                                              | string       | Page View |
            | project name        | Glomo                                                                        | string       | Page View |
            | device mobile       | si                                                                           | string       | Page View |
            | user userState      | logado                                                                       | string       | Page View |
            | user segment global | 003001                                                                       | string       | Page View |
            | profile ID          | profileID                                                                    | regexp named | Page View |
            | user age            | age                                                                          | regexp named | Page View |
            | error page          | error operacion no disponible                                                | string       | Page View |

    @ANA_EVENT_IAP019
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Account Update Error
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user selects payment plan offer "invest advisory not available"
        Then the analytics events contains the following variables
            | item                | value                                                                  | type         | event     |
            | analytics           | analytics/glomo_base                                                   | json schema  | Page View |
            | version DL          | 20250414_5.0                                                           | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:error actualizar cuenta | string       | Page View |
            | level 1             | bbva invest perfilamiento                                              | string       | Page View |
            | level 2             | error actualizar cuenta                                                | string       | Page View |
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
            | error page          | error actualizar cuenta                                                | string       | Page View |

    @ANA_EVENT_IAP020
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    @no-spherica
    Scenario: Page View - Error Assigning Beneficiaries
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user selects payment plan offer "invest advisory not available"
        Then the analytics events contains the following variables
            | item                | value                                                                      | type         | event     |
            | analytics           | analytics/glomo_base                                                       | json schema  | Page View |
            | version DL          | 20250414_5.0                                                               | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:error asignar beneficiarios | string       | Page View |
            | level 1             | bbva invest perfilamiento                                                  | string       | Page View |
            | level 2             | error asignar beneficiarios                                                | string       | Page View |
            | language            | ES                                                                         | string       | Page View |
            | page area           | privada                                                                    | string       | Page View |
            | page intent         | informacion                                                                | string       | Page View |
            | channel             | online                                                                     | string       | Page View |
            | page instance ID    | de                                                                         | string       | Page View |
            | page info version   | appVersion                                                                 | regexp named | Page View |
            | page segment        | personas                                                                   | string       | Page View |
            | sysEnv              | app                                                                        | string       | Page View |
            | business unit       | BBVA Mexico                                                                | string       | Page View |
            | site app name       | App BBVA Mexico                                                            | string       | Page View |
            | project name        | Glomo                                                                      | string       | Page View |
            | device mobile       | si                                                                         | string       | Page View |
            | user userState      | logado                                                                     | string       | Page View |
            | user segment global | 003001                                                                     | string       | Page View |
            | profile ID          | profileID                                                                  | regexp named | Page View |
            | user age            | age                                                                        | regexp named | Page View |
            | error page          | error asignar beneficiarios                                                | string       | Page View |

    @ANA_EVENT_IAP021
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    @no-spherica
    Scenario: Page View - Error Complete Percentage of Beneficiaries
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user selects payment plan offer "invest advisory not available"
        Then the analytics events contains the following variables
            | item                | value                                                                                      | type         | event     |
            | analytics           | analytics/glomo_base                                                                       | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                               | string       | Page View |
            | page name           | app:privada:personas:bbva invest perfilamiento:error completar porcentaje de beneficiarios | string       | Page View |
            | level 1             | bbva invest perfilamiento                                                                  | string       | Page View |
            | level 2             | error completar porcentaje de beneficiarios                                                | string       | Page View |
            | language            | ES                                                                                         | string       | Page View |
            | page area           | privada                                                                                    | string       | Page View |
            | page intent         | informacion                                                                                | string       | Page View |
            | channel             | online                                                                                     | string       | Page View |
            | page instance ID    | de                                                                                         | string       | Page View |
            | page info version   | appVersion                                                                                 | regexp named | Page View |
            | page segment        | personas                                                                                   | string       | Page View |
            | sysEnv              | app                                                                                        | string       | Page View |
            | business unit       | BBVA Mexico                                                                                | string       | Page View |
            | site app name       | App BBVA Mexico                                                                            | string       | Page View |
            | project name        | Glomo                                                                                      | string       | Page View |
            | device mobile       | si                                                                                         | string       | Page View |
            | user userState      | logado                                                                                     | string       | Page View |
            | user segment global | 003001                                                                                     | string       | Page View |
            | profile ID          | profileID                                                                                  | regexp named | Page View |
            | user age            | age                                                                                        | regexp named | Page View |
            | error page          | error completar porcentaje de beneficiarios                                                | string       | Page View |

    @ANA_EVENT_IAP022
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Page View - Modify amount to invest
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user tries to invest as little as posible
        And the analytics interceptor service is initiated
        When the user only accepts the assigned profile
        Then the analytics events contains the following variables
            | item                | value                                                                               | type         | event     | event number |
            | analytics           | analytics/glomo_base                                                                | json schema  | Page View | 1            |
            | version DL          | 20250414_5.0                                                                        | string       | Page View | 1            |
            | page name           | app:privada:personas:bbva invest perfilamiento:mi perfil:modificar monto a invertir | string       | Page View | 1            |
            | level 1             | bbva invest perfilamiento                                                           | string       | Page View | 1            |
            | level 2             | mi perfil                                                                           | string       | Page View | 1            |
            | level 3             | modificar monto a invertir                                                          | string       | Page View | 1            |
            | language            | ES                                                                                  | string       | Page View | 1            |
            | page area           | privada                                                                             | string       | Page View | 1            |
            | page intent         | informacion                                                                         | string       | Page View | 1            |
            | channel             | online                                                                              | string       | Page View | 1            |
            | page instance ID    | de                                                                                  | string       | Page View | 1            |
            | page info version   | appVersion                                                                          | regexp named | Page View | 1            |
            | page segment        | personas                                                                            | string       | Page View | 1            |
            | sysEnv              | app                                                                                 | string       | Page View | 1            |
            | business unit       | BBVA Mexico                                                                         | string       | Page View | 1            |
            | site app name       | App BBVA Mexico                                                                     | string       | Page View | 1            |
            | project name        | Glomo                                                                               | string       | Page View | 1            |
            | device mobile       | si                                                                                  | string       | Page View | 1            |
            | user userState      | logado                                                                              | string       | Page View | 1            |
            | user segment global | 003001                                                                              | string       | Page View | 1            |
            | profile ID          | profileID                                                                           | regexp named | Page View | 1            |
            | user age            | age                                                                                 | regexp named | Page View | 1            |
            | user gender         | gender                                                                              | regexp named | Page View | 1            |
            | custom fields       | invest mi perfil:tradicional                                                        | string       | Page View | 1            |

    @ANA_EVENT_IAP023
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Custom tag - select blue in profiling
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the analytics interceptor service is initiated
        When the user starts his profiling and accesses to blue
        Then the analytics events contains the following variables
            | item                    | value                     | type         | event         |
            | analytics               | analytics/glomo_base      | json schema  | Internal Link |
            | version DL              | 20250414_5.0              | string       | Internal Link |
            | link name               | icono hablar con blue     | string       | Internal Link |
            | level 1                 | bbva invest perfilamiento | string       | Internal Link |
            | level 2                 | propuesta personalizada   | string       | Internal Link |
            | language                | ES                        | string       | Internal Link |
            | page area               | privada                   | string       | Internal Link |
            | page intent             | informacion               | string       | Internal Link |
            | channel                 | online                    | string       | Internal Link |
            | page instance ID        | de                        | string       | Internal Link |
            | page info version       | appVersion                | regexp named | Internal Link |
            | page segment            | personas                  | string       | Internal Link |
            | sysEnv                  | app                       | string       | Internal Link |
            | business unit           | BBVA Mexico               | string       | Internal Link |
            | site app name           | App BBVA Mexico           | string       | Internal Link |
            | project name            | Glomo                     | string       | Internal Link |
            | device mobile           | si                        | string       | Internal Link |
            | user userState          | logado                    | string       | Internal Link |
            | user segment global     | 003001                    | string       | Internal Link |
            | profile ID              | profileID                 | regexp named | Internal Link |
            | user age                | age                       | regexp named | Internal Link |

    @ANA_EVENT_IAP024
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Custom tag - complete profiling and selects CMB in summary
        Given a user with the following criteria
            | criteria                           |
            | invest advisory portfolio proposal |
        And the user selects payment plan offer "invest advisory"
        And the analytics interceptor service is initiated
        When the user ends questionnaire and selects callme back
        Then the analytics events contains the following variables
            | item                    | value                     | type         | event         |event number |
            | analytics               | analytics/glomo_base      | json schema  | Internal Link | 7           |
            | version DL              | 20250414_5.0              | string       | Internal Link | 7           |
            | link name               | sticky call me back       | string       | Internal Link | 7           |
            | level 1                 | bbva invest perfilamiento | string       | Internal Link | 7           |
            | level 2                 | finalizado                | string       | Internal Link | 7           |
            | language                | ES                        | string       | Internal Link | 7           |
            | page area               | privada                   | string       | Internal Link | 7           |
            | page intent             | informacion               | string       | Internal Link | 7           |
            | channel                 | online                    | string       | Internal Link | 7           |
            | page instance ID        | de                        | string       | Internal Link | 7           |
            | page info version       | appVersion                | regexp named | Internal Link | 7           |
            | page segment            | personas                  | string       | Internal Link | 7           |
            | sysEnv                  | app                       | string       | Internal Link | 7           |
            | business unit           | BBVA Mexico               | string       | Internal Link | 7           |
            | site app name           | App BBVA Mexico           | string       | Internal Link | 7           |
            | project name            | Glomo                     | string       | Internal Link | 7           |
            | device mobile           | si                        | string       | Internal Link | 7           |
            | user userState          | logado                    | string       | Internal Link | 7           |
            | user segment global     | 003001                    | string       | Internal Link | 7           |
            | profile ID              | profileID                 | regexp named | Internal Link | 7           |
            | user age                | age                       | regexp named | Internal Link | 7           |

    @ANA_EVENT_IAP0025
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Internal Link - Percentage for Investment
        Given a user with the following criteria
            | criteria                            |
            | invest advisory portfolio analytics |
        And the user selects payment plan offer "invest advisory"
        And the user fills out profiling questionnaire up to the "investment percentage" step
        And the analytics interceptor service is initiated
        When the user fills out profiling questionnaire the "investment expectations" step
        Then the analytics events contains the following variables
            | item                | value                                                                    | type         | event     |
            | analytics           | analytics/glomo_base                                                     | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                                             | string       | Internal Link |
            | page name           | app:privada:personas:bbva invest perfilamiento:porcentaje para inversion | string       | Internal Link |
            | level 1             | bbva invest perfilamiento                                                | string       | Internal Link |
            | level 2             | porcentaje para inversion                                                | string       | Internal Link |
            | language            | ES                                                                       | string       | Internal Link |
            | page area           | privada                                                                  | string       | Internal Link |
            | page intent         | informacion                                                              | string       | Internal Link |
            | channel             | online                                                                   | string       | Internal Link |
            | page instance ID    | de                                                                       | string       | Internal Link |
            | page info version   | appVersion                                                               | regexp named | Internal Link |
            | page segment        | personas                                                                 | string       | Internal Link |
            | sysEnv              | app                                                                      | string       | Internal Link |
            | business unit       | BBVA Mexico                                                              | string       | Internal Link |
            | site app name       | App BBVA Mexico                                                          | string       | Internal Link |
            | project name        | Glomo                                                                    | string       | Internal Link |
            | device mobile       | si                                                                       | string       | Internal Link |
            | user userState      | logado                                                                   | string       | Internal Link |
            | user segment global | 003001                                                                   | string       | Internal Link |
            | profile ID          | profileID                                                                | regexp named | Internal Link |
            | user age            | age                                                                      | regexp named | Internal Link |
            | custom fields       | respuestas perfilamiento:p4-r1                                           | string       | Internal Link |
            | link name           | continuar                                                                | string       | Internal Link |

    @ANA_EVENT_IAP0026
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Internal Link - investment expectations
        Given a user with the following criteria
            | criteria                            |
            | invest advisory portfolio analytics |
        And the user selects payment plan offer "invest advisory"
        And the user fills out profiling questionnaire up to the "investment expectations" step
        And the analytics interceptor service is initiated
        When the user fills out profiling questionnaire the "performance" step
        Then the analytics events contains the following variables
            | item                | value                                                                       | type         | event         |
            | analytics           | analytics/glomo_base                                                        | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                                                | string       | Internal Link |
            | page name           | app:privada:personas:bbva invest perfilamiento:expectativas de la inversion | string       | Internal Link |
            | level 1             | bbva invest perfilamiento                                                   | string       | Internal Link |
            | level 2             | expectativas de la inversion                                                | string       | Internal Link |
            | language            | ES                                                                          | string       | Internal Link |
            | page area           | privada                                                                     | string       | Internal Link |
            | page intent         | informacion                                                                 | string       | Internal Link |
            | channel             | online                                                                      | string       | Internal Link |
            | page instance ID    | de                                                                          | string       | Internal Link |
            | page info version   | appVersion                                                                  | regexp named | Internal Link |
            | page segment        | personas                                                                    | string       | Internal Link |
            | sysEnv              | app                                                                         | string       | Internal Link |
            | business unit       | BBVA Mexico                                                                 | string       | Internal Link |
            | site app name       | App BBVA Mexico                                                             | string       | Internal Link |
            | project name        | Glomo                                                                       | string       | Internal Link |
            | device mobile       | si                                                                          | string       | Internal Link |
            | user userState      | logado                                                                      | string       | Internal Link |
            | user segment global | 003001                                                                      | string       | Internal Link |
            | profile ID          | profileID                                                                   | regexp named | Internal Link |
            | user age            | age                                                                         | regexp named | Internal Link |
            | custom fields       | respuestas perfilamiento:p5-r2                                              | string       | Internal Link |
            | link name           | continuar                                                                   | string       | Internal Link |

    @ANA_EVENT_IAP0027
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Internal Link - investment performance
        Given a user with the following criteria
            | criteria                            |
            | invest advisory portfolio analytics |
        And the user selects payment plan offer "invest advisory"
        And the user fills out profiling questionnaire up to the "performance" step
        And the analytics interceptor service is initiated
        When the user fills out profiling questionnaire the "lost attitude" step
        Then the analytics events contains the following variables
            | item                | value                                                                       | type         | event         |
            | analytics           | analytics/glomo_base                                                        | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                                                | string       | Internal Link |
            | page name           | app:privada:personas:bbva invest perfilamiento:rendimiento                  | string       | Internal Link |
            | level 1             | bbva invest perfilamiento                                                   | string       | Internal Link |
            | level 2             | rendimiento                                                                 | string       | Internal Link |
            | language            | ES                                                                          | string       | Internal Link |
            | page area           | privada                                                                     | string       | Internal Link |
            | page intent         | informacion                                                                 | string       | Internal Link |
            | channel             | online                                                                      | string       | Internal Link |
            | page instance ID    | de                                                                          | string       | Internal Link |
            | page info version   | appVersion                                                                  | regexp named | Internal Link |
            | page segment        | personas                                                                    | string       | Internal Link |
            | sysEnv              | app                                                                         | string       | Internal Link |
            | business unit       | BBVA Mexico                                                                 | string       | Internal Link |
            | site app name       | App BBVA Mexico                                                             | string       | Internal Link |
            | project name        | Glomo                                                                       | string       | Internal Link |
            | device mobile       | si                                                                          | string       | Internal Link |
            | user userState      | logado                                                                      | string       | Internal Link |
            | user segment global | 003001                                                                      | string       | Internal Link |
            | profile ID          | profileID                                                                   | regexp named | Internal Link |
            | user age            | age                                                                         | regexp named | Internal Link |
            | custom fields       | respuestas perfilamiento:p6-r2                                              | string       | Internal Link |
            | link name           | continuar                                                                   | string       | Internal Link |

    @ANA_EVENT_IAP0028
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Internal Link - Attitude Towards Loss
        Given a user with the following criteria
            | criteria                            |
            | invest advisory portfolio analytics |
        And the user selects payment plan offer "invest advisory"
        And the user fills out profiling questionnaire up to the "lost attitude" step
        And the analytics interceptor service is initiated
        When the user "completes" profiling questionnaire
        Then the analytics events contains the following variables
            | item                | value                                                                    | type         | event         |
            | analytics           | analytics/glomo_base                                                     | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                                             | string       | Internal Link |
            | page name           | app:privada:personas:bbva invest perfilamiento:actitud ante la perdida   | string       | Internal Link |
            | level 1             | bbva invest perfilamiento                                                | string       | Internal Link |
            | level 2             | actitud ante la perdida                                                  | string       | Internal Link |
            | language            | ES                                                                       | string       | Internal Link |
            | page area           | privada                                                                  | string       | Internal Link |
            | page intent         | informacion                                                              | string       | Internal Link |
            | channel             | online                                                                   | string       | Internal Link |
            | page instance ID    | de                                                                       | string       | Internal Link |
            | page info version   | appVersion                                                               | regexp named | Internal Link |
            | page segment        | personas                                                                 | string       | Internal Link |
            | sysEnv              | app                                                                      | string       | Internal Link |
            | business unit       | BBVA Mexico                                                              | string       | Internal Link |
            | site app name       | App BBVA Mexico                                                          | string       | Internal Link |
            | project name        | Glomo                                                                    | string       | Internal Link |
            | device mobile       | si                                                                       | string       | Internal Link |
            | user userState      | logado                                                                   | string       | Internal Link |
            | user segment global | 003001                                                                   | string       | Internal Link |
            | profile ID          | profileID                                                                | regexp named | Internal Link |
            | user age            | age                                                                      | regexp named | Internal Link |
            | custom fields       | respuestas perfilamiento:p7-r2                                           | string       | Internal Link |
            | link name           | continuar                                                                | string       | Internal Link |

    @ANA_EVENT_IAP0029
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Internal Link - Attitude Towards Loss step
        Given a user with the following criteria
            | criteria                            |
            | invest advisory portfolio analytics |
        And the user selects payment plan offer "invest advisory"
        And the user fills out profiling questionnaire up to the "lost attitude" step
        And the analytics interceptor service is initiated
        When the user "completes" profiling questionnaire
        Then the analytics events contains the following variables
            | item                | value                                                                    | type         | event         |
            | analytics           | analytics/glomo_base                                                     | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                                             | string       | Internal Link |
            | page name           | app:privada:personas:bbva invest perfilamiento:actitud ante la perdida   | string       | Internal Link |
            | level 1             | bbva invest perfilamiento                                                | string       | Internal Link |
            | level 2             | actitud ante la perdida                                                  | string       | Internal Link |
            | language            | ES                                                                       | string       | Internal Link |
            | page area           | privada                                                                  | string       | Internal Link |
            | page intent         | informacion                                                              | string       | Internal Link |
            | channel             | online                                                                   | string       | Internal Link |
            | page instance ID    | de                                                                       | string       | Internal Link |
            | page info version   | appVersion                                                               | regexp named | Internal Link |
            | page segment        | personas                                                                 | string       | Internal Link |
            | sysEnv              | app                                                                      | string       | Internal Link |
            | business unit       | BBVA Mexico                                                              | string       | Internal Link |
            | site app name       | App BBVA Mexico                                                          | string       | Internal Link |
            | project name        | Glomo                                                                    | string       | Internal Link |
            | device mobile       | si                                                                       | string       | Internal Link |
            | user userState      | logado                                                                   | string       | Internal Link |
            | user segment global | 003001                                                                   | string       | Internal Link |
            | profile ID          | profileID                                                                | regexp named | Internal Link |
            | user age            | age                                                                      | regexp named | Internal Link |
            | custom fields       | respuestas perfilamiento:p7-r2                                           | string       | Internal Link |
            | link name           | continuar                                                                | string       | Internal Link |

    @ANA_EVENT_IAP0030
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Internal Link - Personalized Proposal PDF
        Given a user with the following criteria
            | criteria                            |
            | invest advisory portfolio analytics |
        And the user selects payment plan offer "invest advisory"
        And the analytics interceptor service is initiated
        And the user accepts his profiling "conservative"
        When the user reviews the pdf guide
        Then the analytics events contains the following variables
            | item                | value                                                                    | type         | event         |
            | analytics           | analytics/glomo_base                                                     | json schema  | External Link |
            | version DL          | 20250414_5.0                                                             | string       | External Link |
            | page name           | app:privada:personas:bbva invest perfilamiento:propuesta personalizada   | string       | External Link |
            | level 1             | bbva invest perfilamiento                                                | string       | External Link |
            | level 2             | propuesta personalizada                                                  | string       | External Link |
            | language            | ES                                                                       | string       | External Link |
            | page area           | privada                                                                  | string       | External Link |
            | page intent         | informacion                                                              | string       | External Link |
            | channel             | online                                                                   | string       | External Link |
            | page instance ID    | de                                                                       | string       | External Link |
            | page info version   | appVersion                                                               | regexp named | External Link |
            | page segment        | personas                                                                 | string       | External Link |
            | sysEnv              | app                                                                      | string       | External Link |
            | business unit       | BBVA Mexico                                                              | string       | External Link |
            | site app name       | App BBVA Mexico                                                          | string       | External Link |
            | project name        | Glomo                                                                    | string       | External Link |
            | device mobile       | si                                                                       | string       | External Link |
            | user userState      | logado                                                                   | string       | External Link |
            | user segment global | 003001                                                                   | string       | External Link |
            | profile ID          | profileID                                                                | regexp named | External Link |
            | user age            | age                                                                      | regexp named | External Link |
            | link url            | guia_de_servicios_de_inversion.pdf                                       | string       | External Link |

    @ANA_EVENT_IAP0031
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Internal Link - Personalized Proposal share
        Given a user with the following criteria
            | criteria                            |
            | invest advisory portfolio analytics |
        And the user selects payment plan offer "invest advisory"
        And the analytics interceptor service is initiated
        And the user accepts his profiling "conservative"
        When the user shares the personalized proposal
        Then the analytics events contains the following variables
            | item                | value                                                                    | type         | event         |
            | analytics           | analytics/glomo_base                                                     | json schema  | External Link |
            | version DL          | 20250414_5.0                                                             | string       | External Link |
            | page name           | app:privada:personas:bbva invest perfilamiento:propuesta personalizada   | string       | External Link |
            | level 1             | bbva invest perfilamiento                                                | string       | External Link |
            | level 2             | propuesta personalizada                                                  | string       | External Link |
            | language            | ES                                                                       | string       | External Link |
            | page area           | privada                                                                  | string       | External Link |
            | page intent         | informacion                                                              | string       | External Link |
            | channel             | online                                                                   | string       | External Link |
            | page instance ID    | de                                                                       | string       | External Link |
            | page info version   | appVersion                                                               | regexp named | External Link |
            | page segment        | personas                                                                 | string       | External Link |
            | sysEnv              | app                                                                      | string       | External Link |
            | business unit       | BBVA Mexico                                                              | string       | External Link |
            | site app name       | App BBVA Mexico                                                          | string       | External Link |
            | project name        | Glomo                                                                    | string       | External Link |
            | device mobile       | si                                                                       | string       | External Link |
            | user userState      | logado                                                                   | string       | External Link |
            | user segment global | 003001                                                                   | string       | External Link |
            | profile ID          | profileID                                                                | regexp named | External Link |
            | user age            | age                                                                      | regexp named | External Link |
            | link url            | compartir propuesta personalizada                                        | string       | External Link |

    @ANA_EVENT_IAP0032
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Internal Link - Personalized Proposal edit Amount
        Given a user with the following criteria
            | criteria                            |
            | invest advisory portfolio analytics |
        And the user selects payment plan offer "invest advisory"
        And the user accepts his profiling "conservative"
        And the analytics interceptor service is initiated
        When the user selects edit amount icon
        Then the analytics events contains the following variables
            | item                | value                                                                    | type         | event         |
            | analytics           | analytics/glomo_base                                                     | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                                             | string       | Internal Link |
            | page name           | app:privada:personas:bbva invest perfilamiento:propuesta personalizada   | string       | Internal Link |
            | level 1             | bbva invest perfilamiento                                                | string       | Internal Link |
            | level 2             | propuesta personalizada                                                  | string       | Internal Link |
            | language            | ES                                                                       | string       | Internal Link |
            | page area           | privada                                                                  | string       | Internal Link |
            | page intent         | informacion                                                              | string       | Internal Link |
            | channel             | online                                                                   | string       | Internal Link |
            | page instance ID    | de                                                                       | string       | Internal Link |
            | page info version   | appVersion                                                               | regexp named | Internal Link |
            | page segment        | personas                                                                 | string       | Internal Link |
            | sysEnv              | app                                                                      | string       | Internal Link |
            | business unit       | BBVA Mexico                                                              | string       | Internal Link |
            | site app name       | App BBVA Mexico                                                          | string       | Internal Link |
            | project name        | Glomo                                                                    | string       | Internal Link |
            | device mobile       | si                                                                       | string       | Internal Link |
            | user userState      | logado                                                                   | string       | Internal Link |
            | user segment global | 003001                                                                   | string       | Internal Link |
            | profile ID          | profileID                                                                | regexp named | Internal Link |
            | user age            | age                                                                      | regexp named | Internal Link |
            | link name           | editar monto a invertir                                                  | string       | Internal Link |

    @ANA_EVENT_IAP0033
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Internal Link - Experience
        Given a user with the following criteria
            | criteria                            |
            | invest advisory portfolio analytics |
        And the user selects payment plan offer "invest advisory"
        And the user fills out profiling questionnaire up to the "experience" step
        And the analytics interceptor service is initiated
        When the user fills out profiling questionnaire the "initial amount" step
        Then the analytics events contains the following variables
            | item                | value                                                      | type         | event     |
            | analytics           | analytics/glomo_base                                       | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                               | string       | Internal Link |
            | page name           | app:privada:personas:bbva invest perfilamiento:experiencia | string       | Internal Link |
            | level 1             | bbva invest perfilamiento                                  | string       | Internal Link |
            | level 2             | experiencia                                                | string       | Internal Link |
            | language            | ES                                                         | string       | Internal Link |
            | page area           | privada                                                    | string       | Internal Link |
            | page intent         | informacion                                                | string       | Internal Link |
            | channel             | online                                                     | string       | Internal Link |
            | page instance ID    | de                                                         | string       | Internal Link |
            | page info version   | appVersion                                                 | regexp named | Internal Link |
            | page segment        | personas                                                   | string       | Internal Link |
            | sysEnv              | app                                                        | string       | Internal Link |
            | business unit       | BBVA Mexico                                                | string       | Internal Link |
            | site app name       | App BBVA Mexico                                            | string       | Internal Link |
            | project name        | Glomo                                                      | string       | Internal Link |
            | device mobile       | si                                                         | string       | Internal Link |
            | user userState      | logado                                                     | string       | Internal Link |
            | user segment global | 003001                                                     | string       | Internal Link |
            | profile ID          | profileID                                                  | regexp named | Internal Link |
            | user age            | age                                                        | regexp named | Internal Link |
            | custom fields       | respuestas perfilamiento:p1-r2                             | string       | Internal Link |
            | link name           | continuar                                                  | string       | Internal Link |

    @ANA_EVENT_IAP0034
    @analytics
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Internal Link - Investment term
        Given a user with the following criteria
            | criteria                            |
            | invest advisory portfolio analytics |
        And the user selects payment plan offer "invest advisory"
        And the user fills out profiling questionnaire up to the "investment term" step
        And the analytics interceptor service is initiated
        When the user fills out profiling questionnaire the "investment percentage" step
        Then the analytics events contains the following variables
            | item                | value                                                                | type         | event     |
            | analytics           | analytics/glomo_base                                                 | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                                         | string       | Internal Link |
            | page name           | app:privada:personas:bbva invest perfilamiento:plazo de la inversion | string       | Internal Link |
            | level 1             | bbva invest perfilamiento                                            | string       | Internal Link |
            | level 2             | plazo de la inversion                                                | string       | Internal Link |
            | language            | ES                                                                   | string       | Internal Link |
            | page area           | privada                                                              | string       | Internal Link |
            | page intent         | informacion                                                          | string       | Internal Link |
            | channel             | online                                                               | string       | Internal Link |
            | page instance ID    | de                                                                   | string       | Internal Link |
            | page info version   | appVersion                                                           | regexp named | Internal Link |
            | page segment        | personas                                                             | string       | Internal Link |
            | sysEnv              | app                                                                  | string       | Internal Link |
            | business unit       | BBVA Mexico                                                          | string       | Internal Link |
            | site app name       | App BBVA Mexico                                                      | string       | Internal Link |
            | project name        | Glomo                                                                | string       | Internal Link |
            | device mobile       | si                                                                   | string       | Internal Link |
            | user userState      | logado                                                               | string       | Internal Link |
            | user segment global | 003001                                                               | string       | Internal Link |
            | profile ID          | profileID                                                            | regexp named | Internal Link |
            | user age            | age                                                                  | regexp named | Internal Link |
            | custom fields       | respuestas perfilamiento:p3-r2                                       | string       | Internal Link |
            | link name           | continuar                                                            | string       | Internal Link |
