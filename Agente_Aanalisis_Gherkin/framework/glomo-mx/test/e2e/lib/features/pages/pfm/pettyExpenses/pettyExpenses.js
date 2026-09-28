
import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('PettyExpenses')
class PettyExpenses extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-pfmPettyExpenses[state="active"]',
            elements: {
                pettyExpenses: '[data-tag-name="pfm-petty-expenses-gl"]',
                buttonBack: '[data-tag-name="bbva-header-main"] button#btn-back',
                description: '[data-tag-name="pfm-petty-expenses-gl-link-info"]',
                amountDescription: '[data-tag-name="pfm-petty-expenses-gl-list-definition-amount"]',
                movements: '[data-tag-name="bbva-header-category"]#headerText',
                date: '[data-tag-name="bbva-header-category"][variant="date"]',
                movement: '[data-tag-name="pfm-petty-expenses-gl-list-movement"][amount= "-40"]',
                microillustration: '[data-tag-name="pfm-petty-expenses-gl-panel-info"] [data-tag-name="bbva-clip-microillustration"]',
                emptyStateText: '[data-tag-name="pfm-petty-expenses-gl-panel-info"] [data-tag-name="bbva-type-text"]'
            },
            requiredElements: [
                'pettyExpenses'
            ],
        });
    }

    async goBack() {
        await this.buttonBack.waitForDisplayed({timeout: config.wait.L});
        await this.buttonBack.click();
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header back':
                await this.header.buttonBack.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'petty expenses description':
                await this.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'petty expenses amount description':
                await this.amountDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'petty expenses title movements':
                await this.movements.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'petty expenses date':
                await this.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'petty expenses list movement':
                await this.movement.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'petty expenses empty state microillustration':
                await this.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'petty expenses empty state text':
                await this.emptyStateText.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new PettyExpenses();
