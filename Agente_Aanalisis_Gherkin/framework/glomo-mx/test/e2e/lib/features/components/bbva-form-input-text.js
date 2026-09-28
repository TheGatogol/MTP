import AbstractGlomoComponent from './abstract-glomo-component';

export default class BbvaFormInputText extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'bbva-form-input',
            elements: {
                input: 'input'
            },
            requiredElements: [
                'input'
            ],
        };
        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'bbva-form-input',
        };
    }

    async inputText(value) {
        await this.input.waitForEnabled({timeout: config.wait.L});
        await this.input.setValue({value: value, slow: true});
    }
}
