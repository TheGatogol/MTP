import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import billPaymentsStep2 from '../../../pages/billPayments/productDetail/billPaymentsStep2';

// Page Objects IDs
const BILL_PAYMENTS_STEP2 = billPaymentsStep2.getId();

class BillPaymentsStep3 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'billPayments/productDetail/billPaymentsStep3', parentNavigation: 'billPayments/productDetail/billPaymentsStep2'});
    }

    async go_impl(params) {
        const isStoredService = params?.isStoredService !== undefined ? params.isStoredService : params ? params : false;
        const amount = params?.amount || '100';
        switch (currentPage.getId()) {
            case BILL_PAYMENTS_STEP2:
                await billPaymentsStep2.acceptAmount(amount, isStoredService);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BillPaymentsStep3();
