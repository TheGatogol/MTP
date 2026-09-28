@chatBotAccountDetail
Feature: ChatBot - Account Detail

    @DCB002
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    @smokeTest
    Scenario: Generate access to consult the main account data
        Given a user with the following criteria
            | criteria                     |
            | one account                  |
            | user with account in dollars |
        And the user access blue "with terms accepted"
        When the user requests: "main account details" of their personal information
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | close header button |
            | info header button  |
            | chat bot message    |

    @DCB003
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Generate access to consult swift account
        Given a user with the following criteria
            | criteria                     |
            | one account                  |
            | user with account in dollars |
        And the user access blue "with terms accepted"
        When the user requests: "swift" of their personal information
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | close header button |
            | info header button  |
            | chat bot message    |

    @DCB004
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Generate access to consult account aliases
        Given a user with the following criteria
            | criteria                     |
            | one account                  |
            | user with account in dollars |
        And the user access blue "with terms accepted"
        When the user requests: "account alias" of their personal information
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | close header button |
            | info header button  |
            | chat bot message    |

    @DCB005
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Generate access to consult account password
        Given a user with the following criteria
            | criteria                     |
            | one account                  |
            | user with account in dollars |
        And the user access blue "with terms accepted"
        When the user requests: "clabe" of their personal information
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | close header button |
            | info header button  |
            | chat bot message    |

    @DCB006
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Generate access to consult account participants
        Given a user with the following criteria
            | criteria                     |
            | one account                  |
            | user with account in dollars |
        And the user access blue "with terms accepted"
        When the user requests: "account participants" of their personal information
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | close header button |
            | info header button  |
            | chat bot message    |

    @DCB007
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Generate access to edit alias without specifying the data
        Given a user with the following criteria
            | criteria                     |
            | one account                  |
            | user with account in dollars |
        And the user access blue "with terms accepted"
        When the user requests: "edit account details" of their personal information
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | close header button |
            | info header button  |
            | chat bot message    |

    @DCB008
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Generate access to edit account alias
        Given a user with the following criteria
            | criteria                     |
            | one account                  |
            | user with account in dollars |
        And the user access blue "with terms accepted"
        When the user requests: "edit account alias" of their personal information
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | close header button        |
            | info header button         |
            | chat bot message           |
            | suggestion button default  |
            | suggestion button positive |

    @DCB009
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Generate access to validate "Yes change" button in edit alias
        Given a user with the following criteria
            | criteria                     |
            | one account                  |
            | user with account in dollars |
        And the user access blue "with terms accepted"
        And the user requests: "edit account alias" of their personal information
        When the user selects the "confirm" suggestion
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | close header button |
            | info header button  |
            | chat bot message    |

    @DCB010
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Generate access to validate "Do not cancel" button in edit alias
        Given a user with the following criteria
            | criteria                     |
            | one account                  |
            | user with account in dollars |
        And the user access blue "with terms accepted"
        And the user requests: "edit account alias" of their personal information
        When the user selects the "default" suggestion
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | close header button |
            | info header button  |
            | chat bot message    |

    @DCB011
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Generate access to consult more than one account information
        Given a user with the following criteria
            | criteria                     |
            | one account                  |
            | user with account in dollars |
        And the user access blue "with terms accepted"
        When the user requests: "some account details" of their personal information
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | close header button |
            | info header button  |
            | chat bot message    |

    @DCB012
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Generate access to view all account details
        Given a user with the following criteria
            | criteria                     |
            | one account                  |
            | user with account in dollars |
        And the user access blue "with terms accepted"
        When the user requests: "all account details" of their personal information
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | close header button |
            | info header button  |
            | chat bot message    |
