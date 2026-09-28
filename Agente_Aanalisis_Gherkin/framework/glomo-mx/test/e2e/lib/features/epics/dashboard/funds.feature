@dashboard_funds
Feature: Dashboard Funds

    @DF001
    @vbank @MX
    @web @android @ios @smokeTest
    @backend(test) @web-done
    @backend-smoke
    Scenario: Only one product with MXN currency in funds module
        Given a user with the following criteria
            | criteria        |
            | dashboard funds |
            | single currency |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item         | currency |
            | header       |          |
            | greeting     |          |
            | help button  |          |
            | sidebar      |          |
            | title        |          |
            | alias        | MXN      |
            | number       | MXN      |
            | label amount | MXN      |

    @DF002
    @vbank @MX
    @web @android @ios
    @backend(test) @web-done
    @backend-smoke
    Scenario: More than one product with MXN currencies in funds module
        Given a user with the following criteria
            | criteria           |
            | dashboard funds    |
            | various currencies |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item         | currency |
            | header       |          |
            | greeting     |          |
            | help button  |          |
            | sidebar      |          |
            | title        | MXN      |
            | title amount | MXN      |
            | alias        | MXN      |
            | number       | MXN      |
            | label amount | MXN      |

    @DF003
    @vbank @MX
    @web @android @ios
    @backend(test) @web-done
    @backend-smoke
    Scenario: Show & Hide balances in funds module
        Given a user with the following criteria
            | criteria        |
            | dashboard funds |
            | single currency |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item         | currency |
            | header       |          |
            | greeting     |          |
            | help button  |          |
            | sidebar      |          |
            | title        |          |
            | alias        | MXN      |
            | amount       | MXN      |
            | number       | MXN      |
            | label amount | MXN      |

    @DF004
    @vbank @MX
    @web @android @ios
    @backend(test) @web-done
    @backend-smoke
    Scenario: Validate digital contracts from invest
        Given a user with the following criteria
            | criteria         |
            | dashboard funds  |
            | contracts invest |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | greeting    |
            | help button |
            | sidebar     |
            | invest      |

    @DF005
    @vbank @MX
    @web @android @ios
    @backend(test) @web-done
    @backend-smoke
    Scenario: Validation of a blocked account
        Given a user with the following criteria
            | criteria        |
            | dashboard funds |
            | blocked account |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | greeting       |
            | help button    |
            | sidebar        |
            | messageExpired |

    @DF006
    @vbank @MX
    @web @android @ios
    @backend(test) @web-done
    @backend-smoke
    Scenario: Validation of investment fund with contract in legal blockage
        Given a user with the following criteria
            | criteria        |
            | dashboard funds |
            | legal blockage  |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item        |          |
            | header      |          |
            | greeting    |          |
            | help button |          |
            | sidebar     |          |
            | legal       | disabled |

    @DF007
    @vbank @MX
    @web @android @ios
    @backend(test) @web-done
    @backend-smoke
    Scenario: Validation of contracts without activity for 3 months
        Given a user with the following criteria
            | criteria                   |
            | dashboard funds            |
            | contracts without activity |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item        |          |
            | header      |          |
            | greeting    |          |
            | help button |          |
            | sidebar     |          |
            | activity    | disabled |

    @DF008
    @vbank @MX
    @web @android @ios
    @backend(test) @web-done
    @backend-smoke
    Scenario: Validate advised contract
        Given a user with the following criteria
            | criteria         |
            | dashboard funds  |
            | advised contract |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item        |          |
            | header      |          |
            | greeting    |          |
            | help button |          |
            | sidebar     |          |
            | advised     | disabled |
