@ocMetasegura
Feature: OC Meta Segura

    @MSD001
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Happy Path - Successfull contraction
        Given a user with the following criteria
            | criteria        |
            | MSD Contracting |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        When the user accesses to the meta segura success page
        Then the user accesses the "meta segura success" screen

    @MSD003
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify What You Should Know Modal
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "what you should know" modal
        When the user opens the expandable questions
        Then the user sees the following items in the screen
            | item                               |
            | what you should know exit button   |
            | what you should know icon          |
            | goal in dollars section title      |
            | how does it work question          |
            | how does it work answer            |
            | how to grow it question            |
            | how to grow it answer              |
            | life insurance section title       |
            | since when question                |
            | since when answer                  |
            | plan details section title         |
            | what happens when question         |
            | what happens when answer           |
            | should i pay taxes question        |
            | should i pay taxes answer          |
            | what you should know accept button |

    @MSD004
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify exit from what you should know modal with continue button
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "what you should know" modal
        When the user closes the modal
        Then the user sees the following items in the screen
            | item                    |
            | offer detail desciption |

    @MSD005
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify Questionnaire elements
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        When the user accesses to the "questionnaire" step of the metasegura offer
        Then the user sees the following items in the screen
            | item                              |
            | questionnaire header              |
            | questionnaire description         |
            | questionnaire question            |
            | questionnaire information message |
            | diabetes option                   |
            | cancer option                     |
            | heart disease option              |
            | emphysema option                  |
            | hepatic option                    |
            | healty option                     |
            | questionnaire notification panel  |
            | questionnaire privacy notice      |
            | questionnaire privacy notice link |
            | questionnaire continue button     |

    @MSD006
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify Privacy Notice modal elements
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "questionnaire" step of the metasegura offer
        When the user accesses to the "privacy notice" modal
        Then the user sees the following items in the screen
            | item                |
            | modal exit button   |
            | modal text          |
            | modal accept button |

    @MSD007
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify exit from Privacy Notice modal with accept button
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "questionnaire" step of the metasegura offer
        And the user accesses to the "privacy notice" modal
        When the user closes the modal
        Then the user sees the following items in the screen
            | item                         |
            | questionnaire privacy notice |

    @MSD008
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario Outline: Verify rejection modal for <disease> as health condition
        Given a user with the following criteria
            | criteria              |
            | MSD Health Rejections |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "questionnaire" step of the metasegura offer
        When the user selects "<disease>" as health condition and continues
        Then the user sees the following items in the screen
            | item                        |
            | modal icon                  |
            | rejection modal title       |
            | modal text                  |
            | rejection modal exit button |

        Examples:
            | disease       |
            | cancer        |
            | heart disease |
            | emphysema     |
            | hepatic       |

    @MSD009
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario Outline: Verify exit from rejection modal for <disease>
        Given a user with the following criteria
            | criteria              |
            | MSD Health Rejections |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "questionnaire" step of the metasegura offer
        When the user selects "<disease>" as health condition and continues
        And the user closes the modal
        Then the user accesses the "contract product section" screen

        Examples:
            | disease       |
            | cancer        |
            | heart disease |
            | emphysema     |
            | hepatic       |

    @MSD010
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify disabling of options after selecting healty as option
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "questionnaire" step of the metasegura offer
        When the user selects "healty" as health condition
        Then the user sees the following items in the screen
            | item                 | value    |
            | diabetes option      | disabled |
            | cancer option        | disabled |
            | heart disease option | disabled |
            | emphysema option     | disabled |
            | hepatic option       | disabled |

    @MSD011
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify continuation of offer when selecting diabetes as a health condition
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "questionnaire" step of the metasegura offer
        When the user selects "diabetes" as health condition and continues
        Then the user sees the following items in the screen
            | item            |
            | quotation title |

    @MSD012
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify Quotation section elements
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        When the user accesses to the "quotation" step of the metasegura offer
        Then the user sees the following items in the screen
            | item                           |
            | quotation exit button          |
            | quotation title                |
            | quotation how much title       |
            | quotation description          |
            | quotation amount input         |
            | quotation input subtext        |
            | quotation currency convertion  |
            | quotation how long title       |
            | quotation time label           |
            | quotation time range           |
            | quotation time range knob      |
            | quotation monthly contribution |
            | quotation continue button      |

    @MSD013
    @web @ios @android
    @MX @backend(test) @vbank @manual @JIRA.GLOMOGL-26301
    @alternate-scenarios-smoke
    Scenario: Verify time bar slide simulation
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user accesses to the "quotation" step of the metasegura offer
        When the user changes the contract period to the max allowed
        Then the user sees the following items in the screen
            | item                 | value |
            | quotation time label | max   |

    @MSD014
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify input of special characters in goal input
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "quotation" step of the metasegura offer
        When the user inputs "sS/-?+" as the goal
        Then the user sees the following items in the screen
            | item                   | value |
            | quotation amount input | empty |

    @MSD015
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario Outline: Verify error message after inputting <proportion> than the amount permitted in Goal Amount
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "quotation" step of the metasegura offer
        When the user inputs "<value>" as the goal
        Then the user sees the following items in the screen
            | item                          | value        |
            | quotation input error message | <proportion> |

        Examples:
            | proportion | value  |
            | less       | 5000   |
            | more       | 201000 |

    @MSD016
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario Outline: Verify <crit1> user type proposed payments and amounts
        Given a user with the following criteria
            | criteria |
            | <crit1>  |
            | <crit2>  |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        When the user accesses to the "quotation" step of the metasegura offer
        Then the user sees the following items in the screen
            | item                         | value       |
            | quotation proposed minimum   | <minLimit>  |
            | quotation proposed maximum   | <maxLimit>  |
            | quotation amount input       | <sugstGoal> |
            | quotation time label         | <sugstTime> |
            | quotation time range minimum | <minTime>   |
            | quotation time range maximum | <maxTime>   |

        Examples:
            | crit1           | crit2           | minLimit | maxLimit | sugstGoal | sugstTime | minTime | maxTime |
            | MSD A1 S2       | younger than 40 | 6,000    | 200,000  | 6,000     | 4         | 4       | 8       |
            | MSD Personal    | older than 40   | 6,000    | 200,000  | 15,000    | 6         | 6       | 20      |
            | MSD Patrimonial | younger than 40 | 6,000    | 200,000  | 60,000    | 4         | 4       | 20      |

    @MSD017
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario Outline: Verify time range of a <crit2> <crit1> user with a <sugstGoal> goal
        Given a user with the following criteria
            | criteria |
            | <crit1>  |
            | <crit2>  |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        When the user accesses to the "quotation" step of the metasegura offer
        And the user inputs "<sugstGoal>" as the goal
        Then the user sees the following items in the screen
            | item                         | value       |
            | quotation proposed minimum   | <minLimit>  |
            | quotation proposed maximum   | <maxLimit>  |
            | quotation time label         | <sugstTime> |
            | quotation time range minimum | <minTime>   |
            | quotation time range maximum | <maxTime>   |

        Examples:
            | crit1     | crit2           | minLimit | maxLimit | sugstGoal | sugstTime | minTime | maxTime |
            | MSD A1 S2 | younger than 40 | 6,000    | 200,000  | 6 000     | 4         | 4       | 8       |
            | MSD A1 S2 | younger than 40 | 6,000    | 200,000  | 8 000     | 4         | 4       | 12      |
            | MSD A1 S2 | younger than 40 | 6,000    | 200,000  | 10 000    | 4         | 4       | 20      |
            | MSD A1 S2 | older than 40   | 6,000    | 200,000  | 6 000     | 6         | 6       | 8       |
            | MSD A1 S2 | older than 40   | 6,000    | 200,000  | 8 000     | 6         | 6       | 12      |
            | MSD A1 S2 | older than 40   | 6,000    | 200,000  | 10 000    | 6         | 6       | 20      |

    @MSD018
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario Outline: Verify maximum time range after inputting <goal> as goal amount
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "quotation" step of the metasegura offer
        When the user inputs "<goal>" as the goal
        Then the user sees the following items in the screen
            | item                         | value  |
            | quotation time range maximum | <time> |

        Examples:
            | goal  | time |
            | 6000  | 8    |
            | 7000  | 8    |
            | 8000  | 12   |
            | 9000  | 12   |
            | 10000 | 20   |

    @MSD019
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify error message when inputting numbers not multiple of 1,000
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "quotation" step of the metasegura offer
        When the user inputs "6100" as the goal
        Then the user sees the following items in the screen
            | item                          | value        |
            | quotation input error message | not multiple |

    @MSD020
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify max limit offer having previous goal contracts
        Given a user with the following criteria
            | criteria    |
            | MSD Limited |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        When the user accesses to the "quotation" step of the metasegura offer
        Then the user sees the following items in the screen
            | item                       | value   |
            | quotation proposed maximum | limited |

    @MSD021
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify exchange rate calculation
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "quotation" step of the metasegura offer
        When the user inputs "50000" as the goal
        Then the user sees the following items in the screen
            | item                           | value                 |
            | quotation currency convertion  | correct exchange rate |
            | quotation monthly contribution | correct exchange rate |

    @MSD022
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify offer for a user that chose diabetes as health option
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "questionnaire" step of the metasegura offer
        When the user selects "diabetes" as health condition and continues
        Then the user sees the following items in the screen
            | item                         | value  |
            | quotation proposed maximum   | 20,000 |
            | quotation time range maximum | 12     |

    @MSD023
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario Outline: Verify the minimum time range of a user <age> years of age
        Given a user with the following criteria
            | criteria |
            | <age>    |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        When the user accesses to the "quotation" step of the metasegura offer
        Then the user sees the following items in the screen
            | item                         | value     |
            | quotation time range minimum | <minTime> |

        Examples:
            | age             | minTime |
            | younger than 40 | 4       |
            | older than 40   | 6       |

    @MSD024
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify the section Personal Savings
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        When the user accesses to the "personal savings" step of the metasegura offer
        Then the user sees the following items in the screen
            | item                                   |
            | personal savings title                 |
            | personal savings description           |
            | personal savings goal title            |
            | contract period change button          |
            | personal savings goal amount           |
            | personal savings goal text             |
            | personal savings goal localized        |
            | personal savings exchange rate         |
            | personal savings contract period       |
            | personal savings frequency title       |
            | personal savings frequency description |
            | personal savings monthly card          |
            | personal savings yearly card           |
            | personal savings anual info            |
            | personal savings payment info          |
            | executive card title                   |
            | executive card icon                    |
            | executive card question                |
            | open executive code modal button       |
            | personal savings panel                 |
            | personal savings continue button       |

    @MSD025
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify the yearly payment discount
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "personal savings" step of the metasegura offer
        When the user selects the "yearly" payment option
        Then the user sees the following items in the screen
            | item                         | value           |
            | personal savings yearly card | yearly discount |

    @MSD026
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify the Executive Code modal elements
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "personal savings" step of the metasegura offer
        When the user accesses to the "executive code" modal
        Then the user sees the following items in the screen
            | item                             |
            | executive code header            |
            | executive code exit button       |
            | executive code icon              |
            | executive code text              |
            | executive code input             |
            | executive code input message     |
            | executive code apply button      |
            | executive code exit without code |

    @MSD027
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify the deletion of the executive code
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "personal savings" step of the metasegura offer
        And the user registers an executive code
        When the user deletes the registered executive code
        Then the user does not see the following items in the screen
            | item                   | value       |
            | applied executive code | not visible |

    @MSD028
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify Executive Code modal error message
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "personal savings" step of the metasegura offer
        And the user accesses to the "executive code" modal
        When the user inputs an invalid code as executive code
        Then the user sees the following items in the screen
            | item                         |
            | executive code error message |

    @MSD029
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify the Beneficiaries section elements
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "beneficiaries" step of the metasegura offer
        When the user adds "2" beneficiaries
        Then the user sees the following items in the screen
            | item                                 |
            | beneficiaries title                  |
            | beneficiaries description            |
            | beneficiaries learn more button      |
            | beneficiaries list                   |
            | first beneficiary name               |
            | first beneficiary edit button        |
            | first beneficiary delete button      |
            | first beneficiary percentage         |
            | second beneficiary name              |
            | second beneficiary edit button       |
            | second beneficiary delete button     |
            | second beneficiary percentage        |
            | beneficiaries add button             |
            | beneficiaries edit percentage button |
            | beneficiaries continue button        |

    @MSD030
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify the Beneficiary modal elements
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "beneficiaries" step of the metasegura offer
        When the user accesses to the "beneficiary" modal
        Then the user sees the following items in the screen
            | item                                |
            | beneficiary input name              |
            | beneficiary input lastname          |
            | beneficiary input second lastname   |
            | beneficiary relationship            |
            | beneficiary birthday                |
            | beneficiary same address            |
            | beneficiary address                 |
            | beneficiary new address             |
            | beneficiary register address button |
            | beneficiary continue button         |

    @MSD031
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify Know More Modal
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "beneficiaries" step of the metasegura offer
        When the user accesses to the "know more" modal
        Then the user sees the following items in the screen
            | item                       |
            | modal exit button          |
            | modal image                |
            | modal text                 |
            | modal detailed information |
            | modal accept button        |

    @MSD032
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify Know More Modal exit
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "beneficiaries" step of the metasegura offer
        And the user accesses to the "know more" modal
        When the user closes the modal
        Then the user sees the following items in the screen
            | item                |
            | beneficiaries title |

    @MSD033
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify the edition of a beneficiary
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "beneficiaries" step of the metasegura offer
        And the user adds "2" beneficiaries
        When the user edits a beneficiary
        Then the user sees the following items in the screen
            | item                   | value  |
            | first beneficiary name | edited |

    @MSD034
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify the deletion of a beneficiary
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "beneficiaries" step of the metasegura offer
        And the user adds "1" beneficiaries
        When the user deletes a beneficiary
        Then the user sees the following items in the screen
            | item                   | value       |
            | first beneficiary name | not visible |

    @MSD035
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify Edit Percentages modal
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "beneficiaries" step of the metasegura offer
        And the user adds "4" beneficiaries
        When the user accesses to the "edit percentages" modal
        Then the user sees the following items in the screen
            | item                               |
            | edit percentages exit button       |
            | edit percentages header            |
            | edit percentages title             |
            | edit percentage pie                |
            | edit percentage first beneficiary  |
            | edit percentage first input        |
            | edit percentage second beneficiary |
            | edit percentage second input       |
            | edit percentage third beneficiary  |
            | edit percentage third input        |
            | edit percentage fourth beneficiary |
            | edit percentage fourth input       |
            | edit percentage accept button      |

    @MSD036
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario Outline: Verify error message for <magnitude> than 100 percent between beneficiaries
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "beneficiaries" step of the metasegura offer
        And the user adds "4" beneficiaries
        When the user edits the percentages to "<amount>"
        Then the user sees the following items in the screen
            | item                  |
            | edit percentage alert |

        Examples:
            | magnitude | amount |
            | less      | 80     |
            | more      | 120    |

    @MSD037
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify that the operative Add Beneficiary disappears when entering 4 beneficiaries
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "beneficiaries" step of the metasegura offer
        When the user adds "4" beneficiaries
        Then the user sees the following items in the screen
            | item                     | value       |
            | beneficiaries add button | not visible |

    @MSD038
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify that name, last name and second last name dont accept special characters
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "beneficiaries" step of the metasegura offer
        And the user accesses to the "beneficiary" modal
        When the user enters the wrong info on new beneficiary
        Then the user sees the following items in the screen
            | item                                | value |
            | beneficiary input name              | empty |
            | beneficiary input lastname          | empty |
            | beneficiary input second lastname   | empty |

    @MSD039
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify enabling of address registration
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "beneficiaries" step of the metasegura offer
        And the user accesses to the "beneficiary" modal
        When the user opts to add a new address
        Then the user sees the following items in the screen
            | item                    | value   |
            | beneficiary new address | enabled |

    @MSD040
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify Add address modal elements
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "beneficiaries" step of the metasegura offer
        And the user accesses to the "beneficiary" modal
        When the user opts to add a new address and enters the modal
        And the user enters the beneficiary address
        Then the user sees the following items in the screen
            | item                        |
            | new address exit button     |
            | new address street          |
            | new address exterior number |
            | new address interior number |
            | new address zip code        |
            | new address exterior number |
            | new address search button   |
            | new address colony          |
            | new address municipality    |
            | new address state           |
            | new address country         |
            | new address continue button |
            | new address close button    |

    @MSD041
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify that the user address is visible
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "beneficiaries" step of the metasegura offer
        And the user accesses to the "beneficiary" modal
        When the user reveals his address
        Then the user sees the following items in the screen
            | item                | value    |
            | beneficiary address | unmasked |

    @MSD042
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario Outline: Verify percentages when there's <num> beneficiaries
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "beneficiaries" step of the metasegura offer
        When the user adds "<num>" beneficiaries
        Then the user sees the following items in the screen
            | item                          | value         |
            | first beneficiary percentage  | <percentage1> |
            | second beneficiary percentage | <percentage2> |
            | third beneficiary percentage  | <percentage3> |
            | fourth beneficiary percentage | <percentage4> |

        Examples:
            | num | percentage1 | percentage2 | percentage3 | percentage4 |
            | 1   | 100         | not visible | not visible | not visible |
            | 2   | 50          | 50          | not visible | not visible |
            | 3   | 50          | 25          | 25          | not visible |
            | 4   | 25          | 25          | 25          | 25          |

    @MSD043
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify payment method elements
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        When the user accesses to the "payment method" step of the metasegura offer
        Then the user sees the following items in the screen
            | item                       |
            | payment method title       |
            | payment method description |
            | payment method card title  |
            | payment method accounts    |
            | payment method account     |

    @MSD044
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify accounts list of user with more than 5 accounts
        Given a user with the following criteria
            | criteria       |
            | MSD 5 Accounts |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "payment method" step of the metasegura offer
        When the user accesses to the list of all his cards and accounts
        Then the user sees the following items in the screen
            | item                                   |
            | all payment methods accounts title     |
            | all payment methods cards and accounts |

    @MSD045
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify offer success for checking account as payment methods
        Given a user with the following criteria
            | criteria        |
            | MSD Contracting |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "payment method" step of the metasegura offer
        And the user selects the account "82255" as payment option
        And the user accesses to the "summary" step of the metasegura offer
        When the user accesses to the meta segura success page
        Then the user accesses the "meta segura success" screen

    @MSD046
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify Terms and Conditions elements
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        When the user accesses to the "terms and conditions" step of the metasegura offer
        Then the user sees the following items in the screen
            | item                                 | value    |
            | terms and conditions title           |          |
            | terms and conditions description     |          |
            | terms and conditions contract pdf    |          |
            | terms and conditions payment pdf     |          |
            | terms and conditions privacy notice  |          |
            | declare true info option             |          |
            | declare info help                    |          |
            | accept and read terms option         |          |
            | accept data concent option           |          |
            | accept payment conditions option     |          |
            | accept receive email option          |          |
            | terms and conditions info message    |          |
            | terms and conditions continue button | disabled |

    @MSD047
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify Privacy Notice modal elements in terms and conditions
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "terms and conditions" step of the metasegura offer
        When the user accesses to the "privacy notice" modal
        Then the user sees the following items in the screen
            | item                |
            | modal exit button   |
            | modal text          |
            | modal accept button |

    @MSD048
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify disabled button with 3 checkboxes
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "terms and conditions" step of the metasegura offer
        When the user selects 3 checkboxes
        Then the user sees the following items in the screen
            | item                                 | value    |
            | terms and conditions continue button | disabled |

    @MSD049
    @web @ios @android
    @MX @backend(test) @vbank @web-done @smokeTest
    Scenario: Verify summary screen
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        When the user accesses to the "summary" step of the metasegura offer
        Then the user sees the following items in the screen
            | item                              |
            | summary montly contribution title |
            | summary usd amount                |
            | summary amount mxn convertion     |
            | summary saving time               |
            | summary goal                      |
            | summary saving frequency          |
            | summary first beneficiary         |
            | summary second beneficiary        |
            | summary third beneficiary         |
            | summary fourth beneficiary        |
            | summary payment method            |
            | summary termns and conditions     |
            | insurance contract button         |

    @MSD050
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify the edition of Personalized Goal section
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "summary" step of the metasegura offer
        When the user edits the "personal savings and goal" step from summary step
        Then the user sees the following items in the screen
            | item                      | value |
            | summary goal              | 6000  |
            | summary saving frequency  | anual |
            | insurance contract button |       |

    @MSD051
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify the edition of Beneficiary section
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "summary" step of the metasegura offer
        When the user edits the "beneficiaries options and percentages" step from summary step
        Then the user sees the following items in the screen
            | item                       | value                    |
            | summary first beneficiary  | steve rogers carter      |
            | summary first beneficiary  | father                   |
            | summary second beneficiary | sandra vazquez espinoza  |
            | summary second beneficiary | mother                   |
            | summary third beneficiary  | pedro gonzalez gutierrez |
            | summary third beneficiary  | spouse                   |
            | summary fourth beneficiary | juan perez avila         |
            | summary fourth beneficiary | concubinage              |
            | insurance contract button  |                          |

    @MSD052
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify the edition of Payment Methods section
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "summary" step of the metasegura offer
        When the user edits the "payment method" step from summary step
        Then the user sees the following items in the screen
        | item                   | value        |
        | summary payment method | changed card |

    @MSD053
    @web @ios @android
    @web-done
    @MX @backend(test) @vbank
    @alternate-scenarios-smoke
    Scenario: Verify security token modal elements
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "summary" step of the metasegura offer
        When the user accesses to the token page before the success page
        Then the user sees the following items in the screen
            | item                     |
            | token page header        |
            | token page exit button   |
            | token page image         |
            | token page text          |
            | token page input token   |
            | token page accept button |
            | token page cancel button |

    @MSD054
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    Scenario: Verify Success page elements
        Given a user with the following criteria
            | criteria        |
            | MSD Contracting |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        When the user accesses to the meta segura success page
        Then the user sees the following items in the screen
            | item                             |
            | header                           |
            | panel title                      |
            | panel date                       |
            | panel text                       |
            | payments                         |
            | panel subtext                    |
            | mid section image                |
            | policy title                     |
            | policy number                    |
            | goal title                       |
            | goal                             |
            | term title                       |
            | contract term                    |
            | payment frequency title          |
            | payment frequency                |
            | first beneficiary title          |
            | first beneficiary                |
            | second beneficiary title         |
            | second beneficiary               |
            | third beneficiary title          |
            | third beneficiary                |
            | fourth beneficiary title         |
            | fourth beneficiary               |
            | method of payment title          |
            | method of payment                |
            | contract start title             |
            | contract start date              |
            | contract end title               |
            | contract end date                |
            | folio number title               |
            | folio number                     |
            | bbva bold title                  |
            | contact number before 30 days    |
            | contact number for beneficiaries |
            | email text                       |
            | email                            |
            | share button                     |
            | close button                     |

    @MSD055
    @web @ios @android @smokeTest
    @MX @backend(test) @vbank @web-done
    Scenario: Verify exit from Success page
        Given a user with the following criteria
            | criteria        |
            | MSD Contracting |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the meta segura success page
        When the user closes the meta segura success page
        Then the user accesses the "contract product section" screen

    @MSD056
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify rejection for not high enough account level
        Given a user with the following criteria
            | criteria         |
            | Level N3 Account |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "questionnaire" step of the metasegura offer
        When the user selects "healty" as health condition and continues
        Then the user sees the following items in the screen
            | item                        |
            | modal icon                  |
            | rejection modal title       |
            | modal text                  |
            | rejection modal exit button |

    @MSD057
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify exit from rejection for not high enough account level
        Given a user with the following criteria
            | criteria         |
            | Level N3 Account |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "questionnaire" step of the metasegura offer
        When the user selects "healty" as health condition and continues
        And the user closes the modal
        Then the user accesses the "contract product section" screen

    @MSD058
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify communication error modal while trying to open General Conditions PDF
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        When the user opens the "general conditions" PDF
        Then the user sees the following items in the screen
            | item               |
            | modal icon         |
            | modal title        |
            | modal content      |
            | modal retry button |
            | help modal exit    |

    @MSD059
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify PDF communication error modal after 3 tries
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user opens the "general conditions" PDF
        When the user retries "2" more times
        Then the user sees the following items in the screen
            | item                 |
            | modal icon           |
            | modal title          |
            | modal content        |

    @MSD060
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify exit from PDF communication error modal after 3 tries
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user opens the "general conditions" PDF
        And the user retries "2" more times
        When the user closes the modal
        Then the user sees the following items in the screen
            | item                            |
            | considerations title            |
            | considerations                  |
            | offer detail general conditions |
            | offer detail continue button    |

    @MSD061
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify communication error inputing token for success page
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        When the user attempts to access to the meta segura success page
        Then the user sees the following items in the screen
            | item               |
            | modal exit button  |
            | modal icon         |
            | modal content      |
            | modal text         |
            | modal retry button |
            | help modal exit    |

    @MSD062
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify success page communication error modal after 3 tries
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user attempts to access to the meta segura success page
        When the user retries the operation "2" times
        Then the user sees the following items in the screen
            | item                 |
            | modal exit button    |
            | modal icon           |
            | modal content        |
            | modal text           |
            | last try exit button |

    @MSD063
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify exit from success page communication error modal after 3 tries
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user attempts to access to the meta segura success page
        And the user retries the operation "2" times
        When the user closes the modal
        Then the user accesses the "contract product section" screen

    @MSD064
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario: Verify communication error with the beneficiaries percentages service
        Given a user with the following criteria
            | criteria    |
            | MSD General |
        And the user accesses to the metasegura offer detail
        And the user close call me back tooltip
        And the user accesses to the "summary" step of the metasegura offer
        When the user accesses to the token page before the success page
        Then the user sees the following items in the screen
            | item                            |
            | modal icon                      |
            | modal title                     |
            | modal content                   |
            | communication error exit button |
