@rewards @promotionsDetail
Feature: Rewards - Promotions Detail

    @RWPD001
    @ios @android @web @web-done @spherica
    @MX @backend(artichoke) @vbank @smokeTest
    #Promotion detail UX-VD_V07: 2.2
    Scenario: Detail maximum of face to face promotion
        Given a user with the following criteria
            | criteria                  |
            | all promotions categories |
        And the user accesses to Landing Promotions from sidebar
        When the user accesses to "favourite" promotion detail "face to face"
        Then the user sees the following items in the screen
            | item                                     | value       |
            | header                                   |             |
            | back header                              |             |
            | promotion detail information             |             |
            | promotion detail image                   | img missing |
            | promotion detail title                   |             |
            | promotion detail description             |             |
            | promotion detail about promotion link    |             |
            | promotion detail about store             |             |
            | promotion detail about store link        |             |
            | promotion detail about store description |             |
            | promotion detail store list title        |             |
            | promotion detail store list              |             |

    @RWPD002
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @spherica
    #Promotion detail UX-VD_V07:  2.5 / 2.5.1 / 2.5.2
    Scenario: Access to terms and conditions screen in promotion detail
        Given a user with the following criteria
            | criteria                  |
            | all promotions categories |
        And the user accesses to Landing Promotions from sidebar
        And the user accesses to "favourite" promotion detail "face to face"
        When the user accesses to terms and conditions of offer
        Then the user sees the following items in the screen
            | item                               |
            | promotion detail header terms      |
            | promotion detail title terms       |
            | promotion detail description terms |
            | promotion detail button terms      |

    @RWPD003
    @ios @android @web @web-done @spherica
    @MX @backend(artichoke) @vbank @vbank-modified
    # in two examples add description block "Descriptions:" in /promotions/v0/promotions/WA_0006
    # in example "less 6 cards" delete cards in /promotions/v0/promotions/WA_0006
    #Promotion detail UX-VD_V07:  2.6 / 2.6.1 / 2.6.2
    Scenario Outline: Promotion Detail with <cards> TDC
        Given a user with the following criteria
            | criteria                  |
            | all promotions categories |
        And the user accesses to Landing Promotions from sidebar
        When the user accesses to "special" promotion detail "<cards>"
        Then the user sees the following items in the screen
            | item                                     | value       |
            | header                                   |             |
            | back header                              |             |
            | promotion detail information             |             |
            | promotion detail title                   |             |
            | promotion detail description             |             |
            | promotion detail about promotion link    |             |
            | promotion detail about store description |             |
            | promotion detail store list title        |             |
            | promotion detail store list              |             |
            | promotion detail view more cards         | <status>    |

        Examples:
            | cards        | status      |
            | less 6 cards | not visible |
            | more 5 cards |             |

    @RWPD004
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @spherica
    #Promotion detail UX-VD_V12:  Error 1
    Scenario: Error loading Promotion Detail
        Given a user with the following criteria
            | criteria                  |
            | all promotions categories |
        And the user accesses to Landing Promotions from sidebar
        When the user attempts to access to "special" promotion detail "online"
        Then the user sees the following items in the screen
            | item                             |
            | big modal error header           |
            | big modal error image            |
            | big modal error message          |
            | big modal error try again button |

    @RWPD005
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @spherica
    #Promotion detail UX-VD_V07:  Error 2
    Scenario: Error loading Promotion Detail retry 3 times
        Given a user with the following criteria
            | criteria                  |
            | all promotions categories |
        And the user accesses to Landing Promotions from sidebar
        And the user attempts to access to "special" promotion detail "online"
        When the user retries "3" times big modal
        Then the user sees the following items in the screen
            | item                             | value       |
            | big modal error header           |             |
            | big modal error image            |             |
            | big modal error message          |             |
            | big modal error try again button | not visible |
            | big modal error return button    |             |

    @RWPD006
    @ios @android @web @web-done @spherica
    @MX @backend(artichoke) @vbank @vbank-modified
    # type online: update offer 28000073 delete stores, usageTypes: change id and name ONLINE
    #Promotion detail UX-VD_V07:  2.4 / 2.4.2 / 2.4.3
    Scenario Outline: Detail maximum of promotion with redemption <type> favourite
        Given a user with the following criteria
            | criteria                  |
            | all promotions categories |
        And the user accesses to Landing Promotions from sidebar
        When the user accesses to "favourite" promotion detail "<type>"
        Then the user sees the following items in the screen
            | item                                     | value       |
            | promotion detail about store link        |             |
            | promotion detail about store description |             |
            | promotion detail store list title        |             |
            | promotion detail store list              | <status>    |

        Examples:
            | type         | status      |
            | online       | not visible |
            | face to face |             |
