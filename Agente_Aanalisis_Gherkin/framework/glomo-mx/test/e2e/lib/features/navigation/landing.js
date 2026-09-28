import {Commands, NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from './abstract-glomo-navigation';

// Pages
import startPage from '../pages/start';
import welcomePage from '../pages/welcome/welcome';
import loginPage from '../pages/loginLogout/login';
import dashboardPage from '../pages/dashboard/dashboard';
import sidebarPage from '../pages/sidebar/sideBar';

// Navigations
import dashboard from './dashboard';
import sidebar from './sidebar';

// Page Objects IDs
const START = startPage.getId();
const WELCOME = welcomePage.getId();
const LOGIN = loginPage.getId();
const DASHBOARD = dashboardPage.getId();
const SIDEBAR = sidebarPage.getId();

class Landing extends AbstractGlomoNavigation {

    constructor() {
        super({page: 'landing/landing', parentNavigation: 'splash'});
    }

    async go_impl({option, resetApp = false} = {}) {
        if (resetApp) {
            await Commands.Mobile.restartApp();
        } else {
            switch (currentPage.getId()) {
                case START:
                case WELCOME:
                case LOGIN:
                    await dashboard.go();
                    await this.go({option: option});
                    break;
                case DASHBOARD:
                    if (option === 'restartingApp') {
                        if (Commands.flags.isIOS) {
                            await currentPage.dialogPermissions.allowPermission();
                        }
                        await Commands.Mobile.restartApp();
                        await Commands.pause({time: config.wait.M});
                    } else {
                        await sidebar.go();
                        await this.go({option: option});
                    }
                    break;
                case SIDEBAR:
                    await sidebarPage.doLogOut();
                    break;
                default:
                    throw new NotPathNavigationError();
            }
        }
    }
}

export default new Landing();
