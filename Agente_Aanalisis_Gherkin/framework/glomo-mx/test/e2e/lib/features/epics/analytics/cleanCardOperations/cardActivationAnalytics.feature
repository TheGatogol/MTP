@cardActivationAnalytics
Feature: Analytics - Clean Card Activation

    @ANA_CCA001
    @analytics
    @web @android @ios
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - Access to the Activation Operative of a Clean Card - APP ONCLICK START
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses the card activation
        Then the analytics events contains the following variables
            | item                     | value                                         | type         | event              |
            | analytics                | analytics/glomo_base                          | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                                  | string       | App On Click Start |
            | page name                | app:privada:personas:tarjetas:credito:detalle | string       | App On Click Start |
            | level 1                  | tarjetas                                      | string       | App On Click Start |
            | level 2                  | credito                                       | string       | App On Click Start |
            | level 3                  | detalle                                       | string       | App On Click Start |
            | language                 | ES                                            | string       | App On Click Start |
            | page area                | privada                                       | string       | App On Click Start |
            | page intent              | informacion                                   | string       | App On Click Start |
            | channel                  | online                                        | string       | App On Click Start |
            | page instance ID         | de                                            | string       | App On Click Start |
            | page info version        | appVersion                                    | regexp named | App On Click Start |
            | page segment             | personas                                      | string       | App On Click Start |
            | sysEnv                   | app                                           | string       | App On Click Start |
            | business unit            | BBVA Mexico                                   | string       | App On Click Start |
            | site app name            | App BBVA Mexico                               | string       | App On Click Start |
            | project name             | Glomo                                         | string       | App On Click Start |
            | device mobile            | si                                            | string       | App On Click Start |
            | user userState           | logado                                        | string       | App On Click Start |
            | user segment global      | 003001                                        | string       | App On Click Start |
            | profile ID               | profileID                                     | regexp named | App On Click Start |
            | user age                 | age                                           | regexp named | App On Click Start |
            | user gender              | gender                                        | regexp named | App On Click Start |
            | global application       | card activation qr                            | string       | App On Click Start |
            | application name         | activar tdc qr                                | string       | App On Click Start |
            | application type         | operativa                                     | string       | App On Click Start |
            | application step         | activar tarjeta                               | string       | App On Click Start |
            | fulfillment model        | online                                        | string       | App On Click Start |
            | product primary category | tarjetas                                      | string       | App On Click Start |
            | product subtype          | tarjetas credito                              | string       | App On Click Start |
            | internal campaign        |                                               | empty array  | App On Click Start |
            | optimization attributes  |                                               | empty array  | App On Click Start |

    @ANA_CCA002
    @analytics
    @web @android @ios
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - Access to the Activation Operative of a Clean Card - APP PAGE VISIT
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses the card activation
        Then the analytics events contains the following variables
            | item                     | value                                                          | type         | event          |
            | analytics                | analytics/glomo_base                                           | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                                   | string       | App Page Visit |
            | page name                | app:privada:personas:tarjetas:activar tdc qr:1 activar tarjeta | string       | App Page Visit |
            | level 1                  | tarjetas                                                       | string       | App Page Visit |
            | level 2                  | activar tdc qr                                                 | string       | App Page Visit |
            | level 3                  | 1 activar tarjeta                                              | string       | App Page Visit |
            | language                 | ES                                                             | string       | App Page Visit |
            | page area                | privada                                                        | string       | App Page Visit |
            | page intent              | transaccion                                                    | string       | App Page Visit |
            | channel                  | online                                                         | string       | App Page Visit |
            | page instance ID         | de                                                             | string       | App Page Visit |
            | page info version        | appVersion                                                     | regexp named | App Page Visit |
            | page segment             | personas                                                       | string       | App Page Visit |
            | sysEnv                   | app                                                            | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                    | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                | string       | App Page Visit |
            | project name             | Glomo                                                          | string       | App Page Visit |
            | device mobile            | si                                                             | string       | App Page Visit |
            | user userState           | logado                                                         | string       | App Page Visit |
            | user segment global      | 003001                                                         | string       | App Page Visit |
            | profile ID               | profileID                                                      | regexp named | App Page Visit |
            | user age                 | age                                                            | regexp named | App Page Visit |
            | user gender              | gender                                                         | regexp named | App Page Visit |
            | global application       | card activation qr                                             | string       | App Page Visit |
            | application name         | activar tdc qr                                                 | string       | App Page Visit |
            | application type         | operativa                                                      | string       | App Page Visit |
            | application step         | 1 activar tarjeta                                              | string       | App Page Visit |
            | fulfillment model        | online                                                         | string       | App Page Visit |
            | product primary category | tarjetas                                                       | string       | App Page Visit |
            | product subtype          | tarjetas credito                                               | string       | App Page Visit |
            | internal campaign        |                                                                | empty array  | App Page Visit |
            | optimization attributes  |                                                                | empty array  | App Page Visit |

    @ANA_CCA003
    @analytics
    @web @android @ios
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - Access to the Activation Operative of a Clean Card - APP STARTED
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses the card activation
        And the user tries to open scanner
        Then the analytics events contains the following variables
            | item                     | value                                                          | type         | event       |
            | analytics                | analytics/glomo_base                                           | json schema  | App Started |
            | version DL               | 20250414_5.0                                                   | string       | App Started |
            | page name                | app:privada:personas:tarjetas:activar tdc qr:1 activar tarjeta | string       | App Started |
            | level 1                  | tarjetas                                                       | string       | App Started |
            | level 2                  | activar tdc qr                                                 | string       | App Started |
            | level 3                  | 1 activar tarjeta                                              | string       | App Started |
            | language                 | ES                                                             | string       | App Started |
            | page area                | privada                                                        | string       | App Started |
            | page intent              | transaccion                                                    | string       | App Started |
            | channel                  | online                                                         | string       | App Started |
            | page instance ID         | de                                                             | string       | App Started |
            | page info version        | appVersion                                                     | regexp named | App Started |
            | page segment             | personas                                                       | string       | App Started |
            | sysEnv                   | app                                                            | string       | App Started |
            | business unit            | BBVA Mexico                                                    | string       | App Started |
            | site app name            | App BBVA Mexico                                                | string       | App Started |
            | project name             | Glomo                                                          | string       | App Started |
            | device mobile            | si                                                             | string       | App Started |
            | user userState           | logado                                                         | string       | App Started |
            | user segment global      | 003001                                                         | string       | App Started |
            | profile ID               | profileID                                                      | regexp named | App Started |
            | user age                 | age                                                            | regexp named | App Started |
            | user gender              | gender                                                         | regexp named | App Started |
            | global application       | card activation qr                                             | string       | App Started |
            | application name         | activar tdc qr                                                 | string       | App Started |
            | application type         | operativa                                                      | string       | App Started |
            | application step         | escanear                                                       | string       | App Started |
            | fulfillment model        | online                                                         | string       | App Started |
            | product primary category | tarjetas                                                       | string       | App Started |
            | product subtype          | tarjetas credito                                               | string       | App Started |
            | internal campaign        |                                                                | empty array  | App Started |
            | optimization attributes  |                                                                | empty array  | App Started |

    @ANA_CCA004
    @analytics
    @web @android @ios
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - Access to the Activation Operative of a Clean Card - APP STEP 2
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the analytics interceptor service is initiated
        When the user accesses the card activation
        And the user tries to open scanner
        Then the analytics events contains the following variables
            | item                     | value                                                  | type         | event      |
            | analytics                | analytics/glomo_base                                   | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                           | string       | App Step 2 |
            | page name                | app:privada:personas:tarjetas:activar tdc qr:2 escaneo | string       | App Step 2 |
            | level 1                  | tarjetas                                               | string       | App Step 2 |
            | level 2                  | activar tdc qr                                         | string       | App Step 2 |
            | level 3                  | 2 escaneo                                              | string       | App Step 2 |
            | language                 | ES                                                     | string       | App Step 2 |
            | page area                | privada                                                | string       | App Step 2 |
            | page intent              | transaccion                                            | string       | App Step 2 |
            | channel                  | online                                                 | string       | App Step 2 |
            | page instance ID         | de                                                     | string       | App Step 2 |
            | page info version        | appVersion                                             | regexp named | App Step 2 |
            | page segment             | personas                                               | string       | App Step 2 |
            | sysEnv                   | app                                                    | string       | App Step 2 |
            | business unit            | BBVA Mexico                                            | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                        | string       | App Step 2 |
            | project name             | Glomo                                                  | string       | App Step 2 |
            | device mobile            | si                                                     | string       | App Step 2 |
            | user userState           | logado                                                 | string       | App Step 2 |
            | user segment global      | 003001                                                 | string       | App Step 2 |
            | profile ID               | profileID                                              | regexp named | App Step 2 |
            | user age                 | age                                                    | regexp named | App Step 2 |
            | user gender              | gender                                                 | regexp named | App Step 2 |
            | global application       | card activation qr                                     | string       | App Step 2 |
            | application name         | activar tdc qr                                         | string       | App Step 2 |
            | application type         | operativa                                              | string       | App Step 2 |
            | application step         | 2 escaneo                                              | string       | App Step 2 |
            | fulfillment model        | online                                                 | string       | App Step 2 |
            | product primary category | tarjetas                                               | string       | App Step 2 |
            | product subtype          | tarjetas credito                                       | string       | App Step 2 |
            | internal campaign        |                                                        | empty array  | App Step 2 |
            | optimization attributes  |                                                        | empty array  | App Step 2 |

    @ANA_CCA005
    @analytics
    @web @android @ios
    @MX @backend(artichoke) @vbank
    @manual @JIRA.GLOMOGL-20021
    Scenario: Analytics - Access to the Activation Operative of a Clean Card - APP STEP 3
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card inoperative otp required" "credit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses the card activation
        And the user tries to open scanner
        When the user scans the qr code of the "otp required" card
        Then the analytics events contains the following variables
            | item                     | value                                              | type         | event      |
            | analytics                | analytics/glomo_base                               | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                       | string       | App Step 3 |
            | page name                | app:privada:personas:tarjetas:activar tdc qr:3 otp | string       | App Step 3 |
            | level 1                  | tarjetas                                           | string       | App Step 3 |
            | level 2                  | activar tdc qr                                     | string       | App Step 3 |
            | level 3                  | 3 otp                                              | string       | App Step 3 |
            | language                 | ES                                                 | string       | App Step 3 |
            | page area                | privada                                            | string       | App Step 3 |
            | page intent              | transaccion                                        | string       | App Step 3 |
            | channel                  | online                                             | string       | App Step 3 |
            | page instance ID         | de                                                 | string       | App Step 3 |
            | page info version        | appVersion                                         | regexp named | App Step 3 |
            | page segment             | personas                                           | string       | App Step 3 |
            | sysEnv                   | app                                                | string       | App Step 3 |
            | business unit            | BBVA Mexico                                        | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                    | string       | App Step 3 |
            | project name             | Glomo                                              | string       | App Step 3 |
            | device mobile            | si                                                 | string       | App Step 3 |
            | user userState           | logado                                             | string       | App Step 3 |
            | user segment global      | 003001                                             | string       | App Step 3 |
            | profile ID               | profileID                                          | regexp named | App Step 3 |
            | user age                 | age                                                | regexp named | App Step 3 |
            | user gender              | gender                                             | regexp named | App Step 3 |
            | global application       | card activation qr                                 | string       | App Step 3 |
            | application name         | activar tdc qr                                     | string       | App Step 3 |
            | application type         | operativa                                          | string       | App Step 3 |
            | application step         | 3 otp                                              | string       | App Step 3 |
            | fulfillment model        | online                                             | string       | App Step 3 |
            | product primary category | tarjetas                                           | string       | App Step 3 |
            | product subtype          | tarjetas credito                                   | string       | App Step 3 |
            | internal campaign        |                                                    | empty array  | App Step 3 |
            | optimization attributes  |                                                    | empty array  | App Step 3 |

    @ANA_CCA006
    @analytics
    @web @android @ios
    @MX @backend(artichoke) @vbank @web-done
    Scenario: Analytics - Access to the Activation Operative of a Clean Card - APP COMPLETE
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses the card activation
        And the user tries to open scanner
        When the user scans the qr code of the "inoperative" card
        Then the analytics events contains the following variables
            | item                     | value                                                       | type         | event         |
            | analytics                | analytics/glomo_base                                        | json schema  | App Completed |
            | version DL               | 20250414_5.0                                                | string       | App Completed |
            | page name                | app:privada:personas:tarjetas:activar tdc qr:pagina exitosa | string       | App Completed |
            | level 1                  | tarjetas                                                    | string       | App Completed |
            | level 2                  | activar tdc qr                                              | string       | App Completed |
            | level 3                  | pagina exitosa                                              | string       | App Completed |
            | language                 | ES                                                          | string       | App Completed |
            | page area                | privada                                                     | string       | App Completed |
            | page intent              | transaccion                                                 | string       | App Completed |
            | channel                  | online                                                      | string       | App Completed |
            | page instance ID         | de                                                          | string       | App Completed |
            | page info version        | appVersion                                                  | regexp named | App Completed |
            | page segment             | personas                                                    | string       | App Completed |
            | sysEnv                   | app                                                         | string       | App Completed |
            | business unit            | BBVA Mexico                                                 | string       | App Completed |
            | site app name            | App BBVA Mexico                                             | string       | App Completed |
            | project name             | Glomo                                                       | string       | App Completed |
            | device mobile            | si                                                          | string       | App Completed |
            | user userState           | logado                                                      | string       | App Completed |
            | user segment global      | 003001                                                      | string       | App Completed |
            | profile ID               | profileID                                                   | regexp named | App Completed |
            | user age                 | age                                                         | regexp named | App Completed |
            | user gender              | gender                                                      | regexp named | App Completed |
            | global application       | card activation qr                                          | string       | App Completed |
            | application name         | activar tdc qr                                              | string       | App Completed |
            | application type         | operativa                                                   | string       | App Completed |
            | application step         | pagina exitosa                                              | string       | App Completed |
            | application state        | finalizado                                                  | string       | App Completed |
            | fulfillment model        | online                                                      | string       | App Completed |
            | product primary category | tarjetas                                                    | string       | App Completed |
            | product subtype          | tarjetas credito                                            | string       | App Completed |
            | product name             | credito bbva shutdown alias vacio                           | string       | App Completed |
            | internal campaign        |                                                             | empty array  | App Completed |
            | optimization attributes  |                                                             | empty array  | App Completed |

    @ANA_CCA007
    @analytics
    @web @android @ios
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - Access to the Activation Operative of a Clean Card - FAQS PAGE VIEW
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses the card activation
        When the user accesses more information
        Then the analytics events contains the following variables
            | item                    | value                                              | type         | event     |
            | analytics               | analytics/glomo_base                               | json schema  | Page View |
            | version DL              | 20250414_5.0                                       | string       | Page View |
            | page name               | app:privada:personas:tarjetas:tarjetas con qr:faqs | string       | Page View |
            | level 1                 | tarjetas                                           | string       | Page View |
            | level 2                 | tarjetas con qr                                    | string       | Page View |
            | level 3                 | faqs                                               | string       | Page View |
            | language                | ES                                                 | string       | Page View |
            | page area               | privada                                            | string       | Page View |
            | page intent             | informacion                                        | string       | Page View |
            | channel                 | online                                             | string       | Page View |
            | page instance ID        | de                                                 | string       | Page View |
            | page info version       | appVersion                                         | regexp named | Page View |
            | page segment            | personas                                           | string       | Page View |
            | sysEnv                  | app                                                | string       | Page View |
            | business unit           | BBVA Mexico                                        | string       | Page View |
            | site app name           | App BBVA Mexico                                    | string       | Page View |
            | project name            | Glomo                                              | string       | Page View |
            | device mobile           | si                                                 | string       | Page View |
            | user userState          | logado                                             | string       | Page View |
            | user segment global     | 003001                                             | string       | Page View |
            | profile ID              | profileID                                          | regexp named | Page View |
            | user age                | age                                                | regexp named | Page View |
            | user gender             | gender                                             | regexp named | Page View |
            | internal campaign       |                                                    | empty array  | Page View |
            | optimization attributes |                                                    | empty array  | Page View |

    @ANA_CCA008
    @analytics
    @web @android @ios
    @MX @backend(artichoke) @vbank @web-done
    Scenario: Analytics - Access to the Activation Operative of a Clean Card - QR CODE INVALID PAGE VIEW
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card inoperative" "credit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses the card activation
        And the user tries to open scanner
        When the user scans the qr code of the "visualization error" card
        Then the analytics events contains the following variables
            | item                    | value                                                         | type         | event     |
            | analytics               | analytics/glomo_base                                          | json schema  | Page View |
            | version DL              | 20250414_5.0                                                  | string       | Page View |
            | page name               | app:privada:personas:tarjetas:activar tdc qr:error lectura qr | string       | Page View |
            | level 1                 | tarjetas                                                      | string       | Page View |
            | level 2                 | activar tdc qr                                                | string       | Page View |
            | level 3                 | error lectura qr                                              | string       | Page View |
            | error page              | error lectura qr                                              | string       | Page View |
            | language                | ES                                                            | string       | Page View |
            | page area               | privada                                                       | string       | Page View |
            | page intent             | informacion                                                   | string       | Page View |
            | channel                 | online                                                        | string       | Page View |
            | page instance ID        | de                                                            | string       | Page View |
            | page info version       | appVersion                                                    | regexp named | Page View |
            | page segment            | personas                                                      | string       | Page View |
            | sysEnv                  | app                                                           | string       | Page View |
            | business unit           | BBVA Mexico                                                   | string       | Page View |
            | site app name           | App BBVA Mexico                                               | string       | Page View |
            | project name            | Glomo                                                         | string       | Page View |
            | device mobile           | si                                                            | string       | Page View |
            | user userState          | logado                                                        | string       | Page View |
            | user segment global     | 003001                                                        | string       | Page View |
            | profile ID              | profileID                                                     | regexp named | Page View |
            | user age                | age                                                           | regexp named | Page View |
            | user gender             | gender                                                        | regexp named | Page View |
            | internal campaign       |                                                               | empty array  | Page View |
            | optimization attributes |                                                               | empty array  | Page View |

    @ANA_CCA009
    @analytics
    @web @android @ios
    @MX @backend(artichoke) @vbank
    @web-done
    Scenario: Analytics - Access to the Activation Operative of a Clean Card - CARD ACTIVATION ERROR PAGE VIEW
        Given a user with the following criteria
            | criteria               |
            | Credit card            |
            | clean card inoperative |
        And the user accesses to the "clean card inoperative process error" "credit" card product detail
        And the analytics interceptor service is initiated
        And the user accesses the card activation
        And the user tries to open scanner
        When the user scans the qr code of the "process error" card
        Then the analytics events contains the following variables
            | item                    | value                                                         | type         | event     |
            | analytics               | analytics/glomo_base                                          | json schema  | Page View |
            | version DL              | 20250414_5.0                                                  | string       | Page View |
            | page name               | app:privada:personas:tarjetas:activar tdc qr:error activacion | string       | Page View |
            | level 1                 | tarjetas                                                      | string       | Page View |
            | level 2                 | activar tdc qr                                                | string       | Page View |
            | level 3                 | error activacion                                              | string       | Page View |
            | error page              | error activacion                                              | string       | Page View |
            | language                | ES                                                            | string       | Page View |
            | page area               | privada                                                       | string       | Page View |
            | page intent             | informacion                                                   | string       | Page View |
            | channel                 | online                                                        | string       | Page View |
            | page instance ID        | de                                                            | string       | Page View |
            | page info version       | appVersion                                                    | regexp named | Page View |
            | page segment            | personas                                                      | string       | Page View |
            | sysEnv                  | app                                                           | string       | Page View |
            | business unit           | BBVA Mexico                                                   | string       | Page View |
            | site app name           | App BBVA Mexico                                               | string       | Page View |
            | project name            | Glomo                                                         | string       | Page View |
            | device mobile           | si                                                            | string       | Page View |
            | user userState          | logado                                                        | string       | Page View |
            | user segment global     | 003001                                                        | string       | Page View |
            | profile ID              | profileID                                                     | regexp named | Page View |
            | user age                | age                                                           | regexp named | Page View |
            | user gender             | gender                                                        | regexp named | Page View |
            | internal campaign       |                                                               | empty array  | Page View |
            | optimization attributes |                                                               | empty array  | Page View |
