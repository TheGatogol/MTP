import AbstractGlomoPage from '../abstract-glomo-page';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';
import BbvaHelpModalSpherica from '../../components/bbva-help-modal-spherica';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import moment from 'moment';
import OnBoardingDigitalAccount from './onBoardingDigitalAccount';

@page()
class OnBoardingDigitalAccountMultistep extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-openDigitalAccountMultistep[state="active"]',
            elements: {
                header: '#headerDigitalAccountMultistep',
                content: '#helpModalContent',
                scanModalTitle: '#scanModal #helpModalTitle',
                scanModelContent: '#scanModal .content .contentModal [data-tag-name="bbva-aggregation-bullet-list-spherica"]',
                scanModelBtn: '#scanModal [data-tag-name="bbva-button-default"]',
                helpINEModalTitle: '#cicModal  #helpModalHeader',
                helpINEModalClose: '#cicModal #btn-close',
                helpINEModalContent: '#cicModal #helpModalContent',
                helpINEModalBtn: '#cicModal .footer-button',
                validateDataModalCloseBtn: '[data-tag-name="bbva-modal-digital-account-error-no-clients"] #error-data #btn-close',
                validateDataModalTitle: '[data-tag-name="bbva-modal-digital-account-error-no-clients"] #error-data #heading',
                validateDataModalContent: '[data-tag-name="bbva-modal-digital-account-error-no-clients"] #error-data .content',
                validateDataModalScan: '[data-tag-name="bbva-modal-digital-account-error-no-clients"] #error-data [data-tag-name="bbva-button-default"]',
                validateDataModalRetry: '[data-tag-name="bbva-modal-digital-account-error-no-clients"] #error-data [data-tag-name="bbva-type-link"]',
                errorCloseBtn: '#errorPhone #helpModalHeader #btn-close .circle [data-tag-name="bbva-type-icon"]',
                informativeModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="bbva-modal-digital-account-number-ine"]',
                        additionalElements: {
                            content: '#helpModalContent'
                        }
                    }
                ],
                offersModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="bbva-modal-offers-and-promos"]',
                        additionalElements: {
                            content: '#helpModalContent'
                        }
                    }
                ],
                errorPhoneModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="bbva-modal-digital-account-error-phone"]',
                        additionalElements: {
                            content: '#helpModalContent'
                        }
                    }
                ],
                createAccountDigitalMultistep: {
                    personalData: {
                        properties: { root: '#personal-data-step' },
                        personalDataTitle: '#headingLabel',
                        btnScan: '#scanButton',
                        name: '#name input',
                        resetName: '#name .clear',
                        firstLastName: '#lastName input',
                        resetLastName: '#lastName .clear',
                        secondLastName: '#secondLastName input',
                        resetSecondLastName: '#secondLastName .clear',
                        birthDate: '#birthDate',
                        messageErrorDate: '[class="message error"]',
                        birthPlace: '#birthPlace',
                        sexOptionMale: '[data-tag-name="bbva-multistep-digital-account-personal-data"] #gender [data-tag-name="bbva-form-radio-button"]:first-of-type',
                        sexOptionFemale: '[data-tag-name="bbva-multistep-digital-account-personal-data"] #gender [data-tag-name="bbva-form-radio-button"]:nth-of-type(2)',
                        sexOptionNonBinary: '[data-tag-name="bbva-multistep-digital-account-personal-data"] #gender [data-tag-name="bbva-form-radio-button"]:last-of-type',
                        messageNotificationNonBinary: '#nonBinaryNotification',
                        place: '#birthPlace [data-tag-name="bbva-form-option"][value="__PLACE__"]',
                        genderOption: '[data-tag-name="bbva-form-radio-group"] [value="__GENDER__"]',
                        numberIne: '#idNumber input',
                        resetNumberIne: '#idNumber .clear',
                        digitsAdviceINE: '#idNumber .notification .text',
                        btnHelpINE: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-icon"]',
                        btnHelpID: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"] [data-tag-name="bbva-type-icon"]',
                        messageNotification: 'bbva-multistep-digital-account-personal-data div bbva-notification-message',
                        btnContinuePersonalData: '#personalDataContinueBtn',
                        headingPersonalData: '#heading',
                        summaryPersonaltStep: '[class="summary"]'
                    },
                    addressData: {
                        properties: { root: '#address-data-step' },
                        street: '#street input',
                        resetStreet: '#street .clear',
                        outsideNumber: '#externalNumber input',
                        resetOutsideNumber: '#externalNumber .clear',
                        optionalNumber: '#internalNumber input',
                        resetInnerNumber: '#internalNumber .clear',
                        zipCode: '#zipCode input',
                        resetZipCode: '#zipCode .clear',
                        inputColonies: '#colonies [data-tag-name="bbva-form-option"][value="__COLONIES__"]',
                        colonies: '#colonies',
                        btnContinueAddressData: '[data-tag-name="bbva-multistep-digital-account-actual-address"] #continue',
                        messageErrorZipCode: '[class="message error"]',
                        municipality: '[data-tag-name="bbva-multistep-digital-account-actual-address"] #municipality',
                        state: '[data-tag-name="bbva-multistep-digital-account-actual-address"] #state',
                        country: '[data-tag-name="bbva-multistep-digital-account-actual-address"] #country',
                        listCountry: '[data-tag-name="bbva-multistep-digital-account-actual-address"] #colonies',
                        headingAddressData: '#heading',
                        btnEditAddress: '#editButton',
                        summaryAddressStep: '[class="summary"]'
                    },
                    contactData: {
                        properties: { root: '#contact-data-step' },
                        cellNumber: '#phoneNumber input',
                        resetCellNumber: '#phoneNumber .clear',
                        messageErrorPhone: '[class="message error"]',
                        email: '#emailAddress',
                        resetEmail: '#emailAddress .clear',
                        messageErrorEmail: '[class="message error"]',
                        confirmEmail: '#emailAddressConfirmation',
                        resetConfirmEmail: '#emailAddressConfirmation .clear',
                        checkPrivacy: '#privacyNoticeAcceptance',
                        messageprivacy: '[data-tag-name="bbva-multistep-digital-account-contact-data"] div bbva-notification-message',
                        btnContinueContactData: '[data-tag-name="bbva-multistep-digital-account-contact-data"] #contactDataContinue',
                        headingContactData: '[data-tag-name="bbva-core-heading"]#heading',
                        summaryContactStep: '[class="summary"]'
                    },
                    contractsData: {
                        properties: { root: '#contracts-data-step' },
                        checkTermsAndConditionsLibreton: '#basicDigitalAccount',
                        checkTermsAndConditionsContractDigital: '#singleDigitalContract',
                        checkCreditBureau: '#bureauConsultation',
                        checkOffers: '#informationNotice',
                        modalOffers: '#offersAndPromosItem',
                        digitalSignature: '[class="signaturePanel"] [data-tag-name="bbva-link"]',
                        messageInformation: '#contracts-data-step bbva-multistep-digital-account-contracts div bbva-notification-message',
                        btnContinueContractsData: '[data-tag-name="bbva-multistep-digital-account-contracts"] #contractsContinue',
                        addSign: '[data-tag-name="bbva-panel-info"] div.content [data-tag-name="bbva-link"]',
                        headingContractsData: '#heading',
                        btnEditContract: '#editButton',
                        summaryContractStep: '[class="summary"]'
                    },
                    passwordStep: {
                        properties: { root: '#password-data-step' },
                        password: 'bbva-multistep-digital-account-password #password input',
                        description: '[data-tag-name="bbva-multistep-digital-account-password"] [data-tag-name="bbva-text"]',
                        messageErrorPassword: '[class="message error"]',
                        passwordConfirm: 'bbva-multistep-digital-account-password #confirmation input',
                        btnContinuePasswordStep: '#passwordContinue',
                        btnEditPass: '#editButton',
                        summaryPassStep: '[class="summary"]'
                    },

                },
                dialogOperations: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            xlTitle: '.xl-weigth-medium',
                        }
                    }
                ],
                signConnector: CellsSignOperationModal
            },
            elementsSpherica: {
                informativeModal: [
                    BbvaHelpModalSpherica
                ],
                offersModal: [
                    BbvaHelpModalSpherica,
                    {
                        prefix: '[data-tag-name="bbva-modal-offers-and-promos"]',
                        additionalElements: {
                            content: '#helpModalContent'
                        }
                    }
                ],
                helpINEModalBtn: '#cicModal #btn-close',
                validateDataModalRetry: '[data-tag-name="bbva-modal-digital-account-error-no-clients"] #error-data [data-tag-name="bbva-button-default"].link',
                createAccountDigitalMultistep: {
                    personalData: {
                        genderOption: '[data-tag-name="bbva-multistep-digital-account-personal-data"] #gender [data-tag-name="bbva-form-radio-button-input"][value="__GENDER__"]',
                        sexOptionNonBinary: '[data-tag-name="bbva-multistep-digital-account-personal-data"] #gender [data-tag-name="bbva-form-radio-button-input"][value="NON_BINARY"]',
                        btnContinuePersonalData: 'bbva-button-default#next-step-sticky-button.button:first-of-type',
                        genderList: '[data-tag-name="bbva-multistep-digital-account-personal-data"] #gender [data-tag-name="bbva-form-radio-button-input"]',
                        sexOptionFemale: '[data-tag-name="bbva-multistep-digital-account-personal-data"] #gender [data-tag-name="bbva-form-radio-button-input"]:first-of-type',
                        sexOptionMale: '[data-tag-name="bbva-multistep-digital-account-personal-data"] #gender [data-tag-name="bbva-form-radio-button-input"][value="MALE"]',
                        btnHelpID: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]',
                        btnHelpINE: '#scanButton'

                    },
                    contractsData: {
                        digitalSignature: '[class="signaturePanel"] [data-tag-name="bbva-type-link"]',
                        addSign: '[data-tag-name="bbva-panel-info-spherica"] div.content [data-tag-name="bbva-type-link"]',
                        btnEditContract: 'div.header.header-ellipsis [data-tag-name="bbva-type-link"]#editButton:nth-of-type(1)',
                        checkOffers: '[data-tag-name="bbva-form-checkbox"]#informationNotice',
                        checkAllTermsAndConditions: '#selectAllContracts'
                    },
                    addressData: {
                        btnContinueAddressData: 'section#next-step-sticky-panel [data-tag-name="bbva-button-default"]',
                    },
                    continueButton: 'section#next-step-sticky-panel [data-tag-name="bbva-button-default"]'
                },
                dialogOperations: [
                    GlomoAlertManagerSpherica
                ],
                signConnector: CellsSignOperationModalSpherica
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({ item, value } = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'personal data title':
                await this.createAccountDigitalMultistep.personalData.personalDataTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'scan id button':
                await this.createAccountDigitalMultistep.personalData.btnScan.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'scan title modal':
                await this.scanModalTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'scan content modal':
                await this.scanModelContent.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'scan button modal':
                await this.scanModelBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'text box name':
                await this.createAccountDigitalMultistep.personalData.name.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'reset name button':
                await this.createAccountDigitalMultistep.personalData.resetName.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'text box last name':
                await this.createAccountDigitalMultistep.personalData.firstLastName.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'reset last name button':
                await this.createAccountDigitalMultistep.personalData.resetLastName.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'text box second last name':
                await this.createAccountDigitalMultistep.personalData.secondLastName.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'reset second last name button':
                await this.createAccountDigitalMultistep.personalData.resetSecondLastName.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'text box birth date':
                await this.createAccountDigitalMultistep.personalData.birthDate.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error message birth date':
                await this.createAccountDigitalMultistep.personalData.messageErrorDate.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'text box birth place':
                await this.createAccountDigitalMultistep.personalData.birthPlace.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'gender option':
                await this.createAccountDigitalMultistep.personalData.genderOption.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'gender male option':
                if(this.isSpherica()) {
                    await (await this.createAccountDigitalMultistep.personalData.genderList.elements()).value[1].waitForDisplayed({ timeout: config.wait.M });
                } else {
                    await this.createAccountDigitalMultistep.personalData.sexOptionMale.waitForDisplayed({ timeout: config.wait.M });
                }
                break;
            case 'gender female option':
                await this.createAccountDigitalMultistep.personalData.sexOptionFemale.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'message notification non binary':
                await this.createAccountDigitalMultistep.personalData.messageNotificationNonBinary.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'text box number ine':
                await this.createAccountDigitalMultistep.personalData.numberINE.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'reset ine number':
                await this.createAccountDigitalMultistep.personalData.resetNumberIne.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'digits advice ine':
                await this.createAccountDigitalMultistep.personalData.digitsAdviceINE.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'help ine modal':
                await this.createAccountDigitalMultistep.personalData.btnHelpINE.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'help ine title modal':
                await this.helpINEModalTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'help ine close modal':
                await this.helpINEModalClose.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'help ine content modal':
                await this.helpINEModalContent.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'help ine button modal':
                await this.helpINEModalBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'messagen notification personal data':
                await this.createAccountDigitalMultistep.personalData.messageNotification.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button continue personal':
                await this.createAccountDigitalMultistep.personalData.btnContinuePersonalData.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button continue personal enabled':
                if (this.isSpherica()) {
                    await this.createAccountDigitalMultistep.continueButton.waitForEnabled({ timeout: config.wait.M, reverse: value === 'disabled' });
                } else {
                    await this.createAccountDigitalMultistep.personalData.btnContinuePersonalData.waitForEnabled({ timeout: config.wait.M, reverse: value === 'disabled' });
                }
                break;
            case 'summary personal':
                if (this.isSpherica()) {
                    const summarySteps = await this.createAccountDigitalMultistep.personalData.summaryPersonaltStep.elements();
                    await summarySteps.value[0].waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.createAccountDigitalMultistep.personalData.summaryPersonaltStep.waitForDisplayed({ timeout: config.wait.M });
                }
                break;
            case 'text box street':
                await this.createAccountDigitalMultistep.addressData.street.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'empty text box street':
                await this.createAccountDigitalMultistep.addressData.street.waitForText({ text: '' });
                await this.createAccountDigitalMultistep.addressData.street.waitForAttribute({ attribute: 'aria-label', value: 'Calle' });
                break;
            case 'text box outside number':
                await this.createAccountDigitalMultistep.addressData.outsideNumber.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'empty text outside number':
                await this.createAccountDigitalMultistep.addressData.outsideNumber.waitForText({ text: '' });
                await this.createAccountDigitalMultistep.addressData.outsideNumber.waitForAttribute({ attribute: 'aria-label', value: 'Número exterior' });
                break;
            case 'text box optional number':
                await this.createAccountDigitalMultistep.addressData.optionalNumber.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'empty text inner number': {
                const expectedAriaLabel = this.isSpherica()
                    ? 'Número interior (Opcional)'
                    : 'Número interior (Opcional)';
                await this.createAccountDigitalMultistep.addressData.optionalNumber.waitForText({ text: '' });
                await this.createAccountDigitalMultistep.addressData.optionalNumber.waitForAttribute({ attribute: 'aria-label', value: expectedAriaLabel });
                break;
            }
            case 'text box zip code':
                await this.createAccountDigitalMultistep.addressData.zipCode.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'empty text zip code':
                await this.createAccountDigitalMultistep.addressData.zipCode.waitForText({ text: '' });
                await this.createAccountDigitalMultistep.addressData.zipCode.waitForAttribute({ attribute: 'aria-label', value: 'Código postal' });
                break;
            case 'error message zip code':
                await this.createAccountDigitalMultistep.addressData.messageErrorZipCode.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'colony combo input':
                await this.createAccountDigitalMultistep.addressData.colonies.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button continue address':
                await this.createAccountDigitalMultistep.addressData.btnContinueAddressData.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button continue address disabled':
                if (this.isSpherica()) {
                    await this.createAccountDigitalMultistep.continueButton.waitForDisabled();
                } else {
                    await this.createAccountDigitalMultistep.addressData.btnContinueAddressData.waitForDisabled();
                }
                break;
            case 'button continue address enabled':
                if (this.isSpherica()) {
                    await this.createAccountDigitalMultistep.continueButton.waitForEnabled({ timeout: config.wait.M, reverse: value === 'disabled' });
                } else {
                    await this.createAccountDigitalMultistep.addressData.btnContinueAddressData.waitForEnabled({ timeout: config.wait.M, reverse: value === 'disabled' });
                }
                break;
            case 'summary address':
                await this.createAccountDigitalMultistep.addressData.summaryAddressStep.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'text box cell number':
                await this.createAccountDigitalMultistep.contactData.cellNumber.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'reset phone number button':
                await this.createAccountDigitalMultistep.contactData.resetCellNumber.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error message cell number':
                await this.createAccountDigitalMultistep.contactData.messageErrorPhone.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'text box email':
                await this.createAccountDigitalMultistep.contactData.email.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'reset email button':
                await this.createAccountDigitalMultistep.contactData.resetEmail.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error message email':
                await this.createAccountDigitalMultistep.contactData.messageErrorEmail.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'text box confirm email':
                await this.createAccountDigitalMultistep.contactData.confirmEmail.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'reset confirm email button':
                await this.createAccountDigitalMultistep.contactData.resetConfirmEmail.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'checkbox privacy':
                if(!this.isSpherica()) {
                    await this.createAccountDigitalMultistep.contactData.checkPrivacy.waitForDisplayed({ timeout: config.wait.M });
                }
                break;
            case 'checkbox privacy checked':
                if(!this.isSpherica()) {
                    await this.createAccountDigitalMultistep.contactData.checkPrivacy.waitForAttribute({ attribute: 'aria-checked', value: 'true', timeout: config.wait.M });
                }
                break;
            case 'message privacy':
                await this.createAccountDigitalMultistep.contactData.messageprivacy.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button continue contact':
                await this.createAccountDigitalMultistep.contactData.btnContinueContactData.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'disabled button continue contact':
                if(this.isSpherica()) {
                    await this.createAccountDigitalMultistep.continueButton.waitForDisabled();
                } else {
                    await this.createAccountDigitalMultistep.contactData.btnContinueContactData.waitForDisabled();
                }
                break;
            case 'enabled button continue contact':
                if(this.isSpherica()) {
                    await this.createAccountDigitalMultistep.continueButton.waitForEnabled({ timeout: config.wait.M, reverse: value === 'disabled' })   ;
                } else {
                    await this.createAccountDigitalMultistep.contactData.btnContinueContactData.waitForEnabled({ timeout: config.wait.M, reverse: value === 'disabled' });
                }
                break;
            case 'summary contact':
                await this.createAccountDigitalMultistep.contactData.summaryContactStep.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'checkbox terms and conditions libreton':
                await this.createAccountDigitalMultistep.contractsData.checkTermsAndConditionsLibreton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'checkbox terms and conditions contract account':
                await this.createAccountDigitalMultistep.contractsData.checkTermsAndConditionsContractDigital.waitForDisplayed({ timeout: config.wait.XL });
                break;
            case 'offers modal':
                await this.createAccountDigitalMultistep.contractsData.modalOffers.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'checkbox credit bureau':
                await this.createAccountDigitalMultistep.contractsData.checkCreditBureau.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'checkbox offers':
                await this.createAccountDigitalMultistep.contractsData.checkOffers.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'digital signature':
                await this.createAccountDigitalMultistep.contractsData.digitalSignature.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'message information contract':
                await this.createAccountDigitalMultistep.contractsData.messageInformation.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button continue contract':
                await this.createAccountDigitalMultistep.contractsData.btnContinueContractsData.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'summary contract':
                await this.createAccountDigitalMultistep.contractsData.summaryContractStep.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'text box password':
                await this.createAccountDigitalMultistep.passwordStep.password.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error message password':
                await this.createAccountDigitalMultistep.passwordStep.messageErrorPassword.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'text box confirm password':
                await this.createAccountDigitalMultistep.passwordStep.passwordConfirm.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button continue password':
                if (this.isSpherica()) {
                    await (await this.createAccountDigitalMultistep.continueButton.elements()).value[0].waitForDisplayed({ timeout: config.wait.M });
                } else {
                    await this.createAccountDigitalMultistep.passwordStep.btnContinuePasswordStep.waitForDisplayed({ timeout: config.wait.M });
                }
                break;
            case 'summary password':
                await this.createAccountDigitalMultistep.passwordStep.summaryPassStep.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header modal':
                await this.informativeModal.header.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'description modal':
                await this.informativeModal.additionalElements.content.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'exit button modal':
                await this.informativeModal.closeBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'accept button modal':
                await this.informativeModal.acceptBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'municipality':
                await this.createAccountDigitalMultistep.addressData.municipality.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'state':
                await this.createAccountDigitalMultistep.addressData.state.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'country':
                await this.createAccountDigitalMultistep.addressData.country.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'list country':
                await this.createAccountDigitalMultistep.addressData.listCountry.waitForDisplayed({ timeout: config.wait.M });
                await this.createAccountDigitalMultistep.addressData.listCountry.waitForEnabled({ timeout: config.wait.M, reverse: value !== 'enabled' });
                break;
            case 'heading personal data':
                await this.createAccountDigitalMultistep.addressData.headingPersonalData.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'heading address data':
                if (this.isSpherica()) {
                    await this.createAccountDigitalMultistep.addressData.__root.waitForDisplayed({ timeout: config.wait.M });
                } else {
                    await this.createAccountDigitalMultistep.addressData.headingAddressData.waitForDisplayed({ timeout: config.wait.M });
                }
                break;
            case 'heading contact data':
                if (this.isSpherica()) {
                    await this.createAccountDigitalMultistep.contactData.__root.waitForDisplayed({ timeout: config.wait.M });
                } else {
                    await this.createAccountDigitalMultistep.contactData.headingContactData.waitForDisplayed({ timeout: config.wait.M });
                }
                break;
            case 'heading contracts data':
                if (this.isSpherica()) {
                    await this.createAccountDigitalMultistep.contractsData.__root.waitForDisplayed({ timeout: config.wait.M });
                } else {
                    await this.createAccountDigitalMultistep.contractsData.headingContractsData.waitForDisplayed({ timeout: config.wait.M });
                }
                break;
            case 'header offers modal':
                await this.offersModal.header.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'description offers modal':
                await this.offersModal.additionalElements.content.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'exit button offers modal':
                await this.offersModal.closeBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'accept button offers modal':
                await this.offersModal.acceptBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'otp page header':
                await this.signModal.header.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'otp page exit button':
                await this.signModal.closeButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'otp page image':
                this.isSpherica() ? await this.signModal.smsIcon.waitForDisplayed({ timeout: config.wait.M }) :
                    await this.signModal.smsImage.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'otp page text':
                await this.signModal.mainTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'otp page resend button':
                await this.signModal.resendMiddleButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'otp page input':
                await this.signModal.smsPasswordInputField.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'otp page accept button':
                await this.signModal.smsContinueButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error modal close button':
                await this.errorCloseBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error modal title':
                if(!this.isSpherica()) {
                    await this.errorPhoneModal.header.waitForDisplayed({ timeout: config.wait.M });
                }
                break;
            case 'error modal content':
                await this.errorPhoneModal.additionalElements.content.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error modal accept button':
                await this.errorPhoneModal.acceptBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error modal data close button':
                await this.validateDataModalCloseBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error modal data title':
                await this.validateDataModalTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error modal data content':
                await this.validateDataModalContent.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error modal data scan button':
                await this.validateDataModalScan.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error modal data retry button':
                await this.validateDataModalRetry.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async registerFullName(name, firstLastName, secondLastName) {
        await this.createAccountDigitalMultistep.personalData.name.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.personalData.name.setValue({ value: name });
        await this.createAccountDigitalMultistep.personalData.firstLastName.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.personalData.firstLastName.setValue({ value: firstLastName });
        await this.createAccountDigitalMultistep.personalData.secondLastName.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.personalData.secondLastName.setValue({ value: secondLastName });
    }

    async registerDateOfBirth({ typeDate }) {
        const INVALID_DATE = moment().subtract(17, 'years').format('YYYY-MM-DD');
        const { birthDate } = (((user || {}).people || {}).customer || {}).birthData || {};
        switch (typeDate.toLowerCase()) {
            case 'valid':
                await this.createAccountDigitalMultistep.personalData.birthDate.waitForDisplayed({ timeout: config.wait.L });
                await this.createAccountDigitalMultistep.personalData.birthDate.waitForClickable({ timeout: config.wait.L });
                await this.setDate(this.createAccountDigitalMultistep.personalData.birthDate, birthDate);
                break;
            case 'minor':
                await this.createAccountDigitalMultistep.personalData.birthDate.waitForDisplayed({ timeout: config.wait.L });
                await this.createAccountDigitalMultistep.personalData.birthDate.waitForClickable({ timeout: config.wait.L });
                await this.setDate(this.createAccountDigitalMultistep.personalData.birthDate, INVALID_DATE);
                await this.createAccountDigitalMultistep.personalData.birthDate.click({ timeout: config.wait.M });
                break;
            default:
                throw new Error(`Argument ${typeDate} is not supported`);
        }
    }

    async setDate(root, date) {
        await root.execute({
            script: (value) => {
                this.value = value;
                this.dispatchEvent(new Event('input'));
                this.dispatchEvent(new Event('form-field-input-blur'));
            },
            args: [date],
        });
    }

    async registerPlaceOfBirth(place) {
        const selectPlace = this.createAccountDigitalMultistep.personalData.place.specifySelector({ placeholder: '__PLACE__', value: place });
        await this.createAccountDigitalMultistep.personalData.birthPlace.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.personalData.birthPlace.click({ timeout: config.wait.M });
        await selectPlace.waitForClickable({ timeout: config.wait.M });
        await selectPlace.click({ timeout: config.wait.M });
    }

    async registerGender(gender) {
        const selectgender = this.createAccountDigitalMultistep.personalData.genderOption.specifySelector({ placeholder: '__GENDER__', value: gender });
        await selectgender.waitForClickable({ timeout: config.wait.M });
        await selectgender.click({ timeout: config.wait.M });
    }

    async registerIne(number) {
        await this.createAccountDigitalMultistep.personalData.numberIne.waitForClickable({ timeout: config.wait.M });
        await this.createAccountDigitalMultistep.personalData.numberIne.setValue({ value: number });
    }

    async validatesPersonalData() {
        if (this.isSpherica()) {
            await (await this.createAccountDigitalMultistep.continueButton.elements()).value[0].waitForClickable({ timeout: config.wait.M });
            await (await this.createAccountDigitalMultistep.continueButton.elements()).value[0].click({ timeout: config.wait.M });
        } else {
            await this.createAccountDigitalMultistep.personalData.btnContinuePersonalData.waitForClickable({ timeout: config.wait.M });
            await this.createAccountDigitalMultistep.personalData.btnContinuePersonalData.click({ timeout: config.wait.M });
        }
    }

    async firstPartOfRegistration({ onlySetData = false } = {}) {
        await this.registerFullName(user.data[0].name, user.data[0].firstLastName, user.data[0].secondLastName);
        await this.registerDateOfBirth({ typeDate: 'valid' });
        await this.registerPlaceOfBirth(user.data[0].placeOfBirth);
        await this.registerGender(user.data[0].gender);
        await this.registerIne(user.data[0].numberIne);
        if (!onlySetData) {
            await this.validatesPersonalData();
        }
    }

    async continueAddress() {
        if (this.isSpherica()) {
            await (await this.createAccountDigitalMultistep.continueButton.elements()).value[0].waitForClickable({ timeout: config.wait.M });
            await (await this.createAccountDigitalMultistep.continueButton.elements()).value[0].click({ timeout: config.wait.M });
        } else {
            await this.createAccountDigitalMultistep.addressData.btnContinueAddressData.waitForDisplayed({ timeout: config.wait.M });
            await this.createAccountDigitalMultistep.addressData.btnContinueAddressData.click({ timeout: config.wait.M });
        }
    }

    async registerStreet(street) {
        await this.createAccountDigitalMultistep.addressData.street.waitForDisplayed({ timeout: config.wait.M });
        await this.createAccountDigitalMultistep.addressData.street.waitForAnimation({ timeout: config.wait.M });
        await this.createAccountDigitalMultistep.addressData.street.setValue({ value: street });
    }

    async registerOutsideNumber(outsideNumber) {
        await this.createAccountDigitalMultistep.addressData.outsideNumber.waitForClickable({ timeout: config.wait.M });
        await this.createAccountDigitalMultistep.addressData.outsideNumber.setValue({ value: outsideNumber });
    }

    async registerInternalNumber(internalNumber) {
        await this.createAccountDigitalMultistep.addressData.optionalNumber.waitForClickable({ timeout: config.wait.M });
        await this.createAccountDigitalMultistep.addressData.optionalNumber.setValue({ value: internalNumber });
    }

    async registerZipCode(zipCode) {
        await this.createAccountDigitalMultistep.addressData.zipCode.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.addressData.zipCode.setValue({ value: zipCode, forceFocus: false });
    }

    async registerColonies(colonies) {
        const selectColonies = this.createAccountDigitalMultistep.addressData.inputColonies.specifySelector({ placeholder: '__COLONIES__', value: colonies });
        await this.createAccountDigitalMultistep.addressData.colonies.waitForClickable({ timeout: config.wait.M });
        await this.createAccountDigitalMultistep.addressData.colonies.click({ timeout: config.wait.M });
        await selectColonies.waitForClickable({ timeout: config.wait.L });
        await selectColonies.click({ timeout: config.wait.M });
    }

    async secondPartOfRegistration(hasInternalNum = true) {
        await this.registerStreet(user.address[0].street);
        await this.registerZipCode(user.address[0].zipCode);
        await this.registerOutsideNumber(user.address[0].outsideNumber);
        if (hasInternalNum) {
            await this.registerInternalNumber(user.address[0].internalNumber);
        }
        await this.registerColonies(user.address[0].colonies);
    }

    async goBackRegisterAccount() {
        await (await (await this.header.buttonRightPrimary.waitForDisplayed({ timeout: config.wait.M }))
            .waitForClickable({ timeout: config.wait.L }))
            .click();
    }

    async accessToModal(modalName) {
        switch (modalName.toLowerCase()) {
            case 'scan recomendations':
                await this.createAccountDigitalMultistep.personalData.btnScan.waitForClickable({ timeout: config.wait.L });
                await this.createAccountDigitalMultistep.personalData.btnScan.click();
                break;
            case 'offers and promotions':
                await (await (await this.createAccountDigitalMultistep.contractsData.modalOffers.waitForDisplayed({ timeout: config.wait.L }))
                    .waitForClickable({ timeout: config.wait.L }))
                    .click();
                break;
            case 'ine tooltip':
                await (await (await this.createAccountDigitalMultistep.personalData.btnHelpINE.waitForDisplayed({ timeout: config.wait.M }))
                    .waitForClickable({ timeout: config.wait.L }))
                    .click();
                break;
            case 'privacy notice':
                await OnBoardingDigitalAccount.modalInformationPrivacy(modalName);
                break;
            default:
                throw new Error(`${modalName} is not a valid option`);
        }
    }

    async registerNumber(number) {
        await this.createAccountDigitalMultistep.contactData.cellNumber.waitForClickable({ timeout: config.wait.M });
        await this.createAccountDigitalMultistep.contactData.cellNumber.setValue({ value: number });
    }

    async registerEmail(email) {
        await this.setValue(this.createAccountDigitalMultistep.contactData.email, email);
        if(this.isSpherica()) {
            await this.createAccountDigitalMultistep.contactData.cellNumber.waitForClickable({ timeout: config.wait.M });
            await this.createAccountDigitalMultistep.contactData.cellNumber.click();
        }
    }

    async registerConfirmEmail(email) {
        await this.setValue(this.createAccountDigitalMultistep.contactData.confirmEmail, email);
        if(this.isSpherica()) {
            await this.createAccountDigitalMultistep.contactData.cellNumber.waitForClickable({ timeout: config.wait.M });
            await this.createAccountDigitalMultistep.contactData.cellNumber.click();
        }
    }

    async acceptsPrivacyNotice() {
        if (!this.isSpherica()) {
            await this.createAccountDigitalMultistep.contactData.checkPrivacy.waitForDisplayed({ timeout: config.wait.M });
            await this.createAccountDigitalMultistep.contactData.checkPrivacy.click();
        }
    }

    async continueContactData() {
        if (this.isSpherica()) {
            await (await this.createAccountDigitalMultistep.continueButton.elements()).value[0].waitForClickable({ timeout: config.wait.M });
            await (await this.createAccountDigitalMultistep.continueButton.elements()).value[0].click({ timeout: config.wait.M });
        } else {
            await this.createAccountDigitalMultistep.contactData.btnContinueContactData.waitForDisplayed({ timeout: config.wait.L });
            await this.createAccountDigitalMultistep.contactData.btnContinueContactData.click({ timeout: config.wait.M });
        }
    }

    async thirdPartOfRegistration({ isContinue = true } = {}) {
        await this.registerNumber(user.contact[0].number);
        await this.registerEmail(user.contact[0].email);
        await this.registerConfirmEmail(user.contact[0].email);
        await this.acceptsPrivacyNotice();
        if (isContinue) {
            await this.continueContactData();
        }
    }

    async validateEmailParts() {
        await this.registerEmail(user.contact[0].email);
        await this.registerConfirmEmail(user.contact[0].invalidEmail);
        await this.acceptsPrivacyNotice();
    }

    async errorZipCode({ codeError }) {
        switch (codeError.toLowerCase()) {
            case 'invalid':
                await this.createAccountDigitalMultistep.addressData.zipCode.waitForClickable({ timeout: config.wait.L });
                await this.createAccountDigitalMultistep.addressData.zipCode.setValue({ value: user.address[0].invalidZP, forceFocus: false });
                await this.createAccountDigitalMultistep.addressData.optionalNumber.click();
                break;
            case 'error':
                await this.createAccountDigitalMultistep.addressData.zipCode.waitForClickable({ timeout: config.wait.L });
                await this.createAccountDigitalMultistep.addressData.zipCode.setValue({ value: user.address[0].wrongZP, forceFocus: false });
                await this.createAccountDigitalMultistep.addressData.optionalNumber.click();
                break;
            default:
                throw new Error(`${codeError} is not a valid option`);
        }
    }

    async fourthPartOfRegistration(isTransversalUser = false) {
        const { contractsData } = this.createAccountDigitalMultistep;
        const waitAndClick = async (el) => {
            await el.waitForDisplayed({ timeout: config.wait.M });
            await el.click();
        };
        if (this.isSpherica()) {
            const el = isTransversalUser
                ? contractsData.checkTermsAndConditionsContractDigital
                : contractsData.checkAllTermsAndConditions;
            await waitAndClick(el);
        } else {
            if (!isTransversalUser) {
                await waitAndClick(contractsData.checkTermsAndConditionsLibreton);
            }
            await waitAndClick(contractsData.checkTermsAndConditionsContractDigital);
            if (!isTransversalUser) {
                await contractsData.checkCreditBureau.scrollIntoView();
                await waitAndClick(contractsData.checkCreditBureau);

                await contractsData.checkOffers.scrollIntoView({ block: 'end' });
                await waitAndClick(contractsData.checkOffers);
            }
        }
    }

    async enterSign() {
        await this.createAccountDigitalMultistep.contractsData.addSign.waitForAnimation({interval: config.wait.XS});
        await this.createAccountDigitalMultistep.contractsData.addSign.waitForClickable({ timeout: config.wait.M });
        await this.createAccountDigitalMultistep.contractsData.addSign.click({ timeout: config.wait.M });
    }

    async continueContractsData() {
        if (!this.isSpherica()) {
            await this.createAccountDigitalMultistep.contractsData.btnContinueContractsData.scrollIntoView({ block: 'nearest' });
            await this.createAccountDigitalMultistep.contractsData.btnContinueContractsData.waitForDisplayed({ timeout: config.wait.M });
            await this.createAccountDigitalMultistep.contractsData.btnContinueContractsData.waitForAnimation({ timeout: config.wait.M });
            await this.createAccountDigitalMultistep.contractsData.btnContinueContractsData.waitForClickable({ timeout: config.wait.M });
            await this.createAccountDigitalMultistep.contractsData.btnContinueContractsData.click({ useActions: false, scrollOptions: { block: 'nearest' } });
        }
    }

    async registerPassword(pass) {
        await this.createAccountDigitalMultistep.passwordStep.password.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.passwordStep.password.setValue({ value: pass, forceFocus: false });
    }

    async confirmPassword(pass) {
        await this.createAccountDigitalMultistep.passwordStep.passwordConfirm.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.passwordStep.passwordConfirm.setValue({ value: pass, forceFocus: false });
    }

    async continuePassword() {
        if (this.isSpherica()) {
            await (await this.createAccountDigitalMultistep.continueButton.elements()).value[0].waitForClickable({ timeout: config.wait.M });
            await (await this.createAccountDigitalMultistep.continueButton.elements()).value[0].click({ timeout: config.wait.M });
        } else {
            await this.createAccountDigitalMultistep.passwordStep.btnContinuePasswordStep.waitForDisplayed({ timeout: config.wait.L });
            await this.createAccountDigitalMultistep.passwordStep.btnContinuePasswordStep.click();

        }
    }

    async registerPartPassword(pass) {
        await this.registerPassword(pass);
        await this.confirmPassword(pass);
        await this.continuePassword();
    }

    async editAddress() {
        await (await (await this.createAccountDigitalMultistep.addressData.btnEditAddress.waitForDisplayed({ timeout: config.wait.M }))
            .waitForClickable({ timeout: config.wait.L }))
            .click();
        await this.registerInternalNumber('123');
        await this.continueAddress();
    }

    async editContract() {
        if (this.isSpherica()) {
            await (await this.createAccountDigitalMultistep.contractsData.btnEditContract.elements()).value[0].waitForClickable({ timeout: config.wait.M });
            await (await this.createAccountDigitalMultistep.contractsData.btnEditContract.elements()).value[0].click();
        } else {
            await this.createAccountDigitalMultistep.contractsData.btnEditContract
                .waitForDisplayed({ timeout: config.wait.M });
            await this.createAccountDigitalMultistep.contractsData.btnEditContract
                .waitForClickable({ timeout: config.wait.L });
            await this.createAccountDigitalMultistep.contractsData.btnEditContract.click();
        }
        await (await (await this.createAccountDigitalMultistep.contractsData.checkOffers.waitForDisplayed({ timeout: config.wait.M }))
            .waitForClickable({ timeout: config.wait.L }))
            .click();
    }

    async editPassword() {
        await (await (await this.createAccountDigitalMultistep.passwordStep.btnEditPass.waitForDisplayed({ timeout: config.wait.M }))
            .waitForClickable({ timeout: config.wait.L }))
            .click();
        await this.registerPassword('Glomo2025');
        await this.confirmPassword('Glomo2025');
        await this.blurConfirmPassword();
        await this.continuePassword();
    }

    async blurConfirmPassword() {
        await this.createAccountDigitalMultistep.passwordStep.description.click();
    }

    async errorPassword({ element }) {
        switch (element.toLowerCase()) {
            case 'invalid':
                await this.createAccountDigitalMultistep.passwordStep.password.waitForClickable({ timeout: config.wait.L });
                await this.createAccountDigitalMultistep.passwordStep.password.setValue({ value: user.password[0].invalidPass, forceFocus: false });
                await this.createAccountDigitalMultistep.passwordStep.description.click();
                break;
            case 'validate':
                await this.registerPassword('Glomo2023');
                await this.confirmPassword('Glomo#');
                await this.createAccountDigitalMultistep.passwordStep.description.click();
                break;
            default:
                throw new Error(`${element} is not a valid option`);
        }
    }

    async openCamara() {
        await this.createAccountDigitalMultistep.personalData.btnScan.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.personalData.btnScan.click();
        await this.informativeModal.acceptBtn.waitForClickable({ timeout: config.wait.M });
        await this.informativeModal.acceptBtn.click();
    }

    async fillsNameItem() {
        await this.createAccountDigitalMultistep.personalData.name.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.personalData.name.click();
    }

    async fillsFirstLastNameItem() {
        await this.createAccountDigitalMultistep.personalData.firstLastName.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.personalData.firstLastName.click();
    }

    async fillsSecondLastNameItem() {
        await this.createAccountDigitalMultistep.personalData.secondLastName.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.personalData.secondLastName.click();
    }

    async fillsBirthDateItem() {
        await this.createAccountDigitalMultistep.personalData.birthDate.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.personalData.birthDate.click();
    }

    async fillsBirthPlaceItem() {
        await this.createAccountDigitalMultistep.personalData.birthPlace.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.personalData.birthPlace.click();
    }

    async selectsSexOptionMaleItem() {
        await this.createAccountDigitalMultistep.personalData.sexOptionMale.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.personalData.sexOptionMale.click();
    }

    async selectsSexOptionFemaleItem() {
        await this.createAccountDigitalMultistep.personalData.sexOptionFemale.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.personalData.sexOptionFemale.click();
    }

    async selectsSexOptionNonBinaryItem() {
        await this.createAccountDigitalMultistep.personalData.sexOptionNonBinary.waitForDisplayed({ timeout: config.wait.M });
        await this.createAccountDigitalMultistep.personalData.sexOptionNonBinary.click();
    }

    async fillsNumberIneItem() {
        await this.createAccountDigitalMultistep.personalData.numberIne.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.personalData.numberIne.click();
    }

    async selectsBtnHelpIneItem() {
        await this.createAccountDigitalMultistep.personalData.btnHelpINE.waitForClickable({ timeout: config.wait.L });
        await this.createAccountDigitalMultistep.personalData.btnHelpINE.click();
    }

    async selectsBtnHelpIDItem() {
        await this.createAccountDigitalMultistep.personalData.btnHelpID.waitForClickable({ timeout: config.wait.M });
        await this.createAccountDigitalMultistep.personalData.btnHelpID.click();
    }

    async registerIneAndShowHelp(ineNumber = user.data[0].numberIne) {
        await this.registerIne(ineNumber);
        await this.selectsBtnHelpIDItem();
    }

    async acceptHelpIDModal() {
        await this.helpINEModalBtn.waitForClickable({ timeout: config.wait.M });
        await this.helpINEModalBtn.click();
    }

    async closeHelpIDModal() {
        await this.helpINEModalClose.waitForClickable({ timeout: config.wait.M });
        await this.helpINEModalClose.click();
    }

    async selectHelpIdBtn(button) {
        switch (button.toLowerCase()) {
            case 'accept':
                await this.acceptHelpIDModal();
                break;
            case 'close':
                await this.closeHelpIDModal();
                break;
            default:
                throw new Error(`${button} is not a valid option`);
        }
    }

    async resetAllAddressInputs() {
        await this.registerStreet(user.address[0].street);
        await this.createAccountDigitalMultistep.addressData.resetStreet.waitForDisplayed({ timeout: config.wait.M });
        await this.createAccountDigitalMultistep.addressData.resetStreet.click();

        await this.registerOutsideNumber(user.address[0].outsideNumber);
        await this.createAccountDigitalMultistep.addressData.resetOutsideNumber.waitForDisplayed({ timeout: config.wait.M });
        await this.createAccountDigitalMultistep.addressData.resetOutsideNumber.click();

        await this.registerInternalNumber(user.address[0].internalNumber);
        await this.createAccountDigitalMultistep.addressData.resetInnerNumber.waitForDisplayed({ timeout: config.wait.M });
        await this.createAccountDigitalMultistep.addressData.resetInnerNumber.click();

        await this.registerZipCode(user.address[0].zipCode);
        await this.createAccountDigitalMultistep.addressData.resetZipCode.waitForDisplayed({ timeout: config.wait.M });
        await this.createAccountDigitalMultistep.addressData.resetZipCode.click();
    }

    async retryInformation() {
        await this.validateDataModalRetry.waitForDisplayed({ timeout: config.wait.M });
        await this.validateDataModalRetry.waitForClickable({ timeout: config.wait.M });
        await this.validateDataModalRetry.click();
    }

    async retryPersonalData(options) {
        const times = options === 'retry twice' ? 2 : 1;
        for (let i = 0; i < times; i++) {
            await this.retryInformation();
            if (options === 'retry twice') {
                await this.validatesPersonalData();
            }
        }
    }

    async closeOTP() {
        await this.signConnector.closeModal();
    }

    async setValue(element, value) {
        await element.execute({
            script: (value) => {
                this.value = value;
                this.dispatchEvent(new Event('input'));
            },
            args: [value]
        });
    }

    async goToSection(section) {
        await this.firstPartOfRegistration();
        if (section === 'first') return;

        await this.secondPartOfRegistration();
        await this.continueAddress();
        if (section === 'second') return;

        await this.thirdPartOfRegistration();
        if (section === 'third') return;

        await this.fourthPartOfRegistration();
    }
}

export default new OnBoardingDigitalAccountMultistep();
