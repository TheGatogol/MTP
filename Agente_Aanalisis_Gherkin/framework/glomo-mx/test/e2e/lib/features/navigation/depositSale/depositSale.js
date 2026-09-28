import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import depositDetailPage from '../../pages/depositConfiguration/depositDetail';

// Page Objects IDs
const DEPOSITDETAIL = depositDetailPage.getId();

class DepositSale extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'depositSale/depositSale', parentNavigation: 'depositConfiguration/depositDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DEPOSITDETAIL:
                await depositDetailPage.selectConfiguration();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DepositSale();
