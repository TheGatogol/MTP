import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsContributionReview extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsContributionReview',
            root: '#cells-template-fundsInvestmentsContributionSuccessPage[state="active"]',
            elements: {
                header: 'cells-molecule-header-spherica',
                investmentAmount: 'cells-successful-response-spherica #header-section cells-atom-amount-spherica',
                reviewMessage: 'cells-successful-response-spherica #body-section cells-icon-message-spherica'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'investment amount':
                await this.investmentAmount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'review message':
                await this.reviewMessage.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new FundsContributionReview();
