import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';

// Page Objects IDs
const ENTRY_POINT = orangeCardProductDetailPage.getId();
class TrackingDebitCard extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'trackingDebitCard/trackingDebitCard', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ENTRY_POINT:
                await orangeCardProductDetailPage.accessButtonLink();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TrackingDebitCard();
