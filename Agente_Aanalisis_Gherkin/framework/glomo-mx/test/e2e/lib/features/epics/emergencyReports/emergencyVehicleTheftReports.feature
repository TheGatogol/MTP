@emergencyVehicleTheftReports
Feature: Emergency Vehicle Theft Reports

    @RRV001
    @MX
    @vbank @android @ios
    @web
    @smokeTest
    @backend(test)
    @web-done
    Scenario: The user successfully complete the vehicle theft flow
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "create report"
        Then the user sees the following items in the screen
            | item                            |
            | success header vt               |
            | success exit button vt          |
            | success microilustration vt     |
            | success policy vt               |
            | success number report vt        |
            | success type report vt          |
            | success progress timer vt       |
            | success advisor text vt         |
            | success call helpline vt        |
            | success notification message vt |
            | operative share vt              |
            | operative policy vt             |
            | success leave button vt         |

    @RRV002
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user access to the change geolocation
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "accept change geolocation"
        Then the user sees the following items in the screen
            | item                      |
            | location header vt        |
            | location faqs vt          |
            | location exit button vt   |
            | complete step one vt      |
            | header step one button vt |
            | edit step one button vt   |
            | summary vt                |

    @RRV003
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user already has a vehicle theft report in progress
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "create report"
        Then the user sees the following items in the screen
            | item                         |
            | detected header vt           |
            | detected exit button vt      |
            | microilustration detected vt |
            | detected call button vt      |
            | detected cancel button vt    |

    @RRV004
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user closes faq section
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "close faqs"
        Then the user sees the following items in the screen
            | item                    |
            | location header vt      |
            | location faqs vt        |
            | location exit button vt |
            | title step one vt       |
            | map static vt           |
            | address detail vt       |
            | change location btn vt  |
            | continue button vt      |

    @RRV005
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: Visible middle modal exit process
        Given a user with the following criteria
            | criteria                    |
            | emergency vehicle reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "close middle modal"
        Then the user sees the following items in the screen
            | item                  |
            | header menu           |
            | detail policy         |
            | button left menu      |
            | button right menu     |
            | title menu            |
            | option shock          |
            | option crane          |
            | option stole          |
            | option assistance     |

    @RRV006
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @web-done
    Scenario: The user closes flow without middle modal exit
        Given a user with the following criteria
            | criteria                    |
            | emergency vehicle reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "close flow theft"
        Then the user sees the following items in the screen
            | item                  |
            | header menu           |
            | detail policy         |
            | button left menu      |
            | button right menu     |
            | title menu            |
            | option shock          |
            | option crane          |
            | option stole          |
            | option assistance     |

    @RRV007
    @MX
    @vbank @android @ios
    @web
    @spherica
    @backend(test)
    @web-done
    Scenario: Validate link Privacy Notice
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "open privacy notice"
        Then the user sees the following items in the screen
            | item                             |
            | notice privacy modal header      |
            | notice privacy modal icon close  |
            | notice privacy modal content     |

    @RRV008
    @MX
    @vbank @android @ios
    @web
    @spherica
    @backend(test)
    @web-done
    Scenario: Validate modify report from summary
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "modify report in summary"
        Then the user sees the following items in the screen
            | item                    |
            | location header vt      |
            | location faqs vt        |
            | location exit button vt |
            | title step one vt       |
            | map static vt           |
            | address detail vt       |
            | change location btn vt  |
            | continue button vt      |

    @RRV009
    @MX
    @vbank @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Error generating a report
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "create report"
        Then the user sees the following items in the screen
            | item                         |
            | detected header vt           |
            | detected exit button vt      |
            | microilustration detected vt |
            | detected call button vt      |
            | detected cancel button vt    |
