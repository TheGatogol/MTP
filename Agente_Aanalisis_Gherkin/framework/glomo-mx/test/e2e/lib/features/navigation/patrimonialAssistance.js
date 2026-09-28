
import AbstractGlomoNavigation from './abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import assistanceSectionPage from '../pages/assistanceSection/assistanceSection';

// Page Objects IDs
const ASSISTANCE = assistanceSectionPage.getId();

class PatrimonialAssistance extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'patrimonialAssistance/patrimonialAssistance', parentNavigation: 'assistanceSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ASSISTANCE:
                await assistanceSectionPage.intoContact();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PatrimonialAssistance();
