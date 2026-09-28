@upgradeCustomer
Feature: Upgrade Customer

    @UCO002
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    @smokeTest
    Scenario Outline: The user requests the account upgrade <scenario>
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to the first account product detail
        And the user accesses to upgrade customer from "operatives"
        And the user gives consent to the "processing of documents" and the "account upgrade"
        When the user accepts the modal
        Then the user sees the following items in the screen
            | item       |
            | header otp |
            | title otp  |

        Examples:
            | user                         | scenario   |
            | account n2 pending documents | with QA    |
            | account n2 with documents    | whitout QA |

    @UCO003
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test) @backend-smoke
    Scenario: The user accesses to warning modal
        Given a user with the following criteria
            | criteria                     |
            | account n2 pending documents |
        And the user accesses to the first account product detail
        And the user accesses to upgrade customer from "operatives"
        And the user gives consent to the "processing of documents"
        When the user tries to close the modal
        Then the user sees the following items in the screen
            | item             |
            | warning title    |
            | warning close    |
            | warning exit     |
            | warning continue |

    @UCO004
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test) @backend-smoke
    Scenario: Exit process and access the warning modal
        Given a user with the following criteria
            | criteria             |
            | account n2 nominated |
        And the user accesses to the first account product detail
        And the user accesses to upgrade customer from "operatives"
        And the user gives consent to the "account upgrade"
        When the user tries to close the modal
        Then the user sees the following items in the screen
            | item             |
            | warning title    |
            | warning close    |
            | warning exit     |
            | warning continue |

    @UCO005
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test) @backend-smoke
    Scenario Outline: Exit process <scenario>
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to the first account product detail
        And the user accesses to upgrade customer from "operatives"
        And the user gives consent to the "account upgrade"
        When the user tries to close the modal and "closes it"
        Then the user accesses the "product detail account" screen

        Examples:
            | user                         | scenario      |
            | account n2 pending documents | after changes |
            | account n2 nominated         | nominee       |

    @UCO006
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test) @backend-smoke
    Scenario Outline: Access to screen upgrade account <scenario>
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to the first account product detail
        When the user accesses to upgrade customer from "warning banner"
        Then the user sees the following items in the screen
            | item              |
            | title             |
            | paragraph         |
            | privacy term      |
            | sworn declaration |

        Examples:
            | user                                 | scenario   |
            | account n4 pending documents alerted | with QA    |
            | account n4 with documents alerted    | whitout QA |

    @UCO007
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario Outline: The user does upgrade account <scenario>
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to the first account product detail
        And the user accesses to upgrade customer from "warning banner"
        And the user gives consent to the "processing of documents" and the "account upgrade"
        When the user accepts the modal
        Then the user sees the following items in the screen
            | item       |
            | header otp |
            | title otp  |

        Examples:
            | user                                 | scenario   |
            | account n4 pending documents alerted | with QA    |
            | account n4 with documents alerted    | whitout QA |

    @UCO008
    @vbank
    @MX @android @ios
    @web @tmpExclude @JIRA.GLOMOMX-254621
    @backend(test)
    Scenario: The user goes branch
        Given a user with the following criteria
            | criteria                     |
            | account n2 pending documents |
        And the user accesses to the first account product detail
        And the user accesses to upgrade customer from "operatives" with "kyc completed"
        And the user gives consent to the "processing of documents" and the "account upgrade"
        When the user accepts the modal
        Then the user sees the following items in the screen
            | item                 |
            | full modal header    |
            | required ine         |
            | required voucher     |
            | full continue button |

    @UCO009
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test) @backend-smoke
    Scenario: The user opens the privacy modal
        Given a user with the following criteria
            | criteria                     |
            | account n2 pending documents |
        And the user accesses to the first account product detail
        And the user accesses to upgrade customer from "operatives"
        When the user enters the "privacy" modal
        Then the user sees the following items in the screen
            | item                 |
            | privacy title        |
            | privacy close button |
            | privacy description  |

    @UCO010
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test) @backend-smoke
    Scenario: The user closes the privacy modal
        Given a user with the following criteria
            | criteria                     |
            | account n2 pending documents |
        And the user accesses to the first account product detail
        And the user accesses to upgrade customer from "operatives"
        And the user enters the "privacy" modal
        When the user closes "privacy" modal
        Then the user sees the following items in the screen
            | item              |
            | title             |
            | paragraph         |
            | privacy term      |
            | sworn declaration |
            | disabled button   |

    @UCO011
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test) @backend-smoke
    Scenario: Sworn Modal
        Given a user with the following criteria
            | criteria                     |
            | account n2 pending documents |
        And the user accesses to the first account product detail
        And the user accesses to upgrade customer from "operatives"
        When the user enters the "sworn declaration" modal
        Then the user sees the following items in the screen
            | item               |
            | sworn title        |
            | sworn description  |
            | sworn first item   |
            | sworn second item  |
            | sworn third item   |
            | sworn close button |

    @UCO012
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test) @backend-smoke
    Scenario: Exit from sworn modal
        Given a user with the following criteria
            | criteria                     |
            | account n2 pending documents |
        And the user accesses to the first account product detail
        And the user accesses to upgrade customer from "operatives"
        And the user enters the "sworn declaration" modal
        When the user closes "sworn declaration" modal
        Then the user sees the following items in the screen
            | item              |
            | title             |
            | paragraph         |
            | privacy term      |
            | sworn declaration |
            | disabled button   |
