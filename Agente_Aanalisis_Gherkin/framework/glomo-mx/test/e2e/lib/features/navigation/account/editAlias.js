import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import * as navigation from '../../navigation';

import startPage from '../../pages/start';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';
import dashboardPage from '../../pages/dashboard/dashboard';

const START = startPage.getId();
const DASHBOARD = dashboardPage.getId();
const ACCOUNT_PRODUCT_DETAIL = accountProductDetail.getId();

class EditAlias extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'operatives/editAlias'});
    }

    async go_impl({account} = {}) {
        switch (currentPage.getId()) {
            case START:
            case DASHBOARD:
                await navigation.account.productDetail.go({account});
                await this.go_impl();
                break;
            case ACCOUNT_PRODUCT_DETAIL:
                await accountProductDetail.accessEditAlias();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new EditAlias();
