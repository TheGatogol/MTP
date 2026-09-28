import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';
import additionalCardDetail from '../../pages/productDetails/additionalCardDetail';

const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();
const ADDITIONAL_CARD_DETAIL = additionalCardDetail.getId();

class PinRequestQr extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'operatives/cleanCardOperations'});
    }

    async go_impl({pageName}) {
        switch (currentPage.getId()) {
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetailPage.viewMoreOperatives();
                if(pageName === 'operatives'){
                    await orangeCardProductDetailPage.goPinRequest();
                } 
                break;
            case ADDITIONAL_CARD_DETAIL:
                if(pageName === 'operatives'){
                    await additionalCardDetail.showMoreActions();
                } 
                await additionalCardDetail.viewCardNip();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new PinRequestQr();
