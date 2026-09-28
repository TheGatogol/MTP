import AbstractGlomoComponent from './abstract-glomo-component';
import {Element} from '@csqe/radish';

export default class CellsTransactionDetail extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-transaction-detail',
            elements: {
                transactionTitle: '.cells-transaction-detail h1.transaction-title',
                transactionMainAmount: '.cells-transaction-detail cells-atom-amount.main-amount',
                transactionStatusSuccess: '.cells-transaction-detail .transaction-status span.success',
                transactionStatusError: '.cells-transaction-detail .transaction-status span.error',
                transactionDate: '.operation-date-group span',
                transactionShareLink: '.transaction-info cells-operations-list button.link'
            }
        };

        super(Object.assign(defaultArgs, args));

        this.transactionInfoItems = `${this.root} .transaction-info .transaction-info__group .transaction-info__item-values`;
    }

    getTransactionInfoItemKey(dataSelector) {
        return new Element({
            selector: `${this.transactionInfoItems} cells-key-values[data-selector="${dataSelector}"] .key`,
            _container: this,
        });
    }

    getTransactionInfoItemValue(dataSelector) {
        return new Element({
            selector: `${this.transactionInfoItems} cells-key-values[data-selector="${dataSelector}"] .value`,
            _container: this,
        });
    }

    static get _baseRoot() {
        return 'cells-transaction-detail';

    }
}
