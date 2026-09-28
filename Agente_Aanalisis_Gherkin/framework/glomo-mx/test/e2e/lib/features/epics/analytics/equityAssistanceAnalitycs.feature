@equityAssistanceAnalytics
Feature: Analytics Equity Assistance

    @ANA_EVENT_EAL001
    @analytics
    @MX
    @backend(test)
    @vbank
    @web-done
    @web @android @ios
    Scenario: Equity assistance call line bbva
        Given a user with the following criteria
            | criteria |
            | equity   |
        And the user starts the application at date:
            | day   | 22   |
            | month | 01   |
            | year  | 2026 |
            | hour  | 17   |
        And the user accesses to contract patrimonial
        And the user agrees to contact banker
        And the analytics interceptor service is initiated
        When the user calls line equity assistance
        Then the analytics events contains the following variables
            | item                    | value                                                  | type             | event         |
            | analytics               | analytics/glomo_base                                   | json schema      | External Link |
            | version DL              | 20250414_5.0                                           | string           | External Link |
            | page name               | app:privada:patrimonial:contactar banquero             | string           | External Link |
            | level 1                 | contactar banquero                                     | string           | External Link |
            | language                | ES                                                     | string           | External Link |
            | page area               | privada                                                | string           | External Link |
            | page intent             | informacion                                            | string           | External Link |
            | channel                 | online                                                 | string           | External Link |
            | page instance ID        | de                                                     | string           | External Link |
            | page info version       | appVersion                                             | regexp named     | External Link |
            | page segment            | patrimonial                                            | string           | External Link |
            | sysEnv                  | app                                                    | string           | External Link |
            | business unit           | BBVA Mexico                                            | string           | External Link |
            | site app name           | App BBVA Mexico                                        | string           | External Link |
            | project name            | Glomo                                                  | string           | External Link |
            | link url                | llamar a linea patrimonial                             | string           | External Link |
            | device mobile           | si                                                     | string           | External Link |
            | user userState          | logado                                                 | string           | External Link |
            | user segment global     | 003003                                                 | string           | External Link |
            | profile ID              | profileID                                              | regexp named     | External Link |
            | user gender             | gender                                                 | regexp named     | External Link |
            | user age                | age                                                    | regexp named     | External Link |
            | internal campaign       |                                                        | empty array      | External Link |
            | optimization attributes |                                                        | empty array      | External Link |
            | application             |                                                        | empty str object | External Link |
            | products attributes     |                                                        | empty array      | External Link |
