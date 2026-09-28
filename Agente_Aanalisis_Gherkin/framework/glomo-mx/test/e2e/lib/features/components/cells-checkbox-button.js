import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsCheckboxButton extends AbstractGlomoComponent {

    constructor(args) {
        super(Object.assign({
            name: 'cells-checkbox-button',
            elements: {
                checkBoxDiv: 'div#checkbox',
                labelSpan: 'span#label',
                buttonContainer: '.checkbox-container',
                description: '.body-label',
            },
            requiredElements: [
                'checkBoxDiv',
                'labelSpan',
            ],
        }, args));
    }

    static get _baseRoot() {
        return 'cells-checkbox-button';
    }

    get checkbox() {
        return {
            waitForNotChecked: async ({timeout = config.wait.L} = {}) => {
                await this.checkBoxDiv.waitForDisplayed({timeout});
                await this.__root.waitForAttribute({attribute: 'checked', reverse: true, timeout});
            },
            waitForDisplayed: async ({timeout = config.wait.L} = {}) => {
                await this.checkBoxDiv.waitForDisplayed({timeout});
            },
            click: async ({timeout = config.wait.L} = {}) => {
                await this.checkBoxDiv.waitForClickable({timeout});
                await this.checkBoxDiv.click();
            }
        };
    }

    get label() {
        return {
            waitForDisplayed: async ({timeout = config.wait.L} = {}) => {
                await this.labelSpan.waitForDisplayed({timeout});
            }
        };
    }

    get checkBoxContainer() {
        return {
            click: async ({timeout = config.wait.M} = {}) => {
                await this.buttonContainer.waitForClickable({timeout});
                await this.buttonContainer.click();
            }
        };
    }
}
