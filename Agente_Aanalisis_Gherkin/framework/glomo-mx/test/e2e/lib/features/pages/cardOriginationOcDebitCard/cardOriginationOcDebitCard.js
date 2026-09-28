import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page('cardOriginationOcDebitCard')
class CardOriginationOcDebitCard extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cardOriginationOcDebitCard[state="active"]',
            elements: {
                featureComponent: '[data-tag-name="card-origination-oc-debit-card"]',
                landingPage: {
                    properties: {
                        root: '[data-tag-name="card-origination-oc-debit-card"] [data-tag-name="oc-debit-card-landing-page"] #idLanding'
                    },
                    header: '#helpModalHeader',
                    headerCloseButton: '#helpModalHeader #btn-close',
                    benefitsBullets: 'div[slot="slot-content"] div.receipt-wrapper div.content-bullet',
                    acceptButton: 'div[slot="slot-content"] div.receipt-wrapper div.footer #toMultistep'
                },
                multistepModal: {
                    properties: {
                        root: '[data-tag-name="card-origination-oc-debit-card"] [data-tag-name="oc-debit-card-multistep"] #helModalMultiStep'
                    },
                    newAddressForm: {
                        properties: {
                            root: '[data-tag-name="new-address-form"]'
                        },
                        streetInput: '#bbvaFormInputStreet input',
                        streetErrorMessage: '#bbvaFormInputStreet [data-tag-name="bbva-form-text"] div.message.error [data-tag-name="bbva-notification-help"]',
                        exteriorNumberInput: '#bbvaFormInputexteriorNumber input',
                        exteriorNumberErrorMessage: '#bbvaFormInputexteriorNumber [data-tag-name="bbva-form-text"] div.message.error [data-tag-name="bbva-notification-help"]',
                        interiorNumberInput: '#bbvaFormInputinteriorNumber input',
                        interiorNumberErrorMessage: '#bbvaFormInputinteriorNumber [data-tag-name="bbva-form-text"] div.message.error [data-tag-name="bbva-notification-help"]',
                        postalCodeInput: '#bbvaFormInputpostalCode input',
                        postalCodeErrorMessage: '#bbvaFormInputpostalCode [data-tag-name="bbva-form-text"] div.message.error [data-tag-name="bbva-notification-help"]',
                        colonySelect: '[data-tag-name="colony-selector"] #ios-web-selector #button',
                        colonyOption: '[data-tag-name="colony-selector"] #ios-web-selector [data-tag-name="bbva-form-option"][value="__ID__"]',
                        additionalReferencesArea: '#bbvaFormInputReference textarea',
                        additionalReferencesErrorMessage: '#bbvaFormInputReference [data-tag-name="bbva-form-textarea"] div.message.error [data-tag-name="bbva-notification-help"]',
                    },
                    header: '#helpModalHeader',
                    modifyDeliveryAddressLink: '#step-address[completed] #editButton',
                    deliveryAddressStep: {
                        properties: {
                            root: '#bbvaExpandableMultistep #step-address [data-tag-name="oc-debit-card-step-address"]'
                        },
                        cardDeliveryTooltip: '.container--header #typeLinkAddressInformation',
                        myAddressRadio: '#radioButtoMyAddress',
                        myAddressText:  '.address__content-address',
                        showAddressLink:'#addressMask',
                        otherAddressRadio: '#radioButtoOtherAddress',
                        privacyNoticeLink: '#typeLinkPrivacy',
                        continueButton:    '#butonConfirmAddress',
                    },
                    shippingDateStepContinueButton: '#bbvaExpandableMultistep #step-date-select [data-tag-name="oc-debit-card-step-date"] #butonConfirmDate',
                    summaryContinueButton: '#bbvaExpandableMultistep #butonConfirmStep'
                },
                noticePrivacyModal: {
                    header: '[data-tag-name="card-origination-oc-debit-card"] #notice-privacy#helpModalHeader',
                    headerCloseButton: '[data-tag-name="card-origination-oc-debit-card"] #notice-privacy #helpModalHeader #btn-close'
                },
                deliveryInformationModal: {
                    header: '[data-tag-name="card-origination-oc-debit-card"] #info-address #helpModalHeader',
                    headerCloseButton: '[data-tag-name="card-origination-oc-debit-card"] #info-address #helpModalHeader #btn-close',
                    contentText: '[data-tag-name="card-origination-oc-debit-card"] #info-address #helpModalContent',
                },
                noCoverageZoneHalfModal: {
                    properties: {
                        root: '[data-tag-name="card-origination-oc-debit-card"] #no-coverage-zone'
                    },
                    header: '#helpModalHeader',
                    headerCloseButton: '#helpModalHeader #btn-close',
                    warningIcon: '#helpModalTitle',
                    warningText: '#helpModalContent',
                    acceptButton: '[data-tag-name="bbva-button-default"][text="Aceptar"]',
                    exitButton: '[data-tag-name="bbva-button-default"].link'
                },
                noCoverageZoneFullModal: {
                    properties: {
                        root: '[data-tag-name="card-origination-oc-debit-card"] #no-coverage-zone-exit'
                    },
                    header: '#helpModalHeader',
                    headerCloseButton: '#helpModalHeader #btn-close',
                    warningIcon: '#helpModalTitle',
                    warningText: '#helpModalContent',
                },
                serviceRetryModal: {
                    properties: {
                        root: '[data-tag-name="card-origination-oc-debit-card"] #error-retry-modal'
                    },
                    acceptButton: '[data-tag-name="bbva-button-default"][text="Reintentar"]',
                }
            },
            requiredElements: ['landingPage.header'],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header offer':
                await this.offerPage.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header multistep':
                await this.multistepModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no coverage zone modal header':
                await this.noCoverageZoneFullModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no coverage zone modal warning icon':
                await this.noCoverageZoneFullModal.warningIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no coverage zone modal warning text':
                await this.noCoverageZoneFullModal.warningText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'my address radio':
                await this.multistepModal.deliveryAddressStep.myAddressRadio .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'other address radio':
                await this.multistepModal.deliveryAddressStep.otherAddressRadio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tooltip delivery information':
                await this.multistepModal.deliveryAddressStep.cardDeliveryTooltip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'show address link':
                await this.multistepModal.deliveryAddressStep.showAddressLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy notice link':
                await this.multistepModal.deliveryAddressStep.privacyNoticeLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address step continue button':
                await this.multistepModal.deliveryAddressStep.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address mask':
                await this.multistepModal.deliveryAddressStep.myAddressText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'street input error message':
                await this.multistepModal.newAddressForm.streetErrorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exterior number input error message':
                await this.multistepModal.newAddressForm.exteriorNumberErrorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'interior number input error message':
                await this.multistepModal.newAddressForm.interiorNumberErrorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'postal code input error message':
                await this.multistepModal.newAddressForm.postalCodeErrorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'additional references input error message':
                await this.multistepModal.newAddressForm.additionalReferencesErrorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async acceptsLandingPage() {
        await this.landingPage.acceptButton.waitForDisplayed({timeout: config.wait.M});
        await this.landingPage.acceptButton.waitForClickable({timeout: config.wait.M});
        await this.landingPage.acceptButton.click();
    }

    async selectAddressType(otherAddresss = false) {
        if (otherAddresss) {
            await this.multistepModal.deliveryAddressStep.otherAddressRadio.waitForDisplayed({timeout: config.wait.L});
            await this.multistepModal.deliveryAddressStep.otherAddressRadio.waitForAnimation();
            await this.multistepModal.deliveryAddressStep.otherAddressRadio.click();
        } else {
            await this.multistepModal.deliveryAddressStep.myAddressRadio.waitForDisplayed({timeout: config.wait.L});
            await this.multistepModal.deliveryAddressStep.myAddressRadio.waitForAnimation();
            await this.multistepModal.deliveryAddressStep.myAddressRadio.click();
        }
    }

    async fillsTheOtherAddressForm(postalCode) {
        await this.multistepModal.newAddressForm.streetInput.waitForDisplayed({timeout: config.wait.M});
        await this.multistepModal.newAddressForm.streetInput.setValue(global.user.street);
        await this.multistepModal.newAddressForm.exteriorNumberInput.waitForDisplayed({timeout: config.wait.M});
        await this.multistepModal.newAddressForm.exteriorNumberInput.setValue(global.user.exteriorNumber);
        await this.multistepModal.newAddressForm.interiorNumberInput.waitForDisplayed({timeout: config.wait.M});
        await this.multistepModal.newAddressForm.interiorNumberInput.setValue(global.user.interiorNumber);
        await this.multistepModal.newAddressForm.postalCodeInput.waitForDisplayed({timeout: config.wait.M});
        await this.multistepModal.newAddressForm.postalCodeInput.setValue(postalCode);
        await this.multistepModal.newAddressForm.colonySelect.waitForClickable({timeout: config.wait.M});
        await this.multistepModal.newAddressForm.colonySelect.waitForAnimation({timeout: config.wait.M, interval: 200});
        await this.multistepModal.newAddressForm.colonySelect.click({useActions: true});
        const colonyOption = await this.multistepModal.newAddressForm.colonyOption.specifySelector({placeholder: '__ID__', value: global.user.colonyId});
        await colonyOption.waitForClickable({timeout: config.wait.M});
        await colonyOption.click();
        await this.multistepModal.newAddressForm.additionalReferencesArea.waitForDisplayed({timeout: config.wait.M});
        await this.multistepModal.newAddressForm.additionalReferencesArea.setValue(global.user.reference);
    }

    async fillAddressFormWithWrongInformation(input, specialCharacter = false) {
        const { user } = global;
        switch(input.toLowerCase()) {
            case 'street':
                await this.multistepModal.newAddressForm.streetInput.waitForDisplayed({timeout: config.wait.M});
                await this.multistepModal.newAddressForm.streetInput.setValue(
                    specialCharacter ? user.specialCharStreet : user.exceededLimitStreet
                );
                break;
            case 'exterior number':
                await this.multistepModal.newAddressForm.exteriorNumberInput.waitForDisplayed({timeout: config.wait.M});
                await this.multistepModal.newAddressForm.exteriorNumberInput.setValue(
                    specialCharacter ? user.specialExteriorNumber : user.exceededLimitExteriorNumber
                );
                break;
            case 'interior number':
                await this.multistepModal.newAddressForm.interiorNumberInput.waitForDisplayed({timeout: config.wait.M});
                await this.multistepModal.newAddressForm.interiorNumberInput.setValue(
                    specialCharacter ? user.specialCharInteriorNumber : user.exceededLimitInteriorNumber
                );
                break;
            case 'references':
                await this.multistepModal.newAddressForm.additionalReferencesArea.waitForDisplayed({timeout: config.wait.M});
                await this.multistepModal.newAddressForm.additionalReferencesArea.setValue(
                    specialCharacter ? user.specialCharReference : user.exceededLimitReference
                );
                break;
            case 'postal code':
                await this.multistepModal.newAddressForm.postalCodeInput.waitForDisplayed({timeout: config.wait.M});
                await this.multistepModal.newAddressForm.postalCodeInput.setValue(
                    specialCharacter ? user.specialCharPostalCode : user.wrongPostalCode
                );
                break;
            default:
                throw new Error(`Error: "${input}" is not a valid input type.`);
        }
    }

    async continueDeliveryAddressStep() {
        await this.multistepModal.deliveryAddressStep.continueButton.waitForDisplayed({timeout: config.wait.L});
        await this.multistepModal.deliveryAddressStep.continueButton.waitForEnabled({timeout: config.wait.M});
        await this.multistepModal.deliveryAddressStep.continueButton.click();
    }

    async retriesContinueDeliveryAddressStep(times, params = '') {
        let i = 0;
        while (i < times) {
            await this.fillsTheOtherAddressForm(params);
            await this.continueDeliveryAddressStep();
            if (i !== times - 1) {
                await this.acceptModal();
            }
            i++;
        }
    }

    async closeModal(id) {
        switch(id.toLowerCase()) {
            case 'no coverage zone modal':
                await this.noCoverageZoneHalfModal.exitButton.waitForDisplayed({timeout: config.wait.M});
                await this.noCoverageZoneHalfModal.exitButton.waitForClickable({timeout: config.wait.M});
                await this.noCoverageZoneHalfModal.exitButton.click();
                break;
            case 'delivery information':
                await this.deliveryInformationModal.headerCloseButton.waitForDisplayed({timeout: config.wait.M});
                await this.deliveryInformationModal.headerCloseButton.waitForClickable({timeout: config.wait.M});
                await this.deliveryInformationModal.headerCloseButton.click();
                break;
            case 'notice privacy':
                await this.noticePrivacyModal.headerCloseButton.waitForDisplayed({timeout: config.wait.M});
                await this.noticePrivacyModal.headerCloseButton.waitForClickable({timeout: config.wait.M});
                await this.noticePrivacyModal.headerCloseButton.click();
                break;
            default:
                throw new Error(`Modal with id "${id}" not recognized.`);
        }
    }

    async acceptModal() {
        await this.noCoverageZoneHalfModal.acceptButton.waitForDisplayed({timeout: config.wait.M});
        await this.noCoverageZoneHalfModal.acceptButton.waitForClickable({timeout: config.wait.M});
        await this.noCoverageZoneHalfModal.acceptButton.click();
    }

    async deployOcDebitCardModalType(modalType) {
        switch(modalType.toLowerCase()) {
            case 'delivery information':
                await this.multistepModal.deliveryAddressStep.cardDeliveryTooltip.waitForDisplayed({timeout: config.wait.M});
                await this.multistepModal.deliveryAddressStep.cardDeliveryTooltip.waitForClickable({timeout: config.wait.M});
                await this.multistepModal.deliveryAddressStep.cardDeliveryTooltip.click();
                break;
            case 'notice privacy':
                await this.multistepModal.deliveryAddressStep.privacyNoticeLink.waitForDisplayed({timeout: config.wait.M});
                await this.multistepModal.deliveryAddressStep.privacyNoticeLink.waitForClickable({timeout: config.wait.M});
                await this.multistepModal.deliveryAddressStep.privacyNoticeLink.click();
                break;
            default:
                throw new Error(`Modal type "${modalType}" not recognized.`);
        }
    }

    async showAddress(showAddress = false) {
        await this.multistepModal.deliveryAddressStep.showAddressLink.waitForDisplayed({timeout: config.wait.M});
        await this.multistepModal.deliveryAddressStep.showAddressLink.waitForClickable({timeout: config.wait.M});
        await this.multistepModal.deliveryAddressStep.showAddressLink.click();
        if (showAddress) {
            await this.fillOtp('12345678');
        }
    }

    async retryModal() {
        await this.serviceRetryModal.acceptButton.waitForDisplayed({timeout: config.wait.M});
        await this.serviceRetryModal.acceptButton.waitForClickable({timeout: config.wait.M});
        await this.serviceRetryModal.acceptButton.click();
    }

    async selectDeliveryDate() {
        await this.featureComponent.execute({
            script: (e) => {
                this.nativeDateOptionSelected(e);
            },
            args: [global.user.selectedDate],
        });
        await this.multistepModal.shippingDateStepContinueButton.waitForDisplayed({timeout: config.wait.M});
        await this.multistepModal.shippingDateStepContinueButton.waitForEnabled({timeout: config.wait.M});
        await this.multistepModal.shippingDateStepContinueButton.click();
    }

    async acceptSummary() {
        await this.multistepModal.summaryContinueButton.waitForDisplayed({timeout: config.wait.M});
        await this.multistepModal.summaryContinueButton.waitForClickable({timeout: config.wait.M});
        await this.multistepModal.summaryContinueButton.click();
    }

    async modifyShippingAddress() {
        await this.multistepModal.modifyDeliveryAddressLink.scrollIntoView();
        await this.multistepModal.modifyDeliveryAddressLink.click();
    }

    async goBack() {
        await this.landingPage.headerCloseButton.waitForDisplayed({timeout: config.wait.M});
        await this.landingPage.headerCloseButton.waitForClickable({timeout: config.wait.M});
        await this.landingPage.headerCloseButton.click();
    }
}

export default new CardOriginationOcDebitCard();
