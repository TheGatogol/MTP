@leadMortgage
Feature: Lead Mortgage

    @LM001
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Lead Mortgage - Offer dashboard
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                |
            | Banner Image        |
            | Banner Description  |
            | Banner Amount       |
            | Banner Link         |
            | Banner Close Button |

    @LM002
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Lead Mortgage - Offer Opportunities
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        When the user accesses contract product section
        Then the user sees the following items in the screen
            | item  | value         |
            | offer | mortgage-loan |

    @LM003
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Screen Detail - Lead Mortgage
        Given a user with the following criteria
            | criteria             |
            | lead mortgage        |
            | existing email       |
            | quadruple term offer |
        When the user accesses the lead mortgage offer
        Then the user sees the following items in the screen
            | item                    | value         |
            | header                  |               |
            | panel info              |               |
            | destination help icon   |               |
            | credit destination list | enabled       |
            | input amount            |               |
            | term label              |               |
            | currently selected term | 20            |
            | available term options  | 5, 10, 15, 20 |
            | interest help icon      |               |
            | cat help icon           |               |
            | data continue button    | enabled       |

    @LM004
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Screen Lead Mortgage - Go to Terms and conditions
        Given a user with the following criteria
            | criteria       |
            | lead mortgage  |
            | existing email |
        And the user accesses the lead mortgage offer
        When the user continues to the terms and conditions section
        Then the user sees the following items in the screen
            | item                  | value     |
            | legal header          |           |
            | condition info        |           |
            | authorization info    |           |
            | accept checkbox       | unchecked |
            | authorize checkbox    | unchecked |
            | legal panel info      |           |
            | legal continue button | disabled  |

    @LM005
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Summary Lead Mortgage
        Given a user with the following criteria
            | criteria       |
            | lead mortgage  |
            | existing email |
        And the user accesses the lead mortgage offer
        When the user completes the simulation and accepts the terms and conditions
        Then the user sees the following items in the screen
            | item                                                      | value       |
            | header                                                    |             |
            | close button                                              |             |
            | data edit button                                          |             |
            | amount title in summary                                   |             |
            | summary amount                                            | 3815469     |
            | monthly payment label in summary                          |             |
            | monthly payment in summary                                |             |
            | term label in summary                                     |             |
            | term in summary                                           |             |
            | credit destination label in summary                       |             |
            | credit destination in summary                             | acquisition |
            | commission for hiring label in summary                    |             |
            | commission for hiring in summary                          |             |
            | deferred credit authorization commission label in summary |             |
            | deferred credit authorization commission in summary       |             |
            | annual interest rate label in summary                     |             |
            | annual interest rate in summary                           |             |
            | cat label in summary                                      |             |
            | cat in summary                                            |             |
            | legal edit button                                         |             |
            | terms accepted icon                                       |             |
            | terms accepted                                            |             |
            | request button                                            |             |

    @LM006
    @web @android @ios
    @MX @backend(test) @vbank @web-done @smokeTest
    Scenario: Lead Mortgage - Success screen
        Given a user with the following criteria
            | criteria       |
            | lead mortgage  |
            | existing email |
        And the user accesses the lead mortgage offer
        When the user accesses to lead mortgage review
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | success              |
            | title                |
            | date                 |
            | amount               |
            | monthly payment      |
            | term                 |
            | destination          |
            | commission opening   |
            | deferred commission  |
            | monthly rate         |
            | cat                  |
            | due date             |
            | folio                |
            | message              |
            | email                |
            | button call atention |
            | button exit          |

    @LM007
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario Outline: Lead Mortgage - Destination Request <option>
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        And the user accesses the lead mortgage offer
        And the user select credit destination "<option>"
        And the user continues to the terms and conditions section
        When the user accepts the terms and condtions
        Then the user sees the following items in the screen
            | item                                | value    |
            | credit destination label in summary |          |
            | credit destination in summary       | <option> |

        Examples:
            | option      |
            | acquisition |
            | remodeling  |
            | land        |
            | liquidity   |
            | payment     |

    @LM008
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Lead Mortgage remove amount
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        And the user accesses the lead mortgage offer
        When the user remove amount lead
        Then the user sees the following items in the screen
            | item                    | value    |
            | credit destination list | disabled |
            | data continue button    | disabled |

    @LM009
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Lead Mortgage update amount
        Given a user with the following criteria
            | criteria       |
            | lead mortgage  |
            | existing email |
        And the user accesses the lead mortgage offer
        And the user update amount lead "1000000"
        When the user completes the simulation and accepts the terms and conditions
        Then the user sees the following items in the screen
            | item                    | value   |
            | amount title in summary |         |
            | summary amount          | 1000000 |

    @LM010
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Lead Mortgage term in years 4 options
        Given a user with the following criteria
            | criteria             |
            | lead mortgage        |
            | quadruple term offer |
        When the user accesses the lead mortgage offer
        Then the user sees the following items in the screen
            | item                    | value         |
            | term label              |               |
            | currently selected term | 20            |
            | available term options  | 5, 10, 15, 20 |

    @LM011
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Lead Mortgage term in years 3 options
        Given a user with the following criteria
            | criteria          |
            | lead mortgage     |
            | triple term offer |
        When the user accesses the lead mortgage offer
        Then the user sees the following items in the screen
            | item                    | value     |
            | term label              |           |
            | currently selected term | 15        |
            | available term options  | 5, 10, 15 |

    @LM012
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Lead Mortgage term in years 2 options
        Given a user with the following criteria
            | criteria        |
            | lead mortgage   |
            | dual term offer |
        When the user accesses the lead mortgage offer
        Then the user sees the following items in the screen
            | item            |
            | term five years |
            | term ten years  |

    @LM013
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Lead Mortgage term in years without options
        Given a user with the following criteria
            | criteria          |
            | lead mortgage     |
            | single term offer |
        When the user accesses the lead mortgage offer
        Then the user sees the following items in the screen
            | item                    | value | visibility  |
            | term label              |       | visible     |
            | currently selected term | 10    | visible     |
            | available term options  | 10    | not visible |
            | term ten years          |       | not visible |

    @LM014
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Lead Mortgage update term with slidebar
        Given a user with the following criteria
            | criteria             |
            | lead mortgage        |
            | quadruple term offer |
        And the user accesses the lead mortgage offer
        When the user modifys the lead mortgage term
        Then the user sees the following items in the screen
            | item             |
            | term has changed |

    @LM015
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario Outline: Screen section <option>
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        And the user accesses the lead mortgage offer
        And the user continues to the terms and conditions section
        When the user enters the "<option>" modal
        Then the user sees the following items in the screen
            | item                |
            | header modal        |
            | button right modal  |

        Examples:
            | option                      |
            | term and conditions         |
            | authorization credit bureau |

    @LM016
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario Outline: Screen <detail> accepts
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        And the user accesses the lead mortgage offer
        And the user continues to the terms and conditions section
        And the user enters the "<option>" modal
        When the user closes the modal
        Then the user sees the following items in the screen
            | item                | visibility  |
            | header modal        | not visible |
            | body text modal     | not visible |

        Examples:
            | option                      | detail                            |
            | term and conditions         | term and conditions modal         |
            | authorization credit bureau | authorization credit bureau modal |

    @LM017
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Change details in the full summary
        Given a user with the following criteria
            | criteria             |
            | lead mortgage        |
            | quadruple term offer |
        And the user accesses the lead mortgage offer
        And the user completes the simulation and accepts the terms and conditions
        And the user change lead mortgage
        When the user continues to the terms and conditions section
        Then the user sees the following items in the screen
            | item                                | value     |
            | credit destination label in summary |           |
            | credit destination in summary       | liquidity |

    @LM018
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Summary - consults the terms and conditions
        Given a user with the following criteria
            | criteria       |
            | lead mortgage  |
            | existing email |
        And the user accesses the lead mortgage offer
        And the user completes the simulation and accepts the terms and conditions
        When the user consult terms and conditions in the summary
        Then the user sees the following items in the screen
            | item                  | value   |
            | legal header          |         |
            | condition info        |         |
            | authorization info    |         |
            | accept checkbox       | checked |
            | authorize checkbox    | checked |
            | legal panel info      |         |
            | legal continue button | enabled |

    @LM019
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Summary - modal close warning
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        And the user accesses the lead mortgage offer
        And the user completes the simulation and accepts the terms and conditions
        When the user closes screen summary
        Then the user sees an error modal with the following elements:
            | item          |
            | icon          |
            | description   |
            | accept button |
            | cancel button |

    @LM020
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Lead Mortgage - Detail close warning
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        And the user accesses the lead mortgage offer
        And the user continues to the terms and conditions section
        When the user closes screen summary
        Then the user sees an error modal with the following elements:
            | item          |
            | icon          |
            | description   |
            | accept button |
            | cancel button |

    @LM021
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Summary Lead Mortgage - go back to opportunities
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        And the user accesses the lead mortgage offer
        And the user completes the simulation and accepts the terms and conditions
        And the user closes screen summary
        When the user accepts the error modal
        Then the user accesses the "contract product section" screen

    @LM022
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Summary Lead Mortgage - go back to detail
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        And the user accesses the lead mortgage offer
        And the user completes the simulation and accepts the terms and conditions
        And the user closes screen summary
        When the user cancels the operation error modal
        Then the user "doesnt" see a modal open

    @LM023
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario Outline: Lead Mortgage - sees <option> modal
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
            | without email |
        And the user accesses the lead mortgage offer
        When the user enters the "<option>" modal
        Then the user sees the following items in the screen
            | item                |
            | header modal        |
            | title icon modal    |
            | body text modal     |
            | button right modal  |

        Examples:
            | option                 |
            | destination offer help |
            | hiring help            |
            | authorization help     |
            | interest help          |
            | cat help               |

    @LM024
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario Outline: Screen help - accepts <modal>
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
            | without email |
        And the user accesses the lead mortgage offer
        And the user enters the "<option>" modal
        When the user closes the modal
        Then the user sees the following items in the screen
            | item                | visibility  |
            | header modal        | not visible |
            | title icon modal    | not visible |
            | body text modal     | not visible |
            | button right modal  | not visible |
            | button accept modal | not visible |

        Examples:
            | option                 | modal                   |
            | destination offer help | destination offer modal |
            | hiring help            | hiring modal            |
            | authorization help     | authorization modal     |
            | interest help          | interest modal          |
            | cat help               | cat modal               |

    @LM025
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Terms and conditions - User without email
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
            | without email |
        And the user accesses the lead mortgage offer
        When the user continues to the terms and conditions section
        Then the user sees the following items in the screen
            | item                  | value     | visibility  |
            | legal header          |           | visible     |
            | condition info        |           | visible     |
            | authorization info    |           | visible     |
            | accept checkbox       | unchecked | visible     |
            | authorize checkbox    | unchecked | visible     |
            | legal panel info      |           | visible     |
            | email in info panel   |           | not visible |
            | legal continue button | disabled  | visible     |

    @LM026
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Summary - User without email
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
            | without email |
        And the user accesses the lead mortgage offer
        When the user completes the simulation and accepts the terms and conditions
        Then the user sees the following items in the screen
            | item                                                      | value       |
            | header                                                    |             |
            | close button                                              |             |
            | data edit button                                          |             |
            | amount title in summary                                   |             |
            | summary amount                                            | 3815469     |
            | monthly payment label in summary                          |             |
            | monthly payment in summary                                |             |
            | term label in summary                                     |             |
            | term in summary                                           |             |
            | credit destination label in summary                       |             |
            | credit destination in summary                             | acquisition |
            | commission for hiring label in summary                    |             |
            | commission for hiring in summary                          |             |
            | deferred credit authorization commission label in summary |             |
            | deferred credit authorization commission in summary       |             |
            | annual interest rate label in summary                     |             |
            | annual interest rate in summary                           |             |
            | cat label in summary                                      |             |
            | cat in summary                                            |             |
            | legal edit button                                         |             |
            | terms accepted icon                                       |             |
            | terms accepted                                            |             |
            | request button                                            |             |

    @LM027
    @web @android @ios
    @MX @backend(test) @vbank @web-done @smokeTest
    Scenario: Success screen - User without email
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
            | without email |
        And the user accesses the lead mortgage offer
        When the user accesses to lead mortgage review
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | title                |
            | amount               |
            | monthly payment      |
            | term                 |
            | destination          |
            | commission opening   |
            | deferred commission  |
            | monthly rate         |
            | cat                  |
            | due date             |
            | folio                |
            | message              |
            | button call atention |
            | button exit          |

    @LM028
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario Outline: Lead Mortgage - <value> Amount Errors
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
            | without email |
        And the user accesses the lead mortgage offer
        When the user update amount lead "<amount>"
        Then the user sees the following items in the screen
            | item                 |
            | amount error message |

        Examples:
            | value   | amount  |
            | minimum | 100     |
            | maximum | 5000000 |

    @LM029
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: New credit with a lower and higher limit - Error
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        And the user accesses the lead mortgage offer
        When the user update amount lead "1000000"
        Then the user sees an error modal with the following elements:
            | item                       |
            | header                     |
            | main icon                  |
            | main container header      |
            | main container description |
            | accept button              |

    @LM030
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Credit with a lower limit - Back to Lead Mortgage
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
        And the user accesses the lead mortgage offer
        And the user update amount lead "1000000"
        And the user modifys the lead mortgage term
        When the user accepts the error modal
        Then the user "doesnt" see a modal open

    @LM031
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Error with the simulation
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
            | without email |
        And the user accesses the lead mortgage offer
        When the user update amount lead "1000000"
        Then the user sees an error modal with the following elements:
            | item          |
            | icon          |
            | description   |
            | accept button |

    @LM032
    @web @android @ios
    @MX @backend(test) @vbank @web-done
    Scenario: Error with the simulation - retry 3 times
        Given a user with the following criteria
            | criteria      |
            | lead mortgage |
            | without email |
        And the user accesses the lead mortgage offer
        And the user update amount lead "1000000"
        When the user tries to simulate term three times
        Then the user sees an error modal with the following elements:
            | item           |
            | container icon |
            | description    |
            | accept button  |
