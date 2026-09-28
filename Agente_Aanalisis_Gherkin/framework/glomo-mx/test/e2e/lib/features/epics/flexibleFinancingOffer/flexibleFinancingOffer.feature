@flexibleFinancingOffer
Feature: Flexible Financing Offer

    @FFO001
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Access to apply promotion <type>
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | <promotion>              |
        And the user accesses to dashboard
        When the user goes to "modular offering flexible financing offer" using deeplink navigation
        Then the user sees the following items in the screen
            | item                             | value             |
            | header                           | visible           |
            | header info button               | visible           |
            | header close button              | visible           |
            | microillustration                | visible           |
            | offer panel title                | visible           |
            | purchase container               | visible           |
            | promotion container              | visible           |
            | promotion title                  | visible           |
            | promotion term                   | <term>            |
            | promotion detail container       | visible           |
            | promotion detail monthly payment | <monthly_payment> |
            | promotion deadline link          | visible           |
            | info message                     | visible           |
            | promotion detail link            | visible           |
            | fixed step continue button       | visible           |
        Examples:
            | promotion   | term        | monthly_payment | type  |
            | fixed msi   | visible     | visible         | msi   |
            | fixed skip  | not visible | not visible     | skip  |
            | fixed combo | not visible | visible         | combo |

    @FFO002
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Happy path <type>
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | <promotion>              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        When the user confirms to apply the promotion
        Then the user sees the following items in the screen
            | item                                           | value                     |
            | success header                                 | visible                   |
            | success page title                             | visible                   |
            | success page promotion purchase                | visible                   |
            | success page promotion total amount            | visible                   |
            | success page promotion months number           | <months_number>           |
            | success page promotion monthly payment         | <monthly_payment>         |
            | success page promotion start payment date skip | <start_payment_date_skip> |
            | success page promotion start payment date      | <start_payment_date>      |
            | success page promotion discounted points       | <discounted_points>       |
            | success page promotion card                    | visible                   |
            | success page promotion folio operation         | visible                   |
            | success page promotion date operation          | visible                   |
            | success page info message                      | visible                   |
            | success page button share                      | visible                   |
        Examples:
            | promotion   | months_number | monthly_payment | start_payment_date_skip | start_payment_date | discounted_points | type                            |
            | fixed msi   | visible       | visible         | not visible             | not visible        | visible           | msi posted purchase             |
            | fixed msi   | visible       | visible         | not visible             | not visible        | not visible       | msi in transit purchase         |
            | fixed skip  | not visible   | not visible     | visible                 | not visible        | not visible       | skip approved purchase          |
            | fixed skip  | not visible   | not visible     | visible                 | not visible        | not visible       | skip in transit purchase        |
            | fixed combo | visible       | visible         | not visible             | visible            | not visible       | combo purchase pending approval |
            | fixed combo | visible       | visible         | not visible             | visible            | visible           | combo approved purchase         |

    @FFO003
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Access to promotion <type>
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | <promotion>              |
        And the user accesses to dashboard
        When the user goes to "modular offering flexible financing offer" using deeplink navigation
        Then the user sees the following items in the screen
            | item                               |
            | onboarding header                  |
            | onboarding header close            |
            | onboarding microillustration       |
            | onboarding offer panel title       |
            | onboarding offer panel description |
            | onbarding continue button          |
        Examples:
            | promotion   | type                  |
            | multi msi   | installments          |
            | multi skip  | your payment can wait |
            | multi combo | combo                 |
            | multi mixed | selection             |

    @FFO004
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Access to multistep <type>
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | <promotion>              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        When the user accepts the onboarding
        Then the user sees the following items in the screen
            | item                         |
            | multistep header             |
            | multistep header info        |
            | multistep header close       |
            | multistep purchase prefilled |
            | multistep step number        |
            | multistep step description   |
            | multistep option one         |
            | multistep option two         |
            | multistep promotion detail   |
            | multistep continue button    |
        Examples:
            | promotion   | type                  |
            | multi msi   | installments          |
            | multi skip  | your payment can wait |
            | multi combo | combo                 |

    @FFO005
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: <type> Summary Screen
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | <promotion>              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accepts the onboarding
        When the user "goes to" the promotion summary
        Then the user sees the following items in the screen
            | item                                      | value                     |
            | multistep summary monthly amount          | <monthly_amount>          |
            | multistep summary months number           | <months_number>           |
            | multistep summary total amount            | <total_amount>            |
            | multistep summary skip start payment date | <skip_start_payment_date> |
            | multistep summary start payment date      | <start_payment_date>      |
            | multistep summary selection               | not visible               |
            | multistep summary purchase amount         | not visible               |
            | multistep summary button                  | visible                   |
        Examples:
            | promotion   | monthly_amount | months_number | total_amount | skip_start_payment_date | start_payment_date | type                      |
            | multi msi   | visible        | visible       | visible      | not visible             | not visible        | installment purchase      |
            | multi skip  | not visible    | not visible   | not visible  | visible                 | not visible        | payment date skip payment |
            | multi combo | not visible    | visible       | not visible  | not visible             | visible            | combo                     |

    @FFO006
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: <purchaseType> <flowType>
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | <promotion>              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accepts the onboarding
        And the user "goes to" the promotion summary
        When the user "applies" the promotion summary
        Then the user sees the following items in the screen
            | item                                           | value                     |
            | success header                                 | visible                   |
            | success page title                             | visible                   |
            | success page promotion purchase                | visible                   |
            | success page promotion total amount            | visible                   |
            | success page promotion months number           | <months_number>           |
            | success page promotion monthly payment         | <monthly_payment>         |
            | success page promotion start payment date skip | <start_payment_date_skip> |
            | success page promotion start payment date      | <start_payment_date>      |
            | success page promotion discounted points       | <discounted_points>       |
            | success page promotion card                    | visible                   |
            | success page promotion folio operation         | visible                   |
            | success page promotion date operation          | visible                   |
            | success page info message                      | visible                   |
            | success page button share                      | visible                   |
        Examples:
            | promotion   | months_number | monthly_payment | start_payment_date_skip | start_payment_date | discounted_points | purchaseType         | flowType                  |
            | multi msi   | visible       | visible         | not visible             | not visible        | not visible       | installment purchase | msi purchase in transit   |
            | multi msi   | visible       | visible         | not visible             | not visible        | visible           | installment purchase | msi purchase posted       |
            | multi skip  | not visible   | not visible     | visible                 | not visible        | not visible       | payment date skip    | skip purchase approved    |
            | multi skip  | not visible   | not visible     | visible                 | not visible        | not visible       | payment date skip    | skip purchase in transit  |
            | multi combo | visible       | visible         | not visible             | visible            | not visible       | combo purchase       | combo purchase in transit |
            | multi combo | visible       | visible         | not visible             | visible            | visible           | combo purchase       | combo purchase approved   |

    @FFO007
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Select a promotion with <promotion>
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi mixed              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accepts the onboarding
        When the user "selects" "<selection>" promotion to apply
        Then the user sees the following items in the screen
            | item                         |
            | multistep header             |
            | multistep header info        |
            | multistep header close       |
            | multistep purchase prefilled |
            | multistep step number        |
            | multistep step description   |
            | multistep option one         |
            | multistep option two         |
            | multistep promotion detail   |
            | multistep continue button    |
        Examples:
            | promotion   | selection    |
            | mixed skip  | skip payment |
            | mixed msi   | installments |
            | mixed combo | combo        |

    @FFO008
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Summary screen with select a promotion <selection>
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi mixed              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accepts the onboarding
        And the user "selects" "<selection>" promotion to apply
        When the user accepts the promotion
        Then the user sees the following items in the screen
            | item                                      | value                     |
            | multistep summary monthly amount          | <monthly_amount>          |
            | multistep summary months number           | <months_number>           |
            | multistep summary skip start payment date | <skip_start_payment_date> |
            | multistep summary start payment date      | <start_payment_date>      |
            | multistep summary selection               | visible                   |
            | multistep summary purchase amount         | <purchase_amount>         |
            | multistep summary button                  | visible                   |
        Examples:
            | selection    | monthly_amount | months_number | skip_start_payment_date | start_payment_date | purchase_amount |
            | skip payment | not visible    | not visible   | visible                 | not visible        | not visible     |
            | installments | visible        | visible       | not visible             | not visible        | visible         |
            | combo        | visible        | visible       | not visible             | visible            | visible         |

    @FFO009
    @MX @vbank @backend(test)
    @ios @android @web @web-done @smokeTest
    Scenario Outline: Select a promotion with <selection> <purchaseType>
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi mixed              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accepts the onboarding
        And the user "accepts" "<selection>" promotion to apply
        When the user "applies" the promotion summary
        Then the user sees the following items in the screen
            | item                                           | value                     |
            | success header                                 | visible                   |
            | success page title                             | visible                   |
            | success page promotion purchase                | visible                   |
            | success page promotion total amount            | visible                   |
            | success page promotion months number           | <months_number>           |
            | success page promotion monthly payment         | <monthly_payment>         |
            | success page promotion start payment date skip | <start_payment_date_skip> |
            | success page promotion start payment date      | <start_payment_date>      |
            | success page promotion discounted points       | <discounted_points>       |
            | success page promotion card                    | visible                   |
            | success page promotion folio operation         | visible                   |
            | success page promotion date operation          | visible                   |
            | success page info message                      | visible                   |
            | success page button share                      | visible                   |
        Examples:
            | selection    | months_number | monthly_payment | start_payment_date_skip | start_payment_date | discounted_points | purchaseType        |
            | skip payment | not visible   | not visible     | visible                 | not visible        | not visible       | in transit purchase |
            | skip payment | not visible   | not visible     | visible                 | not visible        | not visible       | purchase approved   |
            | installments | visible       | visible         | not visible             | not visible        | not visible       | in transit purchase |
            | installments | visible       | visible         | not visible             | not visible        | visible           | purchase approved   |
            | combo        | visible       | visible         | not visible             | visible            | not visible       | in transit purchase |
            | combo        | visible       | visible         | not visible             | visible            | visible           | purchase approved   |

    @FFO010
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Consult <selection> promotion
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi mixed              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accepts the onboarding
        And the user "accepts" "<selection>" promotion to apply
        When the user consults the promotion selected
        Then the user sees the following items in the screen
            | item                         |
            | multistep header             |
            | multistep header info        |
            | multistep header close       |
            | multistep purchase prefilled |
            | multistep step number        |
            | multistep step description   |
            | multistep option one         |
            | multistep option two         |
            | multistep option three       |
            | multistep promotion detail   |
            | multistep continue button    |
        Examples:
            | selection    |
            | skip payment |
            | installments |
            | combo        |

    @FFO011
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Summary view <selection> promotion without changes
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | <promotion>              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accepts the onboarding
        And the user "goes to" the promotion summary
        When the user "modifies" the promotion selected with <selection>
        Then the user sees the following items in the screen
            | item                                      | value                     |
            | multistep summary monthly amount          | <monthly_amount>          |
            | multistep summary months number           | <months_number>           |
            | multistep summary total amount            | <total_amount>            |
            | multistep summary skip start payment date | <skip_start_payment_date> |
            | multistep summary start payment date      | <start_payment_date>      |
            | multistep summary selection               | not visible               |
            | multistep summary purchase amount         | not visible               |
            | multistep summary button                  | visible                   |
        Examples:
            | promotion   | monthly_amount | months_number | total_amount | skip_start_payment_date | start_payment_date | selection    |
            | multi skip  | not visible    | not visible   | not visible  | visible                 | not visible        | skip payment |
            | multi msi   | visible        | visible       | visible      | not visible             | not visible        | installments |
            | multi combo | visible        | visible       | not visible  | not visible             | visible            | combo        |

    @FFO012
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Consult promotion selection
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi mixed              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accepts the onboarding
        And the user "accepts" "skip payment" promotion to apply
        When the user consults the promotion selected
        Then the user sees the following items in the screen
            | item                         |
            | multistep header             |
            | multistep header info        |
            | multistep header close       |
            | multistep purchase prefilled |
            | multistep step number        |
            | multistep step description   |
            | multistep option one         |
            | multistep option two         |
            | multistep promotion detail   |
            | multistep continue button    |

    @FFO013
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Summary view select promotion without changes
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi mixed              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accepts the onboarding
        And the user "accepts" "skip payment" promotion to apply
        When the user "modifies" the promotion selected with skip payment
        Then the user sees the following items in the screen
            | item                                      |
            | multistep summary skip start payment date |
            | multistep summary button                  |

    @FFO014
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Edit <selection> promotion
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | <promotion>              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accepts the onboarding
        And the user "accepts" "<selection>" promotion to apply
        When the user "changes" the promotion selected with <change>
        Then the user sees the following items in the screen
            | item                         |
            | multistep header             |
            | multistep header info        |
            | multistep header close       |
            | multistep purchase prefilled |
            | multistep step number        |
            | multistep step description   |
            | multistep option one         |
            | multistep option two         |
            | multistep promotion detail   |
            | multistep continue button    |
        Examples:
            | promotion   | selection    | change       |
            | multi skip  | skip payment | installments |
            | multi msi   | installments | combo        |
            | multi combo | combo        | skip payment |

    @FFO015
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Edit <selection> promotion with summary view
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | <promotion>              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accepts the onboarding
        And the user "accepts" "<selection>" promotion to apply
        When the user "modifies" the promotion selected with <change>
        Then the user sees the following items in the screen
            | item                                      | value                     |
            | multistep summary monthly amount          | <monthly_amount>          |
            | multistep summary months number           | <months_number>           |
            | multistep summary total amount            | <total_amount>            |
            | multistep summary skip start payment date | <skip_start_payment_date> |
            | multistep summary start payment date      | <start_payment_date>      |
            | multistep summary selection               | not visible               |
            | multistep summary purchase amount         | not visible               |
            | multistep summary button                  | not visible               |
        Examples:
            | promotion   | monthly_amount | months_number | total_amount | skip_start_payment_date | start_payment_date | selection    | change       |
            | multi skip  | not visible    | not visible   | not visible  | visible                 | not visible        | skip payment | installments |
            | multi msi   | visible        | visible       | visible      | not visible             | not visible        | installments | combo        |
            | multi combo | visible        | visible       | not visible  | not visible             | visible            | combo        | skip payment |

    @FFO016
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Edit mixed promotion
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi mixed              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accepts the onboarding
        And the user "accepts" "skip payment" promotion to apply
        When the user "changes" the promotion selected with installments
        Then the user sees the following items in the screen
            | item                         |
            | multistep header             |
            | multistep header info        |
            | multistep header close       |
            | multistep purchase prefilled |
            | multistep step number        |
            | multistep step description   |
            | multistep option one         |
            | multistep option two         |
            | multistep promotion detail   |
            | multistep continue button    |

    @FFO017
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Edit mixed promotion with summary view
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi mixed              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accepts the onboarding
        And the user "accepts" "skip payment" promotion to apply
        When the user "modifies" the promotion selected with installments
        Then the user sees the following items in the screen
            | item                              |
            | multistep summary monthly amount  |
            | multistep summary months number   |
            | multistep summary selection       |
            | multistep summary purchase amount |
            | multistep summary button          |

    @FFO018
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Deploy validity promotion modal
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        When the user deploys the "validity promotion" modal
        Then the user sees the following items in the screen
            | item                         |
            | help modal header            |
            | help modal close icon        |
            | help modal microillustration |
            | help modal bullets           |

    @FFO019
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Deploy promotion detail modal with <promotion>
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | <promotion>              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        When the user deploys the "promotion detail" modal
        Then the user sees the following items in the screen
            | item                         |
            | help modal header            |
            | help modal close icon        |
            | help modal microillustration |
            | help modal bullets           |
        Examples:
            | promotion   |
            | fixed combo |
            | fixed skip  |

    @FFO020
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Deploy promotion detail warning modal
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi mixed              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accepts the onboarding
        When the user deploys the "promotion detail warning" modal
        Then the user sees the following items in the screen
            | item                         |
            | help modal header            |
            | help modal close icon        |
            | help modal microillustration |
            | help modal bullets           |

    @FFO021
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Deploy exit modal from flexible financing offer
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi mixed              |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accepts the onboarding
        When the user deploys the "exit" modal
        Then the user sees the following items in the screen
            | item                         |
            | help modal header            |
            | help modal close icon        |
            | help modal microillustration |
            | help modal title             |
            | help modal description       |
            | help modal accept button     |
            | help modal option link       |

    @FFO022
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Promotion expired
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | multi msi                |
        And the user accesses to dashboard
        When the user goes to "modular offering flexible financing offer" using deeplink navigation
        Then the user sees the following items in the screen
            | item                         |
            | help modal header            |
            | help modal close icon        |
            | help modal microillustration |
            | help modal title             |
            | help modal description       |
            | help modal accept button     |

    @FFO023
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Operative <modalType> restricted modal
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        When the user confirms to apply the promotion
        Then the user sees the following items in the screen
            | item                         |
            | help modal header            |
            | help modal close icon        |
            | help modal microillustration |
            | help modal title             |
            | help modal description       |
            | help modal accept button     |
        Examples:
            | modalType                      |
            | promotions applied             |
            | purchase with clarification    |
            | returned purchase              |
            | settled purchase               |
            | overdraft contract             |
            | contract with overdue payments |
            | contract with financial plan   |
            | purchase in posting process    |

    @FFO024
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario: Access to faqs section
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        When the user accesses to the faqs section
        Then the user sees the following items in the screen
            | item                    |
            | faqs modal header       |
            | faqs modal close button |
            | faqs modal first faq    |
            | faqs modal second faq   |
            | faqs modal third faq    |
            | faqs modal fourth faq   |
            | faqs modal fifth faq    |

    @FFO025
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Deploy <question> modal in the faqs list
        Given a user with the following criteria
            | criteria                 |
            | flexible financing offer |
            | fixed msi                |
        And the user accesses to dashboard
        And the user goes to "modular offering flexible financing offer" using deeplink navigation
        And the user accesses to the faqs section
        When the user deploys the "<question>" question in the list
        Then the user sees the following items in the screen
            | item                             |
            | faqs modal question header       |
            | faqs modal question close button |
            | faqs modal question title        |
            | faqs modal question answer       |
        Examples:
            | question        |
            | first question  |
            | second question |
            | third question  |
            | fourth question |
            | fifth question  |
