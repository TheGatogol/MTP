import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import accountProductDetailPage from '../../pages/productDetails/accountProductDetail';
import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';
import dashboardPage from '../../pages/dashboard/dashboard';

// Page Objects IDs
const ACCOUNTS_PRODUCT_DETAIL = accountProductDetailPage.getId();
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();
const DASHBOARD = dashboardPage.getId();

class AccountTransactions extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/accountTransactions', parentNavigation: 'account/productDetail'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNTS_PRODUCT_DETAIL:
                await accountProductDetailPage.seeAllMovements();
                break;
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetailPage.accessToAllMovements();
                break;
            case DASHBOARD:
                await dashboardPage.accessAllMovementsMainCard();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new AccountTransactions();
