@languageSettings
Feature: Language Settings

    @LAS001
    @MX @backend(test) @vbank
    @ios @android @web
    @smokeTest
    @web-done
    Scenario Outline: Change language to <language>
        Given a user with the following criteria
            | criteria               |
            | settings language      |
            | app in english user    |
        When the user accesses to "configuration" item located in the sidebar
        And the user accesses to language settings option in configure products
        And the user selects the "<language>" language option and saves
        Then the user sees the following items in the screen
            | item               |
            | toast notification |
        Examples:
            | language  |
            | English   |
            | Spanish   |
