import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsHiringStep9 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsHiringStep9',
            root: '#cells-template-fundsHiring[state="active"]',
            elements: {
                header: 'cells-molecule-header#funds-hiring-header',
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica#funds-hiring-header'
            },
            requiredElements: [
                'header'
            ]
        });

    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async confirmHiring(otp = '11111111') {
        await this.fillOtp(otp);
    }
}

export default new FundsHiringStep9();
