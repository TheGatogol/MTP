import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';

const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetail.getId();

class CardCreditCardPayment extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'creditCardPayment/cardCreditCardPayment', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetail.viewMoreOperatives();
                await orangeCardProductDetail.goToPayCard();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}
export default new CardCreditCardPayment();
