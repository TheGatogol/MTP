import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError, Commands} from '@csqe/radish';

// Pages
import loginPage from '../../pages/loginLogout/login';
import cachedLoginPage from '../../pages/loginLogout/cachedLogin';
import digitalTokenPage from '../../pages/digitalToken/digitalToken';
import accessAndSignaturesDashboard from '../../pages/securityAccess/securityAccess';
import landingPage from '../../pages/landing/landing';
import securityProfile from '../../pages/securityProfile/securityProfile';
import * as navigation from '../';

// Page Objects IDs
const LOGIN = loginPage.getId();
const CACHED_LOGIN = cachedLoginPage.getId();
const DIGITAL_TOKEN = digitalTokenPage.getId();
const ACCESS_AND_SIGNATURES_DASHBOARD = accessAndSignaturesDashboard.getId();
const LANDING = landingPage.getId();
const SECURITY_PROFILE = securityProfile.getId();
class Fido extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'fido/fido', parentNavigation: 'login'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case LOGIN:
                await loginPage.login();
                break;
            case CACHED_LOGIN:
                await cachedLoginPage.login();
                if (Commands.flags.isMobile) {
                    await currentPage.changeContext({context: 'WEBVIEW'});
                    await navigation.digitalToken.assert();
                    await this.go_impl();
                }
                break;
            case DIGITAL_TOKEN:
                await digitalTokenPage.activeLater();
                break;
            case ACCESS_AND_SIGNATURES_DASHBOARD:
                await accessAndSignaturesDashboard.goConfiguration();
                break;
            case LANDING:
                await navigation.cachedLogin.go();
                await this.go_impl();
                break;
            case SECURITY_PROFILE:
                await securityProfile.accessSoftwareToken();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}
export default new Fido();
