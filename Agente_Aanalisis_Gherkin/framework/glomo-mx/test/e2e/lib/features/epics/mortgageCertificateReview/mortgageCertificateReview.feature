@mortgageCertificateReview
Feature: Mortgage Certificate Review and Cancellation

    @MCR002
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    @backend-smoke
    Scenario: What is a mortgage certificate - Modal Validation
        Given a user with the following criteria
            | criteria                     |
            | pending mortgage certificate |
        When the user accesses to mortgage certificate card
        And the user needs more information about its certificate
        Then the user sees a modal with the following elements:
            | item                  |
            | Header                |
            | Title                 |
            | Description           |
            | Bullets List          |
            | Icon Message          |
            | Exit Button           |

    @MCR003
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    @smokeTest
    Scenario: Mortage Certificate Cancellation - Happy Path
        Given a user with the following criteria
            | criteria                     |
            | pending mortgage certificate |
        When the user accesses to mortgage certificate card
        And  the certificate is definitively canceled by the user "successfully"
        Then the user sees the following items in the screen
            | item                   |
            | Header                 |
            | Close Button           |
            | Panel Info             |
            | Date                   |
            | Notification Message   |
            | Exit Button            |

    @MCR004
    @web @ios @android
    @MX
    @backend(test)
    @vbank
    @manual @JIRA.GLOMOGL-20657
    # PDF File open by open document native plugin
    Scenario: See / Share mortgage certificate file
        Given a user with the following criteria
            | criteria                     |
            | pending mortgage certificate |
        When the user accesses to mortgage certificate card
        And the user views its certificate
        Then certificate pdf file is open by user's device

    @MCR005
    @web @ios @android
    @MX
    @backend(test)
    @vbank
    @manual @JIRA.GLOMOGL-20657
    # PDF File open by open document native plugin
    Scenario: See / Share amortization schedule file
        Given a user with the following criteria
            | criteria                     |
            | pending mortgage certificate |
        When the user accesses to mortgage certificate card
        And the user views its certificate
        Then amortization schedule pdf file is open by user's device
