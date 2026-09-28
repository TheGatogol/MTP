import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//pages
import securityDashboardPage from '../../pages/securityTips/securityTipsDashboard';

// Page Objects IDs
const SECURITYDASHBOARD = securityDashboardPage.getId();

class SecurityGlossary extends AbstractGlomoNavigation{

    constructor(){
        super({page: 'securityTips/securityGlossary', parentNavigation: 'securityTips/securityTipsDashboard'});
    }
    async go_impl() {
        switch(currentPage.getId()) {
            case SECURITYDASHBOARD:
                await securityDashboardPage.accessToSecurityGlossary();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new SecurityGlossary();
