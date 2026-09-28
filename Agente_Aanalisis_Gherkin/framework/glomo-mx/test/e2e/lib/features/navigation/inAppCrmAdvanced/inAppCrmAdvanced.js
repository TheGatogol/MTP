import {NotPathNavigationError, Commands} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import dashboard from '../../pages/dashboard/dashboard';
import cachedLoginPage from '../../pages/loginLogout/cachedLogin';
import landingPage from '../../pages/landing/landing';
import digitalToken from '../../pages/digitalToken/digitalToken';
import stEnrollment from '../../pages/stEnrollment/stEnrollmentSuccess';
import * as navigation from '../';

// Page Objects IDs
const DASHBOARD = dashboard.getId();
const CACHED_LOGIN = cachedLoginPage.getId();
const LANDING = landingPage.getId();
const DIGITAL_TOKEN = digitalToken.getId();
const ST_ENROLLMENT = stEnrollment.getId();

class InAppCrmAdvancedPage extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'inAppCrmAdvancedPage/inAppCrmAdvancedPage', parentNavigation: 'login'});
    }

    async go_impl({activeLaterToken = true} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.openHelpSearch();
                break;
            case CACHED_LOGIN:
                await cachedLoginPage.login();
                if (Commands.flags.isMobile) {
                    await currentPage.changeContext({context: 'WEBVIEW'});
                    await navigation.digitalToken.assert();
                    await this.go_impl();
                }
                break;
            case LANDING:
                await navigation.cachedLogin.go();
                await this.go_impl();
                break;
            case DIGITAL_TOKEN:
                if (activeLaterToken) {
                    await digitalToken.activeLater();
                } else {
                    await digitalToken.activeToken();
                    await navigation.stEnrollment.stEnrollmentSuccess.assert();
                    await this.go_impl();
                }
                break;
            case ST_ENROLLMENT:
                await stEnrollment.acceptToken();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InAppCrmAdvancedPage();
