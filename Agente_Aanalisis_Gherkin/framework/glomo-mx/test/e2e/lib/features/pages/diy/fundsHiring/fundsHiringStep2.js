import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsHiringStep2 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsHiringStep2',
            root: '#cells-template-fundsHiring[state="active"]',
            elements: {
                accountItems: '#step-funds-hiring-account-selector cells-product-selector cells-product-item',
                accountItemSelector: '#step-funds-hiring-account-selector cells-product-selector cells-product-item[data-selector$="__PRODUCT_ID__"]',
            },
            elementsSpherica: {
                accountItems: '#step-funds-hiring-account-selector #selector div:nth-child(10) > cells-product-item-spherica',
                accountItemSelector: '#step-funds-hiring-account-selector cells-product-selector-spherica cells-product-item-spherica[data-selector$="__PRODUCT_ID__"]'
            },
            requiredElements: [
                'accountItems'
            ]
        });

    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'account list':
                await this.accountItems.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectAccount() {
        await this.accountItems.waitForClickable({timeout: config.wait.XL});
        await this.accountItems.click();
    }
}

export default new FundsHiringStep2();
