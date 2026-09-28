@productDetailInsurance @productDetail
Feature: Product detail Insurance

    @PDI001
    @MX @vbank @web-done @backend(test) @glomo
    @web @ios @android @backend-smoke
    Scenario Outline: Insurance product detail screen - <status>
        Given a user with the following criteria
            | criteria               |
            | has <status> insurance |
        When the user accesses the "<status>" insurance product detail
        Then the user sees the following items in the screen
            | item                     | value                    |
            | Back button              |                          |
            | Header title             |                          |
            | Product title            |                          |
            | Policy status            | <is_visible_status>      |
            | Policy number            |                          |
            | Policy number label      |                          |
            | Cost                     |                          |
            | Cost label               |                          |
            | Cost help icon           |                          |
            | Payment frequency label  |                          |
            | Payment frequency        |                          |
            | Certificate number label | <is_visible_certificate> |
            | Certificate number       | <is_visible_certificate> |
            | Insurance detail link    |                          |
            | Validity title           | <is_visible_validity>    |
            | End of validity label    | <is_visible_validity>    |
            | End of validity          | <is_visible_validity>    |
            | Type of renovation label | <is_visible_validity>    |
            | Type of renovation       | <is_visible_validity>    |
            | Information box          |                          |

        Examples:
            | status         | is_visible_status | is_visible_certificate | is_visible_validity |
            | active         | not visible       | not visible            | visible             |
            | single payment | visible           | not visible            | not visible         |

    @PDI002
    @MX @vbank @web-done @backend(test) @glomo
    @web @ios @android @backend-smoke
    Scenario: User consults costs tooltip
        Given a user with the following criteria
            | criteria             |
            | has active insurance |
        When the user accesses the "active" insurance product detail
        And the user selects the help icon
        Then the user sees a modal with the following elements:
            | item          |
            | Help icon     |
            | title         |
            | description   |

    @PDI003
    @MX @vbank @web-done @backend(test) @glomo
    @web @ios @android @backend-smoke
    Scenario: Navigation between detail insurance screens and cost screen
        Given a user with the following criteria
            | criteria             |
            | has active insurance |
        When the user accesses the "active" insurance product detail
        And the user selects the help icon
        And the user closes the modal
        Then the user accesses the "Product Detail Insurance" screen

    @PDI004
    @MX @vbank @web-done @backend(test)
    @web @ios @android @backend-smoke
    Scenario: User consults costs tooltip in product detail insurance
        Given a user with the following criteria
            | criteria             |
            | has insurance policy |
        And the user accesses the "active" insurance product detail
        And the user selects the help icon
        When the user cancels the operation modal
        Then the user accesses the "Product Detail Insurance" screen

    @PDI005
    @MX @backend(test) @vbank @glomo
    @ios @android @web
    @smokeTest @backend-smoke
    @web-done
    Scenario: Product Detail Insurance active - Validate more info screen
        Given a user with the following criteria
            | criteria               |
            | has active insurance   |
        And the user accesses the "active" insurance product detail
        When the user accesses to the "active" insurance product detail more info
        Then the user sees the following items in the screen
            | item                       |
            | Header                     |
            | Back button                |
            | Main title                 |
            | Insurance Name             |
            | Policy number              |
            | Policy link                |
            | Title due date             |
            | Start date                 |
            | Due date                   |
            | Renewal type               |
            | Participants title         |
            | Participants name          |
            | Cost and commissions title |
            | Frequency type             |
            | Annual cost                |
            | Help icon button           |

    @PDI006
    @ios @android @native
    @MX @manual @JIRA.GLOMOGL-26754
    Scenario:  User copies policy or certificate number
        Given a user with the following criteria
            | criteria             |
            | has active insurance |
        And the user accesses the "active" insurance product detail
        When the user accesses to the "active" insurance product detail more info
        And the user copies number policy or certificate number
        Then the user sees the confirmation toast

    @PDI007 @JIRA.GLOMOGL-20657 @manual
    @web @ios @android
    @MX @!vbank @backend(test)
    @web-done
    Scenario: The user consults his insurance policy from product detail
        Given a user with the following criteria
            | criteria             |
            | has active insurance |
        And the user accesses the "active" insurance product detail
        When the user download the policy from "product detail"
        Then the user sees the following items in the screen:
            | item                       |
            | code sing text             |
            | exit sing button           |
            | accept sing button         |
            | cancel sing button         |

    @PDI008 @JIRA.GLOMOGL-20657 @manual
    @web @ios @android
    @MX @!vbank @backend(test)
    @web-done
    Scenario: The user consults his insurance policy from more info
        Given a user with the following criteria
            | criteria             |
            | has active insurance |
        And the user accesses to the "active" insurance product detail more info
        When the user consults his insurance policy from "more info"
        Then the user sees the following items in the screen:
            | item                       |
            | code sing text             |
            | exit sing button           |
            | confirm sing button        |
            | cancel sing button         |

    @PDI009
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke @backend-smoke
    Scenario: User exits help modal
        Given a user with the following criteria
            | criteria                       |
            | product detail insurance       |
            | has single payment insurance   |
        When the user accesses the "single payment" insurance product detail
        And the user selects the help icon
        And the user cancels the operation modal
        Then the user sees the following items in the screen:
            | item                  |
            | product title         |
            | cost help icon        |
            | payment frequency     |
            | insurance detail link |
            | Information box       |
