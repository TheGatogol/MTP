import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsContributionStep3 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsContributionStep3',
            root: '#cells-template-fundsContribution[state="active"]',
            elements: {
                accountBalance: '#cells-step-product-selector cells-product-item-spherica.recipient-saved',
                acceptBtn: '#cells-step-product-selector button#primaryButton',
                sectionAmountToBuy: '#cells-step-simulation-operation #stepContainer div div h2',
                amount: '#cells-step-simulation-operation #cellsStepEnterAmountFilled div.value div',
                associatedAccount: '#cells-step-product-selector #stepContainer div div h2',
                accountDetail: '#cells-step-product-selector #oneProductItem div.item__additional',
            },
            requiredElements: [
                'accountBalance'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'account balance':
                await this.accountBalance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'section amount to buy':
                await this.sectionAmountToBuy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount':
                await this.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'associated account':
                await this.associatedAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account detail':
                await this.accountDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async acceptAccount() {
        await this.acceptBtn.waitForClickable({timeout: config.wait.M});
        await this.acceptBtn.click();
    }
}

export default new FundsContributionStep3();
