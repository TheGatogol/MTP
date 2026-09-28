import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from './abstract-glomo-navigation';

// Pages
import welcomeUserDistribution from '../pages/welcome/welcomeUserDistribution';
import login from '../pages/loginLogout/login';
import landing from '../pages/landing/landing';

// Page Objects IDs
const WELCOME_USER_DISTRIBUTION = welcomeUserDistribution.getId();
const LOGIN = login.getId();
const LANDING = landing.getId();

class LandingPublic extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'landing/landingPublic', parentNavigation: 'welcomeUserDistribution'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case WELCOME_USER_DISTRIBUTION:
                await welcomeUserDistribution.accessLanding();
                break;
            case LOGIN:
                await login.goBack();
                break;
            case LANDING:
                await landing.access({functionality: 'public landing'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new LandingPublic();
