import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import loginPage from '../../pages/loginLogout/login';

// Page Objects IDs
const LOGIN = loginPage.getId();

class DigitalActivationPersonalAdviser extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'digitalActivation/digitalActivation', parentNavigation: 'login'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case LOGIN:
                await loginPage.accessRegister();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new DigitalActivationPersonalAdviser();

