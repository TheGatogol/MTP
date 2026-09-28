import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class MortgagePaymentPage extends AbstractGlomoPage {
    constructor() {
        const bbvaMain='bbva-header-main';
        const loanDescription='loan-payment-description';
        const loanRepeatList='loan-repeat-list-simple';
        const mortSettle='#loanPaymentSetlementPage';
        const otherAm='#mortgagePaymentOtherAmountPage';
        const detailOtherAm='#loanOtherAmountDetailPage';
        const receiptAmount='#mortgagePaymentReceiptAmountPage';
        const step1 = '#mortgagePaymentMultiStepPage';
        const step2 = 'loan-summary-view';
        const step3=  'loan-payment-options bbva-expandable-step';
        const multiStep= '#mortgagePaymentMultiStepPage';
        const expMulti='bbva-expandable-multistep';
        super({
            root: '#cells-template-mortgagePayment[state="active"]',
            elements: {
                header: {
                    btnExit: `${step1} #btn-close`,
                },
                summaryDetail: {
                    detailMortgage: `${step1} ${step2} #summaryLoan bbva-core-heading .heading-label`,
                    alias:`${step1} ${step2} #summaryLoan loan-list-item-simple:first-of-type`,
                    numberMortgage:`${step1} ${step2} #summaryLoan loan-list-item-simple:nth-child(2)`,
                    outBalanace:`${step1} ${step2} #summaryLoan loan-list-item-simple:last-of-type`,
                },
                optionsPayment: {
                    typePayment:`${step1} ${step3} #headingLabel`,
                    amountReceipt: 'bbva-aggregation-link-list-spherica [id="titleAmountOverdue"]',
                    otherAmount: 'bbva-aggregation-link-list-spherica [id="titleOtherAmount"]',
                    mortgageLiquidation: 'bbva-aggregation-link-list-spherica [id="titleSettleLoan"]',
                },
                amountReceiptView:{
                    titleAmountReceipt: `${receiptAmount} ${bbvaMain} #heading`,
                    textAmReDetailPayment: `${receiptAmount} ${loanDescription} bbva-header-category:first-of-type`,
                    textAmountReceipt: `${receiptAmount} ${loanDescription} bbva-header-category:last-of-type`,
                    firstQuantityAmountReceipt:`${receiptAmount} ${loanDescription} ${loanRepeatList} loan-list-item-simple:first-of-type`,
                    subTextAmount:`${receiptAmount} ${loanDescription} ${loanRepeatList} loan-list-item-simple bbva-type-text`,
                    secondQuantityAmountReceipt:`${receiptAmount} ${loanDescription} ${loanRepeatList} loan-list-item-simple bbva-type-amount`,
                },
                otherAmountView:{
                    titleOtherAmount: `${otherAm} ${bbvaMain} #heading`,
                    subDtlPaymentOtAm: `${otherAm} ${loanDescription} bbva-header-category:first-of-type`,
                    subtitleOtAm: `${otherAm} ${loanDescription} bbva-header-category:last-of-type`,
                    txtInputQuantityOtAm:`${otherAm} loan-amount-input bbva-type-text`,
                    txtExcOtAm:`${otherAm} loan-amount-input bbva-form-amount bbva-notification-help`,
                    inputAmount:`${otherAm} loan-amount-input input[slot=_input]`,
                    btnDeleteInput:`${otherAm} loan-amount-input bbva-form-amount bbva-button-default div`,
                    erroMessageAmountMin:`${otherAm} loan-amount-input bbva-form-amount div.message.error`,
                },
                DetailOtherAmount:{
                    titleHdrDetailOtherAmount: `${detailOtherAm} ${bbvaMain} #heading`,
                    stepTwoSubDtlPaymentOtAm:`${detailOtherAm} ${loanDescription} bbva-header-category:first-of-type`,
                    stepTwoSubtitleOtAm:`${detailOtherAm} ${loanDescription} bbva-header-category:last-of-type`,
                    importAmmountTextDtlOtAm:`${detailOtherAm} ${loanDescription} ${loanRepeatList} bbva-list-simple:first-of-type`,
                    advertisingIcon:`${detailOtherAm} ${loanDescription} #secondaryMessages bbva-notification-message [data-tag-name=bbva-type-icon]`,
                    advertisingText:`${detailOtherAm} ${loanDescription} #secondaryMessages bbva-notification-message span`,
                },

                mortgageSettlementView:{
                    titleMortgageSettlement: `${mortSettle} ${bbvaMain} #heading`,
                    subTextDtlPaymentMoSe:`${mortSettle} ${loanDescription} bbva-header-category:first-of-type`,
                    receiptRemainAmount:`${mortSettle} ${loanDescription} bbva-header-category:last-of-type`,
                    amountSettled:`${mortSettle} ${loanDescription} ${loanRepeatList} bbva-list-simple`,
                    iconAmountSettlement: `${mortSettle} ${loanDescription} #secondaryMessages bbva-notification-message`,
                },
                multistepMortgage:{
                    titlePayCredit:`${multiStep} #heading`,
                    detailMortmulti: `${multiStep} ${expMulti} #summaryLoan bbva-core-heading .heading-label`,
                    summaryMortgage:`${multiStep} ${expMulti} #summaryLoan ${loanRepeatList}`,
                    subtitleTypePaySummary:`${multiStep} ${expMulti} bbva-expandable-step #headingLabel`,
                    btnChangeTypePay: '#mortgagePaymentMultiStepPage bbva-expandable-multistep loan-payment-options bbva-expandable-step bbva-type-link#editButton',
                    receiptAmountSummary:`${multiStep} ${expMulti} bbva-expandable-step bbva-header-category`,
                    numberOfReceiptSummary:`${multiStep} ${expMulti} bbva-expandable-step ${loanRepeatList} bbva-list-simple`,
                    titleRetireAccount:`${multiStep} ${expMulti} bbva-expandable-step div.header`,
                    firstAccount:`${multiStep} ${expMulti} bbva-expandable-step [data-tag-name="loan-account-item"]:first-of-type`,
                    lastAccount:`${multiStep} ${expMulti} bbva-expandable-step [data-tag-name="loan-account-item"]:last-of-type`,
                    btnSeeAllAccounts: `${multiStep} ${expMulti} bbva-expandable-step bbva-header-category [data-tag-name="bbva-type-link"]`,
                    btnChangeAccount: `${multiStep} ${expMulti} div loan-payment-account bbva-expandable-step #editButton`,
                    btnPayMortgage:`${multiStep} ${expMulti} loan-summary-payment-info loan-button-group #primaryBtn`,
                    amountToPay:`${multiStep} ${expMulti} bbva-type-text:first-of-type`,
                    numberOfPay:`${multiStep} ${expMulti} bbva-type-amount`,
                    commissionToPay:`${multiStep} ${expMulti} bbva-type-text:last-of-type`,
                    iconErrorBalance:`${multiStep} ${expMulti} bbva-expandable-step bbva-notification-message [data-tag-name="bbva-type-icon"]`,
                    messageErrorBalance:`${multiStep} ${expMulti} bbva-expandable-step bbva-notification-message [data-tag-name="bbva-type-text"]`,
                    messageErrorBalanceAccount:`${multiStep} ${expMulti} bbva-expandable-step [data-tag-name="loan-account-item"]:first-of-type bbva-notification-help[variant="alert"]`,
                },
                buttons:{
                    btnExitAmountReceipt:`${receiptAmount} ${bbvaMain} #btn-close`,
                    btnNextAmountRe: `${receiptAmount} loan-button-group #primaryBtn`,
                    btnChooseOtherPaymentAmRc: `${receiptAmount} loan-button-group #secondaryBtn`,
                    btnExitOtherAmount:`${otherAm} ${bbvaMain} #btn-close`,
                    calculatePay: `${otherAm} loan-button-group #primaryBtn`,
                    btnChooseOtherPaymentOtAm: `${otherAm} loan-button-group #secondaryBtn div`,
                    btnExitMortgageSettlement:`${mortSettle} ${bbvaMain} #btn-close`,
                    btnContinueMortgageSettlement: `${mortSettle} loan-button-group #primaryBtn`,
                    btnChooseOtherPaymentMoSettlement: `${mortSettle} loan-button-group #secondaryBtn div`,
                    btnChange:'#mortgagePaymentMultiStepPage bbva-expandable-multistep loan-payment-options bbva-expandable-step loan-button-group #primaryBtn',
                    btnKeepSelection:`${multiStep} ${expMulti} bbva-expandable-step #secondaryBtn bbva-type-text`,
                    btnContinueDtlOtAm: `${detailOtherAm} loan-button-group #primaryBtn`,
                    btnChangeAmmountInput: `${detailOtherAm} loan-button-group #secondaryBtn`,
                    btnExitDtlOtAm:`${detailOtherAm} ${bbvaMain} #btn-close`,
                },
                warnings:{
                    iconWarning:'[data-tag-name=loan-modal-manager] [data-tag-name=bbva-help-modal] [data-tag-name=bbva-type-icon]',
                    textWarning:'[data-tag-name=loan-modal-manager] [data-tag-name=bbva-help-modal] #helpModalContent',
                    btnContinueMeMo:'[data-tag-name="bbva-help-modal"] bbva-button-default.footer-button.link',
                    btnExitMeMo: '[data-tag-name="bbva-help-modal"] .slot-footer > bbva-button-default:first-of-type',
                    btnCancelMeMo:'[data-tag-name=loan-modal-manager] [data-tag-name=bbva-help-modal] [data-tag-name=bbva-button-default][variant="secondary"]',

                },
            },
            requiredElements: [
                'header',
            ]
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'exit button':
                await this.header.btnExit.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'alias':
                await this.summaryDetail.alias.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'detail mortgage':
                await this.summaryDetail.detailMortgage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'number mortgage':
                await this.summaryDetail.numberMortgage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'outstanding balance':
                await this.summaryDetail.outBalanace.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'type payment':
                await this.optionsPayment.typePayment.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount receipt':
                await this.optionsPayment.amountReceipt.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'another amount':
                await this.optionsPayment.otherAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'mortgage liquidation':
                await this.optionsPayment.mortgageLiquidation.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'exit amount receipt':
                await this.buttons.btnExitAmountReceipt.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'title amount receipt':
                await this.amountReceiptView.titleAmountReceipt.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'text payment detail':
                await this.amountReceiptView.textAmReDetailPayment.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'text amount receipt':
                await this.amountReceiptView.textAmountReceipt.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'first quantity amount':
                await this.amountReceiptView.firstQuantityAmountReceipt.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'subtext amount':
                await this.amountReceiptView.subTextAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'second quantity amount':
                await this.amountReceiptView.secondQuantityAmountReceipt.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button continue amount receipt':
                await this.buttons.btnNextAmountRe.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button choose other payment amount receipt':
                await this.buttons.btnChooseOtherPaymentAmRc.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'exit other amount':
                await this.buttons.btnExitOtherAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'title other amount':
                await this.otherAmountView.titleOtherAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'subtitle detail payment other amount':
                await this.otherAmountView.subDtlPaymentOtAm.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'subtitle other amount':
                await this.otherAmountView.subtitleOtAm.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'input text amount':
                await this.otherAmountView.txtInputQuantityOtAm.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'text exceeds amount':
                await this.otherAmountView.txtExcOtAm.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button choose other payment other amount':
                await this.buttons.btnChooseOtherPaymentOtAm.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'input amount':
                await this.otherAmountView.inputAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'error message amount':
                await this.otherAmountView.erroMessageAmountMin.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button continue other amount':
                await (await this.buttons.calculatePay.waitForDisplayed({timeout: config.wait.L}))
                    .waitForEnabled({timeout: config.wait.L, reverse: value === 'disabled'});
                break;
            case 'button x input amount':
                await this.otherAmountView.erroMessageAmountMin.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'exit mortgage settlement':
                await this.buttons.btnExitMortgageSettlement.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'title mortgage settlement':
                await this.mortgageSettlementView.titleMortgageSettlement.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'subtitle detail mortgage settlement':
                await this.mortgageSettlementView.subTextDtlPaymentMoSe.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount of remaining receipts':
                await this.mortgageSettlementView.receiptRemainAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount settled':
                await this.mortgageSettlementView.amountSettled.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'message settled':
                await this.mortgageSettlementView.iconAmountSettlement.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button continue mortgage settled':
                await this.buttons.btnContinueMortgageSettlement.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button choose other payment mortgage settled':
                await this.buttons.btnChooseOtherPaymentMoSettlement.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'title pay credit':
                await this.multistepMortgage.titlePayCredit.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'detail of multistep':
                await this.multistepMortgage.detailMortmulti.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'summary of mortgage':
                await this.multistepMortgage.summaryMortgage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'subtitle type payment':
                await this.multistepMortgage.subtitleTypePaySummary.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button change type payment':
                await this.multistepMortgage.btnChangeTypePay.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'subtitle receipt amount summary':
                await this.multistepMortgage.receiptAmountSummary.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'number of receipt':
                await this.multistepMortgage.numberOfReceiptSummary.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'subtitle retirement account':
                await this.multistepMortgage.titleRetireAccount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'first account':
                await this.multistepMortgage.firstAccount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'last account':
                await this.multistepMortgage.lastAccount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button see all accounts':
                await this.multistepMortgage.btnSeeAllAccounts.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button change account':
                await this.multistepMortgage.btnChangeAccount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button pay amount':
                await this.multistepMortgage.btnPayMortgage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount to pay':
                await this.multistepMortgage.amountToPay.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'number amount to pay':
                await this.multistepMortgage.numberOfPay.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'commission to pay':
                await this.multistepMortgage.commissionToPay.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'buton change pay two':
                await this.buttons.btnChangeTypePayTwo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'buton keep selection and continue':
                await this.buttons.btnChangeTypePayTwo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'icon message':
                await this.warnings.iconWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text warning message':
                await this.warnings.textWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button continue message':
                await this.warnings.btnContinueMeMo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button cancel message':
                await this.warnings.btnCancelMeMo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error icon message':
                await this.multistepMortgage.iconErrorBalance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error message':
                await this.multistepMortgage.messageErrorBalance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error message account':
                await this.multistepMortgage.messageErrorBalanceAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessOption(option){
        switch(option.toLowerCase()) {
            case 'amount receipt':
                await this.optionsPayment.amountReceipt.waitForClickable({timeout: config.wait.L});
                await this.optionsPayment.amountReceipt.click();
                break;
            case 'other amount':
                await this.optionsPayment.otherAmount.waitForClickable({timeout: config.wait.L});
                await this.optionsPayment.otherAmount.click();
                break;
            case 'mortgage liquidation':
                await this.optionsPayment.mortgageLiquidation.waitForClickable({timeout: config.wait.L});
                await this.optionsPayment.mortgageLiquidation.click();
                break;
            default:
                throw new Error(`This option "${option} is not defined in the page"`);
        }
    }

    async continueSummary(option){
        switch(option.toLowerCase()) {
            case 'amount receipt':
                await this.buttons.btnNextAmountRe.waitForClickable({timeout: config.wait.L});
                await this.buttons.btnNextAmountRe.click();
                break;
            case 'other amount':
                await this.buttons.calculatePay.waitForClickable({timeout: config.wait.L});
                await this.buttons.calculatePay.click();
                break;
            case 'mortgage liquidation':
                await this.buttons.btnContinueMortgageSettlement.waitForClickable({timeout: config.wait.L});
                await this.buttons.btnContinueMortgageSettlement.click();
                break;
            case 'detail other amount':
                await this.buttons.btnContinueDtlOtAm.waitForClickable({timeout: config.wait.L});
                await this.buttons.btnContinueDtlOtAm.click();
                break;
            default:
                throw new Error(`This option "${option} is not defined in the page"`);
        }
    }

    async selectsAccount(account){
        switch(account.toLowerCase()) {
            case 'first account':
                await this.multistepMortgage.firstAccount.waitForDisplayed({timeout: config.wait.L});
                await this.multistepMortgage.firstAccount.scrollIntoView();
                await this.multistepMortgage.firstAccount.click();
                break;
            case 'last account':
                await this.multistepMortgage.lastAccount.waitForDisplayed({timeout: config.wait.L});
                await this.multistepMortgage.lastAccount.scrollIntoView();
                await this.multistepMortgage.lastAccount.click();
                break;
            default: throw new Error(`This option "${account}" is not defined in the page"`);
        }
    }

    async changeOneOperative(operative) {
        switch (operative.toLowerCase()) {
            case 'type of payment': {
                const btnChangeTypePay = await browser.$('#mortgagePaymentMultiStepPage bbva-expandable-multistep loan-payment-options bbva-expandable-step bbva-type-link#editButton');
                await btnChangeTypePay.waitForDisplayed({ timeout: config.wait.L });
                await btnChangeTypePay.scrollIntoView();
                await btnChangeTypePay.waitForClickable({ timeout: config.wait.L });
                await btnChangeTypePay.click();
                break;
            }
            case 'type of account':
                await this.multistepMortgage.btnChangeAccount.waitForDisplayed({ timeout: config.wait.L });
                await this.multistepMortgage.btnChangeAccount.scrollIntoView();
                await this.multistepMortgage.btnChangeAccount.click();
                break;
            default:
                throw new Error(`This option "${operative}" is not defined in the page"`);
        }
    }

    async selectsOneStep(option){
        switch(option.toLowerCase()) {
            case 'change':
                await this.buttons.btnChange.waitForDisplayed({timeout: config.wait.L});
                await this.buttons.btnChange.click();
                break;
            case 'keep selection and continue':
                await this.buttons.btnKeepSelection.waitForDisplayed({timeout: config.wait.L});
                await this.buttons.btnKeepSelection.click();
                break;
            default:
                throw new Error(`This option "${option}" is not defined in the page`);
        }
    }

    async insertAmmount(ammount) {
        switch(ammount.toLowerCase()){
            case 'less than 1':
                await (await this.otherAmountView.inputAmount.waitForClickable({timeout: config.wait.L})).click();
                await this.otherAmountView.inputAmount.setValue({value :0 });
                break;
            case 'less than the receipt':
                await (await this.otherAmountView.inputAmount.waitForClickable({timeout: config.wait.L})).click();
                await this.otherAmountView.inputAmount.setValue({value :2000 });
                break;
            case 'other amount':
                await (await this.otherAmountView.inputAmount.waitForClickable({timeout: config.wait.L})).click();
                await this.otherAmountView.inputAmount.setValue({value :4000 });
                break;
            case 'greater than the receipt':
                await (await this.otherAmountView.inputAmount.waitForClickable({timeout: config.wait.L})).click();
                await this.otherAmountView.inputAmount.setValue({value :1000000 });
                break;
            case 'equal amount receipt':
                await (await this.otherAmountView.inputAmount.waitForClickable({timeout: config.wait.L})).click();
                await this.otherAmountView.inputAmount.setValue({value :global.user.amountReceipt});
                break;
            case 'amount equal to overdue bills':
                await (await this.otherAmountView.inputAmount.waitForClickable({timeout: config.wait.L})).click();
                await this.otherAmountView.inputAmount.setValue({value :global.user.overdueReceipts});
                break;
            case 'amount greater than overdue bills':
                await (await this.otherAmountView.inputAmount.waitForClickable({timeout: config.wait.L})).click();
                await this.otherAmountView.inputAmount.setValue({value :global.user.greaterOverdueReceipts});
                break;
            default:
                throw new Error(`This option "${ammount}" is not defined in the page`);
        }
    }

    async goBackAtDetail(){
        await this.header.btnExit.waitForClickable({ timeout: config.wait.M });
        await this.header.btnExit.click({ useActions: true });
        await this.warnings.btnExitMeMo.waitForClickable({ timeout: config.wait.M });
        await this.warnings.btnExitMeMo.click({ useActions: true });
    }

    async payMortgage(){
        await this.multistepMortgage.btnPayMortgage.waitForDisplayed({timeout: config.wait.L});
        await this.multistepMortgage.btnPayMortgage.click();
    }

    async goBackToEnterAmmount(){
        await this.buttons.btnChangeAmmountInput.waitForDisplayed({timeout: config.wait.L});
        await this.buttons.btnChangeAmmountInput.click();
    }
}
export default new MortgagePaymentPage();
