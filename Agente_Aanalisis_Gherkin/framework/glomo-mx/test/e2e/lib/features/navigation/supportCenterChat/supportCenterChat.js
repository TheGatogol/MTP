import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

//Page
import login from '../../pages/loginLogout/login';

//Page Object ID
const LOGIN = login.getId();

class SupportCenterChat extends AbstractGlomoNavigation{

    constructor(){
        super({page: 'supportCenterChat/supportCenterChat', parentNavigation: 'login'});
    }

    async go_impl(){
        switch (currentPage.getId()){
            case LOGIN:
                await login.login();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new SupportCenterChat();
