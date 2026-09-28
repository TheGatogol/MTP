@creditBureauAuthorization
Feature: Credit Bureau Authorization

    @CBA002
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario: The user accesses the credit bureau authorization operation
        Given a user with the following criteria
            | criteria           |
            | credit bureau user |
        And the user starts the application at date:
            | day   | 20   |
            | month | 09   |
            | year  | 2021 |
        When the user accesses the credit bureau authorization notification
        Then the user sees the following items in the screen
            | item                   | value |
            | icon                   |       |
            | header title           |       |
            | header text            |       |
            | main title             |       |
            | main text              |       |
            | authorization link     |       |
            | authorization checkbox | false |
            | accept button          | false |
            | cancel button          |       |

    @CBA003
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario: The user accesses the credit bureau authorization modal
        Given a user with the following criteria
            | criteria           |
            | credit bureau user |
        And the user starts the application at date:
            | day   | 20   |
            | month | 09   |
            | year  | 2021 |
        And the user accesses the credit bureau authorization notification
        When the user enters the "authorization" modal
        Then the user sees a modal with the following elements:
            | item           |
            | container icon |
            | title          |
            | main text      |
            | accept button  |
            | close button   |

    @CBA004
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario Outline: The user exits the credit bureau authorization modal with the <option> option
        Given a user with the following criteria
            | criteria           |
            | credit bureau user |
        And the user starts the application at date:
            | day   | 20   |
            | month | 09   |
            | year  | 2021 |
        And the user accesses the credit bureau authorization notification
        And the user enters the "authorization" modal
        When the user exits the modal with the "<option>" option
        Then the user sees the following items in the screen
            | item          | value |
            | accept button | false |

        Examples:
            | option |
            | accept |
            | x      |

    @CBA005
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario Outline: The user checks on the authorization checklist <times> times
        Given a user with the following criteria
            | criteria           |
            | credit bureau user |
        And the user starts the application at date:
            | day   | 20   |
            | month | 09   |
            | year  | 2021 |
        And the user accesses the credit bureau authorization notification
        When the user checks the authorization checklist "<times>" times
        Then the user sees the following items in the screen
            | item                   | value   |
            | authorization checkbox | <value> |
            | accept button          | <value> |

        Examples:
            | times | value |
            | 1     | true  |
            | 2     | false |

    @CBA006
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario: The user decides to exit the credit bureau authorization operation
        Given a user with the following criteria
            | criteria           |
            | credit bureau user |
        And the user starts the application at date:
            | day   | 20   |
            | month | 09   |
            | year  | 2021 |
        And the user accesses the credit bureau authorization notification
        And the user checks the authorization checklist "1" times
        When the user closes the current operative
        Then the user sees a modal with the following elements:
            | item          |
            | main text     |
            | accept button |
            | cancel button |

    @CBA007
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario Outline: The user decides to exit the credit bureau authorization and <option> the exit modal
        Given a user with the following criteria
            | criteria           |
            | credit bureau user |
        And the user starts the application at date:
            | day   | 20   |
            | month | 09   |
            | year  | 2021 |
        And the user accesses the credit bureau authorization notification
        And the user checks the authorization checklist "1" times
        And the user closes the current operative
        When the user exits the modal with the "<option>" option
        Then the user accesses the "<screen>" screen

        Examples:
            | option | screen                      |
            | accept | dashboard                   |
            | cancel | credit bureau authorization |

    @CBA008
    @MX
    @web
    @android @ios
    @vbank @smokeTest
    @backend(test)
    @web-done
    Scenario: The user authorizes the credit bureau
        Given a user with the following criteria
            | criteria           |
            | credit bureau user |
        And the user starts the application at date:
            | day   | 20   |
            | month | 09   |
            | year  | 2021 |
        And the user accesses the credit bureau authorization notification
        And the user checks the authorization checklist "1" times
        When the user "succeeds" at authorizing the credit bureau
        Then the user sees the following items in the screen
            | item          |
            | success icon  |
            | success title |
            | date          |
            | success text  |
            | folio title   |
            | folio         |
            | message icon  |
            | message text  |
            | exit button   |

    @CBA009
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario: The user fails at authorizing the credit bureau due to a communication error
        Given a user with the following criteria
            | criteria           |
            | credit bureau user |
        And the user starts the application at date:
            | day   | 20   |
            | month | 09   |
            | year  | 2021 |
        And the user accesses the credit bureau authorization notification
        And the user checks the authorization checklist "1" times
        When the user "fails" at authorizing the credit bureau
        Then the user sees a modal with the following elements:
            | item           |
            | container icon |
            | main text      |
            | accept button  |
            | cancel button  |

    @CBA010
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario: The user retries the communication error message 3 times
        Given a user with the following criteria
            | criteria           |
            | credit bureau user |
        And the user starts the application at date:
            | day   | 20   |
            | month | 09   |
            | year  | 2021 |
        And the user accesses the credit bureau authorization notification
        And the user checks the authorization checklist "1" times
        And the user "fails" at authorizing the credit bureau
        When the user retries the operation "3" times
        Then the user accesses the "dashboard" screen

    @CBA011
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario: The user doesnt see the credit bureau notification in dashboard after authorizing it
        Given a user with the following criteria
            | criteria           |
            | credit bureau user |
        And the user starts the application at date:
            | day   | 20   |
            | month | 09   |
            | year  | 2021 |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                                     | value |
            | credit bureau authorization notification | false |

    @CBA012
    @MX
    @web
    @android @ios
    @vbank
    @backend(test)
    @web-done
    Scenario Outline: The user exits the success screen with the <option> option
        Given a user with the following criteria
            | criteria                   |
            | credit bureau success user |
        And the user starts the application at date:
            | day   | 20   |
            | month | 09   |
            | year  | 2023 |
        And the user accesses the credit bureau authorization notification
        And the user checks the authorization checklist "1" times
        And the user "succeeds" at authorizing the credit bureau
        When the user exits the success screen using the "<option>" option
        Then the user accesses the "dashboard" screen

        Examples:
            | option |
            | x      |
            | accept |
