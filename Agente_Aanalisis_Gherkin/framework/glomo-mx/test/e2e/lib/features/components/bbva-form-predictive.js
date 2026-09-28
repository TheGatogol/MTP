import AbstractGlomoComponent from './abstract-glomo-component';

export default class BbvaFormPredictive extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: '#bbva-form-predictive',
            elements: {
                input: 'input',

            },
            requiredElements: [
                'input'
            ],
        };
        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: 'bbva-form-predictive',
        };
    }

    async inputText(value) {
        await this.input.waitForEnabled({timeout: config.wait.L});
        await this.input.setValue({value: value, slow: true});
    }
}
