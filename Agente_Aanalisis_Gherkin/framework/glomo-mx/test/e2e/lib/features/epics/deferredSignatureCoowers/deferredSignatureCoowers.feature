@contractSigning
Feature: Contract Signing

    @CSF001
    @ios @android @web
    @MX
    @vbank
    @backend(test)
    @smokeTest
    @web-done
    Scenario: Succesfull signature from notification detail
        Given a user with the following criteria
            | criteria                            |
            | deferred signature coowners success |
        And the user accesses center notification
        And the user accesses "happy path deferred signature coowners" in notification center
        And the user check the summary screen
        When the user completes the happy path of the signing process
        Then the user sees the following items in the screen
            | item                    |
            | review and sign success |
            | button close success    |
            | operation data section  |
            | share link              |
            | succesfull sign         |

    @CSF002
    @ios @android @web
    @MX
    @vbank
    @web-done
    @backend(test)
    Scenario: The user accesses the summary screen
        Given a user with the following criteria
            | criteria                            |
            | deferred signature coowners success |
        And the user accesses center notification
        When the user accesses "summary" in notification center
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | close button          |
            | patrimonial section   |
            | legend terms          |
            | link one              |
            | link two              |
            | link three            |
            | link four             |
            | checkbox terms        |
            | continue button terms |

    @CSF003
    @ios @android @web @web-done
    @MX
    @vbank
    @backend(test)
    @backend-smoke
    Scenario Outline: Validate output when signing process <option>
        Given a user with the following criteria
            | criteria                         |
            | deferred signature beneficiaries |
        And the user accesses center notification
        And the user accesses "deferred signature coowners" in notification center
        When the user leaves the process deferred signature coowners "<option>"
        Then the user accesses the "<option>" screen
        Examples:
            | option              |
            | dashboard           |
            | notification center |

    @CSF004
    @ios @android @web @web-done
    @MX
    @vbank
    @backend(test)
    @backend-smoke
    Scenario: Validate output upon signature expiration
        Given a user with the following criteria
            | criteria                         |
            | deferred signature beneficiaries |
        And the user accesses center notification
        And the user accesses "expired signature" in notification center
        When the user leaves the process deferred signature coowners "dashboard"
        Then the user accesses the "dashboard" screen
