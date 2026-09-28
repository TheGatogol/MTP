@mposOverview
Feature: Mpos Overview

    @MPOS002
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    @backend-smoke
    Scenario: The user accesses the calculator MPOS for first time
        Given a user with the following criteria
            | criteria              |
            | mpos first time access|
        And the user accesses to dashboard
        When the user accesses to calculator mpos for first time
        Then the user sees the following items in the screen
            | item              |
            | onboarding header |
            | onboarding panel  |
            | onboarding button |

    @MPOS003
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    @backend-smoke
    Scenario: The user sees the dashboard MPOS section
        Given a user with the following criteria
            | criteria         |
            | mpos normal user |
        And the user accesses to dashboard
        When the user accesses to dashboard MPOS
        Then the user sees the following items in the screen
            | item                             |
            | payments mpos overview dashboard |
            | carousel                         |
            | button row                       |
            | operations list                  |

    @MPOS004
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    @backend-smoke
    Scenario: The user sees the calculator MPOS section
        Given a user with the following criteria
            | criteria         |
            | mpos normal user |
        And the user accesses to dashboard
        When the user accesses to calculator mpos
        Then the user sees the following items in the screen
            | item         |
            | tpv pad      |
            | panel detail |
            | input number |
            | input text   |

    @MPOS005
    @MX
    @vbank
    @vbank-modified
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: The user tries to access the dashbord MPOS with error merchants
        Given a user with the following criteria
            | criteria         |
            | mpos normal user |
        And the user accesses to dashboard
        When the user accesses to dashboard MPOS
        Then the user sees an error modal open

    @MPOS006
    @MX
    @vbank
    @vbank-modified
    @backend(test)
    @web @android @ios
    @web-done
    @backend-smoke
    Scenario: The user with no merchants accesses the dashboard MPOS
        Given a user with the following criteria
            | criteria                 |
            | mpos no client cash zone |
        And the user accesses to dashboard
        When the user accesses to dashboard MPOS
        Then the user sees the following items in the screen
            | item                             |
            | payments mpos overview dashboard |
            | no client modal                  |

    @MPOS007
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @smokeTest
    @web-done
    Scenario: The user makes a charge
        Given a user with the following criteria
            | criteria         |
            | mpos normal user |
        And the user accesses to dashboard
        And the user accesses to calculator mpos
        And the user submits the charge
        And the user choose "card" payment method
        When the user continues with the charge process
        Then the user sees the following items in the screen
            | item             |
            | products summary |
            | panel operation  |

    @MPOS008
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    @backend-smoke
    Scenario: The user applies VAT by default
        Given a user with the following criteria
            | criteria         |
            | mpos normal user |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user applies VAT by default
        And the user displays the calculator
        When the user submits the charge
        Then the user sees the following items in the screen
            | item                       |
            | vat label                  |
            | card reader payment method |
            | link payment method        |

    @MPOS009
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    @backend-smoke
    Scenario: The user sees payments methods from dashboard
        Given a user with the following criteria
            | criteria         |
            | mpos normal user |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user displays the calculator
        When the user submits the charge
        Then the user sees the following items in the screen
            | item                       |
            | card reader payment method |
            | link payment method        |

    @MPOS010
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @smokeTest
    @web-done
    @backend-smoke
    Scenario: The user generates a payment link
        Given a user with the following criteria
            | criteria         |
            | mpos normal user |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user displays the calculator
        And the user submits the charge
        And the user choose "link" payment method
        When the user continues with the charge process
        Then the user sees the following items in the screen
            | item                       |
            | success panel link receipt |
            | summary link               |
            | cancel link                |

    @MPOS011
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    @backend-smoke
    Scenario: The user adds more products to the calculator
        Given a user with the following criteria
            | criteria         |
            | mpos normal user |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user displays the calculator
        When the user adds products into calculator
        Then the user sees the following items in the screen
            | item         |
            | tpv pad      |
            | panel detail |
            | input number |
            | input text   |

    @MPOS012
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-254768
    Scenario: The user sees the commission for the charge in the summary section link payment
        Given a user with the following criteria
            | criteria         |
            | mpos normal user |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user displays the calculator
        And the user submits the charge
        And the user choose "link" payment method
        When the user opens the commission screen
        Then the user sees the following items in the screen
            | item             |
            | commission modal |
            | list bullet      |

    @MPOS013
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311
    @backend-smoke
    Scenario: Validate access to card and know the payment on the spot
        Given a user with the following criteria
            | criteria     |
            | tap on phone |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        When the user accesses to card learn more
        Then the user sees the following items in the screen
            | item                                      |
            | offer header upgrade top                  |
            | offer panel info header                   |
            | offer more info reader link               |
            | offer continue button                     |
            | offer ask for advisor link                |

    @MPOS014
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    @backend-smoke
    Scenario: The user with no merchants accesses to the OC Cash Zone from Cash Zone
        Given a user with the following criteria
            | criteria                 |
            | mpos no client cash zone |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS for first time
        When the user continues without a client
        Then the user sees the "oc cash zone offer" screen

    @MPOS015
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-254768
    Scenario: The user exit the dashboard MPOS for firts time
        Given a user with the following criteria
            | criteria                 |
            | mpos no client cash zone |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS for first time
        When the user returns to the dashboard from "firts time"
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | greeting     |
            | help button  |
            | sidebar      |

    @MPOS016
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-254768
    Scenario: The user sees the commission for the charge in the summary section
        Given a user with the following criteria
            | criteria         |
            | mpos normal user |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user accesess to settings trade
        When the user accesess to link Pay trade
        Then the user sees the following items in the screen
            | item             |
            | mpos             |
            | link payment     |
            | link card reader |

    @MPOS017
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    @backend-smoke
    Scenario: The user exit method card payment
        Given a user with the following criteria
            | criteria         |
            | mpos normal user |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        And the user displays the calculator
        And the user submits the charge
        And the user choose "card" payment method
        When the user exit modal method payment
        Then the user sees the following items in the screen
            | item                             |
            | payments mpos overview dashboard |
            | carousel                         |
            | button row                       |
            | operations list                  |

    @MPOS018
    @MX
    @vbank
    @backend(test)
    @web
    @android
    @ios
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-254768
    Scenario: The user exit the dashboard MPOS for back button
        Given a user with the following criteria
            | criteria         |
            | mpos normal user |
        And the user accesses to dashboard
        And the user accesses to dashboard MPOS
        When the user returns to the dashboard from "back button"
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | greeting     |
            | help button  |
            | sidebar      |
