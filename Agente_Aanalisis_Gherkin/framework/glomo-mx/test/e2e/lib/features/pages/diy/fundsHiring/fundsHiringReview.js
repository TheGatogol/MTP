import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsHiringReview extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsHiringReview',
            root: '#cells-template-fundsHiringReview[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                investAmount: '#step-funds-hiring-receipt .amount-huge-decimals',
                fundName: 'e2e-selector-fund-name',
                contractId: '#step-funds-hiring-receipt .e2e-selector-fund',
                folioId: '#step-funds-hiring-receipt .e2e-selector-folio',
                investmentService: '#step-funds-hiring-receipt .e2e-selector-investment-service',
                liquidity: '#step-funds-hiring-receipt .e2e-selector-liquidity',
                serieNumber: '#step-funds-hiring-receipt .e2e-selector-series',
                accountStatus: '#step-funds-hiring-receipt .e2e-selector-account-status',
                email: '#step-funds-hiring-receipt .e2e-selector-email'
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica'
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
            case 'investment amount':
                await this.investAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract number':
                await this.contractId.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio number':
                await this.folioId.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment service':
                await this.investmentService.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'liquidity':
                await this.liquidity.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'serial number':
                await this.serieNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account status':
                await this.accountStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'email':
                await this.email.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new FundsHiringReview();
