import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('promotionsAdvancedPayments')
class PromotionsAdvancedPayments extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-promotionsAdvancedPayments[state="active"]',
            elements: {
                panel: 'card-transaction-servicing-credit-card-payment-own-cards-cc-promotions-advanced-payment',
                header: '#header-main',
                backBtn: '#header-main #btn-close',
                promotionsStep: {
                    properties: {
                        root: '#select-promotions-step'
                    },
                    promotions: '[data-tag-name="bbva-form-control-input"]',
                    promotionContinueBtn: '[data-tag-name="bbva-button-default"]',
                    editButton: '#editButton',
                    viewMorePromotions: '[data-tag-name="bbva-type-text"]'
                },
                amountPayStep: {
                    properties: {
                        root: '#amount-to-pay-step'
                    },
                    radioBtnMonthlyAmount: '[data-tag-name="bbva-form-radio-button"][value="monthlyAmount"]',
                    radioBtnTotalAmount: '[data-tag-name="bbva-form-radio-button"][value="totalAmount"]',
                    radioBtnOtherAmount: '[data-tag-name="bbva-form-radio-button"][value="otherAmount"]',
                    amountContinueBtn: '[data-tag-name="bbva-button-default"][name="continue-button"]',
                    editButton: '#editButton',
                    inputAmount: 'input',
                    errorMessage: 'div.message.error .message-error.notification',
                },
                accountStep: {
                    properties: {
                        root: '#select-account-step'
                    },
                    retirementAcc: '#selectedAccountLink',
                    viewMoreBtn: '#showMoreAccounts',
                    editButton: '#editButton',
                    accountList: '.account-item-bottom',
                    amount: '[data-tag-name="bbva-type-amount"]',
                    numberAccount: '[data-tag-name="bbva-badge-reference"]',
                    errorFounds: '[data-tag-name="bbva-notification-help"]'
                },
                expandableMultistepSummaryContinueBtn: '[data-tag-name="bbva-expandable-multistep"] .button',
                noMinimumPaymentStepAcceptButton: '#changeOperative .footer-button',
                withoutPromStepAcceptBtn: '#withoutPromotionsModal .footer-button',
                backModalStep: {
                    properties: {
                        root: '#exitModal',
                    },
                    exitBtn: '[data-tag-name=bbva-button-default]',
                    continueProsBtn: '[data-tag-name=bbva-type-link]'
                },
                successModal:{
                    properties:{
                        root: '[data-tag-name="bbva-help-modal"][header-text="Pagar anticipo a promoción"]'
                    },
                    checkIcon:'[data-tag-name="bbva-clip-microillustration"]',
                    text:'.microilustration-container [data-tag-name="bbva-type-text"]',
                    amountSection:'.payment-description-container',
                    shareBtn:'[data-tag-name="bbva-button-action"]',
                },
                retryErrorModal:{
                    properties:{
                        root: '#retryErrorModal'
                    },
                    retryBtn: '[data-tag-name="bbva-button-default"]',
                    retryIcon: '[data-tag-name="bbva-type-icon"]',
                    retryText: '[data-tag-name="bbva-type-text"]'
                },
                errorModal: {
                    properties:{
                        root:'#errorFullModal'
                    },
                    errorBtn: '[data-tag-name="bbva-button-default"]',
                    errorIcon: '[data-tag-name="bbva-clip-microillustration"]',
                    errorContent: '#helpModalContent'
                }
            },
            requiredElements: [
                'panel'
            ]
        });
    }

    async _screenValidation({item = {}}) {
        switch (item.toLowerCase()) {
            case 'panel':
                await this.panel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.backBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'monthly amount':
                await this.amountPayStep.radioBtnMonthlyAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'total amount':
                await this.amountPayStep.radioBtnTotalAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'other amount':
                await this.amountPayStep.radioBtnOtherAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error message':
                await this.amountPayStep.errorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retirement account':
                await this.accountStep.retirementAcc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account':
                await this.accountStep.retirementAcc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account list':
                await this.accountStep.accountList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit button promotion':
                await this.promotionsStep.editButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit button amount':
                await this.amountPayStep.editButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit button account':
                await this.accountStep.editButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check icon':
                await this.successModal.checkIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text success':
                await this.successModal.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount section':
                await this.successModal.amountSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share button':
                await this.successModal.shareBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information message':
                await this.accountStep.errorFounds.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retry icon':
                await this.retryErrorModal.retryIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retry button':
                await this.retryErrorModal.retryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retry text':
                await this.retryErrorModal.retryText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error icon':
                await this.errorModal.errorIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error text':
                await this.errorModal.errorContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button call bbva line':
                await this.errorModal.errorBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async retryModal(retries) {
        for (let i = 0; i < retries; i++) {
            await this.retryErrorModal.retryBtn.waitForDisplayed({ timeout: config.wait.M });
            await this.retryErrorModal.retryBtn.click();
        }
    }

    async typePayment(type){
        await this.selectPromotions('0');
        await this.continuePromotionStep();
        await this.selectAmount(type);
        if (type=== 'other amount'){
            await this.valueAmount('10');
        }
        await this.continueAmountPayStep();
    }

    async continueAmountPayStep(){
        await this.amountPayStep.amountContinueBtn.scrollIntoView();
        await this.amountPayStep.amountContinueBtn.waitForDisplayed();
        await this.amountPayStep.amountContinueBtn.click();
    }

    async continuePromotionStep(){
        await this.promotionsStep.promotionContinueBtn.scrollIntoView();
        await this.promotionsStep.promotionContinueBtn.waitForDisplayed({timeout: config.wait.M});
        await this.promotionsStep.promotionContinueBtn.click();
    }

    async summaryScreen(){
        await this.selectAccount();
        await this.accessSummary();
    }

    async selectPromotions(promotion){
        await this.promotionsStep.promotions.waitForDisplayed({timeout: config.wait.M});
        await (await this.promotionsStep.promotions.elements()).value[promotion].click();
    }

    async selectAmount(type){
        switch (type.toLowerCase()) {
            case 'monthly payment':
                await this.amountPayStep.radioBtnMonthlyAmount.waitForDisplayed({timeout: config.wait.M});
                await this.amountPayStep.radioBtnMonthlyAmount.click();
                break;
            case 'total amount':
                await this.amountPayStep.radioBtnTotalAmount.waitForDisplayed({timeout: config.wait.M});
                await this.amountPayStep.radioBtnTotalAmount.click();
                break;
            case 'other amount':
                await this.amountPayStep.radioBtnOtherAmount.waitForDisplayed({timeout: config.wait.M});
                await this.amountPayStep.radioBtnOtherAmount.click();
                break;
            default:
                throw new Error(`Undefined "${type}" option to monthly payment, total amount or other amount`);
        }
    }

    async selectAccount(){
        await this.accountStep.retirementAcc.waitForDisplayed({timeout: config.wait.M});
        await this.accountStep.retirementAcc.click();
    }

    async showModalExit(){
        await this.backBtn.waitForDisplayed({timeout: config.wait.M});
        await this.backBtn.click();
    }

    async accessSummary(){
        await this.expandableMultistepSummaryContinueBtn.waitForDisplayed({timeout: config.wait.M});
        await this.expandableMultistepSummaryContinueBtn.click();
    }

    async valueAmount(amount){
        await this.amountPayStep.inputAmount.scrollIntoView();
        await this.amountPayStep.inputAmount.waitForDisplayed({timeout: config.wait.M});
        await this.amountPayStep.inputAmount.setValue({value: amount});
    }

    async backToDetail(){
        await this.noMinimumPaymentStepAcceptButton.waitForDisplayed({timeout: config.wait.M});
        await this.noMinimumPaymentStepAcceptButton.click();
    }

    async backToDetailwithoutPromStep(){
        await this.withoutPromStepAcceptBtn.waitForDisplayed({timeout: config.wait.M});
        await this.withoutPromStepAcceptBtn.click();
    }

    async changePromotion(){
        await this.promotionsStep.editButton.waitForDisplayed({timeout: config.wait.M});
        await this.promotionsStep.editButton.click();
    }

    async changeAmount(){
        await this.amountPayStep.editButton.waitForDisplayed({timeout: config.wait.M});
        await this.amountPayStep.editButton.click();
    }

    async changeAccount(){
        await this.accountStep.editButton.waitForDisplayed({timeout: config.wait.M});
        await this.accountStep.editButton.click();
    }

    async accessToViewMore(){
        await this.accountStep.viewMoreBtn.waitForDisplayed({timeout: config.wait.M});
        await this.accountStep.viewMoreBtn.click();
    }

    async accessToViewMorePromotions(){
        await this.promotionsStep.viewMorePromotions.waitForDisplayed({timeout: config.wait.M});
        await this.promotionsStep.viewMorePromotions.click();
    }

    async backModal(exit){
        switch (exit.toLowerCase()) {
            case 'exit':
                await this.backModalStep.exitBtn.waitForDisplayed({timeout: config.wait.M});
                await this.backModalStep.exitBtn.click();
                break;
            case 'continue the process':
                await this.backModalStep.continueProsBtn.waitForDisplayed({timeout: config.wait.M});
                await this.backModalStep.continueProsBtn.click();
                break;
            default:
                throw new Error(`Undefinite "${exit}" option to exit or continue the process`);
        }
    }

    async exitPage(card){
        switch (card.toLowerCase()) {
            case 'exit':
                await this.backModal('exit');
                break;
            case 'promotion not applicable':
                await this.backToDetailwithoutPromStep();
                break;
            case 'minimum not applicable':
                await this.backToDetail();
                break;
            default:
                throw new Error(`Undefined "${card}" option to exit, promotion not applicable or minimum playment`);
        }
    }

    async selectChange(change){
        switch (change.toLowerCase()) {
            case 'promotion':
                await this.changePromotion();
                await this.selectPromotions('1');
                await this.continuePromotionStep();
                await this.selectAmount('monthly payment');
                await this.continueAmountPayStep();
                break;
            case 'amount':
                await this.changeAmount();
                await this.selectAmount('other amount');
                await this.valueAmount('10');
                await this.continueAmountPayStep();
                break;
            case 'account':
                await this.changeAccount();
                break;
            default:
                throw new Error(`Undefined "${change}" option to change step`);
        }
    }
}
export default new PromotionsAdvancedPayments();
