@inAppCrm
Feature: In App Crm

    @INA001
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-141435
    @smokeTest
    @android-done @ios-done
    Scenario: User access In App screen
        Given a user with the following criteria
            | criteria   |
            | in app crm |
        When the user is in the In App Crm screen
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | exit button   |
            | content       |
            | accept button |

    @INA002
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-141435
    @android-done @ios-done
    Scenario Outline: User access the dashboard from the "<case>"
        Given a user with the following criteria
            | criteria   |
            | in app crm |
        And the user is in the In App Crm screen
        When the user access the dashboard with "<button>"
        Then the user accesses the "dashboard" screen
        Examples:
            | case              | button |
            | exit button       | exit   |
            | understand button | accept |

    @INA003
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-141435
    @android-done @ios-done
    Scenario Outline: User access when In App doesn't exist <case>
        Given a user with the following criteria
            | criteria      |
            | no in app crm |
        When the user access dashboard without in app crm
        Then the user sees the following items in the screen
            | item         |
            | products     |
            | cards        |
            | icon Home    |
            | icon Heart   |
            | icon Add     |
            | icon Mail    |
            | icon Contact |
        Examples:
            | case      |
            | error 204 |
            | error 500 |

    @INA004
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: User accesses the beneficiary screen
        Given a user with the following criteria
            | criteria             |
            | in app advanced more |
        And the user accesses to In App advanced
        When the user accesses to the In App beneficiaries screen
        Then the user sees the following items in the screen
            | item               |
            | welcome modal icon |
            | recomendation      |
            | description        |
            | privacy link       |
            | continue           |

    @INA005
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: User validates different "<operations>"
        Given a user with the following criteria
            | criteria             |
            | in app advanced more |
        When the user accesses to In App advanced
        And the user displays an informative message
        Then the user sees the following items in the screen
            | item             |
            | info modal close |
            | info buton modal |
            | info panel modal |
            | info list modal  |

    @INA006
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: User validates the screen we want to get to know you better
        Given a user with the following criteria
            | criteria              |
            | inap advanced crm two |
        When the user accesses to In App advanced
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | message            |
            | link               |
            | accept button      |
            | description info   |
            | footer button link |

    @INA007
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: User validates different "<operations>" 2
        Given a user with the following criteria
            | criteria          |
            | inap advanced crm |
        And the user accesses to In App advanced
        When the user views the In App privacy notice
        Then the user sees the following items in the screen
            | item                    |
            | modal button alert      |
            | modal image alert       |
            | modal title alert       |
            | modal description alert |

    @INA008
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: User accesses the beneficiary screen 2
        Given a user with the following criteria
            | criteria         |
            | in app mandatory |
        When the user accesses to In App advanced
        And the user accesses to the In App beneficiaries screen
        Then the user sees the following items in the screen
            | item               |
            | welcome modal icon |
            | recomendation      |
            | description        |
            | privacy link       |
            | continue           |

    @INA009
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: The user views mandatory inApp
        Given a user with the following criteria
            | criteria              |
            | inap advanced crm two |
        When the user accesses to In App advanced
        And the user accesses to know more from In App screen
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | accept button    |
            | description info |

    @INA010
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: The user views dashboard from inApp
        Given a user with the following criteria
            | criteria          |
            | inap advanced crm |
        And the user accesses to In App advanced
        When the user navigation to the dashboard from inApp
        Then the user sees the following items in the screen
            | item                    |
            | Opportunities operative |
            | More operatives         |
            | help button             |
            | header                  |

    @INA011
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: The user sees a message to open the link and close the session
        Given a user with the following criteria
            | criteria              |
            | inap advanced crm two |
        When the user accesses to In App advanced
        And the user displays an informative message
        Then the user sees the following items in the screen
            | item                    |
            | modal button alert      |
            | modal description alert |
            | modal cancel button     |

    @INA012
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: The user cancels opening link and views inApp advanced
        Given a user with the following criteria
            | criteria                     |
            | inap advanced crm two        |
        When the user accesses to In App advanced
        And the user displays an informative message
        And the user cancels external link
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | accept button    |
            | description info |

    @INA013
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: The user accesses the beneficiary flow with different parameters
        Given a user with the following criteria
            | criteria        |
            | in app advanced |
        And the user accesses to In App advanced
        When the user accesses to the In App beneficiaries screen
        Then the user sees the following items in the screen
            | item               |
            | welcome modal icon |
            | recomendation      |
            | description        |
            | privacy link       |
            | continue           |
    @INA014
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: Validate beneficiary registration screen
        Given a user with the following criteria
            | criteria          |
            | in app recipients |
        And the user accesses to In App advanced beneficiary
        And the user goes to register beneficiary with "00740010001501891906" account in App
        And the user accesses to "register another address" screen
        When the user completes the registration
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | icon          |
            | date          |
            | account       |
            | beneficiaries |
            | close         |

    @INA015
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: Validate dashboard screen when exiting the flow from the "X" button
        Given a user with the following criteria
            | criteria          |
            | in app recipients |
        And the user accesses to In App advanced beneficiary
        And the user goes to register beneficiary with "00740010001501891906" account in App
        And the user accesses to "register another address" screen
        And the user completes the registration
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                     |
            | Opportunities operative  |
            | More operatives          |
            | help button              |
            | header                   |

    @INA016
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: Validate dashboard screen when exiting the flow from the "Exit" button
        Given a user with the following criteria
            | criteria          |
            | in app recipients |
        And the user accesses to In App advanced beneficiary
        And the user goes to register beneficiary with "00740010001501891906" account in App
        And the user accesses to "register another address" screen
        And the user completes the registration
        When the user navigation to dashboard from recipients
        Then the user sees the following items in the screen
            | item                     |
            | Opportunities operative  |
            | More operatives          |
            | help button              |
            | header                   |
