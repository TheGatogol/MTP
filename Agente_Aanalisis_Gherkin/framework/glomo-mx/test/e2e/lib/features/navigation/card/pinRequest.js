import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';
import additionalCardDetail from '../../pages/productDetails/additionalCardDetail';

import digitalButler from '../../pages/digitalButler/digitalButler';
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();
const ADDITIONAL_CARD_DETAIL = additionalCardDetail.getId();

const DIGITAL_BUTLER = digitalButler.getId();
class PinRequest extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'operatives/pinRequest'});
    }

    async go_impl({data, pageName} = {}) {
        switch (currentPage.getId()) {
            case ORANGE_CARD_PRODUCT_DETAIL:
                if(pageName === 'operatives'){
                    await orangeCardProductDetailPage.goPinRequest();
                } else{
                    await orangeCardProductDetailPage.viewMoreOperatives();
                    await this.go_impl();
                }
                break;
            
            case ADDITIONAL_CARD_DETAIL:
                await additionalCardDetail.viewCardNip();
                break;
            case DIGITAL_BUTLER:
                await digitalButler.selectNavigation({data});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new PinRequest();
