import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import accounttransactiondetail from '../../pages/productDetails/accountTransactionDetail';

const ACCOUNT_TRANSACTION_DETAIL = accounttransactiondetail.getId();

class ReuseOperationsBillPayments extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'reuseOperation/reuseOperationsBillPayments', parentNavigation: 'account/accountTransactionDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNT_TRANSACTION_DETAIL:
                await currentPage.goToReuseOperation();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ReuseOperationsBillPayments();
