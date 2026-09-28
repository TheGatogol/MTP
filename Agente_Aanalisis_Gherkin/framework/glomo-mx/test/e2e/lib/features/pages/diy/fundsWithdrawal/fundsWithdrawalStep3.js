import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsWithdrawalStep3 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsWithdrawalStep3',
            root: '#cells-template-fundsWithdrawal[state="active"]',
            elements: {
                header: 'cells-molecule-header #titleZone',
                amountInput: '#cells-step-simulation-operation #enterAmountInput input',
                amountInputBtn: '#cells-step-simulation-operation #cellsEnterLimitedAmount cells-st-button button',
                typeOfSale: '#cells-step-select-operation-type #stepOperationType div div h2',
                partialSale: '#cells-step-select-operation-type #stepOperationType div.filled span',
                changeTypeOfSale: '#cells-step-select-operation-type #stepOperationType #changeBtn button',
                changeAmountSell: '#cells-step-simulation-operation #stepContainer #changeBtn button',
                messageError: '#cells-step-simulation-operation #cellsEnterLimitedAmount div.cells-enter-limited-amount__error',
                errorIcon: '#cellsEnterLimitedAmount #iconlimitsAlert iron-icon',
            },

            elementsSpherica: {
                header: 'cells-molecule-header-spherica #titleZone',
                amountInput: 'cells-step-simulation-operation-spherica cells-step-spherica div.full div.amount-container input',
                amountInputBtn: 'cells-st-button-spherica #enterAmountBtn',
                typeOfSale: 'cells-step-spherica#stepOperationType div div h2',
                partialSale: 'cells-step-spherica#stepOperationType div.filled span',
                changeTypeOfSale: 'cells-step-spherica#stepOperationType #changeBtn button',
                changeAmountSell: '#cells-step-simulation-operation-spherica #stepContainer #changeBtn button',
                messageError: 'cells-enter-limited-amount-spherica#cellsEnterLimitedAmount div.cells-enter-limited-amount__error',
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
            case 'amount input':
                await this.amountInput.waitForDisplayed({timeout: config.wait.M});
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
            case 'change type sale':
                await this.changeTypeOfSale.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message error':
                await this.messageError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error icon':
                await this.errorIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async acceptAmount(amount) {
        await this.amountInput.setValue({value: amount});
        await this.amountInputBtn.click();
    }

    async changeSale() {
        await this.changeTypeOfSale.waitForAnimation({timeout: config.wait.L});
        await this.changeTypeOfSale.scrollIntoView();
        await this.changeTypeOfSale.waitForClickable({timeout: config.wait.M});
        await this.changeTypeOfSale.click();
    }

    async addAmount(amount) {
        await this.amountInput.setValue({value: amount});
    }

    async confirmAmount(amount = '109') {
        if (await this.amountInput.isDisplayed({timeout: config.wait.M})) {
            await this.acceptAmount(amount);
        } else if (!this.amountInput) {
            await this.amountInput.waitForDisplayed({timeout: config.wait.M, reverse: true});
        }
    }
}

export default new FundsWithdrawalStep3();
