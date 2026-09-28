@changePassword
Feature: Change Password

    @CDC001
    @alternate-scenarios-smoke
    @MX @vbank @web-done @backend(test)
    @backend-smoke
    @web @ios @android
    Scenario: The User Goes To Access and Signatures Option
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        When the user closes the access and signatures tips screen
        Then the user sees the following items in the screen
            | item               |
            | header text        |
            | back button        |
            | user and password  |
            | access default     |
            | firms              |

    @CDC002
    @alternate-scenarios-smoke
    @MX @vbank @web-done @backend(test)
    @backend-smoke
    @web @ios @android
    Scenario: The User Goes To Change Password Option and Sees The Password Format
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user closes initial modal in access and signatures screen
        When the user goes to change password option
        Then the user sees a modal with the following elements:
            | item               |
            | header title modal |
            | close button       |
            | considerations     |
            | accept button      |

    @CDC003
    @alternate-scenarios-smoke
    @MX @vbank @web-done @backend(test)
    @backend-smoke
    @web @ios @android
    Scenario: The User goes to Change Password Option
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        When the user accepts the modal
        Then the user sees the following items in the screen
            | item                    | value    |
            | header                  |          |
            | back button             |          |
            | password requirements   |          |
            | help button             |          |
            | current password        | enabled  |
            | new password            | disabled |
            | confirm new password    | disabled |
            | cancel button           |          |
            | continue button         | disabled |

    @CDC004
    @alternate-scenarios-smoke
    @MX @vbank @web-done @backend(test)
    @backend-smoke
    @web @ios @android
    Scenario: The User Goes To Key Recovery Update Help Section
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        When the user goes to password help option
        Then the user sees a modal open

    @CDC005
    @alternate-scenarios-smoke
    @MX @vbank @web-done @backend(test)
    @backend-smoke
    @web @ios @android
    Scenario: Completes The Current password Option
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        When the user enter "correct" current password
        Then the user sees the following items in the screen
            | item                  | value    |
            | new password          | enabled  |
            | password requirements |          |

    @CDC006
    @alternate-scenarios-smoke
    @MX @vbank @web-done @backend(test)
    @backend-smoke
    @web @ios @android
    Scenario Outline: Completes The New password Option With A <typepasssword> Password
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        And the user enter "correct" current password
        When the user enter new "<typepasssword>" password
        Then the user sees the following items in the screen
            | item       | value    |
            | <element>  | <status> |
        Examples:
            | typepasssword                      | element                            | status   |
            | valid                              | confirm new password               | enabled  |
            | invalid                            | new number of incorrect characters |          |
            | equal consecutive numbers invalid  | confirm new password               | disabled |
            | consecutive numbers invalid        | confirm new password               | disabled |

    @CDC007
    @alternate-scenarios-smoke
    @MX @vbank @web-done @backend(test)
    @backend-smoke
    @web @ios @android
    Scenario Outline: Completes The Confirm New Password Option With A <typepasssword> Password
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        And the user enter "correct" current password
        And the user enter new "valid" password
        When the user confirm with "<typepasssword>" password
        Then the user sees the following items in the screen
            | item             | value       |
            | continue button  | <status>    |
        Examples:
            | typepasssword | status   |
            | valid         | enabled  |
            | invalid       | disabled |

    @CDC008
    @alternate-scenarios-smoke
    @MX @vbank @web-done @backend(test)
    @backend-smoke
    @web @ios @android
    Scenario: Continue With Password Change
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        And the user completes form with "correct" current password
        When the user continue with password change
        Then the user sees the following items in the screen
            | item              |
            | header otp        |
            | close button otp  |
            | cancel button otp |
            | accept button otp |
            | main text otp     |

    @CDC009
    @smokeTest
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Completes Changed Password Successfully
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        When the user completes the change password
        Then the user sees the following items in the screen
            | item                          |
            | password changed successfully |

    @CDC010
    @alternate-scenarios-smoke
    @MX @vbank @web-done @backend(test)
    @backend-smoke
    @web @ios @android
    Scenario: The User Cancel The Operation
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        And the user completes form with "correct" current password
        And the user cancel password change
        When the user accepts the modal
        Then the user sees the 'access and signatures' screen

    @CDC011
    @alternate-scenarios-smoke
    @MX @vbank @web-done @backend(test)
    @backend-smoke
    @web @ios @android
    Scenario: The User Continues With Operation
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        And the user completes form with "correct" current password
        And the user cancel password change
        When the user cancels the operation modal
        Then the user sees the 'key recovery update' screen

    @CDC012
    @alternate-scenarios-smoke
    @MX @vbank @web-done @backend(test)
    @backend-smoke
    @web @ios @android
    Scenario: Completes The Current Password Option With Wrong Password
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        When the user enter "wrong" current password
        Then the user sees the following items in the screen
            | item                           |
            | number of incorrect characters |

    @CDC013
    @alternate-scenarios-smoke
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Complete The Password Change With A Wrong Current Password
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        And the user completes form with valid current password
        When the user accepts the error modal
        Then the user sees the 'key recovery update' screen

    @CDC014
    @alternate-scenarios-smoke
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The User Blocked The Password
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        And the user completes form with "valid" current password
        When the user retries change password operation "3" times
        Then the user sees a modal with the following elements:
            | item               |
            | header title modal |
            | close button       |
            | cancel button      |
            | accept button      |

    @CDC015
    @alternate-scenarios-smoke
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: The User Goes To Password Unlock  Option
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        And the user completes form with "valid" current password
        And the user retries change password operation "3" times
        When the user accepts the modal
        Then the user sees the 'access key recovery' screen

    @CDC016
    @alternate-scenarios-smoke
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Completes The New password Option With A Current Password
        Given a user with the following criteria
            | criteria                  |
            | change password available |
        And the user enters the main login and signatures screen
        And the user access to change password screen
        And the user accepts the modal
        And the user completes the change password with the same password
        When the user confirm the password change
        Then the user sees a modal with the following elements:
            | item               |
            | icon error         |
            | considerations     |
            | accept button      |
