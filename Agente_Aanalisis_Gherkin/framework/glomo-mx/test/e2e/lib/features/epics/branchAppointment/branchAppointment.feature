@branchAppointment
Feature: Branch Appointment Management

    @BA001
    @MX @vbank @backend(test) @backend-smoke
    @ios @android @web @web-done @alternate-scenarios-smoke
    Scenario: Verify branch detail half modal
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the branch location
        When the user accesses to the "cinco de mayo" branch card
        Then the user sees the following items in the screen
            | item                            |
            | branch card                     |
            | branch name card                |
            | branch distance card            |
            | share button card               |
            | request appointment button card |
            | route button card               |

    @BA002
    @MX @vbank @backend(test) @backend-smoke
    @ios @android @web @web-done @alternate-scenarios-smoke
    Scenario: Verify type of procedure step elements
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the branch location
        When the user accesses to the "cinco de mayo" branch to get an appointment
        Then the user sees the following items in the screen
            | item                              | value    |
            | branch title                      |          |
            | branch name                       |          |
            | branch address                    |          |
            | procedure step title              |          |
            | procedure step count              |          |
            | procedure step description        |          |
            | procedure step modal button       |          |
            | procedure step procedure selector |          |
            | procedure step continue button    | disabled |

    @BA003
    @MX @vbank @backend(test) @backend-smoke
    @ios @android @web @web-done @alternate-scenarios-smoke
    Scenario: Verify queue suggestions modal
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        When the user accesses to the "cinco de mayo" branch to get an appointment
        And the user accesses to the "queue suggestions" modal
        Then the user sees a modal with the following elements:
            | item           |
            | close button   |
            | paragraph icon |
            | title          |
            | description    |

    @BA004
    @MX @vbank @backend(test) @backend-smoke
    @ios @android @web @web-done @alternate-scenarios-smoke
    Scenario: Verify queue suggestions modal exit
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        When the user accesses to the "cinco de mayo" branch to get an appointment
        And the user accesses to the "queue suggestions" modal
        And the user closes the modal
        Then the user sees the following items in the screen
            | item            | value       |
            | modal container | not visible |

    @BA005
    @MX @vbank @backend(test) @backend-smoke
    @ios @android @web @web-done @alternate-scenarios-smoke
    Scenario Outline: Verify filled out procedure step with <type>
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the branch location
        When the user accesses to the "cinco de mayo" branch to get an appointment
        And the user selects the "<type>" procedure type for the appointment
        Then the user sees the following items in the screen
            | item                                | value        |
            | procedure step procedure selector   | <type>       |
            | procedure subtext                   | <subtextMsg> |
            | procedure step attention zone title |              |
            | procedure step attention zone       |              |
            | procedure step continue button      | enabled      |

        Examples:
            | type                       | subtextMsg                      |
            | contracts                  | contracts text                  |
            | payments or deposits       | payments or deposits text       |
            | collections or withdrawals | collections or withdrawals text |
            | queries or modifications   | queries or modifications text   |

    @BA006
    @MX @vbank @backend(test) @backend-smoke
    @ios @android @web @web-done @alternate-scenarios-smoke
    Scenario: Verify procedure type menu
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the branch location
        When the user accesses to the "cinco de mayo" branch to get an appointment
        And the user opens the "procedures" options menu
        Then the user sees the following items in the screen
            | item                                         |
            | contracts procedure selector                 |
            | payments and deposits procedure selector     |
            | charges and withdrawals procedure selector   |
            | queries and modifications procedure selector |

    @BA007
    @MX @vbank @backend(test) @backend-smoke
    @ios @android @web @web-done @alternate-scenarios-smoke
    Scenario: Verify date step elements
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the branch location
        When the user accesses to the "cinco de mayo" branch to get an appointment
        And the user goes to the "time and date" step
        Then the user sees the following items in the screen
            | item                      | value    |
            | time step title           |          |
            | time step counter         |          |
            | time step description     |          |
            | time step date selector   |          |
            | time step hour selector   |          |
            | time step panel message   |          |
            | time step modal button    |          |
            | time step continue button | disabled |

    @BA008
    @MX @vbank @backend(test) @backend-smoke
    @ios @android @web @web-done @alternate-scenarios-smoke
    Scenario: Verify suggestions modal elements
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        When the user accesses to the "cinco de mayo" branch to get an appointment
        And the user goes to the "time and date" step
        And the user accesses to the "branch suggestions" modal
        Then the user sees a modal with the following elements:
            | item           |
            | close button   |
            | paragraph icon |
            | title          |
            | description    |
            | accept button  |

    @BA009
    @MX @vbank @backend(test) @backend-smoke
    @ios @android @web @web-done @alternate-scenarios-smoke
    Scenario: Verify suggestions modal exit
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to the "cinco de mayo" branch to get an appointment
        And the user goes to the "time and date" step
        And the user accesses to the "branch suggestions" modal
        And the user closes the modal
        And the user accesses to the "branch suggestions" modal
        When the user accepts the modal
        Then the user sees the following items in the screen
            | item            | value       |
            | modal container | not visible |

    @BA010
    @MX @vbank @backend(test) @alternate-scenarios-smoke
    @ios @android @web @web-done @vbank-modified
    Scenario: Verify filled time and date step
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        When the user accesses to the "cinco de mayo" branch to get an appointment
        And the user goes to the "time and date" step
        And the user selects the "15:00" appointment
        Then the user sees the following items in the screen
            | item                      | value   |
            | time step continue button | enabled |

    @BA011
    @MX @vbank @backend(test) @alternate-scenarios-smoke
    @ios @android @web @web-done @vbank-modified
    Scenario: Verify appointment summary
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        When the user accesses to the "cinco de mayo" branch to get an appointment
        And the user goes to the "summary" step
        Then the user sees the following items in the screen
            | item                         |
            | procedure step title         |
            | procedure step change button |
            | summary procedure title      |
            | summary procedure            |
            | summary zone title           |
            | summary zone                 |
            | time step title              |
            | time step change button      |
            | summary date title           |
            | summary date                 |
            | summary time title           |
            | summary time                 |
            | schedule appointment button  |

    @BA012
    @MX @vbank @backend(test)
    @ios @android @web @web-done @vbank-modified
    Scenario: Verify successfuly made appointment screen
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to the "cinco de mayo" branch to get an appointment
        When the user accesses the successfuly scheduled appointment screen
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | close button              |
            | image                     |
            | receipt title             |
            | date of receipt           |
            | name title                |
            | name                      |
            | tdp title                 |
            | tdp code                  |
            | branch title              |
            | address first row         |
            | address second row        |
            | procedure title           |
            | procedure                 |
            | attention zone title      |
            | attention zone            |
            | date title                |
            | date                      |
            | folio title               |
            | folio                     |
            | bbva text                 |
            | message panel             |
            | placeholder               |
            | download receipt button   |
            | cancel appointment button |
            | show route button         |
            | exit button               |

    @BA013
    @MX @vbank @backend(test) @alternate-scenarios-smoke
    @ios @android @web @web-done @vbank-modified
    Scenario: Verify suggestions modal at success screen
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to the "cinco de mayo" branch to get an appointment
        When the user accesses the successfuly scheduled appointment screen
        And the user accesses to the "branch suggestions" modal
        Then the user sees a modal with the following elements:
            | item           |
            | close button   |
            | paragraph icon |
            | title          |
            | description    |
            | accept button  |

    @BA014
    @MX @vbank @backend(test) @alternate-scenarios-smoke
    @ios @android @web @web-done @vbank-modified
    Scenario: Verify change of procedure
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to the "cinco de mayo" branch to get an appointment
        And the user goes to the "summary" step
        When the user changes the "procedure" at summary
        Then the user sees the following items in the screen
            | item              | value   |
            | summary procedure | changed |

    @BA015
    @MX @vbank @backend(test) @alternate-scenarios-smoke
    @ios @android @web @web-done @vbank-modified
    Scenario: Verify change of time warning modal
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to the "cinco de mayo" branch to get an appointment
        And the user goes to the "summary" step
        When the user opens the "time" step from summary
        Then the user sees the following items in the screen
            | item                     |
            | help modal icon          |
            | help modal description   |
            | help modal cancel button |
            | help modal close button  |

    @BA016
    @MX @vbank @backend(test) @alternate-scenarios-smoke
    @ios @android @web @web-done @vbank-modified
    Scenario: Verify change of time
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to the "cinco de mayo" branch to get an appointment
        And the user goes to the "summary" step
        When the user changes the "time" at summary
        Then the user sees the following items in the screen
            | item         | value   |
            | summary time | changed |

    @BA017
    @MX @vbank @backend(test) @smokeTest @backend-smoke
    @ios @android @web @web-done @vbank-modified
    Scenario: Verify date menu elements when the user accesses in a day on a weekend
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the branch location
        And the user starts the application at date:
            | hour   | 9    |
            | day    | 25   |
            | month  | 2    |
            | year   | 2023 |
        And the user accesses to the "cinco de mayo" branch to get an appointment
        And the user goes to the "time and date" step
        When the user opens the "date" options menu
        Then the user sees the following items in the screen
            | item                  | value           |
            | date selector options | weekend day     |
            | date selector options | hidden saturday |
            | date selector options | hidden sunday   |

    @BA018
    @MX @vbank @backend(test) @alternate-scenarios-smoke
    @ios @android @web @web-done @vbank-modified
    Scenario: Verify the creation of appointments for weekends during midweek days
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user starts the application at date:
            | hour   | 9    |
            | day    | 24   |
            | month  | 2    |
            | year   | 2023 |
        And the user accesses to the "cinco de mayo" branch to get an appointment
        And the user goes to the "time and date" step
        And the user selects the "2023-03-25" date
        When the user accesses the successfuly scheduled appointment screen
        Then the user accesses the "requested appointment successfully" screen

    @BA019
    @MX @vbank @backend(test) @alternate-scenarios-smoke
    @ios @android @web @web-done @vbank-modified
    Scenario: Verify notice when all time slots are occupied
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to the "cinco de mayo" branch to get an appointment
        And the user goes to the "time and date" step
        When the user opens the "time" options menu
        Then the user sees the following items in the screen
            | item                     |
            | help modal icon          |
            | help modal title         |
            | help modal description   |
            | help modal cancel button |

    @BA020
    @MX @vbank @backend(test) @alternate-scenarios-smoke
    @ios @android @web @web-done @vbank-modified
    Scenario: Verify exit from notice when all time slots are occupied
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to the "cinco de mayo" branch to get an appointment
        And the user goes to the "time and date" step
        And the user opens the "time" options menu
        When the user closes the modal and "exits" the appointment form
        Then the user accesses the "atm locator" screen

    @BA021
    @MX @vbank @backend(test) @alternate-scenarios-smoke
    @ios @android @web @web-done @vbank-modified
    Scenario: Verify appointment cancelation modal from success screen
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to the "cinco de mayo" branch to get an appointment
        When the user accesses the successfuly scheduled appointment screen
        And the user opens the cancelation appointment modal
        Then the user sees the following items in the screen
            | item                     |
            | help modal icon          |
            | help modal title         |
            | help modal description   |
            | help modal cancel button |
            | help modal close button  |

    @BA022
    @MX @vbank @backend(test) @smokeTest
    @ios @android @web @web-done @vbank-modified
    Scenario: Cancel appointment from success screen
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to the "cinco de mayo" branch to get an appointment
        When the user accesses the successfuly scheduled appointment screen
        And the user cancels the appointment "from success screen successfully"
        Then the user sees the following items in the screen
            | item             |
            | green toast icon |
            | green toast text |

    @BA023
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Verify appointment details screen elements
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        When the user accesses to the detail of the made appointment
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | back button               |
            | panel title               |
            | panel appointment code    |
            | panel date                |
            | panel hour                |
            | appointment status        |
            | download button           |
            | cancel appointment button |
            | panel message             |
            | panel message icon        |
            | panel message text        |
            | suggestions modal button  |
            | name title                |
            | user name                 |
            | branch title              |
            | branch name               |
            | procedure title           |
            | procedure                 |
            | zone title                |
            | zone                      |
            | date title                |
            | date                      |
            | hour title                |
            | hour                      |
            | turn code title           |
            | turn code                 |
            | folio title               |
            | folio                     |
            | bbva text                 |

    @BA024
    @MX @vbank @backend(test)
    @ios @android @web @web-done @alternate-scenarios-smoke
    Scenario: Verify appointments limit modal
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        When the user attempts to access to the "cinco de mayo" branch to get an appointment
        Then the user sees a modal with the following elements:
            | item           |
            | paragraph icon |
            | title          |
            | description    |
            | accept button  |
            | cancel button  |

    @BA025
    @MX @vbank @backend(test) @backend-smoke
    @ios @android @web @web-done @alternate-scenarios-smoke
    Scenario: Verify exit from form at the process step
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the branch location
        And the user accesses to the "cinco de mayo" branch to get an appointment
        When the user leaves the process
        Then the user accesses the "atm locator" screen

    @BA026
    @MX @vbank @backend(test) @alternate-scenarios-smoke
    @ios @android @web @web-done @vbank-modified @backend-smoke
    Scenario: Verify exit from form at the summary
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to the "cinco de mayo" branch to get an appointment
        And the user goes to the "summary" step
        When the user leaves the process
        Then the user sees a modal with the following elements:
            | item           |
            | paragraph icon |
            | description    |
            | accept button  |
            | cancel button  |

    @BA027
    @MX @vbank @backend(test) @alternate-scenarios-smoke
    @ios @android @web @web-done @vbank-modified
    Scenario: Validate elements for error at getting the available hours
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to the "cinco de mayo" branch to get an appointment
        And the user goes to the "time and date" step
        When the user opens the "time" options menu
        Then the user sees the following items in the screen
            | item                |
            | error panel icon    |
            | error panel message |
            | error panel button  |

    @BA028
    @MX @vbank @backend(test) @alternate-scenarios-smoke
    @ios @android @web @web-done @vbank-modified
    Scenario: Verify elements after 3 failed tries for getting the available hours
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to the "cinco de mayo" branch to get an appointment
        And the user goes to the "time and date" step
        When the user opens the "time" options menu
        And the user retries "2" more times
        Then the user sees the following items in the screen
            | item                |
            | error panel icon    |
            | error panel message |
            | error panel button  |

    @BA029
    @MX @vbank @backend(test) @alternate-scenarios-smoke
    @ios @android @web @web-done @vbank-modified
    Scenario: Verify error modal trying to complete the appointment
        Given a user with the following criteria
            | criteria               |
            | Appointments Available |
        And a moves to the location "19.432608" "-99.133209"
        And the user accesses to the "cinco de mayo" branch to get an appointment
        When the user attempts to access the successfuly scheduled appointment screen
        Then the user sees an error modal with the following elements:
            | item           |
            | paragraph icon |
            | title          |
            | description    |
            | accept button  |
            | cancel button  |

    @BA030
    @MX @vbank @backend(test)
    @ios @android @web @web-done @vbank-modified
    Scenario: Verify error modal trying to cancel the appointment
        Given a user with the following criteria
            | criteria               |
            | digital turn scheduled |
        And a moves to the location "19.432608" "-99.133209"
        When the user accesses to the detail of the made appointment
        And the user cancels the appointment "from the appointment detail and the service fails"
        Then the user sees an error modal with the following elements:
            | item           |
            | paragraph icon |
            | title          |
            | description    |
            | accept button  |
            | cancel button  |
