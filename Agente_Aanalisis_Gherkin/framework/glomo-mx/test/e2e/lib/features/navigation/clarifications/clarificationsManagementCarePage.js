import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import movementsDetail from '../../pages/productDetails/movementsDetail';
import accountTransactionDetail from '../../pages/productDetails/accountTransactionDetail';

const MOVEMENTS_DETAIL = movementsDetail.getId();
const ACCOUNT_TRANSACTION_DETAIL = accountTransactionDetail.getId();

class ClarificationsManagementCarePage extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'clarifications/clarificationsManagementCarePage', parentNavigation: 'card/movementsDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case MOVEMENTS_DETAIL:
                await movementsDetail.accessClarificationsCare();
                break;
            case ACCOUNT_TRANSACTION_DETAIL:
                await accountTransactionDetail.accessClarificationsCare();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ClarificationsManagementCarePage();
