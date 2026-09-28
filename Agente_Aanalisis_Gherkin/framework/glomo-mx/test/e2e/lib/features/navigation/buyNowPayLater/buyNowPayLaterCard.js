import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import dashboard from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboard.getId();

class BuyNowPayLaterCard extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'buyNowPayLater/buyNowPayLaterTerm', parentNavigation: 'dashboard'});
    }

    async go_impl({dataId} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.waitUntilProductsLoaded({timeout: config.wait.M});
                await dashboard.selectByDataId(dataId);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new BuyNowPayLaterCard();
