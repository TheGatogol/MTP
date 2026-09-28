import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import * as navigation from '../../navigation';

// Pages
import orangeProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';
import dashboardPage from '../../pages/dashboard/dashboard';

// Page Objects IDs
const ORANGE_CARD_PRODUCT_DETAIL = orangeProductDetailPage.getId();
const DASHBOARD = dashboardPage.getId();

class Movements extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/movements', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl({card, fromMainCard} = { fromMainCard: false}) {
        switch (currentPage.getId()) { // NOSONAR
            case DASHBOARD:
                if (fromMainCard) {
                    await dashboardPage.accessAllMovementsMainCardCreditCard();
                } else {
                    await navigation.card.orangeCardProductDetail.go({card});
                }
                break;
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeProductDetailPage.accessToAllMovements();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new Movements();
