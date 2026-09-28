@investAdvisory @investAdvisoryContracting
Feature: OC Investment Portfolio Contracting

    @CONT001
    @vbank @MX
    @smokeTest
    @ios @android @web
    @backend(test) @web-done
    Scenario: Successful "Hiring" validation
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user "confirm and finish " the investment hiring process
        Then the user sees the following items in the screen
            | item                         |
            | hiring complete notification |
            | hiring complete button       |

    @CONT002
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Successful validation of "Hiring" with distribution of the "Liquidity" investment
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        When the user "complete and confirm, finish" the investment hiring process
        Then the user sees the following items in the screen
            | item                         |
            | hiring complete notification |
            | hiring complete button       |

    @CONT003
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Warning message when selecting an account with no available balance regarding the amount
        Given a user with the following criteria
            | criteria                           |
            | invest advisory portfolio accounts |
        And the user selects payment plan offer "invest advisory"
        When the user accepts the assigned profile
        Then the user sees the following items in the screen
            | item                                |
            | modal select another account header |
            | modal select another account button |

    @CONT004
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the functionality of the "Privacy Notice" link in the "Terms and Conditions" section
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user accepts the assigned profile
        When the user view privacy notice
        Then the user sees the following items in the screen
            | item                       |
            | privacy contract button  |
            | privacy contract content |

    @CONT005
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate that the associated account can be successfully changed from the summary screen
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user accepts the assigned profile
        And the user decides to change the account in the multi-step summary
        When the user selects an account of his accounts
        Then the user sees the following items in the screen
            | item                |
            | hiring button       |
            | hiring notification |

    @CONT006
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the functionality of the "Consult" link in the "Terms and Conditions" section
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user accepts the "last" assigned profile, "starts" process "selects" from the proposal
        When the user view terms conditions consult
        Then the user sees the following items in the screen
            | item                            |
            | terms and conditions option     |
            | terms and conditions option two |
            | terms and conditions button     |

    @CONT007
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Validate the functionality of the "Exit" button, before clicking on "Hire"
        Given a user with the following criteria
            | criteria                  |
            | invest advisory portfolio |
        And the user selects payment plan offer "invest advisory"
        And the user accepts the "last" assigned profile, "starts" process "selects" from the proposal
        When the user exits the hiring section
        Then the user sees the following items in the screen
            | item                       |
            | modal exit hiring header   |
            | modal exit hiring continue |
            | modal exit hiring return   |

    @CONT008
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: The user sees all their accounts
        Given a user with the following criteria
            | criteria                          |
            | invest advisory portfolio proposal |
        And the user selects payment plan offer "invest advisory"
        And the user accepts the assigned profile
        And the user decides to change the account in the multi-step summary
        When the user selects an account of his accounts
        Then the user sees the following items in the screen
            | item                |
            | hiring button       |
            | hiring notification |

    @CONT009
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: The user accesses I want an advisor to call me
        Given a user with the following criteria
            | criteria                           |
            | invest advisory portfolio proposal |
        And the user selects payment plan offer "invest advisory"
        And the user accepts the "last" assigned profile, "starts" process "selects" from the proposal
        And the user "checks" the terms and conditions
        When the user accesses to I want to call a personal advisor "contract"
        Then the user accesses the "call me back" screen

    @CONT010
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: The user accesses Blue
        Given a user with the following criteria
            | criteria                           |
            | invest advisory portfolio proposal |
        And the user selects payment plan offer "invest advisory"
        And the user accepts the "last" assigned profile, "starts" process "selects" from the proposal
        When the user access blue "contract"
        Then the user accesses the "digital butler" screen
