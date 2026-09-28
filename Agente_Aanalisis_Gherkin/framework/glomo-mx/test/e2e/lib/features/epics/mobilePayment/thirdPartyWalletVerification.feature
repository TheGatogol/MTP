@thirdPartyWalletVerification
Feature: Third party wallet verification

    @TPWV001
    @MX @backend(test)
    @native @ios @android @smokeTest
    @manual @JIRA.GLOMOGL-21829
    Scenario Outline: Access to Glomo with only one card to verify from <payment_platform>
        Given a user with the following criteria:
            | criteria           |
            | <payment_platform> |
        When the user starts process verification of a card from <payment_platform>
        Then the user is in "check card" screen
        And the user sees the following items in the screen:
            | items         |
            | header        |
            | close         |
            | description   |
            | <title> title |

        Examples:
            | payment_platform | title                |
            | Google Pay       | pending verification |
            | Apple Pay        | devices              |

    @TPWV002
    @MX @backend(test)
    @native @ios @android
    @manual @JIRA.GLOMOGL-21829
    Scenario Outline: Check card when the user only has one card to verify from <payment_platform>
        Given a user with the following criteria:
            | criteria           |
            | <payment_platform> |
        And the user starts process verification of a card from <payment_platform>
        When the user verifies the only card
        Then the user sees the following items in the screen:
            | items                                             | value         |
            | header                                            |               |
            | close                                             |               |
            | description                                       |               |
            | <title> title                                     |               |
            | image that there are no more cards to be verified |               |
            | green toast                                       | verified card |

        Examples:
            | payment_platform | title                |
            | Google Pay       | pending verification |
            | Apple Pay        | devices              |

    @TPWV003
    @MX @backend(test)
    @native @ios @android
    @manual @JIRA.GLOMOGL-21829
    Scenario Outline: Exit card verification when the user has already verified his only card from <payment_platform>
        Given a user with the following criteria:
            | criteria           |
            | <payment_platform> |
        And the user starts process verification of a card from <payment_platform>
        And the user verifies the only card
        When the user closes the "check card" screen
        Then the user is in "dashboard" screen

        Examples:
            | payment_platform |
            | Google Pay       |
            | Apple Pay        |

    @TPWV004
    @MX @backend(test)
    @native @ios @android
    @manual @JIRA.GLOMOGL-21829
    Scenario Outline: Access to Glomo with more than two cards to verify from <payment_platform>
        Given a user with the following criteria:
            | criteria           |
            | <payment_platform> |
            | multiple cards     |
        When the user starts process verification of a card from <payment_platform>
        Then the user is in "check card" screen
        And the user sees the following items in the screen:
            | items           |
            | header          |
            | close           |
            | description     |
            | cards to verify |
            | check card     |

        Examples:
            | payment_platform |
            | Google Pay       |
            | Apple Pay        |

    @TPWV005
    @MX @backend(test)
    @native @ios @android
    @manual @JIRA.GLOMOGL-21829
    Scenario Outline: Verify one card when the user has more than two cards to verify from <payment_platform>
        Given a user with the following criteria:
            | criteria           |
            | <payment_platform> |
            | multiple cards     |
        And the user starts process verification of a card from <payment_platform>
        When the user verifies one of the cards
        Then the user sees the following items in the screen:
            | items               | value         |
            | header              |               |
            | close               |               |
            | description         |               |
            | <title> title       |               |
            | card list to verify |               |
            | green toast         | verified card |

        Examples:
            | payment_platform | title                |
            | Google Pay       | pending verification |
            | Apple Pay        | devices              |

    @TPWV006
    @MX @backend(test)
    @native @ios @android
    @manual @JIRA.GLOMOGL-21829
    Scenario Outline: Exit card verification when the user has verified one card and still has cards to be verified from <payment_platform>
        Given a user with the following criteria:
            | criteria           |
            | <payment_platform> |
            | multiple cards     |
        And the user starts process verification of a card from <payment_platform>
        And the user verifies one of the cards
        When the user closes the "check card" screen
        Then the user sees a "small" modal with the following elements:
            | items                 |
            | info icon             |
            | title                 |
            | description           |
            | back to functionality |
            | exit to functionality |

        Examples:
            | payment_platform |
            | Google Pay       |
            | Apple Pay        |

    @TPWV007
    @MX @backend(test)
    @native @ios @android
    @manual @JIRA.GLOMOGL-21829
    Scenario Outline: Service failure when accessing card verification from <payment_platform>
        Given a user with the following criteria:
            | criteria           |
            | <payment_platform> |
        When the user starts process verification of a card from <payment_platform>
        Then the user sees a "small" error with the following elements:
            | items       |
            | info icon   |
            | title       |
            | description |
            | retry       |
            | exit        |

        Examples:
            | payment_platform |
            | Google Pay       |
            | Apple Pay        |

    @TPWV008
    @MX @backend(test)
    @native @ios @android
    @manual @JIRA.GLOMOGL-21829
    Scenario Outline: Retry access to card verification when Service failure three times from <payment_platform>
        Given a user with the following criteria:
            | criteria           |
            | <payment_platform> |
        And the user starts process verification of a card from <payment_platform>
        When the user retries "2" more times
        Then the user sees a "big" error with the following elements:
            | items        |
            | header       |
            | close        |
            | warning icon |
            | title error  |
            | exit         |

        Examples:
            | payment_platform |
            | Google Pay       |
            | Apple Pay        |

    @TPWV009
    @MX @backend(test)
    @native @ios @android
    @manual @JIRA.GLOMOGL-21829
    Scenario Outline: Connection error from <payment_platform>
        Given a user with the following criteria:
            | criteria           |
            | <payment_platform> |
        When the user starts process verification of a card from <payment_platform>
        Then the user sees a "small" error with the following elements:
            | items       |
            | info icon   |
            | title       |
            | description |
            | retry       |
            | exit        |

        Examples:
            | payment_platform |
            | Google Pay       |
            | Apple Pay        |

    @TPWV010
    @MX @backend(test)
    @native @ios @android
    @manual @JIRA.GLOMOGL-21829
    Scenario Outline: Card not available or belongs to another user from <payment_platform>
        Given a user with the following criteria:
            | criteria           |
            | <payment_platform> |
        When the user starts process verification of a card from <payment_platform>
        Then the user sees a "big" error with the following elements:
            | items        |
            | header       |
            | close        |
            | warning icon |
            | title error  |
            | Call  BBVA   |
            | exit         |

        Examples:
            | payment_platform |
            | Google Pay       |
            | Apple Pay        |
