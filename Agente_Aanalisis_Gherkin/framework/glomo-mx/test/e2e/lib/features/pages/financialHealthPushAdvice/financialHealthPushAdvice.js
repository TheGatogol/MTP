import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

//Components
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class FinancialHealthPushAdvice extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-financialHealthPushAdvice[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                title: 'cells-safe-card-offer-page #stepContainer [slot="full"] div.product-summary h2',
                datePayroll: 'cells-safe-card-offer-page #stepContainer [slot="full"] div.product-summary span.text.product-summary-spacing-top',
                amountPayroll: 'cells-safe-card-offer-page #stepContainer [slot="full"] div.product-summary cells-atom-amount',
                createPocketButton: 'cells-safe-card-offer-page #stepContainer [slot="full"] cells-sticky-container div cells-st-button',
                voteUp: '[data-tag-name="bbva-form-rating"] #thumb-container > div:nth-child(1) > label > [data-tag-name="bbva-icon"]',
                voteDown: '[data-tag-name="bbva-form-rating"] #thumb-container > div:nth-child(2) > label > [data-tag-name="bbva-icon"]',
                dataManager: 'cells-pockets-opx-manager-mx'
            },
            requiredElements: ['root']
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'date payroll':
                await this.datePayroll.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount payroll':
                await this.amountPayroll.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'create pocket button':
                await this.createPocketButton.waitForDisplayed();
                break;
            case 'vote up':
                await this.voteUp.waitForDisplayed();
                break;
            case 'vote down':
                await this.voteDown.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async giveFeedback() {
        await this.voteUp.waitForDisplayed({timeout: config.wait.M});
        await this.voteUp.scrollIntoView();
        await this.voteUp.click();
    }

    async closeModal() {
        await this.header.waitForDisplayed();
        await this.header.actionRight();
    }

    async accessToPockets() {
        await this.createPocketButton.waitForDisplayed({timeout: config.wait.M});
        await this.createPocketButton.scrollIntoView();
        await this.createPocketButton.click();
    }
}

export default new FinancialHealthPushAdvice();
