import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import sideBar from '../../pages/sidebar/sideBar';

const SIDEBAR = sideBar.getId();

class SettingsNav extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'operationalLimitsSettings/settingsPage', parentNavigation: 'sidebar'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SIDEBAR:
                await sideBar.access({functionality: 'settings'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new SettingsNav();
