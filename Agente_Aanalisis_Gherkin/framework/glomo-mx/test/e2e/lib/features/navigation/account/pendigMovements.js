import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import accountProductDetailPage from '../../pages/productDetails/accountProductDetail';

const ACCOUNTS_PRODUCT_DETAIL = accountProductDetailPage.getId();

class PendigMovements extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/transfersPendingMovements', parentNavigation: 'account/productDetail'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNTS_PRODUCT_DETAIL:
                await accountProductDetailPage.viewTransfersPendingMovements();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new PendigMovements();
