import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

import topUp from '../../pages/operationals/topUp';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';

const TOP_UP = topUp.getId();
const ACCOUNT_PRODUCT_DETAIL = accountProductDetail.getId();

class MobileTopUpPackages extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'mobileTopUpPackages/mobileTopUpPackages', parentNavigation: 'selectOperations/topUp'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TOP_UP:
                await topUp.accessToOperative();
                break;
            case ACCOUNT_PRODUCT_DETAIL:
                await accountProductDetail.accessMobileTopUpPackages();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new MobileTopUpPackages();
