@operationalLimitsConfiguration
Feature: Operational limits configuration

    @OLC001
    @MX @vbank @backend(test)
    @web-done @web @android @ios
    Scenario Outline: Checks the logic for operative <description> card
        Given a user with the following criteria
            | criteria      |
            | limits update |
        When the user accesses to more operatives of the card "<card>"
        Then the user sees the following items in the screen
            | item               | value    |
            | limit button state | <status> |
        Examples:
            | description | card             | status   |
            | operative   | 5546297083071213 | enable   |
            | inoperative | 4152307083071208 | disabled |

    @OLC002
    @smokeTest
    @web-done @web @android @ios
    @MX @backend(test) @vbank
    Scenario: The user change any limit successful
        Given a user with the following criteria
            | criteria      |
            | limits update |
        And the user accesses the "atm daily" limit configuration of the card "5546297083071213"
        When the user confirms the new limit for an amount of "1000"
        Then the user sees the success message

    @OLC003
    @alternate-scenarios-smoke
    @web-done @web @android @ios
    @MX @backend(test) @vbank
    Scenario: Cancel the process of editing a limit
        Given a user with the following criteria
            | criteria      |
            | limits update |
        And the user accesses the "atm daily" limit configuration of the card "5546297083071213"
        When the user writes some value to modify limit
        And the user closes the operation of change limit
        Then the user sees the modal of whether he wants to exit the operation

    @OLC004
    @alternate-scenarios-smoke
    @web @web-done @android @ios
    @MX @backend(test) @vbank
    Scenario: Access to limits list
        Given a user with the following criteria
            | criteria      |
            | limits update |
        When the user accesses to expense control of the card "5546297083071213"
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | title daily amount     |
            | help icon              |
            | title of limit         |
            | amount used value      |
            | amount available title |
            | amount available value |
            | limit edit icon        |

    @OLC005
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @android @ios
    Scenario Outline: Show the help information of limit <limit>
        Given a user with the following criteria
            | criteria      |
            | limits update |
        And the user accesses the "<limit>" limit configuration of the card "5546297083071213"
        When the user taps on selected limit info icon
        Then the user sees a "full size" modal with the following elements:
            | item        |
            | icon        |
            | description |

        Examples:
            | limit             |
            | pos daily         |
            | atm daily         |

    @OLC006
    @alternate-scenarios-smoke
    @web-done @web @android @ios
    @MX @backend(test) @vbank
    Scenario: Show general information of limits
        Given a user with the following criteria
            | criteria      |
            | limits update |
        And the user accesses to expense control of the card "5546297083071213"
        When the user taps on icon of information in the header
        Then the user sees a "full size" modal with the following elements:
            | item        |
            | icon        |
            | description |

    @OLC007
    @alternate-scenarios-smoke
    @web-done @web @android @ios
    @MX @backend(test) @vbank
    Scenario: Show information of daily limits
        Given a user with the following criteria
            | criteria      |
            | limits update |
        And the user accesses to expense control of the card "5546297083071213"
        When the user taps on help icon of daily limits
        Then the user sees a "full size" modal with the following elements:
            | item           |
            | paragraph icon |
            | description    |

    @OLC008
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @android @ios
    Scenario Outline: Access the configuration of limit <limit>
        Given a user with the following criteria
            | criteria      |
            | limits update |
        When the user accesses the "<limit>" limit configuration of the card "5546297083071213"
        Then the user sees the following items in the screen
            | item                      | value        |
            | header                    |              |
            | amount daily              |              |
            | amount daily description  |              |
            | progress bar              |              |
            | amount used title         |              |
            | amount used value         |              |
            | amount available title    |              |
            | amount available value    |              |
            | title of limit            |              |
            | help icon                 |              |
            | input                     |              |
            | info message about amount |              |
            | blue info box             |              |
            | accept button             | <status>     |
            | cancel button             |              |

        Examples:
            | limit             | status   |
            | pos daily         | disabled |
            | atm daily         | disabled |

    @OLC009
    @alternate-scenarios-smoke
    @web-done @web @android @ios
    @MX @backend(test) @vbank
    Scenario: Enter one wrong amount in limit edit
        Given a user with the following criteria
            | criteria      |
            | limits update |
        And the user accesses the "pos daily" limit configuration of the card "5546297083071213"
        When the user writes wrong amount to modify limit
        Then the user sees the following items in the screen
            | item                         | value    |
            | warning icon                 |          |
            | warning message about amount |          |
            | accept button                | disabled |

    @OLC010
    @alternate-scenarios-smoke
    @web-done @web @android @ios
    @MX @backend(test) @vbank
    Scenario: Access error to expense control
        Given a user with the following criteria
            | criteria      |
            | limits update |
        When a service error occurs accessing the "4152307083071206" card expense control
        Then a "small" size backend error without title is shown

    @OLC011
    @alternate-scenarios-smoke
    @MX @vbank @manual @JIRA.GLOMOMX-262066
    @web-done @web @android @ios
    Scenario Outline: Error when modifying the limit <limit>
        Given a user with the following criteria
            | criteria      |
            | limits update |
        And the user accesses the "<limit>" limit configuration of the card "4152307083071207"
        When the user confirms the new limit for an amount of "1000"
        Then a "small" size backend error without title is shown

        @backend(test)
        Examples:
            | limit             |
            | pos daily         |
            | atm daily         |

    @OLC012
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @android @ios
    Scenario Outline: The user exits from the help information from the limit <limit>
        Given a user with the following criteria
            | criteria      |
            | limits update |
        And the user accesses the "<limit>" limit configuration of his credit card
        And the user taps on selected limit info icon
        When the user exits from the information modal
        Then the user sees the following items in the screen
            | item                         | status       |
            | header                       |              |
            | amount daily                 |              |
            | amount daily description     |              |
            | progress bar                 |              |
            | amount used title            |              |
            | amount used value            |              |
            | amount available title       |              |
            | amount available value       |              |
            | title of limit               |              |
            | help icon                    |              |
            | input                        |              |
            | info message about amount    |              |
            | accept button                | disabled     |
            | cancel button                |              |

        Examples:
            | limit                        |
            | pos daily                    |
            | atm daily                    |

    @OLC013
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @android @ios
    Scenario Outline: The user exits from the <infoPage> of daily limits
        Given a user with the following criteria
            | criteria      |
            | limits update |
        And the user accesses to expense control of his credit card
        And the user enters on the "<infoPage>" of daily limits
        When the user exits from the information modal
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | title daily amount     |
            | help icon              |
            | title of limit         |
            | amount used value      |
            | amount available title |
            | amount available value |
            | limit edit icon        |

        Examples:
            | infoPage                    |
            | expense control info        |
            | daily charges info          |

    @OLC014
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @android @ios
    Scenario Outline: The user adds an ammount to the <limit> limit
        Given a user with the following criteria
            | criteria      |
            | limits update |
        And the user accesses the "<limit>" limit configuration of his credit card
        When the user writes some value to modify limit
        Then the user sees the ammount input has value

        Examples:
            | limit                        |
            | pos daily                    |
            | atm daily                    |

    @OLC015
    @alternate-scenarios-smoke
    @MX @vbank @backend(test)
    @web-done @web @android @ios
    Scenario Outline: Error message - the user adds an ammount thats <ammountType> to the <limit> limit
        Given a user with the following criteria
            | criteria      |
            | limits update |
        And the user accesses the "<limit>" limit configuration of his credit card
        When the user adds a "<ammountType>" ammount
        Then the user sees the following items in the screen
            | item                         | value    |
            | warning icon                 |          |
            | warning message about amount |          |
            | accept button                | disabled |

        Examples:
            | limit                        | ammountType                   |
            | atm daily                    | non multiple                  |
            | atm daily                    | lesser that limit             |
            | atm daily                    | greater than credit line      |
            | atm daily                    | lesser than consumed          |
            | pos daily                    | greater than credit line      |
            | pos daily                    | lesser that limit             |
            | pos daily                    | lesser than consumed          |

    @OLC016
    @smokeTest
    @web-done @web @android @ios
    @MX @backend(test) @vbank
    Scenario: The user changes the shopping limit
        Given a user with the following criteria
            | criteria      |
            | limits update |
        And the user accesses the "pos daily" limit configuration of his credit card
        When the user confirms the new limit for an amount of "1000"
        Then the user sees the success message
