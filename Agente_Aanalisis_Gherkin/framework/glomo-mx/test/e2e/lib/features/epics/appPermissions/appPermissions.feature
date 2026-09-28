@AppPermissions
Feature: App permissions

    @AP001
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @smokeTest
    @web-done
    @backend-smoke
    Scenario: App permissions screen
        Given a user with the following criteria
        | criteria         |
        | app permissions  |
        When the user accesses to app permissions
        Then the user sees the following items in the screen
      | item                             | value    |
      | Back button                      |          |
      | Header title                     |          |
      | Information icon                 |          |
      | Notification description label   |          |
      | Camera description label         |          |
      | Status label                     | <status> |
      | Phone description label          |          |
      | Contact agenda label             |          |
      | Location description label       |          |
      | Calendar description label       |          |
      | Microphone description label     |          |

    @AP002
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: App permission helps screen
        Given a user with the following criteria
        | criteria         |
        | app permissions  |
        When the user accesses to app permissions helps screen
        Then the user sees the following items in the screen
      | item               | value |
      | Header title modal |       |
      | Help icon          |       |
      | Description label  |       |
      | Understand button  |       |
