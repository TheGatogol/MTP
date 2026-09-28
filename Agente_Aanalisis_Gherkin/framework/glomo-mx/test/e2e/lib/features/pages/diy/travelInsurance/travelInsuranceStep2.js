import AbstractGlomoPage from '../../abstract-glomo-page.js';
import ScreenValidationKeyNotFound, {page} from '@csqe/radish';

@page('TravelInsuranceStep2')
class TravelInsuranceStep2 extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-travelInsurance[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                customerIsTravelerLink: '#user-selector #stepContainer div.full cells-link-list div.content button cells-atom-icon iron-icon',
            },
            requiredElements: [
                'header',
                'customerIsTravelerLink'
            ]
        });

    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'customer is a traveler link':
                await this.customerIsTravelerLink.waitForDisplayed({timeout: config.wait.M});

                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async customerIsTravelerPressed() {
        await this.customerIsTravelerLink.waitForClickable({timeout: config.wait.L});
        await this.customerIsTravelerLink.click();
    }
}

export default new TravelInsuranceStep2();
