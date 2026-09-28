@billPaymentsHomeSpherica
Feature: Bill Payments Home - mode spherica

    @BPH001
    @vbank @vbank-modified
    @MX @web @android @ios
    @backend(test)
    @web-done @backend-smoke
    @alternate-scenarios-smoke @spherica
    Scenario: Manual Payment detail
        Given a user with the following criteria
            | criteria          |
            | manual payment    |
            | scheduled payment |
        When the user accesses bill payments home from operations and "follows" the onboarding
        And the user selects the manual payment detail option for a service "detail"
        Then the user sees the following items in the screen
            | item                                       |
            | detail stored service - header             |
            | detail stored service - go back            |
            | detail stored service - stored icon        |
            | detail stored service - stored title       |
            | detail stored service - stored description |
            | detail stored service - stored reference   |
            | detail stored service - pay service        |
            | detail stored service - delete service     |

    @BPH002
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @backend-smoke
    @alternate-scenarios-smoke @spherica
    Scenario: Programmed payment detail
        Given a user with the following criteria
            | criteria          |
            | scheduled payment |
        When the user accesses bill payments home from operations and "follows" the onboarding
        And the user selects the scheduled payment "detail" option
        Then the user sees the following items in the screen
            | item                                          |
            | detail stored scheduled - header              |
            | detail stored scheduled - go back             |
            | detail stored scheduled - stored icon         |
            | detail stored scheduled - stored title        |
            | detail stored scheduled - stored description  |
            | detail stored scheduled - stored reference    |
            | detail stored scheduled - programming details |

    @BPH003
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @backend-smoke
    @alternate-scenarios-smoke @spherica
    Scenario: Scheduled payment details
        Given a user with the following criteria
            | criteria          |
            | scheduled payment |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user selects the scheduled payment "detail" option
        When the user selects the programming detail option
        Then the user sees the following items in the screen
            | item                                     |
            | programming detail - header              |
            | programming detail - go back             |
            | programming detail - stored icon         |
            | programming detail - stored title        |
            | programming detail - stored description  |
            | programming detail - stored reference    |
            | programming detail - programming details |
            | programming detail - holder              |
            | programming detail - payment method      |
            | programming detail - operation type      |
            | programming detail - max amount          |
            | programming detail - periodicity         |
            | programming detail - edit scheduling     |

    @BPH004
    @vbank
    @MX @web @android @ios
    @backend(test) @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Confirm the removal of the manual payment
        Given a user with the following criteria
            | criteria            |
            | manual payment only |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user selects the manual payment detail option for a service "detail"
        And the user selects the delete service option
        When the user accepts the modal delete
        Then the user sees the following items in the screen
            | item                                   |
            | pay service or tax - header            |
            | pay service or tax - go back           |
            | pay service or tax - pay new           |
            | pay service or tax - saved-services    |
            | pay service or tax - manual payment    |

    @BPH005
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @smokeTest @backend-smoke @spherica
    Scenario: Cancel the removal of the manual payment
        Given a user with the following criteria
            | criteria          |
            | manual payment    |
            | scheduled payment |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user selects the manual payment detail option for a service "detail"
        And the user selects the delete service option
        When the user cancel the modal
        Then the user sees the following items in the screen
            | item                                       |
            | detail stored service - header             |
            | detail stored service - go back            |
            | detail stored service - stored icon        |
            | detail stored service - stored title       |
            | detail stored service - stored description |
            | detail stored service - stored reference   |
            | detail stored service - pay service        |
            | detail stored service - delete service     |

    @BPH006
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @backend-smoke
    @alternate-scenarios-smoke @spherica
    Scenario: No saved services
        Given a user with the following criteria
            | criteria          |
            | without services  |
        When the user accesses bill payments home from operations and "follows" the onboarding
        Then the user sees the following items in the screen
            | item                                   | value       |
            | pay service or tax - header            |             |
            | pay service or tax - go back           |             |
            | pay service or tax - pay new           |             |
            | pay service or tax - schedule payment  |             |
            | pay service or tax - saved-services    |             |
            | pay service or tax - manual payment    | not visible |
            | pay service or tax - scheduled payment | not visible |
            | pay service or tax - no saved services |             |
            | pay service or tax - pay service       |             |

    @BPH007
    @vbank @vbank-modified
    @MX @web @android @ios
    @backend(test) @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Error request manuals payments
        Given a user with the following criteria
            | criteria                                 |
            | saved services are not loading correctly |
        When the user attempts to access bill payments home
        Then the user sees the following items in the screen
            | item                            |
            | error modal home - header       |
            | error modal home - close        |
            | error modal home - warning icon |
            | error modal home - title        |
            | error modal home - description  |
            | error modal home - retry        |
            | error modal home - exit         |

    @BPH008
    @vbank @vbank-modified
    @MX @web @android @ios
    @backend(test) @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Error to eliminate a manual payment
        Given a user with the following criteria
            | criteria                       |
            | cannot delete a manual payment |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user selects the manual payment detail option for a service "detail"
        And the user selects the delete service option
        When the user accepts the modal delete
        Then the user sees the following items in the screen
            | item                                |
            | error delete service - header       |
            | error delete service - close        |
            | error delete service - warning icon |
            | error delete service - title        |
            | error delete service - description  |
            | error delete service - retry        |
            | error delete service - exit         |

    @BPH009
    @vbank @vbank-modified
    @MX @web @android @ios
    @backend(test) @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Error Manual Payment detail
        Given a user with the following criteria
            | criteria                                |
            | error loading the manual payment detail |
        And the user accesses bill payments home from operations and "follows" the onboarding
        When the user selects the manual payment detail option for a service "detail"
        Then the user sees the following items in the screen
            | item                                       | value       |
            | detail stored service - header             |             |
            | detail stored service - go back            |             |
            | detail stored service - stored icon        |             |
            | detail stored service - stored title       |             |
            | detail stored service - stored description |             |
            | detail stored service - stored reference   |             |
            | detail stored service - pay service        | not visible |
            | detail stored service - schedule payment   | not visible |
            | detail stored service - delete service     | not visible |

    @BPH010
    @vbank @vbank-modified
    @MX @web @android @ios
    @backend(test) @web-done
    @alternate-scenarios-smoke @spherica
    Scenario: Error scheduled payment detail
        Given a user with the following criteria
            | criteria                                         |
            | does not have access to scheduled payment detail |
        And the user accesses bill payments home from operations and "follows" the onboarding
        And the user selects the scheduled payment "detail" option
        When the user selects the programming detail option
        Then the user sees the following items in the screen
            | item                                      |
            | error detail debit service - header       |
            | error detail debit service - close        |
            | error detail debit service - warning icon |
            | error detail debit service - title        |
            | error detail debit service - description  |
            | error detail debit service - retry        |
            | error detail debit service - exit         |

    @BPH011
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Tax Payment
        Given a user with the following criteria
            | criteria            |
            | manual payment only |
        And the user accesses bill payments home from operations and "follows" the onboarding
        When the user selects the manual payment detail option for a service "manual"
        Then the user sees the following items in the screen
            | item                                   |
            | detail stored service - header         |
            | detail stored service - pay service    |
            | detail stored service - delete service |

    @BPH012
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Onboarding Of Welcome
        Given a user with the following criteria
            | criteria         |
            | without services |
        And the user accesses bill payments home from operations and "not follows" the onboarding
        And the user view the onboarding
        When the user follows the tooltip
        Then the user sees the following items in the screen
            | item                                   |
            | pay service or tax - header            |
            | pay service or tax - no saved services |
            | pay service or tax - no services text  |
            | pay service or tax - pay service       |
