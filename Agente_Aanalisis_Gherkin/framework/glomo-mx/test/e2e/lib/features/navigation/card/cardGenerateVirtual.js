import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import * as navigation from '../../navigation';

import startPage from '../../pages/start';
import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';
import dashboardPage from '../../pages/dashboard/dashboard';

const START = startPage.getId();
const DASHBOARD = dashboardPage.getId();
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();

class CardGenerateVirtual extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'card/cardGenerateVirtual', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl({card} = {}) {
        switch (currentPage.getId()) {
            case START:
            case DASHBOARD:
                await navigation.card.orangeCardProductDetail.go({card});
                await this.go_impl();
                break;
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetailPage.accessDigitalCard();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CardGenerateVirtual();
