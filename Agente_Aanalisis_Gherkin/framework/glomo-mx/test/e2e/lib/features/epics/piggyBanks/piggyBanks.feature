@piggyBanks
Feature: Piggy Banks

    @PGB001
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done @tmpExclude @JIRA.GLOMOMX-299665
    @backend-smoke
    Scenario Outline: Create a piggy bank - Happy Path - <operation>
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the user creates a piggy bank
        When the user exits piggy bank creation mode "<operation>"
        Then the user sees the following items in the screen
            | item              |
            | <header>          |
            | <content>         |
        Examples:
            | operation             | header                                | content                       |
            | dashboard piggy banks | piggy banks dashboard header          | piggy banks operations        |
            | go piggy bank         | piggy bank details header             | piggy bank details add money  |
            | all piggy banks       | piggy banks dashboard header          | piggy banks operations        |
            | create new            | create piggy bank edition header      | create piggy bank account     |

    @PGB002
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario Outline: Back to product detail from <slide> slide
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the user stops at "<slide>" slide
        When the user goes back to account detail
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | back button          |
            | account              |
            | amount               |
            | currency             |
            | balance label        |
            | review account CLABE |
            | pockets card         |
            | operations module    |
        Examples:
            | slide                  |
            | save easy              |
            | hidden money           |
            | automatic saving rules |
            | safe money             |

    @PGB003
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done @smokeTest
    @backend-smoke
    Scenario: The user names it's piggy bank
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        And the user closes piggy banks onboarding
        When the user names its piggy bank
        Then the user sees the following items in the screen
            | item                     |
            | create piggy bank header |
            | create piggy bank close  |
            | create piggy bank data   |
            | piggy bank name input    |
            | piggy bank name clear    |

    @PGB004
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: Create a piggy bank - Payroll Rule - Happy Path
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user creates a piggy bank with "payroll" rule
        Then the user sees the following items in the screen
            | item                  |
            | success header        |
            | success exit button   |
            | success checkmark     |
            | success title         |
            | success amount        |
            | go piggy bank button  |
            | create another button |

    @PGB005
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario Outline: Piggy bank with periodic rule - Frequency: <frequency>
        Given a user with the following criteria
            | criteria                            |
            | piggy banks without payroll account |
        And the user accesses to piggy banks
        When the user creates a piggy bank with "periodic" rule "<frequency>"
        Then the user sees the following items in the screen
            | item                  |
            | success header        |
            | success exit button   |
            | success checkmark     |
            | success title         |
            | success amount        |
            | go piggy bank button  |
            | create another button |
        Examples:
            | frequency |
            | monthly   |
            | biweekly  |

    @PGB006
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: Create a piggy bank without initial amount
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user creates a piggy bank
        Then the user sees the following items in the screen
            | item                  |
            | success header        |
            | success exit button   |
            | success checkmark     |
            | success title         |
            | success amount        |
            | go piggy bank button  |
            | all piggy banks       |
            | create another button |

    @PGB007
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: Create a piggy bank with payroll rule without initial amount
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user creates a piggy bank with "payroll no initial amount" rule
        Then the user sees the following items in the screen
            | item                  |
            | success header        |
            | success exit button   |
            | success checkmark     |
            | success title         |
            | success amount        |
            | go piggy bank button  |
            | create another button |

    @PGB008
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario Outline: Modify piggy bank - <step>
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user creates a piggy bank with "payroll" rule then modifies "<step>" step
        Then the user sees the following items in the screen
            | item                             |
            | <step title>                     |
            | <current input>                  |
        Examples:
            | step              | step title             | current input         |
            | piggy bank data   | create piggy bank data | piggy bank name input |
            | automatic savings | automatic savings      | saving amount input   |

    @PGB009
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario Outline: Exit piggy bank creation process confirmation modal - <operation>
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user tries to exit the piggy bank creation process with "<operation>"
        Then the user sees the following items in the screen
            | item                     |
            | create piggy bank data   |
            | piggy bank amount input  |
        Examples:
            | operation            |
            | button exit          |
            | continue operation   |

    @PGB010
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: User has at least one piggy bank
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user reviews its piggy bank
        Then the user sees the following items in the screen
            | item                            |
            | piggy bank details header       |
            | piggy bank details close        |
            | piggy bank details detail link  |
            | piggy bank details add money    |
            | piggy bank details remove money |

    @PGB011
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: User has more than one piggy bank
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        When the user accesses to piggy banks
        Then the user sees the following items in the screen
            | item                           |
            | piggy banks associated account |
            | piggy banks operations         |
            | piggy banks in account         |
            | first piggy bank               |
            | second piggy bank              |

    @PGB012
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: Piggy banks movements validation
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user reviews its piggy bank movements
        Then the user sees the following items in the screen
            | item                            |
            | piggy bank last movements title |
            | piggy bank last movement date   |
            | piggy bank first movement       |
            | piggy bank second movement      |

    @PGB013
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: Access to piggy bank general details
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user accesses to its piggy bank general details
        Then the user sees the following items in the screen
            | item                                      |
            | piggy bank more detail header             |
            | piggy bank more detail close              |
            | piggy bank more detail name               |
            | piggy bank more detail associated account |
            | piggy bank more detail account detail     |

    @PGB014
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario Outline: <Operation> in piggy bank
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user "<Operation>" money to its piggy bank
        Then the user sees the following items in the screen
            | item                |
            | success header      |
            | success exit button |
            | success checkmark   |
            | success title       |
            | success amount      |
        Examples:
            | Operation |
            | Saves     |
            | Refunds   |

    @PGB015
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario Outline: <Operation> automatic contribution
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user "<Operation>" automatic contributions
        Then the user sees the following items in the screen
            | item                             |
            | automatic contributions header   |
            | automatic contributions close    |
            | automatic contributions account  |
            | automatic contributions add rule |
            | automatic contributions <item>   |
        Examples:
            | Operation | item           |
            | Go to     | no rules panel |
            | Disable   | paused rule    |
            | Delete    | no rules panel |

    @PGB016
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario Outline: Add automatic contribution from an existing piggy bank - Frequency: <frequency>
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user adds an automatic contribution with "<frequency>" frequency
        Then the user sees the following items in the screen
            | item                         |
            | rule activation header       |
            | rule activation close        |
            | rule activation success icon |
            | rule activation title        |
            | rule activation amount       |
            | rule activation details      |
        Examples:
            | frequency |
            | monthly   |
            | biweekly  |
            | weekly    |
            | daily     |

    @PGB017
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: User without piggy banks
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user reviews its piggy banks dashboard
        Then the user sees the following items in the screen
            | item                                         |
            | piggy banks dashboard header                 |
            | piggy banks dashboard back                   |
            | piggy banks dashboard empty piggy banks list |

    @PGB018
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: Add piggy bank percentage rule
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user adds percentage rule to its piggy bank
        Then the user sees the following items in the screen
            | item                         |
            | rule activation header       |
            | rule activation close        |
            | rule activation success icon |
            | rule activation title        |
            | rule activation amount       |
            | rule activation details      |

    @PGB019
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: Piggy Bank more operation
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user opens and closes piggy bank more operations
        Then the user sees the following items in the screen
            | item                                      |
            | piggy bank details header                 |
            | piggy bank details close                  |
            | piggy bank details detail link            |
            | piggy bank details add money              |
            | piggy bank details remove money           |
            | piggy bank details automatic contribution |
            | piggy bank details more operations        |

    @PGB020
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: Delete piggy bank
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user deletes a piggy bank
        Then the user sees the following items in the screen
            | item                                         |
            | piggy banks dashboard header                 |
            | piggy banks dashboard back                   |
            | piggy banks dashboard empty piggy banks list |

    @PGB021
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario Outline: Filter piggy banks - <result> matches
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user filters its piggy banks "<result>" result
        Then the user sees the following items in the screen
            | item                              |
            | piggy bank filter header          |
            | piggy bank filter back button     |
            | piggy bank filter panel           |
            | piggy bank filter <result> result |
        Examples:
            | result  |
            | with    |
            | without |

    @PGB022
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: Create a piggy bank with insufficient amount warning
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user creates a piggy bank with "insufficient amount" rule
        Then the user sees the following items in the screen
            | item                      |
            | piggy bank amount warning |

    @PGB023
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: Insufficient funds warning when saving in piggy bank
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user "tries to save" money to its piggy bank
        Then the user sees the following items in the screen
            | item                         |
            | piggy bank add money warning |

    @PGB024
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @backend-smoke
    Scenario: Edit piggy bank name warning
        Given a user with the following criteria
            | criteria                   |
            | piggy banks single account |
        And the user accesses to piggy banks
        When the user tries to edit its piggy bank name
        Then the user sees the following items in the screen
            | item                         |
            | piggy bank edit name warning |
