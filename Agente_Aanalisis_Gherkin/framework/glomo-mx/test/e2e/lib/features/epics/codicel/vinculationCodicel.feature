@vinculationCodicel
Feature: Codicel

    @VC001
    @MX
    @web @android @ios @web-done
    @backend(test) @alternate-scenarios-smoke
    @vbank
    @backend-smoke
    Scenario: Screen Validation - Vinculation
        Given a user with the following criteria
            | criteria          |
            | user vinculation  |
        When the user goes to the codicel vinculation operation
        And the user accepts the vinculation confirmation modal
        Then the user sees the following items in the screen
            | item                              | value         |
            | header                            | enabled       |
            | title                             | enabled       |
            | name label                        | enabled       |
            | name content                      | enabled       |
            | phone label                       | enabled       |
            | phone content                     | enabled       |
            | account label                     | enabled       |
            | account content                   | enabled       |
            | clabe label                       | enabled       |
            | clabe content                     | enabled       |
            | information icon message          | enabled       |
            | information message               | enabled       |
            | vinculate data                    | enabled       |
            | title and description             | enabled       |
            | checkbox                          | disabled      |
            | checkbox text                     | disabled      |
            | accept button                     | disabled      |
            | cancel button                     | enabled       |

    @VC002
    @MX
    @web @android @ios @web-done
    @backend(test) @alternate-scenarios-smoke
    @vbank
    @backend-smoke
    Scenario: The user visualices the confirm vinculation screen
        Given a user with the following criteria
            | criteria          |
            | user vinculation  |
        When the user goes to the codicel vinculation operation
        Then the user sees a modal with the following elements:
            | item              | value                 |
            | vinculate icon    | enabled               |

    @VC003
    @MX
    @web @android @ios @web-done
    @backend(test) @alternate-scenarios-smoke
    @vbank
    @backend-smoke
    Scenario: The user denys the vinculation confirmation modal
        Given a user with the following criteria
            | criteria          |
            | user vinculation  |
        When the user goes to the codicel vinculation operation
        And the user "decides to" doesnt accept the vinculation confirmation modal
        Then the user sees a modal with the following elements:
            | item                    | value         |
            | confirm vinculate icon  | enabled       |

    @VC004
    @MX
    @web @android @ios @web-done
    @backend(test) @alternate-scenarios-smoke
    @vbank
    @backend-smoke
    Scenario: The user definitely denys the vinculation confirmation modal
        Given a user with the following criteria
            | criteria          |
            | user vinculation  |
        When the user goes to the codicel vinculation operation
        And the user "definitely" doesnt accept the vinculation confirmation modal
        Then the user accesses the "product detail account" screen

    @VC005
    @MX
    @web @android @ios @web-done
    @backend(test) @alternate-scenarios-smoke
    @vbank
    @backend-smoke
    Scenario: The user returns to the confirmation modal after initially denying it
        Given a user with the following criteria
            | criteria          |
            | user vinculation  |
        When the user goes to the codicel vinculation operation
        And the user "initially" doesnt accept the vinculation confirmation modal
        Then the user sees a modal with the following elements:
            | item              | value                 |
            | vinculate icon    | enabled               |

    @VC006
    @MX
    @web @android @ios @web-done
    @backend(test) @alternate-scenarios-smoke
    @vbank
    @backend-smoke
    Scenario Outline: The user exits the vinculation operation through the "<button>" button
        Given a user with the following criteria
            | criteria          |
            | user vinculation  |
        When the user goes to the codicel vinculation operation
        And the user accepts the vinculation confirmation modal
        And the user exits the operation with the "<button>"
        Then the user accesses the "product detail account" screen
        Examples:
            | button    |
            | X         |
            | cancel    |

    @VC007
    @MX
    @web @android @ios @web-done
    @backend(test) @alternate-scenarios-smoke
    @vbank
    @backend-smoke
    Scenario: The user accesses the help modal
        Given a user with the following criteria
            | criteria          |
            | user vinculation  |
        When the user goes to the codicel vinculation operation
        And the user accepts the vinculation confirmation modal
        And the user accesses the help modal
        Then the user sees a modal with the following elements:
            | item              | value                 |
            | help icon         | enabled               |

    @VC008
    @MX
    @web @android @ios @web-done
    @backend(test) @alternate-scenarios-smoke
    @vbank
    @backend-smoke
    Scenario: The user accepts the help modal information
        Given a user with the following criteria
            | criteria          |
            | user vinculation  |
        When the user goes to the codicel vinculation operation
        And the user accepts the vinculation confirmation modal
        And the user opens and accepts the help modal
        Then the user sees the following items in the screen
            | item                              | value         |
            | header                            | enabled       |
            | title                             | enabled       |
            | name label                        | enabled       |
            | name content                      | enabled       |
            | phone label                       | enabled       |
            | phone content                     | enabled       |
            | account label                     | enabled       |
            | account content                   | enabled       |
            | clabe label                       | enabled       |
            | clabe content                     | enabled       |
            | information icon message          | enabled       |
            | information message               | enabled       |
            | vinculate data                    | enabled       |
            | title and description             | enabled       |
            | checkbox                          | enabled       |
            | checkbox text                     | enabled       |
            | accept button                     | enabled       |
            | cancel button                     | enabled       |

    @VC009
    @MX
    @web @android @ios @web-done
    @backend(test) @smokeTest
    @vbank
    Scenario: Create vinculation - modal successes
        Given a user with the following criteria
            | criteria            |
            | user vinculation    |
        When the user goes to the codicel vinculation operation
        And the user accepts the vinculation confirmation modal
        And the user opens and accepts the help modal
        And the user completes vinculation operation
        Then the user sees the following items in the screen
            | item                              |
            | modal successes header            |
            | modal successes img               |
            | modal successes description       |
            | modal successes button quit       |

    @VC010
    @MX
    @web @android @ios @web-done
    @backend(test) @alternate-scenarios-smoke
    @vbank
    @backend-smoke
    Scenario: Go to screen vinculation
        Given a user with the following criteria
            | criteria            |
            | user vinculation    |
        When the user goes to the codicel vinculation operation
        Then the user is in the codicel vinculation operation

    @VC011
    @MX
    @web @android @ios @web-done
    @backend(test) @alternate-scenarios-smoke
    @vbank
    @backend-smoke
    Scenario: Screen Validation - Desvinculation
        Given a user with the following criteria
            | criteria            |
            | dimo desvinculation |
        When the user goes to the codicel desvinculation operation
        Then the user sees the following items in the screen
            | item                     |
            | header                   |
            | title                    |
            | name label               |
            | name content             |
            | phone label              |
            | phone content            |
            | account label            |
            | account content          |
            | clabe label              |
            | clabe content            |
            | information icon message |
            | information message      |
            | vinculate data           |
            | title and description    |
            | checkbox                 |
            | checkbox text            |
            | accept button            |
            | cancel button            |

    @VC012
    @MX
    @web @android @ios @web-done
    @backend(test) @alternate-scenarios-smoke
    @vbank
    @backend-smoke
    Scenario: Desvinculation - the user accesses to the information about the use of data
        Given a user with the following criteria
            | criteria            |
            | dimo desvinculation |
        And the user goes to the codicel desvinculation operation
        When the user accesses the help modal
        Then the user sees a modal with the following elements:
            | item             |
            | help icon        |
            | vinculate button |
            | description      |

    @VC013
    @MX
    @web @android @ios @web-done
    @backend(test) @alternate-scenarios-smoke
    @vbank
    @backend-smoke
    Scenario Outline: Desvinculation - the user press <element> to closes the information about the use of data modal
        Given a user with the following criteria
            | criteria            |
            | dimo desvinculation |
        And the user goes to the codicel desvinculation operation
        And the user accesses the help modal
        When the user exits to closes the help modal with the "<element>"
        Then the user sees the following items in the screen
            | item                     |
            | header                   |
            | title                    |
            | name label               |
            | name content             |
            | phone label              |
            | phone content            |
            | account label            |
            | account content          |
            | clabe label              |
            | clabe content            |
            | information icon message |
            | information message      |
            | vinculate data           |
            | title and description    |
            | checkbox                 |
            | checkbox text            |
            | accept button            |
            | cancel button            |
        Examples:
            | element  |
            | x        |
            | continue |

    @VC014
    @MX
    @web @android @ios @web-done
    @backend(test) @alternate-scenarios-smoke
    @vbank
    @backend-smoke
    Scenario: Desvinculation - the user sees the confirmation modal
        Given a user with the following criteria
            | criteria            |
            | dimo desvinculation |
        And the user goes to the codicel desvinculation operation
        When the user accesses the help modal
        Then the user sees a modal with the following elements:
            | item                            |
            | help icon                       |
            | help information                |
            | help accept button              |

    @VC015
    @MX
    @web @android @ios @web-done
    @backend(test) @alternate-scenarios-smoke
    @vbank
    @backend-smoke
    Scenario: Desvinculation - the user cancel desvinculation process
        Given a user with the following criteria
            | criteria            |
            | dimo desvinculation |
        And the user goes to the codicel desvinculation operation
        And the user accesses the help modal
        When the user exits to closes the help modal with the "x"
        Then the user sees the following items in the screen
            | item                     |
            | header                   |
            | title                    |
            | name label               |
            | name content             |
            | phone label              |
            | phone content            |
            | account label            |
            | account content          |
            | clabe label              |
            | clabe content            |
            | information icon message |
            | information message      |
            | vinculate data           |
            | title and description    |
            | checkbox                 |
            | checkbox text            |
            | accept button            |
            | cancel button            |

    @VC016
    @MX
    @web @android @ios @web-done
    @backend(test) @smokeTest
    @vbank
    Scenario: Desvinculation - the user desvinculation process
        Given a user with the following criteria
            | criteria            |
            | dimo desvinculation |
        And the user goes to the codicel desvinculation operation
        And the user opens and accepts the help modal
        When the user accept the desvinculation confirmation modal
        Then the user sees a modal with the following elements:
            | item                                     |
            | modal desvinculate confirmation img      |
            | modal desvinculate confirmation message  |
            | modal desvinculate successes quit button |

    @VC017
    @MX
    @web @android @ios @web-done
    @backend(test) @alternate-scenarios-smoke
    @vbank
    Scenario: Desvinculation - go to back dashboard x button
        Given a user with the following criteria
            | criteria            |
            | dimo desvinculation |
        And the user goes to the codicel desvinculation operation
        And the user opens and accepts the help modal
        When the user does the desvinculation with the "x"
        Then the user accesses the "product detail account" screen

    @VC018
    @MX
    @web @android @ios @web-done
    @backend(test) @alternate-scenarios-smoke
    @vbank
    Scenario: Desvinculation - go to back dashboard quit button
        Given a user with the following criteria
            | criteria            |
            | dimo desvinculation |
        And the user goes to the codicel desvinculation operation
        And the user opens and accepts the help modal
        When the user does the desvinculation with the "button quit"
        Then the user accesses the "product detail account" screen
