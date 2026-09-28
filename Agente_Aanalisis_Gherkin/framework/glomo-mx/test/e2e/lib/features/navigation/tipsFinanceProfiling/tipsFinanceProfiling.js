import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import dashboardPage from '../../pages/dashboard/dashboard';
const DASHBOARD = dashboardPage.getId();

class TipsFinanceProfiling extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'tipsFinanceProfiling/tipsFinanceProfiling', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case DASHBOARD:
                await dashboardPage.accessEdufin();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TipsFinanceProfiling();
