import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import assistanceSectionPage from '../../pages/assistanceSection/assistanceSection';

// Page Objects IDs
const ASSISTANCE = assistanceSectionPage.getId();

class DisabilityVideocall extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'disabilityVideocall/disabilityVideocallHearingTactical', parentNavigation: 'assistanceSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ASSISTANCE:
                await assistanceSectionPage.accessScreen('disability videocall');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DisabilityVideocall();
