@redirectLinkBlueToContractProductSection
Feature: ChatBot - Link Contract Product Section

    @DTO001
    @MX
    @smokeTest
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Blue navigation to Contract Product Section
        Given a user with the following criteria
            | criteria                          |
            | user for blue links navigation    |
        And the user access blue "with terms accepted"
        And the user write "Quiero ver que ofertas tengo disponibles" in input text
        When the user selects "Ir a 'Oportunidades'" link
        Then the user sees the "contract product section" screen
        And the user sees the following items in the screen
            | item               |
            | main banner        |
            | main banner button |
            | small banner       |
            | small banner link  |
