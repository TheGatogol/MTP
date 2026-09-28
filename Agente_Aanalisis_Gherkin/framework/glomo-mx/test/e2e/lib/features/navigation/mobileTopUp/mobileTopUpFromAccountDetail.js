import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import accountsOtherOperativesPage from '../../pages/operatives/accountsOtherOperativesPage';

// Page Objects IDs
const ACCOUNTS_OTHER_OPERATIVES = accountsOtherOperativesPage.getId();

class MobileTopUpFromAccountDetail extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'operationals/topUp', parentNavigation: 'account/productDetail' });
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNTS_OTHER_OPERATIVES:
                await accountsOtherOperativesPage.openBuyAire();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new MobileTopUpFromAccountDetail();
