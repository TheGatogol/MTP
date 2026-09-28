import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import * as navigation from '../../navigation';

//Pages
import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';
import changeLimitsPage from '../../pages/additionalCards/changeLimits';
import startPage from '../../pages/start';
import dashboardPage from '../../pages/dashboard/dashboard';

// Page Objects IDs
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();
const CHANGE_LIMITS = changeLimitsPage.getId();
const START = startPage.getId();
const DASHBOARD = dashboardPage.getId();

class AdditionalCardDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/additionalCardDetail', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl({retries, from, card} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboardPage.selectCardByLastDigits(card);
                break;
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetailPage.displayAdditionalCcModule();
                await orangeCardProductDetailPage.accessAdditionalCard();
                break;
            case CHANGE_LIMITS:
                if (retries) {
                    await changeLimitsPage.retryModal(retries);
                } else {
                    await changeLimitsPage.confirmsChangeLimit();
                }
                break;
            case START:
                await navigation.dashboard.go();
                if(from){
                    await currentPage.selectAdditionalCardViewAdditional(from);
                }else{
                    await currentPage.selectAdditionalCard();
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new AdditionalCardDetail();

