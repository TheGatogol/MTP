import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import cachedLoginPage from '../../pages/loginLogout/cachedLogin';
import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';
import landingPage from '../../pages/landing/landing';
import cachedLogin from '../cachedLogin';

const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetail.getId();
const LANDING = landingPage.getId();
const CACHED_LOGIN = cachedLoginPage.getId();

class CardDynamicCvv extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/cardDynamicCvv', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetail.selectDigitalCard();
                break;
            case LANDING:
                await cachedLogin.go({functionality: 'CVV Detail'});
                await this.go_impl();
                break;
            case CACHED_LOGIN:
                await cachedLoginPage.login();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CardDynamicCvv();
