import {NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import dashboard from '../../pages/dashboard/dashboard';
import sidebar from '../../pages/sidebar/sideBar';
import mapOfCommerce from '../../pages/storesMap/storesMap';

const DASHBOARD = dashboard.getId();
const SIDEBAR = sidebar.getId();
const MAP_OF_COMMERCE = mapOfCommerce.getId();

class RewardsLanding extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'reward/rewardsLanding', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.accessRewardsLanding();
                break;
            case SIDEBAR:
                await sidebar.access({functionality: 'rewards landing'});
                break;
            case MAP_OF_COMMERCE:
                await mapOfCommerce.goBack();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new RewardsLanding();
