import AbstractGlomoComponent from './abstract-glomo-component';
import {Element} from '@csqe/radish';

export default class CellsEnterLimitedAmount extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-enter-limited-amount',
            elements: {
                input: '#enterAmountInput #input',
                inputLabel: '#enterAmountInput #label .content-input .text-field__label',
                infoText: 'div.cells-enter-limited-amount__range .cells-enter-limited-amount__textInfo p.cells-enter-limited-amount__txt span:not([hidden])',
                infoTextError: 'div.cells-enter-limited-amount__error div.cells-enter-limited-amount__textInfo p.cells-enter-limited-amount__txt',
            },
            requiredElements: [
                'input'
            ],
        };
        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'cells-enter-limited-amount',
        };
    }

    async enterValue(value) {
        await this.input.waitForEnabled({timeout: config.wait.L});
        await this.input.setValue({value: value, slow: true});
    }

    async waitForAreaInput() {
        await this.inputLabel.waitForText({timeout: config.wait.L});
        await this.input.waitForEnabled({timeout: config.wait.L});
    }

    async waitForInfoText() {
        const message = await this.infoText.elements();
        await new Element({
            selector: message.value[0],
            _container: this,
        }).waitForText({timeout: config.wait.L});
    }

    async waitForInfoTextError() {
        const messageError = await this.infoTextError.elements();
        await new Element({
            selector: messageError.value[1],
            _container: this,
        }).waitForText({timeout: config.wait.L});
    }

}
