import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import * as navigation from '../../navigation';

//pages
import productDetail from '../../pages/productDetails/accountProductDetail';
import dashboard from '../../pages/dashboard/dashboard';

//Page Object IDs
const ACCOUNT_PRODUCT_DETAIL = productDetail.getId();
const DASHBOARD = dashboard.getId();

class PiggyBanks extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'piggyBanks/piggyBanks', parentNavigation: 'account/productDetail'});
    }
    async go_impl({account} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await navigation.account.productDetail.go({account});
                break;
            case ACCOUNT_PRODUCT_DETAIL:
                await productDetail.goToPockets();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PiggyBanks();
