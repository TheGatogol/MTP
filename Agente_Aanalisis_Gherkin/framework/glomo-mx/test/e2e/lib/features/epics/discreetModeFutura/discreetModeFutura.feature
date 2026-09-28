@discreetModeFutura
Feature: Discreet Mode Futura

    @MDF001
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Icon show
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | account sufficient balance |
            | smart shortcuts            |
            | debit card                 |
            | credit card                |
            | loans                      |
            | user with investments      |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                            |
            | show mode eye icon              |
            | home title                      |
            | blue icon                       |
            | featured button                 |
            | your products section button    |
            | main products title             |
            | main card button next           |
            | main card button previous       |
            | amounts of main products        |
            | your today shortcuts title      |
            | amounts of your today shortcuts |
            | financial health title          |
            | amounts of financial health     |

    @MDF002
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Hide Amounts
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | account sufficient balance |
            | smart shortcuts            |
            | debit card                 |
            | credit card                |
            | loans                      |
            | user with investments      |
        When the user activates discreet mode
        Then the user sees the following items in the screen
            | item                                   |
            | hide mode eye icon                     |
            | home title                             |
            | blue icon                              |
            | featured button                        |
            | your products section button           |
            | main products title                    |
            | masked amounts of main products        |
            | your today shortcuts title             |
            | masked amounts of your today shortcuts |
            | financial health title                 |
            | masked amounts of financial health     |

    @MDF003
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Hidden amounts in the your products tab
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | account sufficient balance |
            | smart shortcuts            |
            | debit card                 |
            | credit card                |
            | loans                      |
            | user with investments      |
        And the user activates discreet mode
        When the user accesses their products section
        Then the user sees the following items in the screen
            | item                         |
            | hide mode eye icon           |
            | home title                   |
            | blue icon                    |
            | featured button              |
            | your products section button |
            | accounts family title        |
            | masked amounts of accounts   |
            | cards family title           |
            | masked amounts of cards      |
            | loans family title           |
            | masked amounts of loans      |
            | deposits family title        |
            | masked amounts of deposits   |

    @MDF004
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Visible amounts
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | account sufficient balance |
            | smart shortcuts            |
            | debit card                 |
            | credit card                |
            | loans                      |
            | user with investments      |
        And the user activates discreet mode
        When the user deactivates discreet mode
        Then the user sees the following items in the screen
            | item                            |
            | show mode eye icon              |
            | home title                      |
            | blue icon                       |
            | featured button                 |
            | your products section button    |
            | main products title             |
            | amounts of main products        |
            | your today shortcuts title      |
            | amounts of your today shortcuts |
            | financial health title          |
            | amounts of financial health     |

    @MDF005
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Visible amounts in your products tab
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | account sufficient balance |
            | smart shortcuts            |
            | debit card                 |
            | credit card                |
            | loans                      |
            | user with investments      |
        And the user activates discreet mode
        And the user deactivates discreet mode
        When the user accesses their products section
        Then the user sees the following items in the screen
            | item                         |
            | show mode eye icon           |
            | home title                   |
            | blue icon                    |
            | featured button              |
            | your products section button |
            | accounts family title        |
            | amounts of accounts          |
            | cards family title           |
            | amounts of cards             |
            | loans family title           |
            | amounts of loans             |
            | deposits family title        |
            | amounts of deposits          |

    @MDF006
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Hide amounts from your products tab
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | account sufficient balance |
            | smart shortcuts            |
            | debit card                 |
            | credit card                |
            | loans                      |
            | user with investments      |
        And the user accesses to dashboard
        And the user accesses their products section
        When the user activates discreet mode
        Then the user sees the following items in the screen
            | item                         |
            | hide mode eye icon           |
            | home title                   |
            | blue icon                    |
            | featured button              |
            | your products section button |
            | accounts family title        |
            | masked amounts of accounts   |
            | cards family title           |
            | masked amounts of cards      |
            | loans family title           |
            | masked amounts of loans      |
            | deposits family title        |
            | masked amounts of deposits   |

    @MDF007
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Show amounts from your products tab
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | account sufficient balance |
            | smart shortcuts            |
            | debit card                 |
            | credit card                |
            | loans                      |
            | user with investments      |
        And the user accesses to dashboard
        And the user accesses their products section
        And the user activates discreet mode
        When the user deactivates discreet mode
        Then the user sees the following items in the screen
            | item                         |
            | show mode eye icon           |
            | home title                   |
            | blue icon                    |
            | featured button              |
            | your products section button |
            | accounts family title        |
            | amounts of accounts          |
            | cards family title           |
            | amounts of cards             |
            | loans family title           |
            | amounts of loans             |
            | deposits family title        |
            | amounts of deposits          |

    @MDF008
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Hidden mode at all 3 levels of an account
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | account sufficient balance |
            | smart shortcuts            |
            | debit card                 |
            | credit card                |
            | loans                      |
            | user with investments      |
        And the user accesses to dashboard
        And the user accesses their products section
        And the user activates discreet mode
        When the user accesses their account
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | back button                |
            | account                    |
            | masked amounts of accounts |
            | currency                   |
            | balance label              |
            | view account data link     |
            | account info card          |

    @MDF009
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Hidden mode at all 3 levels of a credit card
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | account sufficient balance |
            | smart shortcuts            |
            | debit card                 |
            | credit card                |
            | loans                      |
            | user with investments      |
        And the user accesses to dashboard
        And the user accesses their products section
        And the user activates discreet mode
        When the user accesses their credit card
        Then the user sees the following items in the screen
            | item                                               |
            | header                                             |
            | back button                                        |
            | alias value                                        |
            | masked amount                                      |
            | Obfuscated card number as title with 4 last digits |
            | current available balance masked amount            |
            | Disposed available balance masked amount           |

    @MDF010
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Hidden mode in all 3 levels of a loan
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | account sufficient balance |
            | smart shortcuts            |
            | debit card                 |
            | credit card                |
            | loans                      |
            | user with investments      |
        And the user accesses to dashboard
        And the user accesses their products section
        And the user activates discreet mode
        When the user accesses their loan
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | granted credit masked amount |
            | more info                    |
            | payment detail               |
            | alias button                 |
            | pay credit button            |

    @MDF011
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Hidden mode at all 3 levels of a debit card
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | account sufficient balance |
            | smart shortcuts            |
            | debit card                 |
            | credit card                |
            | loans                      |
            | user with investments      |
        And the user accesses to dashboard
        And the user accesses their products section
        And the user activates discreet mode
        When the user accesses their debit card
        Then the user sees the following items in the screen
            | item                                               |
            | header                                             |
            | back button                                        |
            | alias value                                        |
            | masked amount                                      |
            | Obfuscated card number as title with 4 last digits |
            | current available balance masked amount            |
            | Disposed available balance masked amount           |

    @MDF012
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Hidden mode in all 3 levels of an investment
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | account sufficient balance |
            | smart shortcuts            |
            | debit card                 |
            | credit card                |
            | loans                      |
            | user with investments      |
        And the user accesses to dashboard
        And the user accesses their products section
        And the user activates discreet mode
        When the user accesses their investment
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | deposit alias    |
            | balance label    |
            | more info button |
            | masked amount    |

    @MDF013
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Configure discreet mode as hidden from sidebar settings
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | account sufficient balance |
            | smart shortcuts            |
            | debit card                 |
            | credit card                |
            | loans                      |
            | user with investments      |
        And the user activates discreet mode in hidden configuration
        And the user "confirms" the action
        And the user accesses the "security menu" screen
        When the user goes back to dashboard
        Then the user sees the following items in the screen
            | item                                   |
            | hide mode eye icon                     |
            | home title                             |
            | blue icon                              |
            | featured button                        |
            | your products section button           |
            | main products title                    |
            | masked amounts of main products        |
            | your today shortcuts title             |
            | masked amounts of your today shortcuts |
            | financial health title                 |
            | masked amounts of financial health     |

    @MDF014
    @smokeTest @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Configure discreet mode as visible from sidebar settings
        Given a user with the following criteria
            | criteria                   |
            | basic accounts             |
            | account sufficient balance |
            | smart shortcuts            |
            | debit card                 |
            | credit card                |
            | loans                      |
            | user with investments      |
        And the user activates discreet mode in hidden configuration
        And the user "confirms" the action
        And the user accesses the "security menu" screen
        And the user goes back to dashboard
        When the user deactivates discreet mode
        Then the user sees the following items in the screen
            | item                            |
            | show mode eye icon              |
            | home title                      |
            | blue icon                       |
            | featured button                 |
            | your products section button    |
            | main products title             |
            | amounts of main products        |
            | your today shortcuts title      |
            | amounts of your today shortcuts |
            | financial health title          |
            | amounts of financial health     |
