@fatcaValidationSurveyAnalytics
Feature: Analytics - Fatca Validation Survey

    @ANA_EVENT_FAC001
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: App on Click Start - Fatca Validation Survey Load
        Given a user with the following criteria
            | criteria                |
            | fatca validation survey |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user taps on "add tax residence survey" profile button
        Then the analytics events contains the following variables
            | item                 | value                       | type         | event              |
            | analytics            | analytics/glomo_base        | json schema  | App On Click Start |
            | version DL           | 20250414_5.0                | string       | App On Click Start |
            | page name            | app:privada:personas:perfil | string       | App On Click Start |
            | level 1              | perfil                      | string       | App On Click Start |
            | language             | ES                          | string       | App On Click Start |
            | page area            | privada                     | string       | App On Click Start |
            | page intent          | informacion                 | string       | App On Click Start |
            | channel              | online                      | string       | App On Click Start |
            | page instance ID     | de                          | string       | App On Click Start |
            | page info version    | appVersion                  | regexp named | App On Click Start |
            | page segment         | personas                    | string       | App On Click Start |
            | sysEnv               | app                         | string       | App On Click Start |
            | business unit        | BBVA Mexico                 | string       | App On Click Start |
            | site app name        | App BBVA Mexico             | string       | App On Click Start |
            | project name         | Glomo                       | string       | App On Click Start |
            | device mobile        | si                          | string       | App On Click Start |
            | user userState       | logado                      | string       | App On Click Start |
            | profile ID           | profileID                   | regexp named | App On Click Start |
            | user segment global  | 003001                      | string       | App On Click Start |
            | user gender          | gender                      | regexp named | App On Click Start |
            | user age             | age                         | regexp named | App On Click Start |
            | global application   | fiscal information update   | string       | App On Click Start |
            | application name     | actualizacion fiscal        | string       | App On Click Start |
            | application type     | autogestion                 | string       | App On Click Start |
            | application step     | perfil                      | string       | App On Click Start |
            | fulfillment model    | offline/online              | string       | App On Click Start |
            | application typology |                             | string       | App On Click Start |
            | custom fields        |                             | string       | App On Click Start |

    @ANA_EVENT_FAC002
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: App Page Visit - Fatca Validation Survey Load
        Given a user with the following criteria
            | criteria                |
            | fatca validation survey |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user taps on "add tax residence survey" profile button
        Then the analytics events contains the following variables
            | item                 | value                                           | type         | event          |
            | analytics            | analytics/glomo_base                            | json schema  | App Page Visit |
            | version DL           | 20250414_5.0                                    | string       | App Page Visit |
            | page name            | app:privada:personas:fatca:1 informacion fiscal | string       | App Page Visit |
            | level 1              | fatca                                           | string       | App Page Visit |
            | level 2              | 1 informacion fiscal                            | string       | App Page Visit |
            | language             | ES                                              | string       | App Page Visit |
            | page area            | privada                                         | string       | App Page Visit |
            | page intent          | informacion                                     | string       | App Page Visit |
            | channel              | online                                          | string       | App Page Visit |
            | page instance ID     | de                                              | string       | App Page Visit |
            | page info version    | appVersion                                      | regexp named | App Page Visit |
            | page segment         | personas                                        | string       | App Page Visit |
            | sysEnv               | app                                             | string       | App Page Visit |
            | business unit        | BBVA Mexico                                     | string       | App Page Visit |
            | site app name        | App BBVA Mexico                                 | string       | App Page Visit |
            | project name         | Glomo                                           | string       | App Page Visit |
            | device mobile        | si                                              | string       | App Page Visit |
            | user userState       | logado                                          | string       | App Page Visit |
            | profile ID           | profileID                                       | regexp named | App Page Visit |
            | user segment global  | 003001                                          | string       | App Page Visit |
            | user gender          | gender                                          | regexp named | App Page Visit |
            | user age             | age                                             | regexp named | App Page Visit |
            | global application   | fiscal information update                       | string       | App Page Visit |
            | application name     | actualizacion fiscal                            | string       | App Page Visit |
            | application type     | autogestion                                     | string       | App Page Visit |
            | application step     | 1 informacion fiscal                            | string       | App Page Visit |
            | fulfillment model    | offline/online                                  | string       | App Page Visit |
            | user segment profile | perfil                                          | string       | App Page Visit |
            | custom fields        |                                                 | string       | App Page Visit |

    @ANA_EVENT_FAC003
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: App Started - The tax residential information is correct
        Given a user with the following criteria
            | criteria                |
            | fatca validation survey |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        And the user taps on "add tax residence survey" profile button
        When the user confirms its information
        Then the analytics events contains the following variables
            | item                 | value                                           | type         | event       |
            | analytics            | analytics/glomo_base                            | json schema  | App Started |
            | version DL           | 20250414_5.0                                    | string       | App Started |
            | page name            | app:privada:personas:fatca:1 informacion fiscal | string       | App Started |
            | level 1              | fatca                                           | string       | App Started |
            | level 2              | 1 informacion fiscal                            | string       | App Started |
            | language             | ES                                              | string       | App Started |
            | page area            | privada                                         | string       | App Started |
            | page intent          | informacion                                     | string       | App Started |
            | channel              | online                                          | string       | App Started |
            | page instance ID     | de                                              | string       | App Started |
            | page info version    | appVersion                                      | regexp named | App Started |
            | page segment         | personas                                        | string       | App Started |
            | sysEnv               | app                                             | string       | App Started |
            | business unit        | BBVA Mexico                                     | string       | App Started |
            | site app name        | App BBVA Mexico                                 | string       | App Started |
            | project name         | Glomo                                           | string       | App Started |
            | device mobile        | si                                              | string       | App Started |
            | user userState       | logado                                          | string       | App Started |
            | profile ID           | profileID                                       | regexp named | App Started |
            | user segment global  | 003001                                          | string       | App Started |
            | user gender          | gender                                          | regexp named | App Started |
            | user age             | age                                             | regexp named | App Started |
            | global application   | fiscal information update                       | string       | App Started |
            | application name     | actualizacion fiscal                            | string       | App Started |
            | application type     | autogestion                                     | string       | App Started |
            | application step     | informacion correcta                            | string       | App Started |
            | fulfillment model    | offline/online                                  | string       | App Started |
            | user segment profile | perfil                                          | string       | App Started |
            | custom fields        |                                                 | string       | App Started |

    @ANA_EVENT_FAC004
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: App Step 2 - User confirms his fiscal information
        Given a user with the following criteria
            | criteria                |
            | fatca validation survey |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        And the user taps on "add tax residence survey" profile button
        When the user confirms its information
        Then the analytics events contains the following variables
            | item                 | value                                     | type         | event      |
            | analytics            | analytics/glomo_base                      | json schema  | App Step 2 |
            | version DL           | 20250414_5.0                              | string       | App Step 2 |
            | page name            | app:privada:personas:fatca:2 confirmacion | string       | App Step 2 |
            | level 1              | fatca                                     | string       | App Step 2 |
            | level 2              | 2 confirmacion                            | string       | App Step 2 |
            | language             | ES                                        | string       | App Step 2 |
            | page area            | privada                                   | string       | App Step 2 |
            | page intent          | informacion                               | string       | App Step 2 |
            | channel              | online                                    | string       | App Step 2 |
            | page instance ID     | de                                        | string       | App Step 2 |
            | page info version    | appVersion                                | regexp named | App Step 2 |
            | page segment         | personas                                  | string       | App Step 2 |
            | sysEnv               | app                                       | string       | App Step 2 |
            | business unit        | BBVA Mexico                               | string       | App Step 2 |
            | site app name        | App BBVA Mexico                           | string       | App Step 2 |
            | project name         | Glomo                                     | string       | App Step 2 |
            | device mobile        | si                                        | string       | App Step 2 |
            | user userState       | logado                                    | string       | App Step 2 |
            | profile ID           | profileID                                 | regexp named | App Step 2 |
            | user segment global  | 003001                                    | string       | App Step 2 |
            | user gender          | gender                                    | regexp named | App Step 2 |
            | user age             | age                                       | regexp named | App Step 2 |
            | global application   | fiscal information update                 | string       | App Step 2 |
            | application name     | actualizacion fiscal                      | string       | App Step 2 |
            | application type     | autogestion                               | string       | App Step 2 |
            | application step     | 2 confirmacion                            | string       | App Step 2 |
            | fulfillment model    | offline/online                            | string       | App Step 2 |
            | user segment profile | perfil                                    | string       | App Step 2 |
            | custom fields        |                                           | string       | App Step 2 |

    @ANA_EVENT_FAC005
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: App Step 3 - The user sees otp screen
        Given a user with the following criteria
            | criteria                |
            | fatca validation survey |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        And the user taps on "add tax residence survey" profile button
        When the user selects the option correct info
        Then the analytics events contains the following variables
            | item                 | value                                     | type         | event      |
            | analytics            | analytics/glomo_base                      | json schema  | App Step 3 |
            | version DL           | 20250414_5.0                              | string       | App Step 3 |
            | page name            | app:privada:personas:fatca:3 otp          | string       | App Step 3 |
            | level 1              | fatca                                     | string       | App Step 3 |
            | level 2              | 3 otp                                     | string       | App Step 3 |
            | language             | ES                                        | string       | App Step 3 |
            | page area            | privada                                   | string       | App Step 3 |
            | page intent          | informacion                               | string       | App Step 3 |
            | channel              | online                                    | string       | App Step 3 |
            | page instance ID     | de                                        | string       | App Step 3 |
            | page info version    | appVersion                                | regexp named | App Step 3 |
            | page segment         | personas                                  | string       | App Step 3 |
            | sysEnv               | app                                       | string       | App Step 3 |
            | business unit        | BBVA Mexico                               | string       | App Step 3 |
            | site app name        | App BBVA Mexico                           | string       | App Step 3 |
            | project name         | Glomo                                     | string       | App Step 3 |
            | device mobile        | si                                        | string       | App Step 3 |
            | user userState       | logado                                    | string       | App Step 3 |
            | profile ID           | profileID                                 | regexp named | App Step 3 |
            | user segment global  | 003001                                    | string       | App Step 3 |
            | user gender          | gender                                    | regexp named | App Step 3 |
            | user age             | age                                       | regexp named | App Step 3 |
            | global application   | fiscal information update                 | string       | App Step 3 |
            | application name     | actualizacion fiscal                      | string       | App Step 3 |
            | application type     | autogestion                               | string       | App Step 3 |
            | application step     | 3 otp                                     | string       | App Step 3 |
            | fulfillment model    | offline/online                            | string       | App Step 3 |
            | user segment profile | perfil                                    | string       | App Step 3 |
            | custom fields        | firma:token                               | string       | App Step 3 |

    @ANA_EVENT_FAC006
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: App Completed - The user sees success screen
        Given a user with the following criteria
            | criteria                |
            | fatca validation survey |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        And the user taps on "add tax residence survey" profile button
        When the user selects the option correct info
        Then the analytics events contains the following variables
            | item                 | value                                     | type         | event      |
            | analytics            | analytics/glomo_base                      | json schema  | App Step 3 |
            | version DL           | 20250414_5.0                              | string       | App Step 3 |
            | page name            | app:privada:personas:fatca:3 otp          | string       | App Step 3 |
            | level 1              | fatca                                     | string       | App Step 3 |
            | level 2              | 3 otp                                     | string       | App Step 3 |
            | language             | ES                                        | string       | App Step 3 |
            | page area            | privada                                   | string       | App Step 3 |
            | page intent          | informacion                               | string       | App Step 3 |
            | channel              | online                                    | string       | App Step 3 |
            | page instance ID     | de                                        | string       | App Step 3 |
            | page info version    | appVersion                                | regexp named | App Step 3 |
            | page segment         | personas                                  | string       | App Step 3 |
            | sysEnv               | app                                       | string       | App Step 3 |
            | business unit        | BBVA Mexico                               | string       | App Step 3 |
            | site app name        | App BBVA Mexico                           | string       | App Step 3 |
            | project name         | Glomo                                     | string       | App Step 3 |
            | device mobile        | si                                        | string       | App Step 3 |
            | user userState       | logado                                    | string       | App Step 3 |
            | profile ID           | profileID                                 | regexp named | App Step 3 |
            | user segment global  | 003001                                    | string       | App Step 3 |
            | user gender          | gender                                    | regexp named | App Step 3 |
            | user age             | age                                       | regexp named | App Step 3 |
            | global application   | fiscal information update                 | string       | App Step 3 |
            | application name     | actualizacion fiscal                      | string       | App Step 3 |
            | application type     | autogestion                               | string       | App Step 3 |
            | application step     | 3 otp                                     | string       | App Step 3 |
            | fulfillment model    | offline/online                            | string       | App Step 3 |
            | user segment profile | perfil                                    | string       | App Step 3 |
            | custom fields        | firma:token                               | string       | App Step 3 |

    @ANA_EVENT_FAC007
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Page View - Fatca Validation Survey Load
        Given a user with the following criteria
            | criteria                |
            | fatca validation survey |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        And the user taps on "add tax residence survey" profile button
        When the user selects the option in other countries
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event     |
            | analytics           | analytics/glomo_base                                   | json schema  | Page View |
            | version DL          | 20250414_5.0                                           | string       | Page View |
            | page name           | app:privada:personas:fatca:residencia fiscal adicional | string       | Page View |
            | level 1             | fatca                                                  | string       | Page View |
            | level 2             | residencia fiscal adicional                            | string       | Page View |
            | language            | ES                                                     | string       | Page View |
            | page area           | privada                                                | string       | Page View |
            | page intent         | informacion                                            | string       | Page View |
            | channel             | online                                                 | string       | Page View |
            | page instance ID    | de                                                     | string       | Page View |
            | page info version   | appVersion                                             | regexp named | Page View |
            | page segment        | personas                                               | string       | Page View |
            | sysEnv              | app                                                    | string       | Page View |
            | business unit       | BBVA Mexico                                            | string       | Page View |
            | site app name       | App BBVA Mexico                                        | string       | Page View |
            | project name        | Glomo                                                  | string       | Page View |
            | device mobile       | si                                                     | string       | Page View |
            | user userState      | logado                                                 | string       | Page View |
            | user segment global | 003001                                                 | string       | Page View |
            | profile ID          | profileID                                              | regexp named | Page View |
            | user age            | age                                                    | regexp named | Page View |
            | user gender         | gender                                                 | regexp named | Page View |

    @ANA_EVENT_FAC008
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Internal Link - The user edits residence
        Given a user with the following criteria
            | criteria                |
            | fatca validation survey |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        And the user taps on "add tax residence survey" profile button
        When the user edits a tax residence "success"
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event         |
            | analytics           | analytics/glomo_base                                   | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                           | string       | Internal Link |
            | page name           | app:privada:personas:fatca:residencia fiscal adicional | string       | Internal Link |
            | level 1             | fatca                                                  | string       | Internal Link |
            | level 2             | residencia fiscal adicional                            | string       | Internal Link |
            | link name           | editar residencia                                      | string       | Internal Link |
            | language            | ES                                                     | string       | Internal Link |
            | page area           | privada                                                | string       | Internal Link |
            | page intent         | informacion                                            | string       | Internal Link |
            | channel             | online                                                 | string       | Internal Link |
            | page instance ID    | de                                                     | string       | Internal Link |
            | page info version   | appVersion                                             | regexp named | Internal Link |
            | page segment        | personas                                               | string       | Internal Link |
            | sysEnv              | app                                                    | string       | Internal Link |
            | business unit       | BBVA Mexico                                            | string       | Internal Link |
            | site app name       | App BBVA Mexico                                        | string       | Internal Link |
            | project name        | Glomo                                                  | string       | Internal Link |
            | device mobile       | si                                                     | string       | Internal Link |
            | user userState      | logado                                                 | string       | Internal Link |
            | user segment global | 003001                                                 | string       | Internal Link |
            | profile ID          | profileID                                              | regexp named | Internal Link |
            | user age            | age                                                    | regexp named | Internal Link |
            | user gender         | gender                                                 | regexp named | Internal Link |

    @ANA_EVENT_FAC009
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Internal Link - The user adds an additional tax residence
        Given a user with the following criteria
            | criteria                |
            | fatca validation survey |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        And the user taps on "add tax residence survey" profile button
        When the user selects the option in other countries
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event         |
            | analytics           | analytics/glomo_base                                   | json schema  | Internal Link |
            | version DL          | 20250414_5.0                                           | string       | Internal Link |
            | page name           | app:privada:personas:fatca:residencia fiscal adicional | string       | Internal Link |
            | level 1             | fatca                                                  | string       | Internal Link |
            | level 2             | residencia fiscal adicional                            | string       | Internal Link |
            | link name           | anadir residencia                                      | string       | Internal Link |
            | language            | ES                                                     | string       | Internal Link |
            | page area           | privada                                                | string       | Internal Link |
            | page intent         | informacion                                            | string       | Internal Link |
            | channel             | online                                                 | string       | Internal Link |
            | page instance ID    | de                                                     | string       | Internal Link |
            | page info version   | appVersion                                             | regexp named | Internal Link |
            | page segment        | personas                                               | string       | Internal Link |
            | sysEnv              | app                                                    | string       | Internal Link |
            | business unit       | BBVA Mexico                                            | string       | Internal Link |
            | site app name       | App BBVA Mexico                                        | string       | Internal Link |
            | project name        | Glomo                                                  | string       | Internal Link |
            | device mobile       | si                                                     | string       | Internal Link |
            | user userState      | logado                                                 | string       | Internal Link |
            | user segment global | 003001                                                 | string       | Internal Link |
            | profile ID          | profileID                                              | regexp named | Internal Link |
            | user age            | age                                                    | regexp named | Internal Link |
            | user gender         | gender                                                 | regexp named | Internal Link |

    @ANA_EVENT_FAC010
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Page View - The information is incorrect
        Given a user with the following criteria
            | criteria                |
            | fatca validation survey |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        And the user taps on "add tax residence survey" profile button
        When the user selects the option incorrect info
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event     |
            | analytics           | analytics/glomo_base                                   | json schema  | Page View |
            | version DL          | 20250414_5.0                                           | string       | Page View |
            | page name           | app:privada:personas:fatca:acude a una sucursal        | string       | Page View |
            | level 1             | fatca                                                  | string       | Page View |
            | level 2             | acude a una sucursal                                   | string       | Page View |
            | language            | ES                                                     | string       | Page View |
            | page area           | privada                                                | string       | Page View |
            | page intent         | informacion                                            | string       | Page View |
            | channel             | online                                                 | string       | Page View |
            | page instance ID    | de                                                     | string       | Page View |
            | page info version   | appVersion                                             | regexp named | Page View |
            | page segment        | personas                                               | string       | Page View |
            | sysEnv              | app                                                    | string       | Page View |
            | business unit       | BBVA Mexico                                            | string       | Page View |
            | site app name       | App BBVA Mexico                                        | string       | Page View |
            | project name        | Glomo                                                  | string       | Page View |
            | device mobile       | si                                                     | string       | Page View |
            | user userState      | logado                                                 | string       | Page View |
            | user segment global | 003001                                                 | string       | Page View |
            | profile ID          | profileID                                              | regexp named | Page View |
            | user age            | age                                                    | regexp named | Page View |
            | user gender         | gender                                                 | regexp named | Page View |

    @ANA_EVENT_FAC011
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Page View - Error Operation Not Performed
        Given a user with the following criteria
            | criteria                |
            | fatca validation survey |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        And the user taps on "add tax residence survey" profile button
        When the user tries to complete the flow
        Then the analytics events contains the following variables
            | item                 | value                                                      | type         | event     |
            | analytics            | analytics/glomo_base                                       | json schema  | Page View |
            | version DL           | 20250414_5.0                                               | string       | Page View |
            | page name            | app:privada:personas:fatca:error operacion no realizada    | string       | Page View |
            | level 1              | fatca                                                      | string       | Page View |
            | level 2              | error operacion no realizada                               | string       | Page View |
            | language             | ES                                                         | string       | Page View |
            | page area            | privada                                                    | string       | Page View |
            | page intent          | informacion                                                | string       | Page View |
            | channel              | online                                                     | string       | Page View |
            | page instance ID     | de                                                         | string       | Page View |
            | page info version    | appVersion                                                 | regexp named | Page View |
            | page segment         | personas                                                   | string       | Page View |
            | sysEnv               | app                                                        | string       | Page View |
            | business unit        | BBVA Mexico                                                | string       | Page View |
            | site app name        | App BBVA Mexico                                            | string       | Page View |
            | project name         | Glomo                                                      | string       | Page View |
            | device mobile        | si                                                         | string       | Page View |
            | user userState       | logado                                                     | string       | Page View |
            | user segment global  | 003001                                                     | string       | Page View |
            | profile ID           | profileID                                                 | regexp named | Page View |
            | user gender          | gender                                                     | regexp named | Page View |
            | user age             | age                                                        | regexp named | Page View |
            | error page           | error operacion no realizada                               | string       | Page View |
