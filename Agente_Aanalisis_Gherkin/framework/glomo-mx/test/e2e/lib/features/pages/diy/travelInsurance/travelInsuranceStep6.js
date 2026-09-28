import AbstractGlomoPage from '../../abstract-glomo-page.js';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page('TravelInsuranceStep6')
class TravelInsuranceStep6 extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-travelInsurance[state="active"]',
            elements: {
                header: 'cells-molecule-header',
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
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async confirmInsuranceHiring() {
        const {otp} = global.user;
        await this.fillOtp(otp);
    }
}

export default new TravelInsuranceStep6();
