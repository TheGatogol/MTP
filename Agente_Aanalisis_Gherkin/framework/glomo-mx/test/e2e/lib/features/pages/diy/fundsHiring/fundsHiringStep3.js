import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsHiringStep3 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsHiringStep3',
            root: '#cells-template-fundsHiring[state="active"]',
            elements: {
                investmentTypeBeginner: '#step-funds-hiring-investment cells-product-item[data-id="001"]',
                investmentTypeAdvanced: '#step-funds-hiring-investment cells-product-item[data-id="002"]'
            },
            elementsSpherica: {
                investmentTypeBeginner: '#step-funds-hiring-investment cells-product-item-spherica[data-id="001"]',
                investmentTypeAdvanced: '#step-funds-hiring-investment cells-product-item-spherica[data-id="002"]'
            },
            requiredElements: [
                'investmentTypeBeginner'
            ]
        });

    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'comercialization service button':
                await this.investmentTypeBeginner.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectInvestmentType(type) {
        const strType = !type ? 'beginner' : type;
        const investBtn = strType === 'beginner' ? this.investmentTypeBeginner : this.investmentTypeAdvanced;
        await investBtn.waitForClickable({timeout: config.wait.S});
        await investBtn.click();
    }

    async acceptInvestmentTypeModal(type = 'beginner') {
        await this.selectInvestmentType(type);
        await this.dialogOperations.acceptBtn.waitForClickable({timeout: config.wait.S});
        await this.dialogOperations.acceptBtn.click();
    }
}

export default new FundsHiringStep3();
