@financePaymentDashboard
Feature: Finance Payment Dashboard

    @FTMH002
    @ios @android @web @web-done
    @smokeTest
    @MX @backend(test) @vbank
    Scenario: Happy path defer
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to finance transaction multipurchase debit post hiring from "defer"
        And the user to enter to months to defer step with a purchase "5921"
        And the user enters to terms and conditions with a period of "6" months
        And the user completes the deferral of purchase
        When the user goes back to orange card product detail
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | financing line text           |
            | show footer link              |
            | financing line show more link |
            | financing line link defer     |

    @FTMH003
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario Outline: Sees <movements> movements
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | <user>         |
        When the user accesses to the "operative" "debit" card product detail
        Then the user sees "<movements>" movements

        Examples:
            | movements | user               |
            | 1         | offers detail card |
            | 0         | no movements       |

    @FTMH004
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user taps see more purchases
        Given a user with the following criteria:
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to finance transaction multipurchase debit post hiring from "show more"
        And the user to enter to months to defer step with a purchase "5921" and "5818"
        And the user enters to terms and conditions with a period of "6" months
        And the user completes the deferral of purchase
        When the user goes back to orange card product detail
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | financing line text           |
            | show footer link              |
            | financing line show more link |
            | financing line link defer     |

    @FTMH005
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user accesses to Financing Dashboard
        Given a user with the following criteria:
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        When the user accesses to Financing Dashboard
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | financing line detail  |
            | postpone purchases     |
            | advance payment        |
            | view account statement |

    @FTMH006
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user exits the due date and the next payment date
        Given a user with the following criteria:
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        When the user exits the due date and the next payment date
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | financing line detail  |
            | postpone purchases     |
            | advance payment        |
            | view account statement |

    @FTMH007
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: User taps on help buttons
        Given a user with the following criteria:
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        And the user accesses to finance transaction multipurchase debit post hiring
        And the user to enter to months to defer step with a purchase "1756" and "875"
        And the user enters to terms and conditions with a period of "6" months
        And the user completes the deferral of purchase
        When the user goes back to payment dashboard
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | financing line detail  |
            | postpone purchases     |
            | advance payment        |
            | view account statement |

    @FTMH008
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: User accesses to monthly payment
        Given a user with the following criteria:
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        And the user accesses to more operatives
        When the user accesses to monthly payment
        Then the user sees the following items in the screen
            | item             |
            | multistep header |
            | movement         |
            | continue button  |

    @FTMH009
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: See line detail
        Given a user with the following criteria:
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        When the user accesses to line detail
        Then the user sees the following items in the screen
            | item                    |
            | line detail header      |
            | line detail button back |
            | text general            |
            | text owner              |
            | text associated account |

    @FTMH010
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario Outline: Browse and manage financing line <purchase type>
        Given a user with the following criteria:
            | criteria           |
            | financing line     |
            | deferral completed |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        And the user agrees to a deferred purchase "<purchase type>"
        And the user accesses the option more details
        When the user requests accesses to payment history
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | deferral month  |
            | deferral amount |
            | deferral status |

        Examples:
            | purchase type          |
            | deferred purchase      |
            | full deferred purchase |

    @FTMH011
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario Outline: Browse and manage financing line with filter <check>
        Given a user with the following criteria:
            | criteria           |
            | financing line     |
            | deferral completed |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        And the user agrees to filter
        When the user selects "<check>" and enters filter
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | button edit |
            | text state  |
            | text date   |
            | text result |

        Examples:
            | check       |
            | in progress |
            | completed   |

    @FTMH012
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Browse and manage financing line with filter
        Given a user with the following criteria:
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        And the user agrees to filter
        When the user selects "both" and enters filter
        Then the user sees the following items in the screen
            | item                     |
            | header                   |
            | title of                 |
            | check disabled progress  |
            | check disabled completed |
            | button filter disabled   |

    @FTMH013
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: User deletes in progress filter 2
        Given a user with the following criteria:
            | criteria           |
            | financing line     |
            | deferral completed |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        And the user agrees to filter
        And the user selects "none" and enters filter
        When the user unchecks In Progress option
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | button edit |
            | text state  |
            | text date   |
            | text result |

    @FTMH014
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: User deletes in progress filter
        Given a user with the following criteria:
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        And the user agrees to filter
        And the user selects "none" and enters filter
        When the user unchecks In Progress option
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | button edit      |
            | text result      |
            | text title       |
            | text information |

    @FTMH015
    @ios @android @web
    @MX @backend(test) @vbank @web-done
    Scenario: User use any filter but user has no movements to be displayed
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | late payments  |
        And the user accesses to the "operative" "debit" card product detail
        When the user accesses to pay overdue balance
        Then the user sees the following items in the screen
            | item                    |
            | multistep header        |
            | amount payable text     |
            | amount payable input    |
            | continue button overdue |

    @FTMH016
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: User wants to defer from main dashboard
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | minor balance  |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to Financing Dashboard
        And the user exits the modal learn more
        When the user attempts accesses to finance transaction multipurchase debit post hiring
        Then the user sees the following items in the screen
            | item                        |
            | debit error header          |
            | debit error back            |
            | debit error text            |
            | debit error continue button |
            | debit error exit link       |
