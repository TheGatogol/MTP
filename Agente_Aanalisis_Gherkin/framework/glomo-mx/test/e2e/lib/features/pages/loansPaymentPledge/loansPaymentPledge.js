import AbstractGlomoPage from '../abstract-glomo-page';
import {Commands, page, ScreenValidationKeyNotFound} from '@csqe/radish';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page('loansPaymentPledge')
class LoansPaymentPledge extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-loansPaymentPledge[state="active"]',
            elements: {
                controllerComponent: 'bbva-controller-notification-detail',
                payCreditPage: {
                    properties: {
                        root: '[data-tag-name="loan-and-mortgage-transaction-servicing-payment-pledge"] [data-tag-name="loan-and-mortgage-transaction-servicing-payment-pledge-pay-credit"]'
                    },
                    helpModal: {
                        properties: {
                            root: '[data-tag-name="bbva-help-modal"]'
                        },
                        header: {
                            properties: {
                                root: '#helpModalHeader'
                            },
                            headerTitle: '#heading',
                            closeButton: '#btn-close'
                        },
                        notificationMessage: 'div [data-tag-name="bbva-notification-message"]',
                        terminationListSimple: {
                            properties: {
                                root: 'div div [data-tag-name="loan-and-mortgage-transaction-servicing-payment-pledge-list-simple"]:nth-child(1)'
                            },
                            text: '[data-tag-name="bbva-type-text"]',
                        },
                        receiptListSimple: '[data-tag-name="loan-and-mortgage-transaction-servicing-payment-pledge-list-simple"]:nth-child(2)',
                        pendingPaymentListSimple: '[data-tag-name="loan-and-mortgage-transaction-servicing-payment-pledge-list-simple"]:nth-child(3)',
                        totalListSimple: '[data-tag-name="loan-and-mortgage-transaction-servicing-payment-pledge-list-simple"]:nth-child(4)',
                        limitDateListSimple: '[data-tag-name="loan-and-mortgage-transaction-servicing-payment-pledge-list-simple"]:nth-child(5)',
                        helpNotification: '[data-tag-name="bbva-notification-help"]',
                        buttonRow: {
                            properties: {
                                root: '#actions #buttons'
                            },
                            payNow: 'span:nth-child(1) bbva-button-action .label-container bbva-type-text',
                            paymentPledge: 'span:nth-child(2) bbva-button-action .label-container bbva-type-text'
                        },
                        listOffer: {
                            properties: {
                                root: '[data-tag-name="loan-and-mortgage-transaction-servicing-payment-pledge-list-offer"]'
                            },
                            offerTitle: '[data-tag-name="bbva-type-text"]:nth-child(1)',
                            offerDescription: '[data-tag-name="bbva-type-text"]:nth-child(2)',
                            offerLink: '[data-tag-name="bbva-type-link"]'
                        }
                    },
                },
                multistepPage: {
                    properties: {
                        root: '[data-tag-name="loan-and-mortgage-transaction-servicing-payment-pledge"] [data-tag-name="loan-and-mortgage-transaction-servicing-payment-pledge-multistep"]'
                    },
                    multistepModal: {
                        properties: {
                            root: '[data-tag-name="bbva-help-modal"]'
                        },
                        header: {
                            properties: {
                                root: '.modal-header [data-tag-name="bbva-header-main"]'
                            },
                            headerTitle: '#heading',
                            closeButton: '#btn-close'
                        },
                        multistep: {
                            properties: {
                                root: '[data-tag-name="bbva-expandable-multistep"]'
                            },
                            detailStepTitle: '[data-tag-name="bbva-expandable-step"][completed] div.header #heading [data-tag-name="bbva-type-text"]#headingLabel .text',
                            paymentDateStep: {
                                properties: {
                                    root: '[data-tag-name="bbva-expandable-step"]#payment-pledge-step'
                                },
                                stepFirstDate: 'bbva-form-container [value="2025-09-10"]',
                                stepSecondDate: 'bbva-form-container [value="2025-09-11"]',
                                stepThirdDate: 'bbva-form-container [value="2025-09-12"]',
                                stepContinue: 'div.button-container [data-tag-name="bbva-button-default"]',
                            },
                            collapsedDateStep: {
                                properties: {
                                    root: '[data-tag-name="bbva-expandable-step"]#payment-pledge-step[completed]'
                                },
                                stepTitle: 'div.header #heading [data-tag-name="bbva-type-text"]#headingLabel .text',
                                editLink: '#editButton',
                            },
                            amountStep: {
                                properties: {
                                    root: '[data-tag-name="bbva-expandable-step"]#payment-type-step'
                                },
                                stepMonthlyPay: 'bbva-form-container [value="monthlyPayment"]',
                                stepSettleDebt: 'bbva-form-container [value="payoff"]',
                                stepOtherAmount: 'bbva-form-container [value="otherAmount"]',
                                stepContinue: 'div.button-container [data-tag-name="bbva-button-default"]',
                                otherAmount: {
                                    properties: {
                                        root: 'bbva-form-container [value="otherAmount"]',
                                    },
                                    input: 'input',
                                    listSimpleTotal: '[data-tag-name="loan-and-mortgage-transaction-servicing-payment-pledge-list-simple"]',
                                    formContent: {
                                        properties: {
                                            root: 'div.content-area [data-tag-name="bbva-form-input"]'
                                        },
                                        formInput: {
                                            properties: {
                                                root: '[data-tag-name="bbva-form-amount"]'
                                            },
                                            description: '#labelOutText',
                                            alert: '[data-tag-name="bbva-notification-help"][variant="alert"]',
                                            info: '[data-tag-name="bbva-notification-help"][variant="info"]',
                                            deleteButton: '[data-tag-name="bbva-button-default"]',
                                            inputText: '[data-tag-name="bbva-type-text"]'
                                        }
                                    }
                                },
                                notificationMessage: '[data-tag-name="bbva-notification-message"]',
                            },
                            collapsedAmountStep: {
                                properties: {
                                    root: '[data-tag-name="bbva-expandable-step"]#payment-type-step[completed]'
                                },
                                stepTitle: 'div.header #heading [data-tag-name="bbva-type-text"]#headingLabel .text',
                                editLink: '#editButton'
                            },
                            confirmPromisePanel: {
                                properties: {
                                    root: '.confirm-step'
                                },
                                confirmLabel: '[data-tag-name="bbva-type-text"]',
                                confirmAmount: '[data-tag-name="bbva-type-amount"]',
                                confirmButton: '[data-tag-name="bbva-button-default"]'
                            }
                        }
                    },
                    modalManager: {
                        properties: {
                            root: '[data-tag-name="loan-and-mortgage-transaction-servicing-payment-pledge-modal-manager"]'
                        },
                        helpModal: {
                            properties: {
                                root: '[data-tag-name="bbva-help-modal"]'
                            },
                            errorModalIcon: '[data-tag-name="bbva-type-icon"]',
                            errorModalTitle: '[data-tag-name="bbva-type-text"]',
                            errorModalDescription: '#helpModalContent [data-tag-name="bbva-type-text"]',
                            errorModalRetryButton: '[data-tag-name="bbva-button-default"]',
                            exitButtonConfirm: 'div div.content div div.modal-main div.modal-footer slot div bbva-button-default:nth-child(1)',
                            exitButtonContinue: 'div div.content div div.modal-main div.modal-footer slot div bbva-button-default[variant="link"]'
                        }
                    }
                },
                successPage: {
                    properties: {
                        root: '[data-tag-name="loan-and-mortgage-transaction-servicing-payment-pledge-success"]'
                    },
                    helpModal: {
                        properties: {
                            root: '[data-tag-name="bbva-help-modal"]'
                        },
                        header: {
                            properties: {
                                root: '#helpModalHeader'
                            },
                            headerTitle: '#heading #text',
                            closeButton: '#btn-close'
                        },
                        successTitle: 'div.content div.panel-process [size="2XL"]',
                        successAmountText: 'div.content div.panel-process [size="M"]',
                        detailTitle: 'div.content div.panel-container [data-tag-name="loan-and-mortgage-transaction-servicing-payment-pledge-list-simple"]',
                        message: 'div.content [data-tag-name="bbva-notification-message"]'
                    },
                },
                errorModal: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            title: 'div.paragraph-template h2:not([style="display: none;"])',
                            acceptBtn: 'div.buttons-container cells-st-button-spherica #acceptButton',
                            closeBtn: 'cells-alert-box-spherica[opened] #header button.btn-close',
                        }
                    }
                ]
            },
            requiredElements: [
                'root',
            ]
        });
    }

    async createPushNotificationInfo() {
        await Commands.pause({time: config.wait.S});
        const {payloadPushNotification} = global.user;

        await this.controllerComponent.execute({
            script: (data) => { this.pushNotificationDetail = data; },
            args: [payloadPushNotification]
        });
    }

    async createErrorPushNotificationInfo() {
        await Commands.pause({time: config.wait.S});
        const {errorPayloadPushNotification} = global.user;

        await this.controllerComponent.execute({
            script: (data) => { this.pushNotificationDetail = data; },
            args: [errorPayloadPushNotification]
        });
    }

    async openPaymentPledgeOption() {
        await this.payCreditPage.helpModal.buttonRow.paymentPledge.waitForClickable({timeout: config.wait.M});
        await this.payCreditPage.helpModal.buttonRow.paymentPledge.click();
    }

    async openOffer() {
        await this.payCreditPage.helpModal.listOffer.offerLink.waitForClickable({timeout: config.wait.M});
        await this.payCreditPage.helpModal.listOffer.offerLink.click();
    }

    async openPaymentOption() {
        await this.payCreditPage.helpModal.buttonRow.payNow.waitForClickable({timeout: config.wait.M});
        await this.payCreditPage.helpModal.buttonRow.payNow.click();
    }
    async confirmPledgeCreation() {
        await this.multistepPage.multistepModal.multistep.confirmPromisePanel.confirmButton.waitForDisplayed({timeout: config.wait.M});
        await this.multistepPage.multistepModal.multistep.confirmPromisePanel.confirmButton.waitForClickable({timeout: config.wait.M});
        await this.multistepPage.multistepModal.multistep.confirmPromisePanel.confirmButton.click();
    }

    async retryPledgeCreation(times) {
        for(let i=0; i<times; i++){
            await this.multistepPage.modalManager.helpModal.errorModalRetryButton.waitForClickable({timeout: config.wait.M});
            await this.multistepPage.modalManager.helpModal.errorModalRetryButton.click();
        }
    }

    async retryPaymentNavigation(times) {
        for(let i=0; i<times; i++){
            await this.errorModal.additionalElements.acceptBtn.waitForClickable({timeout: config.wait.M});
            await this.errorModal.additionalElements.acceptBtn.click();
        }
    }

    async selectDateRadio() {
        await this.multistepPage.multistepModal.multistep.paymentDateStep.stepSecondDate.waitForClickable({timeout: config.wait.S});
        await this.multistepPage.multistepModal.multistep.paymentDateStep.stepSecondDate.click();
    }

    async selectFirstDate() {
        await this.multistepPage.multistepModal.multistep.paymentDateStep.stepFirstDate.waitForClickable({timeout: config.wait.S});
        await this.multistepPage.multistepModal.multistep.paymentDateStep.stepFirstDate.click();
    }

    async selectPaymentDate() {
        await this.multistepPage.multistepModal.multistep.paymentDateStep.stepSecondDate.waitForClickable({timeout: config.wait.S});
        await this.multistepPage.multistepModal.multistep.paymentDateStep.stepSecondDate.click();
    }

    async confirmPaymentDate() {
        await this.multistepPage.multistepModal.multistep.paymentDateStep.stepContinue.waitForClickable({timeout: config.wait.M});
        await this.multistepPage.multistepModal.multistep.paymentDateStep.stepContinue.click();
    }

    async selectLastDate() {
        await this.multistepPage.multistepModal.multistep.paymentDateStep.stepThirdDate.waitForClickable({timeout: config.wait.S});
        await this.multistepPage.multistepModal.multistep.paymentDateStep.stepThirdDate.click();
    }

    async selectSingleDate() {
        await this.multistepPage.multistepModal.multistep.paymentDateStep.stepContinue.waitForClickable({timeout: config.wait.M});
        await this.multistepPage.multistepModal.multistep.paymentDateStep.stepContinue.click();
    }

    async modifyDate() {
        await this.multistepPage.multistepModal.multistep.collapsedDateStep.editLink.click();
        await this.multistepPage.multistepModal.multistep.paymentDateStep.stepFirstDate.waitForClickable({timeout: config.wait.S});
        await this.multistepPage.multistepModal.multistep.paymentDateStep.stepFirstDate.click();
        await this.multistepPage.multistepModal.multistep.paymentDateStep.stepContinue.waitForClickable({timeout: config.wait.M});
        await this.multistepPage.multistepModal.multistep.paymentDateStep.stepContinue.click();
    }

    async selectMonthly() {
        await this.multistepPage.multistepModal.multistep.amountStep.stepMonthlyPay.waitForClickable({timeout: config.wait.M});
        await this.multistepPage.multistepModal.multistep.amountStep.stepMonthlyPay.click();
    }

    async selectPayOff() {
        await this.multistepPage.multistepModal.multistep.amountStep.stepSettleDebt.waitForClickable({timeout: config.wait.S});
        await this.multistepPage.multistepModal.multistep.amountStep.stepSettleDebt.click();
    }

    async selectOtherAmount(amount = 1000) {
        await this.multistepPage.multistepModal.multistep.amountStep.stepOtherAmount.waitForClickable({timeout: config.wait.S});
        await this.multistepPage.multistepModal.multistep.amountStep.stepOtherAmount.click();
        await this.multistepPage.multistepModal.multistep.amountStep.otherAmount.input.setValue({value: amount, forceFocus: false});
        await this.multistepPage.multistepModal.multistep.amountStep.notificationMessage.click();
    }

    async confirmAmount () {
        await this.multistepPage.multistepModal.multistep.amountStep.stepContinue.waitForClickable({timeout: config.wait.M});
        await this.multistepPage.multistepModal.multistep.amountStep.stepContinue.click();
    }

    async createSingleDatePledge() {
        await this.selectSingleDate();
        await this.selectPayOff();
        await this.confirmAmount();
        await this.confirmPledgeCreation();
    }

    async selectPaymentPledgeAndDateRadio() {
        await this.openPaymentPledgeOption();
        await this.selectPaymentDate();
    }

    async openPaymentPledgeOptionAndConfirmDate() {
        await this.openPaymentPledgeOption();
        await this.selectPaymentDate();
        await this.confirmPaymentDate();
    }

    async createPledge() {
        await this.selectPaymentDate();
        await this.confirmPaymentDate();
        await this.confirmAmount();
        await this.confirmPledgeCreation();
    }

    async selectFirstDateAndConfirmMonthly() {
        await this.openPaymentPledgeOption();
        await this.selectFirstDate();
        await this.confirmPaymentDate();
        await this.selectMonthly();
        await this.confirmAmount();
    }

    async selectLastDateAndCreateWithPayOff() {
        await this.openPaymentPledgeOption();
        await this.selectLastDate();
        await this.confirmPaymentDate();
        await this.selectPayOff();
        await this.confirmAmount();
        await this.confirmPledgeCreation();
    }

    async createOtherAmountPledge() {
        await this.openPaymentPledgeOption();
        await this.selectPaymentDate();
        await this.confirmPaymentDate();
        await this.selectOtherAmount();
        await this.confirmAmount();
        await this.confirmPledgeCreation();
    }

    async createPledgeModifyingOtherAmount() {
        await this.openPaymentPledgeOption();
        await this.selectPaymentDate();
        await this.confirmPaymentDate();
        await this.selectOtherAmount();
        await this.confirmAmount();
        await this.selectEditAmount();
        await this.selectOtherAmount(2000);
        await this.confirmAmount();
        await this.confirmPledgeCreation();
    }

    async cratePledgeAndRetry() {
        await this.selectPaymentDate();
        await this.confirmPaymentDate();
        await this.confirmAmount();
        await this.confirmPledgeCreation();
        await this.retryPledgeCreation(3);
    }

    async createPledgeModifyingDate() {
        await this.openPaymentPledgeOption();
        await this.selectPaymentDate();
        await this.confirmPaymentDate();
        await this.confirmAmount();
        await this.modifyDate();
    }
    async fillPaymentPledgeFormPaymentType(type) {
        await this.openPaymentPledgeOption();
        await this.selectPaymentDate();
        await this.confirmPaymentDate();
        switch(type) {
            case 'receipt amount':
                await this.confirmAmount();
                break;
            case 'pay off':
                await this.selectPayOff();
                await this.confirmAmount();
                break;
            default:
                throw new Error(`Unknown payment type option: ${type}`);
        }
    }

    async fillPaymentPledgeFormOtherAmount(amount) {
        await this.openPaymentPledgeOption();
        await this.selectLastDate();
        await this.confirmPaymentDate();
        switch(amount) {
            case 'more than total':
                await this.fillMoreThanTotal();
                break;
            case 'less than one':
                await this.fillLessThanOne();
                break;
            case 'amount and delete':
                await this.fillAmountAndDelete();
                break;
            default:
                throw new Error(`Unknown payment type option: ${amount}`);
        }
    }

    async changeAmountTo(type) {
        switch(type) {
            case 'payOff':
                await this.confirmAmount();
                await this.selectEditAmount();
                await this.selectPayOff();
                await this.confirmAmount();
                await this.confirmPledgeCreation();
                break;
            case 'monthly':
                await this.selectPayOff();
                await this.confirmAmount();
                await this.selectEditAmount();
                await this.selectMonthly();
                await this.confirmAmount();
                break;
            case 'otherAmount':
                await this.confirmAmount();
                await this.selectEditAmount();
                await this.selectOtherAmount();
                await this.confirmAmount();
                break;
            default:
                throw new Error(`Unknown payment type option: ${type}`);
        }
    }

    async selectEditAmount () {
        await this.multistepPage.multistepModal.multistep.collapsedAmountStep.editLink.click();
    }

    async closeMultistep () {
        await this.multistepPage.multistepModal.header.closeButton.click();
    }

    async confirmExitMultistep () {
        await this.multistepPage.modalManager.helpModal.exitButtonConfirm.click();
    }

    async cancelExitMultistep () {
        await this.multistepPage.modalManager.helpModal.exitButtonContinue.click();
    }

    async fillMoreThanTotal() {
        await this.multistepPage.multistepModal.multistep.amountStep.stepOtherAmount.waitForClickable({timeout: config.wait.S});
        await this.multistepPage.multistepModal.multistep.amountStep.stepOtherAmount.click();
        await this.multistepPage.multistepModal.multistep.amountStep.otherAmount.input.setValue({value: 10000, forceFocus: false});
        await this.multistepPage.multistepModal.multistep.amountStep.notificationMessage.click();
    }

    async fillLessThanOne() {
        await this.multistepPage.multistepModal.multistep.amountStep.stepOtherAmount.waitForClickable({timeout: config.wait.S});
        await this.multistepPage.multistepModal.multistep.amountStep.stepOtherAmount.click();
        await this.multistepPage.multistepModal.multistep.amountStep.otherAmount.input.setValue({value: 0.5, forceFocus: false});
        await this.multistepPage.multistepModal.multistep.amountStep.notificationMessage.click();
    }

    async fillAmountAndDelete() {
        await this.multistepPage.multistepModal.multistep.amountStep.stepOtherAmount.waitForClickable({timeout: config.wait.S});
        await this.multistepPage.multistepModal.multistep.amountStep.stepOtherAmount.click();
        await this.multistepPage.multistepModal.multistep.amountStep.otherAmount.input.setValue({value: 1000, forceFocus: false});
        await this.multistepPage.multistepModal.multistep.amountStep.notificationMessage.click();
        await this.multistepPage.multistepModal.multistep.amountStep.otherAmount.formContent.formInput.deleteButton.waitForClickable({timeout: config.wait.M});
        await this.multistepPage.multistepModal.multistep.amountStep.otherAmount.formContent.formInput.deleteButton.click();
        await this.multistepPage.multistepModal.multistep.amountStep.notificationMessage.click();
    }

    async _screenValidation({item}) {
        let element;
        switch (item.toLowerCase()) {
            case 'header title':
                await this.payCreditPage.helpModal.header.headerTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'header close button':
                await this.payCreditPage.helpModal.header.closeButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'notification message':
                await this.payCreditPage.helpModal.notificationMessage.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'loan termination':
                await this.payCreditPage.helpModal.terminationListSimple.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'current receipt':
                await this.payCreditPage.helpModal.receiptListSimple.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'pending payment':
                await this.payCreditPage.helpModal.pendingPaymentListSimple.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'total debt':
                await this.payCreditPage.helpModal.totalListSimple.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'limit date':
                await this.payCreditPage.helpModal.limitDateListSimple.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'help message':
                await this.payCreditPage.helpModal.helpNotification.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'pay now button':
                await this.payCreditPage.helpModal.buttonRow.payNow.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'payment pledge button':
                await this.payCreditPage.helpModal.buttonRow.paymentPledge.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'multistep header title':
                await this.waitForElementsExist(this.multistepPage.multistepModal.header.headerTitle);
                element = await this.multistepPage.multistepModal.header.headerTitle.elements();
                await element.value[0].waitForDisplayed({timeout: config.wait.S});
                break;
            case 'multistep header close button':
                await (await this.multistepPage.multistepModal.header.closeButton.elements()).value[0].waitForDisplayed({timeout: config.wait.S});
                break;
            case 'loan detail title':
                await this.multistepPage.multistepModal.multistep.detailStepTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'payment step title':
                await this.multistepPage.multistepModal.multistep.paymentDateStep.stepTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'payment step summary title':
                await this.multistepPage.multistepModal.multistep.collapsedDateStep.stepTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'payment step first date':
                await this.multistepPage.multistepModal.multistep.paymentDateStep.stepFirstDate.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'payment step second date':
                await this.multistepPage.multistepModal.multistep.paymentDateStep.stepSecondDate.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'payment step third date':
                await this.multistepPage.multistepModal.multistep.paymentDateStep.stepThirdDate.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'payment step continue button':
                await this.multistepPage.multistepModal.multistep.paymentDateStep.stepContinue.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'payment step summary edit link':
                await (await this.multistepPage.multistepModal.multistep.collapsedDateStep.editLink.elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount step monthly pay':
                await this.multistepPage.multistepModal.multistep.amountStep.stepMonthlyPay.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'amount step settle debt':
                await this.multistepPage.multistepModal.multistep.amountStep.stepSettleDebt.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'amount step other amount':
                await this.multistepPage.multistepModal.multistep.amountStep.stepOtherAmount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'other amount input text':
                await this.multistepPage.multistepModal.multistep.amountStep.otherAmount.formContent.formInput.inputText
                    .waitForDisplayed({timeout: config.wait.S});
                break;
            case 'other amount description':
                await this.multistepPage.multistepModal.multistep.amountStep.otherAmount.formContent.formInput.description
                    .waitForDisplayed({timeout: config.wait.S});
                break;
            case 'other amount alert':
                await this.multistepPage.multistepModal.multistep.amountStep.otherAmount.formContent.formInput.alert.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'other amount info':
                await this.multistepPage.multistepModal.multistep.amountStep.otherAmount.formContent.formInput.info.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'amount step continue button':
                await this.multistepPage.multistepModal.multistep.amountStep.stepContinue.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'amount step summary title':
                await this.multistepPage.multistepModal.multistep.collapsedAmountStep.stepTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm promise panel label':
                await this.multistepPage.multistepModal.multistep.confirmPromisePanel.confirmLabel.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'confirm promise panel amount':
                await this.multistepPage.multistepModal.multistep.confirmPromisePanel.confirmAmount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'confirm promise panel button':
                await this.multistepPage.multistepModal.multistep.confirmPromisePanel.confirmButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'success header title':
                await this.successPage.helpModal.header.headerTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success header close button':
                await this.successPage.helpModal.header.closeButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'success payment pledge title':
                await this.successPage.helpModal.successTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'success payment pledge amount text':
                await this.successPage.helpModal.successAmountText.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'success detail title':
                await this.successPage.helpModal.detailTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'success payment pledge message':
                await this.successPage.helpModal.message.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'offer panel title':
                await this.payCreditPage.helpModal.listOffer.offerLink.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'offer panel link':
                await this.payCreditPage.helpModal.listOffer.offerLink.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'pledge creation error modal icon':
                await this.multistepPage.modalManager.helpModal.errorModalIcon.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'pledge creation error modal title':
                await this.multistepPage.modalManager.helpModal.errorModalTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'pledge creation error modal description':
                await this.multistepPage.modalManager.helpModal.errorModalDescription.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'pledge creation error modal button':
                await this.multistepPage.modalManager.helpModal.errorModalRetryButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'navigation error modal button':
                await this.errorModal.additionalElements.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'navigation error modal titles':
                await this.errorModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'navigation error modal description':
                await this.errorModal.descriptions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'navigation error modal header title':
                await this.errorModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'navigation error modal header close button':
                await this.errorModal.additionalElements.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new LoansPaymentPledge();
