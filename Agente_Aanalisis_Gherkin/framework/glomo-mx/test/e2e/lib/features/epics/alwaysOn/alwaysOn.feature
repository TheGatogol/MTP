@alwaysOn
Feature: Always On

    @AON002
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Stan in mode help icon in dashboard
        Given a user with the following criteria
            | criteria            |
            | always on transfers |
        And the user accesses to dashboard in stand in mode
        When the user selects "help section"
        Then the user sees a modal with the following elements:
            | item          |
            | header        |
            | hero image    |
            | title         |
            | description   |
            | accept button |

    @AON003
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Navigation between transfer links
        Given a user with the following criteria
            | criteria            |
            | always on transfers |
        And the user accesses to dashboard in stand in mode
        And the user accesses to transfer
        And the user selects a destinatary from "new recipient"
        And the user closes the modal
        When the user selects a contact saved with the destination account "ana"
        Then the user sees a modal with the following elements:
            | item          |
            | header        |
            | hero image    |
            | description   |
            | accept button |

    @AON004
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario Outline: Navigation between operatives <operative>
        Given a user with the following criteria
            | criteria           |
            | always on products |
        And the user accesses to dashboard in stand in mode
        When the user accesses the "<option>" operation
        Then the user sees a modal with the following elements:
            | item          |
            | header        |
            | hero image    |
            | title         |
            | description   |
            | accept button |

        Examples:
            | operative           | option              |
            | cardless withdrawal | cardless withdrawal |
            | opportunities       | opportunities       |

    @AON005
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Tranfer from operative more
        Given a user with the following criteria
            | criteria            |
            | always on transfers |
        And the user accesses to dashboard in stand in mode
        And the user accesses to transfer
        And the user selects a destinatary from "new recipient"
        And the user closes the modal
        When the user starts a transfer to a personal "debit" account
        Then the user sees a modal with the following elements:
            | item          |
            | header        |
            | hero image    |
            | title         |
            | description   |
            | accept button |

    @AON006 @vbank
    @MX @web @android @ios
    @backend(test) @alternate-scenarios-smoke
    @manual @JIRA.GLOMOMX-252150
    Scenario Outline: The user access to <option> from dashboard operationals
        Given a user with the following criteria
            | criteria           |
            | always on products |
        And the user accesses to dashboard in stand in mode
        And the user accesses to operationals page
        When the user accesses the "<operative>" operation
        Then the user sees a modal with the following elements:
            | item          |
            | header        |
            | hero image    |
            | title         |
            | description   |
            | accept button |

        Examples:
            | operative                 | option                  |
            | opportunities operational | opportunities           |
            | cardless withdrawal       | cardless withdrawal     |
            | credit card payment       | credit card payment     |
            | bill payments             | bill payments           |
            | mobile top up             | mobile top up           |
            | international transfers   | international transfers |
            | qr payment                | qr payment              |

    @AON008 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Account - Stand-In  navigation account detail
        Given a user with the following criteria
            | criteria            |
            | always on transfers |
        And the user selects an account in pesos in stand in mode
        When the user selects "view account data"
        Then the user sees the following items in the screen
            | item                      |
            | header modal              |
            | image modal standin       |
            | title modal standin       |
            | description modal standin |
            | accept button modal       |

    @AON009 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Account - Stand-In  Alert Operatives when user selects more info option
        Given a user with the following criteria
            | criteria            |
            | always on transfers |
        And the user selects an account in pesos in stand in mode
        When the user selects "more info"
        Then the user accesses the "limited operatives" screen

    @AON010
    @vbank
    @MX @web @android @ios @spherica
    @backend(test)
    @web-done
    @smokeTest
    Scenario Outline: User completes transfer for exiting contact from <case> in stand in mode spherica
        Given a user with the following criteria
            | criteria |
            | <user>   |
            | stand in |
        And the user accesses to transfer from "account detail"
        And the user selects a contact saved with the destination account "<contact>"
        And the user accepts the modal
        And the user enters amount "2600" and concept "pending transfer" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                        |
            | transfer amount             |
            | origin account              |
            | destination account         |
            | concept                     |
            | reference                   |
            | exit button                 |

        Examples:
            | case                         | user                | contact   |
            | another bank other than BBVA | always on transfers | ana       |
            | the same BBVA                | internal transfers  | Cliente 2 |

    @AON011
    @vbank
    @MX @web @android @ios
    @backend(test) @alternate-scenarios-smoke
    @web-done
    @manual @JIRA.GLOMOMX-258704
    Scenario Outline: The user access to <option> from product detail operationals
        Given a user with the following criteria
            | criteria           |
            | always on products |
        And the user accesses to dashboard in stand in mode
        And the user accesses to the first account product detail
        And the user accesses to the view more operatives
        When the user access to "<operative>" account operation
        Then the user sees the following items in the screen
            | item                      |
            | header modal              |
            | image modal standin       |
            | title modal standin       |
            | description modal standin |
            | accept button modal       |

        Examples:
            | operative           | option              |
            | bill payment        | bill payment        |
            | pay credit card     | pay credit card     |
            | mobile top up       | mobile top up       |
            | statement account   | statement account   |
            | payroll portability | payroll portability |
            | codi                | codi                |
            | codicel send        | codicel send        |
            | edit alias          | edit alias          |

    @AON012
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user visualize the detail of a pending movement in stand in mode
        Given a user with the following criteria
            | criteria                    |
            | always on pending movements |
        And the user accesses to dashboard in stand in mode
        And the user accesses to the first account product detail
        And the user accesses to the view pending movements
        And the user selects a pending movement
        When the user opens the info about a pending movement
        Then the user sees the following items in the screen
            | item                             |
            | movement detail modal info icon  |
            | movement detail modal info title |
            | movement detail modal info text  |

    @AON013
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user visualize no pending movements in stand in mode
        Given a user with the following criteria
            | criteria                       |
            | always on no pending movements |
        And the user accesses to dashboard in stand in mode
        And the user accesses to the first account product detail
        When the user accesses to the view pending movements
        Then the user sees the following items in the screen
            | item                         |
            | empty movements illustration |
            | empty movements text         |

    @AON014
    @vbank
    @MX @web @android @ios
    @backend(test)
    @manual @JIRA.GLOMOMX-252150
    @smokeTest
    Scenario: The user cancels a pending movement in stand in mode
        Given a user with the following criteria
            | criteria                    |
            | always on pending movements |
        And the user accesses to dashboard in stand in mode
        And the user accesses to the first account product detail
        And the user accesses to the view pending movements
        And the user selects a pending movement
        When the user cancels the pending movement with otp
        Then the user sees the following items in the screen
            | item                      |
            | modal success header      |
            | modal success icon        |
            | modal success title       |
            | modal success description |
            | modal success exit button |

    @AON015
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user visualizes stand in information from card detail
        Given a user with the following criteria
            | criteria           |
            | always on products |
        And the user accesses to "operative" "credit" card detail in stand in mode
        When the user access more info message
        Then the user sees the following items in the screen
            | item                            |
            | essential mode info title       |
            | essential mode info image       |
            | essential mode info description |
            | essential mode info paragraph   |
            | essential mode info button      |

    @AON016
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user select switch card off option in stand in mode
        Given a user with the following criteria
            | criteria                      |
            | always on enabled credit card |
        And the user accesses to "operative" "credit" card detail in stand in mode
        When the user turns "off" the card
        Then the user sees the following items in the screen
            | item                        |
            | header standin              |
            | image modal standin         |
            | title modal standin         |
            | accept button modal standin |

    @AON017
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user selects digital card from card detail in stand in mode
        Given a user with the following criteria
            | criteria                          |
            | always on card pending activation |
        And the user accesses to "inoperative" "credit" card detail in stand in mode
        When the user selects activate digital card
        Then the user sees the following items in the screen
            | item                        |
            | header standin              |
            | image modal standin         |
            | title modal standin         |
            | accept button modal standin |

    @AON018
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user access to card detail info in stand in mode
        Given a user with the following criteria
            | criteria           |
            | always on products |
        And the user accesses to "operative" "credit" card detail in stand in mode
        And the user accesses to more information card
        When the user selects card details info
        Then the user sees the following items in the screen
            | item                        |
            | header standin              |
            | image modal standin         |
            | title modal standin         |
            | accept button modal standin |

    @AON019
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user select switch card on option in stand in mode
        Given a user with the following criteria
            | criteria                       |
            | always on disabled credit card |
        And the user accesses to "operative" "credit" card detail in stand in mode
        When the user turns "on" the card
        Then the user sees the following items in the screen
            | item                        |
            | header standin              |
            | image modal standin         |
            | title modal standin         |
            | accept button modal standin |

    @AON020
    @vbank
    @MX @web @android @ios
    @backend(test) @alternate-scenarios-smoke
    @web-done
    Scenario Outline: The user access to <operative> from card detail operationals
        Given a user with the following criteria
            | criteria           |
            | always on products |
        And the user accesses to "operative" "credit" card detail in stand in mode
        And the user accesses to more operatives of the card in stand in mode
        When the user selects "<operative>" card operative
        Then the user sees the following items in the screen
            | item                        |
            | header standin              |
            | image modal standin         |
            | title modal standin         |
            | accept button modal standin |

        Examples:
            | operative           |
            | credit card payment |
            | statement enquiry   |
            | limits update       |
            | block card          |
            | edit alias          |
            | pin view            |

    @AON021
    @vbank
    @MX @web @android @ios
    @backend(test) @alternate-scenarios-smoke
    @web-done
    Scenario Outline: The user access to <option> from dashboard footer operative in stand in mode
        Given a user with the following criteria
            | criteria           |
            | always on products |
        And the user accesses to dashboard in stand in mode
        When the user selects the "<option>" footer option
        Then the user sees a modal with the following elements:
            | item          |
            | header        |
            | hero image    |
            | title         |
            | description   |
            | accept button |

        Examples:
            | option        |
            | check up      |
            | opportunities |
            | notifications |
            | assistance    |

    @AON022
    @vbank
    @MX @web @android @ios @spherica
    @backend(test)
    @web-done
    @smokeTest
    Scenario: Transfer by dashboard when making an internal transfer
        Given a user with the following criteria
            | criteria           |
            | internal transfers |
            | stand in           |
        And the user accesses to transfer from dashboard and selects a origin "more link" in stand in mode
        And the user selects a contact saved with the destination account "Cliente 2"
        And the user accepts the modal
        And the user enters amount "2600" and concept "pending transfer" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                |
            | transfer amount     |
            | origin account      |
            | destination account |
            | concept             |
            | reference           |
            | exit button         |

    @AON023
    @vbank
    @MX @web @android @ios @spherica
    @backend(test)
    @web-done
    Scenario: Error when the user exceeds the amount available in the source account
        Given a user with the following criteria
            | criteria           |
            | internal transfers |
            | stand in           |
        And the user accesses to transfer from dashboard and selects a origin "account" in stand in mode
        And the user selects a contact saved with the destination account "junior"
        And the user accepts the modal
        When the user enters "100001" exceeds the amount available in the account
        Then the user sees the following items in the screen
            | item              |
            | amount title      |
            | amount deposited  |
            | delete option     |
            | icon amount error |
            | text amount error |

    @AON024
    @vbank
    @MX @web @android @ios @spherica
    @backend(test)
    @web-done
    Scenario: The user exits without completing an internal transfer
        Given a user with the following criteria
            | criteria           |
            | internal transfers |
            | stand in           |
        And the user accesses to transfer from "account detail"
        When the user closes the Transfer screen
        Then the user sees a modal with the following elements:
            | item          |
            | header        |
            | hero image    |
            | title         |
            | description   |
            | accept button |
