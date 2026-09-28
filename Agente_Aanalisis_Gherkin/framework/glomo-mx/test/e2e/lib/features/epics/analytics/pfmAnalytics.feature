@pfmAnalytics

Feature: Analytics - PFM

    @ANA_EVENT_PFM001
    @analytics
    @web
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: Page view - PFM Dashboard
        Given a user with the following criteria
            | criteria               |
            | Expenses in PFM period |
            | Incomes in PFM period  |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses dashboard detail PFM "footer"
        Then the analytics events contains the following variables
            | item                                           | value                                        | type             | event         |
            | analytics                                      | analytics/glomo_base                         | json schema      | Page View     |
            | version DL                                     | 20250414_5.0                                 | string           | Page View     |
            | page name                                      | app:privada:personas:pfm:mi dinero           | string           | Page View     |
            | level 1                                        | pfm                                          | string           | Page View     |
            | level 2                                        | mi dinero                                    | string           | Page View     |
            | link name	                                     | click en tab bar             	            | string           | Internal Link |
            | language                                       | ES                                           | string           | Page View     |
            | page area                                      | privada                                      | string           | Page View     |
            | page intent                                    | informacion                                  | string           | Page View     |
            | channel                                        | online                                       | string           | Page View     |
            | page instance ID                               | de                                           | string           | Page View     |
            | page info version                              | appVersion                                   | regexp named     | Page View     |
            | page segment                                   | personas                                     | string           | Page View     |
            | sysEnv                                         | app                                          | string           | Page View     |
            | business unit                                  | BBVA Mexico                                  | string           | Page View     |
            | site app name                                  | App BBVA Mexico                              | string           | Page View     |
            | project name                                   | PFM                                          | string           | Page View     |
            | device mobile                                  | si                                           | string           | Page View     |
            | user userState                                 | logado                                       | string           | Page View     |
            | user segment global                            | 003001                                       | string           | Page View     |
            | profile ID                                     | profileID                                    | regexp named     | Page View     |
            | user gender                                    | gender                                       | regexp named     | Page View     |
            | user state                                     | lettersAndSpaceOrEmpty                       | regexp named     | Page View     |
            | optimization attributes                        |                                              | empty array      | Page View     |
            | application                                    |                                              | empty str object | Page View     |
            | products attributes                            |                                              | empty array      | Page View     |

    @ANA_EVENT_PFM002
    @analytics
    @web @android @ios
    @MX
    @backend(test) @vbank
    @web-done
    Scenario Outline: Interaction Link - PFM Dashboard - tab <card> Dashboard Detail
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        When the user accesses dashboard detail PFM "footer"
        And the analytics interceptor service is initiated
        And the user selects the <card> card
        Then the analytics events contains the following variables:
            | item                    | value                                | type             | event            |
            | analytics               | analytics/glomo_base                 | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                         | string           | Interaction Link |
            | page name               | app:privada:personas:pfm:mi dinero   | string           | Interaction Link |
            | level 1                 | pfm                                  | string           | Interaction Link |
            | level 2                 | mi dinero                            | string           | Interaction Link |
            | language                | ES                                   | string           | Interaction Link |
            | page area               | privada                              | string           | Interaction Link |
            | page intent             | informacion                          | string           | Interaction Link |
            | channel                 | online                               | string           | Interaction Link |
            | page instance ID        | de                                   | string           | Interaction Link |
            | page info version       | appVersion                           | regexp named     | Interaction Link |
            | page segment            | personas                             | string           | Interaction Link |
            | sysEnv                  | app                                  | string           | Interaction Link |
            | business unit           | BBVA Mexico                          | string           | Interaction Link |
            | site app name           | App BBVA Mexico                      | string           | Interaction Link |
            | project name            | PFM                                  | string           | Interaction Link |
            | device mobile           | si                                   | string           | Interaction Link |
            | user userState          | logado                               | string           | Interaction Link |
            | user segment global     | 003001                               | string           | Interaction Link |
            | profile ID              | profileID                            | regexp named     | Interaction Link |
            | user gender             | gender                               | regexp named     | Interaction Link |
            | user state              | lettersAndSpaceOrEmpty               | regexp named     | Interaction Link |
            | optimization attributes |                                      | empty array      | Interaction Link |
            | application             |                                      | empty str object | Interaction Link |
            | products attributes     |                                      | empty array      | Interaction Link |
            | interaction level       | <value>           	                 | string           | Interaction Link |

        Examples:
            | card        | value                           |
            | saves       | tab ver movimientos financieros |
            | incomes     | tab ver ingresos                |
            | investments | tab ver ahorro inversiones      |

    @ANA_EVENT_PFM003
    @analytics
    @web @android @ios
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: Interaction Link - PFM Dashboard - tab expenses Dashboard Detail
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        When the user accesses dashboard detail PFM "footer"
        And the user selects the incomes card
        And the analytics interceptor service is initiated
        And the user selects the expenses card
        Then the analytics events contains the following variables:
            | item                    | value                                | type             | event            |
            | analytics               | analytics/glomo_base                 | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                         | string           | Interaction Link |
            | page name               | app:privada:personas:pfm:mi dinero   | string           | Interaction Link |
            | level 1                 | pfm                                  | string           | Interaction Link |
            | level 2                 | mi dinero                            | string           | Interaction Link |
            | language                | ES                                   | string           | Interaction Link |
            | page area               | privada                              | string           | Interaction Link |
            | page intent             | informacion                          | string           | Interaction Link |
            | channel                 | online                               | string           | Interaction Link |
            | page instance ID        | de                                   | string           | Interaction Link |
            | page info version       | appVersion                           | regexp named     | Interaction Link |
            | page segment            | personas                             | string           | Interaction Link |
            | sysEnv                  | app                                  | string           | Interaction Link |
            | business unit           | BBVA Mexico                          | string           | Interaction Link |
            | site app name           | App BBVA Mexico                      | string           | Interaction Link |
            | project name            | PFM                                  | string           | Interaction Link |
            | device mobile           | si                                   | string           | Interaction Link |
            | user userState          | logado                               | string           | Interaction Link |
            | user segment global     | 003001                               | string           | Interaction Link |
            | profile ID              | profileID                            | regexp named     | Interaction Link |
            | user gender             | gender                               | regexp named     | Interaction Link |
            | user state              | lettersAndSpaceOrEmpty               | regexp named     | Interaction Link |
            | optimization attributes |                                      | empty array      | Interaction Link |
            | application             |                                      | empty str object | Interaction Link |
            | products attributes     |                                      | empty array      | Interaction Link |
            | interaction level       | tab ver gastos  	                 | string           | Interaction Link |

    @ANA_PFM004
    @analytics
    @web @android @ios
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: Page view - PFM Categorization total expenses
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        When the user accesses PFM categorization from "expenses"
        Then the device contains the following variables
            | item                    | value                                               | type             |
            | analytics               | analytics/glomo_base                                | json schema      |
            | version DL              | 20250414_5.0                                        | string           |
            | page name               | app:privada:personas:pfm:gasto total                | string           |
            | level 1                 | pfm                                                 | string           |
            | level 2                 | gasto total                                         | string           |
            | language                | ES                                                  | string           |
            | page area               | privada                                             | string           |
            | page intent             | informacion                                         | string           |
            | channel                 | online                                              | string           |
            | page instance ID        | de                                                  | string           |
            | page info version       | appVersion                                          | regexp named     |
            | page segment            | personas                                            | string           |
            | sysEnv                  | app                                                 | string           |
            | business unit           | BBVA Mexico                                         | string           |
            | site app name           | App BBVA Mexico                                     | string           |
            | project name            | PFM                                                 | string           |
            | device mobile           | si                                                  | string           |
            | user userState          | logado                                              | string           |
            | user segment global     | 003001                                              | string           |
            | profile ID              | profileID                                           | regexp named     |
            | user gender             | gender                                              | regexp named     |
            | user state              | lettersAndSpaceOrEmpty                              | regexp named     |
            | internal campaign       |                                                     | empty array      |
            | optimization attributes |                                                     | empty array      |
            | application             |                                                     | empty str object |
            | products attributes     |                                                     | empty array      |

    @ANA_EVENT_PFM005
    @analytics
    @web @android @ios
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: Page view - PFM Categorization category expenses
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        And the user accesses PFM categorization from "expenses"
        And the analytics interceptor service is initiated
        When the user accesses PFM category detail
        Then the analytics events contains the following variables
            | item                    | value                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                  | string           | Page View |
            | page name               | app:privada:personas:pfm:categoria:compras y servicios        | string           | Page View |
            | level 1                 | pfm                                                           | string           | Page View |
            | level 2                 | categoria                                                     | string           | Page View |
            | language                | ES                                                            | string           | Page View |
            | page area               | privada                                                       | string           | Page View |
            | page intent             | informacion                                                   | string           | Page View |
            | channel                 | online                                                        | string           | Page View |
            | page instance ID        | de                                                            | string           | Page View |
            | page info version       | appVersion                                                    | regexp named     | Page View |
            | page segment            | personas                                                      | string           | Page View |
            | sysEnv                  | app                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                   | string           | Page View |
            | site app name           | App BBVA Mexico                                               | string           | Page View |
            | project name            | PFM                                                           | string           | Page View |
            | device mobile           | si                                                            | string           | Page View |
            | user userState          | logado                                                        | string           | Page View |
            | user segment global     | 003001                                                        | string           | Page View |
            | profile ID              | profileID                                                     | regexp named     | Page View |
            | user gender             | gender                                                        | regexp named     | Page View |
            | user state              | lettersAndSpaceOrEmpty                                        | regexp named     | Page View |
            | internal campaign       |                                                               | empty array      | Page View |
            | optimization attributes |                                                               | empty array      | Page View |
            | application             |                                                               | empty str object | Page View |
            | products attributes     |                                                               | empty array      | Page View |

    @ANA_EVENT_PFM006
    @analytics
    @web @android @ios
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: Page view - PFM Categorization dates tab
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        And the user accesses PFM categorization from "expenses"
        And the analytics interceptor service is initiated
        When the user accesses pfm dates tab categorization
        Then the analytics events contains the following variables
            | item                    | value                                               | type             | event            |
            | analytics               | analytics/glomo_base                                | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                        | string           | Interaction Link |
            | page name               | app:privada:personas:pfm:gasto total                | string           | Interaction Link |
            | level 1                 | pfm                                                 | string           | Interaction Link |
            | level 2                 | gasto total                                         | string           | Interaction Link |
            | language                | ES                                                  | string           | Interaction Link |
            | page area               | privada                                             | string           | Interaction Link |
            | page intent             | informacion                                         | string           | Interaction Link |
            | channel                 | online                                              | string           | Interaction Link |
            | page instance ID        | de                                                  | string           | Interaction Link |
            | page info version       | appVersion                                          | regexp named     | Interaction Link |
            | page segment            | personas                                            | string           | Interaction Link |
            | sysEnv                  | app                                                 | string           | Interaction Link |
            | business unit           | BBVA Mexico                                         | string           | Interaction Link |
            | site app name           | App BBVA Mexico                                     | string           | Interaction Link |
            | project name            | PFM                                                 | string           | Interaction Link |
            | device mobile           | si                                                  | string           | Interaction Link |
            | user userState          | logado                                              | string           | Interaction Link |
            | user segment global     | 003001                                              | string           | Interaction Link |
            | profile ID              | profileID                                           | regexp named     | Interaction Link |
            | user gender             | gender                                              | regexp named     | Interaction Link |
            | user state              | lettersAndSpaceOrEmpty                              | regexp named     | Interaction Link |
            | internal campaign       |                                                     | empty array      | Interaction Link |
            | optimization attributes |                                                     | empty array      | Interaction Link |
            | application             |                                                     | empty str object | Interaction Link |
            | products attributes     |                                                     | empty array      | Interaction Link |
            | interaction level       | tab ver fechas                                      | string           | Interaction Link |

    @ANA_EVENT_PFM007
    @analytics
    @web @android @ios
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: Page view - PFM Categorization category tab
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        And the user accesses PFM categorization from "expenses"
        And the analytics interceptor service is initiated
        When the user accesses pfm category tab categorization
        Then the analytics events contains the following variables
            | item                    | value                                               | type             | event            |
            | analytics               | analytics/glomo_base                                | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                        | string           | Interaction Link |
            | page name               | app:privada:personas:pfm:gasto total                | string           | Interaction Link |
            | level 1                 | pfm                                                 | string           | Interaction Link |
            | level 2                 | gasto total                                         | string           | Interaction Link |
            | language                | ES                                                  | string           | Interaction Link |
            | page area               | privada                                             | string           | Interaction Link |
            | page intent             | informacion                                         | string           | Interaction Link |
            | channel                 | online                                              | string           | Interaction Link |
            | page instance ID        | de                                                  | string           | Interaction Link |
            | page info version       | appVersion                                          | regexp named     | Interaction Link |
            | page segment            | personas                                            | string           | Interaction Link |
            | sysEnv                  | app                                                 | string           | Interaction Link |
            | business unit           | BBVA Mexico                                         | string           | Interaction Link |
            | site app name           | App BBVA Mexico                                     | string           | Interaction Link |
            | project name            | PFM                                                 | string           | Interaction Link |
            | device mobile           | si                                                  | string           | Interaction Link |
            | user userState          | logado                                              | string           | Interaction Link |
            | user segment global     | 003001                                              | string           | Interaction Link |
            | profile ID              | profileID                                           | regexp named     | Interaction Link |
            | user gender             | gender                                              | regexp named     | Interaction Link |
            | user state              | lettersAndSpaceOrEmpty                              | regexp named     | Interaction Link |
            | internal campaign       |                                                     | empty array      | Interaction Link |
            | optimization attributes |                                                     | empty array      | Interaction Link |
            | application             |                                                     | empty str object | Interaction Link |
            | products attributes     |                                                     | empty array      | Interaction Link |
            | interaction level       | tab ver categorias                                  | string           | Interaction Link |

    @ANA_EVENT_PFM008
    @analytics
    @web @android @ios
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: Page view - PFM Categorization select period
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        And the user accesses PFM categorization from "expenses"
        And the analytics interceptor service is initiated
        When the user accesses PFM Categorization period
        Then the analytics events contains the following variables
            | item                    | value                                               | type             | event     |
            | analytics               | analytics/glomo_base                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                        | string           | Page View |
            | page name               | app:privada:personas:pfm:definir periodo            | string           | Page View |
            | level 1                 | pfm                                                 | string           | Page View |
            | level 2                 | definir periodo                                     | string           | Page View |
            | language                | ES                                                  | string           | Page View |
            | page area               | privada                                             | string           | Page View |
            | page intent             | informacion                                         | string           | Page View |
            | channel                 | online                                              | string           | Page View |
            | page instance ID        | de                                                  | string           | Page View |
            | page info version       | appVersion                                          | regexp named     | Page View |
            | page segment            | personas                                            | string           | Page View |
            | sysEnv                  | app                                                 | string           | Page View |
            | business unit           | BBVA Mexico                                         | string           | Page View |
            | site app name           | App BBVA Mexico                                     | string           | Page View |
            | project name            | PFM                                                 | string           | Page View |
            | device mobile           | si                                                  | string           | Page View |
            | user userState          | logado                                              | string           | Page View |
            | user segment global     | 003001                                              | string           | Page View |
            | profile ID              | profileID                                           | regexp named     | Page View |
            | user gender             | gender                                              | regexp named     | Page View |
            | user state              | lettersAndSpaceOrEmpty                              | regexp named     | Page View |
            | internal campaign       |                                                     | empty array      | Page View |
            | optimization attributes |                                                     | empty array      | Page View |
            | application             |                                                     | empty str object | Page View |
            | products attributes     |                                                     | empty array      | Page View |

    @ANA_EVENT_PFM009
    @analytics
    @web @android @ios
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: Page view - PFM Categorization category history
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        And the user accesses PFM categorization from "expenses"
        And the analytics interceptor service is initiated
        When the user accesses expenses history detail
        Then the analytics events contains the following variables
            | item                    | value                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                    | string           | Page View |
            | page name               | app:privada:personas:pfm:gasto total:historico gastos totales   | string           | Page View |
            | level 1                 | pfm                                                             | string           | Page View |
            | level 2                 | gasto total                                                     | string           | Page View |
            | language                | ES                                                              | string           | Page View |
            | page area               | privada                                                         | string           | Page View |
            | page intent             | informacion                                                     | string           | Page View |
            | channel                 | online                                                          | string           | Page View |
            | page instance ID        | de                                                              | string           | Page View |
            | page info version       | appVersion                                                      | regexp named     | Page View |
            | page segment            | personas                                                        | string           | Page View |
            | sysEnv                  | app                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                 | string           | Page View |
            | project name            | PFM                                                             | string           | Page View |
            | device mobile           | si                                                              | string           | Page View |
            | user userState          | logado                                                          | string           | Page View |
            | user segment global     | 003001                                                          | string           | Page View |
            | profile ID              | profileID                                                       | regexp named     | Page View |
            | user gender             | gender                                                          | regexp named     | Page View |
            | user state              | lettersAndSpaceOrEmpty                                          | regexp named     | Page View |
            | internal campaign       |                                                                 | empty array      | Page View |
            | optimization attributes |                                                                 | empty array      | Page View |
            | application             |                                                                 | empty str object | Page View |
            | products attributes     |                                                                 | empty array      | Page View |

    @ANA_EVENT_PFM010
    @analytics
    @web @android @ios
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: Page view - PFM Categorization History annual tab
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        And the user accesses PFM categorization from "expenses"
        And the user accesses expenses history detail
        And the analytics interceptor service is initiated
        When the user accesses history annual tab
        Then the analytics events contains the following variables
            | item                    | value                                                           | type             | event            |
            | analytics               | analytics/glomo_base                                            | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                                    | string           | Interaction Link |
            | page name               | app:privada:personas:pfm:gasto total:historico gastos totales   | string           | Interaction Link |
            | level 1                 | pfm                                                             | string           | Interaction Link |
            | level 2                 | gasto total                                                     | string           | Interaction Link |
            | language                | ES                                                              | string           | Interaction Link |
            | page area               | privada                                                         | string           | Interaction Link |
            | page intent             | informacion                                                     | string           | Interaction Link |
            | channel                 | online                                                          | string           | Interaction Link |
            | page instance ID        | de                                                              | string           | Interaction Link |
            | page info version       | appVersion                                                      | regexp named     | Interaction Link |
            | page segment            | personas                                                        | string           | Interaction Link |
            | sysEnv                  | app                                                             | string           | Interaction Link |
            | business unit           | BBVA Mexico                                                     | string           | Interaction Link |
            | site app name           | App BBVA Mexico                                                 | string           | Interaction Link |
            | project name            | PFM                                                             | string           | Interaction Link |
            | device mobile           | si                                                              | string           | Interaction Link |
            | user userState          | logado                                                          | string           | Interaction Link |
            | user segment global     | 003001                                                          | string           | Interaction Link |
            | profile ID              | profileID                                                       | regexp named     | Interaction Link |
            | user gender             | gender                                                          | regexp named     | Interaction Link |
            | user state              | lettersAndSpaceOrEmpty                                          | regexp named     | Interaction Link |
            | internal campaign       |                                                                 | empty array      | Interaction Link |
            | optimization attributes |                                                                 | empty array      | Interaction Link |
            | application             |                                                                 | empty str object | Interaction Link |
            | products attributes     |                                                                 | empty array      | Interaction Link |
            | interaction level       | ver historico anual                                             | string           | Interaction Link |

    @ANA_EVENT_PFM011
    @analytics
    @web @android @ios
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: Page view - PFM Categorization History monthly tab
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        And the user accesses PFM categorization from "expenses"
        And the user accesses expenses history detail
        And the user accesses history annual tab
        And the analytics interceptor service is initiated
        When the user accesses history monthly tab
        Then the analytics events contains the following variables
            | item                    | value                                                           | type             | event            |
            | analytics               | analytics/glomo_base                                            | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                                    | string           | Interaction Link |
            | page name               | app:privada:personas:pfm:gasto total:historico gastos totales   | string           | Interaction Link |
            | level 1                 | pfm                                                             | string           | Interaction Link |
            | level 2                 | gasto total                                                     | string           | Interaction Link |
            | language                | ES                                                              | string           | Interaction Link |
            | page area               | privada                                                         | string           | Interaction Link |
            | page intent             | informacion                                                     | string           | Interaction Link |
            | channel                 | online                                                          | string           | Interaction Link |
            | page instance ID        | de                                                              | string           | Interaction Link |
            | page info version       | appVersion                                                      | regexp named     | Interaction Link |
            | page segment            | personas                                                        | string           | Interaction Link |
            | sysEnv                  | app                                                             | string           | Interaction Link |
            | business unit           | BBVA Mexico                                                     | string           | Interaction Link |
            | site app name           | App BBVA Mexico                                                 | string           | Interaction Link |
            | project name            | PFM                                                             | string           | Interaction Link |
            | device mobile           | si                                                              | string           | Interaction Link |
            | user userState          | logado                                                          | string           | Interaction Link |
            | user segment global     | 003001                                                          | string           | Interaction Link |
            | profile ID              | profileID                                                       | regexp named     | Interaction Link |
            | user gender             | gender                                                          | regexp named     | Interaction Link |
            | user state              | lettersAndSpaceOrEmpty                                          | regexp named     | Interaction Link |
            | internal campaign       |                                                                 | empty array      | Interaction Link |
            | optimization attributes |                                                                 | empty array      | Interaction Link |
            | application             |                                                                 | empty str object | Interaction Link |
            | products attributes     |                                                                 | empty array      | Interaction Link |
            | interaction level       | ver historico mensual                                           | string           | Interaction Link |

    @ANA_EVENT_PFM012
    @analytics
    @web @android @ios
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: PFM dashboard setting
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        When the user accesses dashboard detail PFM "footer"
        And the analytics interceptor service is initiated
        And the user accesses PFM settings
        Then the analytics events contains the following variables:
            | item                    | value                                    | type             | event     |
            | analytics               | analytics/glomo_base                     | json schema      | Page View |
            | version DL              | 20250414_5.0                             | string           | Page View |
            | page name               | app:privada:personas:pfm:configuracion   | string           | Page View |
            | level 1                 | pfm                                      | string           | Page View |
            | level 2                 | configuracion                            | string           | Page View |
            | language                | ES                                       | string           | Page View |
            | page area               | privada                                  | string           | Page View |
            | page intent             | informacion                              | string           | Page View |
            | channel                 | online                                   | string           | Page View |
            | page instance ID        | de                                       | string           | Page View |
            | page info version       | appVersion                               | regexp named     | Page View |
            | page segment            | personas                                 | string           | Page View |
            | sysEnv                  | app                                      | string           | Page View |
            | business unit           | BBVA Mexico                              | string           | Page View |
            | site app name           | App BBVA Mexico                          | string           | Page View |
            | project name            | PFM                                      | string           | Page View |
            | device mobile           | si                                       | string           | Page View |
            | user userState          | logado                                   | string           | Page View |
            | user segment global     | 003001                                   | string           | Page View |
            | profile ID              | profileID                                | regexp named     | Page View |
            | user gender             | gender                                   | regexp named     | Page View |
            | user state              | lettersAndSpaceOrEmpty                   | regexp named     | Page View |
            | optimization attributes |                                          | empty array      | Page View |
            | application             |                                          | empty str object | Page View |
            | products attributes     |                                          | empty array      | Page View |

    @ANA_EVENT_PFM013
    @analytics
    @web @android @ios
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: PFM dashboard setting update complete
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        When the user accesses dashboard detail PFM "footer"
        And the user accesses PFM settings
        And the analytics interceptor service is initiated
        And the user change config pfm products
        Then the analytics events contains the following variables:
            | item                    | value                                    | type             | event            |
            | analytics               | analytics/glomo_base                     | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                             | string           | Interaction Link |
            | page name               | app:privada:personas:pfm:configuracion   | string           | Interaction Link |
            | level 1                 | pfm                                      | string           | Interaction Link |
            | level 2                 | configuracion                            | string           | Interaction Link |
            | language                | ES                                       | string           | Interaction Link |
            | page area               | privada                                  | string           | Interaction Link |
            | page intent             | informacion                              | string           | Interaction Link |
            | channel                 | online                                   | string           | Interaction Link |
            | page instance ID        | de                                       | string           | Interaction Link |
            | page info version       | appVersion                               | regexp named     | Interaction Link |
            | page segment            | personas                                 | string           | Interaction Link |
            | sysEnv                  | app                                      | string           | Interaction Link |
            | business unit           | BBVA Mexico                              | string           | Interaction Link |
            | site app name           | App BBVA Mexico                          | string           | Interaction Link |
            | project name            | PFM                                      | string           | Interaction Link |
            | device mobile           | si                                       | string           | Interaction Link |
            | user userState          | logado                                   | string           | Interaction Link |
            | user segment global     | 003001                                   | string           | Interaction Link |
            | profile ID              | profileID                                | regexp named     | Interaction Link |
            | user gender             | gender                                   | regexp named     | Interaction Link |
            | user state              | lettersAndSpaceOrEmpty                   | regexp named     | Interaction Link |
            | optimization attributes |                                          | empty array      | Interaction Link |
            | application             |                                          | empty str object | Interaction Link |
            | products attributes     |                                          | empty array      | Interaction Link |

    @ANA_EVENT_PFM014
    @analytics
    @web
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: Page view - PFM Dashboard onboarding
        Given a user with the following criteria
            | criteria               |
            | Expenses in PFM period |
            | Incomes in PFM period  |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses dashboard detail PFM "onboarding footer"
        Then the analytics events contains the following variables
            | item                                           | value                                         | type             | event         |
            | analytics                                      | analytics/glomo_base                          | json schema      | Page View     |
            | version DL                                     | 20250414_5.0                                  | string           | Page View     |
            | page name                                      | app:privada:personas:pfm:mi dinero:onboarding | string           | Page View     |
            | level 1                                        | pfm                                           | string           | Page View     |
            | level 2                                        | mi dinero                                     | string           | Page View     |
            | level 3                                        | onboarding                                    | string           | Page View     |
            | link name	                                     | click en tab bar             	             | string           | Internal Link |
            | language                                       | ES                                            | string           | Page View     |
            | page area                                      | privada                                       | string           | Page View     |
            | page intent                                    | informacion                                   | string           | Page View     |
            | channel                                        | online                                        | string           | Page View     |
            | page instance ID                               | de                                            | string           | Page View     |
            | page info version                              | appVersion                                    | regexp named     | Page View     |
            | page segment                                   | personas                                      | string           | Page View     |
            | sysEnv                                         | app                                           | string           | Page View     |
            | business unit                                  | BBVA Mexico                                   | string           | Page View     |
            | site app name                                  | App BBVA Mexico                               | string           | Page View     |
            | project name                                   | PFM                                           | string           | Page View     |
            | device mobile                                  | si                                            | string           | Page View     |
            | user userState                                 | logado                                        | string           | Page View     |
            | user segment global                            | 003001                                        | string           | Page View     |
            | profile ID                                     | profileID                                     | regexp named     | Page View     |
            | user gender                                    | gender                                        | regexp named     | Page View     |
            | user state                                     | lettersAndSpaceOrEmpty                        | regexp named     | Page View     |
            | optimization attributes                        |                                               | empty array      | Page View     |
            | application                                    |                                               | empty str object | Page View     |
            | products attributes                            |                                               | empty array      | Page View     |
