@profilePostalAddressManagementAnalytics
Feature: Analytics - Profile Postal Address Management

    @ANA_EVENT_PAM001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user accesses to address screen - App On Click Start
        Given a user with the following criteria
            | criteria                  |
            | postal address management |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses to add address section
        Then the analytics events contains the following variables
            | item                    | value                       | type         | event              |
            | analytics               | analytics/glomo_base        | json schema  | App On Click Start |
            | version DL              | 20250414_5.0                | string       | App On Click Start |
            | page name               | app:privada:personas:perfil | string       | App On Click Start |
            | level 1                 | perfil                      | string       | App On Click Start |
            | language                | ES                          | string       | App On Click Start |
            | page area               | privada                     | string       | App On Click Start |
            | page intent             | informacion                 | string       | App On Click Start |
            | channel                 | online                      | string       | App On Click Start |
            | page instance ID        | de                          | string       | App On Click Start |
            | page info version       | appVersion                  | regexp named | App On Click Start |
            | page segment            | personas                    | string       | App On Click Start |
            | sysEnv                  | app                         | string       | App On Click Start |
            | business unit           | BBVA Mexico                 | string       | App On Click Start |
            | site app name           | App BBVA Mexico             | string       | App On Click Start |
            | project name            | Glomo                       | string       | App On Click Start |
            | device mobile           | si                          | string       | App On Click Start |
            | user userState          | logado                      | string       | App On Click Start |
            | user segment global     | 003001                      | string       | App On Click Start |
            | profile ID              | profileID                   | regexp named | App On Click Start |
            | user gender             | gender                      | regexp named | App On Click Start |
            | user age                | age                         | regexp named | App On Click Start |
            | internal campaign       |                             | empty array  | App On Click Start |
            | optimization attributes |                             | empty array  | App On Click Start |
            | products attributes     |                             | empty array  | App On Click Start |
            | user segment profile    | perfil                      | string       | App On Click Start |
            | global application      | manage postal address       | string       | App On Click Start |
            | application name        | gestionar direccion         | string       | App On Click Start |
            | application type        | autogestion                 | string       | App On Click Start |
            | fulfillment model       | online                      | string       | App On Click Start |
            | application step        | perfil                      | string       | App On Click Start |

    @ANA_EVENT_PAM002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user accesses to address screen - Page View
        Given a user with the following criteria
            | criteria                  |
            | postal address management |
        And the user accesses to profile screen
        And the analytics interceptor service is initiated
        When the user accesses to add address section
        Then the analytics events contains the following variables
            | item                    | value                                                       | type         | event     |
            | analytics               | analytics/glomo_base                                        | json schema  | Page View |
            | version DL              | 20250414_5.0                                                | string       | Page View |
            | page name               | app:privada:personas:gestionar direccion:informacion previa | string       | Page View |
            | level 1                 | gestionar direccion                                         | string       | Page View |
            | level 2                 | informacion previa                                          | string       | Page View |
            | language                | ES                                                          | string       | Page View |
            | page area               | privada                                                     | string       | Page View |
            | page intent             | informacion                                                 | string       | Page View |
            | channel                 | online                                                      | string       | Page View |
            | page instance ID        | de                                                          | string       | Page View |
            | page info version       | appVersion                                                  | regexp named | Page View |
            | page segment            | personas                                                    | string       | Page View |
            | sysEnv                  | app                                                         | string       | Page View |
            | business unit           | BBVA Mexico                                                 | string       | Page View |
            | site app name           | App BBVA Mexico                                             | string       | Page View |
            | project name            | Glomo                                                       | string       | Page View |
            | device mobile           | si                                                          | string       | Page View |
            | user userState          | logado                                                      | string       | Page View |
            | user segment global     | 003001                                                      | string       | Page View |
            | profile ID              | profileID                                                   | regexp named | Page View |
            | user gender             | gender                                                      | regexp named | Page View |
            | user age                | age                                                         | regexp named | Page View |
            | internal campaign       |                                                             | empty array  | Page View |
            | optimization attributes |                                                             | empty array  | Page View |
            | products attributes     |                                                             | empty array  | Page View |

    @ANA_EVENT_PAM003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user observes the receipt type list - Page View
        Given a user with the following criteria
            | criteria                  |
            | postal address management |
        And the user accesses to add address section
        And the user opens the "multistep" modal
        And the analytics interceptor service is initiated
        When the user opens the receipt type list
        Then the analytics events contains the following variables
            | item                    | value                                                | type         | event     |
            | analytics               | analytics/glomo_base                                 | json schema  | Page View |
            | version DL              | 20250414_5.0                                         | string       | Page View |
            | page name               | app:privada:personas:gestionar direccion:comprobante | string       | Page View |
            | level 1                 | gestionar direccion                                  | string       | Page View |
            | level 2                 | comprobante                                          | string       | Page View |
            | language                | ES                                                   | string       | Page View |
            | page area               | privada                                              | string       | Page View |
            | page intent             | informacion                                          | string       | Page View |
            | channel                 | online                                               | string       | Page View |
            | page instance ID        | de                                                   | string       | Page View |
            | page info version       | appVersion                                           | regexp named | Page View |
            | page segment            | personas                                             | string       | Page View |
            | sysEnv                  | app                                                  | string       | Page View |
            | business unit           | BBVA Mexico                                          | string       | Page View |
            | site app name           | App BBVA Mexico                                      | string       | Page View |
            | project name            | Glomo                                                | string       | Page View |
            | device mobile           | si                                                   | string       | Page View |
            | user userState          | logado                                               | string       | Page View |
            | user segment global     | 003001                                               | string       | Page View |
            | profile ID              | profileID                                            | regexp named | Page View |
            | user gender             | gender                                               | regexp named | Page View |
            | user age                | age                                                  | regexp named | Page View |
            | internal campaign       |                                                      | empty array  | Page View |
            | optimization attributes |                                                      | empty array  | Page View |
            | products attributes     |                                                      | empty array  | Page View |

    @ANA_EVENT_PAM004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user observes the media source modal - Page View
        Given a user with the following criteria
            | criteria                  |
            | postal address management |
        And the user accesses to add address section
        And the user opens the "multistep" modal
        And the user opens the receipt type list and selects the "electricity bill"
        And the analytics interceptor service is initiated
        When the user opens the "media source" modal
        Then the analytics events contains the following variables
            | item                    | value                                                                  | type         | event     |
            | analytics               | analytics/glomo_base                                                   | json schema  | Page View |
            | version DL              | 20250414_5.0                                                           | string       | Page View |
            | page name               | app:privada:personas:gestionar direccion:comprobante:subir comprobante | string       | Page View |
            | level 1                 | gestionar direccion                                                    | string       | Page View |
            | level 2                 | comprobante                                                            | string       | Page View |
            | level 3                 | subir comprobante                                                      | string       | Page View |
            | language                | ES                                                                     | string       | Page View |
            | page area               | privada                                                                | string       | Page View |
            | page intent             | informacion                                                            | string       | Page View |
            | channel                 | online                                                                 | string       | Page View |
            | page instance ID        | de                                                                     | string       | Page View |
            | page info version       | appVersion                                                             | regexp named | Page View |
            | page segment            | personas                                                               | string       | Page View |
            | sysEnv                  | app                                                                    | string       | Page View |
            | business unit           | BBVA Mexico                                                            | string       | Page View |
            | site app name           | App BBVA Mexico                                                        | string       | Page View |
            | project name            | Glomo                                                                  | string       | Page View |
            | device mobile           | si                                                                     | string       | Page View |
            | user userState          | logado                                                                 | string       | Page View |
            | user segment global     | 003001                                                                 | string       | Page View |
            | profile ID              | profileID                                                              | regexp named | Page View |
            | user gender             | gender                                                                 | regexp named | Page View |
            | user age                | age                                                                    | regexp named | Page View |
            | internal campaign       |                                                                        | empty array  | Page View |
            | optimization attributes |                                                                        | empty array  | Page View |
            | products attributes     |                                                                        | empty array  | Page View |

    @ANA_EVENT_PAM005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The user chooses the take photo from media source modal - Page View
        Given a user with the following criteria
            | criteria                  |
            | postal address management |
        And the user accesses to add address section
        And the user opens the "multistep" modal
        And the user opens the receipt type list and selects the "electricity bill"
        And the user opens the "media source" modal
        And the analytics interceptor service is initiated
        When the user selects the "take photo" media source
        Then the analytics events contains the following variables
            | item                    | value                                                                         | type         | event     |
            | analytics               | analytics/glomo_base                                                          | json schema  | Page View |
            | version DL              | 20250414_5.0                                                                  | string       | Page View |
            | page name               | app:privada:personas:gestionar direccion:comprobante:recomendacion tomar foto | string       | Page View |
            | level 1                 | gestionar direccion                                                           | string       | Page View |
            | level 2                 | comprobante                                                                   | string       | Page View |
            | level 3                 | recomendacion tomar foto                                                      | string       | Page View |
            | language                | ES                                                                            | string       | Page View |
            | page area               | privada                                                                       | string       | Page View |
            | page intent             | informacion                                                                   | string       | Page View |
            | channel                 | online                                                                        | string       | Page View |
            | page instance ID        | de                                                                            | string       | Page View |
            | page info version       | appVersion                                                                    | regexp named | Page View |
            | page segment            | personas                                                                      | string       | Page View |
            | sysEnv                  | app                                                                           | string       | Page View |
            | business unit           | BBVA Mexico                                                                   | string       | Page View |
            | site app name           | App BBVA Mexico                                                               | string       | Page View |
            | project name            | Glomo                                                                         | string       | Page View |
            | device mobile           | si                                                                            | string       | Page View |
            | user userState          | logado                                                                        | string       | Page View |
            | user segment global     | 003001                                                                        | string       | Page View |
            | profile ID              | profileID                                                                     | regexp named | Page View |
            | user gender             | gender                                                                        | regexp named | Page View |
            | user age                | age                                                                           | regexp named | Page View |
            | internal campaign       |                                                                               | empty array  | Page View |
            | optimization attributes |                                                                               | empty array  | Page View |
            | products attributes     |                                                                               | empty array  | Page View |

    @ANA_EVENT_PAM006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario Outline: The user chooses the <media_source> media source - Internal Link
        Given a user with the following criteria
            | criteria                  |
            | postal address management |
        And the user accesses to add address section
        And the user opens the "multistep" modal
        And the user opens the receipt type list and selects the "electricity bill"
        And the user opens the "media source" modal
        And the analytics interceptor service is initiated
        When the user selects the "<media_source>" media source
        Then the analytics events contains the following variables
            | item                    | value                                                                  | type            | event         |
            | analytics               | analytics/glomo_base                                                   | json schema     | Internal Link |
            | version DL              | 20250414_5.0                                                           | string          | Internal Link |
            | page name               | app:privada:personas:gestionar direccion:comprobante:subir comprobante | string          | Internal Link |
            | level 1                 | gestionar direccion                                                    | string          | Internal Link |
            | level 2                 | comprobante                                                            | string          | Internal Link |
            | level 3                 | subir comprobante                                                      | string          | Internal Link |
            | language                | ES                                                                     | string          | Internal Link |
            | page area               | privada                                                                | string          | Internal Link |
            | page intent             | informacion                                                            | string          | Internal Link |
            | channel                 | online                                                                 | string          | Internal Link |
            | page instance ID        | de                                                                     | string          | Internal Link |
            | page info version       | appVersion                                                             | regexp named    | Internal Link |
            | page segment            | personas                                                               | string          | Internal Link |
            | sysEnv                  | app                                                                    | string          | Internal Link |
            | business unit           | BBVA Mexico                                                            | string          | Internal Link |
            | site app name           | App BBVA Mexico                                                        | string          | Internal Link |
            | project name            | Glomo                                                                  | string          | Internal Link |
            | device mobile           | si                                                                     | string          | Internal Link |
            | user userState          | logado                                                                 | string          | Internal Link |
            | user segment global     | 003001                                                                 | string          | Internal Link |
            | profile ID              | profileID                                                              | regexp named    | Internal Link |
            | user gender             | gender                                                                 | regexp named    | Internal Link |
            | user age                | age                                                                    | regexp named    | Internal Link |
            | link name               | <link_name>                                                            | string          | Internal Link |
            | internal campaign       |                                                                        | empty array     | Internal Link |
            | optimization attributes |                                                                        | empty array     | Internal Link |
            | products attributes     |                                                                        | empty array     | Internal Link |

        Examples:
            | media_source        | link_name            |
            | take photo          | tomar foto           |
            | choose from gallery | elegir de la galeria |
            | choose a pdf        | elegir archivo pdf   |
