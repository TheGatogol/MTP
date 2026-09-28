@mobileTopUpPackagesAnalytics
Feature: Analytics - Mobile Top Up Packages

    @ANA_EVENT_MTUP001
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - APP CLICK STARTED
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        Then the analytics events contains the following variables
            | item                | value                         | type         | event              |
            | sysEnv              | app                           | string       | App On Click Start |
            | page segment        | personas                      | string       | App On Click Start |
            | page intent         | informacion                   | string       | App On Click Start |
            | business unit       | BBVA Mexico                   | string       | App On Click Start |
            | page area           | privada                       | string       | App On Click Start |
            | language            | ES                            | string       | App On Click Start |
            | channel             | online                        | string       | App On Click Start |
            | site app name       | App BBVA Mexico               | string       | App On Click Start |
            | project name        | Glomo                         | string       | App On Click Start |
            | level 1             | bbvaplus                      | string       | App On Click Start |
            | page name           | app:privada:personas:bbvaplus | string       | App On Click Start |
            | device mobile       | si                            | string       | App On Click Start |
            | user segment global | 003001                        | string       | App On Click Start |
            | user userState      | logado                        | string       | App On Click Start |
            | user gender         | gender                        | regexp named | App On Click Start |
            | user age            | age                           | regexp named | App On Click Start |
            | application step    | recargar celular              | string       | App On Click Start |
            | application name    | recargar celular              | string       | App On Click Start |
            | application type    | operativa                     | string       | App On Click Start |

    @ANA_EVENT_MTUP002
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - APP PAGE VISIT
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses to the operative account product detail
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user accepts the onboarding terms
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event          |
            | sysEnv              | app                                                    | string       | App Page Visit |
            | page segment        | personas                                               | string       | App Page Visit |
            | page intent         | transaccion                                            | string       | App Page Visit |
            | business unit       | BBVA Mexico                                            | string       | App Page Visit |
            | page area           | privada                                                | string       | App Page Visit |
            | language            | ES                                                     | string       | App Page Visit |
            | channel             | online                                                 | string       | App Page Visit |
            | site app name       | App BBVA Mexico                                        | string       | App Page Visit |
            | project name        | Glomo                                                  | string       | App Page Visit |
            | level 1             | recargar celular                                       | string       | App Page Visit |
            | level 2             | 1 numero celular                                       | string       | App Page Visit |
            | page name           | app:privada:personas:recargar celular:1 numero celular | string       | App Page Visit |
            | device mobile       | si                                                     | string       | App Page Visit |
            | user segment global | 003001                                                 | string       | App Page Visit |
            | user userState      | logado                                                 | string       | App Page Visit |
            | user gender         | gender                                                 | regexp named | App Page Visit |
            | user age            | age                                                    | regexp named | App Page Visit |
            | application step    | 1 numero celular                                       | string       | App Page Visit |
            | application name    | recargar celular                                       | string       | App Page Visit |
            | application type    | operativa                                              | string       | App Page Visit |

    @ANA_EVENT_MTUP003
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - APP STARTED
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses to the operative account product detail
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user select the new contact section from contact step
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event       |
            | sysEnv              | app                                                    | string       | App Started |
            | page segment        | personas                                               | string       | App Started |
            | page intent         | transaccion                                            | string       | App Started |
            | business unit       | BBVA Mexico                                            | string       | App Started |
            | page area           | privada                                                | string       | App Started |
            | language            | ES                                                     | string       | App Started |
            | channel             | online                                                 | string       | App Started |
            | site app name       | App BBVA Mexico                                        | string       | App Started |
            | project name        | Glomo                                                  | string       | App Started |
            | level 1             | recargar celular                                       | string       | App Started |
            | level 2             | 1 numero celular                                       | string       | App Started |
            | page name           | app:privada:personas:recargar celular:1 numero celular | string       | App Started |
            | device mobile       | si                                                     | string       | App Started |
            | user segment global | 003001                                                 | string       | App Started |
            | user userState      | logado                                                 | string       | App Started |
            | user gender         | gender                                                 | regexp named | App Started |
            | user age            | age                                                    | regexp named | App Started |
            | application step    | nuevo contacto                                         | string       | App Started |
            | application name    | recargar celular                                       | string       | App Started |
            | application type    | operativa                                              | string       | App Started |

    @ANA_EVENT_MTUP004
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages Saved Contact - APP STARTED
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses to the operative account product detail
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user select the contacts list section from contact step
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event       |
            | sysEnv              | app                                                    | string       | App Started |
            | page segment        | personas                                               | string       | App Started |
            | page intent         | transaccion                                            | string       | App Started |
            | business unit       | BBVA Mexico                                            | string       | App Started |
            | page area           | privada                                                | string       | App Started |
            | language            | ES                                                     | string       | App Started |
            | channel             | online                                                 | string       | App Started |
            | site app name       | App BBVA Mexico                                        | string       | App Started |
            | project name        | Glomo                                                  | string       | App Started |
            | level 1             | recargar celular                                       | string       | App Started |
            | level 2             | 1 numero celular                                       | string       | App Started |
            | page name           | app:privada:personas:recargar celular:1 numero celular | string       | App Started |
            | device mobile       | si                                                     | string       | App Started |
            | user segment global | 003001                                                 | string       | App Started |
            | user userState      | logado                                                 | string       | App Started |
            | user gender         | gender                                                 | regexp named | App Started |
            | user age            | age                                                    | regexp named | App Started |
            | application step    | contactos guardados                                    | string       | App Started |
            | application name    | recargar celular                                       | string       | App Started |
            | application type    | operativa                                              | string       | App Started |

    @ANA_EVENT_MTUP005
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - APP STEP 2
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses to the operative account product detail
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user selects the "Bait" saved contact
        Then the analytics events contains the following variables
            | item                 | value                                           | type         | event      |
            | sysEnv               | app                                             | string       | App Step 2 |
            | page segment         | personas                                        | string       | App Step 2 |
            | page intent          | transaccion                                     | string       | App Step 2 |
            | business unit        | BBVA Mexico                                     | string       | App Step 2 |
            | page area            | privada                                         | string       | App Step 2 |
            | language             | ES                                              | string       | App Step 2 |
            | channel              | online                                          | string       | App Step 2 |
            | site app name        | App BBVA Mexico                                 | string       | App Step 2 |
            | project name         | Glomo                                           | string       | App Step 2 |
            | level 1              | recargar celular                                | string       | App Step 2 |
            | level 2              | 2 recarga                                       | string       | App Step 2 |
            | page name            | app:privada:personas:recargar celular:2 recarga | string       | App Step 2 |
            | device mobile        | si                                              | string       | App Step 2 |
            | user segment global  | 003001                                          | string       | App Step 2 |
            | user userState       | logado                                          | string       | App Step 2 |
            | user gender          | gender                                          | regexp named | App Step 2 |
            | user age             | age                                             | regexp named | App Step 2 |
            | application step     | 2 recarga                                       | string       | App Step 2 |
            | application name     | recargar celular                                | string       | App Step 2 |
            | application type     | operativa                                       | string       | App Step 2 |
            | application process  | flujo con montos                                | string       | App Step 2 |
            | application typology | bait                                            | string       | App Step 2 |

    @ANA_EVENT_MTUP006
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - APP STEP 3
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user selects a saved "Bait" contact and a "30" MXN "amount"
        And the user selects "an account" as payment method
        Then the analytics events contains the following variables
            | item                     | value                                                | type         | event      |
            | sysEnv                   | app                                                  | string       | App Step 3 |
            | page segment             | personas                                             | string       | App Step 3 |
            | page intent              | transaccion                                          | string       | App Step 3 |
            | business unit            | BBVA Mexico                                          | string       | App Step 3 |
            | page area                | privada                                              | string       | App Step 3 |
            | language                 | ES                                                   | string       | App Step 3 |
            | channel                  | online                                               | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                      | string       | App Step 3 |
            | project name             | Glomo                                                | string       | App Step 3 |
            | level 1                  | recargar celular                                     | string       | App Step 3 |
            | level 2                  | 3 confirmacion                                       | string       | App Step 3 |
            | page name                | app:privada:personas:recargar celular:3 confirmacion | string       | App Step 3 |
            | device mobile            | si                                                   | string       | App Step 3 |
            | user segment global      | 003001                                               | string       | App Step 3 |
            | user userState           | logado                                               | string       | App Step 3 |
            | user gender              | gender                                               | regexp named | App Step 3 |
            | user age                 | age                                                  | regexp named | App Step 3 |
            | application step         | 3 confirmacion                                       | string       | App Step 3 |
            | application name         | recargar celular                                     | string       | App Step 3 |
            | application type         | operativa                                            | string       | App Step 3 |
            | application process      | flujo con montos                                     | string       | App Step 3 |
            | application typology     | bait                                                 | string       | App Step 3 |
            | product amount           | 30                                                   | string       | App Step 3 |
            | product currency         | MXN                                                  | string       | App Step 3 |
            | product primary category | cuentas                                              | string       | App Step 3 |
            | product name             | tarjeta nomina basica bbva                           | string       | App Step 3 |

    @ANA_EVENT_MTUP007
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - APP STEP 4
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user follows through a "Bait" mobile top up purchase for a "30" MXN "amount"
        And the user selects "an account" as payment method
        And the user confirms the mobile top up package purchase
        Then the analytics events contains the following variables
            | item                     | value                                       | type         | event      |
            | sysEnv                   | app                                         | string       | App Step 4 |
            | page segment             | personas                                    | string       | App Step 4 |
            | page intent              | transaccion                                 | string       | App Step 4 |
            | business unit            | BBVA Mexico                                 | string       | App Step 4 |
            | page area                | privada                                     | string       | App Step 4 |
            | language                 | ES                                          | string       | App Step 4 |
            | channel                  | online                                      | string       | App Step 4 |
            | site app name            | App BBVA Mexico                             | string       | App Step 4 |
            | project name             | Glomo                                       | string       | App Step 4 |
            | level 1                  | recargar celular                            | string       | App Step 4 |
            | level 2                  | 4 otp                                       | string       | App Step 4 |
            | page name                | app:privada:personas:recargar celular:4 otp | string       | App Step 4 |
            | device mobile            | si                                          | string       | App Step 4 |
            | user segment global      | 003001                                      | string       | App Step 4 |
            | user userState           | logado                                      | string       | App Step 4 |
            | user gender              | gender                                      | regexp named | App Step 4 |
            | user age                 | age                                         | regexp named | App Step 4 |
            | application step         | 4 otp                                       | string       | App Step 4 |
            | application name         | recargar celular                            | string       | App Step 4 |
            | application type         | operativa                                   | string       | App Step 4 |
            | application process      | flujo con montos                            | string       | App Step 4 |
            | application typology     | bait                                        | string       | App Step 4 |
            | product amount           | 30                                          | number       | App Step 4 |
            | product currency         | MXN                                         | string       | App Step 4 |
            | product primary category | cuentas                                     | string       | App Step 4 |
            | product name             | tarjeta nomina basica bbva                  | string       | App Step 4 |
            | custom fields            | firma:token                                 | string       | App Step 4 |

    @ANA_EVENT_MTUP008
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - PAGE VIEW EXIT
        Given a user with the following criteria
            | criteria                       |
            | mobile top up packages         |
            | mtup user with tdd and tdc     |
        And the user accesses to the operative account product detail
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user follows through a "Bait" mobile top up purchase for a "30" MXN "amount"
        And the user confirms the mobile top up package purchase
        And the user "exits the flow" from mobile top up packages
        Then the analytics events contains the following variables
            | item                | value                                       | type         | event     | event number |
            | sysEnv              | app                                         | string       | Page View | 4            |
            | page segment        | personas                                    | string       | Page View | 4            |
            | page intent         | transaccion                                 | string       | Page View | 4            |
            | business unit       | BBVA Mexico                                 | string       | Page View | 4            |
            | page area           | privada                                     | string       | Page View | 4            |
            | language            | ES                                          | string       | Page View | 4            |
            | channel             | online                                      | string       | Page View | 4            |
            | site app name       | App BBVA Mexico                             | string       | Page View | 4            |
            | project name        | Glomo                                       | string       | Page View | 4            |
            | level 1             | recargar celular                            | string       | Page View | 4            |
            | level 2             | salir                                       | string       | Page View | 4            |
            | page name           | app:privada:personas:recargar celular:salir | string       | Page View | 4            |
            | device mobile       | si                                          | string       | Page View | 4            |
            | user segment global | 003001                                      | string       | Page View | 4            |
            | user userState      | logado                                      | string       | Page View | 4            |
            | user gender         | gender                                      | regexp named | Page View | 4            |
            | user age            | age                                         | regexp named | Page View | 4            |

    @ANA_EVENT_MTUP009
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - PAGE VIEW ONBOARDING
        Given a user with the following criteria
            | criteria                   |
            | mobile top up packages     |
            | mtup user with tdd and tdc |
        And the user accesses the top up packages page from the operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user selects the "Telcel" saved contact
        Then the analytics events contains the following variables
            | item                | value                                            | type         | event     | event number |
            | page segment        | personas                                         | string       | Page View | 2            |
            | page intent         | informacion                                      | string       | Page View | 2            |
            | sysEnv              | app                                              | string       | Page View | 2            |
            | business unit       | BBVA Mexico                                      | string       | Page View | 2            |
            | page area           | privada                                          | string       | Page View | 2            |
            | language            | ES                                               | string       | Page View | 2            |
            | channel             | online                                           | string       | Page View | 2            |
            | site app name       | App BBVA Mexico                                  | string       | Page View | 2            |
            | project name        | Glomo                                            | string       | Page View | 2            |
            | level 1             | recargar celular                                 | string       | Page View | 2            |
            | level 2             | onboarding                                       | string       | Page View | 2            |
            | page name           | app:privada:personas:recargar celular:onboarding | string       | Page View | 2            |
            | device mobile       | si                                               | string       | Page View | 2            |
            | user segment global | 003001                                           | string       | Page View | 2            |
            | user userState      | logado                                           | string       | Page View | 2            |
            | user gender         | gender                                           | regexp named | Page View | 2            |
            | user age            | age                                              | regexp named | Page View | 2            |

    @ANA_EVENT_MTUP010
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - PAGE VIEW PACKAGE INFORMATION
        Given a user with the following criteria
            | criteria                   |
            | mobile top up packages     |
            | mtup user with tdd and tdc |
        And the user accesses to the operative account product detail
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user reads the package information after selecting a "Telcel" contact and "closes" the modal
        Then the analytics events contains the following variables
            | item                | value                                                        | type         | event     | event number |
            | page segment        | personas                                                     | string       | Page View | 3            |
            | page intent         | transaccion                                                  | string       | Page View | 3            |
            | sysEnv              | app                                                          | string       | Page View | 3            |
            | business unit       | BBVA Mexico                                                  | string       | Page View | 3            |
            | page area           | privada                                                      | string       | Page View | 3            |
            | language            | ES                                                           | string       | Page View | 3            |
            | channel             | online                                                       | string       | Page View | 3            |
            | site app name       | App BBVA Mexico                                              | string       | Page View | 3            |
            | project name        | Glomo                                                        | string       | Page View | 3            |
            | level 1             | recargar celular                                             | string       | Page View | 3            |
            | level 2             | terminos y condiciones                                       | string       | Page View | 3            |
            | page name           | app:privada:personas:recargar celular:terminos y condiciones | string       | Page View | 3            |
            | device mobile       | si                                                           | string       | Page View | 3            |
            | user segment global | 003001                                                       | string       | Page View | 3            |
            | user userState      | logado                                                       | string       | Page View | 3            |
            | user gender         | gender                                                       | regexp named | Page View | 3            |
            | user age            | age                                                          | regexp named | Page View | 3            |

    @ANA_EVENT_MTUP011
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - PAGE VIEW PAYMENT METHOD
        Given a user with the following criteria
            | criteria                   |
            | mobile top up packages     |
            | mtup user with tdd and tdc |
        And the user accesses to the operative account product detail
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user selects a saved "Bait" contact and a "30" MXN "amount"
        Then the analytics events contains the following variables
            | item                | value                                               | type         | event     | event number |
            | page segment        | personas                                            | string       | Page View | 3            |
            | page intent         | transaccion                                         | string       | Page View | 3            |
            | sysEnv              | app                                                 | string       | Page View | 3            |
            | business unit       | BBVA Mexico                                         | string       | Page View | 3            |
            | page area           | privada                                             | string       | Page View | 3            |
            | language            | ES                                                  | string       | Page View | 3            |
            | channel             | online                                              | string       | Page View | 3            |
            | site app name       | App BBVA Mexico                                     | string       | Page View | 3            |
            | project name        | Glomo                                               | string       | Page View | 3            |
            | level 1             | recargar celular                                    | string       | Page View | 3            |
            | level 2             | forma de pago                                       | string       | Page View | 3            |
            | page name           | app:privada:personas:recargar celular:forma de pago | string       | Page View | 3            |
            | device mobile       | si                                                  | string       | Page View | 3            |
            | user segment global | 003001                                              | string       | Page View | 3            |
            | user userState      | logado                                              | string       | Page View | 3            |
            | user gender         | gender                                              | regexp named | Page View | 3            |
            | user age            | age                                                 | regexp named | Page View | 3            |

    @ANA_EVENT_MTUP012
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - APP COMPLETED
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user follows through a "Bait" mobile top up purchase for a "30" MXN "amount"
        And the user selects "an account" as payment method
        And the user confirms the mobile top up purchase and completes the otp
        Then the analytics events contains the following variables
            | item                     | value                                                | type         | event         |
            | sysEnv                   | app                                                  | string       | App Completed |
            | page segment             | personas                                             | string       | App Completed |
            | page intent              | transaccion                                          | string       | App Completed |
            | business unit            | BBVA Mexico                                          | string       | App Completed |
            | page area                | privada                                              | string       | App Completed |
            | language                 | ES                                                   | string       | App Completed |
            | channel                  | online                                               | string       | App Completed |
            | site app name            | App BBVA Mexico                                      | string       | App Completed |
            | project name             | Glomo                                                | string       | App Completed |
            | level 1                  | recargar celular                                     | string       | App Completed |
            | level 2                  | pagina exitosa                                       | string       | App Completed |
            | page name                | app:privada:personas:recargar celular:pagina exitosa | string       | App Completed |
            | device mobile            | si                                                   | string       | App Completed |
            | user segment global      | 003001                                               | string       | App Completed |
            | user userState           | logado                                               | string       | App Completed |
            | user gender              | gender                                               | regexp named | App Completed |
            | user age                 | age                                                  | regexp named | App Completed |
            | application step         | pagina exitosa                                       | string       | App Completed |
            | application state        | en revision                                          | string       | App Completed |
            | application name         | recargar celular                                     | string       | App Completed |
            | application type         | operativa                                            | string       | App Completed |
            | application process      | flujo con montos                                     | string       | App Completed |
            | application typology     | bait                                                 | string       | App Completed |
            | product amount           | 30                                                   | number       | App Completed |
            | product currency         | MXN                                                  | string       | App Completed |
            | product primary category | cuentas                                              | string       | App Completed |
            | product name             | tarjeta nomina basica bbva                           | string       | App Completed |
            | custom fields            | firma:token                                          | string       | App Completed |

    @ANA_EVENT_MTUP013
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - APP COMPLETED APROBADO
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user follows through a "Bait" mobile top up purchase for a "30" MXN "amount"
        And the user selects "an account" as payment method
        And the user confirms the mobile top up purchase and completes the otp
        Then the analytics events contains the following variables
            | item                     | value                                                | type         | event         |
            | sysEnv                   | app                                                  | string       | App Completed |
            | page segment             | personas                                             | string       | App Completed |
            | page intent              | transaccion                                          | string       | App Completed |
            | business unit            | BBVA Mexico                                          | string       | App Completed |
            | page area                | privada                                              | string       | App Completed |
            | language                 | ES                                                   | string       | App Completed |
            | channel                  | online                                               | string       | App Completed |
            | site app name            | App BBVA Mexico                                      | string       | App Completed |
            | project name             | Glomo                                                | string       | App Completed |
            | level 1                  | recargar celular                                     | string       | App Completed |
            | level 2                  | pagina exitosa                                       | string       | App Completed |
            | page name                | app:privada:personas:recargar celular:pagina exitosa | string       | App Completed |
            | device mobile            | si                                                   | string       | App Completed |
            | user segment global      | 003001                                               | string       | App Completed |
            | user userState           | logado                                               | string       | App Completed |
            | user gender              | gender                                               | regexp named | App Completed |
            | user age                 | age                                                  | regexp named | App Completed |
            | application step         | pagina exitosa                                       | string       | App Completed |
            | application state        | aprobado                                             | string       | App Completed |
            | application name         | recargar celular                                     | string       | App Completed |
            | application type         | operativa                                            | string       | App Completed |
            | application process      | flujo con montos                                     | string       | App Completed |
            | application typology     | bait                                                 | string       | App Completed |
            | product amount           | 30                                                   | number       | App Completed |
            | product currency         | MXN                                                  | string       | App Completed |
            | product primary category | cuentas                                              | string       | App Completed |
            | product name             | tarjeta nomina basica bbva                           | string       | App Completed |
            | custom fields            | firma:token                                          | string       | App Completed |

    @ANA_EVENT_MTUP014
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - INTERNAL LINK
        Given a user with the following criteria
            | criteria                   |
            | mobile top up packages     |
            | mtup user with tdd and tdc |
        And the user accesses the top up packages page from the operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user fills the form for a new "Bait" number with name "Brenda" "without saving"
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event         | event number |
            | page segment        | personas                                               | string       | Internal Link | 2            |
            | page intent         | transaccion                                            | string       | Internal Link | 2            |
            | sysEnv              | app                                                    | string       | Internal Link | 2            |
            | business unit       | BBVA Mexico                                            | string       | Internal Link | 2            |
            | page area           | privada                                                | string       | Internal Link | 2            |
            | language            | ES                                                     | string       | Internal Link | 2            |
            | channel             | online                                                 | string       | Internal Link | 2            |
            | site app name       | App BBVA Mexico                                        | string       | Internal Link | 2            |
            | project name        | Glomo                                                  | string       | Internal Link | 2            |
            | level 1             | recargar celular                                       | string       | Internal Link | 2            |
            | level 2             | 1 numero celular                                       | string       | Internal Link | 2            |
            | page name           | app:privada:personas:recargar celular:1 numero celular | string       | Internal Link | 2            |
            | device mobile       | si                                                     | string       | Internal Link | 2            |
            | user segment global | 003001                                                 | string       | Internal Link | 2            |
            | user userState      | logado                                                 | string       | Internal Link | 2            |
            | user gender         | gender                                                 | regexp named | Internal Link | 2            |
            | user age            | age                                                    | regexp named | Internal Link | 2            |

    @ANA_EVENT_MTUP015
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - PAGE MODIFY STEP
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses to the operative account product detail
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user selects the "Telcel" saved contact
        And the user decides to modify the "contact"
        And the user chooses to "confirm" from the modal
        Then the analytics events contains the following variables
            | item                | value                                           | type         | event     | event number |
            | page segment        | personas                                        | string       | Page View | 3            |
            | page intent         | transaccion                                     | string       | Page View | 3            |
            | sysEnv              | app                                             | string       | Page View | 3            |
            | business unit       | BBVA Mexico                                     | string       | Page View | 3            |
            | page area           | privada                                         | string       | Page View | 3            |
            | language            | ES                                              | string       | Page View | 3            |
            | channel             | online                                          | string       | Page View | 3            |
            | site app name       | App BBVA Mexico                                 | string       | Page View | 3            |
            | project name        | Glomo                                           | string       | Page View | 3            |
            | level 1             | recargar celular                                | string       | Page View | 3            |
            | level 2             | modificar                                       | string       | Page View | 3            |
            | page name           | app:privada:personas:recargar celular:modificar | string       | Page View | 3            |
            | device mobile       | si                                              | string       | Page View | 3            |
            | user segment global | 003001                                          | string       | Page View | 3            |
            | user userState      | logado                                          | string       | Page View | 3            |
            | user gender         | gender                                          | regexp named | Page View | 3            |
            | user age            | age                                             | regexp named | Page View | 3            |
            | custom fields       | modificar paso:numero celular                   | string       | Page View | 3            |

    @ANA_EVENT_MTUP016
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - PAGE DELETE CONTACT
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user decides to delete a contact
        And the user chooses to "confirm" from the modal
        Then the analytics events contains the following variables
            | item                | value                                                   | type         | event     | event number |
            | page segment        | personas                                                | string       | Page View | 3            |
            | page intent         | transaccion                                             | string       | Page View | 3            |
            | sysEnv              | app                                                     | string       | Page View | 3            |
            | business unit       | BBVA Mexico                                             | string       | Page View | 3            |
            | page area           | privada                                                 | string       | Page View | 3            |
            | language            | ES                                                      | string       | Page View | 3            |
            | channel             | online                                                  | string       | Page View | 3            |
            | site app name       | App BBVA Mexico                                         | string       | Page View | 3            |
            | project name        | Glomo                                                   | string       | Page View | 3            |
            | level 1             | recargar celular                                        | string       | Page View | 3            |
            | level 2             | eliminar contacto                                       | string       | Page View | 3            |
            | page name           | app:privada:personas:recargar celular:eliminar contacto | string       | Page View | 3            |
            | device mobile       | si                                                      | string       | Page View | 3            |
            | user segment global | 003001                                                  | string       | Page View | 3            |
            | user userState      | logado                                                  | string       | Page View | 3            |
            | user gender         | gender                                                  | regexp named | Page View | 3            |
            | user age            | age                                                     | regexp named | Page View | 3            |

    @ANA_EVENT_MTUP017
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - PAGE VIEW NATIVE AGENDA
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user selects contact from agenda
        Then the analytics events contains the following variables
            | item                | value                                                            | type         | event     | event number |
            | page segment        | personas                                                         | string       | Page View | 3            |
            | page intent         | transaccion                                                      | string       | Page View | 3            |
            | sysEnv              | app                                                              | string       | Page View | 3            |
            | business unit       | BBVA Mexico                                                      | string       | Page View | 3            |
            | page area           | privada                                                          | string       | Page View | 3            |
            | language            | ES                                                               | string       | Page View | 3            |
            | channel             | online                                                           | string       | Page View | 3            |
            | site app name       | App BBVA Mexico                                                  | string       | Page View | 3            |
            | project name        | Glomo                                                            | string       | Page View | 3            |
            | level 1             | recargar celular                                                 | string       | Page View | 3            |
            | level 2             | activar acceso a contactos                                       | string       | Page View | 3            |
            | page name           | app:privada:personas:recargar celular:activar acceso a contactos | string       | Page View | 3            |
            | device mobile       | si                                                               | string       | Page View | 3            |
            | user segment global | 003001                                                           | string       | Page View | 3            |
            | user userState      | logado                                                           | string       | Page View | 3            |
            | user gender         | gender                                                           | regexp named | Page View | 3            |
            | user age            | age                                                              | regexp named | Page View | 3            |

    @ANA_EVENT_MTUP018
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - PAGE VIEW SAVE CONTACT
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup user with tdd     |
        And the user accesses the top up packages page from the operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user fills the form for a new "Bait" number with name "Mariana" "saving the contact"
        Then the analytics events contains the following variables
            | item                | value                                                  | type         | event         | event number |
            | page segment        | personas                                               | string       | Internal Link | 2            |
            | page intent         | transaccion                                            | string       | Internal Link | 2            |
            | sysEnv              | app                                                    | string       | Internal Link | 2            |
            | business unit       | BBVA Mexico                                            | string       | Internal Link | 2            |
            | page area           | privada                                                | string       | Internal Link | 2            |
            | language            | ES                                                     | string       | Internal Link | 2            |
            | channel             | online                                                 | string       | Internal Link | 2            |
            | site app name       | App BBVA Mexico                                        | string       | Internal Link | 2            |
            | project name        | Glomo                                                  | string       | Internal Link | 2            |
            | level 1             | recargar celular                                       | string       | Internal Link | 2            |
            | level 2             | 1 numero celular                                       | string       | Internal Link | 2            |
            | page name           | app:privada:personas:recargar celular:1 numero celular | string       | Internal Link | 2            |
            | device mobile       | si                                                     | string       | Internal Link | 2            |
            | user segment global | 003001                                                 | string       | Internal Link | 2            |
            | user userState      | logado                                                 | string       | Internal Link | 2            |
            | user gender         | gender                                                 | regexp named | Internal Link | 2            |
            | user age            | age                                                    | regexp named | Internal Link | 2            |
            | custom fields       | guardar contacto:guardar                               | string       | Internal Link | 2            |

    @ANA_EVENT_MTUP019
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @vbank-modified
    Scenario: Mobile Top Up Packages - PAGE VIEW ERROR SAVE CONTACT
        Given a user with the following criteria
            | criteria               |
            | mobile top up packages |
            | mtup analytics error   |
        And the user accesses the top up packages page from the operationals page
        And the analytics interceptor service is initiated
        When the user accesses to page top up packages
        And the user fills the form for a new "Bait" number with name "Mariana" "saving the contact"
        And the user retries to save a contact
        Then the analytics events contains the following variables
            | item                | value                                                            | type         | event     | event number |
            | page segment        | personas                                                         | string       | Page View | 4            |
            | page intent         | transaccion                                                      | string       | Page View | 4            |
            | sysEnv              | app                                                              | string       | Page View | 4            |
            | business unit       | BBVA Mexico                                                      | string       | Page View | 4            |
            | page area           | privada                                                          | string       | Page View | 4            |
            | language            | ES                                                               | string       | Page View | 4            |
            | channel             | online                                                           | string       | Page View | 4            |
            | site app name       | App BBVA Mexico                                                  | string       | Page View | 4            |
            | project name        | Glomo                                                            | string       | Page View | 4            |
            | level 1             | recargar celular                                                 | string       | Page View | 4            |
            | level 2             | error contacto sin guardar                                       | string       | Page View | 4            |
            | page name           | app:privada:personas:recargar celular:error contacto sin guardar | string       | Page View | 4            |
            | device mobile       | si                                                               | string       | Page View | 4            |
            | user segment global | 003001                                                           | string       | Page View | 4            |
            | user userState      | logado                                                           | string       | Page View | 4            |
            | user gender         | gender                                                           | regexp named | Page View | 4            |
            | user age            | age                                                              | regexp named | Page View | 4            |
