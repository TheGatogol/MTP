@kycValidation
Feature: KYC Validation

    @KYC001
    @web @ios @android
    @backend(test)
    @backend-smoke
    @MX
    @vbank
    @web-done
    Scenario: First time questionnaire responder
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the user taps on "add kyc validation" profile button
        And the user accesses the modal privacy notice
        When the user answers the form successfully with "simple case"
        Then the user sees the following items in the screen
            | item                     |
            | success header           |
            | success title            |
            | success reference number |
            | success text information |

    @KYC002
    @web @ios @android
    @backend(test)
    @backend-smoke
    @MX
    @vbank
    @web-done @smokeTest
    Scenario: Branch Invitation
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the user taps on "add kyc validation" profile button
        And the user view the form
        When the user answers the form successfully with "risk"
        Then the user sees the following items in the screen
            | item              |
            | go branch header  |
            | go branch title   |
            | go branch ine     |
            | go branch address |
            | go branch button  |

    @KYC003
    @web @ios @android
    @backend(test)
    @backend-smoke
    @MX
    @vbank
    @web-done
    Scenario: Credits at other banks or institutions, with monthly transactions exceeding $200,000 without selling or buying USD.
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the user taps on "add kyc validation" profile button
        And the user view the form
        When the user answers the form successfully with "credits in other banks and buying and selling USD"
        Then the user sees the following items in the screen
            | item                             |
            | success header                   |
            | success title                    |
            | success reference number         |
            | success text information         |
            | success label reason transfers   |
            | success label credit other banks |

    @KYC004
    @web @ios @android
    @backend(test)
    @backend-smoke
    @MX
    @vbank
    @web-done
    Scenario: Purchase or sale of less than USD 2,000 and relationship with BBVA and other banks with CLABE accounts
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the user taps on "add kyc validation" profile button
        And the user view the form
        When the user answers the form successfully with "less than 2,000 USD and registered clabe"
        Then the user sees the following items in the screen
            | item                              |
            | success header                    |
            | success title                     |
            | success reference number          |
            | success text information          |
            | success label buy or sell dollars |
            | success label clabe               |

    @KYC005
    @web @ios @android
    @backend(test)
    @backend-smoke
    @MX
    @vbank
    @web-done
    Scenario: Purchase or sale of more than USD 2,000 and relationship with BBVA and other banks without a CLABE account
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the user taps on "add kyc validation" profile button
        And the user view the form
        When the user answers the form successfully with "more than USD 2,000 without a CLABE account"
        Then the user sees the following items in the screen
            | item                               |
            | success header                     |
            | success title                      |
            | success reference number           |
            | success text information           |
            | success label amount               |
            | success label bbva and other banks |

    @KYC006
    @web @ios @android
    @backend(test)
    @backend-smoke
    @MX
    @vbank
    @web-done
    Scenario: Electronic signature registration
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the user taps on "add kyc validation" profile button
        And the user view the form
        When the user answers the form successfully with "eSignature"
        Then the user sees the following items in the screen
            | item                     |
            | success header           |
            | success title            |
            | success reference number |
            | success e signature      |
            | success text information |

    @KYC007
    @web @ios @android
    @backend(test)
    @backend-smoke
    @MX
    @vbank
    @web-done
    Scenario: Screen abandonment in the financial habits questionnaire
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the user taps on "add kyc validation" profile button
        And the user view the form
        When the user goes back to previous page
        Then the user accesses the 'profile' screen

    @KYC008
    @web @ios @android
    @backend(test)
    @backend-smoke
    @MX
    @vbank
    @web-done
    Scenario Outline: Incorrect amounts and formats - <scenario>
        Given a user with the following criteria
            | criteria       |
            | kyc validation |
        And the user accesses to profile screen
        And the user taps on "add kyc validation" profile button
        And the user view the form
        When the user enters "<value>"
        Then the user sees the following items in the screen
            | item                 |
            | header questionnaire |
            | <item>               |
        Examples:
            | value                           | item                   | scenario                                                    |
            | a lower amount                  | msg notification       | Incorrect lower amount error                                |
            | a lesser amount in dollars      | msg notification usd   | Incorrect lower amount error USD                            |
            | an invalid CLABE account number | msg notification clabe | Format error with CLABE account having fewer than 18 digits |

    @KYC009
    @web @ios @android
    @backend(test)
    @backend-smoke
    @MX
    @vbank
    @web-done
    Scenario: Special character error
        Given a user with the following criteria
            | criteria                      |
            | kyc validation                |
        And the user accesses to profile screen
        And the user taps on "add kyc validation" profile button
        And the user view the form
        When the user enters "a text with special characters"
        Then the user sees the following items in the screen
            | item                      |
            | header questionnaire      |
            | msg notification          |
            | msg notification textarea |
