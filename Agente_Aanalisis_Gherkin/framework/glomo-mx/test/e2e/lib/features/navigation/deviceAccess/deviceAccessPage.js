import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError, Commands} from '@csqe/radish';

import login from '../../pages/loginLogout/login';

// Page Objects IDs
const LOGIN = login.getId();

class DeviceAccessPage extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'deviceAccess/deviceAccessPage', parentNavigation: 'login'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case LOGIN:
                await login.login();
                await Commands.url({uri: '/#!/device-access-page'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new DeviceAccessPage();

