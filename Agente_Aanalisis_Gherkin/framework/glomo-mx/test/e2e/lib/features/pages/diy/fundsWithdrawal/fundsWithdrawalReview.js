import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsWithdrawalReview extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsWithdrawalReview',
            root: '#cells-template-fundsInvestmentsWithdrawalSuccessPage[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                investmentDate: 'diy-receipt #header cells-atom-date',
                investmentAmount: 'diy-receipt #header cells-atom-amount',
                reviewMessage: 'diy-receipt .main  cells-icon-message-change-data'
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica',
                investmentDate: 'diy-receipt-spherica #main cells-atom-date-spherica',
                investmentAmount: 'diy-receipt-spherica #header cells-atom-amount-spherica',
                reviewMessage: 'diy-receipt-spherica cells-atom-icon-spherica'
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
            case 'investment date':
                await this.investmentDate.waitForDisplayed({timeout: config.wait.S});
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

export default new FundsWithdrawalReview();
