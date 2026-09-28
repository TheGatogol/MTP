@analyticsCreditScore
Feature: Analytics - Credit Score

    @ANA_ADVICE_CS001
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Credit Score - Terms and conditions - Page View
        Given a user with the following criteria
            | criteria                    |
            | credit score user analytics |
        And the user accesses dashboard detail PFM "footer"
        And the user closes onboarding modal and tooltips
        And the analytics interceptor service is initiated
        And the user accesses to credit report
        When the user accepts the credit score terms and conditions
        Then the analytics event "Page View" contains the following variables:
            | item                    | value                                                            | type             |
            | analytics               | analytics/glomo_base                                             | json schema      |
            | version DL              | 20250414_5.0                                                     | string           |
            | page name               | app:privada:personas:situacion crediticia:terminos y condiciones | string           |
            | level 1                 | situacion crediticia                                             | string           |
            | level 2                 | terminos y condiciones                                           | string           |
            | language                | ES                                                               | string           |
            | page area               | privada                                                          | string           |
            | page intent             | informacion                                                      | string           |
            | channel                 | online                                                           | string           |
            | page instance ID        | de                                                               | string           |
            | page info version       | appVersion                                                       | regexp named     |
            | page segment            | personas                                                         | string           |
            | sysEnv                  | app                                                              | string           |
            | business unit           | BBVA Mexico                                                      | string           |
            | site app name           | App BBVA Mexico                                                  | string           |
            | project name            | Glomo                                                            | string           |
            | device mobile           | si                                                               | string           |
            | user userState          | logado                                                           | string           |
            | user segment global     | 003001                                                           | string           |
            | profile ID              | profileID                                                        | regexp named     |
            | user gender             | gender                                                           | regexp named     |
            | user age                | age                                                              | regexp named     |
            | internal campaign       |                                                                  | empty array      |
            | optimization attributes |                                                                  | empty array      |
            | application             |                                                                  | empty str object |
            | products attributes     |                                                                  | empty array      |

    @ANA_ADVICE_CS002
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Credit Score - No information available - Page View
        Given a user with the following criteria
            | criteria                  |
            | credit score user no info |
        And the user accesses dashboard detail PFM "footer"
        And the user closes onboarding modal and tooltips
        And the analytics interceptor service is initiated
        When the user accesses to credit report
        Then the analytics event "Page View" contains the following variables:
            | item                    | value                                               | type             |
            | analytics               | analytics/glomo_base                                | json schema      |
            | version DL              | 20250414_5.0                                        | string           |
            | page name               | app:privada:personas:situacion crediticia:dashboard | string           |
            | level 1                 | situacion crediticia                                | string           |
            | level 2                 | dashboard                                           | string           |
            | language                | ES                                                  | string           |
            | page area               | privada                                             | string           |
            | page intent             | informacion                                         | string           |
            | channel                 | online                                              | string           |
            | page instance ID        | de                                                  | string           |
            | page info version       | appVersion                                          | regexp named     |
            | page segment            | personas                                            | string           |
            | sysEnv                  | app                                                 | string           |
            | business unit           | BBVA Mexico                                         | string           |
            | site app name           | App BBVA Mexico                                     | string           |
            | project name            | Glomo                                               | string           |
            | device mobile           | si                                                  | string           |
            | user userState          | logado                                              | string           |
            | user segment global     | 003001                                              | string           |
            | user segment profile    | sin informacion                                     | string           |
            | profile ID              | profileID                                           | regexp named     |
            | user gender             | gender                                              | regexp named     |
            | user age                | age                                                 | regexp named     |
            | internal campaign       |                                                     | empty array      |
            | optimization attributes |                                                     | empty array      |
            | application             |                                                     | empty str object |
            | products attributes     |                                                     | empty array      |

    @ANA_ADVICE_CS003
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Credit Score - Dashboard advice - Page View
        Given a user with the following criteria
            | criteria                    |
            | credit score user analytics |
        And the user accesses dashboard detail PFM "footer"
        And the user closes onboarding modal and tooltips
        And the user accesses to credit report
        And the analytics interceptor service is initiated
        When the user accepts the credit score terms and conditions
        Then the analytics event "Page View" contains the following variables:
            | item                    | value                                                    | type             |
            | analytics               | analytics/glomo_base                                     | json schema      |
            | version DL              | 20250414_5.0                                             | string           |
            | page name               | app:privada:personas:situacion crediticia:dashboard      | string           |
            | level 1                 | situacion crediticia                                     | string           |
            | level 2                 | dashboard                                                | string           |
            | language                | ES                                                       | string           |
            | page area               | privada                                                  | string           |
            | page intent             | informacion                                              | string           |
            | channel                 | online                                                   | string           |
            | page instance ID        | de                                                       | string           |
            | page info version       | appVersion                                               | regexp named     |
            | page segment            | personas                                                 | string           |
            | sysEnv                  | app                                                      | string           |
            | business unit           | BBVA Mexico                                              | string           |
            | site app name           | App BBVA Mexico                                          | string           |
            | project name            | Glomo                                                    | string           |
            | device mobile           | si                                                       | string           |
            | user userState          | logado                                                   | string           |
            | user segment global     | 003001                                                   | string           |
            | user segment profile    | score bajo                                               | string           |
            | profile ID              | profileID                                                | regexp named     |
            | user gender             | gender                                                   | regexp named     |
            | user age                | age                                                      | regexp named     |
            | internal campaign       |                                                          | empty array      |
            | optimization attributes |                                                          | empty array      |
            | application             |                                                          | empty str object |
            | products attributes     |                                                          | empty array      |

    @ANA_ADVICE_CS004
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Credit Score - Information about score modal - Page View
        Given a user with the following criteria
            | criteria                    |
            | credit score user analytics |
        And the user accesses dashboard detail PFM "footer"
        And the user closes onboarding modal and tooltips
        And the user accesses to credit report
        And the user accepts the credit score terms and conditions
        And the analytics interceptor service is initiated
        When the user enters information about the score into the modal
        Then the analytics event "Page View" contains the following variables:
            | item                    | value                                                                  | type             |
            | analytics               | analytics/glomo_base                                                   | json schema      |
            | version DL              | 20250414_5.0                                                           | string           |
            | page name               | app:privada:personas:situacion crediticia:informacion sobre el puntaje | string           |
            | level 1                 | situacion crediticia                                                   | string           |
            | level 2                 | informacion sobre el puntaje                                           | string           |
            | language                | ES                                                                     | string           |
            | page area               | privada                                                                | string           |
            | page intent             | informacion                                                            | string           |
            | channel                 | online                                                                 | string           |
            | page instance ID        | de                                                                     | string           |
            | page info version       | appVersion                                                             | regexp named     |
            | page segment            | personas                                                               | string           |
            | sysEnv                  | app                                                                    | string           |
            | business unit           | BBVA Mexico                                                            | string           |
            | site app name           | App BBVA Mexico                                                        | string           |
            | project name            | Glomo                                                                  | string           |
            | device mobile           | si                                                                     | string           |
            | user userState          | logado                                                                 | string           |
            | user segment global     | 003001                                                                 | string           |
            | profile ID              | profileID                                                              | regexp named     |
            | user gender             | gender                                                                 | regexp named     |
            | user age                | age                                                                    | regexp named     |
            | internal campaign       |                                                                        | empty array      |
            | optimization attributes |                                                                        | empty array      |
            | application             |                                                                        | empty str object |
            | products attributes     |                                                                        | empty array      |

    @ANA_ADVICE_CS005
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Credit Score - Relevant history modal - Page View
        Given a user with the following criteria
            | criteria                    |
            | credit score user analytics |
        And the user accesses dashboard detail PFM "footer"
        And the user closes onboarding modal and tooltips
        And the user accesses to credit report
        And the user accepts the credit score terms and conditions
        And the analytics interceptor service is initiated
        When the user enters the learn more container
        Then the analytics event "Page View" contains the following variables:
            | item                    | value                                                               | type             |
            | analytics               | analytics/glomo_base                                                | json schema      |
            | version DL              | 20250414_5.0                                                        | string           |
            | page name               | app:privada:personas:situacion crediticia:relevante en tu historial | string           |
            | level 1                 | situacion crediticia                                                | string           |
            | level 2                 | relevante en tu historial                                           | string           |
            | language                | ES                                                                  | string           |
            | page area               | privada                                                             | string           |
            | page intent             | informacion                                                         | string           |
            | channel                 | online                                                              | string           |
            | page instance ID        | de                                                                  | string           |
            | page info version       | appVersion                                                          | regexp named     |
            | page segment            | personas                                                            | string           |
            | sysEnv                  | app                                                                 | string           |
            | business unit           | BBVA Mexico                                                         | string           |
            | site app name           | App BBVA Mexico                                                     | string           |
            | project name            | Glomo                                                               | string           |
            | device mobile           | si                                                                  | string           |
            | user userState          | logado                                                              | string           |
            | user segment global     | 003001                                                              | string           |
            | profile ID              | profileID                                                           | regexp named     |
            | user gender             | gender                                                              | regexp named     |
            | user age                | age                                                                 | regexp named     |
            | internal campaign       |                                                                     | empty array      |
            | optimization attributes |                                                                     | empty array      |
            | application             |                                                                     | empty str object |
            | products attributes     |                                                                     | empty array      |

    @ANA_ADVICE_CS006
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Credit Score - Challenge detail - Page View
        Given a user with the following criteria
            | criteria                    |
            | credit score user analytics |
        And the user accesses dashboard detail PFM "footer"
        And the user closes onboarding modal and tooltips
        And the user accesses to credit report
        And the user accepts the credit score terms and conditions
        And the user accesses the challenges section
        And the analytics interceptor service is initiated
        When the user opens the credit score challenge detail screen
        Then the analytics event "Page View" contains the following variables:
            | item                    | value                                                      | type             |
            | analytics               | analytics/glomo_base                                       | json schema      |
            | version DL              | 20250414_5.0                                               | string           |
            | page name               | app:privada:personas:situacion crediticia:detalle del reto | string           |
            | level 1                 | situacion crediticia                                       | string           |
            | level 2                 | detalle del reto                                           | string           |
            | language                | ES                                                         | string           |
            | page area               | privada                                                    | string           |
            | page intent             | informacion                                                | string           |
            | channel                 | online                                                     | string           |
            | page instance ID        | de                                                         | string           |
            | page info version       | appVersion                                                 | regexp named     |
            | page segment            | personas                                                   | string           |
            | sysEnv                  | app                                                        | string           |
            | business unit           | BBVA Mexico                                                | string           |
            | site app name           | App BBVA Mexico                                            | string           |
            | project name            | Glomo                                                      | string           |
            | device mobile           | si                                                         | string           |
            | user userState          | logado                                                     | string           |
            | user segment global     | 003001                                                     | string           |
            | profile ID              | profileID                                                  | regexp named     |
            | user gender             | gender                                                     | regexp named     |
            | user age                | age                                                        | regexp named     |
            | custom fields           | reto:el pago esencial                                      | string           |
            | internal campaign       |                                                            | empty array      |
            | optimization attributes |                                                            | empty array      |
            | application             |                                                            | empty str object |
            | products attributes     |                                                            | empty array      |

    @ANA_ADVICE_CS007
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Credit Score - Challenges list - Page View
        Given a user with the following criteria
            | criteria                    |
            | credit score user analytics |
        And the user accesses dashboard detail PFM "footer"
        And the user closes onboarding modal and tooltips
        And the user accesses to credit report
        And the user accepts the credit score terms and conditions
        And the analytics interceptor service is initiated
        When the user accesses the challenges section
        Then the analytics event "Page View" contains the following variables:
            | item                    | value                                                      | type             |
            | analytics               | analytics/glomo_base                                       | json schema      |
            | version DL              | 20250414_5.0                                               | string           |
            | page name               | app:privada:personas:situacion crediticia:listado de retos | string           |
            | level 1                 | situacion crediticia                                       | string           |
            | level 2                 | listado de retos                                           | string           |
            | language                | ES                                                         | string           |
            | page area               | privada                                                    | string           |
            | page intent             | informacion                                                | string           |
            | channel                 | online                                                     | string           |
            | page instance ID        | de                                                         | string           |
            | page info version       | appVersion                                                 | regexp named     |
            | page segment            | personas                                                   | string           |
            | sysEnv                  | app                                                        | string           |
            | business unit           | BBVA Mexico                                                | string           |
            | site app name           | App BBVA Mexico                                            | string           |
            | project name            | Glomo                                                      | string           |
            | device mobile           | si                                                         | string           |
            | user userState          | logado                                                     | string           |
            | user segment global     | 003001                                                     | string           |
            | profile ID              | profileID                                                  | regexp named     |
            | user gender             | gender                                                     | regexp named     |
            | user age                | age                                                        | regexp named     |
            | internal campaign       |                                                            | empty array      |
            | optimization attributes |                                                            | empty array      |
            | application             |                                                            | empty str object |
            | products attributes     |                                                            | empty array      |

    @ANA_ADVICE_CS008
    @analytics
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Credit Score - Error no information available - Page View
        Given a user with the following criteria
            | criteria                    |
            | credit score user analytics |
        And the user accesses dashboard detail PFM "footer"
        And the user closes onboarding modal and tooltips
        And the analytics interceptor service is initiated
        And the user accesses to credit report
        When the user retries "3" more times
        Then the analytics event "Page View" contains the following variables:
            | item                    | value                                                                     | type             |
            | analytics               | analytics/glomo_base                                                      | json schema      |
            | version DL              | 20250414_5.0                                                              | string           |
            | page name               | app:privada:personas:situacion crediticia:error informacion no disponible | string           |
            | level 1                 | situacion crediticia                                                      | string           |
            | level 2                 | error informacion no disponible                                           | string           |
            | error page              | error informacion no disponible                                           | string           |
            | language                | ES                                                                        | string           |
            | page area               | privada                                                                   | string           |
            | page intent             | informacion                                                               | string           |
            | channel                 | online                                                                    | string           |
            | page instance ID        | de                                                                        | string           |
            | page info version       | appVersion                                                                | regexp named     |
            | page segment            | personas                                                                  | string           |
            | sysEnv                  | app                                                                       | string           |
            | business unit           | BBVA Mexico                                                               | string           |
            | site app name           | App BBVA Mexico                                                           | string           |
            | project name            | Glomo                                                                     | string           |
            | device mobile           | si                                                                        | string           |
            | user userState          | logado                                                                    | string           |
            | user segment global     | 003001                                                                    | string           |
            | profile ID              | profileID                                                                 | regexp named     |
            | user gender             | gender                                                                    | regexp named     |
            | user age                | age                                                                       | regexp named     |
            | internal campaign       |                                                                           | empty array      |
            | optimization attributes |                                                                           | empty array      |
            | application             |                                                                           | empty str object |
            | products attributes     |                                                                           | empty array      |
