@additionalCards @digitalPurchase
Feature: Additional Card - Digital Purchase

    @BOVDC001
    @alternate-scenarios-smoke
    @web @android @ios
    @web-done
    @backend-smoke
    @MX @backend(test) @vbank
    Scenario: Access to Additional Card
        Given a user with the following criteria
            | criteria         |
            | digital purchase |
        When the user accesses to additional card detail
        Then the user sees the following items in the screen
            | item                                |
            | inactive additional security module |
            | digital purchase                    |
            | card image                          |

    @BOVDC002
    @smokeTest
    @web @android @ios
    @web-done
    @backend-smoke
    @MX @backend(test) @vbank
    Scenario: Access to Digital Purchase
        Given a user with the following criteria
            | criteria         |
            | digital purchase |
        And the user accesses to additional card detail
        When the user accesses to digital purchase
        Then the user sees the following items in the screen
            | item                     |
            | digital purchase title   |
            | digital purchase info    |
            | exit modal               |

    @BOVDC003
    @alternate-scenarios-smoke
    @web @android @ios
    @MX @manual @JIRA.GLOMOGL-23888
    Scenario: Activate Digital Purchase
        Given a user with the following criteria
            | criteria         |
            | digital purchase |
        And the user select additional card detail
        When the user activate digital purchase
        Then the user sees a modal with the following elements:
            | item                     |
            | digital purchase title   |
            | digital purchase info    |
            | cancel button            |
            | exit button              |

    @BOVDC004
    @alternate-scenarios-smoke
    @web @android @ios
    @MX @manual @JIRA.GLOMOGL-23888
    Scenario: Finish process for digital purchase activation
        Given a user with the following criteria
            | criteria         |
            | digital purchase |
        And the user select additional card detail
        When the user activate digital purchase
        And the user close success activation of digital purchase
        Then the user sees the following items in the screen
            | item                                |
            | inactive additional security module |
            | digital purchase                    |
            | card image                          |
