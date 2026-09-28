import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsHiringStep4 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsHiringStep4',
            root: '#cells-template-fundsHiring[state="active"]',
            elements: {
                fundsViewMore: '#step-funds-hiring-fund-selection #viewMore',
                fundTypeModalDebt: '#modal-funds-hiring-product-selector-funds-type cells-product-item[data-index="0"]',
                fundTypeModalRent: '#modal-funds-hiring-product-selector-funds-type cells-product-item[data-index="1"]',
                fundTypeModalMulti: '#modal-funds-hiring-product-selector-funds-type cells-product-item[data-index="2"]',
                fundFilterModalAccept: 'cells-change-contact-details-modal #primaryButton',
                fundModalFirstItem: '#modal-funds-hiring-product-selector cells-product-item[data-index="0"]',
                firstFundItem: '#step-funds-hiring-fund-selection cells-product-item[data-index="0"]',
            },
            elementsSpherica: {
                fundTypeModalDebt: '#modal-funds-hiring-product-selector-funds-type cells-product-item-spherica[data-index="0"]',
                fundTypeModalRent: '#modal-funds-hiring-product-selector-funds-type cells-product-item-spherica[data-index="1"]',
                fundTypeModalMulti: '#modal-funds-hiring-product-selector-funds-type cells-product-item-spherica[data-index="2"]',
                fundFilterModalAccept: 'cells-change-contact-details-modal-spherica #primaryButton',
                fundModalFirstItem: '#modal-funds-hiring-product-selector cells-product-item-spherica[data-index="0"]',
                firstFundItem: '#step-funds-hiring-fund-selection cells-product-item-spherica[data-index="0"]'
            },
            requiredElements: [
                'firstFundItem'
            ]
        });

    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'fisrt fund':
                await this.firstFundItem.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectFirstFund() {
        await this.firstFundItem.waitForClickable({timeout: config.wait.L});
        await this.firstFundItem.click();
    }

    async viewFilterFunds() {
        await this.fundsViewMore.waitForClickable({timeout: config.wait.L});
        await this.fundsViewMore.click();
    }

    async viewFundCategory(category = '') {
        await this.viewFilterFunds();

        switch (category.toLowerCase()) {
            case 'debt':
                await this.fundTypeModalDebt.waitForClickable({timeout: config.wait.M});
                await this.fundTypeModalDebt.click();
                await this.fundFilterModalAccept.waitForClickable({timeout: config.wait.M});
                await this.fundFilterModalAccept.click();
                break;
            case 'rent':
                await this.fundTypeModalRent.waitForClickable({timeout: config.wait.M});
                await this.fundTypeModalRent.click();
                break;
            case 'multi':
            default:
                await this.fundTypeModalMulti.waitForClickable({timeout: config.wait.M});
                await this.fundTypeModalMulti.click();
        }
    }
}

export default new FundsHiringStep4();
