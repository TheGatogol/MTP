import AbstractGlomoComponent from './abstract-glomo-component';
import {Commands} from '@csqe/radish';

export default class CellsMoleculeAmountInput extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-molecule-amount-input',
            elements: {
                inputField: 'input#input.text-field__input',
                infoMessageSpan: '.message-input[type="info-dark"] .message',
                infoMessageIcon: '.message-input[type="info-dark"] .icon',
                errorMessageSpan: '.message-input[type="error"] .message',
                errorMessageIcon: '.message-input[type="error"] #principalIcon.icon',
                deleteIcon: '.text-field__icon',
            },
            requiredElements: [
                'inputField',
            ],
        };
        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return 'cells-molecule-amount-input';
    }

    /**
     * Enter a value in the input field
     * @param {string|number} value
     * @param {number} [timeout=config.wait.L]
     * @param setValueArgs {@see Element.setValue}
     */
    async setValue({value, timeout = config.wait.L, ...setValueArgs} = {}) {
        await (await (await (await this.inputField
            .waitForEnabled({timeout}))
            .scrollIntoView())
            .waitForAnimation({timeout}))
            .setValue({value, forceFocus: Commands.flags.isRemote || false, ...setValueArgs});

        return this;
    }

    get input() {
        return {
            /**
             * It will check that the input field is visible
             */
            waitForDisplayed: async ({timeout = config.wait.L} = {}) => {
                await this.inputField.waitForDisplayed({timeout});
            },
            /**
             * Enter a value in the input field
             * @param value
             * @param timeout
             * @deprecated Use {@link setValue}
             */
            enterValue: async ({value, timeout = config.wait.L} = {}) => {
                await this.setValue({value, timeout});
            },
            waitForText: async ({timeout = config.wait.L, value} = {}) => {
                await this.inputField.waitForDisplayed({timeout});
                await this.inputField.waitForText({reverse: value === 'empty amount'});
            },
            getValue: async ({timeout = config.wait.L} = {}) => {
                await this.inputField.waitForDisplayed({timeout});
                return this.inputField.getValue();
            },

            delete: async ({timeout = config.wait.L} = {}) => {
                await this.deleteIcon.waitForClickable({timeout});
                await this.deleteIcon.click();
            },
        };
    }

    get infoMessage() {
        return {
            waitForDisplayed: async ({timeout = config.wait.L} = {}) => {
                await this.infoMessageSpan.waitForDisplayed({timeout});
            }
        };
    }

    get infoIcon() {
        return {
            waitForDisplayed: async ({timeout = config.wait.L} = {}) => {
                await this.infoMessageIcon.waitForDisplayed({timeout});
            }
        };
    }

    get errorMessage() {
        return {
            waitForDisplayed: async ({timeout = config.wait.L} = {}) => {
                await this.errorMessageSpan.waitForDisplayed({timeout});
            }
        };
    }

    get errorIcon() {
        return {
            waitForDisplayed: async ({timeout = config.wait.L} = {}) => {
                await this.errorMessageIcon.waitForDisplayed({timeout});
            }
        };
    }
}
