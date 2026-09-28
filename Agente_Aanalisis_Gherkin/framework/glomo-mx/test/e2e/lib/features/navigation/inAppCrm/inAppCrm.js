import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import cachedLoginPage from '../../pages/loginLogout/cachedLogin';
import landingPage from '../../pages/landing/landing';

import * as navigation from '../';

const CACHED_LOGIN = cachedLoginPage.getId();
const LANDING = landingPage.getId();

class InAppCrm extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'inAppCrm/inAppCrm', parentNavigation: 'cachedLogin'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CACHED_LOGIN:
                await cachedLoginPage.login();
                await this.page.waitUntilSpinnerVeil({
                    timeoutToAppear: config.wait.XS,
                    timeoutToDisappear: config.wait.S
                });
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

export default new InAppCrm();
