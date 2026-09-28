@profilePostalAddress

Feature: Profile Postal Address

    @PPA001 @MX @manual @JIRA.GLOMOMX-254597
    @vbank
    @ios @android
    @backend(test)
    @web @web-done
    Scenario: User with address - Help modal information
        Given a user with the following criteria
            | criteria       |
            | with address   |
        And the user accesses to profile screen
        When the user taps on "address info button" profile button
        Then the user sees a modal with the following elements:
            | item          |
            | description   |
            | accept button |

    @PPA002 @MX @manual @JIRA.GLOMOMX-254597
    @vbank
    @ios @android
    @backend(test)
    @web @web-done
    Scenario: User without address - Validate full size modal and cancel process
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to profile screen
        And the user taps on "Add address" profile button
        When the user cancels the operation modal
        Then the user sees the following items in the screen
            | item                   |
            | address title          |
            | add address link       |

    @PPA003 @MX @manual @JIRA.GLOMOMX-254597
    @vbank
    @ios @android
    @smokeTest @backend(test)
    @web @web-done
    Scenario: User without address - Happy Path with Choose photo option
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "address" screen
        And the user accesses to "choose or take photo" screen
        And the user completes information to "elector credential" proof
        When the user accesses to summary screen from "options photo" screen
        Then the user sees the following items in the screen
            | item                   |
            | tittles                |
            | address info           |
            | voucher info           |
            | link to change address |
            | link to change voucher |

    @PPA004 @MX @manual @JIRA.GLOMOMX-254597
    @vbank
    @ios @android
    @backend(test)
    @web @web-done
    Scenario: User with address - Unsmasked Address
        Given a user with the following criteria
            | criteria       |
            | with address   |
        And the user accesses to profile screen
        When the user displays Address Data
        Then the user sees the following items in the screen
            | item                   |
            | address title          |
            | address show button    |
            | address info button    |
            | address unmasked value |

    @PPA005 @MX @manual @JIRA.GLOMOMX-254597
    @vbank
    @ios @android
    @backend(test)
    @web @web-done
    Scenario: User without address - Cancel process at Recommendations modal
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "address" screen
        And the user accesses to "choose or take photo" screen
        And the user accesses to "upload file" info modal
        When the user closes the modal
        Then the user sees the following items in the screen
            | item                          |
            | input to select type file     |
            | description to upload file    |
            | link to upload file           |
            | description notice of privacy |
            | link notice of privacy        |
            | info message                  |
            | accept button                 |

    @PPA006 @MX @manual @JIRA.GLOMOMX-254597
    @vbank
    @ios @android
    @backend(test)
    @web @web-done
    Scenario: User without address - Validate link to Change address unupdated information
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "address" screen
        When the user resends form "not updating" data
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | exit button                   |
            | information text              |
            | option choose or take picture |
            | option to attach pdf          |

    @PPA007 @MX @manual @JIRA.GLOMOMX-254597
    @vbank
    @ios @android
    @backend(test)
    @web @web-done
    Scenario: User without address - Validate link to Change address updating information
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "address" screen
        When the user resends form "updating" data
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | exit button                   |
            | information text              |
            | option choose or take picture |
            | option to attach pdf          |

    @PPA008 @MX @manual @JIRA.GLOMOMX-254597
    @vbank
    @ios @android
    @backend(test)
    @web @web-done
    Scenario: User without address - Cancel all process since Choose photo option
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "address" screen
        And the user accesses to "choose or take photo" screen
        When the user cancels until profile screen
        Then the user sees the following items in the screen
            | item                 |
            | address title        |
            | add address link     |

    @PPA009 @MX @manual @JIRA.GLOMOMX-254597
    @vbank
    @ios @android
    @backend(test)
    @web @web-done
    Scenario: User without address - Validate Advice of Privacy modal in Choose or take photo option
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "address" screen
        And the user accesses to "choose or take photo" screen
        When the user accesses to "notice of privacy" info modal
        And the user accepts the modal
        Then the user sees the following items in the screen
            | item                          |
            | input to select type file     |
            | description to upload file    |
            | link to upload file           |
            | description notice of privacy |
            | link notice of privacy        |
            | info message                  |
            | accept button                 |

    @PPA010 @MX @manual @JIRA.GLOMOMX-254597
    @vbank
    @ios @android
    @backend(test)
    @web @web-done
    Scenario: User without address - Validate help screen - OCR identification number
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "address" screen
        And the user accesses to "choose or take photo" screen
        When the user completes information to "elector credential" proof
        And the user accesses to "OCR" info modal
        And the user accepts the modal
        Then the user sees the following items in the screen
            | item                          |
            | input to select type file     |
            | description to upload file    |
            | input OCR                     |
            | input validity                |
            | help OCR button               |
            | link to upload file           |
            | link notice of privacy        |
            | accept button                 |

    @PPA011 @MX @manual @JIRA.GLOMOMX-254597
    @vbank
    @ios @android
    @backend(test)
    @web @web-done
    Scenario: User without address - Validate Advice of Privacy modal in Attach PDF photo option
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "address" screen
        And the user accesses to "attach PDF" screen
        When the user accesses to "notice of privacy" info modal
        And the user accepts the modal
        Then the user sees the following items in the screen
            | item                          |
            | input to select type file     |
            | description to upload file    |
            | link to upload file           |
            | description notice of privacy |
            | link notice of privacy        |
            | info message                  |
            | accept button                 |

    @PPA012 @MX @manual @JIRA.GLOMOMX-254597
    @vbank
    @ios @android
    @backend(test)
    @web @web-done
    Scenario: User without address - Happy Path with Attach PDF option
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "address" screen
        And the user accesses to "attach PDF" screen
        And the user completes information to "elector credential" proof
        When the user accesses to summary screen from "attach PDF" screen
        Then the user sees the following items in the screen
            | item                   |
            | tittles                |
            | address info           |
            | voucher info           |
            | link to change address |
            | link to change voucher |

    @PPA013 @MX @manual @JIRA.GLOMOMX-254597
    @vbank
    @ios @android
    @backend(test)
    @web @web-done
    Scenario: User without address - Cancel procces until profile screen
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "address" screen
        And the user accesses to "attach PDF" screen
        When the user cancels until profile screen
        Then the user sees the following items in the screen
            | item                 |
            | address title        |
            | add address link     |

    @PPA014 @MX @manual @JIRA.GLOMOMX-254597
    @vbank
    @ios @android
    @backend(test)
    @web @web-done
    Scenario: User without address - Error wrong postal code
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "address" screen
        When the user enters wrong "postal code"
        Then the user sees the following items in the screen
            | item                          |
            | input address pc              |
            | error message                 |

    @PPA015 @MX @manual @JIRA.GLOMOMX-254597
    @vbank
    @ios @android
    @backend(test) @vbank-modified
    @web @web-done
    Scenario: User without address - Validate communication error modal
        Given a user with the following criteria
            | criteria          |
            | without address   |
        When the user accesses to profile screen
        Then the user sees the following items in the screen
            | item                       |
            | communication error        |

    @PPA016 @MX
    @vbank
    @ios @android
    @backend(test)
    @web @web-done
    @manual @JIRA.GLOMOGL-26754
    Scenario: User without address - Validate the selection of a date greater than 4 months and document out of date message
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "address" screen
        And the user accesses to "choose or take photo" screen
        And the user completes information to "electric bill option" proof
        When the user enters wrong "date"
        Then the user sees the following items in the screen
            | item          |
            | input date    |
            | error mesage  |

    @PPA017 @MX @manual @JIRA.GLOMOMX-254597
    @vbank
    @ios @android
    @backend(test)
    @web @web-done
    Scenario: User without address - Validate the selection of a date prior to the current year and document out of date message
        Given a user with the following criteria
            | criteria          |
            | without address   |
        And the user accesses to add "address" screen
        And the user accesses to "choose or take photo" screen
        When the user enters wrong "validity date"
        Then the user sees the following items in the screen
            | item                    |
            | input ocr               |
            | input validity          |
            | validity error message  |
