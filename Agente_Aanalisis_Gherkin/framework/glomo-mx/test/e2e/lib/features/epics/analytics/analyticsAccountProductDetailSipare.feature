@analyticsAccountProductDetailSipare
Feature: Analytics - Account Product Detail Sipare

    @ANA_CRCR001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Internal Link - Movement detail - Share voucher certificated
        Given a user with the following criteria
            | criteria                  |
            | resend voucher with email |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        When the user selects the corresponding operative
        Then the device contains the following variables
            | item                    | value                                                                   | type              |
            | analytics	              | analytics/glomo_base	                                                | json schema       |
            | version DL	          | 20250414_5.0	                                                        | string	        |
            | page name	              | app:privada:personas:cuentas:detalle:movimientos:detalle de movimiento  | string	        |
            | level 1	              | cuentas	                                                                | string	        |
            | level 2	              | detalle                                                                 | string	        |
            | level 3	              | movimientos                                                             | string	        |
            | level 4	              | detalle de movimiento                                                   | string	        |
            | language	              | ES	                                                                    | string	        |
            | page area	              | privada	                                                                | string	        |
            | page intent	          | informacion	                                                            | string	        |
            | channel	              | online	                                                                | string	        |
            | page instance ID	      | de	                                                                    | string	        |
            | page info version	      | appVersion	                                                            | regexp named      |
            | page segment	          | personas	                                                            | string	        |
            | sysEnv	              | app	                                                                    | string	        |
            | business unit	          | BBVA Mexico	                                                            | string	        |
            | site app name	          | App BBVA Mexico	                                                        | string	        |
            | project name	          | Glomo	                                                                | string	        |
            | link name               | reenviar comprobante                                                    | string	        |
            | device mobile	          | si	                                                                    | string	        |
            | user userState	      | logado	                                                                | string	        |
            | user segment global     |	003001	                                                                | string	        |
            | profile ID	          | profileID	                                                            | regexp named      |
            | user age	              | age	                                                                    | regexp named      |
            | user gender	          | gender	                                                                | regexp named      |
            | internal campaign	      |                                                                         | empty array       |
            | optimization attributes |	                                                                        | empty array       |
            | products attributes	  |                                                                         | empty array       |
            | application             |                                                                         | empty str object  |

    @ANA_CRCR002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Page View - Movement detail - Success share voucher certificated
        Given a user with the following criteria
            | criteria                  |
            | resend voucher with email |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        When the user selects the corresponding operative
        Then the device contains the following variables
            | item                    | value                                                                                   | type              |
            | analytics	              | analytics/glomo_base	                                                                | json schema       |
            | version DL	          | 20250414_5.0	                                                                        | string	        |
            | page name	              | app:privada:personas:cuentas:detalle:movimientos:detalle de movimiento:reenvio exitoso  | string	        |
            | level 1	              | cuentas	                                                                                | string	        |
            | level 2	              | detalle                                                                                 | string	        |
            | level 3	              | movimientos                                                                             | string	        |
            | level 4	              | detalle de movimiento                                                                   | string	        |
            | level 5                 | reenvio exitoso                                                                         | string	        |
            | language	              | ES	                                                                                    | string	        |
            | page area	              | privada	                                                                                | string	        |
            | page intent	          | informacion	                                                                            | string	        |
            | channel	              | online	                                                                                | string	        |
            | page instance ID	      | de	                                                                                    | string	        |
            | page info version	      | appVersion	                                                                            | regexp named      |
            | page segment	          | personas	                                                                            | string	        |
            | sysEnv	              | app	                                                                                    | string	        |
            | business unit	          | BBVA Mexico	                                                                            | string	        |
            | site app name	          | App BBVA Mexico	                                                                        | string	        |
            | project name	          | Glomo	                                                                                | string	        |
            | device mobile	          | si	                                                                                    | string	        |
            | user userState	      | logado	                                                                                | string	        |
            | user segment global     |	003001	                                                                                | string	        |
            | profile ID	          | profileID	                                                                            | regexp named      |
            | user age	              | age	                                                                                    | regexp named      |
            | user gender	          | gender	                                                                                | regexp named      |
            | internal campaign	      |                                                                                         | empty array       |
            | optimization attributes |	                                                                                        | empty array       |
            | products attributes	  |                                                                                         | empty array       |
            | application             |                                                                                         | empty str object  |

    @ANA_CRCR003
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Page View - Movement detail - Error information not avaible
        Given a user with the following criteria
            | criteria                  |
            | resend voucher with email |
        And the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user selects the corresponding operative
        When the user shares certificate voucher with error
        Then the device contains the following variables
            | item                    | value                                                                                   | type              |
            | analytics	              | analytics/glomo_base	                                                                | json schema       |
            | version DL	          | 20250414_5.0	                                                                        | string	        |
            | page name	              | app:privada:personas:cuentas:detalle:movimientos:detalle de movimiento                  | string	        |
            | level 1	              | cuentas	                                                                                | string	        |
            | level 2	              | detalle                                                                                 | string	        |
            | level 3	              | movimientos                                                                             | string	        |
            | level 4	              | detalle de movimiento                                                                   | string	        |
            | language	              | ES	                                                                                    | string	        |
            | page area	              | privada	                                                                                | string	        |
            | page intent	          | informacion	                                                                            | string	        |
            | channel	              | online	                                                                                | string	        |
            | page instance ID	      | de	                                                                                    | string	        |
            | page info version	      | appVersion	                                                                            | regexp named      |
            | page segment	          | personas	                                                                            | string	        |
            | sysEnv	              | app	                                                                                    | string	        |
            | business unit	          | BBVA Mexico	                                                                            | string	        |
            | site app name	          | App BBVA Mexico	                                                                        | string	        |
            | project name	          | Glomo	                                                                                | string	        |
            | device mobile	          | si	                                                                                    | string	        |
            | user userState	      | logado	                                                                                | string	        |
            | user segment global     |	003001	                                                                                | string	        |
            | profile ID	          | profileID	                                                                            | regexp named      |
            | user age	              | age	                                                                                    | regexp named      |
            | user gender	          | gender	                                                                                | regexp named      |
            | internal campaign	      |                                                                                         | empty array       |
            | optimization attributes |	                                                                                        | empty array       |
            | products attributes	  |                                                                                         | empty array       |
            | application             |                                                                                         | empty str object  |
