import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import loginPage from '../../pages/loginLogout/login';

// Page Objects IDs
const LOGIN = loginPage.getId();

class AccessKeyRecovery extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'accessKeyRecovery/accessKeyRecovery', parentNavigation: 'login'});
    }

    async go_impl({accessToForgotPassword = false}) {
        switch (currentPage.getId()) {
            case LOGIN:
                await loginPage.login(accessToForgotPassword);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new AccessKeyRecovery();
