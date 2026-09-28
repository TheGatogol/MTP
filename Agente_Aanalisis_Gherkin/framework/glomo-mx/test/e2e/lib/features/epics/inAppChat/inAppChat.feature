@inAppChat
Feature: In App Chat

    @IAC001 @JIRA.GLOMOGL-27029 @manual
    @web @ios @android
    @MX @vbank @web-done @backend(test)
    @no-data-manager @smokeTest
    Scenario: InApp Chat messaging Happy Path
        Given the user access the Login Screen
        And the user accesses to the chat in app and continues
        When the user sends "Hello, have a nice day" as message
        Then the user sees the following items in the screen
            | item                   |
            | header chat            |
            | close button chat      |
            | notification welcome   |
            | customer message       |
            | notification ending    |
            | notification completed |
            | input chat             |
            | send button            |

    @IAC002
    @web @ios @android
    @MX @vbank @web-done @backend(test)
    @no-data-manager @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Verify elements of the welcome chat
        Given the user access the Login Screen
        When the user accesses to the chat in app
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | close button     |
            | image message    |
            | title            |
            | info             |
            | list info        |
            | continue button  |

    @IAC003 @JIRA.GLOMOGL-27029 @manual
    @web @ios @android
    @MX @vbank @web-done @backend(test)
    @no-data-manager @alternate-scenarios-smoke
    Scenario: Verify functionality of okay button and elements of the chat
        Given the user access the Login Screen
        When the user accesses to the chat in app and continues
        Then the user sees the following items in the screen
            | item                 |
            | green toast          |
            | header chat          |
            | close button chat    |
            | notification welcome |
            | input chat           |
            | send button          |

    @IAC004
    @web @ios @android
    @MX @vbank @manual @JIRA.GLOMOGL-27029 @backend(test)
    @no-data-manager @alternate-scenarios-smoke
    Scenario: Verify functionality of the exit button
        Given the user access the Login Screen
        And the user accesses to the chat in app and continues
        When the user interrupts the chat
        And the user goes back to previous page
        Then the user accesses the "chat welcome" screen

    @IAC005
    @web @ios @android
    @MX @vbank @web-done @backend(test)
    @no-data-manager @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Verify write in chat message input
        Given the user access the Login Screen
        When the user accesses to the chat in app and continues
        And the user writes a message
        Then the user sees the following items in the screen
        | item                  |
        | header chat           |
        | message in input text |

    @IAC006 @JIRA.GLOMOGL-27029 @manual
    @web @ios @android
    @MX @vbank @web-done @backend(test)
    @no-data-manager @alternate-scenarios-smoke
    Scenario: Verify functionality of send button and sent message
        Given the user access the Login Screen
        And the user accesses to the chat in app and continues
        When the user sends "Hello, have a nice day" as message
        Then the user sees the following items in the screen
            | item                    |
            | notification welcome    |
            | customer message        |

    @IAC007 @JIRA.GLOMOGL-27029 @manual
    @web @ios @android
    @MX @vbank @web-done @backend(test)
    @no-data-manager @alternate-scenarios-smoke
    Scenario: Verify feedback screen elements
        Given the user access the Login Screen
        And the user accesses to the chat in app and continues
        And the user sends "Hello, have a nice day" as message
        When the user accesses to feedback screen
        Then the user sees the following items in the screen
            | item                    |
            | Feedback Left Button    |

    @IAC008 @JIRA.GLOMOGL-27029 @manual
    @web @ios @android
    @MX @vbank @web-done @backend(test)
    @no-data-manager @alternate-scenarios-smoke
    Scenario: Verify functionality of the chat exit button completed
        Given the user access the Login Screen
        And the user accesses to the chat in app and continues
        And the user sends "Hello, have a nice day" as message
        When the user ends the chat
        And the user exits the chat
        Then the user accesses the "chat welcome" screen

    @IAC009
    @web @ios @android
    @MX @vbank @web-done @backend(test)
    @no-data-manager @alternate-scenarios-smoke
    Scenario: Verify elements of the error message
        Given the user access the Login Screen
        When the user accesses to the chat in app and continues
        Then the user sees the following items in the screen
            | item                        |
            | modal error title           |
            | modal error content         |
            | modal error close button    |
