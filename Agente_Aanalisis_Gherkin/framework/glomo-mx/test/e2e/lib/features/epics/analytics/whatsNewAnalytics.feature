@whatsNewAnalytics
Feature: Analytics - Whats New

    @ANA_EVENT_WN001
    @analytics
    @MX @backend(test) @manual @JIRA.GLOMOGL-17702
    @native
    @ios @android
    Scenario: Whats New - analytics event Page View
        Given a user with the following criteria
            |   criteria    |
            |   whats new   |
        When the user accesses to dashboard
        And the user accesses to "About" item located in the sidebar
        And the user is in About screen and accesses to "whats new"
        Then the device contains the following variables
            |   item                        |   value                                                                   |   type                |
            |   analytics                   |   analytics/glomo_base                                                    |   json schema         |
            |   version DL                  |   20250414_5.0                                                            |   string	            |
            |   page name                   |   app:privada:personas:whats new:1 de 3:confirma o actualiza tu correo electronico desde tu aplicacion  |   string	            |
            |   level 1                     |   whats new                                                               |   string	            |
            |   level 2                     |   1 de 3                                                                  |   string	            |
            |   level 3                     |   confirma o actualiza tu correo electronico desde tu aplicacion          |   string	            |
            |   language                    |   ES                                                                      |   string	            |
            |   page area                   |   privada                                                                 |   string	            |
            |   page intent                 |   informacion                                                             |   string	            |
            |   channel	                    |   online                                                                  |   string	            |
            |   page instance ID            |   de                                                                      |   string	            |
            |   page info version           |   appVersion                                                              |   regexp named	    |
            |   page segment                |   personas                                                                |   string	            |
            |   sysEnv                      |   app                                                                     |   string	            |
            |   business unit               |   BBVA Mexico                                                             |   string	            |
            |   site app name               |   App BBVA Mexico                                                         |   string	            |
            |   project name                |   Glomo                                                                   |   string	            |
            |   device mobile               |   si                                                                      |   string	            |
            |   user userState              |   logado                                                                  |   string	            |
            |   user segment global	        |   003001                                                                  |   string	            |
            |   profile ID                  |   profileID                                                               |   regexp named	    |
            |   user gender                 |   gender                                                                  |   regexp named	    |
            |   user age                    |   age                                                                     |   regexp named	    |
            |   internal campaign	        |                                                                           |   empty array	        |
            |   optimization attributes	    |                                                                           |   empty array	        |
            |   application	                |                                                                           |   empty str object	|
            |   products attributes	        |                                                                           |   empty array	        |
