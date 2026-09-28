import AbstractGlomoNavigation from './abstract-glomo-navigation';
import {Commands, NotPathNavigationError} from '@csqe/radish';

// Pages
import loginPage from '../pages/loginLogout/login';
import landingPage from '../pages/landing/landing';
import landingPublicPage from '../pages/landing/landingPublic';
import dashboardPage from '../pages/dashboard/dashboard';

import dashboardNav from './dashboard';

// Page Objects IDs
const LOGIN = loginPage.getId();
const LANDING = landingPage.getId();
const LANDING_PUBLIC = landingPublicPage.getId();
const DASHBOARD = dashboardPage.getId();

class Sidebar extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'sidebar/sideBar', parentNavigation: Commands.flags.isMobile ? 'landingPublic' : 'login'});
    }

    async go_impl({forceLogin = false, notAccounts} = {}) {
        switch (currentPage.getId()) {
            case LOGIN:
                if (forceLogin) {
                    await dashboardNav.go();
                    await this.go_impl();
                } else {
                    await loginPage.accessToSidebar();
                }
                break;
            case DASHBOARD:
                if (notAccounts === true){
                    await dashboardPage.accessToSidebar();
                } else {
                    await Commands.pause({time: config.wait.S}); // Wait for accounts contracts
                    await dashboardPage.waitUntilProductsLoaded();
                    await dashboardPage.accessToSidebar();
                }
                break;
            case LANDING:
                await landingPage.access({functionality: 'Sidebar'});
                break;
            case LANDING_PUBLIC:
                await landingPublicPage.access({functionality: 'Sidebar'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new Sidebar();
