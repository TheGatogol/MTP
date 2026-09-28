import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import discreetModeSettings from '../../pages/discreetModeSettings/discreetModeSettings';
import securityTipsDashboard from '../../pages/securityTips/securityTipsDashboard';
import sidebarPage from '../../pages/sidebar/sideBar';

// Page Objects IDs
const DISCREET_MODE_SETTINGS = discreetModeSettings.getId();
const SECURITY_TIPS_DASHBOARD = securityTipsDashboard.getId();
const SIDEBAR = sidebarPage.getId();

class SecurityMenu extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'securitySettings/securityMenu', parentNavigation: 'sidebar'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DISCREET_MODE_SETTINGS:
                await discreetModeSettings.goBack();
                break;
            case SIDEBAR:
                await sidebarPage.access({functionality: 'Security Settings Access'});
                break;
            case SECURITY_TIPS_DASHBOARD:
                await securityTipsDashboard.goBack();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new SecurityMenu();
