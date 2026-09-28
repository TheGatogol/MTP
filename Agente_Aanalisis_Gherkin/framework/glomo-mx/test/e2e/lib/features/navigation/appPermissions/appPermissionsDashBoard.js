import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//pages
import securityMenuPage from '../../pages/securitySettings/securityMenu';
// Page Objects IDs
const SECURITYMENU = securityMenuPage.getId();

class AppPermissionsDashboard extends AbstractGlomoNavigation{

    constructor(){
        super({page: 'appPermissions/appPermissions', parentNavigation: 'securitySettings/securityMenu'});
    }
    async go_impl() {
        switch(currentPage.getId()) {
            case SECURITYMENU:
                await securityMenuPage.accessSecuritySettingsPrivacyPermissions();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new AppPermissionsDashboard();
