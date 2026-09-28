import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import pocketDetail from '../../pages/productDetails/pockets/pocketDetail';

// Page Objects IDs
const POCKET_DETAIL_SCREEN = pocketDetail.getId();

class WithdrawalMoney extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/pockets/pocketsWithdrawal', parentNavigation: 'pockets/pocketDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case POCKET_DETAIL_SCREEN:
                await pocketDetail.goToWithdrawOperation();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new WithdrawalMoney();
