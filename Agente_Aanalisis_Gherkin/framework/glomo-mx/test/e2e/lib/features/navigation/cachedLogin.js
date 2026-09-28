import AbstractGlomoNavigation from './abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import startPage from '../pages/start';
import welcomePage from '../pages/welcome/welcome';
import loginPage from '../pages/loginLogout/login';
import dashboardPage from '../pages/dashboard/dashboard';
import sidebarPage from '../pages/sidebar/sideBar';
import landingPage from '../pages/landing/landing';
import dashboard from './dashboard';
import sidebar from './sidebar'; // TODO Move to top

// Page Objects IDs
const START = startPage.getId();
const WELCOME = welcomePage.getId();
const LOGIN = loginPage.getId();
const DASHBOARD = dashboardPage.getId();
const SIDEBAR = sidebarPage.getId();
const LANDING = landingPage.getId();

class CachedLogin extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'loginLogout/cachedLogin'});
    }

    async go_impl({origin = dashboardPage, functionality = 'Login'} = {}) {
        switch (currentPage.getId()) {
            case START:
            case WELCOME:
            case LOGIN:
                await dashboard.go();
                await this.go();
                break;
            case SIDEBAR:
                await sidebarPage.doLogOut({origin});
                break;
            case DASHBOARD:
                await sidebar.go();
                await this.go_impl();
                break;
            case LANDING:
                await landingPage.access({functionality});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CachedLogin();
