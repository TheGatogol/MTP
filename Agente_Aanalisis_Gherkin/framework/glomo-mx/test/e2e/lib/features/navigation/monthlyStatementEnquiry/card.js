import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import operatonials from '../../pages/operationals/operationals';
import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';
import digitalButler from '../../pages/digitalButler/digitalButler';

const OPERATIONALS = operatonials.getId();
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetail.getId();
const DIGITAL_BUTLER = digitalButler.getId();

class Card extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'monthlyStatementEnquiry/monthlyStatementEnquiryCard', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl(options = {}) {
        switch (currentPage.getId()) {
            case DIGITAL_BUTLER:
                await digitalButler.selectNavigation(options);
                break;
            case OPERATIONALS:
                await operatonials.accessToOperative('accountStatus', 'cards');
                break;
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetail.accessStatementCard();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new Card();
