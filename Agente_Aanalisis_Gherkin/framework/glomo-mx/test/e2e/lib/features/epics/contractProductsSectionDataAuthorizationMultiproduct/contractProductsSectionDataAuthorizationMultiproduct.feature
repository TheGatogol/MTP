@contractProductsSectionDataAuthorizationMultiproduct
Feature: Contract Products Section Data Authorization Multiproduct

    @CPSM002
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: View the credit history conditions modal
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | secondary offer                 |
        And the user access to data authorization multiproduct from "nbo"
        When the user access to credit history conditions
        Then the user sees the following items in the screen
            | item                      |
            | credit modal close button |
            | credit modal title        |
            | credit modal content      |

    @CPSM003
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario Outline: Exit and close the <case> modal
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | primary offer                   |
        And the user access to data authorization multiproduct from "nba"
        When the user access to "<case>" and close the modal
        Then the user sees the following items in the screen
            | item                         |
            | credit history link          |
            | demographic history link     |
            | credit history checkbox      |
            | demographic history checkbox |
            | privacy link                 |
            | authorize button             |

        Examples:
            | case                           |
            | credit history conditions      |
            | demographic history conditions |
            | privacy conditions             |

    @CPSM004
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: View the demographic conditions modal
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | secondary offer                 |
        And the user access to data authorization multiproduct from "nbo"
        When the user access to demographic conditions
        Then the user sees the following items in the screen
            | item                           |
            | demographic modal close button |
            | demographic modal title        |
            | demographic modal content      |

    @CPSM005
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: View the privacy notice modal
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | primary offer                   |
        And the user accesses contract product section
        And the user access to data authorization multiproduct from "opportunities section"
        When the user access to privacy notice
        Then the user sees the following items in the screen
            | item                       |
            | privacy modal close button |
            | privacy modal header       |
            | privacy modal content      |

    @CPSM006
    @MX @vbank
    @ios @android @web
    @backend(test)
    @smokeTest
    @web-done
    Scenario Outline: Authorize full data query <option>
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | offer data authorization        |
        And the user accesses contract product section
        And the user access to data authorization multiproduct from "opportunities section"
        And the user selects the authorization with "<option>"
        When the user confirms the authorization
        Then the user sees the following items in the screen
            | item                        |
            | image success authorization |
            | title success authorization |
            | date success authorization  |

        Examples:
            | option                                  |
            | complete                                |
            | credit history                          |
            | employment and sociodemographic history |

    @CPSM007
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Check the box to authorize credit history consultation
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | primary offer                   |
        And the user access to data authorization multiproduct from "nba"
        When the user authorizes the consultation and retrieval of my credit history
        Then the user sees the following items in the screen
            | item                |
            | credit history link |
            | privacy link        |
            | authorize button    |

    @CPSM008
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Exit confirmation modal means
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | primary offer                   |
        And the user access to data authorization multiproduct from "nba"
        When the user exits the authorize query screen
        Then the user sees the following items in the screen
            | item                        |
            | image warning               |
            | button exit authorization   |
            | button return authorization |

    @CPSM009
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Confirm process exit
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | primary offer                   |
        And the user access to data authorization multiproduct from "nba"
        And the user exits the authorize query screen
        When the user confirms the process exit
        Then the user sees the "dashboard" screen

    @CPSM010
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Exit the modal average and return to the query authorization screen
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | primary offer                   |
        And the user access to data authorization multiproduct from "nba"
        And the user exits the authorize query screen
        When the user returns to the authorize query screen
        Then the user sees the following items in the screen
            | item                     |
            | credit history link      |
            | demographic history link |
            | privacy link             |
            | authorize button         |

    @CPSM011
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario Outline: Confirm exit from the process and return to <access>
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | <user>                          |
        And the user access to data authorization multiproduct from "<access>"
        And the user exits the authorize query screen
        When the user confirms the process exit
        Then the user sees the "<section>" screen

        Examples:
            | access                | user            | section                  |
            | nbo                   | secondary offer | dashboard                |
            | nba                   | primary offer   | dashboard                |

    @CPSM012
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Confirm exit from the process and return to contract product section
        Given a user with the following criteria
            | criteria                        |
            | data authorization multiproduct |
            | offer data authorization        |
        And the user accesses contract product section
        And the user access to data authorization multiproduct from "opportunities section"
        And the user exits the authorize query screen
        When the user confirms the process exit
        Then the user sees the "contract product section" screen
