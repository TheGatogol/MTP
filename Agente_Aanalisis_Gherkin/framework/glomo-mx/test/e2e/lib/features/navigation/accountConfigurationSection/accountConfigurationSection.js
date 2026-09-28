import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {Commands, NotPathNavigationError} from '@csqe/radish';
import dashboard from '../../pages/dashboard/dashboard';

//pages
const DASHBOARD = dashboard.getId();

class AccountConfigurationSection extends AbstractGlomoNavigation{

    constructor(){ super({page:'accountConfiguration/accountConfiguration', parentNavigation:'dashboard'}); }
    async go_impl(){
        switch(currentPage.getId()){
            case DASHBOARD:
                await Commands.url({uri:'/#!/magic-log'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new AccountConfigurationSection();
