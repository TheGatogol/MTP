import AbstractGlomoComponent from './abstract-glomo-component';

import BbvaNotificationMessage from '../components/bbva-notification-message';

export default class BbvaTabDefault extends AbstractGlomoComponent {
    constructor(args) {
        super(Object.assign({
            name: 'bbva-tab-default',
            elements: {
                tabPrimary: '#tabs button#tab-0',
                tabSecondary: '#tabs button#tab-1',
                link: '[data-tag-name*="-link"]',
                button: '[tabindex="0"][data-tag-name="bbva-button-default"]',
                amount: 'bbva-amount .amount-wrapper',
                message: BbvaNotificationMessage,
            },
            requiredElements: [
                '__root',
            ],
        }, args));
    }

    static get _baseRoot() {
        return 'bbva-tab-default';
    }

    get retryNotificationError() {
        return {
            click: async ({timeout = config.wait.M} = {}) => {
                await this.message.errorRetry.waitForDisplayed({timeout});
                await this.message.errorRetry.waitForClickable({timeout});
                await this.message.errorRetry.click();
            }
        };
    }
}

