@insurancesDelayedPayment
Feature: Insurance Delayed Payment

    @IDP001
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    @smokeTest
    Scenario: Happy path the user paid the insurance
        Given a user with the following criteria
            | criteria                         |
            | insurance delayed payment        |
            | delayed payment accounts and tdc |
        And the user accesses insurance delayed payment "main"
        And the user accepts delayed payment onboarding
        And the user selects "my accounts" payment type
        And the user selects "pending payment" payment method
        When the user "confirms" a insurance payment
        Then the user sees the following items in the screen
            | item                 |
            | receipt icon         |
            | receipt amount       |
            | receipt summary      |
            | receipt email        |
            | receipt share button |

    @IDP002
    @ios @android @web
    @MX
    @backend(test) @vbank
    @backend-smoke
    @web-done
    Scenario Outline: Access to insurance delayed payment and <Option> feature
        Given a user with the following criteria
            | criteria                         |
            | insurance delayed payment        |
            | delayed payment accounts and tdc |
        And the user accesses insurance delayed payment "main"
        And the user accepts delayed payment onboarding
        When the user comes back to dashboard
        Then the user sees the following items in the screen
            | item               |
            | button to <Option> |

        Examples:
            | Option   |
            | Exit     |
            | Continue |

    @IDP003
    @ios @android @web
    @MX
    @backend(test) @vbank
    @backend-smoke
    @web-done
    Scenario: Exit to notification detail
        Given a user with the following criteria
            | criteria                         |
            | insurance delayed payment        |
            | delayed payment accounts and tdc |
        When the user accesses insurance delayed payment "main"
        Then the user sees the following items in the screen
            | item                  |
            | header out of time    |
            | main text out of time |

    @IDP004
    @ios @android @web
    @MX
    @backend(test) @vbank
    @backend-smoke
    @web-done
    Scenario: Select pay insurance
        Given a user with the following criteria
            | criteria                         |
            | insurance delayed payment        |
            | delayed payment accounts and tdc |
        When the user accesses insurance delayed payment "policy"
        Then the user sees the following items in the screen
            | item              |
            | modal paid policy |

    @IDP005
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    @smokeTest
    Scenario: Happy path pay insurance with cards
        Given a user with the following criteria
            | criteria                         |
            | insurance delayed payment        |
            | delayed payment accounts and tdc |
        And the user accesses insurance delayed payment "main"
        And the user accepts delayed payment onboarding
        And the user selects "my cards" payment type
        And the user selects "pending payment" payment method
        When the user "confirms" a insurance payment
        Then the user sees the following items in the screen
            | item                 |
            | receipt icon         |
            | receipt amount       |
            | receipt summary      |
            | receipt email        |
            | receipt share button |

    @IDP006
    @ios @android @web
    @MX
    @backend(test) @vbank
    @backend-smoke
    @web-done
    Scenario Outline: Show all <type of payment> with button
        Given a user with the following criteria
            | criteria                         |
            | insurance delayed payment        |
            | delayed payment accounts and tdc |
        And the user accesses insurance delayed payment "main"
        And the user accepts delayed payment onboarding
        When the user accesses all "<method of payment>" payment type
        Then the user sees the following items in the screen
            | item           |
            | <type of link> |

        Examples:
            | method of payment | type of payment | type of link      |
            | my credit cards   | credit cards    | view all cards    |
            | my accounts       | accounts        | view all accounts |

    @IDP007
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    @smokeTest
    Scenario Outline: Validate type of service with <type of payment>
        Given a user with the following criteria
            | criteria                         |
            | insurance delayed payment        |
            | delayed payment accounts and tdc |
        And the user accesses insurance delayed payment "main"
        And the user accepts delayed payment onboarding
        And the user selects "<method of payment>" payment type
        And the user selects "pending payment and direct debit" payment method
        When the user "confirms and authorize" a insurance payment
        Then the user sees the following items in the screen
            | item                 |
            | receipt icon         |
            | receipt amount       |
            | receipt summary      |
            | receipt email        |
            | receipt share button |

        Examples:
            | method of payment | type of payment |
            | my cards          | credit cards    |
            | my accounts       | accounts        |

    @IDP008
    @ios @android @web
    @MX
    @backend(test) @vbank
    @backend-smoke
    @web-done
    Scenario Outline: Validate <link type> link of termns and conditions in <type of payment>
        Given a user with the following criteria
            | criteria                         |
            | insurance delayed payment        |
            | delayed payment accounts and tdc |
        And the user accesses insurance delayed payment "main"
        And the user accepts delayed payment onboarding
        And the user selects "<method of payment>" payment type
        And the user selects "pending payment and direct debit" payment method
        When the user selects a "<link type>" of "<type of payment>" in insurance delayed payment
        Then the user sees the following items in the screen
            | item        |
            | <link type> |

        Examples:
            | method of payment | type of payment | link type   |
            | my accounts       | accounts        | pdf         |
            | my accounts       | accounts        | information |
            | my cards          | credit cards    | pdf         |

    @IDP009
    @ios @android @web
    @MX
    @backend(test) @vbank
    @backend-smoke
    @web-done
    Scenario: Exiting the feature out of time
        Given a user with the following criteria
            | criteria                         |
            | insurance delayed payment        |
            | delayed payment accounts and tdc |
        When the user accesses insurance delayed payment "with out of time"
        Then the user sees the following items in the screen
            | item                    |
            | out of time exit button |

    @IDP0010
    @ios @android @web
    @MX
    @backend(test) @vbank
    @backend-smoke
    @web-done
    Scenario: View blocked account
        Given a user with the following criteria
            | criteria                         |
            | insurance delayed payment        |
            | delayed payment accounts and tdc |
        And the user accesses insurance delayed payment "main"
        And the user accepts delayed payment onboarding
        When the user selects "my accounts" payment type
        Then the user sees the following items in the screen
            | item                 |
            | insufficient balance |

    @IDP0011
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: View error service modal
        Given a user with the following criteria
            | criteria                         |
            | insurance delayed payment        |
            | delayed payment accounts and tdc |
        When the user accesses insurance delayed payment "main"
        Then the user sees the following items in the screen
            | item                      |
            | communication interrupted |
