import AbstractGlomoComponent from './abstract-glomo-component';

export default class CellsTransactionsList extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: 'cells-transactions-list',
            elements: {
                transactionsList: 'div.list cells-molecule-group-transactions-list',
                transactionsListGroup: 'div.list cells-molecule-group-transactions-list .transaction-group .transaction-list',
                transactionsListTitle: '.list__header h2',
                transactionsListItems: 'cells-molecule-group-transactions-list cells-molecule-transaction-list-item',
                transactionsListEmptyTitle: '.list__header h3',
                transactionsEmptyListImage: '.list__empty img',
                transactionsEmptyListText: '.list__empty span',
                floatingButton: 'button.floated-button',
                viewMoreButton: 'div.list__footer'
            }
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return 'cells-transactions-list';

    }
}
