@gradualFeedbackClientVoiceConnect
Feature: Gradual Feedback Client Voice Connect

    @GFA003
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Access the "Your opinion counts" screen when giving a rating
        Given a user with the following criteria
            | criteria       |
            | gradual logout |
        And the user ends the session
        And the user is presented with the "log out" survey
        When the user selects a rating
        Then the user sees the following items in the screen
            | item                          |
            | text area feedback            |
            | button send feedback          |
            | rating from 5 starts feedback |
            | checkbox options feedback     |

    @GFA004
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Successful screen after giving an opinion by modifying elements and writing feedback
        Given a user with the following criteria
            | criteria       |
            | gradual logout |
        And the user ends the session
        And the user is presented with the "log out" survey
        When the user rates "log out" flow
        Then the user sees the following items in the screen
            | item                          |
            | header thankyou feedback      |
            | exit thankyou feedback        |
            | micro thankyou feedback       |
            | title thankyou feedback       |
            | description thankyou feedback |

    @GFA005
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Successful screen when performing a rating and without any additional feedback
        Given a user with the following criteria
            | criteria       |
            | gradual logout |
        And the user ends the session
        And the user is presented with the "log out" survey
        When the user rates and sends
        Then the user sees the following items in the screen
            | item                          |
            | header thankyou feedback      |
            | exit thankyou feedback        |
            | micro thankyou feedback       |
            | title thankyou feedback       |
            | description thankyou feedback |

    @GFA006
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Exiting the feedback process when a review is submitted
        Given a user with the following criteria
            | criteria       |
            | gradual logout |
        And the user ends the session
        And the user is presented with the "log out" survey
        And the user rates "log out" flow
        When the user logout from the gradual feedback survey "completed questionnaire"
        Then the user sees the following items in the screen
            | item                       |
            | continue button disabled   |
            | username input             |

    @GFA007
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Exit the feedback process when no additional opinion is registered
        Given a user with the following criteria
            | criteria       |
            | gradual logout |
        And the user ends the session
        And the user is presented with the "log out" survey
        And the user rates and sends
        When the user logout from the gradual feedback survey "completed questionnaire"
        Then the user sees the following items in the screen
            | item                       |
            | continue button disabled   |
            | username input             |

    @GFA008
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Exit the feedback process when the rating changes
        Given a user with the following criteria
            | criteria       |
            | gradual logout |
        And the user ends the session
        And the user is presented with the "log out" survey
        And the user changes the survey rating and sends it
        When the user logout from the gradual feedback survey "completed questionnaire"
        Then the user sees the following items in the screen
            | item                       |
            | continue button disabled   |
            | username input             |

    @GFA009
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Exiting the feedback process from the modal media "Your opinion counts"
        Given a user with the following criteria
            | criteria       |
            | gradual logout |
        And the user ends the session
        And the user is presented with the "log out" survey
        When the user logout from the gradual feedback survey "close without answer"
        Then the user sees the following items in the screen
            | item                       |
            | continue button disabled   |
            | username input             |

    @GFA010
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Leaving the feedback process without completing it
        Given a user with the following criteria
            | criteria       |
            | gradual logout |
        And the user ends the session
        And the user is presented with the "log out" survey
        When the user logout from the gradual feedback survey "uncompleted questionnaire"
        Then the user sees the following items in the screen
            | item                       |
            | continue button disabled   |
            | username input             |

    @GFA011
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Successfully complete the feedback form for international transfer success
        Given a user with the following criteria
            | criteria                |
            | gradual international   |
        And the user accesses to make an international transfer with the folloging data
            | account | entryPoint     | data   | economicActivity |
            | 0495    | Account Detail | valid  | local            |
        And the user enter otp
        And the user is presented with the "international transfer success" survey
        When the user rates "international transfer success" flow
        Then the user sees the following items in the screen
            | item                          |
            | header thankyou feedback      |
            | exit thankyou feedback        |
            | micro thankyou feedback       |
            | title thankyou feedback       |
            | description thankyou feedback |

    @GFA012
    @vbank @backend(test) @MX
    @ios @android @web @smokeTest
    @web-done
    Scenario: International transfer success with feedback
        Given a user with the following criteria
            | criteria                |
            | gradual international   |
        And the user accesses to make an international transfer with the folloging data
            | account | entryPoint     | data   | economicActivity |
            | 0495    | Account Detail | valid  | local            |
        And the user enter otp
        When the user is presented with the "international transfer success" survey
        Then the user sees the following items in the screen
            | item                   |
            | header feedback        |
            | exit button feedback   |
            | rating feedback button |

    @GFA013
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: Successfully complete the feedback form for international transfer abandonment
        Given a user with the following criteria
            | criteria                |
            | gradual international   |
        And the user accesses to make an international transfer with the folloging data
            | account | entryPoint     | data   | economicActivity | MTU  |
            | 0495    | Account Detail | valid  | local            | true |
        And the user is presented with the "international transfer abandonment" survey
        When the user rates "international transfer abandonment" flow
        Then the user sees the following items in the screen
            | item                          |
            | header thankyou feedback      |
            | exit thankyou feedback        |
            | micro thankyou feedback       |
            | title thankyou feedback       |
            | description thankyou feedback |

    @GFA014
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    @backend-smoke
    Scenario: International transfer abandonment with feedback
        Given a user with the following criteria
            | criteria                |
            | gradual international   |
        And the user accesses to make an international transfer with the folloging data
            | account | entryPoint     | data   | economicActivity | MTU  |
            | 0495    | Account Detail | valid  | local            | true |
        When the user is presented with the "international transfer abandonment" survey
        Then the user sees the following items in the screen
            | item                   |
            | header feedback        |
            | exit button feedback   |
            | rating feedback button |

    @GFA015
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Successfully complete the feedback form for the transfer flow from one own account to another account with foreign currency
        Given a user with the following criteria
            | criteria         |
            | account in pesos |
            | foreign accounts |
        And the user accesses to transfer from dashboard and selects a origin "pesos account"
        And the user starts a transfer to a personal "foreign" account
        And the user changes the source currency type
        And the user introduces amount with foreign exchange "150" "donativo"
        When the user rates foreign currency request flow
        Then the user sees the following items in the screen
            | item                          |
            | header thankyou feedback      |
            | exit thankyou feedback        |
            | micro thankyou feedback       |
            | title thankyou feedback       |
            | description thankyou feedback |

    @GFA016
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Successfully showing the feedback form for the transfer flow from one own account to another account with foreign currency
        Given a user with the following criteria
            | criteria         |
            | account in pesos |
            | foreign accounts |
        And the user accesses to transfer from dashboard and selects a origin "pesos account"
        And the user starts a transfer to a personal "foreign" account
        And the user changes the source currency type
        And the user introduces amount with foreign exchange "150" "donativo"
        When the user is presented with the "foreign currency success" survey
        Then the user sees the following items in the screen
            | item                   |
            | header feedback        |
            | exit button feedback   |
            | rating feedback button |

    @GFA017
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Successfully complete the feedback form for the abandonment flow of transferring from one own account to another account with foreign currency
        Given a user with the following criteria
            | criteria         |
            | account in pesos |
            | foreign accounts |
        And the user accesses to transfer from dashboard and selects a origin "pesos account"
        And the user starts a transfer to a personal "foreign" account
        And the user changes the source currency type
        And the user is presented with the "foreign currency request abandonment" survey
        When the user rates "foreign currency request abandonment" flow
        Then the user sees the following items in the screen
            | item                          |
            | header thankyou feedback      |
            | title thankyou feedback       |
            | description thankyou feedback |
            | exit thankyou feedback        |
            | micro thankyou feedback       |

    @GFA018
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Successfully showing the feedback form for the abandonment flow of transferring from one own account to another account with foreign currency
        Given a user with the following criteria
            | criteria         |
            | account in pesos |
            | foreign accounts |
        And the user accesses to transfer from dashboard and selects a origin "pesos account"
        And the user starts a transfer to a personal "foreign" account
        And the user changes the source currency type
        When the user is presented with the "foreign currency request abandonment" survey
        Then the user sees the following items in the screen
            | item                    |
            | header feedback         |
            | exit button feedback    |
            | rating feedback button  |

    @GFA019
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Successfully complete the payroll portability abandonment feedback form
        Given a user with the following criteria
            | criteria        |
            | gradual payroll portability |
        And the user accesses the "account payroll portability" screen
        And the user start payroll portability process "abandon feedback" gradual
        And the user is presented with the "payroll portability abandonment" survey
        When the user rates "payroll portability abandonment" flow
        Then the user sees the following items in the screen
            | item                          |
            | header thankyou feedback      |
            | title thankyou feedback       |
            | description thankyou feedback |
            | exit thankyou feedback        |
            | micro thankyou feedback       |

    @GFA020
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Successfully showing the payroll portability abandonment feedback form
        Given a user with the following criteria
            | criteria        |
            | gradual payroll portability |
        And the user accesses the "account payroll portability" screen
        And the user start payroll portability process "abandon feedback" gradual
        When the user is presented with the "payroll portability abandonment" survey
        Then the user sees the following items in the screen
            | item                    |
            | header feedback         |
            | exit button feedback    |
            | rating feedback button  |

    @GFA021
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: Successfully complete the portability gradual success feedback form
        Given a user with the following criteria
            | criteria                      |
            | payroll portability operative |
        And the user accesses the "account payroll portability" screen
        And the user start payroll portability process
        And the user signs payroll operation on account operative
        And the user is presented with the "payroll portability successful" survey
        When the user rates "payroll portability successful" flow
        Then the user sees the following items in the screen
            | item                          |
            | header thankyou feedback      |
            | title thankyou feedback       |
            | description thankyou feedback |
            | exit thankyou feedback        |
            | micro thankyou feedback       |

    @GFA022
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: Successfully showing the portability gradual success feedback form
        Given a user with the following criteria
        | criteria                      |
        | payroll portability operative |
        And the user accesses the "account payroll portability" screen
        And the user start payroll portability process
        And the user signs payroll operation on account operative
        When the user is presented with the "payroll portability successful" survey
        Then the user sees the following items in the screen
            | item                    |
            | header feedback         |
            | exit button feedback    |
            | rating feedback button  |

    @GFA023
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: Successfully complete the loan offer gradual abandonment feedback form
        Given a user with the following criteria
            | criteria        |
            | gradual loan offer     |
        And the user goes to the "consumer loan" offer operation
        And the user is presented with the "loan offer abandonment" survey
        When the user rates "loan offer abandonment" flow
        Then the user sees the following items in the screen
            | item                          |
            | header thankyou feedback      |
            | title thankyou feedback       |
            | description thankyou feedback |
            | exit thankyou feedback        |
            | micro thankyou feedback       |

    @GFA024
    @MX
    @web @ios @android
    @backend(test) @vbank
    @web-done
    Scenario: Successfully showing loan offer gradual abandonment feedback form
        Given a user with the following criteria
            | criteria        |
            | gradual loan offer     |
        And the user goes to the "consumer loan" offer operation
        When the user is presented with the "loan offer abandonment" survey
        Then the user sees the following items in the screen
            | item                    |
            | header feedback         |
            | exit button feedback    |
            | rating feedback button  |

    @GFA025
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Successfully complete the my conversations feedback form
        Given a user with the following criteria
            | criteria            |
            | gradual my conversations |
        And the user accesses to my conversations operative
        And the user is presented with the "my conversations" survey
        When the user rates "my conversations" flow
        Then the user sees the following items in the screen
            | item                          |
            | header thankyou feedback      |
            | title thankyou feedback       |
            | description thankyou feedback |
            | exit thankyou feedback        |
            | micro thankyou feedback       |

    @GFA026
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Successfully showing my conversations gradual feedback form
        Given a user with the following criteria
            | criteria            |
            | gradual my conversations |
        And the user accesses to my conversations operative
        When the user is presented with the "my conversations" survey
        Then the user sees the following items in the screen
            | item                    |
            | header feedback         |
            | exit button feedback    |
            | rating feedback button  |
