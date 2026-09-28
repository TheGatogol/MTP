import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import financeTransactionMultipurchase from '../../pages/financeTransactionMultipurchase/financeTransactionMultipurchase';

const FINANCE_MULTIPURCHASE = financeTransactionMultipurchase.getId();

class FinanceTransactionMultipurchase extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'financeTransactionMultipurchase/multipurchaseReceipt', parentNavigation: 'financeTransactionMultipurchase/financeTransactionMultipurchase'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FINANCE_MULTIPURCHASE:
                await financeTransactionMultipurchase.confirmSimulation();
                await financeTransactionMultipurchase.otpSms();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FinanceTransactionMultipurchase();
