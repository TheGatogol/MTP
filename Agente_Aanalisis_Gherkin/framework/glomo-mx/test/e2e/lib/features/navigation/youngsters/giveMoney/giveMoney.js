import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import accountProductDetail from '../../../pages/productDetails/accountProductDetail';

const ACCOUNT_PRODUCT_DETAIL = accountProductDetail.getId();

class GiveMoney extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'youngsters/giveMoney/giveMoney', parentNavigation: 'account/productDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNT_PRODUCT_DETAIL:
                await accountProductDetail.accessGiveMoney();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new GiveMoney();
