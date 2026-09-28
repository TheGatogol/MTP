import AbstractGlomoComponent from './abstract-glomo-component';

export default class BbvaNotificationMessage extends AbstractGlomoComponent {

    constructor(args) {
        super(Object.assign({
            name: 'bbva-notification-message',
            elements: {
                icon: '[data-tag-name="bbva-icon"]',
                text: '.paragraph',
                textSpherica: '.text',
                errorRetry: '[data-tag-name*="link"]',
                button: '[data-tag-name="bbva-button-default"]'
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

