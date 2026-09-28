@monoproductEnrollment
Feature: MonoproductEnrollment

    @MP002
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done
    @backend-smoke @smokeTest
    Scenario:  Screen Validation - Identify privacy notice
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "Register and select Notice Privacy" section
        Then the user sees a modal with the following elements:
            | item            |
            | modal header    |
            | text template   |

    @MP003
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done @manual @JIRA.GLOMOMX-237722
    Scenario:  Screen Validation - Register modal
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "register and identify without card" section
        Then the user sees a modal with the following elements:
            | item            |
            | modal header    |
            | text template   |
            | continue button |

    @MP004
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done @manual @JIRA.GLOMOMX-237722
    Scenario:  Screen Validation - Identify user
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "Monoproduct Flow" section
        Then the user sees the following items in the screen
            | item                      |
            | exit header button        |
            | name input                |
            | first lastname input      |
            | second lastname input     |
            | birthdate input           |
            | place of birth input      |
            | radio buttons             |
            | phone number input        |
            | credit number input       |
            | disabled continue button  |

    @MP005
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done @manual @JIRA.GLOMOMX-237722
    Scenario:  Screen Validation - Process modal
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "monoproduct flow and confirm their personal data" section
        Then the user sees a modal with the following elements:
            | item            |
            | modal header    |
            | text template   |
            | continue button |

    @MP006
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done @manual @JIRA.GLOMOMX-237722
    Scenario:  Screen Validation - Identity validation
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "monoproduct until to biometric screen" section
        Then the user sees the following items in the screen
            | item                          |
            | exit header button            |
            | biomentric indications        |
            | biometric privacy link        |
            | privacy checkbox              |
            | disabled verification button  |

    @MP007
    @MX @vbank
    @backend(test)
    @ios @android @web @web-done @manual @JIRA.GLOMOMX-237722
    Scenario Outline:  Screen Validation - Access <section>
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "<section>" section
        Then the user sees a modal with the following elements:
            | item            |
            | modal header    |
            | text template   |
            | continue button |
        Examples:
            | section                                                      |
            | monoproduct until to biometric screen and select privacy     |
            | monoproduct and accept the processing of their personal data |

    @MP008
    @MX @vbank
    @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario Outline:  Screen Validation - Selfie indications - access <section>
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "<section>" section
        Then the user sees a modal with the following elements:
            | item            |
            | modal header    |
            | text template   |
            | continue button |
        Examples:
            | section                              |
            | monoproduct and scan identification  |
            | monoproduct and takes selfie         |

    @MP009
    @MX @vbank
    @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario:  Screen Validation - Contact information
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "monoproduct and completes veridas" section
        Then the user sees the following items in the screen
            | item                  |
            | email input           |
            | confirm email input   |
            | email continue button |

    @MP010
    @MX @vbank
    @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario:  Screen Validation - CUD
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "monoproduct flow and finish it" section
        Then the user sees the following items in the screen
            | item                  |
            | cud link              |
            | sign container        |
            | continue contract btn |

    @MP011
    @MX @vbank
    @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario:  Screen Validation - CUD pdf
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        And the user accesses to "monoproduct flow and finish it" section
        When the user accesss to CUD
        Then the user sees the following items in the screen
            | item                |
            | PDF contract text   |

    @MP012
    @MX @vbank
    @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario:  Screen Validation - Signature
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        And the user accesses to "monoproduct flow and finish it" section
        When the user signs "the contract"
        Then the user sees the following items in the screen
            | item                |
            | PDF contract text   |

    @MP013
    @MX @vbank
    @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario:  Screen Validation - Password indications
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user completes Monoproduct Flow
        When the user signs "the contract and continues"
        Then the user sees the following items in the screen
            | item            |
            | sign area       |
            | continue button |

    @MP014
    @MX @vbank
    @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario:  Screen Validation - Password screen
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user completes Monoproduct Flow
        When the user signs "the contract and enter to password screen"
        Then the user sees the following items in the screen
            | item                      |
            | exit header button        |
            | password input            |
            | confirm password input    |
            | continue password button  |

    @MP015
    @MX @vbank
    @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario Outline:  Screen Validation - Successful recruitment <case>
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user completes Monoproduct Flow
        When the user signs "<case>"
        Then the user sees a modal with the following elements:
            | item            |
            | modal header    |
            | text template   |
            | continue button |
        Examples:
            | case                                     |
            | the contract and access to help password |
            | contract and enter password              |

    @MP016
    @MX @vbank
    @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario:  Screen Validation - Completes process
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user completes Monoproduct Flow
        And the user signs "contract and enter password"
        When the user completes de process
        Then the user sees a modal with the following elements:
            | item            |
            | modal header    |
            | text template   |
            | continue button |

    @MP017
    @MX @vbank
    @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario Outline:  Screen Validation - <case>
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses to "Monoproduct Flow" section
        When the user completes Monoproduct Flow with "<case>"
        Then the user sees a modal with the following elements:
            | item            |
            | modal header    |
            | text template   |
            | continue button |
        Examples:
            | case                                 |
            | with user with card                  |
            | a phone not registered               |
            | a credit not registered              |
            | a user registered                    |
            | a user registered with active alerts |
