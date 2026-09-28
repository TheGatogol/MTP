@Geolocation
Feature: Geolocation

    @GEO001
    @ios @android @native @smokeTest
    @MX @manual @JIRA.GLOMOMX-180582
    Scenario: The user logs in to BBVA Mexico, sees screen requesting location consent
        Given a user with the following criteria
            | criteria                                           |
            | mandatory geolocation                              |
            | location consent not previously registered         |
            | device location permissions are granted and active |
        When the user accesses the screen that asks for location consent
        Then the user sees the following items on the screen
            | item                            |
            | header                          |
            | location symbol                 |
            | title of the informative notice |
            | informative text                |
            | link know more                  |
            | privacy notice                  |
            | grant permission                |

    @GEO002
    @ios @android @native
    @MX @manual @JIRA.GLOMOMX-180582
    Scenario: the user logs into BBVA Mexico, after giving location consent, selects "only this time" for app location permission
        Given a user with the following criteria
            | criteria                                   |
            | mandatory geolocation                      |
            | location consent not previously registered |
            | no device location permissions             |
        When the user agrees to give location consent
        And user validates the consent with otp code
        And the user selects "only this time" permission
        Then the user is in the dashboard screen

    @GEO003
    @ios @android @native
    @MX @manual @JIRA.GLOMOMX-180582
    Scenario: The user logs into BBVA Mexico, after giving location consent, selects “while app is in use” for app location permission
        Given a user with the following criteria
            | criteria                                   |
            | mandatory geolocation                      |
            | location consent not previously registered |
            | no device location permissions             |
        When the user agrees to give location consent
        And user validates the consent with otp code
        And the user selects "while the app is in use" permission
        Then the user is in the dashboard screen

    @GEO004
    @ios @android @native
    @MX @manual @JIRA.GLOMOMX-180582
    Scenario: The user logs into BBVA Mexico, after giving location consent, the user denies location permission of the application and displays the activate location screen
        Given a user with the following criteria
            | criteria                                   |
            | mandatory geolocation                      |
            | location consent not previously registered |
            | no device location permissions             |
        When the user agrees to give location consent
        And user validates the consent with otp code
        And the user selects "deny" permission
        Then the user sees the following items on the screen
            | item                            |
            | header                          |
            | information symbol              |
            | title of the informative notice |
            | informative text                |
            | activate location button        |

    @GEO005
    @ios @android @native
    @MX @manual @JIRA.GLOMOMX-180582
    Scenario: The user logs into BBVA Mexico, after giving location consent, the user denies the location permission of the application until he sees the screen to go to configuration
        Given a user with the following criteria
            | criteria                                   |
            | mandatory geolocation                      |
            | location consent not previously registered |
            | no device location permissions             |
        When the user agrees to give location consent
        And user validates the consent with otp code
        And the user selects "deny" permission
        And the user selects activate location
        And the user selects "deny" permission
        Then the user sees the following items on the screen
            | item                            |
            | header                          |
            | information symbol              |
            | title of the informative notice |
            | informative text                |
            | go to settings button           |

    @GEO006
    @ios @android @native
    @MX @manual @JIRA.GLOMOMX-180582
    Scenario: The user logs into BBVA Mexico, has location consent, the user denies the location permission of the application, then chooses the option while the app is in use.
        Given a user with the following criteria
            | criteria                                        |
            | mandatory geolocation                           |
            | location consent has been registered previously |
            | no device location permissions                  |
        When the user selects "deny" permission
        And the user selects activate location
        And the user selects "while the app is in use" permission
        Then the user is in the dashboard screen

    @GEO007
    @ios @android @native
    @MX @manual @JIRA.GLOMOMX-180582
    Scenario: The user logs into BBVA Mexico, has location consent, the user denies the location permission of the application, then chooses the This time only option.
        Given a user with the following criteria
            | criteria                                        |
            | mandatory geolocation                           |
            | location consent has been registered previously |
            | no device location permissions                  |
        When the user selects "deny" permission
        And the user visualizes the modal to activate location, select Activate location
        And the user selects "this time only" permission
        Then the user is in the dashboard screen

    @GEO008
    @ios @android @native
    @MX @manual @JIRA.GLOMOMX-180582
    Scenario: The user logs in to BBVA Mexico and selects to read the privacy notice section
        Given a user with the following criteria
            | criteria                                           |
            | mandatory geolocation                              |
            | location consent not previously registered         |
            | device location permissions are granted and active |
        When the user accesses to privacy notice
        Then the user sees the following items in the screen
            | item                     |
            | header                   |
            | title the privacy notice |
            | informative text         |
            | understood button        |

    @GEO009
    @android @native
    @MX @manual @JIRA.GLOMOMX-180582
    Scenario: The user logs into BBVA Mexico, but the android device has the GPS turned off and user doesn’t turn it on
        Given a user with the following criteria
            | criteria                                           |
            | mandatory geolocation                              |
            | location consent has been registered previously    |
            | device location permissions are granted and active |
        When the user cancels the use of her location
        Then the user sees the following items on the screen
            | item                            |
            | header                          |
            | information symbol              |
            | title of the informative notice |
            | informative text                |
            | activate location button        |

    @GEO010
    @ios @native
    @MX @manual @JIRA.GLOMOMX-180582
    Scenario: The user logs into BBVA Mexico, but the ios device has the GPS turned off
        Given a user with the following criteria
            | criteria                                           |
            | mandatory geolocation                              |
            | location consent has been registered previously    |
            | device location permissions are granted and active |
        When the user visualizes the modal to activate location of the iphone
        Then the user sees the following items on the screen
            | item                            |
            | header                          |
            | information symbol              |
            | title of the informative notice |
            | informative text                |
            | go to settings steps            |
            | go to settings button           |
