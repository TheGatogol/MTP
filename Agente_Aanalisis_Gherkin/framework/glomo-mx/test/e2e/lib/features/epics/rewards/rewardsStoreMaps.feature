@rewards @rewardsStoresMap
Feature: Rewards - Stores Map

    @RMOC001
    @android @ios @native
    @MX @backend(artichoke) @no-data-manager
    @vbank @android-done @ios-done
    @tmpExclude @JIRA.GLOMOMX-180582 @JIRA.GLOMOMX-180872
    #Mapa_Comercios_MX_UX_V03.pdf: case 1/1.1
    Scenario: First access the map of Commerce
        Given the user "9988770001" and "micd1122"
        When the user attempts to access to map of commerce from rewards landing
        Then the user sees the following items in the screen
            | item            |
            | allow using app |
            | allows once     |
            | deny            |

    @RMOC002 @smokeTest
    @android @ios @native
    @MX @backend(artichoke) @no-data-manager
    @vbank @android-done @ios-done @tmpExclude @JIRA.GLOMOMX-180872
    #Mapa_Comercios_MX_UX_V03.pdf: case 2
    Scenario: Accept the geolocation permissions
        Given the user "9988770001" and "micd1122"
        And the user attempts to access to map of commerce from rewards landing
        When the user "allows use app" permissions to access
        Then the user sees the following items in the screen
            | item                   |
            | Header                 |
            | Search commerce        |
            | Map of commerce        |
            | Show list of commerces |

    @RMOC003
    @android @ios @web
    @MX @backend(artichoke) @no-data-manager @vbank @manual @JIRA.GLOMOGL-29203
    #Mapa_Comercios_MX_UX_V03.pdf: 2.1.1.1
    Scenario: Selects a commerce on the map
        Given a user logs in with the following info "9988770001" and "micd1122" with the location "19.429325" "-99.129149"
        And the user attempts to access to map of commerce from rewards landing
        When the user selects "QUE ASADO TIENDA DE CARNE" commerce on the map
        Then the user sees the following items in the screen
            | item                     | value       |
            | tooltip - shop           |             |
            | close tooltip            |             |
            | name of commerce         |             |
            | address of commerce      |             |
            | distance to the commerce |             |
            | category                 |             |
            | directions               |             |
            | call                     | not visible |

    @RMOC004
    @android @ios @web @MX @backend(artichoke) @no-data-manager @vbank @manual @JIRA.GLOMOGL-29203
    #Mapa_Comercios_MX_UX_V03.pdf: 2.1.1.1
    Scenario: Access to commerce detail
        Given a user logs in with the following info "9988770001" and "micd1122" with the location "19.43732499999999" "-99.141149"
        And the user attempts to access to map of commerce from rewards landing
        When the user accesses "CUSPIDE" commerce on the map
        Then the user sees the following items in the screen
            | item                      |
            | commerce name - detail    |
            | commerce address - detail |
            | Category title - detail   |
            | Category value - detail   |
            | other info title - detail |
            | url web                   |
            | directions - detail       |
            | call - detail             |

    @RMOC005
    @android @ios @native
    @MX @backend(artichoke) @no-data-manager
    @vbank @ios-done @manual-android @JIRA.GLOMOGL-29203
    @tmpExclude @JIRA.GLOMOMX-180582 @JIRA.GLOMOMX-180872
    #Mapa_Comercios_MX_UX_V03.pdf: case 2.1.4
    Scenario: Access to search a commerce
        Given the user "9988770001" and "micd1122"
        And the user accesses to map of commerce from rewards landing
        When the user accesses to search a commerce
        Then the user sees the following items in the screen
            | item                    | value    |
            | Search engine header    |          |
            | Search engine input     |          |
            | Warning special symbols |          |
            | Categories - title      |          |
            | Categories - list       |          |
            | Categories - view more  |          |
            | Search                  | disabled |
            | Delete filters          |          |

    @RMOC006
    @android @ios @native
    @MX @backend(artichoke) @no-data-manager
    @vbank @ios-done @manual-android @JIRA.GLOMOGL-29203 @JIRA.GLOMOMX-180872
    @tmpExclude @JIRA.GLOMOMX-180582
    #Mapa_Comercios_MX_UX_V03.pdf: case 2.1.2/2.1.2.1
    Scenario: Show list mode when there are commerce to display
        Given the user "9988770001" and "micd1122"
        And the user accesses to map of commerce from rewards landing
        When the user changes to list mode
        Then the user sees the following items in the screen
            | item             |
            | Header           |
            | Search commerce  |
            | List of commerce |
            | Show Map         |
