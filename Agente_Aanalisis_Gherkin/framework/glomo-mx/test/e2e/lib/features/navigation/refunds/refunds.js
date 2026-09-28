import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import accounttransactiondetail from '../../pages/productDetails/accountTransactionDetail';
// Page Objects IDs
const ACCOUNTTRANSACTIONDETAIL = accounttransactiondetail.getId();

class Refunds extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'refunds/refundsDetail', parentNavigation: 'account/accountTransactionDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNTTRANSACTIONDETAIL:
                await currentPage.firstOperative();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new Refunds();
