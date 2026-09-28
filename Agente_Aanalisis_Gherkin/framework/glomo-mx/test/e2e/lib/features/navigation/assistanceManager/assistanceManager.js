import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//pages
import assistanceBenefits from '../../pages/assistanceManager/assistanceBenefits';
import assistanceSection from '../../pages/assistanceSection/assistanceSection';

// Page Objects IDs
const BENEFITS = assistanceBenefits.getId();
const ASSISTANCE_SECTION = assistanceSection.getId();

class AssistanceManager extends AbstractGlomoNavigation{

    constructor(){
        super({page: 'assistanceManager/assistanceManagerPage'});
    }
    async go_impl() {
        switch(currentPage.getId()) {
            case BENEFITS:
                await assistanceBenefits.benefitsModalAccept();
                break;
            case ASSISTANCE_SECTION:
                await assistanceSection.accessAssistanceEmail();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new AssistanceManager();
