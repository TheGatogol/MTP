@videoSelfie
Feature: Video Selfie

    @VSF001
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test) @backend-smoke
    Scenario: Access the identity validation from user documentation procedures
        Given a user with the following criteria
            | criteria                 |
            | proceedings video selfie |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        When the user accesses to add "ine identification" screen
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | title           |
            | privacy link    |
            | consent check   |
            | close button    |
            | disabled button |

    @VSF002
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test) @backend-smoke
    Scenario: Accept the privacy notice
        Given a user with the following criteria
            | criteria                 |
            | proceedings video selfie |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        And the user accesses to add "ine identification" screen
        When the user accepts the validation consent
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | title           |
            | privacy link    |
            | consent checked |
            | close button    |
            | button enabled  |

    @VSF003
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test) @backend-smoke
    Scenario: Complete the consent screen
        Given a user with the following criteria
            | criteria                 |
            | proceedings video selfie |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        And the user accesses to add "ine identification" screen
        When the user accepts the validation consent and continues
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | title capture step              |
            | consent accepted                |
            | description capture step        |
            | scan ine                        |
            | video selfie                    |
            | recording video                 |
            | expandable step button disabled |

    @VSF004
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test) @backend-smoke
    Scenario: Enter the process to scan the INE
        Given a user with the following criteria
            | criteria                 |
            | proceedings video selfie |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        And the user accesses to add "ine identification" screen
        When the user accepts recommendations to scan ine in video selfie
        Then the user sees the following items in the screen
            | item                                 |
            | header recommendations               |
            | id scan illustration                 |
            | recommendations title                |
            | recommendations close button         |
            | expiration recommendation            |
            | dark background recommendation       |
            | adjust identification recommendation |
            | accept recommendations               |

    @VSF005
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test) @backend-smoke
    Scenario: Exit process after security code
        Given a user with the following criteria
            | criteria                 |
            | proceedings video selfie |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        And the user accesses to add "ine identification" screen
        When the user leaves process in "consent" video selfie screen
        Then the user accesses the "proceedings" screen

    @VSF006
    @vbank
    @MX @android @ios @smokeTest
    @web @web-done
    @backend(test) @backend-smoke
    Scenario: Accept consent for the processing of personal data with dvs xpress
        Given a user with the following criteria
            | criteria                 |
            | proceedings video selfie |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        And the user accesses to add video selfie screen
        When the user accepts the validation consent with dvs xpress
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | title capture step              |
            | consent accepted                |
            | description capture step        |
            | capture identity module         |
            | expandable step button disabled |
