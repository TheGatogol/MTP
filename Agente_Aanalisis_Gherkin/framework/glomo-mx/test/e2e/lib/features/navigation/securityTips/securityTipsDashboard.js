import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//pages
import securityMenuPage from '../../pages/securitySettings/securityMenu';
import securityTipsDetail from '../../pages/securityTips/securityTipsDetail';
import securityProfile from '../../pages/securityProfile/securityProfile';

// Page Objects IDs
const SECURITYMENU = securityMenuPage.getId();
const SECURITY_TIPS_DETAIL = securityTipsDetail.getId();
const SECURITY_PROFILE = securityProfile.getId();

class SecurityTipsDashboard extends AbstractGlomoNavigation{

    constructor(){
        super({page: 'securityTips/securityTipsDashboard', parentNavigation: 'securitySettings/securityMenu'});
    }
    async go_impl() {
        switch(currentPage.getId()) {
            case SECURITYMENU:
                await securityMenuPage.accessSecuritySettingsPrivacyAdvices();
                break;
            case SECURITY_TIPS_DETAIL:
                await securityTipsDetail.acceptInfoTip();
                break;
            case SECURITY_PROFILE:
                await securityProfile.accessSecurityTips();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new SecurityTipsDashboard();
