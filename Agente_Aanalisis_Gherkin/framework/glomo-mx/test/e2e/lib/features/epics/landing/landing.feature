@landing
Feature: Landing

    @LA001
    @ios @android
    @android-done @ios-done
    @native
    @backend(test) @MX @vbank
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: See landing page after application reset
        Given a user with the following criteria
            | criteria |
            | landing  |
        When the user logs in and reset app
        Then the user sees the following items in the screen
            | item               |
            | Avatar             |
            | Greeting           |
            | Change user link   |
            | Access button      |
            | Qr shortcut        |
            | Emercency shortcut |

    @LA002
    @ios @android
    @android-done @ios-done
    @native
    @backend(test) @MX @vbank
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: See simplify login when acccess from landing
        Given a user with the following criteria
            | criteria |
            | landing  |
        And the user logs in and logs out
        When the user begins the login flow with remembered credentials
        Then the user sees the following items in the screen
            | item             | visibility |
            | Back button      | visible    |
            | Sidebar button   | hidden     |
            | Change user link | hidden     |
            | Password input   | visible    |

    @LA003
    @ios @android
    @android-done @ios-done
    @native
    @backend(test) @MX @vbank
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: Change user from landing
        Given a user with the following criteria
            | criteria |
            | landing  |
        And the user logs in and logs out
        When the user forgets the current credentials
        Then the user accesses the "public landing" screen

    @LA006
    @native @ios @android
    @android-done
    @backend(test) @MX @vbank @vbank-modified
    @smokeTest
    @tmpExclude @JIRA.GLOMOMX-180582
    # Modify app-settings/public.app-setting and add node for deeplink validation
    Scenario: Navigate to contract product section when try to contract a new card
        Given a user with the following criteria
            | criteria        |
            | landing         |
        When the user logs in and reset app
        And the user try to contract a new card
        Then the user accesses the "contract product section" screen

    @LA007
    @native @ios @android
    @android-done @ios-done
    @backend(test) @MX @vbank
    @smokeTest
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: Discart digital sales section for contract a new card
        Given a user with the following criteria
            | criteria        |
            | landing         |
        When the user logs in and reset app
        And the user discards the "contract new card" section
        Then the discarded "contract new card" section will not be visible

    @LA008
    @native @ios @android
    @backend(test) @MX @vbank
    @smokeTest @manual @JIRA.GLOMOMX-163235
    Scenario: See digital sales section for aqua cards at new app start if previous section was closed
        Given a user with the following criteria
            | criteria        |
            | landing         |
        When the user logs in and reset app
        And the user discards the "contract new card" section
        And the user does login again
        And the user resets the app
        Then the section for "aqua cards" will be visible

    @LA009
    @native @ios @android
    @android-done @ios-done
    @backend(test) @MX @vbank @vbank-modified
    @smokeTest
    @tmpExclude @JIRA.GLOMOMX-180582
    # The call to the AEM that obtains the messages is modified, removing all conditions in the biometrics message
    Scenario: Discart message section for biometrics
        Given a user with the following criteria
            | criteria        |
            | landing         |
        When the user logs in and reset app
        And the user discards the "biometrics" section
        Then the discarded "biometrics" section will not be visible

    @LA010
    @ios @android
    @native
    @android-done @ios-done
    @backend(test) @MX @vbank
    @vbank-modified
    @tmpExclude @JIRA.GLOMOMX-180582
    # Modified the record 44,aem,_content_caas_mexico_glomo_landing_messages_default.model.json,GET,1 adding analytics data in the emergency zone message
    Scenario: Open emergency zone from message
        Given a user with the following criteria
            | criteria        |
            | landing         |
        When the user logs in and reset app
        And the user accesses to "emergency zone" screen from messages
        Then the user sees the "emergency zone" screen

    @LA011
    @ios @android
    @native
    @backend(test) @MX @vbank
    @vbank-modified
    @manual @JIRA.GLOMOGL-20193
    Scenario: Open atm locator from landing shorcut
        Given a user with the following criteria
            | criteria |
            | landing  |
        When the user logs in and reset app
        And the user accesses to "atm locator" screen from shortcuts
        Then the user sees a modal with the following elements:
            | item                |
            | header title modal  |
            | micro illustration  |
            | title content       |
            | description content |
            | ok button           |

    @LA012
    @ios @android
    @android-done @ios-done
    @native
    @backend(test) @MX @vbank
    @manual @JIRA.GLOMOMX-258037
    Scenario: Landing page
        Given a user with the following criteria
            | criteria |
            | landing  |
        When the user logs in and reset app
        Then the section for "wApp" will be visible

    @LA013
    @ios @android
    @android-done @ios-done
    @native
    @backend(test) @MX @vbank
    @manual @JIRA.GLOMOMX-258037
    Scenario: Open QR flow from wApp section
        Given a user with the following criteria
            | criteria |
            | landing  |
        When the user logs in and reset app
        And the user selects "QR" from wApp section
        Then the user sees the "codi onboarding" screen

    @LA014
    @ios @android
    @ios-done
    @native
    @backend(test) @MX @vbank
    @manual @JIRA.GLOMOMX-258037
    Scenario: See e-commerce detail from card
        Given a user with the following criteria
            | criteria |
            | landing  |
        When the user logs in and logs out
        And the user selects "card" from wApp section
        Then the user sees the "cvv detail" screen
