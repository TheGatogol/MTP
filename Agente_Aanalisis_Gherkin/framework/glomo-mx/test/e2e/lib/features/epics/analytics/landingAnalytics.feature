@landingAnalytics
Feature: Analytics Landing

    @ANA_LA001
    @analytics
    @native @android @ios
    @android-done @ios-done
    @backend(test) @MX @vbank
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: See landing page after aplication reset
        Given a user with the following criteria
            | criteria |
            | landing  |
        When the user logs in and reset app
        Then the device contains the following variables
            | item                    | value                                         | type             |
            | analytics               | analytics/glomo_base                          | json schema      |
            | page name               | app:publica:general:landing:usuario recordado | string           |
            | level 1                 | landing                                       | string           |
            | level 2                 | usuario recordado                             | string           |
            | language                | ES                                            | string           |
            | page area               | publica                                       | string           |
            | page intent             | informacion                                   | string           |
            | channel                 | online                                        | string           |
            | page instance ID        | de                                            | string           |
            | version DL              | 20250414_5.0                                  | string           |
            | page info version       | appVersion                                    | regexp named     |
            | page segment            | general                                       | string           |
            | sysEnv                  | app                                           | string           |
            | project name            | Glomo                                         | string           |
            | business unit           | BBVA Mexico                                   | string           |
            | site app name           | App BBVA Mexico                               | string           |
            | device mobile           | si                                            | string           |
            | user userState          | no logado                                     | string           |
            | internal campaign       |                                               | empty array      |
            | optimization attributes |                                               | empty array      |
            | application             |                                               | empty str object |
            | products attributes     |                                               | empty array      |
            | user segment profile    |                                               | empty str object |

    @ANA_EVENT_LA003
    @analytics
    @native @ios @android
    @android-done @ios-done
    @backend(test) @MX @vbank
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: Contract new BBVA card from landing
        Given a user with the following criteria
            | criteria |
            | landing  |
        And the user logs in and reset app
        And the analytics interceptor service is initiated
        When the user discards the "contract new card" section
        Then the analytics events contains the following variables
            | item                    | value                                         | type             | event            |
            | analytics               | analytics/glomo_base                          | json schema      | Interaction Link |
            | page name               | app:publica:general:landing:usuario recordado | string           | Interaction Link |
            | level 1                 | landing                                       | string           | Interaction Link |
            | level 2                 | usuario recordado                             | string           | Interaction Link |
            | language                | ES                                            | string           | Interaction Link |
            | page area               | publica                                       | string           | Interaction Link |
            | page intent             | informacion                                   | string           | Interaction Link |
            | channel                 | online                                        | string           | Interaction Link |
            | page instance ID        | de                                            | string           | Interaction Link |
            | version DL              | 20250414_5.0                                  | string           | Interaction Link |
            | page info version       | appVersion                                    | regexp named     | Interaction Link |
            | page segment            | general                                       | string           | Interaction Link |
            | sysEnv                  | app                                           | string           | Interaction Link |
            | project name            | Glomo                                         | string           | Interaction Link |
            | business unit           | BBVA Mexico                                   | string           | Interaction Link |
            | site app name           | App BBVA Mexico                               | string           | Interaction Link |
            | device mobile           | si                                            | string           | Interaction Link |
            | user userState          | no logado                                     | string           | Interaction Link |
            | interaction level       | ventas no me interesa nuevas tarjetas bbva    | string           | Interaction Link |
            | internal campaign       |                                               | empty array      | Interaction Link |
            | optimization attributes |                                               | empty array      | Interaction Link |
            | application             |                                               | empty str object | Interaction Link |
            | products attributes     |                                               | empty array      | Interaction Link |
            | user segment profile    |                                               | empty str object | Interaction Link |

    @ANA_EVENT_LA004
    @analytics
    @native @ios @android
    @android-done @ios-done
    @backend(test) @MX @vbank @vbank-modified
    @tmpExclude @JIRA.GLOMOMX-180582
    # The call to the AEM that obtains the messages is modified, removing all conditions in the biometrics message
    Scenario: Discart biometrics message
        Given a user with the following criteria
            | criteria |
            | landing  |
        And the user logs in and reset app
        And the analytics interceptor service is initiated
        When the user discards the "biometrics" section
        Then the analytics events contains the following variables
            | item                    | value                                         | type             | event            |
            | analytics               | analytics/glomo_base                          | json schema      | Interaction Link |
            | page name               | app:publica:general:landing:usuario recordado | string           | Interaction Link |
            | level 1                 | landing                                       | string           | Interaction Link |
            | level 2                 | usuario recordado                             | string           | Interaction Link |
            | language                | ES                                            | string           | Interaction Link |
            | page area               | publica                                       | string           | Interaction Link |
            | page intent             | informacion                                   | string           | Interaction Link |
            | channel                 | online                                        | string           | Interaction Link |
            | page instance ID        | de                                            | string           | Interaction Link |
            | version DL              | 20250414_5.0                                  | string           | Interaction Link |
            | page info version       | appVersion                                    | regexp named     | Interaction Link |
            | page segment            | general                                       | string           | Interaction Link |
            | sysEnv                  | app                                           | string           | Interaction Link |
            | project name            | Glomo                                         | string           | Interaction Link |
            | business unit           | BBVA Mexico                                   | string           | Interaction Link |
            | site app name           | App BBVA Mexico                               | string           | Interaction Link |
            | device mobile           | si                                            | string           | Interaction Link |
            | user userState          | no logado                                     | string           | Interaction Link |
            | interaction level       | mensajes cerrar activa tus biometricos        | string           | Interaction Link |
            | internal campaign       |                                               | empty array      | Interaction Link |
            | optimization attributes |                                               | empty array      | Interaction Link |
            | application             |                                               | empty str object | Interaction Link |
            | products attributes     |                                               | empty array      | Interaction Link |
            | user segment profile    |                                               | empty str object | Interaction Link |

    @ANA_EVENT_LA006
    @analytics
    @native @ios @android
    @android-done
    @backend(test) @MX @vbank @vbank-modified
    @tmpExclude @JIRA.GLOMOMX-180582
    # The call to the AEM that obtains the digital sales is modified, adding analytics data to contract section message
    Scenario: Navigate to contract product section when try to contract a new card
        Given a user with the following criteria
            | criteria        |
            | landing         |
        And the user logs in and reset app
        And the analytics interceptor service is initiated
        When the user try to contract a new card
        Then the analytics events contains the following variables
            | item                                         | value                                                                              | type             | event              |
            | analytics                                    | analytics/glomo_base                                                               | json schema      | App On Click Start |
            | version DL                                   | 20250414_5.0                                                                       | string           | App On Click Start |
            | page name                                    | app:publica:general:landing:usuario recordado                                      | string           | App On Click Start |
            | level 1                                      | landing                                                                            | string           | App On Click Start |
            | level 2                                      | usuario recordado                                                                  | string           | App On Click Start |
            | language                                     | ES                                                                                 | string           | App On Click Start |
            | page area                                    | publica                                                                            | string           | App On Click Start |
            | page intent                                  | informacion                                                                        | string           | App On Click Start |
            | channel                                      | online                                                                             | string           | App On Click Start |
            | page instance ID                             | de                                                                                 | string           | App On Click Start |
            | page info version                            | appVersion                                                                         | regexp named     | App On Click Start |
            | page segment                                 | general                                                                            | string           | App On Click Start |
            | sysEnv                                       | app                                                                                | string           | App On Click Start |
            | business unit                                | BBVA Mexico                                                                        | string           | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                    | string           | App On Click Start |
            | project name                                 | DIY E2E Sales                                                                      | string           | App On Click Start |
            | device mobile                                | si                                                                                 | string           | App On Click Start |
            | user userState                               | no logado                                                                          | string           | App On Click Start |
            | application name                             | apertura ffmm                                                                      | string           | App On Click Start |
            | application type                             | contratacion                                                                       | string           | App On Click Start |
            | global application                           | funds                                                                              | string           | App On Click Start |
            | application step                             | landing usuario recordado                                                          | string           | App On Click Start |
            | application typology                         | tarjeta de credito                                                                 | string           | App On Click Start |
            | application process                          | inmediato                                                                          | string           | App On Click Start |
            | custom fields                                | firma:sms                                                                          | string           | App On Click Start |
            | fulfillment model                            | online                                                                             | string           | App On Click Start |
            | product primary category                     | inversiones                                                                        | string           | App On Click Start |
            | product subtype                              | fondos mutuos                                                                      | string           | App On Click Start |
            | product name                                 | fondo mutuo                                                                        | string           | App On Click Start |
            | internal campaign attributes location        | landing--inferior-1-5                                                              | string           | App On Click Start |
            | internal campaign attributes campaign format | card                                                                               | string           | App On Click Start |
            | internal campaign attributes collective code | 50                                                                                 | string           | App On Click Start |
            | internal campaign attributes name            | -apertura de fondos mutuos                                                         | string           | App On Click Start |
            | internal campaign attributes product         | inversiones                                                                        | string           | App On Click Start |
            | internal campaign attributes product code    | 324C324                                                                            | string           | App On Click Start |
            | internal campaign attributes quantity        | 10000                                                                              | string           | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                                        | string           | App On Click Start |
            | internal campaign site action name           | landing--inferior-1-5:card:50:-apertura de fondos mutuos:inversiones:324C324:10000 | string           | App On Click Start |
            | optimization attributes                      |                                                                                    | empty array      | App On Click Start |
            | user segment profile                         |                                                                                    | empty str object | App On Click Start |

    @ANA_EVENT_LA007
    @analytics
    @native @ios @android
    @android-done @ios-done
    @backend(test) @MX @vbank @vbank-modified
    @tmpExclude @JIRA.GLOMOMX-180582
    # The call to the AEM that obtains the digital sales is modified, adding analytics data to contract section message
    Scenario: Discart digital sales section for contract a new card
        Given a user with the following criteria
            | criteria        |
            | landing         |
        And the user logs in and reset app
        And the analytics interceptor service is initiated
        When the user discards the "contract new card" section
        Then the analytics events contains the following variables
            | item                                         | value                                                                              | type             | event       |
            | analytics                                    | analytics/glomo_base                                                               | json schema      | Click Close |
            | version DL                                   | 20250414_5.0                                                                       | string           | Click Close |
            | page name                                    | app:publica:general:landing:usuario recordado                                      | string           | Click Close |
            | level 1                                      | landing                                                                            | string           | Click Close |
            | level 2                                      | usuario recordado                                                                  | string           | Click Close |
            | language                                     | ES                                                                                 | string           | Click Close |
            | page area                                    | publica                                                                            | string           | Click Close |
            | page intent                                  | informacion                                                                        | string           | Click Close |
            | channel                                      | online                                                                             | string           | Click Close |
            | page instance ID                             | de                                                                                 | string           | Click Close |
            | page info version                            | appVersion                                                                         | regexp named     | Click Close |
            | page segment                                 | general                                                                            | string           | Click Close |
            | sysEnv                                       | app                                                                                | string           | Click Close |
            | business unit                                | BBVA Mexico                                                                        | string           | Click Close |
            | site app name                                | App BBVA Mexico                                                                    | string           | Click Close |
            | project name                                 | Glomo                                                                              | string           | Click Close |
            | device mobile                                | si                                                                                 | string           | Click Close |
            | user userState                               | no logado                                                                          | string           | Click Close |
            | internal campaign attributes location        | landing--inferior-1-5                                                              | string           | Click Close |
            | internal campaign attributes campaign format | card                                                                               | string           | Click Close |
            | internal campaign attributes collective code | 50                                                                                 | string           | Click Close |
            | internal campaign attributes name            | -apertura de fondos mutuos                                                         | string           | Click Close |
            | internal campaign attributes product         | inversiones                                                                        | string           | Click Close |
            | internal campaign attributes product code    | 324C324                                                                            | string           | Click Close |
            | internal campaign attributes quantity        | 10000                                                                              | string           | Click Close |
            | internal campaign event name                 | IntCmpClose                                                                        | string           | Click Close |
            | internal campaign site action name           | landing--inferior-1-5:card:50:-apertura de fondos mutuos:inversiones:324C324:10000 | string           | Click Close |
            | optimization attributes                      |                                                                                    | empty array      | Click Close |
            | user segment profile                         |                                                                                    | empty str object | Click Close |

    @ANA_EVENT_LA010
    @analytics
    @ios @android
    @native
    @android-done @ios-done
    @backend(test) @MX @vbank
    @vbank-modified
    @tmpExclude @JIRA.GLOMOMX-180582
    # REQUIRED: The call to the AEM that obtains the messages is modified, adding analytics data to contract section message
    Scenario: Open emergency zone from message
        Given a user with the following criteria
            | criteria        |
            | landing         |
        And the user logs in and reset app
        And the analytics interceptor service is initiated
        When the user accesses to "emergency zone" screen from messages
        Then the analytics events contains the following variables
            | item                                         | value                                                                                           | type             | event         |
            | analytics                                    | analytics/glomo_base                                                                            | json schema      | Click Through |
            | version DL                                   | 20250414_5.0                                                                                    | string           | Click Through |
            | page name                                    | app:publica:general:landing:usuario recordado                                                   | string           | Click Through |
            | level 1                                      | landing                                                                                         | string           | Click Through |
            | level 2                                      | usuario recordado                                                                               | string           | Click Through |
            | language                                     | ES                                                                                              | string           | Click Through |
            | page area                                    | publica                                                                                         | string           | Click Through |
            | page intent                                  | informacion                                                                                     | string           | Click Through |
            | channel                                      | online                                                                                          | string           | Click Through |
            | page instance ID                             | de                                                                                              | string           | Click Through |
            | page info version                            | appVersion                                                                                      | regexp named     | Click Through |
            | page segment                                 | general                                                                                         | string           | Click Through |
            | sysEnv                                       | app                                                                                             | string           | Click Through |
            | business unit                                | BBVA Mexico                                                                                     | string           | Click Through |
            | site app name                                | App BBVA Mexico                                                                                 | string           | Click Through |
            | project name                                 | DIY E2E Sales                                                                                   | string           | Click Through |
            | device mobile                                | si                                                                                              | string           | Click Through |
            | user userState                               | no logado                                                                                       | string           | Click Through |
            | internal campaign attributes location        | landing--inferior-1-5                                                                           | string           | Click Through |
            | internal campaign attributes campaign format | card                                                                                            | string           | Click Through |
            | internal campaign attributes collective code | 50                                                                                              | string           | Click Through |
            | internal campaign attributes name            | -accede a las operaciones de emergencia                                                         | string           | Click Through |
            | internal campaign attributes product         | inversiones                                                                                     | string           | Click Through |
            | internal campaign attributes product code    | 324C324                                                                                         | string           | Click Through |
            | internal campaign attributes quantity        | 10000                                                                                           | string           | Click Through |
            | internal campaign event name                 | IntCmpClick                                                                                     | string           | Click Through |
            | internal campaign site action name           | landing--inferior-1-5:card:50:-accede a las operaciones de emergencia:inversiones:324C324:10000 | string           | Click Through |
            | optimization attributes                      |                                                                                                 | empty array      | Click Through |
            | user segment profile                         |                                                                                                 | empty str object | Click Through |

    @ANA_EVENT_LA011
    @analytics
    @ios @android
    @native
    @android-done @ios-done
    @backend(test) @MX @vbank
    @vbank-modified
    @tmpExclude @JIRA.GLOMOMX-180582
    # REQUIRED: The call to AEM that obtains the Feature Flags is modified, including atmLocator to landingItems
    # REQUIRED: The call to the AEM that obtains the shortcuts is modified, adding ATM Locator shortcut with analytics
    Scenario: Open atm locator from landing shorcut
        Given a user with the following criteria
            | criteria |
            | landing  |
        And the user logs in and reset app
        And the analytics interceptor service is initiated
        When the user accesses to "atm locator" screen from shortcuts
        Then the analytics events contains the following variables
            | item                                         | value                                                                              | type             | event              |
            | analytics                                    | analytics/glomo_base                                                               | json schema      | App On Click Start |
            | version DL                                   | 20250414_5.0                                                                       | string           | App On Click Start |
            | page name                                    | app:publica:general:landing:usuario recordado                                      | string           | App On Click Start |
            | level 1                                      | landing                                                                            | string           | App On Click Start |
            | language                                     | ES                                                                                 | string           | App On Click Start |
            | page area                                    | publica                                                                            | string           | App On Click Start |
            | page intent                                  | informacion                                                                        | string           | App On Click Start |
            | channel                                      | online                                                                             | string           | App On Click Start |
            | page instance ID                             | de                                                                                 | string           | App On Click Start |
            | page info version                            | appVersion                                                                         | regexp named     | App On Click Start |
            | page segment                                 | general                                                                            | string           | App On Click Start |
            | sysEnv                                       | app                                                                                | string           | App On Click Start |
            | business unit                                | BBVA Mexico                                                                        | string           | App On Click Start |
            | site app name                                | App BBVA Mexico                                                                    | string           | App On Click Start |
            | project name                                 | DIY E2E Sales                                                                      | string           | App On Click Start |
            | device mobile                                | si                                                                                 | string           | App On Click Start |
            | user userState                               | no logado                                                                          | string           | App On Click Start |
            | application name                             | sucursales y cajeros                                                               | string           | App On Click Start |
            | application type                             | operativa                                                                          | string           | App On Click Start |
            | global application                           | atmlocator                                                                         | string           | App On Click Start |
            | application step                             | landing usuario recordado                                                          | string           | App On Click Start |
            | fulfillment model                            | online                                                                             | string           | App On Click Start |
            | optimization attributes                      |                                                                                    | empty array      | App On Click Start |
            | user segment profile                         |                                                                                    | empty str object | App On Click Start |
            | product primary category                     | atmlocator                                                                         | string           | App On Click Start |
