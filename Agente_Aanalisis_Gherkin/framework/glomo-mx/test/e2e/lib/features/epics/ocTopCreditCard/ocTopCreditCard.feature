@ocTopCreditCard
Feature: OC Top Credit Card

    @OCTCC001
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario Outline: Onboarding ILC offer - <onboarding_screen> screen
        Given a user with the following criteria
            | criteria          |
            | ilc reloaded      |
        And the user accesses to the credit card offer onboarding screen
        When the user swipes to onboarding "<slide_number_screen>" screen
        Then the user sees the following items in the screen
            | item                          |
            | onboarding header             |
            | onboarding content            |
            | onboarding continue button    |

        Examples:
            | onboarding_screen | slide_number_screen |
            | card evolves      | 1                   |
            | additional cards  | 2                   |
            | card available    | 3                   |

    @OCTCC002
    @web @ios @android @smokeTest
    @backend(test) @MX @vbank @web-done
    Scenario: Hiring ILC Upgrade - Happy path
        Given a user with the following criteria
            | criteria 		|
            | ilc reloaded 	|
        And the user accesses to the top credit card offer detail
        When the user request upgrade card from top credit card offer
        Then the user sees the following items in the screen
            | item 				        |
            | header success			|
            | success panel		        |
            | credit card info		    |
            | fees info			        |
            | delivery card info		|
            | contact detail message 	|
            | exit button 			    |

    @OCTCC003
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario Outline: Deploys tooltip <tooltip_screen> help modal
        Given a user with the following criteria
            | criteria 		|
            | ilc reloaded 	|
        And the user accesses to the top credit card offer detail
        When the user deploys "<tooltip_screen>" help modal
        Then the user sees the following items in the screen
            | item 				        |
            | info title			    |
            | info description 		    |
            | understood help button    |

        Examples:
            | tooltip_screen 	|
            | cat   		    |
            | interest          |
            | annuity           |

    @OCTCC004
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Half modal from the summary screen
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the user goes to summary screen
        When the user closes the current operative
        Then the user sees the following items in the screen
            | item 				                    |
            | warning small icon	                |
            | exit operative modal title			|
            | exit operative modal description		|
            | exit operative modal exit button		|
            | exit operative modal continue link	|

    @OCTCC005
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Continue to the process
        Given a user with the following criteria
            | criteria 		|
            | ilc reloaded 	|
        And the user accesses to the top credit card offer detail
        And the user goes to summary screen
        And the user closes the current operative
        When the user continues the process
        Then the user sees the following items in the screen
            | item 				            |
            | offer detail complete         |
            | delivery address complete     |
            | terms and conditions complete |
            | summary continue button       |

    @OCTCC006
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Show address data
        Given a user with the following criteria
            | criteria 		|
            | ilc reloaded 	|
        And the user accesses to the top credit card offer detail
        And the user accepts top credit card offer detail
        When the user "show" address information
        Then the user sees the following items in the screen
            | item 				        |
            | customer address          |
            | show hide address link    |

    @OCTCC007
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Hide address data
        Given a user with the following criteria
            | criteria 		|
            | ilc reloaded 	|
        And the user accesses to the top credit card offer detail
        And the user accepts top credit card offer detail
        And the user "show" address information
        When the user "hide" address information
        Then the user sees the following items in the screen
            | item 				        |
            | customer address          |
            | show hide address link    |

    @OCTCC008
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Faqs list screen
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        When the user accesses to the faqs list screen
        Then the user sees the following items in the screen
            | item 		|
            | faqs list |

    @OCTCC009
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Some question from faqs list
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the user accesses to the faqs list screen
        When the user consults some question to faqs list from top credit card offer
        Then the user sees the following items in the screen
            | item 				    |
            | faq question title	|
            | faq question answer   |

    @OCTCC010
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Consult offer detail from the summary screen
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the user goes to summary screen
        When the user consults "offer detail" from summary screen
        Then the user sees the following items in the screen
            | item 				            |
            | panel offer card              |
            | credit line offer             |
            | fees card section             |
            | offer detail continue button  |

    @OCTCC011
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Consult card delivery from the summary screen
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the user goes to summary screen
        When the user consults "delivery card" from summary screen
        Then the user sees the following items in the screen
            | item 				        |
            | customer address          |
            | show hide address link    |
            | address continue button   |

    @OCTCC012
    @web @ios @android @vbank
    @backend(test) @MX @web-done
    Scenario: Consult benefits modal
        Given a user with the following criteria
            | criteria      |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        When the user deploys the benefits modal from top credit card offer
        Then the user sees the following items in the screen
            | item 			                |
            | benefits panel offer          |
            | benefits credit line amount   |
            | benefits list                 |
            | benefits fees list            |
            | benefits considerations list  |

    @OCTCC013
    @web @ios @android
    @vbank @smokeTest
    @backend(test) @MX @web-done
    Scenario: Exit successful screen
        Given a user with the following criteria
            | criteria 	    |
            | ilc reloaded  |
        And the user accesses to the top credit card offer detail
        And the user request upgrade card from top credit card offer
        When the user goes back to previous page
        Then the user sees the "contract product section" screen
