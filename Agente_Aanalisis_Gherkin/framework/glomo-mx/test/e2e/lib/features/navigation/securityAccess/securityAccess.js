import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//pages
import securityMenuPage from '../../pages/securitySettings/securityMenu';

// Page Objects IDs
const SECURITY_MENU = securityMenuPage.getId();

class AccessAndSignaturesDashboard extends AbstractGlomoNavigation{

    constructor(){
        super({page: 'securityAccess/securityAccess', parentNavigation: 'securitySettings/securityMenu'});
    }
    async go_impl(){
        switch(currentPage.getId()) {
            case SECURITY_MENU:
                await securityMenuPage.accessSecuritySettingsPrivacyAccess();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new AccessAndSignaturesDashboard();
