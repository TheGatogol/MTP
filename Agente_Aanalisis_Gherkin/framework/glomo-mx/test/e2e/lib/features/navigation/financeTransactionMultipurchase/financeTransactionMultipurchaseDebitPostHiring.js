import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';
import flexibleFinancingDashboard from '../../pages/flexibleFinancing/paymentDashboard';

const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetail.getId();
const FLEXIBLE_FINANCING_DASHBOARD = flexibleFinancingDashboard.getId();

class FinanceTransactionMultipurchaseDebitPostHiring extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'financeTransactionMultipurchase/financeTransactionMultipurchaseDebitPostHiring', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl({button}={}) {
        switch (currentPage.getId()) {
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetail.accessMovementFinanceTransactionMultipurchaseDebit(button);
                break;
            case FLEXIBLE_FINANCING_DASHBOARD:
                await flexibleFinancingDashboard.accessOperative('differentPurchase');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new FinanceTransactionMultipurchaseDebitPostHiring();
