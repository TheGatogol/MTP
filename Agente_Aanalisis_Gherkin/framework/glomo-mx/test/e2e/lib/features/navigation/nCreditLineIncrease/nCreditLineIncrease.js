import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';
import contractProductPage from '../../pages/contractProductSection/contractProductSection';
// Page Objects IDs
const NOTIFICATION_CENTER = notificationsCenter.getId();
const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class NCreditLineIncrease extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'nCreditLineIncrease/nCreditLineIncrease', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case NOTIFICATION_CENTER:
                await notificationsCenter.detailNotification();
                break;
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProduct('n-limit-increase');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new NCreditLineIncrease();
