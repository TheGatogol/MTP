@adviceFinancialCoach
Feature: Advice Financial Coach

    @AFC002
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    @smokeTest
    Scenario: Advice Financial Coach dashboard is displayed
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        When the user accesses the financial coach section
        Then the user sees the following items in the screen
            | item                      |
            | advice financial coach    |
            | scoring link              |
            | targets header category   |
            | proposals header category |
            | badges header category    |

    @AFC003
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: The user is in your financial situation page and go to pfm dashboard detail
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user accesses to your financial situation coach page
        When the user go to pfm dashboard detail from coach
        Then the user accesses the "pfm dashboard detail" screen

    @AFC004
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: The user is in your financial situation page and open Ingresos y gastos modal
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user accesses to your financial situation coach page
        When the user selects "Ingresos y gastos" info button in a coach modal
        Then the user sees the following items in the screen
            | item                      |
            | income and expenses modal |

    @AFC005
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: The user is in your financial situation page and open Colchón financiero modal
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user accesses to your financial situation coach page
        When the user selects "Colchón financiero" info button in a coach modal
        Then the user sees the following items in the screen
            | item                    |
            | financial cushion modal |

    @AFC006
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: The user selects a target
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user open the coach targets modal
        When the user selects a target in coach operational
        Then the user sees the following items in the screen
            | item                      |
            | advice financial coach    |
            | scoring link              |
            | targets header category   |
            | proposals header category |
            | badges header category    |

    @AFC007
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: The user modifies a target
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user open the coach targets modal
        When the user modifies a target in coach operational
        Then the user sees the following items in the screen
            | item                      |
            | advice financial coach    |
            | targets header category   |
            | proposals header category |
            | badges header category    |

    @AFC008
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: The user delete a target
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user open the coach targets modal
        When the user confirms delete target
        Then the user sees the following items in the screen
            | item                      |
            | advice financial coach    |
            | scoring link              |
            | targets header category   |
            | badges header category    |

    @AFC009
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: The user go to pocket from proposal
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user navigates to the coach proposals dashboard
        And the user selects "pockets" coach proposal to view the details
        When the user accesses to coach proposal internal link
        Then the user accesses the "piggy banks" screen

    @AFC010
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: The user go to plan from proposal
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user navigates to the coach proposals dashboard
        And the user selects "plan" coach proposal to view the details
        When the user accesses to coach proposal internal link
        Then the user accesses the "goals" screen

    @AFC011
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: The user go to pockets from badges
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user navigates to the coach badges dashboard
        And the user selects "pockets" badge on coach dashboard to view the details
        When the user accesses to coach badge internal link
        Then the user accesses the "piggy banks" screen

    @AFC012
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: The user go to plan from badges
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user navigates to the coach badges dashboard
        And the user selects "plan" badge on coach dashboard to view the details
        When the user accesses to coach badge internal link
        Then the user accesses the "goals" screen

    @AFC013
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: The user go to obtained badge
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user navigates to the coach badges dashboard
        And the user switch to coach obtained badges tab
        When the user first obtained coach badge on dashboard to view the details
        Then the user sees the following items in the screen
            | item                 |
            | badge obtained modal |

    @AFC014
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: The user go scoring page from onboarding
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        When the user close onboarding coach
        Then the user sees the following items in the screen
            | item          |
            | scoring page  |

    @AFC015
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: The user selects cushion target
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        And the user open the coach targets modal
        When the user selects cushion target in coach operational
        Then the user sees the following items in the screen
            | item                      |
            | advice financial coach    |
            | scoring link              |
            | targets header category   |
            | proposals header category |
            | badges header category    |

    @AFC018
    @ios @android @web @web-done
    @MX
    @backend(test) @vbank
    Scenario: The user is in your financial situation page and he needs to improve his financial cushion and his expenses
        Given a user with the following criteria
            | criteria               |
            | advice financial coach |
        And the user accesses the financial coach section
        When the user accesses to your financial situation coach page
        Then the user sees the following items in the screen
            | item                                        |
            | improve financial cushion and expenses text |
