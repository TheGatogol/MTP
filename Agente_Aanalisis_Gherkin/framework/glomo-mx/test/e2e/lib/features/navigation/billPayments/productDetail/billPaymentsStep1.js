import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import productDetailPage from '../../../pages/productDetails/accountProductDetail';
import dashboardPage from '../../../pages/dashboard/dashboard';

// Page Objects IDs
const PRODUCT_DETAIL = productDetailPage.getId();
const DASHBOARD = dashboardPage.getId();

class BillPaymentsStep1 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'billPayments/productDetail/billPaymentsStep1', parentNavigation: 'account/productDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PRODUCT_DETAIL:
                await productDetailPage.goToBillPayments();
                break;
            case DASHBOARD:
                await dashboardPage.accessFrequentServicePayment();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BillPaymentsStep1();
