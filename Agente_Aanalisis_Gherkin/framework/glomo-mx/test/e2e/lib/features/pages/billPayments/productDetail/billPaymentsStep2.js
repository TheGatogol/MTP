import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class BillPaymentsStep2 extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-billPayments[state="active"]',
            elements: {
                serviceAmountStep2: 'cells-step-enter-amount-bill-payments-spherica',
                inputAmount: 'cells-step-enter-amount-bill-payments-spherica #cellsEnterLimitedAmount #input',
                continueStep2: '#stepContainer div.full div.element-list-button__full cells-st-button-spherica button',
            },
            requiredElements: ['serviceAmountStep2']
        });
    }

    async acceptAmount(amount = '100', isStoredService = false) {
        await this.inputAmount.waitForDisplayed({timeout: config.wait.L});
        await this.inputAmount.waitForClickable({timeout: config.wait.L});
        await this.inputAmount.setValue({value: amount, slow: true});
        await this.continueStep2.waitForClickable({timeout: config.wait.L});
        await this.continueStep2.click();
        if(!isStoredService || isStoredService === 'false') {
            await this.fillOtp('11111111');
        }
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'serviceamountstep':
                await this.serviceAmountStep2.scrollIntoView();
                await this.serviceAmountStep2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button amount':
                await this.continueStep2.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new BillPaymentsStep2();
