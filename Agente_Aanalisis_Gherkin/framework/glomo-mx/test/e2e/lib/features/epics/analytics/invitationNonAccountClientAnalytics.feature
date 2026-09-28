@invitationNonAccountClientAnalytics
Feature: Analytics - Invitation Non Account Client

    @ANA_EVENT_INC001
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Page View - Get an account
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses to dashboard
        When the user enter to invitation non account page from "transfer" section
        Then the device contains the following variables
            | item                      | value                                 | type              |
            | analytics                 | analytics/glomo_base                  | json schema       |
            | version DL                | 20250414_5.0                          | string            |
            | page name                 | app:publica:personas:obten tu cuenta  | string            |
            | level 1                   | obten tu cuenta                       | string            |
            | language                  | ES                                    | string            |
            | page area                 | publica                               | string            |
            | page intent               | informacion                           | string            |
            | channel                   | online                                | string            |
            | page instance ID          | de                                    | string            |
            | page info version         | appVersion                            | regexp named      |
            | page segment              | personas                              | string            |
            | sysEnv                    | app                                   | string            |
            | business unit             | BBVA Mexico                           | string            |
            | site app name             | App BBVA Mexico                       | string            |
            | project name              | Glomo                                 | string            |
            | device mobile             | si                                    | string            |
            | user userState            | logado                                | string            |
            | user segment global       | 003001                                | string            |
            | profile ID                | profileID                             | regexp named      |
            | user age                  | age                                   | regexp named      |
            | user gender               | gender                                | regexp named      |
            | internal campaign         |                                       | empty array       |
            | optimization attributes   |                                       | empty array       |
            | application               |                                       | empty str object  |
            | products attributes       |                                       | empty array       |
