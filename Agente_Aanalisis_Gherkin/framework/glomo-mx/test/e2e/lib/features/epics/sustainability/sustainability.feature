@sustainability
Feature: Sustainability

    @SUS002
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    @android
    @ios
    @smokeTest
    @backend-smoke
    Scenario: Show news section
        Given a user with the following criteria
            | criteria                              |
            | sustainability with carbon footprint  |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint overview section
        When the user accesses to news section
        Then the user sees the following items in the screen
            | item           |
            | back button    |
            | header         |
            | news item list |
            | new            |

    @SUS003
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    @android
    @ios
    @backend-smoke
    Scenario: Show a news detail
        Given a user with the following criteria
            | criteria                              |
            | sustainability with carbon footprint  |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint overview section
        And the user accesses to news section
        When the user opens a news item
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | date of new      |
            | title of new     |
            | detail of new    |
            | text description |
            | icon tip         |
            | related tip      |

    @SUS004
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    @android
    @ios
    @backend-smoke
    Scenario: The user sees the related tip of a news
        Given a user with the following criteria
            | criteria                             |
            | sustainability with carbon footprint |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint overview section
        And the user accesses to news section
        And the user opens a news item
        When the user accesses a tip
        Then the user sees a modal with the following elements:
            | item         |
            | header tip   |
            | close button |
            | icon tip     |
            | title tip    |
            | text tip     |

    @SUS005
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    @android
    @ios
    @backend-smoke
    Scenario: See Glossary of terms
        Given a user with the following criteria
            | criteria                              |
            | sustainability with carbon footprint  |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint overview section
        When the user accesses the glossary section
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | searcher       |
            | btn search     |
            | slot to search |
            | wordslist      |

    @SUS006
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    @android
    @ios
    @backend-smoke
    Scenario: Search word in Glossary
        Given a user with the following criteria
            | criteria                              |
            | sustainability with carbon footprint  |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint overview section
        And the user accesses the glossary section
        When the user searches for a word "bms"
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | searcher       |
            | btn search     |
            | slot to search |
            | wordslist      |
            | wordbmsbutton  |

    @SUS007
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    @android
    @ios
    @smokeTest
    @backend-smoke
    Scenario: See complete information of the search performed
        Given a user with the following criteria
            | criteria                              |
            | sustainability with carbon footprint  |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint overview section
        And the user accesses the glossary section
        And the user searches for a word "Biodegradable"
        When the user accesses more information about the word
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | searcher       |
            | btn search     |
            | slot to search |
            | wordslist      |
            | wordbbutton    |

    @SUS008
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    @android
    @ios
    @backend-smoke
    Scenario: Search of a word non-existent
        Given a user with the following criteria
            | criteria                              |
            | sustainability with carbon footprint  |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint overview section
        And the user accesses the glossary section
        When the user searches for a word "Sustainability"
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | searcher       |
            | btn search     |
            | slot to search |
            | errortext      |
            | errormessage   |

    @SUS009
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    @android
    @ios
    @backend-smoke
    Scenario: Select a word from the glossary list and Select another word
        Given a user with the following criteria
            | criteria                              |
            | sustainability with carbon footprint  |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint overview section
        And the user accesses the glossary section
        And the user accesses more information about any word
        When the user select another word
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | searcher       |
            | btn search     |
            | slot to search |
            | wordslist      |

    @SUS010
    @MX
    @vbank
    @vbank-modified
    @backend(test)
    @web
    @android
    @ios
    @smokeTest
    @web-done
    Scenario: A user without footprint sees Sustainability section
        Given a user with the following criteria
            | criteria                              |
            | sustainability user without footprint |
        And the user accesses to sustainability section
        When the user accesses to Sustainability carbon footprint overview section
        Then the user sees the following items in the screen
            | item                 |
            | no footprint section |

    @SUS011
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    @android
    @ios
    Scenario: Access to receipt payment screen
        Given a user with the following criteria
            | criteria                              |
            | sustainability user without footprint |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint overview section
        When the user follows links to pay receipts from no footprint section
        Then the user accesses the "bill payments dashboard" screen

    @SUS012
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    @android
    @ios
    Scenario: The user sees right Sustainability operatives availability
        Given a user with the following criteria
            | criteria                              |
            | sustainability with carbon footprint  |
        And the user accesses to sustainability section
        When the user accesses to Sustainability carbon footprint overview section
        Then the feature has the following operatives with their corresponding status
            | sustainable actions section       | available   |
            | sustainable products info section | unavailable |
            | promotions section                | unavailable |
            | collective achievements           | unavailable |
            | more info section                 | available   |
            | carbon calculation info           | available   |
            | feedback section                  | unavailable |
            | onboarding guided tour            | unavailable |
            | action engagement section         | unavailable |
            | equivalence sharing option        | available   |
            | idea sharing option               | available   |
            | action filtering                  | available   |
            | carbon emissions detail area      | available   |
            | insights info                     | unavailable |

    @SUS013
    @MX
    @vbank
    @backend(test)
    @alternate-scenarios-smoke
    @web
    @android
    @ios
    @web-done
    @backend-smoke
    Scenario: The user returns to sustainability from related tip page
        Given a user with the following criteria
            | criteria                              |
            | sustainability with carbon footprint  |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint overview section
        And the user accesses to related tip of notice at sustainability section and close
        When the user returns to sustainability section screen from sustainability
        Then the user sees the "sustainability section" screen

    @SUS014
    @MX
    @vbank
    @backend(test)
    @alternate-scenarios-smoke
    @web
    @android
    @ios
    @web-done
    @backend-smoke
    Scenario: Exit from Glossary page
        Given a user with the following criteria
            | criteria                              |
            | sustainability with carbon footprint  |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint overview section
        And the user accesses the glossary section
        And the user searches for a word "Sustainability"
        When the user goes back to previous page
        Then the user sees the "sustainability" screen

    @SUS015
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    @android
    @ios
    Scenario: The user sees access home simulator
        Given a user with the following criteria
            | criteria                              |
            | sustainability with carbon footprint  |
        And the user accesses to sustainability section
        And the user accesses to Sustainability carbon footprint overview section
        When the user accesses to the appliance simulator section
        Then the user accesses the "appliance simulator" screen
