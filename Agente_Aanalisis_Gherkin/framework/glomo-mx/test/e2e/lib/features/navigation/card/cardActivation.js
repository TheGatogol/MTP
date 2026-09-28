import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';

const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();

class CardActivation extends AbstractGlomoNavigation {

    constructor() {
        super({page: 'operatives/cardActivation', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetailPage.cardActivationOperatives();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CardActivation();
