import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//pages
import dashboard from '../../pages/dashboard/dashboard';
import assistanceManagerPage from '../../pages/assistanceManager/assistanceManagerPage';
// Page Objects IDs
const DASHBOARD = dashboard.getId();
const ASSISTANCE_MANAGER = assistanceManagerPage.getId();

class BenefitsAssistance extends AbstractGlomoNavigation{

    constructor(){
        super({page: 'assistanceManager/assistanceBenefits', parentNavigation: 'dashboard'});
    }
    async go_impl() {
        switch(currentPage.getId()) {
            case DASHBOARD:
                await dashboard.accessManagerAssistance();
                break;
            case ASSISTANCE_MANAGER:
                await assistanceManagerPage.accessMoreInfo();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BenefitsAssistance();
