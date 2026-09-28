@travelInsuranceAnalytics
Feature: Analytics - Travel Insurance

    @ANA_TI001
    @analytics
    @MX
    @web
    @vbank
    @web-done @backend(test)
    Scenario: The user accesses to the travel insurance screen - App Page Visit
        Given a user with the following criteria
            | criteria                      |
            | travel insurance analytics    |
        When the user goes to the travel insurance operation
        Then the device contains the following variables
            | item                     | value                                                         | type         |
            | analytics                | analytics/glomo_base                                          | json schema  |
            | version DL               | 20250414_5.0                                                  | string       |
            | page name                | app:privada:personas:seguro viaje:1 detalle                   | string       |
            | level 1                  | seguro viaje                                                  | string       |
            | level 2                  | 1 detalle                                                     | string       |
            | language                 | ES                                                            | string       |
            | page area                | privada                                                       | string       |
            | page intent              | transaccion                                                   | string       |
            | channel                  | online                                                        | string       |
            | page instance ID         | de                                                            | string       |
            | page info version        | appVersion                                                    | regexp named |
            | page segment             | personas                                                      | string       |
            | sysEnv                   | app                                                           | string       |
            | business unit            | BBVA Mexico                                                   | string       |
            | site app name            | App BBVA Mexico                                               | string       |
            | project name             | DIY E2E Sales                                                 | string       |
            | device mobile            | si                                                            | string       |
            | user userState           | logado                                                        | string       |
            | profile ID               | jh99eufbc2xIy8Befq27mg                                        | string       |
            | user segment global      | 003001                                                        | string       |
            | user gender              | gender                                                        | regexp named |
            | user age                 | age                                                           | regexp named |
            | global application       | smart insurance                                               | string       |
            | application name         | seguro viaje                                                  | string       |
            | application type         | contratacion                                                  | string       |
            | application step         | 1 detalle                                                     | string       |
            | fulfillment model        | online                                                        | string       |
            | product primary category | seguros                                                       | string       |
            | product name             | seguro viaje                                                  | string       |
            | qualified visits         | true                                                          | string       |
            | internal campaign        |                                                               | empty array  |
            | optimization attributes  |                                                               | empty array  |

    @ANA_TI002
    @analytics
    @MX
    @web
    @vbank
    @web-done @backend(test)
    Scenario: Travel Insurance - Huella Coverage Information
        Given a user with the following criteria
            | criteria                      |
            | travel insurance analytics    |
        When the user is in the "coverage information" step of travel insurance contract
        Then the device contains the following variables
            | item                                                 | value                                                      | type             |
            | analytics                                            | analytics/glomo_base                                       | json schema      |
            | version DL                                           | 20250414_5.0                                               | string           |
            | page name                                            | app:privada:personas:seguro viaje:informacion coberturas   | string           |
            | level 1                                              | seguro viaje                                               | string           |
            | level 2                                              | informacion coberturas                                     | string           |
            | language                                             | ES                                                         | string           |
            | page area                                            | privada                                                    | string           |
            | page intent                                          | transaccion                                                | string           |
            | channel                                              | online                                                     | string           |
            | page instance ID                                     | de                                                         | string           |
            | page info version                                    | appVersion                                                 | regexp named     |
            | page segment                                         | personas                                                   | string           |
            | sysEnv                                               | app                                                        | string           |
            | business unit                                        | BBVA Mexico                                                | string           |
            | site app name                                        | App BBVA Mexico                                            | string           |
            | project name                                         | DIY E2E Sales                                              | string           |
            | device mobile                                        | si                                                         | string           |
            | user userState                                       | logado                                                     | string           |
            | user segment global                                  | 003001                                                     | string           |
            | profile ID                                           | jh99eufbc2xIy8Befq27mg                                     | string           |
            | user gender                                          | gender                                                     | regexp named     |
            | user age                                             | age                                                        | regexp named     |
            | internal campaign                                    |                                                            | empty array      |
            | optimization attributes                              |                                                            | empty array      |
            | application                                          |                                                            | empty str object |
            | products attributes                                  |                                                            | empty array      |

    @ANA_TI003
    @analytics
    @MX
    @web
    @vbank
    @web-done @backend(test)
    Scenario: Travel Insurance - click on type of travel - App Started
        Given a user with the following criteria
            | criteria                      |
            | travel insurance analytics    |
        When the user is in the "starting destination" step of travel insurance contract
        Then the device contains the following variables
            | item                         | value                                                         | type         |
            | analytics                    | analytics/glomo_base                                          | json schema  |
            | version DL                   | 20250414_5.0                                                  | string       |
            | page name                    | app:privada:personas:seguro viaje:1 detalle                   | string       |
            | level 1                      | seguro viaje                                                  | string       |
            | level 2                      | 1 detalle                                                     | string       |
            | language                     | ES                                                            | string       |
            | page area                    | privada                                                       | string       |
            | page intent                  | transaccion                                                   | string       |
            | channel                      | online                                                        | string       |
            | page instance ID             | de                                                            | string       |
            | page info version            | appVersion                                                    | regexp named |
            | page segment                 | personas                                                      | string       |
            | sysEnv                       | app                                                           | string       |
            | business unit                | BBVA Mexico                                                   | string       |
            | site app name                | App BBVA Mexico                                               | string       |
            | project name                 | DIY E2E Sales                                                 | string       |
            | device mobile                | si                                                            | string       |
            | user userState               | logado                                                        | string       |
            | user segment global          | 003001                                                        | string       |
            | profile ID                   | jh99eufbc2xIy8Befq27mg                                        | string       |
            | user gender                  | gender                                                        | regexp named |
            | user age                     |  age                                                          | regexp named |
            | global application           | smart insurance                                               | string       |
            | application name             | seguro viaje                                                  | string       |
            | application type             | contratacion                                                  | string       |
            | application step             | nacional                                                      | string       |
            | fulfillment model            | online                                                        | string       |
            | product primary category     | seguros                                                       | string       |
            | product name                 | seguro viaje                                                  | string       |
            | internal campaign            |                                                               | empty array  |
            | optimization attributes      |                                                               | empty array  |

    @ANA_TI004
    @analytics
    @MX
    @web
    @vbank
    @web-done @backend(test)
    Scenario: Travel Insurance - App Step 2
        Given a user with the following criteria
            | criteria                      |
            | travel insurance analytics    |
        When the user is in the "starting quotation two travelers" step of travel insurance contract
        Then the device contains the following variables
            | item                                                       | value                                                         | type         |
            | analytics                                                  | analytics/glomo_base                                          | json schema  |
            | version DL                                                 | 20250414_5.0                                                  | string       |
            | page name                                                  | app:privada:personas:seguro viaje:2 personas aseguradas       | string       |
            | level 1                                                    | seguro viaje                                                  | string       |
            | level 2                                                    | 2 personas aseguradas                                         | string       |
            | language                                                   | ES                                                            | string       |
            | page area                                                  | privada                                                       | string       |
            | page intent                                                | transaccion                                                   | string       |
            | channel                                                    | online                                                        | string       |
            | page instance ID                                           | de                                                            | string       |
            | page info version                                          | appVersion                                                    | regexp named |
            | page segment                                               | personas                                                      | string       |
            | sysEnv                                                     | app                                                           | string       |
            | business unit                                              | BBVA Mexico                                                   | string       |
            | site app name                                              | App BBVA Mexico                                               | string       |
            | project name                                               | DIY E2E Sales                                                 | string       |
            | device mobile                                              | si                                                            | string       |
            | user userState                                             | logado                                                        | string       |
            | profile ID                                                 | jh99eufbc2xIy8Befq27mg                                        | string       |
            | user segment global                                        | 003001                                                        | string       |
            | user gender                                                | gender                                                        | regexp named |
            | user age                                                   | age                                                           | regexp named |
            | application typology                                       | nacional                                                      | string       |
            | application name                                           | seguro viaje                                                  | string       |
            | global application                                         | smart insurance                                               | string       |
            | application type                                           | contratacion                                                  | string       |
            | application step                                           | 2 personas aseguradas                                         | string       |
            | fulfillment model                                          | online                                                        | string       |
            | product primary category                                   | seguros                                                       | string       |
            | product name                                               | seguro viaje                                                  | string       |
            | internal campaign                                          |                                                               | empty array  |
            | optimization attributes                                    |                                                               | empty array  |
            | product number of holders                                  | 2                                                             | string       |

    @ANA_TI005
    @analytics
    @MX
    @web
    @vbank
    @web-done @backend(test)
    Scenario: Travel Insurance - App Step 3
        Given a user with the following criteria
            | criteria                      |
            | travel insurance analytics    |
        When the user is in the "select account to pay" step of travel insurance contract
        Then the device contains the following variables
            | item                                                       | value                                                         | type         |
            | analytics                                                  | analytics/glomo_base                                          | json schema  |
            | version DL                                                 | 20250414_5.0                                                  | string       |
            | page name                                                  | app:privada:personas:seguro viaje:3 metodo de pago            | string       |
            | level 1                                                    | seguro viaje                                                  | string       |
            | level 2                                                    | 3 metodo de pago                                              | string       |
            | language                                                   | ES                                                            | string       |
            | page area                                                  | privada                                                       | string       |
            | page intent                                                | transaccion                                                   | string       |
            | channel                                                    | online                                                        | string       |
            | page instance ID                                           | de                                                            | string       |
            | page info version                                          | appVersion                                                    | regexp named |
            | page segment                                               | personas                                                      | string       |
            | sysEnv                                                     | app                                                           | string       |
            | business unit                                              | BBVA Mexico                                                   | string       |
            | site app name                                              | App BBVA Mexico                                               | string       |
            | project name                                               | DIY E2E Sales                                                 | string       |
            | device mobile                                              | si                                                            | string       |
            | user userState                                             | logado                                                        | string       |
            | user segment global                                        | 003001                                                        | string       |
            | profile ID                                                 | jh99eufbc2xIy8Befq27mg                                        | string       |
            | user gender                                                | gender                                                        | regexp named |
            | user age                                                   | age                                                           | regexp named |
            | application typology                                       | nacional                                                      | string       |
            | application process                                        | sin check menor asegurado                                     | string       |
            | application offer                                          | esposo                                                        | string       |
            | global application                                         | smart insurance                                               | string       |
            | application name                                           | seguro viaje                                                  | string       |
            | application type                                           | contratacion                                                  | string       |
            | application step                                           | 3 metodo de pago                                              | string       |
            | product primary category                                   | seguros                                                       | string       |
            | product name                                               | seguro viaje                                                  | string       |
            | product amount                                             | 71.45                                                         | string       |
            | product currency                                           | MXN                                                           | string       |
            | internal campaign                                          |                                                               | empty array  |
            | optimization attributes                                    |                                                               | empty array  |
            | product number of holders                                  | 2                                                             | string       |

    @ANA_TI006
    @analytics
    @MX
    @web
    @vbank
    @web-done @backend(test)
    Scenario: Travel Insurance - App Step 4
        Given a user with the following criteria
            | criteria                      |
            | travel insurance analytics    |
        When the user is in the "confirm term and conditions" step of travel insurance contract
        Then the device contains the following variables
            | item                                                       | value                                                         | type         |
            | analytics                                                  | analytics/glomo_base                                          | json schema  |
            | version DL                                                 | 20250414_5.0                                                  | string       |
            | page name                                                  | app:privada:personas:seguro viaje:4 terminos y condiciones    | string       |
            | level 1                                                    | seguro viaje                                                  | string       |
            | level 2                                                    | 4 terminos y condiciones                                      | string       |
            | language                                                   | ES                                                            | string       |
            | page area                                                  | privada                                                       | string       |
            | page intent                                                | transaccion                                                   | string       |
            | channel                                                    | online                                                        | string       |
            | page instance ID                                           | de                                                            | string       |
            | page info version                                          | appVersion                                                    | regexp named |
            | page segment                                               | personas                                                      | string       |
            | sysEnv                                                     | app                                                           | string       |
            | business unit                                              | BBVA Mexico                                                   | string       |
            | site app name                                              | App BBVA Mexico                                               | string       |
            | project name                                               | DIY E2E Sales                                                 | string       |
            | device mobile                                              | si                                                            | string       |
            | user userState                                             | logado                                                        | string       |
            | user segment global                                        | 003001                                                        | string       |
            | profile ID                                                 | jh99eufbc2xIy8Befq27mg                                        | string       |
            | user gender                                                | gender                                                        | regexp named |
            | user age                                                   | age                                                           | regexp named |
            | application typology                                       | nacional                                                      | string       |
            | application process                                        | sin check menor asegurado                                     | string       |
            | application offer                                          | esposo                                                        | string       |
            | global application                                         | smart insurance                                               | string       |
            | application name                                           | seguro viaje                                                  | string       |
            | application type                                           | contratacion                                                  | string       |
            | application step                                           | 4 terminos y condiciones                                      | string       |
            | product primary category                                   | seguros                                                       | string       |
            | product name                                               | seguro viaje                                                  | string       |
            | product amount                                             | 71.45                                                         | string       |
            | product currency                                           | MXN                                                           | string       |
            | internal campaign                                          |                                                               | empty array  |
            | optimization attributes                                    |                                                               | empty array  |
            | product number of holders                                  | 2                                                             | string       |

    @ANA_TI007
    @analytics
    @MX
    @web
    @vbank
    @web-done @backend(test)
    Scenario: Travel Insurance - App Step 5
        Given a user with the following criteria
            | criteria                      |
            | travel insurance analytics    |
        When the user is in the "checklist contract confirm" step of travel insurance contract
        Then the device contains the following variables
            | item                                                       | value                                                         | type         |
            | analytics                                                  | analytics/glomo_base                                          | json schema  |
            | version DL                                                 | 20250414_5.0                                                  | string       |
            | page name                                                  | app:privada:personas:seguro viaje:5 confirmacion              | string       |
            | level 1                                                    | seguro viaje                                                  | string       |
            | level 2                                                    | 5 confirmacion                                                | string       |
            | language                                                   | ES                                                            | string       |
            | page area                                                  | privada                                                       | string       |
            | page intent                                                | transaccion                                                   | string       |
            | channel                                                    | online                                                        | string       |
            | page instance ID                                           | de                                                            | string       |
            | page info version                                          | appVersion                                                    | regexp named |
            | page segment                                               | personas                                                      | string       |
            | sysEnv                                                     | app                                                           | string       |
            | business unit                                              | BBVA Mexico                                                   | string       |
            | site app name                                              | App BBVA Mexico                                               | string       |
            | project name                                               | DIY E2E Sales                                                 | string       |
            | device mobile                                              | si                                                            | string       |
            | user userState                                             | logado                                                        | string       |
            | user segment global                                        | 003001                                                        | string       |
            | profile ID                                                 | jh99eufbc2xIy8Befq27mg                                        | string       |
            | user gender                                                | gender                                                        | regexp named |
            | user age                                                   | age                                                           | regexp named |
            | application typology                                       | nacional                                                      | string       |
            | application process                                        | sin check menor asegurado                                     | string       |
            | application offer                                          | esposo                                                        | string       |
            | global application                                         | smart insurance                                               | string       |
            | application name                                           | seguro viaje                                                  | string       |
            | application type                                           | contratacion                                                  | string       |
            | application step                                           | 5 confirmacion                                                | string       |
            | product primary category                                   | seguros                                                       | string       |
            | product name                                               | seguro viaje                                                  | string       |
            | product amount                                             | 71.45                                                         | string       |
            | product currency                                           | MXN                                                           | string       |
            | internal campaign                                          |                                                               | empty array  |
            | optimization attributes                                    |                                                               | empty array  |
            | product number of holders                                  | 2                                                             | string       |

    @ANA_TI008
    @analytics
    @MX
    @web
    @vbank
    @web-done @backend(test)
    Scenario: Travel Insurance - App Step 6
        Given a user with the following criteria
            | criteria                      |
            | travel insurance analytics    |
        When the user is in the "summary view confirm contract" step of travel insurance contract
        Then the device contains the following variables
            | item                                                       | value                                                         | type         |
            | analytics                                                  | analytics/glomo_base                                          | json schema  |
            | version DL                                                 | 20250414_5.0                                                  | string       |
            | page name                                                  | app:privada:personas:seguro viaje:6 otp                       | string       |
            | level 1                                                    | seguro viaje                                                  | string       |
            | level 2                                                    | 6 otp                                                         | string       |
            | language                                                   | ES                                                            | string       |
            | page area                                                  | privada                                                       | string       |
            | page intent                                                | transaccion                                                   | string       |
            | channel                                                    | online                                                        | string       |
            | page instance ID                                           | de                                                            | string       |
            | page info version                                          | appVersion                                                    | regexp named |
            | page segment                                               | personas                                                      | string       |
            | sysEnv                                                     | app                                                           | string       |
            | business unit                                              | BBVA Mexico                                                   | string       |
            | site app name                                              | App BBVA Mexico                                               | string       |
            | project name                                               | DIY E2E Sales                                                 | string       |
            | device mobile                                              | si                                                            | string       |
            | user userState                                             | logado                                                        | string       |
            | user segment global                                        | 003001                                                        | string       |
            | profile ID                                                 | IuAEC_OqYR6_RjONyeqnAw                                        | string       |
            | user gender                                                | gender                                                        | regexp named |
            | user age                                                   | age                                                           | regexp named |
            | application typology                                       | nacional                                                      | string       |
            | application process                                        | sin check menor asegurado                                     | string       |
            | application offer                                          | esposo                                                        | string       |
            | global application                                         | smart insurance                                               | string       |
            | application name                                           | seguro viaje                                                  | string       |
            | application type                                           | contratacion                                                  | string       |
            | application step                                           | 6 otp                                                         | string       |
            | product primary category                                   | seguros                                                       | string       |
            | product name                                               | seguro viaje                                                  | string       |
            | product amount                                             | 127.72                                                        | string       |
            | product currency                                           | MXN                                                           | string       |
            | internal campaign                                          |                                                               | empty array  |
            | optimization attributes                                    |                                                               | empty array  |
            | product number of holders                                  | 2                                                             | string       |

    @ANA_TI009
    @analytics
    @MX
    @web
    @vbank @backend(test)
    @web-done
    Scenario: Travel Insurance - App Complete - Success
        Given a user with the following criteria
            | criteria                      |
            | travel insurance              |
        When the user is in the "otp modal" step of travel insurance contract
        Then the device contains the following variables
            | item                                                       | value                                                         | type         |
            | analytics                                                  | analytics/glomo_base                                          | json schema  |
            | version DL                                                 | 20250414_5.0                                                  | string       |
            | page name                                                  | app:privada:personas:seguro viaje:pagina exitosa              | string       |
            | level 1                                                    | seguro viaje                                                  | string       |
            | level 2                                                    | pagina exitosa                                                | string       |
            | language                                                   | ES                                                            | string       |
            | page area                                                  | privada                                                       | string       |
            | page intent                                                | transaccion                                                   | string       |
            | channel                                                    | online                                                        | string       |
            | page instance ID                                           | de                                                            | string       |
            | page info version                                          | appVersion                                                    | regexp named |
            | page segment                                               | personas                                                      | string       |
            | sysEnv                                                     | app                                                           | string       |
            | business unit                                              | BBVA Mexico                                                   | string       |
            | site app name                                              | App BBVA Mexico                                               | string       |
            | project name                                               | DIY E2E Sales                                                 | string       |
            | device mobile                                              | si                                                            | string       |
            | user userState                                             | logado                                                        | string       |
            | user segment global                                        | 003001                                                        | string       |
            | profile ID                                                 | G1z-uKKkwsdI2q3ItD4efg                                        | string       |
            | user gender                                                | gender                                                        | regexp named |
            | user age                                                   | age                                                           | regexp named |
            | application typology                                       | nacional                                                      | string       |
            | application process                                        | sin check menor asegurado                                     | string       |
            | application offer                                          |                                                        | string       |
            | global application                                         | smart insurance                                               | string       |
            | application name                                           | seguro viaje                                                  | string       |
            | application type                                           | contratacion                                                  | string       |
            | application step                                           | pagina exitosa                                                | string       |
            | application state                                          | contratado                                                    | string       |
            | application operation number                               | 000000234                                                     | string       |
            | fulfillment model                                          | online                                                        | string       |
            | product primary category                                   | seguros                                                       | string       |
            | product name                                               | seguro viaje                                                  | string       |
            | product amount                                             | 18.17                                                          | string       |
            | product currency                                           | MXN                                                           | string       |
            | internal campaign                                          |                                                               | empty array  |
            | optimization attributes                                    |                                                               | empty array  |
            | product number of holders                                  | 1                                                             | string       |

    @ANA_TI010
    @analytics
    @MX
    @web
    @vbank
    @web-done @backend(test)
    Scenario: Travel Insurance - Huella detail of Travelers
        Given a user with the following criteria
            | criteria                      |
            | travel insurance analytics    |
        When the user is in the "modal information travelers" step of travel insurance contract
        Then the device contains the following variables
            | item                                                             | value                                                                          | type             |
            | analytics                                                        | analytics/glomo_base                                                           | json schema      |
            | version DL                                                       | 20250414_5.0                                                                   | string           |
            | page name                                                        | app:privada:personas:seguro viaje:2 personas aseguradas:informacion viajeros   | string           |
            | level 1                                                          | seguro viaje                                                                   | string           |
            | level 2                                                          | 2 personas aseguradas                                                          | string           |
            | level 3                                                          | informacion viajeros                                                           | string           |
            | language                                                         | ES                                                                             | string           |
            | page area                                                        | privada                                                                        | string           |
            | page intent                                                      | transaccion                                                                    | string           |
            | channel                                                          | online                                                                         | string           |
            | page instance ID                                                 | de                                                                             | string           |
            | page info version                                                | appVersion                                                                     | regexp named     |
            | page segment                                                     | personas                                                                       | string           |
            | sysEnv                                                           | app                                                                            | string           |
            | business unit                                                    | BBVA Mexico                                                                    | string           |
            | site app name                                                    | App BBVA Mexico                                                                | string           |
            | project name                                                     | DIY E2E Sales                                                                  | string           |
            | device mobile                                                    | si                                                                             | string           |
            | user userState                                                   | logado                                                                         | string           |
            | user segment global                                              | 003001                                                                         | string           |
            | profile ID                                                       | jh99eufbc2xIy8Befq27mg                                                         | string           |
            | user gender                                                      | gender                                                                         | regexp named     |
            | user age                                                         | age                                                                            | regexp named     |
            | internal campaign                                                |                                                                                | empty array      |
            | optimization attributes                                          |                                                                                | empty array      |
            | application                                                      |                                                                                | empty str object |
            | products attributes                                              |                                                                                | empty array      |
