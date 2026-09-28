@digitalActivation
Feature: Digital Activation

    @DIAC001
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    @vbank @backend(test)
    @smokeTest
    Scenario: The user registers the digital services with OTP and SMS
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the user completes the Digital Activation Flow
        And the user closes success registration modal
        When the user requests the sms key
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | icon          |
            | title         |
            | data and hour |
            | info message  |
            | description   |
            | exit button   |

    @DIAC002
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    @vbank @backend(test)
    Scenario: The user registers the digital services with OTP and SMS whit QR/OCR
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
            | has qr code          |
        And the user accesses to Digital Activation Flow
        And the user closes success registration modal
        When the user requests the sms key
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | icon          |
            | title         |
            | data and hour |
            | info message  |
            | description   |
            | exit button   |

    @DIAC003
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    @vbank @backend(test)
    Scenario: The user registers the digital services with OTP and SMS whit virtual card
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the user completes the Digital Activation Flow
        And the user closes success registration modal
        When the user requests the sms key
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | icon          |
            | title         |
            | data and hour |
            | info message  |
            | description   |
            | exit button   |

    @DIAC004
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    @vbank @backend(test)
    Scenario: The user registers the digital services with OTP and SMS from Landing QR
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
            | has qr code          |
        And the user accesses to Digital Activation Flow
        And the user completes the Digital Activation Flow
        And the user closes success registration modal
        When the user requests the sms key
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | icon          |
            | title         |
            | data and hour |
            | info message  |
            | description   |
            | exit button   |

    @DIAC005
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    @vbank @backend(test)
    Scenario: The user registers the digital services with OTP and SMS without registered email
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the user completes the Digital Activation Flow
        When the user request SMS key
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | icon          |
            | title         |
            | data and hour |
            | info message  |
            | description   |
            | exit button   |

    @DIAC006
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    @vbank @backend(test)
    Scenario: The user pre-enroled registers the digital services with OTP and SMS
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        And the user completes the Digital Activation Flow
        And the user closes success registration modal
        When the user requests the sms key
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | icon          |
            | title         |
            | data and hour |
            | info message  |
            | description   |
            | exit button   |

    @DIAC007
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    @vbank @backend(test)
    Scenario: The user registers the digital services with OTP and SMS with Token
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        When the user completes the Digital Activation Flow
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | icon          |
            | title         |
            | data and hour |
            | info message  |
            | description   |
            | exit button   |

    @DIAC008
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    @vbank @backend(test)
    Scenario: The user registers the digital services with IVR
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        When the user completes the Digital Activation Flow
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | icon          |
            | title         |
            | data and hour |
            | info message  |
            | login button  |

    @DIAC009
    @MX
    @ios @android @web
    @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: User validates elements on the registration page
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        When the user accesses to Digital Activation Flow
        Then the user sees the following items in the screen
            | item                 |
            | exit header button   |
            | panel icon           |
            | panel title          |
            | panel subtitle       |
            | identify title       |
            | identify description |
            | input phone          |
            | phone info           |
            | input card           |
            | input camera card    |
            | card number info     |
            | continue card button |

    @DIAC010
    @MX @smokeTest
    @ios @android @web
    @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: User validates summarized data after entering phone and card number
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        When the user submits their phone and card number
        Then the user sees the following items in the screen
            | item                   |
            | phone label in summary |
            | phone data in summary  |
            | card label in summary  |
            | card data in summary   |

    @DIAC011
    @MX
    @ios @android @web
    @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: User exits registration via modal
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        When the user chooses to exit
        Then the user sees a modal with the following elements:
            | item          |
            | icon          |
            | description   |
            | accept button |
            | cancel button |

    @DIAC012
    @MX
    @ios @android @web
    @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Error displayed for incorrect card number
        Given a user with the following criteria
            | criteria             |
            | debit card cancelled |
        And the user accesses to Digital Activation Flow
        When the user submits an incorrect card number
        Then the user sees a modal with the following elements:
            | item          |
            | error icon    |
            | description   |
