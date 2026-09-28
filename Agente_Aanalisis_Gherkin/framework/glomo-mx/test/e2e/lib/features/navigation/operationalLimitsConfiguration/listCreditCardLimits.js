import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

//Page
import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';

//Page Object IDs
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();

class ListCreditCardLimits extends AbstractGlomoNavigation {
    constructor() {
        super({
            page: 'operationalLimitsConfiguration/listCreditCardLimits',
            parentNavigation: 'card/orangeCardProductDetail'
        });
    }

    async go_impl({pageName} = {}) {
        switch (currentPage.getId()) {
            case ORANGE_CARD_PRODUCT_DETAIL:
                if(pageName === 'operatives'){
                    await currentPage.viewMoreOperatives();
                    await orangeCardProductDetailPage.goToCardLimits();
                }
                else {
                    await orangeCardProductDetailPage.modifyOperationalLimits();
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ListCreditCardLimits();
