@incomeLimits
Feature: Income Limits

    @INL002
    @web @ios @android
    @MX @vbank @web-done
    @backend(test)
    Scenario: View the "Information" screen
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user accesses the information screen
        Then the user sees the following items in the screen
            | item                          |
            | title cash deposit info       |
            | description cash deposit info |
            | content cash deposit info     |
            | accept button                 |

    @INL003
    @web @ios @android
    @MX @vbank @web-done
    @backend(test)
    Scenario: Continue to share the required information
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user accesses the share economic activity step
        Then the user sees the following items in the screen
            | item                        |
            | first step title            |
            | economic activity label out |
            | text area economic activity |
            | amount expected label out   |
            | input amount expected       |
            | income motive label out     |
            | text area motive            |
            | disabled continue button    |

    @INL004
    @web @ios @android
    @MX @vbank @web-done
    @backend(test)
    Scenario: Enter the required information in the "Economic Activity" section
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user enter the required information in economic activity step
        Then the user sees the following items in the screen
            | item                        |
            | first step title            |
            | economic activity label out |
            | text area economic activity |
            | amount expected label out   |
            | input amount expected       |
            | income motive label out     |
            | text area motive            |
            | continue button             |

    @INL005
    @web @ios @android
    @MX @vbank @web-done
    @backend(test)
    Scenario: Continue to the "Proof of Income" section
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user accesses to proof of income step
        Then the user sees the following items in the screen
            | item                             |
            | header second step               |
            | second step title                |
            | proof of income label            |
            | proof of income selector         |
            | continue to declaration disabled |

    @INL006
    @web @ios @android
    @MX @vbank @web-done
    @backend(test)
    Scenario: Enter the required information in the "Proof of Income" section.
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user enters invoices as proof of income
        Then the user sees the following items in the screen
            | item                    |
            | header second step      |
            | second step title       |
            | selector                |
            | invoice one             |
            | invoice two             |
            | invoice three           |
            | continue to declaration |

    @INL007
    @web @ios @android
    @MX @vbank @web-done
    @backend(test)
    Scenario: Continue to the "Agreement" section
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user accesses to agreement step
        Then the user sees the following items in the screen
            | item                                  |
            | container of the proof of income step |
            | close button header                   |
            | expanded agreement step               |
            | checkbox agreement                    |
            | continue to the summary disabled      |

    @INL008
    @web @ios @android
    @MX @vbank @web-done
    @backend(test)
    Scenario: Select the check box for declaring truthful information
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user confirms that the information provided is true
        Then the user sees the following items in the screen
            | item                                  |
            | close button header                   |
            | container of the proof of income step |
            | expanded agreement step               |
            | checkbox agreement                    |
            | continue to the summary               |

    @INL009
    @web @ios @android
    @MX @vbank @web-done
    @backend(test)
    Scenario: View the summary screen with the entered information
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user gets to the confirm summary screen with all steps filled
        Then the user sees the following items in the screen
            | item                                    |
            | container of the economic activity step |
            | container of the proof of income step   |
            | container of the agreement step         |
            | multistep confirm                       |

    @INL010
    @web @ios @android
    @MX @vbank @web-done
    @backend(test)
    Scenario: Confirm the data and see the success screen
        Given a user with the following criteria
            | criteria               |
            | with economic activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user confirms the information and gets to the success screen
        Then the user sees the following items in the screen
            | item                  |
            | success screen header |
            | success screen title  |
            | success screen amount |
            | success screen folio  |
            | notice container      |

    @INL011
    @web @ios @android
    @MX @vbank @web-done
    @backend(test)
    Scenario Outline: See information about <tooltip>
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        And the user accesses the share economic activity step
        When the user accesses information about "<tooltip>"
        Then the user sees the following items in the screen
            | item                       |
            | activity info modal header |
            | activity info modal title  |
            | activity info modal text   |
            | close activity info modal  |
        Examples:
            | tooltip                           |
            | details of your economic activity |
            | reasons for deposits              |

    @INL012
    @web @ios @android
    @MX @vbank @web-done
    @backend(test)
    Scenario Outline: Select and upload <document> receipt
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user enters an "<document>" as proof of income step
        Then the user sees the following items in the screen
            | item                    |
            | header second step      |
            | second step title       |
            | selector                |
            | uploaded document       |
            | continue to declaration |
        Examples:
            | document          |
            | monthly statement |
            | annual statement  |
            | contract          |
            | agreement         |

    @INL013
    @web @ios @android
    @MX @vbank @web-done
    @backend(test)
    Scenario: View information about invoices that need to be uploaded
        Given a user with the following criteria
            | criteria                    |
            | with documents and activity |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user accesses information about the invoices that need to be uploaded
        Then the user sees the following items in the screen
            | item                      |
            | invoice info modal header |
            | modal title invoice info  |
            | modal text invoice info   |
            | list bullet element one   |
            | list bullet element two   |

    @INL014
    @web @ios @android
    @MX @vbank @web-done
    @backend(test) @manual @JIRA.GLOMOMX-270123
    Scenario Outline:  Enter the "Cash Deposits" screen when you have <title>
        Given a user with the following criteria
            | criteria   |
            | <criteria> |
        And the user starts the application at date:
            | day   | 1    |
            | month | 1    |
            | year  | 2026 |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        When the user accesses to income limits option in configure products
        Then the user sees the following items in the screen
            | item                  |
            | title cash deposit    |
            | title amount received |
            | <items>               |
        Examples:
            | title                                           | criteria                           | items                |
            | rejected documents                              | should update documents            | rejected docs        |
            | anomaly in the data form                        | should update information          | upload form          |
            | anomaly in the data form and rejected documents | should update docs and information | upload form and docs |
            | pending application                             | with new request                   | pending application  |
            | application rejected                            | with rejected request              | application rejected |
            | reached a deposit limit                         | with no confirmation               | deposit limit        |

    @INL015
    @web @ios @android
    @MX @vbank @web-done
    @backend(test)
    Scenario: Go to the proof of income section to update documents.
        Given a user with the following criteria
            | criteria                |
            | should update documents |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user accesses to proof of income step to update documents
        Then the user sees the following items in the screen
            | item                      |
            | header second step        |
            | second step title         |
            | proof of income selector  |
            | text doc one not approved |

    @INL016
    @web @ios @android
    @MX @vbank @web-done @smokeTest
    @backend(test)
    Scenario: Delete rejected files and upload new ones
        Given a user with the following criteria
            | criteria                           |
            | should update docs and information |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user updates the form and documents
        Then the user sees the following items in the screen
            | item                    |
            | header second step      |
            | second step title       |
            | selector                |
            | invoice one             |
            | invoice two             |
            | invoice three           |
            | continue to declaration |

    @INL017
    @web @ios @android
    @MX @vbank @web-done
    @backend(test) @smokeTest
    Scenario: Access to economic activity update form
        Given a user with the following criteria
            | criteria                  |
            | should update information |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        And the user accesses to income limits option in configure products
        When the user accesses to economic activity step to update form
        Then the user sees the following items in the screen
            | item                        |
            | first step title            |
            | economic activity label out |
            | text area economic activity |
            | amount expected label out   |
            | input amount expected       |
            | income motive label out     |
            | text area motive            |
            | continue button             |
