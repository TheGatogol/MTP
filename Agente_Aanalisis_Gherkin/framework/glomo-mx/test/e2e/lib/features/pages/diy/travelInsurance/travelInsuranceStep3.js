import AbstractGlomoPage from '../../abstract-glomo-page.js';
import ScreenValidationKeyNotFound, {page} from '@csqe/radish';

@page('TravelInsuranceStep3')
class TravelInsuranceStep3 extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-travelInsurance[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                accountLink: '#travel-insurance-product #stepContainer div.full #selector div.product-wrapper cells-product-item'
            },
            requiredElements: [
                'header',
                'accountLink'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account selected':
                await this.accountLink.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({
                    key: item,
                    args: arguments[0]
                });
        }
    }

    async selectAccount() {
        await this.accountLink.waitForClickable({timeout: config.wait.XL});
        await this.accountLink.click();
    }
}

export default new TravelInsuranceStep3();
