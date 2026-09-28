@investAdvisory @investAdvisoryContactAdvisor
Feature: Invest Advisory Proactive Assistance

    @API001
    @vbank @MX
    @smokeTest
    @ios @android @web
    @backend(test) @web-done
    Scenario: Exit profiling and validate proactive assistance modal
        Given a user with the following criteria
            | criteria                           |
            | investment profile proactive advisor user |
        And the user selects payment plan offer "invest advisory"
        When the user fills out profiling questionnaire the "experience" step
        And the user tries to leave the questionnaire
        Then the user sees the following items in the screen
            | item                                  |
            | exit modal screen                     |
            | exit modal help question text         |
            | exit modal advisor support text       |
            | exit modal call options text          |
            | exit modal request call button        |
            | exit modal schedule call button       |
            | exit modal leave process button       |

    @API002
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Exit profiling from initial amount and validate proactive assistance modal
        Given a user with the following criteria
            | criteria                           |
            | investment profile proactive advisor user |
        And the user selects payment plan offer "invest advisory"
        When the user starts the profiling with "1" experience and "20000" amount
        And the user tries to leave the questionnaire
        Then the user sees the following items in the screen
            | item                                  |
            | exit modal screen                     |
            | exit modal help question text         |
            | exit modal advisor support text       |
            | exit modal call options text          |
            | exit modal request call button        |
            | exit modal schedule call button       |
            | exit modal leave process button       |

    @API003
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Exit profiling from initial amount and term selection and validate proactive assistance modal
        Given a user with the following criteria
            | criteria                           |
            | investment profile proactive advisor user |
        And the user selects payment plan offer "invest advisory"
        When the user starts the profiling with "1" experience, "20000" amount, and "2" term without continuing
        And the user tries to leave the questionnaire
        Then the user sees the following items in the screen
            | item                                  |
            | exit modal screen                     |
            | exit modal help question text         |
            | exit modal advisor support text       |
            | exit modal call options text          |
            | exit modal request call button        |
            | exit modal schedule call button       |
            | exit modal leave process button       |

    @API004
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Exit hiring from opportunities entrypoint and validate proactive assistance modal
        Given a user with the following criteria
            | criteria                                    |
            | investment profile proactive advisor profiled user |
        And the user selects payment plan offer "invest advisory"
        When the user only accepts the assigned profile
        And the user starts the invest hiring process
        And the user exits the invest hiring flow
        Then the user sees the following items in the screen
            | item                                  |
            | exit modal screen                     |
            | exit modal help question text         |
            | exit modal advisor support text       |
            | exit modal call options text          |
            | exit modal request call button        |
            | exit modal schedule call button       |
            | exit modal leave process button       |

    @API005
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Exit hiring after selecting an account and validate proactive assistance modal
        Given a user with the following criteria
            | criteria                                    |
            | investment profile proactive advisor profiled user |
        And the user selects payment plan offer "invest advisory"
        When the user only accepts the assigned profile
        And the user starts the invest hiring process
        And the user selects an account of his accounts
        And the user exits the invest hiring flow
        Then the user sees the following items in the screen
            | item                                  |
            | exit modal screen                     |
            | exit modal help question text         |
            | exit modal advisor support text       |
            | exit modal call options text          |
            | exit modal request call button        |
            | exit modal schedule call button       |
            | exit modal leave process button       |

    @API006
    @vbank @MX
    @ios @android @web
    @backend(test) @web-done
    Scenario: Exit hiring after accepting terms and validate proactive assistance modal
        Given a user with the following criteria
            | criteria                                    |
            | investment profile proactive advisor profiled user |
        And the user selects payment plan offer "invest advisory"
        When the user only accepts the assigned profile
        And the user starts the invest hiring process
        And the user selects an account of his accounts
        And the user "checks" the terms and conditions
        And the user exits the invest hiring flow
        Then the user sees the following items in the screen
            | item                                  |
            | exit modal screen                     |
            | exit modal help question text         |
            | exit modal advisor support text       |
            | exit modal call options text          |
            | exit modal request call button        |
            | exit modal schedule call button       |
            | exit modal leave process button       |
