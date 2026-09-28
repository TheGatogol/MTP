import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import sustainabilityPage from '../../pages/sustainability/sustainability';

// Page Objects IDs
const SUSTAINABILITY = sustainabilityPage.getId();

class GlossaryDashboard extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'sustainability/glossarySection', parentNavigation: 'sustainability/sustainability'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SUSTAINABILITY:
                await sustainabilityPage.accessToGlossary();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new GlossaryDashboard();
