import AbstractGlomoPage from '../abstract-glomo-page';

/* Error messages */
export default class ProductDetail extends AbstractGlomoPage {
    constructor(pageArgs) {
        const elements = {
            back: '#btnLeft',
            title: 'cells-molecule-header h1.title',
            aliasLabel: '#headerText',
            moreInfoBtn: '.more-info__btn',
            operationsModule: 'cells-operations-list',
            transactionsModule: 'cells-transactions-list',
            firstTransaction: 'cells-transactions-list div.list .transaction-group:nth-of-type(1) div#item-list-0-0-0',
            viewAndSearchTransactions: 'cells-transactions-list .list__header cells-st-button',

            /* 2018-01-09: the version 1.0.20180102-5-rc (latest) of the Android app crashes
             * when trying to link phone and account and therefore we cannot get the selectors.
             * It was not possible to see the confirmation toast and get its selector. */
            confirmationToast: 'cells-button-navigate-transactions button',

            // No transactions
            imageNoTransactions: 'cells-transactions-list div.list__empty img',
            explanatoryText: 'cells-transactions-list div.list__empty span',
            overdueListLink: 'glomo-accordion-loan-installment-list:nth-of-type(1) bbva-expandable-accordion cells-loan-installments-list cells-st-button.transparent button',
            nextListLink: 'glomo-accordion-loan-installment-list:nth-of-type(2) bbva-expandable-accordion cells-loan-installments-list cells-st-button.transparent button',
        };
        pageArgs.root = pageArgs.root ? pageArgs.root : '*[state="active"]';
        pageArgs.elements = Object.assign(elements, pageArgs.elements);
        super(pageArgs);
    }
}
