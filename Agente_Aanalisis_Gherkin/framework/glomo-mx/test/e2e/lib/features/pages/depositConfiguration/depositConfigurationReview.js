import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
@page()
class DepositConfigurationReview extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'DepositConfigurationReview',
            root: '#cells-template-depositConfigurationReview[state="active"]',
            elements: {
                titleDepositConfigurationReview: 'cells-molecule-header-spherica',
                investmentInstrument: 'li.spacing.md',
                btnExit: 'cells-molecule-header-spherica #btnRight'
            },
            requiredElements: [
                'titleDepositConfigurationReview',
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.titleDepositConfigurationReview.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount':
                await this.investmentInstrument.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button exit':
                await this.btnExit.waitForClickable({timeout: config.wait.XL});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new DepositConfigurationReview();
