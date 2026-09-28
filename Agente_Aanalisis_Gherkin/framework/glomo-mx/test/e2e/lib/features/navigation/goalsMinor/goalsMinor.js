import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import * as navigation from '../../navigation';

// Pages
import dashboard from '../../pages/dashboard/dashboard';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';

// Page Objects
const DASHBOARD = dashboard.getId();
const PRODUCT_DETAIL = accountProductDetail.getId();

class GoalsMinor extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'goalsMinor/goalsMinor', parentNavigation: 'account/productDetail'});
    }

    async go_impl({account} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await navigation.account.productDetail.go({account});
                break;
            case PRODUCT_DETAIL:
                await accountProductDetail.goToMinorGoalsHiring();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new GoalsMinor();
