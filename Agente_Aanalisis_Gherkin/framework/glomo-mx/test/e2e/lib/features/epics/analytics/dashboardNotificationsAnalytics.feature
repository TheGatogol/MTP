@dashboardNotificationsAnalytics
Feature: Analytics - Dashboard Notifications

    @ANA_DN001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @vbank-modified
    # Add Oc Access - Page View Flag
    Scenario: Page view - banner displayed - notifications settings
        Given a user with the following criteria
            | criteria               |
            | notifications settings |
            | app_settings           |
        And device with notifications enabled
        And the analytics interceptor service is initiated
        When the user accesses to dashboard
        Then the analytics events contains the following variables
            | item                                         | value                                | type             | event     |
            | analytics                                    | analytics/glomo_base                 | json schema      | Page View |
            | version DL                                   | 20250414_5.0                         | string           | Page View |
            | page name                                    | app:privada:personas:posicion global | string           | Page View |
            | level 1                                      | posicion global                      | string           | Page View |
            | language                                     | ES                                   | string           | Page View |
            | page area                                    | privada                              | string           | Page View |
            | page intent                                  | informacion                          | string           | Page View |
            | channel                                      | online                               | string           | Page View |
            | page instance ID                             | de                                   | string           | Page View |
            | page info version                            | appVersion                           | regexp named     | Page View |
            | page segment                                 | personas                             | string           | Page View |
            | sysEnv                                       | app                                  | string           | Page View |
            | business unit                                | BBVA Mexico                          | string           | Page View |
            | site app name                                | App BBVA Mexico                      | string           | Page View |
            | project name                                 | Glomo                                | string           | Page View |
            | device mobile                                | si                                   | string           | Page View |
            | user userState                               | logado                               | string           | Page View |
            | user segment global                          | 003001                               | string           | Page View |
            | profile ID                                   | profileID                            | regexp named     | Page View |
            | user gender                                  | gender                               | regexp named     | Page View |
            | user age                                     | age                                  | regexp named     | Page View |
            | internal campaign attributes location        | dashboard--superior--                | string           | Page View |
            | internal campaign attributes campaign format | banner crm                           | string           | Page View |
            | internal campaign attributes collective code |                                      | string           | Page View |
            | internal campaign attributes campaign name   | -activar notificaciones de bbva      | string           | Page View |
            | internal campaign attributes product         |                                      | string           | Page View |
            | internal campaign attributes product code    |                                      | string           | Page View |
            | internal campaign attributes quantity        |                                      | string           | Page View |
            | optimization attributes                      |                                      | empty array      | Page View |
            | application                                  |                                      | empty str object | Page View |
            | products attributes                          |                                      | empty array      | Page View |

    @ANA_DN002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @vbank-modified
    # Add Oc Access - Page View Flag
    Scenario: Page view - open banner - notifications settings
        Given a user with the following criteria
            | criteria               |
            | notifications settings |
            | app_settings           |
        And device with notifications enabled
        And the analytics interceptor service is initiated
        And the user accesses to dashboard
        When the user opens the notification card
        Then the analytics events contains the following variables
            | item                                         | value                                                                | type             | event         |
            | analytics                                    | analytics/glomo_base                                                 | json schema      | Click Through |
            | version DL                                   | 20250414_5.0                                                         | string           | Click Through |
            | page name                                    | app:privada:personas:posicion global                                 | string           | Click Through |
            | level 1                                      | posicion global                                                      | string           | Click Through |
            | language                                     | ES                                                                   | string           | Click Through |
            | page area                                    | privada                                                              | string           | Click Through |
            | page intent                                  | informacion                                                          | string           | Click Through |
            | channel                                      | online                                                               | string           | Click Through |
            | page instance ID                             | de                                                                   | string           | Click Through |
            | page info version                            | appVersion                                                           | regexp named     | Click Through |
            | page segment                                 | personas                                                             | string           | Click Through |
            | sysEnv                                       | app                                                                  | string           | Click Through |
            | business unit                                | BBVA Mexico                                                          | string           | Click Through |
            | site app name                                | App BBVA Mexico                                                      | string           | Click Through |
            | project name                                 | Glomo                                                                | string           | Click Through |
            | device mobile                                | si                                                                   | string           | Click Through |
            | user userState                               | logado                                                               | string           | Click Through |
            | user segment global                          | 003001                                                               | string           | Click Through |
            | profile ID                                   | profileID                                                            | regexp named     | Click Through |
            | user gender                                  | gender                                                               | regexp named     | Click Through |
            | user age                                     | age                                                                  | regexp named     | Click Through |
            | internal campaign attributes location        | dashboard--superior--                                                | string           | Click Through |
            | internal campaign attributes campaign format | banner crm                                                           | string           | Click Through |
            | internal campaign attributes collective code |                                                                      | string           | Click Through |
            | internal campaign attributes campaign name   | -activar notificaciones de bbva                                      | string           | Click Through |
            | internal campaign attributes product         |                                                                      | string           | Click Through |
            | internal campaign attributes product code    |                                                                      | string           | Click Through |
            | internal campaign attributes quantity        |                                                                      | string           | Click Through |
            | internal campaign event name                 | IntCmpClick                                                          | string           | Click Through |
            | internal campaign site action name           | dashboard--superior--:banner crm::-activar notificaciones de bbva::: | string           | Click Through |
            | optimization attributes                      |                                                                      | empty array      | Click Through |
            | application                                  |                                                                      | empty str object | Click Through |
            | products attributes                          |                                                                      | empty array      | Click Through |

    @ANA_DN003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @vbank-modified
    # Add Oc Access - Page View Flag
    Scenario: Page view - close banner - notifications settings
        Given a user with the following criteria
            | criteria               |
            | notifications settings |
            | app_settings           |
        And device with notifications enabled
        And the analytics interceptor service is initiated
        And the user accesses to dashboard
        When the user closes the notification card
        Then the analytics events contains the following variables
            | item                                         | value                                                                | type             | event       |
            | analytics                                    | analytics/glomo_base                                                 | json schema      | Click Close |
            | version DL                                   | 20250414_5.0                                                         | string           | Click Close |
            | page name                                    | app:privada:personas:posicion global                                 | string           | Click Close |
            | level 1                                      | posicion global                                                      | string           | Click Close |
            | language                                     | ES                                                                   | string           | Click Close |
            | page area                                    | privada                                                              | string           | Click Close |
            | page intent                                  | informacion                                                          | string           | Click Close |
            | channel                                      | online                                                               | string           | Click Close |
            | page instance ID                             | de                                                                   | string           | Click Close |
            | page info version                            | appVersion                                                           | regexp named     | Click Close |
            | page segment                                 | personas                                                             | string           | Click Close |
            | sysEnv                                       | app                                                                  | string           | Click Close |
            | business unit                                | BBVA Mexico                                                          | string           | Click Close |
            | site app name                                | App BBVA Mexico                                                      | string           | Click Close |
            | project name                                 | Glomo                                                                | string           | Click Close |
            | device mobile                                | si                                                                   | string           | Click Close |
            | user userState                               | logado                                                               | string           | Click Close |
            | user segment global                          | 003001                                                               | string           | Click Close |
            | profile ID                                   | profileID                                                            | regexp named     | Click Close |
            | user gender                                  | gender                                                               | regexp named     | Click Close |
            | user age                                     | age                                                                  | regexp named     | Click Close |
            | internal campaign attributes location        | dashboard--superior--                                                | string           | Click Close |
            | internal campaign attributes campaign format | banner crm                                                           | string           | Click Close |
            | internal campaign attributes collective code |                                                                      | string           | Click Close |
            | internal campaign attributes campaign name   | -activar notificaciones de bbva                                      | string           | Click Close |
            | internal campaign attributes product         |                                                                      | string           | Click Close |
            | internal campaign attributes product code    |                                                                      | string           | Click Close |
            | internal campaign attributes quantity        |                                                                      | string           | Click Close |
            | internal campaign event name                 | IntCmpClose                                                          | string           | Click Close |
            | internal campaign site action name           | dashboard--superior--:banner crm::-activar notificaciones de bbva::: | string           | Click Close |
            | optimization attributes                      |                                                                      | empty array      | Click Close |
            | application                                  |                                                                      | empty str object | Click Close |
            | products attributes                          |                                                                      | empty array      | Click Close |

    @ANA_DN004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @vbank-modified
    # Add Oc Access - Page View Flag
    Scenario: Page view - banner displayed - assistance manager
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | app_settings       |
        And device with notifications enabled
        And the analytics interceptor service is initiated
        When the user accesses to dashboard
        Then the analytics events contains the following variables
            | item                                         | value                                | type             | event     |
            | analytics                                    | analytics/glomo_base                 | json schema      | Page View |
            | version DL                                   | 20250414_5.0                         | string           | Page View |
            | page name                                    | app:privada:personas:posicion global | string           | Page View |
            | level 1                                      | posicion global                      | string           | Page View |
            | language                                     | ES                                   | string           | Page View |
            | page area                                    | privada                              | string           | Page View |
            | page intent                                  | informacion                          | string           | Page View |
            | channel                                      | online                               | string           | Page View |
            | page instance ID                             | de                                   | string           | Page View |
            | page info version                            | appVersion                           | regexp named     | Page View |
            | page segment                                 | personas                             | string           | Page View |
            | sysEnv                                       | app                                  | string           | Page View |
            | business unit                                | BBVA Mexico                          | string           | Page View |
            | site app name                                | App BBVA Mexico                      | string           | Page View |
            | project name                                 | Glomo                                | string           | Page View |
            | device mobile                                | si                                   | string           | Page View |
            | user userState                               | logado                               | string           | Page View |
            | user segment global                          | 003001                               | string           | Page View |
            | profile ID                                   | profileID                            | regexp named     | Page View |
            | user gender                                  | gender                               | regexp named     | Page View |
            | user age                                     | age                                  | regexp named     | Page View |
            | internal campaign attributes location        | dashboard--superior--                | string           | Page View |
            | internal campaign attributes campaign format | banner crm                           | string           | Page View |
            | internal campaign attributes collective code |                                      | string           | Page View |
            | internal campaign attributes campaign name   | -informacion sobre asesor personal   | string           | Page View |
            | internal campaign attributes product         |                                      | string           | Page View |
            | internal campaign attributes product code    |                                      | string           | Page View |
            | internal campaign attributes quantity        |                                      | string           | Page View |
            | optimization attributes                      |                                      | empty array      | Page View |
            | application                                  |                                      | empty str object | Page View |
            | products attributes                          |                                      | empty array      | Page View |

    @ANA_DN005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @vbank-modified
    # Add Oc Access - Page View Flag
    Scenario: Page view - open banner - assitance manager
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | app_settings       |
        And device with notifications enabled
        And the analytics interceptor service is initiated
        And the user accesses to dashboard
        When the user opens the notification card
        Then the analytics events contains the following variables
            | item                                         | value                                                                   | type             | event         |
            | analytics                                    | analytics/glomo_base                                                    | json schema      | Click Through |
            | version DL                                   | 20250414_5.0                                                            | string           | Click Through |
            | page name                                    | app:privada:personas:posicion global                                    | string           | Click Through |
            | level 1                                      | posicion global                                                         | string           | Click Through |
            | language                                     | ES                                                                      | string           | Click Through |
            | page area                                    | privada                                                                 | string           | Click Through |
            | page intent                                  | informacion                                                             | string           | Click Through |
            | channel                                      | online                                                                  | string           | Click Through |
            | page instance ID                             | de                                                                      | string           | Click Through |
            | page info version                            | appVersion                                                              | regexp named     | Click Through |
            | page segment                                 | personas                                                                | string           | Click Through |
            | sysEnv                                       | app                                                                     | string           | Click Through |
            | business unit                                | BBVA Mexico                                                             | string           | Click Through |
            | site app name                                | App BBVA Mexico                                                         | string           | Click Through |
            | project name                                 | Glomo                                                                   | string           | Click Through |
            | device mobile                                | si                                                                      | string           | Click Through |
            | user userState                               | logado                                                                  | string           | Click Through |
            | user segment global                          | 003001                                                                  | string           | Click Through |
            | profile ID                                   | profileID                                                               | regexp named     | Click Through |
            | user gender                                  | gender                                                                  | regexp named     | Click Through |
            | user age                                     | age                                                                     | regexp named     | Click Through |
            | internal campaign attributes location        | dashboard--superior--                                                   | string           | Click Through |
            | internal campaign attributes campaign format | banner crm                                                              | string           | Click Through |
            | internal campaign attributes collective code |                                                                         | string           | Click Through |
            | internal campaign attributes campaign name   | -informacion sobre asesor personal                                      | string           | Click Through |
            | internal campaign attributes product         |                                                                         | string           | Click Through |
            | internal campaign attributes product code    |                                                                         | string           | Click Through |
            | internal campaign attributes quantity        |                                                                         | string           | Click Through |
            | internal campaign event name                 | IntCmpClick                                                             | string           | Click Through |
            | internal campaign site action name           | dashboard--superior--:banner crm::-informacion sobre asesor personal::: | string           | Click Through |
            | optimization attributes                      |                                                                         | empty array      | Click Through |
            | application                                  |                                                                         | empty str object | Click Through |
            | products attributes                          |                                                                         | empty array      | Click Through |

    @ANA_DN006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @vbank-modified
    # Add Oc Access - Page View Flag
    Scenario: Page view - close banner  - assistance manager
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
            | app_settings       |
        And device with notifications enabled
        And the analytics interceptor service is initiated
        And the user accesses to dashboard
        When the user closes the notification card
        Then the analytics events contains the following variables
            | item                                         | value                                                                   | type             | event       |
            | analytics                                    | analytics/glomo_base                                                    | json schema      | Click Close |
            | version DL                                   | 20250414_5.0                                                            | string           | Click Close |
            | page name                                    | app:privada:personas:posicion global                                    | string           | Click Close |
            | level 1                                      | posicion global                                                         | string           | Click Close |
            | language                                     | ES                                                                      | string           | Click Close |
            | page area                                    | privada                                                                 | string           | Click Close |
            | page intent                                  | informacion                                                             | string           | Click Close |
            | channel                                      | online                                                                  | string           | Click Close |
            | page instance ID                             | de                                                                      | string           | Click Close |
            | page info version                            | appVersion                                                              | regexp named     | Click Close |
            | page segment                                 | personas                                                                | string           | Click Close |
            | sysEnv                                       | app                                                                     | string           | Click Close |
            | business unit                                | BBVA Mexico                                                             | string           | Click Close |
            | site app name                                | App BBVA Mexico                                                         | string           | Click Close |
            | project name                                 | Glomo                                                                   | string           | Click Close |
            | device mobile                                | si                                                                      | string           | Click Close |
            | user userState                               | logado                                                                  | string           | Click Close |
            | user segment global                          | 003001                                                                  | string           | Click Close |
            | profile ID                                   | profileID                                                               | regexp named     | Click Close |
            | user gender                                  | gender                                                                  | regexp named     | Click Close |
            | user age                                     | age                                                                     | regexp named     | Click Close |
            | internal campaign attributes location        | dashboard--superior--                                                   | string           | Click Close |
            | internal campaign attributes campaign format | banner crm                                                              | string           | Click Close |
            | internal campaign attributes collective code |                                                                         | string           | Click Close |
            | internal campaign attributes campaign name   | -informacion sobre asesor personal                                      | string           | Click Close |
            | internal campaign attributes product         |                                                                         | string           | Click Close |
            | internal campaign attributes product code    |                                                                         | string           | Click Close |
            | internal campaign attributes quantity        |                                                                         | string           | Click Close |
            | internal campaign event name                 | IntCmpClose                                                             | string           | Click Close |
            | internal campaign site action name           | dashboard--superior--:banner crm::-informacion sobre asesor personal::: | string           | Click Close |
            | optimization attributes                      |                                                                         | empty array      | Click Close |
            | application                                  |                                                                         | empty str object | Click Close |
            | products attributes                          |                                                                         | empty array      | Click Close |

    @ANA_DN007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @vbank-modified
    # Add Oc Access - Page View Flag
    Scenario: Page view - banner displayed - credit bureau
        Given a user with the following criteria
            | criteria      |
            | credit bureau |
            | app_settings  |
        And device with notifications enabled
        And the user starts the application at date:
            | day   | 19   |
            | month | 1    |
            | year  | 2022 |
        And the analytics interceptor service is initiated
        When the user accesses to dashboard
        Then the analytics events contains the following variables
            | item                                         | value                                | type             | event     |
            | analytics                                    | analytics/glomo_base                 | json schema      | Page View |
            | version DL                                   | 20250414_5.0                         | string           | Page View |
            | page name                                    | app:privada:personas:posicion global | string           | Page View |
            | level 1                                      | posicion global                      | string           | Page View |
            | language                                     | ES                                   | string           | Page View |
            | page area                                    | privada                              | string           | Page View |
            | page intent                                  | informacion                          | string           | Page View |
            | channel                                      | online                               | string           | Page View |
            | page instance ID                             | de                                   | string           | Page View |
            | page info version                            | appVersion                           | regexp named     | Page View |
            | page segment                                 | personas                             | string           | Page View |
            | sysEnv                                       | app                                  | string           | Page View |
            | business unit                                | BBVA Mexico                          | string           | Page View |
            | site app name                                | App BBVA Mexico                      | string           | Page View |
            | project name                                 | Glomo                                | string           | Page View |
            | device mobile                                | si                                   | string           | Page View |
            | user userState                               | logado                               | string           | Page View |
            | user segment global                          | 003001                               | string           | Page View |
            | profile ID                                   | profileID                            | regexp named     | Page View |
            | user gender                                  | gender                               | regexp named     | Page View |
            | user age                                     | age                                  | regexp named     | Page View |
            | internal campaign attributes location        | dashboard--superior--                | string           | Page View |
            | internal campaign attributes campaign format | banner crm                           | string           | Page View |
            | internal campaign attributes collective code |                                      | string           | Page View |
            | internal campaign attributes campaign name   | -recibir ofertas de credito          | string           | Page View |
            | internal campaign attributes product         |                                      | string           | Page View |
            | internal campaign attributes product code    |                                      | string           | Page View |
            | internal campaign attributes quantity        |                                      | string           | Page View |
            | optimization attributes                      |                                      | empty array      | Page View |
            | application                                  |                                      | empty str object | Page View |
            | products attributes                          |                                      | empty array      | Page View |

    @ANA_DN008
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @vbank-modified
    # Add Oc Access - Page View Flag
    Scenario: Page view - opens banner - credit bureau
        Given a user with the following criteria
            | criteria      |
            | credit bureau |
            | app_settings  |
        And device with notifications enabled
        And the user starts the application at date:
            | day   | 19   |
            | month | 1    |
            | year  | 2022 |
        And the analytics interceptor service is initiated
        And the user accesses to dashboard
        When the user opens the notification card
        Then the analytics events contains the following variables
            | item                                         | value                                                            | type         | event              |
            | analytics                                    | analytics/glomo_base                                             | json schema  | App On Click Start |
            | version DL                                   | 20250414_5.0                                                     | string       | App On Click Start |
            | page name                                    | app:privada:personas:posicion global                             | string       | App On Click Start |
            | level 1                                      | posicion global                                                  | string       | App On Click Start |
            | language                                     | ES                                                               | string       | App On Click Start |
            | page area                                    | privada                                                          | string       | App On Click Start |
            | page intent                                  | informacion                                                      | string       | App On Click Start |
            | channel                                      | online                                                           | string       | App On Click Start |
            | page instance ID                             | de                                                               | string       | App On Click Start |
            | page info version                            | appVersion                                                       | regexp named | App On Click Start |
            | page segment                                 | personas                                                         | string       | App On Click Start |
            | sysEnv                                       | app                                                              | string       | App On Click Start |
            | business unit                                | BBVA Mexico                                                      | string       | App On Click Start |
            | site app name                                | App BBVA Mexico                                                  | string       | App On Click Start |
            | project name                                 | Glomo                                                            | string       | App On Click Start |
            | device mobile                                | si                                                               | string       | App On Click Start |
            | user userState                               | logado                                                           | string       | App On Click Start |
            | user segment global                          | 003001                                                           | string       | App On Click Start |
            | profile ID                                   | profileID                                                        | regexp named | App On Click Start |
            | user gender                                  | gender                                                           | regexp named | App On Click Start |
            | user age                                     | age                                                              | regexp named | App On Click Start |
            | global application                           | credit bureau authorization                                      | string       | App On Click Start |
            | application name                             | autorizacion credito buro                                        | string       | App On Click Start |
            | application type                             | operativa                                                        | string       | App On Click Start |
            | application typology                         | proceso cliente                                                  | string       | App On Click Start |
            | application step                             | saber mas posicion global                                        | string       | App On Click Start |
            | fulfillment model                            | online                                                           | string       | App On Click Start |
            | internal campaign attributes location        | dashboard--superior--                                            | string       | App On Click Start |
            | internal campaign attributes campaign format | banner crm                                                       | string       | App On Click Start |
            | internal campaign attributes collective code |                                                                  | string       | App On Click Start |
            | internal campaign attributes campaign name   | -recibir ofertas de credito                                      | string       | App On Click Start |
            | internal campaign attributes product         |                                                                  | string       | App On Click Start |
            | internal campaign attributes product code    |                                                                  | string       | App On Click Start |
            | internal campaign attributes quantity        |                                                                  | string       | App On Click Start |
            | internal campaign event name                 | IntCmpClick                                                      | string       | App On Click Start |
            | internal campaign site action name           | dashboard--superior--:banner crm::-recibir ofertas de credito::: | string       | App On Click Start |
            | optimization attributes                      |                                                                  | empty array  | App On Click Start |
            | products attributes                          |                                                                  | empty array  | App On Click Start |

    @ANA_DN009
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @vbank-modified
    # Add Oc Access - Page View Flag
    Scenario: Page view - close banner - credit bureau
        Given a user with the following criteria
            | criteria      |
            | credit bureau |
            | app_settings  |
        And device with notifications enabled
        And the user starts the application at date:
            | day   | 19   |
            | month | 1    |
            | year  | 2022 |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user closes the notification card
        Then the analytics events contains the following variables
            | item                                         | value                                                            | type             | event       |
            | analytics                                    | analytics/glomo_base                                             | json schema      | Click Close |
            | version DL                                   | 20250414_5.0                                                     | string           | Click Close |
            | page name                                    | app:privada:personas:posicion global                             | string           | Click Close |
            | level 1                                      | posicion global                                                  | string           | Click Close |
            | language                                     | ES                                                               | string           | Click Close |
            | page area                                    | privada                                                          | string           | Click Close |
            | page intent                                  | informacion                                                      | string           | Click Close |
            | channel                                      | online                                                           | string           | Click Close |
            | page instance ID                             | de                                                               | string           | Click Close |
            | page info version                            | appVersion                                                       | regexp named     | Click Close |
            | page segment                                 | personas                                                         | string           | Click Close |
            | sysEnv                                       | app                                                              | string           | Click Close |
            | business unit                                | BBVA Mexico                                                      | string           | Click Close |
            | site app name                                | App BBVA Mexico                                                  | string           | Click Close |
            | project name                                 | Glomo                                                            | string           | Click Close |
            | device mobile                                | si                                                               | string           | Click Close |
            | user userState                               | logado                                                           | string           | Click Close |
            | user segment global                          | 003001                                                           | string           | Click Close |
            | profile ID                                   | profileID                                                        | regexp named     | Click Close |
            | user gender                                  | gender                                                           | regexp named     | Click Close |
            | user age                                     | age                                                              | regexp named     | Click Close |
            | internal campaign attributes location        | dashboard--superior--                                            | string           | Click Close |
            | internal campaign attributes campaign format | banner crm                                                       | string           | Click Close |
            | internal campaign attributes collective code |                                                                  | string           | Click Close |
            | internal campaign attributes campaign name   | -recibir ofertas de credito                                      | string           | Click Close |
            | internal campaign attributes product         |                                                                  | string           | Click Close |
            | internal campaign attributes product code    |                                                                  | string           | Click Close |
            | internal campaign attributes quantity        |                                                                  | string           | Click Close |
            | internal campaign event name                 | IntCmpClose                                                      | string           | Click Close |
            | internal campaign site action name           | dashboard--superior--:banner crm::-recibir ofertas de credito::: | string           | Click Close |
            | optimization attributes                      |                                                                  | empty array      | Click Close |
            | application                                  |                                                                  | empty str object | Click Close |
            | products attributes                          |                                                                  | empty array      | Click Close |
