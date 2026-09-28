@dashboardOperationals
Feature: Dashboard Operationals

    @DOP001
    @MX @vbank @backend(test)
    @web @android @ios
    @smokeTest
    @tmpExclude @JIRA.GLOMOMX-247069
    @backend-smoke
    Scenario Outline: User in dashboard with <criteria> - <case>
        Given a user with the following criteria
            | criteria       |
            | operationals   |
            | <criteria>     |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                         | value     |
            | header                       |           |
            | Transfer operative           | <visible> |
            | Opportunities operative      | <visible> |
            | CardLess with draw operative | <visible> |
            | More operatives              | <visible> |
        Examples:
            | case                             | criteria         | visible     |
            | Show 3 Operatives + More options | accounts         | visible     |
            | Non-operational                  | without accounts | visible     |

    @DOP002 @vbank
    @MX @web @android @ios
    @backend(test) @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-247069
    @backend-smoke
    Scenario: Validate detail of TDC section
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | accounts     |
            | tdc          |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                   | currency    |
            | header                 |             |
            | greeting               |             |
            | help button            |             |
            | sidebar                |             |
            | title                  | no-currency |
            | alias                  | MXN         |
            | card image             | MXN         |
            | primary amount         | MXN         |
            | number                 | MXN         |
            | label primary amount   | MXN         |
            | secondary amount       | MXN         |
            | label secondary amount | MXN         |

    @DOP003 @vbank
    @MX @web @android @ios
    @smokeTest
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-247069
    @backend-smoke
    Scenario: User accesses twice to more operatives
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | accounts     |
            | without tdc  |
        When the user accesses twice to more operatives
        Then the user is in the dashboard screen

    @DOP004 @vbank
    @MX @web @android @ios
    @smokeTest
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-247069
    @backend-smoke
    Scenario: User without tdc can not see credit card payment operative
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | accounts     |
            | without tdc  |
        When the user accesses to more operatives option
        Then the user sees the following items in the screen
            | item                          | value       | section  |
            | Transfer operative            | visible     | accounts |
            | Opportunities operative       | visible     | favorite |
            | CardLess withdraw operative   | visible     | accounts |
            | credit card payment operative | not visible | cards    |

    @DOP005 @vbank
    @MX @web @android @ios
    @backend(test) @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-247069
    @backend-smoke
    Scenario Outline: Validate the functionality of the transfer operative - <case>
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | <criteria>   |
        When the user accesses to option "transfer" operative
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | header Exit Button |
            | origin header      |
            | accounts and cards |

        Examples:
            | case                 | criteria             |
            | client with tdc      | tdc                  |
            | client with accounts | without tdc          |
            | payroll account only | payroll account only |

    @DOP006 @vbank
    @MX @web @android @ios
    @backend(test) @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-247069
    @backend-smoke
    Scenario Outline: Validate the functionality of the bill payments operative - <case>
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | <criteria>   |
        And the user accesses bill payments home from operations and "summary" the onboarding
        And the user follows the onboarding
        When the user accepts the onboarding bill payments dashboard
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | title header               |
            | exit button header         |
            | title step one             |
            | button to pay new services |

        Examples:
            | case                         | criteria             |
            | client with tdc and accounts | tdc                  |
            | payroll account only         | payroll account only |
            | cheking account only         | cheking account only |

    @DOP007 @vbank
    @MX @web @android @ios
    @backend(test) @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-247069
    @backend-smoke
    Scenario Outline: Validate the functionality of cardless withdrawal operative - <case>
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | <criteria>   |
        When the user accesses to option "cardless Withdrawal" operative
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | close button      |
            | account origin    |
            | withdrawal import |

        Examples:
            | case                         | criteria             |
            | client with tdc and accounts | tdc                  |
            | payroll account only         | payroll account only |
            | cheking account only         | cheking account only |

    @DOP008 @vbank
    @MX @web @android @ios
    @backend(test) @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-247069
    @backend-smoke
    Scenario Outline: Validate the functionality of mobile top up operative - <case>
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | <criteria>   |
        When the user accesses to option "mobileTopUp" operative
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | header exit button    |
            | recharge tags button  |
            | recharge phone button |
            | gift cards            |

        Examples:
            | case                         | criteria             |
            | client with tdc and accounts | tdc                  |
            | payroll account only         | payroll account only |
            | cheking account only         | cheking account only |

    @DOP009 @vbank
    @MX @web @android @ios
    @manual @JIRA.GLOMOMX-185549
    Scenario: Validate the functionality account status operative - client with tdc and accounts
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | tdc          |
        When the user accesses to option "account Status" operative
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | back button |

    @DOP010 @vbank
    @MX @web @android @ios
    @alternate-scenarios-smoke
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-247069
    @backend-smoke
    Scenario: Validate the functionality of faqs button
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | tdc          |
            | accounts     |
        When the user accesses to faqs screen from dashboard page
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | help search input |
            | back button       |
            | head faqts        |

    @DOP011 @vbank
    @MX @web @android @ios
    @alternate-scenarios-smoke
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-247069
    @backend-smoke
    Scenario: Validate the functionality pay credit card operative - client with tdc and accounts
        Given a user with the following criteria
            | criteria     |
            | operationals |
            | tdc          |
        When the user accesses to option "creditCardPayment" operative
        Then the user sees the following items in the screen
            | item           |
            | list accounts  |
            | close button   |
            | pay card block |

    @DOP012 @vbank
    @MX @web @android @ios
    @alternate-scenarios-smoke @backend(test)
    @tmpExclude @JIRA.GLOMOMX-247069
    @backend-smoke
    Scenario: User in dashboard with offer
        Given a user with the following criteria
            | criteria        |
            | dashboard offer |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                |
            | Banner Description  |
            | Banner Link         |
            | Banner Close Button |

    @DOP013 @vbank
    @MX @web @android @ios
    @backend(test) @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-247069
    @backend-smoke
    Scenario: Validate the functionality of the transfer operative - cheking account only
        Given a user with the following criteria
            | criteria             |
            | operationals         |
            | cheking account only |
        When the user accesses to option "transfer" operative
        Then the user sees the following items in the screen
            | item                           |
            | header                         |
            | header Exit Button             |
            | origin header                  |
            | single product                 |
            | single product continue button |
