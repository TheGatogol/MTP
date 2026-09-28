@myConversationRemote
Feature: My Conversation Remote Banking

    @RMC001
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Viewing conversation list for the first time
        Given a user with the following criteria
            | criteria                                  |
            | remote banking account                    |
            | remote bank account without conversations |
        When the user accesses to my conversations for first time
        Then the user sees the following items in the screen
            | item                 |
            | header dialog        |
            | back button dialog   |
            | picture dialog       |
            | text dialog          |
            | accept button dialog |

    @RMC003
    @MX @backend(test) @vbank
    @smokeTest
    @web @android @ios
    @web-done
    @backend-smoke
    Scenario Outline: Create conversation <case>
        Given a user with the following criteria
            | criteria                |
            | <user>                  |
            | remote banking account  |
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
            | case                                        | user                                    |
            | without attachments                         | my conversations                        |
            | When you already have conversations created | remote bank account with conversations  |

    @RMC004
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Patrimonial user sees the options to attach files
        Given a user with the following criteria
            | criteria                |
            | my conversations        |
            | remote banking account  |
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

    @RMC005
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Edit a conversation in draft status
        Given a user with the following criteria
            | criteria                |
            | my conversations        |
            | remote banking account  |
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

    @RMC006
    @MX @backend(test) @vbank
    @web @android @ios
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Create a conversation in draft status
        Given a user with the following criteria
            | criteria                |
            | my conversations        |
            | remote banking account  |
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

    @RMC007
    @MX @backend(test) @vbank
    @web @android @ios
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Discard a draft message
        Given a user with the following criteria
            | criteria               |
            | remote banking account |
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

    @RMC008
    @MX @backend(test) @vbank
    @web @android @ios
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Discard conversation with draft status
        Given a user with the following criteria
            | criteria               |
            | remote banking account |
            | my conversations       |
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
    @RMC009
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: View banker response
        Given a user with the following criteria
            | criteria               |
            | banker response remote |
        And the user accesses to my conversations operative
        When the user accesses to conversation with "banker" status
        Then the user sees the following items in the screen
            | item               |
            | header search      |
            | back button search |
            | chat               |
            | input              |
            | add button         |

    @RMC010
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: Patrimonial user accesses to resolved conversation
        Given a user with the following criteria
            | criteria                     |
            | resolved conversation remote |
        And the user accesses to my conversations operative
        And the user accesses to conversation with "resolved" status
        When the user retuns to the conversations list
        Then the user sees the following items in the screen
            | item                                    |
            | header                                  |
            | back button                             |
            | info button                             |
            | new conversation button                 |
            | info message                            |

    @RMC011
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

    @RMC012
    @backend(test) @MX
    @vbank @web @android
    @ios @web-done @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Display search with no results
        Given a user with the following criteria
            | criteria               |
            | my conversations       |
            | remote banking account |
        And the user accesses to my conversations operative
        When the user searches a conversation "with no results"
        Then the user sees the following items in the screen
            | item                   |
            | search title           |
            | search query entered   |
            | microillustration      |
            | no results description |

    @RMC013
    @backend(test) @MX
    @vbank @web @android
    @ios @web-done @backend-smoke
    @alternate-scenarios-smoke
    Scenario Outline: Check "<faqs>" frequently asked question in the help section
        Given a user with the following criteria
            | criteria               |
            | my conversations       |
            | remote banking account |
        And the user accesses to my conversations operative
        When the user accesses the "<faqs>" frequently asked question
        Then the user sees the following items in the screen
            | item             |
            | faq header       |
            | faq cross button |
            | faq description  |
            | faq bullets list |
        Examples:
            | faqs   |
            | first  |
            | second |

    @RMC014
    @backend(test) @MX
    @vbank @web @android
    @ios @web-done @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Validate the X button in the textbox on attach file screen
        Given a user with the following criteria
            | criteria               |
            | my conversations       |
            | remote banking account |
        And the user accesses to my conversations operative
        And the user accesses to conversation with "banker" status
        When the user attaches files a conversation in banker status
        Then the user sees the following items in the screen
            | item                 |
            | attach header        |
            | attach file button   |
            | attach notification  |
            | attach submit button |

    @RMC015
    @backend(test) @MX
    @vbank @web @android
    @ios @web-done @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Validate the X button in the textbox on my conversation screen
        Given a user with the following criteria
            | criteria               |
            | my conversations       |
            | remote banking account |
        And the user accesses to my conversations operative
        And the user accesses to conversation with "banker" status
        When the user writes a new message in a conversation with the banker
        Then the user sees the following items in the screen
            | item               |
            | chat               |
            | input              |
            | add button         |
            | header search      |
            | back button search |

    @RMC016
    @backend(test) @MX
    @vbank @web @android
    @ios @web-done @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Validate the help section screen
        Given a user with the following criteria
            | criteria               |
            | my conversations       |
            | remote banking account |
        And the user accesses to my conversations operative
        When the user accesses the help section screen
        Then the user sees the following items in the screen
            | item                   |
            | faq modal title        |
            | faq cross button       |
            | faq modal bullets list |

    @RMC017
    @MX @backend(test) @vbank
    @web @android @ios
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user leaves a conversation
        Given a user with the following criteria
            | criteria               |
            | remote banking account |
            | my conversations       |
        And the user accesses to my conversations operative
        And the user accesses to conversation with "active" status
        When the user retuns to the conversations list
        Then the user sees the following items in the screen
            | item                                    |
            | header                                  |
            | back button                             |
            | info button                             |
            | new conversation button                 |

    @RMC018
    @MX @backend(test) @vbank
    @web @android @ios
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user sends the draft message
        Given a user with the following criteria
            | criteria               |
            | remote banking account |
            | my conversations       |
        And the user accesses to my conversations operative
        And the user accesses to conversation with "draft" status
        And the user writes a new message in a conversation with the banker
        And the user send message a conversation in draft status
        When the user retuns to the conversations list
        Then the user sees the following items in the screen
            | item                                    |
            | header                                  |
            | back button                             |
            | info button                             |
            | new conversation button                 |
            | info message                            |
            | first conversation without draft status |
