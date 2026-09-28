@ocSecureLoanLead
Feature: Oc Secure Loan Lead

    @LOM001
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: The user modifies the amount and complete simulation
        Given a user with the following criteria
            | criteria              |
            | oc secure loan lead   |
        And the user goes to the oc secure loan offer
        When the user completes the simulation by changing the amount
        Then the user sees the following items in the screen
            | item                       |
            | success clipbox title      |
            | success loan guarantee     |
            | success payment detail     |
            | success email notification |
            | success share button       |

    @LOM002
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: The user exits to the modal mean with information about CAT
        Given a user with the following criteria
            | criteria              |
            | oc secure loan lead   |
            | multiple contracts    |
        And the user goes to the oc secure loan offer
        And the user goes to the "offer" step
        When the user accesses close cat modal
        Then the user sees the following items in the screen
            | item                      |
            | simulation title          |
            | simulation contracts      |
            | simulation input label    |
            | simulation loan guarantee |
            | simulation interest rate  |
            | simulation payment detail |

    @LOM003
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    @smokeTest
    Scenario Outline: The user successfully completes the loan simulation when they only have one <type_asset>
        Given a user with the following criteria
            | criteria              |
            | oc secure loan lead   |
            | <type_asset>          |
        And the user goes to the oc secure loan offer
        When the user goes to the "summary" step
        Then the user sees the following items in the screen
            | item                         |
            | success clipbox title        |
            | success loan guarantee       |
            | success loan guarantee asset |
            | success payment detail       |
            | success email notification   |
            | success share button         |

        Examples:
            | type_asset     |
            | variable asset |
            | fixed asset    |

    @LOM004
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario Outline: The user unchecks a capital investment instrument from the <type_rate> tab
        Given a user with the following criteria
            | criteria              |
            | oc secure loan lead   |
            | multiple assets       |
        And the user goes to the oc secure loan offer
        When the user accesses discard an asset "<type_rate>"
        Then the user sees the following items in the screen
            | item                    | value     |
            | guarantee tabs fixed    |           |
            | guarantee tabs variable |           |
            | guarantee list fixed    | <status1> |
            | guarantee list variable | <status2> |
            | guarantee information   |           |

        Examples:
            | type_rate | status1 | status2 |
            | fixed     | enable  | disable |
            | variable  | disable | enable  |

    @LOM005
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario Outline: The user sees a warning modal average when they uncheck all their investment instruments <assets>
        Given a user with the following criteria
            | criteria              |
            | oc secure loan lead   |
            | multiple assets       |
        And the user goes to the oc secure loan offer
        When the user completes the guarantee erasure "<assets>"
        Then the user sees the following items in the screen
            | item                                    | value     |
            | title modal advice                      | <status1> |
            | exit modal advice                       | <status1> |
            | label modal advice                      | <status1> |
            | text information advice                 | <status1> |
            | acept button advice                     | <status1> |
            | title modal insufficient guarantee      | <status2> |
            | title modal insufficient guarantee      | <status2> |
            | label modal insufficient guarantee      | <status2> |
            | text information insufficient guarantee | <status2> |
            | acept button insufficient guarantee     | <status2> |

        Examples:
            | assets                 | status1 | status2 |
            | all asset              | enable  | disable |
            | insufficient guarantee | disable | enable  |

    @LOM006
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: The user successfully completes the loan simulation after editing their collateral percentage
        Given a user with the following criteria
            | criteria              |
            | oc secure loan lead   |
            | multiple assets       |
        And the user goes to the oc secure loan offer
        When the user completes simulation editing the percentage
        Then the user sees the following items in the screen
            | item                       |
            | success clipbox title      |
            | success loan guarantee     |
            | success payment detail     |
            | success email notification |
            | success share button       |

    @LOM007
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario Outline: The user exits the modal and returns to the Edit guarantee screen by clicking the <type_button>
        Given a user with the following criteria
            | criteria              |
            | oc secure loan lead   |
            | multiple assets       |
        And the user goes to the oc secure loan offer
        When the user discards "all asset" and closes the modal "<type_button>"
        Then the user sees the following items in the screen
            | item                    |
            | guarantee tabs fixed    |
            | guarantee tabs variable |
            | guarantee information   |

        Examples:
            | type_button   |
            | exit button   |
            | accept button |

    @LOM008
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: Confirm the Modify link and then return to the operation summary
        Given a user with the following criteria
            | criteria              |
            | oc secure loan lead   |
        And the user goes to the oc secure loan offer
        When the user goes to the "summary" step
        Then the user sees the following items in the screen
            | item                   |
            | summary edit           |
            | summary confirm button |
            | information summary    |
            | btn exit simulation    |

    @LOM009
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: The user exits the flow after making changes to the default flow settings by clicking the Exit button
        Given a user with the following criteria
            | criteria              |
            | oc secure loan lead   |
        And the user goes to the oc secure loan offer
        When the user accesses contract product section from "modify simulation page"
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | main banner        |
            | main banner button |
            | small banner       |
            | small banner link  |

    @LOM010
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario Outline: The user decides to remain in the flow by means of the button <case>
        Given a user with the following criteria
            | criteria              |
            | oc secure loan lead   |
            | multiple contracts    |
        And the user goes to the oc secure loan offer
        When the user accesses modal "<type_screen>" and stays in the simulation using "<option>"
        Then the user sees the following items in the screen
            | item                   | value     |
            | simulation contracts   | <status1> |
            | simulation input label | <status1> |
            | fixed radio button     | <status1> |
            | variable radio button  | <status1> |
            | summary edit           | <status2> |
            | summary confirm button | <status2> |
            | information summary    | <status2> |

        Examples:
            | case                | option              | type_screen            | status1 | status2 |
            | continue simulation | continue simulation | exit simulation step   | enable  | disable |
            | exit modal          | exit modal          | exit simulation step   | enable  | disable |
            | continue resume     | continue simulation | exit resume simulation | disable | enable  |
            | exit modal resume   | exit modal          | exit resume simulation | disable | enable  |

    @LOM011
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: The user exits the simulation by clicking the Exit button in the simulation summary
        Given a user with the following criteria
            | criteria              |
            | oc secure loan lead   |
        And the user goes to the oc secure loan offer
        When the user accesses contract product section from "exit simulation page"
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | main banner        |
            | main banner button |
            | small banner       |
            | small banner link  |

    @LOM012
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: The user exits the simulation from the successful operation screen
        Given a user with the following criteria
            | criteria              |
            | oc secure loan lead   |
        And the user goes to the oc secure loan offer
        When the user accesses contract product section from "success"
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | main banner        |
            | main banner button |
            | small banner       |
            | small banner link  |

    @LOM013
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario Outline: The user sees an error message when they enter an amount <type_value> than the loan amount allowed
        Given a user with the following criteria
            | criteria              |
            | oc secure loan lead   |
        And the user goes to the oc secure loan offer
        When the user access to error message with a change in the amount "<type_value>"
        Then the user sees the following items in the screen
            | item                   | value     |
            | message minimum amount | <status2> |
            | message maximum amount | <status1> |
            | simulation input label |           |
            | simulation title       |           |

        Examples:
            | type_value | status1 | status2 |
            | maximum    | enable  | disable |
            | minimum    | disable | enable  |

    @LOM014
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario Outline: The user sees an error message when entering a <percentage>
        Given a user with the following criteria
            | criteria              |
            | oc secure loan lead   |
            | multiple assets       |
        And the user goes to the oc secure loan offer
        When the user access an error message with a change in the percentage "<percentage>"
        Then the user sees the following items in the screen
            | item                            | value     |
            | message label minimum           | <status2> |
            | message label maximum           | <status1> |
            | percentage capital notification |           |
            | percentage input amount         |           |
            | assets content                  |           |

        Examples:
            | percentage         | status1 | status2 |
            | maximum percentage | enable  | disable |
            | minimum percentage | disable | enable  |

    @LOM015
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: Validation of status and saving of unselected guarantees in the simulator flow
        Given a user with the following criteria
            | criteria              |
            | oc secure loan lead   |
            | multiple assets       |
        And the user goes to the oc secure loan offer
        When the user edits to percentage of guarantee
        Then the user sees the following items in the screen
            | item                    |
            | amount guarantee zero   |
            | amount percentage zero  |
            | guarantee tabs fixed    |
            | guarantee tabs variable |
            | check asset disable     |

    @LOM016
    @web @android @ios
    @MX @backend(test)
    @vbank
    @web-done
    Scenario: Validate status and guarantee saving with percentage in the simulator flow
        Given a user with the following criteria
            | criteria              |
            | oc secure loan lead   |
            | multiple assets       |
        And the user goes to the oc secure loan offer
        When the user removes the warranty selection
        Then the user sees the following items in the screen
            | item                    |
            | amount guarantee        |
            | amount percentage       |
            | guarantee tabs fixed    |
            | guarantee tabs variable |
            | check asset enable      |
