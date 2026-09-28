@transactionsDetailAccounts
Feature: Transactions Detail Accounts

    @TDH001
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Review the movements and their details.
        Given a user with the following criteria
            | criteria                 |
            | common account movements |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                       |
            | transaction description    |
            | transaction import         |
            | movement type title        |
            | movement description title |
            | operation date             |
            | operation hour             |

    @TDH002
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement own transfer
        Given a user with the following criteria
            | criteria                 |
            | common account movements |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                       |
            | transaction description    |
            | transaction import         |
            | movement type title        |
            | movement description title |
            | operation date             |
            | operation hour             |
            | share button               |

    @TDH003
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement internal transfer
        Given a user with the following criteria
            | criteria                 |
            | common account movements |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                       |
            | transaction description    |
            | transaction import         |
            | movement type title        |
            | movement description title |
            | operation date             |
            | operation hour             |

    @TDH004
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement cash withdrawal
        Given a user with the following criteria
            | criteria                 |
            | common account movements |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                       |
            | transaction description    |
            | transaction import         |
            | movement type title        |
            | movement description title |
            | operation date             |
            | operation hour             |

    @TDH005
    @vbank
    @MX @web @android @ios
    @backend(test)
    @smokeTest
    @web-done
    Scenario: Check the details of the movement codi received
        Given a user with the following criteria
            | criteria                 |
            | common account movements |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                       |
            | transaction description    |
            | transaction import         |
            | movement type title        |
            | movement description title |
            | operation date             |
            | operation hour             |

    @TDH006
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement purchase
        Given a user with the following criteria
            | criteria                 |
            | common account movements |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                       |
            | transaction description    |
            | transaction import         |
            | movement type title        |
            | movement description title |
            | operation date             |
            | operation hour             |

    @TDH007
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement buy in store
        Given a user with the following criteria
            | criteria                 |
            | common account movements |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                       |
            | transaction description    |
            | transaction import         |
            | movement type title        |
            | movement description title |
            | operation date             |
            | operation hour             |

    @TDH008
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement purchase taxes
        Given a user with the following criteria
            | criteria                 |
            | common account movements |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                       |
            | transaction description    |
            | transaction import         |
            | movement type title        |
            | movement description title |
            | operation date             |
            | operation hour             |

    @TDH009
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @smokeTest
    Scenario: Check the details of the movement purchase pending
        Given a user with the following criteria
            | criteria                  |
            | account movements horizon |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                       |
            | transaction description    |
            | transaction import         |
            | movement type title        |
            | movement description title |
            | operation date             |
            | operation hour             |

    @TDH010
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement withdrawal
        Given a user with the following criteria
            | criteria                  |
            | account movements horizon |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                       |
            | transaction description    |
            | transaction import         |
            | movement type title        |
            | movement description title |
            | operation date             |
            | operation hour             |

    @TDH011
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement automatic payment
        Given a user with the following criteria
            | criteria                  |
            | account movements horizon |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                       |
            | transaction description    |
            | transaction import         |
            | movement type title        |
            | movement description title |
            | operation date             |
            | operation hour             |

    @TDH012
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement vat on commission
        Given a user with the following criteria
            | criteria                  |
            | account movements horizon |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                       |
            | transaction description    |
            | transaction import         |
            | movement type title        |
            | movement description title |
            | operation date             |
            | operation hour             |

    @TDH013
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement codi send
        Given a user with the following criteria
            | criteria                  |
            | account movements horizon |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                       |
            | transaction description    |
            | transaction import         |
            | movement type title        |
            | movement description title |
            | operation date             |
            | operation hour             |

    @TDH014
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement foreing payment
        Given a user with the following criteria
            | criteria                  |
            | account movements horizon |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                    |
            | transaction description |
            | transaction import      |
            | movement type title     |
            | operation date          |
            | operation hour          |

    @TDH015
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement investment payment
        Given a user with the following criteria
            | criteria                     |
            | investment account movements |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                    |
            | transaction description |
            | transaction import      |
            | movement type title     |
            | operation date          |
            | operation hour          |

    @TDH016
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement investment opening
        Given a user with the following criteria
            | criteria                     |
            | investment account movements |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                    |
            | transaction description |
            | transaction import      |
            | movement type title     |
            | operation date          |
            | operation hour          |

    @TDH017
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement check deposit
        Given a user with the following criteria
            | criteria                     |
            | investment account movements |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                    |
            | transaction description |
            | transaction import      |
            | movement type title     |
            | operation date          |
            | operation hour          |

    @TDH018
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement cash deposit
        Given a user with the following criteria
            | criteria                     |
            | investment account movements |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                    |
            | transaction description |
            | transaction import      |
            | movement type title     |
            | operation date          |
            | operation hour          |

    @TDH019
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement refund transfer
        Given a user with the following criteria
            | criteria                 |
            | account movements checks |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                    |
            | transaction description |
            | transaction import      |
            | movement type title     |
            | operation date          |
            | operation hour          |

    @TDH020
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Check the details of the movement investment sales
        Given a user with the following criteria
            | criteria                 |
            | account movements checks |
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                    |
            | transaction description |
            | transaction import      |
            | movement type title     |
            | operation date          |
            | operation hour          |
