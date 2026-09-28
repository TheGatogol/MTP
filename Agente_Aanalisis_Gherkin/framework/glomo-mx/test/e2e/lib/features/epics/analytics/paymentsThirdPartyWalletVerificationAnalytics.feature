@thirdPartyWalletVerificationAnalytics
Feature: Analytics - Third Party Wallet Verification

    @ANA_TPWV001
    @MX @backend(test)
    @native @ios @android @analytics
    @manual @JIRA.GLOMOGL-21829
    Scenario Outline: Access to Glomo with only one card to verify from <payment_platform>
        Given the user who starts proccess verification of a card from <payment_platform>
        And the user logs in GloMo app
        When the user is in "check card" screen
        Then the device contains the following variables
            | item                    | value                                                               | type             |
            | analytics               | analytics/glomo_base                                                | json schema      |
            | version DL              | 20250414_5.0                                                        | string           |
            | page name               | app:privada:personas:tarjetas:<payment_platform>:verificar tarjetas | string           |
            | level 1                 | tarjetas                                                            | string           |
            | level 2                 | <payment_platform>                                                  | string           |
            | level 3                 | verificar tarjetas                                                  | string           |
            | language                | ES                                                                  | string           |
            | page area               | privada                                                             | string           |
            | page intent             | informacion                                                         | string           |
            | channel                 | online                                                              | string           |
            | page instance ID        | de                                                                  | string           |
            | page info version       | appVersion                                                          | regexp named     |
            | page segment            | personas                                                            | string           |
            | sysEnv                  | app                                                                 | string           |
            | business unit           | BBVA Mexico                                                         | string           |
            | site app name           | App BBVA Mexico                                                     | string           |
            | project name            | Glomo                                                               | string           |
            | device mobile           | si                                                                  | string           |
            | user userState          | logado                                                              | string           |
            | user segment global     | 003001                                                              | string           |
            | profile ID              | profileID                                                           | regexp named     |
            | user gender             | gender                                                              | regexp named     |
            | user age                | age                                                                 | regexp named     |
            | internal campaign       |                                                                     | empty array      |
            | optimization attributes |                                                                     | empty array      |
            | application             |                                                                     | empty str object |
            | products attributes     |                                                                     | empty array      |

        Examples:
            | payment_platform |
            | google Pay       |
            | apple Pay        |

    @ANA_TPWV002
    @MX @backend(test)
    @native @ios @android @analytics
    @manual @JIRA.GLOMOGL-21829
    Scenario Outline: Check card when the user only has one credit card to verify from <payment_platform>
        Given the user who starts proccess verification of a credit card from <payment_platform>
        And the user logs in GloMo app
        And the user is in "check card" screen
        When the user verifies the only credit card
        Then the device contains the following variables
            | item                    | value                                                                       | type             |
            | analytics               | analytics/glomo_base                                                        | json schema      |
            | version DL              | 20250414_5.0                                                                | string           |
            | page name               | app:privada:personas:tarjetas:credito:<payment_platform>:verificar tarjetas | string           |
            | level 1                 | tarjetas                                                                    | string           |
            | level 2                 | credito                                                                     | string           |
            | level 3                 | <payment_platform>                                                          | string           |
            | level 4                 | verificar tarjetas                                                          | string           |
            | link name               | verificar tarjeta                                                           | string           |
            | language                | ES                                                                          | string           |
            | page area               | privada                                                                     | string           |
            | page intent             | informacion                                                                 | string           |
            | channel                 | online                                                                      | string           |
            | page instance ID        | de                                                                          | string           |
            | page info version       | appVersion                                                                  | regexp named     |
            | page segment            | personas                                                                    | string           |
            | sysEnv                  | app                                                                         | string           |
            | business unit           | BBVA Mexico                                                                 | string           |
            | site app name           | App BBVA Mexico                                                             | string           |
            | project name            | Glomo                                                                       | string           |
            | device mobile           | si                                                                          | string           |
            | user userState          | logado                                                                      | string           |
            | user segment global     | 003001                                                                      | string           |
            | profile ID              | profileID                                                                   | regexp named     |
            | user gender             | gender                                                                      | regexp named     |
            | user age                | age                                                                         | regexp named     |
            | internal campaign       |                                                                             | empty array      |
            | optimization attributes |                                                                             | empty array      |
            | application             |                                                                             | empty str object |
            | products attributes     |                                                                             | empty array      |

        Examples:
            | payment_platform |
            | google Pay       |
            | apple Pay        |

    @ANA_TPWV003
    @MX @backend(test)
    @native @ios @android @analytics
    @manual @JIRA.GLOMOGL-21829
    Scenario Outline: Success card verification when the user has already verified his only credit card from <payment_platform>
        Given the user who starts proccess verification of a credit card from <payment_platform>
        And the user logs in GloMo app
        And the user is in "check card" screen
        And the user verifies the only credit card
        When the user continues the "check card" screen
        Then the device contains the following variables
            | item                    | value                                                                               | type             |
            | analytics               | analytics/glomo_base                                                                | json schema      |
            | version DL              | 20250414_5.0                                                                        | string           |
            | page name               | app:privada:personas:tarjetas:credito:<payment_platform>:verificar tarjetas:exitoso | string           |
            | level 1                 | tarjetas                                                                            | string           |
            | level 2                 | credito                                                                             | string           |
            | level 3                 | <payment_platform>                                                                  | string           |
            | level 4                 | verificar tarjetas                                                                  | string           |
            | level 5                 | exitoso                                                                             | string           |
            | language                | ES                                                                                  | string           |
            | page area               | privada                                                                             | string           |
            | page intent             | informacion                                                                         | string           |
            | channel                 | online                                                                              | string           |
            | page instance ID        | de                                                                                  | string           |
            | page info version       | appVersion                                                                          | regexp named     |
            | page segment            | personas                                                                            | string           |
            | sysEnv                  | app                                                                                 | string           |
            | business unit           | BBVA Mexico                                                                         | string           |
            | site app name           | App BBVA Mexico                                                                     | string           |
            | project name            | Glomo                                                                               | string           |
            | device mobile           | si                                                                                  | string           |
            | user userState          | logado                                                                              | string           |
            | user segment global     | 003001                                                                              | string           |
            | profile ID              | profileID                                                                           | regexp named     |
            | user gender             | gender                                                                              | regexp named     |
            | user age                | age                                                                                 | regexp named     |
            | internal campaign       |                                                                                     | empty array      |
            | optimization attributes |                                                                                     | empty array      |
            | application             |                                                                                     | empty str object |
            | products attributes     |                                                                                     | empty array      |

        Examples:
            | payment_platform |
            | google Pay       |
            | apple Pay        |

    @ANA_TPWV004
    @MX @backend(test)
    @native @ios @android @analytics
    @manual @JIRA.GLOMOGL-21829
    Scenario Outline: Check card when the user only has one debit card to verify from <payment_platform>
        Given the user who starts proccess verification of a debit card from <payment_platform>
        And the user logs in GloMo app
        And the user is in "check card" screen
        When the user verifies the only debit card
        Then the device contains the following variables
            | item                    | value                                                                       | type             |
            | analytics               | analytics/glomo_base                                                        | json schema      |
            | version DL              | 20250414_5.0                                                                | string           |
            | page name               | app:privada:personas:tarjetas:debito:<payment_platform>:verificar tarjetas  | string           |
            | level 1                 | tarjetas                                                                    | string           |
            | level 2                 | debito                                                                      | string           |
            | level 3                 | <payment_platform>                                                          | string           |
            | level 4                 | verificar tarjetas                                                          | string           |
            | link name               | verificar tarjeta                                                           | string           |
            | language                | ES                                                                          | string           |
            | page area               | privada                                                                     | string           |
            | page intent             | informacion                                                                 | string           |
            | channel                 | online                                                                      | string           |
            | page instance ID        | de                                                                          | string           |
            | page info version       | appVersion                                                                  | regexp named     |
            | page segment            | personas                                                                    | string           |
            | sysEnv                  | app                                                                         | string           |
            | business unit           | BBVA Mexico                                                                 | string           |
            | site app name           | App BBVA Mexico                                                             | string           |
            | project name            | Glomo                                                                       | string           |
            | device mobile           | si                                                                          | string           |
            | user userState          | logado                                                                      | string           |
            | user segment global     | 003001                                                                      | string           |
            | profile ID              | profileID                                                                   | regexp named     |
            | user gender             | gender                                                                      | regexp named     |
            | user age                | age                                                                         | regexp named     |
            | internal campaign       |                                                                             | empty array      |
            | optimization attributes |                                                                             | empty array      |
            | application             |                                                                             | empty str object |
            | products attributes     |                                                                             | empty array      |

        Examples:
            | payment_platform |
            | google Pay       |
            | apple Pay        |

    @ANA_TPWV005
    @MX @backend(test)
    @native @ios @android @analytics
    @manual @JIRA.GLOMOGL-21829
    Scenario Outline: Success card verification when the user has already verified his only debit card from <payment_platform>
        Given the user who starts proccess verification of a debit card from <payment_platform>
        And the user logs in GloMo app
        And the user is in "check card" screen
        And the user verifies the only debit card
        When the user continues the "check card" screen
        Then the device contains the following variables
            | item                    | value                                                                              | type             |
            | analytics               | analytics/glomo_base                                                               | json schema      |
            | version DL              | 20250414_5.0                                                                       | string           |
            | page name               | app:privada:personas:tarjetas:debito:<payment_platform>:verificar tarjetas:exitoso | string           |
            | level 1                 | tarjetas                                                                           | string           |
            | level 2                 | debito                                                                             | string           |
            | level 3                 | <payment_platform>                                                                 | string           |
            | level 4                 | verificar tarjetas                                                                 | string           |
            | level 5                 | exitoso                                                                            | string           |
            | language                | ES                                                                                 | string           |
            | page area               | privada                                                                            | string           |
            | page intent             | informacion                                                                        | string           |
            | channel                 | online                                                                             | string           |
            | page instance ID        | de                                                                                 | string           |
            | page info version       | appVersion                                                                         | regexp named     |
            | page segment            | personas                                                                           | string           |
            | sysEnv                  | app                                                                                | string           |
            | business unit           | BBVA Mexico                                                                        | string           |
            | site app name           | App BBVA Mexico                                                                    | string           |
            | project name            | Glomo                                                                              | string           |
            | device mobile           | si                                                                                 | string           |
            | user userState          | logado                                                                             | string           |
            | user segment global     | 003001                                                                             | string           |
            | profile ID              | profileID                                                                          | regexp named     |
            | user gender             | gender                                                                             | regexp named     |
            | user age                | age                                                                                | regexp named     |
            | internal campaign       |                                                                                    | empty array      |
            | optimization attributes |                                                                                    | empty array      |
            | application             |                                                                                    | empty str object |
            | products attributes     |                                                                                    | empty array      |

        Examples:
            | payment_platform |
            | google Pay       |
            | apple Pay        |

    @ANA_TPWV006
    @MX @backend(test)
    @native @ios @android @analytics
    @manual @JIRA.GLOMOGL-21829
    Scenario Outline: Scenario Outline name: Access to Glomo with only one card not available to verify from <payment_platform>
        Given the user who starts proccess verification of a card not available from <payment_platform>
        And the user logs in GloMo app
        When the user is in "check card" screen
        Then the device contains the following variables
            | item                    | value                                                                  | type             |
            | analytics               | analytics/glomo_base                                                   | json schema      |
            | version DL              | 20250414_5.0                                                           | string           |
            | page name               | app:privada:personas:tarjetas:<payment_platform>:tarjeta no disponible | string           |
            | level 1                 | tarjetas                                                               | string           |
            | level 2                 | <payment_platform>                                                     | string           |
            | level 3                 | tarjeta no disponible                                                  | string           |
            | error page              | tarjeta no disponible                                                  | string           |
            | language                | ES                                                                     | string           |
            | page area               | privada                                                                | string           |
            | page intent             | informacion                                                            | string           |
            | channel                 | online                                                                 | string           |
            | page instance ID        | de                                                                     | string           |
            | page info version       | appVersion                                                             | regexp named     |
            | page segment            | personas                                                               | string           |
            | sysEnv                  | app                                                                    | string           |
            | business unit           | BBVA Mexico                                                            | string           |
            | site app name           | App BBVA Mexico                                                        | string           |
            | project name            | Glomo                                                                  | string           |
            | device mobile           | si                                                                     | string           |
            | user userState          | logado                                                                 | string           |
            | user segment global     | 003001                                                                 | string           |
            | profile ID              | profileID                                                              | regexp named     |
            | user gender             | gender                                                                 | regexp named     |
            | user age                | age                                                                    | regexp named     |
            | internal campaign       |                                                                        | empty array      |
            | optimization attributes |                                                                        | empty array      |
            | application             |                                                                        | empty str object |
            | products attributes     |                                                                        | empty array      |

        Examples:
            | payment_platform |
            | google Pay       |
            | apple Pay        |
