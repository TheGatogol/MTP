import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import operativesPage from '../../pages/operationals/operationals';

// Page Objects IDs
const OPERATIVES_PAGE = operativesPage.getId();

class BillPaymentsHome extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'billPaymentsHome/billPaymentsHome', parentNavigation: 'selectOperations/selectOperations'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case OPERATIVES_PAGE:
                await operativesPage.accessToOperative({operative: 'billPayments'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BillPaymentsHome();
