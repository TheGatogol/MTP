@atmLocator @atmBranchLocator
Feature: Branches and ATMs Locator

    @ATM001
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @no-data-manager
    @backend-smoke
    @alternate-scenarios-smoke
    # Once the user has entered from Sidebar entry point (Public or Private) and as a first time the screen must show the introduction advise
    Scenario: User enters Branches and ATMs Locator page for first Time
        Given the user accesses the Login Screen
        When the user enters Branches and ATMs Locator page for the first time
        Then the user sees a modal with the following elements:
            | item                |
            | header title modal  |
            | micro illustration  |
            | title content       |
            | description content |
            | ok button           |

    @ATM004
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @no-data-manager
    @smokeTest
    # Map interaction between list and map to show the list
    Scenario: User wants to show again the full list of Atms and branches near
        Given the user accesses the Login Screen
        And the user enters Branches and ATMs Locator page
        And the user interacts with the google map and navigate into the view
        When the user show list atms and branches again
        Then the user sees the following items in the screen
            | item                         |
            | back to previous button      |
            | header title                 |
            | search address input         |
            | atms branches display toggle |
            | show map button              |
            | atms&branches list           |

    @ATM005
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @no-data-manager
    @alternate-scenarios-smoke
    # Scroll interaction in the list and map view
    Scenario: User scrolls down on the atms and branches list
        Given the user accesses the Login Screen
        And the user enters Branches and ATMs Locator page
        When the user swipe up over the atms and branches list
        Then the user sees the following items in the screen
            | item               |
            | show map button    |
            | atms&branches list |

    @ATM006
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @manual @JIRA.GLOMOGL-20193
    # Scroll interaction in the list and map view
    Scenario: User scrolls down on the atms and branches list when is over the map
        Given the user access the Login Screen
        And the user enters Branches and ATMs Locator page
        When the user swipe down over the atms and branches list and is on the top of the list
        Then the user sees the following items in the screen
            | item                         |
            | back-to-previous-button      |
            | header-title                 |
            | search-address-input         |
            | atms-branches-display-toggle |
            | show the map again button    |
            | atms&branches list           |
            | google interactive map       |

    @ATM007
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @no-data-manager
    @alternate-scenarios-smoke
    # Map interaction moving to another center
    Scenario: User interacts with the map and moves the location to another point in map
        Given the user accesses the Login Screen
        And a moves to the location "19.432608" "-99.133209"
        And the user enters public Branches and ATMs Locator page
        When user swipes "3" times "right" along the map
        Then the user sees the following items in the screen
            | item                                       |
            | back to previous button                    |
            | header title                               |
            | search address input                       |
            | atms branches display toggle               |
            | button to search on this new area is shown |
            | google interactive map                     |

    @ATM008
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @no-data-manager
    @alternate-scenarios-smoke
    # Map interaction moving to another center
    Scenario: User interacts with the map and moves the location to another point in map and search in the new area
        Given the user accesses the Login Screen
        And a moves to the location "19.432608" "-99.133209"
        And the user enters public Branches and ATMs Locator page
        And user swipes "3" times "right" along the map
        When the user starts a search in this area
        Then the user sees the following items in the screen
            | item                         |
            | back to previous button      |
            | header title                 |
            | search address input         |
            | atms branches display toggle |
            | google interactive map       |
            | atms&branches list           |

    @ATM009
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @manual @JIRA.GLOMOGL-20414
    # Map interaction moving to another center with no nearby results
    Scenario: User interacts with the map and moves the location to another point in map and search in the new area but no nearby pois
        Given a user with the following criteria
            | criteria                   |
            | active feedback            |
            | not nearby registered pois |
        And the user accesses the Login Screen
        And the user enters Branches and ATMs Locator page
        And is in different centered location on the map
        When the user starts a search in this area
        Then the user sees the following items in the screen
            | item                                                                                     |
            | back-to-previous-button                                                                  |
            | header-title                                                                             |
            | search-address-input                                                                     |
            | atms-branches-display-toggle                                                             |
            | google-interactive-map                                                                   |
            | a toast is shown with the message of no current results nearby the new centered location |

    @ATM010
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @no-data-manager
    @backend-smoke
    @alternate-scenarios-smoke
    # Using the search input to move to a different location
    Scenario: User interacts with the Search Input to change address location
        Given the user accesses the Login Screen
        When the user enters search place page from Branches and ATMs Locator page
        Then the user sees the following items in the screen
            | item                   |
            | header title           |
            | close modal button     |
            | search address input   |
            | results view container |
            | powered by google mark |

    @ATM011
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @no-data-manager
    @backend-smoke
    @alternate-scenarios-smoke
    # Using the search input to move to a different location - searching
    Scenario: User interacts with the Search Input to change address location and show the search coincidences
        Given the user accesses the Login Screen
        And the user enters search place page from Branches and ATMs Locator page
        When the user starts typing on the search input the desire location address
        Then the user sees the following items in the screen
            | item         | address format                              |
            | list address | searched term, Colony, City, State, Country |

    @ATM012
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @no-data-manager
    @backend-smoke
    @alternate-scenarios-smoke
    # Using the search input to move to a different location - selecting the result
    Scenario: User interacts with the Search Input to change address location to a selected item on the suggested locations list
        Given the user accesses the Login Screen
        And the user enters search place page from Branches and ATMs Locator page
        And the user starts typing on the search input the desire location address
        When the user selects one of the items on the list
        Then the user sees the following items in the screen
            | item                                                              |
            | the map changes its centered location to the new selected address |
            | atms&branches swipeable list                                      |

    @ATM013
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @no-data-manager
    @backend-smoke
    @alternate-scenarios-smoke
    # Using the search input to move to a different location - clearing the search input
    Scenario: User interacts with the Search Input to change address location and clear the entered text
        Given the user accesses the Login Screen
        And the user enters search place page from Branches and ATMs Locator page
        And the user starts typing on the search input the desire location address
        When the user uses the cross button to delete the entered words to reset the input
        Then the user sees the following items in the screen
            | item                   |
            | results view container |

    @ATM014
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @no-data-manager
    @backend-smoke
    @alternate-scenarios-smoke
    # Using the search input to move to a different location - no suggested addresses locations
    Scenario: User interacts with the Search Input to change address location but no suggested addresses locations is shown
        Given the user accesses the Login Screen
        And the user enters search place page from Branches and ATMs Locator page
        When the user enters a non valid location text
        Then the user sees the following items in the screen
            | item                              |
            | no results found image            |
            | no results found description text |

    @ATM015
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @no-data-manager
    @backend-smoke
    @alternate-scenarios-smoke
    # Using the search input to move to a different location but no near pois aviable
    Scenario: User interacts with the Search Input to change to a valid address but no near pois showed
        Given the user accesses the Login Screen
        And the user enters search place page from Branches and ATMs Locator page
        And the user starts typing on the search input the desire location address with no near pois
        When the user selects one of the items on the list but no near pois were found
        Then the user sees the following items in the screen
            | item                              |
            | no results found image            |
            | no results found description text |

    @ATM016
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    # Map interaction select a branch point while user is in the map
    Scenario: User interacts with the map and selects a branch point
        Given a user with the following criteria
            | criteria         |
            | foreign accounts |
            | glomo help       |
        And the user access the Login Screen
        And a moves to the location "19.432608" "-99.133209"
        And the user enters Branches and ATMs Locator page
        When the user wants to know the poi detail "true"
        Then the user sees the following items in the screen
            | item                 |
            | branch card          |
            | branch name card     |
            | branch distance card |
            | share button card    |
            | route button card    |

    @ATM017
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    # Map interaction select a branch card when user select a branch point
    Scenario: User interacts with a branch point and selects the branch card
        Given a user with the following criteria
            | criteria         |
            | foreign accounts |
            | glomo help       |
        And the user accesses the Login Screen
        And a moves to the location "19.432608" "-99.133209"
        When the user enters branch detail page from map
        Then the user sees the following items in the screen
            | item                          |
            | branch name                   |
            | branch distance               |
            | branch estimated waiting time |
            | branch schedule               |
            | branch atms info              |
            | share button                  |
            | route button                  |

    @ATM018
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @no-data-manager
    @backend-smoke
    @alternate-scenarios-smoke
    # List interaction to see branch detail from list item
    Scenario: User interacts with the list and select a branch from the list
        Given the user accesses the Login Screen
        And a moves to the location "19.432608" "-99.133209"
        When the user enters branch detail page from list
        Then the user sees the following items in the screen
            | item                          |
            | branch name                   |
            | branch distance               |
            | branch estimated waiting time |
            | branch schedule               |
            | branch atms info              |
            | share button                  |
            | route button                  |

    @ATM019
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254621
    @no-data-manager
    @backend-smoke
    @alternate-scenarios-smoke
    # Branch detail interaction with operations buttons
    Scenario: User interacts with branch detail and wants know the route
        Given the user accesses the Login Screen
        And a moves to the location "19.432608" "-99.133209"
        And the user enters branch detail page from list
        When the user wants to know the route to the branch
        Then the user sees a modal with the following elements:
            | item          |
            | warning modal |

    @ATM020
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @no-data-manager
    @alternate-scenarios-smoke
    # Map options interaction with atms and branches toggle
    Scenario: User interacts with map filters and wants to hide branches
        Given the user accesses the Login Screen
        And a moves to the location "19.432608" "-99.133209"
        And the user enters public Branches and ATMs Locator page
        When the user hides all nearby branches
        Then the user sees the following items in the screen
            | item        |
            | atms points |

    @ATM021
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @no-data-manager
    @backend-smoke
    @alternate-scenarios-smoke
    # Map options interaction with atms and branches toggle
    Scenario: User interacts with map filters and wants to hide atms
        Given the user accesses the Login Screen
        And a moves to the location "19.432608" "-99.133209"
        And the user enters public Branches and ATMs Locator page
        When the user hides all nearby atms
        Then the user sees the following items in the screen
            | item            |
            | branches points |

    @ATM022
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @manual @JIRA.GLOMOGL-20414
    # Map options interaction with atms and branches toggle
    Scenario: User interacts with map filters and wants to hide both atms and branches points
        Given the user accesses the Login Screen
        And the user enters Branches and ATMs Locator page
        When the user want to hide both atms and branches
        Then the user sees the following items in the screen
            | items                                                                   |
            | a toast is shown with the message of at least one option must be active |

    @ATM023
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    # Map interaction with points shown
    Scenario: User interacts between points shown in the map
        Given a user with the following criteria
            | criteria         |
            | foreign accounts |
            | glomo help       |
        And the user accesses the Login Screen
        And a moves to the location "19.432608" "-99.133209"
        And the user enters private Branches and ATMs Locator page
        And the user hides all nearby branches
        And the user wants to know the poi detail "true"
        When the user selects another point in the map
        Then the user sees the following items in the screen
            | item                           |
            | card with branch or atm detail |

    @ATM024
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done
    @no-data-manager
    @alternate-scenarios-smoke
    @backend-smoke
    # List interaction to see branch detail from list item
    Scenario: User interacts with the nearby pois list inside a branch detail
        Given the user accesses the Login Screen
        And a moves to the location "19.432608" "-99.133209"
        And the user enters branch detail page from list
        When the user enters a branch or atm detail from detail list
        Then the user sees the following items in the screen
            | item                          |
            | branch name                   |
            | branch distance               |
            | branch estimated waiting time |
            | branch schedule               |
            | share button                  |
            | route button                  |

    @ATM025
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254621 @alternate-scenarios-smoke
    Scenario: User interacts with the ATM detail and wants to know the Route
        Given a user with the following criteria
            | criteria         |
            | foreign accounts |
            | glomo help       |
        And the user accesses the Login Screen
        And a moves to the location "19.432608" "-99.133209"
        And the user enters branch detail page from map
        When the user wants to know the route to the branch
        Then the user sees a modal with the following elements:
            | item          |
            | warning modal |

    @ATM026
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: User accesses the search screen and closes it from the public area.
        Given the user accesses the Login Screen
        And the user enters public Branches and ATMs Locator page
        And the user accesses to private "searchPlace"
        When the user closes the search screen
        Then the user sees the "atm locator" screen

    @ATM027
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @vbank-modified
    @web-done @smokeTest
    Scenario: User sees an error modal in the service
        Given a user with the following criteria
            | criteria         |
            | foreign accounts |
            | glomo help       |
        And the user accesses the Login Screen
        When the user enters private Branches and ATMs Locator page
        Then the user sees a modal open
