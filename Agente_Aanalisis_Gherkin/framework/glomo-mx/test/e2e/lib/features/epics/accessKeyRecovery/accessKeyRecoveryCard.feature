@accesskeyRecoveryCard
Feature: Access Key Recovery Card

    @AKRC001
    @MX @backend(test)
    @web @ios @android @vbank @web-done @backend-smoke
    Scenario Outline: Access Key Recovery-The user fill the form identify with <data>
        Given a user with the following criteria
            | criteria            |
            | access key recovery |
        And the user accesses the recovery password screen
        And the user continues "identify card" step
        When the user fills the "<data>" of step
        Then the user sees the following items in the screen
            | item                     | value          |
            | button of change         |                |
            | method selected          |                |
            | label identify yourself  |                |
            | label capture your data  |                |
            | number input             |                |
            | <label number error>     | <value number> |
            | <label card input error> | <value card>   |
            | card input               |                |
            | label second step        |                |
            | button continue identify | disabled       |

        Examples:
            | data              | label number error | value number | label card input error | value card |
            | number incomplete | label number error | enabled      | label card input error | disabled   |
            | card incomplete   | label number error | disabled     | label card input error | enabled    |

    @AKRC002
    @MX @backend(test)
    @web @ios @android @vbank @web-done @backend-smoke
    Scenario Outline: Access Key Recovery-The user fill the form data card with <data>
        Given a user with the following criteria
            | criteria            |
            | access key recovery |
        And the user accesses the recovery password screen
        And the user continues "identify card" step
        When the user input "number and card" and "continue of identify" and fill "<data>"
        Then the user sees the following items in the screen
            | item                         | value       |
            | label data card number phone |             |
            | label data card number       |             |
            | summary data card            |             |
            | label security               |             |
            | input cvv                    |             |
            | <label input cvv>            | <value cvv> |
            | <label input nip>            | <value nip> |
            | input nip                    |             |
            | button continue summary      | disabled    |

        Examples:
            | data           | label input cvv       | value cvv | label input nip       | value nip |
            | cvv incomplete | label input cvv error | true      | label input nip error | false     |
            | nip incomplete | label input cvv error | false     | label input nip error | true      |

    @AKRC003
    @MX @backend(test)
    @web @ios @android @vbank @smokeTest @web-done @backend-smoke
    Scenario Outline: Access Key Recovery-The user fill the form identify with <data> but he corrects it
        Given a user with the following criteria
            | criteria            |
            | access key recovery |
        And the user accesses the recovery password screen
        And the user continues "identify card" step
        And the user fills the "<data>" of step
        When the user corrects the information with "<option>"
        Then the user sees the following items in the screen
            | item                     | value   |
            | button of change         |         |
            | method selected          |         |
            | label identify yourself  |         |
            | label capture your data  |         |
            | number input             |         |
            | label number             |         |
            | label card input         |         |
            | card input               |         |
            | label second step        |         |
            | button continue identify | enabled |

        Examples:
            | data                              | option         |
            | number incorrect and card correct | number correct |
            | number correct and card incorrect | card correct   |

    @AKRC004
    @MX @backend(test)
    @web @ios @android @vbank @smokeTest @web-done @backend-smoke
    Scenario Outline: Access Key Recovery-The user fill the form data card with <data> but he corrects it
        Given a user with the following criteria
            | criteria            |
            | access key recovery |
        And the user accesses the recovery password screen
        And the user continues "identify card" step
        And the user input "number and card" and "continue of identify" and fill "<data>"
        When the user corrects the information with "<option>"
        Then the user sees the following items in the screen
            | item                         | value   |
            | label data card number phone |         |
            | label data card number       |         |
            | summary data card            |         |
            | label security               |         |
            | input cvv                    |         |
            | label input nip              |         |
            | label input cvv              |         |
            | input nip                    |         |
            | button continue summary      | enabled |

        Examples:
            | data                          | option      |
            | cvv incorrect and nip correct | cvv correct |
            | cvv correct and nip incorrect | nip correct |

    @AKRC005
    @MX @backend(test)
    @web @ios @android @vbank @web-done @backend-smoke
    Scenario: Access Key Recovery-The user exits from access key recovery
        Given a user with the following criteria
            | criteria            |
            | access key recovery |
        When the user accesses the recovery password screen
        Then the user goes back to previous page

    @AKRC006
    @MX @backend(test)
    @web @ios @android @vbank @web-done
    Scenario: Access Key Recovery-The user has an error when trying three times input cvv and nip
        Given a user with the following criteria
            | criteria            |
            | access key recovery |
        And the user accesses the recovery password screen
        And the user continues "identify card" step
        And the user input "number and card" and "continue of identify" and fill "cvv and nip wrong"
        When the user tries the process several times
        Then the user sees the following items in the screen
            | item                               |
            | header error modal three times     |
            | button x close                     |
            | icon warning three times           |
            | text description three times       |
            | icon call                          |
            | icon location                      |
            | button exit modal                  |

    @AKRC007
    @MX @backend(test)
    @web @ios @android @vbank @smokeTest @web-done
    Scenario: Access Key Recovery-The user input an date born incorrect
        Given a user with the following criteria
            | criteria                      |
            | access key recovery date born |
        And the user accesses the recovery password screen
        And the user continues "identify card" step
        And the user input "number and card" and "continue of identify" and fill "wrong date born"
        When the user continues "date born" step
        Then the user sees the following items in the screen
            | item                         |
            | icon modal error             |
            | description error modal      |
            | button understand modal      |

    @AKRC008
    @MX @backend(test)
    @web @ios @android @!vbank
    @manual @JIRA.GLOMOGL-31643
    Scenario: Access Key Recovery-The user successfully changes the password
        Given a user with the following criteria
            | criteria            |
            | access key recovery |
        And the user accesses the recovery password screen
        And the user continues "identify card" step
        And the user input "number and card" and "continue of identify" and fill "cvv and nip"
        When the user continue "continue of card data" step
        Then the user sees the following items in the screen
            | item                         |
            | icon modal error             |
            | description error modal      |
            | button understand modal      |
