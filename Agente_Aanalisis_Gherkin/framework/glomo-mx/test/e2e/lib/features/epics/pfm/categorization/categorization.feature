@pfm @categorization
Feature: PFM categorization

    @CAT001
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: PFM Categorization from link to movement detail from category
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        And the user accesses PFM categorization from "expenses"
        When the user accesses PFM movement detail from "category"
        Then the user sees the following items in the screen
            | item                |
            | Header              |
            | Header back         |
            | title description   |
            | amount              |
            | operation date      |

    @CAT002
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: PFM Categorization from link to movement detail from subcategory
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        And the user accesses PFM categorization from "expenses"
        When the user accesses PFM movement detail from "subcategory"
        Then the user sees the following items in the screen
            | item                |
            | Header              |
            | Header back         |
            | title description   |
            | amount              |
            | operation date      |

    @CAT003
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    @smokeTest
    Scenario: PFM Categorization return to PFM Dashboard from subcategory
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        And the user accesses PFM categorization from "expenses"
        And the user accesses PFM movement detail from "category"
        And the user return from transaction detail
        When the user accesses to PFM Dashboard from subcategory of categorization
        Then the user accesses the "pfm dashboard detail" screen

    @CAT004
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: PFM Categorization access to dates tab
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        When the user accesses PFM categorization from "expenses"
        And the user accesses pfm dates tab categorization
        Then the user sees the following items in the screen
            | item                         |
            | header                      |
            | header back button          |
            | elements tab                |
            | movements tab               |
            | group detail data           |
            | group detail total amount   |
            | category tab                |

    @CAT005
    @ios @android @web
    @MX @spherica
    @backend(test) @vbank
    @web-done
    Scenario: PFM Categorization edit Period
        Given a user with the following criteria
            | criteria                                  |
            | pfm spherica categorization               |
        And the user accesses PFM categorization from "expenses"
        When the user accesses edit categorization period
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | header back button          |
            | elements tab                |
            | movements tab               |
            | group detail data           |
            | group detail total amount   |
            | category tab                |

    @CAT006
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    @smokeTest
    Scenario: PFM Categorization access to history
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        When the user accesses PFM categorization from "expenses"
        And the user accesses expenses history detail
        Then the user sees the following items in the screen
            | item                         |
            | Header                       |
            | Header back button           |
            | history amount               |
            | history visualization linear |
            | history category title       |

    @CAT007
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: PFM Categorization  Return to PFM Dashboard from history
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        And the user accesses PFM categorization from "expenses"
        And the user accesses expenses history detail
        And the user accesses to categorization from history detail
        When the user accesses to PFM Dashboard from categorization
        Then the user accesses the "pfm dashboard detail" screen

    @CAT008
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: PFM Categorization - Access incomes
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        When the user accesses PFM categorization from "incomes"
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | header back button          |
            | elements tab                |
            | movements tab               |
            | group detail data           |
            | group detail total amount   |
            | category tab                |

    @CAT009
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: PFM Categorization - Return to PFM Dashboard From link incomes
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        And the user accesses PFM categorization from "link incomes"
        When the user accesses to PFM Dashboard from categorization
        Then the user accesses the "pfm dashboard detail" screen

    @CAT010
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: PFM Categorization access to history annual tab
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        And the user accesses PFM categorization from "expenses"
        And the user accesses expenses history detail
        When the user accesses history annual tab
        Then the user sees the following items in the screen
            | item                                |
            | Header                              |
            | Header back button                  |
            | history annual visualization linear |
            | history category title              |
            | history annual tab                  |
            | history monthly tab                 |

    @CAT011
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: PFM Categorization - Access expenses
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        When the user accesses PFM categorization from "expenses"
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | header back button          |
            | elements tab                |
            | movements tab               |
            | group detail data           |
            | group detail total amount   |
            | category tab                |

    @CAT012
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: PFM Categorization access to edit Period
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        And the user accesses PFM categorization from "expenses"
        When the user accesses PFM Categorization period
        Then the user sees the following items in the screen
            | item                 |
            | period header        |
            | radio button period  |
            | edit period button   |

    @CAT013
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    Scenario: PFM Categorization - Access link expenses
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        When the user accesses PFM categorization from "link expenses"
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | header back button          |
            | elements tab                |
            | movements tab               |
            | group detail data           |
            | group detail total amount   |
            | category tab                |

    @CAT014
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    Scenario Outline: PFM Categorization - Return to PFM Dashboard From <access_from>
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        And the user accesses PFM categorization from "<access_from>"
        When the user accesses to PFM Dashboard from categorization
        Then the user accesses the "pfm dashboard detail" screen

        Examples:
            | access_from      |
            | link expenses    |
            | link saving      |
            | link investment  |

    @CAT015
    @ios @android @web
    @MX
    @backend(test) @vbank @spherica
    @web-done
    Scenario: PFM Categorization - Consult subcategories of the Current Year option
        Given a user with the following criteria
            | criteria                           |
            | pfm spherica categorization        |
        When the user accesses PFM categorization from "link expenses"
        And the user changes the categorization period
        And the user accesses pfm category tab categorization
        And the user accesses to subcategory movements list
        Then the user sees the following items in the screen
            | item                               |
            | category expenses subcategory list |

    @CAT016
    @ios @android @web
    @MX
    @backend(test) @vbank @spherica
    @web-done
    Scenario: PFM Categorization - View "Savings and Investments" categories
        Given a user with the following criteria
            | criteria                                |
            | pfm spherica categorization             |
        When the user accesses PFM categorization from "link investment"
        And the user accesses pfm category tab categorization
        Then the user sees the following items in the screen
            | item                                    |
            | category saving and investments header  |
            | category saving and investments date    |
            | category saving and investments link    |
            | category saving and investments content |

    @CAT017
    @ios @android @web
    @MX
    @backend(test) @vbank @spherica
    @web-done
    Scenario: PFM Categorization - Validate error when the "Expenses" screen does not load
        Given a user with the following criteria
            | criteria                              |
            | pfm spherica categorization           |
        When the user accesses PFM categorization from "link expenses"
        Then the user sees the following items in the screen
            | item                                  |
            | category expenses error header        |
            | category expenses error header button |
            | category expenses error title         |
            | category expenses error text          |
            | category expenses error footer button |

    @CAT018
    @ios @android @web
    @MX
    @backend(test) @vbank @spherica
    @web-done
    Scenario: PFM Categorization - Close the "Total Expenses" error screen
        Given a user with the following criteria
            | criteria                      |
            | pfm spherica categorization   |
        When the user accesses PFM categorization from "link expenses"
        And the user accesses to PFM Dashboard from categorization
        Then the user accesses the "pfm dashboard detail" screen

    @CAT019
    @ios @android @web
    @MX
    @backend(test) @vbank @spherica
    @web-done
    Scenario: PFM Categorization - Customize period
        Given a user with the following criteria
            | criteria                              |
            | pfm spherica categorization           |
        When the user accesses PFM categorization from "link expenses"
        And the user selects the perzonalized option in categorization period
        Then the user sees the following items in the screen
            | item                                  |
            | radio button perzonalized period text |

    @CAT020
    @ios @android @web
    @MX
    @backend(test) @vbank @spherica
    @web-done
    Scenario: PFM Categorization - Check monthly movements by category
        Given a user with the following criteria
            | criteria                                      |
            | pfm spherica categorization                   |
        When the user accesses PFM categorization from "link expenses"
        And the user accesses expenses history detail
        And the user selects a category in history detail
        Then the user sees the following items in the screen
            | item                                          |
            | category expenses history subcategories list  |
