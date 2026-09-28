import AbstractGlomoPage from '../../abstract-glomo-page';
import {Commands, ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsContributionStep1 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsContributionStep1',
            root: '#cells-template-fundsContribution[state="active"]',
            elements: {
                header: 'cells-molecule-header-spherica',
                fundBalance: 'cells-step-card-offer-page-spherica .cells-step-card-offer-page-features cells-atom-amount-spherica',
                offerBenefits: 'cells-step-card-offer-page-spherica .cells-step-card-offer-page-benefits',
                offerStartBtn: 'cells-step-card-offer-page-spherica cells-st-button-spherica.cells-step-card-offer-page__button.positive button',
            },
            requiredElements: [
                'offerBenefits'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'fund balance':
                await this.fundBalance.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'offer bennefits':
                await this.offerBenefits.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async waitForAnalytics() {
        await Commands.pause({time: config.wait.XS});
    }

    async startOffer() {
        // Fix for render and scrolling the offer step
        await this.offerStartBtn.waitForAnimation({timeout: config.wait.L});
        await this.offerStartBtn.waitForDisplayed({timeout: config.wait.M});
        await this.offerStartBtn.waitForClickable({timeout: config.wait.L});
        await this.offerStartBtn.click();
    }
}

export default new FundsContributionStep1();
