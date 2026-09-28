@accountConfigurationSectionAnalytics
Feature: Analytics - Account configuration section

    @ANA_ACS001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Page View - Acs
        Given a user with the following criteria
            | criteria                      |
            | account configuration section |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user goes to "account configuration secction" using deeplink navigation
        Then the analytics events contains the following variables
            | item                    | value                                            | type             | event     | event number |
            | analytics               | analytics/glomo_base                             | json schema      | Page View | 1            |
            | version DL              | 20250414_5.0                                     | string           | Page View | 1            |
            | page name               | app:privada:personas:magic log:configurar cuenta | string           | Page View | 1            |
            | level 1                 | magic log                                        | string           | Page View | 1            |
            | level 2                 | configurar cuenta                                | string           | Page View | 1            |
            | language                | ES                                               | string           | Page View | 1            |
            | page area               | privada                                          | string           | Page View | 1            |
            | page intent             | informacion                                      | string           | Page View | 1            |
            | channel                 | online                                           | string           | Page View | 1            |
            | page instance ID        | de                                               | string           | Page View | 1            |
            | page info version       | appVersion                                       | regexp named     | Page View | 1            |
            | page segment            | personas                                         | string           | Page View | 1            |
            | sysEnv                  | app                                              | string           | Page View | 1            |
            | business unit           | BBVA Mexico                                      | string           | Page View | 1            |
            | site app name           | App BBVA Mexico                                  | string           | Page View | 1            |
            | project name            | Glomo                                            | string           | Page View | 1            |
            | device mobile           | si                                               | string           | Page View | 1            |
            | user userState          | logado                                           | string           | Page View | 1            |
            | profile ID              | profileID                                        | regexp named     | Page View | 1            |
            | user segment global     | 003001                                           | string           | Page View | 1            |
            | user gender             | gender                                           | regexp named     | Page View | 1            |
            | user age                | age                                              | regexp named     | Page View | 1            |
            | internal campaign       |                                                  | empty array      | Page View | 1            |
            | optimization attributes |                                                  | empty array      | Page View | 1            |
            | application             |                                                  | empty str object | Page View | 1            |
            | products attributes     |                                                  | empty array      | Page View | 1            |
