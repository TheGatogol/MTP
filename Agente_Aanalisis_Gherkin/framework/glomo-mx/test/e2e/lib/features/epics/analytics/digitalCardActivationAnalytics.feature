@digitalCardActivationAnalytics
Feature: Analytics - Digital Card Activation

    @ANA_EVENT_DCA001
    @MX
    @analytics
    @ios @android @web
    @web-done
    @backend(test)
    @vbank
    @spherica
    Scenario Outline: Digital Card Activation <cardType> Card Analytics - Page View
        Given a user with the following criteria
            | criteria                   |
            | cards without digital card |
        And the user accesses to the "operative" "<cardType>" card product detail
        And the analytics interceptor service is initiated
        When the user access to "digital card generate"
        Then the analytics events contains the following variables
            | item                    | value                | type             | event     |
            | analytics               | analytics/glomo_base | json schema      | Page View |
            | version DL              | 20250414_5.0         | string           | Page View |
            | page name               | <pageName>           | string           | Page View |
            | level 1                 | tarjetas             | string           | Page View |
            | level 2                 | <level2>             | string           | Page View |
            | level 3                 | 1 inicia y confirma  | string           | Page View |
            | language                | ES                   | string           | Page View |
            | page area               | privada              | string           | Page View |
            | page intent             | informacion          | string           | Page View |
            | channel                 | online               | string           | Page View |
            | page instance ID        | de                   | string           | Page View |
            | page info version       | appVersion           | regexp named     | Page View |
            | page segment            | personas             | string           | Page View |
            | sysEnv                  | app                  | string           | Page View |
            | business unit           | BBVA Mexico          | string           | Page View |
            | site app name           | App BBVA Mexico      | string           | Page View |
            | project name            | DIY Payments         | string           | Page View |
            | device mobile           | si                   | string           | Page View |
            | user userState          | logado               | string           | Page View |
            | user segment global     | 003001               | string           | Page View |
            | profile ID              | profileID            | regexp named     | Page View |
            | internal campaign       |                      | empty array      | Page View |
            | optimization attributes |                      | empty array      | Page View |
            | application             |                      | empty str object | Page View |
            | products attributes     |                      | empty array      | Page View |

        Examples:
            | cardType | level2              | pageName                                                              |
            | credit   | activar tdc digital | app:privada:personas:tarjetas:activar tdc digital:1 inicia y confirma |
            | debit    | activar tdd digital | app:privada:personas:tarjetas:activar tdd digital:1 inicia y confirma |

    @ANA_EVENT_DCA002
    @MX
    @analytics
    @ios @android @web
    @web-done
    @backend(test)
    @vbank
    @spherica
    Scenario Outline: Digital Card Activation <cardType> Card Analytics Error - Page View
        Given a user with the following criteria
            | criteria                   |
            | cards without digital card |
        And the user accesses to the "operative" "<cardType>" card product detail
        And the user access to "digital card generate"
        And the analytics interceptor service is initiated
        When the user generate digital card
        Then the analytics events contains the following variables
            | item                    | value                | type             | event     |
            | analytics               | analytics/glomo_base | json schema      | Page View |
            | version DL              | 20250414_5.0         | string           | Page View |
            | page name               | <pageName>           | string           | Page View |
            | level 1                 | tarjetas             | string           | Page View |
            | level 2                 | <level2>             | string           | Page View |
            | level 3                 | <level3>             | string           | Page View |
            | language                | ES                   | string           | Page View |
            | page area               | privada              | string           | Page View |
            | page intent             | informacion          | string           | Page View |
            | channel                 | online               | string           | Page View |
            | page instance ID        | de                   | string           | Page View |
            | page info version       | appVersion           | regexp named     | Page View |
            | page segment            | personas             | string           | Page View |
            | sysEnv                  | app                  | string           | Page View |
            | business unit           | BBVA Mexico          | string           | Page View |
            | site app name           | App BBVA Mexico      | string           | Page View |
            | project name            | DIY Payments         | string           | Page View |
            | error page              | <level3>             | string           | Page View |
            | device mobile           | si                   | string           | Page View |
            | user userState          | logado               | string           | Page View |
            | user segment global     | 003001               | string           | Page View |
            | profile ID              | profileID            | regexp named     | Page View |
            | internal campaign       |                      | empty array      | Page View |
            | optimization attributes |                      | empty array      | Page View |
            | application             |                      | empty str object | Page View |
            | products attributes     |                      | empty array      | Page View |

        Examples:
            | cardType | level2              | level3          | pageName                                                          |
            | credit   | activar tdc digital | tdc no generada | app:privada:personas:tarjetas:activar tdc digital:tdc no generada |
            | debit    | activar tdd digital | tdd no generada | app:privada:personas:tarjetas:activar tdd digital:tdd no generada |

    @ANA_EVENT_DCA003
    @MX
    @analytics
    @ios @android @web
    @web-done
    @backend(test)
    @vbank
    @spherica
    Scenario Outline: Digital Card Activation <cardType> Card Analytics Success - Page View
        Given a user with the following criteria
            | criteria                   |
            | cards without digital card |
        And the user accesses to the "operative" "<cardType>" card product detail
        And the user access to "digital card generate"
        And the analytics interceptor service is initiated
        When the user generate digital card
        Then the analytics events contains the following variables
            | item                    | value                | type             | event     |
            | analytics               | analytics/glomo_base | json schema      | Page View |
            | version DL              | 20250414_5.0         | string           | Page View |
            | page name               | <pageName>           | string           | Page View |
            | level 1                 | tarjetas             | string           | Page View |
            | level 2                 | <level2>             | string           | Page View |
            | level 3                 | pagina exitosa       | string           | Page View |
            | language                | ES                   | string           | Page View |
            | page area               | privada              | string           | Page View |
            | page intent             | informacion          | string           | Page View |
            | channel                 | online               | string           | Page View |
            | page instance ID        | de                   | string           | Page View |
            | page info version       | appVersion           | regexp named     | Page View |
            | page segment            | personas             | string           | Page View |
            | sysEnv                  | app                  | string           | Page View |
            | business unit           | BBVA Mexico          | string           | Page View |
            | site app name           | App BBVA Mexico      | string           | Page View |
            | project name            | DIY Payments         | string           | Page View |
            | device mobile           | si                   | string           | Page View |
            | user userState          | logado               | string           | Page View |
            | user segment global     | 003001               | string           | Page View |
            | profile ID              | profileID            | regexp named     | Page View |
            | internal campaign       |                      | empty array      | Page View |
            | optimization attributes |                      | empty array      | Page View |
            | application             |                      | empty str object | Page View |
            | products attributes     |                      | empty array      | Page View |

        Examples:
            | cardType | level2              | pageName                                                         |
            | credit   | activar tdc digital | app:privada:personas:tarjetas:activar tdc digital:pagina exitosa |
            | debit    | activar tdd digital | app:privada:personas:tarjetas:activar tdd digital:pagina exitosa |
