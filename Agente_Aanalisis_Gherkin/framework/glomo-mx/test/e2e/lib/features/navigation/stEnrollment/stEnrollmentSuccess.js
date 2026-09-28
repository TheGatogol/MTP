import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError, Commands} from '@csqe/radish';

import loginPage from '../../pages/loginLogout/login';
import cachedLoginPage from '../../pages/loginLogout/cachedLogin';
import digitalToken from '../../pages/digitalToken/digitalToken';
import * as navigation from '../';

const LOGIN = loginPage.getId();
const CACHED_LOGIN = cachedLoginPage.getId();
const DIGITAL_TOKEN = digitalToken.getId();

class StEnrollmentSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'stEnrollment/stEnrollmentSuccess', parentNavigation: 'login'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case LOGIN:
                await loginPage.login();
                if (Commands.flags.isMobile) {
                    await currentPage.changeContext({context: 'WEBVIEW'});
                    await navigation.digitalToken.assert();
                    await this.go_impl();
                }
                break;
            case CACHED_LOGIN:
                await cachedLoginPage.login();
                break;
            case DIGITAL_TOKEN:
                await digitalToken.activeToken();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new StEnrollmentSuccess();
