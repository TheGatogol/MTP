import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//pages
import assistanceManagerPage from '../../pages/assistanceManager/assistanceManagerPage';
// Page Objects IDs
const ASSISTANCE_MANAGER = assistanceManagerPage.getId();

class AssistanceEmail extends AbstractGlomoNavigation{
    constructor(){
        super({page: 'assistanceManager/assistanceEmailPage', parentNavigation: 'assistanceManager/assistanceManager'});
    }
    async go_impl() {
        switch(currentPage.getId()) {
            case ASSISTANCE_MANAGER:
                await assistanceManagerPage.accessEmailAdvisor();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new AssistanceEmail();
