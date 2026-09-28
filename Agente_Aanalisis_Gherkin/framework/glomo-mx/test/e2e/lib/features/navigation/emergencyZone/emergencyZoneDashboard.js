import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//pages
import securityMenuPage from '../../pages/securitySettings/securityMenu';
import landingPage from '../../pages/landing/landing';

// Page Objects IDs
const SECURITYMENU = securityMenuPage.getId();
const LANDING = landingPage.getId();

class EmergencyZoneDashboard extends AbstractGlomoNavigation{

    constructor(){
        super({page: 'emergencyZone/emergencyZoneDashboard', parentNavigation: 'securitySettings/securityMenu'});
    }
    async go_impl() {
        switch(currentPage.getId()) {
            case SECURITYMENU:
                await securityMenuPage.accessSecuritySettingsPrivacyEmergency();
                break;
            case LANDING:
                await landingPage.access({functionality: 'emergency zone'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new EmergencyZoneDashboard();
