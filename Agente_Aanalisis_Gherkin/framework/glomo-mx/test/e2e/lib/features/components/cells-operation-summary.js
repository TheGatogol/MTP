import AbstractGlomoComponent from './abstract-glomo-component';
import {Commands} from '@csqe/radish';

export default class CellsOperationSummary extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-operation-summary',
            elements: {

                title: '#summary #operationTotal .cells-summary-view--title',
                totalAmount: '#summary #operationTotal cells-atom-amount.amount-huge-decimals.cells-summary-view--quantity',
                acceptBtn: '#summary #collapser cells-st-button.primary.size-m.cells-summary-view--submit-button',
                animateLayer: 'div.animate-layer',
            },
            requiredElements: [
                'title',
            ]
        };
        super(Object.assign(defaultArgs, args));

    }

    static get _baseRoot() {
        return {
            web: 'cells-operation-summary'
        };
    }

    async verifySummary() {
        await this.title.waitForText({timeout: config.wait.M});
        await this.totalAmount.waitForText({timeout: config.wait.M});
        await this.acceptBtn.waitForClickable({timeout: config.wait.M});
    }

    async confirm() {
        await this.animateLayer.waitForDisplayed({timeout: config.wait.L, reverse: true});
        await this.acceptBtn.waitForClickable({timeout: config.wait.L});
        await Commands.pause({time: config.wait.XS});
        await this.acceptBtn.click();
    }

}
