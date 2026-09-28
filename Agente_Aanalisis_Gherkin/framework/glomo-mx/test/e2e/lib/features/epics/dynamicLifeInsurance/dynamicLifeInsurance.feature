@dymanicLifeInsurance
Feature: Dynamic Life Insurance

    @DLI002
    @backend(test)
    @MX
    @web @vbank @smokeTest
    @web-done @backend-smoke
    Scenario Outline: Happy path The user answers the health questionnaire - <optionQuestionnaire>
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to dynamic life insurance offer
        And the user accesses to the step "health questionnaire" from the dynamic life insurance operative
        When the user changes the status of the "<optionQuestionnaire>" check
        Then the user sees the following items in the screen
            | item            | value   |
            | check healthy   | enabled |
            | check diabetic  | enabled |
            | continue button | enabled |
        Examples:
            | optionQuestionnaire |
            | healthy             |
            | diabetic            |

    @DLI003
    @backend(test)
    @MX
    @web @vbank
    @web-done
    Scenario: Happy path the user changes the insured amount
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to dynamic life insurance offer
        And the user accesses to the step "health questionnaire" from the dynamic life insurance operative
        When the user accesses to the step "insured amount" from the dynamic life insurance operative
        Then the user sees the following items in the screen
            | item            |
            | amount input    |
            | payment amount  |
            | continue button |

    @DLI004
    @backend(test)
    @MX
    @web @vbank
    @web-done
    Scenario: Happy path the user selects one or more additional coverages
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to dynamic life insurance offer
        And the user accesses to the step "health questionnaire" from the dynamic life insurance operative
        And the user accesses to the step "additional coverages" from the dynamic life insurance operative
        When the user changes the status of the check coverage
        Then the user sees the following items in the screen
            | item            |
            | cards           |
            | payment check   |
            | continue button |

    @DLI005
    @backend(test)
    @MX
    @web @vbank
    @web-done
    Scenario: Happy path the user the user sees insurance offer screen
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        When the user accesses to the step "offer insurance" from the dynamic life insurance operative
        Then the user arrives at the "offer insurance" step

    @DLI006
    @backend(test)
    @MX
    @web @vbank
    @web-done
    Scenario Outline: Happy path the user chooses the frequency of payments - <frequency>
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to the step "offer insurance" from the dynamic life insurance operative
        When the user selects the payment "<frequency>"
        Then the user sees the following items in the screen
            | item           | value           |
            | card annually  | <card_annually> |
            | card monthly   | <card_monthly>  |
            | payment amount | visible         |
        Examples:
            | frequency | card_annually | card_monthly |
            | Anual     | checked       | unchecked    |
            | Mensual   | unchecked     | checked      |

    @DLI007
    @backend(test)
    @MX
    @web @vbank
    @web-done
    Scenario: Happy path the user enters a discount coupon
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to the step "offer insurance" from the dynamic life insurance operative
        When the user enters a discount coupon
        Then the user sees the following items in the screen
            | item           |
            | payment amount |

    @DLI008
    @backend(test)
    @MX
    @web @vbank
    @web-done
    Scenario: The user adds a beneficiary
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to the step "offer insurance" from the dynamic life insurance operative
        And the user accesses to the step "beneficiarios" from the dynamic life insurance operative
        When the user user adds beneficiary
        Then the user arrives at the "payment insurance" step

    @DLI009
    @backend(test)
    @MX
    @web @vbank
    @web-done
    Scenario: The user selects a payment account
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to the step "offer insurance" from the dynamic life insurance operative
        And the user accesses to the step "payment insurance" from the dynamic life insurance operative
        When the user selects an account or TOC
        Then the user arrives at the "terms and conditions" step

    @DLI010
    @backend(test)
    @MX
    @web @vbank
    @web-done
    Scenario: The user acceptes the terms and conditions.
        Given a user with the following criteria
            | criteria          |
            | dynamic insurance |
        And the user accesses to the step "offer insurance" from the dynamic life insurance operative
        And the user accesses to the step "terms and conditions" from the dynamic life insurance operative
        When the user accepts each of the legal controls
        Then the user arrives at the "confirmation" step
