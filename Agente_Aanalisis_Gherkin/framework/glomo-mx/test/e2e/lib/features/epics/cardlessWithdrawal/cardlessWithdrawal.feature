@cardlessWithdrawal
Feature: Cardless Withdrawal

    @CW001
    @smokeTest
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @tmpExclude @JIRA.GLOMOMX-172850
    Scenario: Happy Path
        Given a user with the following criteria
            | criteria            |
            | verify commerce     |
            | multiple accounts   |
            | success withdrawal  |
            | cardless withdrawal |
        And the user accesses the "account cardless withdrawal" screen
        And the user select an amount
        And the user enters a concept
        And the user continue with the withdrawal
        When the user continue with the OTP modal
        Then the user sees the following items in the screen
            | item         |
            | header title |
            | close button |
            | header       |
            | amount       |
            | codes        |
            | folio        |

    @CW003
    @alternate-scenarios-smoke
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @tmpExclude @JIRA.GLOMOMX-172850
    @backend-smoke
    Scenario: Cardless withdrawal error
        Given a user with the following criteria
            | criteria            |
            | verify commerce     |
            | multiple accounts   |
            | success withdrawal  |
            | cardless withdrawal |
        And the user accesses the "account cardless withdrawal" screen
        And the user select an amount
        And the user enters a concept
        When the user continue with the withdrawal
        Then the user can't continue with the withdrawal and sees error modal

    @CW004
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @tmpExclude @JIRA.GLOMOMX-172850
    @backend-smoke
    Scenario: Cardless withdrawal fraud error
        Given a user with the following criteria
            | criteria |
            | accounts |
            | multiple accounts |
            | cardless withdrawal |
            | cardless withdrawal fraud error |
        And the user accesses the "account cardless withdrawal" screen
        And the user select an amount
        And the user enters a concept
        When the user continue with the withdrawal
        Then the user sees the following items in the screen
            | item |
            | close button |
            | call bbva button |

    @CW005
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Exit modal cardless withdrawal
        Given a user with the following criteria
            | criteria              |
            | cardless withdrawal   |
            | sucessful withdrawal  |
        And the user accesses the "account cardless withdrawal" screen
        When the user close modal
        And the user exit cardless withdrawal screen
        Then the user sees a modal with the following elements:
            | item          |
            | description   |
            | accept button |
            | cancel button |

    @CW006
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @alternate-scenarios-smoke @tmpExclude @JIRA.GLOMOMX-172850
    Scenario: Cardless withdrawal other import
        Given a user with the following criteria
            | criteria            |
            | cardless withdrawal |
            | other import        |
        And the user accesses the "account cardless withdrawal" screen
        And the user enters other import
        And the user enters a concept
        And the user continue with the withdrawal
        When the user continue with the OTP modal
        Then the user sees the following items in the screen
            | item                |
            | close button        |
            | header              |
            | header title        |
            | amount              |
            | codes               |
            | folio               |

    @CW007
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: Cardless withdrawal "<amount>"
        Given a user with the following criteria
            | criteria            |
            | cardless withdrawal |
            | <balance>           |
        And the user accesses the "account cardless withdrawal" screen
        When the user selects an amount "<amount>"
        Then the user sees the following items in the screen
            | item                |
            | <validation>        |
        Examples:
            | amount                      | balance              | validation                   |
            | limit amount account        | limit balance        | limit import                 |
            | insufficient amount account | insufficient balance | insuficent balance message   |

    @CW008
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @alternate-scenarios-smoke @tmpExclude @JIRA.GLOMOMX-172850
    @backend-smoke
    Scenario: Cancel modal exit cardless withdrawal
        Given a user with the following criteria
            | criteria              |
            | cardless withdrawal   |
            | sucessful withdrawal  |
        And the user accesses the "account cardless withdrawal" screen
        And the user select an amount
        And the user enters a concept
        When the user exits the summary screen
        Then the user sees the "product detail account" screen

    @CW009
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @alternate-scenarios-smoke @tmpExclude @JIRA.GLOMOMX-172850
    Scenario: Cardless withdrawal help screen
        Given a user with the following criteria
            | criteria              |
            | cardless withdrawal   |
            | sucessful withdrawal  |
        And the user accesses the "account cardless withdrawal" screen
        And the user select an amount
        And the user enters a concept
        And the user changes concept and amount to continue
        And the user continue with the OTP modal
        When the user shows help section
        Then the user sees a modal with the following elements:
            | item          |
            | header        |
            | close button  |
            | description   |
            | accept button |

    @CW010
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @alternate-scenarios-smoke @tmpExclude @JIRA.GLOMOMX-172850
    Scenario Outline: Cardless withdrawal with "<concept>"
        Given a user with the following criteria
            | criteria              |
            | cardless withdrawal   |
            | sucessful withdrawal  |
        And the user accesses the "account cardless withdrawal" screen
        And the user select an amount
        And the user introduces a concept "<concept>"
        And the user continue with the withdrawal
        When the user continue with the OTP modal
        Then the user sees the following items in the screen
            | item              |
            | close button      |
            | header            |
            | header title      |
            | amount            |
            | codes             |
            | codes             |
            | folio             |
        Examples:
            | concept    |
            | concept    |
            | no concept |

    @CW011
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @alternate-scenarios-smoke @tmpExclude @JIRA.GLOMOMX-172850
    Scenario Outline: Cardless withdrawal "<account>"
        Given a user with the following criteria
            | criteria            |
            | cardless withdrawal |
            | <account>           |
        And the user accesses the "account cardless withdrawal" screen
        And the user select an amount
        And the user enters a concept
        And the user continue with the withdrawal
        When the user continue with the OTP modal
        Then the user sees the following items in the screen
            | item              |
            | close button      |
            | header            |
            | header title      |
            | amount            |
            | codes             |
            | codes             |
            | folio             |
        Examples:
            | account          |
            | checking account |
            | digital account  |
            | saving account   |
            | express account  |

    @CW012
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @alternate-scenarios-smoke @tmpExclude @JIRA.GLOMOMX-172850
    Scenario Outline: The user exits the success screen with a "<option>"
        Given a user with the following criteria
            | criteria              |
            | cardless withdrawal   |
            | sucessful withdrawal  |
        And the user accesses the "account cardless withdrawal" screen
        And the user select an amount
        And the user enters a concept
        And the user continue with the withdrawal
        And the user continue with the OTP modal
        When the user exits the success screen "<option>"
        Then the user sees the "product detail account" screen
        Examples:
            | option       |
            | exit button  |
            | exit         |

    @CW013
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @alternate-scenarios-smoke @tmpExclude @JIRA.GLOMOMX-172850
    @backend-smoke
    Scenario: Exit the account detail process
        Given a user with the following criteria
            | criteria             |
            | cardless withdrawal  |
            | sucessful withdrawal |
        And the user accesses the "account cardless withdrawal" screen
        And the user select an amount
        And the user enters a concept
        And the user continue with the withdrawal
        And the user exits token screen
        When the user exits the summary screen
        Then the user sees the "product detail account" screen

    @CW014
    @web-done
    @alternate-scenarios-smoke
    @ios @android @web
    @backend(test) @MX @vbank
    Scenario: The user views to participating merchants
        Given a user with the following criteria
            | criteria            |
            | accounts            |
            | verify commerce     |
            | multiple accounts   |
            | cardless withdrawal |
        And the user accesses the "account cardless withdrawal" screen
        When the user opens cardless withdrawal in commerce
        Then the user sees the following items in the screen
            | item			|
            | header 		|
            | amount list   |
            | bullet list   |
            | description   |
            | close button  |

    @CW015
    @vbank
    @alternate-scenarios-smoke
    @ios @android @web
    @web-done
    @backend(test) @MX @spherica
    Scenario: The user accesses to commerce indication
        Given a user with the following criteria
            | criteria            |
            | accounts            |
            | verify commerce     |
            | multiple accounts   |
            | cardless withdrawal |
        And the user accesses the "account cardless withdrawal" screen
        And the user select an amount
        And the user enters a concept
        And the user continue with the withdrawal
        And the user continue with the OTP modal
        When the user opens commerce information
        Then the user sees a modal with the following elements:
            | item			|
            | headerHalf    |
            | subTitle      |
            | bulletList    |
            | accept button |

    @CW016
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @manual @JIRA.GLOMOGL-31703
    Scenario: Happy Path Cardless Withdrawal in Commerce
        Given a user with the following criteria
            | criteria            |
            | accounts            |
            | multiple accounts   |
            | cardless withdrawal |
            | success withdrawal  |
        And the user accesses the "account cardless withdrawal" screen
        And the user select an amount
        And the user enters a concept
        And the user continue with the withdrawal
        And the user continue with the OTP modal
        When the user continue with a cardless withdrawal in a commerce
        Then the user sees the following items in the screen
            | item			|
            | close button 	|
            | header 		|
            | header title  |
            | text			|
	        | icons 	    |
	        | button 		|

    @CW017
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @manual @JIRA.GLOMOGL-31703
    Scenario: Participating businesses query
        Given a user with the following criteria
            | criteria            |
            | accounts            |
            | multiple accounts   |
            | cardless withdrawal |
            | success withdrawal  |
        And the user accesses the "account cardless withdrawal" screen
        And the user select an amount
        And the user enters a concept
        And the user continue with the withdrawal
        And the user continue with the OTP modal
        And the user access to the commerce modal
        When the user access to the available shops
        Then the user sees the following items in the screen
            | item			|
            | close button 	|
            | header 		|
            | header title 	|
            | text			|
          	| button 		|

    @CW019
    @web-done
    @ios @android @web
    @backend(test) @MX @vbank
    Scenario: The user confirm the MTU exception
        Given a user with the following criteria
            | criteria                              |
            | exception transfers with exceeded mtu |
        And the user accesses to option "cardless Withdrawal" operative
        And the user completes the process and accesses MTU Limit exceeded
        When the user confirms the MTU exception
        Then the user sees the following items in the screen
            | item			                           |
            | close button confirmation max limit      |
            | header confirmation max limit            |
            | microillustration confirmation max limit |
            | title confirmation max limit             |
            | description confirmation max limit       |
            | button confirmation max limit            |
