import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import productDetail from '../../pages/productDetails/accountProductDetail';

// Page Objects IDs
const ACCOUNT_PRODUCT_DETAIL = productDetail.getId();

class PocketWelcome extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/pockets/pocketWelcome', parentNavigation: 'account/productDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNT_PRODUCT_DETAIL:
                await productDetail.goToPockets();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PocketWelcome();
