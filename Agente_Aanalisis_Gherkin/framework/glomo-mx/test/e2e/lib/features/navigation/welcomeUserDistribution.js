import {NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from './abstract-glomo-navigation';
import splashPage from '../pages/splash/splash';

const SPLASH = splashPage.getId();

class WelcomeUserDistribution extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'welcome/welcomeUserDistribution', parentNavigation: 'splash'});
    }

    go_impl() {
        switch (currentPage.getId()) {
            case SPLASH:
                break; // Splash redirects immediately to Welcome, non action is needed.
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new WelcomeUserDistribution();
