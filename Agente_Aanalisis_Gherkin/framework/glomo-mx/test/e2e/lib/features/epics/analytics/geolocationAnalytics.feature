@geolocationAnalytics
Feature: Analytics - Geolocation

    @ANA_GEO001
    @MX @manual
    @ios @android @web
    @analytics
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: Geolocation - PAGE VIEW - Permission selection page
        Given a user with the following criteria
            | criteria                                   |
            | mandatory geolocation                      |
            | location consent not previously registered |
            | no device location permissions             |
        When the user accesses the screen that asks for location consent
        Then the device contains the following variables
            | item                     | value                                            | type          |
            | analytics                | analytics/glomo_base                             | json schema   |
            | page name                | app:privada:personas:geolocalizacion:dar permiso | string        |
            | level 1                  | geolocalizacion                                  | string        |
            | level 2                  | dar permiso                                      | string        |
            | language                 | ES                                               | string        |
            | page area                | privada                                          | string        |
            | page intent              | informacion                                      | string        |
            | channel                  | online                                           | string        |
            | page instance ID         | de                                               | string        |
            | version DL               | 20250414_5.0                                     | string        |
            | page info version        | appVersion                                       | regexp named  |
            | page segment             | personas                                         | string        |
            | sysEnv                   | app                                              | string        |
            | business unit            | BBVA Mexico                                      | string        |
            | site app name            | App BBVA Mexico                                  | string        |
            | project name             | Glomo                                            | string        |
            | device mobile            | si                                               | string        |
            | user userState           | logado                                           | string        |
            | user age                 | age                                              | regexp named  |
            | user gender              | gender                                           | regexp named  |
            | user segment global      | 003001                                           | string        |
            | profile ID               | profileID                                        | regexp named  |

    @ANA_GEO002
    @MX @manual
    @ios @android @web
    @analytics
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: Geolocation - PAGE VIEW - OTP
        Given a user with the following criteria
            | criteria                                   |
            | mandatory geolocation                      |
            | location consent not previously registered |
            | no device location permissions             |
        When the user agrees to give location consent
        And user validates the consent with otp code
        Then the device contains the following variables
            | item                     | value                                          | type          |
            | analytics                | analytics/glomo_base                           | json schema   |
            | page name                | app:privada:personas:geolocalizacion:otp:token | string        |
            | level 1                  | geolocalizacion                                | string        |
            | level 2                  | otp                                            | string        |
            | level 3                  | token                                          | string        |
            | language                 | ES                                             | string        |
            | page area                | privada                                        | string        |
            | page intent              | informacion                                    | string        |
            | channel                  | online                                         | string        |
            | page instance ID         | de                                             | string        |
            | version DL               | 20250414_5.0                                   | string        |
            | page info version        | appVersion                                     | regexp named  |
            | page segment             | personas                                       | string        |
            | sysEnv                   | app                                            | string        |
            | business unit            | BBVA Mexico                                    | string        |
            | site app name            | App BBVA Mexico                                | string        |
            | project name             | Glomo                                          | string        |
            | device mobile            | si                                             | string        |
            | user userState           | logado                                         | string        |
            | user age                 | age                                            | regexp named  |
            | user gender              | gender                                         | regexp named  |
            | user segment global      | 003001                                         | string        |
            | profile ID               | profileID                                      | regexp named  |

    @ANA_GEO003
    @MX @manual
    @ios @android @web
    @analytics
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: Geolocation - ERROR PAGE - Deny error
        Given a user with the following criteria
            | criteria                                   |
            | mandatory geolocation                      |
            | location consent not previously registered |
            | no device location permissions             |
        When the user agrees to give location consent
        And user validates the consent with otp code
        And the user selects "deny" permission
        And the user visualizes the modal to activate location
        Then the device contains the following variables
            | item                     | value                                                  | type          |
            | analytics                | analytics/glomo_base                                   | json schema   |
            | page name                | app:privada:personas:geolocalizacion:error por denegar | string        |
            | level 1                  | geolocalizacion                                        | string        |
            | level 2                  | error por denegar                                      | string        |
            | error page               | error por denegar                                      | string        |
            | language                 | ES                                                     | string        |
            | page area                | privada                                                | string        |
            | page intent              | informacion                                            | string        |
            | channel                  | online                                                 | string        |
            | page instance ID         | de                                                     | string        |
            | version DL               | 20250414_5.0                                           | string        |
            | page info version        | appVersion                                             | regexp named  |
            | page segment             | personas                                               | string        |
            | sysEnv                   | app                                                    | string        |
            | business unit            | BBVA Mexico                                            | string        |
            | site app name            | App BBVA Mexico                                        | string        |
            | project name             | Glomo                                                  | string        |
            | device mobile            | si                                                     | string        |
            | user userState           | logado                                                 | string        |
            | user age                 | age                                                    | regexp named  |
            | user gender              | gender                                                 | regexp named  |
            | user segment global      | 003001                                                 | string        |
            | profile ID               | profileID                                              | regexp named  |

    @ANA_GEO004
    @MX @manual
    @ios @android @web
    @analytics
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: Geolocation - INTERNAL LINK - Activate location
        Given a user with the following criteria
            | criteria                                   |
            | mandatory geolocation                      |
            | location consent not previously registered |
            | no device location permissions             |
        When the user agrees to give location consent
        And user validates the consent with otp code
        And the user selects "deny" permission
        And the user visualizes the modal to activate location, select Activate location
        Then the device contains the following variables
            | item                     | value                                                  | type          |
            | analytics                | analytics/glomo_base                                   | json schema   |
            | page name                | app:privada:personas:geolocalizacion:error por denegar | string        |
            | level 1                  | geolocalizacion                                        | string        |
            | level 2                  | error por denegar                                      | string        |
            | language                 | ES                                                     | string        |
            | page area                | privada                                                | string        |
            | page intent              | informacion                                            | string        |
            | channel                  | online                                                 | string        |
            | page instance ID         | de                                                     | string        |
            | version DL               | 20250414_5.0                                           | string        |
            | page info version        | appVersion                                             | regexp named  |
            | page segment             | personas                                               | string        |
            | sysEnv                   | app                                                    | string        |
            | business unit            | BBVA Mexico                                            | string        |
            | site app name            | App BBVA Mexico                                        | string        |
            | project name             | Glomo                                                  | string        |
            | link name                | activar ubicacion                                      | string        |
            | device mobile            | si                                                     | string        |
            | user userState           | logado                                                 | string        |
            | user age                 | age                                                    | regexp named  |
            | user gender              | gender                                                 | regexp named  |
            | user segment global      | 003001                                                 | string        |
            | profile ID               | profileID                                              | regexp named  |

    @ANA_GEO005
    @MX @manual
    @ios @android @web
    @analytics
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: Geolocation - EXTERNAL LINK - I want to know more
        Given a user with the following criteria
            | criteria                                   |
            | mandatory geolocation                      |
            | location consent not previously registered |
            | no device location permissions             |
        When the user accesses the screen that asks for location consent
        And the user accesses to know more link
        Then the device contains the following variables
            | item                     | value                                            | type          |
            | analytics                | analytics/glomo_base                             | json schema   |
            | page name                | app:privada:personas:geolocalizacion:dar permiso | string        |
            | level 1                  | geolocalizacion                                  | string        |
            | level 2                  | dar permiso                                      | string        |
            | language                 | ES                                               | string        |
            | page area                | privada                                          | string        |
            | page intent              | informacion                                      | string        |
            | channel                  | online                                           | string        |
            | page instance ID         | de                                               | string        |
            | version DL               | 20250414_5.0                                     | string        |
            | page info version        | appVersion                                       | regexp named  |
            | page segment             | personas                                         | string        |
            | sysEnv                   | app                                              | string        |
            | business unit            | BBVA Mexico                                      | string        |
            | site app name            | App BBVA Mexico                                  | string        |
            | project name             | Glomo                                            | string        |
            | link url                 | quiero saber mas bbva.mx                         | string        |
            | device mobile            | si                                               | string        |
            | user userState           | logado                                           | string        |
            | user age                 | age                                              | regexp named  |
            | user gender              | gender                                           | regexp named  |
            | user segment global      | 003001                                           | string        |
            | profile ID               | profileID                                        | regexp named  |

    @ANA_GEO006
    @MX @manual
    @ios @android @web
    @analytics
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: Geolocation - PAGE VIEW - Privacy Notice
        Given a user with the following criteria
            | criteria                                   |
            | mandatory geolocation                      |
            | location consent not previously registered |
            | no device location permissions             |
        When the user accesses the screen that asks for location consent
        And the user accesses to privacy notice
        Then the device contains the following variables
            | item                     | value                                                 | type          |
            | analytics                | analytics/glomo_base                                  | json schema   |
            | page name                | app:privada:personas:geolocalizacion:aviso privacidad | string        |
            | level 1                  | geolocalizacion                                       | string        |
            | level 2                  | aviso privacidad                                      | string        |
            | language                 | ES                                                    | string        |
            | page area                | privada                                               | string        |
            | page intent              | informacion                                           | string        |
            | channel                  | online                                                | string        |
            | page instance ID         | de                                                    | string        |
            | version DL               | 20250414_5.0                                          | string        |
            | page info version        | appVersion                                            | regexp named  |
            | page segment             | personas                                              | string        |
            | sysEnv                   | app                                                   | string        |
            | business unit            | BBVA Mexico                                           | string        |
            | site app name            | App BBVA Mexico                                       | string        |
            | project name             | Glomo                                                 | string        |
            | device mobile            | si                                                    | string        |
            | user userState           | logado                                                | string        |
            | user age                 | age                                                   | regexp named  |
            | user gender              | gender                                                | regexp named  |
            | user segment global      | 003001                                                | string        |
            | profile ID               | profileID                                             | regexp named  |
