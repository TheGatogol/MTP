@userTransactionAmount
Feature: MTU Limits

    @UTAL001
    @MX @backend(test) @vbank
    @web @android @ios
    @web-done
    @smokeTest
    @backend-smoke
    Scenario: Access the Operation Limits Modification screen
        Given a user with the following criteria
            | criteria         |
            | mtu modification |
        And the user accesses to operational limits settings
        When the user closes the operational limits modal
        Then the user sees the following items in the screen
            | item                       |
            | cells product item amount  |
            | edit limit max transaction |
            | operation limit            |
            | daily amount               |
            | monthly limit              |

    @UTAL002
    @MX @backend(test) @vbank
    @web @android @ios
    @web-done
    @backend-smoke
    Scenario Outline: Access the Operation Limits Modification screen <option>
        Given a user with the following criteria
            | criteria         |
            | mtu modification |
        And the user accesses to operational limits settings
        And the user closes the operational limits modal
        When the user select the help "<option>" limit
        Then the user sees the following items in the screen
            | item                       | visibility  |
            | title modal <option>       |             |
            | description modal <option> |             |
            | button close               | <operation> |
        Examples:
            | option      | operation |
            | transaction | hidden    |
            | operation   | exist     |

    @UTAL003
    @MX @backend(test) @vbank
    @web @android @ios
    @web-done
    Scenario: Save new transaction limit
        Given a user with the following criteria
            | criteria         |
            | mtu modification |
        And the user accesses to operational limits settings
        When the user "edit and save" limit mtu "max transaction"
        Then the user sees the following items in the screen
            | item                    |
            | text info notifications |
            | button understood       |
            | link go notifications   |

    @UTAL004
    @MX @backend(test) @vbank
    @web @android @ios
    @web-done
    Scenario: Return to the "Operating Limits" screen
        Given a user with the following criteria
            | criteria         |
            | mtu modification |
        And the user accesses to operational limits settings
        And the user "edit and save" limit mtu "max transaction"
        When the user closes the MTU modification screen
        Then the user sees the following items in the screen
            | item                       |
            | cells product item amount  |
            | edit limit max transaction |
            | operation limit            |
            | daily amount               |
            | monthly limit              |

    @UTAL005
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Access the "Confirm Modification" notification from the "Notifications" screen.
        Given a user with the following criteria
            | criteria         |
            | mtu modification |
        And the user accesses center notification
        When the user select "modification mtu" detail notification
        Then the user sees the following items in the screen
            | item                     |
            | notification title       |
            | notification description |
            | notification type        |

    @UTAL006
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Confirm limit modification with an error
        Given a user with the following criteria
            | criteria         |
            | mtu modification |
        And the user accesses "error modification mtu" detail notification
        And the user continues the action to confirm or reject mtu modification
        When the user selects action "confirm error" modification
        Then the user sees the following items in the screen
            | item                        |
            | microillustration mtu error |
            | description mtu error       |
            | button mtu error            |

    @UTAL007
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Successfully confirm the limit modification
        Given a user with the following criteria
            | criteria         |
            | mtu modification |
        And the user accesses "confirm" detail notification
        And the user continues the action to confirm or reject mtu modification
        When the user selects action "confirm" modification
        Then the user sees the following items in the screen
            | item                               |
            | microillustration mtu confirmation |
            | subtitle mtu confirmation          |
            | description mtu confirmation       |
            | button mtu confirmation            |

    @UTAL008
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Reject limit modification
        Given a user with the following criteria
            | criteria         |
            | mtu modification |
        And the user accesses "reject mtu" detail notification
        And the user continues the action to confirm or reject mtu modification
        When the user selects action "reject" modification
        Then the user sees the following items in the screen
            | item                      |
            | header mtu rejection      |
            | description mtu rejection |
            | button mtu rejection      |

    @UTAL009
    @MX @backend(test) @vbank
    @web @android @ios
    @web-done
    Scenario: Cancel limit editing
        Given a user with the following criteria
            | criteria         |
            | mtu modification |
        And the user accesses to operational limits settings
        When the user "edit and cancel" limit mtu "max transaction"
        Then the user sees the following items in the screen
            | item          |
            | warning icon  |
            | text info     |
            | info modal    |
            | link continue |

    @UTAL010
    @MX @vbank
    @backend(test)
    @web-done
    @ios @android @web
    Scenario: Validate MTU from interbank transfer SPEI
        Given a user with the following criteria
            | criteria                              |
            | accounts                              |
            | exception transfers with exceeded mtu |
        And the user accesses to transfer from dashboard and selects a origin "principal"
        And the user selects a contact saved with the destination account "SPEI"
        When the user completes the transfer "saved" contact and accesses MTU limit exceeded screen
        Then the user sees the following items in the screen
            | item			                   |
            | header limit exceeded            |
            | microillustration limit exceeded |
            | title limit exceeded             |
            | first paragraph limit exceeded   |
            | second paragraph limit exceeded  |
            | button limit exceeded            |
            | link limit exceeded              |

    @UTAL011
    @MX @vbank
    @backend(test)
    @web-done
    @ios @android @web
    Scenario: Confirm MTU import from interbank transfer SPEI
        Given a user with the following criteria
            | criteria                              |
            | accounts                              |
            | exception transfers with exceeded mtu |
        And the user accesses to transfer from dashboard and selects a origin "principal"
        And the user selects a contact saved with the destination account "SPEI"
        And the user completes the transfer "saved" contact and accesses MTU limit exceeded screen
        When the user confirms the MTU exception
        Then the user sees the following items in the screen
            | item			                           |
            | header confirmation max limit            |
            | microillustration confirmation max limit |
            | title confirmation max limit             |
            | description confirmation max limit       |
            | button confirmation max limit            |
