import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import aboutPage from '../../pages/about/aboutPage';

// Page Objects IDs
const ABOUT = aboutPage.getId();

class ApplicationFeedback extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'feedback/applicationFeedback', parentNavigation: 'about/aboutPage'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ABOUT:
                await aboutPage.accessToFeedback();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ApplicationFeedback();
