@monthlyStatementEnquiry @flexibleFinancing
Feature: Monthly Statement Enquiry - Card Flexible Financing

    @FMSE001
    @web @ios @android
    @MX @web-done
    @backend(test)
    @vbank
    Scenario: Access to the monthly statement Enquiry - Last Account Status
        Given a user with the following criteria
            | criteria                  |
            | flexible financing otp    |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the monthly statement enquiry
        When the user "consults" the "last account" status
        Then the user sees the following items in the screen:
            | item                                  |
            | Successful image                      |
            | Status Message                        |
            | Cut-off date                          |
            | Download account status report button |

    @FMSE002
    @web @ios @android
    @MX @web-done
    @backend(test)
    @vbank
    Scenario: Access to the monthly statement Enquiry - Other Account Status
        Given a user with the following criteria
            | criteria                  |
            | flexible financing otp    |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the monthly statement enquiry
        When the user "consults" the "other account" status
        Then the user sees the following items in the screen:
            | item                                  |
            | header                                |
            | Successful image                      |
            | Status Message                        |
            | Cut-off date                          |
            | Download account status report button |

    @FMSE003
    @web @ios @android
    @MX @web-done @smokeTest
    @backend(test)
    @vbank
    Scenario: Access to the monthly statement Enquiry - Client With First Account Status Screen
        Given a user with the following criteria
            | criteria                       |
            | flexible financing one account |
        And the user accesses to the "operative" "debit" card product detail
        When the user accesses to the monthly statement enquiry
        Then the user sees the following items in the screen:
            | item                      |
            | header                    |
            | Info first account status |
            | last status account       |
            | Consult Button            |

    @FMSE004
    @web @ios @android
    @MX @web-done
    @backend(test)
    @vbank
    Scenario: Access to the monthly statement Enquiry Screen
        Given a user with the following criteria
            | criteria                         |
            | flexible financing single recibe |
        And the user accesses to the "operative" "debit" card product detail
        When the user accesses to the monthly statement enquiry
        Then the user sees the following items in the screen:
            | item                              |
            | header                            |
            | icon caution                      |
            | Status Account Title              |
            | no account statement button       |
