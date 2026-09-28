import BbvaNotificationMessage from './bbva-notification-message';

export default class BbvaNotificationMessageSpherica extends BbvaNotificationMessage {

    constructor(args) {
        super(Object.assign({
            name: 'bbva-notification-message-spherica',
            elements: {
                icon: '[data-tag-name="bbva-type-icon"]',
                text: '[data-tag-name="bbva-type-text"]',
                errorRetry: '[data-tag-name="bbva-type-link"][text="Reintentar"]',
            },
            requiredElements: [
                '__root',
            ],
        }, args));
    }

    static get _baseRoot() {
        return 'bbva-notification-message';
    }

    get exitDisclaimer() {
        return {
            click: async ({timeout = config.wait.M} = {}) => {
                await this.button.waitForClickable({timeout});
                await this.button.click();
            }
        };
    }

}

