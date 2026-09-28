import AbstractGlomoPage from '../abstract-glomo-page';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';

@page('userTransactionAmountRejection')
class UserTransactionAmountRejection extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-userTransactionAmountRejection[state="active"]',
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
            case 'header mtu rejection':
                await this.header.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'microillustration mtu rejection':
                await this.microillustration.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'subtitle mtu rejection':
                await this.subtitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'description mtu rejection':
                await this.description.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button mtu rejection':
                await this.linkButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new UserTransactionAmountRejection();
