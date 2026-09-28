@mposPurchase
Feature: Mpos Purchase

    @MPPU001
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Hiring A Reader
        Given a user with the following criteria
            | criteria               |
            | oc cash mpos purchase  |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the user selects an account for the process
        When the user completes the process
        Then the user sees the following items in the screen
            | item                 |
            | success header       |
            | success description  |
            | element success      |

    @MPPU002
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Validate The Functionality Of The Learn More Details Button
        Given a user with the following criteria
            | criteria              |
            | oc cash mpos purchase |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        When the user accesses to more details section
        Then the user sees the following items in the screen
            | item                          |
            | header more info reader modal |
            | benefits button                |
            | commissions button            |
            | specifications button          |

    @MPPU003
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: View Openpay Mini Reader Information
        Given a user with the following criteria
            | criteria              |
            | oc cash mpos purchase |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the user accesses to more details section
        When the user selects all options
        Then the user sees the following items in the screen
            | item                  |
            | header specifications  |
            | info specifications    |

    @MPPU004
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Validate that the "Help - Sales Commissions" screen is displayed
        Given a user with the following criteria
            | criteria              |
            | oc cash mpos purchase |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        When the user accesses to other commissions section
        Then the user sees the following items in the screen
            | item                       |
            | commisions title           |
            | commisions info            |
            | commisions msi description |

    @MPPU005
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Exit to the Payment Area dashboard from the "Card Reader" screen
        Given a user with the following criteria
            | criteria              |
            | oc cash mpos purchase |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        When the user selects the main address and closes the section
        Then the user sees the "cash zone payments mpos" screen

    @MPPU006
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done @smokeTest
    Scenario: Exit to the Payment Zone dashboard using the "Another Time" button
        Given a user with the following criteria
            | criteria              |
            | oc cash mpos purchase |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        When the user selects at another time
        Then the user sees the "cash zone payments mpos" screen

    @MPPU007
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Add another address.
        Given a user with the following criteria
            | criteria              |
            | oc cash mpos purchase |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        When the user adds and saves other address
        Then the user sees the following items in the screen
            | item                       |
            | delete other address icon  |
            | edit other address icon    |
            | continue address button    |

    @MPPU008
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Modify "Other address"
        Given a user with the following criteria
            | criteria              |
            | oc cash mpos purchase |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the user adds and saves other address
        When the user edits and saves others number
        Then the user sees the following items in the screen
            | item                       |
            | delete other address icon  |
            | edit other address icon    |
            | continue address button    |

    @MPPU009
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Delete "Other address"
        Given a user with the following criteria
            | criteria              |
            | oc cash mpos purchase |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the user adds and saves other address
        And the user deletes the other address
        When the user accepts the delete proccess
        Then the user sees the following items in the screen
            | item                    |
            | title address send      |
            | other address button    |
            | continue address button |

    @MPPU010
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Keep "Other address"
        Given a user with the following criteria
            | criteria              |
            | oc cash mpos purchase |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the user adds and saves other address
        And the user deletes the other address
        When the user cancels the delete proccess
        Then the user sees the following items in the screen
            | item                    |
            | title address send      |
            | other address button    |
            | continue address button |

    @MPPU011
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Display the primary address data
        Given a user with the following criteria
            | criteria         |
            | mpos normal user |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user close the onboarding modal
        And the user accesses to card MPOS
        When the user shows the information
        Then the user sees the following items in the screen
            | item                    |
            | title address send      |
            | other address button    |
            | continue address button |

    @MPPU012
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Exit The Purchase Process
        Given a user with the following criteria
            | criteria              |
            | oc cash mpos purchase |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        When the user closes the MPOS section
        Then the user sees the following items in the screen
            | item         |
            | title leave  |
            | close window |

    @MPPU013
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Validate that the "Shipping Conditions" modal media is displayed
        Given a user with the following criteria
            | criteria              |
            | oc cash mpos purchase |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        When the user consults the conditions and close the section
        Then the user sees the following items in the screen
            | item                    |
            | title address send      |
            | link conditions         |
            | other address button    |
            | continue address button |

    @MPPU014
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Validate that the accounts screen is displayed
        Given a user with the following criteria
            | criteria              |
            | oc cash mpos purchase |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        When the user shows all accounts
        Then the user sees the following items in the screen
            | item                    |
            | header accounts         |
            | close step twoo button  |
            | accounts list           |

    @MPPU015
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Confirm that the "Payment Information" section is enabled when you exit the "Accounts" screen
        Given a user with the following criteria
            | criteria              |
            | oc cash mpos purchase |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the user shows all accounts
        When the user closes the accounts section
        Then the user sees the following items in the screen
            | item                    |
            | header accounts         |
            | step twoo accounts      |
            | see all accounts button |

    @MPPU016
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario Outline: Account With <balance> Balance
        Given a user with the following criteria
            | criteria |
            | <type>   |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        When the continues with the mpos process
        Then the user sees the following items in the screen
            | item                    | value     |
            | choose the account text |           |
            | step twoo accounts      |           |
            | insufficient balance     | <message> |
        Examples:
            | type                  | message   | balance      |
            | oc cash mpos purchase | disabled  | enough       |
            | oc cash mpos purchase | enabled   | insufficient  |

    @MPPU017
    @MX @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Modify shipping address on the summary screen.
        Given a user with the following criteria
            | criteria               |
            | oc cash mpos purchase  |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesses to card MPOS
        And the user selects an account for the process
        When the user edits the main address information
        Then the user sees the following items in the screen
            | item                    |
            | changed address toast   |
