import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Page Objects IDs
import welcomePage from '../../pages/welcome/welcome';

const WELCOME = welcomePage.getId();

class WelcomeSlides extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'welcome/welcomeSlides', parentNavigation: 'welcome/welcome'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case WELCOME:
                await welcomePage.accessToSlides();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new WelcomeSlides();
