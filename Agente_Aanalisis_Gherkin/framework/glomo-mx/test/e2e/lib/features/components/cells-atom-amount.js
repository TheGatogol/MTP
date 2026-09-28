import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsAtomAmount extends AbstractGlomoComponent {
    constructor() {
        const defaultArgs = {
            name: 'cells-atom-amount',
            elements: {
                // Complete Value
                container: 'span.amount-wrapper',
                visibleAmount: '.amount-wrapper > span:not([hidden]):not(.currency)',
                text: '.amount-wrapper > span:not([hidden])',

                // Single Elements
                minusLeft: 'span.minus--left',
                minusRight: 'span.minus--right',
                currencyLeft: 'span.currency--left',
                currencyRight: 'span.currency--right',
                integer: 'span.integer',
                separator: 'span.separator',
                fractional: 'span.fractional',
            },
            requiredElements: [
                'container',
            ],
        };
        super(Object.assign(defaultArgs, arguments[0]));
    }

    static get _baseRoot() {
        return 'cells-atom-amount';
    }

    get amount() {
        return {
            waitForDisplayed: async ({timeout}) => {
                await this.integer.waitForDisplayed({timeout});
                await this.separator.waitForDisplayed({timeout});
                await this.fractional.waitForDisplayed({timeout});
            },
            waitForNotDisplayed: async ({timeout}) => {
                await this.integer.waitForNotDisplayed({timeout});
                await this.separator.waitForNotDisplayed({timeout});
                await this.fractional.waitForNotDisplayed({timeout});
            },
            getText: async () => {
                return this.visibleAmount.getText();
            },
            waitForText: async ({value} = {}) => {
                await this.visibleAmount.waitForText({text: value, timeout: config.wait.L});
            }
        };
    }

    get currency() {
        return {
            waitForDisplayed: async ({timeout, side}) => {
                side === 'left' ?
                    await this.currencyLeft.waitForDisplayed({timeout}) :
                    await this.currencyRight.waitForDisplayed({timeout});
            },
            waitForNotDisplayed: async ({timeout, side}) => {
                side === 'left' ?
                    await this.currencyLeft.waitForNotDisplayed({timeout}) :
                    await this.currencyRight.waitForNotDisplayed({timeout});
            },
            waitForText: async ({currency, side = 'left'}) => {
                side === 'left' ?
                    await this.currencyLeft.waitForText({text: currency, timeout: config.wait.L}) :
                    await this.currencyRight.waitForText({text: currency, timeout: config.wait.L});
            },
        };
    }
}
