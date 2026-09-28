@contractProductsSectionDataAuthorization
Feature: Contract Products Section Data Authorization

    @PSDA001
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    Scenario Outline: Enter the Futura Home and see the <case> section
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | <user>                                       |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                     |
            | <case> section           |
            | <case> data query        |
            | <case> button data query |
        Examples:
            | case | user            |
            | NBA  | primary offer   |
            | NBO  | secondary offer |

    @PSDA002
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    Scenario Outline: View the offer as the <case> in the Opportunities section.
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | <user>                                       |
        When the user accesses contract product section
        Then the user sees the following items in the screen
            | item          | offer                                   |
            | banner icon   | contract-products-section-authorization |
            | banner text   | contract-products-section-authorization |
            | banner button | contract-products-section-authorization |
        Examples:
            | case            | user            |
            | primary offer   | primary offer   |
            | secondary offer | secondary offer |

    @PSDA005
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    Scenario: Expand information on employment history and sociodemographics
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | secondary offer                              |
        When the user access contract products section data authorization from nbo
        And the user enter the authorization conditions
        And the user enter the work history and socioeconomic history
        Then the user sees the following items in the screen
            | item                                                       |
            | authorization full modal header                            |
            | authorization full modal close                             |
            | authorization full modal title                             |
            | authorization full modal option work history               |
            | authorization full modal option work history text          |
            | authorization full modal option socioeconomic history      |
            | authorization full modal option socioeconomic history text |

    @PSDA006
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    Scenario: Return to the authorize data query screen from the conditions information
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | secondary offer                              |
        When the user access contract products section data authorization from nbo
        And the user enter the authorization conditions
        And the user enter the work history and socioeconomic history
        And the user closed the authorization conditions
        Then the user sees the following items in the screen
            | item               |
            | image              |
            | file               |
            | checkbox authorize |
            | button consult     |
            | button authorize   |

    @PSDA007
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    Scenario: See the privacy notice information
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | secondary offer                              |
        When the user access contract products section data authorization from nbo
        And the user enter the authorization conditions
        And the user enter the work history and socioeconomic history
        And the user closed the authorization conditions
        And the user enter the privacy notice
        Then the user sees the following items in the screen
            | item                        |
            | privacy notice modal header |
            | privacy notice modal close  |
            | privacy notice modal text   |

    @PSDA008
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    Scenario: Authorize data query after accessing the information modals
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | secondary offer                              |
        When the user access contract products section data authorization from nbo
        And the user performs successful authorization after accessing the information modals
        Then the user sees the following items in the screen
            | item                   |
            | successful header      |
            | successful close       |
            | successful panel       |
            | successful panel folio |
            | successful panel date  |

    @PSDA009
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    Scenario: View exit confirmation modal
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | secondary offer                              |
        When the user access contract products section data authorization from nbo
        And the user accesses the help modal
        Then the user sees the following items in the screen
            | item                          |
            | caution modal header          |
            | caution modal close           |
            | caution modal icon            |
            | caution modal continue button |

    @PSDA010
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    Scenario: Return to the entry point screen after confirming the exit
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | secondary offer                              |
        When the user access contract products section data authorization from nbo
        And the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                  |
            | NBO section           |
            | NBO data query        |
            | NBO button data query |

    @PSDA011
    @MX @vbank
    @ios @android @web
    @backend(test)
    @smokeTest
    @web-done
    Scenario Outline: Authorize data query and see success screen authorize data query from <case>
        Given a user with the following criteria
            | criteria                                     |
            | contract products section data authorization |
            | <user>                                       |
        When the user access contract products section data authorization from <case>
        And the user performs successful authorization
        Then the user sees the following items in the screen
            | item                   |
            | successful header      |
            | successful close       |
            | successful panel       |
            | successful panel folio |
            | successful panel date  |
        Examples:
            | case                  | user                          |
            | nba                   | primary offer                 |
            | nbo                   | secondary offer               |
            | opportunities section | secondary offer opportunities |
