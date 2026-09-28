import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboardPage from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboardPage.getId();

class InsuranceProductDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/insuranceProductDetail', parentNavigation: 'dashboard'});
    }

    async go_impl({insuranceId} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboardPage.selectByDataId(insuranceId);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InsuranceProductDetail();
