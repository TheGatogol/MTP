import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('insuranceDelayedPayment')
class InsuranceDelayedPayment extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-insuranceDelayedPayment[state="active"]',
            elements: {
                modalInsuranceDelayedPayment: {
                    properties: {
                        root: '[data-tag-name="insurance-transaction-servicing-insurance-delayed-payment"]'
                    },
                    onboardingCloseBtn: '[data-tag-name="insurance-payment-onboarding-page"] [data-tag-name="bbva-header-main"] #btn-close',
                    onboardingBtn: '[data-tag-name="insurance-payment-onboarding-page"] div.bottom-content [data-tag-name="bbva-button-default"]',
                    multistepCloseBtn: 'section #multistepHeader header div.header-icons #btn-close',
                    insurancesMultiStep: {
                        properties: {
                            root: '[data-tag-name="insurances-payments-multistep"]'
                        },
                        pendingPayment: '#step-3 #insuranceProductPayment #pendingPayment',
                        pendingPaymentAndDirectDebit: '#endorsmentPayment',
                        continuePaymentMethod: '#insuranceProductPayment [data-tag-name="bbva-button-default"]',
                        confirmPaymentInsurance: 'div[slot="slot-content"] [data-tag-name="bbva-expandable-multistep"] div.confirm-step div [data-tag-name="bbva-button-default"]',
                        insufficientBalance: '[data-tag-name="bbva-expandable-multistep"] #step-2 #insurancePaymentMethod #accordionA .ac-content-padding [data-tag-name="bbva-type-link"] [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"][text="Tu saldo es insuficiente para realizar el pago."]',
                        accordionElement: '#accordionC',
                        accordionAElement: '#accordionA',
                        accordion: {
                            properties: {
                                root: '#accordionC'
                            },
                            tdcSeeMoreLink: '.align-items [data-tag-name="bbva-type-link"]',
                            tdcSelected: '[data-tag-name="bbva-type-link"] [data-tag-name="bbva-type-text"][text="__ID__"]',
                        },
                        accordionA: {
                            properties: {
                                root: '#accordionA'
                            },
                            accountSeeMoreLink: '.align-items [data-tag-name="bbva-type-link"]',
                            productSelect: '[data-tag-name="bbva-type-link"] [data-tag-name="bbva-type-text"][text="__ID__"]',
                        },
                        step4: {
                            properties: {
                                root: '#step-4 '
                            },
                            contractualCheckbox: '[data-tag-name="insurance-payment-conditions"] [data-tag-name="bbva-form-checkbox"]',
                            contractualBtn: '[data-tag-name="bbva-button-default"]',
                            contractualPdfLink: '.main [data-tag-name="bbva-type-link"]',
                            contractualMoreInformation: '[data-tag-name="bbva-type-link"]',
                        },
                    },
                    successfulPayment: {
                        properties: {
                            root: '[data-tag-name="insurance-payment-successful-payment"] [data-tag-name="bbva-help-modal"]'
                        },
                        receiptHeader: '[data-tag-name="bbva-header-main"] #helpModalHeader',
                        receiptCloseBtn: '[data-tag-name="bbva-header-main"] #btn-close',
                        icon: '.top-content .content-icon',
                        amount: '.top-content [data-tag-name="bbva-type-amount"]',
                        summary: '[data-tag-name="summary-insurance-info-element"]',
                        email: '[data-tag-name="bbva-panel-container"] #userEmail',
                        shareBtn: '[data-tag-name="bbva-button-row"] #buttons [data-tag-name="bbva-button-action"]',
                    },
                    customModal: {
                        properties: {
                            root: '[data-tag-name="insurance-transaction-servicing-insurance-delayed-payment-custom-modal"] [data-tag-name="bbva-help-modal"]'
                        },
                        retryModalError: '[data-tag-name="bbva-button-default"]',
                        paidPolicy: '[data-tag-name="bbva-type-text"] h2.text.lines',
                        communicationInterrupted: 'div.help-modal div.modal-main #helpModalTitle [data-tag-name="bbva-type-text"]',
                        headerOutOfTimeModal: '[data-tag-name="bbva-header-main"][text="Pagar Seguro"]',
                        mainTextOutOfTimeModal: '[data-tag-name="bbva-type-text"] h2.text.lines'
                    },
                    outTimeModal: '[data-tag-name="insurance-transaction-servicing-insurance-delayed-payment-custom-modal"] [data-tag-name="bbva-help-modal"][full-height] [data-tag-name="bbva-button-default"]',
                    leaveProccesModal: '[data-tag-name="insurances-payments-multistep"] #multiStepModal [data-tag-name="bbva-help-modal"] div .slot-footer [data-tag-name="bbva-button-default"][text="Salir"]',
                    continueProccesModal: '[data-tag-name="insurances-payments-multistep"] #multiStepModal [data-tag-name="bbva-help-modal"] div .slot-footer bbva-button-default.footer-button.link',
                },
            },
            requiredElements: [
                'modalInsuranceDelayedPayment',
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'onboarding exit button':
                await this.modalInsuranceDelayedPayment.onboardingCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'out of time exit button':
                if (!await this.modalInsuranceDelayedPayment.outTimeModal.waitForDisplayed({timeout: config.wait.M, failOnError: false})) {
                    await this.modalInsuranceDelayedPayment.outTimeModal.scrollIntoView();
                }
                await this.modalInsuranceDelayedPayment.outTimeModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button to exit':
                await this.modalInsuranceDelayedPayment.leaveProccesModal.scrollIntoView();
                if (!await this.modalInsuranceDelayedPayment.leaveProccesModal.waitForDisplayed({timeout: config.wait.M, failOnError: false})) {
                    await this.modalInsuranceDelayedPayment.leaveProccesModal.scrollIntoView();
                }
                await this.modalInsuranceDelayedPayment.leaveProccesModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button to continue':
                await this.modalInsuranceDelayedPayment.continueProccesModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit cards':
                await this.modalInsuranceDelayedPayment.tdcSelected.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accounts':
                await this.modalInsuranceDelayedPayment.insurancesMultiStep.accordionA.productSelect.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insufficient balance':
                await this.modalInsuranceDelayedPayment.insurancesMultiStep.insufficientBalance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'communication interrupted':
                if (!await this.modalInsuranceDelayedPayment
                    .customModal.communicationInterrupted.waitForDisplayed({timeout: config.wait.M, failOnError: false})) {
                    await this.modalInsuranceDelayedPayment.customModal.communicationInterrupted.scrollIntoView();
                }
                await this.modalInsuranceDelayedPayment.customModal.communicationInterrupted.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header out of time':
                if (!await this.modalInsuranceDelayedPayment
                    .customModal.headerOutOfTimeModal.waitForDisplayed({timeout: config.wait.M, failOnError: false})) {
                    await this.modalInsuranceDelayedPayment.customModal.headerOutOfTimeModal.scrollIntoView();
                }
                await this.modalInsuranceDelayedPayment.customModal.headerOutOfTimeModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main text out of time':
                await this.modalInsuranceDelayedPayment.customModal.mainTextOutOfTimeModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pdf':
                await this.modalInsuranceDelayedPayment.insurancesMultiStep.step4.contractualPdfLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information':
                await this.modalInsuranceDelayedPayment.insurancesMultiStep.step4.contractualMoreInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'view all cards':
                await this.modalInsuranceDelayedPayment.insurancesMultiStep.accordion.tdcSeeMoreLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'view all accounts':
                await this.modalInsuranceDelayedPayment.insurancesMultiStep.accordionA.accountSeeMoreLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal paid policy':
                await this.modalInsuranceDelayedPayment.customModal.paidPolicy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt close button':
                await this.modalInsuranceDelayedPayment.successfulPayment.receiptCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt icon':
                if (!await this.modalInsuranceDelayedPayment.successfulPayment.icon.waitForDisplayed({timeout: config.wait.M, failOnError: false})) {
                    await this.modalInsuranceDelayedPayment.successfulPayment.icon.scrollIntoView();
                }
                await this.modalInsuranceDelayedPayment.successfulPayment.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt amount':
                await this.modalInsuranceDelayedPayment.successfulPayment.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt summary':
                await this.modalInsuranceDelayedPayment.successfulPayment.summary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt email':
                await this.modalInsuranceDelayedPayment.successfulPayment.email.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt share button':
                await this.modalInsuranceDelayedPayment.successfulPayment.shareBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async confirmOnBoarding() {
        await (await this.modalInsuranceDelayedPayment.onboardingBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectClosePayInsurance() {
        await (await this.modalInsuranceDelayedPayment.multistepCloseBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async validateLeaveModalButtons(option) {
        switch(option){
            case 'Exit':
                await (await this.modalInsuranceDelayedPayment.leaveProccesModal.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'Continue':
                await (await this.modalInsuranceDelayedPayment.continueProccesModal.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`Option "${option}" not recognized`);
        }
    }

    async selectPaymentType(type) {
        switch (type) {
            case 'my cards':
                await (await this.modalInsuranceDelayedPayment.insurancesMultiStep.accordionElement.waitForDisplayed({timeout: config.wait.M})).click();
                await (await this.modalInsuranceDelayedPayment.insurancesMultiStep.accordion.tdcSelected
                    .specifySelector({placeholder: '__ID__', value: global.user.notifications.tdc})
                    .waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'my accounts':
                await (await this.modalInsuranceDelayedPayment.insurancesMultiStep.accordionAElement.waitForDisplayed({timeout: config.wait.XL})).click();
                await (await this.modalInsuranceDelayedPayment.insurancesMultiStep.accordionA.productSelect
                    .specifySelector({placeholder: '__ID__', value: global.user.notifications.product})
                    .waitForDisplayed({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`Option "${type}" not recognized`);
        }
    }

    async selectPaymentMethod(method) {
        switch (method) {
            case 'pending payment':
                await (await this.modalInsuranceDelayedPayment.insurancesMultiStep.pendingPayment.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'pending payment and direct debit':
                await (await this.modalInsuranceDelayedPayment
                    .insurancesMultiStep.pendingPaymentAndDirectDebit.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`Option "${method}" not recognized`);
        }
        await (await this.modalInsuranceDelayedPayment.insurancesMultiStep.continuePaymentMethod.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectViewAllTdcButton(type) {
        switch (type) {
            case 'my credit cards':
                await (await this.modalInsuranceDelayedPayment.insurancesMultiStep.accordionElement.waitForDisplayed({timeout: config.wait.M})).click();
                await (await this.modalInsuranceDelayedPayment
                    .insurancesMultiStep.accordion.tdcSeeMoreLink.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'my accounts':
                await (await this.modalInsuranceDelayedPayment.insurancesMultiStep.accordionAElement.waitForDisplayed({timeout: config.wait.M})).click();
                await (await this.modalInsuranceDelayedPayment
                    .insurancesMultiStep.accordionA.accountSeeMoreLink.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${type} type is not implemented`);
        }
    }

    async authorizePendingPayment() {
        await (await this.modalInsuranceDelayedPayment.insurancesMultiStep.step4.contractualCheckbox.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.modalInsuranceDelayedPayment.insurancesMultiStep.step4.contractualBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async accessTermsAndConditionsInformation(linkType, paymentType) {
        switch (paymentType) {
            case 'accounts':
                if(linkType === 'PDF'){
                    await(await this.modalInsuranceDelayedPayment
                        .insurancesMultiStep.step4.contractualPdfLink.waitForDisplayed({timeout: config.wait.M})).click();
                }else if(linkType === 'Informacion'){
                    await(await this.modalInsuranceDelayedPayment
                        .insurancesMultiStep.step4.contractualMoreInformation.waitForDisplayed({timeout: config.wait.M})).click();
                }
                break;
            case 'credit cards':
                await(await this.modalInsuranceDelayedPayment
                    .insurancesMultiStep.step4.contractualPdfLink.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${paymentType} paymentType is not implemented`);
        }
    }

    async confirmInsurancePayment() {
        await (await this.modalInsuranceDelayedPayment.insurancesMultiStep.confirmPaymentInsurance.waitForDisplayed({timeout: config.wait.XL})).click();
        await this.fillOtp('11111111');
    }

    async selectRetry() {
        await(await this.modalInsuranceDelayedPayment.customModal.retryModalError.waitForDisplayed({timeout: config.wait.M})).click();
    }
}

export default new InsuranceDelayedPayment();
