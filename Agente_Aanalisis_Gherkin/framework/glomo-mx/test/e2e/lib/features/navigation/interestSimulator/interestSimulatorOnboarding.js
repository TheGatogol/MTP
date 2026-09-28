import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import * as navigation from '../../navigation';
// Pages
import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';
import dashboard from '../../pages/dashboard/dashboard';

// Page Objects IDs
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();
const DASHBOARD = dashboard.getId();

class InterestSimulatorOnboarding extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/orangeCardProductDetail', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await currentPage.accessCreditCard();
                await navigation.card.orangeCardProductDetail.assert();
                await this.go_impl();
                break;
            case ORANGE_CARD_PRODUCT_DETAIL:
                await currentPage.accessOnboarding();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InterestSimulatorOnboarding();
