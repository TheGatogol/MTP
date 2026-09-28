import {Commands, NotPathNavigationError} from '@csqe/radish';

import * as navigation from '../navigation';
import AbstractGlomoNavigation from './abstract-glomo-navigation';
import welcomeUserDistributionPage from '../pages/welcome/welcomeUserDistribution';
import dashboardPage from '../pages/dashboard/dashboard';
import welcomePage from '../pages/welcome/welcome';
import welcomeSlidesPage from '../pages/welcome/welcomeSlides';
import landingPublicPage from '../pages/landing/landingPublic';
import startPage from '../pages/start';
import aboutPage from '../pages/about/aboutPage';

const DASHBOARD = dashboardPage.getId();
const WELCOME = welcomePage.getId();
const WELCOME_USER_DISTRIBUTION = welcomeUserDistributionPage.getId();
const WELCOME_SLIDES = welcomeSlidesPage.getId();
const LANDING_PUBLIC = landingPublicPage.getId();
const ABOUT = aboutPage.getId();

class Login extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'loginLogout/login', parentNavigation: Commands.flags.isMobile ? 'welcomeUserDistribution' : 'welcome/welcome'});
    }

    async go_impl({option = undefined} = {}) {
        if (config.deeplinkLogin && Commands.flags.isWeb && currentPage.getId() === startPage.getId()) { // Deeplink to login when running in Web
            await Commands.url({uri: '/#!/login'});
            return;
        }

        switch (currentPage.getId()) {
            case WELCOME_USER_DISTRIBUTION:
                await navigation.landingPublic.go();
                await this.go_impl();
                break;
            case WELCOME:
                await welcomePage.accessLogin();
                break;
            case WELCOME_SLIDES:
                await welcomeSlidesPage.accessLogin();
                break;
            case DASHBOARD:
                if (!option) {
                    await navigation.cachedLogin.go();
                    await this.go_impl();
                } else {
                    await dashboardPage.closeFormFeedback(option);
                }
                break;
            case LANDING_PUBLIC:
                await landingPublicPage.access({functionality: 'Login'});
                break;
            case ABOUT:
                await aboutPage.goBack();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new Login();
