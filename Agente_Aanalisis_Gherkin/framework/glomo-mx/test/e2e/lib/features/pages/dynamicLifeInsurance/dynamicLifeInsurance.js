import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page('dynamicLifeInsurance')
class DynamicLifeInsurance extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-dynamicLifeInsuranceMainPage[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                telephoneIcon: 'cells-molecule-header #btnRightSecondary',
                tooltip: 'cells-molecule-header #tooltipContent',
                tooltipTitle: 'cells-molecule-header #tooltipContent .tooltip_content_title',
                tooltipText: 'cells-molecule-header #tooltipContent .tooltip_content_text',
                toolTipButtonClose: 'cells-molecule-header #tooltipContent button span',
                features: 'p.description.mainDescription',
                coveragesAndAssistance: 'div.container-section-benefits div.container-section-title cells-text-description',
                specialPrograms: 'div.container-section-special-programs',
                paymentDetails: 'glomo-aggregation-life-insurance-info cells-sticky-container  cells-summary-view',
                customizeInsuranceBtn: 'div.container-section-close-button cells-st-button button',
                stickyCallMeBack: 'glomo-aggregation-life-insurance-info .sticky-button cells-st-button #stickyButton',

                // Questionnaire Elements
                checkHealthy: '#PC001 #checkbox',
                checkUnhealthy: '#PA001 #checkbox',
                healthBtn: 'glomo-life-insurance-health-questions #modal div.buttons-container cells-st-button button',

                // Amount Modal Elements
                amountInput: '#modal div.container-section-input-amount cells-enter-limited-amount #enterAmountInput #input',
                paymentAmount: '#operationTotal cells-atom-amount',
                currencyMoney: '#modal div.container-section-input-amount cells-enter-limited-amount #enterAmountInput #label div.currency-label span',
                continueAmountBtn: 'cells-modal-add-amount #cellsSummaryView #collapser cells-st-button.primary.size-m.cells-summary-view--submit-button button',

                // Coverages Modal Elements
                cards: '#modal div.container-section-cards',
                paymentCheck: 'cells-modal-card-select #modal cells-sticky-container cells-summary-view #operationTotal',
                continueCoveragesBtn: 'cells-modal-card-select #modal cells-sticky-container cells-summary-view #collapser cells-st-button.primary.size-m.cells-summary-view--submit-button button',
                terms: 'cells-modal-card-select #general-conditions-coverages-assistances',
                hospitalizationCheck: 'cells-modal-card-select #modal div.container-section-cards cells-aggregation-card-select #\\30 div cells-checkbox-button #checkbox',
                diagnosticCheck: 'cells-modal-card-select #modal div.container-section-cards cells-aggregation-card-select #\\31 div cells-checkbox-button #checkbox',
                disabilityCheck: 'cells-modal-card-select #modal div.container-section-cards cells-aggregation-card-select #\\32 div cells-checkbox-button #checkbox'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item, value, _args} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'features':
                await this.features.waitForDisplayed({timeout: config.wait.M});
                break;
            case'coverages and assistance included':
                await this.coveragesAndAssistance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'special programs':
                await this.specialPrograms.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment detail':
                await this.paymentDetails.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'customize insurance button':
                await this.customizeInsuranceBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'telephone icon':
                await this.telephoneIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sticky button':
                if(value === 'call me') {
                    await  this.stickyCallMeBack.waitForText({text:'Quiero que me llame un asesor', exactMatch:false});
                } else {
                    await  this.stickyCallMeBack.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'tooltip':
                await this.tooltip.waitForDisplayed({timeout: config.wait.XS});
                break;
            case 'tooltip title':
                await this.tooltipTitle.waitForDisplayed({timeout: config.wait.XS});
                break;
            case 'tooltip text':
                await this.tooltipText.waitForDisplayed({timeout: config.wait.XS});
                break;
            case 'tooltip button':
                await this.toolTipButtonClose.waitForDisplayed({timeout: config.wait.XS});
                break;
            case'check healthy':
                await this._validateEnableDisabled(value, this.checkHealthy);
                break;
            case 'check diabetic':
                await this._validateEnableDisabled(value, this.checkUnhealthy);
                break;
            case 'amount input':
                await this.amountInput.waitForDisplayed({timeout: config.wait.L});
                break;
            case'payment amount':
                await this.paymentAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'cards':
                await this.cards.waitForDisplayed({timeout: config.wait.M});
                break;
            case'payment check':
                await this.paymentCheck.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                if (await this.healthBtn.isDisplayed()) {
                    await this._validateEnableDisabled(value, this.healthBtn);
                } else if (await this.continueAmountBtn.isDisplayed()) {
                    await this.continueAmountBtn.waitForDisplayed({timeout: config.wait.L});
                } else if (await this.continueCoveragesBtn.isDisplayed()) {
                    await this.continueCoveragesBtn.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    async _validateEnableDisabled(value, item) {
        if (value === 'enabled') {
            await item.waitForEnabled({timeout: config.wait.L, reverse: false});
        } else if (value === 'disabled') {
            await item.waitForEnabled({timeout: config.wait.L, reverse: true});
        } else {
            await item.waitForDisplayed({timeout: config.wait.S});
        }
    }

    async customizeInsurance() {
        await this.customizeInsuranceBtn.scrollIntoView();
        await this.customizeInsuranceBtn.waitForDisplayed({timeout: config.wait.M});
        await this.customizeInsuranceBtn.waitForAnimation({timeout: config.wait.M});
        await this.customizeInsuranceBtn.waitForClickable({timeout: config.wait.M});
        await this.customizeInsuranceBtn.click();
    }

    async accessToCallMeBack(access) {
        switch (access) {
            case 'link':
                await this.stickyCallMeBack.waitForClickable({timeout: config.wait.M});
                await this.stickyCallMeBack.click();
                break;
            case 'header':
                await this.telephoneIcon.waitForDisplayed({timeout: config.wait.M});
                await this.telephoneIcon.click();
                break;
            default:
                throw new Error(`The access '${access}' not found.`);
        }
    }

    async closeToolTipCallMeBack() {
        await this.toolTipButtonClose.waitForClickable({timeout: config.wait.M});
        await this.toolTipButtonClose.click();
    }

    async selectHealthOption(optionQuestionnaire) {
        if(optionQuestionnaire === 'healthy') {
            await this.checkHealthy.waitForDisplayed({timeout: config.wait.M});
            await this.checkHealthy.click();
            await this.continueToAmount();
        } else if (optionQuestionnaire === 'diabetic') {
            await this.checkUnhealthy.waitForDisplayed({timeout: config.wait.M});
            await this.checkUnhealthy.click();
            await this.continueToAmount();
        } else {
            await this.healthBtn.waitForEnabled({timeout: config.wait.L, reverse: true});
        }
    }

    async continueToAmount() {
        await this.healthBtn.waitForDisplayed({timeout: config.wait.M});
        await this.healthBtn.waitForClickable({timeout: config.wait.M});
        await this.healthBtn.click();
    }

    async insuranceAmountContinue() {
        await this.selectHealthOption('healthy');
        await this.continueAmountBtn.waitForDisplayed({timeout: config.wait.M});
        await this.continueAmountBtn.waitForClickable({timeout: config.wait.M});
        await this.continueAmountBtn.scrollIntoView({block: 'start'});
        await this.continueAmountBtn.click();
    }

    async changeCheckCoverageStatus() {
        await this.hospitalizationCheck.waitForDisplayed({timeout: config.wait.M});
        await this.hospitalizationCheck.click();
        await this.diagnosticCheck.waitForDisplayed({timeout: config.wait.M});
        await this.diagnosticCheck.click();
        await this.disabilityCheck.waitForDisplayed({timeout: config.wait.M});
        await this.disabilityCheck.click();
    }

    async acceptCoverages() {
        await this.customizeInsurance();
        await this.insuranceAmountContinue();
        await this.continueCoveragesBtn.waitForDisplayed({timeout: config.wait.M});
        await this.continueCoveragesBtn.scrollIntoView({block: 'start'});
        await this.continueCoveragesBtn.click();
    }
}

export default new DynamicLifeInsurance();
