@carLoan
Feature: Car Loan

    @CARL002
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: The user enters car loan from the opportunities screen
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        When the user accesses to the car loan offer from "opportunities"
        Then the user sees the following items in the screen
            | item                                      | value     |
            | banner logo                               |           |
            | banner content                            |           |
            | loan main title                           |           |
            | step one initial text                     |           |
            | radio buttons header                      |           |
            | new radio button                          | checked   |
            | new radio button info                     |           |
            | used radio button                         | unchecked |
            | used radio button info                    |           |
            | import info                               |           |
            | import input                              |           |
            | import message                            |           |
            | term title                                |           |
            | term value                                |           |
            | term bar                                  |           |
            | term current                              |           |
            | term options                              |           |
            | considerations title                      |           |
            | considerations first item                 |           |
            | considerations second item                |           |
            | rate and costs title                      |           |
            | mensual rate title                        |           |
            | mensual rate help button                  |           |
            | mensual rate description                  |           |
            | commision for operture title              |           |
            | commision for operture help button        |           |
            | commision for operture description        |           |
            | cat title                                 |           |
            | cat help button                           |           |
            | cat description                           |           |
            | cat info                                  |           |
            | iva info                                  |           |
            | cotization first info message             |           |
            | preapproved initial cotization title      |           |
            | preapproved initial cotization ammount    |           |
            | preapproved initial cotization additional |           |
            | continue preapproved button               |           |

    @CARL003
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user checks the terms and conditions checkboxes
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        And the user continues to the "terms and conditions" step
        When the user completes the terms and conditions step
        Then the user sees the following items in the screen
            | item                                 | value   |
            | terms and conditions continue button | enabled |

    @CARL004
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: The user goes to the summary step
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        When the user continues to the "summary" step
        Then the user sees the following items in the screen
            | item                               |
            | summary title                      |
            | summary step one edit button       |
            | summary ammount title              |
            | summary ammount                    |
            | terms and conditions summary title |
            | terms and conditions edit button   |
            | summary accepted                   |
            | summary email title                |
            | summary email                      |
            | summary contract button            |

    @CARL005
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @smokeTest
    Scenario Outline: A user who <mailStatus> succesfully requests a car loan
        Given a user with the following criteria
            | criteria |
            | car loan |
            | <user>   |
        And the user accesses to the car loan offer from "opportunities"
        And the user continues to the "summary" step
        When the user accepts the summary
        Then the user sees the following items in the screen
            | item                    | value        |
            | header title            |              |
            | exit button             |              |
            | banner icon             |              |
            | banner title            |              |
            | date                    |              |
            | ammount                 |              |
            | car type                |              |
            | term                    |              |
            | mensual payment         |              |
            | interest rate           |              |
            | commision for opperture |              |
            | cat                     |              |
            | folio                   |              |
            | notification icon       |              |
            | notification text       |              |
            | notification phone      |              |
            | mail text               | <mailStatus> |
            | mail                    | <mailStatus> |
            | extra info              |              |
            | accept button           |              |

        Examples:
            | mailStatus       | user                  |
            | doesnt have mail | car loan without mail |
            | has mail         | car loan with mail    |

    @CARL006
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user selects the used option
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        When the user selects the "used" car option
        Then the user sees the following items in the screen
            | item              | value     |
            | new radio button  | unchecked |
            | used radio button | checked   |
            | cat description   |           |

    @CARL007
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: The user modifys the loan ammount with <ammount>
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        When the user inputs "<ammount>" as a loan ammount
        Then the user sees the following items in the screen
            | item         | value     |
            | import input | <ammount> |

        Examples:
            | ammount |
            | 500000  |
            | empty   |

    @CARL008
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user selects the used car option with an empty ammount
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        And the user inputs "empty" as a loan ammount
        When the user selects the "used" car option
        Then the user sees the following items in the screen
            | item              | value     |
            | new radio button  | unchecked |
            | used radio button | checked   |
            | cat description   |           |
            | import input      | empty     |

    @CARL009
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user modifys the payment term
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        When the user modifys the loan term
        Then the user confirms the term has changed

    @CARL010
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user sees the mensual rate help modal
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        When the user enters the "mensual rate" modal
        Then the user sees the following items in the screen
            | item                              |
            | interest rate modal header title  |
            | interest rate modal exit button   |
            | interest rate modal title         |
            | interest rate modal first text    |
            | interest rate modal second text   |
            | interest rate modal accept button |

    @CARL011
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user sees the commision for opperture help modal
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        When the user enters the "commision for opperture" modal
        Then the user sees the following items in the screen
            | item                                        |
            | commision for opperture modal header title  |
            | commision for opperture modal exit button   |
            | commision for opperture modal title         |
            | commision for opperture modal first text    |
            | commision for opperture modal second text   |
            | commision for opperture modal accept button |

    @CARL012
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user sees the cat help modal
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        When the user enters the "cat" modal
        Then the user sees the following items in the screen
            | item                    |
            | cat modal header title  |
            | cat modal exit button   |
            | cat modal title         |
            | cat modal text          |
            | cat modal accept button |

    @CARL013
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user sees the terms and conditions modal
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        And the user continues to the "terms and conditions" step
        When the user enters the "terms and conditions" modal
        Then the user sees the following items in the screen
            | item                                   |
            | terms and conditions modal title       |
            | terms and conditions exit button       |
            | terms and conditions modal logo        |
            | terms and conditions bullet list one   |
            | terms and conditions bullet list two   |
            | terms and conditions bullet list three |
            | terms and conditions bullet list four  |
            | terms and conditions bullet list five  |

    @CARL014
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user sees the authorization modal
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        And the user continues to the "terms and conditions" step
        When the user enters the "authorization" modal
        Then the user sees the following items in the screen
            | item                              |
            | authorization modal header title  |
            | authorization modal exit button   |
            | authorization modal logo          |
            | authorization modal title         |
            | authorization modal first text    |
            | authorization modal second text   |
            | authorization modal accept button |

    @CARL015
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: The user wants to modify the car loan values
        Given a user with the following criteria
            | criteria              |
            | car loan              |
            | car loan without mail |
        And the user accesses to the car loan offer from "opportunities"
        And the user continues to the "summary" step
        When the user wants to change the car loan values
        Then the user sees the following items in the screen
            | item                                      | value     |
            | banner logo                               |           |
            | banner content                            |           |
            | loan main title                           |           |
            | step one initial text                     |           |
            | radio buttons header                      |           |
            | new radio button                          | checked   |
            | new radio button info                     |           |
            | used radio button                         | unchecked |
            | used radio button info                    |           |
            | import info                               |           |
            | import input                              |           |
            | import message                            |           |
            | term title                                |           |
            | term value                                |           |
            | term bar                                  |           |
            | term current                              |           |
            | term options                              |           |
            | considerations title                      |           |
            | considerations first item                 |           |
            | considerations second item                |           |
            | rate and costs title                      |           |
            | mensual rate title                        |           |
            | mensual rate help button                  |           |
            | mensual rate description                  |           |
            | commision for operture title              |           |
            | commision for operture help button        |           |
            | commision for operture description        |           |
            | cat title                                 |           |
            | cat help button                           |           |
            | cat description                           |           |
            | cat info                                  |           |
            | iva info                                  |           |
            | cotization first info message             |           |
            | preapproved initial cotization title      |           |
            | preapproved initial cotization ammount    |           |
            | preapproved initial cotization additional |           |
            | continue preapproved button               |           |

    @CARL016
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user wants to check the terms and conditions
        Given a user with the following criteria
            | criteria              |
            | car loan              |
            | car loan without mail |
        And the user accesses to the car loan offer from "opportunities"
        And the user continues to the "summary" step
        When the user wants to check the terms and conditions
        Then the user sees the following items in the screen
            | item                                       | value            |
            | edit cotization button                     |                  |
            | terms and conditions title                 |                  |
            | terms and conditions of contract link      |                  |
            | credit history authorization link          |                  |
            | terms and conditions first check           |                  |
            | terms and conditions notifications message |                  |
            | terms and conditions continue button       | enabled          |

    @CARL017
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user closes the functionality from de car loan step
        Given a user with the following criteria
            | criteria              |
            | car loan              |
            | car loan without mail |
        And the user accesses to the car loan offer from "opportunities"
        When the user "without changes" exits the functionality
        Then the user accesses the "contract product section" screen

    @CARL018
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user trys to exit from the terms and conditions step after making changes
        Given a user with the following criteria
            | criteria              |
            | car loan              |
            | car loan without mail |
        And the user accesses to the car loan offer from "opportunities"
        And the user modifys the loan term
        And the user continues to the "terms and conditions" step
        When the user "decides to" exits the functionality
        Then the user sees the following items in the screen
            | item                    |
            | leave modal icon        |
            | leave modal text        |
            | leave modal exit button |
            | leave modal stay button |

    @CARL019
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: The user definitelly exits from the terms and conditions step after making changes
        Given a user with the following criteria
            | criteria              |
            | car loan              |
            | car loan without mail |
        And the user accesses to the car loan offer from "opportunities"
        And the user modifys the loan term
        And the user continues to the "terms and conditions" step
        When the user "definitely" exits the functionality
        Then the user accesses the "contract product section" screen

    @CARL020
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user returns after trying to exit from the terms and conditions step after making changes
        Given a user with the following criteria
            | criteria              |
            | car loan              |
            | car loan without mail |
        And the user accesses to the car loan offer from "opportunities"
        And the user modifys the loan term
        And the user continues to the "terms and conditions" step
        When the user "initially" exits the functionality
        Then the user sees the following items in the screen
            | item                                       | value            |
            | edit cotization button                     |                  |
            | terms and conditions title                 |                  |
            | terms and conditions of contract link      |                  |
            | credit history authorization link          |                  |
            | terms and conditions first check           |                  |
            | terms and conditions notifications message |                  |
            | terms and conditions continue button       | disabled         |

    @CARL021
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: The user adds a <value> value to the import
        Given a user with the following criteria
            | criteria              |
            | car loan              |
            | car loan without mail |
        And the user accesses to the car loan offer from "opportunities"
        When the user inputs "<import>" as a loan ammount
        Then the user sees the following items in the screen
            | item                 |
            | import error message |

        Examples:
            | value   | import    |
            | lesser  | 1000      |
            | greater | 20000000  |
            | decimal | 100000.10 |

    @CARL022
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: Error case - the user is denied the loan
        Given a user with the following criteria
            | criteria               |
            | car loan               |
            | car loan credit bureau |
        And the user accesses to the car loan offer from "opportunities"
        And the user continues to the "summary" step
        When the user applies for the loan
        Then the user sees the following items in the screen
            | item                        |
            | rejected loan icon          |
            | rejected loan title         |
            | rejected loan text          |
            | rejected loan link          |
            | rejected loan accept button |

    @CARL023
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: Error case - the user incorrectly signs the request
        Given a user with the following criteria
            | criteria              |
            | car loan              |
            | car loan without mail |
        And the user accesses to the car loan offer from "opportunities"
        And the user continues to the "summary" step
        When the user applies for the loan with a bad otp
        Then the user sees an error modal with the following elements:
            | item          |
            | title         |
            | hero image    |
            | main text     |
            | accept button |
            | cancel button |

    @CARL024
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: The user selects a term of 36 months
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        When the user select 36 months
        Then the user sees the following items in the screen
            | item                               |
            | term title                         |
            | term value                         |
            | import info                        |
            | import input                       |
            | import message                     |
            | term bar                           |
            | term current                       |
            | term options                       |
            | considerations title               |
            | considerations first item          |
            | considerations second item         |
            | rate and costs title               |
            | mensual rate title                 |
            | mensual rate help button           |
            | mensual rate description           |
            | commision for operture title       |
            | commision for operture help button |
            | commision for operture description |

    @CARL025
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: Error case - It is not possible to complete the calculation of your quote
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        And the user inputs "2000000" as a loan ammount
        When the user selects a term
        Then the user sees an error modal with the following elements:
            | item           |
            | main text      |
            | accept button  |
            | paragraph icon |

    @CARL026
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: A user who successfully applies for a used car loan
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        And the user selects the "used" car option
        And the user select 36 months
        And the user continues to the "summary" step
        When the user accepts the summary
        Then the user sees the following items in the screen
            | item                    |
            | header title            |
            | exit button             |
            | banner icon             |
            | banner title            |
            | date                    |
            | ammount                 |
            | car type                |
            | term                    |
            | mensual payment         |
            | interest rate           |
            | commision for opperture |
            | cat                     |
            | folio                   |
            | notification icon       |
            | notification text       |
            | notification phone      |
            | mail text               |
            | mail                    |
            | extra info              |
            | accept button           |

    @CARL027
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: The user taps on the understand button while on the <screen> screen
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        And the user enters the "<screen>" modal
        When the user exits the "<screen>" screen
        Then the user sees the following items in the screen
            | item                                       |
            | terms and conditions title                 |
            | terms and conditions of contract link      |
            | credit history authorization link          |
            | terms and conditions first check           |
            | terms and conditions notifications message |

        Examples:
            | screen                  |
            | mensual rate            |
            | commision for opperture |
            | cat                     |

    @CARL028
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: The user taps on the understand button while on the <screen>
        Given a user with the following criteria
            | criteria           |
            | car loan           |
            | car loan with mail |
        And the user accesses to the car loan offer from "opportunities"
        And the user continues to the "<screen>" step
        And the user enters the "<screen>" modal
        When the user exits the "<screen>" screen
        Then the user sees the following items in the screen
            | item                                       |
            | terms and conditions title                 |
            | terms and conditions of contract link      |
            | credit history authorization link          |
            | terms and conditions first check           |
            | terms and conditions notifications message |

        Examples:
            | screen               |
            | terms and conditions |
            | authorization        |
