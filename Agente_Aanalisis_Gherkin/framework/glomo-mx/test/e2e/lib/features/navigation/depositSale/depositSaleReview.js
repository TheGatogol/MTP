import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import depositSalePage from '../../pages/depositSale/depositSale';

// Page Objects IDs
const DEPOSITSALE = depositSalePage.getId();

class DepositSaleReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'depositSale/depositSaleReview', parentNavigation: 'depositSale/depositSale'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DEPOSITSALE:
                await depositSalePage.fillOtp();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DepositSaleReview();
