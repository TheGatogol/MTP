@deferredSignature
Feature: Deferred Signature

    @ICNW001
    @ios @android @web
    @MX @backend(test) @vbank
    @web-done
    Scenario: Deferred Signature - show notification detail
        Given a user with the following criteria
            | criteria                  |
            | deferred signature note   |
        When the user accesses "deferred signature" detail notification
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | notification title        |
            | notification date         |
            | notification actions      |
            | notification description  |
            | close notification        |
            | confirm or rejected       |

    @ICNW002
    @ios @android @web
    @MX @backend(test) @vbank
    @web-done
    Scenario: Access to purchase instructions but the date has expired
        Given a user with the following criteria
            | criteria                    |
            | deferred signature expired  |
        And the user accesses center notification
        When the user selects a purchase instruction notification to complete their contract
        Then the user sees the following items in the screen
            | item                        |
            | expired header              |
            | expired header button       |
            | expired title               |
            | expired description         |
            | expired footer button       |

    @ICNW003
    @ios @android @web
    @MX @backend(test) @vbank
    @web-done
    Scenario: User tap on the “x” before saving anything
        Given a user with the following criteria
            | criteria                 |
            | deferred signature note  |
        And the user accesses center notification
        And the user selects a purchase instruction notification to complete their contract
        And the user with purchase instruction reach the contract summary
        When the user interrupts the contract
        Then the user sees the following items in the screen
            | item                     |
            | error title              |
            | error text               |
            | exit button              |
            | continue button          |

    @ICNW004
    @ios @android @web
    @MX @backend(test) @smokeTest @vbank
    @web-done
    Scenario: Structured products - Structured letter
        Given a user with the following criteria
            | criteria                 |
            | deferred signature note  |
        And the user accesses center notification
        And the user selects a purchase instruction notification to complete their contract
        When the user with purchase instruction completes the process
        Then the user sees the following items in the screen
            | item                     |
            | success header           |
            | success header button    |
            | success message          |
            | success footer button    |

    @ICNW005
    @ios @android @web
    @MX @backend(test) @vbank
    @tmpExclude @JIRA.GLOMOMX-254311 @JIRA.GLOMOMX-194987
    Scenario: Structured products - Warrant
        Given a user with the following criteria
            | criteria                    |
            | deferred signature warrant  |
        And the user accesses center notification
        And the user selects a purchase instruction notification to complete their contract
        When the user with purchase instruction completes the process
        Then the user sees the following items in the screen
            | item                        |
            | success header              |
            | success header button       |
            | success message             |
            | success footer button       |
