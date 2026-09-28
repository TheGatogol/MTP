import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsSummaryView extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'glomo-step-offer-page',
            elements: {
                continueButton: 'cells-st-button.primary button',
            },
            requiredElements: [
                'continueButton',
            ],
        };
        super(_.merge(args, defaultArgs));
    }

    static get _baseRoot() {
        return 'cells-summary-view:not(.hide-button)';
    }

    get continue() {
        return {
            waitForDisplayed: async ({timeout = config.wait.L} = {}) => {
                await this.continueButton.waitForDisplayed({timeout});
            },
            click: async ({timeout = config.wait.L} = {}) => {
                await this.continueButton.waitForDisplayed({timeout});
                await this.continueButton.click();
            },
            waitForEnabled: async ({timeout = config.wait.L, reverse = false} = {}) => {
                await this.continueButton.waitForEnabled({timeout, reverse});
            }
        };
    }

    async goNext() {
        await this.continue.click();
    }
}
