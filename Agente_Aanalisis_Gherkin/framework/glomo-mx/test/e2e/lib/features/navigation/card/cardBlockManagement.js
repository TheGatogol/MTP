import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';
import additionalCardOperativesPage from '../../pages/productDetails/additionalCardDetail';

const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();
const ADDITIONAL_CARD_OPERATIVES = additionalCardOperativesPage.getId();

class CardBlockManagement extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'cardBlockManagement/cardBlockManagement', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl({cardStatus} = {}) {
        switch (currentPage.getId()) {
            case ORANGE_CARD_PRODUCT_DETAIL:
                if (cardStatus === 'blocked renewal'){
                    await orangeCardProductDetailPage.accessToCardBlockManagement();
                }
                else{
                    await orangeCardProductDetailPage.accessBlockAndReplacement();
                }
                break;
            case ADDITIONAL_CARD_OPERATIVES:
                await additionalCardOperativesPage.blockAndReplacementOperative();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default  new CardBlockManagement();
