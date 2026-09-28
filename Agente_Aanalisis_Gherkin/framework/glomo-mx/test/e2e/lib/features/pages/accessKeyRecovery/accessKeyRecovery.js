import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class AccessKeyRecovery extends AbstractGlomoPage {
    constructor() {
        const formInput = '[data-tag-name="bbva-form-password"]';
        super({
            root: '#cells-template-keyRecovery[state="active"]',
            elements: {
                header: '[data-tag-name="bbva-header-main"] #heading [data-tag-name="bbva-type-text"]',
                closeButton: '[data-tag-name="bbva-header-main"] [data-id="iconsRight"] button[id="btn-close-expandable"]',
                method: {
                    properties: { root: '[data-tag-name="bbva-expandable-step"][id="stepRecoveryMethodType"]' },
                    secondOption: '[data-tag-name="access-key-recovery-radio-buttons"] [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"][value="card"]',
                    nextSteps: 'div.footer-container [data-tag-name="bbva-type-text"]',
                    continueButton: '[data-tag-name="bbva-button-default"][id="firstStepButton"]'
                },
                methodTittle: {
                    properties: { root: '[data-tag-name="recovery-method-type"] .container-panel' },
                },
                methodDescription: {
                    properties: { root: '[data-tag-name="recovery-method-type"] .description-container' },
                },
                identifyYourself: {
                    properties: { root: 'bbva-expandable-multistep' },
                    identification: {
                        properties: { root: '[data-tag-name="bbva-expandable-step"][id="stepIdentification"]' },
                        summaryIdentityCel: '[data-tag-name="summary-identification"] [data-tag-name="bbva-list-simple-spherica"][id="listSimplePhoneNumber"] [data-tag-name="bbva-type-text"]',
                        summaryIdentityCard: '[data-tag-name="summary-identification"] [data-tag-name="bbva-list-simple-spherica"][id="listSimpleCardNumber"] [data-tag-name="bbva-type-text"]',
                        labelIdentifyYourself: '#headingLabel',
                        content: {
                            properties: { root: '[data-tag-name="content-identification"].content' },
                            secondSteps: '[id="footerCotent"] [data-tag-name="bbva-type-text"]',
                            continueSecondStep: '[id="footerCotent"] [data-tag-name="bbva-button-default"]',
                            btnCancelNumCard: `${formInput} [data-tag-name="bbva-form-attach"] [data-tag-name="bbva-button-default"] [data-tag-name="bbva-type-icon"]`,
                            labelCaptureData: 'bbva-type-text[text="Ahora, captura tus datos de cliente:"]',
                            inputNumber: '[data-tag-name="bbva-form-number"][id="formInputPhoneNumber"] input',
                            dltNumber: '[data-tag-name="bbva-form-number"] [data-tag-name="bbva-button-default"] [data-tag-name="bbva-type-icon"]',
                            labelNumber: '[data-tag-name="bbva-form-number"] [data-tag-name="bbva-notification-help"]',
                            inputCardNumber: '[data-tag-name="bbva-form-number"][id="formInputCardNumber"] input, [data-tag-name="bbva-form-attach"] input:first-of-type',
                            dltCardNumber: '[data-tag-name="bbva-form-number"][id="formInputCardNumber"] [data-tag-name="bbva-button-default"] [data-tag-name="bbva-type-icon"], [data-tag-name="bbva-form-attach"] [data-tag-name="bbva-button-default"].clear [data-tag-name="bbva-type-icon"]',
                            labelCardNumber: '[data-tag-name="bbva-form-number"][id="formInputCardNumber"] [data-tag-name="bbva-notification-help"], [data-tag-name="bbva-form-attach"] [data-tag-name="bbva-notification-help"]',
                        },
                    },
                    step: {
                        properties: { root: 'div bbva-expandable-step.card-data' },
                        inputDateBorn: '[data-tag-name="content-customer-data"] [data-tag-name="bbva-form-input"][type="date"][value]',
                        btnContinueDateBorn: '[data-tag-name="content-customer-data"] [data-tag-name="bbva-button-default"][disabled]',
                        btnContinueDateBornEnabled: '[data-tag-name="content-customer-data"] [data-tag-name="bbva-button-default"][id="stepButton"]',
                        dataCardSummary: 'bbva-core-heading #headingLabel',
                        card: {
                            properties: { root: '[data-tag-name="content-card-data"]' },
                            labelSecurityData: '[data-tag-name="bbva-type-text"][id="textSecurityData"]',
                            inputCvv: '[data-tag-name="bbva-form-password"] input[aria-label="CVV"]',
                            dltCvv: `${formInput}[label="CVV"] [data-tag-name="bbva-button-default"].clear [data-tag-name="bbva-type-icon"]`,
                            labelThreeCvv: `${formInput}[label="CVV"] [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"] p`,
                            labelThreeCvvError: `${formInput}[label="CVV"] div.message.error [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"] p`,
                            inputNip: '[data-tag-name="bbva-form-password"] input[aria-label="NIP"]',
                            dltNip: '[data-tag-name="bbva-form-password"][label="NIP"] [data-tag-name="bbva-button-default"].clear [data-tag-name="bbva-type-icon"]',
                            labelFourNip: `${formInput}[label="NIP"] [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"] p`,
                            labelFourNipError: `${formInput}[label="NIP"] div.message.error [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"] p`,
                            btnContinueSummary: '[data-tag-name="bbva-button-default"][id="stepButton"]'
                        }
                    },
                    recovery: {
                        properties: { root: 'div bbva-expandable-step.recovery-method' },
                        methodSelected: 'div dl dt [data-tag-name="bbva-type-text"]',
                    }
                },
                expMulti: {
                    properties: { root: '[data-tag-name="bbva-expandable-step"][id="stepRecoveryMethodType"]' },
                    btnExitIdentify: 'bbva-expandable-multistep [data-tag-name="bbva-header-main"] [data-id="iconsRight"] button#btn-right-primary [data-tag-name="bbva-type-icon"]',
                    buttonChange: '#editButton',
                    buttonChangeMethod: 'bbva-expandable-multistep:last-of-type bbva-expandable-multistep [data-tag-name="bbva-link"]',
                },
                error: {
                    properties: { root: '[data-tag-name="bbva-expandable-step"][id="stepIdentification"] [data-tag-name="content-identification"].content' },
                    labelNumberError: '[data-tag-name="bbva-form-number"][id="formInputPhoneNumber"] div.message.error [data-tag-name="bbva-notification-help"].message-error [data-tag-name="bbva-type-text"]',
                    labelCardNumberError: '[data-tag-name="bbva-form-number"][id="formInputCardNumber"] [data-tag-name="bbva-notification-help"].message-error, [data-tag-name="bbva-form-attach"] .message.error [data-tag-name="bbva-notification-help"].message-error [data-tag-name="bbva-type-text"]'
                },
                modal: {
                    properties: { root: '[data-tag-name="akr-modal"]' },
                    first: {
                        properties: { root: '[data-tag-name="bbva-help-modal"].firstTwoAttemptsInformation' },
                        iconModalError: '#helpModalTitle [data-tag-name="bbva-type-icon"].title-icon',
                        textModal: '#helpModalContent div.slot-content [data-tag-name="bbva-type-text"]',
                        btnModalOk: 'div.content div.help-modal div.modal-main div.modal-footer div.slot-footer [data-tag-name="bbva-button-default"]'
                    },
                    third: {
                        properties: { root: '[data-tag-name="bbva-help-modal"].thirdAttemptInformation' },
                        headerErrorModal: '[data-tag-name="bbva-header-main"]#helpModalHeader [data-tag-name="bbva-type-text"][tag="h1"]',
                        btnXExitMany: '[data-tag-name="bbva-header-main"]#helpModalHeader [data-id="iconsRight"] button#btn-close [data-tag-name="bbva-type-icon"]',
                        iconWarningMany: '[data-tag-name="bbva-type-icon"].title-icon',
                        descriptionMany: 'div.content-thirdAttemptInformation [data-tag-name="bbva-type-text"]',
                        iconCall: 'div.content-thirdAttemptInformation [data-tag-name="bbva-button-row"] div#buttons span:first-of-type [data-tag-name="bbva-button-action"] [data-tag-name="bbva-type-icon"]',
                        iconLocation: 'div.content-thirdAttemptInformation [data-tag-name="bbva-button-row"] div#buttons span:last-of-type [data-tag-name="bbva-button-action"] [data-tag-name="bbva-type-icon"]',
                        btnExitMany: 'div.content div.help-modal div.modal-main div.modal-footer div.slot-footer [data-tag-name="bbva-button-default"]'
                    }
                }
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button of change':
                await (await (await this.waitForElementsExist(this.expMulti.buttonChange)).elements()).value[0].waitForDisplayed({timeout: config.wait.S});
                break;
            case 'method selected':
                await this.identifyYourself.recovery.methodSelected.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'label identify yourself':
                await this.identifyYourself.identification.labelIdentifyYourself.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'label capture your data':
                await this.identifyYourself.identification.content.labelCaptureData.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'number input':
                await this.identifyYourself.identification.content.inputNumber.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'label number':
                await this.identifyYourself.identification.content.labelNumber.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'label number error':
                await this.error.labelNumberError.waitForDisplayed({timeout: config.wait.L, reverse: value === 'disabled'});
                break;
            case 'card input':
                await this.identifyYourself.identification.content.inputCardNumber.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'label card input':
                await this.identifyYourself.identification.content.labelCardNumber.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'label card input error':
                await this.error.labelCardNumberError.waitForDisplayed({timeout: config.wait.L, reverse: value === 'disabled'});
                break;
            case 'label second step':
                await this.identifyYourself.identification.content.secondSteps.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'button continue identify':
                await (await this.identifyYourself.identification.content.continueSecondStep.waitForDisplayed({timeout: config.wait.L}))
                    .waitForEnabled({ timeout: config.wait.L, reverse: value === 'disabled' });
                break;
            case 'label data card number phone':
                await this.identifyYourself.identification.summaryIdentityCel.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'label data card number':
                await this.identifyYourself.identification.summaryIdentityCard.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'summary data card':
                await this.identifyYourself.step.dataCardSummary.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'label security':
                await this.identifyYourself.step.card.labelSecurityData.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'input cvv':
                await this.identifyYourself.step.card.inputCvv.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'label input cvv':
                await this.identifyYourself.step.card.labelThreeCvv.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'label input cvv error':
                await this.identifyYourself.step.card.labelThreeCvvError.waitForDisplayed({timeout: config.wait.L, reverse: value === 'false'});
                break;
            case 'input nip':
                await this.identifyYourself.step.card.inputNip.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'label input nip':
                await this.identifyYourself.step.card.labelFourNip.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'label input nip error':
                await this.identifyYourself.step.card.labelFourNipError.waitForDisplayed({timeout: config.wait.L, reverse: value === 'false'});
                break;
            case 'button continue summary':
                await (await this.identifyYourself.step.card.btnContinueSummary.waitForDisplayed({timeout: config.wait.L}))
                    .waitForEnabled({ timeout: config.wait.L, reverse: value === 'disabled' });
                break;
            case 'icon modal error':
                await this.modal.first.iconModalError.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'description error modal':
                await this.modal.first.textModal.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button understand modal':
                await this.modal.first.btnModalOk.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header error modal three times':
                await this.modal.third.headerErrorModal.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button x close':
                await this.modal.third.btnXExitMany.waitForDisplayed({timeout: config.wait.L });
                break;
            case 'icon warning three times':
                await this.modal.third.iconWarningMany.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'text description three times':
                await this.modal.third.descriptionMany.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'icon call':
                await this.modal.third.iconCall.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'icon location':
                await this.modal.third.iconLocation.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button exit modal':
                await this.modal.third.btnExitMany.waitForDisplayed({timeout: config.wait.L, reverse:this.isSpherica()});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async continueOption(option) {
        switch (option.toLowerCase()) {
            case 'identify card':
                await (await this.method.secondOption.waitForDisplayed({timeout: config.wait.L}));
                await (await this.method.secondOption.waitForClickable({timeout: config.wait.L})).click();
                await (await this.method.continueButton.waitForDisplayed({timeout: config.wait.L}));
                await (await this.method.continueButton.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'continue of identify':
                await (await this.identifyYourself.identification.content.continueSecondStep.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'continue of card data':
                await (await this.identifyYourself.step.card.btnContinueSummary.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'date born':
                await (await this.identifyYourself.step.btnContinueDateBornEnabled.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`The option: ${option} is not implemented`);
        }
    }
    async inputNumberAKR(number) {
        await (await this.identifyYourself.identification.content.inputNumber.waitForClickable({timeout: config.wait.L})).click();
        await this.identifyYourself.identification.content.inputNumber.setValue({value: number});
    }

    async inputCardNumberAKR(cardNumber) {
        await (await this.identifyYourself.identification.content.inputCardNumber.waitForClickable({timeout: config.wait.L})).click();
        await this.identifyYourself.identification.content.inputCardNumber.setValue({value: cardNumber});
    }

    async inputCvvAKR(cvv) {
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
        await this.identifyYourself.step.card.inputCvv.waitForDisplayed({timeout: config.wait.L});
        await this.identifyYourself.step.card.inputCvv.waitForAnimation({timeout: config.wait.L});
        await this.identifyYourself.step.card.inputCvv.waitForEnabled({timeout: config.wait.L});
        await (await this.identifyYourself.step.card.inputCvv.waitForClickable({ timeout: config.wait.L})).click();
        await this.identifyYourself.step.card.inputCvv.setValue({value: cvv});
    }

    async inputNipAKR(nip) {
        await (await this.identifyYourself.step.card.inputNip.waitForClickable({timeout: config.wait.L})).click();
        await this.identifyYourself.step.card.inputNip.setValue({value: nip});
    }

    async fillSummary(data) {
        const dateWr = global.user.dateBornWrong;
        switch (data.toLowerCase()) {
            case 'number and card':
                await this.inputNumberAKR(global.user.numberPhone);
                await this.inputCardNumberAKR(global.user.card);
                break;
            case 'cvv and nip':
                await this.inputCvvAKR(global.user.cvv);
                await this.inputNipAKR(global.user.nip);
                break;
            case 'number incomplete':
                await this.inputNumberAKR(global.user.numberPhoneLess);
                break;
            case 'card incomplete':
                await this.inputCardNumberAKR(global.user.cardLess);
                break;
            case 'cvv incomplete':
                await this.inputCvvAKR(global.user.cvvLess);
                break;
            case 'nip incomplete':
                await this.inputNipAKR(global.user.nipLess);
                break;
            case 'cvv and nip wrong':
                await this.inputCvvAKR(global.user.cvvWrong);
                await this.inputNipAKR(global.user.nipWrong);
                break;
            case 'number incorrect and card correct':
                await this.inputNumberAKR(global.user.numberPhoneLess);
                await this.inputCardNumberAKR(global.user.card);
                break;
            case 'number correct and card incorrect':
                await this.inputNumberAKR(global.user.numberPhone);
                await this.inputCardNumberAKR(global.user.cardLess);
                break;
            case 'cvv incorrect and nip correct':
                await this.inputCvvAKR(global.user.cvvLess);
                await this.inputNipAKR(global.user.nip);
                break;
            case 'cvv correct and nip incorrect':
                await this.inputCvvAKR(global.user.cvv);
                await this.inputNipAKR(global.user.nipLess);
                break;
            case 'wrong date born':
                await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
                await this.identifyYourself.step.inputDateBorn.waitForDisplayed({timeout: config.wait.L});
                await this.identifyYourself.step.inputDateBorn.waitForAnimation({timeout: config.wait.L});
                await this.identifyYourself.step.inputDateBorn.waitForEnabled({timeout: config.wait.L});
                await this.identifyYourself.step.inputDateBorn.execute({script: (value) => { this.value = value; }, args: [dateWr]});
                await this.identifyYourself.step.btnContinueDateBorn.execute({script: () => this.removeAttribute('disabled')});
                break;
            default:
                throw new Error(`The option: ${data} is not implemented`);
        }
    }

    async editNumbers(option) {
        switch (option.toLowerCase()) {
            case 'number correct':
                await (await this.identifyYourself.identification.content.inputNumber.waitForClickable({timeout: config.wait.L})).click();
                await (await this.identifyYourself.identification.content.dltNumber.waitForClickable({timeout: config.wait.L})).click();
                await this.identifyYourself.identification.content.inputNumber.setValue({value: global.user.numberPhone});
                break;
            case 'card correct':
                await (await this.identifyYourself.identification.content.inputCardNumber.waitForClickable({timeout: config.wait.L})).click();
                await (await this.identifyYourself.identification.content.dltCardNumber.waitForClickable({timeout: config.wait.L})).click();
                await this.identifyYourself.identification.content.inputCardNumber.setValue({value: global.user.card});
                break;
            case 'cvv correct':
                await (await this.identifyYourself.step.card.inputCvv.waitForClickable({timeout: config.wait.L})).click();
                await (await this.identifyYourself.step.card.dltCvv.waitForClickable({timeout: config.wait.L})).click();
                await this.identifyYourself.step.card.inputCvv.setValue({value: global.user.cvv});
                break;
            case 'nip correct':
                await (await this.identifyYourself.step.card.inputNip.waitForClickable({timeout: config.wait.L})).click();
                await (await this.identifyYourself.step.card.dltNip.waitForClickable({timeout: config.wait.L})).click();
                await this.identifyYourself.step.card.inputNip.setValue({value: global.user.nip});
                break;
            default:
                throw new Error(`The option: ${option} is not implemented`);
        }
    }

    async tryingProcess(retries = 4) {
        for (let i = 0; i < retries; i++) {
            if (i < 3) {
                await (await this.identifyYourself.step.card.btnContinueSummary.waitForDisplayed({timeout: config.wait.L})).click();
                await (await this.modal.first.btnModalOk.waitForDisplayed({timeout: config.wait.L})).click();
            } else {
                await (await this.identifyYourself.step.card.btnContinueSummary.waitForDisplayed({timeout: config.wait.L})).click();
            }
        }
    }

    async exitOperative(option) {
        switch (option.toLowerCase()) {
            case 'three times modal':
                await (await this.modal.third.btnExitMany.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`The option: ${option} is not implemented`);
        }
    }

    async goBack() {
        await (await this.closeButton.waitForDisplayed({timeout: config.wait.L})).click();
    }

    async closeOperative() {
        await this.signModal.closeModal();
    }
}

export default new AccessKeyRecovery();
