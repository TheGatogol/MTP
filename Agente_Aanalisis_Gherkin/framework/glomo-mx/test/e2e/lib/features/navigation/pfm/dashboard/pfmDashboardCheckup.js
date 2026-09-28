import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import PFM_DASHBOARD_PAGE from '../../../pages/pfm/dashboard/dashboardDetail';

// Page Objects IDs
const PFM_DASHBOARD_PAGE_ID = PFM_DASHBOARD_PAGE.getId();

class PfmDashboardCheckUp extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'pfm/dashboard/pfmDashboardCheckUp', parentNavigation: 'pfm/dashboard/dashboardDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PFM_DASHBOARD_PAGE_ID:
                await PFM_DASHBOARD_PAGE.accessToCheckUp();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PfmDashboardCheckUp();
