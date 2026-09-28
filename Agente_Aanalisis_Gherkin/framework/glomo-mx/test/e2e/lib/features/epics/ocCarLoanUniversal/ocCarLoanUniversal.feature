@ocCarLoanUniversal
Feature: OC Car Loan Universal Feature

    @OCC001
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: Priory "<offer>"
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user starts the application at date:
            | hour  | 12 |
        When the user accesses contract product section
        Then the user sees the following items in the screen
            | item               | offer                       |
            | header             |                             |
            | main banner        |                             |
            | main banner button |                             |
            | <offer>            | non-pre-approved-car-loan   |

        Examples:
            | offer                    |
            | preapproved priority     |
            | preapproved non priority |
            | banner button            |

    @OCC002
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Simulation car loan
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user selected yes received advice and continue to terms and conditions
        And the user accesses to summary steps
        When the user accesses to success simulation step
        Then the user sees the following items in the screen
            | item                           |
            | title modal succes             |
            | amount modal succes            |
            | label amount modal succes      |
            | detail container modal succes  |
            | warning container modal succes |
            | button row modal succes        |

    @OCC003
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @smokeTest
    Scenario: Simulation car loan non preapproved
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user with offer npa accesses to summary step
        And the user accesses to accepted privacy terms
        When the user accesses to success simulation step
        Then the user sees the following items in the screen
            | item                           |
            | title modal succes             |
            | amount modal succes            |
            | label amount modal succes      |
            | detail container modal succes  |
            | warning container modal succes |
            | button row modal succes        |

    @OCC004
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Change car type
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        When the user select a old car to simulate and continues
        Then the user sees the following items in the screen
            | item                      |
            | header step user data     |
            | continue button user data |

    @OCC005
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Change the amount
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        When the user enters other car price
        Then the user sees the following items in the screen
            | item                         |
            | miltistep simulation text    |
            | label car price              |
            | price simulation input       |
            | simulation summary container |
            | rates and costs container    |
            | continue button simulation   |

    @OCC006
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Change the hitch
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        When the user enters other hitch price
        Then the user sees the following items in the screen
            | item                         |
            | miltistep simulation text    |
            | label car hitch              |
            | hitch simulation input       |
            | simulation summary container |
            | rates and costs container    |
            | continue button simulation   |

    @OCC007
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Change loan due date
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        When the user changes the range of months
        Then the user sees the following items in the screen
            | item                       |
            | header simulation step     |
            | text amount car            |
            | continue button simulation |

    @OCC008
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: Tooltip "<typeInfo>"
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        When the user selects a tooltip "<typeInfo>" modal
        Then the user sees the following items in the screen
            | item               |
            | modal information  |
            | title info modal   |
            | body info modal    |
            | icon modal warning |

        Examples:
            | typeInfo                   |
            | help type of car           |
            | help info down payment     |
            | help life insurance info   |
            | help tin info              |
            | help CAT info              |
            | help commission info       |
            | help damage insurance info |

    @OCC009
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: Amount "<typeAmount>"
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        When the user changes a "<typeAmount>"
        Then the user sees the following items in the screen
            | item                       |
            | message amount suggestion  |
            | bar amount suggestion      |
            | text amount suggestion     |
            | continue button simulation |

        Examples:
            | typeAmount              |
            | higher suggested amount |
            | lower suggested amount  |

    @OCC010
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Not advice receiving
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user accesses to the simulation car step
        When the user selected not received advice
        Then the user sees the following items in the screen
            | item                          |
            | miltistep simulation text two |
            | description step user data    |
            | title step user data          |
            | label radio step user data    |
            | check not receiving advice    |
            | continue button simulation    |

    @OCC011
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Edit data
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        When the user selected yes received advice
        Then the user sees the following items in the screen
            | item                          |
            | title simulate auto loan      |
            | header step user data         |
            | miltistep simulation text two |
            | continue button simulation    |

    @OCC012
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Continue operation
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        When the user selected yes received advice and continue to terms and conditions
        Then the user sees the following items in the screen
            | item                                 |
            | header terms and conditions          |
            | text steps terms and conditions      |
            | checks history credit                |
            | check privacy notice                 |
            | continue button terms and conditions |

    @OCC013
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: Modal "<option>"
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user selected yes received advice and continue to terms and conditions
        When the user selects a modal "<option>"
        Then the user sees the following items in the screen
            | item                            |
            | text steps terms and conditions |
            | modal information               |
            | title info modal                |

        Examples:
            | option                    |
            | info terms and conditions |
            | info privacy notice       |
            | history credit check      |

    @OCC014
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Check information "Your simulation 1 of 3"
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user selected yes received advice and continue to terms and conditions
        When the user accesses to accepted privacy terms
        Then the user sees the following items in the screen
            | item                        |
            | sumary terms and conditions |
            | sumary data step            |
            | summary  simulation         |
            | generate simulation         |

    @OCC015
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Data section summary step
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user selected yes received advice and continue to terms and conditions
        When the user accesses to summary steps
        Then the user sees the following items in the screen
            | item                        |
            | sumary data step            |
            | phone number                |
            | amount variable data        |
            | generate simulation         |
            | sumary terms and conditions |

    @OCC016
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Terms and conditions summary step
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user selected yes received advice and continue to terms and conditions
        When the user accesses to summary steps
        Then the user sees the following items in the screen
            | item                        |
            | sumary data step            |
            | header terms and conditions |
            | badge terms and conditions  |
            | generate simulation         |
            | sumary terms and conditions |

    @OCC017
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Summary screen without optional data
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user selected yes received advice and continue to terms and conditions
        When the user accesses to summary steps
        Then the user sees the following items in the screen
            | item                                 |
            | sumary data step                     |
            | amount variable data                 |
            | continue button terms and conditions |

    @OCC018
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @smokeTest
    Scenario: Success screen
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user select a old car to simulate and continues
        And the user accesses to summary steps
        When the user accesses to success simulation step
        Then the user sees the following items in the screen
            | item                           |
            | title modal succes             |
            | amount modal succes            |
            | label amount modal succes      |
            | detail container modal succes  |
            | warning container modal succes |
            | button row modal succes        |

    @OCC019
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Continue to proccess
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user selected yes received advice and continue to terms and conditions
        When the user accesses to summary steps
        Then the user sees the following items in the screen
            | item                        |
            | sumary data step            |
            | sumary terms and conditions |
            | generate simulation         |

    @OCC020
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: Validate modal "<deniedError>"
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user selected yes received advice and continue to terms and conditions
        And the user accesses to summary steps
        When the user accesses to success simulation step
        Then the user sees the following items in the screen
            | item                        |
            | button modal warning accept |
            | header warning modal        |
            | <deniedError>               |

        Examples:
            | deniedError                |
            | credit history denied      |
            | need know more             |
            | denied continue simulation |

    @OCC021
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Modal extended amount
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        And the user accesses to the car loan offer from "car loan universal"
        And the user selected yes received advice and continue to terms and conditions
        And the user accesses to summary steps
        And the user accesses to success simulation step
        When the user back to simulation
        Then the user sees the following items in the screen
            | item                       |
            | content type of car        |
            | text amount suggestion     |
            | label car price            |
            | header simulation step     |
            | rates and costs container  |
            | continue button simulation |

    @OCC022
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: Validate the modal whit out "<documents>"
        Given a user with the following criteria
            | criteria                       |
            | car loan universal preapproved |
        When the user accesses to the car loan offer from "car loan universal"
        Then the user sees the following items in the screen
            | item                        |
            | title info documents modal  |
            | button modal warning accept |
            | header warning modal        |
            | <documents>                 |

        Examples:
            | documents      |
            | without rfc    |
            | need know more |
