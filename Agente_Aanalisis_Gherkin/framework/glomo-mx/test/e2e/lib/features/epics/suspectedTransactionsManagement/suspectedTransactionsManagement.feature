@suspectedTransactionsManagement
Feature: Suspected Transactions Management

    @STM002
    @MX @web @android @ios
    @backend(test) @vbank @smokeTest
    @web-done
    Scenario Outline: Confirm <option> notification detail screen
        Given a user with the following criteria
            | criteria                  |
            | debit card                |
            | credit card               |
            | has suspected transaction |
            | user with notification    |
        And the user accesses attempted "<option>" notification
        When the user confirms the movement
        Then the user sees the following items in the screen
            | item           |
            | confirm header |
            | confirm info   |

        Examples:
            | option                      |
            | atm withdrawal - bbva banks |
            | purchase                    |
            | cardless withdrawal         |
            | third parties transfer      |
            | service payment             |

    @STM003
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario Outline: Exit from <option> the Confirm or Reject notification detail
        Given a user with the following criteria
            | criteria                  |
            | debit card                |
            | credit card               |
            | has suspected transaction |
            | user with notification    |
        And the user accesses attempted "<option>" notification
        When the user exits the movement notification
        Then the user sees the "dashboard" screen

        Examples:
            | option                      |
            | atm withdrawal - bbva banks |
            | purchase                    |

    @STM004
    @MX @web @android @ios
    @backend(test) @vbank @smokeTest
    @web-done
    Scenario Outline: Reject <option> notification detail screen
        Given a user with the following criteria
            | criteria                  |
            | debit card                |
            | credit card               |
            | has suspected transaction |
            | user with notification    |
        And the user accesses attempted "<option>" notification
        When the user rejects the movement
        Then the user sees the following items in the screen
            | item               |
            | reject header      |
            | call line button   |
            | reject exit button |

        Examples:
            | option                       |
            | atm withdrawal - bbva banks  |
            | atm withdrawal - other banks |
            | cardless withdrawal          |
            | third parties transfer       |
            | service payment              |
            | purchase                     |

    @STM005
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario Outline: Validate <option> "Go to lock and reset" screen
        Given a user with the following criteria
            | criteria                  |
            | debit card                |
            | credit card               |
            | has suspected transaction |
            | user with notification    |
        When the user accesses attempted "<option>" notification
        And the user rejects the movement
        Then the user sees the following items in the screen
            | item                  |
            | reject header         |
            | lock and reset button |
            | reject exit button    |

        Examples:
            | option                      |
            | atm withdrawal - bbva banks |
            | purchase                    |

    @STM006
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: The user tries to exit from the Confirm or Reject notification detail
        Given a user with the following criteria
            | criteria                  |
            | debit card                |
            | credit card               |
            | has suspected transaction |
            | user with notification    |
        And the user accesses attempted "atm withdrawal - bbva banks" notification
        When the user tries to exit the movement notification
        Then the user sees the following items in the screen
            | item                                 |
            | without response modal header        |
            | confirm exit without response button |
            | return exit without response button  |

    @STM007
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: The user returns after trying to exit from the Confirm or Reject notification detail
        Given a user with the following criteria
            | criteria                  |
            | debit card                |
            | credit card               |
            | has suspected transaction |
            | user with notification    |
        And the user accesses attempted "atm withdrawal - bbva banks" notification
        And the user tries to exit the movement notification
        When the user returns from trying to exit the movement notification
        Then the user sees the following items in the screen
            | item                          |
            | suspected transaction message |
            | decline button                |
            | confirm button                |

    @STM008
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario Outline: Half modal is displayed when trying to answer the push again - <option>
        Given a user with the following criteria
            | criteria                  |
            | debit card                |
            | credit card               |
            | has suspected transaction |
            | user with notification    |
        When the user accesses attempted "<option>" notification
        And the user confirms the movement
        Then the user sees the following items in the screen
            | item                         |
            | confirmed before info        |
            | confirmed before exit button |

        Examples:
            | option                      |
            | purchase                    |
            | service payment             |
            | third parties transfer      |
            | atm withdrawal - bbva banks |

    @STM009
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario Outline: Validate that the physical <option> is turned off
        Given a user with the following criteria
            | criteria                  |
            | debit card                |
            | credit card               |
            | has suspected transaction |
            | user with notification    |
        And the user accesses attempted "purchase" notification
        And the user rejects the movement
        When the user goes back to dashboard from detail notification
        Then the user sees the "dashboard" screen

        Examples:
            | option      |
            | debit card  |
            | credit card |

    @STM010
    @MX @web @android @ios
    @backend(test) @vbank
    @web-done
    Scenario: Validate "Block and Replacement" screen from reject modal.
        Given a user with the following criteria
            | criteria                  |
            | debit card                |
            | credit card               |
            | has suspected transaction |
            | user with notification    |
        And the user accesses attempted "purchase" notification
        And the user rejects the movement
        When the user goes to block and replacement page from reject modal
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | block and replacement subtitle  |
            | block and replacement image     |
            | blocking reason title           |
            | blocking reason theft option    |
            | blocking reason loss option     |
            | blocking reason continue button |
