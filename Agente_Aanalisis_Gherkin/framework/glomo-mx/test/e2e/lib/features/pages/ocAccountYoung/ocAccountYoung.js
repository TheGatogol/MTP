import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page('OcAccountYoung')
class OcAccountYoung extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocAccountYoung[state="active"]',
            elements: {
                ocAccountYoungDm: '[data-tag-name="account-origination-oc-account-young-mx"]',
                confirmButton: '[data-tag-name="bbva-expandable-multistep"] .summary-content [data-tag-name="bbva-button-default"]',
                offerPage: {
                    properties: {
                        root: '[data-tag-name="account-origination-oc-account-young-mx"] [data-tag-name="oc-account-young-offer"] [data-tag-name="bbva-help-modal"].offer',
                    },
                    header: '#helpModalHeader',
                    headerInfoButton: '#helpModalHeader #btnInfo',
                    headerCloseButton: '#helpModalHeader #btnClose',
                    title: '.margin-step .offer-panel [data-tag-name="bbva-type-text"].title-offer',
                    description: '.margin-step .offer-panel [data-tag-name="bbva-type-text"].description-offer',
                    benefitsList: '.margin-step .benefits-bullet-list',
                    termsAndConditionsLink: '.margin-step [data-tag-name="bbva-type-link"].benefits',
                    considerationsList: '.margin-step .considerations-bullet-list',
                    limitDetailLink: '.margin-step [data-tag-name="bbva-type-link"].considerations',
                    costsDescription: '.margin-step .costs-section',
                    gatLink: '.margin-step .costs-section [data-tag-name="bbva-type-link"].costs',
                    noticePrivacyLink: '.privacy',
                    continueButton: '.modal-footer slot[name="slot-footer"] .slot-footer [data-tag-name="bbva-button-default"]'
                },
                ocAccountYoungMultistep: {
                    properties: {
                        root: '[data-tag-name="account-origination-oc-account-young-mx"] [data-tag-name="oc-account-young-multistep"]'
                    },
                    header: '#helpModalHeader',
                    headerInfoButton: '#helpModalHeader #btnInfo',
                    headerCloseButton: '#helpModalHeader #btnClose',
                    notificationToast: 'div[slot="slot-content"] [data-tag-name="bbva-notification-toast"]',
                    confirmButton: '[data-tag-name="bbva-expandable-multistep"] .summary-content [data-tag-name="bbva-button-default"]',
                },
                minorInformationStep: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"]#minorInfoStep'
                    },
                    title: '.header [data-tag-name="bbva-core-heading"]',
                    modifyButton: '.header [data-tag-name="bbva-type-link"]',
                    content: {
                        properties: {
                            root: '.content [data-tag-name="minor-info-step"]'
                        },
                        nameInput: '[data-tag-name="bbva-form-input"]#nameInput input',
                        lastNameInput: '[data-tag-name="bbva-form-input"]#lastNameInput input',
                        secondLastNameInput: '[data-tag-name="bbva-form-input"]#secondLastNameInput input',
                        birthDateInput: '[data-tag-name="bbva-form-input"]#birthDateInput [data-tag-name="bbva-form-date"]',
                        birthDateErrorMessage: '[data-tag-name="bbva-form-input"]#birthDateInput [data-tag-name="bbva-form-date"] div.message.error [data-tag-name="bbva-notification-help"]',
                        birthPlaceSelect: '[data-tag-name="bbva-form-select"]#birthPlaceSelect',
                        birthPlaceSelection: '[data-tag-name="bbva-form-select"]#birthPlaceSelect [data-tag-name="bbva-form-option"][value="__ID__"]',
                        genderOptionFemale: '[data-tag-name="bbva-form-radio-group"] [data-tag-name="bbva-form-radio-button"]#female',
                        genderOptionMale: '[data-tag-name="bbva-form-radio-group"] [data-tag-name="bbva-form-radio-button"]#male',
                        noticePrivacyLink: '[data-tag-name="bbva-type-link"]#linkPrivacy',
                        checkboxPrivacy: '[data-tag-name="bbva-form-checkbox"]#checkboxPrivacy',
                        continueButton: '[data-tag-name="bbva-button-default"]#buttonMinorInfo'
                    },
                    summary: {
                        properties: {
                            root: '.summary'
                        },
                        name: '.name',
                        lastName: '.last-name',
                        secondLastName: '.second-last-name',
                        birthDate: '.birthdate',
                        birthPlace: '.birthplace',
                        gender: '.gender'
                    }
                },
                additionalInfoStep: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"]#additionalInfoStep'
                    },
                    title: '.header [data-tag-name="bbva-core-heading"]',
                    modifyButton: '.header [data-tag-name="bbva-type-link"]',
                    additionalDataSummary: '.summary .summary-additional-data',
                    content: {
                        properties: {
                            root: '.content [data-tag-name="additional-info-step"]'
                        },
                        titleInput: '[data-tag-name="bbva-type-text"]',
                        curpInput: '[data-tag-name="bbva-form-input"]#curpInput input',
                        curpErrorMessage: '[data-tag-name="bbva-form-input"]#curpInput [data-tag-name="bbva-form-text"] div.message.error [data-tag-name="bbva-notification-help"]',
                        continueButton: '[data-tag-name="bbva-button-default"]#buttonAdditionalInfo'
                    }
                },
                birthCertificateStep: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"]#birthCertificateStep'
                    },
                    title: '.header [data-tag-name="bbva-core-heading"]',
                    modifyButton: '.header [data-tag-name="bbva-type-link"]',
                    documentUploaded: '.summary .summary-align-certificate',
                    content: {
                        properties: {
                            root: '[data-tag-name="birth-certificate-step"]'
                        },
                        uploadFileLink: '#linkUploadImage',
                        infoMessage: '[data-tag-name="bbva-notification-message"]',
                        continueButton: '[data-tag-name="bbva-button-default"]#buttonBirth'
                    }
                },
                addressStep: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"]#addressStep'
                    },
                    content: {
                        properties: {
                            root: '.content [data-tag-name="address-step"]'
                        },
                        sameAddressRadio: '.radio-group-same-address [data-tag-name="bbva-form-radio-button"]#sameAddress',
                        showAddressLink: '.radio-group-same-address [data-tag-name="bbva-type-link"].link-unmasked-address',
                        otherAddressRadio: '[data-tag-name="bbva-form-radio-button"]#childAddress',
                        continueButton: '[data-tag-name="bbva-button-default"]#buttonAddress'
                    }
                },
                digitalServicesStep: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"]#digitalServicesStep'
                    },
                    title: '.header [data-tag-name="bbva-core-heading"]',
                    modifyButton: '.header [data-tag-name="bbva-type-link"]',
                    content: {
                        properties: {
                            root: '.content [data-tag-name="digital-service-step"]'
                        },
                        helpIcon: '[data-tag-name="bbva-header-category"] .title-container [data-tag-name="bbva-type-link"]',
                        withDigitalServiceRadio: '[data-tag-name="bbva-form-radio-button"]#acceptDigitalServices',
                        cellphoneInput: '[data-tag-name="bbva-form-input"]#phoneChild input',
                        phoneIncorrectFormatMessage: '[data-tag-name="bbva-form-input"]#phoneChild [data-tag-name="bbva-form-text"] div.message.error [data-tag-name="bbva-notification-help"]',
                        emailInput: '[data-tag-name="bbva-form-input"]#inputEmail input',
                        confirmEmailInput: '[data-tag-name="bbva-form-input"]#inputConfirmEmail input',
                        withoutDigitalServiceRadio: '[data-tag-name="bbva-form-radio-button"]#deniedDigitalServices',
                        termsAndConditionsDocumentLink: '[data-tag-name="bbva-type-link"].service-denied-link',
                        continueButton: '[data-tag-name="bbva-button-default"]#buttonServices'
                    }
                },
                termsAndConditionsStep: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"]#termsAndConditionsStep'
                    },
                    title: '.header [data-tag-name="bbva-core-heading"]',
                    modifyButton: '.header [data-tag-name="bbva-type-link"]',
                    content: {
                        properties: {
                            root: '.content [data-tag-name="terms-conditions-step"]'
                        },
                        linkCardDocumentLink: '[data-tag-name="bbva-type-link"]#linkCardPdf',
                        cudDocumentLink: '[data-tag-name="bbva-type-link"]#cud-pdf',
                        linkCardCheckbox: '[data-tag-name="bbva-form-checkbox"]#linkCard',
                        cudCheckbox: '[data-tag-name="bbva-form-checkbox"]#cud',
                        operationsCheckbox: '[data-tag-name="bbva-form-checkbox"]#operations',
                        continueButton: '.margin-step [data-tag-name="bbva-button-default"]#button-terms'
                    }
                },
                halfHelpModal: {
                    properties: {
                        root: '[data-tag-name="oc-account-young-help-modal"]#ocAccountYoungHelpModal [data-tag-name="bbva-help-modal"]'
                    },
                    microillustration: '.content [data-tag-name="bbva-clip-microillustration"]',
                    titleIcon: '#helpModalTitle slot [data-tag-name="bbva-type-icon"].title-icon',
                    modalTitle: '#helpModalTitle slot [data-tag-name="bbva-type-text"]#title-text',
                    title: '.content [data-tag-name="bbva-type-text"].suggestions-title-modal',
                    description: '.content .description-modal',
                    takePhotoLink: '.content [data-tag-name="bbva-type-link"]#linkCamera',
                    choosePhotoLink: '.content [data-tag-name="bbva-type-link"]#linkFile',
                    choosePdfLink: '.content [data-tag-name="bbva-type-link"]#linkPdf',
                    acceptButton: '.slot-footer [data-tag-name="bbva-button-default"]',
                    optionLink: '.slot-footer [data-tag-name="bbva-type-link"]',
                    exitButton: '#helpModalHeader #btnClose'
                },
                suggestionsModal: {
                    properties: {
                        root: '[data-tag-name="oc-account-young-help-modal"]#ocAccountYoungHelpModalSuggest [data-tag-name="bbva-help-modal"]'
                    },
                    cameraIllustration: '.content [data-tag-name="bbva-clip-microillustration"]',
                    suggestionsTitle: '.content [data-tag-name="bbva-type-text"].suggestions-title-modal',
                    suggestionsList: '.content div.suggestions-bullets-list',
                    acceptButton: '.slot-footer [data-tag-name="bbva-button-default"]',
                    exitButton: 'div[slot="slot-header"] [data-tag-name="bbva-header-main"] #btnClose'
                },
                faqsModal: {
                    properties: {
                        root: '[data-tag-name="oc-account-young-faqs"] [data-tag-name="bbva-help-modal"]#faqsModal',
                    },
                    header: '[data-tag-name="bbva-header-main"]#helpModalHeader',
                    faqsList: {
                        properties: {
                            root: '[data-tag-name="help-faqs-aem"]'
                        },
                        firstFaq: 'div div:nth-child(2) [data-tag-name="bbva-type-link"]',
                        secondFaq: 'div div:nth-child(4) [data-tag-name="bbva-type-link"]',
                        thirdFaq: 'div div:nth-child(6) [data-tag-name="bbva-type-link"]',
                        fourthFaq: 'div div:nth-child(8) [data-tag-name="bbva-type-link"]',
                        fifthFaq: 'div div:nth-child(10) [data-tag-name="bbva-type-link"]',
                        sixthFaq: 'div div:nth-child(12) [data-tag-name="bbva-type-link"]',
                        seventhFaq: 'div div:nth-child(14) [data-tag-name="bbva-type-link"]',
                        eighthFaq: 'div div:nth-child(16) [data-tag-name="bbva-type-link"]',
                        ninthFaq: 'div div:nth-child(18) [data-tag-name="bbva-type-link"]',
                        faqQuestionTitle: 'div [data-tag-name="bbva-help-modal"] section [data-tag-name="help-faqs-aem-panel-info"] .content [data-tag-name="bbva-type-text"]',
                        faqQuestionAnswer: 'div [data-tag-name="bbva-help-modal"] section .detail-content',
                    }
                }
            },
            elementsSpherica: {
                offerPage: {
                    properties: {
                        root: '[data-tag-name="account-origination-oc-account-young-mx"] [data-tag-name="oc-account-young-offer"] [data-tag-name="bbva-help-modal"].offer',
                    },
                    title: '.offer-panel .offer-panel-text [data-tag-name="bbva-type-text"].title-offer',
                    costsDescription: '.margin-step [data-tag-name="bbva-expandable-accordion"].costs',
                    gatLink: '.margin-step [data-tag-name="bbva-type-link"].costs',
                },
                minorInformationStep: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"]#minorInfoStep'
                    },
                    title: '#heading',
                    modifyButton: '#editButton',
                    content: {
                        genderOptionFemale: '#genderRadioGroup ul li [value="FEMALE"]',
                        genderOptionMale: '#genderRadioGroup ul li [value="MALE"]',
                        noticePrivacyLink: '[data-tag-name="account-origination-oc-account-young-mx-list-link"]#linkPrivacy',
                    }
                },
                additionalInfoStep: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"]#additionalInfoStep'
                    },
                    title: '#heading',
                    modifyButton: '#editButton',
                },
                birthCertificateStep: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"]#birthCertificateStep'
                    },
                    title: '#heading',
                    modifyButton: '#editButton',
                    content: {
                        uploadFileLink: '[data-tag-name="account-origination-oc-account-young-mx-list-link"]#linkUploadImage',
                    }
                },
                addressStep: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"]#addressStep'
                    },
                    content: {
                        sameAddressRadio: '[data-tag-name="bbva-form-container"] [value="sameAddress"]',
                        showAddressLink: '[data-tag-name="bbva-form-container"] [data-tag-name="bbva-type-link"].link-unmasked-address',
                        otherAddressRadio: '[data-tag-name="bbva-form-container"] [value="childAddress"]',
                    }
                },
                digitalServicesStep: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"]#digitalServicesStep'
                    },
                    title: '#heading',
                    modifyButton: '#editButton',
                    content: {
                        withDigitalServiceRadio: '#acceptDigitalServices',
                        withoutDigitalServiceRadio: '#deniedDigitalServices',
                        helpIcon: 'bbva-type-icon',
                    }
                },
                termsAndConditionsStep: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"]#termsConditionsStep'
                    },
                    title: '#heading',
                    modifyButton: '#editButton',
                },
                halfHelpModal: {
                    properties: {
                        root: '[data-tag-name="oc-account-young-help-modal"]#ocAccountYoungHelpModal [data-tag-name="bbva-help-modal"]'
                    },
                    takePhotoLink: '.content [data-tag-name="account-origination-oc-account-young-mx-list-link"]#linkCamera',
                    choosePhotoLink: '.content [data-tag-name="account-origination-oc-account-young-mx-list-link"]#linkFile',
                    choosePdfLink: '.content [data-tag-name="account-origination-oc-account-young-mx-list-link"]#linkPdf',
                    optionLink: '.slot-footer [variant="link"]',
                },
                faqsModal: {
                    properties: {
                        root: '#faqsModal',
                    },
                    header: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-header-main"]#helpModalHeader',
                    faqQuestionTitle: '#content-modal section [data-tag-name="help-faqs-aem-panel-info"] .content [data-tag-name="bbva-type-text"]',
                    faqQuestionAnswer: '#content-modal section .detail-content',
                    faqsList: {
                        properties: {
                            root: '[data-tag-name="bbva-help-modal"]'
                        },
                        firstFaq: '.link-list-container:nth-child(2) [data-tag-name="bbva-type-link"]',
                        secondFaq: '.link-list-container:nth-child(3) [data-tag-name="bbva-type-link"]',
                        thirdFaq: '.link-list-container:nth-child(4) [data-tag-name="bbva-type-link"]',
                        fourthFaq: '.link-list-container:nth-child(5) [data-tag-name="bbva-type-link"]',
                        fifthFaq: '.link-list-container:nth-child(6) [data-tag-name="bbva-type-link"]',
                        sixthFaq: '.link-list-container:nth-child(7) [data-tag-name="bbva-type-link"]',
                        seventhFaq: '.link-list-container:nth-child(8) [data-tag-name="bbva-type-link"]',
                        eighthFaq: '.link-list-container:nth-child(9) [data-tag-name="bbva-type-link"]',
                        ninthFaq: '.link-list-container:nth-child(10) [data-tag-name="bbva-type-link"]'
                    }
                },
            },
            requiredElements: ['offerPage.benefitsList'],
        });
    }

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'header offer':
                await this.offerPage.header.scrollIntoView({block: 'end', behavior: 'smooth'});
                await this.offerPage.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header info button offer':
                await this.offerPage.headerInfoButton.waitForDisplayed();
                break;
            case 'header close button offer':
                await this.offerPage.headerCloseButton.waitForDisplayed();
                break;
            case 'title offer':
                await this.offerPage.title.waitForDisplayed();
                break;
            case 'description offer':
                await this.offerPage.description.waitForDisplayed();
                break;
            case 'benefits list':
                await this.offerPage.benefitsList.waitForDisplayed();
                break;
            case 'terms and conditions link':
                await this.offerPage.termsAndConditionsLink.waitForDisplayed();
                break;
            case 'considerations list':
                await this.offerPage.considerationsList.waitForDisplayed();
                break;
            case 'limit detail link':
                await this.offerPage.limitDetailLink.waitForDisplayed();
                break;
            case 'costs description':
                await this.offerPage.costsDescription.waitForDisplayed();
                break;
            case 'gat link':
                await this.offerPage.gatLink.waitForDisplayed();
                break;
            case 'notice privacy link':
                await this.offerPage.noticePrivacyLink.waitForDisplayed();
                break;
            case 'continue button offer':
                await this.offerPage.continueButton.waitForDisplayed();
                break;
            case 'header multistep':
                await (await this.ocAccountYoungMultistep.header.waitForExist({timeout: config.wait.S})).scrollIntoView({block: 'start'});
                await this.ocAccountYoungMultistep.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header info button multistep':
                await this.ocAccountYoungMultistep.headerInfoButton.waitForDisplayed();
                break;
            case 'header close button multistep':
                await this.ocAccountYoungMultistep.headerCloseButton.waitForDisplayed();
                break;
            case 'title minor information':
                await this.minorInformationStep.title.waitForDisplayed();
                break;
            case 'name input':
                if (value === 'not empty') {
                    if (await this.minorInformationStep.content.nameInput.getValue() !== '') {
                        logger.info(`verifying value of ${this.minorInformationStep.content.nameInput}`);
                    } else {
                        throw new Error(`${this.minorInformationStep.content.nameInput} is empty`);
                    }
                } else {
                    await this.minorInformationStep.content.nameInput.waitForDisplayed();
                }
                break;
            case 'last name input':
                if (value === 'not empty') {
                    if (await this.minorInformationStep.content.lastNameInput.getValue() !== '') {
                        logger.info(`verifying value of ${this.minorInformationStep.content.lastNameInput}`);
                    } else {
                        throw new Error(`${this.minorInformationStep.content.lastNameInput} is empty`);
                    }
                } else {
                    await this.minorInformationStep.content.lastNameInput.waitForDisplayed();
                }
                break;
            case 'second last name input':
                if (value === 'not empty') {
                    if (await this.minorInformationStep.content.secondLastNameInput.getValue() !== '') {
                        logger.info(`verifying value of ${this.minorInformationStep.content.secondLastNameInput}`);
                    } else {
                        throw new Error(`${this.minorInformationStep.content.secondLastNameInput} is empty`);
                    }
                } else {
                    await this.minorInformationStep.content.secondLastNameInput.waitForDisplayed();
                }
                break;
            case 'birth date input':
                if (value === 'not empty') {
                    if (await this.minorInformationStep.content.birthDateInput.getValue() !== '') {
                        logger.info(`verifying value of ${this.minorInformationStep.content.birthDateInput}`);
                    } else {
                        throw new Error(`${this.minorInformationStep.content.birthDateInput} is empty`);
                    }
                } else {
                    await this.minorInformationStep.content.birthDateInput.waitForDisplayed();
                }
                break;
            case 'birth date error message':
                await this.minorInformationStep.content.birthDateErrorMessage.waitForDisplayed();
                break;
            case 'birth place select':
                if (value === 'not empty') {
                    if (await this.minorInformationStep.content.birthPlaceSelect.getValue() !== '') {
                        logger.info(`verifying value of ${this.minorInformationStep.content.birthPlaceSelect}`);
                    } else {
                        throw new Error(`${this.minorInformationStep.content.birthPlaceSelect} is empty`);
                    }
                } else {
                    await this.minorInformationStep.content.birthPlaceSelect.waitForDisplayed();
                }
                break;
            case 'gender option female': {
                if (value === 'checked') {
                    const attribute = this.isSpherica() ? 'aria-checked' : 'checked';
                    await this.minorInformationStep.content.genderOptionFemale.waitForAttribute({
                        attribute,
                        timeout: config.wait.M
                    });
                } else {
                    await this.minorInformationStep.content.genderOptionFemale.waitForDisplayed();
                }
                break;
            }
            case 'gender option male': {
                if (value === 'checked') {
                    const attribute = this.isSpherica() ? 'aria-checked' : 'checked';
                    await this.minorInformationStep.content.genderOptionMale.waitForAttribute({
                        attribute,
                        timeout: config.wait.M
                    });
                } else {
                    await this.minorInformationStep.content.genderOptionMale.waitForDisplayed();
                }
                break;
            }
            case 'notice privacy link minor form':
                await this.minorInformationStep.content.noticePrivacyLink.waitForDisplayed();
                break;
            case 'checkbox privacy':
                if (value === 'checked') {
                    await this.minorInformationStep.content.checkboxPrivacy.waitForAttribute({
                        attribute: 'checked',
                        value: 'true',
                        timeout: config.wait.M
                    });
                } else {
                    await this.minorInformationStep.content.checkboxPrivacy.waitForDisplayed();
                }
                break;
            case 'continue button minor form':
                if (value === 'enabled') {
                    await this.minorInformationStep.content.continueButton.waitForEnabled();
                } else {
                    await this.minorInformationStep.content.continueButton.waitForDisplayed();
                }
                break;
            case 'minor name summary':
                await this.minorInformationStep.summary.name.waitForDisplayed();
                break;
            case 'minor last name summary':
                await this.minorInformationStep.summary.lastName.waitForDisplayed();
                break;
            case 'minor second last name summary':
                await this.minorInformationStep.summary.secondLastName.waitForDisplayed();
                break;
            case 'minor birth date summary':
                await this.minorInformationStep.summary.birthDate.waitForDisplayed();
                break;
            case 'minor birth place summary':
                await this.minorInformationStep.summary.birthPlace.waitForDisplayed();
                break;
            case 'modify button minor form':
                await this.minorInformationStep.modifyButton.waitForExist();
                break;
            case 'upload file link':
                await this.birthCertificateStep.content.uploadFileLink.waitForDisplayed();
                break;
            case 'icon info message birth certificate':
                await this.birthCertificateStep.content.infoMessage.waitForDisplayed();
                break;
            case 'continue button birth certificate':
                if (value === 'enabled') {
                    await this.birthCertificateStep.content.continueButton.waitForEnabled();
                } else {
                    await this.birthCertificateStep.content.continueButton.waitForDisplayed();
                }
                break;
            case 'document uploaded summary':
                await this.birthCertificateStep.documentUploaded.waitForDisplayed();
                break;
            case 'modify button birth certificate':
                await this.birthCertificateStep.modifyButton.waitForDisplayed();
                break;
            case 'take photo link':
                await this.halfHelpModal.takePhotoLink.waitForDisplayed();
                break;
            case 'choose photo link':
                await this.halfHelpModal.choosePhotoLink.waitForDisplayed();
                break;
            case 'choose pdf link':
                await this.halfHelpModal.choosePdfLink.waitForDisplayed();
                break;
            case 'microillustration camera':
                await this.suggestionsModal.cameraIllustration.waitForDisplayed();
                break;
            case 'suggestions title':
                await this.suggestionsModal.suggestionsTitle.waitForDisplayed();
                break;
            case 'suggestions list':
                await this.suggestionsModal.suggestionsList.waitForDisplayed();
                break;
            case 'accept button suggestions':
                await this.suggestionsModal.acceptButton.waitForDisplayed();
                break;
            case 'modal microillustration':
                await this.halfHelpModal.microillustration.waitForDisplayed({reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'modal title':
                await this.halfHelpModal.title.waitForDisplayed({reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'modal description':
                await this.halfHelpModal.description.waitForDisplayed({reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'accept button modal':
                await this.halfHelpModal.acceptButton.waitForDisplayed({reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'option link modal':
                await this.halfHelpModal.optionLink.waitForDisplayed({reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'exit button modal':
                await this.halfHelpModal.exitButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'caution title icon modal':
                if (this.isSpherica()) {
                    await this.halfHelpModal.titleIcon.waitForDisplayed({reverse: value.toLowerCase() === 'not visible'});
                } else {
                    if (value.toLowerCase() === 'not visible') {
                        await this.halfHelpModal.titleIcon.waitForDisplayed({reverse: value.toLowerCase() === 'not visible'});
                    } else {
                        await this.halfHelpModal.titleIcon.scrollIntoView({block: 'end', behavior: 'smooth'});
                        await this.halfHelpModal.titleIcon.waitForExist();
                    }
                }
                break;
            case 'modal normal title':
                await this.halfHelpModal.modalTitle.waitForDisplayed();
                break;
            case 'additional info input':
                await this.additionalInfoStep.content.curpInput.waitForDisplayed();
                break;
            case 'additional info title':
                await this.additionalInfoStep.title.waitForDisplayed();
                break;
            case 'continue button additional info':
                await this.additionalInfoStep.content.continueButton.waitForDisplayed();
                break;
            case 'additional info summary':
                await this.additionalInfoStep.additionalDataSummary.waitForDisplayed();
                break;
            case 'first faq':
                await this.faqsModal.faqsList.firstFaq.waitForDisplayed();
                break;
            case 'second faq':
                await this.faqsModal.faqsList.secondFaq.waitForDisplayed();
                break;
            case 'third faq':
                await this.faqsModal.faqsList.thirdFaq.waitForDisplayed();
                break;
            case 'fourth faq':
                await this.faqsModal.faqsList.fourthFaq.waitForDisplayed();
                break;
            case 'fifth faq':
                await this.faqsModal.faqsList.fifthFaq.waitForDisplayed();
                break;
            case 'sixth faq':
                await this.faqsModal.faqsList.sixthFaq.waitForDisplayed();
                break;
            case 'seventh faq':
                await this.faqsModal.faqsList.seventhFaq.waitForDisplayed();
                break;
            case 'eighth faq':
                await this.faqsModal.faqsList.eighthFaq.waitForDisplayed();
                break;
            case 'ninth faq':
                await this.faqsModal.faqsList.ninthFaq.waitForDisplayed();
                break;
            case 'faq question title': {
                const faqQuestionTitle = !this.isSpherica()
                    ? this.faqsModal.faqsList.faqQuestionTitle
                    : this.faqsModal.faqQuestionTitle;
                await faqQuestionTitle.waitForDisplayed();
                break;
            }
            case 'faq question answer': {
                const faqQuestionAnswer = !this.isSpherica()
                    ? this.faqsModal.faqsList.faqQuestionAnswer
                    : this.faqsModal.faqQuestionAnswer;
                await faqQuestionAnswer.waitForDisplayed();
                break;
            }
            case 'cellphone input':
                await this.digitalServicesStep.content.cellphoneInput.waitForDisplayed();
                break;
            case 'email input':
                await this.digitalServicesStep.content.emailInput.waitForDisplayed();
                break;
            case 'confirm email input':
                await this.digitalServicesStep.content.confirmEmailInput.waitForDisplayed();
                break;
            case 'phone incorrect format message':
                await this.digitalServicesStep.content.phoneIncorrectFormatMessage.waitForDisplayed();
                break;
            case 'curp incorrect format message':
                await this.additionalInfoStep.content.curpErrorMessage.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async acceptsOfferDetail() {
        await this.offerPage.header.scrollIntoView({block: 'end', behavior: 'smooth'});
        await (await this.offerPage.continueButton.waitForClickable()).click();
        await (await this.ocAccountYoungMultistep.header.scrollIntoView({block: 'end', behavior: 'smooth'})).click();
    }

    async birthDateJunior() {
        const date = new Date();
        const day = '13';
        const month = '08';
        return `${day}${month}${date.getFullYear() - 16}`;
    }

    async fillMinorInformation(continues, birthdate) {
        await this.ocAccountYoungMultistep.header.scrollIntoView({block: 'end', behavior: 'smooth'});
        await (await this.minorInformationStep.content.nameInput.waitForDisplayed()).setValue(global.user.minorData.name);
        await (await this.minorInformationStep.content.lastNameInput.waitForDisplayed()).setValue(global.user.minorData.lastName);
        await (await this.minorInformationStep.content.secondLastNameInput.waitForDisplayed()).setValue(global.user.minorData.secondLastName);
        if (birthdate) {
            await (await (await this.minorInformationStep.content.birthDateInput.waitForDisplayed())
                .waitForEnabled())
                .sendKeys({keys: global.user.minorData.birthDateSeniorKeys});
        } else {
            await (await (await this.minorInformationStep.content.birthDateInput.waitForDisplayed())
                .waitForEnabled())
                .sendKeys({keys: await this.birthDateJunior()});
        }
        await (await (await this.minorInformationStep.content.birthPlaceSelect.waitForDisplayed())
            .waitForClickable())
            .click();
        await (await (await this.minorInformationStep.content.birthPlaceSelection.specifySelector({placeholder: '__ID__', value: 'DG'}))
            .waitForExist())
            .click();
        await (await this.minorInformationStep.content.genderOptionFemale.waitForDisplayed()).click();
        await (await this.minorInformationStep.content.checkboxPrivacy.waitForDisplayed()).click();
        if (continues) {
            await (await (await this.minorInformationStep.content.continueButton.waitForDisplayed())
                .waitForClickable())
                .click();
        }
    }

    async fillBirthCertificateInformation(exceeded) {
        await this.uploadDocument(exceeded);
        await (await (await this.birthCertificateStep.content.continueButton.waitForDisplayed())
            .waitForClickable())
            .click();
    }

    async uploadDocument(exceeded) {
        const file = exceeded ? global.user.maxFile : global.user.file;
        await this.ocAccountYoungDm.execute({
            script: async (data) => { this.filefetcherSuccess(data); },
            args: [file]
        });
    }

    async selectElement(element) {
        switch (element.toLowerCase()) {
            case 'terms link':
                await (await (await this.offerPage.termsAndConditionsLink.waitForDisplayed()).scrollIntoView({block: 'start'})).click();
                break;
            case 'limit detail link':
                await (await (await (await this.offerPage.limitDetailLink.waitForDisplayed()).scrollIntoView({block: 'start'})).waitForClickable()).click();
                break;
            case 'gat link':
                await (await (await (await this.offerPage.gatLink.waitForDisplayed()).scrollIntoView({block: 'start'})).waitForClickable()).click();
                break;
            case 'notice privacy link':
                await (await (await (await this.offerPage.noticePrivacyLink.waitForDisplayed()).scrollIntoView({block: 'start'})).waitForClickable()).click();
                break;
            case 'consult notice privacy':
                await (await (await this.minorInformationStep.content.noticePrivacyLink.waitForDisplayed()).waitForClickable()).click();
                break;
            case 'continue button':
                await (await (await (await this.offerPage.continueButton.waitForDisplayed()).scrollIntoView({block: 'start'})).waitForClickable()).click();
                break;
            case 'accept modal button':
                await (await (await (await this.halfHelpModal.acceptButton.waitForDisplayed()).scrollIntoView({block: 'start'})).waitForClickable()).click();
                break;
            case 'exit modal button':
                await (await (await (await this.halfHelpModal.optionLink.waitForDisplayed()).scrollIntoView({block: 'start'})).waitForClickable()).click();
                break;
            case 'digital service tooltip':
                await (await (await (await this.digitalServicesStep.content.helpIcon.waitForDisplayed()).scrollIntoView({block: 'start'})).waitForClickable()).click();
                break;
            default:
                throw new Error(`${element} element is not available to option to...`);
        }
    }

    async showAddress() {
        await (await (await this.addressStep.content.showAddressLink.waitForDisplayed())
            .waitForClickable())
            .click();
        await this.fillOtp('12345678');
    }

    async selectAddressType(addressType, continues) {
        const addressRadio = addressType === 'same' ? this.addressStep.content.sameAddressRadio : this.addressStep.content.otherAddressRadio;
        await (await (await addressRadio.waitForDisplayed()).scrollIntoView({block: 'start'})).click();
        if (continues) {
            await (await (await this.addressStep.content.continueButton.waitForDisplayed()).scrollIntoView({block: 'start'})).click();
        }
    }

    async fillDigitalServices(isDigitalService, continues, hasModal) {
        await this.ocAccountYoungMultistep.header.scrollIntoView({block: 'end', behavior: 'smooth'});

        if (isDigitalService) {
            await this.digitalServicesStep.content.withDigitalServiceRadio.waitForDisplayed({ timeout: config.wait.M });
            await this.digitalServicesStep.content.withDigitalServiceRadio.waitForClickable();
            await this.digitalServicesStep.content.withDigitalServiceRadio.click();
            await this.digitalServicesStep.content.cellphoneInput.waitForDisplayed({ timeout: config.wait.M });
            await this.digitalServicesStep.content.cellphoneInput.waitForClickable();
            await this.digitalServicesStep.content.cellphoneInput.setValue(global.user.phoneNumber);
        } else {
            await (await (await this.digitalServicesStep.content.withoutDigitalServiceRadio.waitForDisplayed()).waitForClickable()).click();
        }
        if (continues) {
            await (await (await this.digitalServicesStep.content.continueButton.waitForDisplayed()).waitForClickable()).click();
            await this.fillOtp('12345678');

            if (this.isSpherica()) {
                if (hasModal) {
                    await (await this.halfHelpModal.titleIcon.scrollIntoView({block: 'end'}))
                        .click();
                }
            }
        }
    }

    async acceptTermsAndConditions(isDigitalService) {
        await (await (await this.termsAndConditionsStep.content.linkCardCheckbox.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        if (isDigitalService) {
            await (await (await this.termsAndConditionsStep.content.cudCheckbox.waitForDisplayed())
                .waitForClickable())
                .click();
            await (await (await this.termsAndConditionsStep.content.operationsCheckbox.waitForDisplayed())
                .waitForClickable())
                .click();
        }
        await (await (await this.termsAndConditionsStep.content.continueButton.waitForDisplayed())
            .waitForClickable())
            .click();
    }

    async confirmsSummary(sign) {
        await (await (await this.confirmButton.waitForDisplayed())
            .waitForClickable())
            .click();
        if (sign) {
            await this.fillOtp('12345678');
        }
    }

    async retryModal(times) {
        let i = 0;
        while (i < times) {
            await (await (await this.halfHelpModal.acceptButton.waitForDisplayed({timeout: config.wait.L})).waitForClickable({timeout: config.wait.L})).click();
            i++;
        }
    }

    async fillAdditionalInformation(isIncorrectRegistry = false, continues = true) {
        if (isIncorrectRegistry) {
            await (await this.additionalInfoStep.content.curpInput.waitForDisplayed()).setValue(global.user.incorrectRegistry);
        } else {
            await (await this.additionalInfoStep.content.curpInput.waitForDisplayed()).setValue(global.user.registryId);
        }
        await (await this.additionalInfoStep.content.titleInput.waitForDisplayed()).click();
        if (continues) {
            await (await (await this.additionalInfoStep.content.continueButton.waitForEnabled()).waitForClickable()).click();
        }
    }

    async retriesFillAdditionalInformation() {
        await this.fillAdditionalInformation();
        await this.retryModal(1);
        await this.fillAdditionalInformation();
    }

    async deployModalToTakePicture(modalType) {
        await (await this.birthCertificateStep.content.uploadFileLink.waitForDisplayed()).click();
        if (modalType) {
            await (await this.halfHelpModal.takePhotoLink.waitForDisplayed()).click();
        }
    }

    async confirmDialog({isConfirmed}) {
        if (isConfirmed) {
            await (await this.halfHelpModal.acceptButton.waitForDisplayed({timeout: config.wait.L})).click();
        } else {
            await (await this.halfHelpModal.optionLink.waitForDisplayed({timeout: config.wait.L})).click();
        }
    }

    async goBack() {
        await (await this.offerPage.headerCloseButton.waitForDisplayed()).click();
    }

    async closeOperative() {
        await (await this.ocAccountYoungMultistep.headerCloseButton.waitForDisplayed()).click();
    }

    async accessFaqs() {
        await (await (await this.offerPage.headerInfoButton.waitForDisplayed())
            .waitForClickable())
            .click();
    }

    async accessToQuestionDetail(question) {
        switch (question) {
            case 'first question':
                await (await (await (await this.faqsModal.faqsList.firstFaq.waitForDisplayed())
                    .waitForAnimation())
                    .waitForClickable())
                    .click();
                break;
            case 'second question':
                await (await (await (await this.faqsModal.faqsList.secondFaq.waitForDisplayed())
                    .waitForAnimation())
                    .waitForClickable())
                    .click();
                break;
            case 'third question':
                await (await (await (await this.faqsModal.faqsList.thirdFaq.waitForDisplayed())
                    .waitForAnimation())
                    .waitForClickable())
                    .click();
                break;
            case 'fourth question':
                await (await (await (await this.faqsModal.faqsList.fourthFaq.waitForDisplayed())
                    .waitForAnimation())
                    .waitForClickable())
                    .click();
                break;
            case 'fifth question':
                await (await (await (await this.faqsModal.faqsList.fifthFaq.waitForDisplayed())
                    .waitForAnimation())
                    .waitForClickable())
                    .click();
                break;
            case 'sixth question':
                await (await (await (await this.faqsModal.faqsList.sixthFaq.waitForDisplayed())
                    .waitForAnimation())
                    .waitForClickable())
                    .click();
                break;
            case 'seventh question':
                await (await (await (await this.faqsModal.faqsList.seventhFaq.waitForDisplayed())
                    .waitForAnimation())
                    .waitForClickable())
                    .click();
                break;
            case 'eighth question':
                await (await (await (await this.faqsModal.faqsList.eighthFaq.waitForDisplayed())
                    .waitForAnimation())
                    .waitForClickable())
                    .click();
                break;
            case 'ninth question':
                await (await (await (await this.faqsModal.faqsList.ninthFaq.waitForDisplayed())
                    .waitForAnimation())
                    .waitForClickable())
                    .click();
                break;
            default:
                throw new Error(`${question} is not valid option`);
        }
    }
}

export default new OcAccountYoung();
