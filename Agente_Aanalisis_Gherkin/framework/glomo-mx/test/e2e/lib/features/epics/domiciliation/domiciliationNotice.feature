@DomiciliationNotice
Feature: Domiciliation - Domiciliation Notice Operations

    @DNO001
    @ios @android @web
    @MX @backend(test) @vbank @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Domiciliation Notice notification on notification center
        Given a user with the following criteria
            | criteria             |
            | direct debit         |
            | domiciliation notice |
        When the user accesses center notification
        Then the user sees the following items in the screen
            | item                              |
            | header                            |
            | domiciliation notice notification |

    @DNO002
    @ios @android @web @tmpExclude @JIRA.GLOMOMX-254311
    @MX @backend(test) @vbank
    Scenario: Domiciliation Notice - show notification detail
        Given a user with the following criteria
            | criteria             |
            | direct debit         |
            | domiciliation notice |
        When the user accesses "domiciliation notice" detail notification
        Then the user sees the following items in the screen
            | item                     |
            | header                   |
            | notification title       |
            | notification date        |
            | notification hour        |
            | notification actions     |
            | notification description |
            | close notification       |
            | confirm or rejected      |

    @DNO003
    @ios @android @web @tmpExclude @JIRA.GLOMOMX-254311
    @MX @backend(test) @vbank
    Scenario: Domiciliation Notice - close notification detail
        Given a user with the following criteria
            | criteria                   |
            | direct debit               |
            | domiciliation notice close |
        And the user accesses "domiciliation notice" detail notification
        When the user close notification detail
        Then the user sees the following items in the screen
            | item                              |
            | header                            |
            | domiciliation notice notification |

    @DNO004
    @ios @android @web @tmpExclude @JIRA.GLOMOMX-254311
    @MX @backend(test) @vbank
    Scenario: Detail of the direct debit message
        Given a user with the following criteria
            | criteria             |
            | direct debit         |
            | domiciliation notice |
        When the user select confirm or rejected a notification
        Then the user sees the following items in the screen
            | item                              |
            | domiciliation notice header       |
            | domiciliation notice title        |
            | domiciliation notice amount       |
            | domiciliation notice product      |
            | domiciliation notice description  |
            | domiciliation notice reference    |
            | domiciliation notice advice       |
            | domiciliation notice accepted btn |
            | domiciliation notice rejected btn |

    @DNO005
    @ios @android @web @tmpExclude @JIRA.GLOMOMX-254311
    @MX @backend(test) @vbank @smokeTest
    Scenario: Detail of the direct debit message - show exit message
        Given a user with the following criteria
            | criteria             |
            | direct debit         |
            | domiciliation notice |
        And the user select confirm or rejected a notification
        When the user decides to exit the flow
        Then the user sees the following items in the screen
            | item                  |
            | warning modal         |
            | warning modal title   |
            | warning modal content |
            | warning modal footer  |

    @DNO006
    @ios @android @web @tmpExclude @JIRA.GLOMOMX-254311
    @MX @backend(test) @vbank
    Scenario: Detail of the direct debit message - show previously accepted message
        Given a user with the following criteria
            | criteria             |
            | direct debit         |
            | domiciliation notice |
        And the user select confirm or rejected a notification
        When the user accepts domiciliation payment
        Then the user sees the following items in the screen
            | item                  |
            | warning modal         |
            | warning modal title   |
            | warning modal content |
            | warning modal footer  |

    @DNO007
    @ios @android @web @tmpExclude @JIRA.GLOMOMX-254311
    @MX @backend(test) @vbank
    Scenario: Detail of the direct debit message - show previously rejected message
        Given a user with the following criteria
            | criteria             |
            | direct debit         |
            | domiciliation notice |
        And the user select confirm or rejected a notification
        When the user declines domiciliation payment
        Then the user sees the following items in the screen
            | item                  |
            | warning modal         |
            | warning modal title   |
            | warning modal content |
            | warning modal footer  |

    @DNO008
    @ios @android @web @tmpExclude @JIRA.GLOMOMX-254311
    @MX @backend(test) @vbank @smokeTest
    Scenario: Detail of the direct debit message - show direct debit successfully
        Given a user with the following criteria
            | criteria                     |
            | direct debit                 |
            | domiciliation notice success |
        And the user select confirm or rejected a notification
        When the user completes the direct debit successfully
        Then the user sees the following items in the screen
            | item                                      |
            | domiciliation notice success header       |
            | domiciliation notice success info         |
            | domiciliation notice success invoice      |
            | domiciliation notice success amount       |
            | domiciliation notice success termination  |
            | domiciliation notice success reference    |
            | domiciliation notice success share button |

    @DNO009
    @ios @android @web @tmpExclude @JIRA.GLOMOMX-254311
    @MX @backend(test) @vbank
    Scenario: Detail of the direct debit message - show direct debit decline
        Given a user with the following criteria
            | criteria                     |
            | direct debit                 |
            | domiciliation notice decline |
        And the user select confirm or rejected a notification
        When the user declines direct debit notice
        Then the user sees the following items in the screen
            | item                                     |
            | domiciliation notice decline header      |
            | domiciliation notice decline info        |
            | domiciliation notice decline title       |
