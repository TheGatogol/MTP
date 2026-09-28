@redirectCallMeBack
Feature: Asistencia Proactiva Oc Meta Segura

    @APA001
    @smokeTest
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Access proactive assistance when exiting the process
        Given a user with the following criteria
            | criteria                        |
            | remote proactive metasegura user |
        And the user accesses to the metasegura offer detail
        And the user accesses to the "quotation" step of the metasegura offer
        When the user closes the current metasegura step
        Then the user sees the following items in the screen
            | item                                  |
            | proactive exit header                 |
            | proactive assistance help text        |
            | proactive assistance specialist text  |
            | proactive assistance call options text|
            | proactive request call button         |
            | proactive schedule call button        |
            | proactive exit process button         |

    @APA002
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: See proactive assistance toast after re-entering from abandon flow
        Given a user with the following criteria
            | criteria                        |
            | remote proactive metasegura user |
        And the user accesses to the metasegura offer detail
        And the user exits the metasegura offer
        And the user accesses the "contract product section" screen
        When the user accesses to the metasegura offer detail
        Then the user sees the following items in the screen
            | item                            |
            | offer detail heading text       |
            | proactive assistance toast      |
            | proactive assistance toast text |
            | proactive assistance toast link |
            | characteristics title           |
            | characteristics                 |
            | benefits title                  |
            | benefits                        |
