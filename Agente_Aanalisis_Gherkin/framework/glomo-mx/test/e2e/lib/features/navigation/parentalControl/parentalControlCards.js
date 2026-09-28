import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';

// Page Objects IDs
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetail.getId();

class ParentalControlCardLimits extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'parentalControl/parentalControlCardLimits', parentNavigation: 'account/productDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetail.goToParentalControl();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ParentalControlCardLimits();
