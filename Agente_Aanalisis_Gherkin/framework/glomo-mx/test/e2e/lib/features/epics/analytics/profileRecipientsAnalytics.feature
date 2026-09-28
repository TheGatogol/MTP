@profileRecipientsTaggeo
Feature: Analytics - Profile Recipients

    @ANA_EVENT_PRORE001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Profile Recipients - APP ON CLICK START
        Given a user with the following criteria
            | criteria |
            | profile recipients |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses to "profile recipients" screen
        Then the analytics events contains the following variables
            | item                     | value                                | type         |  event             |
            | analytics                | analytics/glomo_base                 | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                         | string       | App On Click Start |
            | page name                | app:privada:personas:mi perfil       | string       | App On Click Start |
            | level 1                  | mi perfil                            | string       | App On Click Start |
            | language                 | ES                                   | string       | App On Click Start |
            | page area                | privada                              | string       | App On Click Start |
            | page intent              | informacion                          | string       | App On Click Start |
            | channel                  | online                               | string       | App On Click Start |
            | page instance ID         | de                                   | string       | App On Click Start |
            | page info version        | appVersion                           | regexp named | App On Click Start |
            | page segment             | personas                             | string       | App On Click Start |
            | sysEnv                   | app                                  | string       | App On Click Start |
            | business unit            | BBVA Mexico                          | string       | App On Click Start |
            | site app name            | App BBVA Mexico                      | string       | App On Click Start |
            | project name             | Glomo                                | string       | App On Click Start |
            | device mobile            | si                                   | string       | App On Click Start |
            | user userState           | logado                               | string       | App On Click Start |
            | user segment global      | 003001                               | string       | App On Click Start |
            | profile ID               | profileID                            | regexp named | App On Click Start |
            | user age                 | age                                  | regexp named | App On Click Start |
            | user gender              | gender                               | regexp named | App On Click Start |
            | global application       | add beneficiary                      | string       | App On Click Start |
            | application name         | registrar beneficiarios              | string       | App On Click Start |
            | application type         | autogestion                          | string       | App On Click Start |
            | application step         | desde mi perfil                      | string       | App On Click Start |
            | fulfillment model        | online                               | string       | App On Click Start |
            | internal campaign        |                                      | empty array  | App On Click Start |
            | optimization attributes  |                                      | empty array  | App On Click Start |
            | products attributes      |                                      | empty array  | App On Click Start |

    @ANA_EVENT_PRORE002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Profile Recipients - APP PAGE VISIT
        Given a user with the following criteria
            | criteria |
            | profile recipients |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses to "profile recipients" screen
        Then the analytics events contains the following variables
            | item                     | value                                              | type         |  event         |
            | analytics                | analytics/glomo_base                               | json schema  | App Page Visit |
            | version DL               | 20250414_5.0                                       | string       | App Page Visit |
            | page name                | app:privada:personas:beneficiarios:1 elegir cuenta | string       | App Page Visit |
            | level 1                  | beneficiarios                                      | string       | App Page Visit |
            | level 2                  | 1 elegir cuenta                                    | string       | App Page Visit |
            | language                 | ES                                                 | string       | App Page Visit |
            | page area                | privada                                            | string       | App Page Visit |
            | page intent              | informacion                                        | string       | App Page Visit |
            | channel                  | online                                             | string       | App Page Visit |
            | page instance ID         | de                                                 | string       | App Page Visit |
            | page info version        | appVersion                                         | regexp named | App Page Visit |
            | page segment             | personas                                           | string       | App Page Visit |
            | sysEnv                   | app                                                | string       | App Page Visit |
            | business unit            | BBVA Mexico                                        | string       | App Page Visit |
            | site app name            | App BBVA Mexico                                    | string       | App Page Visit |
            | project name             | Glomo                                              | string       | App Page Visit |
            | device mobile            | si                                                 | string       | App Page Visit |
            | user userState           | logado                                             | string       | App Page Visit |
            | user segment global      | 003001                                             | string       | App Page Visit |
            | profile ID               | profileID                                          | regexp named | App Page Visit |
            | user age                 | age                                                | regexp named | App Page Visit |
            | user gender              | gender                                             | regexp named | App Page Visit |
            | global application       | add beneficiary                                    | string       | App Page Visit |
            | application name         | registrar beneficiarios                            | string       | App Page Visit |
            | application type         | autogestion                                        | string       | App Page Visit |
            | application step         | 1 elegir cuenta                                    | string       | App Page Visit |
            | fulfillment model        | online                                             | string       | App Page Visit |
            | internal campaign        |                                                    | empty array  | App Page Visit |
            | optimization attributes  |                                                    | empty array  | App Page Visit |
            | products attributes      |                                                    | empty array  | App Page Visit |

    @ANA_EVENT_PRORE003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Profile Recipients - APP STARTED
        Given a user with the following criteria
            | criteria |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        And the analytics interceptor service is initiated
        When the user chooses the "00740010001500616511" account
        Then the analytics events contains the following variables
            | item                     | value                                              | type         |  event      |
            | analytics                | analytics/glomo_base                               | json schema  | App Started |
            | version DL               | 20250414_5.0                                       | string       | App Started |
            | page name                | app:privada:personas:beneficiarios:1 elegir cuenta | string       | App Started |
            | level 1                  | beneficiarios                                      | string       | App Started |
            | level 2                  | 1 elegir cuenta                                    | string       | App Started |
            | language                 | ES                                                 | string       | App Started |
            | page area                | privada                                            | string       | App Started |
            | page intent              | informacion                                        | string       | App Started |
            | channel                  | online                                             | string       | App Started |
            | page instance ID         | de                                                 | string       | App Started |
            | page info version        | appVersion                                         | regexp named | App Started |
            | page segment             | personas                                           | string       | App Started |
            | sysEnv                   | app                                                | string       | App Started |
            | business unit            | BBVA Mexico                                        | string       | App Started |
            | site app name            | App BBVA Mexico                                    | string       | App Started |
            | project name             | Glomo                                              | string       | App Started |
            | device mobile            | si                                                 | string       | App Started |
            | user userState           | logado                                             | string       | App Started |
            | user segment global      | 003001                                             | string       | App Started |
            | profile ID               | profileID                                          | regexp named | App Started |
            | user age                 | age                                                | regexp named | App Started |
            | user gender              | gender                                             | regexp named | App Started |
            | global application       | add beneficiary                                    | string       | App Started |
            | application name         | registrar beneficiarios                            | string       | App Started |
            | application type         | autogestion                                        | string       | App Started |
            | application step         | seleccionar cuenta                                 | string       | App Started |
            | fulfillment model        | online                                             | string       | App Started |
            | internal campaign        |                                                    | empty array  | App Started |
            | optimization attributes  |                                                    | empty array  | App Started |
            | products attributes      |                                                    | empty array  | App Started |

    @ANA_EVENT_PRORE004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Profile Recipients - APP STEP 2
        Given a user with the following criteria
            | criteria |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        And the analytics interceptor service is initiated
        When the user chooses the "00740010001500616511" account
        Then the analytics events contains the following variables
            | item                     | value                                                          | type         |  event     |
            | analytics                | analytics/glomo_base                                           | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                   | string       | App Step 2 |
            | page name                | app:privada:personas:beneficiarios:2 administra beneficiarios  | string       | App Step 2 |
            | level 1                  | beneficiarios                                                  | string       | App Step 2 |
            | level 2                  | 2 administra beneficiarios                                     | string       | App Step 2 |
            | language                 | ES                                                             | string       | App Step 2 |
            | page area                | privada                                                        | string       | App Step 2 |
            | page intent              | informacion                                                    | string       | App Step 2 |
            | channel                  | online                                                         | string       | App Step 2 |
            | page instance ID         | de                                                             | string       | App Step 2 |
            | page info version        | appVersion                                                     | regexp named | App Step 2 |
            | page segment             | personas                                                       | string       | App Step 2 |
            | sysEnv                   | app                                                            | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                    | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                | string       | App Step 2 |
            | project name             | Glomo                                                          | string       | App Step 2 |
            | device mobile            | si                                                             | string       | App Step 2 |
            | user userState           | logado                                                         | string       | App Step 2 |
            | user segment global      | 003001                                                         | string       | App Step 2 |
            | profile ID               | profileID                                                      | regexp named | App Step 2 |
            | user age                 | age                                                            | regexp named | App Step 2 |
            | user gender              | gender                                                         | regexp named | App Step 2 |
            | global application       | add beneficiary                                                | string       | App Step 2 |
            | application name         | registrar beneficiarios                                        | string       | App Step 2 |
            | application type         | autogestion                                                    | string       | App Step 2 |
            | application step         | 2 administra beneficiarios                                     | string       | App Step 2 |
            | fulfillment model        | online                                                         | string       | App Step 2 |
            | internal campaign        |                                                                | empty array  | App Step 2 |
            | optimization attributes  |                                                                | empty array  | App Step 2 |
            | products attributes      |                                                                | empty array  | App Step 2 |

    @ANA_EVENT_PRORE005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Profile Recipients - APP STEP 3
        Given a user with the following criteria
            | criteria |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        And the analytics interceptor service is initiated
        When the user chooses the "00740010001500616511" account
        And the user accesses to register screen
        Then the analytics events contains the following variables
            | item                     | value                                                          | type         |  event      |
            | analytics                | analytics/glomo_base                                           | json schema  | App Step 3  |
            | version DL               | 20250414_5.0                                                   | string       | App Step 3  |
            | page name                | app:privada:personas:beneficiarios:3 datos beneficiario        | string       | App Step 3  |
            | level 1                  | beneficiarios                                                  | string       | App Step 3  |
            | level 2                  | 3 datos beneficiario                                           | string       | App Step 3  |
            | language                 | ES                                                             | string       | App Step 3  |
            | page area                | privada                                                        | string       | App Step 3  |
            | page intent              | informacion                                                    | string       | App Step 3  |
            | channel                  | online                                                         | string       | App Step 3  |
            | page instance ID         | de                                                             | string       | App Step 3  |
            | page info version        | appVersion                                                     | regexp named | App Step 3  |
            | page segment             | personas                                                       | string       | App Step 3  |
            | sysEnv                   | app                                                            | string       | App Step 3  |
            | business unit            | BBVA Mexico                                                    | string       | App Step 3  |
            | site app name            | App BBVA Mexico                                                | string       | App Step 3  |
            | project name             | Glomo                                                          | string       | App Step 3  |
            | device mobile            | si                                                             | string       | App Step 3  |
            | user userState           | logado                                                         | string       | App Step 3  |
            | user segment global      | 003001                                                         | string       | App Step 3  |
            | profile ID               | profileID                                                      | regexp named | App Step 3  |
            | user age                 | age                                                            | regexp named | App Step 3  |
            | user gender              | gender                                                         | regexp named | App Step 3  |
            | global application       | add beneficiary                                                | string       | App Step 3  |
            | application name         | registrar beneficiarios                                        | string       | App Step 3  |
            | application type         | autogestion                                                    | string       | App Step 3  |
            | application step         | 3 datos beneficiario                                           | string       | App Step 3  |
            | fulfillment model        | online                                                         | string       | App Step 3  |
            | internal campaign        |                                                                | empty array  | App Step 3  |
            | optimization attributes  |                                                                | empty array  | App Step 3  |
            | products attributes      |                                                                | empty array  | App Step 3  |

    @ANA_EVENT_PRORE006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Profile Recipients - APP STEP 4
        Given a user with the following criteria
            | criteria |
            | profile recipients |
        And the user goes to register beneficiary with "00740010001500616511" account
        And the analytics interceptor service is initiated
        When the user fills the beneficiary data and continue
        And the user assigns a percentage to the beneficiary
        And the user accesses to summary screen
        Then the analytics events contains the following variables
            | item                     | value                                                          | type         |  event      |
            | analytics                | analytics/glomo_base                                           | json schema  | App Step 4  |
            | version DL               | 20250414_5.0                                                   | string       | App Step 4  |
            | page name                | app:privada:personas:beneficiarios:4 resumen                   | string       | App Step 4  |
            | level 1                  | beneficiarios                                                  | string       | App Step 4  |
            | level 2                  | 4 resumen                                                      | string       | App Step 4  |
            | language                 | ES                                                             | string       | App Step 4  |
            | page area                | privada                                                        | string       | App Step 4  |
            | page intent              | informacion                                                    | string       | App Step 4  |
            | channel                  | online                                                         | string       | App Step 4  |
            | page instance ID         | de                                                             | string       | App Step 4  |
            | page info version        | appVersion                                                     | regexp named | App Step 4  |
            | page segment             | personas                                                       | string       | App Step 4  |
            | sysEnv                   | app                                                            | string       | App Step 4  |
            | business unit            | BBVA Mexico                                                    | string       | App Step 4  |
            | site app name            | App BBVA Mexico                                                | string       | App Step 4  |
            | project name             | Glomo                                                          | string       | App Step 4  |
            | device mobile            | si                                                             | string       | App Step 4  |
            | user userState           | logado                                                         | string       | App Step 4  |
            | user segment global      | 003001                                                         | string       | App Step 4  |
            | profile ID               | profileID                                                      | regexp named | App Step 4  |
            | user age                 | age                                                            | regexp named | App Step 4  |
            | user gender              | gender                                                         | regexp named | App Step 4  |
            | global application       | add beneficiary                                                | string       | App Step 4  |
            | application name         | registrar beneficiarios                                        | string       | App Step 4  |
            | application type         | autogestion                                                    | string       | App Step 4  |
            | application step         | 4 resumen                                                      | string       | App Step 4  |
            | fulfillment model        | online                                                         | string       | App Step 4  |
            | application typology     | 1                                                              | string       | App Step 4  |
            | internal campaign        |                                                                | empty array  | App Step 4  |
            | optimization attributes  |                                                                | empty array  | App Step 4  |
            | products attributes      |                                                                | empty array  | App Step 4  |

    @ANA_EVENT_PRORE007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Profile Recipients - OTP FOOTPRINT
        Given a user with the following criteria
            | criteria |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        And the analytics interceptor service is initiated
        When the user chooses the "00740680001500850807" account
        And the user accesses to summary screen
        And the user ends the form
        Then the analytics events contains the following variables
            | item                     | value                                    | type             |  event     |
            | analytics                | analytics/glomo_base                     | json schema      | Page View  |
            | version DL               | 20250414_5.0                             | string           | Page View  |
            | page name                | app:privada:personas:beneficiarios:otp   | string           | Page View  |
            | level 1                  | beneficiarios                            | string           | Page View  |
            | level 2                  | otp                                      | string           | Page View  |
            | language                 | ES                                       | string           | Page View  |
            | page area                | privada                                  | string           | Page View  |
            | page intent              | informacion                              | string           | Page View  |
            | channel                  | online                                   | string           | Page View  |
            | page instance ID         | de                                       | string           | Page View  |
            | page info version        | appVersion                               | regexp named     | Page View  |
            | page segment             | personas                                 | string           | Page View  |
            | sysEnv                   | app                                      | string           | Page View  |
            | business unit            | BBVA Mexico                              | string           | Page View  |
            | site app name            | App BBVA Mexico                          | string           | Page View  |
            | project name             | Glomo                                    | string           | Page View  |
            | device mobile            | si                                       | string           | Page View  |
            | user userState           | logado                                   | string           | Page View  |
            | user segment global      | 003001                                   | string           | Page View  |
            | profile ID               | profileID                                | regexp named     | Page View  |
            | user age                 | age                                      | regexp named     | Page View  |
            | user gender              | gender                                   | regexp named     | Page View  |
            | internal campaign        |                                          | empty array      | Page View  |
            | optimization attributes  |                                          | empty array      | Page View  |
            | application              |                                          | empty str object | Page View  |
            | products attributes      |                                          | empty array      | Page View  |

    @ANA_EVENT_PRORE008
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Profile Recipients - APP COMPLETED - FINAL
        Given a user with the following criteria
            | criteria |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        And the analytics interceptor service is initiated
        When the user chooses the "00740680001500850807" account
        And the user registers the beneficiary
        Then the analytics events contains the following variables
            | item                     | value                                              | type         |  event  |
            | analytics                | analytics/glomo_base                               | json schema  | App Completed  |
            | version DL               | 20250414_5.0                                       | string       | App Completed  |
            | page name                | app:privada:personas:beneficiarios:pagina exitosa  | string       | App Completed  |
            | level 1                  | beneficiarios                                      | string       | App Completed  |
            | level 2                  | pagina exitosa                                     | string       | App Completed  |
            | language                 | ES                                                 | string       | App Completed  |
            | page area                | privada                                            | string       | App Completed  |
            | page intent              | informacion                                        | string       | App Completed  |
            | channel                  | online                                             | string       | App Completed  |
            | page instance ID         | de                                                 | string       | App Completed  |
            | page info version        | appVersion                                         | regexp named | App Completed  |
            | page segment             | personas                                           | string       | App Completed  |
            | sysEnv                   | app                                                | string       | App Completed  |
            | business unit            | BBVA Mexico                                        | string       | App Completed  |
            | site app name            | App BBVA Mexico                                    | string       | App Completed  |
            | project name             | Glomo                                              | string       | App Completed  |
            | device mobile            | si                                                 | string       | App Completed  |
            | user userState           | logado                                             | string       | App Completed  |
            | user segment global      | 003001                                             | string       | App Completed  |
            | profile ID               | profileID                                          | regexp named | App Completed  |
            | user age                 | age                                                | regexp named | App Completed  |
            | user gender              | gender                                             | regexp named | App Completed  |
            | global application       | add beneficiary                                    | string       | App Completed  |
            | application name         | registrar beneficiarios                            | string       | App Completed  |
            | application type         | autogestion                                        | string       | App Completed  |
            | application step         | pagina exitosa                                     | string       | App Completed  |
            | fulfillment model        | online                                             | string       | App Completed  |
            | application typology     | 5                                                  | string       | App Completed  |
            | custom fields            | firma:token                                        | string       | App Completed  |
            | application state        | finalizado                                         | string       | App Completed  |
            | internal campaign        |                                                    | empty array  | App Completed  |
            | optimization attributes  |                                                    | empty array  | App Completed  |
            | products attributes      |                                                    | empty array  | App Completed  |

    @ANA_EVENT_PRORE009
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Profile Recipients - PAGE VIEW (MODAL DELETE RECIPIENT)
        Given a user with the following criteria
            | criteria |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        And the analytics interceptor service is initiated
        When the user chooses the "00740680001500850807" account
        And the user access to the modal delete beneficiary
        Then the analytics events contains the following variables
            | item                     | value                                                     | type             |  event     |
            | analytics                | analytics/glomo_base                                      | json schema      | Page View  |
            | version DL               | 20250414_5.0                                              | string           | Page View  |
            | page name                | app:privada:personas:beneficiarios:eliminar beneficiario  | string           | Page View  |
            | level 1                  | beneficiarios                                             | string           | Page View  |
            | level 2                  | eliminar beneficiario                                     | string           | Page View  |
            | language                 | ES                                                        | string           | Page View  |
            | page area                | privada                                                   | string           | Page View  |
            | page intent              | informacion                                               | string           | Page View  |
            | channel                  | online                                                    | string           | Page View  |
            | page instance ID         | de                                                        | string           | Page View  |
            | page info version        | appVersion                                                | regexp named     | Page View  |
            | page segment             | personas                                                  | string           | Page View  |
            | sysEnv                   | app                                                       | string           | Page View  |
            | business unit            | BBVA Mexico                                               | string           | Page View  |
            | site app name            | App BBVA Mexico                                           | string           | Page View  |
            | project name             | Glomo                                                     | string           | Page View  |
            | device mobile            | si                                                        | string           | Page View  |
            | user userState           | logado                                                    | string           | Page View  |
            | user segment global      | 003001                                                    | string           | Page View  |
            | profile ID               | profileID                                                 | regexp named     | Page View  |
            | user age                 | age                                                       | regexp named     | Page View  |
            | user gender              | gender                                                    | regexp named     | Page View  |
            | internal campaign        |                                                           | empty array      | Page View  |
            | optimization attributes  |                                                           | empty array      | Page View  |
            | application              |                                                           | empty str object | Page View  |
            | products attributes      |                                                           | empty array      | Page View  |

    @ANA_EVENT_PRORE010
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Profile Recipients - INTERNAL LINK (ACCEPT DELETE RECIPIENT)
        Given a user with the following criteria
            | criteria |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        And the analytics interceptor service is initiated
        When the user chooses the "00740680001500850807" account
        And the user accesses to summary screen
        And the user changes a beneficiary
        Then the analytics events contains the following variables
            | item                     | value                                                    | type             |  event         |
            | analytics                | analytics/glomo_base                                     | json schema      | Internal Link  |
            | version DL               | 20250414_5.0                                             | string           | Internal Link  |
            | page name                | app:privada:personas:beneficiarios:eliminar beneficiario | string           | Internal Link  |
            | level 1                  | beneficiarios                                            | string           | Internal Link  |
            | level 2                  | eliminar beneficiario                                    | string           | Internal Link  |
            | language                 | ES                                                       | string           | Internal Link  |
            | page area                | privada                                                  | string           | Internal Link  |
            | page intent              | informacion                                              | string           | Internal Link  |
            | channel                  | online                                                   | string           | Internal Link  |
            | page instance ID         | de                                                       | string           | Internal Link  |
            | page info version        | appVersion                                               | regexp named     | Internal Link  |
            | page segment             | personas                                                 | string           | Internal Link  |
            | sysEnv                   | app                                                      | string           | Internal Link  |
            | business unit            | BBVA Mexico                                              | string           | Internal Link  |
            | site app name            | App BBVA Mexico                                          | string           | Internal Link  |
            | project name             | Glomo                                                    | string           | Internal Link  |
            | device mobile            | si                                                       | string           | Internal Link  |
            | user userState           | logado                                                   | string           | Internal Link  |
            | user segment global      | 003001                                                   | string           | Internal Link  |
            | profile ID               | profileID                                                | regexp named     | Internal Link  |
            | user age                 | age                                                      | regexp named     | Internal Link  |
            | user gender              | gender                                                   | regexp named     | Internal Link  |
            | internal campaign        |                                                          | empty array      | Internal Link  |
            | optimization attributes  |                                                          | empty array      | Internal Link  |
            | application              |                                                          | empty str object | Internal Link  |
            | products attributes      |                                                          | empty array      | Internal Link  |

    @ANA_EVENT_PRORE011
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Profile Recipients - NOT AVAILABLE OPERATION
        Given a user with the following criteria
            | criteria |
            | profile recipients |
        And the user accesses to "profile recipients" screen
        And the analytics interceptor service is initiated
        When the user chooses the "00740010001500616511" account
        Then the analytics events contains the following variables
            | item                     | value                                                          | type             |  event     |
            | analytics                | analytics/glomo_base                                           | json schema      | Page View  |
            | version DL               | 20250414_5.0                                                   | string           | Page View  |
            | page name                | app:privada:personas:beneficiarios:operacion no disponible     | string           | Page View  |
            | level 1                  | beneficiarios                                                  | string           | Page View  |
            | level 2                  | operacion no disponible                                        | string           | Page View  |
            | error page               | operacion no disponible                                        | string           | Page View  |
            | language                 | ES                                                             | string           | Page View  |
            | page area                | privada                                                        | string           | Page View  |
            | page intent              | informacion                                                    | string           | Page View  |
            | channel                  | online                                                         | string           | Page View  |
            | page instance ID         | de                                                             | string           | Page View  |
            | page info version        | appVersion                                                     | regexp named     | Page View  |
            | page segment             | personas                                                       | string           | Page View  |
            | sysEnv                   | app                                                            | string           | Page View  |
            | business unit            | BBVA Mexico                                                    | string           | Page View  |
            | site app name            | App BBVA Mexico                                                | string           | Page View  |
            | project name             | Glomo                                                          | string           | Page View  |
            | device mobile            | si                                                             | string           | Page View  |
            | user userState           | logado                                                         | string           | Page View  |
            | user segment global      | 003001                                                         | string           | Page View  |
            | profile ID               | profileID                                                      | regexp named     | Page View  |
            | user age                 | age                                                            | regexp named     | Page View  |
            | user gender              | gender                                                         | regexp named     | Page View  |
            | internal campaign        |                                                                | empty array      | Page View  |
            | optimization attributes  |                                                                | empty array      | Page View  |
            | application              |                                                                | empty str object | Page View  |
            | products attributes      |                                                                | empty array      | Page View  |

    @ANA_EVENT_PRORE012
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Profile Recipients - ERROR (BLACK LIST)
        Given a user with the following criteria
            | criteria |
            | profile recipients black list |
        And the user acceses to profile recipients screen
        And the analytics interceptor service is initiated
        When the user chooses the "00740010001500998839" account
        And the user shows the direction and register a new recipient
        And the user tries registers the beneficiary
        Then the analytics events contains the following variables
            | item                     | value                                                                         | type             |  event     |
            | analytics                | analytics/glomo_base                                                          | json schema      | Page View  |
            | version DL               | 20250414_5.0                                                                  | string           | Page View  |
            | page name                | app:privada:personas:beneficiarios:error no es posible registrar beneficiario | string           | Page View  |
            | level 1                  | beneficiarios                                                                 | string           | Page View  |
            | level 2                  | error no es posible registrar beneficiario                                    | string           | Page View  |
            | error page               | error no es posible registrar beneficiario                                    | string           | Page View  |
            | language                 | ES                                                                            | string           | Page View  |
            | page area                | privada                                                                       | string           | Page View  |
            | page intent              | informacion                                                                   | string           | Page View  |
            | channel                  | online                                                                        | string           | Page View  |
            | page instance ID         | de                                                                            | string           | Page View  |
            | page info version        | appVersion                                                                    | regexp named     | Page View  |
            | page segment             | personas                                                                      | string           | Page View  |
            | sysEnv                   | app                                                                           | string           | Page View  |
            | business unit            | BBVA Mexico                                                                   | string           | Page View  |
            | site app name            | App BBVA Mexico                                                               | string           | Page View  |
            | project name             | Glomo                                                                         | string           | Page View  |
            | device mobile            | si                                                                            | string           | Page View  |
            | user userState           | logado                                                                        | string           | Page View  |
            | user segment global      | 003001                                                                        | string           | Page View  |
            | profile ID               | profileID                                                                     | regexp named     | Page View  |
            | user age                 | age                                                                           | regexp named     | Page View  |
            | user gender              | gender                                                                        | regexp named     | Page View  |
            | internal campaign        |                                                                               | empty array      | Page View  |
            | optimization attributes  |                                                                               | empty array      | Page View  |
            | application              |                                                                               | empty str object | Page View  |
            | products attributes      |                                                                               | empty array      | Page View  |

    @ANA_EVENT_PRORE013
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: APP ON CLICK START - Profile Recipients
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses to profile recipients screen
        Then the analytics events contains the following variables
            | item                     | value                       | type         |  event             |
            | analytics                | analytics/glomo_base        | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                | string       | App On Click Start |
            | page name                | app:privada:personas:perfil | string       | App On Click Start |
            | level 1                  | perfil                      | string       | App On Click Start |
            | language                 | ES                          | string       | App On Click Start |
            | page area                | privada                     | string       | App On Click Start |
            | page intent              | informacion                 | string       | App On Click Start |
            | channel                  | online                      | string       | App On Click Start |
            | page instance ID         | de                          | string       | App On Click Start |
            | page info version        | appVersion                  | regexp named | App On Click Start |
            | page segment             | personas                    | string       | App On Click Start |
            | sysEnv                   | app                         | string       | App On Click Start |
            | business unit            | BBVA Mexico                 | string       | App On Click Start |
            | site app name            | App BBVA Mexico             | string       | App On Click Start |
            | project name             | Glomo                       | string       | App On Click Start |
            | device mobile            | si                          | string       | App On Click Start |
            | user userState           | logado                      | string       | App On Click Start |
            | user segment global      | 003001                      | string       | App On Click Start |
            | profile ID               | profileID                   | regexp named | App On Click Start |
            | user age                 | age                         | regexp named | App On Click Start |
            | user gender              | gender                      | regexp named | App On Click Start |
            | global application       | add beneficiary             | string       | App On Click Start |
            | application name         | registrar beneficiarios     | string       | App On Click Start |
            | application type         | autogestion                 | string       | App On Click Start |
            | application step         | perfil                      | string       | App On Click Start |
            | fulfillment model        | online                      | string       | App On Click Start |
            | internal campaign        |                             | empty array  | App On Click Start |
            | optimization attributes  |                             | empty array  | App On Click Start |
            | products attributes      |                             | empty array  | App On Click Start |

    @ANA_EVENT_PRORE014
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: APP STARTED - Profile Recipients
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to profile recipients screen
        And the user selects an account for the recipient
        And the analytics interceptor service is initiated
        When the user adds a beneficiary
        Then the analytics events contains the following variables
            | item                     | value                                                          | type         |  event      |
            | analytics                | analytics/glomo_base                                           | json schema  | App Started |
            | version DL               | 20250414_5.0                                                   | string       | App Started |
            | page name                | app:privada:personas:beneficiarios:1 administrar beneficiarios | string       | App Started |
            | level 1                  | beneficiarios                                                  | string       | App Started |
            | level 2                  | 1 administrar beneficiarios                                    | string       | App Started |
            | language                 | ES                                                             | string       | App Started |
            | page area                | privada                                                        | string       | App Started |
            | page intent              | informacion                                                    | string       | App Started |
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
            | global application       | add beneficiary                                                | string       | App Started |
            | application name         | registrar beneficiarios                                        | string       | App Started |
            | application type         | autogestion                                                    | string       | App Started |
            | application step         | agregar beneficiario                                           | string       | App Started |
            | fulfillment model        | online                                                         | string       | App Started |
            | internal campaign        |                                                                | empty array  | App Started |
            | optimization attributes  |                                                                | empty array  | App Started |
            | products attributes      |                                                                | empty array  | App Started |

    @ANA_EVENT_PRORE015
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: APP STEP 2 - Profile Recipients
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to profile recipients screen
        And the user adds a beneficiary with "same" address
        And the analytics interceptor service is initiated
        When the user sends "one" percentage for the beneficiary
        Then the analytics events contains the following variables
            | item                     | value                                             | type         |  event     |
            | analytics                | analytics/glomo_base                              | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                      | string       | App Step 2 |
            | page name                | app:privada:personas:beneficiarios:2 confirmacion | string       | App Step 2 |
            | level 1                  | beneficiarios                                     | string       | App Step 2 |
            | level 2                  | 2 confirmacion                                    | string       | App Step 2 |
            | language                 | ES                                                | string       | App Step 2 |
            | page area                | privada                                           | string       | App Step 2 |
            | page intent              | informacion                                       | string       | App Step 2 |
            | channel                  | online                                            | string       | App Step 2 |
            | page instance ID         | de                                                | string       | App Step 2 |
            | page info version        | appVersion                                        | regexp named | App Step 2 |
            | page segment             | personas                                          | string       | App Step 2 |
            | sysEnv                   | app                                               | string       | App Step 2 |
            | business unit            | BBVA Mexico                                       | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                   | string       | App Step 2 |
            | project name             | Glomo                                             | string       | App Step 2 |
            | device mobile            | si                                                | string       | App Step 2 |
            | user userState           | logado                                            | string       | App Step 2 |
            | user segment global      | 003001                                            | string       | App Step 2 |
            | profile ID               | profileID                                         | regexp named | App Step 2 |
            | user age                 | age                                               | regexp named | App Step 2 |
            | user gender              | gender                                            | regexp named | App Step 2 |
            | global application       | add beneficiary                                   | string       | App Step 2 |
            | application name         | registrar beneficiarios                           | string       | App Step 2 |
            | application type         | autogestion                                       | string       | App Step 2 |
            | application step         | 2 confirmacion                                    | string       | App Step 2 |
            | fulfillment model        | online                                            | string       | App Step 2 |
            | custom fields            | beneficiarios:1                                   | string       | App Step 2 |
            | internal campaign        |                                                   | empty array  | App Step 2 |
            | optimization attributes  |                                                   | empty array  | App Step 2 |
            | products attributes      |                                                   | empty array  | App Step 2 |

    @ANA_EVENT_PRORE016
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: APP STEP 3 - Profile Recipients
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to profile recipients screen
        And the user adds a beneficiary with "same" address
        And the analytics interceptor service is initiated
        When the user sends "one" percentage for the beneficiary
        Then the analytics events contains the following variables
            | item                     | value                                    | type         |  event     |
            | analytics                | analytics/glomo_base                     | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                             | string       | App Step 3 |
            | page name                | app:privada:personas:beneficiarios:3 otp | string       | App Step 3 |
            | level 1                  | beneficiarios                            | string       | App Step 3 |
            | level 2                  | 3 otp                                    | string       | App Step 3 |
            | language                 | ES                                       | string       | App Step 3 |
            | page area                | privada                                  | string       | App Step 3 |
            | page intent              | informacion                              | string       | App Step 3 |
            | channel                  | online                                   | string       | App Step 3 |
            | page instance ID         | de                                       | string       | App Step 3 |
            | page info version        | appVersion                               | regexp named | App Step 3 |
            | page segment             | personas                                 | string       | App Step 3 |
            | sysEnv                   | app                                      | string       | App Step 3 |
            | business unit            | BBVA Mexico                              | string       | App Step 3 |
            | site app name            | App BBVA Mexico                          | string       | App Step 3 |
            | project name             | Glomo                                    | string       | App Step 3 |
            | device mobile            | si                                       | string       | App Step 3 |
            | user userState           | logado                                   | string       | App Step 3 |
            | user segment global      | 003001                                   | string       | App Step 3 |
            | profile ID               | profileID                                | regexp named | App Step 3 |
            | user age                 | age                                      | regexp named | App Step 3 |
            | user gender              | gender                                   | regexp named | App Step 3 |
            | global application       | add beneficiary                          | string       | App Step 3 |
            | application name         | registrar beneficiarios                  | string       | App Step 3 |
            | application type         | autogestion                              | string       | App Step 3 |
            | application step         | 3 otp                                    | string       | App Step 3 |
            | fulfillment model        | online                                   | string       | App Step 3 |
            | custom fields            | beneficiarios:1,firma:token              | string       | App Step 3 |
            | internal campaign        |                                          | empty array  | App Step 3 |
            | optimization attributes  |                                          | empty array  | App Step 3 |
            | products attributes      |                                          | empty array  | App Step 3 |

    @ANA_EVENT_PRORE017
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: APP COMPLETED - Profile Recipients
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to profile recipients screen
        And the user adds a beneficiary with "same" address
        And the analytics interceptor service is initiated
        When the user sends "one" percentage for the beneficiary
        Then the analytics events contains the following variables
            | item                     | value                                             | type         |  event        |
            | analytics                | analytics/glomo_base                              | json schema  | App Completed |
            | version DL               | 20250414_5.0                                      | string       | App Completed |
            | page name                | app:privada:personas:beneficiarios:pagina exitosa | string       | App Completed |
            | level 1                  | beneficiarios                                     | string       | App Completed |
            | level 2                  | pagina exitosa                                    | string       | App Completed |
            | language                 | ES                                                | string       | App Completed |
            | page area                | privada                                           | string       | App Completed |
            | page intent              | informacion                                       | string       | App Completed |
            | channel                  | online                                            | string       | App Completed |
            | page instance ID         | de                                                | string       | App Completed |
            | page info version        | appVersion                                        | regexp named | App Completed |
            | page segment             | personas                                          | string       | App Completed |
            | sysEnv                   | app                                               | string       | App Completed |
            | business unit            | BBVA Mexico                                       | string       | App Completed |
            | site app name            | App BBVA Mexico                                   | string       | App Completed |
            | project name             | Glomo                                             | string       | App Completed |
            | device mobile            | si                                                | string       | App Completed |
            | user userState           | logado                                            | string       | App Completed |
            | user segment global      | 003001                                            | string       | App Completed |
            | profile ID               | profileID                                         | regexp named | App Completed |
            | user age                 | age                                               | regexp named | App Completed |
            | user gender              | gender                                            | regexp named | App Completed |
            | global application       | add beneficiary                                   | string       | App Completed |
            | application name         | registrar beneficiarios                           | string       | App Completed |
            | application type         | autogestion                                       | string       | App Completed |
            | application step         | pagina exitosa                                    | string       | App Completed |
            | application state        | finalizado                                        | string       | App Completed |
            | fulfillment model        | online                                            | string       | App Completed |
            | custom fields            | beneficiarios:1,firma:token                       | string       | App Completed |
            | internal campaign        |                                                   | empty array  | App Completed |
            | optimization attributes  |                                                   | empty array  | App Completed |
            | products attributes      |                                                   | empty array  | App Completed |

    @ANA_PRORE018
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: PAGE VIEW - Profile Recipients
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        When the user with an already registered recipient accesses to profile recipients
        Then the device contains the following variables
            | item                     | value                                          | type             |
            | analytics                | analytics/glomo_base                           | json schema      |
            | version DL               | 20250414_5.0                                   | string           |
            | page name                | app:privada:personas:beneficiarios:informacion | string           |
            | level 1                  | beneficiarios                                  | string           |
            | level 2                  | informacion                                    | string           |
            | language                 | ES                                             | string           |
            | page area                | privada                                        | string           |
            | page intent              | informacion                                    | string           |
            | channel                  | online                                         | string           |
            | page instance ID         | de                                             | string           |
            | page info version        | appVersion                                     | regexp named     |
            | page segment             | personas                                       | string           |
            | sysEnv                   | app                                            | string           |
            | business unit            | BBVA Mexico                                    | string           |
            | site app name            | App BBVA Mexico                                | string           |
            | project name             | Glomo                                          | string           |
            | device mobile            | si                                             | string           |
            | user userState           | logado                                         | string           |
            | user segment global      | 003001                                         | string           |
            | profile ID               | profileID                                      | regexp named     |
            | user age                 | age                                            | regexp named     |
            | user gender              | gender                                         | regexp named     |
            | internal campaign        |                                                | empty array      |
            | optimization attributes  |                                                | empty array      |
            | application              |                                                | empty str object |
            | products attributes      |                                                | empty array      |

    @ANA_PRORE019
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: PAGE VIEW - Add Recipient
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to profile recipients screen
        And the user selects an account for the recipient
        When the user adds a beneficiary
        Then the device contains the following variables
            | item                     | value                                                   | type             |
            | analytics                | analytics/glomo_base                                    | json schema      |
            | version DL               | 20250414_5.0                                            | string           |
            | page name                | app:privada:personas:beneficiarios:agregar beneficiario | string           |
            | level 1                  | beneficiarios                                           | string           |
            | level 2                  | agregar beneficiario                                    | string           |
            | language                 | ES                                                      | string           |
            | page area                | privada                                                 | string           |
            | page intent              | informacion                                             | string           |
            | channel                  | online                                                  | string           |
            | page instance ID         | de                                                      | string           |
            | page info version        | appVersion                                              | regexp named     |
            | page segment             | personas                                                | string           |
            | sysEnv                   | app                                                     | string           |
            | business unit            | BBVA Mexico                                             | string           |
            | site app name            | App BBVA Mexico                                         | string           |
            | project name             | Glomo                                                   | string           |
            | device mobile            | si                                                      | string           |
            | user userState           | logado                                                  | string           |
            | user segment global      | 003001                                                  | string           |
            | profile ID               | profileID                                               | regexp named     |
            | user age                 | age                                                     | regexp named     |
            | user gender              | gender                                                  | regexp named     |
            | custom fields            | beneficiarios:0                                         | string           |
            | internal campaign        |                                                         | empty array      |
            | optimization attributes  |                                                         | empty array      |
            | application              |                                                         | empty str object |
            | products attributes      |                                                         | empty array      |

    @ANA_PRORE020
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: PAGE VIEW - Selects Account
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        When the user accesses to profile recipients screen
        Then the device contains the following variables
            | item                     | value                                                 | type             |
            | analytics                | analytics/glomo_base                                  | json schema      |
            | version DL               | 20250414_5.0                                          | string           |
            | page name                | app:privada:personas:beneficiarios:seleccionar cuenta | string           |
            | level 1                  | beneficiarios                                         | string           |
            | level 2                  | seleccionar cuenta                                    | string           |
            | language                 | ES                                                    | string           |
            | page area                | privada                                               | string           |
            | page intent              | informacion                                           | string           |
            | channel                  | online                                                | string           |
            | page instance ID         | de                                                    | string           |
            | page info version        | appVersion                                            | regexp named     |
            | page segment             | personas                                              | string           |
            | sysEnv                   | app                                                   | string           |
            | business unit            | BBVA Mexico                                           | string           |
            | site app name            | App BBVA Mexico                                       | string           |
            | project name             | Glomo                                                 | string           |
            | device mobile            | si                                                    | string           |
            | user userState           | logado                                                | string           |
            | user segment global      | 003001                                                | string           |
            | profile ID               | profileID                                             | regexp named     |
            | user age                 | age                                                   | regexp named     |
            | user gender              | gender                                                | regexp named     |
            | custom fields            | beneficiarios:0                                       | string           |
            | internal campaign        |                                                       | empty array      |
            | optimization attributes  |                                                       | empty array      |
            | application              |                                                       | empty str object |
            | products attributes      |                                                       | empty array      |

    @ANA_PRORE021
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: PAGE VIEW - Error Operation Not Performed
        Given a user with the following criteria
            | criteria           |
            | profile recipients |
        And the user accesses to profile recipients screen
        And the user selects a solidary account
        When the user retries to register the recipient
        Then the device contains the following variables
            | item                     | value                                                           | type             |
            | analytics                | analytics/glomo_base                                            | json schema      |
            | version DL               | 20250414_5.0                                                    | string           |
            | page name                | app:privada:personas:beneficiarios:error operacion no realizada | string           |
            | level 1                  | beneficiarios                                                   | string           |
            | level 2                  | error operacion no realizada                                    | string           |
            | language                 | ES                                                              | string           |
            | page area                | privada                                                         | string           |
            | page intent              | informacion                                                     | string           |
            | channel                  | online                                                          | string           |
            | page instance ID         | de                                                              | string           |
            | page info version        | appVersion                                                      | regexp named     |
            | page segment             | personas                                                        | string           |
            | sysEnv                   | app                                                             | string           |
            | business unit            | BBVA Mexico                                                     | string           |
            | site app name            | App BBVA Mexico                                                 | string           |
            | project name             | Glomo                                                           | string           |
            | device mobile            | si                                                              | string           |
            | user userState           | logado                                                          | string           |
            | user segment global      | 003001                                                          | string           |
            | profile ID               | profileID                                                       | regexp named     |
            | user age                 | age                                                             | regexp named     |
            | user gender              | gender                                                          | regexp named     |
            | custom fields            | beneficiarios:0                                                 | string           |
            | error page               | error operacion no realizada                                    | string           |
            | internal campaign        |                                                                 | empty array      |
            | optimization attributes  |                                                                 | empty array      |
            | application              |                                                                 | empty str object |
            | products attributes      |                                                                 | empty array      |

    @ANA_PRORE022
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: PAGE VIEW - Error Beneficiary Registration
        Given a user with the following criteria
            | criteria                      |
            | profile recipients black list |
        And the user accesses to profile recipients screen
        And the user selects an account for the recipient
        And the user adds a beneficiary with "same" address
        When the user sends "one" percentage for the beneficiary
        Then the device contains the following variables
            | item                     | value                                                             | type             |
            | analytics                | analytics/glomo_base                                              | json schema      |
            | version DL               | 20250414_5.0                                                      | string           |
            | page name                | app:privada:personas:beneficiarios:error registro de beneficiario | string           |
            | level 1                  | beneficiarios                                                     | string           |
            | level 2                  | error registro de beneficiario                                    | string           |
            | language                 | ES                                                                | string           |
            | page area                | privada                                                           | string           |
            | page intent              | informacion                                                       | string           |
            | channel                  | online                                                            | string           |
            | page instance ID         | de                                                                | string           |
            | page info version        | appVersion                                                        | regexp named     |
            | page segment             | personas                                                          | string           |
            | sysEnv                   | app                                                               | string           |
            | business unit            | BBVA Mexico                                                       | string           |
            | site app name            | App BBVA Mexico                                                   | string           |
            | project name             | Glomo                                                             | string           |
            | device mobile            | si                                                                | string           |
            | user userState           | logado                                                            | string           |
            | user segment global      | 003001                                                            | string           |
            | profile ID               | profileID                                                         | regexp named     |
            | user age                 | age                                                               | regexp named     |
            | user gender              | gender                                                            | regexp named     |
            | custom fields            | beneficiarios:1                                                   | string           |
            | error page               | error registro de beneficiario                                    | string           |
            | internal campaign        |                                                                   | empty array      |
            | optimization attributes  |                                                                   | empty array      |
            | application              |                                                                   | empty str object |
            | products attributes      |                                                                   | empty array      |
