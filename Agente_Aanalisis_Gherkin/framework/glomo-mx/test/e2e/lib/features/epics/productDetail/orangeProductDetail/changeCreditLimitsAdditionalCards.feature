@changeCreditLimitsAdditionalCards
Feature: Change credit Limits Additional Cards

    @CLAC001
    @web @ios @android @web-done
    @MX @vbank @backend(artichoke)
    Scenario Outline: Display of the edit credit limits modal: <creditCardType>
        Given a user with the following criteria
            | criteria             |
            | edit limit operative |
            | <criteria>           |
        And the user accesses the detail of the additional "<status>" "<statusDescription>" card from the associated "<creditCardType>"
        When the user accesses modify operational limits operative
        Then the user sees a modal with the following elements:
            | item                           |
            | edit credit limits information |

        Examples:
            | creditCardType                    | criteria                     | statusDescription | status    |
            | blocked expired credit card       | credit card blocked          | current           | operative |
            | blocked pdt.receipt.s credit card | credit card blocked          | current           | operative |
            | negative balance                  | credit card negative balance | current           | operative |

    @CLAC002
    @web @ios @android @web-done
    @MX @vbank @backend(test)
    @backend-smoke
    @alternate-scenarios-smoke
    Scenario Outline: Status of the edit credit limit: <additionalCardType>
        Given a user with the following criteria
            | criteria             |
            | edit limit operative |
            | <criteria>           |
        When the user accesses the detail of the additional "<status>" "<statusDescription>" card from the associated "<associatedCard>"
        Then the user sees the following items in the screen
            | item               | value     |
            | edit credit limits | <visible> |

        Examples:
            | criteria                     | additionalCardType               | statusDescription | visible  | status    | associatedCard        |
            | blocked additional           | blocked additional               | expired           | disabled | blocked   | operative credit card |
            | credit card negative balance | credit limit exceeded additional | limit exceeded    | disabled | operative | negative balance      |
            | operative additional         | operative additional             | current           | enabled  | operative | operative credit card |

    @CLAC003
    @web @ios @android @web-done
    @MX @vbank @backend(test)
    @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Access to edit additional card credit limits
        Given a user with the following criteria
            | criteria             |
            | additional cards     |
            | operative additional |
        And the user accesses the detail of the additional "operative" "current" card from the associated "operative credit card"
        When the user accesses to change limits
        Then the user sees the following items in the screen
            | item                         | value    |
            | header                       |          |
            | card name                    |          |
            | current limit                |          |
            | current limit bar            |          |
            | used balance                 |          |
            | available balance            |          |
            | new credit limit description |          |
            | new credit limit input       |          |
            | accept button                | disabled |
            | cancel button                | enabled  |

    @CLAC004 @smokeTest @web-done
    @web @ios @android
    @MX @backend(artichoke) @vbank
    Scenario: Successful modify additional card limits
        Given a user with the following criteria
            | criteria             |
            | additional cards     |
            | operative additional |
        And the user accesses the detail of the additional "operative" "current" card from the associated "operative credit card"
        When the user changes limits of a additional card
        Then the user sees the following items in the screen
            | item                   |
            | successful green toast |

    @CLAC005
    @web @ios @android @web-done
    @MX @vbank @backend(test)
    @backend-smoke
    @alternate-scenarios-smoke
    Scenario Outline: Access to edit additional card credit limits when the amount is <description>
        Given a user with the following criteria
            | criteria             |
            | additional cards     |
            | operative additional |
        And the user accesses the detail of the additional "operative" "current" card from the associated "operative credit card"
        And the user accesses to change limits
        When the user introduces "<amount>" as new limit amount
        Then the user sees the following items in the screen
            | item                  | value    |
            | input info text error |          |
            | accept button         | disabled |

        Examples:
            | description                   | amount    |
            | over the limit                | 1000000   |
            | below the limit               | 100       |
            | not a multiple of one hundred | 256       |

    @CLAC006
    @web @ios @android @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Successful access to edit additional card credit limits after 2 retries
        Given a user with the following criteria
            | criteria             |
            | additional cards     |
            | operative additional |
        And the user accesses the detail of the additional "operative" "2 errors get limits" card from the associated "operative credit card"
        And the user tries access to change limits
        When the user retries to access "2" more times
        Then the user sees the following items in the screen
            | item                         | value    |
            | header                       |          |
            | card name                    |          |
            | current limit                |          |
            | current limit bar            |          |
            | used balance                 |          |
            | available balance            |          |
            | new credit limit description |          |
            | new credit limit input       |          |
            | accept button                | disabled |
            | cancel button                | enabled  |

    @CLAC007
    @web @ios @android @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Successful edit additional card credit limits after 2 retries
        Given a user with the following criteria
            | criteria             |
            | additional cards     |
            | operative additional |
        And the user accesses the detail of the additional "operative" "2 errors put limits" card from the associated "operative credit card"
        And the user accesses to change limits
        And the user introduces "1000" as new limit amount
        When the user retries "2" times to finish operative
        Then the user sees the following items in the screen
            | item                   |
            | successful green toast |

    @CLAC008
    @web @ios @android @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Show the final modal error after retrying to obtain the credit limits after 3 attempts
        Given a user with the following criteria
            | criteria             |
            | additional cards     |
            | operative additional |
        And the user accesses the detail of the additional "operative" "always error get limits" card from the associated "operative credit card"
        And the user tries access to change limits
        When the user retries to access "3" more times
        Then the user sees a "big" modal with the following elements:
            | item        |
            | description |
            | exit button |

    @CLAC009
    @web @ios @android @web-done
    @MX @vbank @backend(test)
    @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Do not show edit credit limits button - Credit card
        Given a user with the following criteria
            | criteria                   |
            | credit card unedited limit |
        When the user accesses more operations with "operative" "credit" card
        Then the user sees the following items in the screen
            | item               | value       |
            | edit credit limits | not visible |
