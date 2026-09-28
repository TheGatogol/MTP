@tipsFinanceAnalytics
Feature: Analytics - Tips Finance

    @ANA_EVENT_YGT001
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: Access to financial education - Analytics footprint
        Given a user with the following criteria
                | criteria      |
                | minor account |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user accesses the financial education operation
        Then the analytics events contains the following variables:
            | item                      | value                                                     | type              | event     |
            | analytics	                | analytics/glomo_base                                      | json schema       | Page View |
            | version DL                | 20250414_5.0	                                            | string            | Page View |
            | page name	                | app:privada:personas:tips financieros jovenes:dashboard   | string            | Page View |
            | level 1                   | tips financieros jovenes	                                | string            | Page View |
            | level 2                   | dashboard	                                                | string            | Page View |
            | language	                | ES	                                                    | string            | Page View |
            | page area	                | privada	                                                | string            | Page View |
            | page intent	            | informacion	                                            | string            | Page View |
            | channel                   | online	                                                | string            | Page View |
            | page instance ID	        | de	                                                    | string            | Page View |
            | page info version	        | appVersion	                                            | regexp named      | Page View |
            | page segment	            | personas	                                                | string            | Page View |
            | sysEnv                    | app	                                                    | string            | Page View |
            | business unit	            | BBVA Mexico	                                            | string            | Page View |
            | site app name	            | App BBVA Mexico	                                        | string            | Page View |
            | project name	            | Glomo	                                                    | string            | Page View |
            | device mobile	            | si	                                                    | string            | Page View |
            | user userState	        | logado	                                                | string            | Page View |
            | user segment global   	| 003001          	                                        | string            | Page View |
            | profile ID	            | profileID	                                                | regexp named      | Page View |
            | user gender	            | gender	                                                | regexp named      | Page View |
            | user age	                | age	                                                    | regexp named      | Page View |
            | internal campaign         |                                                           | empty array       | Page View |
            | optimization attributes   |                                                           | empty array       | Page View |
            | application		        |                                                           | empty str object  | Page View |
            | products attributes	    |                                                           | empty array       | Page View |

    @ANA_EVENT_YGT002
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: Access to category tips in financial education - Analytics internal link
        Given a user with the following criteria
                | criteria      |
                | minor account |
        And the user accesses the financial education operation
        And the analytics interceptor service is initiated
        When the user accesses the account category
        Then the analytics events contains the following variables:
            | item                      | value                                                     | type               | event         |
            | analytics	                | analytics/glomo_base	                                    | json schema        | Internal Link |
            | version DL	            | 20250414_5.0	                                            | string             | Internal Link |
            | page name	                | app:privada:personas:tips financieros jovenes:dashboard   | string             | Internal Link |
            | level 1	                | tips financieros jovenes	                                | string             | Internal Link |
            | level 2	                | dashboard	                                                | string             | Internal Link |
            | language	                | ES	                                                    | string             | Internal Link |
            | page area	                | privada	                                                | string             | Internal Link |
            | page intent	            | informacion	                                            | string             | Internal Link |
            | channel	                | online	                                                | string             | Internal Link |
            | page instance ID	        | de	                                                    | string             | Internal Link |
            | page info version	        | appVersion	                                            | regexp named       | Internal Link |
            | page segment	            | personas	                                                | string             | Internal Link |
            | sysEnv	                | app	                                                    | string             | Internal Link |
            | business unit	            | BBVA Mexico	                                            | string             | Internal Link |
            | site app name	            | App BBVA Mexico	                                        | string             | Internal Link |
            | project name	            | Glomo	                                                    | string             | Internal Link |
            | device mobile	            | si	                                                    | string             | Internal Link |
            | user userState	        | logado	                                                | string             | Internal Link |
            | user segment global	    | 003001	                                                | string             | Internal Link |
            | profile ID	            | profileID	                                                | regexp named       | Internal Link |
            | user gender	            | gender	                                                | regexp named       | Internal Link |
            | user age	                | age	                                                    | regexp named       | Internal Link |
            | link name	                | tema de interes cuenta	                                | string             | Internal Link |
            | internal campaign		    |                                                           | empty array        | Internal Link |
            | optimization attributes	|                                                           | empty array        | Internal Link |
            | application		        |                                                           | empty str object   | Internal Link |
            | products attributes		|                                                           | empty array        | Internal Link |

    @ANA_EVENT_YGT003
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: Access to sliders in financial education - Analytics footprint
        Given a user with the following criteria
                | criteria      |
                | minor account |
        And the user accesses the financial education operation
        And the analytics interceptor service is initiated
        When the user selects first slider from the recent posts section
        Then the analytics events contains the following variables:
            | item                      | value                                                     | type              | event     |
            | analytics	                | analytics/glomo_base	                                    | json schema       | Page View |
            | version DL	            | 20250414_5.0	                                            | string            | Page View |
            | page name	                | app:privada:personas:tips financieros jovenes:apartados	| string            | Page View |
            | level 1	                | tips financieros jovenes	                                | string            | Page View |
            | level 2	                | apartados	                                                | string            | Page View |
            | language	                | ES	                                                    | string            | Page View |
            | page area	                | privada	                                                | string            | Page View |
            | page intent	            | informacion	                                            | string            | Page View |
            | channel	                | online	                                                | string            | Page View |
            | page instance ID	        | de	                                                    | string            | Page View |
            | page info version	        | appVersion	                                            | regexp named      | Page View |
            | page segment	            | personas	                                                | string            | Page View |
            | sysEnv	                | app	                                                    | string            | Page View |
            | business unit	            | BBVA Mexico	                                            | string            | Page View |
            | site app name	            | App BBVA Mexico	                                        | string            | Page View |
            | project name	            | Glomo	                                                    | string            | Page View |
            | device mobile	            | si	                                                    | string            | Page View |
            | user userState	        | logado	                                                | string            | Page View |
            | user segment global	    | 003001	                                                | string            | Page View |
            | profile ID	            | profileID	                                                | regexp named      | Page View |
            | user gender	            | gender	                                                | regexp named      | Page View |
            | user age	                | age	                                                    | regexp named      | Page View |
            | internal campaign		    |                                                           | empty array       | Page View |
            | optimization attributes	|                                                           | empty array       | Page View |
            | application		        |                                                           | empty str object  | Page View |
            | products attributes		|                                                           | empty array       | Page View |

    @ANA_EVENT_YGT004
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: play video to sliders in financial education - Analytics external link
        Given a user with the following criteria
                | criteria      |
                | minor account |
        And the user accesses the first slider item in the recent posts section in the financial education operation
        And the analytics interceptor service is initiated
        When the user plays the video
        Then the analytics events contains the following variables:
            | item                     | value                                                     | type              | event         |
            | analytics	                | analytics/glomo_base	                                    | json schema       | External Link |
            | version DL	            | 20250414_5.0	                                            | string            | External Link |
            | page name	                | app:privada:personas:tips financieros jovenes:apartados	| string            | External Link |
            | level 1	                | tips financieros jovenes	                                | string            | External Link |
            | level 2	                | apartados	                                                | string            | External Link |
            | language	                | ES	                                                    | string            | External Link |
            | page area	                | privada	                                                | string            | External Link |
            | page intent	            | informacion	                                            | string            | External Link |
            | channel	                | online	                                                | string            | External Link |
            | page instance ID	        | de	                                                    | string            | External Link |
            | page info version	        | appVersion	                                            | regexp named      | External Link |
            | page segment	            | personas	                                                | string            | External Link |
            | sysEnv	                | app	                                                    | string            | External Link |
            | business unit	            | BBVA Mexico	                                            | string            | External Link |
            | site app name	            | App BBVA Mexico	                                        | string            | External Link |
            | project name	            | Glomo	                                                    | string            | External Link |
            | device mobile	            | si	                                                    | string            | External Link |
            | user userState	        | logado	                                                | string            | External Link |
            | user segment global	    | 003001	                                                | string            | External Link |
            | profile ID	            | profileID	                                                | regexp named      | External Link |
            | user gender	            | gender	                                                | regexp named      | External Link |
            | user age	                | age	                                                    | regexp named      | External Link |
            | link url	                | ver video	                                                | string            | External Link |
            | internal campaign		    |                                                           | empty array       | External Link |
            | optimization attributes	|                                                           | empty array       | External Link |
            | application		        |                                                           | empty str object  | External Link |
            | products attributes		|                                                           | empty array       | External Link |

    @ANA_EVENT_YGT005
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: Access to categories tips in financial education - Analytics footprint
        Given a user with the following criteria
                | criteria      |
                | minor account |
        And the user accesses the financial education operation
        And the analytics interceptor service is initiated
        When the user accesses any category
        Then the analytics events contains the following variables:
            | item                      | value                                                             | type              | event     |
            | analytics	                | analytics/glomo_base	                                            | json schema       | Page View |
            | version DL	            | 20250414_5.0	                                                    | string            | Page View |
            | page name	                | app:privada:personas:tips financieros jovenes:temas de interes	| string            | Page View |
            | level 1                   | tips financieros jovenes	                                        | string            | Page View |
            | level 2                   | temas de interes	                                                | string            | Page View |
            | language	                | ES	                                                            | string            | Page View |
            | page area	                | privada	                                                        | string            | Page View |
            | page intent	            | informacion	                                                    | string            | Page View |
            | channel                   | online	                                                        | string            | Page View |
            | page instance ID	        | de	                                                            | string            | Page View |
            | page info version	        | appVersion	                                                    | regexp named      | Page View |
            | page segment	            | personas	                                                        | string            | Page View |
            | sysEnv                    | app	                                                            | string            | Page View |
            | business unit	            | BBVA Mexico	                                                    | string            | Page View |
            | site app name	            | App BBVA Mexico	                                                | string            | Page View |
            | project name	            | Glomo	                                                            | string            | Page View |
            | device mobile	            | si	                                                            | string            | Page View |
            | user userState	        | logado	                                                        | string            | Page View |
            | user segment global	    | 003001	                                                        | string            | Page View |
            | profile ID	            | profileID	                                                        | regexp named      | Page View |
            | user gender	            | gender	                                                        | regexp named      | Page View |
            | user age	                | age	                                                            | regexp named      | Page View |
            | internal campaign		    |                                                                   | empty array       | Page View |
            | optimization attributes	|                                                                   | empty array       | Page View |
            | application	            |                                                                   | empty str object  | Page View |
            | products attributes		|                                                                   | empty array       | Page View |

    @ANA_EVENT_YGT006
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: select tabs categories tips in financial education - Analytics interaction link
        Given a user with the following criteria
                | criteria      |
                | minor account |
        And the user accesses the financial education operation
        And the analytics interceptor service is initiated
        When the user selects any tab for any category
        And the user selects "header account" tip in tabs
        Then the analytics events contains the following variables:
            | item                      | value                                                             | type              | event            |
            | analytics	                | analytics/glomo_base	                                            | json schema       | Interaction Link |
            | version DL	            | 20250414_5.0	                                                    | string            | Interaction Link |
            | page name	                | app:privada:personas:tips financieros jovenes:temas de interes	| string            | Interaction Link |
            | level 1	                | tips financieros jovenes	                                        | string            | Interaction Link |
            | level 2	                | temas de interes	                                                | string            | Interaction Link |
            | language	                | ES	                                                            | string            | Interaction Link |
            | page area	                | privada	                                                        | string            | Interaction Link |
            | page intent	            | informacion	                                                    | string            | Interaction Link |
            | channel	                | online	                                                        | string            | Interaction Link |
            | page instance ID	        | de	                                                            | string            | Interaction Link |
            | page info version	        | appVersion	                                                    | regexp named      | Interaction Link |
            | page segment	            | personas	                                                        | string            | Interaction Link |
            | sysEnv	                | app	                                                            | string            | Interaction Link |
            | business unit	            | BBVA Mexico	                                                    | string            | Interaction Link |
            | site app name	            | App BBVA Mexico	                                                | string            | Interaction Link |
            | project name	            | Glomo	                                                            | string            | Interaction Link |
            | device mobile	            | si	                                                            | string            | Interaction Link |
            | user userState	        | logado	                                                        | string            | Interaction Link |
            | user segment global       | 003001          	                                                | string            | Interaction Link |
            | profile ID	            | profileID	                                                        | regexp named      | Interaction Link |
            | user gender	            | gender	                                                        | regexp named      | Interaction Link |
            | user age	                | age	                                                            | regexp named      | Interaction Link |
            | interaction level	        | tab cuenta	                                                    | string            | Interaction Link |
            | internal campaign		    |                                                                   | empty array       | Interaction Link |
            | optimization attributes	|                                                                   | empty array       | Interaction Link |
            | application		        |                                                                   | empty str object  | Interaction Link |
            | products attributes		|                                                                   | empty array       | Interaction Link |

    @ANA_EVENT_YGT007
    @analytics
    @MX @web @ios @android
    @backend(test) @vbank @web-done
    Scenario: select tabs categories tips in financial education - Analytics footprint
        Given a user with the following criteria
                | criteria      |
                | minor account |
        And the user accesses the financial education operation
        And the user accesses any category
        And the analytics interceptor service is initiated
        When the user selects "account" tip in tabs
        Then the analytics events contains the following variables:
            | item                      | value                                                                 | type              | event     |
            | analytics	                | analytics/glomo_base	                                                | json schema       | Page View |
            | version DL	            | 20250414_5.0	                                                        | string            | Page View |
            | page name	                | app:privada:personas:tips financieros jovenes:detalle de articulo	    | string            | Page View |
            | level 1	                | tips financieros jovenes	                                            | string            | Page View |
            | level 2	                | detalle de articulo	                                                | string            | Page View |
            | language	                | ES	                                                                | string            | Page View |
            | page area	                | privada	                                                            | string            | Page View |
            | page intent	            | informacion	                                                        | string            | Page View |
            | channel	                | online	                                                            | string            | Page View |
            | page instance ID	        | de	                                                                | string            | Page View |
            | page info version	        | appVersion	                                                        | regexp named      | Page View |
            | page segment	            | personas	                                                            | string            | Page View |
            | sysEnv	                | app	                                                                | string            | Page View |
            | business unit	            | BBVA Mexico	                                                        | string            | Page View |
            | site app name	            | App BBVA Mexico	                                                    | string            | Page View |
            | project name	            | Glomo	                                                                | string            | Page View |
            | device mobile	            | si	                                                                | string            | Page View |
            | user userState	        | logado	                                                            | string            | Page View |
            | user segment global	    | 003001	                                                            | string            | Page View |
            | profile ID	            | profileID	                                                            | regexp named      | Page View |
            | user gender	            | gender	                                                            | regexp named      | Page View |
            | user age	                | age	                                                                | regexp named      | Page View |
            | custom fields	            | articulo:tu tarjeta en acción                                         | string            | Page View |
            | internal campaign		    |                                                                       | empty array       | Page View |
            | optimization attributes	|                                                                       | empty array       | Page View |
            | application		        |                                                                       | empty str object  | Page View |
            | products attributes		|                                                                       | empty array       | Page View |
