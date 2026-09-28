@analyticsChecksManagementCancel
Feature: Analytics Checks Management Cancel

    @ANA_CMC001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Operation canceled successfully
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to options management screen
        And the user accesses a "charged" option Management screen
        When the user cancels the operation
        Then the device contains the following variables:
            | item                    | value                                                     | type             |
            | analytics               | analytics/glomo_base                                      | json schema      |
            | version DL              | 20250414_5.0                                              | string           |
            | page name               | app:privada:personas:cheques:cancelar cheque:confirmacion | string           |
            | level 1                 | cheques                                                   | string           |
            | level 2                 | cancelar cheque                                           | string           |
            | level 3                 | confirmacion                                              | string           |
            | language                | ES                                                        | string           |
            | page area               | privada                                                   | string           |
            | page intent             | informacion                                               | string           |
            | channel                 | online                                                    | string           |
            | page instance ID        | de                                                        | string           |
            | page info version       | appVersion                                                | regexp named     |
            | page segment            | personas                                                  | string           |
            | sysEnv                  | app                                                       | string           |
            | business unit           | BBVA Mexico                                               | string           |
            | site app name           | App BBVA Mexico                                           | string           |
            | project name            | Glomo                                                     | string           |
            | device mobile           | si                                                        | string           |
            | user userState          | logado                                                    | string           |
            | user segment global     | 003001                                                    | string           |
            | profile ID              | profileID                                                 | regexp named     |
            | user age                | age                                                       | regexp named     |
            | user gender             | gender                                                    | regexp named     |
            | internal campaign       |                                                           | empty array      |
            | optimization attributes |                                                           | empty array      |
            | application             |                                                           | empty str object |
            | products attributes     |                                                           | empty array      |

    @ANA_CMC002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Confirmation of cancellation
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to options management screen
        And the user accesses a "charged" option Management screen
        When the user enters the otp screen
        And the user exit from the error screen
        Then the device contains the following variables:
            | item                    | value                                            | type             |
            | analytics               | analytics/glomo_base                             | json schema      |
            | version DL              | 20250414_5.0                                     | string           |
            | page name               | app:privada:personas:cheques:cancelar cheque:otp | string           |
            | level 1                 | cheques                                          | string           |
            | level 2                 | cancelar cheque                                  | string           |
            | level 3                 | otp                                              | string           |
            | language                | ES                                               | string           |
            | page area               | privada                                          | string           |
            | page intent             | informacion                                      | string           |
            | channel                 | online                                           | string           |
            | page instance ID        | de                                               | string           |
            | page info version       | appVersion                                       | regexp named     |
            | page segment            | personas                                         | string           |
            | sysEnv                  | app                                              | string           |
            | business unit           | BBVA Mexico                                      | string           |
            | site app name           | App BBVA Mexico                                  | string           |
            | project name            | Glomo                                            | string           |
            | device mobile           | si                                               | string           |
            | user userState          | logado                                           | string           |
            | user segment global     | 003001                                           | string           |
            | profile ID              | profileID                                        | regexp named     |
            | user age                | age                                              | regexp named     |
            | user gender             | gender                                           | regexp named     |
            | internal campaign       |                                                  | empty array      |
            | optimization attributes |                                                  | empty array      |
            | application             |                                                  | empty str object |
            | products attributes     |                                                  | empty array      |

    @ANA_CMC003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Check protection is cancelled
        Given a user with the following criteria
            | criteria                                    |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to options management screen
        And the user accesses a "rejected" option Management screen
        When the user cancels a released check
        And the user exit from the error screen
        Then the device contains the following variables:
            | item                    | value                                            | type             |
            | analytics               | analytics/glomo_base                             | json schema      |
            | version DL              | 20250414_5.0                                     | string           |
            | page name               | app:privada:personas:cheques:cancelar cheque:otp | string           |
            | level 1                 | cheques                                          | string           |
            | level 2                 | cancelar cheque                                  | string           |
            | level 3                 | otp                                              | string           |
            | language                | ES                                               | string           |
            | page area               | privada                                          | string           |
            | page intent             | informacion                                      | string           |
            | channel                 | online                                           | string           |
            | page instance ID        | de                                               | string           |
            | page info version       | appVersion                                       | regexp named     |
            | page segment            | personas                                         | string           |
            | sysEnv                  | app                                              | string           |
            | business unit           | BBVA Mexico                                      | string           |
            | site app name           | App BBVA Mexico                                  | string           |
            | project name            | Glomo                                            | string           |
            | device mobile           | si                                               | string           |
            | user userState          | logado                                           | string           |
            | user segment global     | 003001                                           | string           |
            | profile ID              | profileID                                        | regexp named     |
            | user age                | age                                              | regexp named     |
            | user gender             | gender                                           | regexp named     |
            | internal campaign       |                                                  | empty array      |
            | optimization attributes |                                                  | empty array      |
            | application             |                                                  | empty str object |
            | products attributes     |                                                  | empty array      |
