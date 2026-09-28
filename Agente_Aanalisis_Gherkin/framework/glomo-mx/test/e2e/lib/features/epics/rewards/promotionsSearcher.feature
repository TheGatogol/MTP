@rewards @promotionsSearch

Feature: Promotions Search

    @RWPS001
    @web @ios @android @MX
    @backend(artichoke) @vbank @web-done
    #Promotions_Search_and_filter_UX_MX_V06 Case 1.1, 1.2
    Scenario Outline: Access to promotions searcher from <access>
        Given a user with the following criteria
            | criteria          |
            | active promotions |
        When the user accesses to promotions searcher from "<access>"
        Then the user sees the following items in the screen:
            | item                       | value    |
            | promotions searcher header |          |
            | exit button                |          |
            | input text searcher        |          |
            | input text warning         |          |
            | categories title           |          |
            | categories list            |          |
            | show all categories        |          |
            | usage type title           |          |
            | usage type list            |          |
            | location title             |          |
            | location option            |          |
            | location disabled message  |          |
            | promotion type title       |          |
            | promotion type list        |          |
            | Search button              | disabled |

        Examples:
            | access            |
            | dashboard sidebar |
            | dashboard banner  |

    @RWPS002
    @MX @web @ios @android
    @backend(artichoke) @vbank @web-done
    #Promotions_Search_and_filter_UX_MX_V06 Case 2.1
    Scenario Outline: Searching promotions - filter selection - <filterType>
        Given a user with the following criteria
            | criteria                  |
            | active promotions         |
            | all promotions categories |
        And the user accesses to promotions searcher from "dashboard sidebar"
        When the user filters promotions by "<filterType>"
        Then the user sees the following items in the screen:
            | item                       |
            | results header             |
            | back button results header |
            | filter tags                |
            | promotions filtered list   |
            | promotion name             |
            | benefit                    |
            | benefit description        |
            | benefit date               |
            | modality benefit           |

        Examples:
            | filterType     |
            | categories     |
            | modalities     |
            | promotion type |
            | mixed filters  |

    @RWPS003
    @web @ios @android @MX
    @backend(artichoke) @vbank @web-done
    #Promotions_Search_and_filter_UX_MX_V06 Case 2.2, 2.2.1
    Scenario: Searching promotions by open input
        Given a user with the following criteria
            | criteria          |
            | active promotions |
        And the user accesses to promotions searcher from "dashboard sidebar"
        When the user searches promotions by "starbucks"
        Then the user sees the following items in the screen:
            | item                       |
            | results header             |
            | back button results header |
            | filter tags                |
            | promotions filtered list   |

    @RWPS004
    @web @ios @android @MX
    @backend(artichoke) @vbank @web-done
    #Promotions_Search_and_filter_UX_MX_V06 Case 2.3
    Scenario: Searching promotions - remove history searches in open input
        Given a user with the following criteria
            | criteria          |
            | active promotions |
        And the user accesses to promotions searcher from "dashboard sidebar"
        And the user searches promotions by "starbucks" and removes
        And the user accesses to promotions searcher from "promotions landing"
        When the user tries to search using open input
        Then the user sees the following items in the screen:
            | item                       |
            | old searches list          |
            | remove old searches button |

    @RWPS005
    @web @ios @android @MX
    @backend(artichoke) @vbank @web-done
    #Promotions_Search_and_filter_UX_MX_V06 Case 2.3.2
    Scenario: Searching promotions - remove old searches in open input
        Given a user with the following criteria
            | criteria          |
            | active promotions |
        And the user accesses to promotions searcher from "dashboard sidebar"
        And the user searches promotions by "starbucks" and removes
        And the user accesses to promotions searcher from "promotions landing"
        And the user tries to search using open input
        When the user removes a old search
        Then the user sees the following items in the screen:
            | item              | value       |
            | old searches list | not visible |

    @RWPS006
    @web @ios @android @MX
    @backend(artichoke) @vbank @web-done
    #Promotions_Search_and_filter_UX_MX_V06 Case 3, 3.1
    Scenario: Display more categories
        Given a user with the following criteria
            | criteria          |
            | active promotions |
        And the user accesses to promotions searcher from "dashboard sidebar"
        When the user displays all categories
        Then the user sees the following items in the screen:
            | item             |
            | categories list  |
            | show less button |

    @RWPS007
    @native @ios @android @MX @JIRA.GLOMOGL-24056 @tmpExclude
    @backend(artichoke) @vbank @android-done @manual-ios
    #Promotions_Search_and_filter_UX_MX_V06 Case 3, 3.1
    Scenario: Location option disabled
        Given a user with the following criteria
            | criteria          |
            | active promotions |
        And the user attempts to access to map of commerce from rewards landing
        And the user "denies" permissions to access
        And the user closes permissions map of commerce modal
        And the user closes the app and does login again
        When the user accesses to promotions searcher from "dashboard sidebar for the second time"
        Then the user sees the following items in the screen:
            | item                      |
            | location option           |
            | location disabled message |

    @RWPS008
    @web @ios @android @MX @web-done
    @backend(artichoke) @vbank @no-spherica
    #Promotions_Search_and_filter_UX_MX_V06 Case 3.3
    Scenario: Remove checks filter
        Given a user with the following criteria
            | criteria          |
            | active promotions |
        And the user accesses to promotions searcher from "dashboard sidebar"
        And the user selects "starbucks" and "mixed filters" filters
        When the user removes promotion filter
        Then the user sees the following items in the screen:
            | item          | value    |
            | search button | disabled |

    @RWPS009
    @web @ios @android @MX @smokeTest
    @backend(artichoke) @vbank @web-done
    #Promotions_Search_and_filter_UX_MX_V06 Case 4, 4.1
    Scenario: Edit checks selection of search
        Given a user with the following criteria
            | criteria          |
            | active promotions |
        And the user accesses to promotions searcher from "dashboard sidebar"
        And the user filters promotions by "mixed filters"
        When the user edits tags of search
        Then the user sees the following items in the screen:
            | item                       |
            | results header             |
            | back button results header |
            | filter tags                |
            | promotions filtered list   |
            | promotion name             |
            | benefit                    |
            | benefit description        |
            | benefit date               |
            | modality benefit           |

    @RWPS010
    @web @ios @android @MX
    @backend(artichoke) @vbank @web-done
    #Promotions_Search_and_filter_UX_MX_V06 Case 4, 4.2.1
    Scenario: Edit search - remove filters - at least one check
        Given a user with the following criteria
            | criteria          |
            | active promotions |
        And the user accesses to promotions searcher from "dashboard sidebar"
        And the user filters promotions by "mixed filters"
        When the user clears tags with result "1"
        Then the user sees the following items in the screen:
            | item                       | value |
            | results header             |       |
            | back button results header |       |
            | filter tags                |  1    |
            | promotions filtered list   |       |
            | promotion name             |       |
            | benefit                    |       |
            | benefit description        |       |
            | benefit date               |       |
            | modality benefit           |       |

    @RWPS011
    @web @ios @android @MX
    @backend(artichoke) @vbank @web-done
    #Promotions_Search_and_filter_UX_MX_V06 Case 4, 4.2.2
    Scenario: Edit search - remove all filters
        Given a user with the following criteria
            | criteria          |
            | active promotions |
        And the user accesses to promotions searcher from "dashboard sidebar"
        And the user filters promotions by "mixed filters"
        When the user clears tags with result "0"
        Then the user accesses the "promotions landing" screen

    @RWPS012
    @web @ios @android @MX
    @backend(artichoke) @vbank @web-done
    #Promotions_Search_and_filter_UX_MX_V06 Case 4, 4.3
    Scenario: Go back to the promotions landing from filtered results
        Given a user with the following criteria
            | criteria          |
            | active promotions |
        And the user accesses to promotions searcher from "dashboard sidebar"
        And the user filters promotions by "mixed filters"
        When the user goes back to previous page
        Then the user accesses the "promotions landing" screen

    @RWPS013
    @web @ios @android @MX
    @backend(artichoke) @vbank @web-done
    #Promotions_Search_and_filter_UX_MX_V06 Case 4, 4.4
    Scenario: Filtered results - Pagination
        Given a user with the following criteria
            | criteria                  |
            | active promotions         |
            | all promotions categories |
        And the user accesses to promotions searcher from "dashboard sidebar"
        And the user filters promotions by "mixed filters"
        When the user scrolls down to the last result
        Then the user sees the following items in the screen:
            | item                     |
            | promotions filtered list |

    @RWPS014
    @native @ios @android @MX @JIRA.GLOMOGL-20192
    @backend(artichoke) @vbank @manual
    #Promotions_Search_and_filter_UX_MX_V06 Case 5, 5.1
    Scenario: Filter promotions with location option disabled
        Given a user with the following criteria
            | criteria          |
            | active promotions |
        And the user accesses to promotions searcher from "dashboard sidebar"
        When the user filters promotions by "mixed filters"
        Then the user sees the following items in the screen:
            | item                     | value       |
            | results header           |             |
            | back button header       |             |
            | filter tags              |             |
            | promotions filtered list |             |
            | promotion name           |             |
            | benefit                  |             |
            | benefit description      |             |
            | benefit date             |             |
            | modality benefit         |             |
            | distance                 | not visible |

    @RWPS015
    @web @ios @android @MX
    @backend(artichoke) @vbank @web-done
    #Promotions_Search_and_filter_UX_MX_V06 Case 6, 6.1
    Scenario: No results message
        Given a user with the following criteria
            | criteria            |
            | active promotions   |
        And the user accesses to promotions searcher from "dashboard sidebar"
        When the user searches promotions by "starbucks" and "mixed filters" filters
        Then the user sees the following items in the screen:
            | item               |
            | no results message |

    @RWPS016
    @web @ios @android @MX
    @backend(artichoke) @vbank @web-done @vbank-modified
    #Promotions_Search_and_filter_UX_MX_V06 Case Error 1
    Scenario: Error 1 - Filtered results
        Given a user with the following criteria
            | criteria                  |
            | active promotions         |
            | error promotions searcher |
        And the user accesses to promotions searcher from "dashboard sidebar"
        When the user filters promotions by "mixed filters"
        Then the user sees the following items in the screen:
            | item                               |
            | Icon error modal                   |
            | Title error modal                  |
            | Description error modal            |
            | Retry button error modal           |
            | go back button results error modal |

    @RWPS017
    @web @ios @android @MX
    @backend(artichoke) @vbank @web-done @vbank-modified
    #Promotions_Search_and_filter_UX_MX_V06 Case Error 1
    # create sequences GET ,6, 7, 8.yml without promotions with response 500 of /promotions/v0/promotions
    # add in when of all GET path: /promotions/v0/promotions query options
    Scenario: Error 1 - Filtered results - Retry access
        Given a user with the following criteria
            | criteria                  |
            | active promotions         |
            | error promotions searcher |
        And the user accesses to promotions searcher from "dashboard sidebar"
        And the user filters promotions by "mixed filters"
        When the user retries promotions modal error "3" more times
        Then the user sees the following items in the screen:
            | item                               |
            | Icon error modal                   |
            | Title error modal                  |
            | Description error modal            |

    @RWPS018
    @web @ios @android @MX @web-done
    @backend(artichoke) @vbank @no-spherica
    #Promotions_Search_and_filter_UX_MX_V06 Case Error 2
    Scenario: Error 2 - Error loading data
        Given a user with the following criteria
            | criteria                 |
            | active promotions        |
            | error loading promotions |
        And the user accesses to promotions searcher from "dashboard sidebar"
        And the user filters promotions by "mixed filters"
        When the user removes a search
        Then the user sees the following items in the screen:
            | item                               |
            | Icon error modal                   |
            | Title error modal                  |
            | Description error modal            |
            | Retry button error modal           |
            | Go back button results error modal |

    @RWPS019
    @web @ios @android @MX @web-done
    @backend(artichoke) @vbank @no-spherica
    #Promotions_Search_and_filter_UX_MX_V06 Case Error 2
    Scenario: Error 2 - Error loading data - Retry access
        Given a user with the following criteria
            | criteria                 |
            | active promotions        |
            | error loading promotions |
        And the user accesses to promotions searcher from "dashboard sidebar"
        And the user filters promotions by "mixed filters"
        And the user removes a search
        When the user retries promotions modal error "3" more times
        Then the user sees the following items in the screen:
            | item                               |
            | Icon error modal                   |
            | Title error modal                  |
            | Description error modal            |
            | Call bbva button error modal       |
            | Go back button results error modal |

    @RWPS020
    @web @ios @android @MX
    @backend(artichoke) @vbank @web-done
    #Promotions_Search_and_filter_UX_MX_V06 Case Error 2
    Scenario: Error 3 - Error pagination
        Given a user with the following criteria
            | criteria                     |
            | active promotions            |
            | all promotions categories    |
            | error loading promotion list |
        And the user accesses to promotions searcher from "dashboard sidebar"
        And the user filters promotions by "modalities"
        When the user scrolls down to the last result
        Then the user sees the following items in the screen:
            | item                               |
            | results header                     |
            | back button results header         |
            | filter tags                        |
            | promotions filtered list           |
            | error icon tooltip results         |
            | error description tooltip results  |
            | error retry button tooltip results |

    @RWPS021
    @web @ios @android @MX
    @backend(artichoke) @vbank @web-done
    #Promotions_Search_and_filter_UX_MX_V06 Case Error 3
    Scenario: Error 3 - Error Pagination - Retry access
        Given a user with the following criteria
            | criteria                     |
            | active promotions            |
            | all promotions categories    |
            | error loading promotion list |
        And the user accesses to promotions searcher from "dashboard sidebar"
        And the user filters promotions by "modalities"
        And the user scrolls down to the last result
        When the user retries "3" more times in "promotion pagination" error message
        Then the user sees the following items in the screen:
            | item                              |
            | results header                    |
            | back button results header        |
            | filter tags                       |
            | promotions filtered list          |
            | error icon tooltip results        |
            | error description tooltip results |
            | error exit button tooltip results |
