@AnaOcCarLoanUniversal
Feature: Analytics - Oc Car Loan

    @ANA_EVENT_OCC001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan - App On Click Start
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to the car loan offer from "car loan universal"
        Then the analytics events contains the following variables
            | item                                         | value                                                                     | type         | event              |
            | version DL                                   | 20250414_5.0                                                              | string       | App On Click Start |
            | page intent                                  | informacion                                                               | string       | App On Click Start |
            | page segment                                 | personas                                                                  | string       | App On Click Start |
            | page name                                    | app:privada:personas:oportunidades                                        | string       | App On Click Start |
            | sysEnv                                       | app                                                                       | string       | App On Click Start |
            | channel                                      | online                                                                    | string       | App On Click Start |
            | language                                     | ES                                                                        | string       | App On Click Start |
            | level 1                                      | oportunidades                                                             | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                               | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                           | string       | App On Click Start |
            | project name                                 | DIY E2E Sales                                                             | string       | App On Click Start |
            | page area                                    | privada                                                                   | string       | App On Click Start |
            | internal campaign attributes location        | contract product section--superior-1-15                                   | string       | App On Click Start |
            | internal campaign attributes campaign format | card                                                                      | string       | App On Click Start |
            | internal campaign attributes name            | -un auto mil destinos simula tu credito de auto y elige como hacerlo tuyo | string       | App On Click Start |
            | internal campaign attributes product         | prestamos                                                                 | string       | App On Click Start |
            | device mobile                                | si                                                                        | string       | App On Click Start |
            | device root                                  | no root                                                                   | string       | App On Click Start |
            | user userState                               | logado                                                                    | string       | App On Click Start |
            | user segment global                          | 003001                                                                    | string       | App On Click Start |
            | user segment profile                         | preaprobado                                                               | string       | App On Click Start |
            | user gender                                  | gender                                                                    | regexp named | App On Click Start |
            | user age                                     | age                                                                       | regexp named | App On Click Start |
            | product primary category                     | prestamos                                                                 | string       | App On Click Start |
            | product name                                 | credito auto                                                              | string       | App On Click Start |
            | fulfillment model                            | online                                                                    | string       | App On Click Start |
            | application type                             | contratacion                                                              | string       | App On Click Start |
            | application name                             | contratacion credito auto                                                 | string       | App On Click Start |
            | application step                             | me interesa                                                               | string       | App On Click Start |
            | global application                           | car loan                                                                  | string       | App On Click Start |

    @ANA_EVENT_OCC002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS App Page Visit - View offer benefits
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to the car loan offer from "car loan universal"
        Then the analytics events contains the following variables
            | item                     | value                                                                 | type         | event          |
            | version DL               | 20250414_5.0                                                          | string       | App Page Visit |
            | page intent              | transaccion                                                           | string       | App Page Visit |
            | page segment             | personas                                                              | string       | App Page Visit |
            | page name                | app:privada:personas:prestamos:contratacion credito auto:1 beneficios | string       | App Page Visit |
            | sysEnv                   | app                                                                   | string       | App Page Visit |
            | channel                  | online                                                                | string       | App Page Visit |
            | language                 | ES                                                                    | string       | App Page Visit |
            | level 1                  | prestamos                                                             | string       | App Page Visit |
            | level 2                  | contratacion credito auto                                             | string       | App Page Visit |
            | level 3                  | 1 beneficios                                                          | string       | App Page Visit |
            | business unit            | BBVA Mexico                                                           | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                                       | string       | App Page Visit |
            | project name             | DIY E2E Sales                                                         | string       | App Page Visit |
            | page area                | privada                                                               | string       | App Page Visit |
            | device mobile            | si                                                                    | string       | App Page Visit |
            | device root              | no root                                                               | string       | App Page Visit |
            | user userState           | logado                                                                | string       | App Page Visit |
            | user segment global      | 003001                                                                | string       | App Page Visit |
            | user gender              | gender                                                                | regexp named | App Page Visit |
            | user age                 | age                                                                   | regexp named | App Page Visit |
            | product primary category | prestamos                                                             | string       | App Page Visit |
            | product name             | credito auto                                                          | string       | App Page Visit |
            | fulfillment model        | online                                                                | string       | App Page Visit |
            | application type         | contratacion                                                          | string       | App Page Visit |
            | application name         | contratacion credito auto                                             | string       | App Page Visit |
            | application step         | 1 beneficios                                                          | string       | App Page Visit |
            | global application       | car loan                                                              | string       | App Page Visit |
            | qualified visits         | true                                                                  | string       | App Page Visit |

    @ANA_EVENT_OCC003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS App Started - Init simulation car step
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the analytics interceptor service is initiated
        When the user accesses to the simulation car step
        Then the analytics events contains the following variables
            | item                     | value                                                                 | type         | event       |
            | version DL               | 20250414_5.0                                                          | string       | App Started |
            | page intent              | transaccion                                                           | string       | App Started |
            | page segment             | personas                                                              | string       | App Started |
            | page name                | app:privada:personas:prestamos:contratacion credito auto:1 beneficios | string       | App Started |
            | sysEnv                   | app                                                                   | string       | App Started |
            | channel                  | online                                                                | string       | App Started |
            | language                 | ES                                                                    | string       | App Started |
            | level 1                  | prestamos                                                             | string       | App Started |
            | level 2                  | contratacion credito auto                                             | string       | App Started |
            | level 3                  | 1 beneficios                                                          | string       | App Started |
            | business unit            | BBVA Mexico                                                           | string       | App Started |
            | site app name            | App BBVA Mexico                                                       | string       | App Started |
            | project name             | DIY E2E Sales                                                         | string       | App Started |
            | page area                | privada                                                               | string       | App Started |
            | device mobile            | si                                                                    | string       | App Started |
            | device root              | no root                                                               | string       | App Started |
            | user userState           | logado                                                                | string       | App Started |
            | user segment global      | 003001                                                                | string       | App Started |
            | user segment profile     | preaprobado                                                           | string       | App Started |
            | user gender              | gender                                                                | regexp named | App Started |
            | user age                 | age                                                                   | regexp named | App Started |
            | product primary category | prestamos                                                             | string       | App Started |
            | product name             | credito auto                                                          | string       | App Started |
            | fulfillment model        | online                                                                | string       | App Started |
            | application type         | contratacion                                                          | string       | App Started |
            | application name         | contratacion credito auto                                             | string       | App Started |
            | application step         | iniciar simulacion                                                    | string       | App Started |
            | global application       | car loan                                                              | string       | App Started |

    @ANA_EVENT_OCC004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS App Step 2 - View simulation car step
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the analytics interceptor service is initiated
        When the user accesses to the simulation car step
        Then the analytics events contains the following variables
            | item                     | value                                                                | type         | event      |
            | version DL               | 20250414_5.0                                                         | string       | App Step 2 |
            | page intent              | transaccion                                                          | string       | App Step 2 |
            | page segment             | personas                                                             | string       | App Step 2 |
            | page name                | app:privada:personas:prestamos:contratacion credito auto:2 simulador | string       | App Step 2 |
            | sysEnv                   | app                                                                  | string       | App Step 2 |
            | channel                  | online                                                               | string       | App Step 2 |
            | language                 | ES                                                                   | string       | App Step 2 |
            | level 1                  | prestamos                                                            | string       | App Step 2 |
            | level 2                  | contratacion credito auto                                            | string       | App Step 2 |
            | level 3                  | 2 simulador                                                          | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                          | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                      | string       | App Step 2 |
            | project name             | DIY E2E Sales                                                        | string       | App Step 2 |
            | page area                | privada                                                              | string       | App Step 2 |
            | device mobile            | si                                                                   | string       | App Step 2 |
            | device root              | no root                                                              | string       | App Step 2 |
            | user userState           | logado                                                               | string       | App Step 2 |
            | user segment global      | 003001                                                               | string       | App Step 2 |
            | user segment profile     | preaprobado                                                          | string       | App Step 2 |
            | user gender              | gender                                                               | regexp named | App Step 2 |
            | user age                 | age                                                                  | regexp named | App Step 2 |
            | product primary category | prestamos                                                            | string       | App Step 2 |
            | product name             | credito auto                                                         | string       | App Step 2 |
            | fulfillment model        | online                                                               | string       | App Step 2 |
            | application type         | contratacion                                                         | string       | App Step 2 |
            | application name         | contratacion credito auto                                            | string       | App Step 2 |
            | application step         | 2 simulador                                                          | string       | App Step 2 |
            | global application       | car loan                                                             | string       | App Step 2 |

    @ANA_EVENT_OCC005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS Download Link - Click amortization table
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        And the analytics interceptor service is initiated
        When the user selects a widget "amortization table"
        Then the analytics events contains the following variables
            | item                 | value                                                                | type             | event         |
            | version DL           | 20250414_5.0                                                         | string           | Download Link |
            | page intent          | transaccion                                                          | string           | Download Link |
            | page segment         | personas                                                             | string           | Download Link |
            | page name            | app:privada:personas:prestamos:contratacion credito auto:2 simulador | string           | Download Link |
            | sysEnv               | app                                                                  | string           | Download Link |
            | channel              | online                                                               | string           | Download Link |
            | language             | ES                                                                   | string           | Download Link |
            | level 1              | prestamos                                                            | string           | Download Link |
            | level 2              | contratacion credito auto                                            | string           | Download Link |
            | level 3              | 2 simulador                                                          | string           | Download Link |
            | business unit        | BBVA Mexico                                                          | string           | Download Link |
            | site app name        | App BBVA Mexico                                                      | string           | Download Link |
            | project name         | DIY E2E Sales                                                        | string           | Download Link |
            | page area            | privada                                                              | string           | Download Link |
            | link url             | tabla de amortizacion                                                | string           | Download Link |
            | device mobile        | si                                                                   | string           | Download Link |
            | device root          | no root                                                              | string           | Download Link |
            | user userState       | logado                                                               | string           | Download Link |
            | user segment global  | 003001                                                               | string           | Download Link |
            | user segment profile | preaprobado                                                          | string           | Download Link |
            | user gender          | gender                                                               | regexp named     | Download Link |
            | user age             | age                                                                  | regexp named     | Download Link |
            | application name     |                                                                      | empty str object | Download Link |

    @ANA_EVENT_OCC006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS Page View - Click tooltip car type help info
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        And the analytics interceptor service is initiated
        When the user selects a tooltip "help type of car" modal
        Then the analytics events contains the following variables
            | item                 | value                                                                             | type             | event     |
            | version DL           | 20250414_5.0                                                                      | string           | Page View |
            | page intent          | informacion                                                                       | string           | Page View |
            | page segment         | personas                                                                          | string           | Page View |
            | page name            | app:privada:personas:prestamos:contratacion credito auto:2 simulador:tipo de auto | string           | Page View |
            | sysEnv               | app                                                                               | string           | Page View |
            | channel              | online                                                                            | string           | Page View |
            | language             | ES                                                                                | string           | Page View |
            | level 1              | prestamos                                                                         | string           | Page View |
            | level 2              | contratacion credito auto                                                         | string           | Page View |
            | level 3              | 2 simulador                                                                       | string           | Page View |
            | level 4              | tipo de auto                                                                      | string           | Page View |
            | business unit        | BBVA Mexico                                                                       | string           | Page View |
            | site app name        | App BBVA Mexico                                                                   | string           | Page View |
            | project name         | DIY E2E Sales                                                                     | string           | Page View |
            | page area            | privada                                                                           | string           | Page View |
            | device mobile        | si                                                                                | string           | Page View |
            | device root          | no root                                                                           | string           | Page View |
            | user userState       | logado                                                                            | string           | Page View |
            | user segment global  | 003001                                                                            | string           | Page View |
            | user segment profile | preaprobado                                                                       | string           | Page View |
            | user gender          | gender                                                                            | regexp named     | Page View |
            | user age             | age                                                                               | regexp named     | Page View |
            | application name     |                                                                                   | empty str object | Page View |

    @ANA_EVENT_OCC007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS Page View - Click tooltip down payment help info
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        And the analytics interceptor service is initiated
        When the user selects a tooltip "help info down payment" modal
        Then the analytics events contains the following variables
            | item                 | value                                                                         | type             | event     |
            | version DL           | 20250414_5.0                                                                  | string           | Page View |
            | page intent          | informacion                                                                   | string           | Page View |
            | page segment         | personas                                                                      | string           | Page View |
            | page name            | app:privada:personas:prestamos:contratacion credito auto:2 simulador:enganche | string           | Page View |
            | sysEnv               | app                                                                           | string           | Page View |
            | channel              | online                                                                        | string           | Page View |
            | language             | ES                                                                            | string           | Page View |
            | level 1              | prestamos                                                                     | string           | Page View |
            | level 2              | contratacion credito auto                                                     | string           | Page View |
            | level 3              | 2 simulador                                                                   | string           | Page View |
            | level 4              | enganche                                                                      | string           | Page View |
            | business unit        | BBVA Mexico                                                                   | string           | Page View |
            | site app name        | App BBVA Mexico                                                               | string           | Page View |
            | project name         | DIY E2E Sales                                                                 | string           | Page View |
            | page area            | privada                                                                       | string           | Page View |
            | device mobile        | si                                                                            | string           | Page View |
            | device root          | no root                                                                       | string           | Page View |
            | user userState       | logado                                                                        | string           | Page View |
            | user segment global  | 003001                                                                        | string           | Page View |
            | user segment profile | preaprobado                                                                   | string           | Page View |
            | user gender          | gender                                                                        | regexp named     | Page View |
            | user age             | age                                                                           | regexp named     | Page View |
            | application name     |                                                                               | empty str object | Page View |

    @ANA_EVENT_OCC008
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS Page View - Click tooltip life insurance help info
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        And the analytics interceptor service is initiated
        When the user selects a tooltip "help life insurance info" modal
        Then the analytics events contains the following variables
            | item                 | value                                                                                          | type             | event     |
            | version DL           | 20250414_5.0                                                                                   | string           | Page View |
            | page intent          | informacion                                                                                    | string           | Page View |
            | page segment         | personas                                                                                       | string           | Page View |
            | page name            | app:privada:personas:prestamos:contratacion credito auto:2 simulador:seguro de vida financiado | string           | Page View |
            | sysEnv               | app                                                                                            | string           | Page View |
            | channel              | online                                                                                         | string           | Page View |
            | language             | ES                                                                                             | string           | Page View |
            | level 1              | prestamos                                                                                      | string           | Page View |
            | level 2              | contratacion credito auto                                                                      | string           | Page View |
            | level 3              | 2 simulador                                                                                    | string           | Page View |
            | level 4              | seguro de vida financiado                                                                      | string           | Page View |
            | business unit        | BBVA Mexico                                                                                    | string           | Page View |
            | site app name        | App BBVA Mexico                                                                                | string           | Page View |
            | project name         | DIY E2E Sales                                                                                  | string           | Page View |
            | page area            | privada                                                                                        | string           | Page View |
            | device mobile        | si                                                                                             | string           | Page View |
            | device root          | no root                                                                                        | string           | Page View |
            | user userState       | logado                                                                                         | string           | Page View |
            | user segment global  | 003001                                                                                         | string           | Page View |
            | user segment profile | preaprobado                                                                                    | string           | Page View |
            | user gender          | gender                                                                                         | regexp named     | Page View |
            | user age             | age                                                                                            | regexp named     | Page View |
            | application name     |                                                                                                | empty str object | Page View |

    @ANA_EVENT_OCC009
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS Page View - Click tooltip tin help info
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        And the analytics interceptor service is initiated
        When the user selects a tooltip "help tin info" modal
        Then the analytics events contains the following variables
            | item                 | value                                                                                           | type             | event     |
            | version DL           | 20250414_5.0                                                                                    | string           | Page View |
            | page intent          | informacion                                                                                     | string           | Page View |
            | page segment         | personas                                                                                        | string           | Page View |
            | page name            | app:privada:personas:prestamos:contratacion credito auto:2 simulador:tasa de interes fija anual | string           | Page View |
            | sysEnv               | app                                                                                             | string           | Page View |
            | channel              | online                                                                                          | string           | Page View |
            | language             | ES                                                                                              | string           | Page View |
            | level 1              | prestamos                                                                                       | string           | Page View |
            | level 2              | contratacion credito auto                                                                       | string           | Page View |
            | level 3              | 2 simulador                                                                                     | string           | Page View |
            | level 4              | tasa de interes fija anual                                                                      | string           | Page View |
            | business unit        | BBVA Mexico                                                                                     | string           | Page View |
            | site app name        | App BBVA Mexico                                                                                 | string           | Page View |
            | project name         | DIY E2E Sales                                                                                   | string           | Page View |
            | page area            | privada                                                                                         | string           | Page View |
            | device mobile        | si                                                                                              | string           | Page View |
            | device root          | no root                                                                                         | string           | Page View |
            | user userState       | logado                                                                                          | string           | Page View |
            | user segment global  | 003001                                                                                          | string           | Page View |
            | user segment profile | preaprobado                                                                                     | string           | Page View |
            | user gender          | gender                                                                                          | regexp named     | Page View |
            | user age             | age                                                                                             | regexp named     | Page View |
            | application name     |                                                                                                 | empty str object | Page View |

    @ANA_EVENT_OCC010
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS Page View - Click tooltip cat help info
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        And the analytics interceptor service is initiated
        When the user selects a tooltip "help CAT info" modal
        Then the analytics events contains the following variables
            | item                 | value                                                                                  | type             | event     |
            | version DL           | 20250414_5.0                                                                           | string           | Page View |
            | page intent          | informacion                                                                            | string           | Page View |
            | page segment         | personas                                                                               | string           | Page View |
            | page name            | app:privada:personas:prestamos:contratacion credito auto:2 simulador:costo anual total | string           | Page View |
            | sysEnv               | app                                                                                    | string           | Page View |
            | channel              | online                                                                                 | string           | Page View |
            | language             | ES                                                                                     | string           | Page View |
            | level 1              | prestamos                                                                              | string           | Page View |
            | level 2              | contratacion credito auto                                                              | string           | Page View |
            | level 3              | 2 simulador                                                                            | string           | Page View |
            | level 4              | costo anual total                                                                      | string           | Page View |
            | business unit        | BBVA Mexico                                                                            | string           | Page View |
            | site app name        | App BBVA Mexico                                                                        | string           | Page View |
            | project name         | DIY E2E Sales                                                                          | string           | Page View |
            | page area            | privada                                                                                | string           | Page View |
            | device mobile        | si                                                                                     | string           | Page View |
            | device root          | no root                                                                                | string           | Page View |
            | user userState       | logado                                                                                 | string           | Page View |
            | user segment global  | 003001                                                                                 | string           | Page View |
            | user segment profile | preaprobado                                                                            | string           | Page View |
            | user gender          | gender                                                                                 | regexp named     | Page View |
            | user age             | age                                                                                    | regexp named     | Page View |
            | application name     |                                                                                        | empty str object | Page View |

    @ANA_EVENT_OCC011
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS Page View - Click tooltip commission help info
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        And the analytics interceptor service is initiated
        When the user selects a tooltip "help commission info" modal
        Then the analytics events contains the following variables
            | item                 | value                                                                                          | type             | event     |
            | version DL           | 20250414_5.0                                                                                   | string           | Page View |
            | page intent          | informacion                                                                                    | string           | Page View |
            | page segment         | personas                                                                                       | string           | Page View |
            | page name            | app:privada:personas:prestamos:contratacion credito auto:2 simulador:comision por contratacion | string           | Page View |
            | sysEnv               | app                                                                                            | string           | Page View |
            | channel              | online                                                                                         | string           | Page View |
            | language             | ES                                                                                             | string           | Page View |
            | level 1              | prestamos                                                                                      | string           | Page View |
            | level 2              | contratacion credito auto                                                                      | string           | Page View |
            | level 3              | 2 simulador                                                                                    | string           | Page View |
            | level 4              | comision por contratacion                                                                      | string           | Page View |
            | business unit        | BBVA Mexico                                                                                    | string           | Page View |
            | site app name        | App BBVA Mexico                                                                                | string           | Page View |
            | project name         | DIY E2E Sales                                                                                  | string           | Page View |
            | page area            | privada                                                                                        | string           | Page View |
            | device mobile        | si                                                                                             | string           | Page View |
            | device root          | no root                                                                                        | string           | Page View |
            | user userState       | logado                                                                                         | string           | Page View |
            | user segment global  | 003001                                                                                         | string           | Page View |
            | user segment profile | preaprobado                                                                                    | string           | Page View |
            | user gender          | gender                                                                                         | regexp named     | Page View |
            | user age             | age                                                                                            | regexp named     | Page View |
            | application name     |                                                                                                | empty str object | Page View |

    @ANA_EVENT_OCC012
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS Page View - Click tooltip damage insurance help info
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        And the analytics interceptor service is initiated
        When the user selects a tooltip "help damage insurance info" modal
        Then the analytics events contains the following variables
            | item                     | value                                                                                           | type             | event     |
            | version DL               | 20250414_5.0                                                                                    | string           | Page View |
            | page intent              | informacion                                                                                     | string           | Page View |
            | page segment             | personas                                                                                        | string           | Page View |
            | page name                | app:privada:personas:prestamos:contratacion credito auto:2 simulador:no incluye seguro de danos | string           | Page View |
            | sysEnv                   | app                                                                                             | string           | Page View |
            | channel                  | online                                                                                          | string           | Page View |
            | language                 | ES                                                                                              | string           | Page View |
            | level 1                  | prestamos                                                                                       | string           | Page View |
            | level 2                  | contratacion credito auto                                                                       | string           | Page View |
            | level 3                  | 2 simulador                                                                                     | string           | Page View |
            | level 4                  | no incluye seguro de danos                                                                      | string           | Page View |
            | business unit            | BBVA Mexico                                                                                     | string           | Page View |
            | site app name            | App BBVA Mexico                                                                                 | string           | Page View |
            | project name             | DIY E2E Sales                                                                                   | string           | Page View |
            | page area                | privada                                                                                         | string           | Page View |
            | device mobile            | si                                                                                              | string           | Page View |
            | device root              | no root                                                                                         | string           | Page View |
            | user userState           | logado                                                                                          | string           | Page View |
            | user segment global      | 003001                                                                                          | string           | Page View |
            | user segment profile     | preaprobado                                                                                     | string           | Page View |
            | user gender              | gender                                                                                          | regexp named     | Page View |
            | user age                 | age                                                                                             | regexp named     | Page View |
            | application name         |                                                                                                 | empty str object | Page View |

    @ANA_EVENT_OCC013
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS App Step 3 - View user data step
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        And the analytics interceptor service is initiated
        When the user continue to personal data
        Then the analytics events contains the following variables
            | item                       | value                                                            | type         | event      |
            | version DL                 | 20250414_5.0                                                     | string       | App Step 3 |
            | page intent                | transaccion                                                      | string       | App Step 3 |
            | page segment               | personas                                                         | string       | App Step 3 |
            | page name                  | app:privada:personas:prestamos:contratacion credito auto:3 datos | string       | App Step 3 |
            | sysEnv                     | app                                                              | string       | App Step 3 |
            | channel                    | online                                                           | string       | App Step 3 |
            | language                   | ES                                                               | string       | App Step 3 |
            | level 1                    | prestamos                                                        | string       | App Step 3 |
            | level 2                    | contratacion credito auto                                        | string       | App Step 3 |
            | level 3                    | 3 datos                                                          | string       | App Step 3 |
            | business unit              | BBVA Mexico                                                      | string       | App Step 3 |
            | site app name              | App BBVA Mexico                                                  | string       | App Step 3 |
            | project name               | DIY E2E Sales                                                    | string       | App Step 3 |
            | page area                  | privada                                                          | string       | App Step 3 |
            | device mobile              | si                                                               | string       | App Step 3 |
            | device root                | no root                                                          | string       | App Step 3 |
            | user userState             | logado                                                           | string       | App Step 3 |
            | user segment global        | 003001                                                           | string       | App Step 3 |
            | user segment profile       | preaprobado                                                      | string       | App Step 3 |
            | user gender                | gender                                                           | regexp named | App Step 3 |
            | product primary category   | prestamos                                                        | string       | App Step 3 |
            | product primary category 1 | seguros                                                          | string       | App Step 3 |
            | product name               | credito auto                                                     | string       | App Step 3 |
            | product name 1             | seguro vida                                                      | string       | App Step 3 |
            | product amount             | 500000                                                           | string       | App Step 3 |
            | product amount 1           | 5000                                                             | string       | App Step 3 |
            | product currency           | mxn                                                              | string       | App Step 3 |
            | product currency 1         | mxn                                                              | string       | App Step 3 |
            | product payment amount     | 250000                                                           | string       | App Step 3 |
            | product service charge     | 6231.35                                                          | string       | App Step 3 |
            | product interest rate      | 15.99                                                            | string       | App Step 3 |
            | product number of payments | 60                                                               | string       | App Step 3 |
            | product payment type       | mensual                                                          | string       | App Step 3 |
            | fulfillment model          | online                                                           | string       | App Step 3 |
            | application type           | contratacion                                                     | string       | App Step 3 |
            | application typology       | nuevo                                                            | string       | App Step 3 |
            | application name           | contratacion credito auto                                        | string       | App Step 3 |
            | application step           | 3 datos                                                          | string       | App Step 3 |
            | global application         | car loan                                                         | string       | App Step 3 |

    @ANA_EVENT_OCC014
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS App Step 4 - View terms and conditions step
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the analytics interceptor service is initiated
        When the user selected yes received advice and continue to terms and conditions
        Then the analytics events contains the following variables
            | item                       | value                                                                             | type         | event      |
            | version DL                 | 20250414_5.0                                                                      | string       | App Step 4 |
            | page intent                | transaccion                                                                       | string       | App Step 4 |
            | page segment               | personas                                                                          | string       | App Step 4 |
            | page name                  | app:privada:personas:prestamos:contratacion credito auto:4 terminos y condiciones | string       | App Step 4 |
            | sysEnv                     | app                                                                               | string       | App Step 4 |
            | channel                    | online                                                                            | string       | App Step 4 |
            | language                   | ES                                                                                | string       | App Step 4 |
            | level 1                    | prestamos                                                                         | string       | App Step 4 |
            | level 2                    | contratacion credito auto                                                         | string       | App Step 4 |
            | level 3                    | 4 terminos y condiciones                                                          | string       | App Step 4 |
            | business unit              | BBVA Mexico                                                                       | string       | App Step 4 |
            | site app name              | App BBVA Mexico                                                                   | string       | App Step 4 |
            | project name               | DIY E2E Sales                                                                     | string       | App Step 4 |
            | page area                  | privada                                                                           | string       | App Step 4 |
            | device mobile              | si                                                                                | string       | App Step 4 |
            | device root                | no root                                                                           | string       | App Step 4 |
            | user userState             | logado                                                                            | string       | App Step 4 |
            | user segment global        | 003001                                                                            | string       | App Step 4 |
            | user segment profile       | preaprobado                                                                       | string       | App Step 4 |
            | user gender                | gender                                                                            | regexp named | App Step 4 |
            | product primary category   | prestamos                                                                         | string       | App Step 4 |
            | product primary category 1 | seguros                                                                           | string       | App Step 4 |
            | product name               | credito auto                                                                      | string       | App Step 4 |
            | product name 1             | seguro vida                                                                       | string       | App Step 4 |
            | product amount             | 500000                                                                            | string       | App Step 4 |
            | product amount 1           | 5000                                                                              | string       | App Step 4 |
            | product currency           | mxn                                                                               | string       | App Step 4 |
            | product currency 1         | mxn                                                                               | string       | App Step 4 |
            | product payment amount     | 250000                                                                            | string       | App Step 4 |
            | product service charge     | 6231.35                                                                           | string       | App Step 4 |
            | product interest rate      | 15.99                                                                             | string       | App Step 4 |
            | product number of payments | 60                                                                                | string       | App Step 4 |
            | product payment type       | mensual                                                                           | string       | App Step 4 |
            | fulfillment model          | online                                                                            | string       | App Step 4 |
            | application process        | si recibi asesoria                                                                | string       | App Step 4 |
            | application type           | contratacion                                                                      | string       | App Step 4 |
            | application typology       | nuevo                                                                             | string       | App Step 4 |
            | application name           | contratacion credito auto                                                         | string       | App Step 4 |
            | application step           | 4 terminos y condiciones                                                          | string       | App Step 4 |
            | global application         | car loan                                                                          | string       | App Step 4 |

    @ANA_EVENT_OCC015
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS Interaction Link - Click to terms and conditions modal
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        And the user with offer npa accesses to summary step
        And the analytics interceptor service is initiated
        When the user selects a modal "info terms and conditions"
        Then the analytics events contains the following variables
            | item                     | value                                                                             | type             | event            |
            | version DL               | 20250414_5.0                                                                      | string           | Interaction Link |
            | page intent              | transaccion                                                                       | string           | Interaction Link |
            | page segment             | personas                                                                          | string           | Interaction Link |
            | page name                | app:privada:personas:prestamos:contratacion credito auto:4 terminos y condiciones | string           | Interaction Link |
            | sysEnv                   | app                                                                               | string           | Interaction Link |
            | channel                  | online                                                                            | string           | Interaction Link |
            | language                 | ES                                                                                | string           | Interaction Link |
            | level 1                  | prestamos                                                                         | string           | Interaction Link |
            | level 2                  | contratacion credito auto                                                         | string           | Interaction Link |
            | level 3                  | 4 terminos y condiciones                                                          | string           | Interaction Link |
            | business unit            | BBVA Mexico                                                                       | string           | Interaction Link |
            | site app name            | App BBVA Mexico                                                                   | string           | Interaction Link |
            | project name             | DIY E2E Sales                                                                     | string           | Interaction Link |
            | page area                | privada                                                                           | string           | Interaction Link |
            | device mobile            | si                                                                                | string           | Interaction Link |
            | device root              | no root                                                                           | string           | Interaction Link |
            | user userState           | logado                                                                            | string           | Interaction Link |
            | user segment global      | 003001                                                                            | string           | Interaction Link |
            | user segment profile     | preaprobado                                                                       | string           | Interaction Link |
            | user gender              | gender                                                                            | regexp named     | Interaction Link |
            | interaction level        | terminos y condiciones cotizacion                                                 | string           | Interaction Link |
            | application name         |                                                                                   | empty str object | Interaction Link |

    @ANA_EVENT_OCC016
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS Interaction Link - Click to bureau authorization modal
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user with offer npa accesses to summary step
        And the analytics interceptor service is initiated
        When the user selects a modal "history credit check"
        Then the analytics events contains the following variables
            | item                     | value                                                                             | type             | event            |
            | version DL               | 20250414_5.0                                                                      | string           | Interaction Link |
            | page intent              | transaccion                                                                       | string           | Interaction Link |
            | page segment             | personas                                                                          | string           | Interaction Link |
            | page name                | app:privada:personas:prestamos:contratacion credito auto:4 terminos y condiciones | string           | Interaction Link |
            | sysEnv                   | app                                                                               | string           | Interaction Link |
            | channel                  | online                                                                            | string           | Interaction Link |
            | language                 | ES                                                                                | string           | Interaction Link |
            | level 1                  | prestamos                                                                         | string           | Interaction Link |
            | level 2                  | contratacion credito auto                                                         | string           | Interaction Link |
            | level 3                  | 4 terminos y condiciones                                                          | string           | Interaction Link |
            | business unit            | BBVA Mexico                                                                       | string           | Interaction Link |
            | site app name            | App BBVA Mexico                                                                   | string           | Interaction Link |
            | project name             | DIY E2E Sales                                                                     | string           | Interaction Link |
            | page area                | privada                                                                           | string           | Interaction Link |
            | device mobile            | si                                                                                | string           | Interaction Link |
            | device root              | no root                                                                           | string           | Interaction Link |
            | user userState           | logado                                                                            | string           | Interaction Link |
            | user segment global      | 003001                                                                            | string           | Interaction Link |
            | user segment profile     | preaprobado                                                                       | string           | Interaction Link |
            | user gender              | gender                                                                            | regexp named     | Interaction Link |
            | interaction level        | autorizacion consulta historial de credito                                        | string           | Interaction Link |
            | application name         |                                                                                   | empty str object | Interaction Link |

    @ANA_EVENT_OCC017
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS Interaction Link - Click to privacy notice modal
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user with offer npa accesses to summary step
        And the analytics interceptor service is initiated
        When the user selects a modal "info privacy notice"
        Then the analytics events contains the following variables
            | item                     | value                                                                             | type             | event            |
            | version DL               | 20250414_5.0                                                                      | string           | Interaction Link |
            | page intent              | transaccion                                                                       | string           | Interaction Link |
            | page segment             | personas                                                                          | string           | Interaction Link |
            | page name                | app:privada:personas:prestamos:contratacion credito auto:4 terminos y condiciones | string           | Interaction Link |
            | sysEnv                   | app                                                                               | string           | Interaction Link |
            | channel                  | online                                                                            | string           | Interaction Link |
            | language                 | ES                                                                                | string           | Interaction Link |
            | level 1                  | prestamos                                                                         | string           | Interaction Link |
            | level 2                  | contratacion credito auto                                                         | string           | Interaction Link |
            | level 3                  | 4 terminos y condiciones                                                          | string           | Interaction Link |
            | business unit            | BBVA Mexico                                                                       | string           | Interaction Link |
            | site app name            | App BBVA Mexico                                                                   | string           | Interaction Link |
            | project name             | DIY E2E Sales                                                                     | string           | Interaction Link |
            | page area                | privada                                                                           | string           | Interaction Link |
            | device mobile            | si                                                                                | string           | Interaction Link |
            | device root              | no root                                                                           | string           | Interaction Link |
            | user userState           | logado                                                                            | string           | Interaction Link |
            | user segment global      | 003001                                                                            | string           | Interaction Link |
            | user segment profile     | preaprobado                                                                       | string           | Interaction Link |
            | user gender              | gender                                                                            | regexp named     | Interaction Link |
            | interaction level        | aviso privacidad                                                                  | string           | Interaction Link |
            | application name         |                                                                                   | empty str object | Interaction Link |

    @ANA_EVENT_OCC018
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS App Step 5 - View summary contract
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user with offer npa accesses to summary step
        And the analytics interceptor service is initiated
        When the user accesses to accepted privacy terms
        Then the analytics events contains the following variables
            | item                       | value                                                                   | type         | event      |
            | version DL                 | 20250414_5.0                                                            | string       | App Step 5 |
            | page intent                | transaccion                                                             | string       | App Step 5 |
            | page segment               | personas                                                                | string       | App Step 5 |
            | page name                  | app:privada:personas:prestamos:contratacion credito auto:5 confirmacion | string       | App Step 5 |
            | sysEnv                     | app                                                                     | string       | App Step 5 |
            | channel                    | online                                                                  | string       | App Step 5 |
            | language                   | ES                                                                      | string       | App Step 5 |
            | level 1                    | prestamos                                                               | string       | App Step 5 |
            | level 2                    | contratacion credito auto                                               | string       | App Step 5 |
            | level 3                    | 5 confirmacion                                                          | string       | App Step 5 |
            | business unit              | BBVA Mexico                                                             | string       | App Step 5 |
            | site app name              | App BBVA Mexico                                                         | string       | App Step 5 |
            | project name               | DIY E2E Sales                                                           | string       | App Step 5 |
            | page area                  | privada                                                                 | string       | App Step 5 |
            | device mobile              | si                                                                      | string       | App Step 5 |
            | device root                | no root                                                                 | string       | App Step 5 |
            | user userState             | logado                                                                  | string       | App Step 5 |
            | user segment global        | 003001                                                                  | string       | App Step 5 |
            | user segment profile       | preaprobado                                                             | string       | App Step 5 |
            | user gender                | gender                                                                  | regexp named | App Step 5 |
            | product primary category   | prestamos                                                               | string       | App Step 5 |
            | product primary category 1 | seguros                                                                 | string       | App Step 5 |
            | product name               | credito auto                                                            | string       | App Step 5 |
            | product name 1             | seguro vida                                                             | string       | App Step 5 |
            | product amount             | 500000                                                                  | string       | App Step 5 |
            | product amount 1           | 5000                                                                    | string       | App Step 5 |
            | product currency           | mxn                                                                     | string       | App Step 5 |
            | product currency 1         | mxn                                                                     | string       | App Step 5 |
            | product payment amount     | 250000                                                                  | string       | App Step 5 |
            | product service charge     | 6231.35                                                                 | string       | App Step 5 |
            | product interest rate      | 15.99                                                                   | string       | App Step 5 |
            | product number of payments | 60                                                                      | string       | App Step 5 |
            | product payment type       | mensual                                                                 | string       | App Step 5 |
            | fulfillment model          | online                                                                  | string       | App Step 5 |
            | application process        | no recibi asesoria                                                      | string       | App Step 5 |
            | application type           | contratacion                                                            | string       | App Step 5 |
            | application typology       | nuevo                                                                   | string       | App Step 5 |
            | application name           | contratacion credito auto                                               | string       | App Step 5 |
            | application step           | 5 confirmacion                                                          | string       | App Step 5 |
            | global application         | car loan                                                                | string       | App Step 5 |

    @ANA_EVENT_OCC019
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS App Step 6 - View otp screen
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user with offer npa accesses to summary step
        And the user accesses to summary steps
        And the analytics interceptor service is initiated
        When the user accesses to otp step
        Then the analytics events contains the following variables
            | item                       | value                                                          | type         | event      |
            | version DL                 | 20250414_5.0                                                   | string       | App Step 6 |
            | page intent                | transaccion                                                    | string       | App Step 6 |
            | page segment               | personas                                                       | string       | App Step 6 |
            | page name                  | app:privada:personas:prestamos:contratacion credito auto:6 otp | string       | App Step 6 |
            | sysEnv                     | app                                                            | string       | App Step 6 |
            | channel                    | online                                                         | string       | App Step 6 |
            | language                   | ES                                                             | string       | App Step 6 |
            | level 1                    | prestamos                                                      | string       | App Step 6 |
            | level 2                    | contratacion credito auto                                      | string       | App Step 6 |
            | level 3                    | 6 otp                                                          | string       | App Step 6 |
            | business unit              | BBVA Mexico                                                    | string       | App Step 6 |
            | site app name              | App BBVA Mexico                                                | string       | App Step 6 |
            | project name               | DIY E2E Sales                                                  | string       | App Step 6 |
            | page area                  | privada                                                        | string       | App Step 6 |
            | device mobile              | si                                                             | string       | App Step 6 |
            | device root                | no root                                                        | string       | App Step 6 |
            | user userState             | logado                                                         | string       | App Step 6 |
            | user segment global        | 003001                                                         | string       | App Step 6 |
            | user segment profile       | preaprobado                                                    | string       | App Step 6 |
            | user gender                | gender                                                         | regexp named | App Step 6 |
            | product primary category   | prestamos                                                      | string       | App Step 6 |
            | product primary category 1 | seguros                                                        | string       | App Step 6 |
            | product name               | credito auto                                                   | string       | App Step 6 |
            | product name 1             | seguro vida                                                    | string       | App Step 6 |
            | product amount             | 500000                                                         | string       | App Step 6 |
            | product amount 1           | 5000                                                           | string       | App Step 6 |
            | product currency           | mxn                                                            | string       | App Step 6 |
            | product currency 1         | mxn                                                            | string       | App Step 6 |
            | product payment amount     | 250000                                                         | string       | App Step 6 |
            | product service charge     | 6231.35                                                        | string       | App Step 6 |
            | product interest rate      | 15.99                                                          | string       | App Step 6 |
            | product number of payments | 60                                                             | string       | App Step 6 |
            | product payment type       | mensual                                                        | string       | App Step 6 |
            | fulfillment model          | online                                                         | string       | App Step 6 |
            | application process        | no recibi asesoria                                             | string       | App Step 6 |
            | application type           | contratacion                                                   | string       | App Step 6 |
            | application typology       | nuevo                                                          | string       | App Step 6 |
            | application name           | contratacion credito auto                                      | string       | App Step 6 |
            | application step           | 6 otp                                                          | string       | App Step 6 |
            | global application         | car loan                                                       | string       | App Step 6 |
            | custom fields              | firma:token                                                    | string       | App Step 6 |

    @ANA_EVENT_OCC020
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS App Completed - Denied operation
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user with offer npa accesses to summary step
        And the user accesses to summary steps
        And the analytics interceptor service is initiated
        When the user accesses to success simulation step
        Then the analytics events contains the following variables
            | item                       | value                                                                   | type         | event         |
            | version DL                 | 20250414_5.0                                                            | string       | App Completed |
            | page intent                | transaccion                                                             | string       | App Completed |
            | page segment               | personas                                                                | string       | App Completed |
            | page name                  | app:privada:personas:prestamos:contratacion credito auto:pagina exitosa | string       | App Completed |
            | sysEnv                     | app                                                                     | string       | App Completed |
            | channel                    | online                                                                  | string       | App Completed |
            | language                   | ES                                                                      | string       | App Completed |
            | level 1                    | prestamos                                                               | string       | App Completed |
            | level 2                    | contratacion credito auto                                               | string       | App Completed |
            | level 3                    | pagina exitosa                                                          | string       | App Completed |
            | business unit              | BBVA Mexico                                                             | string       | App Completed |
            | site app name              | App BBVA Mexico                                                         | string       | App Completed |
            | project name               | DIY E2E Sales                                                           | string       | App Completed |
            | page area                  | privada                                                                 | string       | App Completed |
            | device mobile              | si                                                                      | string       | App Completed |
            | device root                | no root                                                                 | string       | App Completed |
            | user userState             | logado                                                                  | string       | App Completed |
            | user segment global        | 003001                                                                  | string       | App Completed |
            | user segment profile       | preaprobado                                                             | string       | App Completed |
            | user gender                | gender                                                                  | regexp named | App Completed |
            | product primary category   | prestamos                                                               | string       | App Completed |
            | product primary category 1 | seguros                                                                 | string       | App Completed |
            | product name               | credito auto                                                            | string       | App Completed |
            | product name 1             | seguro vida                                                             | string       | App Completed |
            | product state              | rechazado                                                               | string       | App Completed |
            | product state 1            | rechazado                                                               | string       | App Completed |
            | product amount             | 500000                                                                  | string       | App Completed |
            | product amount 1           | 5000                                                                    | string       | App Completed |
            | product currency           | mxn                                                                     | string       | App Completed |
            | product currency 1         | mxn                                                                     | string       | App Completed |
            | product payment amount     | 250000                                                                  | string       | App Completed |
            | product service charge     | 6231.35                                                                 | string       | App Completed |
            | product interest rate      | 15.99                                                                   | string       | App Completed |
            | product number of payments | 60                                                                      | string       | App Completed |
            | product payment type       | mensual                                                                 | string       | App Completed |
            | fulfillment model          | online                                                                  | string       | App Completed |
            | application process        | no recibi asesoria                                                      | string       | App Completed |
            | application type           | contratacion                                                            | string       | App Completed |
            | application typology       | nuevo                                                                   | string       | App Completed |
            | application name           | contratacion credito auto                                               | string       | App Completed |
            | application step           | pagina exitosa                                                          | string       | App Completed |
            | application state          | rechazado                                                               | string       | App Completed |
            | global application         | car loan                                                                | string       | App Completed |
            | custom fields              | firma:token                                                             | string       | App Completed |

    @ANA_EVENT_OCC021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS App Completed - Successful operation
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user with offer npa accesses to summary step
        And the user accesses to summary steps
        And the analytics interceptor service is initiated
        When the user accesses to success simulation step
        Then the analytics events contains the following variables
            | item                         | value                                                                   | type         | event         |
            | version DL                   | 20250414_5.0                                                            | string       | App Completed |
            | page intent                  | transaccion                                                             | string       | App Completed |
            | page segment                 | personas                                                                | string       | App Completed |
            | page name                    | app:privada:personas:prestamos:contratacion credito auto:pagina exitosa | string       | App Completed |
            | sysEnv                       | app                                                                     | string       | App Completed |
            | channel                      | online                                                                  | string       | App Completed |
            | language                     | ES                                                                      | string       | App Completed |
            | level 1                      | prestamos                                                               | string       | App Completed |
            | level 2                      | contratacion credito auto                                               | string       | App Completed |
            | level 3                      | pagina exitosa                                                          | string       | App Completed |
            | business unit                | BBVA Mexico                                                             | string       | App Completed |
            | site app name                | App BBVA Mexico                                                         | string       | App Completed |
            | project name                 | DIY E2E Sales                                                           | string       | App Completed |
            | page area                    | privada                                                                 | string       | App Completed |
            | device mobile                | si                                                                      | string       | App Completed |
            | device root                  | no root                                                                 | string       | App Completed |
            | user userState               | logado                                                                  | string       | App Completed |
            | user segment global          | 003001                                                                  | string       | App Completed |
            | user segment profile         | preaprobado                                                             | string       | App Completed |
            | user gender                  | gender                                                                  | regexp named | App Completed |
            | product primary category     | prestamos                                                               | string       | App Completed |
            | product primary category 1   | seguros                                                                 | string       | App Completed |
            | product name                 | credito auto                                                            | string       | App Completed |
            | product name 1               | seguro vida                                                             | string       | App Completed |
            | product state                | aprobado                                                                | string       | App Completed |
            | product state 1              | aprobado                                                                | string       | App Completed |
            | product amount               | 500000                                                                  | string       | App Completed |
            | product amount 1             | 5000                                                                    | string       | App Completed |
            | product currency             | mxn                                                                     | string       | App Completed |
            | product currency 1           | mxn                                                                     | string       | App Completed |
            | product payment amount       | 250000                                                                  | string       | App Completed |
            | product service charge       | 6231.35                                                                 | string       | App Completed |
            | product interest rate        | 15.99                                                                   | string       | App Completed |
            | product number of payments   | 60                                                                      | string       | App Completed |
            | product payment type         | mensual                                                                 | string       | App Completed |
            | fulfillment model            | online                                                                  | string       | App Completed |
            | application process          | no recibi asesoria                                                      | string       | App Completed |
            | application operation number | 5039633                                                                 | string       | App Completed |
            | application type             | contratacion                                                            | string       | App Completed |
            | application typology         | nuevo                                                                   | string       | App Completed |
            | application name             | contratacion credito auto                                               | string       | App Completed |
            | application step             | pagina exitosa                                                          | string       | App Completed |
            | application state            | aprobado                                                                | string       | App Completed |
            | global application           | car loan                                                                | string       | App Completed |
            | custom fields                | firma:token                                                             | string       | App Completed |

    @ANA_EVENT_OCC022
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS Page View - Error service operation unavailable
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user with offer npa accesses to summary step
        And the user accesses to summary steps
        And the analytics interceptor service is initiated
        When the user accesses to success simulation step with error
        Then the analytics events contains the following variables
            | item                     | value                                                                                  | type             | event     |
            | version DL               | 20250414_5.0                                                                           | string           | Page View |
            | page intent              | informacion                                                                            | string           | Page View |
            | page segment             | personas                                                                               | string           | Page View |
            | page name                | app:privada:personas:prestamos:contratacion credito auto:error operacion no disponible | string           | Page View |
            | sysEnv                   | app                                                                                    | string           | Page View |
            | channel                  | online                                                                                 | string           | Page View |
            | language                 | ES                                                                                     | string           | Page View |
            | level 1                  | prestamos                                                                              | string           | Page View |
            | level 2                  | contratacion credito auto                                                              | string           | Page View |
            | level 3                  | error operacion no disponible                                                          | string           | Page View |
            | business unit            | BBVA Mexico                                                                            | string           | Page View |
            | site app name            | App BBVA Mexico                                                                        | string           | Page View |
            | project name             | DIY E2E Sales                                                                          | string           | Page View |
            | error page               | error operacion no disponible                                                          | string           | Page View |
            | page area                | privada                                                                                | string           | Page View |
            | device mobile            | si                                                                                     | string           | Page View |
            | device root              | no root                                                                                | string           | Page View |
            | user userState           | logado                                                                                 | string           | Page View |
            | user segment global      | 003001                                                                                 | string           | Page View |
            | application name         |                                                                                        | empty str object | Page View |

    @ANA_EVENT_OCC023
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Oc Car Loan ANALYTICS Page View - Error service information unavailable
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        And the analytics interceptor service is initiated
        When retry modal request
        Then the analytics events contains the following variables
            | item                     | value                                                                                    | type             | event     |
            | version DL               | 20250414_5.0                                                                             | string           | Page View |
            | page intent              | informacion                                                                              | string           | Page View |
            | page segment             | personas                                                                                 | string           | Page View |
            | page name                | app:privada:personas:prestamos:contratacion credito auto:error informacion no disponible | string           | Page View |
            | sysEnv                   | app                                                                                      | string           | Page View |
            | channel                  | online                                                                                   | string           | Page View |
            | language                 | ES                                                                                       | string           | Page View |
            | level 1                  | prestamos                                                                                | string           | Page View |
            | level 2                  | contratacion credito auto                                                                | string           | Page View |
            | level 3                  | error informacion no disponible                                                          | string           | Page View |
            | business unit            | BBVA Mexico                                                                              | string           | Page View |
            | site app name            | App BBVA Mexico                                                                          | string           | Page View |
            | project name             | DIY E2E Sales                                                                            | string           | Page View |
            | error page               | error informacion no disponible                                                          | string           | Page View |
            | page area                | privada                                                                                  | string           | Page View |
            | device mobile            | si                                                                                       | string           | Page View |
            | device root              | no root                                                                                  | string           | Page View |
            | user userState           | logado                                                                                   | string           | Page View |
            | user segment global      | 003001                                                                                   | string           | Page View |
            | application name         |                                                                                          | empty str object | Page View |
