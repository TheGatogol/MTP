import AbstractGlomoPage from '../abstract-glomo-page';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';

@page('userTransactionAmountError')
class UserTransactionAmountError extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-userTransactionAmountError[state="active"]',
            elements: {
                header: '[data-tag-name="bbva-header-main"]',
                microillustration: '[data-tag-name="bbva-panel-info"] svg',
                subtitle: '[data-tag-name="bbva-panel-info"] .title',
                description: '#div_page [data-tag-name="bbva-text"]',
                button: '#buttonConfirm',
            },
            elementsSpherica: {
                microillustration: '[data-tag-name="bbva-panel-info-spherica"] svg',
            },
            requiredElements: [
                'button'
            ]
        });
    }

    async _screenValidation({ item } = {}) {
        switch (item) {
            case 'header mtu error':
                await this.header.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'microillustration mtu error':
                await this.microillustration.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'subtitle mtu error':
                await this.subtitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'description mtu error':
                await this.description.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button mtu error':
                await this.button.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new UserTransactionAmountError();
