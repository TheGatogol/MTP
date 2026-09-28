@TeleViaPaseTags
Feature: TeleVia Operations

    @TELEVIA002
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @vbank-modified @alternate-scenarios-smoke
    @backend-smoke @smokeTest
    Scenario: Tag Registration TeleVia - Operator interaction
        Given a user with the following criteria
            | criteria             |
            | televia without tags |
        When the user accesses to operationals page
        And the user go to register a tag without any tags registered
        And the user interact "operator" section from tag registration
        Then the user sees the following items in the screen
            | item            |
            | tag information |

    @TELEVIA003
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @vbank-modified @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Tag Registration TeleVia - Information Tag Form interaction
        Given a user with the following criteria
            | criteria             |
            | televia without tags |
        When the user accesses to operationals page
        And the user go to register a tag without any tags registered
        And the user interact "information tag manual" section from tag registration
        And the user fill information tag form and continue the process
        Then the user sees the following items in the screen
            | item                |
            | term and conditions |

    @TELEVIA004
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @vbank-modified @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Tag Registration TeleVia - Terms and Conditions interaction
        Given a user with the following criteria
            | criteria             |
            | televia without tags |
        When the user accesses to operationals page
        And the user go to register a tag without any tags registered
        And the user interact "term and condition" section from tag registration
        Then the user sees the following items in the screen
            | item    |
            | summary |

    @TELEVIA005
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @vbank-modified @alternate-scenarios-smoke
    @backend-smoke
    Scenario: TeleVia - Tag list already registered
        Given a user with the following criteria
            | criteria               |
            | televia with many tags |
        When the user accesses to operationals page
        And the user go to tag list
        Then the user sees the following items in the screen
            | item     |
            | tag list |

    @TELEVIA006
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @vbank-modified @alternate-scenarios-smoke
    @backend-smoke
    Scenario: TeleVia - Adding new tag
        Given a user with the following criteria
            | criteria          |
            | televia with tags |
        When the user accesses to operationals page
        And the user go to register a tag
        Then the user sees the following items in the screen
            | item   |
            | detail |

    @TELEVIA007
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @vbank-modified @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: TeleVia - <info> about Cost
        Given a user with the following criteria
            | criteria             |
            | televia without tags |
        When the user accesses to operationals page
        And the user go to register a tag without any tags registered
        And the user open "<info>" about cost
        Then the user sees the following items in the screen
            | item   |
            | <info> |
        Examples:
            | info             |
            | information      |
            | more information |

    @TELEVIA008
    @MX @web @android @ios
    @backend(test) @vbank @web-done
    @vbank-modified @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: Tag Registration TeleVia - Consult <section>
        Given a user with the following criteria
            | criteria         |
            | tlv without tags |
        When the user accesses to operationals page
        And the user go to register a tag without any tags registered
        And the user interact "term and condition" section from tag registration
        And the user consult "<section>" section from summary tag registration
        Then the user sees the following items in the screen
            | item      |
            | <section> |
        Examples:
            | section             |
            | term and conditions |
            | detail              |

    @TELEVIA009
    @MX @web @android @ios
    @test @vbank @web-done @vbank-modified @alternate-scenarios-smoke
    Scenario: Verify the registration of a tag
        Given a user with the following criteria
            | criteria             |
            | televia without tags |
        And the user accesses to operationals page
        And the user go to register a tag without any tags registered
        And the user interact "term and condition" section from tag registration
        When the user finishes the tag registration
        Then the user sees the following items in the screen
            | item                  |
            | close button          |
            | success icon          |
            | title                 |
            | date                  |
            | tag type title        |
            | tag type              |
            | tag title             |
            | tag                   |
            | contract number title |
            | contract number       |
            | tag data title        |
            | tag prefix title      |
            | tag prefix            |
            | tag number title      |
            | tag number            |
            | tag alias title       |
            | tag alias             |
            | balance title         |
            | balance               |
            | information panel     |
            | share button          |
            | recharge button       |

    @TELEVIA010
    @MX @web @android @ios
    @test @vbank @web-done @vbank-modified @alternate-scenarios-smoke
    Scenario: Verify the access to tag top up after a registration success
        Given a user with the following criteria
            | criteria             |
            | televia without tags |
        And the user accesses to operationals page
        And the user go to register a tag without any tags registered
        And the user interact "term and condition" section from tag registration
        And the user finishes the tag registration
        When the user accesses the recharge page from successful tag registration
        Then the user accesses the "recharge tag" screen
