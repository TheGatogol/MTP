import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';

// Page Objects IDs
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();

class BuyNowPayLaterDisposition extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'buyNowPayLater/buyNowPayLaterTerm', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetailPage.accessFinancingLine();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new BuyNowPayLaterDisposition();
