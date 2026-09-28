@myConversation
Feature: My Conversation

    @PMC001
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Viewing conversation list for the first time
        Given a user with the following criteria
            | criteria            |
            | patrimonial account |
            | account             |
        When the user accesses to my conversations for first time
        Then the user sees the following items in the screen
            | item                 |
            | header dialog        |
            | back button dialog   |
            | picture dialog       |
            | text dialog          |
            | accept button dialog |

    @PMC003
    @MX @backend(test) @vbank
    @smokeTest
    @web @android @ios
    @web-done
    @backend-smoke
    Scenario Outline: Create conversation <case>
        Given a user with the following criteria
            | criteria |
            | <user>   |
            | account  |
        And the user accesses to my conversations operative
        When the user makes a conversation with the banker
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | back button               |
            | info button               |
            | new conversation button   |
            | info message              |
        Examples:
            | case                                        | user                        |
            | without attachments                         | patrimonial account         |
            | When you already have conversations created | account with conversations  |

    @PMC004
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Patrimonial user sees the options to attach files
        Given a user with the following criteria
            | criteria                   |
            | account with conversations |
            | account                    |
        And the user accesses to my conversations operative
        And the user accesses to conversation theme page
        When the user tries to add an attachment
        Then the user sees the following items in the screen
            | item                        |
            | header attach type          |
            | back attach type            |
            | camera button attach type   |
            | gallery button attach type  |
            | document button attach type |

    @PMC005
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Edit a conversation in draft status
        Given a user with the following criteria
            | criteria                   |
            | account with conversations |
            | account                    |
        And the user accesses to my conversations operative
        And the user accesses to conversation with "draft" status
        When the user edits a conversation in draft status
        Then the user sees the following items in the screen
            | item                              |
            | header                            |
            | back button                       |
            | info button                       |
            | new conversation button           |
            | info message                      |
            | conversation without draft status |

    @PMC006
    @MX @backend(test) @vbank
    @web @android @ios
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Create a conversation in draft status
        Given a user with the following criteria
            | criteria                   |
            | account with conversations |
            | account                    |
        And the user accesses to my conversations operative
        And the user tries to create a new conversation
        When the user leaves new conversation
        Then the user sees the following items in the screen
            | item                              |
            | header                            |
            | back button                       |
            | info button                       |
            | new conversation button           |
            | info message                      |
            | conversation without draft status |

    @PMC007
    @MX @backend(test) @vbank
    @web @android @ios
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Patrimonial user discards a draft message
        Given a user with the following criteria
            | criteria                   |
            | account with conversations |
            | account                    |
        And the user accesses to my conversations operative
        And the user accesses to conversation with "draft" status
        When the user discards a draft message
        Then the user sees the following items in the screen
            | item                                    |
            | header                                  |
            | back button                             |
            | info button                             |
            | new conversation button                 |
            | info message                            |
            | first conversation without draft status |

    @PMC008
    @MX @backend(test) @vbank
    @web @android @ios
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Discard conversation with draft status
        Given a user with the following criteria
            | criteria                   |
            | account with conversations |
            | account                    |
        And the user accesses to my conversations operative
        And the user accesses to conversation with "draft" status
        When the user discards a draft message
        Then the user sees the following items in the screen
            | item                                    |
            | header                                  |
            | back button                             |
            | info button                             |
            | new conversation button                 |
            | info message                            |
            | first conversation without draft status |

    @PMC009
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: View banker response
        Given a user with the following criteria
            | criteria        |
            | banker response |
        And the user accesses to my conversations operative
        When the user accesses to conversation with "banker" status
        Then the user sees the following items in the screen
            | item               |
            | header search      |
            | back button search |
            | chat               |
            | input              |
            | add button         |

    @PMC010
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: Patrimonial user accesses to resolved conversation
        Given a user with the following criteria
            | criteria                   |
            | account with conversations |
            | account                    |
        And the user accesses to my conversations operative
        When the user accesses to conversation with "resolved" status
        Then the user sees the following items in the screen
            | item               |
            | header search      |
            | back button search |
            | chat               |
            | received text      |

    @PMC011
    @MX @backend(test) @vbank
    @web @android @ios
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Conversation search
        Given a user with the following criteria
            | criteria                   |
            | account with conversations |
            | my talks                   |
        And the user accesses to my conversations operative
        And the user searches a conversation ""
        When the user accesses to a conversation search
        Then the user sees the following items in the screen
            | item               |
            | header search      |
            | back button search |
            | chat               |
            | add button         |
            | input              |

    @PMC012
    @MX @backend(test) @vbank
    @web @android @ios @backend-smoke
    @web-done @alternate-scenarios-smoke
    Scenario: Conversation search without results
        Given a user with the following criteria
            | criteria                   |
            | account with conversations |
            | my talks                   |
        And the user accesses to my conversations operative
        When the user searches a conversation "with no results"
        Then the user sees the following items in the screen
            | item                |
            | search header       |
            | search close button |
            | not found label     |
            | search input        |
            | search button       |

    @PMC013
    @backend(test) @MX
    @vbank @web @android
    @ios @web-done @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Validate the X button in the textbox on attach file screen
        Given a user with the following criteria
            | criteria                   |
            | account with conversations |
            | my conversations           |
        And the user accesses to my conversations operative
        And the user accesses to conversation with "draft" status
        When the user attaches files a conversation in banker status
        Then the user sees the following items in the screen
            | item                  |
            | message input         |
            | message close button  |
