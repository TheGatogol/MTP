import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class InvestmentsFollowUpFeedback extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-investmentsFollowUpFeedback[state="active"]',
            elements: {
                feedbackWebContainer: '#cellsIframe',
            },
            requiredElements: ['feedbackWebContainer'],
        });
    }

    async _screenValidation({item, _args}) {
        switch (item.toLowerCase()) {
            case 'feedback external page':
                await this.feedbackWebContainer.waitForDisplayed({timeout: config.wait.XL, reverse: _args.notVisible});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new InvestmentsFollowUpFeedback();
