@rewards @promotionsFavoriteCategories
Feature: Rewards - Landing favorite categories

    @RWC001
    @ios @android @web @web-done
    @MX @backend(test) @vbank @vbank-modified
    @backend-smoke
    Scenario Outline: View of the favorite categories section <categories>
        Given a user with the following criteria
            | criteria     |
            | <categories> |
        When the user accesses to Landing Promotions from sidebar
        Then the user sees the following items in the screen
            | item                                             | value      |
            | favorites carousel promotions                    | <carousel> |
            | banner favourites categories configuration title | <panel>    |
            | banner favourites categories configuration text  | <panel>    |
            | banner favourites categories configuration image | <panel>    |

        Examples:
            | categories                    | carousel    | panel       |
            | with categories favourites    | visible     | not visible |
            | without categories favourites | not visible | visible     |

    @RWC002
    @ios @android @web @web-done
    @MX @backend(test) @vbank @smokeTest
    @backend-smoke
    Scenario: Modify favorites categories in selection screen
        Given a user with the following criteria
            | criteria                     |
            | modify categories favourites |
        And the user accesses to Landing Promotions from sidebar
        And the user accesses to modify the selected favorite categories
        When the user changes selection favorite categories and confirm
        Then the user sees the following items in the screen
            | item                                             | value         |
            | favorites carousel promotions                    | not view more |
            | banner favourites categories configuration       | not visible   |
            | banner favourites categories configuration title | not visible   |
            | banner favourites categories configuration text  | not visible   |
            | banner favourites categories configuration image | not visible   |
            | banner favourites categories configuration link  | not visible   |

    @RWC003
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    @backend-smoke
    Scenario: Keep up selected favorite categories from principal section after attempt delete
        Given a user with the following criteria
            | criteria                     |
            | modify categories favourites |
        And the user accesses to Landing Promotions from sidebar
        And the user accesses to modify the selected favorite categories
        When the user keep up the selected favorite categories from carousel categories screen
        Then the user sees the following items in the screen
            | item                                             | value       |
            | favorites carousel promotions                    |             |
            | banner favourites categories configuration       | not visible |
            | banner favourites categories configuration title | not visible |
            | banner favourites categories configuration text  | not visible |
            | banner favourites categories configuration image | not visible |
            | banner favourites categories configuration link  | not visible |

    @RWC004
    @ios @android @web @web-done
    @MX @backend(test) @vbank @vbank-modified
    @backend-smoke
    Scenario: Enter Onboarding access to rewards landing favorite categories panel
        Given a user with the following criteria
            | criteria                      |
            | without categories favourites |
        And the user tries to access to Rewards Landing
        And the user does Onboarding by "enter" option
        When the user accesses to promotions
        Then the user sees the following items in the screen
            | item                                             | value       |
            | favorites carousel promotions                    | not visible |
            | banner favourites categories configuration       |             |
            | banner favourites categories configuration title |             |
            | banner favourites categories configuration text  |             |
            | banner favourites categories configuration image |             |
            | banner favourites categories configuration link  |             |

    @RWC005
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    @backend-smoke @smokeTest
    Scenario: View all promotions of favourite carrousel promotions
        Given a user with the following criteria
            | criteria                  |
            | all promotions categories |
        And the user accesses to Landing Promotions from dashboard
        And the user accesses to "favourite" carousel list promotions
        When the user scrolls to last promotion
        Then the user sees the following items in the screen
            | item            |
            | title header    |
            | back header     |
            | promotions list |

    @RWC006
    @ios @android @web @web-done @spherica
    @MX @backend(artichoke) @vbank @vbank-modified
    Scenario: Access favorite categories selection screen first time
        Given a user with the following criteria
            | criteria                   |
            | with categories favourites |
        And the user accesses to Landing Promotions from sidebar
        When the user accesses spherica favorite categories selection screen
        Then the user sees the following items in the screen
            | item                          | value       |
            | favourite header              |             |
            | button close favourite header |             |
            | image favourite               |             |
            | info favourite title          |             |
            | info favourite description    |             |
            | check rows list categories    | all enabled |
            | confirm favourites button     | disabled    |

    @RWC007
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @spherica
    #Favorite Categories_UX_MX_V01: 2 / 2.2
    Scenario: Access to favorite categories selection screen without available promotions
        Given a user with the following criteria
            | criteria                         |
            | without promotions in favourites |
        And the user accesses to Landing Promotions from sidebar
        When the user accesses spherica favorite categories selection screen
        Then the user sees the following items in the screen
            | item                          |
            | favourite header              |
            | button close favourite header |
            | image favourite               |
            | info favourite title          |
            | info favourite description    |
            | check list categories         |
            | confirm favourites button     |

    @RWC008
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @spherica
    Scenario Outline: Selects <number> favorites categories in selection screen
        Given a user with the following criteria
            | criteria                      |
            | without categories favourites |
        And the user accesses to Landing Promotions from sidebar
        And the user accesses spherica favorite categories selection screen
        When the user selects "<number>" favorite categories
        Then the user sees the following items in the screen
            | item                                                   | value               |
            | favourite header                                       | <status element>    |
            | button close favourite header                          | <status element>    |
            | image favourite                                        | <status element>    |
            | info favourite title                                   | <status element>    |
            | info favourite description                             | <status element>    |
            | check rows list categories                             | <status check list> |
            | confirm favourites button                              | <status confirm>    |
            | max favourites categories selected icon                | <message status>    |
            | max favourites categories selected message description | <message status>    |
            | max favourites categories selected message button      | <message status>    |

        Examples:
            | number | status confirm | status check list | message status | status element |
            | 3      | enabled        | others disabled   | not visible    | visible        |
            | 1      | disabled       | all enabled       | not visible    | visible        |
            | 4      | not visible    | all enabled       |                | not visible    |

    @RWC009
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @spherica
    Scenario: Delete selected favorite categories from panel favourites categories
        Given a user with the following criteria
            | criteria                   |
            | with categories favourites |
        And the user accesses to Landing Promotions from sidebar
        When the user deletes the selected favorite categories from "spherica categories" screen
        Then the user sees the following items in the screen
            | item                               |
            | results header                     |
            | back button results header         |
            | edit favourite categories button   |
            | remove favourite categories button |
            | Promotions type tabs               |
            | promotions list                    |

    @RWC010
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @spherica
    Scenario: Tries to selected favorite categories from panel favourites categories - Keep categories
        Given a user with the following criteria
            | criteria                   |
            | with categories favourites |
        And the user accesses to Landing Promotions from sidebar
        When the user keeps the selected favorite categories from "spherica categories" screen
        Then the user sees the following items in the screen
            | item                               |
            | results header                     |
            | back button results header         |
            | edit favourite categories button   |
            | remove favourite categories button |
            | Promotions type tabs               |
            | promotions list                    |

    @RWC011
    @ios @android @web @web-done @spherica
    @MX @backend(artichoke) @vbank @smokeTest
    Scenario: Selects 3 favorites categories for first time
        Given a user with the following criteria
            | criteria                      |
            | without categories favourites |
        And the user accesses to Landing Promotions from sidebar
        And the user accesses spherica favorite categories selection screen
        When the user selects "3" favorite categories and accepts
        Then the user sees the following items in the screen
            | item                               |
            | results header                     |
            | back button results header         |
            | edit favourite categories button   |
            | remove favourite categories button |
            | Promotions type tabs               |
            | promotions list                    |

    @RWC012
    @ios @android @web @web-done @spherica
    @MX @backend(artichoke) @vbank
    Scenario: Close after to modify favorites categories in selection screen
        Given a user with the following criteria
            | criteria                      |
            | without categories favourites |
        And the user accesses to Landing Promotions from sidebar
        And the user accesses spherica favorite categories selection screen
        And the user selects "3" favorite categories
        When the user closes selection screen "with selected categories"
        Then the user sees the following items in the screen
            | item                                             | value       |
            | favorites carousel promotions                    | not visible |
            | banner favourites categories configuration       |             |
            | banner favourites categories configuration title |             |
            | banner favourites categories configuration text  |             |
            | banner favourites categories configuration image |             |
            | banner favourites categories configuration link  |             |

    @RWC013
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @spherica
    Scenario: Favorite promotions carousel without available promotions
        Given a user with the following criteria
            | criteria                         |
            | without promotions in favourites |
        When the user accesses to Landing Promotions from sidebar
        Then the user sees the following items in the screen
            | item                                    | value                        |
            | favorites carousel promotions           | not visible                  |
            | favorites carousel promotions view more |                              |
            | favourites carousel promotions text     | without promotions available |
            | favorites carousel promotions image     | no promotions                |
            | favorites carousel promotions title     |                              |
