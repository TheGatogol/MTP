import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import sidebarPage from '../../pages/sidebar/sideBar';

// Page Objects IDs
const SIDEBAR = sidebarPage.getId();

class DemoFeedback extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'feedback/demoFeedback', parentNavigation: 'sidebar'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SIDEBAR:
                await sidebarPage.access({functionality: 'Demo Feedback'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DemoFeedback();
