import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

import CellsCardAdvice from '../../components/cells-card-advice';
import CellsCheckboxButton from '../../components/cells-checkbox-button';
import CellsConfirmButtons from '../../components/cells-confirm-buttons';
import CellsInputSlider from '../../components/cells-input-slider';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsSummaryView from '../../components/cells-summary-view';

@page()
class FinancingPurchase extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'FinancingPurchase',
            root: '#cells-template-financingPurchase[state="active"]',
            elements: {
                //header
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                //considerations - continue button
                continueBtn: {
                    component: {
                        ComponentClass: CellsConfirmButtons
                    }
                },

                //card advice
                cardAdvice: {
                    component: {
                        ComponentClass: CellsCardAdvice
                    }
                },

                //slider
                slider: {
                    component: {
                        ComponentClass: CellsInputSlider
                    }
                },

                //help icons
                monthlyPaymentIcon: '.aggregation-list-container #glomo-financing-purchase-payment-amount-section iron-icon',
                totalToPayIcon: '.aggregation-list-container #glomo-financing-purchase-total-amount-section iron-icon',
                pointsToBeDeductedIcon: '.aggregation-list-container #glomo-financing-purchase-point-balance-section iron-icon',
                catIcon: '.aggregation-list-container #glomo-financing-CAT-percentage-list-section iron-icon',

                //Terms and conditions
                termsAndConditions: CellsCheckboxButton,
                //apply promotion
                applyPromotionBtn: CellsSummaryView
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            //header
            case 'apply promotion':
                await this.applyPromotionBtn.continue.waitForEnabled({reverse: value === 'disabled'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goTop() {
        await this.termsAndConditions.labelSpan.scrollIntoView({block: 'start'});
        await this.cardAdvice.title.scrollIntoView({block: 'start'});
    }

    async acceptFinancingConsiderations() {
        await this.continueBtn.primaryAction();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.XL});
    }

    async changesTheFeeNumber({sliderValue = '1'} = {}) {
        await this.monthlyPaymentIcon.scrollIntoView({block: 'center'});
        await this.slider.selectSliderValue(sliderValue);
    }

    async confirmFinanceTransaction() {
        await this.termsAndConditions.checkbox.waitForDisplayed({timeout: config.wait.L});
        await this.acceptTerms();
        await this.applyPromotionBtn.goNext();
    }

    async closeOperative() {
        await this.goTop();
        await this.header.actionRight();
    }

    async confirmExitOperative() {
        await this.dialogOperations.confirmDialog({isConfirmed: true});
    }

    async continueProcess() {
        await this.dialogOperations.confirmDialog({isConfirmed: false});
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }

    async openHelp(helpIcon) {
        switch (helpIcon.toLowerCase()) {
            case 'cat':
                await (await this.catIcon
                    .waitForDisplayed({timeout: config.wait.L}))
                    .click();
                break;
            case 'bbva points':
                await (await this.pointsToBeDeductedIcon
                    .waitForDisplayed({timeout: config.wait.L}))
                    .click();
                break;
            case 'total payment':
                await (await this.totalToPayIcon
                    .waitForDisplayed({timeout: config.wait.L}))
                    .click();
                break;
            case 'monthly payment':
                await (await this.monthlyPaymentIcon
                    .waitForDisplayed({timeout: config.wait.L}))
                    .click();
                break;
            default:
                throw new Error(`the help icon ${helpIcon} IS NOT DEFINED`);
        }
    }

    async acceptTerms() {
        await this.termsAndConditions.checkbox.click();
    }

    /**
     * Through this function and the modal-specific step, we will be able to validate our modal.
     * By default, this function uses the elementValidation function from glomo-alert-manager
     *
     * Screen specific implementations or terminology of our modal cam be implemented here,
     * using the default option for the glomo-alert-manager default validation function
     * @param {object} [options] Options passed as columns on step
     */
    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'error icon':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HERO_IMAGE});
                break;
            case 'tittle':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.TITLE});
                break;
            case 'description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.DESCRIPTION});
                break;
            case 'accept':
            case 'retry':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            case 'exit':
                await this.dialogOperations.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }
}

export default new FinancingPurchase();
