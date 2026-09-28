@creditScore
Feature: Credit Score

    @ADSC001
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    Scenario: Happy Path - Your credit situation
        Given a user with the following criteria
            | criteria                     |
            | first time credit score user |
        And the user accesses dashboard detail PFM "footer"
        And the user closes tooltips
        And the user accesses to credit report
        When the user accepts the credit score terms and conditions
        Then the user sees the following items in the screen
            | item                 |
            | header credit status |
            | title credit status  |
            | text credit status   |

    @ADSC002
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    Scenario: Validate that the user can return to the Your Credit Status screen
        Given a user with the following criteria
            | criteria                     |
            | first time credit score user |
        And the user accesses dashboard detail PFM "footer"
        And the user closes tooltips
        And the user accesses to credit report
        And the user accepts the credit score terms and conditions
        When the user goes back to previous page
        Then the user sees the "pfm dashboard detail" screen

    @ADSC003
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    Scenario: Validate the functionality of the X button in the terms and conditions modal
        Given a user with the following criteria
            | criteria                     |
            | first time credit score user |
        And the user accesses dashboard detail PFM "footer"
        And the user closes tooltips
        And the user accesses to credit report
        When the user exits the terms and conditions screen
        Then the user sees the "pfm dashboard detail" screen

    @ADSC004
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    Scenario Outline: Validate that the status of a customer with an <status> score is displayed
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses dashboard detail PFM "footer"
        And the user closes tooltips
        And the user accesses to credit report
        When the user accepts the credit score terms and conditions
        Then the user sees the following items in the screen
            | item                 |
            | header credit status |
            | button close credit  |
            | title credit status  |
            | text credit status   |

        Examples:
            | user                        | status    |
            | credit score user excellent | excellent |
            | credit score user good      | good      |
            | credit score user regular   | regular   |
            | credit score user low       | low       |

    @ADSC005
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    Scenario: Validate that no data is displayed when the client does not have score information
        Given a user with the following criteria
            | criteria             |
            | user no credit score |
        And the user accesses dashboard detail PFM "footer"
        When the user accesses to credit report
        Then the user sees the following items in the screen
            | item                        |
            | header credit status        |
            | button close credit         |
            | title no information credit |

    @ADSC006
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    Scenario Outline: Validate that the information for the question <option> is displayed.
        Given a user with the following criteria
            | criteria          |
            | credit score user |
        And the user accesses dashboard detail PFM "footer"
        And the user closes tooltips
        And the user accesses to credit report
        And the user accepts the credit score terms and conditions
        And the user enters information about the score into the modal
        When the user expands the "<option>"
        Then the user sees the following items in the screen
            | item                     |
            | header score information |
            | text score information   |

        Examples:
            | option                                       |
            | How it works                                 |
            | What is taken into account when assigning it |
            | Who can check your score                     |

    @ADSC007
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    Scenario Outline: Validate that the modal with the information of a customer with an <status> score is displayed.
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses dashboard detail PFM "footer"
        And the user closes tooltips
        And the user accesses to credit report
        And the user accepts the credit score terms and conditions
        And the user enters information about the score into the modal
        When the user opens their credit status level
        Then the user sees the following items in the screen
            | item                     |
            | title points information |
            | text level               |
            | text level information   |

        Examples:
            | user                        | status    |
            | credit score user excellent | excellent |
            | credit score user good      | good      |
            | credit score user regular   | regular   |
            | credit score user low       | low       |

    @ADSC008
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    Scenario: Validate the Learn More link
        Given a user with the following criteria
            | criteria          |
            | credit score user |
        And the user accesses dashboard detail PFM "footer"
        And the user closes tooltips
        And the user accesses to credit report
        And the user accepts the credit score terms and conditions
        When the user enters the learn more container
        Then the user sees the following items in the screen
            | item                     |
            | header history credit    |
            | text history credit      |
            | container history credit |

    @ADSC009
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    @smokeTest
    Scenario: Validate the Learn More link in the Challenges section
        Given a user with the following criteria
            | criteria          |
            | credit score user |
        And the user accesses dashboard detail PFM "footer"
        And the user closes tooltips
        And the user accesses to credit report
        And the user accepts the credit score terms and conditions
        When the user accesses the challenges section
        Then the user sees the following items in the screen
            | item                      |
            | header challenges section |
            | banner challenges section |
