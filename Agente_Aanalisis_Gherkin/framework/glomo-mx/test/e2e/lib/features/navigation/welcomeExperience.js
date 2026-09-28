import {NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from './abstract-glomo-navigation';
import loginPage from '../pages/loginLogout/login';

const LOGIN = loginPage.getId();

class WelcomeExperience extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'welcome/welcomeExperience', parentNavigation: 'login'});
    }

    async go_impl({username, password, deviceId} = {}) {
        switch (currentPage.getId()) {
            case LOGIN:
                await loginPage.login(username, password, deviceId);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new WelcomeExperience();
