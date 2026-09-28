import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import securityMenu from '../../pages/securitySettings/securityMenu';

// Page Objects IDs
const SECURITY_MENU = securityMenu.getId();

class SecurityReactivation extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'facialRecognition/securityReactivation', parentNavigation: 'securitySettings/securityMenu'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case SECURITY_MENU:
                await securityMenu.accessSecuritySettingsPrivacyReactivation();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new SecurityReactivation();

