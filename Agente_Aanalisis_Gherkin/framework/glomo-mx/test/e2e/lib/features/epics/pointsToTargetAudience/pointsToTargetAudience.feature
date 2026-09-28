@pointsToTargetAudience
Feature: Points to target audience

    @PFTA001
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Show transactions with target audience purchase mark
        Given a user with the following criteria
            | criteria                  |
            | card with transactions    |
            | target audience purchases |
        When the user accesses to the "operative" "credit" card product detail
        Then the user sees the following items in the screen
            | item 					 	        |
            | header 				 	        |
            | target audience purchase message	|
            | i want label					    |

    @PFTA002
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Show banner in transaction detail
        Given a user with the following criteria
            | criteria                  |
            | card with transactions    |
            | target audience purchases |
        When the user accesses to movement detail from a "card with points" within Product detail
        Then the user sees the following items in the screen
            | item 					 	        |
            | target audience purchase banner 	|

    @PFTA003
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Deploy the target audience purchase modal
        Given a user with the following criteria
            | criteria                  |
            | card with transactions    |
            | target audience purchases |
        And the user accesses to movement detail from a "card with points" within Product detail
        When the user goes to Pay with Points
        Then the user sees the following items in the screen
            | item 					 	                    |
            | pob modal header					            |
            | pob modal faqs button					        |
            | pob modal panel image 				        |
            | pob modal panel title	                        |
            | pob modal panel description                   |
            | pob modal purchase amount				        |
            | pob modal amount to pay with points			|
            | pob modal amount to pay with card			    |
            | pob modal points to use information message   |
            | pob modal promotion comparative			    |
            | pob modal effective date				        |
            | pob modal use my points button			    |

    @PFTA004
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Message with the value of the point for promotion
        Given a user with the following criteria
            | criteria                  |
            | card with transactions    |
            | target audience purchases |
        And the user accesses to movement detail from a "card with points" within Product detail
        And the user goes to Pay with Points
        When the user selects use my points
        Then the user sees the following items in the screen
            | item                        |
            | one point value equivalence |

    @PFTA005
    @web @ios @android @vbank @smokeTest
    @backend(test) @MX @web-done
    Scenario: Happy path - Successful redemption promotion
        Given a user with the following criteria
            | criteria                  |
            | card with transactions    |
            | target audience purchases |
        And the user accesses to movement detail from a "card with points" within Product detail
        And the user goes to Pay with Points
        And the user selects use my points
        When the user continues with the pay process
        Then the user sees the following items in the screen
            | item 						    |
            | advantage your points message |

    @PFTA006
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Exit the promotion modal
        Given a user with the following criteria
            | criteria                  |
            | card with transactions    |
            | target audience purchases |
        And the user accesses to movement detail from a "card with points" within Product detail
        When the user goes to Pay with Points
        Then the user goes to back to the "transaction detail" using the exit action

    @PFTA007
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Faqs - target audience
        Given a user with the following criteria
            | criteria                  |
            | card with transactions    |
            | target audience purchases |
        And the user accesses to movement detail from a "card with points" within Product detail
        And the user goes to Pay with Points
        When the user accesses to faq questions page
        Then the user sees the following items in the screen
            | item			        |
            | header faq title	    |
            | header exit button    |
            | pay with points title |
            | faq information       |

    @PFTA008
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Exit faqs list
        Given a user with the following criteria
            | criteria                  |
            | card with transactions    |
            | target audience purchases |
        And the user accesses to movement detail from a "card with points" within Product detail
        And the user goes to Pay with Points
        When the user accesses to faq questions page
        Then the user goes to back to the "target audience purchase modal" using the exit action
