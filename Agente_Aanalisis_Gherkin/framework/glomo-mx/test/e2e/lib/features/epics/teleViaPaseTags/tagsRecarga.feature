@TeleViaPaseTags @RechargeTags
Feature: TeleVia Recharge Operations

    @TLVR001
    @MX @web @android @ios
    @backend(test) @vbank @web-done @smokeTest
    @vbank-modified
    Scenario Outline: Recharge Tags - Select <money>
        Given a user with the following criteria
            | criteria          |
            | televia with tags |
        When the user accesses to operationals page
        And the user go to recharge a tag with balance "1,600"
        And the user select an "<money>" to recharge tag and continue
        Then the user sees the following items in the screen
            | item             |
            | account          |

        Examples:
            | money        |
            | amount       |
            | other amount |

    @TLVR002
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @vbank-modified @alternate-scenarios-smoke
    Scenario: Recharge Tags - Select account
        Given a user with the following criteria
            | criteria          |
            | televia with tags |
        When the user accesses to operationals page
        And the user go to recharge a tag with balance "1,600"
        And the user select an "account" to recharge tag and continue
        Then the user sees the following items in the screen
            | item    |
            | summary |

    @TLVR003
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @vbank-modified @alternate-scenarios-smoke
    Scenario: Recharge Tags - Select amount with $2600 balance
        Given a user with the following criteria
            | criteria               |
            | televia with four tags |
        When the user accesses to operationals page
        And the user go to recharge a tag with balance "2,600"
        And the user only can select amount of "200" or "300" pesos
        Then the user sees the following items in the screen
            | item             |
            | account          |

    @TLVR004
    @backend-smoke
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @vbank-modified @alternate-scenarios-smoke
    Scenario: Recharge Tags - Select amount with $2900 balance
        Given a user with the following criteria
            | criteria               |
            | televia with four tags |
        When the user accesses to operationals page
        And the user go to recharge a tag with balance "2,900"
        Then the user cannot select any amount

    @TLVR005
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @vbank-modified @alternate-scenarios-smoke
    Scenario Outline: Recharge Tags - With three or more accounts and <action>
        Given a user with the following criteria
            | criteria               |
            | televia with four tags |
        When the user accesses to operationals page
        And the user go to recharge a tag with balance "207"
        And the user view more accounts to recharge
        Then the user sees 3 or more accounts to recharge and "<action>"

        Examples:
            | action     |
            | select one |
            | close      |

    @TLVR006
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @vbank-modified @alternate-scenarios-smoke
    Scenario Outline: Recharge Tags - Account with <account> balance
        Given a user with the following criteria
            | criteria          |
            | televia with tags |
        When the user accesses to operationals page
        And the user go to recharge a tag with balance "1,600"
        And the user do recharge process until "account" section
        Then the user sees an account "<status>"

        Examples:
            | account | status  |
            | some    | active  |
            | $0      | blocked |

    @TLVR007
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @vbank-modified @alternate-scenarios-smoke
    Scenario Outline: Recharge Tags - Edit <section> section and <account_msg>
        Given a user with the following criteria
            | criteria          |
            | televia with tags |
        When the user accesses to operationals page
        And the user go to recharge a tag with balance "1,600"
        And the user do recharge process until "summary" section
        And the user change "<section>" from summary recharge section and "<account_msg>"
        Then the user sees the following items in the screen
            | item    |
            | summary |
        Examples:
            | section | account_msg |
            | amount  | change      |
            | account | change      |
            | account | keep        |

    @TLVR008
    @backend-smoke
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @vbank-modified @alternate-scenarios-smoke
    Scenario Outline: Recharge Tags - FAQ <question> question
        Given a user with the following criteria
            | criteria          |
            | televia with tags |
        When the user accesses to operationals page
        And the user go to FAQ about tags
        And the user consult the "<question>" question from "<section>"
        Then the user sees the following items in the screen
            | item     |
            | question |

        Examples:
            | question | section |
            | first    | first   |
            | second   | first   |
            | third    | first   |
            | fourth   | first   |
            | fifth    | first   |
            | sixth    | second  |
            | seventh  | second  |
            | eigth    | third   |

    @TLVR009
    @backend-smoke
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @vbank-modified @alternate-scenarios-smoke
    Scenario: Recharge Tags - More information
        Given a user with the following criteria
            | criteria          |
            | televia with tags |
        When the user accesses to operationals page
        And the user go to recharge a tag with balance "1,600"
        And the user go to know more information about tag
        Then the user sees the following items in the screen
            | item      |
            | know more |

    @TLVR010
    @MX @web @android @ios
    @manual @!vbank @web-done @JIRA.GLOMOGL-23888
    @alternate-scenarios-smoke
    Scenario: Recharge a tag
        Given a user with the following criteria
            | criteria          |
            | televia with tags |
        When the user accesses to operationals page
        And the user go to recharge a tag with balance "0"
        And the user do recharge process until "summary" section
        And the user recharge it
        Then the user sees the following items in the screen
            | item    |
            | success |

    @TLVR011
    @MX @web @android @ios
    @manual @!vbank @web-done @JIRA.GLOMOGL-23888
    @alternate-scenarios-smoke
    Scenario: Recharge a tag with other amount
        Given a user with the following criteria
            | criteria          |
            | televia with tags |
        When the user accesses to operationals page
        And the user go to recharge a tag with balance "0"
        And the user select other amount and recharge it
        Then the user sees the following items in the screen
            | item    |
            | success |

    @TLVR012
    @MX @web @android @ios
    @manual @!vbank @web-done @JIRA.GLOMOGL-23888
    @alternate-scenarios-smoke
    Scenario: Recharge Tags - Select amount with $2600 balance and recharge it
        Given a user with the following criteria
            | criteria               |
            | televia with four tags |
        When the user accesses to operationals page
        And the user go to recharge a tag with balance "2,600"
        And the user do recharge process until "summary" section
        And the user recharge it
        Then the user sees the following items in the screen
            | item    |
            | success |

    @TLVR013
    @MX @web @android @ios
    @manual @!vbank @web-done @JIRA.GLOMOGL-23888
    @alternate-scenarios-smoke
    Scenario Outline: Delete a Tag - <action> a tag
        Given a user with the following criteria
            | criteria          |
            | televia with tags |
        When the user accesses to operationals page
        And the user delete a tag
        Then the user sees the tag list

        Examples:
            | action                   |
            | remove                   |
            | do not remove            |
            | remove and see more info |
