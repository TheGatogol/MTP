@ocLoanOfferAnalytics
Feature: Analytics - OC Loan Offer

    @ANA_OCL001
    @analytics
    @web
    @web-done
    @backend(artichoke)
    @manual @JIRA.GLOMOMX-180963
    @MX @vbank
    Scenario: OCLoan - App Page Visit
        Given the user "0070254228" and "112233"
        When the user goes to the "limit increase" offer operation
        Then the device contains the following variables
            | item                              | value                                                      | type             |
            | analytics                         | analytics/glomo_base                                       | json schema      |
            | version DL                        | 20250414_5.0                                               | string           |
            | page name                         | app:privada:personas:prestamo personal one click:1 detalle | string           |
            | level 1                           | prestamo personal one click                                | string           |
            | level 2                           | 1 detalle                                                  | string           |
            | language                          | ES                                                         | string           |
            | page area                         | privada                                                    | string           |
            | page intent                       | transaccion                                                | string           |
            | channel                           | online                                                     | string           |
            | page instance ID                  | de                                                         | string           |
            | page info version                 | appVersion                                                 | regexp named     |
            | page segment                      | personas                                                   | string           |
            | sysEnv                            | app                                                        | string           |
            | business unit                     | BBVA Mexico                                                | string           |
            | site app name                     | App BBVA Mexico                                            | string           |
            | project name                      | DIY E2E Sales                                              | string           |
            | device mobile                     | si                                                         | string           |
            | user userState                    | logado                                                     | string           |
            | user segment global               | 003001                                                     | string           |
            | profile ID                        | profileID                                                  | regexp named     |
            | user gender                       | gender                                                     | regexp named     |
            | user age                          | age                                                        | regexp named     |
            | global application                | preapproved loan                                           | string           |
            | application name                  | prestamo personal one click                                | string           |
            | application program type hired    | lettersAndSpaceOrEmpty                                     | regexp named     |
            | application type                  | contratacion                                               | string           |
            | application typology              | preaprobado                                                | string           |
            | application step                  | 1 detalle                                                  | string           |
            | fulfillment model                 | online/offline                                             | string           |
            | qualified visits                  | true                                                       | string           |
            | product primary category          | prestamos                                                  | string           |
            | product name                      | prestamo personal inmediato                                | string           |
            | internal campaign                 |                                                            | empty array      |
            | optimization attributes           |                                                            | empty array      |

    @ANA_OCL002
    @analytics
    @web
    @web-done
    @backend(artichoke)
    @manual @JIRA.GLOMOMX-180963
    @MX @vbank
    Scenario: OCLoan - App Started
        Given the user "0070254228" and "112233"
        And the user goes to the "limit increase" offer operation
        When the user tap on input amount
        Then the device contains the following variables
            | item                              | value                                                      | type         |
            | analytics                         | analytics/glomo_base                                       | json schema  |
            | version DL                        | 20250414_5.0                                               | string       |
            | page name                         | app:privada:personas:prestamo personal one click:1 detalle | string       |
            | level 1                           | prestamo personal one click                                | string       |
            | level 2                           | 1 detalle                                                  | string       |
            | language                          | ES                                                         | string       |
            | page area                         | privada                                                    | string       |
            | page intent                       | transaccion                                                | string       |
            | channel                           | online                                                     | string       |
            | page instance ID                  | de                                                         | string       |
            | page info version                 | appVersion                                                 | regexp named |
            | page segment                      | personas                                                   | string       |
            | sysEnv                            | app                                                        | string       |
            | business unit                     | BBVA Mexico                                                | string       |
            | site app name                     | App BBVA Mexico                                            | string       |
            | project name                      | DIY E2E Sales                                              | string       |
            | device mobile                     | si                                                         | string       |
            | user userState                    | logado                                                     | string       |
            | user segment global               | 003001                                                     | string       |
            | profile ID                        | profileID                                                  | regexp named |
            | user gender                       | gender                                                     | regexp named |
            | user age                          | age                                                        | regexp named |
            | global application                | preapproved loan                                           | string       |
            | application name                  | prestamo personal one click                                | string       |
            | application program type hired    | lettersAndSpaceOrEmpty                                     | regexp named |
            | application type                  | contratacion                                               | string       |
            | application typology              | preaprobado                                                | string       |
            | application step                  | importe a solicitar                                        | string       |
            | fulfillment model                 | online/offline                                             | string       |
            | product primary category          | prestamos                                                  | string       |
            | product name                      | prestamo personal inmediato                                | string       |
            | internal campaign                 |                                                            | empty array  |
            | optimization attributes           |                                                            | empty array  |

    @ANA_OCL003
    @analytics
    @web
    @web-done
    @backend(artichoke)
    @manual @JIRA.GLOMOMX-180963
    @MX @vbank
    Scenario: OCLoan - App Step 2
        Given the user "0070254228" and "112233"
        And the user goes to the "limit increase" offer operation
        When the user confirms amount
        Then the device contains the following variables
            | item                              | value                                                                     | type         |
            | analytics                         | analytics/glomo_base                                                      | json schema  |
            | version DL                        | 20250414_5.0                                                              | string       |
            | page name                         | app:privada:personas:prestamo personal one click:2 terminos y condiciones | string       |
            | level 1                           | prestamo personal one click                                               | string       |
            | level 2                           | 2 terminos y condiciones                                                  | string       |
            | language                          | ES                                                                        | string       |
            | page area                         | privada                                                                   | string       |
            | page intent                       | transaccion                                                               | string       |
            | channel                           | online                                                                    | string       |
            | page instance ID                  | de                                                                        | string       |
            | page info version                 | appVersion                                                                | regexp named |
            | page segment                      | personas                                                                  | string       |
            | sysEnv                            | app                                                                       | string       |
            | business unit                     | BBVA Mexico                                                               | string       |
            | site app name                     | App BBVA Mexico                                                           | string       |
            | project name                      | DIY E2E Sales                                                             | string       |
            | device mobile                     | si                                                                        | string       |
            | user userState                    | logado                                                                    | string       |
            | user segment global               | 003001                                                                    | string       |
            | profile ID                        | profileID                                                                 | regexp named |
            | user gender                       | gender                                                                    | regexp named |
            | user age                          | age                                                                       | regexp named |
            | global application                | preapproved loan                                                          | string       |
            | application name                  | prestamo personal one click                                               | string       |
            | application program type hired    | lettersAndSpaceOrEmpty                                                    | regexp named |
            | application type                  | contratacion                                                              | string       |
            | application typology              | preaprobado                                                               | string       |
            | application step                  | 2 terminos y condiciones                                                  | string       |
            | fulfillment model                 | online/offline                                                            | string       |
            | product primary category          | prestamos                                                                 | string       |
            | product name                      | prestamo personal inmediato                                               | string       |
            | product amount                    | 228700                                                                    | number       |
            | product payment amount            | 10402.52                                                                  | number       |
            | product number of payments        | 60                                                                        | number       |
            | product payment type              | mensual                                                                   | string       |
            | product currency                  | MXN                                                                       | string       |
            | product interest rate             | 3.47                                                                      | number       |
            | internal campaign                 |                                                                           | empty array  |
            | optimization attributes           |                                                                           | empty array  |

    @ANA_OCL004
    @analytics
    @web
    @web-done
    @backend(artichoke)
    @manual @JIRA.GLOMOMX-180963
    @MX @vbank
    Scenario: OCLoan - App Step 3
        Given the user "0070254228" and "112233"
        And the user goes to the "limit increase" offer operation
        When the user accepts checklist terms and conditions
        Then the device contains the following variables
            | item                              | value                                                           | type         |
            | analytics                         | analytics/glomo_base                                            | json schema  |
            | version DL                        | 20250414_5.0                                                    | string       |
            | page name                         | app:privada:personas:prestamo personal one click:3 confirmacion | string       |
            | level 1                           | prestamo personal one click                                     | string       |
            | level 2                           | 3 confirmacion                                                  | string       |
            | language                          | ES                                                              | string       |
            | page area                         | privada                                                         | string       |
            | page intent                       | transaccion                                                     | string       |
            | channel                           | online                                                          | string       |
            | page instance ID                  | de                                                              | string       |
            | page info version                 | appVersion                                                      | regexp named |
            | page segment                      | personas                                                        | string       |
            | sysEnv                            | app                                                             | string       |
            | business unit                     | BBVA Mexico                                                     | string       |
            | site app name                     | App BBVA Mexico                                                 | string       |
            | project name                      | DIY E2E Sales                                                   | string       |
            | device mobile                     | si                                                              | string       |
            | user userState                    | logado                                                          | string       |
            | user segment global               | 003001                                                          | string       |
            | profile ID                        | profileID                                                       | regexp named |
            | user gender                       | gender                                                          | regexp named |
            | user age                          | age                                                             | regexp named |
            | global application                | preapproved loan                                                | string       |
            | application name                  | prestamo personal one click                                     | string       |
            | application program type hired    | lettersAndSpaceOrEmpty                                          | regexp named |
            | application type                  | contratacion                                                    | string       |
            | application typology              | preaprobado                                                     | string       |
            | application step                  | 3 confirmacion                                                  | string       |
            | fulfillment model                 | online/offline                                                  | string       |
            | product primary category          | prestamos                                                       | string       |
            | product name                      | prestamo personal inmediato                                     | string       |
            | product amount                    | 228700                                                          | number       |
            | product payment amount            | 10402.52                                                        | number       |
            | product number of payments        | 60                                                              | number       |
            | product payment type              | mensual                                                         | string       |
            | product currency                  | MXN                                                             | string       |
            | product interest rate             | 3.47                                                            | number       |
            | internal campaign                 |                                                                 | empty array  |

    @ANA_OCL005
    @analytics
    @web
    @web-done
    @backend(artichoke)
    @manual @JIRA.GLOMOMX-180963
    @MX @vbank
    Scenario: OCLoan - App Step 4
        Given the user "0070054321" and "112233"
        And the user goes to the "limit increase" offer operation
        And the user accepts checklist terms and conditions
        When the user accepts summary
        Then the device contains the following variables
            | item                              | value                                                  | type         |
            | analytics                         | analytics/glomo_base                                   | json schema  |
            | version DL                        | 20250414_5.0                                           | string       |
            | page name                         | app:privada:personas:prestamo personal one click:4 otp | string       |
            | level 1                           | prestamo personal one click                            | string       |
            | level 2                           | 4 otp                                                  | string       |
            | language                          | ES                                                     | string       |
            | page area                         | privada                                                | string       |
            | page intent                       | transaccion                                            | string       |
            | channel                           | online                                                 | string       |
            | page instance ID                  | de                                                     | string       |
            | page info version                 | appVersion                                             | regexp named |
            | page segment                      | personas                                               | string       |
            | sysEnv                            | app                                                    | string       |
            | business unit                     | BBVA Mexico                                            | string       |
            | site app name                     | App BBVA Mexico                                        | string       |
            | project name                      | DIY E2E Sales                                          | string       |
            | device mobile                     | si                                                     | string       |
            | user userState                    | logado                                                 | string       |
            | user segment global               | 003001                                                 | string       |
            | profile ID                        | profileID                                              | regexp named |
            | user gender                       | gender                                                 | regexp named |
            | user age                          | age                                                    | regexp named |
            | global application                | preapproved loan                                       | string       |
            | application name                  | prestamo personal one click                            | string       |
            | application program type hired    | lettersAndSpaceOrEmpty                                 | regexp named |
            | application type                  | contratacion                                           | string       |
            | application typology              | preaprobado                                            | string       |
            | application step                  | 4 otp                                                  | string       |
            | fulfillment model                 | online/offline                                         | string       |
            | product primary category          | prestamos                                              | string       |
            | product name                      | prestamo personal inmediato                            | string       |
            | product amount                    | 228700                                                 | number       |
            | product payment amount            | 10402.52                                               | number       |
            | product number of payments        | 60                                                     | number       |
            | product payment type              | mensual                                                | string       |
            | product currency                  | MXN                                                    | string       |
            | product interest rate             | 3.47                                                   | number       |
            | internal campaign                 |                                                        | empty array  |
            | optimization attributes           |                                                        | empty array  |

    @ANA_OCL006
    @analytics
    @web
    @web-done
    @backend(artichoke)
    @manual @JIRA.GLOMOMX-180963
    @MX @vbank
    Scenario: OCLoan - App Completed (Contratado)
        Given the user "0070054321" and "112233"
        And the user goes to the "limit increase" offer operation
        And the user accepts all the terms
        When the user confirms the sms key to finalize the loan
        Then the device contains the following variables
            | item                              | value                                                           | type         |
            | analytics                         | analytics/glomo_base                                            | json schema  |
            | version DL                        | 20250414_5.0                                                    | string       |
            | page name                         | app:privada:personas:prestamo personal one click:pagina exitosa | string       |
            | level 1                           | prestamo personal one click                                     | string       |
            | level 2                           | pagina exitosa                                                  | string       |
            | language                          | ES                                                              | string       |
            | page area                         | privada                                                         | string       |
            | page intent                       | transaccion                                                     | string       |
            | channel                           | online                                                          | string       |
            | page instance ID                  | de                                                              | string       |
            | page info version                 | appVersion                                                      | regexp named |
            | page segment                      | personas                                                        | string       |
            | sysEnv                            | app                                                             | string       |
            | business unit                     | BBVA Mexico                                                     | string       |
            | site app name                     | App BBVA Mexico                                                 | string       |
            | project name                      | DIY E2E Sales                                                   | string       |
            | device mobile                     | si                                                              | string       |
            | user userState                    | logado                                                          | string       |
            | user segment global               | 003001                                                          | string       |
            | profile ID                        | profileID                                                       | regexp named |
            | user gender                       | gender                                                          | regexp named |
            | user age                          | age                                                             | regexp named |
            | global application                | preapproved loan                                                | string       |
            | application name                  | prestamo personal one click                                     | string       |
            | application program type hired    | lettersAndSpaceOrEmpty                                          | regexp named |
            | application type                  | contratacion                                                    | string       |
            | application typology              | preaprobado                                                     | string       |
            | application step                  | pagina exitosa                                                  | string       |
            | application state                 | contratado                                                      | string       |
            | application operation number      | 0499379868                                                      | string       |
            | fulfillment model                 | online/offline                                                  | string       |
            | product primary category          | prestamos                                                       | string       |
            | product name                      | prestamo personal inmediato                                     | string       |
            | product amount                    | 228700                                                          | number       |
            | product payment amount            | 10402.52                                                        | number       |
            | product number of payments        | 60                                                              | number       |
            | product payment type              | mensual                                                         | string       |
            | product currency                  | MXN                                                             | string       |
            | product interest rate             | 3.47                                                            | number       |
            | product state                     | contratado                                                      | string       |

    @ANA_OCL007
    @analytics
    @web
    @web-done
    @backend(artichoke)
    @manual @JIRA.GLOMOMX-180963
    @MX @vbank
    Scenario: OCLoan - App Completed (En Revision)
        Given the user "0070254228" and "112233"
        And the user goes to the "limit increase" offer operation
        And the user accepts all the terms
        When the user confirms the sms key to finalize the loan
        Then the device contains the following variables
            | item                              | value                                                           | type             |
            | analytics                         | analytics/glomo_base                                            | json schema      |
            | version DL                        | 20250414_5.0                                                    | string           |
            | page name                         | app:privada:personas:prestamo personal one click:pagina exitosa | string           |
            | level 1                           | prestamo personal one click                                     | string           |
            | level 2                           | pagina exitosa                                                  | string           |
            | language                          | ES                                                              | string           |
            | page area                         | privada                                                         | string           |
            | page intent                       | transaccion                                                     | string           |
            | channel                           | online                                                          | string           |
            | page instance ID                  | de                                                              | string           |
            | page info version                 | appVersion                                                      | regexp named     |
            | page segment                      | personas                                                        | string           |
            | sysEnv                            | app                                                             | string           |
            | business unit                     | BBVA Mexico                                                     | string           |
            | site app name                     | App BBVA Mexico                                                 | string           |
            | project name                      | DIY E2E Sales                                                   | string           |
            | device mobile                     | si                                                              | string           |
            | user userState                    | logado                                                          | string           |
            | user segment global               | 003001                                                          | string           |
            | profile ID                        | profileID                                                       | regexp named     |
            | user gender                       | gender                                                          | regexp named     |
            | user age                          | age                                                             | regexp named     |
            | user segment profile              |                                                                 | empty str object |
            | global application                | preapproved loan                                                | string           |
            | application name                  | prestamo personal one click                                     | string           |
            | application program type hired    | lettersAndSpaceOrEmpty                                          | regexp named     |
            | application type                  | contratacion                                                    | string           |
            | application typology              | preaprobado                                                     | string           |
            | application step                  | pagina exitosa                                                  | string           |
            | application state                 | en revision                                                     | string           |
            | application operation number      | 0499379868                                                      | string           |
            | fulfillment model                 | online/offline                                                  | string           |
            | product primary category          | prestamos                                                       | string           |
            | product name                      | prestamo personal inmediato                                     | string           |
            | product amount                    | 228700                                                          | number           |
            | product payment amount            | 10402.52                                                        | number           |
            | product number of payments        | 60                                                              | number           |
            | product payment type              | mensual                                                         | string           |
            | product currency                  | MXN                                                             | string           |
            | product interest rate             | 3.47                                                            | number           |
            | product state                     | en revision                                                     | string           |

    @ANA_OCL008
    @analytics
    @web
    @web-done
    @backend(artichoke)
    @manual @JIRA.GLOMOMX-180963
    @MX @vbank
    Scenario: OCLoan - App Completed (Rechazado)
        Given the user "0080054321" and "112233"
        And the user goes to the "limit increase" offer operation
        And the user accepts all the terms
        When the sms key "12345678" is entered
        Then the device contains the following variables
            | item                              | value                                                           | type         |
            | analytics                         | analytics/glomo_base                                            | json schema  |
            | version DL                        | 20250414_5.0                                                    | string       |
            | page name                         | app:privada:personas:prestamo personal one click:pagina exitosa | string       |
            | level 1                           | prestamo personal one click                                     | string       |
            | level 2                           | pagina exitosa                                                  | string       |
            | language                          | ES                                                              | string       |
            | page area                         | privada                                                         | string       |
            | page intent                       | transaccion                                                     | string       |
            | channel                           | online                                                          | string       |
            | page instance ID                  | de                                                              | string       |
            | page info version                 | appVersion                                                      | regexp named |
            | page segment                      | personas                                                        | string       |
            | sysEnv                            | app                                                             | string       |
            | business unit                     | BBVA Mexico                                                     | string       |
            | site app name                     | App BBVA Mexico                                                 | string       |
            | project name                      | DIY E2E Sales                                                   | string       |
            | device mobile                     | si                                                              | string       |
            | user userState                    | logado                                                          | string       |
            | user segment global               | 003001                                                          | string       |
            | profile ID                        | profileID                                                       | regexp named |
            | user gender                       | gender                                                          | regexp named |
            | user age                          | age                                                             | regexp named |
            | user segment profile              | falta informacion                                               | string       |
            | global application                | preapproved loan                                                | string       |
            | application name                  | prestamo personal one click                                     | string       |
            | application program type hired    | lettersAndSpaceOrEmpty                                          | regexp named |
            | application type                  | contratacion                                                    | string       |
            | application typology              | preaprobado                                                     | string       |
            | application step                  | pagina exitosa                                                  | string       |
            | application state                 | rechazado                                                       | string       |
            | application operation number      | 0499379868                                                      | string       |
            | fulfillment model                 | online/offline                                                  | string       |
            | product primary category          | prestamos                                                       | string       |
            | product name                      | prestamo personal inmediato                                     | string       |
            | product amount                    | 228700                                                          | number       |
            | product payment amount            | 10402.52                                                        | number       |
            | product number of payments        | 60                                                              | number       |
            | product payment type              | mensual                                                         | string       |
            | product currency                  | MXN                                                             | string       |
            | product interest rate             | 3.47                                                            | number       |
            | product state                     | rechazado                                                       | string       |

    @ANA_OCL009
    @analytics
    @web
    @backend(test)
    @MX @vbank
    @web-done
    Scenario: The user sees annual information (Annual - Mark)
        Given a user with the following criteria
            | criteria        |
            | loan revire     |
        And the user goes to the "consumer loan" offer operation
        And the user tap on input amount
        And the analytics interceptor service is initiated
        When the user accesses help information
        Then the analytics events contains the following variables
            | item                | value                                                                            | type         | event     |
            | analytics           | analytics/glomo_base                                                             | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                     | string       | Page View |
            | page name           | app:privada:personas:prestamo personal one click:1 detalle:tasas de interes fijo | string       | Page View |
            | level 1             | prestamo personal one click                                                      | string       | Page View |
            | level 2             | 1 detalle                                                                        | string       | Page View |
            | level 3             | tasas de interes fijo                                                            | string       | Page View |
            | language            | ES                                                                               | string       | Page View |
            | page area           | privada                                                                          | string       | Page View |
            | page intent         | transaccion                                                                      | string       | Page View |
            | channel             | online                                                                           | string       | Page View |
            | page instance ID    | de                                                                               | string       | Page View |
            | page info version   | appVersion                                                                       | regexp named | Page View |
            | page segment        | personas                                                                         | string       | Page View |
            | sysEnv              | app                                                                              | string       | Page View |
            | business unit       | BBVA Mexico                                                                      | string       | Page View |
            | site app name       | App BBVA Mexico                                                                  | string       | Page View |
            | project name        | DIY E2E Sales                                                                    | string       | Page View |
            | device mobile       | si                                                                               | string       | Page View |
            | user userState      | logado                                                                           | string       | Page View |
            | user segment global | 003001                                                                           | string       | Page View |
            | profile ID          | profileID                                                                        | regexp named | Page View |
            | user gender         | gender                                                                           | regexp named | Page View |
            | user age            | age                                                                              | regexp named | Page View |

    @ANA_OCL010
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    Scenario: The user sees cat information (CAT - Mark)
        Given a user with the following criteria
            | criteria        |
            | loan revire     |
        And the user goes to the "consumer loan" offer operation
        And the user tap on input amount
        And the analytics interceptor service is initiated
        When the user accesses cat information
        Then the analytics events contains the following variables
            | item                | value                                                                        | type         | event     |
            | analytics           | analytics/glomo_base                                                         | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                 | string       | Page View |
            | page name           | app:privada:personas:prestamo personal one click:1 detalle:costo anual total | string       | Page View |
            | level 1             | prestamo personal one click                                                  | string       | Page View |
            | level 2             | 1 detalle                                                                    | string       | Page View |
            | level 3             | costo anual total                                                            | string       | Page View |
            | language            | ES                                                                           | string       | Page View |
            | page area           | privada                                                                      | string       | Page View |
            | page intent         | transaccion                                                                  | string       | Page View |
            | channel             | online                                                                       | string       | Page View |
            | page instance ID    | de                                                                           | string       | Page View |
            | page info version   | appVersion                                                                   | regexp named | Page View |
            | page segment        | personas                                                                     | string       | Page View |
            | sysEnv              | app                                                                          | string       | Page View |
            | business unit       | BBVA Mexico                                                                  | string       | Page View |
            | site app name       | App BBVA Mexico                                                              | string       | Page View |
            | project name        | DIY E2E Sales                                                                | string       | Page View |
            | device mobile       | si                                                                           | string       | Page View |
            | user userState      | logado                                                                       | string       | Page View |
            | user segment global | 003001                                                                       | string       | Page View |
            | profile ID          | profileID                                                                    | regexp named | Page View |
            | user gender         | gender                                                                       | regexp named | Page View |
            | user age            | age                                                                          | regexp named | Page View |

    @ANA_OCL011
    @analytics
    @web
    @web-done
    @backend(test)

    @MX @vbank
    Scenario: The user sees comission information (Commission - Mark)
        Given a user with the following criteria
            | criteria        |
            | loan revire     |
        And the user goes to the "consumer loan" offer operation
        And the user tap on input amount
        And the analytics interceptor service is initiated
        When the user accesses comission information
        Then the analytics events contains the following variables
            | item                | value                                                              | type         | event     |
            | analytics           | analytics/glomo_base                                               | json schema  | Page View |
            | version DL          | 20250414_5.0                                                       | string       | Page View |
            | page name           | app:privada:personas:prestamo personal one click:comision apertura | string       | Page View |
            | level 1             | prestamo personal one click                                        | string       | Page View |
            | level 2             | comision apertura                                                  | string       | Page View |
            | language            | ES                                                                 | string       | Page View |
            | page area           | privada                                                            | string       | Page View |
            | page intent         | transaccion                                                        | string       | Page View |
            | channel             | online                                                             | string       | Page View |
            | page instance ID    | de                                                                 | string       | Page View |
            | page info version   | appVersion                                                         | regexp named | Page View |
            | page segment        | personas                                                           | string       | Page View |
            | sysEnv              | app                                                                | string       | Page View |
            | business unit       | BBVA Mexico                                                        | string       | Page View |
            | site app name       | App BBVA Mexico                                                    | string       | Page View |
            | project name        | DIY E2E Sales                                                      | string       | Page View |
            | device mobile       | si                                                                 | string       | Page View |
            | user userState      | logado                                                             | string       | Page View |
            | user segment global | 003001                                                             | string       | Page View |
            | profile ID          | profileID                                                          | regexp named | Page View |
            | user gender         | gender                                                             | regexp named | Page View |
            | user age            | age                                                                | regexp named | Page View |

    @ANA_OCL012
    @analytics
    @web
    @web-done
    @backend(artichoke)

    @manual @JIRA.GLOMOMX-180963
    @MX @vbank
    Scenario: The user sees terms and conditions (Terms & conditions - Mark)
        Given the user "0070254228" and "112233"
        And the user goes to the "limit increase" offer operation
        When the user accesses terms and conditions
        Then the device contains the following variables
            | item                | value                                                                             | type         |
            | analytics           | analytics/glomo_base                                                              | json schema  |
            | version DL          | 20250414_5.0                                                                      | string       |
            | page name           | app:privada:personas:prestamo personal one click:1 detalle:terminos y condiciones | string       |
            | level 1             | prestamo personal one click                                                       | string       |
            | level 2             | 1 detalle                                                                         | string       |
            | level 3             | terminos y condiciones                                                            | string       |
            | language            | ES                                                                                | string       |
            | page area           | privada                                                                           | string       |
            | page intent         | transaccion                                                                       | string       |
            | channel             | online                                                                            | string       |
            | page instance ID    | de                                                                                | string       |
            | page info version   | appVersion                                                                        | regexp named |
            | page segment        | personas                                                                          | string       |
            | sysEnv              | app                                                                               | string       |
            | business unit       | BBVA Mexico                                                                       | string       |
            | site app name       | App BBVA Mexico                                                                   | string       |
            | project name        | DIY E2E Sales                                                                     | string       |
            | device mobile       | si                                                                                | string       |
            | user userState      | logado                                                                            | string       |
            | user segment global | 003001                                                                            | string       |
            | profile ID          | profileID                                                                         | regexp named |
            | user gender         | gender                                                                            | regexp named |
            | user age            | age                                                                               | regexp named |

    @ANA_OCL013
    @analytics
    @web
    @web-done
    @backend(artichoke)
    @manual @JIRA.GLOMOMX-180963
    @MX @vbank
    Scenario: The user sees OTP Error(OTP Error Page - Mark)
        Given the user "0070254228" and "112233"
        And the user goes to the "limit increase" offer operation
        And the user accepts all the terms
        When the sms key "12345678" is entered
        Then the device contains the following variables
            | item                | value                                                                   | type         |
            | analytics           | analytics/glomo_base                                                    | json schema  |
            | version DL          | 20250414_5.0                                                            | string       |
            | page name           | app:privada:personas:prestamo personal one click:operacion no realizada | string       |
            | level 1             | prestamo personal one click                                             | string       |
            | level 2             | operacion no realizada                                                  | string       |
            | language            | ES                                                                      | string       |
            | page area           | privada                                                                 | string       |
            | page intent         | transaccion                                                             | string       |
            | channel             | online                                                                  | string       |
            | page instance ID    | de                                                                      | string       |
            | page info version   | appVersion                                                              | regexp named |
            | page segment        | personas                                                                | string       |
            | sysEnv              | app                                                                     | string       |
            | business unit       | BBVA Mexico                                                             | string       |
            | site app name       | App BBVA Mexico                                                         | string       |
            | project name        | DIY E2E Sales                                                           | string       |
            | device mobile       | si                                                                      | string       |
            | user userState      | logado                                                                  | string       |
            | user segment global | 003001                                                                  | string       |
            | profile ID          | profileID                                                               | regexp named |
            | user gender         | gender                                                                  | regexp named |
            | user age            | age                                                                     | regexp named |

    @ANA_OCL014
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    Scenario: The user sees promotion revire (Revire Promotion - Mark)
        Given a user with the following criteria
            | criteria        |
            | loan revire     |
        And the user goes to the "consumer loan" offer operation
        And the user tap on input amount
        And the analytics interceptor service is initiated
        When the user accesses to revire help data
        Then the analytics events contains the following variables
            | item                | value                                                              | type         | event     |
            | analytics           | analytics/glomo_base                                               | json schema  | Page View |
            | version DL          | 20250414_5.0                                                       | string       | Page View |
            | page name           | app:privada:personas:prestamo personal one click:promocion unica   | string       | Page View |
            | level 1             | prestamo personal one click                                        | string       | Page View |
            | level 2             | promocion unica                                                    | string       | Page View |
            | language            | ES                                                                 | string       | Page View |
            | page area           | privada                                                            | string       | Page View |
            | page intent         | transaccion                                                        | string       | Page View |
            | channel             | online                                                             | string       | Page View |
            | page instance ID    | de                                                                 | string       | Page View |
            | page info version   | appVersion                                                         | regexp named | Page View |
            | page segment        | personas                                                           | string       | Page View |
            | sysEnv              | app                                                                | string       | Page View |
            | business unit       | BBVA Mexico                                                        | string       | Page View |
            | site app name       | App BBVA Mexico                                                    | string       | Page View |
            | project name        | DIY E2E Sales                                                      | string       | Page View |
            | device mobile       | si                                                                 | string       | Page View |
            | user userState      | logado                                                             | string       | Page View |
            | user segment global | 003001                                                             | string       | Page View |
            | profile ID          | profileID                                                          | regexp named | Page View |
            | user gender         | gender                                                             | regexp named | Page View |
            | user age            | age                                                                | regexp named | Page View |

    @ANA_OCL015
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    Scenario: The user sees to sustianable products catalog
        Given a user with the following criteria
            | criteria                 |
            | loan sustainable catalog |
        And the user goes to the "consumer loan" offer operation
        And the analytics interceptor service is initiated
        When the user goes to the sustainable simulator
        Then the analytics events contains the following variables
            | item                    | value                                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                 | string           | Page View |
            | page name               | app:privada:personas:prestamo personal one click:simulador tasas sostenibles | string           | Page View |
            | level 1                 | prestamo personal one click                                                  | string           | Page View |
            | level 2                 | simulador tasas sostenibles                                                  | string           | Page View |
            | language                | ES                                                                           | string           | Page View |
            | page area               | privada                                                                      | string           | Page View |
            | page intent             | transaccion                                                                  | string           | Page View |
            | channel                 | online                                                                       | string           | Page View |
            | page instance ID        | de                                                                           | string           | Page View |
            | page info version       | appVersion                                                                   | regexp named     | Page View |
            | page segment            | personas                                                                     | string           | Page View |
            | sysEnv                  | app                                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                                              | string           | Page View |
            | project name            | DIY E2E Sales                                                                | string           | Page View |
            | user userState          | logado                                                                       | string           | Page View |
            | user segment global     | 003001                                                                       | string           | Page View |
            | profile ID              | profileID                                                                    | regexp named     | Page View |
            | user gender             | gender                                                                       | regexp named     | Page View |
            | user age                | age                                                                          | regexp named     | Page View |
            | internal campaign       |                                                                              | empty array      | Page View |
            | optimization attributes |                                                                              | empty array      | Page View |
            | application             |                                                                              | empty str object | Page View |
            | products attributes     |                                                                              | empty array      | Page View |

    @ANA_OCL016
    @analytics
    @web
    @web-done
    @backend(test)
    @MX @vbank
    Scenario: The user sees to sustainable loan simulator
        Given a user with the following criteria
            | criteria                 |
            | loan sustainable catalog |
        And the user goes to the "consumer loan" offer operation
        And the analytics interceptor service is initiated
        When the user accesses to product catalog
        Then the analytics events contains the following variables
            | item                    | value                                                                             | type             | event     |
            | analytics               | analytics/glomo_base                                                              | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                      | string           | Page View |
            | page name               | app:privada:personas:prestamo personal one click:explorador productos sostenibles | string           | Page View |
            | level 1                 | prestamo personal one click                                                       | string           | Page View |
            | level 2                 | explorador productos sostenibles                                                  | string           | Page View |
            | language                | ES                                                                                | string           | Page View |
            | page area               | privada                                                                           | string           | Page View |
            | page intent             | transaccion                                                                       | string           | Page View |
            | channel                 | online                                                                            | string           | Page View |
            | page instance ID        | de                                                                                | string           | Page View |
            | page info version       | appVersion                                                                        | regexp name      | Page View |
            | page segment            | personas                                                                          | string           | Page View |
            | sysEnv                  | app                                                                               | string           | Page View |
            | business unit           | BBVA Mexico                                                                       | string           | Page View |
            | site app name           | App BBVA Mexico                                                                   | string           | Page View |
            | project name            | DIY E2E Sales                                                                     | string           | Page View |
            | user userState          | logado                                                                            | string           | Page View |
            | user segment global     | 003001                                                                            | string           | Page View |
            | profile ID              | profileID                                                                         | regexp named     | Page View |
            | user gender             | gender                                                                            | regexp named     | Page View |
            | user age                | age                                                                               | regexp named     | Page View |
            | internal campaign       |                                                                                   | empty array      | Page View |
            | optimization attributes |                                                                                   | empty array      | Page View |
            | application             |                                                                                   | empty str object | Page View |
            | products attributes     |                                                                                   | empty array      | Page View |
