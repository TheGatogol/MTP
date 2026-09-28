import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import sidebarPage from '../../pages/sidebar/sideBar';
import landingPage from '../../pages/landing/landing';
import cachedLoginPage from '../../pages/loginLogout/cachedLogin';
import cachedLogin from '../cachedLogin';

const SIDEBAR = sidebarPage.getId();
const LANDING = landingPage.getId();
const CACHED_LOGIN = cachedLoginPage.getId();

class CodiBeginRegister extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'codiOperations/codiBeginRegister', parentNavigation: 'sidebar'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SIDEBAR:
                await sidebarPage.access({functionality: 'QR CoDi Operative'});
                break;
            case LANDING:
                await cachedLogin.go({functionality: 'QR CoDi Operative'});
                await this.go_impl();
                break;
            case CACHED_LOGIN:
                await cachedLoginPage.login();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CodiBeginRegister();
