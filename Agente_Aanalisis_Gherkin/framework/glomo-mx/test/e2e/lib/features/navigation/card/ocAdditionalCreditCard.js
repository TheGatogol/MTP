import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';

// Page Objects IDs
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();

class OcAdditionalCreditCard extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocAdditionalCreditCard/ocAdditionalCreditCard', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetailPage.requestAdditionalCard();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcAdditionalCreditCard();
