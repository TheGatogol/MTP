@ocLifeInsurance
Feature: OC Life Insurance - Remote Banker

    @LIB001
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    @smokeTest
    Scenario: The user successfully hiring life insurance
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "life insurance" from notifications
        And the user accesses to the "payments methods" section of the insurance contract
        And the user accesses to the "terms and conditions" section of the insurance contract
        And the user "accept all terms and conditions" of the insurance contract
        When the user "completed" of the insurance contract
        Then the user sees the following items in the screen
            | item                        | value                 |
            | success hiring modal        |                       |
            | hiring success heading text | successful hiring     |
            | hiring heading text         |                       |
            | hiring heading amount       |                       |
            | hiring operations text      | summary data          |
            | notifications message       |                       |
            | shared receipt text         | share                 |
            | hiring success exit         |                       |

    @LIB002
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    Scenario: The user sees all the additional coverages of his life insurance
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "life insurance" from notifications
        When the user "open coverage list" of the insurance contract
        Then the user sees the following items in the screen
            | item                     |
            | coverage list            |
            | included                 |
            | death benefit            |
            | accidental death         |
            | additional               |

    @LIB003
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    Scenario: The user views life insurance in dollars
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        When the user accesses to "life insurance" from notifications
        Then the user sees the following items in the screen
            | item                     | value          |
            | header                   |                |
            | header text              | life insurance |
            | micro illustration       |                |
            | quote step title         |                |
            | beneficiaries list       |                |
            | coverage list            |                |
            | coupon clip              |                |
            | quote info step continue |                |
            | exchange rate text       |                |
            | exchange rate amount     |                |
            | exchange rate message    |                |

    @LIB004
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    Scenario: The user opens the payments methods modal
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "life insurance" from notifications
        And the user accesses to the "payments methods" section of the insurance contract
        When the user "open payment methods modal" of the insurance contract
        Then the user sees the following items in the screen
            | item                                 | value       |
            | payment methods modal                |             |
            | payment methods header               | my accounts |
            | payment methods accounts category    | accounts    |
            | payment methods more than one account|             |
            | payment methods header               | my cards    |
            | payment methods understood           |             |

    @LIB005
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    Scenario: The user opens the terms and conditions section
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "life insurance" from notifications
        And the user accesses to the "payments methods" section of the insurance contract
        When the user accesses to the "terms and conditions" section of the insurance contract
        Then the user sees the following items in the screen
            | item                                               |
            | terms and conditions step title                    |
            | terms and conditions pdf file                      |
            | terms and conditions privacy notice                |
            | terms and conditions check true information        |
            | terms and conditions check read and accept         |
            | terms and conditions check authorize first payment |
            | terms and conditions check receive documents       |
            | terms and conditions notification message          |
            | terms and conditions continue                      |

    @LIB006
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    Scenario: The user reads the privacy notice
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        When the user accesses to "life insurance" from notifications
        Then the user sees the following items in the screen
            | item              | value          |
            | header            |                |
            | header text       | life insurance |
            | quote step title  |                |
            | beneficiaries list|                |
            | coverage list     |                |
            | coupon clip       |                |

    @LIB007
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    Scenario: Access to the life insurance screen
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        When the user accesses to "life insurance" from notifications
        Then the user sees the following items in the screen
            | item                     |
            | header                   |
            | micro illustration       |
            | quote step title         |
            | beneficiaries list       |
            | coverage list            |
            | coupon clip              |
            | quote info step continue |

    @LIB008
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    Scenario: The user sees the summary of the life insurance contract
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "life insurance" from notifications
        And the user accesses to the "payments methods" section of the insurance contract
        And the user accesses to the "terms and conditions" section of the insurance contract
        When the user "accept all terms and conditions" of the insurance contract
        Then the user sees the following items in the screen
            | item                                         | value          |
            | quote summary step                           |                |
            | quote summary frequency payment              |                |
            | quote summary beneficiaries list             |                |
            | quote summary coupon clip                    |                |
            | payments summary payment method              | account number |
            | payment method summary change payment method |                |
            | terms and conditions summary step            |                |
            | continue with the hiring                     |                |

    @LIB009
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    Scenario: The user changes his payment method
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "life insurance" from notifications
        And the user accesses to the "payments methods" section of the insurance contract
        And the user accesses to the "terms and conditions" section of the insurance contract
        And the user "accept all terms and conditions" of the insurance contract
        When the user "change payment method" of the insurance contract
        Then the user sees the following items in the screen
            | item                                         | value              |
            | quote summary step                           |                    |
            | quote summary frequency payment              |                    |
            | quote summary beneficiaries list             |                    |
            | quote summary coupon clip                    |                    |
            | payments summary payment method              | credit card number |
            | payment method summary change payment method |                    |
            | terms and conditions summary step            |                    |
            | continue with the hiring                     |                    |

    @LIB010
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    Scenario: The user decides to leave the contract
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "life insurance" from notifications
        And the user accesses to the "payments methods" section of the insurance contract
        And the user accesses to the "terms and conditions" section of the insurance contract
        And the user "accept all terms and conditions" of the insurance contract
        When the user "cancel" of the insurance contract
        Then the user sees the following items in the screen
            | item                            | value                    |
            | leave warning modal             |                          |
            | leave warning modal title       | you are about to leave   |
            | leave warning modal exit button | exit                     |
            | leave warning modal back button | go back                  |
