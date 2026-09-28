import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError, Commands } from '@csqe/radish';
import * as navigation from '../.';

//Page
import loginPage from '../../pages/loginLogout/login';

//Page Object ID
const LOGIN = loginPage.getId();

class PostalAddressNomineesNavigation extends AbstractGlomoNavigation {
    constructor(){
        super({page: 'postalAddressNominees/postalAddressNominees', parentNavigation: 'login'});
    }

    async go_impl() {
        switch (currentPage.getId()){
            case LOGIN:
                await loginPage.login();
                if (Commands.flags.isMobile) {
                    await currentPage.changeContext({context: 'WEBVIEW'});
                    await navigation.welcomeExperience.assert();
                    await this.go_impl();
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PostalAddressNomineesNavigation();
