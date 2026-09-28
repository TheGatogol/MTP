@investmentsFollowUpAnalytics
Feature: Analytics - My Investments

    @ANA_MI001
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Access to my investments dashboard value tab - Analytics events Internal Link and Page View
        Given a user with the following criteria
            | criteria              |
            | user with investments |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses My Investments dashboard "without onboarding"
        Then the analytics events contains the following variables
            | item                    | value           | type             | event     | event number |
            | version dl              | 20250414_5.0    | string           | Page View | 1            |
            | level 1                 | inversiones     | string           | Page View | 1            |
            | level 2                 | dashboard valor | string           | Page View | 1            |
            | language                | ES              | string           | Page View | 1            |
            | page area               | privada         | string           | Page View | 1            |
            | page intent             | informacion     | string           | Page View | 1            |
            | channel                 | online          | string           | Page View | 1            |
            | page instance ID        | de              | string           | Page View | 1            |
            | page info version       | appVersion      | regexp named     | Page View | 1            |
            | page segment            | personas        | string           | Page View | 1            |
            | sysEnv                  | app             | string           | Page View | 1            |
            | business unit           | BBVA Mexico     | string           | Page View | 1            |
            | site app name           | App BBVA Mexico | string           | Page View | 1            |
            | project name            | Glomo           | string           | Page View | 1            |
            | device mobile           | si              | string           | Page View | 1            |
            | user segment global     | 003001          | string           | Page View | 1            |
            | internal campaign       |                 | empty array      | Page View | 1            |
            | optimization attributes |                 | empty array      | Page View | 1            |
            | application             |                 | empty str object | Page View | 1            |
            | products attributes     |                 | empty array      | Page View | 1            |

    @ANA_MI002
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Page view - My investments dashboard - Tab profitability
        Given a user with the following criteria
            | criteria              |
            | user with investments |
        And the user accesses My Investments dashboard "without onboarding"
        And the analytics interceptor service is initiated
        When the user selects data by "profitability"
        Then the analytics events contains the following variables
            | item                    | value                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                    | json schema      | Page View |
            | version dl              | 20250414_5.0                                            | string           | Page View |
            | page name               | app:privada:personas:inversiones:dashboard rentabilidad | string           | Page View |
            | level 1                 | inversiones                                             | string           | Page View |
            | level 2                 | dashboard rentabilidad                                  | string           | Page View |
            | language                | ES                                                      | string           | Page View |
            | page area               | privada                                                 | string           | Page View |
            | page intent             | informacion                                             | string           | Page View |
            | channel                 | online                                                  | string           | Page View |
            | page instance ID        | de                                                      | string           | Page View |
            | page info version       | appVersion                                              | regexp named     | Page View |
            | page segment            | personas                                                | string           | Page View |
            | sysEnv                  | app                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                         | string           | Page View |
            | project name            | Glomo                                                   | string           | Page View |
            | device mobile           | si                                                      | string           | Page View |
            | user userState          | logado                                                  | string           | Page View |
            | user segment global     | 003001                                                  | string           | Page View |
            | profile ID              | profileID                                               | regexp named     | Page View |
            | user gender             | gender                                                  | regexp named     | Page View |
            | internal campaign       |                                                         | empty array      | Page View |
            | optimization attributes |                                                         | empty array      | Page View |
            | application             |                                                         | empty str object | Page View |
            | products attributes     |                                                         | empty array      | Page View |

    @ANA_MI003
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Page view - My investments distribution - Tab products
        Given a user with the following criteria
            | criteria              |
            | user with investments |
        And the user accesses My Investments dashboard "without onboarding"
        And the analytics interceptor service is initiated
        When the user accesses My Investments distribution
        Then the analytics events contains the following variables
            | item                    | value                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                       | json schema      | Page View |
            | version dl              | 20250414_5.0                                               | string           | Page View |
            | page name               | app:privada:personas:inversiones:mas informacion productos | string           | Page View |
            | level 1                 | inversiones                                                | string           | Page View |
            | level 2                 | mas informacion productos                                  | string           | Page View |
            | language                | ES                                                         | string           | Page View |
            | page area               | privada                                                    | string           | Page View |
            | page intent             | informacion                                                | string           | Page View |
            | channel                 | online                                                     | string           | Page View |
            | page instance ID        | de                                                         | string           | Page View |
            | page info version       | appVersion                                                 | regexp named     | Page View |
            | page segment            | personas                                                   | string           | Page View |
            | sysEnv                  | app                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                            | string           | Page View |
            | project name            | Glomo                                                      | string           | Page View |
            | device mobile           | si                                                         | string           | Page View |
            | user userState          | logado                                                     | string           | Page View |
            | user segment global     | 003001                                                     | string           | Page View |
            | profile ID              | profileID                                                  | regexp named     | Page View |
            | user gender             | gender                                                     | regexp named     | Page View |
            | internal campaign       |                                                            | empty array      | Page View |
            | optimization attributes |                                                            | empty array      | Page View |
            | application             |                                                            | empty str object | Page View |
            | products attributes     |                                                            | empty array      | Page View |

    @ANA_MI004
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Page view - My investments distribution - Tab families
        Given a user with the following criteria
            | criteria              |
            | user with investments |
        And the user accesses My Investments dashboard "without onboarding"
        And the user accesses My Investments distribution
        And the analytics interceptor service is initiated
        When the user changes section to "families" and the list is shown
        Then the analytics events contains the following variables
            | item                    | value                                                     | type             | event     |
            | analytics               | analytics/glomo_base                                      | json schema      | Page View |
            | version dl              | 20250414_5.0                                              | string           | Page View |
            | page name               | app:privada:personas:inversiones:mas informacion familias | string           | Page View |
            | level 1                 | inversiones                                               | string           | Page View |
            | level 2                 | mas informacion familias                                  | string           | Page View |
            | language                | ES                                                        | string           | Page View |
            | page area               | privada                                                   | string           | Page View |
            | page intent             | informacion                                               | string           | Page View |
            | channel                 | online                                                    | string           | Page View |
            | page instance ID        | de                                                        | string           | Page View |
            | page info version       | appVersion                                                | regexp named     | Page View |
            | page segment            | personas                                                  | string           | Page View |
            | sysEnv                  | app                                                       | string           | Page View |
            | business unit           | BBVA Mexico                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                           | string           | Page View |
            | project name            | Glomo                                                     | string           | Page View |
            | device mobile           | si                                                        | string           | Page View |
            | user userState          | logado                                                    | string           | Page View |
            | user segment global     | 003001                                                    | string           | Page View |
            | profile ID              | profileID                                                 | regexp named     | Page View |
            | user gender             | gender                                                    | regexp named     | Page View |
            | internal campaign       |                                                           | empty array      | Page View |
            | optimization attributes |                                                           | empty array      | Page View |
            | application             |                                                           | empty str object | Page View |
            | products attributes     |                                                           | empty array      | Page View |

    @ANA_MI005
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Interaction link - My investments dashboard - Date selector
        Given a user with the following criteria
            | criteria              |
            | user with investments |
        And the user accesses My Investments dashboard "without onboarding"
        And the analytics interceptor service is initiated
        When the user selects period "one month"
        Then the analytics events contains the following variables
            | item                    | value                                            | type         | event            |
            | analytics               | analytics/glomo_base                             | json schema  | Interaction Link |
            | version dl              | 20250414_5.0                                     | string       | Interaction Link |
            | page name               | app:privada:personas:inversiones:dashboard valor | string       | Interaction Link |
            | level 1                 | inversiones                                      | string       | Interaction Link |
            | language                | ES                                               | string       | Interaction Link |
            | page area               | privada                                          | string       | Interaction Link |
            | page intent             | informacion                                      | string       | Interaction Link |
            | channel                 | online                                           | string       | Interaction Link |
            | page instance ID        | de                                               | string       | Interaction Link |
            | page info version       | appVersion                                       | regexp named | Interaction Link |
            | page segment            | personas                                         | string       | Interaction Link |
            | sysEnv                  | app                                              | string       | Interaction Link |
            | business unit           | BBVA Mexico                                      | string       | Interaction Link |
            | site app name           | App BBVA Mexico                                  | string       | Interaction Link |
            | project name            | Glomo                                            | string       | Interaction Link |
            | interaction level       | seleccion 1 mes                                  | string       | Interaction Link |
            | device mobile           | si                                               | string       | Interaction Link |
            | user userState          | logado                                           | string       | Interaction Link |
            | user segment global     | 003001                                           | string       | Interaction Link |
            | profile ID              | profileID                                        | regexp named | Interaction Link |
            | user gender             | gender                                           | regexp named | Interaction Link |
            | internal campaign       |                                                  | empty array  | Interaction Link |
            | optimization attributes |                                                  | empty array  | Interaction Link |
            | products attributes     |                                                  | empty array  | Interaction Link |

    @ANA_MI006
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Page view - My investments - FAQs
        Given a user with the following criteria
            | criteria              |
            | user with investments |
        And the user accesses to dashboard
        And the user accesses My Investments dashboard "without onboarding"
        And the analytics interceptor service is initiated
        When the user opens the FAQs
        Then the analytics events contains the following variables
            | item                    | value                                 | type             | event     |
            | analytics               | analytics/glomo_base                  | json schema      | Page View |
            | version dl              | 20250414_5.0                          | string           | Page View |
            | page name               | app:privada:personas:inversiones:faqs | string           | Page View |
            | level 1                 | inversiones                           | string           | Page View |
            | level 2                 | faqs                                  | string           | Page View |
            | language                | ES                                    | string           | Page View |
            | page area               | privada                               | string           | Page View |
            | page intent             | informacion                           | string           | Page View |
            | channel                 | online                                | string           | Page View |
            | page instance ID        | de                                    | string           | Page View |
            | page info version       | appVersion                            | regexp named     | Page View |
            | page segment            | personas                              | string           | Page View |
            | sysEnv                  | app                                   | string           | Page View |
            | business unit           | BBVA Mexico                           | string           | Page View |
            | site app name           | App BBVA Mexico                       | string           | Page View |
            | project name            | Glomo                                 | string           | Page View |
            | device mobile           | si                                    | string           | Page View |
            | user userState          | logado                                | string           | Page View |
            | user segment global     | 003001                                | string           | Page View |
            | profile ID              | profileID                             | regexp named     | Page View |
            | user gender             | gender                                | regexp named     | Page View |
            | internal campaign       |                                       | empty array      | Page View |
            | optimization attributes |                                       | empty array      | Page View |
            | application             |                                       | empty str object | Page View |
            | products attributes     |                                       | empty array      | Page View |

    @ANA_MI007
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Page view - My investments - FAQ detail
        Given a user with the following criteria
            | criteria              |
            | user with investments |
        And the user accesses My Investments dashboard "without onboarding"
        And the user opens the FAQs
        And the analytics interceptor service is initiated
        When the user opens the FAQ "faq1"
        Then the analytics events contains the following variables
            | item                    | value                                                                                                   | type             | event     |
            | analytics               | analytics/glomo_base                                                                                    | json schema      | Page View |
            | version dl              | 20250414_5.0                                                                                            | string           | Page View |
            | page name               | app:privada:personas:inversiones:faqs:cuando se reflejan las ganancias y la rentabilidad del dia de hoy | string           | Page View |
            | level 1                 | inversiones                                                                                             | string           | Page View |
            | level 2                 | faqs                                                                                                    | string           | Page View |
            | level 3                 | cuando se reflejan las ganancias y la rentabilidad del dia de hoy                                       | string           | Page View |
            | language                | ES                                                                                                      | string           | Page View |
            | page area               | privada                                                                                                 | string           | Page View |
            | page intent             | informacion                                                                                             | string           | Page View |
            | channel                 | online                                                                                                  | string           | Page View |
            | page instance ID        | de                                                                                                      | string           | Page View |
            | page info version       | appVersion                                                                                              | regexp named     | Page View |
            | page segment            | personas                                                                                                | string           | Page View |
            | sysEnv                  | app                                                                                                     | string           | Page View |
            | business unit           | BBVA Mexico                                                                                             | string           | Page View |
            | site app name           | App BBVA Mexico                                                                                         | string           | Page View |
            | project name            | Glomo                                                                                                   | string           | Page View |
            | device mobile           | si                                                                                                      | string           | Page View |
            | user userState          | logado                                                                                                  | string           | Page View |
            | user segment global     | 003001                                                                                                  | string           | Page View |
            | profile ID              | profileID                                                                                               | regexp named     | Page View |
            | user gender             | gender                                                                                                  | regexp named     | Page View |
            | internal campaign       |                                                                                                         | empty array      | Page View |
            | optimization attributes |                                                                                                         | empty array      | Page View |
            | application             |                                                                                                         | empty str object | Page View |
            | products attributes     |                                                                                                         | empty array      | Page View |

    @ANA_MI008
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Page view - My investments - System error
        Given a user with the following criteria
            | criteria              |
            | user with investments |
        And the user accesses My Investments dashboard "without onboarding"
        And the analytics interceptor service is initiated
        When a system error occurs
        Then the analytics events contains the following variables
            | item                    | value                                             | type             | event     |
            | version dl              | 20250414_5.0                                      | string           | Page View |
            | page name               | app:privada:personas:inversiones:error de sistema | string           | Page View |
            | level 1                 | inversiones                                       | string           | Page View |
            | level 2                 | error de sistema                                  | string           | Page View |
            | language                | ES                                                | string           | Page View |
            | page area               | privada                                           | string           | Page View |
            | page intent             | informacion                                       | string           | Page View |
            | channel                 | online                                            | string           | Page View |
            | page instance ID        | de                                                | string           | Page View |
            | page info version       | appVersion                                        | regexp named     | Page View |
            | page segment            | personas                                          | string           | Page View |
            | sysEnv                  | app                                               | string           | Page View |
            | business unit           | BBVA Mexico                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                   | string           | Page View |
            | project name            | Glomo                                            | string           | Page View |
            | device mobile           | si                                                | string           | Page View |
            | user segment global     | 003001                                            | string           | Page View |
            | internal campaign       |                                                   | empty array      | Page View |
            | optimization attributes |                                                   | empty array      | Page View |
            | application             |                                                   | empty str object | Page View |
            | products attributes     |                                                   | empty array      | Page View |

    @ANA_EVENT_MI009
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Page view - My investments - description graph
        Given a user with the following criteria
            | criteria              |
            | user with investments |
        And the user accesses My Investments dashboard "without onboarding"
        And the analytics interceptor service is initiated
        When the user selects icon of the description graph
        Then the analytics events contains the following variables
            | item                    | value                                                      | type             | event     |
            | version dl              | 20250414_5.0                                               | string           | Page View |
            | page name               | app:privada:personas:inversiones:descripcion de la grafica | string           | Page View |
            | level 1                 | inversiones                                                | string           | Page View |
            | level 2                 | descripcion de la grafica                                  | string           | Page View |
            | language                | ES                                                         | string           | Page View |
            | page area               | privada                                                    | string           | Page View |
            | page intent             | informacion                                                | string           | Page View |
            | channel                 | online                                                     | string           | Page View |
            | page instance ID        | de                                                         | string           | Page View |
            | page info version       | appVersion                                                 | regexp named     | Page View |
            | page segment            | personas                                                   | string           | Page View |
            | sysEnv                  | app                                                        | string           | Page View |
            | business unit           | BBVA Mexico                                                | string           | Page View |
            | site app name           | App BBVA Mexico                                            | string           | Page View |
            | project name            | Glomo                                                      | string           | Page View |
            | user segment global     | 003001                                                     | string           | Page View |

    @ANA_EVENT_MI010
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Page view - My investments - Terms description
        Given a user with the following criteria
            | criteria              |
            | user with investments |
        And the user accesses My Investments dashboard "without onboarding"
        And the analytics interceptor service is initiated
        When the user opens the term description modal
        Then the analytics events contains the following variables
            | item                    | value                                                    | type             | event     |
            | version dl              | 20250414_5.0                                             | string           | Page View |
            | page name               | app:privada:personas:inversiones:descripcion de terminos | string           | Page View |
            | level 1                 | inversiones                                              | string           | Page View |
            | level 2                 | descripcion de terminos                                  | string           | Page View |
            | language                | ES                                                       | string           | Page View |
            | page area               | privada                                                  | string           | Page View |
            | page intent             | informacion                                              | string           | Page View |
            | channel                 | online                                                   | string           | Page View |
            | page instance ID        | de                                                       | string           | Page View |
            | page info version       | appVersion                                               | regexp named     | Page View |
            | page segment            | personas                                                 | string           | Page View |
            | sysEnv                  | app                                                      | string           | Page View |
            | business unit           | BBVA Mexico                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                          | string           | Page View |
            | project name            | Glomo                                                    | string           | Page View |
            | user segment global     | 003001                                                   | string           | Page View |
            | user gender             | gender                                                   | regexp named     | Page View |

    @ANA_EVENT_MI011
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Page view - My investments - See more articles
        Given a user with the following criteria
            | criteria              |
            | user with investments |
        And the user accesses My Investments dashboard "without onboarding"
        And the analytics interceptor service is initiated
        When the user views more articles in financial health
        Then the analytics events contains the following variables
            | item                    | value                                                    | type             | event     |
            | version dl              | 20250414_5.0                                             | string           | Page View |
            | page name               | app:privada:personas:inversiones:aprende a invertir      | string           | Page View |
            | level 1                 | inversiones                                              | string           | Page View |
            | level 2                 | aprende a invertir                                       | string           | Page View |
            | language                | ES                                                       | string           | Page View |
            | page area               | privada                                                  | string           | Page View |
            | page intent             | informacion                                              | string           | Page View |
            | channel                 | online                                                   | string           | Page View |
            | page instance ID        | de                                                       | string           | Page View |
            | page info version       | appVersion                                               | regexp named     | Page View |
            | page segment            | personas                                                 | string           | Page View |
            | sysEnv                  | app                                                      | string           | Page View |
            | business unit           | BBVA Mexico                                              | string           | Page View |
            | site app name           | App BBVA Mexico                                          | string           | Page View |
            | project name            | Glomo                                                    | string           | Page View |
            | user segment global     | 003001                                                   | string           | Page View |
            | user gender             | gender                                                   | regexp named     | Page View |

    @ANA_EVENT_MI012
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Page view - My investments - Select article data
        Given a user with the following criteria
            | criteria              |
            | user with investments |
        And the user accesses My Investments dashboard "without onboarding"
        And the user views more articles in financial health
        And the analytics interceptor service is initiated
        When the user selects article to the view information
        Then the analytics events contains the following variables
            | item                    | value                                                       | type             | event     |
            | version dl              | 20250414_5.0                                                | string           | Page View |
            | page name               | app:privada:personas:inversiones:aprende a invertir:detalle | string           | Page View |
            | level 1                 | inversiones                                                 | string           | Page View |
            | level 2                 | aprende a invertir                                          | string           | Page View |
            | level 3                 | detalle                                                     | string           | Page View |
            | language                | ES                                                          | string           | Page View |
            | page area               | privada                                                     | string           | Page View |
            | page intent             | informacion                                                 | string           | Page View |
            | channel                 | online                                                      | string           | Page View |
            | page instance ID        | de                                                          | string           | Page View |
            | page info version       | appVersion                                                  | regexp named     | Page View |
            | page segment            | personas                                                    | string           | Page View |
            | sysEnv                  | app                                                         | string           | Page View |
            | business unit           | BBVA Mexico                                                 | string           | Page View |
            | site app name           | App BBVA Mexico                                             | string           | Page View |
            | project name            | Glomo                                                       | string           | Page View |
            | user segment global     | 003001                                                      | string           | Page View |
            | user gender             | gender                                                      | regexp named     | Page View |
