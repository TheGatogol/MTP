@sustainabilityCarbonFootprintOffset
Feature: sustainability Carbon Footprint Offset

    @SCFO001
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user accesses to the forestry projects
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        When the user accesses to sustainability carbon footprint offset section
        Then the user sees the following items in the screen
            | item                                   |
            | title contribute to forestry projects  |
            | link how to contribute                 |
            | projects section                       |
            | projects carousel slides               |
            | button contribute to forestry projects |

    @SCFO002
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario Outline: The user selects a project and sees the <stateOfButtonToContinue>
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the contribution project
        When the user selects a different project in step one the "<stateOfButtonToContinue>"
        Then the user sees the following items in the screen
            | item                         |
            | step one title project       |
            | step one text select project |
            | step one radio button        |
            | step one continue button     |

        Examples:
            | stateOfButtonToContinue     |
            | button enabled to continue  |
            | button disabled to continue |

    @SCFO003
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario Outline: The user <selectsContribution>
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the contribution of second step
        When the user "<selectsContribution>" to continue to the next step
        Then the user sees the following items in the screen
            | item                        |
            | step one title project      |
            | step one edit button        |
            | step two title contribution |
            | index of step two           |
            | step two continue button    |

        Examples:
            | selectsContribution            |
            | does not select a contribution |
            | choose the contribution        |
            | selected contribution          |

    @SCFO004
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario Outline: The user select payment method to view the <step>
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the payment method of third step
        When the user enters the "<step>"
        Then the user sees the following items in the screen
            | item                        |
            | step one title project      |
            | step two title contribution |
            | step three payment title    |

        Examples:
            | step       |
            | step three |
            | step four  |

    @SCFO005
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: Pay with BBVA points
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        When the user accesses the payment method and selects to pay with BBVA points
        Then the user sees the following items in the screen
            | item                        |
            | step one title project      |
            | step one edit button        |
            | step two edit button        |
            | step three payment title    |
            | step three edit button      |
            | step four bbva points title |
            | index of step four          |
            | step four continue button   |

    @SCFO006
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user sees the summary of the entire operation
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses the payment method and selects to pay with BBVA points
        When the user accesses to the summary of the entire operation
        Then the user sees the following items in the screen
            | item                        |
            | step one edit button        |
            | step two edit button        |
            | step three edit button      |
            | step four bbva points title |
            | confirm step amount text    |
            | confirm step amount         |
            | confirm step button         |

    @SCFO007
    @MX
    @web @android @ios
    @backend(test)
    @manual @JIRA.GLOMOGL-31643
    @vbank @backend-smoke
    Scenario: Successful contribution screen
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses the payment method and selects to pay with BBVA points
        And the user accesses to the summary of the entire operation
        When the user confirms the transaction
        Then the user sees the following items in the screen
            | item                              |
            | text payment successful           |
            | share button                      |
            | view points and promotions button |

    @SCFO008
    @MX
    @web @android @ios
    @backend(test)
    @manual @JIRA.GLOMOGL-31643
    @vbank @backend-smoke
    Scenario: Exit the successful contribution screen
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses the payment method and selects to pay with BBVA points
        And the user confirms the transaction
        When the user exits the successful contribution screen
        Then the user sees the following items in the screen
            | item                                   |
            | title contribute to forestry projects  |
            | link how to contribute                 |
            | projects section                       |
            | projects carousel slides               |
            | button contribute to forestry projects |

    @SCFO009
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user accesses to forestry project details
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        When the user accesses to project detail from carousel
        Then the user sees the following items in the screen
            | item                                 |
            | project carousel detail header title |
            | project carousel detail header back  |
            | project carousel detail information  |
            | project carousel detail location     |

    @SCFO010
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user returns to the forestry projects
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to project detail from carousel
        When the user goes back to forestry projects
        Then the user sees the following items in the screen
            | item                                   |
            | title contribute to forestry projects  |
            | link how to contribute                 |
            | projects section                       |
            | projects carousel slides               |
            | button contribute to forestry projects |

    @SCFO011
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user accesses to the forestry projects step one
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        When the user accesses to forestry project detail in step one
        Then the user sees the following items in the screen
            | item                                   |
            | project modal step one title           |
            | project modal step one exit            |
            | project modal step one name            |
            | project modal step one location        |
            | project modal step one information     |
            | project modal step one information box |

    @SCFO012
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user returns to the forestry projects step one
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to forestry project detail in step one
        And the user goes back to project detail in step one
        When the user selects a different project in step one to continue
        Then the user sees the following items in the screen
            | item                         |
            | step one title project       |
            | step one text select project |
            | step one radio button        |
            | step one continue button     |

    @SCFO013
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user accesses to Information on how to contribute
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        When the user accesses to how to contribute
        Then the user sees the following items in the screen
            | item                                       |
            | how to contribute modal title              |
            | modal button to close                      |
            | how to contribute modal information        |
            | how to contribute modal second information |

    @SCFO014
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user exits the information on how to contribute
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to how to contribute
        When the user exits the how to contribute modal
        Then the user sees the following items in the screen
            | item                                  |
            | title contribute to forestry projects |
            | link how to contribute                |
            | projects section                      |
            | projects carousel slides              |

    @SCFO015
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user accesses the question about project management
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the help section
        When the user accesses to the project management question
        Then the user sees the following items in the screen
            | item               |
            | faq header title   |
            | faq header close   |
            | faq detail title   |
            | faq detail content |

    @SCFO016
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user exits the modal the question about project management
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the help section
        And the user accesses to the project management question
        When the user exits the question modal
        Then the user sees the following items in the screen
            | item                    |
            | list faqs header title  |
            | list faqs header close  |
            | list faqs title         |
            | link project management |

    @SCFO017
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user accesses the question what is mexico
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the help section
        When the user accesses to what is mexico
        Then the user sees the following items in the screen
            | item               |
            | faq header title   |
            | faq header close   |
            | faq detail title   |
            | faq detail content |

    @SCFO018
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user exits the modal the question what is mexico
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the help section
        And the user accesses to what is mexico
        When the user exits the question modal
        Then the user sees the following items in the screen
            | item                   |
            | list faqs header title |
            | list faqs header close |
            | list faqs title        |
            | link whats is mexico   |

    @SCFO019
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user accesses the question how to use points
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the help section
        When the user accesses to how to use points
        Then the user sees the following items in the screen
            | item               |
            | faq header title   |
            | faq header close   |
            | faq detail title   |
            | faq detail content |

    @SCFO020
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user exits the modal the question how to use points
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the help section
        And the user accesses to how to use points
        When the user exits the question modal
        Then the user sees the following items in the screen
            | item                   |
            | list faqs header title |
            | list faqs header close |
            | list faqs title        |
            | link how use points    |

    @SCFO021
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user accesses the question payment security
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the help section
        When the user accesses to payment security
        Then the user sees the following items in the screen
            | item               |
            | faq header title   |
            | faq header close   |
            | faq detail title   |
            | faq detail content |

    @SCFO022
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user exits the modal the question payment security
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the help section
        And the user accesses to payment security
        When the user exits the question modal
        Then the user sees the following items in the screen
            | item                   |
            | list faqs header title |
            | list faqs header close |
            | list faqs title        |
            | link payment security  |

    @SCFO023
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user accesses the question why cant you contribute
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the help section
        When the user accesses to why cant you contribute
        Then the user sees the following items in the screen
            | item               |
            | faq header title   |
            | faq header close   |
            | faq detail title   |
            | faq detail content |

    @SCFO024
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user exits the modal the question why cant you contribute
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the help section
        And the user accesses to why cant you contribute
        When the user exits the question modal
        Then the user sees the following items in the screen
            | item                         |
            | list faqs header title       |
            | list faqs header close       |
            | list faqs title              |
            | link why cant you contribute |

    @SCFO025
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke @smokeTest
    Scenario Outline: The user modifies the project in the multiStep with the <scenario>
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses the payment method and selects to pay with BBVA points
        And the user accesses to the summary of the entire operation
        And the user modifies the project selection
        When the user selects another project with "<scenario>"
        Then the user sees the following items in the screen
            | item                   |
            | step one title project |

        Examples:
            | scenario               |
            | radio button displayed |
            | radio button selected  |
            | step two displayed     |

    @SCFO026
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user exits the multiStep without modifying data
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the contribution project
        When the user exits in the first step of multiStep without selecting any project
        Then the user sees the following items in the screen
            | item                                   |
            | title contribute to forestry projects  |
            | link how to contribute                 |
            | projects section                       |
            | projects carousel slides               |
            | button contribute to forestry projects |

    @SCFO027
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user exits the multiStep with modified data
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the contribution of second step
        When the user exits in the first step of multiStep without selecting any project
        Then the user sees the following items in the screen
            | item                               |
            | exit operation modal header title  |
            | exit operation modal header button |
            | exit operation modal content       |
            | exit operation modal footer button |
            | exit operation modal footer link   |

    @SCFO028
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: The user exits the multiStep from warning modal
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the contribution of second step
        And the user exits in the first step of multiStep without selecting any project
        When the user exits from warning modal
        Then the user sees the following items in the screen
            | item                                   |
            | title contribute to forestry projects  |
            | link how to contribute                 |
            | projects section                       |
            | projects carousel slides               |
            | button contribute to forestry projects |

    @SCFO029
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario Outline: Consult tooltip screen <query>
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
            | with contributions                          |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        When the user enters into the "<query>" screen
        Then the user sees the following items in the screen
            | item                       |
            | tooltip modal header       |
            | tooltip modal button close |
            | tooltip modal title        |
            | tooltip modal content      |

        Examples:
            | query                        |
            | your contributions this year |
            | emissions addressed          |
            | emissions this year          |
            | actions                      |
            | estimate emissions           |
            | maximum emissions            |

    @SCFO030
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: Validate option see more of your contributions section
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
            | with contributions                          |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        When the user enters into the "contributions learn more" screen
        Then the user sees the following items in the screen
            | item                           |
            | contributions header           |
            | contributions back button      |
            | contributions card date        |
            | contributions card title       |
            | contributions card amount      |
            | contributions card description |

    @SCFO031
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: Validate info icon of actions section
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
            | with contributions                          |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        When the user accesses to the actions section
        Then the user accesses the "sustainability section" screen

    @SCFO032
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: Validate option see more of emissions this year section
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
            | with contributions                          |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        When the user accesses to the emissions learn more screen
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | overview             |
            | news section         |
            | glossary section     |

    @SCFO033
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: Check the details of a contribution made
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
            | with contributions                          |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user enters into the "contributions learn more" screen
        When the user enters into the contribution detail
        Then the user sees the following items in the screen
            | item                            |
            | contribution detail header      |
            | contribution detail back button |
            | contribution detail date        |
            | contribution detail title       |
            | contribution detail amount      |
            | contribution detail description |

    @SCFO034
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: Check list of available projects
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
            | with contributions                          |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user enters into the "know the proyects" screen
        When the user returns to sustainability carbon footprint offset section
        Then the user sees the following items in the screen
            | item                                   |
            | title contribute to forestry projects  |
            | link how to contribute                 |
            | projects section                       |
            | projects carousel slides               |
            | button contribute to forestry projects |

    @SCFO035
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: Modify contribution amount
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the payment method of third step
        When the user modifies the contribution amount
        Then the user sees the following items in the screen
            | item                        |
            | step one title project      |
            | step one edit button        |
            | step two title contribution |
            | index of step two           |
            | step two continue button    |

    @SCFO036
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: Modify payment method
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses to the payment method of third step
        And the user enters the "step three"
        When the user modifies the payment method
        Then the user sees the following items in the screen
            | item                        |
            | step one title project      |
            | step one edit button        |
            | step two title contribution |
            | step two edit button        |
            | step three payment title    |

    @SCFO037
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: Modify payment with points
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user accesses the payment method and selects to pay with BBVA points
        And the user accesses to the summary of the entire operation
        When the user modifies the payment with points
        Then the user sees the following items in the screen
            | item                        |
            | step one edit button        |
            | step two edit button        |
            | step three edit button      |
            | step four bbva points title |
            | confirm step amount text    |
            | confirm step amount         |
            | confirm step button         |

    @SCFO038
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario Outline: Validate error message from section <section>
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
            | with contributions                          |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        When the user retrys operation with the "link"
        Then the user sees the following items in the screen
            | item                  |
            | message error icon    |
            | message error content |

        Examples:
            | section           |
            | forestry proyects |
            | contributions     |

    @SCFO039
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: Validate error when consulting list of contributions
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
            | with contributions                          |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user enters into the "contributions learn more" screen
        When the user retrys operation with the "button"
        Then the user sees the following items in the screen
            | item                     |
            | modal error header       |
            | modal error close button |
            | modal error icon         |
            | modal error content      |
            | modal error exit link    |

    @SCFO040
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: Validate error when consulting the detail of a contribution
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
            | with contributions                          |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        And the user enters into the "contributions learn more" screen
        And the user enters into the contribution detail
        When the user retrys operation with the "button"
        Then the user sees the following items in the screen
            | item                     |
            | modal error header       |
            | modal error close button |
            | modal error icon         |
            | modal error content      |
            | modal error exit link    |

    @SCFO041
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done @backend-smoke
    Scenario: Validate when the user does not have a digital card
        Given a user with the following criteria
            | criteria                                                          |
            | sustainability carbon footprint offset user without digital cards |
        And the user accesses to sustainability section
        And the user accesses to sustainability carbon footprint offset section
        When the user accesses to the contribution project
        Then the user sees the following items in the screen
            | item                            |
            | digital card alert header       |
            | digital card alert close button |
            | digital card alert content      |

    @SCFO042
    @MX
    @web @android @ios
    @backend(test)
    @vbank @web-done
    Scenario: Validate error screen when more than one service fails
        Given a user with the following criteria
            | criteria                                    |
            | sustainability carbon footprint offset user |
            | with contributions                          |
        And the user accesses to sustainability section
        When the user accesses to sustainability carbon footprint offset section
        Then the user sees the following items in the screen
            | item                     |
            | modal error header       |
            | modal error close button |
            | modal error icon         |
            | modal error content      |
            | modal error retry button |
            | modal error exit link    |
