import AbstractGlomoPage from '../../abstract-glomo-page';
import GlomoAlertManagerSpherica from '../../../components/glomo-alert-manager-spherica.js';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsContributionStep4 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsContributionStep4',
            root: '#cells-template-fundsContribution[state="active"]',
            elements: {
                dialogOperations: [
                    GlomoAlertManagerSpherica
                ],
                summaryInvestAmount: '#cells-summary-view #operationTotal cells-atom-amount-spherica',
                summaryContinueBtn: '#cells-summary-view cells-st-button-spherica.positive.full button',
                associatedAccount: '#cells-step-product-selector #stepContainer div div h2',
                accountDetail: '#cells-step-product-selector #item div.column div.item__quantities',
                accontAmount: '#cells-step-product-selector #item div.item__additional',
                outOfHoursMessage: '#cells-icon-message-out-of-time #notInline',
                linkChangeAmount: '#cells-step-simulation-operation #stepContainer  #changeBtn ',
                amountInpit: '#cells-step-simulation-operation #cellsEnterLimitedAmount #enterAmountInput',
                labelAmountToBuy: '#cells-step-simulation-operation #stepContainer div div h2',
                informationText: '#cells-step-simulation-operation #cellsEnterLimitedAmount cells-icon-message-spherica',
                linkConsultDetails: '#cells-step-card-offer-page #cardsOfferPageStepContainer #changeBtn button',
                backgroundDetail: '#cells-step-card-offer-page #cardsOfferPageStepContainer cells-image-text-amount-cover-spherica',
                messageAlert: '#cells-step-card-offer-page #cardsOfferPageStepContainer cells-icon-message-spherica',
                accessButton: '#cells-step-card-offer-page cells-st-button-spherica.cells-step-card-offer-page__button.positive button',
                btnExit: 'cells-molecule-header-spherica #btnRight',
            },
            requiredElements: [
                'summaryInvestAmount'
            ]
        });
    }

    async _screenValidation({item, value = '', _args} = {}) {
        switch (item.toLowerCase()) {
            case 'investment amount':
                await this.summaryInvestAmount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'amount input':
                await this.amountInpit.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'label amount to buy':
                await this.labelAmountToBuy.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'information text':
                await this.informationText.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'associated account':
                await this.associatedAccount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'account detail':
                await this.accountDetail.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'accont amount':
                await this.accontAmount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'continue button':
                await this.summaryContinueBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'out of hours message':
                if (value === 'after hours') {
                    await this.outOfHoursMessage.verifyText({text: 'Harás la compra fuera de horario y se reflejará en tu fondo al siguiente día hábil.'});
                } else if (value === 'within hours') {
                    await this.outOfHoursMessage.verifyText({text: 'Al comprar, instruyes a BBVA a efectuar la operación bajo las características anteriores.'});
                }
                break;
            case 'background detail':
                await this.backgroundDetail.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'alert':
                await this.messageAlert.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'access button':
                await this.accessButton.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: { value, ..._args }});
        }
    }

    async acceptSummary() {
        await this.summaryContinueBtn.waitForClickable({ timeout: config.wait.S });
        await this.summaryContinueBtn.click();
    }

    async changeAmount() {
        await this.linkChangeAmount.waitForClickable({ timeout: config.wait.S });
        await this.linkChangeAmount.click();
    }

    async consultDetails() {
        await this.linkConsultDetails.waitForClickable({ timeout: config.wait.S });
        await this.linkConsultDetails.click();
    }

    async exitProcess() {
        await this.btnExit.waitForClickable({ timeout: config.wait.S });
        await this.btnExit.click();
    }
}

export default new FundsContributionStep4();
