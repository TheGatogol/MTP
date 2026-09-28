@fiscalData
Feature: Fiscal Data Editing

    @FDE001
    @web-done
    @web @android @ios
    @MX
    @backend(test) @alternate-scenarios-smoke
    @vbank
    Scenario: The user accesses to the fiscal data modification operation
        Given a user with the following criteria
            | criteria                         |
            | fiscal data user                 |
        When the user accesses the fiscal data detail
        Then the user sees the following items in the screen
            | item                                     |
            | modal about tax reform logo              |
            | modal about tax reform title             |
            | modal about tax reform title text        |
            | modal about tax reform benefits title    |
            | modal about tax reform benefit one       |
            | modal about tax reform benefit two       |
            | modal about tax reform benefit three     |
            | modal about tax reform needs title       |
            | modal about tax reform first obligation  |
            | modal about tax reform second obligation |
            | modal about tax reform sat link          |
            | modal about tax reform continue button   |

    @FDE002
    @web-done
    @web @android @ios
    @MX
    @backend(test) @alternate-scenarios-smoke
    @vbank
    Scenario: The user accesses to the fiscal data modification main page
        Given a user with the following criteria
            | criteria                         |
            | fiscal data user                 |
        And the user accesses the fiscal data detail
        When the user accept the modal of the tax reform
        Then the user sees the following items in the screen
            | item                            |
            | tax data step title             |
            | tax data step info              |
            | tax data step button            |
            | tax data step rfc title         |
            | tax data step rfc content       |
            | tax data step help icon message |
            | tax data step help message      |
            | tax data step name field        |
            | tax data step tax regime field  |
            | tax data step cfdi field        |
            | tax data step continue button   |

    @FDE003
    @web-done
    @web @android @ios
    @MX
    @backend(test) @alternate-scenarios-smoke
    @vbank
    Scenario: The user opens the tax regimen dropdown menu
        Given a user with the following criteria
            | criteria                         |
            | fiscal data user                 |
        And the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        When the user opens options "on tax regime"
        Then the user sees the following items in the screen
            | item                            |
            | tax regime options              |
            | tax data step title             |
            | tax data step info              |
            | tax data step button            |
            | tax data step rfc title         |
            | tax data step rfc content       |
            | tax data step help icon message |
            | tax data step help message      |
            | tax data step name field        |
            | tax data step tax regime field  |
            | tax data step cfdi field        |
            | tax data step continue button   |

    @FDE004
    @web-done
    @web @android @ios
    @MX
    @backend(test) @alternate-scenarios-smoke
    @vbank
    Scenario: The user opens the cfdi dropdown menu
        Given a user with the following criteria
            | criteria                         |
            | fiscal data user                 |
        And the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        When the user opens options "on the use of tax receipts"
        Then the user sees the following items in the screen
            | item                                          |
            | options on the use of tax receipts            |
            | use of tax data step title                    |
            | use of tax data step info                     |
            | confirmation box for the use of tax data      |
            | confirmation box text for the use of tax data |
            | use of tax data step message icon             |
            | use of tax data step continue button          |

    @FDE005
    @web-done
    @web @android @ios
    @MX
    @backend(test) @alternate-scenarios-smoke
    @vbank
    Scenario: The user goes to the step 2 from the fiscal data modification multistep
        Given a user with the following criteria
            | criteria                         |
            | fiscal data user                 |
        And the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        When the user goes to the "tax data" step
        Then the user sees the following items in the screen
            | item                                   |
            | tax address step title                 |
            | tax address step info                  |
            | tax address step street field          |
            | tax address step exterior number field |
            | tax address step interior number field |
            | tax address step postal code field     |
            | tax address step colony options        |
            | tax address step municipal info        |
            | tax address step state info            |
            | tax address step continue button       |

    @FDE006
    @web-done
    @web @android @ios
    @MX
    @backend(test) @alternate-scenarios-smoke
    @vbank
    Scenario: The user goes to edit the step 1 information from the step 2
        Given a user with the following criteria
            | criteria                         |
            | fiscal data user                 |
        And the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        And the user goes to the "tax data" step
        When the user goes to edit the "tax data" information
        Then the user sees the following items in the screen
            | item                                   | value  |
            | summary name                           | edited |
            | tax address step title                 | edited |
            | tax address step info                  | edited |
            | tax address step street field          | edited |
            | tax address step exterior number field | edited |
            | tax address step interior number field | edited |
            | tax address step postal code field     | edited |
            | tax address step colony options        | edited |
            | tax address step municipal info        | edited |
            | tax address step state info            | edited |
            | tax address step continue button       | edited |

    @FDE007
    @web-done
    @web @android @ios
    @MX
    @backend(test) @alternate-scenarios-smoke
    @vbank
    Scenario: The user opens the neighborhood dropdown menu
        Given a user with the following criteria
            | criteria                         |
            | fiscal data user                 |
        And the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        And the user goes to the "tax data" step
        When the user opens options "for their tax address"
        Then the user sees the following items in the screen
            | item                                   |
            | options for their tax address          |
            | tax address step title                 |
            | tax address step info                  |
            | tax address step street field          |
            | tax address step exterior number field |
            | tax address step interior number field |
            | tax address step postal code field     |
            | tax address step colony options        |
            | tax address step municipal info        |
            | tax address step state info            |
            | tax address step continue button       |

    @FDE008
    @web-done
    @web @android @ios
    @MX
    @backend(test) @alternate-scenarios-smoke
    @vbank
    Scenario: The user goes to the step 3 from the fiscal data modification multistep
        Given a user with the following criteria
            | criteria                         |
            | fiscal data user                 |
        And the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        When the user goes to the "tax address" step
        Then the user sees the following items in the screen
            | item                                          |
            | use of tax data step title                    |
            | use of tax data step info                     |
            | confirmation box for the use of tax data      |
            | confirmation box text for the use of tax data |
            | use of tax data step message icon             |
            | use of tax data step continue button          |

    @FDE009
    @web-done
    @web @android @ios
    @MX
    @backend(test) @alternate-scenarios-smoke
    @vbank
    Scenario: The user goes to edit the step 2 information from the step 3
        Given a user with the following criteria
            | criteria                         |
            | fiscal data user                 |
        And the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        And the user goes to the "tax address" step
        When the user goes to edit the "tax address" information
        Then the user sees the following items in the screen
            | item                                          | value  |
            | summary address                               | edited |
            | use of tax data step title                    | edited |
            | use of tax data step info                     | edited |
            | confirmation box for the use of tax data      | edited |
            | confirmation box text for the use of tax data | edited |
            | use of tax data step message icon             | edited |
            | use of tax data step continue button          | edited |

    @FDE010
    @web-done
    @web @android @ios
    @MX
    @backend(test) @alternate-scenarios-smoke
    @vbank
    Scenario: The user opens the fiscal data help modal
        Given a user with the following criteria
            | criteria                         |
            | fiscal data user                 |
        And the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        When the user enters the "about tax reform" modal
        Then the user sees the following items in the screen
            | item                          |
            | fiscal data help modal first title      |
            | fiscal data help modal icon             |
            | fiscal data help modal first text       |
            | fiscal data help modal second title     |
            | fiscal data help modal second text      |
            | fiscal data help modal accept button    |

    @FDE011
    @web-done
    @web @android @ios
    @MX
    @backend(test) @alternate-scenarios-smoke
    @vbank
    Scenario: The user accepts the fiscal data help modal
        Given a user with the following criteria
            | criteria                         |
            | fiscal data user                 |
        And the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        And the user enters the "about tax reform" modal
        When the user accepts the help modal
        Then the user sees the following items in the screen
            | item                            |
            | tax data step name field        |
            | tax data step tax regime field  |
            | tax data step cfdi field        |
            | tax data step continue button   |

    @FDE012
    @web-done
    @web @android @ios
    @MX
    @backend(test) @alternate-scenarios-smoke
    @vbank
    Scenario: The user goes to the summary step
        Given a user with the following criteria
            | criteria                         |
            | fiscal data user                 |
        And the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        When the user goes to the "tax data summary" step
        Then the user sees the following items in the screen
            | item                          |
            | tax data step finished        |
            | tax address step finished     |
            | use of tax data step finished |
            | confirm button                |

    @FDE013
    @web-done
    @web @android @ios
    @MX
    @backend(test) @smokeTest
    @vbank
    Scenario: The user sees the fiscal data modification success screen
        Given a user with the following criteria
            | criteria                         |
            | fiscal data user                 |
        And the user accesses the fiscal data detail
        And the user accept the modal of the tax reform
        And the user goes to the "tax data summary" step
        When the user confirms the fiscal data update
        Then the user sees the following items in the screen
            | item                                                      |
            | successful tax data registration page icon                |
            | successful tax data registration page main title          |
            | successful tax data registration page info text           |
            | successful tax data registration page rfc label           |
            | successful tax data registration page rfc value           |
            | successful tax data registration page full name label     |
            | successful tax data registration page full name value     |
            | successful tax data registration page fiscal regime label |
            | successful tax data registration page fiscal regime value |
            | successful tax data registration page cfdi label          |
            | successful tax data registration page cfdi value          |
            | successful tax data registration page address label       |
            | successful tax data registration page address value       |
            | successful tax data registration page message info        |
            | successful tax data registration page mail address        |
            | successful tax data registration page exit button         |
