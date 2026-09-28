import AbstractGlomoComponent from './abstract-glomo-component';

export default class BbvaListToggle extends AbstractGlomoComponent {

    constructor(args) {
        super(Object.assign({
            name: 'bbva-list-toggle',
            elements: {
                icon: '.help-icon',
                toggle: '[data-tag-name="bbva-form-toggle"]',
                toggleChecked: '[data-tag-name="bbva-form-toggle"][checked]',
                toggleNotChecked: '[data-tag-name="bbva-form-toggle"]:not(:checked)',
            },
            requiredElements: [
                'toggle',
            ],
        }, args));
    }

    static get _baseRoot() {
        return 'bbva-list-toggle';
    }

    get help() {
        return {
            click: async ({timeout = config.wait.M} = {}) => {
                await this.icon.waitForDisplayed({timeout});
                await this.icon.waitForClickable({timeout});
                await this.icon.click();
            }
        };
    }
}

