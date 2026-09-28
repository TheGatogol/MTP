@monthlyStatementEnquiryFund
Feature: Monthly Statement Enquiry Fund

    @MSF001
    @backend(test)
    @MX
    @web @vbank
    @web-done
    @alternate-scenarios-smoke
    Scenario: Validate when checking the last account statement
        Given a user with the following criteria
            | criteria       |
            | equity monthly |
            | with statement |
        And the user accesses to fund product detail
        And the user goes to "monthly statement" fund contract
        When the user enter to single date statement funds
        Then the user sees the following items in the screen
            | item                  |
            | confirm button        |
            | radio button single   |

    @MSF002
    @backend(test)
    @MX
    @web @vbank
    @web-done
    @smokeTest
    Scenario: Validate when consulting multiple option account status
        Given a user with the following criteria
            | criteria       |
            | equity monthly |
            | with statement |
        And the user accesses to fund product detail
        And the user goes to "monthly statement" fund contract
        When the user enter to multiple date "2024" statement funds "08"
        Then the user sees the following items in the screen
            | item                  |
            | radio button monthly  |
            | radio button year     |
            | confirm button        |
            | radio button multiple |

    @MSF003
    @backend(test)
    @MX
    @web @vbank
    @web-done
    @alternate-scenarios-smoke
    Scenario: Validate when checking account status for the first time
        Given a user with the following criteria
            | criteria        |
            | equity monthly  |
            | firts statement |
        And the user accesses to fund product detail
        When the user goes to "monthly statement" fund contract
        Then the user sees the following items in the screen
            | item            |
            | label statement |
            | firts statement |
            | confirm button  |

    @MSF004
    @backend(test)
    @MX
    @web @vbank
    @web-done
    @alternate-scenarios-smoke
    Scenario: Validate when there are no account statements
        Given a user with the following criteria
            | criteria          |
            | equity monthly    |
            | without statement |
        And the user accesses to fund product detail
        When the user goes to "monthly statement" fund contract
        Then the user sees the following items in the screen
            | item                    |
            | without statements      |
            | modal without statement |
