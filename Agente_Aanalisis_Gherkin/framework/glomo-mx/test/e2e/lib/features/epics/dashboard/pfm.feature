@dashboard_pfm
Feature: Dashboard Pfm

    @DP001
    @MX @ios @android @web
    @vbank
    @backend(artichoke)
    @manual @JIRA.GLOMOMX-192449
    @smokeTest
    Scenario: Dashboard - Access PFM dashboard from progressbar
        Given a user with the following criteria
            | criteria              |
            | active PFM            |
            | incomes in pfm period |
        When the user accesses PFM dashboard progressbar
        Then the user accesses the "pfm dashboard" screen

    @DP002
    @MX @ios @android @web
    @vbank
    @backend(artichoke)
    @manual @JIRA.GLOMOMX-192449
    Scenario: Dashboard - incomes vs expenses pfm data
        Given a user with the following criteria
            | criteria     |
            | active PFM   |
            | incomes in pfm period |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | Incomes title                 |
            | Incomes amount                |
            | Incomes progress bar          |
            | Expenses title                |
            | Expenses amount               |
            | Expenses progress bar         |
            | Incomes x expenses PFM access |
