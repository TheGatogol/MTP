@profilePostalAddressManagement
Feature: Profile Postal Address Management

    @PAM002
    @web @ios @android
    @backend(test)
    @MX
    @vbank
    @web-done
    Scenario: Close the privacy notice
        Given a user with the following criteria
            | criteria                  |
            | postal address management |
        And the user accesses to add address section
        And the user opens the "privacy" modal
        When the user closes the privacy modal
        Then the user sees the following items in the screen
            | item                    |
            | onboarding header       |
            | full modal close button |
            | onboarding title        |
            | privacy link            |
            | continue button         |
            | exit link               |

    @PAM003
    @web @ios @android
    @backend(test)
    @MX
    @vbank
    @web-done
    Scenario: Access the receipt list
        Given a user with the following criteria
            | criteria                  |
            | postal address management |
        And the user accesses to add address section
        And the user opens the "multistep" modal
        When the user opens the receipt type list
        Then the user sees the following items in the screen
            | item             |
            | electricity bill |
            | telephone bill   |
            | ine              |

    @PAM004
    @web @ios @android
    @backend(test)
    @MX
    @vbank
    @web-done
    Scenario: Upload a receipt
        Given a user with the following criteria
            | criteria                  |
            | postal address management |
        And the user accesses to add address section
        And the user opens the "multistep" modal
        And the user opens the receipt type list and selects the "electricity bill"
        When the user opens the "media source" modal
        Then the user sees the following items in the screen
            | item                    |
            | half modal title        |
            | half modal close button |
            | half modal instructions |
            | take photo              |
            | choose from gallery     |
            | choose a pdf            |

    @PAM005
    @web @ios @android @smokeTest
    @backend(test)
    @MX
    @vbank
    @web-done
    Scenario: Access the Recommendations screen
        Given a user with the following criteria
            | criteria                  |
            | postal address management |
        And the user accesses to add address section
        And the user opens the "multistep" modal
        And the user opens the receipt type list and selects the "electricity bill"
        When the user selects the "take photo" media source from "media source" modal
        Then the user sees the following items in the screen
            | item                    |
            | recommendation title    |
            | full modal close button |
            | status recommendation   |
            | validity recommendation |

    @PAM006
    @web @ios @android
    @backend(test)
    @MX
    @vbank
    @web-done
    Scenario: Upload an INE
        Given a user with the following criteria
            | criteria                  |
            | postal address management |
        And the user accesses to add address section
        And the user opens the "multistep" modal
        When the user opens the receipt type list and selects the "ine"
        Then the user sees the following items in the screen
            | item                     |
            | multistep header         |
            | multistep close button   |
            | multistep title          |
            | multistep instructions   |
            | document type list box   |
            | continue button disabled |

    @PAM007
    @web @ios @android
    @backend(test)
    @MX
    @vbank
    @web-done
    Scenario: Get out of the flow
        Given a user with the following criteria
            | criteria                  |
            | postal address management |
        And the user accesses to add address section
        When the user goes back to previous page
        Then the user accesses the "profile" screen
