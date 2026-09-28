@checksDeposit @checksSection @checks
Feature: Checks Deposit

    @CD002
    @backend-smoke
    @MX @vbank @web-done @backend(test) @vbank-modified
    @web @ios @android
    Scenario: Exits Service Terms screen
        Given a user with the following criteria
            | criteria          |
            | digital checks    |
            | account in pesos  |
            | level n4 account  |
        And the user accesses to checks operatives with checks management active
        When the user accesses checks deposit option
        And the user closes the Service Terms of the Checks Deposit modal
        Then the user accesses the "Checks Deposit List" screen

    @CD004
    @backend-smoke
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Information in screen Add check
        Given a user with the following criteria
            | criteria          |
            | digital checks    |
            | account in pesos  |
            | level n4 account  |
        And the user accesses the checks deposit screen
        When the user accesses the check deposit aggregator page
        Then the user sees the following items in the screen
            | item                               |
            | Header			                 |
            | Close button  		             |
            | Image title                        |
            | Image description                  |
            | Take picture link                  |
            | disabled band code input           |
            | band code information              |
            | disabled check folio input         |
            | check folio information            |
            | Additional information title       |
            | Additional information description |
            | Amount input                       |
            | Amount information                 |
            | Add check info box                 |
            | Disabled save button               |
            | Cancel link                        |

    @CD005
    @backend-smoke
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Add image in add check screen
        Given a user with the following criteria
            | criteria          |
            | digital checks    |
            | account in pesos  |
            | level n4 account  |
        And the user accesses the checks deposit screen
        When the user accesses the check deposit aggregator page
        And the user selects the add photos option
        Then the user sees the following items in the screen
            | item                     |
            | Header                   |
            | Close button             |
            | Image front instructions |
            | Take front picture link  |
            | Image back instructions  |
            | Take back picture link   |
            | disabled continue button |
            | Cancel link              |

    @CD006
    @backend-smoke
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Add front picture in take picture screen
        Given a user with the following criteria
            | criteria          |
            | digital checks    |
            | account in pesos  |
            | level n4 account  |
        And the user accesses the check deposit photos page
        When the user takes a picture of the front part of the check
        Then the user sees a modal with the following elements:
            | item               |
            | Header             |
            | Hero Image         |
            | Close button       |
            | Accept button      |
            | Instructions title |

    @CD007
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Agrees to instructions in instructions screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the check deposit photos page
        When the user takes a picture of the front part of the check
        And the user agrees to take the picture
        Then the user sees the following items in the screen
            | item              |
            | Header            |
            | Close button      |
            | Front Check Photo |
            | Continue button   |
            | Repeat Photo link |

    @CD008
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continue in the front picture preview screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the front picture preview screen
        When the user continues
        Then the user sees the following items in the screen
             | item                    |
            | Header			       |
            | Close button  		   |
            | Image front instructions |
            | Link to front picture    |
            | Front Page icon          |
            | Front Trash icon         |
            | Size front image         |
            | Image back instructions  |
            | Take back picture link   |
            | Disabled continue button |
            | Cancel link              |

    @CD009
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Add back picture in take picture screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the check deposit photos page
        When the user takes a picture of the back part of the check
        Then the user sees the following items in the screen
            | item              |
            | Header            |
            | Close button      |
            | Back Check Photo  |
            | Continue button   |
            | Repeat Photo link |

    @CD010
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continue in the back picture preview screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the back picture preview screen
        When the user continues
        Then the user sees the following items in the screen
            | item                     |
            | Header			       |
            | Close button  		   |
            | Image front instructions |
            | Link to front picture    |
            | Front  Page icon         |
            | Front Trash icon         |
            | Size front image         |
            | Image back instructions  |
            | Link to back picture     |
            | Back Page icon           |
            | Back Trash icon          |
            | Size back image          |
            | continue button          |
            | Cancel link              |

    @CD011
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in take picture screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses to the take picture screen
        When the user continues
        Then the user sees the following items in the screen
            | item                               | value    |
            | Header			                 |          |
            | Close button  		             |          |
            | Image title                        |          |
            | Image description                  |          |
            | Attached image title               |          |
            | Link front image                   |          |
            | Link back image                    |          |
            | Edit icon                          |          |
            | filled band code input             | disabled |
            | band code information              |          |
            | filled check number input          | disabled |
            | check number information           |          |
            | Additional information title       |          |
            | Additional information description |          |
            | Empty Amount input                 | disabled |
            | Amount information                 |          |
            | Add check info box                 |          |
            | Save button                        | disabled |
            | Cancel link                        |          |

    @CD012
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Introduces amount in add check screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses to the check deposit aggregator page
        When the user selects the amount input
        Then native keyboard will be open

    @CD013
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Valid Amount introduced in add check screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the check deposit aggregator page
        When the user has typed an amount less than a certain amount pesos in the amount input
        Then save button will be enabled

    @CD014
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Saves in add check screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the check deposit aggregator page
        When the user saves
        Then the user sees the following items in the screen
            | item                                         |
            | Header			                           |
            | Close button  		                       |
            | Help icon  		                           |
            | Destination title                            |
            | Account alias                                |
            | Obfuscated account number with last 4 digits |
            | Account amount                               |
            | Add check title                              |
            | Add check description                        |
            | Add check info box                           |
            | Check data title                             |
            | Edit icon                                    |
            | Trash icon                                   |
            | Band code title                              |
            | Band code information                        |
            | Check number title                           |
            | Check number information                     |
            | Amount title                                 |
            | Amount information                           |
            | Attached images title                        |
            | Front image name                             |
            | Back image name                              |
            | Add check continue button                    |

    @CD015
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Completes all the requirements of the steps and continues
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the check deposit aggregator page
        When the user continues
        Then the user sees the following items in the screen
            | item                                         |
            | Header			                           |
            | Close button  		                       |
            | Help icon  		                           |
            | Destination title                            |
            | Account alias                                |
            | Obfuscated account number with last 4 digits |
            | Account amount                               |
            | Add check title                              |
            | Add check step change link                   |
            | Band code title                              |
            | Band code information                        |
            | Check number title                           |
            | Check number information                     |
            | Amount title                                 |
            | Amount information                           |
            | Attached images title                        |
            | Front image name                             |
            | Back image name                              |
            | Total Amount title                           |
            | Total Amount information                     |
            | Commission text                              |
            | Summary Continue button                      |

    @CD016
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in summary check deposit screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the summary of the check deposit screen
        When the user continues
        Then the user sees the following items in the screen
            | item                                         |
            | Header			                           |
            | Close button  		                       |
            | Help icon  		                           |
            | Confirmation title                           |
            | Date and time                                |
            | Total Amount title                           |
            | Total Amount information                     |
            | Commission text                              |
            | Check asset                                  |
            | Account alias                                |
            | Obfuscated account number with last 4 digits |
            | Band code title                              |
            | Band code information                        |
            | Check number title                           |
            | Check number information                     |
            | Attached images title                        |
            | Front image name                             |
            | Back image name                              |
            | Operation type title                         |
            | Operation type information                   |
            | Operation number title                       |
            | Operation number information                 |
            | Email title                                  |
            | Obfuscated Email information                 |
            | Info box                                     |
            | Share Icon                                   |
            | Exit button                                  |
            | Another check deposit link                   |

    @CD017
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Adds a check and deletes it
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the check deposit step screen filled
        When the user eliminates the check
        Then the user sees the following items in the screen
            | Warning icon	|
            | Text 		    |
            | Delete button	|
            | Cancel link	|

    @CD018
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Adds a check and confirms he wants to delete it
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the confirmation elimination half modal screen
        When the user eliminates the check
        Then the user is in the empty check deposit step screen with the continue button disabled

    @CD019
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Adds a check and cancels he wants to delete it
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the confirmation elimination half modal screen
        When the user cancels
        Then the user is in the checks deposits operative page

    @CD020
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Adds a check and edits it
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the check deposit step screen filled
        When the user edits the check
        Then the user sees the following items in the screen
            | item                                |
            | Header			                  |
            | Close button  		              |
            | Header title                        |
            | Image title                         |
            | Image description                   |
            | Attached image title                |
            | Link front image                    |
            | Link back image                     |
            | Edit icon                           |
            | Disabled filled band code input     |
            | band code information               |
            | Disabled filled check number input  |
            | check number information            |
            | Additional information title        |
            | Additional information description  |
            | Filled Amount input                 |
            | Amount information                  |
            | Add check info box                  |
            | Save button                         |
            | Cancel link                         |

    @CD021
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario Outline: Adds a check edits it and changes the <field_info>
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the add check screen that has items filled
        When the user changes the <field_info>
        Then the user sees the save button enabled

        Examples:
            | field_info         |
            | band input         |
            | check number input |
            | amount input       |

    @CD022
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Wants to change information in add check step
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the summary of check deposit screen
        When the user changes the add check step
        Then the user is in the filled add check step

    @CD023
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Adds a check and edits it in the add check step screen and cancel the action without modifications
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the add check step filled
        When the user edits the check data
        And the user cancel the action
        Then the user is in add check step filled

    @CD024
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario Outline: Adds a check and edits it in the add check step screen and cancel the action with modifications in <field_info>
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the add check step filled
        And the user edits the check data
        When the user modifies the <field_info>
        And the user cancel the action
        Then the user sees the following items in the screen
            | item          |
            | Warning icon	|
            | Text 		    |
            | Exit button	|
            | Continue link	|

        Examples:
            | field_info        |
            | band input        |
            | check num input   |
            | amount input      |

    @CD025
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Exits in the confirmation exit half modal screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the filled add check screen
        And the user accesses the confirmation exit half modal screen
        When the user cancel the action
        Then the user is in the filled add check step

    @CD026
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in the confirmation exit half modal screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the filled add check screen
        And the user accesses the confirmation exit half modal screen
        When the user continues
        Then the user sees the following items in the screen
            | item                                | value    |
            | Header			                  |          |
            | Close button  		              |          |
            | Header title                        |          |
            | Image title                         |          |
            | Image description                   |          |
            | Attached image title                |          |
            | Link front image                    |          |
            | Link back image                     |          |
            | Edit icon                           |          |
            | filled band code input              | disabled |
            | band code information               |          |
            | filled check number input           | disabled |
            | check number information            |          |
            | Additional information title        |          |
            | Additional information description  |          |
            | Filled Amount input                 | enabled  |
            | Amount information                  |          |
            | Add check info box                  |          |
            | Save button                         | enabled  |
            | Cancel link                         |          |

    @CD027
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario Outline: User cancel in first appearance of take picture screen when the user <enters_data>
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the take picture screen for the first time
        When the user takes picture of <enters_data> check side
        And the user cancel the action
        Then the user sees the following items in the screen
            | item          |
            | Warning icon	|
            | Text 		    |
            | Exit button	|
            | Continue link	|

        Examples:
            | enters_data |
            | front       |
            | back        |

    @CD028
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Cancel in first appearance of take picture screen when no data is completed
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the take picture screen for the first time
        When the user doesn’t enter any data
        And the user cancel the action
        Then the user sees the following items in the screen
            | item                               | value    |
            | Header			                 |          |
            | Close button  		             |          |
            | Header title                       |          |
            | Image title                        |          |
            | Image description                  |          |
            | Take picture link                  |          |
            | empty band code input              | disabled |
            | band code information              |          |
            | empty check number input           | disabled |
            | check number information           |          |
            | Additional information title       |          |
            | Additional information description |          |
            | Empty Amount input                 | disabled |
            | Amount information                 |          |
            | Add check info box                 |          |
            | Save button                        | disabled |
            | Cancel link                        |          |

    @CD029
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Exits in the confirmation exit half modal screen of take picture first time
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the take picture screen for the first time
        And the user accesses the confirmation exit half modal screen of take picture first time
        When the user cancel the action
        Then the user sees the following items in the screen
            | item                      |
            | Header			        |
            | Close button  		    |
            | Help icon  		        |
            | Destination title         |
            | Account alias             |
            | Account number            |
            | Account amount            |
            | Add check title           |
            | Add check description     |
            | Add check link            |
            | Add check info box        |
            | disabled continue button  |

    @CD030
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in the confirmation exit half modal screen of take picture first time
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the take picture screen for the first time
        And the user accesses the confirmation exit half modal screen of take picture first time
        When the user continues
        Then the user is in add picture screen

    @CD031
    @backend-smoke
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Help icon in check deposit step screen
        Given a user with the following criteria
            | criteria          |
            | digital checks    |
            | account in pesos  |
            | level n4 account  |
        And the user accesses the checks deposit screen
        When the user asks for help management screen
        Then the user sees a modal with the following elements:
            | item               |
            | Header			 |
            | Close button       |
            | Header             |
            | Bullets List       |
            | Accept button      |

    @CD032
    @backend-smoke
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Exits the help deposits screen
        Given a user with the following criteria
            | criteria          |
            | digital checks    |
            | account in pesos  |
            | level n4 account  |
        And the user accesses the checks deposit screen
        And the user asks for help management screen
        When the user closes the modal
        Then the user accesses the "checks deposits operative" screen

    @CD033
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Cancel of take picture screen after editing in add check deposit screen when data is modified
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the add check deposit screen filled
        And the user accesses the take picture screen
        When the user modifies data
        And the user leaves the process
        Then the user sees the following items in the screen
            | item           |
            | Warning icon	 |
            | Text 		     |
            | Exit button	 |
            | Continue link	 |

    @CD034
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Exits in the confirmation exit half modal screen of take picture edition
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the confirmation exit half modal screen of take picture edition
        When the user leaves the process
        Then the user sees the following items in the screen
            | item                      |
            | Header			        |
            | Close button  		    |
            | Help icon  		        |
            | Destination title         |
            | Account alias             |
            | Account number            |
            | Account amount            |
            | Add check title           |
            | Add check description     |
            | Add check link            |
            | Add check info box        |
            | disabled continue button  |

    @CD035
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in the confirmation exit half modal screen of take picture edition
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the confirmation exit half modal screen of take picture edition
        When the user confirms to leave the operative
        Then the user goes back to previous page

    @CD036
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Cancel of take picture screen after editing in add check deposit screen when data is not modified
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the add check deposit screen filled
        And the user accesses the take picture screen
        And the user doesn’t modify any data
        When the user leaves the process
        Then the user goes back to previous page

    @CD037
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario Outline: Previsualizes the <image> in the take picture screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the filled take picture screen
        When the user access the <image>
        Then the user sees the following items in the screen
            | item                |
            | Close button  	  |
            | Title  		      |
            | <image> Check Photo |
            | Close button        |

        Examples:
            | image       |
            | front image |
            | back image  |

    @CD038
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario Outline: Cancel the process in the <image>  previsualization screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the filled take picture screen
        And the user accesses the <image>  previsualization screen
        When the user leaves the process
        Then the user goes back to previous page

        Examples:
            | image       |
            | front image |
            | back image  |

    @CD039
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario Outline: User <deletes> in the take picture screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the filled take picture screen
        When the user <deletes> the image
        Then the user sees the following items in the screen
            | item          |
            | Warning icon  |
            | Text 		    |
            | Delete button	|
            | Cancel link	|

        Examples:
            | deletes           |
            | front image trash |
            | back image trash  |

    @CD040
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario Outline: Deletes in the <image> confirmation elimination half modal screen of take picture
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses  the <image> confirmation elimination half modal screen of take picture
        When the user deletes the <image>
        Then the user goes back to previous page with no <image>

        Examples:
            | image       |
            | front image |
            | back image  |

    @CD041
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario Outline: Cancels in the <image> confirmation elimination half modal screen of take picture
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses  the <image> confirmation elimination half modal screen of take picture
        When the user cancels
        Then Start to type your Then step here the user goes back to previous page with no modification

        Examples:
            | image       |
            | front image |
            | back image  |

    @CD042
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario Outline: Adds a check and <exits> in add check screen without amount filled
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the add check screen that has the amount empty
        When the user leaves the process
        Then the user sees the following items in the screen
            | item          |
            | Warning icon  |
            | Text 		    |
            | Exit button	|
            | Continue link	|

        Examples:
            | exits         |
            | cancel button |
            | exit header   |

    @CD043
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Exits in the confirmation exit half modal screen of add check without amount filled
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the add check screen that has the amount empty
        And the user accesses the confirmation exit half modal screen of add check without amount filled
        When the user leaves the process
        Then the user sees the following items in the screen
            | item                                            |
            | Header			                              |
            | Close button  		                          |
            | Help icon  		                              |
            | Header title                                    |
            | Destination title                               |
            | Account  alias                                  |
            | Obfuscated account number with last 4 digits    |
            | Account amount                                  |
            | Add check title                                 |
            | Add check description                           |
            | Add check link                                  |
            | Add check info box                              |
            | disabled continue button                        |

    @CD044
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in the confirmation exit half modal screen of add check without amount filled
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the add check screen that has the amount empty
        And the user accesses the confirmation exit half modal screen of add check without amount filled
        When the user confirms to leave the operative
        Then the user goes to operative page

    @CD045
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Exits in instructions screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the take picture screen
        And the user accesses the instructions screen
        When the user leaves the process
        Then the user goes to operative page

    @CD046
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Edits the check in add check screen with a check added
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the add check screen with a check added
        When the user edits the check
        Then the user sees the following items in the screen
            | item                     |
            | Header			       |
            | Close button  		   |
            | Header title             |
            | Image front instructions |
            | Link to front picture    |
            | Front  Page icon         |
            | Front Trash icon         |
            | Size front image         |
            | Image back instructions  |
            | Link to back picture     |
            | Back Page icon           |
            | Back Trash icon          |
            | Size back image          |
            | continue button          |
            | Cancel link              |

    @CD047
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Cancel the operative in the operation confirmation screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the operation confirmation screen
        When the user exits the operative
        Then the user is in the check deposits list screen

    @CD048
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Deposits another check in the operation confirmation screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the operation confirmation screen
        When the user deposits another check
        Then the user is in the new check deposits step screen

    @CD049
    @MX @smokeTest @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Shares in the management confirmation receipt screen
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses to the checks deposit confirmation receipt screen
        When the user shares
        Then the user shares the checks deposit confirmation receipt

    @CD050
    @MX @manual @JIRA.GLOMOGL-20021
    @ios @android @web
    Scenario: Continues in summary check deposit screen and sees a modal error
        Given a user with the following criteria
            | criteria                             |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the summary of the check deposit screen
        When the user continues
        Then the user sees a "full size" error with the following elements:
            | item                |
            | header              |
            | hero image          |
            | title content       |
            | message             |
            | accept button       |

    @CD051
    @backend-smoke
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario Outline: Agrees to add a photo and uses the <position> photo help icon
        Given a user with the following criteria
            | criteria          |
            | digital checks    |
            | account in pesos  |
            | level n4 account  |
        And the user accesses the check deposit photos page
        When the user needs help with taking the "<position>" photo
        Then the user sees a modal with the following elements:
            | item                  |
            | Header                |
            | Close button          |
            | Description           |
            | Accept Button         |

        Examples:
            | position |
            | front    |
            | reverse  |
