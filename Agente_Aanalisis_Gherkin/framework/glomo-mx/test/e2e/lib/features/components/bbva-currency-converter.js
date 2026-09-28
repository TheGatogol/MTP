import AbstractGlomoComponent from './abstract-glomo-component';

export default class BbvaCurrencyConverter extends AbstractGlomoComponent {
    constructor(args) {
        const defaultArgs = {
            name: 'bbva-currency-converter',
            elements: {
                mainCurrencyContainer: '.main-currency-container',
                listCurrencyContainer: '.list-currency-container',
                mainFlagIcon: '.main-currency-container button.button.flag bbva-clip-flag cells-icon',
                originButtonFlag: '.main-currency-container button.button.flag',
                targetButtonFlag: '.list-currency-container bbva-list-currency:first-child button.button.flag',
                targetFlagIcon: '.list-currency-container bbva-list-currency:first-child button.button.flag bbva-clip-flag cells-icon',
            },
            requiredElements: [
                'mainCurrencyContainer',
                'listCurrencyContainer',
            ],
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return 'bbva-currency-converter:not([hidden])';
    }
}
