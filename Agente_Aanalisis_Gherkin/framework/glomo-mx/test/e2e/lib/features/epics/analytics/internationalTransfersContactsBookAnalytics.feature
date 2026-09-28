@internationalTransferContactsAnalytics
Feature: Analytics - International Transfer Contacts Book

    @ANA_ITT001
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario Outline: Access the international transfers flow at the <step>
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "<step>" option in the international transfer flow
        Then the device contains the following variables
            | item                     | value                                                         | type         |
            | analytics                | analytics/glomo_base                                          | json schema  |
            | application typology     | <typology>                                                    | string       |
            | business unit            | BBVA Mexico                                                   | string       |
            | channel                  | online                                                        | string       |
            | custom fields            | <custom_fields>                                               | string       |
            | device mobile            | si                                                            | string       |
            | language                 | ES                                                            | string       |
            | level 1                  | transferencias internacionales                                | string       |
            | level 2                  | <level_2>                                                     | string       |
            | page area                | privada                                                       | string       |
            | page info version        | appVersion                                                    | regexp named |
            | page instance ID         | de                                                            | string       |
            | page intent              | transaccion                                                   | string       |
            | page name                | app:privada:personas:transferencias internacionales:<level_2> | string       |
            | page segment             | personas                                                      | string       |
            | product primary category | <primary_category>                                            | string       |
            | profile ID               | profileID                                                     | regexp named |
            | project name             | Glomo                                                         | string       |
            | site app name            | App BBVA Mexico                                               | string       |
            | sysEnv                   | app                                                           | string       |
            | user age                 | age                                                           | regexp named |
            | user gender              | gender                                                        | regexp named |
            | user segment global      | 003001                                                        | string       |
            | user userState           | logado                                                        | string       |

        Examples:
            | step              | level_2               | typology      | custom_fields                                                                                                                                                                      | primary_category |
            | new contact       | 2 destinatario        |               |                                                                                                                                                                                    | cuentas          |
            | activity economic | 3 actividad economica | nicollet mall | relacion:personal,pais:estados unidos                                                                                                                                              | cuentas          |
            | foreign change    | 4 importe             | nicollet mall | relacion:personal,pais:estados unidos,campo actividad economica local:informado,campo actividad economica en el extranjero:informado,check actividad economica en el extranjero:si | cuentas          |

    @ANA_ITT002
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario Outline: Access the international transfers flow at the <step> with <amount>
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        And the analytics interceptor service is initiated
        When the user selects the "<step>" option in the international transfer flow
        Then the analytics events contains the following variables
            | item                     | value                                                         | type         | event        |
            | analytics                | analytics/glomo_base                                          | json schema  | <event_type> |
            | application offer        | <offer>                                                       | string       | <event_type> |
            | application typology     | <typology>                                                    | string       | <event_type> |
            | application process      | <process>                                                     | string       | <event_type> |
            | business unit            | BBVA Mexico                                                   | string       | <event_type> |
            | channel                  | online                                                        | string       | <event_type> |
            | custom fields            | <custom_fields>                                               | string       | <event_type> |
            | device mobile            | si                                                            | string       | <event_type> |
            | language                 | ES                                                            | string       | <event_type> |
            | level 1                  | transferencias internacionales                                | string       | <event_type> |
            | level 2                  | <level_2>                                                     | string       | <event_type> |
            | page area                | privada                                                       | string       | <event_type> |
            | page info version        | appVersion                                                    | regexp named | <event_type> |
            | page instance ID         | de                                                            | string       | <event_type> |
            | page intent              | transaccion                                                   | string       | <event_type> |
            | page name                | app:privada:personas:transferencias internacionales:<level_2> | string       | <event_type> |
            | page segment             | personas                                                      | string       | <event_type> |
            | product primary category | <primary_category>                                            | string       | <event_type> |
            | profile ID               | profileID                                                     | regexp named | <event_type> |
            | project name             | Glomo                                                         | string       | <event_type> |
            | site app name            | App BBVA Mexico                                               | string       | <event_type> |
            | sysEnv                   | app                                                           | string       | <event_type> |
            | user age                 | age                                                           | regexp named | <event_type> |
            | user gender              | gender                                                        | regexp named | <event_type> |
            | user segment global      | 003001                                                        | string       | <event_type> |
            | user userState           | logado                                                        | string       | <event_type> |
            | application state        | <state>                                                       | string       | <event_type> |
            | product amount           | <amount>                                                      | number       | <event_type> |
            | product quantity         | <quantity>                                                    | number       | <event_type> |
            | product currency         | <currency>                                                    | string       | <event_type> |

        Examples:
            | step           | level_2        | typology      | custom_fields                                                                                                                                                                                  | primary_category | amount | quantity | currency | process | offer                                  | state      | event_type    |
            | concept        | 5 concepto     | nicollet mall | relacion:personal,pais:estados unidos,campo actividad economica local:informado,campo actividad economica en el extranjero:informado,check actividad economica en el extranjero:si             | cuentas          | 1000   | 54.44    | mxn      | usd     |                                        |            | App Step 5    |
            | confirmation   | 6 confirmacion | nicollet mall | relacion:personal,pais:estados unidos,campo actividad economica local:informado,campo actividad economica en el extranjero:informado,check actividad economica en el extranjero:si             | cuentas          | 1000   | 54.44    | mxn      | usd     | pago de honorarios, sueldos o viaticos |            | App Step 6    |
            | error modal    | pagina exitosa | nicollet mall | relacion:personal,pais:estados unidos,campo actividad economica local:informado,campo actividad economica en el extranjero:vacio,check actividad economica en el extranjero:no                 | cuentas          | 234    | 12.74    | mxn      | usd     | pago de honorarios, sueldos o viaticos | rechazado  | App Completed |
            | success modal  | pagina exitosa | nicollet mall | relacion:personal,pais:estados unidos,campo actividad economica local:informado,campo actividad economica en el extranjero:informado,check actividad economica en el extranjero:si             | cuentas          | 1000   | 54.44    | mxn      | usd     | pago de honorarios, sueldos o viaticos | finalizado | App Completed |
            | security modal | 7 otp          | nicollet mall | relacion:personal,pais:estados unidos,campo actividad economica local:informado,campo actividad economica en el extranjero:informado,check actividad economica en el extranjero:si,firma:token | cuentas          | 1000   | 54.44    | mxn      | usd     | pago de honorarios, sueldos o viaticos |            | App Step 7    |

    @ANA_ITT003
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: The user accesses to international transfers with more than one account
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        When the user accesses to make an international transfer of the select operation
        Then the device contains the following variables
            | item                | value                                                                    | type         |
            | analytics           | analytics/glomo_base                                                     | json schema  |
            | business unit       | BBVA Mexico                                                              | string       |
            | channel             | online                                                                   | string       |
            | device mobile       | si                                                                       | string       |
            | language            | ES                                                                       | string       |
            | level 1             | transferencias internacionales                                           | string       |
            | level 2             | seleccion de cuentas                                                     | string       |
            | page area           | privada                                                                  | string       |
            | page info version   | appVersion                                                               | regexp named |
            | page instance ID    | de                                                                       | string       |
            | page intent         | transaccion                                                              | string       |
            | page name           | app:privada:personas:transferencias internacionales:seleccion de cuentas | string       |
            | page segment        | personas                                                                 | string       |
            | profile ID          | profileID                                                                | regexp named |
            | project name        | Glomo                                                                    | string       |
            | site app name       | App BBVA Mexico                                                          | string       |
            | sysEnv              | app                                                                      | string       |
            | user age            | age                                                                      | regexp named |
            | user gender         | gender                                                                   | regexp named |
            | user segment global | 003001                                                                   | string       |
            | user userState      | logado                                                                   | string       |

    @ANA_ITT004
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: The user accesses to contact book
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "contact book" option in the international transfer flow
        Then the device contains the following variables
            | item                | value                                                                   | type         |
            | analytics           | analytics/glomo_base                                                    | json schema  |
            | business unit       | BBVA Mexico                                                             | string       |
            | channel             | online                                                                  | string       |
            | device mobile       | si                                                                      | string       |
            | language            | ES                                                                      | string       |
            | level 1             | transferencias internacionales                                          | string       |
            | level 2             | agenda de contactos                                                     | string       |
            | page area           | privada                                                                 | string       |
            | page info version   | appVersion                                                              | regexp named |
            | page instance ID    | de                                                                      | string       |
            | page intent         | transaccion                                                             | string       |
            | page name           | app:privada:personas:transferencias internacionales:agenda de contactos | string       |
            | page segment        | personas                                                                | string       |
            | profile ID          | profileID                                                               | regexp named |
            | project name        | Glomo                                                                   | string       |
            | site app name       | App BBVA Mexico                                                         | string       |
            | sysEnv              | app                                                                     | string       |
            | user age            | age                                                                     | regexp named |
            | user gender         | gender                                                                  | regexp named |
            | user segment global | 003001                                                                  | string       |
            | user userState      | logado                                                                  | string       |

    @ANA_ITT005
    @analytics
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: The user accesses to delete contact
        Given a user with the following criteria
            | criteria                             |
            | contact book international transfers |
        And the user accesses to make an international transfer of the select operation
        When the user selects the "delete contact" option in the international transfer flow
        Then the device contains the following variables
            | item                | value                                                                                     | type         |
            | analytics           | analytics/glomo_base                                                                      | json schema  |
            | business unit       | BBVA Mexico                                                                               | string       |
            | channel             | online                                                                                    | string       |
            | device mobile       | si                                                                                        | string       |
            | language            | ES                                                                                        | string       |
            | level 1             | transferencias internacionales                                                            | string       |
            | level 2             | agenda de contactos                                                                       | string       |
            | level 3             | eliminar contacto                                                                         | string       |
            | page area           | privada                                                                                   | string       |
            | page info version   | appVersion                                                                                | regexp named |
            | page instance ID    | de                                                                                        | string       |
            | page intent         | transaccion                                                                               | string       |
            | page name           | app:privada:personas:transferencias internacionales:agenda de contactos:eliminar contacto | string       |
            | page segment        | personas                                                                                  | string       |
            | profile ID          | profileID                                                                                 | regexp named |
            | project name        | Glomo                                                                                     | string       |
            | site app name       | App BBVA Mexico                                                                           | string       |
            | sysEnv              | app                                                                                       | string       |
            | user age            | age                                                                                       | regexp named |
            | user gender         | gender                                                                                    | regexp named |
            | user segment global | 003001                                                                                    | string       |
            | user userState      | logado                                                                                    | string       |
