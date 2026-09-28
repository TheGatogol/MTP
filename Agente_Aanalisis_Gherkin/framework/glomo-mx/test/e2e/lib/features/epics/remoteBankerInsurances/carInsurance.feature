@ocCarInsurance
Feature: OC Car Insurance - Remote Banker

    @CIB001
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    @smokeTest
    Scenario: The user successfully hiring car insurance
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        And the user accesses to the "payments methods" section of the insurance contract
        And the user accesses to the "terms and conditions" section of the insurance contract
        And the user "accept all terms and conditions" of the insurance contract
        When the user "completed" of the insurance contract
        Then the user sees the following items in the screen
            | item                     |
            | success hiring modal     |
            | hiring success heading   |
            | hiring heading date      |
            | hiring heading text      |
            | hiring heading amount    |
            | hiring operations        |
            | hiring operations header |
            | hiring operations list   |
            | notifications message    |
            | shared receipt           |
            | hiring success exit      |

    @CIB002
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    Scenario: The user sees all the additional coverages of his car insurance
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        When the user "open coverage list" of the insurance contract
        Then the user sees the following items in the screen
            | item                 |
            | coverage list        |
            | show all coverages   |
            | included coverages   |
            | additional coverages |

    @CIB003
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    Scenario: The user opens the payments methods modal
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        And the user accesses to the "payments methods" section of the insurance contract
        When the user "payment methods labels" of the insurance contract
        Then the user sees the following items in the screen
            | item                             |
            | header close                     |
            | payment methods my accounts text |
            | payment methods my cards text    |

    @CIB004
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    Scenario: The user opens the payments methods modal - only accounts
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        And the user accesses to the "payments methods" section of the insurance contract
        When the user "open payment methods modal only accounts" of the insurance contract
        Then the user sees the following items in the screen
            | item                         | value    |
            | payment methods header       | accounts |
            | payment methods understood   |          |
            | payment methods list account |          |

    @CIB005
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    Scenario: The user opens the payments methods modal - only cards
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        And the user accesses to the "payments methods" section of the insurance contract
        When the user "open payment methods modal" of the insurance contract
        Then the user sees the following items in the screen
            | item                           |
            | header close                   |
            | payment methods modal          |
            | payment methods category cards |
            | payment methods list card      |
            | payment methods understood     |

    @CIB006
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    Scenario: The user sees the summary of the car insurance contract
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        And the user accesses to the "payments methods" section of the insurance contract
        When the user accesses to the "terms and conditions" section of the insurance contract
        Then the user sees the following items in the screen
            | item                                |
            | header                              |
            | header close                        |
            | terms and conditions step title     |
            | terms and conditions pdf file       |
            | terms and conditions privacy notice |
            | terms and conditions continue       |

    @CIB007
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    Scenario: The user changes his payment method
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        And the user accesses to the "payments methods" section of the insurance contract
        And the user accesses to the "terms and conditions" section of the insurance contract
        When the user "accept all terms and conditions" of the insurance contract
        Then the user sees the following items in the screen
            | item                                         | value                |
            | quote summary step                           |                      |
            | quote summary step                           | plan                 |
            | quote summary step                           | frequency payment    |
            | quote summary step                           | quotation folio      |
            | quote summary step                           | included coverages   |
            | quote summary step                           | additional coverages |
            | payments summary step                        |                      |
            | payment method summary change payment method |                      |
            | terms and conditions summary step            |                      |
    @CIB008
    @MX @backend(test)
    @web
    @vbank
    @ios @android
    @web-done
    Scenario: The user decides to leave the contract
        Given a user with the following criteria
            | criteria            |
            | remote banking user |
        And the user accesses to "car insurance" from notifications
        And the user accesses to the "payments methods" section of the insurance contract
        And the user accesses to the "terms and conditions" section of the insurance contract
        And the user "accept all terms and conditions" of the insurance contract
        When the user "cancel" of the insurance contract
        Then the user sees the following items in the screen
            | item                           | value                    |
            | leave hiring modal             |                          |
            | leave hiring modal title       | you are about to leave   |
            | leave hiring modal close       | X                        |
            | leave hiring modal body        | leave warning modal body |
            | leave hiring modal exit button | exit                     |
            | leave hiring modal return link | go back                  |
            | leave hiring modal exit        | exit                     |
