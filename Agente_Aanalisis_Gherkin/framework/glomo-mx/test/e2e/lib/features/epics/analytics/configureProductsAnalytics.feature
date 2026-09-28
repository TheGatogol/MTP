@configureProductsAnalytics
Feature: Analytics - Configure Products

    @ANA_CP001
    @analytics
    @MX @web @vbank @backend(test) @web-done @android @ios
    Scenario: Page view - Configure products
        Given a user with the following criteria
            | criteria           |
            | configure products |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses to show and hide product section
        Then the analytics events contains the following variables
            | item                    | value                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                   | string           | Page View |
            | page name               | app:privada:personas:configuracion:mostrar y ocultar productos | string           | Page View |
            | level 1                 | configuracion                                                  | string           | Page View |
            | level 2                 | mostrar y ocultar productos                                    | string           | Page View |
            | language                | ES                                                             | string           | Page View |
            | page area               | privada                                                        | string           | Page View |
            | page intent             | informacion                                                    | string           | Page View |
            | channel                 | online                                                         | string           | Page View |
            | page instance ID        | de                                                             | string           | Page View |
            | page info version       | appVersion                                                     | regexp named     | Page View |
            | page segment            | personas                                                       | string           | Page View |
            | sysEnv                  | app                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                | string           | Page View |
            | project name            | Glomo                                                          | string           | Page View |
            | device mobile           | si                                                             | string           | Page View |
            | user userState          | logado                                                         | string           | Page View |
            | internal campaign       |                                                                | empty array      | Page View |
            | optimization attributes |                                                                | empty array      | Page View |
            | application             |                                                                | empty str object | Page View |
            | products attributes     |                                                                | empty array      | Page View |
