import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import * as navigation from '../../navigation';

// Pages
import startPage from '../../pages/start';
import dashboardPage from '../../pages/dashboard/dashboard';
import accountProductDetailPage from '../../pages/productDetails/accountProductDetail';

// Page Objects IDs
const START = startPage.getId();
const DASHBOARD = dashboardPage.getId();
const ACCOUNT_PRODUCT_DETAIL = accountProductDetailPage.getId();

class ProductDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/accountProductDetail', parentNavigation: 'dashboard'});
    }

    async go_impl({account} = {}) {
        switch (currentPage.getId()) {
            case START:
            case DASHBOARD:
                await navigation.account.productDetail.go({account});
                await this.go_impl({account});
                break;
            case ACCOUNT_PRODUCT_DETAIL:
                await accountProductDetailPage.upgradeAccountLinkModal();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ProductDetail();
