@ocAccount
Feature: OC Account

    @OCA001
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    @backend-smoke
    Scenario: The user sees the offer on the contract product section
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        When the user accesses contract product section
        Then the user sees the following items in the screen
            | item  | value      |
            | offer | oc-account |

    @OCA002
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: The user contract an account
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the user opens the account by entering the otp
        When the user returns to the dashboard from "enter account"
        Then the user accesses the "dashboard" screen

    @OCA003
    @web
    @web-done
    @backend(test)
    @smokeTest
    @MX @vbank
    @ios @android
    Scenario: The user displays his address
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the user accesses to "personal data" from offer page
        And the user displays his address
        When the sms key "11111111" is entered
        Then the user sees the following items in the screen
            | item                                       |
            | registration header                        |
            | registration personal data title           |
            | registration show personal data button     |
            | registration personal data continue button |

    @OCA004
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    @backend-smoke
    Scenario: The user views the terms and conditions
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the user confirms terms and conditions of contract account
        When the user verifies his personal data again
        Then the user sees the following items in the screen
            | item                                       |
            | registration header                        |
            | registration personal data title           |
            | registration show personal data button     |
            | registration personal data continue button |

    @OCA005
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    @backend-smoke
    Scenario: The user consults terms and condition from summary
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the user confirms terms and conditions of contract account
        When the user consults terms and conditions from summary
        Then the user sees the following items in the screen
            | item                                              |
            | registration header                               |
            | registration terms and conditions title           |
            | registration terms and conditions pdf button      |
            | registration terms and conditions continue button |

    @OCA006
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    @backend-smoke
    Scenario: The user accesses to know more
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        When the user accesses to "know more" from offer page
        Then the user sees the following items in the screen
            | item                   |
            | know more header       |
            | know more close button |
            | know more title        |
            | know more content      |
            | understand button      |

    @OCA007
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    @backend-smoke
    Scenario: The user consults the privacy notice
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the user accesses to "personal data" from offer page
        When the user consults the privacy notice
        Then the user sees the following items in the screen
            | item                        |
            | privacy notice header       |
            | privacy notice content      |
            | privacy notice close button |

    @OCA008
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    @backend-smoke
    Scenario: The user goes to contract product section from Basic Account Libreton
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        When the user accesses contract product section from "basic account libreton"
        Then the user accesses the "contract product section" screen

    @OCA009
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    @backend-smoke
    Scenario: The user goes to contract product section from Contract Account
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the user accesses to "personal data" from offer page
        When the user closes his personal data
        Then the user sees the following items in the screen
            | item                                |
            | induction header                    |
            | induction image                     |
            | induction offer description         |
            | induction benefits title            |
            | induction benefits subtitle         |
            | induction first benefit             |
            | induction second benefit            |
            | induction consideration title       |
            | induction consideration description |
            | induction know more button          |
            | induction continue button           |

    @OCA010
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    @backend-smoke
    Scenario: The user exits the process after accepting the terms and conditions.
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the user accepts the terms and conditions of the product
        When the user closes his personal data
        Then the user sees the following items in the screen
            | item                      |
            | exit warning header       |
            | exit warning close button |
            | exit warning icon         |
            | exit warning content      |
            | exit button               |

    @OCA011
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    @backend-smoke
    Scenario: The user closes his personal data
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the user accepts the terms and conditions of the product
        And the user closes his personal data
        When the user accesses contract product section from "exit modal"
        Then the user accesses the "contract product section" screen

    @OCA012
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    @backend-smoke
    Scenario: The user closes the terms and conditions after being confirmed
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the user confirms terms and conditions of contract account
        When the user closes his personal data
        Then the user sees the following items in the screen
            | item                 |
            | exit warning header  |
            | exit warning icon    |
            | exit warning content |
            | exit button          |

    @OCA013
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    @backend-smoke
    Scenario: The user accesses the contract product section after confirming the terms and conditions
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the user confirms terms and conditions of contract account
        And the user closes his personal data
        When the user accesses contract product section from "exit modal"
        Then the user accesses the "contract product section" screen

    @OCA014
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: The user accesses the contract product section after opening an account
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the user opens the account by entering the otp
        When the user accesses contract product section from "successful hiring"
        Then the user accesses the "contract product section" screen

    @OCA015
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: The user accesses to upgrade account
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        When the user updates his account
        Then the user sees the following items in the screen
            | item                                  |
            | upgrade account header                |
            | upgrade account image                 |
            | upgrade account content               |
            | upgrade account continue button       |
            | upgrade account another moment button |

    @OCA016
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: The user views his account at another time
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the user updates his account
        When the user accesses contract product section from "another moment"
        Then the user accesses the "contract product section" screen

    @OCA017
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: The user accesses to upgrade N2 to N4 account
        Given a user with the following criteria
            | criteria              |
            | oc account with offer |
        And the user accesses to offer oc account
        And the user updates his account
        When the user accesses to upgrade N2 to N4 account
        Then the user sees the following items in the screen
            | item         |
            | header title |
            | panel info   |
