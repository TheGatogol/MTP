import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class OcAdditionalCreditCard extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-additionalCreditCardMainPage[state="active"]',
            elements: {
                component: '[data-tag-name="bbva-feature-oc-additional-credit-card-mx"]',
                offerPage: {
                    properties: {
                        root: '#additionalModal [data-tag-name="bbva-help-modal"]'
                    },
                    header: '.modal-header',
                    close: '#helpModalHeader #btn-close',
                    panelContainer: '.containerheader',
                    additionalCardPanel: '[data-tag-name="bbva-feature-oc-additional-credit-card-mx-structure"]',
                    benefits: 'div[slot="slot-content"] div div:nth-child(1)',
                    considerations: 'div[slot="slot-content"] div div:nth-child(2)',
                    messageDataPrivacy: '.messageDataPrivacy .privacy-message',
                    privacyLink: '.messageDataPrivacy .privacy-link',
                    continueButton: '[data-tag-name="bbva-feature-oc-additional-credit-card-mx-button"] [data-tag-name="bbva-button-default"]',
                },
                multistep: {
                    properties: {
                        root: '[data-tag-name="bbva-feature-oc-additional-credit-card-mx-multistep"]'
                    },
                    close: '[data-tag-name="bbva-header-main"] #btn-close',
                    multistepAllCompleted: '[data-tag-name="bbva-expandable-multistep"][all-completed]',
                    confirmation: '[data-tag-name="bbva-expandable-multistep"] .confirmation-area',
                    btnHire: '[data-tag-name="bbva-expandable-multistep"] .confirmation-area [data-tag-name="bbva-button-default"]',
                    stepCardHolder: {
                        properties: {
                            root: '#step-0'
                        },
                        headerStep: '#heading',
                        summaryCard: '.summary [data-tag-name="bbva-feature-oc-additional-credit-card-mx-structure"]'
                    },
                    stepAdditionalCard: {
                        properties: {
                            root: '#step-1'
                        },
                        headerStep: '#heading',
                        editButton: '#editButton',
                        descriptionStep: '[data-tag-name="additional-info-step"] [data-tag-name="bbva-type-text"]:nth-child(1)',
                        inputAmount: '[data-tag-name="additional-info-step"] #inputAmount input',
                        errorInputAmount: '[data-tag-name="additional-info-step"] #inputAmount .error [data-tag-name="bbva-notification-help"]',
                        descriptionPersonData: '[data-tag-name="additional-info-step"] [data-tag-name="bbva-type-text"]:nth-child(2)',
                        inputName: '[data-tag-name="additional-info-step"] #inputName input',
                        resetInputName: '[data-tag-name="additional-info-step"] #inputName .clear',
                        invalidInputName: '[data-tag-name="additional-info-step"] #inputName [data-tag-name="bbva-form-text"][invalid]',
                        inputLastName: '[data-tag-name="additional-info-step"] #inputLastName input',
                        resetInputLastName: '[data-tag-name="additional-info-step"] #inputLastName .clear',
                        invalidInputLastName: '[data-tag-name="additional-info-step"] #inputLastName [data-tag-name="bbva-form-text"][invalid]',
                        inputSecondLastName: '[data-tag-name="additional-info-step"] #inputSecondLastName input',
                        inputDate: '[data-tag-name="additional-info-step"] [data-tag-name="bbva-form-date"]',
                        inputBirthdate: '[data-tag-name="additional-info-step"] [data-tag-name="bbva-form-date"] input',
                        inputFormSelect: '[data-tag-name="additional-info-step"] [data-tag-name="bbva-form-select"]',
                        selectState: '[data-tag-name="additional-info-step"] [data-tag-name="bbva-form-select"] [data-tag-name="bbva-form-option"][value="__STATE__"]',
                        descriptionGender: '.address__conten [data-tag-name="bbva-form-radio-button"] [data-tag-name="bbva-type-text"]',
                        radioButtonInput: '.address__conten [data-tag-name="bbva-form-radio-button"] ul li:nth-child(__INDEX__) [data-tag-name="bbva-form-radio-button-input"]',
                        notificationMessage: '.notificationMessage [data-tag-name="bbva-notification-message"]',
                        continueButton: '#additionalTdcContinue [data-tag-name="bbva-button-default"]',
                        summaryList: '.summary div:nth-child(__INDEX__) [data-tag-name="bbva-feature-oc-additional-credit-card-mx-data-list"]',
                    },
                    stepShippingAddress: {
                        properties: {
                            root: '#step-2'
                        },
                        headerStep: '#heading',
                        editButton: '#editButton',
                        descriptionPatrimonial: '[data-tag-name="delivery-addresses-step"] .address [data-tag-name="bbva-type-text"]:nth-child(1)',
                        titlePatrimonial: '[data-tag-name="delivery-addresses-step"] .address .title-block',
                        showLocation: '[data-tag-name="delivery-addresses-step"] .address [data-tag-name="bbva-type-link"]',
                        descriptionStep: '[data-tag-name="delivery-addresses-step"] .address [data-tag-name="bbva-form-container"] .label-out [data-tag-name="bbva-type-text"]',
                        formOptionInput: '[data-tag-name="delivery-addresses-step"] .address [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"]:nth-child(__INDEX__)',
                        showHeritageOffice: '[data-tag-name="delivery-addresses-step"] .address [data-tag-name="bbva-type-link"]',
                        contentAddress: '[data-tag-name="delivery-addresses-step"] .address [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"]:nth-child(__INDEX__) div[slot="content-area"] [data-tag-name="bbva-type-text"]',
                        formOptionLink: '[data-tag-name="delivery-addresses-step"] .address [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"]:nth-child(__INDEX__) div[slot="content-area"] [data-tag-name="bbva-type-link"]',
                        continueButton: '#additionalTdcContinue [data-tag-name="bbva-button-default"]',
                    },
                    stepTermsAndConditions: {
                        properties: {
                            root: '#step-3'
                        },
                        headerStep: '#heading',
                        editButton: '#editButton',
                        descriptionStep: '[data-tag-name="terms-conditions-step"] .title [data-tag-name="bbva-type-text"]',
                        checkboxOption: '[data-tag-name="terms-conditions-step"] [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"]',
                        continueButton: '#additionalTdcContinue [data-tag-name="bbva-button-default"]',
                    }
                },
                genericModal: {
                    properties: {
                        root: '[data-tag-name="bbva-feature-oc-additional-credit-card-mx-generic-modal"] [data-tag-name="bbva-help-modal"]'
                    },
                    header: '#helpModalHeader',
                    close: '#helpModalHeader #btn-close',
                    icon: '#helpModalTitle .title-icon',
                    contentDescription: '#helpModalContent .slot-content [data-tag-name="bbva-type-text"]',
                    paragraph: 'div[slot="slot-content"] [data-tag-name="bbva-type-text"]:nth-child(1)',
                    paragraphTwo: 'div[slot="slot-content"] [data-tag-name="bbva-type-text"]:nth-child(2)',
                    buttons: '.modal-footer .slot-footer [data-tag-name="bbva-button-default"]:nth-child(__INDEX__)',
                },
                successModal: {
                    properties: {
                        root: '[data-tag-name="bbva-feature-oc-additional-credit-card-mx-successful-page"] [data-tag-name="bbva-help-modal"]'
                    },
                    header: '.modal-header',
                    close: '#helpModalHeader #btn-close',
                    panelSuccess: 'div[slot="slot-content"] .panel-success',
                    listSuccess: 'div[slot="slot-content"] .list-success ul li:nth-child(__INDEX__) [data-tag-name="bbva-feature-oc-additional-credit-card-mx-data-list"]',
                    operative: 'div[slot="slot-content"] .button-row [data-tag-name="bbva-button-row"]',
                }
            },
            requiredElements: ['component']
        });
    }

    async _screenValidation({item, value, _args} = {}) {
        switch (item.toLowerCase()) {
            case 'header offer page':
                await this.offerPage.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel container offer page':
                await this.offerPage.panelContainer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'additional card panel offer page':
                await this.offerPage.additionalCardPanel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'benefits offer page':
                await this.offerPage.benefits.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'considerations offer page':
                await this.offerPage.considerations.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message data privacy offer page':
                await this.offerPage.messageDataPrivacy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy link offer page':
                await this.offerPage.privacyLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button offer page':
                await this.offerPage.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header card holder':
                await this.multistep.stepCardHolder.headerStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary card holder':
                await this.multistep.stepCardHolder.summaryCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header additional card':
                await this.multistep.stepAdditionalCard.headerStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description additional card':
                await this.multistep.stepAdditionalCard.descriptionStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input amount additional card':
                await this.multistep.stepAdditionalCard.inputAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description person data additional card':
                await this.multistep.stepAdditionalCard.descriptionPersonData.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input name additional card':
                await this.multistep.stepAdditionalCard.inputName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input last name additional card':
                await this.multistep.stepAdditionalCard.inputLastName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input second last name additional card':
                await this.multistep.stepAdditionalCard.inputSecondLastName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input birthdate additional card':
                await this.multistep.stepAdditionalCard.inputDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input form select additional card':
                await this.multistep.stepAdditionalCard.inputFormSelect.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description gender additional card':
                await this.multistep.stepAdditionalCard.descriptionGender.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'gender man additional card':
                await (await this.multistep.stepAdditionalCard.radioButtonInput.specifySelector({placeholder: '__INDEX__', value: 1}))
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'gender woman additional card':
                await (await this.multistep.stepAdditionalCard.radioButtonInput.specifySelector({placeholder: '__INDEX__', value: 2}))
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'gender binary additional card':
                await (await this.multistep.stepAdditionalCard.radioButtonInput.specifySelector({placeholder: '__INDEX__', value: 3}))
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message additional card':
                await this.multistep.stepAdditionalCard.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button continue additional card':
                await this.multistep.stepAdditionalCard.continueButton.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'header shipping address':
                await this.multistep.stepShippingAddress.headerStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description shipping address':
                await this.multistep.stepShippingAddress.descriptionStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'my home shipping address':
                await this.multistep.stepShippingAddress.formOptionInput.specifySelector({placeholder: '__INDEX__', value: 1})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'branch shipping address':
                await this.multistep.stepShippingAddress.formOptionInput.specifySelector({placeholder: '__INDEX__', value: 2})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'show address shipping address':
                await this.multistep.stepShippingAddress.formOptionLink.specifySelector({placeholder: '__INDEX__', value: 1})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'deobfuscate shipping address':
                await this.multistep.stepShippingAddress.contentAddress.specifySelector({placeholder: '__INDEX__', value: 1})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'choose branch shipping address':
                await this.multistep.stepShippingAddress.formOptionLink.specifySelector({placeholder: '__INDEX__', value: 2})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button continue shipping address':
                await this.multistep.stepShippingAddress.continueButton.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'header terms and conditions':
                await this.multistep.stepTermsAndConditions.headerStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description terms and conditions':
                await this.multistep.stepTermsAndConditions.descriptionStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'checkbox option terms and conditions':
                await this.multistep.stepTermsAndConditions.checkboxOption.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button continue terms and conditions':
                await this.multistep.stepTermsAndConditions.continueButton.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'header generic modal':
                await this.genericModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close generic modal':
                await this.genericModal.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'paragraph generic modal':
                await this.genericModal.paragraph.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'paragraph two generic modal':
                await this.genericModal.paragraphTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'content description generic modal':
                await this.genericModal.contentDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon generic modal':
                await this.genericModal.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button generic modal':
                await this.genericModal.buttons.specifySelector({placeholder: '__INDEX__', value: 1}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button generic modal':
                await this.genericModal.buttons.specifySelector({placeholder: '__INDEX__', value: 2}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error the balance':
                await this.multistep.stepAdditionalCard.errorInputAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirmation all completed':
                await this.multistep.confirmation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep all completed':
                await this.multistep.multistepAllCompleted.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit button additional card':
                await this.multistep.stepAdditionalCard.editButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary amount additional card':
                await this.multistep.stepAdditionalCard.summaryList.specifySelector({placeholder: '__INDEX__', value: 1}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary name additional card':
                await this.multistep.stepAdditionalCard.summaryList.specifySelector({placeholder: '__INDEX__', value: 2}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary birthdate additional card':
                await this.multistep.stepAdditionalCard.summaryList.specifySelector({placeholder: '__INDEX__', value: 3}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary place of birth additional card':
                await this.multistep.stepAdditionalCard.summaryList.specifySelector({placeholder: '__INDEX__', value: 4}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary gender additional card':
                await this.multistep.stepAdditionalCard.summaryList.specifySelector({placeholder: '__INDEX__', value: 5}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description patrimonial shipping address':
                await this.multistep.stepShippingAddress.descriptionPatrimonial.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title patrimonial shipping address':
                await this.multistep.stepShippingAddress.titlePatrimonial.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'show location patrimonial shipping address':
                await this.multistep.stepShippingAddress.showLocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invalid input name additional card':
                await this.multistep.stepAdditionalCard.invalidInputName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invalid input last name additional card':
                await this.multistep.stepAdditionalCard.invalidInputLastName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header success modal':
                await this.successModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close success modal':
                await this.successModal.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel success modal':
                await this.successModal.panelSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date success modal':
                await this.successModal.listSuccess.specifySelector({placeholder: '__INDEX__', value: 1}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card success modal':
                await this.successModal.listSuccess.specifySelector({placeholder: '__INDEX__', value: 3}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'name success modal':
                await this.successModal.listSuccess.specifySelector({placeholder: '__INDEX__', value: 4}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio success modal':
                await this.successModal.listSuccess.specifySelector({placeholder: '__INDEX__', value: 6}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operative success modal':
                await this.successModal.operative.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    async advanceProcessStep(selector) {
        switch (selector) {
            case 'continue terms and conditions':
                await this.multistep.stepTermsAndConditions.continueButton.waitForClickable({timeout: config.wait.M});
                await this.multistep.stepTermsAndConditions.continueButton.click();
                break;
            case 'continue additional card':
                await this.multistep.stepAdditionalCard.continueButton.waitForClickable({timeout: config.wait.M});
                await this.multistep.stepAdditionalCard.continueButton.click();
                break;
            case 'open modal exit':
                await this.multistep.close.waitForClickable({timeout: config.wait.M});
                await this.multistep.close.click();
                break;
            default:
                throw new Error(`Unknown selector name: ${selector}`);
        }
    }

    async goToStep(step) {
        await this.handleActions(step);
    }

    async editStep(selector) {
        const { anotherCustomerRenapo } = global.user;
        switch (selector) {
            case 'terms and conditions':
                await (await this.multistep.multistepAllCompleted.waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M});
                await (await (await this.multistep.stepTermsAndConditions.editButton.scrollIntoView({block: 'end'}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .click();
                break;
            case 'additional card':
                await (await this.multistep.multistepAllCompleted.waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M});
                await (await (await this.multistep.stepAdditionalCard.editButton.scrollIntoView({block: 'start'}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .click();
                break;
            case 'renapo information':
                await this.setAmount('4000');
                await this.setInputValue(anotherCustomerRenapo);
                break;
            default:
                throw new Error(`Unknown selector name: ${selector}`);
        }
    }

    async goBack(flow) {
        switch (flow) {
            case 'card detail':
                await this.offerPage.close.waitForClickable({timeout: config.wait.M});
                await this.offerPage.close.click();
                break;
            case 'exit flow':
                await this.advanceProcessStep('open modal exit');
                await (await this.genericModal.buttons.specifySelector({placeholder: '__INDEX__', value: 1})
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            default:
                throw new Error(`Unknown flow name: ${flow}`);
        }
    }

    async setAmount(value) {
        await this.multistep.stepAdditionalCard.inputAmount.waitForDisplayed({timeout: config.wait.M});
        await this.multistep.stepAdditionalCard.inputAmount.setValue({value: value});
    }

    async selectRadioButton(placeBirth) {
        const gender = {
            M: 1,
            H: 2,
            NON_BINARY: 3
        }[placeBirth];
        await (await this.multistep.stepAdditionalCard.radioButtonInput.specifySelector({placeholder: '__INDEX__', value: gender}))
            .click();
    }

    async setName(name) {
        await this.multistep.stepAdditionalCard.inputName.waitForDisplayed({timeout: config.wait.M});
        await this.multistep.stepAdditionalCard.inputName.setValue({value: name, slow: true});
    }

    async setLastName(lastName) {
        await this.multistep.stepAdditionalCard.inputLastName.waitForDisplayed({timeout: config.wait.M});
        await this.multistep.stepAdditionalCard.inputLastName.setValue({value: lastName, slow: true});
    }

    async setInputValue(renapo) {
        await this.setName(renapo.name);
        await this.setLastName(renapo.lastName);
        await this.multistep.stepAdditionalCard.inputSecondLastName.waitForDisplayed({timeout: config.wait.M});
        await this.multistep.stepAdditionalCard.inputSecondLastName.setValue({value: renapo.motherLastName, slow: true});
    }

    async setBirthdate(birthDate) {
        await this.multistep.stepAdditionalCard.inputBirthdate.sendKeys({keys: birthDate});
        await this.multistep.stepAdditionalCard.inputFormSelect.waitForClickable({timeout: config.wait.M});
        await this.multistep.stepAdditionalCard.inputFormSelect.click();
    }

    async setSelectState(placeBirth) {
        await (await this.multistep.stepAdditionalCard.selectState.specifySelector({placeholder: '__STATE__', value: placeBirth})
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async openBranchLocator() {
        await this.handleActions('shipping address');
        if (global.user?.products?.cards?.[0]?.title?.name !== 'INFINITE BBVA') {
            await this.multistep.stepShippingAddress.formOptionInput.specifySelector({placeholder: '__INDEX__', value: 2})
                .click();
            await this.multistep.stepShippingAddress.formOptionLink.specifySelector({placeholder: '__INDEX__', value: 2})
                .click();
        }
    }

    async handleActions(step) {
        const { renapo } = global.user;
        switch (step) {
            case 'additional card':
                await this.offerPage.continueButton.waitForClickable({timeout: config.wait.M});
                await this.offerPage.continueButton.click();
                break;
            case 'fill out the additional card form':
                await this.handleActions('additional card');
                await this.setAmount('2000');
                if (renapo) {
                    await this.setInputValue(renapo);
                    await this.setBirthdate(renapo.birthDate);
                    await this.setSelectState(renapo.placeBirth);
                    await this.selectRadioButton(renapo.gender);
                }
                break;
            case 'shipping address':
                await this.handleActions('fill out the additional card form');
                await this.advanceProcessStep('continue additional card');
                break;
            case 'my home':
                await this.handleActions('shipping address');
                if (global.user?.products?.cards?.[0]?.title?.name !== 'INFINITE BBVA') {
                    await this.multistep.stepShippingAddress.formOptionInput.specifySelector({placeholder: '__INDEX__', value: 1})
                        .click();
                }
                break;
            case 'show address':
                await this.handleActions('shipping address');
                if (global.user?.products?.cards?.[0]?.title?.name !== 'INFINITE BBVA') {
                    await this.multistep.stepShippingAddress.formOptionLink.specifySelector({placeholder: '__INDEX__', value: 1})
                        .click();
                }
                break;
            case 'show heritage office':
                await this.handleActions('shipping address');
                await this.multistep.stepShippingAddress.showHeritageOffice.waitForClickable({timeout: config.wait.M});
                await this.multistep.stepShippingAddress.showHeritageOffice.click();
                break;
            case 'terms and conditions':
                await this.handleActions('my home');
                await this.multistep.stepShippingAddress.continueButton.waitForClickable({timeout: config.wait.M});
                await this.multistep.stepShippingAddress.continueButton.click();
                break;
            case 'accept terms and conditions':
                await this.handleActions('terms and conditions');
                await this.multistep.stepTermsAndConditions.checkboxOption.waitForClickable({timeout: config.wait.M});
                await this.multistep.stepTermsAndConditions.checkboxOption.click();
                break;
            case 'summary':
                await this.handleActions('accept terms and conditions');
                await this.advanceProcessStep('continue terms and conditions');
                break;
            case 'hire':
                await this.handleActions('summary');
                await this.multistep.btnHire.waitForClickable({timeout: config.wait.M});
                await this.multistep.btnHire.click();
                break;
            case 'privacy notice':
                await this.offerPage.privacyLink.waitForClickable({timeout: config.wait.M});
                await this.offerPage.privacyLink.click();
                break;
            case 'enter lower balance':
                await this.handleActions('additional card');
                await this.setAmount('100');
                break;
            case 'enter maximum balance':
                await this.handleActions('additional card');
                await this.setAmount('100000');
                break;
            case 'resets the name field':
                await this.handleActions('additional card');
                await this.setAmount('2000');
                await this.setName(renapo.name);
                await this.multistep.stepAdditionalCard.resetInputName.waitForClickable({timeout: config.wait.M});
                await this.multistep.stepAdditionalCard.resetInputName.click();
                break;
            case 'reset input last name':
                await this.handleActions('additional card');
                await this.setAmount('2000');
                if (renapo) {
                    await this.setName(renapo.name);
                    await this.setLastName(renapo.lastName);
                }
                await this.multistep.stepAdditionalCard.resetInputLastName.waitForClickable({timeout: config.wait.M});
                await this.multistep.stepAdditionalCard.resetInputLastName.click();
                break;
            case 'fill in only 1 last name':
                await this.handleActions('additional card');
                await this.setAmount('2000');
                if (renapo) {
                    await this.setName(renapo.name);
                    await this.setLastName(renapo.lastName);
                    await this.setBirthdate(renapo.birthDate);
                    await this.setSelectState(renapo.placeBirth);
                    await this.selectRadioButton(renapo.gender);
                }
                break;
            default:
                throw new Error(`Unknown step name: ${step}`);
        }
    }
}

export default new OcAdditionalCreditCard();
