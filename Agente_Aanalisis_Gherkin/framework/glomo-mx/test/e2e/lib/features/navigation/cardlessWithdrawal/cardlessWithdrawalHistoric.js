import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import sidebarPage from '../../pages/sidebar/sideBar';

// Page Objects IDs
const SIDEBAR = sidebarPage.getId();

class CardlessWithdrawalHistoric extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'cardlessWithdrawal/cardlessWithdrawalHistoric', parentNavigation: 'sidebar'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SIDEBAR:
                await sidebarPage.access({functionality: 'cardless withdrawal historic'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new CardlessWithdrawalHistoric();
