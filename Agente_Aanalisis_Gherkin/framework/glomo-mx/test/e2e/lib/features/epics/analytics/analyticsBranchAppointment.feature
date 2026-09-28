@analyticsBranchAppointment
Feature: Analytics - Branch Appointment Management

    @ANA_BA001
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: Access to branch appointment - app on click start, app page visit
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        When the user accesses to the "cinco de mayo" branch card
        And the analytics interceptor service is initiated
        And the user opens request branch appointment
        Then the analytics events contains the following variables
        | item                    | value                                                      | type             | event                                    |
        | analytics               | analytics/glomo_base                                       | json schema      | App On Click Start, App Page Visit       |
        | version DL              | 20250414_5.0                                               | string           | App On Click Start, App Page Visit       |
        | page name               | app:privada:general:localizador                            | string           | App On Click Start                       |
        | page name               | app:privada:personas:pedir turno:1 tipo de tramite         | string           | App Page Visit                           |
        | level 1                 | localizador                                                | string           | App On Click Start                       |
        | level 1                 | pedir turno                                                | string           | App Page Visit                           |
        | level 2                 | 1 tipo de tramite                                          | string           | App Page Visit                           |
        | application step        | pedir turno                                                | string           | App On Click Start                       |
        | application step        | 1 tipo de tramite                                          | string           | App Page Visit                           |
        | application type        | autogestion                                                | string           | App On Click Start,App Page Visit        |
        | application name        | pedir turno                                                | string           | App On Click Start,App Page Visit        |
        | global application      | request branch appointment                                 | string           | App On Click Start,App Page Visit        |
        | language                | ES                                                         | string           | App On Click Start,App Page Visit        |
        | page area               | privada                                                    | string           | App On Click Start,App Page Visit        |
        | page intent             | informacion                                                | string           | App On Click Start,App Page Visit        |
        | channel                 | online                                                     | string           | App On Click Start,App Page Visit        |
        | page instance ID        | de                                                         | string           | App On Click Start,App Page Visit        |
        | page info version       | appVersion                                                 | regexp named     | App On Click Start,App Page Visit        |
        | page segment            | general                                                    | string           | App On Click Start                       |
        | page segment            | personas                                                   | string           | App Page Visit                           |
        | sysEnv                  | app                                                        | string           | App On Click Start,App Page Visit        |
        | business unit           | BBVA Mexico                                                | string           | App On Click Start,App Page Visit        |
        | site app name           | App BBVA Mexico                                            | string           | App On Click Start,App Page Visit        |
        | project name            | Glomo                                                      | string           | App On Click Start,App Page Visit        |
        | device mobile           | si                                                         | string           | App On Click Start,App Page Visit        |
        | user userState          | logado                                                     | string           | App On Click Start,App Page Visit        |
        | user segment global     | 003001                                                     | string           | App On Click Start,App Page Visit        |
        | profile ID              | profileID                                                  | regexp named     | App On Click Start,App Page Visit        |
        | user gender             | gender                                                     | regexp named     | App On Click Start,App Page Visit        |
        | user age                | age                                                        | regexp named     | App On Click Start,App Page Visit        |
        | internal campaign       |                                                            | empty array      | App On Click Start, App Page Visit       |
        | optimization attributes |                                                            | empty array      | App On Click Start, App Page Visit       |
        | products attributes     |                                                            | empty array      | App On Click Start, App Page Visit       |

    @ANA_BA002
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: Select type of branch appointment - app started
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        When the user accesses to the "cinco de mayo" branch to get an appointment
        And the analytics interceptor service is initiated
        And the user opens the "procedures" options menu
        Then the analytics events contains the following variables
        | item                    | value                                                      | type             | event               |
        | analytics               | analytics/glomo_base                                       | json schema      | App Started         |
        | version DL              | 20250414_5.0                                               | string           | App Started         |
        | page name               | app:privada:personas:pedir turno:1 tipo de tramite         | string           | App Started         |
        | level 1                 | pedir turno                                                | string           | App Started         |
        | level 2                 | 1 tipo de tramite                                          | string           | App Started         |
        | global application      | request branch appointment                                 | string           | App Started         |
        | application name        | pedir turno                                                | string           | App Started         |
        | application type        | autogestion                                                | string           | App Started         |
        | application step        | elegir tipo tramite                                        | string           | App Started         |
        | language                | ES                                                         | string           | App Started         |
        | page area               | privada                                                    | string           | App Started         |
        | page intent             | informacion                                                | string           | App Started         |
        | channel                 | online                                                     | string           | App Started         |
        | page instance ID        | de                                                         | string           | App Started         |
        | page info version       | appVersion                                                 | regexp named     | App Started         |
        | page segment            | personas                                                   | string           | App Started         |
        | sysEnv                  | app                                                        | string           | App Started         |
        | business unit           | BBVA Mexico                                                | string           | App Started         |
        | site app name           | App BBVA Mexico                                            | string           | App Started         |
        | project name            | Glomo                                                      | string           | App Started         |
        | device mobile           | si                                                         | string           | App Started         |
        | user userState          | logado                                                     | string           | App Started         |
        | user segment global     | 003001                                                     | string           | App Started         |
        | profile ID              | profileID                                                  | regexp named     | App Started         |
        | user gender             | gender                                                     | regexp named     | App Started         |
        | user age                | age                                                        | regexp named     | App Started         |
        | internal campaign       |                                                            | empty array      | App Started         |
        | optimization attributes |                                                            | empty array      | App Started         |
        | products attributes     |                                                            | empty array      | App Started         |

    @ANA_BA003
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: Select Date of branch appointment - app step 2
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        When the user accesses to the "cinco de mayo" branch to get an appointment
        And the analytics interceptor service is initiated
        And the user goes to the "time and date" step
        Then the analytics events contains the following variables
        | item                    | value                                                      | type             | event              |
        | analytics               | analytics/glomo_base                                       | json schema      | App Step 2         |
        | version DL              | 20250414_5.0                                               | string           | App Step 2         |
        | page name               | app:privada:personas:pedir turno:2 horario                 | string           | App Step 2         |
        | level 1                 | pedir turno                                                | string           | App Step 2         |
        | level 2                 | 2 horario                                                  | string           | App Step 2         |
        | global application      | request branch appointment                                 | string           | App Step 2         |
        | application name        | pedir turno                                                | string           | App Step 2         |
        | application type        | autogestion                                                | string           | App Step 2         |
        | application step        | 2 horario                                                  | string           | App Step 2         |
        | application typology    | contrataciones                                             | string           | App Step 2         |
        | language                | ES                                                         | string           | App Step 2         |
        | page area               | privada                                                    | string           | App Step 2         |
        | page intent             | informacion                                                | string           | App Step 2         |
        | channel                 | online                                                     | string           | App Step 2         |
        | page instance ID        | de                                                         | string           | App Step 2         |
        | page info version       | appVersion                                                 | regexp named     | App Step 2         |
        | page segment            | personas                                                   | string           | App Step 2         |
        | sysEnv                  | app                                                        | string           | App Step 2         |
        | business unit           | BBVA Mexico                                                | string           | App Step 2         |
        | site app name           | App BBVA Mexico                                            | string           | App Step 2         |
        | project name            | Glomo                                                      | string           | App Step 2         |
        | device mobile           | si                                                         | string           | App Step 2         |
        | user userState          | logado                                                     | string           | App Step 2         |
        | user segment global     | 003001                                                     | string           | App Step 2         |
        | profile ID              | profileID                                                  | regexp named     | App Step 2         |
        | user gender             | gender                                                     | regexp named     | App Step 2         |
        | user age                | age                                                        | regexp named     | App Step 2         |
        | internal campaign       |                                                            | empty array      | App Step 2         |
        | optimization attributes |                                                            | empty array      | App Step 2         |
        | products attributes     |                                                            | empty array      | App Step 2         |

    @ANA_BA004
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: View summary of request branch appointment - app step 3
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user starts the application at date:
            | hour   | 9    |
            | day    | 19   |
            | month  | 5    |
            | year   | 2023 |
        When the user accesses to the "cinco de mayo" branch to get an appointment
        And the analytics interceptor service is initiated
        And the user goes to the "time and date" step
        And the user selects the "2023-06-22" date
        And the user goes to the "summary" step
        Then the analytics events contains the following variables
        | item                    | value                                                      | type             | event              |
        | analytics               | analytics/glomo_base                                       | json schema      | App Step 3         |
        | version DL              | 20250414_5.0                                               | string           | App Step 3         |
        | page name               | app:privada:personas:pedir turno:3 confirmacion            | string           | App Step 3         |
        | level 1                 | pedir turno                                                | string           | App Step 3         |
        | level 2                 | 3 confirmacion                                             | string           | App Step 3         |
        | global application      | request branch appointment                                 | string           | App Step 3         |
        | application name        | pedir turno                                                | string           | App Step 3         |
        | application type        | autogestion                                                | string           | App Step 3         |
        | application step        | 3 confirmacion                                             | string           | App Step 3         |
        | application typology    | contrataciones                                             | string           | App Step 3         |
        | application process     | 15:00 230622                                               | string           | App Step 3         |
        | language                | ES                                                         | string           | App Step 3         |
        | page area               | privada                                                    | string           | App Step 3         |
        | page intent             | informacion                                                | string           | App Step 3         |
        | channel                 | online                                                     | string           | App Step 3         |
        | page instance ID        | de                                                         | string           | App Step 3         |
        | page info version       | appVersion                                                 | regexp named     | App Step 3         |
        | page segment            | personas                                                   | string           | App Step 3         |
        | sysEnv                  | app                                                        | string           | App Step 3         |
        | business unit           | BBVA Mexico                                                | string           | App Step 3         |
        | site app name           | App BBVA Mexico                                            | string           | App Step 3         |
        | project name            | Glomo                                                      | string           | App Step 3         |
        | device mobile           | si                                                         | string           | App Step 3         |
        | user userState          | logado                                                     | string           | App Step 3         |
        | user segment global     | 003001                                                     | string           | App Step 3         |
        | profile ID              | profileID                                                  | regexp named     | App Step 3         |
        | user gender             | gender                                                     | regexp named     | App Step 3         |
        | user age                | age                                                        | regexp named     | App Step 3         |
        | internal campaign       |                                                            | empty array      | App Step 3         |
        | optimization attributes |                                                            | empty array      | App Step 3         |
        | products attributes     |                                                            | empty array      | App Step 3         |

    @ANA_BA005
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: View queue suggestions modal - page view
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        When the user accesses to the "cinco de mayo" branch to get an appointment
        And the analytics interceptor service is initiated
        And the user accesses to the "queue suggestions" modal
        Then the analytics events contains the following variables
        | item                    | value                                                             | type             | event             |
        | analytics               | analytics/glomo_base                                              | json schema      | Page View         |
        | version DL              | 20250414_5.0                                                      | string           | Page View         |
        | page name               | app:privada:personas:pedir turno:1 tipo de tramite:informacion    | string           | Page View         |
        | level 1                 | pedir turno                                                       | string           | Page View         |
        | level 2                 | 1 tipo de tramite                                                 | string           | Page View         |
        | level 3                 | informacion                                                       | string           | Page View         |
        | language                | ES                                                                | string           | Page View         |
        | page area               | privada                                                           | string           | Page View         |
        | page intent             | informacion                                                       | string           | Page View         |
        | channel                 | online                                                            | string           | Page View         |
        | page instance ID        | de                                                                | string           | Page View         |
        | page info version       | appVersion                                                        | regexp named     | Page View         |
        | page segment            | personas                                                          | string           | Page View         |
        | sysEnv                  | app                                                               | string           | Page View         |
        | business unit           | BBVA Mexico                                                       | string           | Page View         |
        | site app name           | App BBVA Mexico                                                   | string           | Page View         |
        | project name            | Glomo                                                             | string           | Page View         |
        | device mobile           | si                                                                | string           | Page View         |
        | user userState          | logado                                                            | string           | Page View         |
        | user segment global     | 003001                                                            | string           | Page View         |
        | profile ID              | profileID                                                         | regexp named     | Page View         |
        | user gender             | gender                                                            | regexp named     | Page View         |
        | user age                | age                                                               | regexp named     | Page View         |

    @ANA_BA006
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: User has an appointment - page view
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        When the user accesses to the "cinco de mayo" branch card
        And the analytics interceptor service is initiated
        And the user opens request branch appointment
        Then the analytics events contains the following variables
        | item                    | value                                                      | type             | event             |
        | analytics               | analytics/glomo_base                                       | json schema      | Page View         |
        | version DL              | 20250414_5.0                                               | string           | Page View         |
        | page name               | app:privada:personas:pedir turno:ya se dispone de turno    | string           | Page View         |
        | level 1                 | pedir turno                                                | string           | Page View         |
        | level 2                 | ya se dispone de turno                                     | string           | Page View         |
        | error page              | ya se dispone de turno                                     | string           | Page View         |
        | language                | ES                                                         | string           | Page View         |
        | page area               | privada                                                    | string           | Page View         |
        | page intent             | informacion                                                | string           | Page View         |
        | channel                 | online                                                     | string           | Page View         |
        | page instance ID        | de                                                         | string           | Page View         |
        | page info version       | appVersion                                                 | regexp named     | Page View         |
        | page segment            | personas                                                   | string           | Page View         |
        | sysEnv                  | app                                                        | string           | Page View         |
        | business unit           | BBVA Mexico                                                | string           | Page View         |
        | site app name           | App BBVA Mexico                                            | string           | Page View         |
        | project name            | Glomo                                                      | string           | Page View         |
        | device mobile           | si                                                         | string           | Page View         |
        | user userState          | logado                                                     | string           | Page View         |
        | user segment global     | 003001                                                     | string           | Page View         |
        | profile ID              | profileID                                                  | regexp named     | Page View         |
        | user gender             | gender                                                     | regexp named     | Page View         |
        | user age                | age                                                        | regexp named     | Page View         |

    @ANA_BA007
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: View time menu - page view
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user starts the application at date:
            | hour   | 9    |
            | day    | 13   |
            | month  | 6    |
            | year   | 2023 |
        When the user accesses to the "cinco de mayo" branch to get an appointment
        And the analytics interceptor service is initiated
        And the user goes to the "time and date" step
        And the user selects the "2023-07-14" date
        And the user opens the "time" options menu
        Then the analytics events contains the following variables
        | item                    | value                                             | type             | event             |
        | analytics               | analytics/glomo_base                              | json schema      | Page View         |
        | version DL              | 20250414_5.0                                      | string           | Page View         |
        | page name               | app:privada:personas:pedir turno:calendario       | string           | Page View         |
        | level 1                 | pedir turno                                       | string           | Page View         |
        | level 2                 | calendario                                        | string           | Page View         |
        | language                | ES                                                | string           | Page View         |
        | page area               | privada                                           | string           | Page View         |
        | page intent             | informacion                                       | string           | Page View         |
        | channel                 | online                                            | string           | Page View         |
        | page instance ID        | de                                                | string           | Page View         |
        | page info version       | appVersion                                        | regexp named     | Page View         |
        | page segment            | personas                                          | string           | Page View         |
        | sysEnv                  | app                                               | string           | Page View         |
        | business unit           | BBVA Mexico                                       | string           | Page View         |
        | site app name           | App BBVA Mexico                                   | string           | Page View         |
        | project name            | Glomo                                             | string           | Page View         |
        | device mobile           | si                                                | string           | Page View         |
        | user userState          | logado                                            | string           | Page View         |
        | user segment global     | 003001                                            | string           | Page View         |
        | profile ID              | profileID                                         | regexp named     | Page View         |
        | user gender             | gender                                            | regexp named     | Page View         |
        | user age                | age                                               | regexp named     | Page View         |

    @ANA_BA008
    @analytics
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: Download the appointment receipt - download link
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user starts the application at date:
            | hour   | 9    |
            | day    | 14   |
            | month  | 6    |
            | year   | 2023 |
        When the user accesses to the "cinco de mayo" branch to get an appointment
        And the analytics interceptor service is initiated
        And the user goes to the "time and date" step
        And the user selects the "2023-07-14" date
        And the user attempts to access the successfuly scheduled appointment screen
        And the user download the appointment receipt
        Then the analytics events contains the following variables
        | item                    | value                                             | type             | event                           |
        | analytics               | analytics/glomo_base                              | json schema      | Download Link,App Completed     |
        | version DL              | 20250414_5.0                                      | string           | Download Link,App Completed     |
        | page name               | app:privada:personas:pedir turno:pagina exitosa   | string           | Download Link,App Completed     |
        | level 1                 | pedir turno                                       | string           | Download Link,App Completed     |
        | level 2                 | pagina exitosa                                    | string           | Download Link,App Completed     |
        | global application      | request branch appointment                        | string           | App Completed                   |
        | application name        | pedir turno                                       | string           | App Completed                   |
        | application type        | autogestion                                       | string           | App Completed                   |
        | application step        | pagina exitosa                                    | string           | App Completed                   |
        | application typology    | contrataciones                                    | string           | App Completed                   |
        | application process     | 15:00 230714                                      | string           | App Completed                   |
        | application state       | finalizado                                        | string           | App Completed                   |
        | link url                | comprobante turno	                              | string           | Download Link                   |
        | language                | ES                                                | string           | Download Link                   |
        | page area               | privada                                           | string           | Download Link                   |
        | page intent             | informacion                                       | string           | Download Link                   |
        | channel                 | online                                            | string           | Download Link                   |
        | page instance ID        | de                                                | string           | Download Link                   |
        | page info version       | appVersion                                        | regexp named     | Download Link                   |
        | page segment            | personas                                          | string           | Download Link                   |
        | sysEnv                  | app                                               | string           | Download Link                   |
        | business unit           | BBVA Mexico                                       | string           | Download Link                   |
        | site app name           | App BBVA Mexico                                   | string           | Download Link                   |
        | project name            | Glomo                                             | string           | Download Link                   |
        | device mobile           | si                                                | string           | Download Link                   |
        | user userState          | logado                                            | string           | Download Link                   |
        | user segment global     | 003001                                            | string           | Download Link                   |
        | profile ID              | profileID                                         | regexp named     | Download Link                   |
        | user gender             | gender                                            | regexp named     | Download Link                   |
        | user age                | age                                               | regexp named     | Download Link                   |
        | internal campaign       |                                                   | empty array      | App Completed                   |
        | optimization attributes |                                                   | empty array      | App Completed                   |
        | products attributes     |                                                   | empty array      | App Completed                   |
