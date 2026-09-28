@ocCarLoan
Feature: OC Car Loan Digital

    @OCCL001
    @web @ios @android
    @MX
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank
    Scenario: Verify offer card
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        Then the user sees the following items in the screen
            | item             | offer       |
            | banner icon      | oc-car-loan |
            | banner status    | oc-car-loan |
            | banner text      | oc-car-loan |
            | banner button    | oc-car-loan |

    @OCCL002
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify car loan tracking page
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the oc car loan offer tracking
        Then the user sees the following items in the screen
            | item                                    |
            | header                                  |
            | exit button                             |
            | loan title                              |
            | loan status                             |
            | loan id                                 |
            | loan details button                     |
            | notification message icon               |
            | notification message text               |
            | arrangement fee information status icon |
            | arrangement fee information title       |
            | arrangement fee information link button |
            | arrangement fee information status      |
            | arrangement fee information text        |
            | select account status icon              |
            | select account title                    |
            | select account status                   |
            | select account text                     |
            | sign documents status icon              |
            | sign documents title                    |
            | sign documents status                   |
            | sign documents text                     |
            | document verification status icon       |
            | document verification title             |
            | document verification status            |
            | document verification text              |
            | document verification subtext           |
            | finish contracting status icon          |
            | finish contracting title                |
            | finish contracting status               |
            | finish contracting text                 |

    @OCCL003
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify car loan down payment section
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When  the user accesses the "down payment details" section of oc car loan
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | exit button               |
            | icon                      |
            | title                     |
            | description               |
            | indications title         |
            | bullet points             |
            | notification message icon |
            | notification message text |
            | accept button             |

    @OCCL004
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario Outline: Verify tracking after exiting the down payment section with the <option> button
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the "down payment details" section of oc car loan
        When the user return to the tracking page with the "<option>" exit option
        Then the user sees the following items in the screen
            | item                               | value     |
            | arrangement fee information status | consulted |
            | arrangement fee tracking status    | completed |
            | select account status              | pending   |
            | select account tracking status     | default   |

        Examples:
            | option |
            | top    |
            | bottom |

    @OCCL005
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify car loan account selection section
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "account selection" section of oc car loan
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | exit button               |
            | description title         |
            | description first half    |
            | description second half   |
            | accounts title            |
            | view more button          |
            | accounts                  |

    @OCCL006
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate a success response 200 ok
    Scenario: Verify account selection success page
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "account selection success" section of oc car loan
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | exit button   |
            | success icon  |
            | title text    |
            | date          |
            | account title |
            | account       |
            | accept button |

    @OCCL007
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate a success response 200 ok
    Scenario Outline: Verify tracking after exiting the succesful account selection with the <option> button
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the "account selection success" section of oc car loan
        When the user return to the tracking page with the "<option>" exit option
        Then the user sees the following items in the screen
            | item                           | value     |
            | select account status          | done      |
            | select account tracking status | completed |
            | sign documents status          | review    |
            | sign documents tracking status |           |

        Examples:
            | option |
            | top    |
            | bottom |

    @OCCL008
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify car loan signing document modal
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        When the user accesses the "sign documents" section of oc car loan
        Then the user sees the following items in the screen
            | item                     |
            | help modal header        |
            | help modal exit button   |
            | help modal icon          |
            | help modal title         |
            | help modal description   |
            | help modal points        |
            | help modal text          |
            | help modal accept button |

    @OCCL009
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify car loan signing document modal exit
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        And the user accesses the "sign documents" section of oc car loan
        And the user closes the modal with the "top" exit option
        And the user accesses the "sign documents" section of oc car loan
        When the user closes the modal with the "bottom" exit option
        Then the user sees the following items in the screen
            | item       | value       |
            | help modal | not visible |

    @OCCL010
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify car loan signing documents section
        Given a user with the following criteria
            | criteria                        |
            | digital car loan offer rejected |
        And the user accesses the oc car loan offer tracking
        When the user accesses the "sign documents" section of oc car loan
        Then the user sees the following items in the screen
            | item                                   |
            | header                                 |
            | exit button                            |
            | details header                         |
            | details amount title                   |
            | details amount                         |
            | details credit name title              |
            | details credit name                    |
            | details folio title                    |
            | details folio                          |
            | details request date title             |
            | details request date                   |
            | details request life title             |
            | details request life                   |
            | details term title                     |
            | details term                           |
            | details payday title                   |
            | details payday                         |
            | details irregular payments title       |
            | details irregular payments             |
            | details monthly payments title         |
            | details monthly payments               |
            | car details section title              |
            | details quote number title             |
            | details quote number                   |
            | details agency title                   |
            | details agency                         |
            | details brand title                    |
            | details brand                          |
            | details sub brand title                |
            | details sub brand                      |
            | details model title                    |
            | details model                          |
            | details car type title                 |
            | details car type                       |
            | details car version title              |
            | details car version                    |
            | details car cost title                 |
            | details car cost                       |
            | details down poayment title            |
            | details down poayment                  |
            | details requested amount for car title |
            | details requested amount for car       |
            | life insurance section title           |
            | details life insurer title             |
            | details life insurer                   |
            | details life insurance type title      |
            | details life insurance type            |
            | details life insurance cost title      |
            | details life insurance cost            |
            | damage insurance section title         |
            | details damage insurer title           |
            | details damage insurer                 |
            | details damage insurance type title    |
            | details damage insurance type          |
            | details damage insurance cost title    |
            | details damage insurance cost          |
            | rates and costs section title          |
            | details annual interes rate title      |
            | details annual interes rate            |
            | details arrangement fee title          |
            | details arrangement fee                |
            | details cat without iva title          |
            | details cat without iva                |
            | details cat without iva subtext        |
            | details total payment title            |
            | details total payment                  |
            | account section title                  |
            | details account                        |
            | contract header                        |
            | contract guide text                    |
            | contract contract terms button         |
            | contract conver contract button        |
            | contract credit contract button        |
            | contract direct debit form button      |
            | contract exhibits button               |
            | contract amortization button           |
            | contract promissory note button        |
            | contract first check                   |
            | contract second check                  |
            | contract third check                   |
            | contract fourth check                  |
            | contract notification icon             |
            | contract notification text             |
            | contract accept button                 |

    @OCCL011
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate a success response 200 ok
    Scenario: Verify contract signing success
        Given a user with the following criteria
            | criteria                        |
            | digital car loan offer rejected |
        When the user accesses the "sign documents success" section of oc car loan
        Then the user sees the following items in the screen
            | item                               |
            | header                             |
            | exit button                        |
            | success icon                       |
            | success title                      |
            | success description                |
            | success date                       |
            | requested amount title             |
            | requested amount                   |
            | loan number title                  |
            | loan number                        |
            | opening date title                 |
            | opening date                       |
            | credit name title                  |
            | credit name                        |
            | requested date title               |
            | requested date                     |
            | request life title                 |
            | request life                       |
            | term title                         |
            | term                               |
            | pay day title                      |
            | pay day                            |
            | account title                      |
            | account                            |
            | irregular payments title           |
            | irregular payments                 |
            | monthly payments title             |
            | monthly payments                   |
            | quote number title                 |
            | quote number                       |
            | agency title                       |
            | agency                             |
            | car brand title                    |
            | car brand                          |
            | sub brand title                    |
            | sub brand                          |
            | car model title                    |
            | car model                          |
            | car type title                     |
            | car type                           |
            | car version title                  |
            | car version                        |
            | car cost title                     |
            | car cost                           |
            | down payment title                 |
            | down payment                       |
            | requested amount for the car title |
            | requested amount for the car       |
            | life insurance insurer title       |
            | life insurance insurer             |
            | life insurance type title          |
            | life insurance type                |
            | life insurance cost title          |
            | life insurance cost                |
            | damage insurance insurer title     |
            | damage insurance insurer           |
            | damage insurance type title        |
            | damage insurance type              |
            | damage insurance cost title        |
            | damage insurance cost              |
            | annual interest rate title         |
            | annual interest rate               |
            | arrangement fee title              |
            | arrangement fee                    |
            | cat without iva title              |
            | cat without iva                    |
            | total payment title                |
            | total payment                      |
            | folio title                        |
            | folio                              |
            | notification icon                  |
            | notification message               |
            | email documents information        |
            | email                              |
            | download button                    |
            | accept button                      |

    @OCCL012
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate a success response 200 ok
    Scenario Outline: Verify tracking after exiting a succesful signing with the <option> button
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the "sign documents success" section of oc car loan
        When the user return to the tracking page with the "<option>" exit option
        Then the user sees the following items in the screen
            | item                                  | value     |
            | sign documents status                 | done      |
            | sign documents tracking status        | completed |
            | document verification status          | pending   |
            | document verification tracking status |           |

        Examples:
            | option |
            | top    |
            | bottom |

    @OCCL013
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify tracking for fourth point authorization
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the oc car loan offer tracking
        Then the user sees the following items in the screen
            | item                                  | value     |
            | document verification status          | done      |
            | document verification tracking status | completed |
            | finish contracting status             | review    |
            | finish contracting tracking status    |           |

    @OCCL014
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify modal for next steps section
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        When the user accesses the "next steps" section of oc car loan
        Then the user sees the following items in the screen
            | item                         |
            | help modal header            |
            | help modal exit button       |
            | help modal icon              |
            | help modal title             |
            | help modal description       |
            | help modal points            |
            | help modal notification icon |
            | help modal notification text |
            | help modal accept button     |

    @OCCL015
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify exit from fifth point modal
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        And the user accesses the "next steps" section of oc car loan
        And the user closes the modal with the "top" exit option
        And the user accesses the "next steps" section of oc car loan
        When the user closes the modal with the "bottom" exit option
        Then the user sees the following items in the screen
            | item       | value       |
            | help modal | not visible |

    @OCCL016
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify tracking after validation of fifth point
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the oc car loan offer tracking
        Then the user sees the following items in the screen
            | item                                  | value      |
            | loan status                           | authorized |
            | notification message container        | success    |
            | notification message text             | success    |
            | select account status                 | done       |
            | select account tracking status        | completed  |
            | sign documents status                 | done       |
            | sign documents tracking status        | completed  |
            | document verification status          | done       |
            | document verification tracking status | completed  |
            | finish contracting status             | authorized |
            | finish contracting tracking status    | completed  |

    @OCCL017
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify that the credit is being shown after finishing its contracting
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                     |
            | car loan contract number |

    @OCCL018
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify car loan detail section for extended warranty and accessories
        Given a user with the following criteria
            | criteria                        |
            | digital car loan offer rejected |
        When the user accesses the "details" section of oc car loan
        Then the user sees the following items in the screen
            | item                                 |
            | header                               |
            | exit button                          |
            | title                                |
            | product title                        |
            | product                              |
            | credit name title                    |
            | credit name                          |
            | request number title                 |
            | request number                       |
            | copy request number button           |
            | request date title                   |
            | request date                         |
            | request life title                   |
            | request life                         |
            | request life modal button            |
            | requested total amount title         |
            | requested total amount               |
            | requested total amount modal button  |
            | term title                           |
            | term                                 |
            | pay day title                        |
            | pay day                              |
            | pay day modal button                 |
            | irregular pay title                  |
            | irregular pay                        |
            | irregular pay modal button           |
            | monthly pay title                    |
            | monthly pay                          |
            | monthly pay modal button             |
            | quote number title                   |
            | quote number                         |
            | agency title                         |
            | agency                               |
            | brand title                          |
            | brand                                |
            | sub brand title                      |
            | sub brand                            |
            | model title                          |
            | model                                |
            | type title                           |
            | type                                 |
            | version title                        |
            | version                              |
            | cost title                           |
            | cost                                 |
            | down payment title                   |
            | down payment                         |
            | down payment modal button            |
            | requested amount for car title       |
            | requested amount for car             |
            | cost of accessories title            |
            | cost of accessories                  |
            | extended warranty title              |
            | extended warranty                    |
            | extended warranty modal button       |
            | aesthetic accessories title          |
            | aesthetic accessories                |
            | aesthetic accessories modal button   |
            | life insurance title                 |
            | life insurance insurer title         |
            | life insurance insurer               |
            | life insurance type title            |
            | life insurance type                  |
            | life insurance cost title            |
            | life insurance cost                  |
            | property insurance title             |
            | property insurance insurer title     |
            | property insurance insurer           |
            | property insurance type title        |
            | property insurance type              |
            | property insurance type modal button |
            | property insurance cost title        |
            | property insurance cost              |
            | rates and cost title                 |
            | annual interest rate title           |
            | annual interest rate                 |
            | arrangement fee title                |
            | arrangement fee                      |
            | arrangement fee modal button         |
            | cat without iva title                |
            | cat without iva                      |
            | total payment title                  |
            | total payment                        |
            | cat summary                          |
            | notification icon                    |
            | notification message                 |
            | notification modal button            |

    @OCCL019
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify detail section for smart buy quotation and multianual damage and life insurance
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "details" section of oc car loan
        Then the user sees the following items in the screen
            | item                                     | value         |
            | credit name                              | future value  |
            | first monthly pay period title           |               |
            | first monthly pay period                 |               |
            | first monthly pay period modal button    |               |
            | second monthly pay period title          |               |
            | second monthly pay period                |               |
            | guaranteed value title                   |               |
            | guaranteed value                         |               |
            | guaranteed value modal button            |               |
            | property insurance type                  | multiyear     |
            | first period annual interest rate title  |               |
            | first period annual interest rate        |               |
            | second period annual interest rate title |               |
            | second period annual interest rate       |               |
            | first period cat without iva title       |               |
            | first period cat without iva             |               |
            | second period cat without iva title      |               |
            | second period cat without iva            |               |
            | first period total payment title         |               |
            | first period total payment               |               |
            | second period total payment title        |               |
            | second period total payment              |               |
            | cat summary                              |               |
            | cat refinanced                           |               |

    @OCCL020
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario Outline: Verify <modalName> modal in detail section
        Given a user with the following criteria
            | criteria                        |
            | digital car loan offer rejected |
        And the user accesses the "details" section of oc car loan
        When the user accesses to the "<modalName>" modal
        Then the user sees the following items in the screen
            | item                     |
            | help modal header        |
            | help modal close button  |
            | help modal icon          |
            | help modal title         |
            | help modal text          |
            | help modal accept button |

        Examples:
            | modalName                      |
            | request valid time             |
            | requested total amount         |
            | irregular payments             |
            | monthly payment                |
            | guaranteed value               |
            | down payment                   |
            | aesthetic accessories          |
            | property damage insurance type |
            | arrangement fees               |

    @OCCL021
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario Outline: Verify <modalName> modal exit in detail section
        Given a user with the following criteria
            | criteria                        |
            | digital car loan offer rejected |
        And the user accesses the "details" section of oc car loan
        And the user accesses to the "<modalName>" modal
        And the user closes the modal with the "top" exit option
        And the user accesses to the "<modalName>" modal
        When the user closes the modal with the "bottom" exit option
        Then the user sees the following items in the screen
            | item       | value       |
            | help modal | not visible |

        Examples:
            | modalName                      |
            | request valid time             |
            | requested total amount         |
            | irregular payments             |
            | monthly payment                |
            | down payment                   |
            | property damage insurance type |
            | arrangement fees               |
            | other coverage information     |
            | aesthetic accessories          |
            | guaranteed value               |

    @OCCL022
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario Outline: Verify <modalName> half modal in detail section
        Given a user with the following criteria
            | criteria                        |
            | digital car loan offer rejected |
        And the user accesses the "details" section of oc car loan
        When the user accesses to the "<modalName>" modal
        Then the user sees the following items in the screen
            | item                     |
            | help modal icon          |
            | help modal title         |
            | help modal content       |
            | help modal accept button |

        Examples:
            | modalName         |
            | pay days          |
            | extended warranty |

    @OCCL023
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario Outline: Verify closing of <modalName> half modal in detail section
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the "details" section of oc car loan
        And the user accesses to the "<modalName>" modal
        When the user closes the modal with the "bottom" exit option
        Then the user sees the following items in the screen
            | item       | value       |
            | help modal | not visible |

        Examples:
            | modalName         |
            | pay days          |
            | extended warranty |

    @OCCL024
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify copied request folio green toast
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the "details" section of oc car loan
        When the user copies the folio of the car loan offer
        Then the user sees the following items in the screen
            | item       |
            | toast icon |
            | toast text |

    @OCCL025
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify details section for user that buys life and damage insurance on his own
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "details" section of oc car loan
        Then the user sees the following items in the screen
            | item                             | value   |
            | life insurance insurer title     | hidden  |
            | life insurance insurer           | hidden  |
            | life insurance type title        |         |
            | life insurance type              | his own |
            | life insurance cost title        | hidden  |
            | life insurance cost              | hidden  |
            | property insurance insurer title | hidden  |
            | property insurance insurer       | hidden  |
            | property insurance type title    |         |
            | property insurance type          | his own |
            | property insurance cost title    | hidden  |
            | property insurance cost          | hidden  |

    @OCCL026
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify details section for user that finances life and damage insurance with bbva and pays in cash
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "details" section of oc car loan
        Then the user sees the following items in the screen
            | item                             | value |
            | life insurance insurer title     |       |
            | life insurance insurer           |       |
            | life insurance type title        |       |
            | life insurance type              | cash  |
            | life insurance cost title        |       |
            | life insurance cost              |       |
            | property insurance insurer title |       |
            | property insurance insurer       |       |
            | property insurance type title    |       |
            | property insurance type          | cash  |
            | property insurance cost title    |       |
            | property insurance cost          |       |

    @OCCL027
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify details section for user that finances one insurance and get the other on his own
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "details" section of oc car loan
        Then the user sees the following items in the screen
            | item                             | value   |
            | life insurance insurer title     |         |
            | life insurance insurer           |         |
            | life insurance type title        |         |
            | life insurance type              |         |
            | life insurance cost title        |         |
            | life insurance cost              |         |
            | property insurance insurer title | hidden  |
            | property insurance insurer       | hidden  |
            | property insurance type title    |         |
            | property insurance type          | his own |
            | property insurance cost title    | hidden  |
            | property insurance cost          | hidden  |

    @OCCL028
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify detail section for a motorcycle
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "details" section of oc car loan
        Then the user sees the following items in the screen
            | item                             | value |
            | credit name                      | bike  |
            | life insurance insurer title     |       |
            | life insurance insurer           |       |
            | life insurance type title        |       |
            | life insurance type              |       |
            | life insurance cost title        |       |
            | life insurance cost              |       |
            | property insurance insurer title |       |
            | property insurance insurer       |       |
            | property insurance type title    |       |
            | property insurance type          |       |
            | property insurance cost title    |       |
            | property insurance cost          |       |

    @OCCL029
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify detail section for a recreational motorcycle
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "details" section of oc car loan
        Then the user sees the following items in the screen
            | item                         | value    |
            | credit name                  | rec bike |
            | life insurance insurer title |          |
            | life insurance insurer       |          |
            | life insurance type title    |          |
            | life insurance type          |          |
            | life insurance cost title    |          |
            | life insurance cost          |          |
            | property insurance title     | hidden   |
            | property insurance section   | hidden   |

    @OCCL030
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify more info modal in detail section for a recreational motorcycle
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the "details" section of oc car loan
        When the user accesses to the "other coverage information" modal
        Then the user sees the following items in the screen
            | item            | value    |
            | help modal text | rec bike |

    @OCCL031
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify more info modal exit in detail section for a recreational motorcycle
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the "details" section of oc car loan
        And the user accesses to the "other coverage information" modal
        And the user closes the modal with the "top" exit option
        And the user accesses to the "other coverage information" modal
        When the user closes the modal with the "bottom" exit option
        Then the user sees the following items in the screen
            | item       | value       |
            | help modal | not visible |

    @OCCL032
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited to simulate a user with only one valid account
    Scenario: Verify account selection section when user has one account
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "account selection" section of oc car loan
        Then the user sees the following items in the screen
            | item                    | value       |
            | header                  |             |
            | exit button             |             |
            | description title       |             |
            | description first half  | one account |
            | description second half |             |
            | accounts title          |             |
            | accounts                | one account |
            | accept button           |             |

    @OCCL033
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited to simulate a user with more than 3 valid accounts
    Scenario: Verify account list section when user has more than three accounts
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "account list selection" section of oc car loan
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | exit button |
            | accounts    |

    @OCCL034
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited to simulate a user without valid accounts
    Scenario: Verify modal when the user doesnt have valid accounts
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user attempts to access the "account selection" section of oc car loan
        Then the user sees the following items in the screen
            | item                     |
            | help modal header        |
            | help modal exit button   |
            | help modal icon          |
            | help modal title         |
            | help modal description   |
            | help modal accept button |

    @OCCL035
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited to simulate a user without valid accounts
    Scenario Outline: Verify tracking after exiting modal with <option> button when the user doesnt have valid accounts
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user attempts to access the "account selection" section of oc car loan
        When the user closes the modal with the "<option>" exit option
        Then the user sees the following items in the screen
            | item                           | value       |
            | loan status                    | stopped     |
            | select account status          | stopped     |
            | select account tracking status | error       |
            | select account subtext         | alert       |
            | help modal                     | not visible |

        Examples:
            | option |
            | top    |
            | bottom |

    @OCCL036
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify terms and conditions modal on the signing documents section
        Given a user with the following criteria
            | criteria                        |
            | digital car loan offer rejected |
        And the user accesses the oc car loan offer tracking
        And the user accesses the "sign documents" section of oc car loan
        When the user accesses to the "terms and conditions" modal
        Then the user sees the following items in the screen
            | item                     |
            | help modal header        |
            | help modal close button  |
            | help modal icon          |
            | help modal title         |
            | help modal bullet points |
            | help modal accept button |

    @OCCL037
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify terms and conditions for a recreational motorcycle
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        And the user accesses the "sign documents" section of oc car loan
        And the user accesses to the "terms and conditions" modal
        And the user closes the modal with the "top" exit option
        When the user accesses to the "terms and conditions" modal
        Then the user sees the following items in the screen
            | item                     | value    |
            | help modal bullet points | rec bike |

    @OCCL038
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify contract signing section that user gets a life insurance and damage insurance on his own
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        When the user accesses the "sign documents" section of oc car loan
        Then the user sees the following items in the screen
            | item                                | value   |
            | details life insurer title          | hidden  |
            | details life insurer                | hidden  |
            | details life insurance type title   |         |
            | details life insurance type         | his own |
            | details life insurance cost title   | hidden  |
            | details life insurance cost         | hidden  |
            | details damage insurer title        | hidden  |
            | details damage insurer              | hidden  |
            | details damage insurance type title |         |
            | details damage insurance type       | his own |
            | details damage insurance cost title | hidden  |
            | details damage insurance cost       | hidden  |
            | contract fourth check               | hidden  |

    @OCCL039
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate a success response 200 ok
    Scenario: Verify contract signing success section for a user that gets a life insurance and damage insurance on his own
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "sign documents success" section of oc car loan
        Then the user sees the following items in the screen
            | item                           | value   |
            | life insurance insurer title   | hidden  |
            | life insurance insurer         | hidden  |
            | life insurance type title      |         |
            | life insurance type            | his own |
            | life insurance cost title      | hidden  |
            | life insurance cost            | hidden  |
            | damage insurance insurer title | hidden  |
            | damage insurance insurer       | hidden  |
            | damage insurance type title    |         |
            | damage insurance type          | his own |
            | damage insurance cost title    | hidden  |
            | damage insurance cost          | hidden  |

    @OCCL040
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify contract signing section for a user that signs on the Life insurance and Damage insurance with BBVA and makes a cash payment for both
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        When the user accesses the "sign documents" section of oc car loan
        Then the user sees the following items in the screen
            | item                                | value           |
            | details life insurer title          |                 |
            | details life insurer                | bbva            |
            | details life insurance type title   |                 |
            | details life insurance type         | cash            |
            | details life insurance cost title   |                 |
            | details life insurance cost         |                 |
            | details damage insurer title        |                 |
            | details damage insurer              | bbva            |
            | details damage insurance type title |                 |
            | details damage insurance type       | cash            |
            | details damage insurance cost title |                 |
            | details damage insurance cost       |                 |
            | contract third check text           | both insurances |

    @OCCL041
    @web @ios @android
    @MX
    @backend(test) @smokeTest
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate a success response 200 ok
    Scenario: Verify contract signing succes for a user that finances life and damage insurance with bbva and pays in cash
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "sign documents success" section of oc car loan
        Then the user sees the following items in the screen
            | item                           | value |
            | life insurance insurer title   |       |
            | life insurance insurer         | bbva  |
            | life insurance type title      |       |
            | life insurance type            | cash  |
            | life insurance cost title      |       |
            | life insurance cost            |       |
            | damage insurance insurer title |       |
            | damage insurance insurer       | bbva  |
            | damage insurance type title    |       |
            | damage insurance type          | cash  |
            | damage insurance cost title    |       |
            | damage insurance cost          |       |

    @OCCL042
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify contract signing section for a user that signs on the Life insurance with BBVA and the Damage insurance with another insurance carrier
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        When the user accesses the "sign documents" section of oc car loan
        Then the user sees the following items in the screen
            | item                                | value               |
            | details life insurer title          |                     |
            | details life insurer                | bbva                |
            | details life insurance type title   |                     |
            | details life insurance type         | financed            |
            | details life insurance cost title   |                     |
            | details life insurance cost         |                     |
            | details damage insurer title        |                     |
            | details damage insurer              | qualitas            |
            | details damage insurance type title |                     |
            | details damage insurance type       | financed            |
            | details damage insurance cost title |                     |
            | details damage insurance cost       |                     |
            | contract third check text           | only life insurance |

    @OCCL043
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate a success response 200 ok
    Scenario: Verify contract signing success for financing life insurance with bbva and damage with another insurer
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "sign documents success" section of oc car loan
        Then the user sees the following items in the screen
            | item                           | value    |
            | life insurance insurer title   |          |
            | life insurance insurer         | bbva     |
            | life insurance type title      |          |
            | life insurance type            | financed |
            | life insurance cost title      |          |
            | life insurance cost            |          |
            | damage insurance insurer title |          |
            | damage insurance insurer       | qualitas |
            | damage insurance type title    |          |
            | damage insurance type          | financed |
            | damage insurance cost title    |          |
            | damage insurance cost          |          |

    @OCCL044
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify contract signing section for a user that finances Life insurance with BBVA and the Damage insurance on his own
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        When the user accesses the "sign documents" section of oc car loan
        Then the user sees the following items in the screen
            | item                                | value               |
            | details life insurer title          |                     |
            | details life insurer                | bbva                |
            | details life insurance type title   |                     |
            | details life insurance type         | financed            |
            | details life insurance cost title   |                     |
            | details life insurance cost         |                     |
            | details damage insurer title        | hidden              |
            | details damage insurer              | hidden              |
            | details damage insurance type title |                     |
            | details damage insurance type       | his own             |
            | details damage insurance cost title | hidden              |
            | details damage insurance cost       | hidden              |
            | contract third check text           | only life insurance |

    @OCCL045
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate a success response 200 ok
    Scenario: Verify contract signing success for a user that finances Life insurance with BBVA and the Damage insurance on his own
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "sign documents success" section of oc car loan
        Then the user sees the following items in the screen
            | item                           | value    |
            | life insurance insurer title   |          |
            | life insurance insurer         | bbva     |
            | life insurance type title      |          |
            | life insurance type            | financed |
            | life insurance cost title      |          |
            | life insurance cost            |          |
            | damage insurance insurer title | hidden   |
            | damage insurance insurer       | hidden   |
            | damage insurance type title    |          |
            | damage insurance type          | his own  |
            | damage insurance cost title    | hidden   |
            | damage insurance cost          | hidden   |

    @OCCL046
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify contract signing section for a user that finances Damage insurance with BBVA and the Life insurance on his own
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        When the user accesses the "sign documents" section of oc car loan
        Then the user sees the following items in the screen
            | item                                | value                 |
            | details life insurer title          | hidden                |
            | details life insurer                | hidden                |
            | details life insurance type title   |                       |
            | details life insurance type         | his own               |
            | details life insurance cost title   | hidden                |
            | details life insurance cost         | hidden                |
            | details damage insurer title        |                       |
            | details damage insurer              | bbva                  |
            | details damage insurance type title |                       |
            | details damage insurance type       | financed              |
            | details damage insurance cost title |                       |
            | details damage insurance cost       |                       |
            | contract third check text           | only damage insurance |

    @OCCL047
    @web @ios @android
    @MX
    @backend(test) @smokeTest
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate a success response 200 ok
    Scenario: Verify contract signing success for a user that finances Damage insurance with BBVA and the Life insurance on his own
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "sign documents success" section of oc car loan
        Then the user sees the following items in the screen
            | item                           | value    |
            | life insurance insurer title   | hidden   |
            | life insurance insurer         | hidden   |
            | life insurance type title      |          |
            | life insurance type            | his own  |
            | life insurance cost title      | hidden   |
            | life insurance cost            | hidden   |
            | damage insurance insurer title |          |
            | damage insurance insurer       | bbva     |
            | damage insurance type title    |          |
            | damage insurance type          | financed |
            | damage insurance cost title    |          |
            | damage insurance cost          |          |

    @OCCL048
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify contract signing section for a user that signs on Smart buy with multiyear financing
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        When the user accesses the "sign documents" section of oc car loan
        Then the user sees the following items in the screen
            | item                                     | value           |
            | details credit name                      | future value    |
            | first monthly pay period title           |                 |
            | first monthly pay period                 |                 |
            | second monthly pay period title          |                 |
            | second monthly pay period                |                 |
            | guaranteed value title                   |                 |
            | guaranteed value                         |                 |
            | details life insurer title               |                 |
            | details life insurer                     | bbva            |
            | details life insurance type title        |                 |
            | details life insurance type              | financed        |
            | details life insurance cost title        |                 |
            | details life insurance cost              |                 |
            | details damage insurer title             |                 |
            | details damage insurer                   | bbva            |
            | details damage insurance type title      |                 |
            | details damage insurance type            | multiyear       |
            | details damage insurance cost title      |                 |
            | details damage insurance cost            |                 |
            | first period annual interest rate title  |                 |
            | first period annual interest rate        |                 |
            | second period annual interest rate title |                 |
            | second period annual interest rate       |                 |
            | first period cat without iva title       |                 |
            | first period cat without iva             |                 |
            | first period cat without iva subtext     |                 |
            | second period cat without iva title      |                 |
            | second period cat without iva            |                 |
            | second period cat without iva subtext    |                 |
            | first period total payment title         |                 |
            | first period total payment               |                 |
            | second period total payment title        |                 |
            | second period total payment              |                 |
            | contract third check text                | both insurances |

    @OCCL049
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate a success response 200 ok
    Scenario: Verify contract signing success for a user that signs on Smart buy with multiyear financing
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "sign documents success" section of oc car loan
        Then the user sees the following items in the screen
            | item                                     | value        |
            | credit name                              | future value |
            | first monthly pay period title           |              |
            | first monthly pay period                 |              |
            | second monthly pay period title          |              |
            | second monthly pay period                |              |
            | guaranteed value title                   |              |
            | guaranteed value                         |              |
            | life insurance insurer title             |              |
            | life insurance insurer                   | bbva         |
            | life insurance type title                |              |
            | life insurance type                      | financed     |
            | life insurance cost title                |              |
            | life insurance cost                      |              |
            | damage insurance insurer title           |              |
            | damage insurance insurer                 | bbva         |
            | damage insurance type title              |              |
            | damage insurance type                    | multiyear    |
            | damage insurance cost title              |              |
            | damage insurance cost                    |              |
            | first period annual interest rate title  |              |
            | first period annual interest rate        |              |
            | second period annual interest rate title |              |
            | second period annual interest rate       |              |
            | first period cat without iva title       |              |
            | first period cat without iva             |              |
            | second period cat without iva title      |              |
            | second period cat without iva            |              |
            | first period total payment title         |              |
            | first period total payment               |              |
            | second period total payment title        |              |
            | second period total payment              |              |

    @OCCL050
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify documents section for a user that signs the credit with accessories and extended warranty
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        When the user accesses the "sign documents" section of oc car loan
        Then the user sees the following items in the screen
            | item                                |
            | accesories import title             |
            | accesories import                   |
            | details extended warranty title     |
            | details extended warranty           |
            | details aesthetic accessories title |
            | details aesthetic accessories       |

    @OCCL051
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate a success response 200 ok
    Scenario: Verify contract signing success for a user that signs the credit with accessories and extended warranty
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "sign documents success" section of oc car loan
        Then the user sees the following items in the screen
            | item                       |
            | accesories import title    |
            | accesories import          |
            | extended warranty title    |
            | extended warranty          |
            | aesthetic accesories title |
            | aesthetic accesories       |

    @OCCL052
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify contract signing section for a user that signs on a Recreational Motorcycle credit with financed BBVA Life insurance
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        When the user accesses the "sign documents" section of oc car loan
        Then the user sees the following items in the screen
            | item                                | value               |
            | details credit name                 | rec bike            |
            | details life insurer title          |                     |
            | details life insurer                | bbva                |
            | details life insurance type title   |                     |
            | details life insurance type         | financed            |
            | details life insurance cost title   |                     |
            | details life insurance cost         |                     |
            | damage insurance section title      | hidden              |
            | details damage insurer title        | hidden              |
            | details damage insurer              | hidden              |
            | details damage insurance type title | hidden              |
            | details damage insurance type       | hidden              |
            | details damage insurance cost title | hidden              |
            | details damage insurance cost       | hidden              |
            | contract third check text           | only life insurance |

    @OCCL053
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate a success response 200 ok
    Scenario: Verify contract signing success for a user that signs on a Recreational Motorcycle credit with financed BBVA Life insurance
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "sign documents success" section of oc car loan
        Then the user sees the following items in the screen
            | item                           | value    |
            | credit name                    | rec bike |
            | life insurance insurer title   |          |
            | life insurance insurer         | bbva     |
            | life insurance type title      |          |
            | life insurance type            | financed |
            | life insurance cost title      |          |
            | life insurance cost            |          |
            | damage insurance insurer title | hidden   |
            | damage insurance insurer       | hidden   |
            | damage insurance type title    | hidden   |
            | damage insurance type          | hidden   |
            | damage insurance cost title    | hidden   |
            | damage insurance cost          | hidden   |

    @OCCL054
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify contract signing section for a user that selects, through the advisor, an account from another bank for the direct debit
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        When the user accesses the "sign documents" section of oc car loan
        Then the user sees the following items in the screen
            | item            | value    |
            | details account | external |

    @OCCL055
    @web @ios @android
    @MX
    @backend(test) @smokeTest
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate a success response 200 ok
    Scenario: Verify contract signing success for a user that selects, through the advisor, an account from another bank for the direct debit
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the "sign documents success" section of oc car loan
        Then the user sees the following items in the screen
            | item    | value   |
            | account | banamex |

    @OCCL056
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify exit modal from document signing section before signing
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        And the user accesses the "sign documents" section of oc car loan
        And the user accesses to the exit modal but cancels the exit
        When the user accesses to the exit modal
        Then the user sees the following items in the screen
            | item                     |
            | help modal icon          |
            | help modal content       |
            | help modal accept button |
            | help modal cancel button |

    @OCCL057
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify exit from document signing section before signing
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        And the user accesses the "sign documents" section of oc car loan
        When the user goes back to previous page
        Then the user accesses the "oc car loan tracking" screen

    @OCCL058
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    Scenario: Verify entry and closing of the conditions step from Document signing summary
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        And the user accesses the oc car loan offer tracking
        And the user accesses the "sign documents" section of oc car loan
        And the user completes the whole documents signing section
        And the user edits the "conditions" step from summary step
        When the user completes the whole documents signing section
        Then the user sees the following items in the screen
            | item                   |
            | contract change button |

    @OCCL059
    @web @ios @android
    @MX
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank @vbank-modified
    #Edited vbank record to simulate a rejected response
    Scenario: Check card when documents are verified and rejected before the user signs the contract
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        Then the user sees the following items in the screen
            | item          | offer       | text             |
            | banner status | oc-car-loan | request rejected |

    @OCCL060
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate a rejected response
    Scenario: Verify tracking when documents are verified and rejected before the user signs the contract
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses the oc car loan offer tracking
        Then the user sees the following items in the screen
            | item                                  | value          |
            | loan status                           | rejected       |
            | notification message container        | error          |
            | notification message text             | rejected basic |
            | select account status                 | done           |
            | select account tracking status        | completed      |
            | sign documents status                 | rejected       |
            | sign documents tracking status        | error          |

    @OCCL061
    @web @ios @android
    @MX
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-254311
    @vbank @vbank-modified
    #Edited vbank record to simulate a cancel response
    Scenario: Verify offer card when the user decides to cancel their request on the down payment step
        Given a user with the following criteria
            | criteria               |
            | digital car loan offer |
        When the user accesses contract product section
        Then the user sees the following items in the screen
            | item          | offer       | text             |
            | banner status | oc-car-loan | request canceled |

    @OCCL062
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank @vbank-modified
    #Edited vbank record to simulate a cancel response
    Scenario: Verify tracking when the user decides to cancel their request on the down payment step
        Given a user with the following criteria
            | criteria                        |
            | digital car loan offer rejected |
        When the user accesses the oc car loan offer tracking
        Then the user sees the following items in the screen
            | item                                  | value    |
            | loan status                           | canceled |
            | notification message container        | error    |
            | notification message text             | canceled |
