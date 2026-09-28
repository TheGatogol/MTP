import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import pfmDashboardDetail from '../../../pages/pfm/dashboard/dashboardDetail';

// Page Objects IDs
const PFM_DASHBOARD = pfmDashboardDetail.getId();

class PfmSettings extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'pfm/settings/pfmSettings', parentNavigation: 'pfm/dashboard/dashboardDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PFM_DASHBOARD:
                await pfmDashboardDetail.accessSettings();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PfmSettings();
