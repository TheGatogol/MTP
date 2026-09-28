@internationalTransfersDetail
Feature: International Transfers Detail

    @ITD001
    @MX
    @android @ios @web
    @web-done @smokeTest
    @backend(test)
    @vbank
    Scenario Outline: Access to view movements sent successful without economic activity from <entry_point>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        When the user accesses to detail with de following data
            | movementType | status     | entrypoint    |
            | sent         | successful | <entry_point> |
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | summary title             |
            | summary date              |
            | summary amount            |
            | summary description       |
            | summary status            |
            | operative share           |
            | operation type            |
            | own account alias         |
            | own account number        |
            | foreign name              |
            | foreign account number    |
            | foreign bank name         |
            | amount                    |
            | first question answer     |
            | second question answer    |
            | local economic activity   |
            | foreign economic activity |
            | operation date            |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |

    @ITD002
    @MX
    @android @ios @web
    @web-done
    @backend(test)
    @vbank
    Scenario Outline: Access to view movements sent rejected without economic activity from <entry_point>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        When the user accesses to detail with de following data
            | movementType | status   | entrypoint    |
            | sent         | rejected | <entry_point> |
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | summary title             |
            | summary date              |
            | summary amount            |
            | summary description       |
            | summary status            |
            | operative share           |
            | info box icon             |
            | info box message          |
            | operation type            |
            | own account alias         |
            | own account number        |
            | foreign name              |
            | foreign account number    |
            | foreign bank name         |
            | amount                    |
            | first question answer     |
            | second question answer    |
            | local economic activity   |
            | foreign economic activity |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |

    @ITD003
    @MX
    @android @ios @web
    @web-done
    @backend(test)
    @vbank
    Scenario Outline: Access to view movements sent in review without economic activity from <entry_point>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        When the user accesses to detail with de following data
            | movementType | status    | entrypoint    |
            | sent         | in review | <entry_point> |
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | summary title             |
            | summary date              |
            | summary amount            |
            | summary description       |
            | summary status            |
            | operative share           |
            | info box icon             |
            | info box message          |
            | operation type            |
            | own account alias         |
            | own account number        |
            | foreign name              |
            | foreign account number    |
            | foreign bank name         |
            | amount                    |
            | first question answer     |
            | second question answer    |
            | local economic activity   |
            | foreign economic activity |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |

    @ITD004
    @MX
    @android @ios @web
    @web-done
    @backend(test)
    @vbank
    Scenario Outline: Access to view movements received successful without economic activity from <entry_point>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        When the user accesses to detail with de following data
            | movementType | status     | entrypoint    |
            | received     | successful | <entry_point> |
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | summary title          |
            | summary date           |
            | summary amount         |
            | summary description    |
            | summary status         |
            | operative share        |
            | operation type         |
            | own account alias      |
            | own account number     |
            | foreign name           |
            | foreign account number |
            | foreign bank name      |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |

    @ITD005
    @MX
    @android @ios @web
    @web-done
    @backend(test)
    @vbank
    Scenario Outline: Access to view movements received rejected without economic activity from <entry_point>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        When the user accesses to detail with de following data
            | movementType | status   | entrypoint    |
            | received     | rejected | <entry_point> |
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | summary title          |
            | summary date           |
            | summary amount         |
            | summary description    |
            | summary status         |
            | operative share        |
            | info box icon          |
            | info box message       |
            | info box call          |
            | operation type         |
            | own account alias      |
            | own account number     |
            | foreign name           |
            | foreign account number |
            | foreign bank name      |
            | operation date         |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |

    @ITD006
    @MX
    @android @ios @web
    @web-done
    @backend(test)
    @vbank
    Scenario Outline: Access to view movements received in review without economic activity from <entry_point>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        When the user accesses to detail with de following data
            | movementType | status    | entrypoint    |
            | received     | in review | <entry_point> |
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | summary title          |
            | summary date           |
            | summary amount         |
            | summary description    |
            | summary status         |
            | operative share        |
            | info box icon          |
            | info box message       |
            | operation type         |
            | own account alias      |
            | own account number     |
            | foreign name           |
            | foreign account number |
            | foreign bank name      |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |

    @ITD007
    @MX
    @android @ios @web
    @web-done
    @backend(test)
    @vbank
    Scenario Outline: Access to view movements received pending information without economic activity from <entry_point>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        When the user accesses to detail with de following data
            | movementType | status              | entrypoint    |
            | received     | pending information | <entry_point> |
        Then the user sees the following items in the screen
            | item                           |
            | header                         |
            | summary title                  |
            | summary date                   |
            | summary amount                 |
            | summary description            |
            | summary status                 |
            | operative share                |
            | operative complete information |
            | info box icon                  |
            | info box message               |
            | operation type                 |
            | own account alias              |
            | own account number             |
            | foreign name                   |
            | foreign account number         |
            | foreign bank name              |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |

    @ITD008
    @MX
    @android @ios @web
    @web-done
    @backend(test)
    @vbank
    Scenario Outline: Access to view movements received successful with economic activity from <entry_point>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        When the user accesses to detail with de following data
            | movementType | status     | entrypoint    |
            | received     | successful | <entry_point> |
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | summary title             |
            | summary date              |
            | summary amount            |
            | summary description       |
            | summary status            |
            | operative share           |
            | operation type            |
            | own account alias         |
            | own account number        |
            | foreign name              |
            | foreign account number    |
            | foreign bank name         |
            | first question answer     |
            | second question answer    |
            | local economic activity   |
            | foreign economic activity |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |

    @ITD009
    @MX
    @android @ios @web
    @web-done
    @backend(test)
    @vbank
    Scenario Outline: Access to view movements received successful and view an error <entry_point>
        Given a user with the following criteria
            | criteria                                    |
            | international transfers with one n4 account |
        When the user accesses to detail with de following data
            | movementType | status     | entrypoint    |
            | received     | successful | <entry_point> |
        Then the user sees an error modal with the following elements:
            | item        |
            | header      |
            | icon help   |
            | title       |
            | description |
            | retry btn   |
            | return btn  |

        Examples:
            | entry_point      |
            | select operation |
            | account detail   |
