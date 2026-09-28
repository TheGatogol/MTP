import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboardPage from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboardPage.getId();

class OcLoanOfferNbo extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocLoanOffer/ocLoanOffer', parentNavigation: 'dashboard'});
    }

    async go_impl(offerId) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboardPage.enterOffer(offerId);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcLoanOfferNbo();
