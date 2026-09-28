@experiencesAnalytics
Feature: Analytics Experiences Section
    @ANA_EXP001
    @analytics
    @MX
    @web @ios @android
    @web-done
    @vbank
    @backend(test)
    Scenario: Access Goals Experience from Dashboard
        Given a user with the following criteria
            | criteria                  |
            | active metas saving goals |
        When the user accesses to dashboard
        And the analytics interceptor service is initiated
        And the user accesses to goals from experiences section
        Then the analytics events contains the following variables
            | item                    | value                                | type             | event         |
            | analytics               | analytics/glomo_base                 | json schema      | Internal Link |
            | version DL              | 20250414_5.0                         | string           | Internal Link |
            | page name               | app:privada:personas:posicion global | string           | Internal Link |
            | level 1                 | posicion global                      | string           | Internal Link |
            | language                | ES                                   | string           | Internal Link |
            | page area               | privada                              | string           | Internal Link |
            | page intent             | informacion                          | string           | Internal Link |
            | channel                 | online                               | string           | Internal Link |
            | page instance ID        | de                                   | string           | Internal Link |
            | page info version       | appVersion                           | regexp named     | Internal Link |
            | page segment            | personas                             | string           | Internal Link |
            | sysEnv                  | app                                  | string           | Internal Link |
            | business unit           | BBVA Mexico                          | string           | Internal Link |
            | site app name           | App BBVA Mexico                      | string           | Internal Link |
            | project name            | PFM                                  | string           | Internal Link |
            | link name               | ver mas metas                        | string           | Internal Link |
            | device mobile           | si                                   | string           | Internal Link |
            | user userState          | logado                               | string           | Internal Link |
            | profile ID              | profileID                            | regexp named     | Internal Link |
            | user segment global     | 003001                               | string           | Internal Link |
            | user gender             | gender                               | regexp named     | Internal Link |
            | user age                | age                                  | regexp named     | Internal Link |
            | fulfillment model       | online                               | string           | Internal Link |
            | internal campaign       |                                      | empty array      | Internal Link |
            | optimization attributes |                                      | empty array      | Internal Link |
            | application             |                                      | empty str object | Internal Link |
            | products attributes     |                                      | empty array      | Internal Link |
