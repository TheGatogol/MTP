import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import accountProductDetailPage from '../../pages/productDetails/accountProductDetail';

const ACCOUNT_PRODUCT_DETAIL = accountProductDetailPage.getId();

class AccountUpgrade extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'accountUpgrade/accountUpgrade', parentNavigation: 'account/productDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNT_PRODUCT_DETAIL:
                await accountProductDetailPage.upgradeAccount();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new AccountUpgrade();
