import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import sidebarPage from '../../pages/sidebar/sideBar';

// Page Objects IDs
const SIDEBAR = sidebarPage.getId();

class EmergencyReports extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'emergencyReports/emergencyReports', parentNavigation: 'sidebar'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SIDEBAR:
                await sidebarPage.access({functionality: 'emergency reports'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new EmergencyReports();
