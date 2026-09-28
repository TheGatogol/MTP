import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError, Commands} from '@csqe/radish';

// Pages
import equityPage from '../../pages/equity/equityPage';

// Page Objects IDs
const EQUITY = equityPage.getId();

class EquityDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'equity/equityDetailPage', parentNavigation: 'equity/equity'});
    }

    async go_impl({error} = {}) {
        switch (currentPage.getId()) {
            case EQUITY:
                if(error){
                    await Commands.url({uri: '/#!/equity/id/more-info'});
                } else {
                    await equityPage.accessToMoreInfoPage();
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new EquityDetail();
