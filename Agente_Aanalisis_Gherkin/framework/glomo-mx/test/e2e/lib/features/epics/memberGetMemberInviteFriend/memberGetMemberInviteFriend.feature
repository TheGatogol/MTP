@memberGetMemberInviteFriend
Feature: Member Get Member Invite Friend

    @MGMIF001
    @MX @backend(test)
    @vbank
    @smokeTest
    @web @web-done
    @ios @android
    Scenario: The user views information within the accordion validate the plus button to open and close it
        Given a user with the following criteria
            | criteria                                   |
            | invite friend                              |
            | has offers and rewards for inviting friend |
        And the user accesses to the sidebard
        And the user accesses to invite friend screen
        When the user get more information about its dynamics from member get member
        Then the user sees the following items in the screen
            | item                             |
            | account digital text             |
            | header title                     |
            | mgm back button                  |
            | offer detail share button invite |
            | offer terms and conditions link  |

    @MGMIF002
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: The user get the reward from push notification
        Given a user with the following criteria
             | criteria                                   |
             | invite friend                              |
             | has offers and rewards for inviting friend |
        And the user accesses to dashboard
        And the user goes to "member get member invite friend" using deeplink navigation
        When the user go to the reward information and return dynamics page from memeber get member
        Then the user sees the following items in the screen
             | item                   |
             | header mgm reward      |
             | header mgm back button |
             | mgm dynamics option    |
             | mgm rewards option     |
             | mgm offer button link  |

    @MGMIF003
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: The user views information about its rewards
        Given a user with the following criteria
            | criteria                                   |
            | invite friend                              |
            | has offers and rewards for inviting friend |
        And the user accesses to the sidebard
        And the user accesses to invite friend screen
        When the user go to the reward information and return dynamics page from memeber get member
        Then the user sees the following items in the screen
            | item                   |
            | header mgm reward      |
            | header mgm back button |
            | mgm dynamics option    |
            | mgm rewards option     |
            | mgm offer button link  |

    @MGMIF004
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: There are no campaigns available in dynamics
        Given a user with the following criteria
            | criteria                |
            | no invite friend        |
            | has no dynamics rewards |
        And the user accesses to the sidebard
        When the user accesses to invite friend screen
        Then the user sees the following items in the screen
            | item             |
            | header no offers |
            | back no offers   |
            | panel info       |
            | tap dynamics     |
            | tap rewards      |

    @MGMIF005
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: There are no campaigns available in the awards
        Given a user with the following criteria
            | criteria                |
            | no invite friend        |
            | has no dynamics rewards |
        And the user accesses to the sidebard
        And the user accesses to invite friend screen
        When the user goes to the rewards from member get member
        Then the user sees the following items in the screen
            | item             |
            | header no offers |
            | back no offers   |
            | panel info       |
            | tap dynamics     |
            | tap rewards      |

    @MGMIF006
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: There are an error in the service of dynamics
        Given a user with the following criteria
            | criteria                                   |
            | invite friend                              |
            | has offers and rewards for inviting friend |
        And the user accesses to the sidebard
        And the user accesses to invite friend screen
        When the user retries link in dynamics three times
        Then the user sees the following items in the screen
            | item                      |
            | error rewards header      |
            | error button back         |
            | error tab dynamics        |
            | error panel text dynamics |

    @MGMIF007
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: There are an error in the service of rewards
        Given a user with the following criteria
            | criteria                                   |
            | invite friend                              |
            | has offers and rewards for inviting friend |
        And the user accesses to the sidebard
        And the user accesses to invite friend screen
        And the user goes to the rewards from member get member
        When the user retries link in rewards three times
        Then the user sees the following items in the screen
            | item                     |
            | error rewards header     |
            | error button back        |
            | error tab dynamics       |
            | error panel text rewards |
