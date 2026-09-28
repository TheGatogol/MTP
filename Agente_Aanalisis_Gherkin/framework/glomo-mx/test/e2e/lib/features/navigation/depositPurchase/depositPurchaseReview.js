import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import depositPurchasePage from '../../pages/depositPurchase/depositPurchase';

// Page Objects IDs
const DEPOSITPURCHASE = depositPurchasePage.getId();

class DepositPurchaseReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'depositPurchase/depositPurchaseReview', parentNavigation: 'depositPurchase/depositPurchase'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DEPOSITPURCHASE:
                await depositPurchasePage.fillOtp();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DepositPurchaseReview();

