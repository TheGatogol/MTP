@singleAppAnalytics
Feature: Analytics - Single App

    @ANA_SAPP001
    @analytics
    @ios @android @native
    @MX @backend(test) @vbank
    @manual @JIRA.GLOMOGL-30634
    Scenario: The user click on Mi Negocio profile - Analytics Internal Link
        Given a user with the following criteria
            | criteria                  |
            | person business indicator |
        And the user accesses to dashboard
        And the user accesses to the sidebar
        And the user accesses to a new dialog to choose user profile
        And the analytics interceptor service is initiated
        When the user changes profile
        Then the analytics events contains the following variables
            | item                    | value                                | type             | event         |
            | page name               | app:privada:personas:posicion global | string           | Internal Link |
            | level 1                 | posicion global                      | string           | Internal Link |
            | language                | ES                                   | string           | Internal Link |
            | page area               | privada                              | string           | Internal Link |
            | page intent             | informacion                          | string           | Internal Link |
            | channel                 | online                               | string           | Internal Link |
            | page instance ID        | de                                   | string           | Internal Link |
            | version DL              | 20250414_5.0                         | string           | Internal Link |
            | page info version       | appVersion                           | regexp named     | Internal Link |
            | page segment            | personas                             | string           | Internal Link |
            | sysEnv                  | app                                  | string           | Internal Link |
            | business unit           | BBVA Mexico                          | string           | Internal Link |
            | site app name           | App BBVA Mexico                      | string           | Internal Link |
            | project name            | Glomo                                | string           | Internal Link |
            | link name               | click cambiar a perfil mi negocio    | string           | Internal Link |
            | profile ID              | profileID                            | regexp named     | Internal Link |
            | user ID                 |                                      | string           | Internal Link |
            | user segment global     | 003001                               | string           | Internal Link |
            | device mobile           | si                                   | string           | Internal Link |
            | user userState          | logado                               | string           | Internal Link |
            | user gender             | gender                               | regexp named     | Internal Link |
            | user age                | age                                  | regexp named     | Internal Link |
            | internal campaign       |                                      | empty array      | Internal Link |
            | optimization attributes |                                      | empty array      | Internal Link |
            | application             |                                      | empty str object | Internal Link |
            | products attributes     |                                      | empty array      | Internal Link |
