@financeDebitMultipurchase
Feature: Finance Debit Multipurchase

    @FTMD001
    @ios @android @web
    @smokeTest
    @MX @backend(test) @vbank
    @web-done
    Scenario Outline: Happy path <period> months
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "1218"
        And the user enters to terms and conditions with a period of "<period>" months
        And the user completes the deferral of purchase
        When the user goes back to orange card product detail
        Then the user sees the following items in the screen
            | item                         | value  |
            | header                       |        |
            | OnOff action                 | enable |
            | Generate digital card action | enable |
            | Card image                   | enable |
            | Pan number                   | enable |

        Examples:
            | period |
            | 3      |
            | 6      |
            | 9      |
            | 12     |

    @FTMD002
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Show less purchases
        Given a user with the following criteria
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to finance transaction multipurchase debit
        When the user shows more purchases
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | text purchase selection      |
            | text participating purchases |
            | help button                  |
            | shopping list                |

    @FTMD003
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: When you have less than 7 purchases
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        When the user accesses to finance transaction multipurchase debit
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | text purchase selection      |
            | text participating purchases |
            | help button                  |
            | shopping list                |

    @FTMD004
    @backend(test) @vbank @MX
    @ios @android @web @manual @JIRA.GLOMOGL-20657
    Scenario: Exit contract terms and conditions
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to finance transaction multipurchase debit
        And the user enters to terms and conditions with a period of "12" months
        When the user exits contract terms and conditions
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | text purchase selection      |
            | text participating purchases |
            | help button                  |
            | shopping list                |

    @FTMD005
    @backend(test) @vbank @MX
    @ios @android @web @manual @JIRA.GLOMOGL-20657
    Scenario: Exit hire online
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step
        And the user enters to terms and conditions with a period of "12" months
        And the user completes the deferral of purchase
        When the user exit hire online
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | text purchase selection      |
            | text participating purchases |
            | help button                  |
            | shopping list                |

    @FTMD006
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Changes in purchase section
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "5921"
        And the user enters to terms and conditions with a period of "12" months
        When the user changes in purchase section
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | text purchase selection      |
            | text participating purchases |
            | help button                  |
            | shopping list                |

    @FTMD007
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Changes in term Selection
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "5921"
        And the user enters to terms and conditions with a period of "6" months
        When the user changes in term selection
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | defer commission detail |
            | first pay date          |
            | cat commission help     |
            | months radio button     |

    @FTMD008
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Consult financing line
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "1218"
        And the user enters to terms and conditions with a period of "12" months
        When the user consult financing line
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | terms and conditions help |
            | link contract document    |
            | characteristics button    |
            | continue button           |

    @FTMD009
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Changes in purchase section and continue
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "1218"
        And the user enters to terms and conditions with a period of "12" months
        And the user changes in purchase section
        When the user edits to months to defer step with a purchase "14818"
        Then the user sees the following items in the screen
            | item                                |
            | header                              |
            | change button select purchases step |
            | months radio button                 |

    @FTMD010
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Changes in purchase section and continue 2
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "1218"
        And the user enters to terms and conditions with a period of "12" months
        And the user changes in term selection
        When the user enters to terms and conditions with a period of "3" months
        Then the user sees the following items in the screen
            | item                                |
            | header                              |
            | change button select purchases step |
            | change button months to defer       |
            | terms step consult button           |
            | confirm button                      |

    @FTMD011
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Exit participating purchases help screen
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to finance transaction multipurchase debit
        And the user enters to participating purchases help screen
        When the user closes the modal
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | text purchase selection      |
            | text participating purchases |
            | help button                  |
            | shopping list                |

    @FTMD012
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario Outline: Exit <case>
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "1740"
        And the user enters to <case> screen
        When the user closes the modal
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | months radio button     |
            | defer commission detail |
            | first pay date          |
            | cat commission help     |

        Examples:
            | case                    |
            | defer commission detail |
            | first pay date          |
            | cat commission help     |

    @FTMD013
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario Outline: Exit <case>
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "1740"
        And the user enters to terms and conditions with a period of "6" months
        And the user enters to <case> screen
        When the user closes the modal
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | terms buro radio button   |
            | link credit buro document |
            | link contract document    |
            | characteristics button    |

        Examples:
            | case               |
            | CAT of recruitment |
            | know the features  |

    @FTMD014
    @ios @android @web
    @MX @backend(test) @vbank
    @web-done
    Scenario: Exit token movil screen
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | offers         |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to finance transaction multipurchase debit
        And the user to enter to months to defer step with a purchase "1690"
        And the user enters to terms and conditions with a period of "3" months
        When the user closes token movil screen
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | terms buro radio button   |
            | link credit buro document |
            | link contract document    |
            | characteristics button    |
