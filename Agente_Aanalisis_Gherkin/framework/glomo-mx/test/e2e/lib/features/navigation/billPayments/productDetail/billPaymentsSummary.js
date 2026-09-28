import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import billPaymentsStep3 from '../../../pages/billPayments/productDetail/billPaymentsStep3';
import dashboardPage from '../../../pages/dashboard/dashboard';

// Page Objects IDs
const BILL_PAYMENTS_STEP3 = billPaymentsStep3.getId();
const DASHBOARD = dashboardPage.getId();

class BillPaymentsSummary extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'billPayments/productDetail/billPaymentsSummary', parentNavigation: 'billPayments/productDetail/billPaymentsStep3'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case BILL_PAYMENTS_STEP3:
                await billPaymentsStep3.acceptConcept();
                break;
            case DASHBOARD:
                await dashboardPage.accessFrequentServicePayment();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BillPaymentsSummary();
