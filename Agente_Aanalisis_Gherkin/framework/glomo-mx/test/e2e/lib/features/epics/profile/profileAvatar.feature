@profile_avatar
Feature: Profile Avatar

    @PA001 @vbank
    @MX @web
    @ios @android
    @smokeTest
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Happy Path
        Given a user with the following criteria
            | criteria       |
            | profile        |
            | profile avatar |
        When the user goes the Change Avatar screen
        Then the user sees the following items in the screen
            | item       |
            | backButton |
            | header     |
            | btnGallery |
            | btnCamera  |

    @PA002 @vbank
    @MX @web
    @ios @android
    @backend(test)
    @web-done
    Scenario: Gallery
        Given a user with the following criteria
            | criteria |
            | profile  |
        When the user goes the Change Avatar screen
        Then the user choose photo from the Gallery

    @PA003 @vbank
    @MX @web
    @ios @android
    @backend(test)
    @web-done
    Scenario: Camera
        Given a user with the following criteria
            | criteria |
            | profile  |
        When the user goes the Change Avatar screen
        Then the user choose photo from the Camera

    @PA004 @vbank
    @MX @web
    @ios @android
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Back
        Given a user with the following criteria
            | criteria       |
            | profile        |
            | profile avatar |
        And the user goes the Change Avatar screen
        When  the user goes back to previous page
        Then the user accesses the "Profile" screen
