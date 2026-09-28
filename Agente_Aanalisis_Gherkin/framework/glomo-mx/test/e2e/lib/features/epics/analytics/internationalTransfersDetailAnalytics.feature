@internationalTransfersDetailAnalytics
Feature: Analytics - International Transfers Detail

    @ANA_EVENT_ITD001
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Transfers Detail from <entry_point>- Sent - App Page View
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        And the user accesses to operatives screen from "<entry_point>"
        And the user accesses to view movements "sent"
        And the analytics interceptor service is initiated
        When access to movement with "successful" status
        Then the analytics events contains the following variables:
            | item                | value                                                                           | type         | event     |
            | analytics           | analytics/glomo_base                                                            | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                    | string       | Page View |
            | page name           | app:privada:personas:transferencias internacionales:historial:enviadas:detalle  | string       | Page View |
            | level 1             | transferencias internacionales                                                  | string       | Page View |
            | level 2             | historial                                                                       | string       | Page View |
            | level 3             | enviadas                                                                        | string       | Page View |
            | level 4             | detalle                                                                         | string       | Page View |
            | language            | ES                                                                              | string       | Page View |
            | page area           | privada                                                                         | string       | Page View |
            | page intent         | informacion                                                                     | string       | Page View |
            | channel             | online                                                                          | string       | Page View |
            | page instance ID    | de                                                                              | string       | Page View |
            | page info version   | appVersion                                                                      | regexp named | Page View |
            | page segment        | personas                                                                        | string       | Page View |
            | sysEnv              | app                                                                             | string       | Page View |
            | business unit       | BBVA Mexico                                                                     | string       | Page View |
            | site app name       | App BBVA Mexico                                                                 | string       | Page View |
            | project name        | Glomo                                                                           | string       | Page View |
            | device mobile       | si                                                                              | string       | Page View |
            | user userState      | logado                                                                          | string       | Page View |
            | profile ID          | profileID                                                                       | regexp named | Page View |
            | user segment global | 003001                                                                          | string       | Page View |
            | user gender         | gender                                                                          | regexp named | Page View |
            | user age            | age                                                                             | regexp named | Page View |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |

    @ANA_EVENT_ITD002
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: International Transfers Detail from <entry_point> - Recevied - App Page View
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        And the user accesses to operatives screen from "<entry_point>"
        And the user accesses to view movements "received"
        And the analytics interceptor service is initiated
        When access to movement with "successful" status
        Then the analytics events contains the following variables:
            | item                | value                                                                           | type         | event     |
            | analytics           | analytics/glomo_base                                                            | json schema  | Page View |
            | version DL          | 20250414_5.0                                                                    | string       | Page View |
            | page name           | app:privada:personas:transferencias internacionales:historial:recibidas:detalle | string       | Page View |
            | level 1             | transferencias internacionales                                                  | string       | Page View |
            | level 2             | historial                                                                       | string       | Page View |
            | level 3             | recibidas                                                                       | string       | Page View |
            | level 4             | detalle                                                                         | string       | Page View |
            | language            | ES                                                                              | string       | Page View |
            | page area           | privada                                                                         | string       | Page View |
            | page intent         | informacion                                                                     | string       | Page View |
            | channel             | online                                                                          | string       | Page View |
            | page instance ID    | de                                                                              | string       | Page View |
            | page info version   | appVersion                                                                      | regexp named | Page View |
            | page segment        | personas                                                                        | string       | Page View |
            | sysEnv              | app                                                                             | string       | Page View |
            | business unit       | BBVA Mexico                                                                     | string       | Page View |
            | site app name       | App BBVA Mexico                                                                 | string       | Page View |
            | project name        | Glomo                                                                           | string       | Page View |
            | device mobile       | si                                                                              | string       | Page View |
            | user userState      | logado                                                                          | string       | Page View |
            | profile ID          | profileID                                                                       | regexp named | Page View |
            | user segment global | 003001                                                                          | string       | Page View |
            | user gender         | gender                                                                          | regexp named | Page View |
            | user age            | age                                                                             | regexp named | Page View |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |
