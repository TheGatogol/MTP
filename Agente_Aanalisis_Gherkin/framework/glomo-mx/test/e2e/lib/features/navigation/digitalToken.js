import AbstractGlomoNavigation from './abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import loginPage from '../pages/loginLogout/login';
import cachedLoginPage from '../pages/loginLogout/cachedLogin';
import landingPage from '../pages/landing/landing';
import * as navigation from '../../features/navigation';

const LOGIN = loginPage.getId();
const CACHED_LOGIN = cachedLoginPage.getId();
const LANDING = landingPage.getId();

class DigitalToken extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'digitalToken/digitalToken', parentNavigation: 'login'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case LOGIN:
                await loginPage.login();
                break;
            case CACHED_LOGIN:
                await cachedLoginPage.login();
                break;
            case LANDING:
                await navigation.cachedLogin.go();
                await this.go_impl();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DigitalToken();
