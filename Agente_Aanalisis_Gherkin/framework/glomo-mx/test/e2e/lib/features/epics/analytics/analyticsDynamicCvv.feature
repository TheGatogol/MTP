@analyticsDynamicCvv
Feature: Analytics - dynamic cvv

    @ANA_DCVV001
    @analytics
    @web @android @ios
    @web-done
    @MX
    @backend(test)
    @vbank
    @spherica
    Scenario Outline: Access to <cardType> card dynamic cvv - Page View
        Given a user with the following criteria
            | criteria        |
            | digital card on |
        And the user accesses to the "operative" "<cardType>" card product detail
        When the user accesses to digital card screen
        Then the device contains the following variables
            | item                    | value                | type             |
            | analytics               | analytics/glomo_base | json schema      |
            | version DL              | 20250414_5.0         | string           |
            | page instance ID        | de                   | string           |
            | sysEnv                  | app                  | string           |
            | page segment            | personas             | string           |
            | page intent             | informacion          | string           |
            | business unit           | BBVA Mexico          | string           |
            | page area               | privada              | string           |
            | language                | ES                   | string           |
            | channel                 | online               | string           |
            | site app name           | App BBVA Mexico      | string           |
            | project name            | Glomo                | string           |
            | level 1                 | tarjeta digital      | string           |
            | level 2                 | <level>              | string           |
            | level 3                 | detalle              | string           |
            | page name               | <pageName>           | string           |
            | device mobile           | si                   | string           |
            | device root             |                      | string           |
            | user userState          | logado               | string           |
            | profile ID              | profileID            | regexp named     |
            | user gender             | gender               | regexp named     |
            | user age                | age                  | regexp named     |
            | internal campaign       |                      | empty array      |
            | optimization attributes |                      | empty array      |
            | application             |                      | empty str object |
            | products attributes     |                      | empty array      |

        Examples:
            | cardType | pageName                                             | level   |
            | credit   | app:privada:personas:tarjeta digital:credito:detalle | credito |
            | debit    | app:privada:personas:tarjeta digital:debito:detalle  | debito  |

    @ANA_EVENT_DCVV002
    @analytics
    @web @android @ios
    @web-done
    @MX
    @backend(test)
    @vbank
    @spherica
    Scenario Outline: Access and turn off the digital <cardType> card - Interaction Link
        Given a user with the following criteria
            | criteria        |
            | digital card on |
        And the user accesses to the "operative" "<cardType>" card product detail
        And the user accesses to digital card screen
        And the analytics interceptor service is initiated
        When the user turns "off" the digital card
        Then the analytics events contains the following variables
            | item                    | value                | type             | event            |
            | analytics               | analytics/glomo_base | json schema      | Interaction Link |
            | version DL              | 20250414_5.0         | string           | Interaction Link |
            | page instance ID        | de                   | string           | Interaction Link |
            | sysEnv                  | app                  | string           | Interaction Link |
            | page segment            | personas             | string           | Interaction Link |
            | page intent             | informacion          | string           | Interaction Link |
            | business unit           | BBVA Mexico          | string           | Interaction Link |
            | page area               | privada              | string           | Interaction Link |
            | language                | ES                   | string           | Interaction Link |
            | channel                 | online               | string           | Interaction Link |
            | site app name           | App BBVA Mexico      | string           | Interaction Link |
            | project name            | Glomo                | string           | Interaction Link |
            | level 1                 | tarjeta digital      | string           | Interaction Link |
            | level 2                 | <level>              | string           | Interaction Link |
            | level 3                 | detalle              | string           | Interaction Link |
            | page name               | <pageName>           | string           | Interaction Link |
            | interaction level       | apagar tarjeta       | string           | Interaction Link |
            | device mobile           | si                   | string           | Interaction Link |
            | device root             |                      | string           | Interaction Link |
            | user userState          | logado               | string           | Interaction Link |
            | profile ID              | profileID            | regexp named     | Interaction Link |
            | user gender             | gender               | regexp named     | Interaction Link |
            | user age                | age                  | regexp named     | Interaction Link |
            | internal campaign       |                      | empty array      | Interaction Link |
            | optimization attributes |                      | empty array      | Interaction Link |
            | application             |                      | empty str object | Interaction Link |
            | products attributes     |                      | empty array      | Interaction Link |

        Examples:
            | cardType | pageName                                             | level   |
            | credit   | app:privada:personas:tarjeta digital:credito:detalle | credito |
            | debit    | app:privada:personas:tarjeta digital:debito:detalle  | debito  |

    @ANA_EVENT_DCVV003
    @analytics
    @web @android @ios
    @web-done
    @MX
    @backend(test)
    @vbank
    @spherica
    Scenario Outline: Access and turn on the digital <cardType> card - Interaction Link
        Given a user with the following criteria
            | criteria        |
            | digital card on |
        And the user accesses to the "operative" "<cardType>" card product detail
        And the user accesses to digital card screen
        And the analytics interceptor service is initiated
        When the user turns "on" the digital card
        Then the analytics events contains the following variables
            | item                    | value                | type             | event            |
            | analytics               | analytics/glomo_base | json schema      | Interaction Link |
            | version DL              | 20250414_5.0         | string           | Interaction Link |
            | page instance ID        | de                   | string           | Interaction Link |
            | sysEnv                  | app                  | string           | Interaction Link |
            | page segment            | personas             | string           | Interaction Link |
            | page intent             | informacion          | string           | Interaction Link |
            | business unit           | BBVA Mexico          | string           | Interaction Link |
            | page area               | privada              | string           | Interaction Link |
            | language                | ES                   | string           | Interaction Link |
            | channel                 | online               | string           | Interaction Link |
            | site app name           | App BBVA Mexico      | string           | Interaction Link |
            | project name            | Glomo                | string           | Interaction Link |
            | level 1                 | tarjeta digital      | string           | Interaction Link |
            | level 2                 | <level>              | string           | Interaction Link |
            | level 3                 | detalle              | string           | Interaction Link |
            | page name               | <pageName>           | string           | Interaction Link |
            | interaction level       | encender tarjeta     | string           | Interaction Link |
            | device mobile           | si                   | string           | Interaction Link |
            | device root             |                      | string           | Interaction Link |
            | user userState          | logado               | string           | Interaction Link |
            | profile ID              | profileID            | regexp named     | Interaction Link |
            | user gender             | gender               | regexp named     | Interaction Link |
            | user age                | age                  | regexp named     | Interaction Link |
            | internal campaign       |                      | empty array      | Interaction Link |
            | optimization attributes |                      | empty array      | Interaction Link |
            | application             |                      | empty str object | Interaction Link |
            | products attributes     |                      | empty array      | Interaction Link |

        Examples:
            | cardType | pageName                                             | level   |
            | credit   | app:privada:personas:tarjeta digital:credito:detalle | credito |
            | debit    | app:privada:personas:tarjeta digital:debito:detalle  | debito  |

    @ANA_EVENT_DCVV004
    @analytics
    @web @android @ios
    @web-done
    @MX
    @backend(test)
    @vbank
    @spherica
    Scenario Outline: Access and display the dynamic cvv of the digital <cardType> card - Interaction Link
        Given a user with the following criteria
            | criteria        |
            | digital card on |
        And the user accesses to the "operative" "<cardType>" card product detail
        And the user accesses to digital card screen
        And the analytics interceptor service is initiated
        When the user actives dynamic CVV
        Then the analytics events contains the following variables
            | item                    | value                | type             | event            |
            | analytics               | analytics/glomo_base | json schema      | Interaction Link |
            | version DL              | 20250414_5.0         | string           | Interaction Link |
            | page instance ID        | de                   | string           | Interaction Link |
            | sysEnv                  | app                  | string           | Interaction Link |
            | page segment            | personas             | string           | Interaction Link |
            | page intent             | informacion          | string           | Interaction Link |
            | business unit           | BBVA Mexico          | string           | Interaction Link |
            | page area               | privada              | string           | Interaction Link |
            | language                | ES                   | string           | Interaction Link |
            | channel                 | online               | string           | Interaction Link |
            | site app name           | App BBVA Mexico      | string           | Interaction Link |
            | project name            | Glomo                | string           | Interaction Link |
            | level 1                 | tarjeta digital      | string           | Interaction Link |
            | level 2                 | <level>              | string           | Interaction Link |
            | level 3                 | detalle              | string           | Interaction Link |
            | page name               | <pageName>           | string           | Interaction Link |
            | interaction level       | ver cvv dinamico     | string           | Interaction Link |
            | device mobile           | si                   | string           | Interaction Link |
            | device root             |                      | string           | Interaction Link |
            | user userState          | logado               | string           | Interaction Link |
            | profile ID              | profileID            | regexp named     | Interaction Link |
            | user gender             | gender               | regexp named     | Interaction Link |
            | user age                | age                  | regexp named     | Interaction Link |
            | internal campaign       |                      | empty array      | Interaction Link |
            | optimization attributes |                      | empty array      | Interaction Link |
            | application             |                      | empty str object | Interaction Link |
            | products attributes     |                      | empty array      | Interaction Link |

        Examples:
            | cardType | pageName                                             | level   |
            | credit   | app:privada:personas:tarjeta digital:credito:detalle | credito |
            | debit    | app:privada:personas:tarjeta digital:debito:detalle  | debito  |
