@internationalTransfer
Feature: International Transfer

    @IT002
    @web
    @vbank @android @ios
    @MX @backend(test)
    @web-done @smokeTest
    Scenario Outline: International Transfer adress <economic_activity>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        When the user accesses to make an international transfer with the folloging data
            | account | entryPoint    | data   | economicActivity    |
            | 5011    | <entry_point> | <data> | <economic_activity> |
        And the sms key "12345678" is entered
        Then the user sees a modal with the following elements:
            | item         |
            | title        |
            | icon help    |
            | information  |

        Examples:
            | entry_point      | data    | economic_activity |
            | Select Operation | invalid | local             |

    @IT003
    @web
    @vbank @android @ios
    @MX @backend(test)
    @web-done
    Scenario: Validate that the "Higher Amount" screen is displayed when the limit set for an operation is exceeded
        Given a user with the following criteria
            | criteria                |
            | operations mtu exceeded |
        And the user accesses to make an international transfer with the folloging data
            | account | entryPoint     | data   | economicActivity | MTU  |
            | 2595    | Account Detail | valid  | local            | true |
        When the user accesses MTU limit exceeded
        Then the user sees the following items in the screen
            | item			                   |
            | header limit exceeded            |
            | microillustration limit exceeded |
            | title limit exceeded             |
            | first paragraph limit exceeded   |
            | second paragraph limit exceeded  |
            | button limit exceeded            |
            | link limit exceeded              |

    @IT004
    @web
    @vbank @android @ios
    @MX @backend(test)
    @web-done
    Scenario: Confirm the operation even if it exceeds the established limit
        Given a user with the following criteria
            | criteria                |
            | operations mtu exceeded |
        And the user accesses to make an international transfer with the folloging data
            | account | entryPoint     | data  | economicActivity | MTU  |
            | 2595    | Account Detail | valid | local            | true |
        And the user accesses MTU limit exceeded
        When the user confirms the MTU exception
        Then the user sees the following items in the screen
            | item			                           |
            | close button confirmation max limit      |
            | header confirmation max limit            |
            | microillustration confirmation max limit |
            | title confirmation max limit             |
            | description confirmation max limit       |
            | button confirmation max limit            |
