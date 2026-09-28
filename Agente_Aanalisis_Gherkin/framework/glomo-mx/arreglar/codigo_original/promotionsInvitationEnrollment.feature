@promotionInvitationEnrollment @rewards
Feature: Promotions Invitation Enrollment
    As a user
    I want to be able to enroll in a promotion by invitation
    So that I can receive the promotion reward

    @PIE001
    @web-done
    @MX @backend(test)
    @web @ios @android @smokeTest
    @vbank @spherica
    #UX Case 1, 1.1
    Scenario: Enroll in a promotion by invitation from promotion detail in previous days
        Given a user with the following criteria:
            | criteria                        |
            | enrollment promotion invitation |
            | previous days                   |
        And the user accesses to Landing Promotions from dashboard
        When the user enrolls in the promotion from promotion detail
        Then the user sees the following items in the screen:
            | item                                       |
            | enrollment promotion header                |
            | enrollment promotion exit button           |
            | enrollment success image                   |
            | enrollment success title                   |
            | enrollment success description             |
            | enrollment success date label              |
            | enrollment success date value              |
            | enrollment success participant cards label |
            | enrollment success participant cards value |
            | enrollment success campaign label          |
            | enrollment success campaign value          |
            | enrollment success promotion name label    |
            | enrollment success promotion name value    |
            | enrollment success promotion period label  |
            | enrollment success promotion period value  |
            | enrollment success promotion sheet label   |
            | enrollment success promotion sheet value   |
            | enrollment success promotion info message  |
            | enrollment success promotion share button  |

    @PIE002
    @MX @backend(test)
    @web @ios @android
    @web-done @spherica @vbank
    #UX Case 1.2
    Scenario: Access to active promotion by invitation from promotion detail
        Given a user with the following criteria:
            | criteria                               |
            | active enrollment promotion invitation |
        And the user accesses to Landing Promotions from dashboard
        When the user tries to enroll in the promotion from promotion detail
        Then the user sees the following items in the screen:
            | item                                          |
            | already promotion activate modal header       |
            | already promotion activate modal close button |
            | already promotion activate modal title        |
            | already promotion activate modal icon         |
            | already promotion activate modal description  |
            | already promotion activate modal exit         |

    @PIE003
    @MX @backend(test)
    @web @ios @android
    @web-done @spherica @vbank
    #UX Case 2
    Scenario: Access to active promotion by invitation from promotion detail during promotion period
        Given a user with the following criteria:
            | criteria                        |
            | enrollment promotion invitation |
            | previous days                   |
        And the user accesses to Landing Promotions from dashboard
        When the user accesses to "favourite" promotion detail "face to face"
        Then the user sees the following items in the screen:
            | item                                     | value       |
            | header                                   |             |
            | back header                              |             |
            | promotion detail information             |             |
            | promotion detail image                   | img missing |
            | promotion detail title                   |             |
            | promotion detail description             |             |
            | promotion detail about store             |             |
            | promotion detail about store link        |             |
            | promotion detail about store description |             |
            | promotion detail store list title        |             |
            | promotion detail store list              |             |
            | promotion detail enrollment button       | not visible |

    @PIE004
    @MX @backend(test)
    @web @ios @android
    @web-done @vbank @spherica
    #UX Case 3
    Scenario Outline: Enroll in a promotion by invitation after promotion period - "<participant card>" participant card
        Given a user with the following criteria:
            | criteria                            |
            | enrollment promotion invitation     |
            | after promotion period enrollment   |
            | <participant card> participant card |
        And the user accesses to Landing Promotions from dashboard
        When the user enrolls in the promotion from promotion detail
        Then the user sees the following items in the screen:
            | item                                             | value           |
            | modal activate promotion header                  |                 |
            | modal activate promotion close button            |                 |
            | modal activate campaign label                    |                 |
            | modal activate campaign value                    |                 |
            | modal activate promotion type label              |                 |
            | modal activate promotion type value              |                 |
            | modal activate promotion card title              |                 |
            | modal activate promotion single card name        |                 |
            | modal activate promotion single card number      |                 |
            | modal activate promotion single card amount      |                 |
            | modal activate promotion single card description |                 |
            | modal activate promotion second card name        | <card status>   |
            | modal activate promotion second card number      | <card status>   |
            | modal activate promotion second card amount      | <card status>   |
            | modal activate promotion second card description | <card status>   |
            | modal activate promotion continue button         | <button status> |

        Examples:
            | participant card | card status | button status |
            | single           | not visible |               |
            | various          |             | not visible   |

    @PIE005
    @MX @backend(test)
    @web @ios @android
    @web-done @vbank @spherica
    #UX Case 3.1, 3.2
    Scenario Outline: Select card from Enrollment promotion by invitation after promotion period - "<participant card>" participant card
        Given a user with the following criteria:
            | criteria                            |
            | enrollment promotion invitation     |
            | after promotion period enrollment   |
            | <participant card> participant card |
        And the user accesses to Landing Promotions from dashboard
        When the user "tries to enroll in the promotion" from promotion detail with "<participant card>" participant card
        Then the user sees the following items in the screen:
            | item                                                      | value    |
            | modal activate promotion header                           |          |
            | modal activate promotion close button                     |          |
            | modal activate campaign label                             |          |
            | modal activate campaign value                             |          |
            | modal activate promotion type label                       |          |
            | modal activate promotion type value                       |          |
            | modal activate promotion card title selected              |          |
            | modal activate promotion single card name selected        |          |
            | modal activate promotion single card number selected      |          |
            | modal activate promotion single card amount selected      |          |
            | modal activate promotion single card description selected |          |
            | select purchases button                                   |          |
            | apply promotion continue button                           | disabled |

        Examples:
            | participant card |
            | single           |
            | various          |

    @PIE006
    @MX @backend(test)
    @web @ios @android
    @web-done @vbank @spherica
    #UX Case 3.1, 3.2
    Scenario Outline: Select purchases from Enrollment promotion by invitation after promotion period - "<participant card>" participant card
        Given a user with the following criteria:
            | criteria                            |
            | enrollment promotion invitation     |
            | after promotion period enrollment   |
            | <participant card> participant card |
        And the user accesses to Landing Promotions from dashboard
        And the user "tries to enroll in the promotion" from promotion detail with "<participant card>" participant card
        When the user tries to select purchases
        Then the user sees the following items in the screen:
            | item                            | value    |
            | select purchases header         |          |
            | select purchases exit button    |          |
            | purchases dates                 |          |
            | purchases check                 |          |
            | purchases name                  |          |
            | purchases value                 |          |
            | purchases advertisement message |          |
            | purchases continue button       | disabled |
        Examples:
            | participant card |
            | single           |
            | various          |

    @PIE007
    @MX @backend(test)
    @web @ios @android
    @web-done @vbank @spherica
    #UX Case 3.1, 3.2
    Scenario Outline: Access to participants purchases from Enrollment promotion by invitation after promotion period - "<participant card>" participant card
        Given a user with the following criteria:
            | criteria                            |
            | enrollment promotion invitation     |
            | after promotion period enrollment   |
            | <participant card> participant card |
        And the user accesses to Landing Promotions from dashboard
        And the user "tries to enroll in the promotion" from promotion detail with "<participant card>" participant card
        When the user selects participants purchases
        Then the user sees the following items in the screen:
            | item                                                      |
            | modal activate promotion header                           |
            | modal activate promotion close button                     |
            | modal activate campaign label                             |
            | modal activate campaign value                             |
            | modal activate promotion type label                       |
            | modal activate promotion type value                       |
            | modal activate promotion card title selected              |
            | modal activate promotion single card name selected        |
            | modal activate promotion single card number selected      |
            | modal activate promotion single card amount selected      |
            | modal activate promotion single card description selected |
            | participants purchases selection title                    |
            | participants purchases selection message                  |
            | participants purchases name                               |
            | participants purchases amount                             |
            | participants purchases remove button                      |
            | participants purchases total amount title                 |
            | participants purchases total amount selection             |
            | select purchases button                                   |
            | apply promotion continue button                           |

        Examples:
            | participant card |
            | single           |
            | various          |

    @PIE008
    @MX @backend(test)
    @web @ios @android
    @web-done @vbank @spherica
    #UX Case 3.1, 3.2
    Scenario Outline: Access to resume apply promotions from Enrollment promotion by invitation after promotion period - "<participant card>" participant card
        Given a user with the following criteria:
            | criteria                            |
            | enrollment promotion invitation     |
            | after promotion period enrollment   |
            | <participant card> participant card |
        And the user accesses to Landing Promotions from dashboard
        And the user "tries to enroll in the promotion" from promotion detail with "<participant card>" participant card
        When the user completes purchases selection
        Then the user sees the following items in the screen:
            | item                                                      |
            | modal activate promotion header                           |
            | modal activate promotion close button                     |
            | modal activate campaign label                             |
            | modal activate campaign value                             |
            | modal activate promotion type label                       |
            | modal activate promotion type value                       |
            | modal activate promotion single card name selected        |
            | modal activate promotion single card number selected      |
            | modal activate promotion single card amount selected      |
            | modal activate promotion single card description selected |
            | participants purchases selection title                    |
            | participants purchases selection name                     |
            | participants purchases selection amount                   |
            | participants purchases selection change button            |
            | participants purchases selection total amount title       |
            | participants purchases selection total amount value       |
            | confirm button                                            |

        Examples:
            | participant card |
            | single           |
            | various          |

    @PIE009
    @MX @backend(test)
    @web @ios @android
    @web-done @vbank @spherica
    #UX Case 3.1, 3.2
    Scenario Outline: Complete enrollment promotion by invitation after promotion period - "<participant card>" participant card
        Given a user with the following criteria:
            | criteria                            |
            | enrollment promotion invitation     |
            | after promotion period enrollment   |
            | <participant card> participant card |
        And the user accesses to Landing Promotions from dashboard
        When the user "completes enrollment in promotion" from promotion detail with "<participant card>" participant card
        Then the user sees the following items in the screen:
            | item                                       |
            | enrollment promotion header                |
            | enrollment promotion exit button           |
            | enrollment success image                   |
            | enrollment success title                   |
            | enrollment success description             |
            | enrollment success date label              |
            | enrollment success date value              |
            | enrollment success participant cards label |
            | enrollment success participant cards value |
            | enrollment success campaign label          |
            | enrollment success campaign value          |
            | enrollment success promotion name label    |
            | enrollment success promotion name value    |
            | enrollment success promotion period label  |
            | enrollment success promotion period value  |
            | enrollment success promotion sheet label   |
            | enrollment success promotion sheet value   |
            | enrollment success promotion info message  |
            | enrollment success promotion share button  |

        Examples:
            | participant card |
            | single           |
            | various          |

    @PIE010
    @MX @backend(test)
    @web @ios @android
    @web-done @vbank @spherica
    #UX Case 3.4
    Scenario: Access to enrollment promotion by invitation after promotion period for the second time - "various" participant card
        Given a user with the following criteria:
            | criteria                          |
            | enrollment promotion invitation |
            | previous days                   |
        And the user accesses to Landing Promotions from dashboard
        When the user tries to enroll in the promotion from promotion detail
        Then the user sees the following items in the screen:
            | item                                          |
            | already promotion activate modal header       |
            | already promotion activate modal close button |
            | already promotion activate modal title        |
            | already promotion activate modal icon         |
            | already promotion activate modal description  |
            | already promotion activate modal exit         |

    @PIE011
    @MX @backend(test)
    @web @ios @android
    @web-done @vbank @spherica
    #UX Case 3.5, 3.5.1
    Scenario Outline: Remove participants purchases - "<participant card>" participant card
        Given a user with the following criteria:
            | criteria                            |
            | enrollment promotion invitation     |
            | after promotion period enrollment   |
            | <participant card> participant card |
        And the user accesses to Landing Promotions from dashboard
        And the user "tries to enroll in the promotion" from promotion detail with "<participant card>" participant card
        And the user selects participants purchases
        When the user removes participants purchases
        Then the user sees the following items in the screen:
            | item                                                      | value    |
            | modal activate promotion header                           |          |
            | modal activate promotion close button                     |          |
            | modal activate campaign label                             |          |
            | modal activate campaign value                             |          |
            | modal activate promotion type label                       |          |
            | modal activate promotion type value                       |          |
            | modal activate promotion single card name selected        |          |
            | modal activate promotion single card number selected      |          |
            | modal activate promotion single card amount selected      |          |
            | modal activate promotion single card description selected |          |
            | select purchases button                                   |          |
            | apply promotion continue button                           | disabled |

        Examples:
            | participant card |
            | single           |
            | various          |

    @PIE012
    @MX @backend(test)
    @web @ios @android
    @web-done @vbank @spherica
    #UX Case 3.6
    Scenario Outline: Exit process from Enrollment promotion by invitation after promotion period - "<participant card>" participant card
        Given a user with the following criteria:
            | criteria                            |
            | enrollment promotion invitation     |
            | after promotion period enrollment   |
            | <participant card> participant card |
        And the user accesses to Landing Promotions from dashboard
        And the user "tries to enroll in the promotion" from promotion detail with "<participant card>" participant card
        And the user completes purchases selection
        When the user closes the current operative
        Then the user sees the following items in the screen:
            | item                                             |
            | close enrollment promotion modal header          |
            | close enrollment promotion modal close button    |
            | close enrollment promotion modal icon            |
            | close enrollment promotion modal description     |
            | close enrollment promotion modal exit            |
            | close enrollment promotion modal continue button |

        Examples:
            | participant card |
            | single           |
            | various          |

    @PIE013
    @MX @backend(test)
    @web @ios @android
    @web-done @vbank @spherica
    #UX Error 1
    Scenario: Service error when tries to access to enrollment promotion by invitation
        Given a user with the following criteria:
            | criteria                          |
            | enrollment promotion invitation   |
            | after promotion period enrollment |
            | various participant card           |
        And the user accesses to Landing Promotions from dashboard
        When the user tries to enroll in the promotion from promotion detail
        Then the user sees the following items in the screen:
            | item                                          |
            | error enrollment promotion modal header       |
            | error enrollment promotion modal close button |
            | error enrollment promotion modal icon         |
            | error enrollment promotion modal description  |
            | error enrollment promotion modal retry button |

    @PIE014
    @MX @backend(test)
    @web @ios @android
    @web-done @vbank @spherica
    #UX Error 1
    Scenario: Service error when tries to access to enrollment promotion by invitation - Retry access
        Given a user with the following criteria:
            | criteria                          |
            | enrollment promotion invitation   |
            | after promotion period enrollment |
            | various participant card           |
        And the user accesses to Landing Promotions from dashboard
        And the user tries to enroll in the promotion from promotion detail
        When the user retries "3" more times
        Then the user sees the following items in the screen:
            | item                                          |
            | error enrollment promotion modal header       |
            | error enrollment promotion modal close button |
            | error enrollment promotion modal icon         |
            | error enrollment promotion modal description  |
            | error enrollment promotion modal exit button  |

    @PIE015
    @MX @backend(test)
    @web @ios @android
    @web-done @vbank @spherica
    #UX Error 2
    Scenario: No participants purchases modal - "single" participant card
        Given a user with the following criteria:
            | criteria                          |
            | no participants purchases error   |
            | after promotion period enrollment |
        And the user accesses to Landing Promotions from dashboard
        And the user "tries to enroll in the promotion" from promotion detail with "single" participant card
        When the user tries to select purchases
        Then the user sees the following items in the screen:
            | item                            |
            | no purchases modal header       |
            | no purchases modal close button |
            | no purchases modal title        |
            | no purchases modal icon         |
            | no purchases modal description  |
            | no purchases modal exit button  |

    @PIE016
    @MX @backend(test)
    @web @ios @android
    @web-done @vbank @spherica
    #UX Error 2.2
    Scenario: No participants cards
        Given a user with the following criteria:
            | criteria                          |
            | no participants cards error       |
            | after promotion period enrollment |
        And the user accesses to Landing Promotions from dashboard
        When the user tries to enroll in the promotion from promotion detail
        Then the user sees the following items in the screen:
            | item                                     |
            | no participants cards modal header       |
            | no participants cards modal close button |
            | no participants cards modal title        |
            | no participants cards modal icon         |
            | no participants cards modal description  |
            | no participants cards modal exit button  |

    @PIE017
    @MX @backend(test)
    @web @ios @android @vbank-modified
    @web-done @vbank @spherica
    # Edit id value, add 001A0005 instead of 001A0006 in 28,glomo,_SRVS_A02_promotions_v1_promotions_campaigns_12345678901234567_cards_0001_transactions,GET,1.yml
    #UX Error 4
    Scenario: Limit Exceed Available Amount
        Given a user with the following criteria:
            | criteria                                |
            | enrollment promotion limit exceed error |
        And the user accesses to Landing Promotions from dashboard
        And the user "tries to enroll in the promotion" from promotion detail with "single" participant card
        When the user selects more participants purchases than credit card amount available
        Then the user sees the following items in the screen:
            | item                              |
            | limit exceeded modal header       |
            | limit exceeded modal close button |
            | limit exceeded modal icon         |
            | limit exceeded modal description  |
            | limit exceeded modal exit button  |

    @PIE018
    @MX @backend(test)
    @web @ios @android
    @web-done @vbank @spherica
    #UX Error 6
    Scenario: Decreases remaining balance during process
        Given a user with the following criteria:
            | criteria                          |
            | decreases remaining balance error |
        And the user accesses to Landing Promotions from dashboard
        When the user "completes enrollment in promotion" from promotion detail with "single" participant card
        Then the user sees the following items in the screen:
            | item                                     |
            | insufficient funds modal header          |
            | insufficient funds modal close button    |
            | insufficient funds modal icon            |
            | insufficient funds modal description     |
            | insufficient funds modal continue button |

    @PIE019
    @MX @backend(test)
    @web @ios @android
    @web-done @vbank @spherica
    #UX Error 6.1
    Scenario: Decreases remaining balance during process - Continue process
        Given a user with the following criteria:
            | criteria                          |
            | decreases remaining balance error |
        And the user accesses to Landing Promotions from dashboard
        And the user "completes enrollment in promotion" from promotion detail with "single" participant card
        When the user continues the process
        Then the user sees the following items in the screen:
            | item                                             |
            | modal activate promotion header                  |
            | modal activate promotion close button            |
            | modal activate campaign label                    |
            | modal activate campaign value                    |
            | modal activate promotion type label              |
            | modal activate promotion type value              |
            | modal activate promotion single card name        |
            | modal activate promotion single card number      |
            | modal activate promotion single card description |
            | modal activate promotion continue button         |

    @PIE020
    @MX @backend(test)
    @web @ios @android
    @web-done @vbank @spherica
    #UX Error 6.2
    Scenario: Decreases remaining balance during process - Exit process
        Given a user with the following criteria:
            | criteria                          |
            | decreases remaining balance error |
        And the user accesses to Landing Promotions from dashboard
        And the user "completes enrollment in promotion" from promotion detail with "single" participant card
        When the user closes the modal
        Then the user sees the "rewards landing" screen
