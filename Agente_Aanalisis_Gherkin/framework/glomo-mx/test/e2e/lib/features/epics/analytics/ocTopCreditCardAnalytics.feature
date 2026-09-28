@ocTopCreditCardAnalytics
Feature: Analytics - OC Top Credit Card

    @ANA_OCTCC001
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Top Credit Card - App Page Visit
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        When the user accesses to the top credit card offer detail
        Then the device contains the following variables
            | item                     | value                                            | type         |
            | analytics                | analytics/glomo_base                             | json schema  |
            | version DL               | 20250414_5.0                                     | string       |
            | page name                | app:privada:personas:ascenso one click:1 detalle | string       |
            | level 1                  | ascenso one click                                | string       |
            | level 2                  | 1 detalle                                        | string       |
            | language                 | ES                                               | string       |
            | page area                | privada                                          | string       |
            | page intent              | transaccion                                      | string       |
            | channel                  | online                                           | string       |
            | page instance ID         | de                                               | string       |
            | page info version        | appVersion                                       | regexp named |
            | page segment             | personas                                         | string       |
            | sysEnv                   | app                                              | string       |
            | business unit            | BBVA Mexico                                      | string       |
            | site app name            | App BBVA Mexico                                  | string       |
            | project name             | Glomo                                            | string       |
            | device mobile            | si                                               | string       |
            | user userState           | logado                                           | string       |
            | user segment global      | 003001                                           | string       |
            | profile ID               | profileID                                        | regexp named |
            | user gender              | gender                                           | regexp named |
            | user age                 | age                                              | regexp named |
            | global application       | credit card upgrade                              | string       |
            | application name         | ascenso one click                                | string       |
            | application type         | contratacion                                     | string       |
            | application step         | 1 detalle                                        | string       |
            | fulfillment model        | online                                           | string       |
            | product primary category | tarjetas                                         | string       |
            | product subtype          | tarjetas credito                                 | string       |
            | internal campaign        |                                                  | empty array  |
            | optimization attributes  |                                                  | empty array  |

    @ANA_EVENT_OCTCC002
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario Outline: OC Top Credit Card - App Started <element> element
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the analytics interceptor service is initiated
        When the user accesses "<element>" element screen
        Then the analytics events contains the following variables
            | item                     | value                                            | type         | event       |
            | analytics                | analytics/glomo_base                             | json schema  | App Started |
            | version DL               | 20250414_5.0                                     | string       | App Started |
            | page name                | app:privada:personas:ascenso one click:1 detalle | string       | App Started |
            | level 1                  | ascenso one click                                | string       | App Started |
            | level 2                  | 1 detalle                                        | string       | App Started |
            | language                 | ES                                               | string       | App Started |
            | page area                | privada                                          | string       | App Started |
            | page intent              | transaccion                                      | string       | App Started |
            | channel                  | online                                           | string       | App Started |
            | page instance ID         | de                                               | string       | App Started |
            | page info version        | appVersion                                       | regexp named | App Started |
            | page segment             | personas                                         | string       | App Started |
            | sysEnv                   | app                                              | string       | App Started |
            | business unit            | BBVA Mexico                                      | string       | App Started |
            | site app name            | App BBVA Mexico                                  | string       | App Started |
            | project name             | Glomo                                            | string       | App Started |
            | device mobile            | si                                               | string       | App Started |
            | user userState           | logado                                           | string       | App Started |
            | user segment global      | 003001                                           | string       | App Started |
            | profile ID               | profileID                                        | regexp named | App Started |
            | user gender              | gender                                           | regexp named | App Started |
            | user age                 | age                                              | regexp named | App Started |
            | global application       | credit card upgrade                              | string       | App Started |
            | application name         | ascenso one click                                | string       | App Started |
            | application type         | contratacion                                     | string       | App Started |
            | application step         | <step>                                           | string       | App Started |
            | fulfillment model        | online                                           | string       | App Started |
            | product primary category | tarjetas                                         | string       | App Started |
            | product subtype          | tarjetas credito                                 | string       | App Started |
            | internal campaign        |                                                  | empty array  | App Started |
            | optimization attributes  |                                                  | empty array  | App Started |

        Examples:
            | element   | step                  |
            | cat       | cat                   |
            | interest  | tasa de interes       |
            | annuity   | anualidad             |
            | benefits  | ver los beneficios    |
            | continue  | continuar             |

    @ANA_EVENT_OCTCC003
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Top Credit Card - App Step 2
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the analytics interceptor service is initiated
        When the user accepts top credit card offer detail
        Then the analytics events contains the following variables
            | item                     | value                                              | type         | event      |
            | analytics                | analytics/glomo_base                               | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                       | string       | App Step 2 |
            | page name                | app:privada:personas:ascenso one click:2 domicilio | string       | App Step 2 |
            | level 1                  | ascenso one click                                  | string       | App Step 2 |
            | level 2                  | 2 domicilio                                        | string       | App Step 2 |
            | language                 | ES                                                 | string       | App Step 2 |
            | page area                | privada                                            | string       | App Step 2 |
            | page intent              | transaccion                                        | string       | App Step 2 |
            | channel                  | online                                             | string       | App Step 2 |
            | page instance ID         | de                                                 | string       | App Step 2 |
            | page info version        | appVersion                                         | regexp named | App Step 2 |
            | page segment             | personas                                           | string       | App Step 2 |
            | sysEnv                   | app                                                | string       | App Step 2 |
            | business unit            | BBVA Mexico                                        | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                    | string       | App Step 2 |
            | project name             | Glomo                                              | string       | App Step 2 |
            | device mobile            | si                                                 | string       | App Step 2 |
            | user userState           | logado                                             | string       | App Step 2 |
            | user segment global      | 003001                                             | string       | App Step 2 |
            | profile ID               | profileID                                          | regexp named | App Step 2 |
            | user gender              | gender                                             | regexp named | App Step 2 |
            | user age                 | age                                                | regexp named | App Step 2 |
            | global application       | credit card upgrade                                | string       | App Step 2 |
            | application name         | ascenso one click                                  | string       | App Step 2 |
            | application type         | contratacion                                       | string       | App Step 2 |
            | application step         | 2 domicilio                                        | string       | App Step 2 |
            | fulfillment model        | online                                             | string       | App Step 2 |
            | product primary category | tarjetas                                           | string       | App Step 2 |
            | product subtype          | tarjetas credito                                   | string       | App Step 2 |
            | product name             | tarjeta oro                                        | string       | App Step 2 |
            | product amount           | 87533.31                                           | number       | App Step 2 |
            | product interest rate    | 68.54                                              | number       | App Step 2 |
            | internal campaign        |                                                    | empty array  | App Step 2 |
            | optimization attributes  |                                                    | empty array  | App Step 2 |

    @ANA_EVENT_OCTCC004
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Top Credit Card - App Step 3
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the analytics interceptor service is initiated
        And the user accepts top credit card offer detail
        When the user accepts his address information from top credit card offer
        Then the analytics events contains the following variables
            | item                     | value                                                           | type         | event      |
            | analytics                | analytics/glomo_base                                            | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                    | string       | App Step 3 |
            | page name                | app:privada:personas:ascenso one click:3 terminos y condiciones | string       | App Step 3 |
            | level 1                  | ascenso one click                                               | string       | App Step 3 |
            | level 2                  | 3 terminos y condiciones                                        | string       | App Step 3 |
            | language                 | ES                                                              | string       | App Step 3 |
            | page area                | privada                                                         | string       | App Step 3 |
            | page intent              | transaccion                                                     | string       | App Step 3 |
            | channel                  | online                                                          | string       | App Step 3 |
            | page instance ID         | de                                                              | string       | App Step 3 |
            | page info version        | appVersion                                                      | regexp named | App Step 3 |
            | page segment             | personas                                                        | string       | App Step 3 |
            | sysEnv                   | app                                                             | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                     | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                 | string       | App Step 3 |
            | project name             | Glomo                                                           | string       | App Step 3 |
            | device mobile            | si                                                              | string       | App Step 3 |
            | user userState           | logado                                                          | string       | App Step 3 |
            | user segment global      | 003001                                                          | string       | App Step 3 |
            | profile ID               | profileID                                                       | regexp named | App Step 3 |
            | user gender              | gender                                                          | regexp named | App Step 3 |
            | user age                 | age                                                             | regexp named | App Step 3 |
            | global application       | credit card upgrade                                             | string       | App Step 3 |
            | application name         | ascenso one click                                               | string       | App Step 3 |
            | application type         | contratacion                                                    | string       | App Step 3 |
            | application step         | 3 terminos y condiciones                                        | string       | App Step 3 |
            | fulfillment model        | online                                                          | string       | App Step 3 |
            | product primary category | tarjetas                                                        | string       | App Step 3 |
            | product subtype          | tarjetas credito                                                | string       | App Step 3 |
            | product name             | tarjeta oro                                                     | string       | App Step 3 |
            | product amount           | 87533.31                                                        | number       | App Step 3 |
            | product interest rate    | 68.54                                                           | number       | App Step 3 |
            | internal campaign        |                                                                 | empty array  | App Step 3 |
            | optimization attributes  |                                                                 | empty array  | App Step 3 |

    @ANA_EVENT_OCTCC005
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Top Credit Card - App Step 4
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the analytics interceptor service is initiated
        When the user goes to summary screen
        Then the analytics events contains the following variables
            | item                     | value                                                 | type         | event      |
            | analytics                | analytics/glomo_base                                  | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                          | string       | App Step 4 |
            | page name                | app:privada:personas:ascenso one click:4 confirmacion | string       | App Step 4 |
            | level 1                  | ascenso one click                                     | string       | App Step 4 |
            | level 2                  | 4 confirmacion                                        | string       | App Step 4 |
            | language                 | ES                                                    | string       | App Step 4 |
            | page area                | privada                                               | string       | App Step 4 |
            | page intent              | transaccion                                           | string       | App Step 4 |
            | channel                  | online                                                | string       | App Step 4 |
            | page instance ID         | de                                                    | string       | App Step 4 |
            | page info version        | appVersion                                            | regexp named | App Step 4 |
            | page segment             | personas                                              | string       | App Step 4 |
            | sysEnv                   | app                                                   | string       | App Step 4 |
            | business unit            | BBVA Mexico                                           | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                       | string       | App Step 4 |
            | project name             | Glomo                                                 | string       | App Step 4 |
            | device mobile            | si                                                    | string       | App Step 4 |
            | user userState           | logado                                                | string       | App Step 4 |
            | user segment global      | 003001                                                | string       | App Step 4 |
            | profile ID               | profileID                                             | regexp named | App Step 4 |
            | user gender              | gender                                                | regexp named | App Step 4 |
            | user age                 | age                                                   | regexp named | App Step 4 |
            | global application       | credit card upgrade                                   | string       | App Step 4 |
            | application name         | ascenso one click                                     | string       | App Step 4 |
            | application type         | contratacion                                          | string       | App Step 4 |
            | application step         | 4 confirmacion                                        | string       | App Step 4 |
            | fulfillment model        | online                                                | string       | App Step 4 |
            | product primary category | tarjetas                                              | string       | App Step 4 |
            | product subtype          | tarjetas credito                                      | string       | App Step 4 |
            | product name             | tarjeta oro                                           | string       | App Step 4 |
            | product amount           | 87533.31                                              | number       | App Step 4 |
            | product interest rate    | 68.54                                                 | number       | App Step 4 |
            | internal campaign        |                                                       | empty array  | App Step 4 |
            | optimization attributes  |                                                       | empty array  | App Step 4 |

    @ANA_EVENT_OCTCC006
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Top Credit Card - App Step 5
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the analytics interceptor service is initiated
        And the user goes to summary screen
        When the user accepts the summary from top credit card offer
        Then the analytics events contains the following variables
            | item                     | value                                        | type         | event      |
            | analytics                | analytics/glomo_base                         | json schema  | App Step 5 |
            | version DL               | 20250414_5.0                                 | string       | App Step 5 |
            | page name                | app:privada:personas:ascenso one click:5 otp | string       | App Step 5 |
            | level 1                  | ascenso one click                            | string       | App Step 5 |
            | level 2                  | 5 otp                                        | string       | App Step 5 |
            | language                 | ES                                           | string       | App Step 5 |
            | page area                | privada                                      | string       | App Step 5 |
            | page intent              | transaccion                                  | string       | App Step 5 |
            | channel                  | online                                       | string       | App Step 5 |
            | page instance ID         | de                                           | string       | App Step 5 |
            | page info version        | appVersion                                   | regexp named | App Step 5 |
            | page segment             | personas                                     | string       | App Step 5 |
            | sysEnv                   | app                                          | string       | App Step 5 |
            | business unit            | BBVA Mexico                                  | string       | App Step 5 |
            | site app name            | App BBVA Mexico                              | string       | App Step 5 |
            | project name             | Glomo                                        | string       | App Step 5 |
            | device mobile            | si                                           | string       | App Step 5 |
            | user userState           | logado                                       | string       | App Step 5 |
            | user segment global      | 003001                                       | string       | App Step 5 |
            | profile ID               | profileID                                    | regexp named | App Step 5 |
            | user gender              | gender                                       | regexp named | App Step 5 |
            | user age                 | age                                          | regexp named | App Step 5 |
            | global application       | credit card upgrade                          | string       | App Step 5 |
            | application name         | ascenso one click                            | string       | App Step 5 |
            | application type         | contratacion                                 | string       | App Step 5 |
            | application step         | 5 otp                                        | string       | App Step 5 |
            | fulfillment model        | online                                       | string       | App Step 5 |
            | product primary category | tarjetas                                     | string       | App Step 5 |
            | product subtype          | tarjetas credito                             | string       | App Step 5 |
            | product name             | tarjeta oro                                  | string       | App Step 5 |
            | product amount           | 87533.31                                     | number       | App Step 5 |
            | product interest rate    | 68.54                                        | number       | App Step 5 |
            | internal campaign        |                                              | empty array  | App Step 5 |
            | optimization attributes  |                                              | empty array  | App Step 5 |

    @ANA_EVENT_OCTCC007
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Top Credit Card - App Completed
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the analytics interceptor service is initiated
        When the user request upgrade card from top credit card offer
        Then the analytics events contains the following variables
            | item                         | value                                                 | type         | event         |
            | analytics                    | analytics/glomo_base                                  | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                          | string       | App Completed |
            | page name                    | app:privada:personas:ascenso one click:pagina exitosa | string       | App Completed |
            | level 1                      | ascenso one click                                     | string       | App Completed |
            | level 2                      | pagina exitosa                                        | string       | App Completed |
            | language                     | ES                                                    | string       | App Completed |
            | page area                    | privada                                               | string       | App Completed |
            | page intent                  | transaccion                                           | string       | App Completed |
            | channel                      | online                                                | string       | App Completed |
            | page instance ID             | de                                                    | string       | App Completed |
            | page info version            | appVersion                                            | regexp named | App Completed |
            | page segment                 | personas                                              | string       | App Completed |
            | sysEnv                       | app                                                   | string       | App Completed |
            | business unit                | BBVA Mexico                                           | string       | App Completed |
            | site app name                | App BBVA Mexico                                       | string       | App Completed |
            | project name                 | Glomo                                                 | string       | App Completed |
            | device mobile                | si                                                    | string       | App Completed |
            | user userState               | logado                                                | string       | App Completed |
            | user segment global          | 003001                                                | string       | App Completed |
            | profile ID                   | profileID                                             | regexp named | App Completed |
            | user gender                  | gender                                                | regexp named | App Completed |
            | user age                     | age                                                   | regexp named | App Completed |
            | global application           | credit card upgrade                                   | string       | App Completed |
            | application name             | ascenso one click                                     | string       | App Completed |
            | application type             | contratacion                                          | string       | App Completed |
            | application step             | pagina exitosa                                        | string       | App Completed |
            | application state            | contratado                                            | string       | App Completed |
            | application operation number | FaKeOuBGc8Gn0KVzKaa1aDwfWCMhB5ox                      | string       | App Completed |
            | fulfillment model            | online                                                | string       | App Completed |
            | product primary category     | tarjetas                                              | string       | App Completed |
            | product subtype              | tarjetas credito                                      | string       | App Completed |
            | product name                 | tarjeta platinum                                      | string       | App Completed |
            | product amount               | 78100.1                                               | number       | App Completed |
            | product interest rate        | 63.54                                                 | number       | App Completed |
            | product state                | contratado                                            | string       | App Completed |
            | internal campaign            |                                                       | empty array  | App Completed |
            | optimization attributes      |                                                       | empty array  | App Completed |

    @ANA_EVENT_OCTCC008
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario Outline: OC Top Credit Card - Page View <huella>
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the analytics interceptor service is initiated
        When the user accesses "<element>" element screen
        Then the analytics events contains the following variables
            | item                    | value                                            | type             | event     |
            | analytics               | analytics/glomo_base                             | json schema      | Page View |
            | version DL              | 20250414_5.0                                     | string           | Page View |
            | page name               | app:privada:personas:ascenso one click:<huella>  | string           | Page View |
            | level 1                 | ascenso one click                                | string           | Page View |
            | level 2                 | <huella>                                         | string           | Page View |
            | language                | ES                                               | string           | Page View |
            | page area               | privada                                          | string           | Page View |
            | page intent             | transaccion                                      | string           | Page View |
            | channel                 | online                                           | string           | Page View |
            | page instance ID        | de                                               | string           | Page View |
            | page info version       | appVersion                                       | regexp named     | Page View |
            | page segment            | personas                                         | string           | Page View |
            | sysEnv                  | app                                              | string           | Page View |
            | business unit           | BBVA Mexico                                      | string           | Page View |
            | site app name           | App BBVA Mexico                                  | string           | Page View |
            | project name            | Glomo                                            | string           | Page View |
            | device mobile           | si                                               | string           | Page View |
            | user userState          | logado                                           | string           | Page View |
            | user segment global     | 003001                                           | string           | Page View |
            | profile ID              | profileID                                        | regexp named     | Page View |
            | user gender             | gender                                           | regexp named     | Page View |
            | user age                | age                                              | regexp named     | Page View |
            | internal campaign       |                                                  | empty array      | Page View |
            | optimization attributes |                                                  | empty array      | Page View |
            | application             |                                                  | empty str object | Page View |
            | products attributes     |                                                  | empty array      | Page View |

        Examples:
            | element   | huella                |
            | cat       | cat                   |
            | interest  | tasa de interes       |
            | annuity   | anualidad             |

    @ANA_EVENT_OCTCC009
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Top Credit Card - Page View faqs
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the analytics interceptor service is initiated
        When the user accesses to the faqs list screen
        Then the analytics events contains the following variables
            | item                    | value                                       | type             | event     |
            | analytics               | analytics/glomo_base                        | json schema      | Page View |
            | version DL              | 20250414_5.0                                | string           | Page View |
            | page name               | app:privada:personas:ascenso one click:faqs | string           | Page View |
            | level 1                 | ascenso one click                           | string           | Page View |
            | level 2                 | faqs                                        | string           | Page View |
            | language                | ES                                          | string           | Page View |
            | page area               | privada                                     | string           | Page View |
            | page intent             | transaccion                                 | string           | Page View |
            | channel                 | online                                      | string           | Page View |
            | page instance ID        | de                                          | string           | Page View |
            | page info version       | appVersion                                  | regexp named     | Page View |
            | page segment            | personas                                    | string           | Page View |
            | sysEnv                  | app                                         | string           | Page View |
            | business unit           | BBVA Mexico                                 | string           | Page View |
            | site app name           | App BBVA Mexico                             | string           | Page View |
            | project name            | Glomo                                       | string           | Page View |
            | device mobile           | si                                          | string           | Page View |
            | user userState          | logado                                      | string           | Page View |
            | user segment global     | 003001                                      | string           | Page View |
            | profile ID              | profileID                                   | regexp named     | Page View |
            | user gender             | gender                                      | regexp named     | Page View |
            | user age                | age                                         | regexp named     | Page View |
            | internal campaign       |                                             | empty array      | Page View |
            | optimization attributes |                                             | empty array      | Page View |
            | application             |                                             | empty str object | Page View |
            | products attributes     |                                             | empty array      | Page View |

    @ANA_EVENT_OCTCC010
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Top Credit Card - Internal Link faqs
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the analytics interceptor service is initiated
        And the user accesses to the faqs list screen
        When the user consults some question to faqs list from top credit card offer
        Then the analytics events contains the following variables
            | item                    | value                                       | type             | event         |
            | analytics               | analytics/glomo_base                        | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                | string           | Internal Link |
            | page name               | app:privada:personas:ascenso one click:faqs | string           | Internal Link |
            | level 1                 | ascenso one click                           | string           | Internal Link |
            | level 2                 | faqs                                        | string           | Internal Link |
            | language                | ES                                          | string           | Internal Link |
            | page area               | privada                                     | string           | Internal Link |
            | page intent             | transaccion                                 | string           | Internal Link |
            | channel                 | online                                      | string           | Internal Link |
            | page instance ID        | de                                          | string           | Internal Link |
            | page info version       | appVersion                                  | regexp named     | Internal Link |
            | page segment            | personas                                    | string           | Internal Link |
            | sysEnv                  | app                                         | string           | Internal Link |
            | business unit           | BBVA Mexico                                 | string           | Internal Link |
            | site app name           | App BBVA Mexico                             | string           | Internal Link |
            | project name            | Glomo                                       | string           | Internal Link |
            | link name               | que es un ascenso y que beneficios tiene    | string           | Internal Link |
            | device mobile           | si                                          | string           | Internal Link |
            | user userState          | logado                                      | string           | Internal Link |
            | user segment global     | 003001                                      | string           | Internal Link |
            | profile ID              | profileID                                   | regexp named     | Internal Link |
            | user gender             | gender                                      | regexp named     | Internal Link |
            | user age                | age                                         | regexp named     | Internal Link |
            | internal campaign       |                                             | empty array      | Internal Link |
            | optimization attributes |                                             | empty array      | Internal Link |
            | application             |                                             | empty str object | Internal Link |
            | products attributes     |                                             | empty array      | Internal Link |

    @ANA_EVENT_OCTCC011
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Top Credit Card - Error Incomplete Process
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the analytics interceptor service is initiated
        When the user retries "3" more times
        Then the analytics events contains the following variables
            | item                    | value                                                           | type             | event     |
            | analytics               | analytics/glomo_base                                            | json schema      | Page View |
            | version DL              | 20250414_5.0                                                    | string           | Page View |
            | page name               | app:privada:personas:ascenso one click:error proceso incompleto | string           | Page View |
            | level 1                 | ascenso one click                                               | string           | Page View |
            | level 2                 | error proceso incompleto                                        | string           | Page View |
            | error page              | error proceso incompleto                                        | string           | Page View |
            | language                | ES                                                              | string           | Page View |
            | page area               | privada                                                         | string           | Page View |
            | page intent             | transaccion                                                     | string           | Page View |
            | channel                 | online                                                          | string           | Page View |
            | page instance ID        | de                                                              | string           | Page View |
            | page info version       | appVersion                                                      | regexp named     | Page View |
            | page segment            | personas                                                        | string           | Page View |
            | sysEnv                  | app                                                             | string           | Page View |
            | business unit           | BBVA Mexico                                                     | string           | Page View |
            | site app name           | App BBVA Mexico                                                 | string           | Page View |
            | project name            | Glomo                                                           | string           | Page View |
            | device mobile           | si                                                              | string           | Page View |
            | user userState          | logado                                                          | string           | Page View |
            | user segment global     | 003001                                                          | string           | Page View |
            | profile ID              | profileID                                                       | regexp named     | Page View |
            | user gender             | gender                                                          | regexp named     | Page View |
            | user age                | age                                                             | regexp named     | Page View |
            | internal campaign       |                                                                 | empty array      | Page View |
            | optimization attributes |                                                                 | empty array      | Page View |
            | application             |                                                                 | empty str object | Page View |
            | products attributes     |                                                                 | empty array      | Page View |

    @ANA_EVENT_OCTCC012
    @analytics
    @web @ios @android @manual @JIRA.GLOMOGL-20657
    @MX @backend(test) @vbank @web-done
    Scenario: OC Top Credit Card - Error Information not loaded
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the analytics interceptor service is initiated
        And the user accepts top credit card offer detail
        And the user accepts his address information from top credit card offer
        When the user consults document pdf to terms and conditions
        Then the analytics events contains the following variables
            | item                    | value                                                             | type             | event     |
            | analytics               | analytics/glomo_base                                              | json schema      | Page View |
            | version DL              | 20250414_5.0                                                      | string           | Page View |
            | page name               | app:privada:personas:ascenso one click:error carga de informacion | string           | Page View |
            | level 1                 | ascenso one click                                                 | string           | Page View |
            | level 2                 | carga de informacion                                              | string           | Page View |
            | error page              | carga de informacion                                              | string           | Page View |
            | language                | ES                                                                | string           | Page View |
            | page area               | privada                                                           | string           | Page View |
            | page intent             | transaccion                                                       | string           | Page View |
            | channel                 | online                                                            | string           | Page View |
            | page instance ID        | de                                                                | string           | Page View |
            | page info version       | appVersion                                                        | regexp named     | Page View |
            | page segment            | personas                                                          | string           | Page View |
            | sysEnv                  | app                                                               | string           | Page View |
            | business unit           | BBVA Mexico                                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                                   | string           | Page View |
            | project name            | Glomo                                                             | string           | Page View |
            | device mobile           | si                                                                | string           | Page View |
            | user userState          | logado                                                            | string           | Page View |
            | user segment global     | 003001                                                            | string           | Page View |
            | profile ID              | profileID                                                         | regexp named     | Page View |
            | user gender             | gender                                                            | regexp named     | Page View |
            | user age                | age                                                               | regexp named     | Page View |
            | internal campaign       |                                                                   | empty array      | Page View |
            | optimization attributes |                                                                   | empty array      | Page View |
            | application             |                                                                   | empty str object | Page View |
            | products attributes     |                                                                   | empty array      | Page View |

    @ANA_EVENT_OCTCC013
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: OC Top Credit Card - Error Address not loaded
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the analytics interceptor service is initiated
        And the user accepts top credit card offer detail
        And the user "attempt show" address information
        When the user retries "3" more times
        Then the analytics events contains the following variables
            | item                    | value                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                 | string           | Page View |
            | page name               | app:privada:personas:ascenso one click:error carga direccion | string           | Page View |
            | level 1                 | ascenso one click                                            | string           | Page View |
            | level 2                 | error carga direccion                                        | string           | Page View |
            | error page              | error carga direccion                                        | string           | Page View |
            | language                | ES                                                           | string           | Page View |
            | page area               | privada                                                      | string           | Page View |
            | page intent             | transaccion                                                  | string           | Page View |
            | channel                 | online                                                       | string           | Page View |
            | page instance ID        | de                                                           | string           | Page View |
            | page info version       | appVersion                                                   | regexp named     | Page View |
            | page segment            | personas                                                     | string           | Page View |
            | sysEnv                  | app                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                              | string           | Page View |
            | project name            | Glomo                                                        | string           | Page View |
            | device mobile           | si                                                           | string           | Page View |
            | user userState          | logado                                                       | string           | Page View |
            | user segment global     | 003001                                                       | string           | Page View |
            | profile ID              | profileID                                                    | regexp named     | Page View |
            | user gender             | gender                                                       | regexp named     | Page View |
            | user age                | age                                                          | regexp named     | Page View |
            | internal campaign       |                                                              | empty array      | Page View |
            | optimization attributes |                                                              | empty array      | Page View |
            | application             |                                                              | empty str object | Page View |
            | products attributes     |                                                              | empty array      | Page View |
