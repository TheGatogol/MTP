import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';

const ACCOUNT_PRODUCT_DETAIL = accountProductDetail.getId();

class ChecksSection extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'checksSection/checksSection', parentNavigation: 'account/productDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNT_PRODUCT_DETAIL:
                await accountProductDetail.accessTheCheckSection();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ChecksSection();
