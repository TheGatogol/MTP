import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsHiringStep6 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsHiringStep6',
            root: '#cells-template-fundsHiring[state="active"]',
            elements: {
                mailAcceptbBtn: '#step-funds-hiring-mail-selector #primaryButton',
            },
            requiredElements: [
                'mailAcceptbBtn'
            ]
        });

    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'submit status button':
                await this.mailAcceptbBtn.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async acceptEmailStep() {
        await this.mailAcceptbBtn.waitForDisplayed({timeout: config.wait.M});
        await this.mailAcceptbBtn.waitForAnimation({timeout: config.wait.M});
        await this.mailAcceptbBtn.waitForClickable({timeout: config.wait.M});
        await this.mailAcceptbBtn.click();
    }
}

export default new FundsHiringStep6();
