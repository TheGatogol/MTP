import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import productDetailPage from '../../pages/productDetails/accountProductDetail';

// Page Objects IDs
const PRODUCT_DETAIL = productDetailPage.getId();

class BillPaymentsProductAccounts extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'billPaymentsHome/billPaymentsHome', parentNavigation: 'account/productDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PRODUCT_DETAIL:
                await productDetailPage.accessBillPayments();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BillPaymentsProductAccounts();
