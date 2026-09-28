
import CellsOperationSummary from './cells-operation-summary';

export default class CellsOperationSummarySpherica extends CellsOperationSummary {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-operation-summary-spherica',

            elements: {
                acceptBtn: '#summary #collapser cells-st-button-spherica.full[variant="primary"]',
                title: '#summary #operationTotal .cells-summary-view--title',
                totalAmount: '#summary #operationTotal cells-atom-amount-spherica.amount-huge-decimals span.amount-wrapper',
            }
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return 'cells-operation-summary-spherica';
    }

    async confirm() {
        await this.acceptBtn.waitForAnimation({timeout: config.wait.L});
        await this.acceptBtn.waitForDisplayed({timeout: config.wait.L});
        await this.acceptBtn.click();
    }

    async verifySummary() {
        await this.title.waitForText({timeout: config.wait.M});
        await this.totalAmount.waitForText({timeout: config.wait.M});
        await this.acceptBtn.waitForClickable({timeout: config.wait.M});
    }
}
