@billPaymentsSipare
Feature: Bill Payments Sipare

    @SIP001
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done @smokeTest
    Scenario: The user makes the tax payment
        Given a user with the following criteria
            | criteria                          |
            | bill payments with email accounts |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 21   |
            | month | 6    |
            | year  | 2025 |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user select payment of contributions "sipare" with reference
        When the user continue with the payment process
        Then the user sees the following items in the screen
            | item                              |
            | successful operation header       |
            | successful operation title header |
            | successful exit button header     |
            | operation success                 |
            | commission free                   |
            | successful exit button header     |

    @SIP002
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done
    Scenario: The user is looking for a service or an agreement
        Given a user with the following criteria
            | criteria                          |
            | bill payments with email accounts |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        When the user select payment "sipare"
        Then the user sees the following items in the screen
            | item                              |
            | header                            |
            | title header                      |
            | exit button header                |
            | text box reference                |
            | camera button icon                |
            | button continue service detail    |
            | title link choose another service |

    @SIP003
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done
    Scenario: The user manually enters the capture line
        Given a user with the following criteria
            | criteria                          |
            | bill payments with email accounts |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        When the user select payment of contributions "sipare" with reference
        Then the user sees the following items in the screen
            | item                              |
            | header                            |
            | title header                      |
            | exit button header                |
            | text box reference                |
            | camera button icon                |
            | text add capture line             |
            | text info valid characters        |
            | button continue service detail    |
            | title link choose another service |

    @SIP004
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done
    Scenario: Capture line validation without selected account
        Given a user with the following criteria
            | criteria                          |
            | bill payments with email accounts |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 21   |
            | month | 6    |
            | year  | 2025 |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user select payment of contributions "sipare" with reference
        When the user continue after entering capture line
        Then the user sees the following items in the screen
            | item                      |
            | exit button header        |
            | title header              |
            | label step two            |
            | text detail import two    |
            | label detail amount two   |
            | button detail amount two  |

    @SIP005
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done
    Scenario: An error when typing illegal characters
        Given a user with the following criteria
            | criteria                          |
            | bill payments with email accounts |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 21   |
            | month | 6    |
            | year  | 2025 |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        When the user select wrong name service payment "ñ"
        Then the user sees the following items in the screen
            | item                             |
            | header                           |
            | title header                     |
            | exit button header               |
            | input search                     |
            | alert character invalid          |
            | service not found title          |

    @SIP006
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done
    Scenario: Error when accessing payment without registered email
        Given a user with the following criteria
            | criteria               |
            | bill payments no email |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 21   |
            | month | 6    |
            | year  | 2025 |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        When the user select payment "sipare"
        Then the user sees the following items in the screen
            | item                          |
            | modal no email header      |
            | modal no email title       |
            | modal no email description |
            | modal no email exit        |
            | modal no email profile     |

    @SIP007
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done
    Scenario: Error when the capture line is invalid
        Given a user with the following criteria
            | criteria                          |
            | bill payments with email accounts |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 21   |
            | month | 6    |
            | year  | 2025 |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user select payment of contributions "sipare" with reference
        When the user continue after entering capture line
        Then the user sees the following items in the screen
            | item                                 |
            | modal capture line error header      |
            | modal capture line error title       |
            | modal capture line error description |

    @SIP008
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done
    Scenario: Error when the payment deadline has expired
        Given a user with the following criteria
            | criteria                          |
            | bill payments with email accounts |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 21   |
            | month | 6    |
            | year  | 2025 |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user select payment of contributions "sipare" with reference
        When the user continue after entering capture line
        Then the user sees the following items in the screen
            | item                             |
            | modal deadline error header      |
            | modal deadline error title       |
            | modal deadline error description |

    @SIP009
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done
    Scenario: Error when the payment period is invalid
        Given a user with the following criteria
            | criteria                          |
            | bill payments with email accounts |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 21   |
            | month | 6    |
            | year  | 2025 |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user select payment of contributions "sipare" with reference
        When the user continue after entering capture line
        Then the user sees the following items in the screen
            | item                             |
            | modal period invalid error header|
            | modal period invalid title       |
            | modal period invalid description |

    @SIP010
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done
    Scenario: Error when the capture line has already been paid
        Given a user with the following criteria
            | criteria                          |
            | bill payments with email accounts |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 21   |
            | month | 6    |
            | year  | 2025 |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user select payment of contributions "sipare" with reference
        When the user continue with the payment process
        Then the user sees the following items in the screen
            | item                           |
            | modal is pay error header      |
            | modal is pay error title       |
            | modal is pay error description |

    @SIP011
    @vbank
    @MX @backend(test)
    @web @android @ios
    @web-done
    Scenario: Error when it is out of time
        Given a user with the following criteria
            | criteria                          |
            | bill payments with email accounts |
        And the user starts the application at date:
            | hour  | 19   |
            | day   | 21   |
            | month | 6    |
            | year  | 2025 |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        And the user accepts the onboarding bill payments dashboard
        And the user select payment of contributions "sipare" with reference
        When the user continue after entering capture line
        Then the user sees the following items in the screen
            | item                                |
            | modal out of time error header      |
            | modal out of time error title       |
            | modal out of time error description |
