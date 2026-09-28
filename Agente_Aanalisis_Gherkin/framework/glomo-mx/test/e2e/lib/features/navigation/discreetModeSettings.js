import AbstractGlomoNavigation from './abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import securityMenuPage from '../pages/securitySettings/securityMenu';

// Page Objects IDs
const SECURITY_MENU = securityMenuPage.getId();

class DiscreetModeSettings extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'discreetModeSettings/discreetModeSettings', parentNavigation: 'securitySettings/securityMenu'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case SECURITY_MENU:
                await securityMenuPage.accessSecuritySettingsDiscreetMode();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}
export default new DiscreetModeSettings();
