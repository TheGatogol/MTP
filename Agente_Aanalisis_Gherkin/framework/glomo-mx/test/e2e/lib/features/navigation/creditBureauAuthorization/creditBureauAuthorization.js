import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboard from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboard.getId();

class CreditBureauAuthorization extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'creditBureauAuthorization/creditBureauAuthorization', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await currentPage.openNotificationCard();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CreditBureauAuthorization();
