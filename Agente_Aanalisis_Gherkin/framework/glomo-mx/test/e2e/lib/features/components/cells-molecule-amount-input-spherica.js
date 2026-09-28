import CellsMoleculeAmountInput from './cells-molecule-amount-input';
import {Commands} from '@csqe/radish';
export default class CellsMoleculeAmountInputSpherica extends CellsMoleculeAmountInput {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-molecule-amount-input-spherica',
            elements: {
                inputField: 'input#input.text-field__input, input.text-field__input, input[type="text"], input[type="number"], input',
                infoMessageSpan: '.message-input[type="info-dark"] .message, .info-message .message',
                infoMessageIcon: '.message-input[type="info-dark"] .icon, .info-message .icon',
                errorMessageSpan: '.message-input[type="error"] .message, .error-message .message',
                errorMessageIcon: '.message-input[type="error"] #principalIcon.icon, .error-message .icon',
                deleteIcon: '.text-field__icon, .delete-icon',
            },
            requiredElements: [
                'inputField',
            ],
        };
        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return 'cells-molecule-amount-input-spherica';
    }

    /**
     * Enter a value in the input field
     * @param {string|number} value
     * @param {number} [timeout=config.wait.L]
     * @param setValueArgs {@see Element.setValue}
     */
    async setValue({value, timeout = config.wait.M, ...setValueArgs} = {}) {
        await (await (await (await this.inputField
            .waitForEnabled({timeout}))
            .scrollIntoView({block: 'nearest'}))
            .waitForAnimation({timeout}))
            .setValue({value, forceFocus: Commands.flags.isRemote || false, ...setValueArgs});

        return this;
    }
}
