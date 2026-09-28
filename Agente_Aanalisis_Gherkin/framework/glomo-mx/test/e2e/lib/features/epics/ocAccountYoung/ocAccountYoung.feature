@ocAccountYoung
Feature: Oc Account Young

    @OCAY001
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Sees offer in contract product section
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        When the user accesses contract product section
        Then the user sees the following items in the screen
            | item          | offer            |
            | banner icon   | oc-account-young |
            | banner text   | oc-account-young |
            | banner button | oc-account-young |

    @OCAY002
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Access to the offer detail
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        When the user accesses to the oc account young offer detail
        Then the user sees the following items in the screen
            | item                      |
            | header offer              |
            | header info button offer  |
            | header close button offer |
            | title offer               |
            | description offer         |
            | benefits list             |
            | terms and conditions link |
            | considerations list       |
            | limit detail link         |
            | costs description         |
            | gat link                  |
            | notice privacy link       |
            | continue button offer     |

    @OCAY003
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Access to the minor information form
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        When the user accepts to the oc account young offer detail
        Then the user sees the following items in the screen
            | item                           |
            | header multistep               |
            | header info button multistep   |
            | header close button multistep  |
            | title minor information        |
            | name input                     |
            | last name input                |
            | second last name input         |
            | birth date input               |
            | birth place select             |
            | gender option female           |
            | gender option male             |
            | notice privacy link minor form |
            | checkbox privacy               |
            | continue button minor form     |

    @OCAY004
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Fill the minor information form
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        When the user fills the minor information
        Then the user sees the following items in the screen
            | item                       | value       |
            | name input                 | not empty   |
            | last name input            | not empty   |
            | second last name input     | not empty   |
            | birth date input           | not empty   |
            | birth place select         | not empty   |
            | gender option female       | checked     |
            | gender option male         | not checked |
            | checkbox privacy           | checked     |
            | continue button minor form | enabled     |

    @OCAY005
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Access to the birth certificate step
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        When the user completes the minor information
        Then the user sees the following items in the screen
            | item                                |
            | header multistep                    |
            | header info button multistep        |
            | header close button multistep       |
            | modify button minor form            |
            | minor name summary                  |
            | minor last name summary             |
            | minor second last name summary      |
            | minor birth date summary            |
            | minor birth place summary           |
            | upload file link                    |
            | icon info message birth certificate |
            | continue button birth certificate   |

    @OCAY006
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Deploy birth certificate actions modal
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        And the user completes the minor information
        When the user deploys actions modal to take a picture
        Then the user sees the following items in the screen
            | item              |
            | take photo link   |
            | choose photo link |
            | choose pdf link   |

    @OCAY007
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Deploy birth certificate suggestions modal
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        And the user completes the minor information
        When the user deploys suggestions modal to take a picture
        Then the user sees the following items in the screen
            | item                      |
            | microillustration camera  |
            | suggestions title         |
            | suggestions list          |
            | accept button suggestions |

    @OCAY008
    @ios @android @web @tmpExclude @JIRA.GLOMOMX-295997
    @MX @backend(test) @vbank
    Scenario: Contracted accounts limit error
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        When the user goes to terms and conditions without digital services with modal
        Then the user sees the following items in the screen
            | item                     |
            | caution title icon modal |
            | modal title              |
            | accept button modal      |
            | exit button modal        |

    @OCAY009
    @ios @android @web @tmpExclude @JIRA.GLOMOMX-295997
    @MX @backend(test) @vbank
    Scenario: Exit contracted accounts limit error
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        And the user goes to terms and conditions without digital services with modal
        When the user accepts the modal
        Then the user sees the "contract product section" screen

    @OCAY010
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The data does not exist in Renapo
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        When the user completes the minor information
        Then the user sees the following items in the screen
            | item                     |
            | caution title icon modal |
            | modal normal title       |
            | accept button modal      |
            | option link modal        |

    @OCAY011
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Can review and modify the minor information
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        And the user completes the minor information
        When the user accepts the modal
        Then the user sees the following items in the screen
            | item                       |
            | name input                 |
            | last name input            |
            | second last name input     |
            | birth date input           |
            | birth place select         |
            | gender option female       |
            | gender option male         |
            | checkbox privacy           |
            | continue button minor form |

    @OCAY012
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Minor information with homonomy case
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        When the user completes the minor information
        Then the user sees the following items in the screen
            | item                            |
            | additional info title           |
            | additional info input           |
            | continue button additional info |

    @OCAY013
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Fill the additional information form
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        And the user completes the minor information
        When the user completes the additional information
        Then the user sees the following items in the screen
            | item                                |
            | additional info summary             |
            | upload file link                    |
            | icon info message birth certificate |
            | continue button birth certificate   |

    @OCAY014
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Exit to the offer detail
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses to the oc account young offer detail
        When the user goes back to previous page
        Then the user sees the "contract product section" screen

    @OCAY015
    @spherica
    @ios @android @web @web-done
    @MX @backend(test) @vbank @smokeTest
    Scenario: Exit the process
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        And the user completes the minor information
        And the user closes the current operative
        When the user accepts the modal
        Then the user sees the "contract product section" screen

    @OCAY016
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Deploy FAQs list modal
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses to the oc account young offer detail
        When the user deploys the faqs list modal
        Then the user sees the following items in the screen
            | item        |
            | first faq   |
            | second faq  |
            | third faq   |
            | fourth faq  |
            | fifth faq   |
            | sixth faq   |
            | seventh faq |
            | eighth faq  |
            | ninth faq   |

    @OCAY017
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario Outline: Deploy <question> modal in the FAQs list
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses to the oc account young offer detail
        And the user deploys the faqs list modal
        When the user deploys the "<question>" modal in the faqs list
        Then the user sees the following items in the screen
            | item                |
            | faq question title  |
            | faq question answer |
        Examples:
            | question         |
            | first question   |
            | second question  |
            | third question   |
            | fourth question  |
            | fifth question   |
            | sixth question   |
            | seventh question |
            | eighth question  |
            | ninth question   |

    @OCAY018
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario Outline: Deploy <link> modal in offer page
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accesses to the oc account young offer detail
        When the user selects "<link>" element from oc account young
        Then the user sees the following items in the screen
            | item                     | value                 |
            | caution title icon modal | <header_section>      |
            | modal title              | <header_section>      |
            | modal description        | visible               |
            | accept button modal      | <interaction_section> |
            | option link modal        | <interaction_section> |
        Examples:
            | link                | header_section | interaction_section |
            | terms link          | not visible    | visible             |
            | limit detail link   | visible        | not visible         |
            | notice privacy link | not visible    | not visible         |
            | gat link            | not visible    | visible             |

    @OCAY019
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Deploy digital services information modal
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        And the user completes the minor information
        And the user uploads the birth certificate file and continues
        And the user selects same address and continues
        When the user selects "digital service tooltip" element from oc account young
        Then the user sees the following items in the screen
            | item                     |
            | caution title icon modal |
            | modal normal title       |
            | modal description        |

    @OCAY020
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Deploy notice privacy modal in minor information form
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        When the user selects "consult notice privacy" element from oc account young
        Then the user sees the following items in the screen
            | item              |
            | modal description |

    @OCAY021
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Birthdate incorrect error
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        When the user fills the minor information with incorrect birthdate
        Then the user sees the following items in the screen
            | item                     |
            | birth date input         |
            | birth date error message |

    @OCAY022
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Phone incorrect format error
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        And the user completes the minor information
        And the user uploads the birth certificate file and continues
        And the user selects same address and continues
        When the user fills the digital services form with services allowed
        Then the user sees the following items in the screen
            | item                           |
            | cellphone input                |
            | email input                    |
            | confirm email input            |
            | phone incorrect format message |

    @OCAY023
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Phone already exists error
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        When the user goes to terms and conditions without digital services with modal
        Then the user sees the following items in the screen
            | item                     |
            | caution title icon modal |
            | modal normal title       |
            | accept button modal      |

    @OCAY024
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Incorrect curp format error
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        And the user completes the minor information
        When the user fills the additional information with incorrect registry
        Then the user sees the following items in the screen
            | item                            |
            | additional info input           |
            | curp incorrect format message   |
            | additional info title           |
            | continue button additional info |

    @OCAY025
    @ios @android @web @tmpExclude @JIRA.GLOMOMX-295997
    @MX @backend(test) @vbank
    Scenario: Exit process when curp does not match
        Given a user with the following criteria
            | criteria         |
            | tutor account    |
            | oc account young |
        And the user accepts to the oc account young offer detail
        And the user completes the minor information
        And the user retries fill the additional information
        When the user accepts the modal
        Then the user sees the "contract product section" screen
