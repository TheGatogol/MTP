@checksManagementListSearching @checks
Feature: Checks Management (List & Searching)

    @CML001
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @smokeTest
    Scenario: List & Searching screen appears
        Given a user with the following criteria
            | criteria |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks operatives with checks management active
        When the user selects the checks management option with "activated" service terms
        Then the user sees the following items in the screen
            | item                      |
            | title	                    |
            | back button               |
            | text                      |
            | view all                  |
            | button +                  |
     		| list with detail checks   |

    @CML002
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: List & Searching view all
        Given a user with the following criteria
            | criteria |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        When the user accesses to checks management view all
        Then the user sees the following items in the screen
            | item                       |
            | title	                     |
            | back button                |
            | sidebar                    |
            | searching button           |
            | list with detail checks	 |
            | filter button              |

    @CML003
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Accesses filter check managemen list options screen
        Given a user with the following criteria
            | criteria |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        When the user accesses to checks management tap button filter
        Then the user sees the following items in the screen
            | item                    | value        |
            | Title                   |              |
            | Close button            |              |
            | Date title              |              |
            | Date selector           | not selected |
            | from date picker        | empty date   |
            | to date picker          |              |
            | Amount title            |              |
            | from amount             | empty amount |
            | to amount               | empty amount |
            | Status title            |              |
            | All status radio button | selected     |
            | Deposited radio button  | not selected |
            | Rejected radio button   | not selected |
            | Filter button           | disabled     |
            | Delete filter button    | disabled     |

    @CML004
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario:  Filters by status in the filter check management list options screen and there are result
        Given a user with the following criteria
            | criteria |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks management tap button filter
        When the user filters by accepted status checks
        Then the user sees the following items in the screen
            | item                   |
            | Title                  |
            | Back button            |
            | Order button           |
            | Check Date             |
            | Filter floating button |
            | Sidebar                |
            | Searching Button       |
            | filtered labels        |
            | list with detail checks|
            | Filter button          |

    @CML005
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario:  Filters by date in the filter check management list options screen and not there are results
        Given a user with the following criteria
            | criteria |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks management tap button filter
        When the user filters by last month to checks management
        Then the user sees the following items in the screen
            | item                   |
            | Title                  |
            | Back button            |
            | Check Date             |
            | Filter floating button |
            | Sidebar                |
            | Searching Button       |
            | filtered labels        |
            | Filter button          |

    @CML006
    @web @web-done
    @MX @vbank @backend(test)
    @ios @android
    Scenario:  Filters by from amount in the filter check management list options screen and there are results
        Given a user with the following criteria
            | criteria |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks management tap button filter
        When the user filters by from amount to checks management
        Then the user sees the following items in the screen
            | item                   |
            | Title                  |
            | Back button            |
            | Filtered labels        |
            | Order button           |
            | Filter floating button |

    @CML007
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario:  Filters in the filter check management list options screen and there are no results
        Given a user with the following criteria
            | criteria |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks management tap button filter
        When the user filters with no results to checks management
        Then the user sees the following items in the screen
            | item                   |
            | Title                  |
            | Back button            |
            | Filtered labels        |
            | Filter floating button |

    @CML008
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario:   List & Searching delete filters
        Given a user with the following criteria
            | criteria |
            | pesos account with checks management active |
            | has accepted the management service terms   |
        And the user accesses to checks management tap button filter
        When the user selects the filters and then deselects them
        Then the user sees the following items in the screen
            | item                    | value        |
            | Title                   |              |
            | Close button            |              |
            | Date title              |              |
            | Date selector           | not selected |
            | from date picker        | empty date   |
            | to date picker          |              |
            | Amount title            |              |
            | from amount             | empty amount |
            | to amount               | empty amount |
            | Status title            |              |
            | All status radio button | selected     |
            | Deposited radio button  | not selected |
            | Rejected radio button   | not selected |
            | Filter button           | disabled     |
            | Delete filter button    | disabled     |
