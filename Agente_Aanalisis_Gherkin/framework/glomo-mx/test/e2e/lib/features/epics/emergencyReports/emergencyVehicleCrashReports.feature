@emergencyVehicleCrashReports
Feature: Emergency Vehicle Crash Reports

    @RCV001
    @smokeTest
    @web @MX @vbank
    @backend(test)
    @web-done
    @backend-smoke
    @ios @android
    Scenario: The user successfully complete the vehicle crash flow
        Given a user with the following criteria
            | criteria                        |
            | emergency crash vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crash" for select "create report"
        Then the user sees the following items in the screen
            | item                    |
            | header success rcv      |
            | close header icon       |
            | icon type success rcv   |
            | title success rcv       |
            | description success rcv |
            | date success rcv        |
            | progress timer rcv      |
            | call bbva line          |
            | view policy crash       |
            | share policy crash      |

    @RCV002
    @web @MX @vbank
    @backend(test)
    @web-done
    @backend-smoke
    @ios @android
    Scenario: The user access to the change geolocation crash
        Given a user with the following criteria
            | criteria                        |
            | emergency crash vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crash" for select "accept change geolocation"
        Then the user sees the following items in the screen
            | item                          |
            | header rcv                    |
            | icon faqs rcv                 |
            | icon close rcv                |
            | title step two                |
            | question one ambulance needed |
            | option question one no        |
            | option question one yes       |
            | question two vehicle can run  |
            | option question two no        |
            | option question two yes       |
            | accept services rcv           |

    @RCV003
    @web @MX @vbank
    @backend(test)
    @web-done
    @backend-smoke
    @ios @android
    Scenario: Change location from the Emergency services section
        Given a user with the following criteria
            | criteria                        |
            | emergency crash vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crash" for select "change geolocation"
        Then the user sees the following items in the screen
            | item                          |
            | header rcv                    |
            | icon faqs rcv                 |
            | icon close rcv                |
            | title step two                |
            | question one ambulance needed |
            | option question one no        |
            | option question one yes       |
            | question two vehicle can run  |
            | option question two no        |
            | option question two yes       |
            | accept services rcv           |

    @RCV004
    @web @MX @vbank
    @backend(test)
    @web-done
    @backend-smoke
    @ios @android
    Scenario: The user changes selection Emergency services
        Given a user with the following criteria
            | criteria                        |
            | emergency crash vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crash" for select "change selection services"
        Then the user sees the following items in the screen
            | item                       |
            | header rcv                 |
            | heading collapsed step one |
            | link collapsed step one    |
            | content collapsed step one |
            | heading collapsed step two |
            | link collapsed step two    |
            | content collapsed step two |
            | accept report rcv          |
            | description summary rcv    |
            | link summary rcv           |

    @RCV005
    @web @MX @vbank
    @backend(test)
    @web-done
    @backend-smoke
    @ios @android
    Scenario: The user reads the privacy notice
        Given a user with the following criteria
            | criteria                        |
            | emergency crash vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crash" for select "privacy notice"
        Then the user sees the following items in the screen
            | item                       |
            | heading collapsed step one |
            | link collapsed step one    |
            | content collapsed step one |
            | heading collapsed step two |
            | link collapsed step two    |
            | content collapsed step two |
            | accept report rcv          |
            | description summary rcv    |
            | link summary rcv           |

    @RCV006
    @web @MX @vbank
    @backend(test)
    @web-done
    @backend-smoke
    @ios @android
    Scenario: The user selects view policy
        Given a user with the following criteria
            | criteria                        |
            | emergency crash vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crash" for select "view policy"
        Then the user sees the following items in the screen
            | item               |
            | close header icon  |
            | date success rcv   |
            | progress timer rcv |
            | call bbva line     |
            | view policy crash  |
            | share policy crash |

    @RCV008
    @web @MX @vbank
    @backend(test)
    @web-done
    @backend-smoke
    @ios @android
    Scenario: The user closes faq section
        Given a user with the following criteria
            | criteria                        |
            | emergency crash vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crash" for select "close faqs"
        Then the user sees the following items in the screen
            | item                |
            | header rcv          |
            | icon faqs rcv       |
            | icon close rcv      |
            | title step rcv      |
            | map static rcv      |
            | map static text     |
            | change location rcv |
            | accept location rcv |

    @RCV009
    @web @MX @vbank
    @backend(test)
    @web-done
    @backend-smoke
    @ios @android
    Scenario: Visible middle modal exit process
        Given a user with the following criteria
            | criteria                        |
            | emergency crash vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crash" for select "close middle modal"
        Then the user sees the following items in the screen
            | item              |
            | header menu       |
            | detail policy     |
            | button left menu  |
            | button right menu |
            | title menu        |
            | option shock      |
            | option crane      |
            | option stole      |
            | option assistance |

    @RCV010
    @web @MX @vbank
    @backend(test)
    @web-done
    @backend-smoke
    @ios @android
    Scenario: The user exit the flow
        Given a user with the following criteria
            | criteria                        |
            | emergency crash vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crash" for select "close flow crash"
        Then the user sees the following items in the screen
            | item              |
            | header menu       |
            | detail policy     |
            | button left menu  |
            | button right menu |
            | title menu        |
            | option shock      |
            | option crane      |
            | option stole      |
            | option assistance |

    @RCV011
    @web @MX @vbank
    @backend(test)
    @web-done
    @backend-smoke
    @ios @android
    Scenario: The user accesses the emergency line
        Given a user with the following criteria
            | criteria                        |
            | emergency crash vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to report "vehicle crash" for select "create report"
        When the user accepts "accesses to emergency line" action
        Then the user sees the following items in the screen
            | item                     |
            | button exit half modal   |
            | title modal call bbva    |
            | subtitle modal call bbva |
            | timer modal call bbva    |

    @RCV012
    @web @MX @vbank
    @backend(test)
    @web-done
    @ios @android
    Scenario: Service error when reporting a crash
        Given a user with the following criteria
            | criteria                        |
            | emergency crash vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crash" for select "create report"
        Then the user sees the following items in the screen
            | item                     |
            | icon error modal   |
            | title error modal  |
            | button call modal  |
            | button exit modal  |
