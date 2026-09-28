@zeroPartyData @feedbackClientVoiceConnect
Feature: Zero Party Data

    @ZPD001
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    @smokeTest
    Scenario: Successful hiring zero party data "multistep" from dashboard
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        And the user open the zero party data form
        And the user fills out the "multistep" form
        When the user accesses to dashboard from "multistep"
        Then the user sees the following items in the screen
            | item                  |
            | Banner Image          |
            | Banner Description    |
            | Banner Link           |
            | Banner Close Button   |

    @ZPD002
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: See zero party data hiring offer from opportunities
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        When the user accesses contract product section
        Then the user sees the following items in the screen
            | item  | value           |
            | offer | zero-party-data |

    @ZPD003
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Validate the X button of your lifestyle "multistep"
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        And the user open the zero party data form
        When the user selects exit from your lifestyle screen
        Then the user sees the following items in the screen
            | item                     |
            | header other moment      |
            | close other moment       |
            | icon other moment        |
            | description other moment |

    @ZPD004
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Validate the about you X button "multistep"
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        And the user open the zero party data form
        And the user accesses questionnaire zero party data
        When the user exits the screen "multistep" form about you
        Then the user sees the following items in the screen
            | item                     |
            | header are you sure      |
            | close are you sure       |
            | icon are you sure        |
            | description are you sure |
            | exit are you sure        |
            | link are you sure        |

    @ZPD005
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Validate the modal after contracting the zero party data "multistep" offer
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        And the user open the zero party data form
        And the user fills out the "multistep" form
        When the user accesses to dashboard from "multistep"
        And the user open the zero party data form
        Then the user sees the following items in the screen
            | item                 |
            | header answered      |
            | close answered       |
            | title answered       |
            | description answered |
