@cardOperativeLimitsTdc
Feature: Card Operative Limits Tdc

    @AAT001
    @MX
    @web
    @vbank
    @backend(test)
    @ios
    @android
    @web-done
    @smokeTest
    @backend-smoke
    Scenario: Consult the credit card limits
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        When the user accesses the limits of his credit card
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | title daily amount    |
            | help icon             |
            | pos digital limit     |
            | pos physical limit    |
            | atm physical limit    |
            | title description     |

    @AAT002
    @MX
    @web
    @vbank
    @backend(test)
    @ios
    @android
    @web-done
    @backend-smoke
    Scenario Outline: Edit <card> credit card limits
        Given a user with the following criteria
            | criteria                  |
            | credit card               |
            | card operative limits tdc |
        And the user accesses the "<card>" limit configuration of his credit card
        When the user confirms the new limit for an amount of "1000"
        Then the user sees the success message
        Examples:
            | card          |
            | atm physical  |
            | digital       |
            | physical      |

    @AAT003
    @MX
    @web
    @vbank
    @backend(test)
    @ios
    @android
    @web-done
    @backend-smoke
    Scenario: Limits icon help modal
        Given a user with the following criteria
            | criteria                  |
            | credit card               |
            | card operative limits tdc |
        And the user accesses to expense control of the card "4772142356677730"
        When the user taps on help icon of daily limits
        Then the user sees a modal with the following elements:
            | item                  |
            | header title modal    |
            | paragraph icon        |
            | bullets list          |
            | ok button             |

    @AAT004
    @MX
    @web
    @vbank
    @backend(test)
    @ios
    @android
    @web-done
    @backend-smoke
    Scenario: Limits Header help modal
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        And the user accesses to expense control of the card "4772142356677730"
        When the user taps on help header icon of daily limits
        Then the user sees a modal with the following elements:
            | item                  |
            | header title modal    |
            | paragraph icon        |
            | description           |
            | ok button             |

    @AAT005
    @MX
    @web
    @vbank
    @backend(test)
    @ios
    @android
    @web-done
    @backend-smoke
    Scenario Outline: Show help information of limit for <card>
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        And the user accesses the "<card>" limit configuration of his credit card
        When the user taps on selected limit info icon
        Then the user sees a modal with the following elements:
            | item                  |
            | header title modal    |
            | paragraph icon        |
            | bullets list          |
            | ok button             |
        Examples:
            | card          |
            | atm physical  |
            | digital       |
            | physical      |

    @AAT006
    @MX
    @web
    @vbank
    @backend(test)
    @ios
    @android
    @web-done
    @backend-smoke
    Scenario Outline: Error edit <card> type with <value>
        Given a user with the following criteria
            | criteria                                      |
            | credit card                                   |
            | card operative limits tdc                     |
        And the user accesses the "<card>" limit configuration of his credit card
        When the user adds a "<value>" ammount
        Then the user sees the following items in the screen
            | item       |
            | text error |
        Examples:
            | card         | value                    |
            | digital      | non multiple             |
            | digital      | lesser that limit        |
            | digital      | greater than credit line |
            | physical     | non multiple             |
            | physical     | lesser that limit        |
            | physical     | greater than credit line |
            | atm physical | non multiple             |
            | atm physical | lesser that limit        |
            | atm physical | greater than credit line |
