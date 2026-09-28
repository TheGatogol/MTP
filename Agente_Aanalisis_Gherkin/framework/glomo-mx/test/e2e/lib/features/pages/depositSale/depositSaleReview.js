import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
@page()
class DepositSaleReview extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'deposit',
            root: '#cells-template-depositSaleReview[state="active"]',
            elements: {
                titleDepositSale: 'cells-molecule-header',
                contract: '[data-selector="cells-successful-response-top-info-"]',
                depositAccount: 'cells-successful-response #body-section span.key',
                btnExit: '#primaryBtn'
            },
            requiredElements: [
                'titleDepositSale',
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.titleDepositSale.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'contract':
                await this.contract.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button exit':
                await this.btnExit.waitForClickable({timeout: config.wait.XL});
                break;
            case 'deposit account':
                await this.depositAccount.waitForClickable({timeout: config.wait.XL});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new DepositSaleReview();
