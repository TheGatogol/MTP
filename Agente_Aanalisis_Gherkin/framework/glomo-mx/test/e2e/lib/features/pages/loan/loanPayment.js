import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class LoanPayment extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-loanPayment[state="active"]',
            elements: {
                header:'#loanPaymentMultiStepPage [data-tag-name="bbva-header-main"] header',
                loanPaymentMultiStep: {
                    properties: { root: '#loanPaymentMultiStepPage' },
                    loanDetail: '[data-tag-name="bbva-expandable-step"]#summaryLoan [data-tag-name="bbva-core-heading"]#heading',
                    mortageNumber:'[data-tag-name="bbva-expandable-step"]#summaryLoan [data-tag-name="bbva-list-simple"][label="Número de préstamo"]',
                    pendingDebt: '[data-tag-name="bbva-expandable-step"]#summaryLoan [data-tag-name="bbva-list-simple"][label="Deuda pendiente"]',
                    paymentTypeButton: 'div loan-payment-multi-step bbva-expandable-multistep div loan-payment-options bbva-expandable-step bbva-aggregation-link-list [id="__DATA_SELECTOR__"]',
                    account: 'div loan-payment-multi-step bbva-expandable-multistep div loan-payment-account bbva-expandable-step loan-list-account loan-account-item[number="__DATA_SELECTOR__"]',
                    accounts: 'div loan-payment-multi-step bbva-expandable-multistep div loan-payment-account bbva-expandable-step loan-list-account loan-account-item__DATA_SELECTOR__',
                    accountTextSummary: 'div loan-payment-multi-step bbva-expandable-multistep div loan-payment-account bbva-expandable-step div loan-account-item',
                    changeTypeButton: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="loan-payment-options"] [data-tag-name="bbva-link"]#editButton',
                    changeTypePayment:'[data-tag-name="bbva-expandable-step"] [data-tag-name="loan-button-group"] #primaryBtn[text="loan-button-change-payment-type"]',
                    changeContinueButton: '#id_payment_type [data-tag-name="bbva-button-default"].footer-button',
                    seeAllAccount: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-link"]',
                    changeTypeAccount: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="loan-payment-account"] [data-tag-name="bbva-link"]#editButton',
                    changeWithdrawalAccount : '[data-tag-name="bbva-expandable-step"] [data-tag-name="loan-button-group"] #primaryBtn',
                    payButton: '#primaryBtn[text="loan-payment-pay"]',
                    exitPayLoan:'[data-tag-name="bbva-header-main"] #btn-right-primary',
                    payImport:'[data-tag-name="loan-payment-options"] [data-tag-name="bbva-expandable-step"] .summary[label="loan-payment-panel-button-label"] ',
                    pendingImport:'[data-tag-name="loan-payment-options"] [data-tag-name="bbva-expandable-step"] .summary[label="loan-payment-pending-payment"] ',
                    receipt:'[data-tag-name="loan-payment-description"] [data-tag-name="bbva-header-category"]',
                    retirementAccounts: ' [data-tag-name="loan-list-account"] [data-tag-name="bbva-list-card"]',
                    messageInsuficient:'[data-tag-name="bbva-expandable-step"] [data-tag-name="bbva-notification-message"][variant="error"]',
                    messageInsuficientIcon:'[data-tag-name="loan-account-item"] [data-tag-name="bbva-core-icon"].message-icon',
                    continueButtonOneAccount: '[data-tag-name="loan-button-group"] #primaryBtn[text="loan-button-continue"]',
                    retryButton:'div loan-payment-multi-step bbva-expandable-multistep div loan-payment-account bbva-expandable-step loan-notification-error bbva-notification-message bbva-link',
                    messageAccountIcon:'[data-tag-name="loan-notification-error"] [data-tag-name="bbva-notification-message"] [data-tag-name="bbva-icon"]',
                    messageTextAccount:'[data-tag-name="loan-notification-error"] [data-tag-name="bbva-notification-message"] [data-tag-name="bbva-text"]',
                },

                continueReceiptButton:'#loanPaymentReciptAmountPage .button-container #primaryBtn[text="loan-button-continue"]',
                exitButtonImportReceipt:'#loanPaymentReciptAmountPage [data-tag-name="loan-payment-recipt-amount-page"] #btn-right-primary',
                seeDetail:'#loanPaymentReciptAmountPage [data-tag-name="bbva-header-category"] [data-tag-name="bbva-link"].link',
                importReceipt:'#loanPaymentReciptAmountPage [data-tag-name="bbva-list-simple"]',
                chooseAnotherTypePayment: '#loanPaymentReciptAmountPage .button-container #secondaryBtn[text="loan-button-other-payment"]',
                messageErrorInput: '#loanPaymentOtherAmountPage [data-tag-name="bbva-notification-help"].message-error',

                loanPaymentDetailContainer: '[data-tag-name="bbva-transition-container"]#loanPaymentDetailPage',
                helpButton:'#loanPaymentDetailPage [data-tag-name="bbva-icon"].link',
                closeDetailButton:'#loanPaymentDetailPage #primaryBtn[text="loan-button-close"]',
                paymentToCapital:'#loanPaymentDetailPage [data-tag-name="loan-payment-description"] [label="loan-payment-first-text-settlement"]',
                interestPayment:'#loanPaymentDetailPage [data-tag-name="loan-payment-description"] [label="loan-payment-second-text-settlement"]',
                receiptAmountDetail:'#loanPaymentDetailPage [data-tag-name="loan-payment-description"] [label="loan-payment-multistep-options-first-title"]',
                closeConceptButton:'[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][ambient="light"].footer-button',

                loanPaymentOtherAmountContainer: '[data-tag-name="bbva-transition-container"]#loanPaymentOtherAmountPage',
                amountInput: '#loanPaymentOtherAmountPage [data-tag-name="loan-amount-input"] [data-tag-name="bbva-form-amount"] input',
                calculatePaymentButton: '#loanPaymentOtherAmountPage #primaryBtn[text="loan-button-calculate"]',
                changeTypeAmount:'#loanPaymentOtherAmountPage #secondaryBtn[variant="link"][text="loan-button-other-payment"]',
                exitOtherAmountBtn:'#loanPaymentOtherAmountPage #btn-right-primary',

                continueButton:'#loanOtherAmountDetailPage #primaryBtn[text="loan-button-continue"]',
                changeAmountEntered: '#loanOtherAmountDetailPage #secondaryBtn[variant="link"][text="loan-button-change-amount-entered"]',
                exitOtherDetail:'#loanOtherAmountDetailPage [data-tag-name="bbva-header-main"] #btn-right-primary',
                amountPayOther:'#loanOtherAmountDetailPage [data-tag-name="loan-repeat-list-simple"] [label="loan-payment-panel-button-label"]',
                messageOther:'#loanOtherAmountDetailPage #secondaryMessages [data-tag-name="bbva-notification-message"]',

                otherAmountHeader:'#loanAccountsPage [data-tag-name="bbva-header-main"] header',
                exitAccountsBtn: '#loanAccountsPage [data-tag-name="bbva-header-main"] #btn-right-primary',
                closeAccountsBtn: '#loanAccountsPage [data-tag-name="loan-button-group"] #primaryBtn[text="loan-button-close"]',

                continueSettlementButton: '#loanPaymentSetlementPage #primaryBtn[text="loan-button-continue"]',
                chooseTypeSett: '#loanPaymentSetlementPage #secondaryBtn[text="loan-button-other-payment"]',
                exitButtonSett: '#loanPaymentSetlementPage [data-tag-name="bbva-header-main"] #btn-right-primary',
                payImportSett: '#loanPaymentSetlementPage [data-tag-name="loan-repeat-list-simple"] [label="loan-payment-panel-button-label"]',
                messageSett: '#loanPaymentSetlementPage [data-tag-name="bbva-notification-message"]',

                termReductionOption: '#loanRadioButtonsPage loan-radio-buttons-page loan-list-radio-buttons bbva-form-radio-group bbva-form-radio-button:nth-child(1) div > slot > span',
                continueButtonRadio:'#loanRadioButtonsPage [data-tag-name="loan-button-group"] #primaryBtn[text="loan-button-continue"]',

                successLabel:'#loanPaymentTicketPage [data-tag-name="bbva-panel-process"] [data-tag-name="bbva-core-heading"]',
                successDate:'#loanPaymentTicketPage [data-tag-name="bbva-panel-process"] [data-tag-name="bbva-date"]',
                successImport:'#loanPaymentTicketPage [data-tag-name="bbva-panel-process"] [data-tag-name="bbva-amount"]',
                successOperationFolio:'#loanPaymentTicketPage [data-tag-name="bbva-list-simple"][label="loan-payment-ticket-operation"]',
                successButtonExit:'#loanPaymentTicketPage [data-tag-name="bbva-list-simple"] #primaryBtn',

                btnRadioTerm: 'bbva-feature-loan-payment-mx #loanRadioButtonsPage div loan-radio-buttons-page div loan-list-radio-buttons bbva-form-radio-group bbva-form-radio-button:nth-child(1)',
                btnRadioShare: 'bbva-feature-loan-payment-mx #loanRadioButtonsPage div loan-radio-buttons-page div loan-list-radio-buttons bbva-form-radio-group bbva-form-radio-button:nth-child(2)',
                btnContinue: 'bbva-feature-loan-payment-mx #loanRadioButtonsPage div loan-radio-buttons-page loan-summary-payment-info loan-button-group #primaryBtn',
                retirementAccount: 'bbva-feature-loan-payment-mx #loanPaymentMultiStepPage div loan-payment-multi-step bbva-expandable-multistep div loan-payment-account bbva-expandable-step loan-list-account loan-account-item:nth-child(3)',

                loanPaymentSummary: 'bbva-feature-loan-payment-mx #loanPaymentMultiStepPage loan-summary-payment-info',
                linkChangeAmount: 'bbva-feature-loan-payment-mx #loanPaymentMultiStepPage div loan-payment-multi-step bbva-expandable-multistep div loan-payment-options bbva-expandable-step #editButton',
                linkChangeAccount: 'bbva-feature-loan-payment-mx #loanPaymentMultiStepPage div loan-payment-multi-step bbva-expandable-multistep div loan-payment-account bbva-expandable-step #editButton',
                titleChange: 'bbva-feature-loan-payment-mx #loanPaymentMultiStepPage div loan-payment-multi-step bbva-expandable-multistep div loan-payment-options bbva-expandable-step div.header',
                changeButton: 'bbva-feature-loan-payment-mx #loanPaymentMultiStepPage div loan-payment-multi-step bbva-expandable-multistep div loan-payment-options bbva-expandable-step loan-button-group #primaryBtn div bbva-text span',
                changeButtonAcount: 'bbva-feature-loan-payment-mx #loanPaymentMultiStepPage div loan-payment-multi-step bbva-expandable-multistep div loan-payment-account bbva-expandable-step loan-button-group #primaryBtn',
                keepChangesButton: 'bbva-feature-loan-payment-mx #loanPaymentMultiStepPage div loan-payment-multi-step bbva-expandable-multistep div loan-payment-options bbva-expandable-step loan-button-group #secondaryBtn div bbva-text span',
                keepChangesButtonAcount: 'bbva-feature-loan-payment-mx #loanPaymentMultiStepPage div loan-payment-multi-step bbva-expandable-multistep div loan-payment-account bbva-expandable-step loan-button-group #primaryBtn div bbva-text span',
                labelInfoSuccess:'bbva-feature-loan-payment-mx #loanPaymentTicketPage div loan-payment-ticket-page div div bbva-core-heading',
                dateSuccess:'bbva-feature-loan-payment-mx #loanPaymentTicketPage div loan-payment-ticket-page div div bbva-core-heading',
                btnClouse: 'bbva-feature-loan-payment-mx #loanPaymentTicketPage div loan-payment-ticket-page loan-button-group #primaryBtn div bbva-text span',
            },
            elementsSpherica: {
                loanPaymentMultiStep: {
                    loanDetail: '[data-tag-name="bbva-expandable-step"]#summaryLoan bbva-core-heading .heading-label',
                    mortageNumber:'[data-tag-name="bbva-expandable-step"]#summaryLoan [data-tag-name="loan-list-item-simple"][label="Número de préstamo"]',
                    pendingDebt: '[data-tag-name="bbva-expandable-step"]#summaryLoan [data-tag-name="loan-list-item-simple"][label="Saldo pendiente"]',
                    paymentTypeButton: 'div loan-payment-multi-step bbva-expandable-multistep div loan-payment-options bbva-expandable-step bbva-aggregation-link-list-spherica [id="__DATA_SELECTOR__"]',
                    seeAllAccount: '[data-tag-name="loan-payment-account"] [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]',
                    exitPayLoan:'[data-tag-name="bbva-header-main"] #btn-close',
                    retirementAccounts: ' [data-tag-name="loan-list-account"] [data-tag-name="loan-list-card"]',
                    retryButton:'div loan-payment-multi-step bbva-expandable-multistep div loan-payment-account bbva-expandable-step loan-notification-error bbva-notification-message bbva-type-link',
                    messageAccountIcon:'[data-tag-name="loan-notification-error"] [data-tag-name="bbva-notification-message"] [data-tag-name="bbva-type-icon"]',
                    messageTextAccount:'[data-tag-name="loan-notification-error"] [data-tag-name="bbva-notification-message"] [data-tag-name="bbva-type-text"]',
                    messageInsuficientIcon:'[data-tag-name="loan-account-item"] bbva-notification-help[variant="alert"]',
                },
                seeDetail:'#loanPaymentReciptAmountPage [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"].link',
                closeDetailButton:'#loanPaymentDetailPage #btn-close',
                exitButtonImportReceipt:'#loanPaymentReciptAmountPage [data-tag-name="loan-payment-recipt-amount-page"] #btn-close',
                importReceipt:'#loanPaymentReciptAmountPage [data-tag-name="loan-list-item-simple"]',
                helpButton:'#loanPaymentDetailPage [data-tag-name="bbva-type-link"].link',
                receiptAmountDetail:'#loanPaymentDetailPage [data-tag-name="loan-payment-description"] [label="loan-payment-multistep-options-first-title-spherica"]',
                closeConceptButton:'[data-tag-name="bbva-help-modal"].smaller-spaces button#btn-close',
                exitAccountsBtn: '#loanAccountsPage [data-tag-name="bbva-header-main"] #btn-close',
                exitOtherDetail:'#loanOtherAmountDetailPage [data-tag-name="bbva-header-main"] #btn-close',
                exitOtherAmountBtn:'#loanPaymentOtherAmountPage #btn-close',
                exitButtonSett: '#loanPaymentSetlementPage [data-tag-name="bbva-header-main"] #btn-close',
                btnRadioTerm: 'bbva-form-radio-button-input[value="payment-plazo"]',
                btnRadioShare: 'bbva-form-radio-button-input[value="payment-cuota"]',
                btnContinue: 'loan-summary-payment-info #primaryBtn[text="loan-button-continue"]',
                retirementAccount: 'bbva-feature-loan-payment-mx-spherica #loanPaymentMultiStepPage div loan-payment-multi-step bbva-expandable-multistep div loan-payment-account bbva-expandable-step loan-list-account loan-account-item:nth-child(3)',
                loanPaymentSummary: 'bbva-feature-loan-payment-mx-spherica #loanPaymentMultiStepPage loan-summary-payment-info',
                linkChangeAmount: 'bbva-feature-loan-payment-mx-spherica #loanPaymentMultiStepPage div loan-payment-multi-step bbva-expandable-multistep div loan-payment-options bbva-expandable-step #editButton',
                linkChangeAccount: 'bbva-feature-loan-payment-mx-spherica #loanPaymentMultiStepPage div loan-payment-multi-step bbva-expandable-multistep div loan-payment-account bbva-expandable-step #editButton',
                titleChange: 'bbva-feature-loan-payment-mx-spherica #loanPaymentMultiStepPage div loan-payment-multi-step bbva-expandable-multistep div loan-payment-options bbva-expandable-step div.header',
                changeButton: 'bbva-feature-loan-payment-mx-spherica #loanPaymentMultiStepPage div loan-payment-multi-step bbva-expandable-multistep div loan-payment-options bbva-expandable-step loan-button-group #primaryBtn div bbva-type-text span',
                changeButtonAcount: 'bbva-feature-loan-payment-mx-spherica #loanPaymentMultiStepPage div loan-payment-multi-step bbva-expandable-multistep div loan-payment-account bbva-expandable-step loan-button-group #primaryBtn',
                keepChangesButton: 'bbva-feature-loan-payment-mx-spherica #loanPaymentMultiStepPage div loan-payment-multi-step bbva-expandable-multistep div loan-payment-options bbva-expandable-step loan-button-group #secondaryBtn div bbva-type-text span',
                keepChangesButtonAcount: 'bbva-feature-loan-payment-mx-spherica #loanPaymentMultiStepPage div loan-payment-multi-step bbva-expandable-multistep div loan-payment-account bbva-expandable-step loan-button-group #primaryBtn div bbva-type-text span',
                labelInfoSuccess:'bbva-feature-loan-payment-mx-spherica #loanPaymentTicketPage div loan-payment-ticket-page div div bbva-core-heading',
                dateSuccess:'bbva-feature-loan-payment-mx-spherica #loanPaymentTicketPage div loan-payment-ticket-page div div bbva-core-heading',
                btnClouse: 'bbva-feature-loan-payment-mx-spherica #loanPaymentTicketPage div loan-payment-ticket-page loan-button-group #primaryBtn div bbva-type-text span',
            },
            requiredElements: ['header'],
        });
    }
    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'loan detail':
                this.isSpherica()
                    ? await (await this.loanPaymentMultiStep.loanDetail.elements()).value[0].waitForDisplayed({timeout: config.wait.M})
                    : await this.loanPaymentMultiStep.loanDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mortage number':
                await this.loanPaymentMultiStep.mortageNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pendign debt':
                await this.loanPaymentMultiStep.pendingDebt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt payment':
                await this.loanPaymentMultiStep.paymentTypeButton.specifySelector('__DATA_SELECTOR__', 'titleAmountOverdue').waitForDisplayed({timeout: config.wait.M});
                break;
            case 'other amount':
                await this.loanPaymentMultiStep.paymentTypeButton.specifySelector('__DATA_SELECTOR__', 'titleOtherAmount').waitForDisplayed({timeout: config.wait.M});
                break;
            case 'loan settlement':
                await this.loanPaymentMultiStep.paymentTypeButton.specifySelector('__DATA_SELECTOR__', 'titleSettleLoan').waitForDisplayed({timeout: config.wait.M});
                await this.loanPaymentMultiStep.paymentTypeButton.specifySelector('__DATA_SELECTOR__', 'titleSettleLoan').waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'continue button':
                await this.loanPaymentMultiStep.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit import receipt':
                await this.exitButtonImportReceipt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'import receipt':
                await this.importReceipt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'see detail':
                await this.seeDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input':
                await this.amountInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button receipt':
                await this.continueReceiptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'choose type payment link':
                await this.chooseAnotherTypePayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'choose type payment link other':
                await this.changeTypeAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change amount link':
                await this.changeAmountEntered.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'calculate payment':
                await this.calculatePaymentButton.waitForDisplayed({timeout: config.wait.M});
                await this.calculatePaymentButton.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'help button':
                await this.helpButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment to capital':
                await this.paymentToCapital.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'interest payment':
                await this.interestPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt amount detail':
                await this.receiptAmountDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button detail':
                await this.closeDetailButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit other detail':
                await this.exitOtherDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit other amount':
                await this.exitOtherAmountBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount pay other':
                await this.amountPayOther.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message covered receipt':
                await this.messageOther.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button other':
                await this.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message error input':
                await this.messageErrorInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header accounts':
                await this.otherAmountHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account exit button':
                await this.exitAccountsBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account close button':
                await this.closeAccountsBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label loan':
                await this.successLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date loan':
                await this.successDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'import loan':
                await this.successImport.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation folio':
                await this.successOperationFolio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button exit loan':
                await this.successButtonExit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button exit pay loan':
                await this.loanPaymentMultiStep.exitPayLoan.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account':
                if (value === 'disabled') {
                    await this.loanPaymentMultiStep.accounts.specifySelector('__DATA_SELECTOR__', '[disabled]').waitForDisplayed({timeout: config.wait.M});
                    break;
                }else {
                    await this.loanPaymentMultiStep.accounts.specifySelector('__DATA_SELECTOR__', '').waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'account summary':
                await this.loanPaymentMultiStep.accountTextSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'import pay':
                await this.loanPaymentMultiStep.payImport.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'import pending':
                await this.loanPaymentMultiStep.pendingImport.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt':
                await this.loanPaymentMultiStep.receipt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button one account':
                await this.loanPaymentMultiStep.continueButtonOneAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button pay':
                await this.loanPaymentMultiStep.payButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button continue settlement':
                await this.continueSettlementButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link choose type settlement':
                await this.chooseTypeSett.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button exit settlement':
                await this.exitButtonSett.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay import settlement':
                await this.payImportSett.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message settlement':
                await this.messageSett.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retirement account':
                await this.loanPaymentMultiStep.retirementAccounts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message insuficient amount all account':
                await this.loanPaymentMultiStep.messageInsuficient.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message insuficient amount':
                await this.loanPaymentMultiStep.messageInsuficientIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon messages account':
                await this.loanPaymentMultiStep.messageAccountIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text message account':
                await this.loanPaymentMultiStep.messageTextAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link call':
                await this.loanPaymentMultiStep.retryButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button continue':
                await this.screenErrButtonAccept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exchange title':
                this.isSpherica()
                    ? await (await this.titleChange.elements()).value[0].waitForDisplayed({timeout: config.wait.M})
                    : await this.titleChange.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change button':
                await this.changeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'keep changes button':
                await this.keepChangesButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change button account':
                await this.changeButtonAcount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'keep changes button account':
                await this.keepChangesButtonAcount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info success':
                await this.labelInfoSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date success':
                await this.dateSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button clouse':
                await this.btnClouse.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({
                    key: item,
                    args: arguments[0],
                });
        }
    }

    async accessApaymentType(type) {
        const paymentTypeButton= this.loanPaymentMultiStep.paymentTypeButton.specifySelector({placeholder:'__DATA_SELECTOR__', value: type });
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
        await (await paymentTypeButton.waitForDisplayed({timeout: config.wait.L}))
            .click();
    }

    async accessSeeDetail(){
        await this.seeDetail.waitForClickable({timeout: config.wait.M});
        await this.seeDetail.click();
    }

    async accessHelp(){
        await this.loanPaymentDetailContainer.waitForAnimation({timeout: config.wait.M});
        await this.helpButton.waitForClickable({timeout: config.wait.M});
        await this.helpButton.click();
    }

    async accessCloseDetail(){
        await this.closeDetailButton.waitForClickable({timeout: config.wait.M});
        await this.closeDetailButton.click();
    }

    async accessCloseConcept(){
        await this.closeConceptButton.waitForClickable({timeout: config.wait.M});
        await this.closeConceptButton.click();
    }

    async accessReceipt(){
        await this.continueReceiptButton.waitForClickable({timeout: config.wait.M});
        await this.continueReceiptButton.click();
    }

    async accessAmount({amount}) {
        await this.loanPaymentOtherAmountContainer.waitForAnimation({timeout: config.wait.M});
        await this.amountInput.waitForDisplayed({timeout: config.wait.M});
        await this.amountInput.setValue({value: amount});
    }

    async accessCalculatePayment() {
        await this.calculatePaymentButton.waitForClickable({timeout: config.wait.M});
        await this.calculatePaymentButton.click();
    }

    async accessContinue() {
        await this.continueButton.waitForClickable({timeout: config.wait.M});
        await this.continueButton.click();
    }

    async accessContinueRadio() {
        await this.continueButtonRadio.waitForClickable({timeout: config.wait.M});
        await this.continueButtonRadio.click();
    }

    async accessResumen(){
        const account = global.user.products.account.number;
        await this.loanPaymentMultiStep.account.specifySelector('__DATA_SELECTOR__', account).scrollIntoView();
        await this.loanPaymentMultiStep.account.specifySelector('__DATA_SELECTOR__', account).waitForDisplayed({timeout: config.wait.L});
        await this.loanPaymentMultiStep.account.specifySelector('__DATA_SELECTOR__', account).click();
    }

    async accessChangeAmountEntered() {
        await this.changeAmountEntered.waitForClickable({timeout: config.wait.M});
        await this.changeAmountEntered.click();
    }

    async accessContinueSettlement() {
        await this.continueSettlementButton.waitForClickable({timeout: config.wait.M});
        await this.continueSettlementButton.click();
    }

    async accessChangeTypePayment(){
        await this.loanPaymentMultiStep.changeTypeButton.waitForClickable({timeout: config.wait.M});
        await this.loanPaymentMultiStep.changeTypeButton.click();
        await this.loanPaymentMultiStep.changeTypePayment.waitForClickable({timeout: config.wait.M});
        await this.loanPaymentMultiStep.changeTypePayment.click();
        await this.loanPaymentMultiStep.changeContinueButton.waitForClickable({timeout: config.wait.M});
        await this.loanPaymentMultiStep.changeContinueButton.click();
    }

    async accessSeeAllAccounts(){
        await this.loanPaymentMultiStep.seeAllAccount.waitForClickable({timeout: config.wait.M});
        await this.loanPaymentMultiStep.seeAllAccount.click();

    }

    async accessExit() {
        await this.exitButtonImportReceipt.waitForClickable({timeout: config.wait.M});
        await this.exitButtonImportReceipt.click();
    }

    async accessTermReduction() {
        await this.termReductionOption.waitForClickable({timeout: config.wait.M});
        await this.termReductionOption.click();
    }
    async accessPay() {
        await this.loanPaymentMultiStep.payButton.waitForClickable({timeout: config.wait.M});
        await this.loanPaymentMultiStep.payButton.click();
    }

    async confirmShowData(otp = '11111111') {
        await this.fillOtp(otp);
        await this.waitUntilSpinnerVeil({timeoutToDisappear: config.wait.L});
    }

    async retryOperative(times) {
        let i = 0;
        while (i < times) {
            await this.loanPaymentMultiStep.retryButton.scrollIntoView();
            await this.loanPaymentMultiStep.retryButton.click();
            i++;
        }
    }

    async selectionReductionTerm(){
        await this.btnRadioTerm.waitForDisplayed({timeout: config.wait.M});
        await this.btnRadioTerm.click();
        await this.btnContinue.waitForDisplayed({timeout: config.wait.M});
        await this.btnContinue.click();
    }

    async selectQuotaReduction(){
        await this.btnRadioShare.waitForDisplayed({timeout: config.wait.M});
        await this.btnRadioShare.click();
        await this.btnContinue.waitForDisplayed({timeout: config.wait.M});
        await this.btnContinue.click();
    }

    async selectRetirementAccount(){
        await this.retirementAccount.waitForDisplayed({timeout: config.wait.M});
        await this.retirementAccount.waitForClickable({timeout: config.wait.M});
        await this.retirementAccount.click();
    }
    async selectOptionLink(option) {
        switch (option) {
            case 'amount':
                this.isSpherica()
                    ? await (await this.linkChangeAmount.elements()).value[0].waitForDisplayed({ timeout: config.wait.M })
                    : await this.linkChangeAmount.waitForDisplayed({ timeout: config.wait.M });
                this.isSpherica()
                    ? await (await this.linkChangeAmount.elements()).value[0].click()
                    : await this.linkChangeAmount.click();
                break;
            case 'account':
                await this._hideLoanPaymentSummary(true);
                this.isSpherica()
                    ? await (await this.linkChangeAccount.elements()).value[0].waitForDisplayed({ timeout: config.wait.M })
                    : await this.linkChangeAccount.waitForDisplayed({ timeout: config.wait.M });
                this.isSpherica()
                    ? await (await this.linkChangeAccount.elements()).value[0].click()
                    : await this.linkChangeAccount.click();
                await this._hideLoanPaymentSummary(false);
                break;
            default:
                throw new Error(`Type ${option} is not defined`);
        }
    }

    async _hideLoanPaymentSummary(attributeValue) {
        const summaryPaymentInfo = this.isSpherica() ? (await this.loanPaymentSummary.elements()).value[0] : this.loanPaymentSummary;
        await summaryPaymentInfo.execute({
            script: () => this.setAttribute('hidden', true),
            args: [attributeValue]
        });
    }
}
export default new LoanPayment();
