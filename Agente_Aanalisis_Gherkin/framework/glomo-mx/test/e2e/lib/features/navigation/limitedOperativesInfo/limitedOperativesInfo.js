import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboard from '../../pages/dashboard/dashboard';
import limitedOperativesInfo from '../../pages/limitedOperativesInfo/limitedOperativesInfo';
import orangeCard from '../../pages/productDetails/orangeCardProductDetail';

// Page Objects IDs
const DASHBOARD = dashboard.getId();
const ORANGE_CARD = orangeCard.getId();

class LimitedOperativesInfo extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'limitedOperativesInfo/limitedOperativesInfo', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await limitedOperativesInfo.showStandinDescription();
                break;
            case ORANGE_CARD:
                await orangeCard.standInMessageInfo();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new LimitedOperativesInfo();
