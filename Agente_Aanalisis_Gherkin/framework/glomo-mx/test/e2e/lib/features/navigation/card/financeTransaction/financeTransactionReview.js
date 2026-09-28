import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../../abstract-glomo-navigation';

// Pages
import financeTransactionPage from '../../../pages/financeTransaction/financeTransaction';

// Page Objects IDs
const FINANCE_TRANSACTION = financeTransactionPage.getId();

class FinanceTransactionReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'financeTransaction/financeTransactionReview', parentNavigation: 'card/financeTransaction/financeTransaction'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FINANCE_TRANSACTION:
                await financeTransactionPage.confirmFinanceTransaction();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new FinanceTransactionReview();
