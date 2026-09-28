import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsWithdrawalStep4 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsWithdrawalStep4',
            root: '#cells-template-fundsWithdrawal[state="active"]',
            elements: {
                header: 'cells-molecule-header #titleZone',
                summaryAmount: 'cells-summary-view cells-atom-amount',
                symmaryBtn: 'cells-st-button.primary.size-m.cells-summary-view--submit-button button',
                modal: '#error-message #notInline',
                changeTypeOfSale: '#cells-step-select-operation-type #stepOperationType #changeBtn button',
                changeAmountSell: '#cells-step-simulation-operation #stepContainer #changeBtn button',
                amountInputBtn: '#cells-step-simulation-operation #cellsEnterLimitedAmount cells-st-button button',
                partialSale: '#cells-step-select-operation-type #stepOperationType div.filled span',
                typeOfSale: '#cells-step-select-operation-type #stepOperationType div div h2',
                buttonExit: 'cells-molecule-header #btnLeft',
            },

            elementsSpherica: {
                header: 'cells-molecule-header-spherica #titleZone',
                summaryAmount: 'cells-summary-view-spherica cells-atom-amount-spherica',
                symmaryBtn: 'cells-summary-view-spherica cells-st-button-spherica.full[variant="primary"]:not([hidden])',
                changeTypeOfSale: 'cells-step-spherica#stepOperationType #changeBtn button',
                changeAmountSell: 'cells-step-spherica#stepContainer #changeBtn button[aria-label="Modificar Monto a vender"]',
                amountInputBtn: 'cells-step-spherica#stepContainer:not([collapsed]) cells-st-button-spherica.footer-btn.size-m button',
                partialSale: 'cells-step-spherica#stepOperationType div.filled span',
                typeOfSale: 'cells-step-spherica#stepOperationType div div h2',
                buttonExit: 'cells-molecule-header-spherica #btnRight'
            },

            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation amount':
                await this.summaryAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm operation button':
                await this.symmaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal':
                await this.modal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change type of sale':
                await this.changeTypeOfSale.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change amount sell':
                await this.changeAmountSell.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm amount button':
                await this.amountInputBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'type of sale':
                await this.typeOfSale.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sale':
                await this.partialSale.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async acceptSummary() {
        await this.symmaryBtn.scrollIntoView();
        await this.symmaryBtn.waitForClickable({timeout: config.wait.M});
        await this.symmaryBtn.click();
    }

    async modifySale() {
        await this.changeTypeOfSale.waitForAnimation({timeout: config.wait.L});
        await this.changeTypeOfSale.scrollIntoView();
        await this.changeTypeOfSale.waitForClickable({timeout: config.wait.M});
        await this.changeTypeOfSale.click();
    }

    async changeAmount() {
        await this.changeAmountSell.waitForAnimation({timeout: config.wait.L});
        await this.changeAmountSell.scrollIntoView();
        await this.changeAmountSell.waitForClickable({timeout: config.wait.M});
        await this.changeAmountSell.click();
    }

    async exitResumeScreen() {
        await this.buttonExit.waitForClickable({timeout: config.wait.M});
        await this.buttonExit.click({timeout: config.wait.M});
    }

}

export default new FundsWithdrawalStep4();
