import AbstractGlomoComponent from './abstract-glomo-component';

export default class GlomoButtonList extends AbstractGlomoComponent {
    constructor() {
        const defaultArgs = {
            name: 'glomo-button-list',
            elements: {
                firstButton: 'cells-st-button.link',
                nButton: 'cells-st-button.link:nth-of-type(__N__)',
                selectButton: 'cells-st-button.link button.__S__',
                nIcon: 'cells-st-button.link:nth-of-type(__N__) svg',
                selectIcon: 'cells-st-button.link button.__S__ svg',
            },
            requiredElements: [
                'firstButton',
            ],
        };
        super(Object.assign(defaultArgs, arguments[0]));
    }

    static get _baseRoot() {
        return 'glomo-button-list';
    }

    specifyButtonSelector({selector, errorMessage = `${selector} selector is not implemented`}) {
        let button;
        switch(typeof selector) {
            case 'number':
                button = this.nButton.specifySelector({placeholder: '__N__', value: selector});
                break;
            case 'string':
                button = this.selectButton.specifySelector({placeholder: '__S__', value: selector});
                break;
            default:
                throw new Error(`${typeof selector} type is not implemented`);
        }
        if (!button) {
            throw new Error(errorMessage);
        }
        return button;
    }

    async clickButton(selector) {
        const errorMessage = 'Which button should I click?';
        const button = this.specifyButtonSelector({selector, errorMessage});
        await button.waitForClickable({timeout: config.wait.M});
        await button.click();
    }

    async waitForIconDisplayed({selector, timeout = config.wait.M, reverse = false}) {
        let icon;
        switch(typeof selector) {
            case 'number':
                icon = this.nIcon.specifySelector({placeholder: '__N__', value: selector});
                break;
            case 'string':
                icon = this.selectIcon.specifySelector({placeholder: '__S__', value: selector});
                break;
            default:
                throw new Error(`${typeof selector} type is not implemented`);
        }
        if (!icon) {
            throw new Error('Which icon should I wait for it to be visible?');
        }
        await icon.waitForDisplayed({timeout, reverse});
    }

    async waitForLabelDisplayed({selector, timeout = config.wait.M, reverse = false}) {
        const errorMessage = 'Which label should I wait for it to be visible?';
        const button = this.specifyButtonSelector({selector, errorMessage});
        await button.waitForDisplayed({timeout, reverse});
        await button.waitForText({timeout, text: /-/, reverse: !reverse});
    }

    async waitForButtonDisplayed({selector, timeout = config.wait.M, reverse = false}) {
        const errorMessage = 'Which button should I wait for it to be visible?';
        const button = this.specifyButtonSelector({selector, errorMessage});
        await button.waitForDisplayed({timeout, reverse});
    }

}
