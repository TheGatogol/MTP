@cardOperativeLimitsUpdateYoungsters
Feature: Card Operative Limits Update - Youngsters

    @COLUY002
    @MX @backend(test) @vbank
    @web @android @ios @web-done
    @backend-smoke
    Scenario Outline: The <user> user accesses to the parental control help screen
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to parental control card limits
        When the user accesses to "parental control" help modal
        Then the user sees the following items in the screen
            | item                                   |
            | parental control modal icon            |
            | parental control modal first question  |
            | parental control modal first answer    |
            | parental control modal second question |
            | parental control modal second answer   |
            | parental control modal third question  |
            | parental control modal third answer    |
            | parental control modal fourth question |
            | parental control modal fourth answer   |
            | parental control modal accept button   |

        Examples:
            | user                       |
            | alternative parent control |
            | youngster control          |

    @COLUY003
    @MX @backend(test) @vbank
    @web @android @ios @web-done
    @backend-smoke
    Scenario Outline: The <user> user accesses to the limits help screen
        Given a user with the following criteria
            | criteria |
            | <user>   |
        And the user accesses to parental control card limits
        When the user accesses to "limits information" help modal
        Then the user sees the following items in the screen
            | item                       |
            | limits modal icon          |
            | limits modal first point   |
            | limits modal second point  |
            | limits modal third point   |
            | limits modal accept button |

        Examples:
            | user                       |
            | alternative parent control |
            | youngster control          |

    @COLUY004
    @MX @backend(test) @vbank
    @web @android @ios @web-done
    @backend-smoke
    Scenario Outline: The user accepts the <helpModal> help modal
        Given a user with the following criteria
            | criteria                   |
            | alternative parent control |
        And the user accesses to parental control card limits
        And the user accesses to "<helpModal>" help modal
        When the user accepts the "<helpModal>" modal
        Then the user sees the "parental control card limit" screen

        Examples:
            | helpModal          |
            | parental control   |
            | limits information |

    @COLUY005
    @MX @backend(test) @vbank
    @web @android @ios @web-done
    @backend-smoke
    Scenario Outline: The user accesses the <editModal> modal
        Given a user with the following criteria
            | criteria                   |
            | alternative parent control |
        And the user accesses to parental control card limits
        When the user accesses to "<editModal>" help modal
        Then the user sees the following items in the screen
            | item                           | value    |
            | edit actual limit              |          |
            | edit daily limit title         |          |
            | edit limit bar                 |          |
            | edit available today           |          |
            | edit used today                |          |
            | edit main title                |          |
            | edit help icon                 |          |
            | edit new limit input title     |          |
            | edit new limit input           |          |
            | edit new limit input message   |          |
            | edit notification message icon |          |
            | edit notification message text |          |
            | edit accept button             | disabled |
            | edit cancel button             |          |

        Examples:
            | editModal              |
            | edit retirement limits |
            | edit shopping limits   |

    @COLUY006
    @MX @backend(test) @vbank @smokeTest
    @web @android @ios @web-done
    @backend-smoke
    Scenario: The user accesses to the edit shopping limits information modal
        Given a user with the following criteria
            | criteria                   |
            | alternative parent control |
        And the user accesses to parental control card limits
        When the user accesses to "edit shopping limits information" help modal
        Then the user sees the following items in the screen
            | item                                     |
            | edit shopping limits modal icon          |
            | edit shopping limits modal first point   |
            | edit shopping limits modal second point  |
            | edit shopping limits modal third point   |
            | edit shopping limits modal fourth point  |
            | edit shopping limits modal accept button |

    @COLUY007
    @MX @backend(test) @vbank
    @web @android @ios @web-done
    @backend-smoke
    Scenario: The user accesses to the edit retirement limits information modal
        Given a user with the following criteria
            | criteria                   |
            | alternative parent control |
        And the user accesses to parental control card limits
        When the user accesses to "edit retirement limits information" help modal
        Then the user sees the following items in the screen
            | item                                       |
            | edit retirement limits modal icon          |
            | edit retirement limits modal first point   |
            | edit retirement limits modal second point  |
            | edit retirement limits modal third point   |
            | edit retirement limits modal fourth point  |
            | edit retirement limits modal fifth point   |
            | edit retirement limits modal sixth point   |
            | edit retirement limits modal accept button |

    @COLUY008
    @MX @backend(test) @vbank
    @web @android @ios @web-done
    @backend-smoke
    Scenario Outline: The user exits the <helpModal> modal
        Given a user with the following criteria
            | criteria                   |
            | alternative parent control |
        And the user accesses to parental control card limits
        And the user accesses to "<helpModal>" help modal
        When the user accepts the "<helpModal>" modal
        Then the user sees the "parental control card limit" screen

        Examples:
            | helpModal                          |
            | edit shopping limits information   |
            | edit retirement limits information |
