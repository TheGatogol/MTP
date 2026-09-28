@pointsPurchase
Feature: Points purchase

    @PP001
    @ios @android @web @web-done
    @vbank
    @MX @backend(artichoke)
    Scenario: Successfully "Pay with points" simulation from Product detail
        Given a user with the following criteria
            | criteria            |
            | Pay with points     |
            | Card without errors |
        And the user accesses to movement detail from a "card with points" within Product detail
        When the user accesses to Pay with Points
        Then the user sees the following items in the screen
            | item                         |
            | header pay with points title |
            | header faq button            |
            | header exit button           |
            | credit card image            |
            | credit card PAN5             |
            | balance used                 |
            | cut off date                 |
            | payment limit date           |
            | purchase concept             |
            | purchase amount              |
            | purchase points equivalence  |
            | one point value equivalence  |
            | amount to pay with points    |
            | points to use                |
            | points left                  |
            | amount pending to pay        |
            | pay with points regards      |
            | continue button              |

    @PP002
    @ios @android @web @web-done
    @vbank
    @MX @backend(artichoke)
    Scenario: Error in "Pay with points" simulation (1-st or 2-nd error)
        Given a user with the following criteria
            | criteria              |
            | Pay with points       |
            | Card with first error |
        And the user accesses to movement detail from a "card with points" within Product detail
        When the user attempts to accesses to Pay with Points
        Then the user sees a modal with the following elements:
            | item               |
            | error info text    |
            | X button in header |
            | retry button       |
            | exit button        |

    @PP003
    @ios @android @web @web-done
    @vbank @vbank-modified
    @MX @backend(artichoke)
    Scenario: Error in "Pay with points" simulation (3-rd error)
        Given a user with the following criteria
            | criteria              |
            | Pay with points       |
            | Card with third error |
        And the user accesses to movement detail from a "card with points" within Product detail
        When the user attempts to accesses to Pay with Points
        And the user retries "2" more times
        Then the user sees a modal with the following elements:
            | item               |
            | error info text    |
            | X button in header |
            | exit button        |

    @PP004
    @ios @android @web @web-done
    @smokeTest @vbank
    @MX @backend(artichoke)
    Scenario: Success in "Pay with points" execution from Product detail
        Given a user with the following criteria
            | criteria            |
            | Pay with points     |
            | Card without errors |
        And the user accesses to movement detail from a "card with points" within Product detail
        When the user accesses to Pay with Points
        And the user continues with the pay process
        Then the user sees the following items in the screen
            | item                         |
            | header Pay with points title |
            | header exit button           |
            | operation date               |
            | amount refunded              |
            | points used                  |
            | amount pending to pay        |
            | previous balance             |
            | updated balance              |
            | credit card name             |
            | credit card PAN5             |
            | feature name                 |
            | purchase concept             |
            | purchase amount              |
            | transaction folio            |
            | share operation              |
            | exit button                  |

    @PP005
    @ios @android @web @web-done
    @vbank
    @MX @backend(artichoke)
    Scenario: Error in "Pay with points" execution (1-st or 2-nd error)
        Given a user with the following criteria
            | criteria                  |
            | Pay with points           |
            | Card with first error pay |
        And the user accesses to movement detail from a "card with points" within Product detail
        And the user accesses to Pay with Points
        When the user continues with the pay process
        Then the user sees a "small" modal with the following elements:
            | item            |
            | error info text |
            | retry button    |
            | exit button     |

    @PP006
    @ios @android @web @web-done
    @vbank @vbank-modified
    @MX @backend(artichoke)
    Scenario: Error in "Pay with points" execution (3-rd error)
        Given a user with the following criteria
            | criteria                  |
            | Pay with points           |
            | Card with third error pay |
        And the user accesses to movement detail from a "card with points" within Product detail
        And the user attempts to accesses to Pay with Points
        When the user continues with the pay process
        And the user retries "2" more times
        Then the user sees a modal with the following elements:
            | item               |
            | error info text    |
            | X button in header |
            | exit button        |

    @PP007
    @ios @android @web @web-done
    @vbank
    @MX @backend(artichoke)
    Scenario: Check faqs information
        Given a user with the following criteria
            | criteria            |
            | Pay with points     |
            | Card without errors |
        And the user accesses to movement detail from a "card with points" within Product detail
        When the user accesses to Pay with Points
        And the user accesses to faq questions page
        Then the user sees the following items in the screen
            | item                  |
            | header FAQ title      |
            | header exit button    |
            | Pay with points title |
            | FAQ information       |

    @PP008
    @ios @android @web @web-done
    @vbank
    @MX @backend(artichoke)
    Scenario: Check viewed regards
        Given a user with the following criteria
            | criteria            |
            | Pay with points     |
            | Card without errors |
        And the user accesses to movement detail from a "card with points" within Product detail
        When the user accesses to Pay with Points
        And the user continues the process
        Then the user sees the following items in the screen
            | item                           |
            | header Pay with points title   |
            | header faq button              |
            | header exit button             |
            | credit card image              |
            | credit card PAN5               |
            | balance used                   |
            | cut off date                   |
            | payment limit date             |
            | purchase concept               |
            | purchase amount                |
            | purchase points equivalence    |
            | one point value equivalence    |
            | amount to pay with points      |
            | points to use                  |
            | points left                    |
            | amount pending to pay          |
            | pay with points regards viewed |
            | Pay with points button         |

    @PP009
    @ios @android @web @web-done
    @vbank
    @MX @backend(artichoke)
    Scenario: Successfully "Pay with points" simulation - Pay with points button
        Given a user with the following criteria
            | criteria            |
            | Pay with points     |
            | Card without errors |
        And the user accesses to movement detail from a "card with points" within Product detail
        And the user completes Pay with Points process
        And the user accesses to movement detail from a "card with points" within Product detail
        When the user accesses to Pay with Points
        And the user continues the process
        Then the user sees the following items in the screen
            | item                           | value  |
            | header Pay with points title   |        |
            | header faq button              |        |
            | header exit button             |        |
            | credit card image              |        |
            | credit card PAN5               |        |
            | balance used                   |        |
            | cut off date                   |        |
            | payment limit date             |        |
            | purchase concept               |        |
            | purchase amount                |        |
            | purchase points equivalence    |        |
            | one point value equivalence    |        |
            | amount to pay with points      |        |
            | points to use                  |        |
            | points left                    |        |
            | amount pending to pay          |        |
            | pay with points regards viewed |        |
            | Pay with points button         | enable |

    @PP010
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    Scenario: Validate movement detail when it is not a candidate to pay with points
        Given a user with the following criteria
            | criteria        |
            | points purchase |
            | account         |
        When the user enters the card and a movement with "none"
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | button return         |
            | amount of transaction |
            | movement date         |
            | retirement account    |

    @PP011
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    Scenario: Successfully pay with points simulation from Product detail
        Given a user with the following criteria
            | criteria        |
            | points purchase |
            | account         |
        And the user enters the card and a movement with "i want"
        And the user enters to pay with points
        When the user continues with the pay process
        Then the user sees the following items in the screen
            | item                         |
            | header Pay with points title |
            | points used                  |
            | header exit button           |
            | purchase amount              |
            | purchase concept             |

    @PP012
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    Scenario: Check viewed regards TDC CREA
        Given a user with the following criteria
            | criteria        |
            | points purchase |
            | account         |
        And the user enters the card and a movement with "i want"
        When the user enters to pay with points
        Then the user sees the following items in the screen
            | item                         |
            | header Pay with points title |
            | header faq button            |
            | header exit button           |
            | credit card image            |
            | credit card PAN5             |

    @PP013
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    Scenario: Exit the motion detail screen
        Given a user with the following criteria
            | criteria        |
            | points purchase |
            | account         |
        And the user enters the card and a movement with "i want"
        When the user returns to the previous screen
        Then the user sees the following items in the screen
            | item                             |
            | header                           |
            | card image                       |
            | statement enquiry card           |
            | current available amount label   |
            | current available balance amount |

    @PP014
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    Scenario: Error when exiting the screen x button
        Given a user with the following criteria
            | criteria        |
            | points purchase |
            | label wanna     |
        And the user enters the card and a movement with "i want"
        And the user enters the screen to pay with points
        When the user closes the modal with "go out"
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | button return         |
            | amount of transaction |
            | movement date         |
            | retirement account    |

    @PP015
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    Scenario: Exit the error screen exit button
        Given a user with the following criteria
            | criteria        |
            | points purchase |
            | label wanna     |
        And the user enters the card and a movement with "i want"
        And the user enters the screen to pay with points
        When the user closes the modal with "undershoot"
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | button return         |
            | amount of transaction |
            | movement date         |
            | retirement account    |

    @PP016
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    Scenario: Exit faq screen X button
        Given a user with the following criteria
            | criteria        |
            | points purchase |
            | account         |
        And the user enters the card and a movement with "i want"
        And the user enters the screen to pay with points
        When the user enters the help section and closes it
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | button return     |
            | button use points |
            | icon smile        |
            | text amount poins |

    @PP017
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    Scenario: Exit the Pay with Points screen - X button
        Given a user with the following criteria
            | criteria        |
            | points purchase |
            | account         |
        And the user enters the card and a movement with "i want"
        And the user enters to pay with points
        When the user exits the pay with points screen
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | button return         |
            | amount of transaction |
            | movement date         |
            | retirement account    |

    @PP018
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    Scenario: Exit the we had a problem screen - x button
        Given a user with the following criteria
            | criteria        |
            | points purchase |
            | label wanna     |
        And the user enters the card and a movement with "i want"
        And the user enters the screen to pay with points
        When the user closes the modal with "undershoot"
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | button return         |
            | amount of transaction |
            | movement date         |
            | retirement account    |

    @PP019
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    Scenario: Exit the we had a problem screen - exit button
        Given a user with the following criteria
            | criteria        |
            | points purchase |
            | label wanna     |
        And the user enters the card and a movement with "i want"
        And the user enters the screen to pay with points
        When the user closes the modal with "go out"
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | button return         |
            | amount of transaction |
            | movement date         |
            | retirement account    |

    @PP020
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    @smokeTest
    Scenario: Exit the Operation Success screen buton x
        Given a user with the following criteria
            | criteria        |
            | points purchase |
            | account         |
        And the user enters the card and a movement with "i want"
        And the user enters to pay with points
        And the user continues with the pay process
        When the user exits the success screen using the option "cancel"
        Then the user sees the following items in the screen
            | item                             |
            | header                           |
            | card image                       |
            | statement enquiry card           |
            | current available amount label   |
            | current available balance amount |

    @PP021
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    Scenario: Exit the Operation Success screen button exit
        Given a user with the following criteria
            | criteria        |
            | points purchase |
            | account         |
        And the user enters the card and a movement with "i want"
        And the user enters to pay with points
        And the user continues with the pay process
        When the user exits the success screen using the option "go out"
        Then the user sees the following items in the screen
            | item                             |
            | header                           |
            | card image                       |
            | statement enquiry card           |
            | current available amount label   |
            | current available balance amount |

    @PP022
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    Scenario: Validate payment summary when the movement has a Partial Payment
        Given a user with the following criteria
            | criteria        |
            | points purchase |
            | account         |
        And the user enters the card and a movement with "i want"
        And the user enters to pay with points
        When the user will pay with points
        Then the user sees the following items in the screen
            | item                         |
            | header pay with points title |
            | header faq button            |
            | purchase concept             |
            | balance used                 |
            | points to use                |

    @PP023
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    @smokeTest
    Scenario: Exit the Pay with Points screen - Exit Button - Partial Payment
        Given a user with the following criteria
            | criteria        |
            | points purchase |
            | account         |
        And the user enters the card and a movement with "i want"
        And the user enters to pay with points
        And the user continues with the pay process
        When the user exits the success screen using the option "go out"
        Then the user sees the following items in the screen
            | item                             |
            | header                           |
            | card image                       |
            | statement enquiry card           |
            | current available amount label   |
            | current available balance amount |
