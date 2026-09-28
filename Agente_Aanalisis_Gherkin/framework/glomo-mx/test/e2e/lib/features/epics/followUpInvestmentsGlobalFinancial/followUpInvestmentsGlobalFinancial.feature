@followUpInvestmentsGlobalFinancial
Feature: Follow Up Investments Global Financial

    @GFP001
    @MX @backend(test) @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: Patrimonial balance - Consolidated account
        Given a user with the following criteria
            | criteria                    |
            | follow up investments offer |
        And the user accesses to dashboard
        And the user accesses the patrimonial balance page
        When the user access account consolidation
        Then the user sees the following items in the screen
            | item                         |
            | consolidated accounts header |
            | back button                  |
            | consolidated accounts list   |

    @GFP002
    @MX @backend(test) @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: Consolidated section - Evolution subsection
        Given a user with the following criteria
            | criteria                    |
            | follow up investments offer |
        And the user accesses to dashboard
        And the user accesses the patrimonial balance page
        When the user select the evolution period on consolidated tab
        Then the user sees the following items in the screen
            | item                                    |
            | patrimonial balance header              |
            | consolidated section                    |
            | annual summary container                |
            | evolution section                       |
            | evolution period performance with graph |
            | patrimonial distribution section        |

    @GFP003
    @MX @backend(test) @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: Consolidated section - Patrimonial distribution
        Given a user with the following criteria
            | criteria                    |
            | follow up investments offer |
        And the user accesses to dashboard
        And the user accesses the patrimonial balance page
        When the user select a tab from patrimonial distribution section
        Then the user sees the following items in the screen
            | item                             |
            | patrimonial balance header       |
            | consolidated section             |
            | annual summary container         |
            | evolution section                |
            | patrimonial distribution section |

    @GFP004
    @MX @backend(test) @vbank
    @web @web-done
    @ios @android
    @@backend-smoke
    Scenario: Accounts section - See last movements
        Given a user with the following criteria
            | criteria                    |
            | follow up investments offer |
        And the user accesses to dashboard
        And the user accesses the patrimonial balance page
        And the user select accounts tab
        When the user select last movements section
        Then the user sees the following items in the screen
            | item             |
            | movements header |
            | movements date   |
            | movements amount |
            | movements type   |
            | movements name   |

    @GFP005
    @MX @backend(test) @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: Accounts section - Evolution subsection
        Given a user with the following criteria
            | criteria                    |
            | follow up investments offer |
        And the user accesses to dashboard
        And the user accesses the patrimonial balance page
        And the user select accounts tab
        When the user select an evolution period
        Then the user sees the following items in the screen
            | item                              |
            | patrimonial balance header        |
            | accounts tab                      |
            | total value container             |
            | annual summary container accounts |
            | evolution section accounts        |
            | patrimonial distribution accounts |

    @GFP006
    @MX @backend(test) @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: Patrimonial distribution - Active tab
        Given a user with the following criteria
            | criteria                    |
            | follow up investments offer |
        And the user accesses to dashboard
        And the user accesses the patrimonial balance page
        And the user select accounts tab
        And the user select active tab
        When the user selects an instrument
        Then the user sees the following items in the screen
            | item                      |
            | instrument detail header  |
            | instrument detail section |
            | instrument tabs           |
            | period performance        |
            | performance graph         |

    @GFP007
    @MX @backend(test) @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: Search instruments - Active section
        Given a user with the following criteria
            | criteria                    |
            | follow up investments offer |
        And the user accesses to dashboard
        And the user accesses the patrimonial balance page
        And the user select accounts tab
        And the user select active tab
        When the user searches for an instrument by name or code
        Then the user sees the following items in the screen
            | item                     |
            | header search instrument |
            | close search button      |
            | search label instrument  |
            | search input             |
            | instrument list          |

    @GFP008
    @MX @backend(test) @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: Instrument detail - Stock product
        Given a user with the following criteria
            | criteria                    |
            | follow up investments offer |
        And the user accesses to dashboard
        And the user accesses the patrimonial balance page
        And the user select accounts tab
        And the user select product tab
        When the user selects an instrument
        Then the user sees the following items in the screen
            | item                        |
            | instrument detail header    |
            | back button instrument list |
            | instrument detail section   |
            | instrument tabs             |
            | period performance          |
            | performance graph           |

    @GFP009
    @MX @backend(test) @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    @smokeTest
    Scenario: Instruments - Financial products
        Given a user with the following criteria
            | criteria                    |
            | follow up investments offer |
        And the user accesses to dashboard
        And the user accesses the patrimonial balance page
        And the user select accounts tab
        When the user select product tab
        Then the user sees the following items in the screen
            | item                           |
            | product instrument header      |
            | product instrument back button |
            | search label                   |
            | search input instrument        |
            | product instruments list       |

    @GFP010
    @MX @backend(test) @vbank
    @web @web-done
    @ios @android
    @backend-smoke
    Scenario: Full modal error - retry 3 times
        Given a user with the following criteria
            | criteria                    |
            | follow up investments offer |
        And the user accesses to dashboard
        And the user accesses the patrimonial balance page
        And the user select accounts tab
        When the user retries "2" times small help modal
        Then the user sees the following items in the screen
            | item                          |
            | title operation not available |
            | unavailable info              |
            | exit button modal             |
