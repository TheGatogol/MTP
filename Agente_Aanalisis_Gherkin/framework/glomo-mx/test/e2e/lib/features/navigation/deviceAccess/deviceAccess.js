import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import login from '../../pages/loginLogout/login';

// Page Objects IDs
const LOGIN = login.getId();

class DeviceAccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'deviceAccess/deviceAccess', parentNavigation: 'login'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case LOGIN:
                await login.login();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new DeviceAccess();

