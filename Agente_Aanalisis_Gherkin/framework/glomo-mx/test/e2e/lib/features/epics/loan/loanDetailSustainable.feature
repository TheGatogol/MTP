@loanDetailSustainable
Feature: Loan Payment Sustainable

    @FHSUC001
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: Validate the loan on the dashboard
        Given a user with the following criteria
            | criteria            |
            | sustainability loan |
        And the user accesses to dashboard
        When the user accesses to personal loan detail
        Then the user sees the following items in the screen
            | item                 |
            | products             |
            | loan sub header text |
            | loan amount label    |

    @FHSUC002
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: Validate the Accept button when clicking on Upload and send invoices
        Given a user with the following criteria
            | criteria            |
            | sustainability loan |
        And the user accesses the credit operative detail
        And the user accesses to upload and send files
        When the user continues from onboarding sustainable
        Then the user sees the following items in the screen
            | item                           |
            | header modal upload invoices   |
            | close upload invoices          |
            | show link pdf                  |
            | button confirm upload invoices |

    @FHSUC004
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: Validate exit button screen Upload and send invoices
        Given a user with the following criteria
            | criteria            |
            | sustainability loan |
        And the user accesses the credit operative detail
        And the user accesses to upload and send files
        When the user accesses to close the upload invoice modal
        Then the user sees the following items in the screen
            | item                      |
            | notification message link |
            | contracting text          |
            | approval text             |
            | preferential rate text    |

    @FHSUC005
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: Validate Learn more link
        Given a user with the following criteria
            | criteria            |
            | sustainability loan |
        And the user accesses the credit operative detail
        When the user accesses to the more information modal
        Then the user sees the following items in the screen
            | item                                 |
            | modal more info                      |
            | modal more info header               |
            | modal more info title                |
            | modal more info steps                |
            | modal more info notification message |

    @FHSUC006
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: Validate the exit button X of the learn more screen
        Given a user with the following criteria
            | criteria            |
            | sustainability loan |
        And the user accesses the credit operative detail
        And the user accesses to the more information modal
        When the user close modal more info
        Then the user sees the following items in the screen
            | item                      |
            | notification message link |
            | contracting text          |
            | approval text             |
            | preferential rate text    |

    @FHSUC007
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done @smokeTest
    Scenario: Validate to exit the invoice upload process
        Given a user with the following criteria
            | criteria            |
            | sustainability loan |
        And the user accesses the credit operative detail
        And the user accesses to upload and send files
        When the user accesses to close the upload invoice modal
        Then the user sees the following items in the screen
            | item                      |
            | notification message link |
            | contracting text          |
            | approval text             |
            | preferential rate text    |

    @FHSUC008
    @web @ios @android
    @vbank @backend(test)
    @MX @web-done
    Scenario: Validate operative Upload and send invoices
        Given a user with the following criteria
            | criteria            |
            | sustainability loan |
        And the user accesses the credit operative detail
        When the user accesses to upload and send files
        Then the user sees the following items in the screen
            | item                         |
            | text header modal onboarding |
            | close upload invoices        |
            | text upload invoices         |
            | button confirm onboarding    |
