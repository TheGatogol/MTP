import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import BbvaHeaderMain from '../../components/bbva-header-main';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';

@page('financeTransactionMultipurchase')
class FinanceTransactionMultipurchase extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-financeTransactionMultipurchase[state="active"]',
            elements: {
                // Header
                header: BbvaHeaderMain,

                //Onboarding
                onboarding: {
                    properties: {
                        root: '[data-tag-name="onboarding-full-screen-carousel"] [data-tag-name="bbva-help-modal"]'
                    },
                    onboardingModalDescription: 'div.carousel-items',
                    onboardingEnterButton: '.footer [data-tag-name="bbva-button-default"]',
                    onboardingSliderButton: '[data-tag-name="bbva-button-default"].next',
                },

                //card
                cardImage: 'div.card #cardImage',
                cardNumber: 'div.card .num-product',
                deferredAmount: 'div.card [data-tag-name="bbva-amount"]#amount',
                deferredTitle: 'div.card div.text-amount',
                mainDescription: '#step-1 [data-tag-name="bbva-text"].description-text',

                //Purchase Selection
                purchases: '#step-1 .description-item-list [data-tag-name="bbva-list-option"]',
                purchaseSelected: '#step-1 .description-item-list [data-tag-name="bbva-list-option"] [data-tag-name="bbva-form-checkbox"][aria-checked="true"]',
                tooltipPurchases: '[data-tag-name="bbva-expandable-step"]#step-1 [data-tag-name="bbva-header-category"] .header-category [data-tag-name="bbva-icon"]',
                morePurchases: '.more-transactions-link [data-tag-name="bbva-link"]',
                spinnerLoadingPurchases: '#step-1 [data-tag-name="bbva-core-spinner"]',
                editPurchases: '[data-tag-name="bbva-expandable-step"]#step-1 #editButton',
                purchasesList: 'bbva-expandable-step div.description-item-list:nth-of-type(__INDEX__)',
                continuePurchasesButton: '[data-tag-name="bbva-expandable-step"]#step-1 #panel-button-1 [data-tag-name="bbva-button-default"]',
                infobox1: '#step-1 [data-tag-name="bbva-notification-message"].description-message',
                totalDeferredAmount: '#step-1 [data-tag-name="bbva-panel-button-fixed"]',
                confirmRetryShowTransactions: '#errorInfo [data-tag-name="bbva-link"]',
                descriptionErrorShowTransactions: '#errorInfo .paragraph',

                //monthList
                monthList: '[data-tag-name="bbva-expandable-step"]#step-2 div.content .radio-item-list bbva-list-option[value="__MONTHS__"]',
                editMonth: '[data-tag-name="bbva-expandable-step"]#step-2 #editButton',

                //detailFinanceTransaction
                monthsListToBeDeferred: 'bbva-expandable-step#step-2.animation.second-step[active] .radio-item-list',
                monthlyTitle: '[data-tag-name="bbva-expandable-step"] .summary [data-tag-name="bbva-text"] span.text.lines',
                monthlyPayment: '[data-tag-name="bbva-expandable-step"] .summary .summary-amount',
                detailTittle: 'div.description [data-tag-name="bbva-header-category"] .title-container',
                startPaymentDate: '[data-tag-name="bbva-expandable-step"] .summary [data-tag-name="bbva-list-simple"][label="Comienza a pagar el"]',
                startPaymentDateTooltip: '#start-date-help',
                deferredFee: '[data-tag-name="bbva-expandable-step"] .summary [data-tag-name="bbva-list-simple"][label="Tasa de interés anual fija"]',
                deferredFeeTooltip: '#commision-percentage-help',
                disclaimerFees: 'div.description [data-tag-name="bbva-notification-message"]',
                anualFeed: '[data-tag-name="bbva-list-simple"][label="Tasa de interés anual fija"]',
                anualFeedTooltip: '#anual-commision-help ',
                catFees: 'div.description div.list-item #cat-commision-help',
                catFeesTooltip: '#cat-commision-help',
                infoText: 'div.description [data-tag-name="bbva-notification-help"]',
                monthNumber: '[data-tag-name="bbva-expandable-step"] .summary [data-tag-name="bbva-list-simple"][label="Número de meses"]',
                monthSelected: '[data-tag-name="bbva-expandable-step"]#step-2 [id="editButton"]',
                monthlyTotalAmount: '[data-tag-name="bbva-panel-button-fixed"] div.header-content [data-tag-name="bbva-amount"]',
                totalDebt: '[data-tag-name="bbva-list-simple"][label="Total a pagar"]',
                continueFinanceButton: '#step-2 div.panel-button [data-tag-name="bbva-button-default"]',
                helpButton: '#step-2 div.panel-button [data-tag-name="bbva-link"] .box [data-tag-name="bbva-icon"]',
                //Terms and conditions
                acceptTermsAndConditions: '[data-tag-name="bbva-expandable-step"]#step-3 [data-tag-name="bbva-form-checkbox"]',
                acceptTermsAndConditionsButton: '[data-tag-name="bbva-expandable-step"]#step-3 div.panel-button [data-tag-name="bbva-button-default"]',
                editTermsAndConditionsButton: '[data-tag-name="bbva-expandable-step"]#step-3 #editButton',

                //Accept finance transaction multipurchase
                acceptInstallment: '[data-tag-name="bbva-panel-button-fixed"]#finance-transaction-multipurchase-summary-button [data-tag-name="bbva-button-default"]',
                signConnector: CellsSignOperationModal,

            },
            elementsSpherica: {
                signConnector: CellsSignOperationModalSpherica
            },
            requiredElements: ['header']
        });
    }

    async otpSms() {
        await this.signConnector.isLoaded();
        await this.signConnector.setPassword(12345678);
        await this.signConnector.confirmPassword();
    }

    async selectMonth(months) {
        await (await (await (await this.monthsListToBeDeferred.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.M}))
            .waitForEnabled({timeout: config.wait.M}))
            .scrollIntoView({block: 'center'});
        await this.selectMonthWithoutContinue(months);
        await this.detailTittle.scrollIntoView({block: 'start'});
        await (await (await (await this.continueFinanceButton.scrollIntoView({block: 'start'}))
            .waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L}))
            .click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
    }

    async selectMonthWithoutContinue(months) {
        const selector = this.monthList.specifySelector({placeholder: '__MONTHS__', value: months});
        await selector.waitForDisplayed({timeout: config.wait.L});
        await selector.scrollIntoView({block: 'center'});
        await selector.click();
    }

    async selectPurchase(purchaseNumber = 3, keepGoing) {
        let n = 0;
        while (n < purchaseNumber) {
            n++;
            await (await this.purchases.scrollIntoView({block: 'center'}))
                .waitForDisplayed({timeout: config.wait.L});
            const selector = await this.purchases.elements();
            await selector[n - 1].scrollIntoView({block: 'center'});
            await selector[n - 1].waitForDisplayed({timeout: config.wait.L});
            await selector[n - 1].waitForEnabled({timeout: config.wait.L});
            await selector[n - 1].click();
        }
        if (keepGoing === true) {
            await (await (await this.continuePurchasesButton.waitForEnabled({timeout: config.wait.L}))
                .waitForClickable({timeout: config.wait.L}))
                .click();
            await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
        }
    }

    async financeTransactionContinue() {
        await this.acceptTermsAndConditions.waitForClickable({timeout: config.wait.L});
        await this.acceptTermsAndConditions.click();
        await (await this.acceptTermsAndConditionsButton.waitForClickable({timeout: config.wait.L}))
            .click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
    }

    async consultsFinanceTransaction() {
        await (await (await (await (await this.editTermsAndConditionsButton.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({time: config.wait.S}))
            .scrollIntoView({block: 'start'}))
            .waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async _modalElementValidation({item, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'retry button':
            case 'understood button':
            case 'call bbva button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON}, {forceScroll: true});
                break;
            case 'exit button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CANCEL_BUTTON}, {forceScroll: true});
                break;
            case 'description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.MAIN_TEXT}, {forceScroll: true});
                break;
            default:
                await super._modalElementValidation({item, ...args});
        }
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'onboarding modal description':
                await this.onboarding.onboardingModalDescription.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'onboarding modal enter button':
                await this.onboarding.onboardingEnterButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'transaction list':
                await this.purchases.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'transaction selection':
                await this.purchaseSelected.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'deferred balance title':
                await this.deferredTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'deferred amount value':
                await this.deferredAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'total deferred amount':
                await this.totalDeferredAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'purchases continue button':
                await (await this.continuePurchasesButton.waitForDisplayed({timeout: config.wait.L}))
                    .waitForEnabled({timeout: config.wait.L, reverse: value === 'disabled'});
                break;
            case 'card image':
                await this.cardImage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card number':
                await this.cardNumber.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'monthly due amount':
                await this.monthlyPayment.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'monthly due title':
                await (await this.monthlyTitle.elements()).value[1].waitForDisplayed({timeout: config.wait.L});
                break;
            case 'main description':
                await this.mainDescription.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'infobox':
                await (await (await this.infobox1.scrollIntoView({block: 'center'}))
                    .elements()).value[0].waitForDisplayed({timeout: config.wait.L});
                break;
            case 'show more button':
                await this.morePurchases.waitForDisplayed({timeout: config.wait.L, reverse: value.toLowerCase() === 'invisible'});
                break;
            case 'open terms and conditions button':
                await this.editTermsAndConditionsButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'total interest exclusive of tax':
                await this.deferredFee.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'total amount due':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'fixed annual interest rate':
                await this.anualFeed.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'start payment date':
                await this.startPaymentDate.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'months number':
                await this.monthNumber.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'months selection':
                await this.monthSelected.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'check terms and conditions':
                if (value === 'uncheck') {
                    await (await this.acceptTermsAndConditions.waitForDisplayed({timeout: config.wait.L}))
                        .waitForAttribute({attribute: 'aria-checked', value: 'false'});
                } else {
                    await (await this.acceptTermsAndConditions.waitForDisplayed({timeout: config.wait.L}))
                        .waitForEnabled({timeout: config.wait.L, reverse: value === 'disabled'});
                }
                break;
            case 'continue terms and conditions button':
                await (await this.acceptTermsAndConditionsButton.waitForDisplayed({timeout: config.wait.L}))
                    .waitForEnabled({timeout: config.wait.L, reverse: value === 'disabled'});
                break;
            case 'confirm simulation button':
                await this.acceptInstallment.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'total debt amount':
                await this.totalDebt.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'description':
                await this.descriptionErrorShowTransactions.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'retry button':
            case 'call bbva button':
                await this.confirmRetryShowTransactions.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async assertMoreTransactionsLoaded() {
        await this.spinnerLoadingPurchases.waitForAttribute({attribute: 'hidden', timeout: config.wait.L});
    }

    async showMoreTransactions() {
        await (await (await (await (await this.morePurchases.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L}))
            .scrollIntoView({block: 'end'}))
            .waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async editTransactionMultipurchase() {
        await (await (await this.editPurchases.scrollIntoView({block: 'center'}))
            .waitForDisplayed({timeout: config.wait.L}))
            .click();
    }

    async editDeferredMonths(months) {
        await (await this.editMonth.waitForDisplayed({timeout: config.wait.L}))
            .click();
        await this.selectMonth(months);
    }

    async openTooltip(tooltip) {
        switch (tooltip.toLowerCase()) {
            case 'participate purchases':
                await (await this.tooltipPurchases.elements()).value[0].scrollIntoView({block: 'center'});
                await (await this.tooltipPurchases.elements()).value[0].waitForDisplayed({timeout: config.wait.L});
                await (await this.tooltipPurchases.elements()).value[0].click();
                break;
            case 'starts to pay':
                await (await (await this.startPaymentDateTooltip.scrollIntoView({block: 'center'}))
                    .waitForDisplayed({timeout: config.wait.L}))
                    .click();
                break;
            case 'deferred fee':
                await (await (await this.deferredFeeTooltip.scrollIntoView({block: 'center'}))
                    .waitForDisplayed({timeout: config.wait.L}))
                    .click();
                break;
            case 'fixed annual interest rate':
                await (await (await this.anualFeedTooltip.scrollIntoView({block: 'center'}))
                    .waitForDisplayed({timeout: config.wait.L}))
                    .click();
                break;
            case 'cat x.xx excluding fee':
                await (await (await this.catFeesTooltip.scrollIntoView({block: 'center'}))
                    .waitForDisplayed({timeout: config.wait.L}))
                    .click();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: tooltip, args: arguments[0]});
        }
    }

    /**
     * Press retry button for <times>
     * @param times
     */
    async retryModal(times) {
        let n = 1;
        while (n <= times) {
            n++;
            await this.confirmDialog({isConfirmed: true, expectToDisappear: false});
        }
    }

    /**
     * Press retry button for <times>
     * @param times
     */
    async retryModalOtp(times) {
        let n = 1;
        while (n <= times) {
            n++;
            await this.confirmDialog({isConfirmed: true, expectToDisappear: false});
            await this.otpSms();
        }
    }

    /**
     * Press retry button for <times>
     * @param times
     */
    async retryShowTransactions(times) {
        let n = 1;
        await this.continuePurchasesButton.scrollIntoView({block: 'start'});
        while (n <= times) {
            n++;
            await (await (await (await (await this.confirmRetryShowTransactions.waitForExist({timeout: config.wait.L}))
                .scrollIntoView({block: 'center'}))
                .waitForDisplayed({timeout: config.wait.L}))
                .waitForClickable({timeout: config.wait.L}))
                .click();
        }
    }

    async confirmSimulation() {
        await (await (await this.acceptInstallment.waitForDisplayed({timeout: config.wait.L}))
            .waitForClickable({timeout: config.wait.L}))
            .click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
    }

    async leaveTheProcess() {
        await (await this.header.buttonRightPrimary.elements()).value[0].waitForDisplayed({timeout: config.wait.L});
        await (await this.header.buttonRightPrimary.elements()).value[0].waitForClickable({timeout: config.wait.L});
        await (await this.header.buttonRightPrimary.elements()).value[0].click();
        await this.confirmDialog();
    }

    async acceptOnboarding() {
        await (await (await this.onboarding.onboardingEnterButton.waitForDisplayed({timeout: config.wait.L}))
            .waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async changeSliderOnboarding(sliderNumber) {
        const slider = this.onboarding.onboardingSliderButton.specifySelector({placeholder: '__SLIDER_NUMBER__', value: sliderNumber});
        await slider.waitForDisplayed({timeout: config.wait.L});
        await slider.waitForClickable({timeout: config.wait.L});
        for (let i = 1;i < sliderNumber;i++) {
            await slider.click();
        }
    }

    async uploadsAllPurchases() {
        let i = 1;
        const selector = this.purchasesList.specifySelector({placeholder: '__INDEX__', value: 1});
        await selector.waitForDisplayed({timeout: config.wait.L});
        await this.continuePurchasesButton.scrollIntoView({block: 'start'});
        while (i < 7) {
            const selector = this.purchasesList.specifySelector({placeholder: '__INDEX__', value: i + 1});
            await selector.waitForDisplayed({timeout: config.wait.L});
            await this.continuePurchasesButton.scrollIntoView({block: 'start'});
            i++;
        }
        await this.continuePurchasesButton.scrollIntoView({block: 'start'});
    }

}

export default new FinanceTransactionMultipurchase();
