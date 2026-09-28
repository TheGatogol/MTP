@nonPreApprovedCarCertificateAnalytics
Feature: Analytics - Non Pre Approved Car Certificate

    @ANA_PCC001
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: No Pre Approved Car Certificate - App Page Visit
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        When the user accesses to non pre approved car certificate "main" screen
        Then the device contains the following variables
            | item                     | value                                                                 | type         |
            | analytics                | analytics/glomo_base                                                  | json schema  |
            | version DL               | 20250414_5.0                                                          | string       |
            | page name                | app:privada:personas:prestamos:contratacion credito auto:1 cotizacion | string       |
            | level 1                  | prestamos                                                             | string       |
            | level 2                  | contratacion credito auto                                             | string       |
            | level 3                  | 1 cotizacion                                                          | string       |
            | language                 | ES                                                                    | string       |
            | page area                | privada                                                               | string       |
            | page intent              | transaccion                                                           | string       |
            | channel                  | online                                                                | string       |
            | page instance ID         | de                                                                    | string       |
            | page info version        | appVersion                                                            | regexp named |
            | page segment             | personas                                                              | string       |
            | sysEnv                   | app                                                                   | string       |
            | business unit            | BBVA Mexico                                                           | string       |
            | site app name            | App BBVA Mexico                                                       | string       |
            | project name             | DIY E2E Sales                                                         | string       |
            | device mobile            | si                                                                    | string       |
            | user userState           | logado                                                                | string       |
            | user segment global      | 003001                                                                | string       |
            | profile ID               | profileID                                                             | regexp named |
            | user gender              | gender                                                                | regexp named |
            | user age                 | age                                                                   | regexp named |
            | global application       | car loan                                                              | string       |
            | application name         | contratacion credito auto                                             | string       |
            | application type         | contratacion                                                          | string       |
            | application step         | 1 cotizacion                                                          | string       |
            | fulfillment model        | offline                                                               | string       |
            | application typology     |                                                                       | string       |
            | internal campaign        |                                                                       | empty array  |
            | qualified visits         | true                                                                  | string       |
            | product primary category | prestamos                                                             | string       |
            | product name             | credito auto                                                          | string       |

    @ANA_PCC002
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Change Data in summary screen - <section> section
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        When the user accesses to non pre approved car certificate "second section" screen
        Then the device contains the following variables
            | item                       | value                                                            | type         |
            | analytics                  | analytics/DIY E2E Sales_base                                     | json schema  |
            | version DL                 | 20250414_5.0                                                     | string       |
            | page name                  | app:privada:personas:prestamos:contratacion credito auto:2 datos | string       |
            | level 1                    | prestamos                                                        | string       |
            | level 2                    | contratacion credito auto                                        | string       |
            | level 3                    | 2 datos                                                          | string       |
            | language                   | ES                                                               | string       |
            | page area                  | privada                                                          | string       |
            | page intent                | transaccion                                                      | string       |
            | channel                    | online                                                           | string       |
            | page instance ID           | de                                                               | string       |
            | page info version          | appVersion                                                       | regexp named |
            | page segment               | personas                                                         | string       |
            | sysEnv                     | app                                                              | string       |
            | business unit              | BBVA Mexico                                                      | string       |
            | site app name              | App BBVA Mexico                                                  | string       |
            | project name               | DIY E2E Sales                                                    | string       |
            | device mobile              | si                                                               | string       |
            | user userState             | logado                                                           | string       |
            | user segment global        | 003001                                                           | string       |
            | profile ID                 | profileID                                                        | regexp named |
            | user gender                | gender                                                           | regexp named |
            | user age                   | age                                                              | regexp named |
            | global application         | car loan                                                         | string       |
            | application name           | contratacion credito auto                                        | string       |
            | application type           | contratacion                                                     | string       |
            | application step           | 2 datos                                                          | string       |
            | fulfillment model          | offline                                                          | string       |
            | application typology       | nuevo                                                            | string       |
            | internal campaign          |                                                                  | empty array  |
            | product primary category   | prestamos                                                        | string       |
            | product name               | credito auto                                                     | string       |
            | product amount             | 100000                                                           | string       |
            | product currency           | MX                                                               | string       |
            | product payment amount     | 1906.33                                                          | string       |
            | product payment type       | mensual                                                          | string       |
            | product number of payments | 60                                                               | string       |
            | product interest rate      | 12                                                               | string       |
            | product service charge     | 82160                                                            | number       |
            | product primary category 1 | seguros                                                          | string       |
            | product name 1             | seguro vida                                                      | string       |
            | product amount 1           | 2160                                                             | number       |

    @ANA_PCC003
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: App Step 3 Terms and conditions
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        When the user accesses to non pre approved car certificate "terms and conditions section" screen
        Then the device contains the following variables
            | item                       | value                                                                             | type         |
            | analytics                  | analytics/DIY E2E Sales_base                                                      | json schema  |
            | version DL                 | 20250414_5.0                                                                      | string       |
            | page name                  | app:privada:personas:prestamos:contratacion credito auto:3 terminos y condiciones | string       |
            | level 1                    | prestamos                                                                         | string       |
            | level 2                    | contratacion credito auto                                                         | string       |
            | level 3                    | 3 terminos y condiciones                                                          | string       |
            | language                   | ES                                                                                | string       |
            | page area                  | privada                                                                           | string       |
            | page intent                | transaccion                                                                       | string       |
            | channel                    | online                                                                            | string       |
            | page instance ID           | de                                                                                | string       |
            | page info version          | appVersion                                                                        | regexp named |
            | page segment               | personas                                                                          | string       |
            | sysEnv                     | app                                                                               | string       |
            | business unit              | BBVA Mexico                                                                       | string       |
            | site app name              | App BBVA Mexico                                                                   | string       |
            | project name               | DIY E2E Sales                                                                     | string       |
            | device mobile              | si                                                                                | string       |
            | user userState             | logado                                                                            | string       |
            | user segment global        | 003001                                                                            | string       |
            | profile ID                 | profileID                                                                         | regexp named |
            | user gender                | gender                                                                            | regexp named |
            | user age                   | age                                                                               | regexp named |
            | user segment profile       | no preaprobado                                                                    | string       |
            | global application         | car loan                                                                          | string       |
            | application name           | contratacion credito auto                                                         | string       |
            | application type           | contratacion                                                                      | string       |
            | application step           | 3 terminos y condiciones                                                          | string       |
            | fulfillment model          | offline                                                                           | string       |
            | application typology       | nuevo                                                                             | string       |
            | application process        | no recibi asesoria                                                                | string       |
            | application earnings       | 1906.33                                                                           | string       |
            | product primary category   | prestamos                                                                         | string       |
            | product name               | credito auto                                                                      | string       |
            | product amount             | 100000                                                                            | string       |
            | product currency           | MX                                                                                | string       |
            | product payment amount     | 1906.33                                                                           | string       |
            | product payment type       | mensual                                                                           | string       |
            | product number of payments | 60                                                                                | string       |
            | product interest rate      | 12                                                                                | string       |
            | product service charge     | 82160                                                                             | number       |
            | product primary category 1 | seguros                                                                           | string       |
            | product name 1             | seguro vida                                                                       | string       |
            | product amount 1           | 2160                                                                              | number       |

    @ANA_PCC004
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Change Data in summary screen
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        When the user accesses to non pre approved car certificate "summary section" screen
        Then the device contains the following variables
            | item                       | value                                                                   | type         |
            | analytics                  | analytics/DIY E2E Sales_base                                            | json schema  |
            | version DL                 | 20250414_5.0                                                            | string       |
            | page name                  | app:privada:personas:prestamos:contratacion credito auto:4 confirmacion | string       |
            | level 1                    | prestamos                                                               | string       |
            | level 2                    | contratacion credito auto                                               | string       |
            | level 3                    | 4 confirmacion                                                          | string       |
            | language                   | ES                                                                      | string       |
            | page area                  | privada                                                                 | string       |
            | page intent                | transaccion                                                             | string       |
            | channel                    | online                                                                  | string       |
            | page instance ID           | de                                                                      | string       |
            | page info version          | appVersion                                                              | regexp named |
            | page segment               | personas                                                                | string       |
            | sysEnv                     | app                                                                     | string       |
            | business unit              | BBVA Mexico                                                             | string       |
            | site app name              | App BBVA Mexico                                                         | string       |
            | project name               | DIY E2E Sales                                                           | string       |
            | device mobile              | si                                                                      | string       |
            | user userState             | logado                                                                  | string       |
            | user segment global        | 003001                                                                  | string       |
            | profile ID                 | profileID                                                               | regexp named |
            | user gender                | gender                                                                  | regexp named |
            | user age                   | age                                                                     | regexp named |
            | global application         | car loan                                                                | string       |
            | application name           | contratacion credito auto                                               | string       |
            | application type           | contratacion                                                            | string       |
            | application step           | 4 confirmacion                                                          | string       |
            | fulfillment model          | offline                                                                 | string       |
            | application typology       | nuevo                                                                   | string       |
            | internal campaign          |                                                                         | empty array  |
            | product primary category   | prestamos                                                               | string       |
            | product name               | credito auto                                                            | string       |
            | product amount             | 100000                                                                  | string       |
            | product currency           | MX                                                                      | string       |
            | product payment amount     | 1906.33                                                                 | string       |
            | product payment type       | mensual                                                                 | string       |
            | product number of payments | 60                                                                      | string       |
            | product interest rate      | 12                                                                      | string       |
            | product service charge     | 82160                                                                   | number       |
            | product primary category 1 | seguros                                                                 | string       |
            | product name 1             | seguro vida                                                             | string       |
            | product amount 1           | 2160                                                                    | number       |

    @ANA_PCC005
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: App Step 5 OTP
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        When the user accesses to non pre approved car certificate "otp screen" screen
        Then the device contains the following variables
            | item                       | value                                                          | type         |
            | analytics                  | analytics/DIY E2E Sales_base                                   | json schema  |
            | version DL                 | 20250414_5.0                                                   | string       |
            | page name                  | app:privada:personas:prestamos:contratacion credito auto:5 otp | string       |
            | level 1                    | prestamos                                                      | string       |
            | level 2                    | contratacion credito auto                                      | string       |
            | level 3                    | 5 otp                                                          | string       |
            | language                   | ES                                                             | string       |
            | page area                  | privada                                                        | string       |
            | page intent                | transaccion                                                    | string       |
            | channel                    | online                                                         | string       |
            | page instance ID           | de                                                             | string       |
            | page info version          | appVersion                                                     | regexp named |
            | page segment               | personas                                                       | string       |
            | sysEnv                     | app                                                            | string       |
            | business unit              | BBVA Mexico                                                    | string       |
            | site app name              | App BBVA Mexico                                                | string       |
            | project name               | DIY E2E Sales                                                  | string       |
            | device mobile              | si                                                             | string       |
            | user userState             | logado                                                         | string       |
            | user segment global        | 003001                                                         | string       |
            | profile ID                 | profileID                                                      | regexp named |
            | user gender                | gender                                                         | regexp named |
            | user age                   | age                                                            | regexp named |
            | user segment profile       | no preaprobado                                                 | string       |
            | global application         | car loan                                                       | string       |
            | application name           | contratacion credito auto                                      | string       |
            | application type           | contratacion                                                   | string       |
            | application step           | 5 otp                                                          | string       |
            | fulfillment model          | offline                                                        | string       |
            | application typology       | nuevo                                                          | string       |
            | application process        | no recibi asesoria                                             | string       |
            | application earnings       | 1906.33                                                        | string       |
            | product primary category   | prestamos                                                      | string       |
            | product name               | credito auto                                                   | string       |
            | product amount             | 100000                                                         | string       |
            | product currency           | MX                                                             | string       |
            | product payment amount     | 1906.33                                                        | string       |
            | product payment type       | mensual                                                        | string       |
            | product number of payments | 60                                                             | string       |
            | product interest rate      | 12                                                             | string       |
            | product service charge     | 82160                                                          | number       |
            | product primary category 1 | seguros                                                        | string       |
            | product name 1             | seguro vida                                                    | string       |
            | product amount 1           | 2160                                                           | number       |
            | custom fields              | firma:token                                                    | string       |

    @ANA_EVENT_PCC006
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario Outline: Open info modal - <infoModal>
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        When the user accesses to non pre approved car certificate "main" screen
        And the analytics interceptor service is initiated
        And the user accesses to car certificate "<infoModal>" info modal
        Then the user sees a modal open
        And the analytics events contains the following variables
            | item                 | value                                                                 | type         | event            |
            | analytics            | analytics/glomo_base                                                  | json schema  | Interaction Link |
            | version DL           | 20250414_5.0                                                          | string       | Interaction Link |
            | page name            | app:privada:personas:prestamos:contratacion credito auto:1 cotizacion | string       | Interaction Link |
            | level 1              | prestamos                                                             | string       | Interaction Link |
            | level 2              | contratacion credito auto                                             | string       | Interaction Link |
            | level 3              | 1 cotizacion                                                          | string       | Interaction Link |
            | language             | ES                                                                    | string       | Interaction Link |
            | page area            | privada                                                               | string       | Interaction Link |
            | page intent          | transaccion                                                           | string       | Interaction Link |
            | channel              | online                                                                | string       | Interaction Link |
            | page instance ID     | de                                                                    | string       | Interaction Link |
            | page info version    | appVersion                                                            | regexp named | Interaction Link |
            | page segment         | personas                                                              | string       | Interaction Link |
            | sysEnv               | app                                                                   | string       | Interaction Link |
            | business unit        | BBVA Mexico                                                           | string       | Interaction Link |
            | site app name        | App BBVA Mexico                                                       | string       | Interaction Link |
            | project name         | DIY E2E Sales                                                         | string       | Interaction Link |
            | interaction level    | <interaction_level>                                                   | string       | Interaction Link |
            | device mobile        | si                                                                    | string       | Interaction Link |
            | user userState       | logado                                                                | string       | Interaction Link |
            | user segment global  | 003001                                                                | string       | Interaction Link |
            | profile ID           | profileID                                                             | regexp named | Interaction Link |
            | user gender          | gender                                                                | regexp named | Interaction Link |
            | user age             | age                                                                   | regexp named | Interaction Link |
            | application typology |                                                                       | string       | Interaction Link |

        Examples:
            | infoModal              | interaction_level     |
            | commission for opening | comision por apertura |
            | down payment           | enganche              |

    @ANA_EVENT_PCC007
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario Outline: Open info modal - <infoModal>  App Started
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        When the user accesses to non pre approved car certificate "main" screen
        And the analytics interceptor service is initiated
        And the user accesses to car certificate "<infoModal>" info modal
        Then the user sees a modal open
        And the analytics events contains the following variables
            | item                     | value                                                                 | type         | event       |
            | analytics                | analytics/DIY E2E Sales_base                                          | json schema  | App Started |
            | version DL               | 20250414_5.0                                                          | string       | App Started |
            | page name                | app:privada:personas:prestamos:contratacion credito auto:1 cotizacion | string       | App Started |
            | level 1                  | prestamos                                                             | string       | App Started |
            | level 2                  | contratacion credito auto                                             | string       | App Started |
            | level 3                  | 1 cotizacion                                                          | string       | App Started |
            | language                 | ES                                                                    | string       | App Started |
            | page area                | privada                                                               | string       | App Started |
            | page intent              | transaccion                                                           | string       | App Started |
            | channel                  | online                                                                | string       | App Started |
            | page instance ID         | de                                                                    | string       | App Started |
            | page info version        | appVersion                                                            | regexp named | App Started |
            | page segment             | personas                                                              | string       | App Started |
            | sysEnv                   | app                                                                   | string       | App Started |
            | business unit            | BBVA Mexico                                                           | string       | App Started |
            | site app name            | App BBVA Mexico                                                       | string       | App Started |
            | project name             | DIY E2E Sales                                                         | string       | App Started |
            | device mobile            | si                                                                    | string       | App Started |
            | user userState           | logado                                                                | string       | App Started |
            | user segment global      | 003001                                                                | string       | App Started |
            | profile ID               | profileID                                                             | regexp named | App Started |
            | user gender              | gender                                                                | regexp named | App Started |
            | user age                 | age                                                                   | regexp named | App Started |
            | global application       | car loan                                                              | string       | App Started |
            | application name         | contratacion credito auto                                             | string       | App Started |
            | application type         | contratacion                                                          | string       | App Started |
            | fulfillment model        | offline                                                               | string       | App Started |
            | application typology     |                                                                       | string       | App Started |
            | product primary category | prestamos                                                             | string       | App Started |
            | product name             | credito auto                                                          | string       | App Started |
            | application step         | <step>                                                                | string       | App Started |

        Examples:
            | infoModal              | step                   |
            | life insurance         | info seguro vida       |
            | commission for opening | info comision apertura |
            | interest rate          | info taza interes      |

    @ANA_EVENT_PCC008
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Non Pre Approved Car Certificate - Authorized Amount Error
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        When the user accesses to non pre approved car certificate "main" screen
        And the analytics interceptor service is initiated
        And the user accesses to non pre approved car certificate "confirmation screen" screen
        Then the user sees a modal open
        And the analytics events contains the following variables
            | item                | value                                                                                | type         | event     |
            | analytics           | analytics/DIY E2E Sales_base                                                         | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                         | string       | Page View |
            | page name           | app:privada:personas:prestamos:contratacion credito auto:error importe no autorizado | string       | Page View |
            | level 1             | prestamos                                                                            | string       | Page View |
            | level 2             | contratacion credito auto                                                            | string       | Page View |
            | level 3             | error importe no autorizado                                                          | string       | Page View |
            | language            | ES                                                                                   | string       | Page View |
            | page area           | privada                                                                              | string       | Page View |
            | page intent         | transaccion                                                                          | string       | Page View |
            | channel             | online                                                                               | string       | Page View |
            | page instance ID    | de                                                                                   | string       | Page View |
            | page info version   | appVersion                                                                           | regexp named | Page View |
            | page segment        | personas                                                                             | string       | Page View |
            | sysEnv              | app                                                                                  | string       | Page View |
            | business unit       | BBVA Mexico                                                                          | string       | Page View |
            | site app name       | App BBVA Mexico                                                                      | string       | Page View |
            | project name        | DIY E2E Sales                                                                        | string       | Page View |
            | error page          | error importe no autorizado                                                          | string       | Page View |
            | device mobile       | si                                                                                   | string       | Page View |
            | user userState      | logado                                                                               | string       | Page View |
            | user segment global | 003001                                                                               | string       | Page View |
            | profile ID          | profileID                                                                            | regexp named | Page View |
            | user gender         | gender                                                                               | regexp named | Page View |
            | user age            | age                                                                                  | regexp named | Page View |

    @ANA_EVENT_PCC009
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Non Pre Approved Car Certificate - Service Error
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        When the user accesses to non pre approved car certificate "main" screen
        And the analytics interceptor service is initiated
        And the user accesses to non pre approved car certificate "confirmation screen" screen
        Then the user sees a modal open
        And the analytics events contains the following variables
            | item                | value                                                                   | type         | event     |
            | analytics           | analytics/DIY E2E Sales_base                                            | json schema  | Page View |
            | version DL          | 20250414_5.0                                                            | string       | Page View |
            | page name           | app:privada:personas:prestamos:contratacion credito auto:error servicio | string       | Page View |
            | level 1             | prestamos                                                               | string       | Page View |
            | level 2             | contratacion credito auto                                               | string       | Page View |
            | level 3             | error servicio                                                          | string       | Page View |
            | language            | ES                                                                      | string       | Page View |
            | page area           | privada                                                                 | string       | Page View |
            | page intent         | transaccion                                                             | string       | Page View |
            | channel             | online                                                                  | string       | Page View |
            | page instance ID    | de                                                                      | string       | Page View |
            | page info version   | appVersion                                                              | regexp named | Page View |
            | page segment        | personas                                                                | string       | Page View |
            | sysEnv              | app                                                                     | string       | Page View |
            | business unit       | BBVA Mexico                                                             | string       | Page View |
            | site app name       | App BBVA Mexico                                                         | string       | Page View |
            | project name        | DIY E2E Sales                                                           | string       | Page View |
            | error page          | error servicio                                                          | string       | Page View |
            | device mobile       | si                                                                      | string       | Page View |
            | user userState      | logado                                                                  | string       | Page View |
            | user segment global | 003001                                                                  | string       | Page View |
            | profile ID          | profileID                                                               | regexp named | Page View |
            | user gender         | gender                                                                  | regexp named | Page View |
            | user age            | age                                                                     | regexp named | Page View |

    @ANA_EVENT_PCC010
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web @tmpExclude @JIRA.GLOMOMX-221772
    Scenario: Non Pre Approved Car Certificate - App Complete Younger
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        And the analytics interceptor service is initiated
        When the user accesses to non pre approved car certificate "confirmation screen" screen
        Then the analytics events contains the following variables
            | item                         | value                                                                   | type         | event         |
            | analytics                    | analytics/DIY E2E Sales_base                                            | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                            | string       | App Completed |
            | page name                    | app:privada:personas:prestamos:contratacion credito auto:pagina exitosa | string       | App Completed |
            | level 1                      | prestamos                                                               | string       | App Completed |
            | level 2                      | contratacion credito auto                                               | string       | App Completed |
            | level 3                      | pagina exitosa                                                          | string       | App Completed |
            | language                     | ES                                                                      | string       | App Completed |
            | page area                    | privada                                                                 | string       | App Completed |
            | page intent                  | transaccion                                                             | string       | App Completed |
            | channel                      | online                                                                  | string       | App Completed |
            | page instance ID             | de                                                                      | string       | App Completed |
            | page info version            | appVersion                                                              | regexp named | App Completed |
            | page segment                 | personas                                                                | string       | App Completed |
            | sysEnv                       | app                                                                     | string       | App Completed |
            | business unit                | BBVA Mexico                                                             | string       | App Completed |
            | site app name                | App BBVA Mexico                                                         | string       | App Completed |
            | project name                 | DIY E2E Sales                                                           | string       | App Completed |
            | device mobile                | si                                                                      | string       | App Completed |
            | user userState               | logado                                                                  | string       | App Completed |
            | user segment global          | 003001                                                                  | string       | App Completed |
            | profile ID                   | profileID                                                               | regexp named | App Completed |
            | user gender                  | gender                                                                  | regexp named | App Completed |
            | user age                     | age                                                                     | regexp named | App Completed |
            | user segment profile         | menor de edad                                                           | string       | App Completed |
            | global application           | car loan                                                                | string       | App Completed |
            | application name             | contratacion credito auto                                               | string       | App Completed |
            | application type             | contratacion                                                            | string       | App Completed |
            | application step             | pagina exitosa                                                          | string       | App Completed |
            | fulfillment model            | offline                                                                 | string       | App Completed |
            | application typology         | nuevo                                                                   | string       | App Completed |
            | application process          | no recibi asesoria                                                      | string       | App Completed |
            | custom fields                | firma:token                                                             | string       | App Completed |
            | application state            | rechazado                                                               | string       | App Completed |
            | application operation number | 137928                                                                  | string       | App Completed |
            | product primary category     | prestamos                                                               | string       | App Completed |
            | product name                 | credito auto                                                            | string       | App Completed |
            | product amount               | 100000                                                                  | string       | App Completed |
            | product currency             | MX                                                                      | string       | App Completed |
            | product payment amount       | 1906.33                                                                 | string       | App Completed |
            | product payment type         | mensual                                                                 | string       | App Completed |
            | product number of payments   | 60                                                                      | string       | App Completed |
            | product interest rate        | 12                                                                      | string       | App Completed |
            | product service charge       | 82160                                                                   | number       | App Completed |
            | product state                | rechazado                                                               | string       | App Completed |
            | product primary category 1   | seguros                                                                 | string       | App Completed |
            | product name 1               | seguro vida                                                             | string       | App Completed |
            | product amount 1             | 2160                                                                    | number       | App Completed |
            | product state 1              | rechazado                                                               | string       | App Completed |

    @ANA_EVENT_PCC011
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web @tmpExclude @JIRA.GLOMOMX-221772
    Scenario: Non Pre Approved Car Certificate - App Complete Unsuitable Credit History
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        And the analytics interceptor service is initiated
        When the user accesses to non pre approved car certificate "confirmation screen" screen
        Then the analytics events contains the following variables
            | item                         | value                                                                   | type         | event         |
            | analytics                    | analytics/DIY E2E Sales_base                                            | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                            | string       | App Completed |
            | page name                    | app:privada:personas:prestamos:contratacion credito auto:pagina exitosa | string       | App Completed |
            | level 1                      | prestamos                                                               | string       | App Completed |
            | level 2                      | contratacion credito auto                                               | string       | App Completed |
            | level 3                      | pagina exitosa                                                          | string       | App Completed |
            | language                     | ES                                                                      | string       | App Completed |
            | page area                    | privada                                                                 | string       | App Completed |
            | page intent                  | transaccion                                                             | string       | App Completed |
            | channel                      | online                                                                  | string       | App Completed |
            | page instance ID             | de                                                                      | string       | App Completed |
            | page info version            | appVersion                                                              | regexp named | App Completed |
            | page segment                 | personas                                                                | string       | App Completed |
            | sysEnv                       | app                                                                     | string       | App Completed |
            | business unit                | BBVA Mexico                                                             | string       | App Completed |
            | site app name                | App BBVA Mexico                                                         | string       | App Completed |
            | project name                 | DIY E2E Sales                                                           | string       | App Completed |
            | device mobile                | si                                                                      | string       | App Completed |
            | user userState               | logado                                                                  | string       | App Completed |
            | user segment global          | 003001                                                                  | string       | App Completed |
            | profile ID                   | profileID                                                               | regexp named | App Completed |
            | user gender                  | gender                                                                  | regexp named | App Completed |
            | user age                     | age                                                                     | regexp named | App Completed |
            | user segment profile         | historial crediticio no apto                                            | string       | App Completed |
            | global application           | car loan                                                                | string       | App Completed |
            | application name             | contratacion credito auto                                               | string       | App Completed |
            | application type             | contratacion                                                            | string       | App Completed |
            | application step             | pagina exitosa                                                          | string       | App Completed |
            | fulfillment model            | offline                                                                 | string       | App Completed |
            | application typology         | nuevo                                                                   | string       | App Completed |
            | application process          | no recibi asesoria                                                      | string       | App Completed |
            | custom fields                | firma:token                                                             | string       | App Completed |
            | application state            | rechazado                                                               | string       | App Completed |
            | application operation number | 137928                                                                  | string       | App Completed |
            | product primary category     | prestamos                                                               | string       | App Completed |
            | product name                 | credito auto                                                            | string       | App Completed |
            | product amount               | 100000                                                                  | string       | App Completed |
            | product currency             | MX                                                                      | string       | App Completed |
            | product payment amount       | 1906.33                                                                 | string       | App Completed |
            | product payment type         | mensual                                                                 | string       | App Completed |
            | product number of payments   | 60                                                                      | string       | App Completed |
            | product interest rate        | 12                                                                      | string       | App Completed |
            | product service charge       | 82160                                                                   | number       | App Completed |
            | product state                | rechazado                                                               | string       | App Completed |
            | product primary category 1   | seguros                                                                 | string       | App Completed |
            | product name 1               | seguro vida                                                             | string       | App Completed |
            | product amount 1             | 2160                                                                    | number       | App Completed |
            | product state 1              | rechazado                                                               | string       | App Completed |

    @ANA_EVENT_PCC012
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web @tmpExclude @JIRA.GLOMOMX-221772
    Scenario: Non Pre Approved Car Certificate - App Complete quote not completed
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        And the analytics interceptor service is initiated
        When the user accesses to non pre approved car certificate "confirmation screen" screen
        Then the analytics events contains the following variables
            | item                         | value                                                                   | type         | event         |
            | analytics                    | analytics/DIY E2E Sales_base                                            | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                            | string       | App Completed |
            | page name                    | app:privada:personas:prestamos:contratacion credito auto:pagina exitosa | string       | App Completed |
            | level 1                      | prestamos                                                               | string       | App Completed |
            | level 2                      | contratacion credito auto                                               | string       | App Completed |
            | level 3                      | pagina exitosa                                                          | string       | App Completed |
            | language                     | ES                                                                      | string       | App Completed |
            | page area                    | privada                                                                 | string       | App Completed |
            | page intent                  | transaccion                                                             | string       | App Completed |
            | channel                      | online                                                                  | string       | App Completed |
            | page instance ID             | de                                                                      | string       | App Completed |
            | page info version            | appVersion                                                              | regexp named | App Completed |
            | page segment                 | personas                                                                | string       | App Completed |
            | sysEnv                       | app                                                                     | string       | App Completed |
            | business unit                | BBVA Mexico                                                             | string       | App Completed |
            | site app name                | App BBVA Mexico                                                         | string       | App Completed |
            | project name                 | DIY E2E Sales                                                           | string       | App Completed |
            | device mobile                | si                                                                      | string       | App Completed |
            | user userState               | logado                                                                  | string       | App Completed |
            | user segment global          | 003001                                                                  | string       | App Completed |
            | profile ID                   | profileID                                                               | regexp named | App Completed |
            | user gender                  | gender                                                                  | regexp named | App Completed |
            | user age                     | age                                                                     | regexp named | App Completed |
            | user segment profile         | cotizacion no completada                                                | string       | App Completed |
            | global application           | car loan                                                                | string       | App Completed |
            | application name             | contratacion credito auto                                               | string       | App Completed |
            | application type             | contratacion                                                            | string       | App Completed |
            | application step             | pagina exitosa                                                          | string       | App Completed |
            | fulfillment model            | offline                                                                 | string       | App Completed |
            | application typology         | nuevo                                                                   | string       | App Completed |
            | application process          | no recibi asesoria                                                      | string       | App Completed |
            | custom fields                | firma:token                                                             | string       | App Completed |
            | application state            | rechazado                                                               | string       | App Completed |
            | application operation number | 137928                                                                  | string       | App Completed |
            | product primary category     | prestamos                                                               | string       | App Completed |
            | product name                 | credito auto                                                            | string       | App Completed |
            | product amount               | 100000                                                                  | string       | App Completed |
            | product currency             | MX                                                                      | string       | App Completed |
            | product payment amount       | 1906.33                                                                 | string       | App Completed |
            | product payment type         | mensual                                                                 | string       | App Completed |
            | product number of payments   | 60                                                                      | string       | App Completed |
            | product interest rate        | 12                                                                      | string       | App Completed |
            | product service charge       | 82160                                                                   | number       | App Completed |
            | product state                | rechazado                                                               | string       | App Completed |
            | product primary category 1   | seguros                                                                 | string       | App Completed |
            | product name 1               | seguro vida                                                             | string       | App Completed |
            | product amount 1             | 2160                                                                    | number       | App Completed |
            | product state 1              | rechazado                                                               | string       | App Completed |

    @ANA_EVENT_PCC013
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario Outline: Non Pre Approved Car Certificate - User clicks on <item> App Started
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        And the analytics interceptor service is initiated
        When the user starts interaction with "<element>"
        Then the analytics events contains the following variables
            | item                     | value                                                                 | type         | event       |
            | analytics                | analytics/DIY E2E Sales_base                                          | json schema  | App Started |
            | version DL               | 20250414_5.0                                                          | string       | App Started |
            | page name                | app:privada:personas:prestamos:contratacion credito auto:1 cotizacion | string       | App Started |
            | level 1                  | prestamos                                                             | string       | App Started |
            | level 2                  | contratacion credito auto                                             | string       | App Started |
            | level 3                  | 1 cotizacion                                                          | string       | App Started |
            | language                 | ES                                                                    | string       | App Started |
            | page area                | privada                                                               | string       | App Started |
            | page intent              | transaccion                                                           | string       | App Started |
            | channel                  | online                                                                | string       | App Started |
            | page instance ID         | de                                                                    | string       | App Started |
            | page info version        | appVersion                                                            | regexp named | App Started |
            | page segment             | personas                                                              | string       | App Started |
            | sysEnv                   | app                                                                   | string       | App Started |
            | business unit            | BBVA Mexico                                                           | string       | App Started |
            | site app name            | App BBVA Mexico                                                       | string       | App Started |
            | project name             | DIY E2E Sales                                                         | string       | App Started |
            | device mobile            | si                                                                    | string       | App Started |
            | user userState           | logado                                                                | string       | App Started |
            | user segment global      | 003001                                                                | string       | App Started |
            | profile ID               | profileID                                                             | regexp named | App Started |
            | user gender              | gender                                                                | regexp named | App Started |
            | user age                 | age                                                                   | regexp named | App Started |
            | global application       | car loan                                                              | string       | App Started |
            | application name         | contratacion credito auto                                             | string       | App Started |
            | application type         | contratacion                                                          | string       | App Started |
            | fulfillment model        | offline                                                               | string       | App Started |
            | application typology     |                                                                       | string       | App Started |
            | product primary category | prestamos                                                             | string       | App Started |
            | product name             | credito auto                                                          | string       | App Started |
            | application step         | <step>                                                                | string       | App Started |

        Examples:
            | item                             | step               | element                |
            | seminuevo check                  | seminuevo          | radioButtonPreownedCar |
            | enganche                         | enganche           | inputDownPayment       |
            | boton continuar                  | continuar          | continueButton         |
            | Ejemplo de tabla de amortizacion | tabla amortizacion | amortizationTable      |
            | Plazo                            | plazo              | inputRange             |
            | nuevo check                      | nuevo              | newCheck               |
            | cantidad                         | cantidad           | inputCarPrice          |

    @ANA_EVENT_PCC014
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Non Pre Approved Car Certificate - App Step Success
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses to non pre approved car certificate "main" screen
        And the analytics interceptor service is initiated
        When the user accesses to non pre approved car certificate "confirmation screen" screen
        Then the analytics events contains the following variables
            | item                         | value                                                                   | type         | event         |
            | analytics                    | analytics/DIY E2E Sales_base                                            | json schema  | App Completed |
            | version DL                   | 20250414_5.0                                                            | string       | App Completed |
            | page name                    | app:privada:personas:prestamos:contratacion credito auto:pagina exitosa | string       | App Completed |
            | level 1                      | prestamos                                                               | string       | App Completed |
            | level 2                      | contratacion credito auto                                               | string       | App Completed |
            | level 3                      | pagina exitosa                                                          | string       | App Completed |
            | language                     | ES                                                                      | string       | App Completed |
            | page area                    | privada                                                                 | string       | App Completed |
            | page intent                  | transaccion                                                             | string       | App Completed |
            | channel                      | online                                                                  | string       | App Completed |
            | page instance ID             | de                                                                      | string       | App Completed |
            | page info version            | appVersion                                                              | regexp named | App Completed |
            | page segment                 | personas                                                                | string       | App Completed |
            | sysEnv                       | app                                                                     | string       | App Completed |
            | business unit                | BBVA Mexico                                                             | string       | App Completed |
            | site app name                | App BBVA Mexico                                                         | string       | App Completed |
            | project name                 | DIY E2E Sales                                                           | string       | App Completed |
            | device mobile                | si                                                                      | string       | App Completed |
            | user userState               | logado                                                                  | string       | App Completed |
            | user segment global          | 003001                                                                  | string       | App Completed |
            | profile ID                   | profileID                                                               | regexp named | App Completed |
            | user gender                  | gender                                                                  | regexp named | App Completed |
            | user age                     | age                                                                     | regexp named | App Completed |
            | global application           | car loan                                                                | string       | App Completed |
            | application name             | contratacion credito auto                                               | string       | App Completed |
            | application type             | contratacion                                                            | string       | App Completed |
            | application step             | pagina exitosa                                                          | string       | App Completed |
            | fulfillment model            | offline                                                                 | string       | App Completed |
            | application typology         | nuevo                                                                   | string       | App Completed |
            | application process          | no recibi asesoria                                                      | string       | App Completed |
            | application earnings         | 1906.33                                                                 | string       | App Completed |
            | custom fields                | firma:token                                                             | string       | App Completed |
            | application state            | aprobado                                                                | string       | App Completed |
            | application operation number | 137928                                                                  | string       | App Completed |
            | product primary category     | prestamos                                                               | string       | App Completed |
            | product name                 | credito auto                                                            | string       | App Completed |
            | product amount               | 100000                                                                  | string       | App Completed |
            | product currency             | MX                                                                      | string       | App Completed |
            | product payment amount       | 1906.33                                                                 | string       | App Completed |
            | product payment type         | mensual                                                                 | string       | App Completed |
            | product number of payments   | 60                                                                      | string       | App Completed |
            | product interest rate        | 12                                                                      | string       | App Completed |
            | product service charge       | 82160                                                                   | number       | App Completed |
            | product state                | aprobado                                                                | string       | App Completed |
            | product primary category 1   | seguros                                                                 | string       | App Completed |
            | product name 1               | seguro vida                                                             | string       | App Completed |
            | product amount 1             | 2160                                                                    | number       | App Completed |
            | product state 1              | aprobado                                                                | string       | App Completed |

    @ANA_EVENT_PCC015
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Non Pre Approved Car Certificate - App Onclick Start Car Loan
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        And the user accesses contract product section
        And the analytics interceptor service is initiated
        When the user accesses to the car loan npa offer from "opportunities"
        Then the analytics events contains the following variables
            | item                                         | value                                                                                      | type         | event              |
            | analytics                                    | analytics/DIY E2E Sales_base                                                                       | json schema  | App On Click Start |
            | version DL                                   | 20250414_5.0                                                                               | string       | App On Click Start |
            | page name                                    | app:privada:personas:oportunidades                                                         | string       | App On Click Start |
            | level 1                                      | oportunidades                                                                              | string       | App On Click Start |
            | language                                     | ES                                                                                         | string       | App On Click Start |
            | page area                                    | privada                                                                                    | string       | App On Click Start |
            | page intent                                  | informacion                                                                                | string       | App On Click Start |
            | channel                                      | online                                                                                     | string       | App On Click Start |
            | page instance ID                             | de                                                                                         | string       | App On Click Start |
            | page info version                            | appVersion                                                                                 | regexp named | App On Click Start |
            | page segment                                 | personas                                                                                   | string       | App On Click Start |
            | sysEnv                                       | app                                                                                        | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                                                | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                            | string       | App On Click Start |
            | project name                                 | DIY E2E Sales                                                                              | string       | App On Click Start |
            | device mobile                                | si                                                                                         | string       | App On Click Start |
            | user userState                               | logado                                                                                     | string       | App On Click Start |
            | user segment global                          | 003001                                                                                     | string       | App On Click Start |
            | profile ID                                   | profileID                                                                                  | regexp named | App On Click Start |
            | user gender                                  | gender                                                                                     | regexp named | App On Click Start |
            | user age                                     | age                                                                                        | regexp named | App On Click Start |
            | global application                           | car loan                                                                                   | string       | App On Click Start |
            | application name                             | contratacion credito auto                                                                  | string       | App On Click Start |
            | application type                             | contratacion                                                                               | string       | App On Click Start |
            | application step                             | oportunidades                                                                              | string       | App On Click Start |
            | fulfillment model                            | offline                                                                                    | string       | App On Click Start |
            | product primary category                     | prestamos                                                                                  | string       | App On Click Start |
            | internal campaign attributes location        | contract product section--centro-3-6                                                      | string       | App On Click Start |
            | internal campaign attributes campaign format | list                                                                                       | string       | App On Click Start |
            | internal campaign attributes name            | -solicitud de credito automotriz                                                           | string       | App On Click Start |
            | internal campaign attributes product         | prestamos                                                                                  | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                                                | string       | App On Click Start |
            | internal campaign site action name           | contract product section--centro-3-6:list:VD-:-solicitud de credito automotriz:prestamos:: | string       | App On Click Start |
            | optimization attributes                      |                                                                                            | empty array  | App On Click Start |

    @ANA_EVENT_PCC016
    @analytics
    @android @ios @web-done
    @MX @backend(test) @vbank
    @web
    Scenario: Open info modal - cat App Started
        Given a user with the following criteria
            | criteria                         |
            | non pre approved car certificate |
        And the user starts the application at date:
            | hour  | 10   |
        When the user accesses to non pre approved car certificate "main" screen
        And the analytics interceptor service is initiated
        And the user accesses to car certificate "cat" info modal
        Then the user sees a modal open
        And the analytics events contains the following variables
            | item                     | value                                                                 | type         | event       |
            | analytics                | analytics/DIY E2E Sales_base                                          | json schema  | App Started |
            | version DL               | 20250414_5.0                                                          | string       | App Started |
            | page name                | app:privada:personas:prestamos:contratacion credito auto:1 cotizacion | string       | App Started |
            | level 1                  | prestamos                                                             | string       | App Started |
            | level 2                  | contratacion credito auto                                             | string       | App Started |
            | level 3                  | 1 cotizacion                                                          | string       | App Started |
            | language                 | ES                                                                    | string       | App Started |
            | page area                | privada                                                               | string       | App Started |
            | page intent              | transaccion                                                           | string       | App Started |
            | channel                  | online                                                                | string       | App Started |
            | page instance ID         | de                                                                    | string       | App Started |
            | page info version        | appVersion                                                            | regexp named | App Started |
            | page segment             | personas                                                              | string       | App Started |
            | sysEnv                   | app                                                                   | string       | App Started |
            | business unit            | BBVA Mexico                                                           | string       | App Started |
            | site app name            | App BBVA Mexico                                                       | string       | App Started |
            | project name             | DIY E2E Sales                                                         | string       | App Started |
            | device mobile            | si                                                                    | string       | App Started |
            | user userState           | logado                                                                | string       | App Started |
            | user segment global      | 003001                                                                | string       | App Started |
            | profile ID               | profileID                                                             | regexp named | App Started |
            | user gender              | gender                                                                | regexp named | App Started |
            | user age                 | age                                                                   | regexp named | App Started |
            | global application       | car loan                                                              | string       | App Started |
            | application name         | contratacion credito auto                                             | string       | App Started |
            | application type         | contratacion                                                          | string       | App Started |
            | fulfillment model        | offline                                                               | string       | App Started |
            | application typology     |                                                                       | string       | App Started |
            | product primary category | prestamos                                                             | string       | App Started |
            | product name             | credito auto                                                          | string       | App Started |
            | application step         | info cat                                                              | string       | App Started |
