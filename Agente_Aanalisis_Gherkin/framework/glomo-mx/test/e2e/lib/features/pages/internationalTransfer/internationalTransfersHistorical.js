import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class InternationalTransfersHistorical extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'InternationalTransfersHistorical',
            root: '#cells-template-internationalTransfersHistorical[state="active"]',
            elements: {
                headerPage: 'bbva-header-main',
                movementsDate: '[data-tag-name=bbva-aggregation-movement-list] #header-category-0',
                movement: '[data-tag-name=bbva-aggregation-movement-list] [data-tag-name=bbva-list-movement]',
                movementPerson: '[data-tag-name=bbva-aggregation-movement-list] #movement-0-0 div div div.amount-content div div.content [data-tag-name=bbva-text] p.text',
                movementStatus: '[data-tag-name=bbva-aggregation-movement-list] #movement-0-0 div div div.status-content [data-tag-name=bbva-badge-default] [data-tag-name=bbva-text] p.text',
                movementAmount: '[data-tag-name=bbva-aggregation-movement-list] #movement-0-0 div div div.amount-content div div.amount [data-tag-name=bbva-amount] div.amount-wrapper',
                emptyHistoricalImage: '[data-tag-name=bbva-aggregation-movement-list] bbva-banner-image figure slot img',
                emptyHistoricalText: '[data-tag-name=bbva-aggregation-movement-list] bbva-text',
                spinner: '[data-tag-name=bbva-aggregation-movement-list] .spinner [data-tag-name=bbva-spinner]'
            },
            elementsSpherica: {
                headerPage: 'bbva-header-main-spherica',
                movementsDate: 'bbva-aggregation-movement-list-spherica #header-category-0',
                movement: 'bbva-aggregation-movement-list-spherica .list-movement',
                movementPerson: 'bbva-aggregation-movement-list-spherica #movement-0-0 .header-container bbva-type-text',
                movementStatus: 'bbva-aggregation-movement-list-spherica #movement-0-0 .main-container bbva-badge-default',
                movementAmount: 'bbva-aggregation-movement-list-spherica #movement-0-0 .header-container bbva-type-amount',
                emptyHistoricalImage: 'bbva-aggregation-movement-list-spherica bbva-clip-microillustration img',
                emptyHistoricalText: 'bbva-aggregation-movement-list-spherica bbva-type-text',
            },
            requiredElements: 'headerPage'
        });
    }

    async accessToMovementDetail(movementStatus = '') {
        await this.movement.waitForDisplayed({timeout: config.wait.M});
        switch(movementStatus.toLowerCase()) {
            case 'successful':
                await (await (await this.movement.elementByText({text: 'Exitosa', timeout: config.wait.M})).waitForClickable()).click();
                break;
            case 'rejected':
                await (await (await this.movement.elementByText({text: 'Rechazada', timeout: config.wait.M})).waitForClickable()).click();
                break;
            case 'in review':
                await (await (await this.movement.elementByText({text: 'En revisión', timeout: config.wait.M})).waitForClickable()).click();
                break;
            case 'pending information':
                await (await (await this.movement.elementByText({text: 'Pendiente de información', timeout: config.wait.M})).waitForClickable()).click();
                break;
            default:
                throw new Error(`"${movementStatus}" option not available`);
        }
    }

    async waitSpinner() {
        await this.spinner.waitForNotDisplayed({timeout: config.wait.L});
    }

    async _screenValidation({item} = {}) {
        switch(item) {
            case 'header':
                await this.headerPage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movements date':
                await this.movementsDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement':
                await this.movementPerson.waitForDisplayed({timeout: config.wait.M});
                await this.movementStatus.waitForDisplayed({timeout: config.wait.M});
                await this.movementAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'empty historical image':
                await this.emptyHistoricalImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'empty historical text':
                await this.emptyHistoricalText.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new InternationalTransfersHistorical();
