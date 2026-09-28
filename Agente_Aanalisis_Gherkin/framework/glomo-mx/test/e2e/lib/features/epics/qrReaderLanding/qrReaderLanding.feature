@QRCardScanner
Feature: QR Card Scanner

    @QL001
    @MX @android @ios
    @smokeTest
    @backend(test) @native
    @!vbank
    @manual @JIRA.GLOMOGL-20021
    Scenario: Complete process - Successful QR landing page display without remembered user.
        Given an user with a valid BBVA QR card
        And BBVA Mexico app installed
        When the user scans the QR code from the camera of his phone
        And the app has not remembered user
        Then the user sees the following items on the screen
            | items                    |
            | Header title             |
            | Card Detail section      |
            | Security message label   |
            | BBVA card label          |
            | QR icon                  |
            | Card image               |
            | card label               |
            | Digital Activation flow  |
            | Access Key Recovery flow |
            | Device Accesses flow     |

    @QL002
    @MX @android @ios
    @backend(test) @native
    @!vbank
    @manual @JIRA.GLOMOGL-20021
    Scenario: Complete process - Successful QR landing page display with remembered user and not recognized card.
        Given an user with a valid BBVA QR card
        And BBVA Mexico app installed
        When the user scans the QR code from the camera of his phone
        And the app has  remembered user
        And the QR card doesn’t match with any previously saved in cache
        Then the user sees the following items on the screen
            | items                    |
            | Header title             |
            | Card Detail section      |
            | Security message label   |
            | BBVA card label		   |
            | QR icon				   |
            | Card image	           |
            | card label			   |
            | Digital Activation flow  |
            | Access Key Recovery flow |
            | Device Accesses flow     |

    @QL003
    @MX @android @ios
    @backend(test) @native
    @!vbank
    @manual @JIRA.GLOMOGL-20021
    Scenario: Complete process - Successful QR landing page display with remembered user and  recognized active card.
        Given an user with a valid BBVA QR card
        And BBVA Mexico app installed
        When the user scans the QR code from the camera of his phone
        And the app has  remembered user
        And the QR card matches with  one previously saved in cache
        And the QR card is active
        Then the user sees the following items on the screen
            | items                        |
            | Header title                 |
            | Card Detail section		   |
            | Security message label	   |
            | BBVA card label			   |
            | QR icon					   |
            | Grey card image			   |
            | Card label				   |
            | Card detail link			   |
            | Available operatives section |
            | Transfer operative link      |
            | Pay Card operative link	   |
            | See Nip operative link	   |
            | Security Options section	   |
            | Security Options title	   |
            | Security Options description |
            | Access Key Recovery flow     |

    @QL004
    @MX @android @ios
    @backend(test) @native
    @!vbank
    @manual @JIRA.GLOMOGL-20021
    Scenario: Complete process - Successful QR landing page display with remembered user and  recognized inactive card.
        Given an user with a valid BBVA QR card
        And BBVA Mexico app installed
        When the user scans the QR code from the camera of his phone
        And the app has  remembered user
        And the QR card matches with  one previously saved in cache
        And the QR card is inactive
        Then the user sees the following items on the screen
            | items                                          |
            | Header title                                   |
            | Card Detail        				             |
            | Security message label				         |
            | BBVA card label					             |
            | QR icon						                 |
            | Grey card image					             |
            | card label				                     |
            | Card detail link					             |
            | Available operatives section			         |
            | Card activation operative link			     |
            | Redirection option to Access Key Recovery flow |

    @QL005
    @MX @android @ios
    @backend(test) @native
    @!vbank
    @manual @JIRA.GLOMOGL-20021
    Scenario: Complete process - Successful QR landing web page redirect
        Given an user with a valid BBVA QR card
        And BBVA Mexico app not installed
        When the user scans the QR code from the camera of his phone
        Then the user will be redirected to BBVA.mx and will see the QR cards landing page.
