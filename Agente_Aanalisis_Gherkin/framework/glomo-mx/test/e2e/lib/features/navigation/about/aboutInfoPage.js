import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import aboutPage from '../../pages/about/aboutPage';

// Page Objects IDs
const ABOUT = aboutPage.getId();

class AboutInfoPage extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'about/aboutInfo', parentNavigation: 'about/aboutPage'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ABOUT:
                await aboutPage.accessToAboutInfo();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new AboutInfoPage();
