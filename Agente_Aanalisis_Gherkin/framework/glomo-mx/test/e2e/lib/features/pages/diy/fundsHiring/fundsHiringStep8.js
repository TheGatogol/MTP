import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsHiringStep8 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsHiringStep8',
            root: '#cells-template-fundsHiring[state="active"]',
            elements: {
                summaryAcceptBtn: '#funds-hiring-summary-section .cells-summary-view--submit-button button',
            },
            elementsSpherica: {
                summaryAcceptBtn: '#funds-hiring-summary-section cells-st-button-spherica:nth-child(10) button'
            },
            requiredElements: [
                'summaryAcceptBtn'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'summary':
                await this.summaryAcceptBtn.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async acceptSummary() {
        await this.summaryAcceptBtn.waitForClickable({timeout: config.wait.M});
        await this.summaryAcceptBtn.click();
    }
}

export default new FundsHiringStep8();
