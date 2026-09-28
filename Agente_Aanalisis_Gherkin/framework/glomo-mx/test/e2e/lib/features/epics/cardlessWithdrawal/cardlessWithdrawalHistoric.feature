@cardlessWithdrawalHistoric
Feature: cardlessWithdrawalHistoric

    @CWH002 @vbank
    @MX @backend(test)
    @backend-smoke
    @web @ios @android @web-done
    Scenario: cardlessWithdrawal - go back dashboard
        Given a user with the following criteria
            | criteria                     |
            | cardless withdrawal historic |
            | cardless withdrawal expired  |
            | multiple accounts            |
        And the user accesses to "cardless withdrawal historic" item located in the sidebar
        And the user accesses to cardless withdrawal with "first movement" status
        When the user returns to previous pages
        Then the user is in the dashboard screen

    @CWH003 @vbank
    @MX @backend(test)
    @backend-smoke
    @web @ios @android @web-done
    Scenario: CardlessWithdrawal - go info modal
        Given a user with the following criteria
            | criteria                     	|
            | multiple status               |
            | cardless withdrawal pending  	|
            | cardless withdrawal historic  |
            | multiple accounts            	|
        And the user accesses to "cardless withdrawal historic" item located in the sidebar
        When the user accesses info modal cardlessWithdrawal
        Then the user sees a modal with the following elements:
            | item			|
            | close button  |
            | img           |
            | text cardless |
            | info text     |
            | header rst    |

    @CWH004 @vbank
    @MX @backend(test)
    @smokeTest
    @backend-smoke
    @web @ios @android @web-done
    Scenario: Exit cardless withdrawal historic page
        Given a user with the following criteria
            | criteria                     |
            | cardless withdrawal historic |
            | cardless withdrawal expired  |
            | multiple accounts            |
        And the user accesses to "cardless withdrawal historic" item located in the sidebar
        When the user closes the current operative
        Then the user is in the dashboard screen

    @CWH005 @vbank
    @MX @backend(test)
    @backend-smoke
    @web @ios @android @web-done
    Scenario: Go back from detail to historic
        Given a user with the following criteria
            | criteria                     |
            | cardless withdrawal historic |
            | cardless withdrawal expired  |
            | multiple accounts            |
        And the user accesses to "cardless withdrawal historic" item located in the sidebar
        And the user accesses to cardless withdrawal with "first movement" status
        When the user goes back to previous page
        Then the user accesses the "cardless withdrawal historic" screen

    @CWH006
    @vbank
    @MX @backend(test)
    @web @ios @android @web-done @spherica
    @vbank-modified
    Scenario: Go back from detail to historic with service error
        Given a user with the following criteria
            | criteria                     |
            | cardless withdrawal historic |
            | cardless withdrawal expired  |
            | multiple accounts            |
        And the user accesses to "cardless withdrawal historic" item located in the sidebar
        When the user accesses to cardless withdrawal with "service error" status
        Then the user sees a modal with the following elements:
            | item              |
            | header error      |
            | modal error       |
            | text error        |
            | icon error        |
            | error exit        |
            | cancel withdrawal |

    @CWH007 @vbank
    @MX @backend(test)
    @web @ios @android @web-done
    Scenario: CardlessWithdrawal - cancel withdrawal
        Given a user with the following criteria
            | criteria                     	|
            | multiple status               |
            | multiple accounts            	|
            | cardless withdrawal pending  	|
            | cardless withdrawal historic  |
        And the user accesses to "cardless withdrawal historic" item located in the sidebar
        And the user accesses to cardless withdrawal with "pending payment" status
        When the user cancel the withdrawal
        Then the user sees the following items in the screen
            | item          |
            | label cancel  |
            | label concept |
            | label date    |
            | back button   |

    @CWH008 @vbank
    @MX @backend(test)
    @backend-smoke
    @web @ios @android @web-done
    Scenario: CardlessWithdrawal - canceled status
        Given a user with the following criteria
            | criteria                     	|
            | multiple status               |
            | multiple accounts            	|
            | cardless withdrawal pending  	|
            | cardless withdrawal historic  |
        And the user accesses to "cardless withdrawal historic" item located in the sidebar
        When the user accesses to cardless withdrawal with "canceled" status
        Then the user sees the following items in the screen
            | item          |
            | label cancel  |
            | label concept |
            | label date    |
            | back button   |

    @CWH009 @vbank
    @MX @backend(test)
    @backend-smoke
    @web @ios @android @web-done
    Scenario: CardlessWithdrawal - expired status
        Given a user with the following criteria
            | criteria                     |
            | multiple status              |
            | multiple accounts            |
            | cardless withdrawal historic |
            | cardless withdrawal expired  |
        And the user accesses to "cardless withdrawal historic" item located in the sidebar
        When the user accesses to cardless withdrawal with "expired" status
        Then the user sees the following items in the screen
            | item          |
            | label expired |
            | label concept |
            | back button   |

    @CWH010 @vbank
    @MX @backend(test)
    @web @ios @android @web-done
    @manual @JIRA.GLOMOGL-31703
    Scenario: The user accesses to cardless withdrawal historic commerce
        Given a user with the following criteria
            | criteria                     	|
            | multiple accounts            	|
            | cardless withdrawal pending  	|
            | cardless withdrawal historic 	|
        And the user accesses to "cardless withdrawal historic" item located in the sidebar
        And the user accesses to cardless withdrawal with "pending payment" status
        When the user access to Cardless Withdrawal in commerce
        Then the user sees the following items in the screen
 	        | item			|
            | header title  |
            | close button 	|
            | QR image		|
            | info box      |
            | header 		|
            | QR icon       |
            | text			|
	        | iconos 		|
	        | button 		|

    @CWH0011 @vbank
    @MX @backend(test)
    @web @ios @android @web-done
    @manual @JIRA.GLOMOGL-31703
    Scenario: The user verifies the stores to cardless withdrawal historic commerce
        Given a user with the following criteria
            | criteria                     	|
            | multiple accounts            	|
            | cardless withdrawal pending  	|
            | cardless withdrawal historic 	|
        And the user accesses to "cardless withdrawal historic" item located in the sidebar
        And the user accesses to cardless withdrawal with "pending payment" status
        And the user access to cardless withdrawal commerce
        When the user access to the available shops
        Then the user sees the following items in the screen
 	        | item			|
            | header title 	|
            | close button 	|
            | shops list    |
            | header 		|
            | button 		|
            | text			|

    @CWH012
    @vbank
    @MX @backend(test)
    @vbank-modified
    @web @ios @android @web-done @spherica
    Scenario: The user accesses to cardless withdrawal historic commerce and response an error
        Given a user with the following criteria
            | criteria                     	|
            | multiple accounts            	|
            | cardless withdrawal pending  	|
            | multiple accounts          	|
        And the user accesses to "cardless withdrawal historic" item located in the sidebar
        And the user accesses to cardless withdrawal with "pending payment" status
        When the user selects cardless withdrawal commerce
        Then the user sees the following items in the screen
            | item			|
            | header title  |
            | close button 	|
            | error image	|
            | title 		|
            | text   		|
