@rewards @promotionsLanding
Feature: Rewards - Landing promotions

    @RWLP001
    @ios @android @web @web-done
    @MX @backend(test) @vbank @smokeTest
    #Landing Promotions UX-UX_V07: 2
    Scenario Outline: First access to Rewards Landing Promotions and <access> after Onboarding
        Given a user with the following criteria
            | criteria          |
            | promotions active |
        And the user tries to access to Rewards Landing
        When the user does Onboarding by "<access>" option
        Then the user sees the "rewards landing" screen
        Examples:
            | access |
            | close  |
            | enter  |

    @RWLP002
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    #Landing Promotions UX-VD_V03: 3.1.2
    Scenario: Scrolling in carousel promotions list
        Given a user with the following criteria
            | criteria          |
            | promotions active |
        And the user accesses to Landing Promotions from dashboard
        When the user scrolls to last carousel promotions
        Then the user sees the following items in the screen
            | item                 | value       |
            | block options header | not visible |

    @RWLP003
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    #Landing Promotions UX-VD_V03: 3 /3.1 / 3.1.1
    Scenario: View all promotions of standard carousel promotions with pagination
        Given a user with the following criteria
            | criteria          |
            | promotions active |
        And the user accesses to Landing Promotions from dashboard
        And the user accesses to "special" carousel list promotions
        When the user scrolls to last promotion
        Then the user sees the following items in the screen
            | item            |
            | title header    |
            | back header     |
            | text header     |
            | promotions list |
        And the user views all promotions after does pagination

    @RWLP004
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    #Landing Promotions UX-VD_V03: 4 / 4.1
    Scenario: Access to Rewards Landing Promotions without promotions in all categories
        Given a user with the following criteria
            | criteria           |
            | without promotions |
        When the user accesses to Landing Promotions from dashboard
        Then the user sees the following items in the screen
            | item                                       | value       |
            | title header                               |             |
            | back header                                |             |
            | text header                                |             |
            | tab points                                 |             |
            | tab promotions                             | selected    |
            | input search                               | not visible |
            | favorites carousel promotions              | not visible |
            | special carousel promotions                | not visible |
            | standards carousel promotions first        | not visible |
            | banner favourites categories configuration | not visible |
            | panel info image                           |             |
            | panel info title                           |             |
            | panel info text                            |             |

    @RWLP005
    @ios @android @web
    @MX @backend(test) @vbank
    @vbank-modified @web-done
    #modify status 500 path: /promotions/v0/categories
    #Landing Promotions UX-V07: Error 2
    Scenario: Carousel promotions list fails to load
        Given a user with the following criteria
            | criteria          |
            | promotions active |
        When the user accesses to Landing Promotions from dashboard
        Then the user sees the following items in the screen
            | item                         | value       |
            | title header                 |             |
            | back header                  |             |
            | text header                  |             |
            | tab points                   |             |
            | tab promotions               | selected    |
            | input search                 | not visible |
            | message carousel error icon  |             |
            | message carousel error text  |             |
            | message carousel error retry |             |

    @RWLP006
    @ios @android @web
    @MX @backend(test) @vbank @smokeTest
    @spherica @web-done
    #Landing Promotions UX-VD_V03: 1 / 1.1 / 1.2 / 2
    Scenario Outline: Access to Rewards Landing Promotions from <access>
        Given a user with the following criteria
            | criteria          |
            | promotions active |
        When the user accesses to Landing Promotions from <access>
        Then the user sees the following items in the screen
            | item                                           | value       |
            | title header                                   |             |
            | back header                                    |             |
            | tab points                                     |             |
            | tab promotions                                 | selected    |
            | input search                                   |             |
            | standards carousel promotions first            |             |
            | standards carousel promotions image first      |             |
            | standards carousel promotions image second     |             |
            | standards carousel promotions image third      |             |
            | standards carousel promotions title first      |             |
            | standards carousel promotions title second     |             |
            | standards carousel promotions slide first      |             |
            | standards carousel promotions slide second     |             |
            | standards carousel promotions slide third      |             |
            | standards carousel promotions view more first  |             |
            | promotions list                                | not visible |
            | favorites carousel promotions                  |             |
            | favorites carousel promotions title            |             |
            | favorites carousel promotions slide            |             |
            | favorites carousel promotions view more        |             |
            | special carousel promotions                    |             |
            | special carousel promotions slide              |             |
            | special carousel promotions title              |             |
            | special carousel promotions view more          |             |

        Examples:
            | access    |
            | dashboard |
            | sidebar   |

    @RWLP007
    @ios @android @web
    @MX @backend(test) @vbank
    @vbank-modified @spherica @web-done
    #Landing Promotions UX-VD_V03: 3.5 / 3.5.1 / 3.5.2
    Scenario: Carousel promotions with less 5 promotions is not visible link ViewAll
        Given a user with the following criteria
            | criteria          |
            | promotions active |
        When the user accesses to Landing Promotions from dashboard
        Then the user sees the following items in the screen
            | item                                    | value       |
            | title header                            |             |
            | back header                             |             |
            | text header                             |             |
            | tab points                              |             |
            | tab promotions                          | selected    |
            | input search                            |             |
            | favorites carousel promotions           |             |
            | favorites carousel promotions title     |             |
            | favorites carousel promotions slide     |             |
            | favorites carousel promotions view more |             |
