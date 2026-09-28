import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('advancePayments')
class AdvancePayments extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-advancePayments[state="active"]',
            elements: {
                multiStepAdvancePayments: [BbvaHelpModal, {modifiers: '.multistep[visible]',
                    additionalElements: {
                        header: '#helpModalHeader',
                        headerMain: '[data-tag-name="bbva-header-main"]',
                        headerIconClose: '#helpModalHeader .button-1 #btn-close',
                        amountPayableText: '#overdue-step .content-wrapper #heading #headingLabel',
                        iconOverdueStep: '#overdue-step .row .text-icon [data-tag-name="bbva-button-default"]',
                        typeIconOverdueStep: '#overdue-step .message-error.notification [data-tag-name="bbva-type-icon"]',
                        radioButtonAnticipate: '#form-container [data-tag-name="bbva-form-control-input"][value="advancePayment"]',
                        radioButtonLiquidate: '#form-container [data-tag-name="bbva-form-control-input"][value="settleTotalDebt"]',
                        buttonContinueRadio: '[data-tag-name="select-advance-payment-type"] [data-tag-name="bbva-button-default"]',
                        btnContinueSelectMicroloan: '#step-3 .content [data-tag-name="select-microloan"] [data-tag-name="bbva-button-default"]',
                        btnAccountContinue: '.content .confirm-step [data-tag-name="bbva-button-default"]',
                        btnContinueAdvance: '[data-tag-name="select-monthly-payment-opened"] #select-monthly-btn',
                        textInfoAmount: '#step-4 #headingLabel',
                        changeDeferral: '#step-3 .header #editButton',
                        changePaymentTypeLink: '#step-2 .header #editButton',
                        btnChangeMonthlyPayments: '#step-4 .header #editButton',
                        titleScreenSummary: '#step-1 .header #heading'
                    }
                }],
                btnContinueBuys: '[data-tag-name="monthly-detail-opened"] #monthly-detail-btn',
                amountPayableInput: '[data-tag-name="import-payment"] [data-tag-name="bbva-form-input"]',
                btnSelectOtherAmount: '[data-tag-name="select-monthly-payment-opened"] [data-tag-name="bbva-form-select"] [data-tag-name="bbva-form-option"][value="differentAmount"]',
                inputOtherAmount: '[data-tag-name="select-monthly-payment-opened"] [data-tag-name="bbva-form-input"] input',
                inputAmountAOverdue: '[data-tag-name="import-payment"] [data-tag-name="bbva-form-input"] input',
                linkSeeMoreShopping: '[data-tag-name="select-microloan"] .options-right [data-tag-name="bbva-type-link"]',
                inputChangeMonthly: '#step-4 [data-tag-name="bbva-form-select"] #button',
                btnSelectChangeMonthly: '[data-tag-name="bbva-form-select"] [data-tag-name="bbva-form-option"][value="MONTH_ADVANCED_2"]',
                amountChangeText: '[data-tag-name="financing-line-info"] .financing-line-info .summary-list-container [data-tag-name="bbva-type-text"][alignment="left"]',
                movement: '[data-tag-name="monthly-detail-opened"]',
                btnAmountAOverdue: '[data-tag-name="bbva-expandable-step"][active] [data-tag-name="import-payment"] .import-payment-opened [data-tag-name="bbva-button-default"].continue-button',
                labelTextInfo: '[error-message="card-transaction-servicing-finance-transaction-advanced-payments-overdue-payment-step-input-error-message"] [data-tag-name="bbva-notification-help"].notification',
                btnHelpLatePay: '#overdue-step .import-payment-opened [data-tag-name="bbva-button-default"][icon="spherica:help"]',
                warningMessage: '[error-message="card-transaction-servicing-finance-transaction-advanced-payments-overdue-payment-step-input-error-message"] .message.error [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"]',
                modalBtnAccept: '[mode="stepModificationConfirmationModal"] .modal-footer slot .slot-footer [data-tag-name="bbva-button-default"]',
                originAccountActive: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"][id="step-5"][active]'
                    },
                    account: '.content [data-tag-name="select-origin-account"] [data-tag-name="bbva-type-text"]',
                    accountLink: '.detail-item .left-description [data-tag-name="bbva-type-link"]'
                },

                successfulReceipt: {
                    properties: {
                        root: '[mode="receiptModal"]'
                    },
                    successfulPaymentDate: '.box-item',
                    successfulPaymentShare: '[data-tag-name="bbva-button-row"] #buttons [data-tag-name="bbva-button-action"]',
                    successfulPaymentIcon: '.success-section [data-tag-name="bbva-clip-box-item"][icon-status="success"]',
                    successfulPaymentStatus: '.success-section [data-tag-name="bbva-type-text"]',
                    successfulPaymentAmount: '.success-section [data-tag-name="bbva-type-amount"]'
                },
                modalOnboarding: {
                    properties: {
                        root: '[data-selector="modal-onboarding"]'
                    },
                    headerModal: '#helpModalHeader',
                    closeBtn: '#helpModalHeader #btn-close',
                    image: '[data-tag-name="bbva-clip-microillustration"] img',
                    title: '[data-tag-name="bbva-type-text"][font-type="title-secondary"]',
                    description: '[data-tag-name=bbva-type-text][class="modal-text"]',
                    btnUnderstoodModal: '.modal-footer .slot-footer [data-tag-name="bbva-button-default"]'
                },
                modalMicroloans: {
                    properties: {
                        root: '[mode="microloansModal"][visible]'
                    },
                    modalNamePurchaseName: '[data-tag-name="bbva-help-modal"] .microloans-wrapper [data-tag-name="detail-item"] .detail-item .left-description [data-tag-name="bbva-type-link"]',
                    modalTitleAllShop: '[data-tag-name="bbva-help-modal"] #helpModalHeader',
                    modalBtnClose: '[data-tag-name="bbva-help-modal"] #btn-close',
                    modalAmount: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-type-amount"]',
                    modalMonths: '[data-tag-name="bbva-help-modal"] .left-description [data-tag-name="bbva-type-text"]'
                },
                modalOverdueFee: {
                    properties: {
                        root: '[data-selector="modal-overduePaymentFeeModal"]'
                    },
                    modalIconHelp: '#helpModalTitle slot [data-tag-name="bbva-type-icon"]',
                    modalTitleHelp: '[data-tag-name="bbva-type-text"]#title-text',
                    closeBtn: 'button#btn-close',
                    textInfoLate: '.overdue-payment-fee-wrapper'
                },
                modalExit: {
                    properties: {
                        root: '[mode="confirmLeaveModal"]'
                    },
                    modalInfoWarning: '.help-modal',
                    modalIconWarning: '.help-modal [data-tag-name="bbva-type-icon"].title-icon',
                    modalBtnIconExit: '#helpModalHeader #btn-close',
                    modalBtntExit: '.help-modal .slot-footer [data-tag-name="bbva-button-default"]:not([class="footer-button link"])',
                    modalLinkContinue: '.help-modal .slot-footer [data-tag-name="bbva-button-default"].footer-button.link'
                },
                modalMonthlyPaymentError: {
                    properties: {
                        root: '[mode="monthlyPaymentErrorModal"]'
                    },
                    headerMonthlyError: '#helpModalHeader',
                    btnMonthlyError: '.modal-footer .slot-footer [data-tag-name="bbva-button-default"]',
                    iconMonthlyError: '[data-tag-name="bbva-type-icon"].title-icon',
                    btnCloseMonthlyError: '#helpModalHeader #btn-close'
                },
                modalInfoPaymentError: {
                    properties: {
                        root: '[mode="emptyMicroloansModal"]'
                    },
                    modalHeader: '#helpModalHeader',
                    modalIcon: '[data-tag-name="bbva-clip-microillustration"] img',
                    modalButtonClose: '#helpModalHeader #btn-close',
                    modalTextInfo: '.empty-microloans-wrapper [data-tag-name="bbva-type-text"]',
                    modalButtonAccept: '.modal-footer [data-tag-name="bbva-button-default"]'
                }
            },
            requiredElements: [
                '__root'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'multistep header':{
                const {header, headerMain} = this.multiStepAdvancePayments.additionalElements;
                const headerEl = (await header.isExisting()) ? header : headerMain;
                await headerEl.waitForDisplayed({timeout: config.wait.M});
                break;
            }
            case 'continue button overdue':
                await this.btnAmountAOverdue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding header':
                await this.modalOnboarding.headerModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding close':
                await this.modalOnboarding.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding image':
                await this.modalOnboarding.image.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding title':
                await this.modalOnboarding.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding description':
                await this.modalOnboarding.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding understood':
                await this.modalOnboarding.btnUnderstoodModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount payable text':
                await this.multiStepAdvancePayments.additionalElements.amountPayableText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount payable input':
                await this.amountPayableInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.btnContinueBuys.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal title':
                await this.modalMicroloans.modalTitleAllShop.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal close button':
                await this.modalMicroloans.modalBtnClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase name':
                await this.waitForElementsExist(this.modalMicroloans.modalNamePurchaseName, config.wait.L);
                await (await this.modalMicroloans.modalNamePurchaseName.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal amount':
                await this.modalMicroloans.modalAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal months':
                await this.modalMicroloans.modalMonths.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal warning text':
                await this.modalExit.modalInfoWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal warning icon':
                await this.modalExit.modalIconWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal warning icon exit':
                await this.modalExit.modalBtnIconExit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal warning exit':
                await this.modalExit.modalBtntExit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal warning link':
                await this.modalExit.modalLinkContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change payment type':
                await this.waitForElementsExist(this.multiStepAdvancePayments.additionalElements.changePaymentTypeLink, config.wait.M);
                await (await this.multiStepAdvancePayments.additionalElements.changePaymentTypeLink.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change deferral':
                await this.waitForElementsExist(this.multiStepAdvancePayments.additionalElements.changeDeferral, config.wait.M);
                await (await this.multiStepAdvancePayments.additionalElements.changeDeferral.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change monthly':
                await this.waitForElementsExist(this.multiStepAdvancePayments.additionalElements.btnChangeMonthlyPayments, config.wait.M);
                await (await this.multiStepAdvancePayments.additionalElements.btnChangeMonthlyPayments.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title screen summary':
                await this.waitForElementsExist(this.multiStepAdvancePayments.additionalElements.titleScreenSummary, config.wait.M);
                await (await this.multiStepAdvancePayments.additionalElements.titleScreenSummary.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful payment icon':
                await this.successfulReceipt.successfulPaymentIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful payment status':
                await this.successfulReceipt.successfulPaymentStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful payment amount':
                await this.successfulReceipt.successfulPaymentAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful payment date':
                await this.waitForElementsExist(this.successfulReceipt.successfulPaymentDate, config.wait.M);
                await (await this.successfulReceipt.successfulPaymentDate.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful payment share button':
                await this.successfulReceipt.successfulPaymentShare.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount change text':
                await this.amountChangeText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal title error':
                await this.modalInfoPaymentError.modalHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal close button error':
                await this.modalInfoPaymentError.modalButtonClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal icon error':
                await this.modalInfoPaymentError.modalIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal text error':
                await this.modalInfoPaymentError.modalTextInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal button error':
                await this.modalInfoPaymentError.modalButtonAccept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'warning message':
                await this.warningMessage.waitForDisplayed({timeout: config.wait.M});
                break;

            case 'movement':
                await this.movement.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal close help':
                await this.modalOverdueFee.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal icon help':
                await this.modalOverdueFee.modalIconHelp.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal title help':
                await this.modalOverdueFee.modalTitleHelp.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal info help':
                await this.modalOverdueFee.textInfoLate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header monthly error':
                await this.modalMonthlyPaymentError.headerMonthlyError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button monthly error':
                await this.modalMonthlyPaymentError.btnMonthlyError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon monthly error':
                await this.modalMonthlyPaymentError.iconMonthlyError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button monthly error':
                await this.modalMonthlyPaymentError.btnCloseMonthlyError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'type icon overdue step':
                await this.multiStepAdvancePayments.additionalElements.typeIconOverdueStep.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async paymentType(value) {
        switch (value) {
            case 'advance payment':
                await this.multiStepAdvancePayments.additionalElements.radioButtonAnticipate.waitForDisplayed({timeout: config.wait.L});
                await this.multiStepAdvancePayments.additionalElements.radioButtonAnticipate.click();
                break;
            case 'settle deferrals':
                await this.multiStepAdvancePayments.additionalElements.radioButtonLiquidate.waitForDisplayed({timeout: config.wait.L});
                await this.multiStepAdvancePayments.additionalElements.radioButtonLiquidate.waitForClickable({timeout: config.wait.M});
                await this.multiStepAdvancePayments.additionalElements.radioButtonLiquidate.click();
                break;
            default:
                throw new Error(`The option ${value} is not defined`);
        }
    }

    async continueChange() {
        await this.multiStepAdvancePayments.additionalElements.buttonContinueRadio.waitForAnimation({timeout: config.wait.M});
        await this.multiStepAdvancePayments.additionalElements.buttonContinueRadio.waitForDisplayed({timeout: config.wait.M});
        await this.multiStepAdvancePayments.additionalElements.buttonContinueRadio.waitForEnabled({timeout: config.wait.M});
        await this.multiStepAdvancePayments.additionalElements.buttonContinueRadio.waitForClickable({timeout: config.wait.M});
        await this.multiStepAdvancePayments.additionalElements.buttonContinueRadio.click({userActions:false, scrollOptions: {block: 'nearest'}});
    }

    async continueResumenSelectAccount({index = 0} = {}) {
        await this.originAccountActive.account.waitForDisplayed({timeout: config.wait.M});
        await this.originAccountActive.account.waitForText({timeout: config.wait.M});
        await this.waitForElementsExist(this.originAccountActive.accountLink, config.wait.M);
        const accountsAvailable = await this.originAccountActive.accountLink.elements();
        // If the index is greater than the number of accounts, select the last one
        const safeIndex = Math.min(index, accountsAvailable.value.length - 1);
        const link = await accountsAvailable.value[safeIndex];
        await link.waitForDisplayed({timeout: config.wait.M});
        await link.scrollIntoView({block: 'nearest'});
        await link.waitForAnimation({timeout: config.wait.M});
        await link.click();
    }

    async continueSummaryLate() {
        await this.multiStepAdvancePayments.additionalElements.btnAccountContinue.waitForDisplayed({timeout: config.wait.M});
        await this.multiStepAdvancePayments.additionalElements.btnAccountContinue.waitForEnabled({timeout: config.wait.M});
        await this.multiStepAdvancePayments.additionalElements.btnAccountContinue.waitForClickable({timeout: config.wait.M});
        await this.multiStepAdvancePayments.additionalElements.btnAccountContinue.click();
    }

    async selectMovement() {
        await this.multiStepAdvancePayments.additionalElements.btnContinueSelectMicroloan.waitForDisplayed({timeout: config.wait.L});
        await this.multiStepAdvancePayments.additionalElements.btnContinueSelectMicroloan.waitForClickable({timeout: config.wait.L});
        await this.multiStepAdvancePayments.additionalElements.btnContinueSelectMicroloan.click();
    }

    async selectDeferral() {
        await this.multiStepAdvancePayments.additionalElements.btnContinueAdvance.waitForDisplayed({timeout: config.wait.X});
        await this.multiStepAdvancePayments.additionalElements.btnContinueAdvance.waitForClickable({timeout: config.wait.X});
        await this.multiStepAdvancePayments.additionalElements.btnContinueAdvance.click();
    }

    async closeModal() {
        await this.modalOnboarding.btnUnderstoodModal.waitForDisplayed({timeout: config.wait.L});
        await this.modalOnboarding.btnUnderstoodModal.scrollIntoView();
        await this.modalOnboarding.btnUnderstoodModal.waitForClickable();
        await this.modalOnboarding.btnUnderstoodModal.click();
    }

    async seeAllMovements() {
        await this.linkSeeMoreShopping.waitForDisplayed({timeout: config.wait.L});
        await this.linkSeeMoreShopping.waitForAnimation({timeout: config.wait.M});
        await this.linkSeeMoreShopping.click();
    }

    async selectPurchase() {
        await this.modalMicroloans.modalTitleAllShop.waitForDisplayed({timeout: config.wait.M});
        await this.waitForElementsExist(this.modalMicroloans.modalNamePurchaseName, config.wait.L);
        await (await this.modalMicroloans.modalNamePurchaseName.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.modalMicroloans.modalNamePurchaseName.elements()).value[0].waitForAnimation({timeout: config.wait.M});
        await (await this.modalMicroloans.modalNamePurchaseName.elements()).value[0].click();
    }

    async continuePayments() {
        await this.multiStepAdvancePayments.additionalElements.btnContinueAdvance.waitForDisplayed({timeout: config.wait.L});
        await this.multiStepAdvancePayments.additionalElements.btnContinueAdvance.scrollIntoView();
        await this.multiStepAdvancePayments.additionalElements.btnContinueAdvance.waitForClickable();
        await this.multiStepAdvancePayments.additionalElements.btnContinueAdvance.click();
    }

    async changeMonthlyPayments() {
        await this.inputChangeMonthly.waitForDisplayed({timeout: config.wait.L});
        await this.inputChangeMonthly.scrollIntoView();
        await this.inputChangeMonthly.click();
        await this.btnSelectChangeMonthly.waitForDisplayed({timeout: config.wait.L});
        await this.btnSelectChangeMonthly.waitForClickable();
        await this.btnSelectChangeMonthly.click();
    }

    async changeMonthlyOther() {
        await this.inputChangeMonthly.waitForDisplayed({timeout: config.wait.L});
        await this.inputChangeMonthly.scrollIntoView();
        await this.inputChangeMonthly.click();
        await this.btnSelectOtherAmount.waitForDisplayed({timeout: config.wait.L});
        await this.btnSelectOtherAmount.click({useActions: false, scrollOptions: {block: 'end'}});
    }

    async customAmount(amount) {
        await this.inputOtherAmount.waitForDisplayed({timeout: config.wait.M});
        await this.inputOtherAmount.waitForAnimation({timeout: config.wait.M});
        await this.inputOtherAmount.waitForEnabled({timeout: config.wait.M});
        await this.inputOtherAmount.setValue({value: amount});
        await this.multiStepAdvancePayments.additionalElements.textInfoAmount.waitForDisplayed({timeout: config.wait.M});
        await this.multiStepAdvancePayments.additionalElements.textInfoAmount.click({useActions: false, scrollOptions: {block: 'end'}});
    }

    async closeOperative() {
        await this.multiStepAdvancePayments.additionalElements.headerIconClose.waitForDisplayed({timeout: config.wait.L});
        await this.multiStepAdvancePayments.additionalElements.headerIconClose.scrollIntoView();
        await this.multiStepAdvancePayments.additionalElements.headerIconClose.waitForClickable();
        await this.multiStepAdvancePayments.additionalElements.headerIconClose.click();
    }

    async changeDeferralFun() {
        await this.waitForElementsExist(this.multiStepAdvancePayments.additionalElements.changeDeferral, config.wait.M);
        await (await this.multiStepAdvancePayments.additionalElements.changeDeferral.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.multiStepAdvancePayments.additionalElements.changeDeferral.elements()).value[0].waitForAnimation({timeout: config.wait.M});
        await (await this.multiStepAdvancePayments.additionalElements.changeDeferral.elements()).value[0].waitForClickable({timeout: config.wait.M});
        await (await this.multiStepAdvancePayments.additionalElements.changeDeferral.elements()).value[0].click();
    }

    async changePaymentType() {
        await this.waitForElementsExist(this.multiStepAdvancePayments.additionalElements.changePaymentTypeLink, config.wait.M);
        await (await this.multiStepAdvancePayments.additionalElements.changePaymentTypeLink.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.multiStepAdvancePayments.additionalElements.changePaymentTypeLink.elements()).value[0].waitForAnimation({timeout: config.wait.M});
        await (await this.multiStepAdvancePayments.additionalElements.changePaymentTypeLink.elements()).value[0].waitForClickable({timeout: config.wait.M});
        await (await this.multiStepAdvancePayments.additionalElements.changePaymentTypeLink.elements()).value[0].click();
    }

    async changePaymentTypeAccept() {
        await this.modalBtnAccept.waitForDisplayed({timeout: config.wait.L});
        await this.modalBtnAccept.scrollIntoView();
        await this.modalBtnAccept.waitForClickable();
        await this.modalBtnAccept.click();
    }

    async accountBalance(amount) {
        await this.inputAmountAOverdue.waitForDisplayed({timeout: config.wait.L});
        await this.inputAmountAOverdue.setValue(amount);
        await this.labelTextInfo.waitForClickable({timeout: config.wait.M});
        await this.labelTextInfo.click();
        await this.btnAmountAOverdue.waitForDisplayed({timeout: config.wait.L});
        await this.btnAmountAOverdue.waitForClickable({timeout: config.wait.M});
        await this.btnAmountAOverdue.click();
    }

    async higherAmountIncome(amount) {
        await this.inputAmountAOverdue.waitForDisplayed({timeout: config.wait.L});
        await this.inputAmountAOverdue.setValue(amount);
    }

    async enterLatePaymentHelp() {
        await this.btnHelpLatePay.waitForDisplayed({timeout: config.wait.L});
        await this.btnHelpLatePay.waitForClickable({timeout: config.wait.M});
        await this.btnHelpLatePay.click();
    }

    async accessMonthlyPayment() {
        await this.btnContinueBuys.waitForDisplayed({timeout: config.wait.L});
        await this.btnContinueBuys.waitForClickable({timeout: config.wait.M});
        await this.btnContinueBuys.click();
    }

    async accessOverdueModal() {
        await this.multiStepAdvancePayments.additionalElements.iconOverdueStep.waitForDisplayed({timeout: config.wait.M});
        await this.multiStepAdvancePayments.additionalElements.iconOverdueStep.waitForClickable({timeout: config.wait.M});
        await this.multiStepAdvancePayments.additionalElements.iconOverdueStep.click();
    }
}

export default new AdvancePayments();
