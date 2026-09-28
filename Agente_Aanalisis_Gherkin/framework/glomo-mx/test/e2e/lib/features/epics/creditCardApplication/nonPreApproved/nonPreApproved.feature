@nonPreApproved
Feature: Non Pre Approved Credit Card

    @NPA001
    @MX @vbank @backend(test) @smokeTest @web-done @manual @JIRA.GLOMOMX-214563
    @web @ios @android @vbank-modified
    Scenario: Non pre approved - Happy path
        Given a user with the following criteria
            | criteria       |
            | NPA Offer      |
            | NPA Happy Path |
        When the user enters the non pre approved offer and advances
        And the user changes the credit line and continues
        Then the user accesses the "credit card holder" screen

    @NPA002
    @MX @vbank @backend(test) @web-done
    @web @ios @android @vbank-modified @backend-smoke
    Scenario: Validate elements of bureau check page
        Given a user with the following criteria
            | criteria       |
            | NPA Offer      |
            | NPA Happy Path |
        When the user enters the non pre approved offer "successfully"
        Then the user sees the following items in the screen
            | item                            |  value   |
            | page title                      |          |
            | exit button                     |          |
            | lens icon                       |          |
            | top description                 |          |
            | bottom description              |          |
            | modal button icon               |          |
            | modal button text               |          |
            | checkbox bureau container       |          |
            | checkbox bureau text            |          |
            | checkbox confirmation container |          |
            | checkbox confirmation text      |          |
            | notice text                     |          |
            | confirm button                  | disabled |

    @NPA003
    @MX @vbank @backend(test) @web-done
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Validate modal "Authorize credit history consultation"
        Given a user with the following criteria
            | criteria       |
            | NPA Offer      |
            | NPA Happy Path |
        And the user enters the non pre approved offer "successfully"
        When the user accesses the bureau consultation notice
        Then the user sees the following items in the screen
            | item                             |
            | exit modal notification button   |
            | modal notification text          |

    @NPA004
    @MX @vbank @backend(test) @web-done
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Validate functionality of buttons in modal "Authorize credit history consultation"
        Given a user with the following criteria
            | criteria       |
            | NPA Offer      |
            | NPA Happy Path |
        And the user enters the non pre approved offer "successfully"
        And the user accesses the bureau consultation notice
        When the user closes the modal with the "top" exit option
        Then the user sees the following items in the screen
            | item                 | value       |
            | help modal container | not visible |

    @NPA006
    @MX @vbank @backend(test) @web-done
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    Scenario: Verify credit card modal info
        Given a user with the following criteria
            | criteria       |
            | NPA Offer      |
            | NPA Happy Path |
        And the user enters the non pre approved offer and advances
        When the user accesses to more info on credit card offer screen
        Then the user sees the following items in the screen
            | item                     |
            | close modal button       |
            | top modal info title     |
            | top modal info           |
            | second top modal info    |
            | bottom modal info title  |
            | bottom modal info        |
            | second bottom modal info |

    @NPA007
    @MX @vbank @backend(test) @web-done
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    Scenario: Verify credit card modal info exit buttons
        Given a user with the following criteria
            | criteria       |
            | NPA Offer      |
            | NPA Happy Path |
        And the user enters the non pre approved offer and advances
        And the user accesses to more info on credit card offer screen
        When the user closes the modal with the "top" exit option
        Then the user sees the following items in the screen
            | item                 | value       |
            | help modal container | not visible |

    @NPA008
    @MX @vbank @backend(test) @web-done @manual @JIRA.GLOMOMX-214563
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    Scenario: Verify modal when user abandons offer
        Given a user with the following criteria
            | criteria       |
            | NPA Offer      |
            | NPA Happy Path |
        And the user enters the non pre approved offer and advances
        When the user exits the credit card offer
        Then the user sees a modal with the following elements:
            | item          |
            | warning icon  |
            | description   |
            | accept button |
            | cancel button |

    @NPA009
    @MX @vbank @backend(test) @web-done @manual @JIRA.GLOMOMX-214563
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    Scenario: Verify buttons when user abandons offer
        Given a user with the following criteria
            | criteria       |
            | NPA Offer      |
            | NPA Happy Path |
        And the user enters the non pre approved offer and advances
        And the user exits the credit card offer
        And the user exits the credit card offer and "returns"
        And the user exits the credit card offer
        When the user exits the credit card offer and "leaves"
        Then the user accesses the "contract product section" screen

    @NPA010
    @MX @vbank @backend(test) @web-done
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    Scenario Outline: Inputted <amount> money in credit line
        Given a user with the following criteria
            | criteria         |
            | NPA Offer        |
            | NPA Happy Path   |
        And the user enters the non pre approved offer and advances
        When the user deletes the default amount and enters "<amount>" money in the input
        Then the user sees the following items in the screen
            | item                 | value    |
            | error amount message | <amount> |

        Examples:
            | amount |
            | less   |
            | no     |
            | more   |

    @NPA011
    @MX @vbank @backend(test) @web-done
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    Scenario: Verify default credit line can't be changed
        Given a user with the following criteria
            | criteria                  |
            | NPA Offer                 |
            | NPA Default Credit Amount |
        When the user enters the non pre approved offer and advances
        Then the user sees the following items in the screen
            | item           | value  |
            | amount input   | hidden |
            | default amount |        |

    @NPA012
    @MX @vbank @backend(test) @web-done
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Rejection for missing personal information
        Given a user with the following criteria
            | criteria                 |
            | NPA Offer                |
            | NPA Missing Profile Info |
        When the user enters the non pre approved offer "unsuccessfully"
        Then the user sees a modal with the following elements:
            | item                      |
            | header                    |
            | close button              |
            | container icon paragraph  |
            | title                     |
            | bullets list              |
            | icon message              |
            | share button              |
            | find branch button        |
            | accept button             |

    @NPA013
    @MX @vbank @backend(test) @web-done
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    Scenario: Negative response from bureau
        Given a user with the following criteria
            | criteria            |
            | NPA Offer           |
            | NPA Bureau Rejected |
        When the user attempts to enter the non pre approved offer
        Then the user sees the following items in the screen
            | item                          |
            | rejection modal header        |
            | rejection modal image         |
            | rejection modal title         |
            | rejection modal description   |
            | rejection modal accept button |

    @NPA014
    @MX @vbank @backend(test) @web-done
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    Scenario: Rejected for insufficient pay capacity
        Given a user with the following criteria
            | criteria          |
            | NPA Offer         |
            | NPA Lacking Money |
        When the user attempts to enter the non pre approved offer
        Then the user sees the following items in the screen
            | item                          |
            | rejection modal header        |
            | rejection modal image         |
            | rejection modal title         |
            | rejection modal description   |
            | rejection modal find atm      |
            | rejection modal accept button |

    @NPA015
    @MX @vbank @backend(test) @web-done
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    Scenario: Negative response from bureau without solution
        Given a user with the following criteria
            | criteria             |
            | NPA Offer            |
            | NPA Without Solution |
        When the user attempts to enter the non pre approved offer
        Then the user sees the following items in the screen
            | item                          |
            | rejection modal header        |
            | rejection modal image         |
            | rejection modal title         |
            | rejection modal description   |
            | rejection modal accept button |

    @NPA016
    @MX @vbank @backend(test) @web-done
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Verify functionality of exit button for Missing Profile Info rejection
        Given a user with the following criteria
            | criteria                 |
            | NPA Offer                |
            | NPA Missing Profile Info |
        And the user enters the non pre approved offer "unsuccessfully"
        When the user accepts the modal
        Then the user accesses the "contract product section" screen

    @NPA017
    @MX @vbank @backend(test) @web-done
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    Scenario Outline: Verify functionality of exit button for <user type> rejection
        Given a user with the following criteria
            | criteria    |
            | NPA Offer   |
            | <user type> |
        And the user attempts to enter the non pre approved offer
        When the user exits the rejection modal
        Then the user accesses the "contract product section" screen

        Examples:
            | user type              |
            | NPA Bureau Rejected    |
            | NPA Lacking Money      |
            | NPA Without Solution   |

    @NPA018
    @MX @vbank @backend(test) @web-done
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Previous authorization from credit bureau
        Given a user with the following criteria
            | criteria                   |
            | NPA Offer                  |
            | NPA Previous Authorization |
        When the user enters the non pre approved offer "successfully"
        Then the user sees the following items in the screen
            |  item                           |
            | modal button icon               |
            | modal button text               |
            | checkbox bureau container       |
            | checkbox bureau text            |
            | checkbox confirmation container |
            | checkbox confirmation text      |

    @NPA019
    @MX @vbank @backend(test) @web-done
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    Scenario: Continue after one load error
        Given a user with the following criteria
            | criteria       |
            | NPA Offer      |
            | NPA Happy Path |
        And the user attempts to enter the non pre approved offer
        When the user retries "1" more times
        Then the user accesses the "non pre approved credit card offer" screen

    @NPA020
    @MX @vbank @backend(test) @web-done
    @web @ios @android @vbank-modified @alternate-scenarios-smoke
    Scenario: Exit after three load errors
        Given a user with the following criteria
            | criteria       |
            | NPA Offer      |
            | NPA Happy Path |
        And the user attempts to enter the non pre approved offer
        And the user retries "3" more times
        When the user accepts the error modal
        Then the user accesses the "contract product section" screen
