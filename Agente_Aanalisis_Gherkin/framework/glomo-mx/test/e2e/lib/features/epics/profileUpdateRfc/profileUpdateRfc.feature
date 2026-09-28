@updateRfc
Feature: Update Rfc

    @CFDI001
    @web
    @smokeTest @MX
    @vbank @backend(test) @web-done @ios @android
    Scenario: Cfdi setting
        Given a user with the following criteria
            | criteria        |
            | update rfc user |
        And the user starts the application at date:
            | hour  | 23   |
            | day   | 10   |
            | month | 10   |
            | year  | 2026 |
        And the user access to update rfc with account "normal"
        And the user requests cfdis with product for cancelation and rebranding
        And the user continues group cfdis
        And the user accepts terms and conditions of cancelation and rebranding
        When the user confirms the cancelation and rebranding cfdis
        Then the user sees the following items in the screen
            | item                              |
            | label info success                |
            | icon notification message success |
            | panel info success page modal     |
            | btn exit success page             |
            | link adjustment other cfdi        |

    @CFDI002
    @web @MX
    @vbank @backend(test) @web-done @ios @android
    Scenario: Incomplete data
        Given a user with the following criteria
            | criteria                |
            | update rfc user empty   |
        And the user accesses to profile screen
        When the user access to update rfc with account "generic rfc or empty person data"
        Then the user sees the following items in the screen
            | item                           |
            | icon update rfc message        |
            | title update rfc message       |
            | description update rfc message |

    @CFDI003
    @web @MX
    @vbank @backend(test) @web-done @ios @android
    Scenario: Rfc generic
        Given a user with the following criteria
            | criteria                |
            | update rfc user generic |
        And the user accesses to profile screen
        When the user access to update rfc with account "generic rfc or empty person data"
        Then the user sees the following items in the screen
            | item                           |
            | icon update rfc message        |
            | title update rfc message       |
            | description update rfc message |

    @CFDI004
    @web @MX
    @vbank @backend(test) @web-done @ios @android
    Scenario: Product without cfdi
        Given a user with the following criteria
            | criteria        |
            | update rfc user |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 10   |
            | month | 10   |
            | year  | 2026 |
        And the user access to update rfc with account "normal"
        And the user requests cfdis with product for cancelation and rebranding
        When the user closes modal "period without cfdi"
        Then the user sees the following items in the screen
            | item                              |
            | title step select period          |
            | current step select period        |
            | info title input select date from |
            | input select date from            |
            | info title input select date to   |
            | input select date to              |
            | btn select period                 |

    @CFDI005
    @web @manual @JIRA.GLOMOMX-221333
    @MX @vbank @backend(test) @web-done @ios @android
    Scenario: Connection interrupted
        Given a user with the following criteria
            | criteria        |
            | update rfc user |
        And the user access to update rfc with account "normal"
        When the user requests cfdis with product for cancelation and rebranding
        Then the user sees the following items in the screen
            | item                               |
            | title step select period           |
            | current step select period         |
            | info title input select date from  |
            | input select date from             |
            | info title input select date to    |
            | input select date to               |
            | btn select period                  |
            | toast notification lost connection |

    @CFDI006
    @web @MX
    @vbank @backend(test) @web-done @ios @android
    Scenario: Service not available
        Given a user with the following criteria
            | criteria        |
            | update rfc user |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 10   |
            | month | 10   |
            | year  | 2026 |
        And the user access to update rfc with account "normal"
        And the user requests cfdis with product for cancelation and rebranding
        When the user attempts to restore the service again
        Then the user sees the following items in the screen
            | item                                           |
            | header error modal operation cancel            |
            | header icon error modal operation cancel       |
            | microillustration error modal operation cancel |
            | title error modal operation cancel             |
            | subtitle error modal operation cancel          |

    @CFDI007
    @web @MX
    @vbank @backend(test) @web-done @ios @android
    Scenario: Failed operation
        Given a user with the following criteria
            | criteria        |
            | update rfc user |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 10   |
            | month | 10   |
            | year  | 2026 |
        And the user access to update rfc with account "normal"
        And the user requests cfdis with product for cancelation and rebranding
        And the user continues group cfdis
        And the user accepts terms and conditions of cancelation and rebranding
        When the user confirms and retry the cancelation and rebranding cfdis service
        Then the user sees the following items in the screen
            | item                                        |
            | header error modal field operation          |
            | header icon error modal field operation     |
            | subtitle error modal field operation        |
            | text message error modal field operation    |
            | btn exit error modal field operation        |
            | btn called bbva error modal field operation |

    @CFDI008
    @web @MX
    @vbank @backend(test) @web-done @ios @android
    Scenario: Exit the process
        Given a user with the following criteria
            | criteria        |
            | update rfc user |
        And the user access to update rfc with account "normal"
        When the user accesses to profile screen
        Then the user sees the following items in the screen
            | item                 | value   |
            | header               |         |
            | top info title       | visible |
            | top info message     |         |
            | tax residence header |         |
            | tag pending          | visible |

    @CFDI009 @MX
    @backend(test)
    @web @ios @android @vbank @web-done @alternate-scenarios-smoke
    Scenario Outline: Date selection <date_select>
        Given a user with the following criteria
            | criteria        |
            | update rfc user |
        And the user starts the application at date:
            | hour  | 10   |
            | day   | 10   |
            | month | 10   |
            | year  | 2026 |
        And the user access to update rfc with account "normal"
        And the user selects product for cancelation and rebranding
        When the user requests cfdis with product with date period to "<date_select>" for cancelation and rebranding
        Then the user sees the following items in the screen
            | item                              | value                   |
            | title step select period          |                         |
            | current step select period        |                         |
            | info title input select date from |                         |
            | input select date from            |                         |
            | <label_input_date_from>           | <value_input_date_from> |
            | info title input select date to   |                         |
            | input select date to              |                         |
            | <label_input_date_to>             | <value_input_date_to>   |
            | btn select period                 | disabled                |

        Examples:
            | date_select           | label_input_date_from  | value_input_date_from | label_input_date_to | value_input_date_to |
            | erro label date from  | label date error form  | true                  | label date error to | false               |
            | erro label date to    | label date error form  | false                 | label date error to | true                |
