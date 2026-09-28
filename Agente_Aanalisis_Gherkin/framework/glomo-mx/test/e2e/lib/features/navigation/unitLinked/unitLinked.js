import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import dashboardpage from '../../pages/dashboard/dashboard';

const DASHBOARD = dashboardpage.getId();

class UnitLinked extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'unitLinked/unitLinked', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboardpage.accessUnitLinked();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new UnitLinked();
