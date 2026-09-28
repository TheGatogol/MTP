@ocDebitCard
Feature: Oc Debit Card

    @DCP001
    @ios @android @web @web-done
    @MX @backend(test) @vbank @backend-smoke
    Scenario Outline: Validate the <button> button of the modal coverage not available
        Given a user with the following criteria
            | criteria              |
            | oc debit card         |
            | physical card request |
        And the user accesses to the "operative" "debit" card product detail
        And the user accepts the oc debit card
        And the user fills the other address form with "97060" postal code
        When the user <action> the oc debit card from "no coverage zone modal"
        Then the user sees the following items in the screen
            | item              |
            | <validation_item> |
        Examples:
            | button | action | validation_item  |
            | accept | keeps  | header multistep |
            | exit   | exits  | header           |

    @DCP002
    @ios @android @web @web-done
    @MX @backend(test) @vbank @backend-smoke
    Scenario: Validate the three postal code attempts
        Given a user with the following criteria
            | criteria              |
            | oc debit card         |
            | physical card request |
        And the user accesses to the "operative" "debit" card product detail
        And the user accepts the oc debit card
        When the user retries fill the other address form with "97060" postal code
        Then the user sees the following items in the screen
            | item                                |
            | no coverage zone modal header       |
            | no coverage zone modal warning icon |
            | no coverage zone modal warning text |

    @DCP003
    @ios @android @web @web-done
    @MX @backend(test) @vbank @backend-smoke
    Scenario Outline: Validate the X button for the shipping address <modal>
        Given a user with the following criteria
            | criteria              |
            | oc debit card         |
            | physical card request |
        And the user accesses to the "operative" "debit" card product detail
        And the user accepts the oc debit card
        And the user deploys the <modal> modal
        When the user "closes" the "<modal>" modal
        Then the user sees the following items in the screen
            | item                         |
            | my address radio             |
            | other address radio          |
            | tooltip delivery information |
            | show address link            |
            | privacy notice link          |
            | address step continue button |
        Examples:
            | modal                |
            | notice privacy       |
            | delivery information |

    @DCP004
    @ios @android @web @web-done
    @MX @backend(test) @vbank @smokeTest
    Scenario: Validate the hide shipping address button
        Given a user with the following criteria
            | criteria              |
            | oc debit card         |
            | physical card request |
        And the user accesses to the "operative" "debit" card product detail
        And the user accepts the oc debit card
        And the user "shows" the shipping address
        When the user "hides" the shipping address
        Then the user sees the following items in the screen
            | item                         |
            | my address radio             |
            | address mask                 |
            | other address radio          |
            | tooltip delivery information |
            | show address link            |

    @DCP005
    @ios @android @web @web-done
    @MX @backend(test) @vbank @backend-smoke
    Scenario: Validate the modify shipping address button and enter another address
        Given a user with the following criteria
            | criteria              |
            | oc debit card         |
            | physical card request |
        And the user accesses to the "operative" "debit" card product detail
        And the user accepts the oc debit card
        And the user continues "my address" delivery
        And the user modifies the delivery address
        When the user fills the other address form with "97060" postal code
        Then the user sees the following items in the screen
            | item                         |
            | address mask                 |
            | other address radio          |
            | tooltip delivery information |
            | show address link            |

    @DCP006
    @ios @android @web @web-done
    @MX @backend(test) @vbank @backend-smoke
    Scenario: Validate the x button on the physical card screen
        Given a user with the following criteria
            | criteria              |
            | oc debit card         |
            | physical card request |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the oc debit card
        When the user goes back to previous page
        Then the user sees the "orange card detail" screen

    @DCP007
    @ios @android @web @web-done
    @MX @backend(test) @vbank @backend-smoke
    Scenario Outline: Validate the <field> field when <condition>
        Given a user with the following criteria
            | criteria              |
            | oc debit card         |
            | physical card request |
        And the user accesses to the "operative" "debit" card product detail
        And the user accepts the oc debit card
        And the user selects "other address" delivery
        When the user fills the "<field>" field with "<condition>"
        Then the user sees the following items in the screen
            | item   |
            | <item> |
        Examples:
            | field           | condition                   | item                                      |
            | street          | exceeds the character limit | street input error message                |
            | street          | enters a special character  | street input error message                |
            | exterior number | exceeds the character limit | exterior number input error message       |
            | exterior number | enters a special character  | exterior number input error message       |
            | interior number | exceeds the character limit | interior number input error message       |
            | interior number | enters a special character  | interior number input error message       |
            | postal code     | the code is invalid         | postal code input error message           |
            | references      | exceeds the character limit | additional references input error message |
            | references      | enters a special character  | additional references input error message |
