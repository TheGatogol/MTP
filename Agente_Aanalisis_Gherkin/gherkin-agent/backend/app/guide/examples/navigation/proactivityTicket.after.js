import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import accountProductDetail from '../../../pages/productDetails/accountProductDetail';
import pfmDashboard from '../../../pages/pfm/dashboard/dashboardDetail';

// Page Objects IDs
const ACCOUNT_PRODUCT_DETAIL = accountProductDetail.getId();
const PFM_DASHBOARD = pfmDashboard.getId();

class ProactivityTicket extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'proactivity/proactivityTicket', parentNavigation: 'pfm/dashboard/dashboardDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PFM_DASHBOARD:
                await pfmDashboard.accessProactivityMessageDetailFromDashboardDetail();
                await this.page.waitUntilSpinnerVeil({
                    timeoutToAppear: config.wait.XS,
                    timeoutToDisappear: config.wait.L
                });
                break;
            case ACCOUNT_PRODUCT_DETAIL:
                await accountProductDetail.accessProactivityMessageDetailAccountDetail();
                await this.page.waitUntilSpinnerVeil({
                    timeoutToAppear: config.wait.XS,
                    timeoutToDisappear: config.wait.L
                });
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ProactivityTicket();
