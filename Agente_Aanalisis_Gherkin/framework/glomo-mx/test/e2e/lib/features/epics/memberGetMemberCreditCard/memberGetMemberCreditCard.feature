@memberGetMemberCreditCard
Feature: Member Get Member Credit Card

    @MGMTDC002
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: The user sees all the information about the member get member credit card offer
        Given a user with the following criteria
            | criteria                  |
            | invite friend credit card |
        And the user accesses to invite your friend in the sidebar
        When the user accesses to member get member "offer button link"
        Then the user sees the following items in the screen
            | item                                     |
            | mgm offer detail header                  |
            | mgm offer detail back button             |
            | mgm offer detail title text              |
            | mgm offer detail subtitle text panel     |
            | mgm offer detail register button         |

    @MGMTDC003
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: The user accesses to the personal information step
        Given a user with the following criteria
            | criteria                      |
            | invite friend credit card     |
        And the user accesses to invite your friend in the sidebar
        When the user accesses to member get member "tdc registration form"
        Then the user sees the following items in the screen
            | item                             | value     |
            | form header                      |           |
            | personal form title              |           |
            | personal form button disabled    | disabled  |

    @MGMTDC004
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: The user fills all the data about his referral in the personal information step
        Given a user with the following criteria
            | criteria                      |
            | invite friend credit card     |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "tdc registration form"
        When the user "registers" the referrals personal information
        Then the user sees the following items in the screen
            | item                        |
            | form header                 |
            | form header close button    |
            | personal form title         |
            | personal form button        |

    @MGMTDC005
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: The user fills the personal information and continues to the address step
        Given a user with the following criteria
            | criteria                      |
            | invite friend credit card     |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "tdc registration form"
        When the user "completes" the referrals personal information
        Then the user sees the following items in the screen
            | item                            | value     |
            | form header                     |           |
            | form header close button        |           |
            | personal form summary header    |           |
            | address form header             |           |
            | address form button disabled    | disabled  |

    @MGMTDC006
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: The user enters incorrect data about his referral in personal information step
        Given a user with the following criteria
            | criteria                      |
            | invite friend credit card     |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "tdc registration form"
        When the user "enters incorrect" the referrals personal information
        Then the user sees the following items in the screen
            | item                            | value     |
            | form header                     |           |
            | form header close button        |           |
            | personal form summary header    |           |
            | personal form title             |           |
            | personal form button disabled   | disabled  |

    @MGMTDC008
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: The user sees the information in the rewards section
        Given a user with the following criteria
            | criteria                      |
            | invite friend credit card     |
        And the user accesses to invite your friend in the sidebar
        When the user taps on the "rewards option"
        Then the user sees the following items in the screen
            | item                          |
            | mgm header title              |
            | mgm back button               |
            | mgm rewards option            |
            | mgm reward item               |

    @MGMTDC009
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: The user sees all the information about the rewards detail
        Given a user with the following criteria
            | criteria                      |
            | invite friend credit card     |
        And the user accesses to invite your friend in the sidebar
        And the user taps on the "rewards option"
        When the user taps on the "reward item"
        Then the user sees the following items in the screen
            | item                                    |
            | mgm reward detail header                |
            | mgm reward detail back button           |
            | mgm reward detail title text            |
            | mgm reward detail history link          |
            | mgm reward detail go dynamics button    |

    @MGMTDC010
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: The user sees the rewards history information correctly
        Given a user with the following criteria
            | criteria                      |
            | invite friend credit card     |
        And the user accesses to invite your friend in the sidebar
        And the user taps on the "rewards option"
        When the user taps on the "reward detail history link"
        Then the user sees the following items in the screen
            | item                               |
            | mgm reward history header          |
            | mgm reward history back button     |
            | mgm reward history message         |

    @MGMTDC011
    @MX @backend(test)
    @vbank
    @smokeTest
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: The user sees the bonification detail information correctly
        Given a user with the following criteria
            | criteria                      |
            | invite friend credit card     |
        And the user accesses to invite your friend in the sidebar
        And the user taps on the "rewards option"
        When the user taps on the "bonification item"
        Then the user sees the following items in the screen
            | item                                  |
            | mgm bonification header               |
            | mgm bonification back button          |
            | mgm bonification message              |
            | mgm bonification message link         |
            | mgm bonification go dynamics button   |

    @MGMTDC012
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: The user accesses to invite your friend without rewards
        Given a user with the following criteria
            | criteria                     |
            | customer without offers      |
        And the user accesses to invite your friend in the sidebar
        When the user taps on the "rewards option"
        Then the user sees the following items in the screen
            | item                         |
            | mgm empty rewards text       |

    @MGMTDC013
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: The user accesses to invite your friend without dynamics
        Given a user with the following criteria
            | criteria                     |
            | customer without offers      |
        When the user accesses to invite your friend in the sidebar
        Then the user sees the following items in the screen
            | item                                  |
            | mgm empty dynamics text               |

    @MGMTDC014
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @vbank-modified
    # In the function "_getPromotions" delete the "event.detail||[]" and put null
    # example: const data=event.detail||[] --> const data=null
    Scenario: Error when the user accesses to invite your friend in rewards section
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        And the user accesses to invite your friend in the sidebar
        When the user taps on the "rewards option"
        Then the user sees the following items in the screen
            | item                                |
            | mgm header title                    |
            | mgm back button                     |
            | mgm rewards option                  |
            | mgm rewards retries button error    |

    @MGMTDC015
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @vbank-modified
    # In the function "_getOffers" delete the "event.detail||[]" and put null
    # example: const data=event.detail||[] --> const data=null
    Scenario: Error when the user accesses to invite your friend in dynamics section
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        When the user accesses to invite your friend in the sidebar
        Then the user sees the following items in the screen
            | item                                 |
            | mgm header title                     |
            | mgm back button                      |
            | mgm dynamics option                  |
            | mgm dynamics retries button error    |

    @MGMTDC016
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: The user sees the address form button enabled
        Given a user with the following criteria
            | criteria                      |
            | invite friend credit card     |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "tdc registration form"
        When the user "registers" the referrals address information
        Then the user sees the following items in the screen
            | item                            |
            | form header                     |
            | form header close button        |
            | personal form summary header    |
            | address form header             |
            | address form button             |

    @MGMTDC017
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: The user sees the summary of the information
        Given a user with the following criteria
            | criteria                      |
            | invite friend credit card     |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "tdc registration form"
        When the user "completes" the referrals address information
        Then the user sees the following items in the screen
            | item                            |
            | form header                     |
            | form header close button        |
            | personal form summary header    |
            | address form summary header     |
            | confirm register button         |

    @MGMTDC018
    @MX @backend(test)
    @vbank
    @smokeTest
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: The user completes the referrals registration
        Given a user with the following criteria
            | criteria                      |
            | invite friend credit card     |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "tdc registration form"
        When the user completes the referrals registration
        Then the user sees the following items in the screen
            | item                        |
            | success header              |
            | success close button        |
            | success title text          |
            | success register button     |
            | success link button         |

    @MGMTDC019
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @vbank-modified
    # in the function "_onClickCta" delete the "this.offerId" and put null
    # example: this._createReferralMemderBody(this.offerId, --->  this._createReferralMemderBody(null,
    Scenario: The user tries to complete the referrals registration with error
        Given a user with the following criteria
            | criteria                      |
            | invite friend credit card     |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "tdc registration form"
        When the user completes the referrals registration with error
        Then the user sees the following items in the screen
            | item                         |
            | register error header        |
            | register error close button  |
            | register error text          |
            | register error button        |

    @MGMTDC020
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: The user sees an error with the postal code
        Given a user with the following criteria
            | criteria                      |
            | invite friend credit card     |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "tdc registration form"
        When the user tries to enter a postal code
        Then the user sees the following items in the screen
            | item                        |
            | postal code header          |
            | postal code header button   |
            | postal code text            |
            | postal code button          |
