import AbstractGlomoPage from '../abstract-glomo-page';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';

@page('userTransactionAmountConfirmation')
class UserTransactionAmountConfirmation extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-userTransactionAmountConfirmation[state="active"]',
            elements: {
                header: '[data-tag-name="bbva-header-main"]',
                microillustration: '[data-tag-name="bbva-panel-info"] svg',
                subtitle: '[data-tag-name="bbva-panel-info"] .title',
                description: '#div_page [data-tag-name="bbva-text"]',
                linkButton: 'cells-operations-list-indicators #operations .link',
            },
            elementsSpherica: {
                header: '[data-tag-name="bbva-header-main-spherica"]',
                microillustration: '[data-tag-name="bbva-panel-info-spherica"] .container',
                subtitle: '[data-tag-name="bbva-panel-info-spherica"] .title',
                linkButton: 'cells-operations-list-indicators-spherica #operations .link',
            },
            requiredElements: [
                'description'
            ]
        });
    }

    async _screenValidation({ item } = {}) {
        switch (item) {
            case 'header mtu confirmation':
                await this.header.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'microillustration mtu confirmation':
                await this.microillustration.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'subtitle mtu confirmation':
                await this.subtitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'description mtu confirmation':
                await this.description.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button mtu confirmation':
                await this.linkButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new UserTransactionAmountConfirmation();
