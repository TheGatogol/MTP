import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';

const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetail.getId();

class OcDebitCardInmediateDelivery extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocDebitCardInmediateDelivery/ocDebitCardInmediateDelivery', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetail.selectLinkcardRequestBanner();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcDebitCardInmediateDelivery();
