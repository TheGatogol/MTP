import { ScreenValidationKeyNotFound } from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

import AbstractGlomoPage from '../abstract-glomo-page';

class EquityFundDetailPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-equityContractsInvestmentDetail[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                detail: '#equity-contracts-detail .detail',
                productSummary: '#equity-contracts-detail .detail div.product-summary',
                operationsList: '#equity-contracts-detail .detail div.operations-list',
                buyButton: '#equity-contracts-detail .detail div.operations-list bbva-button-row:nth-child(1) #buttons span.listitem-button [data-tag-name="bbva-button-action"]',
                saleButton: '#equity-contracts-detail .detail div.operations-list bbva-button-row:nth-child(2) #buttons span.listitem-button [data-tag-name="bbva-button-action"]'
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                buyButton: '#equity-contracts-detail .detail div.operations-list bbva-button-row:nth-child(1) #buttons span.list-item [data-tag-name="bbva-button-action"]',
                saleButton: '#equity-contracts-detail .detail div.operations-list bbva-button-row:nth-child(2) #buttons span.list-item [data-tag-name="bbva-button-action"]'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'product summary':
                await this.productSummary.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'operations list':
                await this.operationsList.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'buy button':
                await this.buyButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'sale button':
                await this.saleButton.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessEquityFundContributions() {
        await this.detail.waitForAnimation({timeout: config.wait.L});
        await this.buyButton.waitForClickable({timeout: config.wait.M});
        await this.buyButton.click();
    }

    async accessEquityFundWithdrawal() {
        await this.detail.waitForAnimation({timeout: config.wait.L});
        await this.saleButton.waitForClickable({timeout: config.wait.M});
        await this.saleButton.click();
    }
}

export default new EquityFundDetailPage();
