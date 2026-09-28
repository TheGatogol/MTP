@sustainabilitySectionAnalytics
Feature: Analytics - Sustainability Section

    @ANA_SS001
    @analytics
    @MX @web @backend(test) @vbank @web-done
    @android @ios
    @vbank-modified
    Scenario: Access to Sustainability Section - Happy Path
        Given a user with the following criteria
            | criteria                              |
            | sustainability with carbon footprint  |
        When the user accesses to sustainability section
        Then the device contains the following variables
            | item                 | value                                                          | type         |
            | page name            | app:privada:personas:sostenibilidad:dashboard                  | string       |
            | level 1              | sostenibilidad                                                 | string       |
            | level 2              | dashboard                                                      | string       |
            | language             | ES                                                             | string       |
            | page area            | privada                                                        | string       |
            | page intent          | informacion                                                    | string       |
            | channel              | online                                                         | string       |
            | page instance ID     | de                                                             | string       |
            | version DL           | 20250414_5.0                                                   | string       |
            | page info version    | appVersion                                                     | regexp named |
            | page segment         | personas                                                       | string       |
            | sysEnv               | app                                                            | string       |
            | business unit        | BBVA Mexico                                                    | string       |
            | site app name        | App BBVA Mexico                                                | string       |
            | device mobile        | si                                                             | string       |
            | user segment global  | 003001                                                         | string       |
            | user age             | age                                                            | regexp named |

    @ANA_EVENT_SS002
    @analytics
    @MX @web @backend(test) @vbank @web-done
    @android @ios
    @vbank-modified
    Scenario: Access to Sustainability Section - Pre Approved Loan 0NOM
        Given a user with the following criteria
            | criteria                              |
            | sustainability with carbon footprint  |
        And the user accesses to sustainability section
        And the analytics interceptor service is initiated
        When the user accesses to sustainability product section
        Then the analytics events contains the following variables:
            | item                      | value                                                          | type         | event              |
            | page name                 | app:privada:personas:sostenibilidad:dashboard                  | string       | App On Click Start |
            | level 1                   | sostenibilidad                                                 | string       | App On Click Start |
            | level 2                   | dashboard                                                      | string       | App On Click Start |
            | language                  | ES                                                             | string       | App On Click Start |
            | page area                 | privada                                                        | string       | App On Click Start |
            | page intent               | informacion                                                    | string       | App On Click Start |
            | channel                   | online                                                         | string       | App On Click Start |
            | page instance ID          | de                                                             | string       | App On Click Start |
            | version DL                | 20250414_5.0                                                   | string       | App On Click Start |
            | page info version         | appVersion                                                     | regexp named | App On Click Start |
            | page segment              | personas                                                       | string       | App On Click Start |
            | sysEnv                    | app                                                            | string       | App On Click Start |
            | business unit             | BBVA Mexico                                                    | string       | App On Click Start |
            | site app name             | App BBVA Mexico                                                | string       | App On Click Start |
            | device mobile             | si                                                             | string       | App On Click Start |
            | user segment global       | 003001                                                         | string       | App On Click Start |
            | user age                  | age                                                            | regexp named | App On Click Start |
            | global application        | preapproved loan                                               | string       | App On Click Start |
            | application type          | contratacion                                                   | string       | App On Click Start |
            | application name          | prestamo personal one click                                    | string       | App On Click Start |
            | application step          | dashboard sostenibilidad preferencial                          | string       | App On Click Start |
            | fulfillment model         | online                                                         | string       | App On Click Start |
            | application typology      | preaprobado                                                    | string       | App On Click Start |
            | product primary category  | prestamos                                                      | string       | App On Click Start |
            | product subtype           | prestamo personal                                              | string       | App On Click Start |
            | product name              | prestamo nomina                                                | string       | App On Click Start |

    @ANA_EVENT_SS003
    @analytics
    @MX @web @backend(test) @vbank @web-done
    @android @ios
    @vbank-modified
    Scenario: Access to Sustainability Section - Pre Approved Loan 0PPI
        Given a user with the following criteria
            | criteria                              |
            | sustainability with carbon footprint  |
            | sustainability personal loan          |
        And the user accesses to sustainability section
        And the analytics interceptor service is initiated
        When the user accesses to sustainability product section
        Then the analytics events contains the following variables:
            | item                      | value                                                          | type         | event              |
            | page name                 | app:privada:personas:sostenibilidad:dashboard                  | string       | App On Click Start |
            | level 1                   | sostenibilidad                                                 | string       | App On Click Start |
            | level 2                   | dashboard                                                      | string       | App On Click Start |
            | language                  | ES                                                             | string       | App On Click Start |
            | page area                 | privada                                                        | string       | App On Click Start |
            | page intent               | informacion                                                    | string       | App On Click Start |
            | channel                   | online                                                         | string       | App On Click Start |
            | page instance ID          | de                                                             | string       | App On Click Start |
            | version DL                | 20250414_5.0                                                   | string       | App On Click Start |
            | page info version         | appVersion                                                     | regexp named | App On Click Start |
            | page segment              | personas                                                       | string       | App On Click Start |
            | sysEnv                    | app                                                            | string       | App On Click Start |
            | business unit             | BBVA Mexico                                                    | string       | App On Click Start |
            | site app name             | App BBVA Mexico                                                | string       | App On Click Start |
            | device mobile             | si                                                             | string       | App On Click Start |
            | user segment global       | 003001                                                         | string       | App On Click Start |
            | user age                  | age                                                            | regexp named | App On Click Start |
            | global application        | preapproved loan                                               | string       | App On Click Start |
            | application type          | contratacion                                                   | string       | App On Click Start |
            | application name          | prestamo personal one click                                    | string       | App On Click Start |
            | application step          | dashboard sostenibilidad preferencial                          | string       | App On Click Start |
            | fulfillment model         | online                                                         | string       | App On Click Start |
            | application typology      | preaprobado                                                    | string       | App On Click Start |
            | product primary category  | prestamos                                                      | string       | App On Click Start |
            | product subtype           | prestamo personal                                              | string       | App On Click Start |
            | product name              | prestamo personal inmediato                                    | string       | App On Click Start |
