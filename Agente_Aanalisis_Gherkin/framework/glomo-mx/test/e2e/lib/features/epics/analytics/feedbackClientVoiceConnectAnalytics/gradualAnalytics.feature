@feedbackClientVoiceConnectAnalytics @analyticsGradual
Feature: Analytics - Gradual

    @ANA_EVENT_GFA001
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Gradual ANALYTICS PAGE VIEW - Successful showing my conversations feedback form
        Given a user with the following criteria
            | criteria            |
            | gradual my conversations |
        And the user accesses to my conversations operative
        And the analytics interceptor service is initiated
        When the user is presented with the "my conversations" survey
        Then the analytics events contains the following variables
            | item	                  | value	                                                                    | type         | event     |
            | analytics	              | analytics/glomo_base	                                                    | json schema  | Page View |
            | version DL              | 20250414_5.0	                                                            | string       | Page View |
            | page name	              | app:privada:personas:gradual myconversations:0 initgradual:helpmodalpreform | string       | Page View |
            | level 1	              | gradual myconversations                                                     | string       | Page View |
            | level 2	              | 0 initgradual                                                               | string       | Page View |
            | level 3	              | helpmodalpreform                                                            | string       | Page View |
            | language	              | ES                                                                          | string       | Page View |
            | page area	              | privada                                                                     | string       | Page View |
            | page intent             | informacion                                                                 | string       | Page View |
            | channel                 | online                                                                      | string       | Page View |
            | page instance ID        | de                                                                          | string       | Page View |
            | page info version       | appVersion                                                                  | regexp named | Page View |
            | page segment            | personas                                                                    | string       | Page View |
            | sysEnv	              | app                                                                         | string       | Page View |
            | business unit	          | BBVA Mexico                                                                 | string       | Page View |
            | site app name	          | App BBVA Mexico                                                             | string       | Page View |
            | project name	          | Glomo                                                                       | string       | Page View |
            | device mobile	          | si                                                                          | string       | Page View |
            | user userState	      | logado                                                                      | string       | Page View |
            | user segment global     | 003001                                                                      | string       | Page View |
            | profile ID	          | profileID                                                                   | regexp named | Page View |
            | user gender	          | gender                                                                      | regexp named | Page View |
            | user age	              | age                                                                         | regexp named | Page View |

    @ANA_EVENT_GFA002
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Gradual ANALYTICS PAGE VIEW - Rate my conversations feedback form
        Given a user with the following criteria
            | criteria            |
            | gradual my conversations |
        And the user accesses to my conversations operative
        And the user is presented with the "my conversations" survey
        And the analytics interceptor service is initiated
        When the user selects a rating from my conversations form
        Then the analytics events contains the following variables
            | item	                  | value	                                                                     | type         | event     |
            | analytics	              | analytics/glomo_base	                                                     | json schema  | Page View |
            | version DL              | 20250414_5.0	                                                             | string       | Page View |
            | page name	              | app:privada:personas:gradual myconversations:0 initgradual:helpmodalmainform | string       | Page View |
            | level 1	              | gradual myconversations                                                      | string       | Page View |
            | level 2	              | 0 initgradual                                                                | string       | Page View |
            | level 3	              | helpmodalmainform                                                            | string       | Page View |
            | language	              | ES                                                                           | string       | Page View |
            | page area	              | privada                                                                      | string       | Page View |
            | page intent             | informacion                                                                  | string       | Page View |
            | channel                 | online                                                                       | string       | Page View |
            | page instance ID        | de                                                                           | string       | Page View |
            | page info version       | appVersion                                                                   | regexp named | Page View |
            | page segment            | personas                                                                     | string       | Page View |
            | sysEnv	              | app                                                                          | string       | Page View |
            | business unit	          | BBVA Mexico                                                                  | string       | Page View |
            | site app name	          | App BBVA Mexico                                                              | string       | Page View |
            | project name	          | Glomo                                                                        | string       | Page View |
            | device mobile	          | si                                                                           | string       | Page View |
            | user userState	      | logado                                                                       | string       | Page View |
            | user segment global     | 003001                                                                       | string       | Page View |
            | profile ID	          | profileID                                                                    | regexp named | Page View |
            | user gender	          | gender                                                                       | regexp named | Page View |
            | user age	              | age                                                                          | regexp named | Page View |

    @ANA_EVENT_GFA003
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Gradual ANALYTICS PAGE VIEW - Successful rating my conversations feedback form
        Given a user with the following criteria
            | criteria            |
            | gradual my conversations |
        And the user accesses to my conversations operative
        And the user is presented with the "my conversations" survey
        And the user rates "my conversations analytics" flow
        And the analytics interceptor service is initiated
        When the user completes feedback form successfully from my conversations form
        Then the analytics events contains the following variables
            | item	                  | value	                                                    | type         | event     |
            | analytics	              | analytics/glomo_base	                                    | json schema  | Page View |
            | version DL              | 20250414_5.0	                                            | string       | Page View |
            | page name	              | app:privada:personas:gradual myconversations:pagina exitosa | string       | Page View |
            | level 1	              | gradual myconversations                                     | string       | Page View |
            | level 2	              | pagina exitosa                                              | string       | Page View |
            | language	              | ES                                                          | string       | Page View |
            | page area	              | privada                                                     | string       | Page View |
            | page intent             | informacion                                                 | string       | Page View |
            | channel                 | online                                                      | string       | Page View |
            | page instance ID        | de                                                          | string       | Page View |
            | page info version       | appVersion                                                  | regexp named | Page View |
            | page segment            | personas                                                    | string       | Page View |
            | sysEnv	              | app                                                         | string       | Page View |
            | business unit	          | BBVA Mexico                                                 | string       | Page View |
            | site app name	          | App BBVA Mexico                                             | string       | Page View |
            | project name	          | Glomo                                                       | string       | Page View |
            | device mobile	          | si                                                          | string       | Page View |
            | user userState	      | logado                                                      | string       | Page View |
            | user segment global     | 003001                                                      | string       | Page View |
            | profile ID	          | profileID                                                   | regexp named | Page View |
            | user gender	          | gender                                                      | regexp named | Page View |
            | user age	              | age                                                         | regexp named | Page View |

    @ANA_EVENT_GFA004
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Gradual ANALYTICS PAGE VIEW - Successful showing logout feedback form
        Given a user with the following criteria
            | criteria       |
            | gradual logout |
        And the user ends the session
        And the analytics interceptor service is initiated
        When the user is presented with the "log out" survey
        Then the analytics events contains the following variables
            | item	                  | value	                                                           | type         | event     |
            | analytics	              | analytics/glomo_base	                                           | json schema  | Page View |
            | version DL              | 20250414_5.0	                                                   | string       | Page View |
            | page name	              | app:privada:personas:gradual logout:0 initgradual:helpmodalpreform | string       | Page View |
            | level 1	              | gradual logout                                                     | string       | Page View |
            | level 2	              | 0 initgradual                                                      | string       | Page View |
            | level 3	              | helpmodalpreform                                                   | string       | Page View |
            | language	              | ES                                                                 | string       | Page View |
            | page area	              | privada                                                            | string       | Page View |
            | page intent             | informacion                                                        | string       | Page View |
            | channel                 | online                                                             | string       | Page View |
            | page instance ID        | de                                                                 | string       | Page View |
            | page info version       | appVersion                                                         | regexp named | Page View |
            | page segment            | personas                                                           | string       | Page View |
            | sysEnv	              | app                                                                | string       | Page View |
            | business unit	          | BBVA Mexico                                                        | string       | Page View |
            | site app name	          | App BBVA Mexico                                                    | string       | Page View |
            | project name	          | Glomo                                                              | string       | Page View |
            | device mobile	          | si                                                                 | string       | Page View |
            | user userState	      | logado                                                             | string       | Page View |
            | user segment global     | 003001                                                             | string       | Page View |
            | profile ID	          | profileID                                                          | regexp named | Page View |
            | user gender	          | gender                                                             | regexp named | Page View |
            | user age	              | age                                                                | regexp named | Page View |

    @ANA_EVENT_GFA005
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Gradual ANALYTICS PAGE VIEW - Rate gradual logout feedback form
        Given a user with the following criteria
            | criteria            |
            | gradual logout      |
        And the user ends the session
        And the user is presented with the "log out" survey
        And the analytics interceptor service is initiated
        When the user selects a rating
        Then the analytics events contains the following variables
            | item	                  | value	                                                            | type         | event     |
            | analytics	              | analytics/glomo_base	                                            | json schema  | Page View |
            | version DL              | 20250414_5.0	                                                    | string       | Page View |
            | page name	              | app:privada:personas:gradual logout:0 initgradual:helpmodalmainform | string       | Page View |
            | level 1	              | gradual logout                                                      | string       | Page View |
            | level 2	              | 0 initgradual                                                       | string       | Page View |
            | level 3	              | helpmodalmainform                                                   | string       | Page View |
            | language	              | ES                                                                  | string       | Page View |
            | page area	              | privada                                                             | string       | Page View |
            | page intent             | informacion                                                         | string       | Page View |
            | channel                 | online                                                              | string       | Page View |
            | page instance ID        | de                                                                  | string       | Page View |
            | page info version       | appVersion                                                          | regexp named | Page View |
            | page segment            | personas                                                            | string       | Page View |
            | sysEnv	              | app                                                                 | string       | Page View |
            | business unit	          | BBVA Mexico                                                         | string       | Page View |
            | site app name	          | App BBVA Mexico                                                     | string       | Page View |
            | project name	          | Glomo                                                               | string       | Page View |
            | device mobile	          | si                                                                  | string       | Page View |
            | user userState	      | logado                                                              | string       | Page View |
            | user segment global     | 003001                                                              | string       | Page View |
            | profile ID	          | profileID                                                           | regexp named | Page View |
            | user gender	          | gender                                                              | regexp named | Page View |
            | user age	              | age                                                                 | regexp named | Page View |

    @ANA_EVENT_GFA006
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Gradual ANALYTICS PAGE VIEW - Successful rating gradual logout feedback form
        Given a user with the following criteria
            | criteria            |
            | gradual logout      |
        And the user ends the session
        And the user is presented with the "log out" survey
        And the user rates "log out analytics" flow
        And the analytics interceptor service is initiated
        When the user completes feedback form successfully
        Then the analytics events contains the following variables
            | item	                  | value	                                           | type         | event     |
            | analytics	              | analytics/glomo_base	                           | json schema  | Page View |
            | version DL              | 20250414_5.0	                                   | string       | Page View |
            | page name	              | app:privada:personas:gradual logout:pagina exitosa | string       | Page View |
            | level 1	              | gradual logout                                     | string       | Page View |
            | level 2	              | pagina exitosa                                     | string       | Page View |
            | language	              | ES                                                 | string       | Page View |
            | page area	              | privada                                            | string       | Page View |
            | page intent             | informacion                                        | string       | Page View |
            | channel                 | online                                             | string       | Page View |
            | page instance ID        | de                                                 | string       | Page View |
            | page info version       | appVersion                                         | regexp named | Page View |
            | page segment            | personas                                           | string       | Page View |
            | sysEnv	              | app                                                | string       | Page View |
            | business unit	          | BBVA Mexico                                        | string       | Page View |
            | site app name	          | App BBVA Mexico                                    | string       | Page View |
            | project name	          | Glomo                                              | string       | Page View |
            | device mobile	          | si                                                 | string       | Page View |
            | user userState	      | logado                                             | string       | Page View |
            | user segment global     | 003001                                             | string       | Page View |
            | profile ID	          | profileID                                          | regexp named | Page View |
            | user gender	          | gender                                             | regexp named | Page View |
            | user age	              | age                                                | regexp named | Page View |
